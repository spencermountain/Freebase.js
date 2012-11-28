var async_max=2;//the hardest we will ever concurrently hit freebase
var host='https://www.googleapis.com/freebase/v1/';
var image_host="https://usercontent.googleapis.com/freebase/v1/image";
var geosearch='http://api.freebase.com/api/service/geosearch'
var wikipedia_host='http://en.wikipedia.org/w/api.php'

var request = require('request');
var async = require('async');
var _ =require('underscore');
var singularize=require('./lib/inflector').singularize;
var sentence=require('./lib/sentence_tokenizer').sentenceparser;
exports.wikipedia=require('./lib/wikipedia');

var sentence_grammars=require('./data/sentence_grammars').sentence_grammars;
var plural_types=require('./data/plurals').plurals;
var category_like=require('./data/is_a').is_a;
var related_properties=require('./data/related_properties').related;
var definate_articles=require('./data/definate_articles').definate_articles;
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
      var url= host+'topic'+id+'?'+set_params(options)
      // if(options.filter){url+='&filter='+encodeURIComponent(options.filter)}
      // if(options.key){url+='&key='+options.key}
      console.log(url)
      http(url, function(result){
        callback(result)
      })
    })
}
//exports.topic("toronto", {limit:1})



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
      if(options.filter){
        options.filter=encodeURIComponent(options.filter)
      }
      options.query=encodeURIComponent(options.query);
      var params=set_params(options)
      var url= host+'search/?'+params;
      http(url, function(result){
        if(!result || !result.result || !result.result[0] ){return callback([])}
        callback(result.result)
    })
}
//exports.search("bill murray")

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


///////////////////////////sugar methods

//get the proper pronoun to use for a topic eg. he/she/they/it
exports.grammar=function(q, options, callback){
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
      var grammar={
        plural:false,
        gender:null,
        article:"a",
        pronoun:"it",
        copula:"is"
      }
      //people grammar
      if(isin('/people/person', result.type) || isin('/fictional_universe/fictional_character', result.type) ){
        var gender = result["/people/person/gender"][0] || result["/fictional_universe/fictional_character/gender"][0];
        if(gender) {
          if(gender.id == "/en/male") { //male
            grammar.gender = "male";
            grammar.pronoun = "he";
          } else if(gender.id == "/en/female") { //female
            grammar.gender = "female";
            grammar.pronoun = "she";
          }
        } else { //no gender person
          grammar.gender = "unknown";
          grammar.pronoun = "they";
        }
      }else{ //not a person
        //plural topics
        if(_.intersection(plural_types, result.type).length >0){
          grammar.plural=true;
          grammar.pronoun="they";
          grammar.copula="are"
        }
        //categories that need a 'the' instead of 'a'
        if(_.intersection(definate_articles, result.type).length >0){
          grammar.article="the";
        }
      }
      return callback(grammar);
    })
  })
}
//exports.grammar("toronto maple leafs")
//exports.grammar("wayne gretzky")
//exports.grammar("ron weasley")

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
    var query=[{"type":id,"name":null, "mid":null, limit:100}]
    if(options.extend){
      for(var i in options.extend){
        query[0][i]=options.extend[i]
      }
    }
    exports.paginate(query, options, callback)
   })
}
//exports.list("hurricanes")

function list_category_like(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  q=singularize(q);
  exports.topic(q, options, function(r){
    if(!r || !r.property || !_.isObject(r.property) ){return callback([])}
    var all=Object.keys(r.property).filter(function(v){
      return isin(v, category_like)
    }).map(function(p){
      //add the property
      r.property[p].values=r.property[p].values.map(function(v){
        v.property=p;
        return v;
      })
      return r.property[p].values
    })
    all=_.flatten(all);
    console.log(all)
  })
}
//list_category_like("ethiopians")


//from a geo-coordinate, get the town, province, country, and timezone for it
exports.place_data = function(geo, options, callback) {
  callback = callback || console.log;
  if(!geo) {
    return callback({})
  }
  options = options || {};
  //is it an array of sub-tasks?
  if(_.isArray(geo) && geo.length > 1) {
    return doit_async(q, exports.place_data, options, callback)
  }
  var location = {"coordinates":[ geo.lng , geo.lat ],"type":"Point"}
  var out = [{
    "mid": null,
    "name": null,
    "type": []
  }]
  var url = geosearch + '?location=' + encodeURIComponent(JSON.stringify(location)) + '&order_by=distance&limit=1&type=/location/citytown&within=15&format=json&mql_output=' + encodeURIComponent(JSON.stringify(out))
  http(url, function(r) {
    var all = {
      city: null,
      country: null,
      province: null,
      timezone: null
    }
    all.city = r.result.features[0].properties;
    var query = [{
      "name": null,
      "id": r.result.features[0].properties.mid,
      "/location/location/containedby": [{
        "id": null,
        "name": null,
        "type": [],
        "optional": true,
        "/location/location/time_zones": [{
          "/time/time_zone/offset_from_uct": null,
          "id": null,
          "name": null,
          "optional": true
        }],
        "/location/location/containedby": [{
          "id": null,
          "name": null,
          "type": [],
          "optional": true,
          "/location/location/time_zones": [{
            "/time/time_zone/offset_from_uct": null,
            "id": null,
            "name": null,
            "optional": true
          }]
        }]
      }]
    }]
    exports.mqlread(query, {}, function(r) {
      //hunt for the most appropriate topics in 2 layers
      for(var i in r.result[0]['/location/location/containedby']){
        var v=r.result[0]['/location/location/containedby'][i]
        if(v.type.filter(function(t) {return t == "/location/country"})[0]) {
          all.country = {
            id: v.id,
            name: v.name
          }
        } else if(v.type.filter(function(t) {return t == "/location/administrative_division"})[0]) {
          all.province = {
            id: v.id,
            name: v.name
          }
        }
        if(v["/location/location/time_zones"][0] && v["/location/location/time_zones"].length==1) {
          all.timezone = v["/location/location/time_zones"][0];
        }
        if(all.country) {
          return callback(all)
        }
       // console.log(v['/location/location/containedby'])
        //second layer looks good too
        v['/location/location/containedby'].map(function(o) {
          if(o.type.filter(function(t) {return t == "/location/country"})[0]) {
            all.country = {
              id: o.id,
              name: o.name
            }
          } else if(!all.province && o.type.filter(function(t) { return t == "/location/administrative_division"})[0]) {
            all.province = {
              id: o.id,
              name: o.name
            }
          }
          if(!all.timezone && o["/location/location/time_zones"][0] && o["/location/location/time_zones"].length==1) {
            all.timezone = o["/location/location/time_zones"][0];
          }
        })
      }
      return callback(all)
    })

  })
}
// exports.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {}, console.log)


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
          var grammar=sentence_grammars.filter(function(v){return v.property==property})[0]||{}
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
    console.log(all)
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

//list of topics with images
exports.gallery=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback([])}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.gallery, options, callback)
  }
  options.extend = {
  "/common/topic/image": [{
    "id": null,
    "optional": "required"
    }]
   }
  exports.list(q, options, function(result){
    result=result.map(function(obj){
      obj.href=image_host+_.last(obj["/common/topic/image"]).id;
      obj.thumbnail=image_host+_.last(obj["/common/topic/image"]).id
      +'?mode=fillcropmid&maxwidth=150&maxheight=150&errorid=/m/0djw4wd';
      obj=exports.add_widget(obj)
      return obj;
    })
    return callback(result)
  })
}
// exports.gallery('hurricanes')


//query wordnet via freebase
exports.wordnet=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback([])}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.wordnet, options, callback)
  }
  var query=[{
    "id":            null,
    "type":          "/base/wordnet/synset",
    "gloss":         null,
    "syntactic_category": null,
    "sort": [
      "syntactic_category",
      "word.sense_number",
      "a:word.word_number"
    ],
    "word": {
      "sense_number": null,
      "derivationally_related_forms": [{
        "sense":{"name":null, "id":null},
          "optional": true
        }],
        "word": {
          "word": q
        }
      },
      "a:word": [{
        "word_number": null,
        "word": {
          "word": null
        }
      }]
    }]
    exports.paginate(query, options, function(r){
      return callback(r)
    })
}
// exports.wordnet(["bat","wood"])


//do a transitive-query, like all rivers in canada, using freebase metaschema
exports.transitive=function(q, property, options, callback){
  callback=callback||console.log;
  if(!q || !property){return callback([])}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, property, exports.transitive, options, callback)
  }
  get_id(q, options, function(id){
    if(!id){return callback({})}
     var candidate_metaschema=metaschema_lookup(property);
      if(candidate_metaschema){
        options.filter='(all '+candidate_metaschema+':"'+id+'")'
        exports.search('', options, function(result){
          return callback(result)
        })
      }else{
        return callback([])
      }

    })
}


//lat/long for a topic
exports.geolocation=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback([])}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.nearby, options, callback)
  }
  options.type=options.type||"/location/location";
  get_id(q, options, function(id){
    if(!id){return callback({})}
    var query=[{
      "id":id,
      "name":null,
      "/location/location/geolocation": [{
          "latitude": null,
          "longitude": null,
          "type": "/location/geocode",
          "optional": true
        }]
      }]
     exports.mqlread(query, options, function(result){
          if(result.result && result.result[0] && result.result[0]['/location/location/geolocation'][0]){
            var geo=result.result[0]['/location/location/geolocation'][0];
            delete geo.type
            delete geo.optional
            return callback(geo)
          }
          return callback({})
        })
   })
}
//exports.geolocation("toronto")

//list of topics nearby a location
exports.nearby=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback([])}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.nearby, options, callback)
  }
  exports.geolocation(q, options, function(geo){
    if(!geo || !geo.latitude || !geo.longitude){return callback({})}
         //use the *old* freebase api for this, as there's no alternative in the new one
          var location='{"coordinates":['+geo.longitude+','+geo.latitude+'],"type":"Point"}'
          options.within=options.within||5;
          options.type=options.type||"/location/location";
          var url=geosearch+'?location='+encodeURIComponent(location)+'&order_by=distance&type='+options.type+'&within='+options.within+'&limit=200&format=json'
          http(url, function(r){
            return callback(r.result.features)
          })
    })
}
//exports.nearby("cn tower", {type:"/food/restaurant"}, console.log)


//list of topics inside a location
exports.inside=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback([])}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.inside, options, callback)
  }
  //handy to have their geocoordinates too
  options.mql_output=options.mql_output || [{
    "name": null,
    "id": null,
    "type":"/location/location",
    "/location/location/geolocation": [{
      "latitude": null,
      "longitude": null,
      "type": "/location/geocode",
      "optional": true
    }]
  }]
  exports.transitive(q, "part_of", options, function(r){
    return callback(r)
  })
}



//get a url for dbpedia based on this topic
exports.dbpedia_page=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.dbpedia_page, options, callback)
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
      if(!result || !result.result || !result.result[0] || !result.result[0].key.value){return callback('')}
      return callback('http://dbpedia.org/resource/'+encodeURIComponent(result.result[0].key.value))
    })
  })
}
//exports.dbpedia_page("Köppen climate classification ")
//http://dbpedia.org/resource/K%2400F6ppen_climate_classification


//get all data from dbpedia for this topic
exports.dbpedia_data=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.dbpedia_data, options, callback)
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
      if(!result || !result.result || !result.result[0] || !result.result[0].key.value){return callback('')}
      var url='http://dbpedia.org/data/'+encodeURIComponent(exports.mqlkey_unencode(result.result[0].key.value))+'.json'
      http(url, callback)
    })
  })
}
// exports.dbpedia_data("Köppen climate classification", function(result){
//   var all=Object.keys(r).map(function(i){
//     console.log(dbpedia_to_freebase(i))
//   })
// })
//exports.dbpedia_data("Toronto", console.log)

function dbpedia_to_freebase(url){
  if(!url){return ''}
  url=url.replace(/https?:\/\/dbpedia\.org\/(page|data|resource)\//i,'')
  if(!url){return ''}
  return "/wikipedia/en/"+exports.mql_encode(url.replace(/ /g,'_'));
}

//get a url for wikipedia based on this topic
exports.wikipedia_page=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.wikipedia_page, options, callback)
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
      return callback(exports.mqlkey_unencode(result.result[0].key.value))//'http://en.wikipedia.org/wiki/'
    })
  })
}

exports.wikipedia_categories=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.wikipedia_categories, options, callback)
  }
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if(q.match(/ /) || q.substr(0,1)==q.substr(0,1).toLowerCase() || q.match(/^\//)){
    return exports.wikipedia_page(q, options, function(r){
      exports.wikipedia_external_links(r, options, callback)
    })
  }
  var url=wikipedia_host+'?action=query&prop=categories&format=json&clshow=!hidden&cllimit=200&titles='+encodeURIComponent(q);
  http(url, function(r){
    if(!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]){return callback([])}
    var cats=r.query.pages[Object.keys(r.query.pages)[0]].categories ||[]
    return callback(cats)
    console.log()
  })
}
//exports.wikipedia_categories(["Thom Yorke","Toronto"], {}, console.log)

//outgoing links from this wikipedia page, converted to freebase ids
exports.wikipedia_links=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.wikipedia_links, options, callback)
  }
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if(q.match(/ /) || q.substr(0,1)==q.substr(0,1).toLowerCase() || q.match(/^\//)){
    return exports.wikipedia_page(q, options, function(r){
      exports.wikipedia_links(r, options, callback)
    })
  }
  var url=wikipedia_host+'?action=query&prop=links&format=json&plnamespace=0&pllimit=500&titles='+encodeURIComponent(q);
  http(url, function(r){
    if(!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]){return callback([])}
    var links=r.query.pages[Object.keys(r.query.pages)[0]].links ||[]
    //filter-out non-freebase topics
    links=links.filter(function(v){return v.title.match(/^List of /i)==null})
    links=links.map(function(o){
      o.id="/wikipedia/en/"+exports.mql_encode(o.title.replace(/ /g,'_'));
      o.name=o.title
      delete o.title
      return o
    })
    return callback(links)
  })
}
//exports.wikipedia_links("Toronto", {}, console.log)

//outgoing links from this wikipedia page, converted to freebase ids
exports.wikipedia_external_links=function(q, options, callback){
  callback=callback||console.log;
  if(!q){return callback({})}
  options=options||{};
  //is it an array of sub-tasks?
  if(_.isArray(q) && q.length>1){
    return doit_async(q, exports.wikipedia_external_links, options, callback)
  }
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if(q.match(/ /) || q.substr(0,1)==q.substr(0,1).toLowerCase() || q.match(/^\//)){
    return exports.wikipedia_page(q, options, function(r){
      exports.wikipedia_external_links(r, options, callback)
    })
  }
  var url=wikipedia_host+'?action=query&prop=extlinks&format=json&plnamespace=0&pllimit=500&titles='+encodeURIComponent(q);
  http(url, function(r){
    if(!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]){return callback([])}
    var links=r.query.pages[Object.keys(r.query.pages)[0]].extlinks ||[]
    links=links.filter(function(v){return v["*"].match(/^http/)})
    links=links.map(function(v){
      var box=parseurl(v["*"]);
      return {url:v["*"], domain:box.host}
    })
    return callback(links)
  })
}
//exports.wikipedia_external_links("/en/toronto", {}, console.log)




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
    if(options.type="/type/type"){
      return callback(result.id)
    }
    else if(result && result.mid){
      var id=result.mid || result.id;
      return callback(id)
    }
    return callback(null)
  })
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
  property=property.replace(/_/g,' ');
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
        uri: url,
        headers:{"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:10.0) Gecko/20100101 Firefox/10.0"}
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
  return Object.keys(options).map(function(v){
    if(_.isArray(options[v]) || _.isObject(options[v])){
     options[v]=encodeURIComponent(JSON.stringify(options[v]));
    }
    return v+'='+options[v]
  }).join('&')
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

//turn freebase's silly $00 encoding into unicode
exports.mqlkey_unencode = function (x) {
    x = x.replace(/\$([0-9A-Fa-f]{4})/g, function (a,b) {
        return String.fromCharCode(parseInt(b, 16));
    });
    return x;
}
//console.log(exports.mqlkey_unencode("K$00F6ppen_climate_classification"))


 //remove objects with a duplicate field from json
 function json_unique(x, field) {
   var newArray=new Array();
    label:for(var i=0; i<x.length;i++ ){
      for(var j=0; j<newArray.length;j++ ){
          if(newArray[j] && x[i] && newArray[j][field]==x[i][field])
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


exports.add_widget=function(obj){
  var id=obj.mid|| obj.id;
  if(!obj || !id){return obj}
  var html='<a href="#" class="imagewrap" data-id="'+id+'" style="position:relative; width:200px; height:200px;">'
    +'<img style="border-radius:5px;" src="'+image_host
    +id
    +'?maxwidth=200&maxheight=200&errorid=/m/0djw4wd"/>'
      if(obj.name){
      html+='<div class="caption" style="position:absolute; opacity:0.5; background:black; bottom:10px; color:white; left:10px; border-radius: 5px; min-width:100px; padding:5px;">'
         +obj.name
      +'</div>'
    }
  html+='</a>'
  obj.widget=html;
  return obj;
}

//soften up the api so it will take these methods alternatively..
var aliases={
  mqlread:["query", "mql_read"],
  topic:["topic_api","all_data","data","everything","get_data"],
  paginate:["continue","all"],
  same_as_links:["sameas","sameAs","sameaslinks","links","sameas_links","external_links","weblinks"],
  translate:["translate_to","multilingual","i8n", "get_translation"],
  image:["pic","photo","picture","get_image","image_url","image_src"],
  description:["get_description","blurb","get_blurb","blurb_api","text","get_text"],
  notable:["notable_type","notabletype","notable_for","notable_as","main_type","type"],
  place_data:["city","country","province","place_info","location_info","location","whereis"],
  incoming:["incoming_links", "incoming_nodes","inlinks"],
  outgoing:["outgoing_links", "outgoing_nodes","outlinks"],
  related:["related_topics","similar","related_to","get_related"],
  gallery:["images","get_images"],
  geolocation:["geo","geocoordinates","geo_location","lat_lng","location"],
  nearby:["near", "close_to"],
  inside:["inside_of","within","contained_by","contains"],
  mql_encode:["encode","escape"]
}
for(var i in aliases){
  aliases[i].map(function(v){
    exports[v]=exports[i]
  })
}
//console.log(Object.keys(exports))