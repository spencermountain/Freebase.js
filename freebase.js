var API_KEY='';//this is needed for heavy stuff


var request = require('request');
var singularize=require('./singularize').singularize;
var sentence=require('./sentence').sentenceparser;


//main methods to freebase apis

//interface to freebase's mql api
exports.mqlread=function(query, options, callback){
  if(!query){return callback({})}
  options=options||{}
  options.uniqueness_failure=options.uniqueness_failure||"soft"
  options.cursor=options.cursor||""
  var params=set_params(options)
  var url='https://www.googleapis.com/freebase/v1/mqlread?query='+encodeURIComponent(JSON.stringify(query))+'&'+params;
  http(url, function(result){
    callback(result)
  })
}

//topic api
exports.topic=function(q, filter, callback){
    if(!q){return callback({})}
    get_id(q, {}, function(id){
      var url='https://www.googleapis.com/freebase/v1/topic'+id;
      if(filter){url+='?filter='+encodeURIComponent(filter)}
      http(url, function(result){
        callback(result)
      })
    })
}

//turn a string into a confident topic id
exports.lookup=function(q, options, callback){
  options=options||{}
  options.type=options.type||"/common/topic";
  var url='https://www.googleapis.com/freebase/v1/search?limit=2&lang=en&type='+options.type+'&filter='
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
  if(!query){return callback({})}
  options=options||{}
  query[0].limit=query[0].limit||170//force a safe but efficient lookup
  var data=[];
  //recursive mqlread until cursor is false
  iterate('')
  function iterate(cursor){
    options.cursor=cursor
    exports.mqlread(query, options, function(result){
      console.log(data.length)
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
exports.same_as_links=function(q, callback){
  if(!q){return callback({})}
  var url='https://www.googleapis.com/freebase/v1/search?type=/common/topic&limit=1&query='+encodeURIComponent(q)
  http(url, function(result){
    if(!result || !result.result || !result.result[0]){
      return callback({})
    }
      //get its formatted links from the topic api
    exports.topic(result.result[0].mid , "/common/topic", function(data){
      var links=[];
      //same-asy ones
      if(data.property['/common/topic/topic_equivalent_webpage']){
       links=data.property['/common/topic/topic_equivalent_webpage'].values.map(function(v){
          return {href:v.value, title:parseurl(v.value).authority}
        })
      }
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
exports.translate=function(q, lang, callback){
  if(!lang || !q){return callback('')}
    lang='/lang/'+lang;
    get_id(q, {}, function(id){
    if(!id){return callback("")}
    var query=[{
      "id": id,
      "name": [{
        "lang":  lang,
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



//
exports.wikipedia_link=function(query, options, callback){

}

//get a text blurb from freebase
exports.description=function(q, options, callback){
 if(!q){return callback("")}
 get_id(q, options, function(id){
  if(!id){return callback("")}
  var url='https://www.googleapis.com/freebase/v1/text/'+id;
  http(url,function(result){
    if(!result.result){return callback('')}
    callback(result.result)
  })
 });
}


//get the first sentence of a topic description
exports.sentence=function(q, options, callback){
  if(!q){return callback("")}
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
  if(!q){return callback([])}
    options=options||{}
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

//return all outgoing links for a topic, traversing cvt types
exports.graph=function(q, options, callback){
  exports.topic(q, '', function(result){
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
  var url='https://www.googleapis.com/freebase/v1/search?type=/common/topic&limit=1&query='+encodeURIComponent(q)
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


//properties that don't feel graphy
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
   request({
        uri: url
    }, function(error, response, body) {
        try{
          body=JSON.parse(body)
        }catch(e){console.log(e)}
        if (error || response.statusCode != 200 ) {
              console.log('----error----');
              console.log(body);
              return callback([])
              }
        return callback(body);
    })
}

//turn options object into get paramaters
function set_params(options){
  if(!options){return ''}
  return Object.keys(options).map(function(v){return v+'='+options[v]}).join('&')
}

//get_id("thom yorke", {}, console.log)   // /m/01p0w_
//get_id('http://toronto.ca', {}, console.log)

// exports.lookup("tom green", {}, console.log})  ///m/017yxq

// exports.same_as_links("toronto", console.log)
// exports.same_as_links("http://www.geonames.org/6167865/", console.log)
// exports.same_as_links("/m/0h7h6", console.log)


// exports.lookup("http://myspace.com/u2", console.log})


// query=[{ "type": "/music/album", "id": "/en/keep_it_turned_on", "artist" : null}]
// exports.mqlread(query,{},console.log)

//exports.graph("ubuntu",'',console.log)

// query=[{"type":"/base/disaster2/tornado","name":null}]
// exports.paginate(query, {max:100}, console.log)


//exports.list("earthquakes", {}, console.log)


// exports.description("mike myers", {}, console.log)
// exports.description("http://myspace.com/u2", {}, console.log)

//exports.sentence("thom yorke",{},console.log)

//exports.translate("toronto","zh",console.log)//多伦多
//exports.translate("radiohead","ko",console.log)//라디오헤드