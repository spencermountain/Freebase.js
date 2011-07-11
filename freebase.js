var request = require('request');
    
    


exports.get_description=function(searchquery, callback, query){
    var add=[{
       "search": {"query": searchquery, "id": null, "score": null},
       "/common/topic/article": [{"text": {"chars": null, "maxlength": 500},
                                  }],
       "name": null,
       "id":null,
       "limit": 1
    }];
   
   if(!query){query=[{}];}
   for(var i in add[0]){
     query[0][i]=add[0][i];   
   }
   
   return exports.query_freebase(query,  {extended:true}, function(response){
     if(response.result[0] && response.result[0]['/common/topic/article'][0] && response.result[0]['/common/topic/article'][0].text.chars){
       callback(response.result[0]['/common/topic/article'][0].text.chars);
     }
   });
}


exports.get_image=function(searchquery, callback, query, options){
    var add=[{
       "search": {"query": searchquery, "id": null, "score": null},
       "/common/topic/image": [{"id":null }],
       "name": null,
       "id":null,
       "limit": 1
    }];
   
   if(!query){query=[{}];}
   for(var i in add[0]){
     query[0][i]=add[0][i];   
   }
   
   return exports.query_freebase(query,  {extended:true}, function(response){
     if(response.result && response.result[0] && response.result[0]['/common/topic/image'] && response.result[0]['/common/topic/image'][0] ){
     var id=response.result[0]['/common/topic/image'][0].id;
     var image='http://www.freebase.com/api/trans/image_thumb'+id+'?errorid=/m/0djw4wd'
     if(options){
       image+='&maxheight='+options.height+'&maxwidth='+options.width;
     }
     callback(image);
     }
   });
}



exports.get_wikipedia=function(searchquery, callback, query){
    var add=[{
       "search": {"query": searchquery, "id": null, "score": null},
       "key":{"namespace":"/wikipedia/en_id", "value":null},
       "name": null,
       "id":null,
       "limit": 1
    }];
   
   if(!query){query=[{}];}
   for(var i in add[0]){
     query[0][i]=add[0][i];   
   }
   
   return exports.query_freebase(query,  {extended:true}, function(response){
     if(response.result && response.result[0] && response.result[0].key ){
     var id=response.result[0].key.value;
     var image='http://en.wikipedia.org/wiki/index.html?curid='+id;
     callback(image);
     }
   });
}




exports.query_freebase=function(query, envelope, callback) {
    var results=[];    
    if(!envelope){envelope={"cursor":true};}    
    if(query[0] && query[0].limit==null){query[0].limit=100;} 
    console.log(query)
    envelope.query=query;
    var query=JSON.stringify(envelope);
    var fburl = 'http://www.freebase.com/api/service/mqlread?query='+encodeURI(query);
    request({
        uri: fburl
    }, function(error, response, body) {    
        if (!error && response.statusCode == 200 ) {
            var fb = JSON.parse(body);  
            if(fb && fb.result && fb.result[0]){
              if( fb.cursor){
               envelope.cursor=fb.cursor;
               results.push(fb.result);       
               console.log(results)       
               exports.query_freebase(envelope.query, envelope, callback);
            }
            else{ //cursor is finished  
              results.push(fb.result); 
              return callback(results);
            }
          }
          else{
           console.log('error');
           return callback(results);
          }            
        }
        else {
            return callback(null);
        }
    });
}

//tests
exports.query_freebase([{"type":"/event/disaster","id":null}], false, console.log);
//exports.get_description("john",  console.log);
//exports.get_image("tom hanks",  console.log);
//exports.get_wikipedia("tom hanks",  console.log);
//exports.get_image("tom hanks",  console.log, [{"key":{"namespace":"/wikipedia/en_title", "value":null}}], {width:200} );
