var async_max=2;//the hardest we will ever concurrently hit freebase
var host='https://www.googleapis.com/freebase/v1/';

var request = require('request');
var async = require('async');
var _ =require('underscore');
var singularize=require('./lib/inflector').singularize;
var sentence=require('./lib/sentence_tokenizer').sentenceparser;

var grammars=require('./data/grammars').grammars;
var plural_types=require('./data/plurals').plurals;
var related_properties=require('./data/related_properties').related;
var properties=require('./data/properties').properties;
var metaschema=require('./data/metaschema').metaschema;

//main methods to freebase apis

//AIzaSyD5GmnQC7oW9GJIWPGsJUojspMMuPusAxI

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
      var url= host+'topic'+id+'?';
      if(options.filter){url+='&filter='+encodeURIComponent(options.filter)}
      if(options.key){url+='&key='+options.key}
      http(url, function(result){
        callback(result)
      })
    })
}

//regular search api
exports.search=function(q, options, callback){
      callback=callback||console.log;
      if(!q && !options.filter){return callback([])}
      options=options||{};
       //is it an array of sub-tasks?
      if(_.isArray(q) && q.length>1){
        return doit_async(q, exports.search, options, callback)
      }
      options.query=q || '';
      options.filter=encodeURIComponent(options.filter)
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
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.lookup, options, callback)
  }
  options.type=options.type||"/common/topic";
  var url= host+'search?limit=2&lang=en&type='+options.type+'&filter=';
  url+=encodeURIComponent('(any name{full}:"'+q+'" alias{full}:"'+q+'")');
  if(options.key){
    url+='&key='+options.key;
  }
  http(url, function(result){
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
    var kill=["/music/track","/music/release_track", "/tv/tv_episode", "/music/recording", "/music/composition", "/book/book_edition"]
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
  if(!query){return callback([])}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(query) && query.length>1){
    return doit_async(query, exports.paginate, options, callback)
  }
 // if(_.isObject(query)){query=[query]}
  //query[0].limit=query[0].limit||170  //force a safe but efficient lookup
  var data=[];
  //recursive mqlread until cursor is false, or maximum reached
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
var natural = require('natural'),
nounInflector = new natural.NounInflector();

var q=[{
  type:'/medicine/drug_class',
  mid:null,
  name:null
}]
exports.paginate(q,{},function(r){
  r.map(function(v){
    if(!v.name.match(/s$/) && !v.name.match(/[0-9]/)){
      var plural=nounInflector.pluralize(v.name);
      var id=v.id||v.mid;
      console.log(id+"\t"+v.name+"\t"+plural)
    }
  })
})


///////////////////////////sugar methods

//get the proper pronoun to use for a topic eg. he/she/they/it
exports.pronoun=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.pronoun, options, callback)
  }
   get_id(q, options, function(id){
     if(!id){return callback("")}
     var query=[{
        "id":   id,
        "name": null,
        "type": [],
        "/people/person/gender": [{
          "id":       null,
          "optional": true
        }],
        "/fictional_universe/fictional_character/gender": [{
          "id":       null,
          "optional": true
        }]
      }]
    exports.mqlread(query, options, function(result){
      if(!result || !result.result || !result.result[0]){return callback('')}
      result=result.result[0];
    console.log(result)
      //he/she
      var gender=result["/people/person/gender"][0];
      if(gender && gender.id=="/en/male"){
        return callback("he")
      }
      if(gender && gender.id=="/en/female"){
        return callback("she")
      }
      //fictional gender
      var gender=result["/fictional_universe/fictional_character/gender"][0];
      if(gender && gender.id=="/en/male"){
        return callback("he")
      }
      if(gender && gender.id=="/en/female"){
        return callback("she")
      }
      //no gender person
      if(isin('/people/person',result.type )){
        return callback("they")
      }
      //plural group, they
      if(_.intersection(plural_types, result.type).length >0){
        return callback("they")
      }
      return callback("it");
    })
  })
}


//turns a url into a freebase topic and list its same:as links
exports.same_as_links=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  options.filter=options.filter||"/common/topic"
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.same_as_links, options, callback)
  }
  var url= host+'search?type=/common/topic&limit=1&query='+encodeURIComponent(q);
  if(options.key){
    url+='&key='+options.key;
  }
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
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.translate, options, callback)
  }
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
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.wikipedia_link, options, callback)
  }
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

//get a url for image href of on this topic
exports.image=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  options.maxheight=options.maxheight||250;
  options.maxwidth=options.maxwidth||250;
  options.errorid=options.errorid||"/m/0djw4wd"
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.image, options, callback)
  }
   get_id(q, options, function(id){
     if(!id){return callback("")}
     var query=[{
        "id":   id,
        "name": null,
        "/common/topic/image": [{
          "id":     null
        }]
      }]
    exports.mqlread(query, options, function(result){
      if(!result || !result.result || !result.result[0] || !result.result[0]["/common/topic/image"][0] ){
        return callback('')
      }
      var url='http://www.freebase.com/api/trans/image_thumb'+result.result[0]["/common/topic/image"][0].id;
      var params=set_params(options);
      url+='?'+params;
      return callback(url)
    })
  })
}


//get a text blurb from freebase
exports.description=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.description, options, callback)
  }
 get_id(q, options, function(id){
  if(!id){return callback("")}
  var url= host+'text/'+id;
  if(options.key){
    url+='?key='+options.key;
  }
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
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.notable, options, callback)
  }
 exports.topic(q, {filter:"/common/topic/notable_types"}, function(result){
  if(!result || !result.property || !result.property['/common/topic/notable_types']){return callback({})}
  var notable=result.property['/common/topic/notable_types'] || {values:[]};
  return callback(notable.values[0])
 });
}

//get the first sentence of a topic description
exports.sentence=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.sentence, options, callback)
  }
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
  options.max=options.max || 5000;
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.list, options, callback)
  }
  //singularize it if it's a search query
  if(!q.match(/\/.{1,12}\/.{3}/)){
    q=singularize(q);
  }
  //get its id
  get_id(q, {type:"/type/type"}, function(id){
    if(!id){return callback([])}
    query=[{"type":id,"name":null, "mid":null, limit:100}]
    exports.paginate(query, options, callback)
   })
}

//get any incoming data to this topic, //ignoring cvt types
exports.incoming=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.incoming, options, callback)
  }
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
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.outgoing, options, callback)
  }
  exports.lookup(q, options, function(topic){
    if(!topic || !topic.mid){return callback([])}
      exports.topic(topic.mid, options, function(result){
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
        //add sentence-forms
        out=out.map(function(o){
          var property=o.property;
          if(_.isArray(o.property)){
            property=o.property.join('');
          }
          var grammar=grammars.filter(function(v){return v.property==property})[0]||{}
          if(grammar["sentence form"] && topic.name && o.name){
            o.sentence=grammar["sentence form"].replace(/\bsubj\b/, topic.name).replace(/\bobj\b/, o.name);
          }
          return o
        })
        callback(out)
      })
    })
}


//return all outgoing and incoming links for a topic
exports.graph=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.graph, options, callback)
  }
  get_id(q, options, function(id){
      if(!id){return callback({})}
      var all={incoming:null, outgoing:null, id:id}
      exports.incoming(id, options, function(result){
        all.incoming=result;
        if(all.incoming&&all.outgoing){return callback(all)}
      })
      exports.outgoing(id, options, function(result){
        all.outgoing=result;
        if(all.incoming&&all.outgoing){return callback(all)}
      })
  })
}


//get similar topics to a topic
exports.related=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback([])}
  options=options||{};
  options.max=options.max||25;
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.related, options, callback)
  }
  var all=[];
  //pluck relevant connected topics from outgoing links
  exports.outgoing(q, options, function(result){
    all=result.filter(function(v){
      return isin(v.property, related_properties)
    })
    //randomize the results
    all=all.sort(function(a,b){return (Math.round(Math.random())-0.5);})
    all=json_unique(all, "id")
    if(all.length >= options.max){
      return callback(all)
    }
    //else, append topics that share the notable type
    exports.notable(q, options, function(result){
      if(result && result.id){
        exports.list(result.id, {limit:options.max}, function(r){
          all=all.concat(r.result)
          all=json_unique(all, "id")
          all=all.sort(function(a,b){return (Math.round(Math.random())-0.5);})
          return callback(all)
        })
      }
      return callback(all)
    })
  })
}


exports.question=function(q, property, options, callback){
  callback=callback||console.log;
  if(!q || !property){return callback([])}
  options=options||{};
  options.max=options.max||25;
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.question, options, callback)
  }
  var candidate_metaschema=metaschema_lookup(property);
  if(candidate_metaschema){
    options.filter='(all '+candidate_metaschema+':"'+q+'")'
    exports.search('', options, function(result){
      return callback(result)
    })
  }else{
    var candidate_properties=property_lookup(property);
    if(candidate_properties.length==0){return callback([])}
     //look for these properties in the topic api
    exports.topic(q, options, function(result){
      var all=[];
      candidate_properties.forEach(function(p){
        if(result.property[p.id]){
         all=all.concat(result.property[p.id].values)
        }
      })
      all=json_unique(all, "id")
      return callback(all)
    })
  }
}
// exports.question("keanu reeves", "children")
// exports.question("keanu reeves", "acted by")

//
exports.gallery=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback([])}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.gallery, options, callback)
  }

}

///////////////////////////helper functions
/////////////////////////


//lookup property matches offline..
function property_lookup(property){
  property=property.toLowerCase();
  property=property.replace(/  /,' ');
  property=property.replace(/^\s+|\s+$/, '');
  var property_singular=singularize(property);
  var candidate_properties=properties.filter(function(v){
    return v.id==property || v.name==property || v.name==property_singular
  })
  return candidate_properties;
}

//lookup metaschema predicate matches offline..
function metaschema_lookup(property){
  property=property.toLowerCase();
  property=property.replace(/\W(is|was|are|will be|has been)\W/,' ')
  property=property.replace(/  /g,' ');
  //property=property.replace(/_/g,' ');
  property=property.replace(/^\s+|\s+$/, '');
  var candidate_properties=metaschema.filter(function(v){
    v.aliases=v.aliases||[]
    return v.id==property || v.name.toLowerCase()==property || isin(property, v.aliases) || v.search_filter_operand.replace(/_/g,' ')==property
  })[0]
  candidate_properties=candidate_properties||{}
  return candidate_properties.search_filter_operand;
}
//console.log(metaschema_lookup('built with'))


//slightly different lookup when its a url
function url_lookup(q, options, callback){
  var url= host+'search?type=/common/topic&limit=1&query='+encodeURIComponent(q);
  if(options.key){
    url+='&key='+options.key;
  }
  http(url, function(result){
    callback(result)
  })
}

//flexible handling of queries like ids, terms, or urls
function get_id(q, options, callback){
  //if its a freebase-type object
  if(_.isObject(q)){
    q=q.id||q.mid||q.name;
   }
  //is an id
  if(!q || (q.match(/\/.{1,12}\/.{3}/) !=null)){return callback(q)}
  //is a url
  if(q.match(/^(https?:\/\/|www\.)/)){
      return url_lookup(q, options, function(result){
        if(result && result.result && result.result[0]){
          return callback(result.result[0].mid)
        }
        return callback(null)
      })
    }
      //is a normal search
      exports.lookup(q, options, function(result){
        if(result && result.mid){
          var id=result.id || result.mid;
          return callback(id)
        }
        return callback(null)
      })
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


//  quote a unicode string to turn it into a valid mql /type/key/value
exports.mql_encode=function(s) {
        if(!s){return ''}
        s=s.replace(/  /,' ');
        s=s.replace(/^\s+|\s+$/, '');
        s=s.replace(/ /g,'_');
        var mqlkey_start = 'A-Za-z0-9';
        var mqlkey_char = 'A-Za-z0-9_-';
        var MQLKEY_VALID = new RegExp('^[' + mqlkey_start + '][' + mqlkey_char + ']*$');
        var MQLKEY_CHAR_MUSTQUOTE = new RegExp('([^' + mqlkey_char + '])', 'g');
        if (MQLKEY_VALID.exec(s)) // fastpath
        return s;
        var convert = function(a, b) {
                var hex = b.charCodeAt(0).toString(16).toUpperCase();
                if (hex.length == 2) hex = '00' + hex;
                if (hex.length == 3) hex = '0' + hex;
                return '$' + hex;
            };
        x = s.replace(MQLKEY_CHAR_MUSTQUOTE, convert);
        if (x.charAt(0) == '-' || x.charAt(0) == '_') {
            x = convert(x, x.charAt(0)) + x.substr(1);
        }
        return x;
    }


 //remove objects with a duplicate field from json
 function json_unique(x, field) {
   var newArray=new Array();
    label:for(var i=0; i<x.length;i++ ){
      for(var j=0; j<newArray.length;j++ ){
          if(newArray[j][field]==x[i][field])
          continue label;
        }
        newArray[newArray.length] = x[i];
      }
    return newArray;
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

