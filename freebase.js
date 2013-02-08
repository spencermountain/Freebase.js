//By Spencer Kelly (@spencermountain)
//https://github.com/spencermountain/Freebase-nodejs
var _ =require('underscore');
var fns=require('./lib/helpers');
var data=require('./lib/data.js').data;
var globals={
  host:'https://www.googleapis.com/freebase/v1/',
  image_host:"https://usercontent.googleapis.com/freebase/v1/image",
  geosearch:'http://api.freebase.com/api/service/geosearch',
  wikipedia_host:'http://en.wikipedia.org/w/api.php'
}
var freebase={};

freebase.mqlread=function(query, options, callback){
  this.doc="interface to freebase's mql api";
  this.reference="http://wiki.freebase.com/wiki/MQL";
  callback=callback||console.log;
  if(!query){return callback({})}
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{};
  options.uniqueness_failure=options.uniqueness_failure||"soft";
  options.cursor=options.cursor||"";
    //handle an array
  if(_.isArray(query) && query.length>1){
    return fns.doit_async(query, freebase.mqlread, options, callback)
  }
  var params=fns.set_params(options)
  var url= globals.host+'mqlread?query='+encodeURIComponent(JSON.stringify(query))+'&'+params;
  fns.http(url, options, function(result){
    return callback(result)
  })
}
//freebase.mqlread([{id:"/en/radiohead",name:null}])


freebase.lookup=function(q, options, callback){
  this.doc="freebase search with filters to ensure only a confident, unambiguous result";
  this.reference="http://wiki.freebase.com/wiki/ApiSearch"
  var ps=fns.settle_params(arguments, freebase.lookup, {type:"/common/topic"});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  //if its a url
  if(ps.url){
      return fns.url_lookup(ps.q, ps.options, function(result){
        if(result && result.result && result.result[0]){
          return ps.callback(result.result[0]);
        }
        return ps.callback({})
      })
    }
  //craft the url
  var url= globals.host+'search?limit=2&lang=en&type='+ps.options.type+'&filter=';
  url+=encodeURIComponent('(any name{full}:"'+ps.q+'" alias{full}:"'+ps.q+'" )'); //id:"'+ps.q+'"
  if(ps.options.type=="/type/type" || ps.options.type=="/type/property"){
    url+="&scoring=schema&stemmed=true"
  }
  fns.http(url, ps.options, function(result){
    if(!result || !result.result || !result.result[0] ){return ps.callback({})}
    //filter-out shit results
    result=result.result||[]
    result[0]=result[0]||{}
    result[1]=result[1]||{}
    //kill low-relevance
    if( !result[0].score && result[0].score<30){
      return ps.callback({})
    }
    //kill if 2nd result is also notable
    if(((result[0].score||0) * 0.7) < (result[1].score||0) ){
      return ps.callback({})
    }
    //kill if types are crap
    if(result[1] && result[0].notable && fns.isin( result[0].notable.id, data.kill)){
      return ps.callback({})
    }
    result[0].name= result[0].name||result[0].text||'';
    return ps.callback(result[0])
  })
}
// freebase.lookup(["/en/radiohead", "http://myspace.com/u2"])
//freebase.lookup("toronto")


freebase.get_id=function(q, options, callback){
  this.doc="like freebase.lookup but satisfied with an id"
  this.reference="http://wiki.freebase.com/wiki/ApiSearch"
  var ps=fns.settle_params(arguments, freebase.get_id, {type:"/common/topic"});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  //is an id
  if(!ps.q || (ps.q.match(/\/.{1,12}\/.{3}/) !=null)){return ps.callback({id:ps.q})}
  //is a normal search
  freebase.lookup(ps.q, ps.options, function(result){
    if(!result){return ps.callback({})}
    if(ps.options.type=="/type/type"){
      result.mid=result.id;
      return ps.callback(result)
    }
    if(result.mid){
      result.id=result.id || result.mid;
      return ps.callback(result)
    }
    return ps.callback({})
  })
}
//freebase.get_id("/en/radiohead")

freebase.topic=function(q, options, callback){
    this.doc="topic api"
    this.reference="http://wiki.freebase.com/wiki/Topic_API"
    var ps=fns.settle_params(arguments, freebase.topic, {});
    if(ps.array){return fns.doit_async(o);}
    if(!ps.valid){return ps.callback({});}
    freebase.get_id(ps.q, ps.options, function(topic){
      var id=topic.id;
      if(!id){return ps.callback({})}
      ps.options.filter=ps.options.filter||'all'
      var url= globals.host+'topic'+id+'?'+fns.set_params(ps.options)
      fns.http(url, ps.options, function(result){
        return ps.callback(result)
      })
    })
}
// freebase.topic("toronto", {filter:"allproperties"})


freebase.search=function(q, options, callback){
    this.doc="regular search api";
    this.reference="http://wiki.freebase.com/wiki/ApiSearch";
    var ps=fns.settle_params(arguments, freebase.search, {});
    if(ps.array){return fns.doit_async(o);}
    if(!ps.valid){return ps.callback({});}
    //craft search url
    if(ps.options.filter){
      ps.options.filter=encodeURIComponent(ps.options.filter)
    }
    if(ps.options.type=="/type/type" || ps.options.type=="/type/property"){
      url+="&scoring=schema&stemmed=true"
    }
    ps.options.query=encodeURIComponent(ps.options.q);
    var params=fns.set_params(ps.options)
    var url= globals.host+'search/?'+params;
    fns.http(url, ps.options, function(result){
      if(!result || !result.result || !result.result[0] ){return callback([])}
      return callback(result.result)
  })
}
//freebase.search("bill murray")

freebase.paginate=function(query, options, callback){
  this.doc="get all of the results to your query";
  this.reference="http://wiki.freebase.com/wiki/MQL";
  var ps=fns.settle_params(arguments, freebase.paginate, {max:500});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  var all=[];
  //recursive mqlread until cursor is false, or maximum reached
  var iterate=function(cursor){
    ps.options.cursor=cursor
    freebase.mqlread(query, ps.options, function(result){
      if(!result||!result.result){return ps.callback(all);}
      all=all.concat(result.result);
      if(result.cursor && (!ps.options.max || all.length<ps.options.max) ){
        iterate(result.cursor)
      }else{
        return ps.callback(all)
      }
    })
  }
  iterate('')
}

freebase.description=function(q, options, callback){
  this.doc="get a text blurb from freebase";
  this.reference="http://wiki.freebase.com/wiki/ApiText"
  var ps=fns.settle_params(arguments, freebase.description, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
 freebase.get_id(ps.q, ps.options, function(topic){
  if(!topic || !topic.id){return ps.callback("")}
  var url= globals.host+'text/'+topic.id;
  fns.http(url, ps.options,function(result){
    if(!result.result){return ps.callback('')}
    return ps.callback(result.result)
  })
 });
}


freebase.image=function(q, options, callback){
  this.doc="get a url for image href of on this topic"
  this.reference="http://wiki.freebase.com/wiki/ApiImage"
  var ps=fns.settle_params(arguments, freebase.image, {maxheight:250,maxwidth:250,errorid:"/m/0djw4wd"});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  freebase.get_id(ps.q, options, function(topic){
     if(!topic || !topic.id){return ps.callback("")}
     var query=[{
        "id":   topic.id,
        "name": null,
        "/common/topic/image": [{
          "id":     null
        }]
      }]
    freebase.mqlread(query, ps.options, function(result){
      if(!result || !result.result || !result.result[0] || !result.result[0]["/common/topic/image"][0] ){
        return ps.callback('');
      }
      var url= globals.image_host+result.result[0]["/common/topic/image"][0].id;
      var params=fns.set_params(ps.options);
      url+='?'+params;
      return ps.callback(url)
    })
  })
}

freebase.grammar=function(q, options, callback){
  this.doc="get the proper pronoun to use for a topic eg. he/she/they/it"
  var ps=fns.settle_params(arguments, freebase.grammar, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  freebase.get_id(ps.q, ps.options, function(topic){
     if(!topic || !topic.id){return ps.callback({})}
     var query=[{
        "id":   topic.id,
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
    freebase.mqlread(query, options, function(result){
      if(!result || !result.result || !result.result[0]){return ps.callback({})}
      result=result.result[0];
      var grammar={
        plural:false,
        gender:null,
        article:"a",
        pronoun:"it",
        copula:"is"
      }
      //people grammar
      if(fns.isin('/people/person', result.type) || fns.isin('/fictional_universe/fictional_character', result.type) ){
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
        if(_.intersection(data.plural_types, result.type).length >0){
          grammar.plural=true;
          grammar.pronoun="they";
          grammar.copula="are"
        }
        //categories that need a 'the' instead of 'a'
        if(_.intersection(data.definate_articles, result.type).length >0){
          grammar.article="the";
        }
      }
      return ps.callback(grammar);
    })
  })
}
//freebase.grammar("toronto maple leafs")

freebase.same_as_links=function(q, options, callback){
  this.doc="turns a url into a freebase topic and list its same:as links"
  var ps=fns.settle_params(arguments, freebase.same_as_links, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}

  var url= globals.host+'search?type=/common/topic&limit=1&query='+encodeURIComponent(ps.q);
  fns.http(url, ps.options, function(result){
    if(!result || !result.result || !result.result[0]){
      return ps.callback({})
    }
      //get its formatted links from the topic api
    freebase.topic(result.result[0].mid , ps.options, function(all){
      if(_.isEmpty(r)){return ps.callback([]);}
      var links=[];
      //same-as ones
      if(all.property['/common/topic/topic_equivalent_webpage']){
       links=all.property['/common/topic/topic_equivalent_webpage'].values.map(function(v){
          return {href:v.value, title: fns.parseurl(v.value).authority}
        })
      }
      //webpage ones
      if(all.property['/common/topic/topical_webpage']){
       links=links.concat(all.property['/common/topic/topical_webpage'].values.map(function(v){
          var host= fns.parseurl(v.value).authority || ''
          return {href:v.value, title:host.replace(/^www\./,'')}
        }))
      }
      var obj={topic:result.result[0], links:links}
      return ps.callback(obj)
    })
  })
}


freebase.translate=function(q, options, callback){
  this.doc="return specific language title for a topic"
  this.reference="http://wiki.freebase.com/wiki/I18n"
  var ps=fns.settle_params(arguments, freebase.translate, {lang:"/lang/fr"});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  if(!ps.options.lang.match(/\/lang\//)){
    ps.options.lang='/lang/'+ps.options.lang
  }
    freebase.get_id(ps.q, ps.options, function(topic){
    if(!topic||!topic.id){return ps.callback("")}
    var query=[{
      "id": topic.id,
      "name": [{
        "lang":  ps.options.lang,
        "value": null
      }]
    }]
    freebase.mqlread(query, {}, function(result){
      if(!result || !result.result || !result.result[0]){return ps.callback('')}
      var name=result.result[0].name||[{}]
      name=name[0].value||'';
      return ps.callback(name)
    })
  })
}


freebase.notable=function(q, options, callback){
  this.doc="get a topic's notable type"
  var ps=fns.settle_params(arguments, freebase.notable, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}

 freebase.topic(ps.q, {filter:"/common/topic/notable_types"}, function(result){
  if(!result || !result.property || !result.property['/common/topic/notable_types']){return ps.callback({})}
  var notable=result.property['/common/topic/notable_types'] || {values:[]};
  notable.values[0].name=notable.values[0].text;
  return ps.callback(notable.values[0])
 });
}

freebase.sentence=function(q, options, callback){
  this.doc="get the first sentence of a topic description"
  this.reference="http://wiki.freebase.com/wiki/APIText"
  var ps=fns.settle_params(arguments, freebase.sentence, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}

  freebase.description(ps.q, ps.options, function(desc){
    if(!desc){return ps.callback("")}
    desc=fns.sentenceparser(desc)||[]
    desc=desc[0]||''
    desc=desc.replace(/\(.*?\)/g,'')//remove birthdates
    desc=desc.replace(/  /g,' ')
    return ps.callback(desc)
  })
}

freebase.list=function(q, options, callback){
  this.doc="get a list of topics in a type"
  var ps=fns.settle_params(arguments, freebase.list, {limit:500});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback([]);}
  //singularize it if its not an id
  if(!ps.q.match(/\/.{1,12}\/.{3}/)){
    ps.q=fns.singularize(ps.q);
  }
  //get its id
  freebase.get_id(ps.q, {type:"/type/type"}, function(topic){
    if(!topic || !topic.id){return ps.callback([])}
      var query = [{
        "type": topic.id,
        "name": null,
        "id": null,
        "mid": null,
        "limit": 100
      }]
      if(options.extend){
        for(var i in options.extend){
          query[0][i]=options.extend[i]
        }
      }
      freebase.paginate(query, ps.options, ps.callback)
   })
}
//freebase.list("hurricanes",{}, function(r){console.log('========================')})
//freebase.list("/book/author")

freebase.place_data = function(geo, options, callback) {
  this.doc="from a geo-coordinate, get the town, province, country, and timezone for it"
  callback = callback || console.log;
  if(!geo) {
    return callback({})
  }
  options = options || {};
  //handle an array
  if(_.isArray(geo) && geo.length > 1) {
    return fns.doit_async(geo, freebase.place_data, options, callback)
  }
  var location = {"coordinates":[ geo.lng , geo.lat ],"type":"Point"}
  var out = [{
    "mid": null,
    "name": null,
    "type": []
  }]
  var url = globals.geosearch + '?location=' + encodeURIComponent(JSON.stringify(location)) + '&order_by=distance&limit=1&type=/location/citytown&within=15&format=json&mql_output=' + encodeURIComponent(JSON.stringify(out))
  fns.http(url, ps.options, function(r) {
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
    freebase.mqlread(query, {}, function(r) {
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
//  freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {}, console.log)


freebase.incoming=function(q, options, callback){
  this.doc="get any incoming data to this topic, ignoring cvt types"
  var ps=fns.settle_params(arguments, freebase.incoming, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}

  freebase.get_id(ps.q, ps.options, function(topic){
    if(!topic || !topic.id){return ps.callback([])}
    var query=[{
      "id": topic.id,
      "/type/reflect/any_reverse": [{
        "link": null,
        "id":   null,
        "name": null,
        "type": "/common/topic",
        "limit":170
      }]
    }]
    //this technically doesn't paginate.
    freebase.paginate(query, ps.options, function(result){
      if(!result || !result[0] || !result[0]['/type/reflect/any_reverse']){
        return ps.callback([])
      }
      return ps.callback(result[0]['/type/reflect/any_reverse'])
    })
  })
}

freebase.outgoing=function(q, options, callback){
  this.doc="return all outgoing links for a topic, traversing cvt types"
  var ps=fns.settle_params(arguments, freebase.outgoing, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}

  freebase.lookup(ps.q, ps.options, function(topic){
    if(!topic || !topic.mid){return ps.callback([])}
      freebase.topic(topic.mid, ps.options, function(result){
        if(_.isEmpty(r)){return ps.callback([]);}
        var out=[];
          //get rid of permissions and stuff..
        result.property=fns.kill_boring(result.property)
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
              c.property=fns.kill_boring(c.property);
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
          var property=o.property ||'';
          if(_.isArray(o.property)){
            property=o.property.join('');
          }
          o.sentence=topic.name +"'s " +_.last(property.split('/')).replace('_',' ') +" is "+ o.name; //ugly fallback
          var grammar=data.sentence_grammars.filter(function(v){return v.id==property})[0]||{}
          if(grammar["sen"] && topic.name && o.name){
            o.sentence=grammar["sen"].replace(/\bsubj\b/, topic.name).replace(/\bobj\b/, o.name);
          }
          return o
        })
        return ps.callback(out)
      })
    })
}
//freebase.outgoing("vancouver")

freebase.graph=function(q, options, callback){
  this.doc="return all outgoing and incoming links for a topic"
  var ps=fns.settle_params(arguments, freebase.graph, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  freebase.lookup(ps.q, ps.options, function(topic){
      if(!topic){return ps.callback({})}
      delete topic.score;
      delete topic.lang;
      ps.options.filter="allproperties";
      freebase.topic(topic.mid, ps.options, function(r){
        if(!r ||!r.property){return ps.callback([])}
        var incoming={};var outgoing ={};
        Object.keys(r.property).forEach(function(k){
          if(k.match(/^\!/)){
            outgoing[k]=r.property[k]
          }else{
            incoming[k]=r.property[k]
          }
        })
        incoming=fns.parse_topic_api(incoming);
        outgoing=fns.parse_topic_api(outgoing);
        var out=incoming.map(function(v){
          return {subject:topic, property:{id:v.property}, object:v}
        })
        out=out.concat(outgoing.map(function(v){
          return {object:topic, property:{id:v.property}, subject:v}
        }))
        //add the sentences
        out=out.map(function(obj){
          obj.property.id=obj.property.id.replace(/^\!/,'');
          delete obj.subject.property;
          var grammar=data.sentence_grammars.filter(function(v){return v.id==obj.property.id})[0]||{}
          obj.sentence=obj.subject.name +"'s " +_.last(obj.property.id.split('/')).replace('_',' ') +" is "+ obj.object.name;
          if(grammar["sen"] && obj.subject.name && obj.object.name){
            obj.sentence=grammar["sen"].replace(/\bsubj\b/, obj.subject.name).replace(/\bobj\b/, obj.object.name);
         }
          return obj
        })
        return ps.callback(out)
      })
  })
}
//freebase.graph("toronto")

freebase.related=function(q, options, callback){
  this.doc="get similar topics to a topic"
  var ps=fns.settle_params(arguments, freebase.related, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  var all=[];
  //pluck relevant connected topics from outgoing links
  freebase.outgoing(ps.q, ps.options, function(result){
    all=result.filter(function(v){
      return fns.isin(v.property, data.related_properties)
    })
    //randomize the results
    all=all.sort(function(a,b){return (Math.round(Math.random())-0.5);})
    all=all.map(function(v){
      if(!v.sentence){
        v.sentence=v.name +" is related to "+result.name
      }
      return v
    })
    all=fns.json_unique(all, "id")
    if(all.length >= options.max){
      return callback(all)
    }
    //else, append topics that share the notable type
    freebase.notable(ps.q, ps.options, function(result){
      if(result && result.id){
        return freebase.list(result.id, {max:ps.options.max}, function(r){
          if(!r||_.isEmpty(r)){return ps.callback(all)}
          r=r.map(function(v){
            v.sentence=v.name + " is also a " +result.name;
            return v
          })
          all=all.concat(r)
          all=fns.json_unique(all, "id")
          all=all.sort(function(a,b){return (Math.round(Math.random())-0.5);})
          return ps.callback(all)
        })
      }else{
        return ps.callback(all)
      }
    })
  })
}
/*freebase.related("toronto", {key:"AIzaSyD5GmnQC7oW9GJIWPGsJUojspMMuPusAxI"}, function(r){
  console.log(JSON.stringify(r, null, 2));
})*/

freebase.is_a=function(q, options, callback){
  this.doc="get a list of identifiers for a topic"
 var ps=fns.settle_params(arguments, freebase.related, {max:25});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  freebase.topic(ps.q, ps.options, function(r){
    if(_.isEmpty(r)){return ps.callback({});}
    var types=r.property["/type/object/type"] || {}
    types=types.values || []
    types=types.filter(function(v){return !v.text.match(/Topic/)})
    types=types.map(function(v){
      return {name:v.text, id:v.id, property:"/type/object/type"}
    })
    r=fns.parse_topic_api(r.property)
    r=r.filter(function(v){return fns.isin(v.property, data.is_a)})
    r=r.concat(types)
    return ps.callback(r)
  })
}
//freebase.is_a("toronto")

freebase.property_lookup=function(q, options, callback){
  this.doc="lookup soft property matches, like 'birthday' vs 'date of birth'"
  var ps=fns.settle_params(arguments, freebase.property_lookup, {type:"/type/property"});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  freebase.search(ps.q, ps.options, function(candidate_properties){
      //look up offline for property aliases
    if(!q.match(/\/.*?\/.*?\//)){
      q=q.toLowerCase();
      q=q.replace(/  /,' ');
      q=q.replace(/^\s+|\s+$/, '');
      var property_singular=fns.singularize(q);
      candidate_properties=candidate_properties.concat(data.properties.filter(function(v){
        return v.n==q || v.n==property_singular
      }))
    }
    return ps.callback(candidate_properties)
  })
}
//freebase.property_lookup("albums")


freebase.question=function(q, options, callback){
  this.doc="give a topic and a property, and get a list of results"
  var ps=fns.settle_params(arguments, freebase.question, {max:25});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid||!ps.options.property){return ps.callback({});}
  var property=ps.options.property
  var type=ps.options.property.match(/\/.*?\/.*?\//)

  //straight-up id search
  if(property.match(/^\/.{1,12}\/.{3}/)){
    return freebase.topic(q, {}, function(r){
      if(!r || !r.property || !r.property[property]){return ps.callback([])}
      return ps.callback(r.property[property].values)
    })
  }
  var candidate_metaschema=fns.metaschema_lookup(property);
  if(candidate_metaschema){
    ps.options.filter='(all '+candidate_metaschema+':"'+q+'")'
    freebase.search('', options, function(result){
      return ps.callback(result)
    })
  }else{
    freebase.property_lookup(property, {}, function(candidate_properties){
      if(candidate_properties.length===0){return ps.callback([])}
      ps.options.filter=type;
       //look for these properties in the topic api
      freebase.topic(ps.q, ps.options, function(result){
        if(_.isEmpty(result)){return ps.callback({});}
        var all=[];
        candidate_properties.forEach(function(p){
          if(result.property[p.id]){
           all=all.concat(result.property[p.id].values)
          }
        })
        all=fns.json_unique(all, "id")
        return ps.callback(all)
      })
    })
  }
}
 //freebase.question("keanu reeves", {property:"children"})
 //freebase.question("thom yorke", "produced") //******
 //freebase.question("pulp fiction", {property:"/film/film/initial_release_date"})
//freebase.question("keanu reeves","films") //******


freebase.dig=function(q, options, callback){
  this.doc="transitive query on a specific property, maximum 3-ply"
  var ps=fns.settle_params(arguments, freebase.property_lookup, {max:25});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  var all=[];
  freebase.question(ps.q, ps.options, function(r){
    if(!r || !_.isArray(r) || r.length===0){return callback(all)}
      all=all.concat(r);
      r=r.slice(0, ps.options.max).map(function(v){return v.id})
      return fns.doit_async({
        q:r,
        options:ps.options,
        method:freebase.question,
        callback:function(big){
        if(!big || !_.isArray(big) || big.length===0){return ps.callback(all)}
        all=all.concat(_.flatten(big,'shallow'))
        all=fns.json_unique(all, "id")
        fns.doit_async(r, freebase.question, ps.options, function(big){
          if(!big || !_.isArray(big) || big.length===0){return ps.callback(all)}
          all=all.concat(_.flatten(big,'shallow'))
          all=fns.json_unique(all, "id")
          return ps.callback(all)
        })
      }
    })
  })
}
// freebase.dig('/en/bovid', {property:'/biology/organism_classification/lower_classifications'}, function(r){
//   console.log(r)
// })
// freebase.dig('/en/toronto', {property:'/location/location/contains'}, function(r){
//   console.log(r)
// })

freebase.gallery=function(q, options, callback){
  this.doc="list of topics with images"
  var ps=fns.settle_params(arguments, freebase.gallery, {
    extend:{
      "/common/topic/image": [{
        "id": null,
        "optional": "required"
        }]
       }
     });
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  freebase.list(ps.q, ps.options, function(result){
    result=result.map(function(obj){
      obj.href=globals.image_host+_.last(obj["/common/topic/image"]).id;
      obj.thumbnail=globals.image_host+_.last(obj["/common/topic/image"]).id
      +'?mode=fillcropmid&maxwidth=150&maxheight=150&errorid=/m/0djw4wd';
      obj=freebase.add_widget(obj)
      return obj;
    })
    return ps.callback(result)
  })
}
// freebase.gallery('hurricanes') //******


freebase.wordnet=function(q, options, callback){
  this.doc="query wordnet via freebase"
  var ps=fns.settle_params(arguments, freebase.wordnet, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
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
          "word": ps.q
        }
      },
      "a:word": [{
        "word_number": null,
        "word": {
          "word": null
        }
      }]
    }]
    if(ps.options.limit){query[0].limit=ps.options.limit;}
    freebase.mqlread(query, ps.options, function(r){
      return ps.callback(r.result)
    })
}


freebase.transitive=function transitive(q, options, callback){
  this.doc="do a transitive-query, like all rivers in canada, using freebase metaschema"
  var ps=fns.settle_params(arguments, freebase.transitive, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  freebase.get_id(ps.q, ps.options, function(topic){
    if(!topic || !topic.id){return ps.callback({})}
     var candidate_metaschema=fns.metaschema_lookup(ps.options.property);
      if(candidate_metaschema){
        options.filter='(all '+candidate_metaschema+':"'+topic.id+'")'
        freebase.search('', ps.options, function(result){
          return ps.callback(result)
        })
      }else{
        return ps.callback([])
      }
    })
}
//*******

freebase.geolocation=function(q, options, callback){
 this.doc="lat/long for a topic"
  var ps=fns.settle_params(arguments, freebase.geolocation, {type:"/location/location"});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  freebase.get_id(ps.q, ps.options, function(topic){
    if(!topic || !topic.id){return callback({})}
    var query=[{
      "id":topic.id,
      "name":null,
      "/location/location/geolocation": [{
          "latitude": null,
          "longitude": null,
          "type": "/location/geocode",
          "optional": true
        }]
      }]
     freebase.mqlread(query, ps.options, function(result){
          if(result.result && result.result[0] && result.result[0]['/location/location/geolocation'][0]){
            var geo=result.result[0]['/location/location/geolocation'][0];
            delete geo.type;
            delete geo.optional;
            return ps.callback(geo);
          }
          return ps.callback({})
        })
   })
}
//freebase.geolocation("cn tower")

freebase.nearby=function(q, options, callback){
  this.doc="list of topics nearby a location"
  var ps=fns.settle_params(arguments, freebase.nearby, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  freebase.geolocation(ps.q, {}, function(geo){
    if(!geo || !geo.latitude || !geo.longitude){return ps.callback([])}
         //use the *old* freebase api for this, as there's no alternative in the new one
          var location='{"coordinates":['+geo.longitude+','+geo.latitude+'],"type":"Point"}'
          ps.options.within=ps.options.within||5;
          ps.options.type=ps.options.type||"/location/location";
          var url=globals.geosearch+'?location='+encodeURIComponent(location)+'&order_by=distance&type='+ps.options.type+'&within='+ps.options.within+'&limit=200&format=json'
          fns.http(url, ps.options, function(r){
            return ps.callback(r.result.features)
          })
    })
}
//freebase.nearby("cn tower", {type:"/food/restaurant"}, console.log)


freebase.inside=function(q, options, callback){
  this.doc="list of topics inside a location"
  var ps=fns.settle_params(arguments, freebase.inside, {property:"part_of"});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  //handy to have their geocoordinates too
  ps.options.mql_output=ps.options.mql_output || [{
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
  freebase.transitive(ps.q, ps.options, function(r){
    return ps.callback(r)
  })
}
 //freebase.inside("montreal")//***********


freebase.wikipedia_page=function(q, options, callback){
  this.doc="get a url for wikipedia based on this topic"
    var ps=fns.settle_params(arguments, freebase.wikipedia, {});
    if(ps.array){return fns.doit_async(o);}
    if(!ps.valid){return ps.callback({});}
   freebase.get_id(ps.q, ps.options, function(topic){
     if(!topic || !topic.id){return ps.callback("")}
     var query=[{
        "id":   topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value":     null
        }
      }]
    freebase.mqlread(query, ps.options, function(result){
      if(!result || !result.result || !result.result[0]){return ps.callback('')}
      return ps.callback('http://en.wikipedia.org/wiki/'+fns.mql_unencode(result.result[0].key.value))
    })
  })
}
 //freebase.wikipedia_page('toronto')

 freebase.dbpedia_page=function(q, options, callback){
  this.doc="get a url for dbpedia based on this topic"
    var ps=fns.settle_params(arguments, freebase.dbpedia, {});
    if(ps.array){return fns.doit_async(o);}
    if(!ps.valid){return ps.callback({});}
   freebase.get_id(ps.q, ps.options, function(topic){
     if(!topic || !topic.id){return ps.callback("")}
     var query=[{
        "id":   topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value":     null
        }
      }]
    freebase.mqlread(query, ps.options, function(result){
      if(!result || !result.result || !result.result[0]){return ps.callback({})}
      var key=fns.mql_unencode(result.result[0].key.value)
      var obj={
        html:'http://dbpedia.org/page/'+key,
        json:'http://dbpedia.org/data/'+key+'.json',
      }
      return ps.callback(obj)
    })
  })
}
//freebase.dbpedia_page('toronto')

freebase.wikipedia_categories=function(q, options, callback){
  this.doc="get the wikipedia categories for a topic"
  var ps=fns.settle_params(arguments, freebase.wikipedia_categories, {});
  if(ps.array){return fns.doit_async(o);}
  if(!ps.valid){return ps.callback({});}
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if(ps.q.match(/ /) || ps.q.substr(0,1)==ps.q.substr(0,1).toLowerCase() || ps.q.match(/^\//)){
    return freebase.wikipedia_page(ps.q, options, function(r){
      freebase.wikipedia_categories(r, options, callback)
    })
  }
  var url=globals.wikipedia_host+'?action=query&prop=categories&format=json&clshow=!hidden&cllimit=200&titles='+encodeURIComponent(ps.q);
  fns.http(url, ps.options, function(r){
    if(!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]){return callback([])}
    var cats=r.query.pages[Object.keys(r.query.pages)[0]].categories ||[]
    cats=cats.map(function(v){return v.title})
    return ps.callback(cats)
  })
}
//freebase.wikipedia_categories(["Thom Yorke","Toronto"], {}, console.log)
freebase.wikipedia_categories("Thom Yorke", {}, console.log)

freebase.wikipedia_links=function(q, options, callback){
  this.doc="outgoing links from this wikipedia page, converted to freebase ids"
  callback=callback||console.log;
  if(!q){return callback({})}
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{};
  //handle an array
  if(_.isArray(q) && q.length>1){
    return fns.doit_async(q, freebase.wikipedia_links, options, callback)
  }
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if(q.match(/ /) || q.substr(0,1)==q.substr(0,1).toLowerCase() || q.match(/^\//)){
    return freebase.wikipedia_page(q, options, function(r){
      freebase.wikipedia_links(r, options, callback)
    })
  }
  var url=globals.wikipedia_host+'?action=query&prop=links&format=json&plnamespace=0&pllimit=500&titles='+encodeURIComponent(q);
  fns.http(url, ps.options, function(r){
    if(!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]){return callback([])}
    var links=r.query.pages[Object.keys(r.query.pages)[0]].links ||[]
    //filter-out non-freebase topics
    links=links.filter(function(v){return v.title.match(/^List of /i)==null})
    links=links.map(function(o){
      o.id="/wikipedia/en/"+freebase.mql_encode(o.title.replace(/ /g,'_'));
      o.name=o.title;
      delete o.title;
      delete o.ns;
      return o
    })
    return callback(links)
  })
}
//freebase.wikipedia_links("Toronto", {}, console.log)

freebase.wikipedia_external_links=function(q, options, callback){
  this.doc="outgoing links from this wikipedia page, converted to freebase ids"
  callback=callback||console.log;
  if(!q){return callback({})}
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{};
  //handle an array
  if(_.isArray(q) && q.length>1){
    return fns.doit_async(q, freebase.wikipedia_external_links, options, callback)
  }
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if(q.match(/ /) || q.substr(0,1)==q.substr(0,1).toLowerCase() || q.match(/^\//)){
    return freebase.wikipedia_page(q, options, function(r){
      freebase.wikipedia_external_links(r, options, callback)
    })
  }
  var url=globals.wikipedia_host+'?action=query&prop=extlinks&format=json&plnamespace=0&pllimit=500&titles='+encodeURIComponent(q);
  fns.http(url, ps.options, function(r){
    if(!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]){
      return callback([])
    }
    var links=r.query.pages[Object.keys(r.query.pages)[0]].extlinks ||[]
    links=links.filter(function(v){return v["*"].match(/^http/)})
    links=links.map(function(v){
      var box=fns.parseurl(v["*"]);
      return {url:v["*"], domain:box.host}
    })
    return callback(links)
  })
}
//freebase.wikipedia_external_links("/en/toronto", {}, console.log)


freebase.schema_introspection=function(q, options, callback){
  this.doc="common lookups for types and properties"
  callback=callback||console.log;
  if(!q){return callback({})}
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{};
  //handle an array
  if(_.isArray(q) && q.length>1){
    return fns.doit_async(q, freebase.schema_introspection, options, callback)
  }
  //see if its a type
  freebase.search(q, {type:"/type/type"}, function(r){
    if(r && r[0] && r[0].id){
     r=r[0]
     var query=[{
        "id": r.id,
        "mid": null,
        "name":null,
        "properties": [{
          "id": null,
          "name": null,
          "/type/property/reverse_property":[{
            "id": null,
            "name": null,
            "optional":true
          }]
        }],
        "/freebase/type_hints/mediator": null,
        "/freebase/type_hints/included_types": [{
          "id": null,
          "name": null
        }],
        "/freebase/type_profile/published":null,
        "/type/type/expected_by": [{
          "id": null,
          "name": null
        }],
        "/freebase/type_profile/instance_count": null,
        "/freebase/type_profile/property_count": null,
        "domain": {
          "id": null,
          "name": null
        },
        "/freebase/type_profile/equivalent_topic": {
          "id": null,
          "name": null
        },
        "type": "/type/type"
      }]
      freebase.mqlread(query, {}, function(r){
        if(!r || !r.result || !r.result[0]){return callback({})}
        r=r.result[0]
        var obj={}
        obj.domain=r.domain
        obj.id=r.id
        obj.included_types=r["/freebase/type_hints/included_types"]
        obj.incoming_properties=r["/type/type/expected_by"]
        obj.is_compound_value=r["/freebase/type_hints/mediator"]||false
        obj.is_commons=r["/freebase/type_profile/published"]||false
        obj.equivalent_topic=r["/freebase/type_profile/equivalent_topic"]
        obj.topic_count=r["/freebase/type_profile/instance_count"]||0
        obj.property_count=r["/freebase/type_profile/property_count"]||0;
        //types that include this one
        var query=[{
          "id": null,
          "name": null,
          "s:name": {
            "value": null,
            "lang": "/lang/en",
            "optional": "required"
          },
          "/freebase/type_hints/included_types": [{
            "id": obj.id
          }]
        }]
        freebase.mqlread(query,{},function(r){
          if(!r || !r.result){return callback(obj)}
          obj.included_by=r.result.map(function(v){return {id:v.id, name:v.name}})
          return callback(obj)
        })
      })

    }
    else{
      freebase.property_lookup(q,{},function(r){
        if(!r || !r[0] || !r[0].id){
          return callback({})
        }
        return freebase.property_inspection(r[0].id, {}, callback)
      })
    }
  })
}
//freebase.schema_introspection("politician")
//freebase.schema_introspection("/type/property/master_property")


freebase.property_introspection=function(q, options, callback){
  this.doc="common lookups for freebase property data"
  callback=callback||console.log;
  if(!q){return callback({})}
  if(typeof options=="function"){callback=options;options={};}//flexible parameter
  options=options||{};
  //handle an array
  if(_.isArray(q) && q.length>1){
    return fns.doit_async(q, freebase.property_introspection, options, callback)
  }
  var query=[{
      "id": q,
      "mid": null,
      "name": null,
      "type": "/type/property",
      "reverse_property": [{
        "id": null,
        "name": null,
        "optional": true
      }],
      "expected_type": [{
        "id": null,
        "name": null,
        "optional": true,
      }],
      "unique": null,
      "schema": {
        "id":null,
        "name":null,
        "/freebase/type_profile/instance_count": null
      },
      "/common/topic/description": null
    }]
    freebase.mqlread(query,{},function(r){
      var obj={}
      if(!r || !r.result || !r.result[0]){return callback(obj)}
      r=r.result[0]
      obj.name=r.name
      obj.id=r.id
      obj.type=r.schema
      obj.description=r["/common/topic/description"]
      obj.unique=r.unique||false;
      obj.reverse_property=r.reverse_property
      obj.expected_type=r.expected_type

      //get its metaschema
      var query=[{
        "name": null,
        "type": "/base/fbontology/semantic_predicate",
        "paths": {
          "a:properties": q,
          "b:properties":[{"id":null}]
        }
      }]
      freebase.mqlread(query,{},function(r){
        obj.meta=r.result
        return callback(obj)
      })
    })
  //   //get its property aliases
  // var query=[{type:"/base/natlang/property_alias",
  //   property:property,
  //   alias:[]
  //   }]
}
//freebase.property_introspection("/government/politician/party")







  freebase.mql_encode= function(s) {
    this.doc="quote a unicode string to turn it into a valid mql /type/key/value"
    if(!s) {
      return ''
    }
    s = s.replace(/  /, ' ');
    s = s.replace(/^\s+|\s+$/, '');
    s = s.replace(/ /g, '_');
    var mqlkey_start = 'A-Za-z0-9';
    var mqlkey_char = 'A-Za-z0-9_-';
    var MQLKEY_VALID = new RegExp('^[' + mqlkey_start + '][' + mqlkey_char + ']*$');
    var MQLKEY_CHAR_MUSTQUOTE = new RegExp('([^' + mqlkey_char + '])', 'g');
    if(MQLKEY_VALID.exec(s)) // fastpath
      return s;
    var convert = function(a, b) {
      var hex = b.charCodeAt(0).toString(16).toUpperCase();
      if(hex.length == 2) hex = '00' + hex;
      if(hex.length == 3) hex = '0' + hex;
      return '$' + hex;
    };
    var x = s.replace(MQLKEY_CHAR_MUSTQUOTE, convert);
    if(x.charAt(0) == '-' || x.charAt(0) == '_') {
      x = convert(x, x.charAt(0)) + x.substr(1);
    }
    return x;
  }


freebase.add_widget=function(obj){
  this.doc="add a generic html view of a topic"
  if(!obj || !id){return obj}
  var id=obj.mid|| obj.id;
  var html='<a href="#" class="imagewrap" data-id="'+id+'" style="position:relative; width:200px; height:200px;">'
    +'<img style="border-radius:5px;" src="'+globals.image_host
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

// for(var i in aliases){
//   aliases[i].map(function(v){
//     freebase[v]=freebase[i]
//     freebase[v].is_alias=true
//   })
// }



  var aliases={
    mqlread:["query", "mql_read"],
    topic:["topic_api","all_data","data","everything","get_data"],
    paginate:["continue","all","each"],
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

//
var documentation=function(f,options,callback){
  callback=callback||console.log;
  options=options||{};
  var str=[];
    str.push('Freebase.com nodejs-library')
    str.push('https://github.com/spencermountain/Freebase-nodejs--');
    if(f){
      if(freebase[f]){
        str.push(" * "+f)
        var f=new freebase[f]()
        str.push(f.doc)
      return
      }else{
        str.push("Couldn't find the function "+f+". Here are the available functions:")
      }
    }
    Object.keys(freebase).map(function(f){
        str.push("* **"+f+'** ')
        var f=new freebase[f](null,{},function(){})
        str.push('     -'+f.doc)
    })
    if(options.html){
      str=str.join('<br/>')
    }
    else{
      str=str.join('\n')
    }
    callback(str)
}
//documentation()

// console.log(Object.keys(freebase))
module.exports =freebase;
