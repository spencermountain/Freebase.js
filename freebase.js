var request = require('request');
    
  
  ////disambiguates query term
  function queryterm(term, query){
    if(term.match(/\/.{2,5}\/.{4}/)){//looks like an id
      query[0].id=term;
    }
    else{
    query[0].id=null;
    query[0].search={"query": term, "id": null, "score": null};
    }
    return query;
  }


exports.search=function(q, callback, query){
    var add=[{
       "search":{"query": q, "score": null},
       "name": null,
       "id":null,
       "limit": 10,
       "sort": "-search.score"
    }];
   
   if(!query){query=[{}];}
   for(var i in add[0]){
     query[0][i]=add[0][i];   
   }
   
   return exports.query_freebase(query, function(response){
     if(response.result && response.result[0]){
       callback(response.result);
     }
   }, {extended:true});
}





exports.get_description=function(q, callback, query){
    var add=[{
       "/common/topic/article": [{"text": {"chars": null, "maxlength": 500}}],
       "name": null,
       "id":null,
       "limit": 1
    }];
    add=queryterm(q, add);
   
   if(!query){query=[{}];}
   for(var i in add[0]){
     query[0][i]=add[0][i];   
   }
   
   return exports.query_freebase(query, function(response){
     if(response.result && response.result[0] && response.result[0]['/common/topic/article'][0] && response.result[0]['/common/topic/article'][0].text.chars){
       callback(response.result[0]['/common/topic/article'][0].text.chars);
     }
   }, {extended:true});
}


exports.get_image=function(q, callback, query, options){
    var add=[{
       "/common/topic/image": [{"id":null , "optional": "required"}],
       "name": null,
       "id":null,
       "limit": 1
    }];   
    add=queryterm(q, add);
    
   if(!query){query=[{}];}
   for(var i in add[0]){
     query[0][i]=add[0][i];   
   }
   
   return exports.query_freebase(query, function(response){
     if(response && response.result && response.result[0] && response.result[0]['/common/topic/image'] && response.result[0]['/common/topic/image'][0] ){
     var id=response.result[0]['/common/topic/image'][0].id;
     var image='http://www.freebase.com/api/trans/image_thumb'+id+'?errorid=/m/0djw4wd'
     if(options){
     if(options.height){
       image+='&maxheight='+options.height;
       } 
       if(options.width){
       image+='&maxwidth='+options.width;
       }
     }
     callback(image);
     }
   }, {extended:true});
}



exports.get_geolocation=function(q, callback, query){
    var add=[{
       "name": null,
       "id":null,
       "/location/location/geolocation": [{
        "/location/geocode/latitude":null,
        "/location/geocode/longitude":null
        }],
       "type":"/location/location",
       "limit": 1
    }];    
    add=queryterm(q, add);
   
   if(!query){query=[{}];}
   for(var i in add[0]){
     query[0][i]=add[0][i];   
   }
   
   return exports.query_freebase(query, function(response){
     if(response.result && response.result[0] && response.result[0] ){
     var geo=response.result[0]["/location/location/geolocation"];
     callback(geo);
     }
   }, {extended:true});
}

exports.get_wikipedia=function(q, callback, query){
    var add=[{
       "key":{"namespace":"/wikipedia/en_id", "value":null},
       "name": null,
       "id":null,
       "limit": 1
    }];    
    add=queryterm(q, add);
   
   if(!query){query=[{}];}
   for(var i in add[0]){
     query[0][i]=add[0][i];   
   }
   
   return exports.query_freebase(query, function(response){
     if(response.result && response.result[0] && response.result[0].key ){
     var id=response.result[0].key.value;
     var image='http://en.wikipedia.org/wiki/index.html?curid='+id;
     callback(image);
     }
   }, {extended:true});
}


exports.get_weblinks=function(q, callback, query){
    var add=[{
       "/common/topic/weblink":[{"url":null}],
       "name": null,
       "id":null,
       "limit": 1
    }];    
    add=queryterm(q, add);   
   if(!query){query=[{}];}
   for(var i in add[0]){
     query[0][i]=add[0][i];   
   }   
   return exports.query_freebase(query, function(response){
     if(response.result && response.result[0] && response.result[0]["/common/topic/weblink"] ){
     var weblinks=response.result[0]["/common/topic/weblink"];
     return callback(weblinks);
     }
     else{return callback=null;}
   }, {extended:true});
}


//automatically do mql pagination to complete the query
exports.paginate=function(query, callback, envelope, results) {
    if (!results){results=[];}
    if(!envelope){envelope={"cursor":true};}   
    if(query[0] && query[0].limit==null){query[0].limit=100;} 
    exports.query_freebase(query,  function(response){//returned the query    
          //get results
          for(var i in response.result){
            results.push(response.result[i]);
          }  
        if(response.cursor){//do it again
          envelope.cursor=response.cursor;
          return exports.paginate(query, callback, envelope, results);//recursive
        }
        else{//alldone
          return callback(results);        
        }

  }, envelope);

}


exports.query_freebase=function(query, callback, envelope) {
    var results=[];   
     if(!envelope){envelope={};} 
    envelope.query=query;
    var query=JSON.stringify(envelope);
    var fburl = 'http://www.freebase.com/api/service/mqlread?query='+encodeURI(query);
    request({
        uri: fburl
    }, function(error, response, body) {        
        if (!error && response.statusCode == 200 ) {
            var fb = JSON.parse(body); 
              return callback(fb);
              }
          else{
           console.log('----error----');
           console.log(body);
           return callback(null);
          }          
    });
}

//tests
//exports.get_description("london",  console.log, [{"type":"/film/film"}]);
//exports.query_freebase([{'name': null, 'type': '/astronomy/planet'}], console.log);
//exports.get_weblinks("david bowie",  console.log);
//exports.search("meatloaf",  console.log);
//exports.get_geolocation("cheddar",  console.log);
//exports.paginate([{"type":"/event/disaster","id":null}], console.log);
//exports.get_description("toronto",  console.log);
//exports.get_description("/authority/imdb/title/tt0099892",  console.log);
//exports.get_image("tom hanks",  console.log);
//exports.get_wikipedia("tom hanks",  console.log);
//exports.get_image("mike myers",  console.log, [{"key":{"namespace":"/wikipedia/en_title", "value":null, "optional":"required"}}], {width:200} );

