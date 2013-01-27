
var globals={
  host:'https://www.googleapis.com/freebase/v1/',
  image_host:"https://usercontent.googleapis.com/freebase/v1/image",
  geosearch:'http://api.freebase.com/api/service/geosearch',
  wikipedia_host:'http://en.wikipedia.org/w/api.php'
}
var metadata={}
var freebase={};

var fns={}
var data={};


//regular search api
freebase.search=function(q, options, callback){
      callback=callback||console.log;
      if(!q && !options.filter){return callback([])}
      options=options||{};
       //is it an array of sub-tasks?
      if(_.isArray(q) && q.length>1){
       // return fns.doit_async(q, freebase.search, options, callback)
      }
      options.query=q || '';
      if(options.filter){
        options.filter=encodeURIComponent(options.filter)
      }
      if(options.type=="/type/type" || options.type=="/type/property"){
        url+="&scoring=schema&stemmed=true"
      }
      options.query=encodeURIComponent(options.query);
      var params=fns.set_params(options)
      var url= globals.host+'search/?'+params;
      fns.http(url, function(result){
        if(!result || !result.result || !result.result[0] ){return callback([])}
        return callback(result.result)
    })
}
//freebase.search("bill murray")