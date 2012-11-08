var request = require('request');
var API_KEY='';//this is needed for heavy stuff


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
  var url='https://www.googleapis.com/freebase/v1/topic'+q+'?filter='+encodeURIComponent(filter);
  http(url, function(result){
    callback(result)
  })
}

//turn a string into a confident topic id
exports.lookup=function(q, options, callback){
  options=options||{}
  options.type=options.type||"/common/topic";
  var url='https://www.googleapis.com/freebase/v1/search?limit=2&lang=en&type='+options.type+'&filter='
  var filter=encodeURIComponent('(any name{full}:"'+q+'" alias{full}:"'+q+'")')
  http(url+filter, function(result){
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


//turns a url into a freebase topic and list its same:as links
exports.same_as_links=function(q, callback){
  if(!q){return callback({})}
  var url='https://www.googleapis.com/freebase/v1/search?type=/common/topic&limit=1&query='+encodeURIComponent(q)
  http(url, function(result){
    if(!result || !result.result || !result.result[0]){
      return callback({})
    }
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
      console.log(JSON.stringify(obj, null, 2))
    })
  })
}




//return specific language title for a topic
exports.translate=function(q, lang, callback){

}

//
exports.wikipedia_link=function(query, options, callback){

}


///////////////////////////helper functions

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
  if(!q || (q.match(/\/.{1,5}\/.{3}/) !=null)){return callback(q)}
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
          return callback(result.mid)
        }
        return callback(null)
      })
  }
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


// exports.lookup("tom green", {},
//          function(r){console.log(JSON.stringify(r, null, 2));}  ///m/017yxq
//        )


// exports.same_as_links("toronto", console.log)
// exports.same_as_links("http://www.geonames.org/6167865/", console.log)
// exports.same_as_links("/m/0h7h6", console.log)


// exports.lookup("http://myspace.com/u2", {},
//          function(r){console.log(JSON.stringify(r, null, 2));}  ///m/017yxq
//        )


// query=[{ "type": "/music/album", "id": "/en/keep_it_turned_on", "artist" : null}]
// exports.mqlread(query,{},console.log)