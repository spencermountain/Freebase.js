

//get a url for dbpedia based on this topic
freebase.dbpedia_page=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return fns.doit_async(q, freebase.dbpedia_page, options, callback)
  }
   freebase.get_id(q, options, function(topic){
     if(!topic || !topic.id){return callback("")}
     var query=[{
        "id":   topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value":     null
        }
      }]
    freebase.mqlread(query, options, function(result){
      if(!result || !result.result || !result.result[0] || !result.result[0].key.value){
        return callback('')
      }
      return callback('http://dbpedia.org/resource/'+encodeURIComponent(result.result[0].key.value))
    })
  })
}
//freebase.dbpedia_page("Köppen climate classification ")
//http://dbpedia.org/resource/K%2400F6ppen_climate_classification


//get all data from dbpedia for this topic
freebase.dbpedia_data=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return fns.doit_async(q, freebase.dbpedia_data, options, callback)
  }
   freebase.get_id(q, options, function(topic){
     if(!topic || !topic.id){return callback("")}
     var query=[{
        "id":   topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value":     null
        }
      }]
    freebase.mqlread(query, options, function(result){
      if(!result || !result.result || !result.result[0] || !result.result[0].key.value){return callback('')}
      var subj='http://dbpedia.org/resource/'+fns.mql_unencode(result.result[0].key.value);
      var url='http://dbpedia.org/data/'+encodeURIComponent(fns.mql_unencode(result.result[0].key.value))+'.json'
      fns.http(url, function(result){
        var all=Object.keys(result).map(function(i){
          return {
            subject:{dbpedia:subj, id:dbpedia_to_freebase(subj)},
            property:{dbpedia:Object.keys(result[i])[0]},
            object:{dbpedia:i, id:dbpedia_to_freebase(i)}
          }
        })
        return callback(all)
      })
    })
  })
}
//freebase.dbpedia_data("Köppen climate classification", {}, console.log)
// freebase.dbpedia_data("Toronto", console.log)

function dbpedia_to_freebase(url){
  if(!url || !url.match(/https?:\/\/dbpedia\.org\/(page|data|resource)\//i) ){return ''}
  url=url.replace(/https?:\/\/dbpedia\.org\/(page|data|resource)\//i,'') ||''
  url=decodeURI(url)
  return "/wikipedia/en/"+freebase.mql_encode(url.replace(/ /g,'_'));
}