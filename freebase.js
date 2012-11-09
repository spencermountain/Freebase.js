var API_KEY='';//this is needed for heavy stuff
var async_max=2;//the hardest we will concurrently hit freebase
var host='https://www.googleapis.com/freebase/v1/';

var request = require('request');
var singularize=require('./singularize').singularize;
var sentence=require('./sentence').sentenceparser;
var async = require('async');
var _=require('underscore');

//main methods to freebase apis

//interface to freebase's mql api
exports.mqlread=function(query, options, callback){
  callback=callback||console.log;
  if(!query){return callback({})}
  options=options||{};
  options.uniqueness_failure=options.uniqueness_failure||"soft";
  options.cursor=options.cursor||"";
    //is it an array of sub-queries?
  if(_.isArray(query) && query.length>1){
    return doit_async(query, exports.mqlread, options, callback)
  }
  var params=set_params(options)
  var url= host+'mqlread?query='+encodeURIComponent(JSON.stringify(query))+'&'+params;
  http(url, function(result){
    callback(result)
  })
}

//topic api
exports.topic=function(q, options, callback){
    callback=callback||console.log;
    if(!q){return callback({})}
    options=options||{};
     //is it an array of sub-tasks?
    if(_.isArray(q) && q.length>1){
      return doit_async(q, exports.topic, options, callback)
    }
    get_id(q, options, function(id){
      if(!id){return callback({})}
      var url= host+'topic'+id;
      if(options.filter){url+='?filter='+encodeURIComponent(options.filter)}
      http(url, function(result){
        callback(result)
      })
    })
}
//exports.topic("marvin gaye",{},console.log)

//regular search api
exports.search=function(q, options, callback){
      callback=callback||console.log;
      if(!q){return callback({})}
      options=options||{};
      options.query=q;
      var params=set_params(options)
      var url= host+'search/?'+params;
      http(url, function(result){
        if(!result || !result.result || !result.result[0] ){return callback([])}
        callback(result.result)
    })
}


//turn a string into a confident topic id
exports.lookup=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  options.type=options.type||"/common/topic";
  var url= host+'search?limit=2&lang=en&type='+options.type+'&filter='
  var filter=encodeURIComponent('(any name{full}:"'+q+'" alias{full}:"'+q+'")')
  http(url+filter, function(result){
    if(!result || !result.result || !result.result[0] ){return callback([])}
    //filter-out shit results
    result=result.result||[]
    result[0]=result[0]||{}
    result[1]=result[1]||{}
    //kill low-relevance
    if( !result[0].score && result[0].score<30){
      console.log("is ambiguous at " + ((result[0].score||0) * 0.7))
      return callback({})
    }
    //kill if 2nd result is also notable
    if(! ((result[0].score||0) * 0.7) > (result[1].score||0) ){
      console.log("is ambiguous at " + ((result[0].score||0) * 0.7))
      return callback({})
    }
    //kill if types are crap
    var kill=["/music/track", "/tv/tv_episode", "/music/recording", "/music/composition"]
    if(result[0].notable && isin( result[0].notable.id, kill)){
      console.log("ugly type")
      return callback({})
    }
    return callback(result[0])
  })
}

//get all of the results to your query
exports.paginate=function(query, options, callback){
  callback=callback||console.log;
  if(!query){return callback({})}
  options=options||{};
  //query[0].limit=query[0].limit||170  //force a safe but efficient lookup
  var data=[];
  //recursive mqlread until cursor is false
  iterate('')
  function iterate(cursor){
    options.cursor=cursor
    exports.mqlread(query, options, function(result){
      data=data.concat(result.result)
      if(result.cursor && (!options.max || data.length<options.max) ){
        iterate(result.cursor)
      }else{
        callback(data)
      }
    })
  }
}



///////////////////////////sugar methods


//turns a url into a freebase topic and list its same:as links
exports.same_as_links=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  options.filter=options.filter||"/common/topic"

  var url= host+'search?type=/common/topic&limit=1&query='+encodeURIComponent(q)
  http(url, function(result){
    if(!result || !result.result || !result.result[0]){
      return callback({})
    }
      //get its formatted links from the topic api
    exports.topic(result.result[0].mid , options, function(data){
      var links=[];
      //same-as ones
      if(data.property['/common/topic/topic_equivalent_webpage']){
       links=data.property['/common/topic/topic_equivalent_webpage'].values.map(function(v){
          return {href:v.value, title:parseurl(v.value).authority}
        })
      }
      //webpage ones
      if(data.property['/common/topic/topical_webpage']){
       links=links.concat(data.property['/common/topic/topical_webpage'].values.map(function(v){
          var host=parseurl(v.value).authority || ''
          return {href:v.value, title:host.replace(/^www\./,'')}
        }))
      }
      var obj={topic:result.result[0], links:links}
      return callback(obj)
    })
  })
}

//return specific language title for a topic
exports.translate=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};

  if(!options.lang){options.lang="/lang/fr"}//defaulting to french is better than an error..?
  if(!options.lang.match(/\/lang\//)){
    options.lang='/lang/'+options.lang
  }
    get_id(q, options, function(id){
    if(!id){return callback("")}
    var query=[{
      "id": id,
      "name": [{
        "lang":  options.lang,
        "value": null
      }]
    }]
    exports.mqlread(query, {}, function(result){
      if(!result || !result.result || !result.result[0]){return callback('')}
      var name=result.result[0].name||[{}]
      name=name[0].value||'';
      callback(name)
    })
  })
}



//get a url for wikipedia based on this topic
exports.wikipedia_link=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};

   get_id(q, options, function(id){
     if(!id){return callback("")}
     var query=[{
        "id":   id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value":     null
        }
      }]
    exports.mqlread(query, options, function(result){
      if(!result || !result.result || !result.result[0]){return callback('')}
      return callback('http://en.wikipedia.org/wiki/'+result.result[0].key.value)
    })
  })
}

//get a text blurb from freebase
exports.description=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};

 get_id(q, options, function(id){
  if(!id){return callback("")}
  var url= host+'text/'+id;
  http(url,function(result){
    if(!result.result){return callback('')}
    callback(result.result)
  })
 });
}

//get a topics notable type
exports.notable=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};

 exports.topic(q, {filter:"/common/topic/notable_for"}, function(result){
  if(!result || !result.property || !result.property['/common/topic/notable_for']){return callback({})}
  var notable=result.property['/common/topic/notable_for'] || {values:[]};
  return callback(notable.values[0])
 });
}

//get the first sentence of a topic description
exports.sentence=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};

  exports.description(q, options, function(desc){
    if(!desc){return callback("")}
    desc=sentence(desc)||[]
    desc=desc[0]||''
    desc=desc.replace(/\(.*?\)/g,'')//remove birthdates
    desc=desc.replace(/  /g,' ')
    callback(desc)
  })
}

//get a list of topics in a type
exports.list=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  options.max=options.max || 500;

  //singularize it if it's a search query
  if(!q.match(/\/.{1,12}\/.{3}/)){
    q=singularize(q);
  }
  //get its id
  get_id(q, {type:"/type/type"}, function(id){
    if(!id){return callback([])}
    query=[{"type":id,"name":null, "id":null}]
    exports.paginate(query, options, callback)
   })
}


//get any incoming data to this topic, //ignoring cvt types
exports.incoming=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};

  get_id(q, options, function(id){
    if(!id){return callback([])}
    var query=[{
      "id": id,
      "/type/reflect/any_reverse": [{
        "link": null,
        "id":   null,
        "name": null,
        "type": "/common/topic",
        "limit":170
      }]
    }]
    //this technically doesn't paginate.
    exports.paginate(query, options, function(result){
      if(!result || !result[0] || !result[0]['/type/reflect/any_reverse']){
        return callback([])
      }
      return callback(result[0]['/type/reflect/any_reverse'])
    })
  })
}

//return all outgoing links for a topic, traversing cvt types
exports.outgoing=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};

  exports.topic(q, {}, function(result){
    var out=[];
      //get rid of permissions and stuff..
    result.property=kill_boring(result.property)
    Object.keys(result.property).forEach(function(key){
      var v=result.property[key];

      //add topics
      if(v.valuetype=="object"){
        v.values=v.values.map(function(s){s.property=key; return s})
        out=out.concat(v.values)
      }
      //add the topics from cvt values in the same manner
      if(v.valuetype=="compound"){
        v.values.forEach(function(c){
          c.property=kill_boring(c.property);
          Object.keys(c.property).forEach(function(key2){
           if(c.property[key2].valuetype=="object"){
            c.property[key2].values=c.property[key2].values.map(function(s){s.property=[key,key2]; return s})
            out=out.concat(c.property[key2].values)
           }
          })
        })
      }
    })
    out=out.map(function(o){return {name:o.text, id:o.id, property:o.property }})
    out=out.map(function(v){
      return v.name;
    });
    callback(out)
  })
}






///////////////////////////helper functions
/////////////////////////

//slightly different lookup when its a url
function url_lookup(q, callback){
  var url= host+'search?type=/common/topic&limit=1&query='+encodeURIComponent(q)
  http(url, function(result){
    callback(result)
  })
}

//flexible handling of queries like ids, terms, or urls
function get_id(q, options, callback){
  //is an id
  if(!q || (q.match(/\/.{1,12}\/.{3}/) !=null)){return callback(q)}
  //is a url
  if(q.match(/^(https?:\/\/|www\.)/)){
      return url_lookup(q, function(result){
        if(result && result.result && result.result[0]){
          return callback(result.result[0].mid)
        }
        return callback(null)
      })
    }
    else{
      //is a normal search
      exports.lookup(q, options, function(result){
        if(result && result.mid){
          var id=result.id || result.mid;
          return callback(id)
        }
        return callback(null)
      })
  }
}


//kill the freebase internal-properties that don't feel graphy
function kill_boring(obj){
  var boring=[
    "/type/object/attribution",
    "/type/object/key",
    "/type/object/mid",
    "/common/topic/notable_properties",
    "/type/object/guid",
    "/type/object/type",
    "/type/object/id",
    "/type/object/creator",
    "/type/object/timestamp",
    "/type/object/permission",
    "/common/topic/alias",
    "/common/topic/article",
    "/common/topic/image",
    "/common/topic/notable_for",
    "/common/topic/notable_types",
    "/common/topic/official_website",
    "/common/topic/topic_equivalent_webpage",
    "/common/topic/topical_webpage",
    "/travel/travel_destination_monthly_climate/month",
    "/location/religion_percentage/religion"
    ]
    boring.forEach(function(v){delete obj[v]})
    return obj
}


function isin(word,arr){
  return arr.some(function(v){return v==word})
}


function parseurl (str) {
  var  o   = {
      strictMode: false,
      key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
      q:   {
        name:   "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
      },
      parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
      }
    },
    m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
    uri = {},
    i   = 14;
  while (i--) uri[o.key[i]] = m[i] || "";
  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });
  return uri;
};

function http(url, callback){
   if(!url){return callback({error:"bad url"})}
   request({
        uri: url
    }, function(error, response, body) {
        try{
          body=JSON.parse(body)
        }catch(e){return callback({error:e})}
        if (error || response.statusCode != 200 ) {
              return callback({error:error})
              }
        return callback(body);
    })
}

//turn options object into get paramaters
function set_params(options){
  if(!options){return ''}
  return Object.keys(options).map(function(v){return v+'='+options[v]}).join('&')
}

//turn an array into smaller groups of arrays
  function groups_of(arr, group_length){
    var all=[]
    for(var i in arr){
      if(i%group_length==0){
        all.push([arr[i]])
      }else{
        all[all.length-1].push(arr[i])
      }
    }
    return all
    }


//handle rate-limited asynchronous freebase calls with a ending callback
function doit_async(arr, fn, options, done){
    //wrap them all in functions
  var function_list=arr.map(function(r){
      return function(callback){
              fn(r, options, function(r){
                callback(null, r);
              })
      }
    })
  //groups of async tasks in a synchonous task
  var all=groups_of(function_list, async_max).map(function(f_group){
    return function(callback){async.parallel(f_group, callback  );}
  })
  async.series(all, function(err, result){
    done(_.flatten(result))
  });
}

