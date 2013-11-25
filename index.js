//By Spencer Kelly (@spencermountain)
//https://github.com/spencermountain/Freebase-nodejs

//if nodejs, load these modules, otherwise assume they're included
if (typeof module !== 'undefined' && module.exports) {
  var _ = require('underscore');
  var async = require('async');
  var fns = require('./helpers/helpers');
  var data = require('./helpers/data.js').data;
}

var freebase = (function() {

  var freebase = {};


  ////////////
  /// to use mqlwrite, generate a access token by running 'node ./mqlwrite/create_access_token.js', and paste it in here
  //////////
  freebase.access_token=""
  ///////////

  var globals = {
    host: 'https://www.googleapis.com/freebase/v1/',
    image_host: "https://www.googleapis.com/freebase/v1/image",
    geosearch: 'http://api.freebase.com/api/service/geosearch',
    wikipedia_host: 'http://en.wikipedia.org/w/api.php',
    generic_query: {
      id: null,
      name: null,
      mid: null,
      type: []
    }
  }

  freebase.mqlread = function(query, options, callback) {
    this.doc = "interface to freebase's mql api";
    this.reference = "http://wiki.freebase.com/wiki/MQL";
    callback = callback || console.log;
    if (!query) {
      return callback({})
    }
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {};
    options.uniqueness_failure = options.uniqueness_failure || "soft";
    options.cursor = options.cursor || "";
    var url=globals.host+'mqlread?query='+JSON.stringify(query)+"&cursor="+options.cursor
    fns.http(url, options, function(result) {
      return callback(result)
    })
  }
  // freebase.mqlread([{id:"/en/radiohead",name:null}])


  freebase.lookup_id = function(q, options, callback) {
    this.doc = "generic info for an id";
    var ps = fns.settle_params(arguments, freebase.lookup, {
      type: "/common/topic"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    var query = fns.clone(globals.generic_query);
    query.id = ps.q;
    freebase.mqlread([query], options, function(r) {
      r = r.result || []
      return ps.callback(r[0] || {})
    })
  }
   // freebase.lookup_id('/en/radiohead')
  // freebase.lookup_id('/m/07jnt')

  freebase.search = function(q, options, callback) {
    this.doc = "regular search api";
    this.reference = "http://wiki.freebase.com/wiki/ApiSearch";

    var ps = fns.settle_params(arguments, freebase.search, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    if (ps.is_id) {
      return freebase.lookup_id(ps.q, ps.options, function(r){
         ps.callback([r])
      });
    }
    //if its a url
    if (ps.url) {
      return freebase.url_lookup(ps.q, ps.options, function(result) {
        if (result && result.result && result.result[0]) {
          return ps.callback(result.result);
        }
        return ps.callback([])
      })
    }
    //if its an id
    if (ps.is_id) {
      ps.options.limit = 1;
      return freebase.lookup_id(ps.q, ps.options, ps.callback)
    }
    ps.options.query = encodeURIComponent(ps.q);
    delete ps.options.property
    delete ps.options.strict
    var params = fns.set_params(ps.options)
    var url = globals.host + 'search/?' + params;
    if (ps.options.type == "/type/type" || ps.options.type == "/type/property") {
      url += "&scoring=schema&stemmed=true"
    }
    fns.http(url, ps.options, function(result) {
      if (!result || !result.result || !result.result[0]) {
        return ps.callback([])
      }
      return ps.callback(result.result)
    })
  }
  // freebase.search("bill murray")
  // freebase.search("/m/01sh40")
  // freebase.search("/en/radiohead")

  //*************
  //slightly different lookup when its a url
  freebase.url_lookup = function(q, options, callback) {
    this.doc = "freebase search tuned for looking up a url";
    this.reference = "http://wiki.freebase.com/wiki/ApiSearch"
    var ps = fns.settle_params(arguments, freebase.url_lookup, {
      type: "/common/topic",
      strict: true
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    var output = fns.clone(globals.generic_query);
    var url = globals.host + 'search?type=/common/topic&limit=1&query=' + encodeURIComponent(ps.q);
    url += "&mql_output=" + encodeURIComponent(JSON.stringify(output));
    fns.http(url, ps.options, function(result) {
      if (!result || !result.result) {
        return ps.callback({})
      }
      var r = result.result || []
      return ps.callback(r[0])
    })
  }
  // freebase.url_lookup("http://myspace.com/u2")


  freebase.lookup = function(q, options, callback) {
    this.doc = "freebase search with filters to ensure only a confident, unambiguous result";
    this.reference = "http://wiki.freebase.com/wiki/ApiSearch"
    var ps = fns.settle_params(arguments, freebase.lookup, {
      type: "/common/topic",
      strict: true
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //if its a url
    if (ps.url) {
      return freebase.url_lookup(ps.q, ps.options, ps.callback)
    }
    //if its an id
    if (ps.is_id) {
      ps.options.limit = 1;
      return freebase.lookup_id(ps.q, ps.options, ps.callback)
    }
    //craft the url
    var strength = ps.options.strength || "full";
    if (!ps.options.strict) {
      strength = "word"
    }
    var url = globals.host + 'search?limit=2&lang=en&type=' + ps.options.type + '&filter=';
    var output = fns.clone(globals.generic_query);
    url += encodeURIComponent('(any name{' + strength + '}:"' + ps.q + '" alias{' + strength + '}:"' + ps.q + '")');
    if (ps.options.type == "/type/type" || ps.options.type == "/type/property") {
      url += "&scoring=schema&stemmed=true"
    }
    url += "&mql_output=" + encodeURIComponent(JSON.stringify(output));
    return fns.http(url, ps.options, function(result) {
      if (!result || !result.result || !result.result[0]) {
        return ps.callback({})
      }
      //filter-out shit results
      result = result.result || []
      result[0] = result[0] || {}
      result[1] = result[1] || {}
      //kill low-relevance
      if (!result[0].score && result[0].score < 30) {
        return ps.callback({})
      }
      if (ps.options.strict) {
        //kill if 2nd result is also notable
        if (((result[0].score || 0) * 0.7) < (result[1].score || 0)) {
          return ps.callback({})
        }
      }
      //kill if types are crap
      if (result[1] && result[0].notable && fns.isin(result[0].notable.id, data.kill)) {
        return ps.callback({})
      }
      result[0].name = result[0].name || result[0].text || '';
      return ps.callback(result[0])
    })
  }
  // freebase.lookup(["/en/radiohead", "http://myspace.com/u2"])
  // freebase.lookup("/m/01sh40")
  //freebase.search("/en/radiohead")
  // freebase.lookup("pulp fiction")



  freebase.get_id = function(q, options, callback) {
    this.doc = "like freebase.lookup but satisfied with an id"
    this.reference = "http://wiki.freebase.com/wiki/ApiSearch"
    var ps = fns.settle_params(arguments, freebase.get_id, {
      type: "/common/topic"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //is an id
    if (!ps.q || (ps.q.match(/\/.{1,32}\/.{3}/) != null)) {
      return ps.callback({
        id: ps.q
      })
    }
    //is a normal search
    freebase.lookup(ps.q, ps.options, function(result) {
      if (!result) {
        return ps.callback({})
      }
      if (ps.options.type == "/type/type") {
        result.mid = result.id;
        return ps.callback(result)
      }
      if (result.mid) {
        result.id = result.id || result.mid;
        return ps.callback(result)
      }
      return ps.callback({})
    })
  }
  //freebase.get_id("/en/radiohead")

  freebase.topic = function(q, options, callback) {
    this.doc = "topic api"
    this.reference = "http://wiki.freebase.com/wiki/Topic_API"
    var ps = fns.settle_params(arguments, freebase.topic, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      var id = topic.id;
      if (!id) {
        return ps.callback({})
      }
      ps.options.filter = ps.options.filter || 'all'
      var url = globals.host + 'topic' + id + '?' + fns.set_params(ps.options)
      fns.http(url, ps.options, function(result) {
        return ps.callback(result)
      })
    })
  }
  // freebase.topic("toronto", {filter:"allproperties"})



  freebase.paginate = function(query, options, callback) {
    this.doc = "get all of the results to your query";
    this.reference = "http://wiki.freebase.com/wiki/MQL";
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {}
    callback = callback || console.log
    options.max = options.max || 2000;
    var all = [];
    //recursive mqlread until cursor is false, or maximum reached
    var iterate = function(cursor) {
      options.cursor = cursor || ""
      freebase.mqlread(query, options, function(result) {
        if (!result || !result.result) {
          return callback(all);
        }
        all = all.concat(result.result);
        if (result.cursor && (!options.max || all.length < options.max)) {
          iterate(result.cursor)
        } else {
          return callback(all)
        }
      })
    }
    iterate('')
  }
  // freebase.paginate([{"type":"/astronomy/moon","name":null, limit:2}],{max:13})

  freebase.description = function(q, options, callback) {
    this.doc = "get a text blurb from freebase";
    this.reference = "http://wiki.freebase.com/wiki/ApiText"
    var ps = fns.settle_params(arguments, freebase.description, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback("")
      }
      var url = globals.host + 'text/' + topic.id;
      fns.http(url, ps.options, function(result) {
        if (!result.result) {
          return ps.callback('')
        }
        return ps.callback(result.result)
      })
    });
  }
  // freebase.description("tunisia")

  freebase.image = function(q, options, callback) {
    this.doc = "get a url for image href of on this topic"
    this.reference = "http://wiki.freebase.com/wiki/ApiImage"
    var ps = fns.settle_params(arguments, freebase.image, {
      maxheight: 250,
      maxwidth: 250,
      errorid: "/m/0djw4wd"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback("")
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "/common/topic/image": [{
          "id": null
        }]
      }]
      freebase.mqlread(query, ps.options, function(result) {
        if (!result || !result.result || !result.result[0] || !result.result[0]["/common/topic/image"][0]) {
          return ps.callback('');
        }
        var url = globals.image_host + result.result[0]["/common/topic/image"][0].id;
        delete ps.options.strict
        delete ps.options.cursor
        delete ps.options.uniqueness_failure
        var params = fns.set_params(ps.options);
        url += '?' + params;
        return ps.callback(url)
      })
    })
  }
  // freebase.image('toronto',{type:"/location/citytown"})

  freebase.grammar = function(q, options, callback) {
    this.doc = "get the proper pronoun to use for a topic eg. he/she/they/it"
    var ps = fns.settle_params(arguments, freebase.grammar, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback({})
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "type": [],
        "/people/person/gender": [{
          "id": null,
          "optional": true
        }],
        "/fictional_universe/fictional_character/gender": [{
          "id": null,
          "optional": true
        }]
      }]
      freebase.mqlread(query, options, function(result) {
        if (!result || !result.result || !result.result[0]) {
          return ps.callback({})
        }
        result = result.result[0];
        var grammar = {
          plural: false,
          gender: null,
          article: "a",
          pronoun: "it",
          copula: "is"
        }
        //people grammar
        if (fns.isin('/people/person', result.type) || fns.isin('/fictional_universe/fictional_character', result.type)) {
          var gender = result["/people/person/gender"][0] || result["/fictional_universe/fictional_character/gender"][0];
          if (gender) {
            if (gender.id == "/en/male") { //male
              grammar.gender = "male";
              grammar.pronoun = "he";
            } else if (gender.id == "/en/female") { //female
              grammar.gender = "female";
              grammar.pronoun = "she";
            }
          } else { //no gender person
            grammar.gender = "unknown";
            grammar.pronoun = "they";
          }
        } else { //not a person
          //plural topics
          if (_.intersection(data.plural_types, result.type).length > 0) {
            grammar.plural = true;
            grammar.pronoun = "they";
            grammar.copula = "are"
          }
          //categories that need a 'the' instead of 'a'
          if (_.intersection(data.definate_articles, result.type).length > 0) {
            grammar.article = "the";
          }
        }
        return ps.callback(grammar);
      })
    })
  }
  // freebase.grammar("toronto maple leafs")

  freebase.same_as_links = function(q, options, callback) {
    this.doc = "turns a url into a freebase topic and list its same:as links"
    var ps = fns.settle_params(arguments, freebase.same_as_links, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }

    var url = globals.host + 'search?type=/common/topic&limit=1&query=' + encodeURIComponent(ps.q);
    fns.http(url, ps.options, function(result) {
      if (!result || !result.result || !result.result[0]) {
        return ps.callback({})
      }
      //get its formatted links from the topic api
      freebase.topic(result.result[0].mid, ps.options, function(all) {
        if (_.isEmpty(all)) {
          return ps.callback([]);
        }
        var links = [];
        //same-as ones
        if (all.property['/common/topic/topic_equivalent_webpage']) {
          links = all.property['/common/topic/topic_equivalent_webpage'].values.map(function(v) {
            return {
              href: v.value,
              title: fns.parseurl(v.value).authority
            }
          })
        }
        //webpage ones
        if (all.property['/common/topic/topical_webpage']) {
          links = links.concat(all.property['/common/topic/topical_webpage'].values.map(function(v) {
            var host = fns.parseurl(v.value).authority || ''
            return {
              href: v.value,
              title: host.replace(/^www\./, '')
            }
          }))
        }
        var obj = {
          topic: result.result[0],
          links: links
        }
        return ps.callback(obj)
      })
    })
  }
  // freebase.same_as_links("toronto maple leafs")

  freebase.translate = function(q, options, callback) {
    this.doc = "return specific language title for a topic"
    this.reference = "http://wiki.freebase.com/wiki/I18n"
    var ps = fns.settle_params(arguments, freebase.translate, {
      lang: "/lang/fr"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    if (!ps.options.lang.match(/\/lang\//)) {
      ps.options.lang = '/lang/' + ps.options.lang
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback("")
      }
      var query = [{
        "id": topic.id,
        "name": [{
          "lang": ps.options.lang,
          "value": null
        }]
      }]
      freebase.mqlread(query, {}, function(result) {
        if (!result || !result.result || !result.result[0]) {
          return ps.callback('')
        }
        var name = result.result[0].name || [{}]
        name = name[0].value || '';
        return ps.callback(name)
      })
    })
  }
  // freebase.translate("toronto maple leafs", {lang:"/lang/ja"})

  freebase.notable = function(q, options, callback) {
    this.doc = "get a topic's notable type"
    var ps = fns.settle_params(arguments, freebase.notable, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.topic(ps.q, {
      filter: "/common/topic/notable_types"
    }, function(result) {
      if (!result || !result.property || !result.property['/common/topic/notable_types']) {
        return ps.callback({})
      }
      var notable = result.property['/common/topic/notable_types'] || {
        values: []
      };
      notable.values[0].name = notable.values[0].text;
      return ps.callback(notable.values[0])
    });
  }
  // freebase.notable("toronto maple leafs")

  freebase.sentence = function(q, options, callback) {
    this.doc = "get the first sentence of a topic description"
    this.reference = "http://wiki.freebase.com/wiki/APIText"
    var ps = fns.settle_params(arguments, freebase.sentence, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.description(ps.q, ps.options, function(desc) {
      if (!desc) {
        return ps.callback("")
      }
      desc = fns.sentenceparser(desc) || []
      desc = desc[0] || ''
      desc = desc.replace(/\(.*?\)/g, '') //remove birthdates
      desc = desc.replace(/  /g, ' ')
      return ps.callback(desc)
    })
  }
  // freebase.sentence('john malkovich',{},console.log)
  // freebase.sentence(['radiohead','john malkovich'],{},console.log)

  freebase.list = function(q, options, callback) {
    this.doc = "get a list of topics in a type"
    var ps = fns.settle_params(arguments, freebase.list, {
      limit: 2000
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback([]);
    }
    //singularize it if its not an id
    if (!ps.q.match(/\/.{1,12}\/.{3}/)) {
      ps.q = fns.singularize(ps.q);
    }
    //get its id
    freebase.get_id(ps.q, {
      type: "/type/type"
    }, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback([])
      }
      var query = [{
        "type": topic.id,
        "name": null,
        "id": null,
        "mid": null,
        "limit": 100
      }]
      if (ps.options.extend) {
        for (var i in ps.options.extend) {
          query[0][i] = ps.options.extend[i]
        }
      }
      freebase.paginate(query, ps.options, ps.callback)
    })
  }
  // freebase.list("hurricanes",{}, function(r){console.log(r)})
  // freebase.list("moons",{}, function(r){console.log(r)})


  freebase.place_data = function(geo, options, callback) {
    this.doc = "from a geo-coordinate, get the town, province, country, and timezone for it"
    callback = callback || console.log;
    if (!geo) {
      return callback({})
    }
    options = options || {};
    //handle an array
    if (fns.isarray(geo) && geo.length > 1) {
      var ps = fns.settle_params(arguments, freebase.place_data, {});
      return fns.doit_async(ps)
    }
    var location = {
      "coordinates": [geo.lng, geo.lat],
      "type": "Point"
    }
    var out = [{
      "mid": null,
      "name": null,
      "type": []
    }]
    //999000ft  == 30k
    var filter='(all type:/location/citytown (within radius:999000ft lon:'+ geo.lng +' lat:'+ geo.lat +'))'
    var url = globals.host+'search?filter='+ filter +'&limit=200'
    fns.http(url, options, function(r) {
      var all = {
        city: null,
        country: null,
        province: null,
        timezone: null
      }
      all.city = r.result[0];
      var query = [{
        "name": null,
        "id": r.result[0].mid,
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
        for (var i in r.result[0]['/location/location/containedby']) {
          var v = r.result[0]['/location/location/containedby'][i]
          if (v.type.filter(function(t) {
            return t == "/location/country"
          })[0]) {
            all.country = {
              id: v.id,
              name: v.name
            }
          } else if (v.type.filter(function(t) {
            return t == "/location/administrative_division"
          })[0]) {
            all.province = {
              id: v.id,
              name: v.name
            }
          }
          if (v["/location/location/time_zones"][0] && v["/location/location/time_zones"].length == 1) {
            all.timezone = v["/location/location/time_zones"][0];
          }
          if (all.country) {
            return callback(all)
          }
          //second layer looks good too
          v['/location/location/containedby'].map(function(o) {
            if (o.type.filter(function(t) {
              return t == "/location/country"
            })[0]) {
              all.country = {
                id: o.id,
                name: o.name
              }
            } else if (!all.province && o.type.filter(function(t) {
              return t == "/location/administrative_division"
            })[0]) {
              all.province = {
                id: o.id,
                name: o.name
              }
            }
            if (!all.timezone && o["/location/location/time_zones"][0] && o["/location/location/time_zones"].length == 1) {
              all.timezone = o["/location/location/time_zones"][0];
            }
          })
        }
        return callback(all)
      })

    })
  }
  // freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {}, console.log)


  freebase.incoming = function(q, options, callback) {
    this.doc = "get any incoming data to this topic, ignoring cvt types"
    var ps = fns.settle_params(arguments, freebase.incoming, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }

    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback([])
      }
      var query = [{
        "id": topic.id,
        "/type/reflect/any_reverse": [{
          "link": null,
          "id": null,
          "name": null,
          "type": "/common/topic",
          "limit": 170
        }]
      }]
      //this technically doesn't paginate.
      freebase.paginate(query, ps.options, function(result) {
        if (!result || !result[0] || !result[0]['/type/reflect/any_reverse']) {
          return ps.callback([])
        }
        return ps.callback(result[0]['/type/reflect/any_reverse'])
      })
    })
  }
  // freebase.incoming("toronto")

  freebase.outgoing = function(q, options, callback) {
    this.doc = "return all outgoing links for a topic, traversing cvt types"
    var ps = fns.settle_params(arguments, freebase.outgoing, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }

    freebase.lookup(ps.q, ps.options, function(topic) {
      if (!topic || !topic.mid) {
        return ps.callback([])
      }
      freebase.topic(topic.mid, ps.options, function(result) {
        if (_.isEmpty(result)) {
          return ps.callback([]);
        }
        var out = [];
        //get rid of permissions and stuff..
        result.property = fns.kill_boring(result.property)
        Object.keys(result.property).forEach(function(key) {
          var v = result.property[key];
          //add topics
          if (v.valuetype == "object") {
            v.values = v.values.map(function(s) {
              s.property = key;
              return s
            })
            out = out.concat(v.values)
          }
          //add the topics from cvt values in the same manner
          if (v.valuetype == "compound") {
            v.values.forEach(function(c) {
              c.property = fns.kill_boring(c.property);
              Object.keys(c.property).forEach(function(key2) {
                if (c.property[key2].valuetype == "object") {
                  c.property[key2].values = c.property[key2].values.map(function(s) {
                    s.property = [key, key2];
                    return s
                  })
                  out = out.concat(c.property[key2].values)
                }
              })
            })
          }
        })
        out = out.map(function(o) {
          return {
            name: o.text,
            id: o.id,
            property: o.property
          }
        })
        //add sentence-forms
        out = out.map(function(o) {
          var property = o.property || '';
          if (fns.isarray(o.property)) {
            property = o.property.join('');
          }
          o.sentence = topic.name + "'s " + _.last(property.split('/')).replace('_', ' ') + " is " + o.name; //ugly fallback
          var grammar = data.sentence_grammars.filter(function(v) {
            return v.id == property
          })[0] || {}
          if (grammar["sen"] && topic.name && o.name) {
            o.sentence = grammar["sen"].replace(/\bsubj\b/, topic.name).replace(/\bobj\b/, o.name);
          }
          return o
        })
        return ps.callback(out)
      })
    })
  }
  // freebase.outgoing("vancouver")

  freebase.graph = function(q, options, callback) {
    this.doc = "return all outgoing and incoming links for a topic"
    var ps = fns.settle_params(arguments, freebase.graph, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.lookup(ps.q, ps.options, function(topic) {
      if (!topic) {
        return ps.callback({})
      }
      delete topic.score;
      delete topic.lang;
      ps.options.filter = "allproperties";
      freebase.topic(topic.mid, ps.options, function(r) {
        if (!r || !r.property) {
          return ps.callback([])
        }
        var incoming = {};
        var outgoing = {};
        Object.keys(r.property).forEach(function(k) {
          if (k.match(/^\!/)) {
            outgoing[k] = r.property[k]
          } else {
            incoming[k] = r.property[k]
          }
        })
        incoming = fns.parse_topic_api(incoming);
        outgoing = fns.parse_topic_api(outgoing);
        var out = incoming.map(function(v) {
          return {
            subject: topic,
            property: {
              id: v.property
            },
            object: v,
            direction: "outgoing"
          }
        })
        out = out.concat(outgoing.map(function(v) {
          return {
            object: topic,
            property: {
              id: v.property
            },
            subject: v,
            direction: "incoming"
          }
        }))
        //add the sentences
        out = out.map(function(obj) {
          obj.property.id = obj.property.id.replace(/^\!/, '');
          delete obj.subject.property;
          var grammar = data.sentence_grammars.filter(function(v) {
            return v.id == obj.property.id
          })[0] || {}
          obj.sentence = obj.subject.name + "'s " + _.last(obj.property.id.split('/')).replace('_', ' ') + " is " + obj.object.name;
          if (grammar["sen"] && obj.subject.name && obj.object.name) {
            obj.sentence = grammar["sen"].replace(/\bsubj\b/, obj.subject.name).replace(/\bobj\b/, obj.object.name);
          }
          return obj
        })
        return ps.callback(out)
      })
    })
  }
  //freebase.graph("toronto")
  // freebase.graph("/m/07jnt")
  // freebase.graph("shawshank redemption")

  freebase.related = function(q, options, callback) {
    this.doc = "get similar topics to a topic"
    var ps = fns.settle_params(arguments, freebase.related, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    var all = [];
    //pluck relevant connected topics from outgoing links
    freebase.outgoing(ps.q, ps.options, function(result) {
      all = result.filter(function(v) {
        return fns.isin(v.property, data.related_properties)
      })
      //randomize the results
      all = all.sort(function(a, b) {
        return (Math.round(Math.random()) - 0.5);
      })
      all = all.map(function(v) {
        if (!v.sentence) {
          v.sentence = v.name + " is related to " + result.name
        }
        return v
      })
      all = fns.json_unique(all, "id")
      if (all.length >= options.max) {
        return ps.callback(all)
      }
      //else, append topics that share the notable type
      freebase.notable(ps.q, ps.options, function(result) {
        if (result && result.id) {
          return freebase.list(result.id, {
            max: ps.options.max
          }, function(r) {
            if (!r || _.isEmpty(r)) {
              return ps.callback(all)
            }
            r = r.map(function(v) {
              v.sentence = v.name + " is also a " + result.name;
              return v
            })
            all = all.concat(r); //todo
            all = fns.json_unique(all, "id")
            all = all.sort(function(a, b) {
              return (Math.round(Math.random()) - 0.5);
            })
            return ps.callback(all)
          })
        } else {
          return ps.callback(all)
        }
      })
    })
  }
  // freebase.related("toronto", {}, function(r){console.log(JSON.stringify(r, null, 2));})

  freebase.is_a = function(q, options, callback) {
    this.doc = "get a list of identifiers for a topic"
    var ps = fns.settle_params(arguments, freebase.related, {
      max: 25
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.topic(ps.q, ps.options, function(r) {
      if (_.isEmpty(r)) {
        return ps.callback({});
      }
      var types = r.property["/type/object/type"] || {}
      types = types.values || []
      types = types.filter(function(v) {
        return !v.text.match(/Topic/)
      })
      types = types.map(function(v) {
        return {
          name: v.text,
          id: v.id,
          property: "/type/object/type"
        }
      })
      r = fns.parse_topic_api(r.property)
      r = r.filter(function(v) {
        return fns.isin(v.property, data.is_a)
      })
      r = r.concat(types)
      return ps.callback(r)
    })
  }
  // freebase.is_a("toronto")
  // freebase.is_a("george clooney")

  freebase.property_lookup = function(q, options, callback) {
    this.doc = "lookup soft property matches, like 'birthday' vs 'date of birth'"
    var ps = fns.settle_params(arguments, freebase.property_lookup, {
      type: "/type/property"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.search(ps.q, ps.options, function(candidate_properties) {
      //look up offline for property aliases
      if (!q.match(/\/.*?\/.*?\//)) {
        q = q.toLowerCase();
        q = q.replace(/  /, ' ');
        q = q.replace(/^\s+|\s+$/, '');
        var property_singular = fns.singularize(q);
        candidate_properties = candidate_properties.concat(data.properties.filter(function(v) {
          return v.n == q || v.n == property_singular
        }))
      }
      return ps.callback(candidate_properties)
    })
  }
  // freebase.property_lookup("albums")


  freebase.question = function(q, options, callback) {
    this.doc = "give a topic and a property, and get a list of results"
    var ps = fns.settle_params(arguments, freebase.question, {
      max: 25
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid || !ps.options.property) {
      return ps.callback({});
    }
    var property = ps.options.property
    var type = ps.options.property.match(/\/.*?\/.*?\//)
    //straight-up id search
    if (property.match(/^\/.{1,12}\/.{3}/)) {
      return freebase.topic(q, {}, function(r) {
        if (!r || !r.property || !r.property[property]) {
          return ps.callback([])
        }
        return ps.callback(r.property[property].values)
      })
    }
    var candidate_metaschema = fns.metaschema_lookup(property);
    if (candidate_metaschema) {
      ps.options.filter = '(all ' + candidate_metaschema + ':"' + q + '")'
      freebase.search('', options, function(result) {
        return ps.callback(result)
      })
    } else {
      freebase.property_lookup(property, {}, function(candidate_properties) {
        if (candidate_properties.length === 0) {
          return ps.callback([])
        }
        ps.options.filter = type;
        //look for these properties in the topic api
        freebase.topic(ps.q, ps.options, function(result) {
          if (_.isEmpty(result)) {
            return ps.callback({});
          }
          var all = [];
          candidate_properties.forEach(function(p) {
            if (result.property[p.id]) {
              all = all.concat(result.property[p.id].values)
            }
          })
          all = fns.json_unique(all, "id")
          return ps.callback(all)
        })
      })
    }
  }
  // freebase.question("keanu reeves", {property:"children"})
  //freebase.question("thom yorke", "produced") //******
  // freebase.question("pulp fiction", {property:"/film/film/initial_release_date"})
  // freebase.question("keanu reeves", {property:"films"}) //******


  freebase.dig = function(q, options, callback) {
    this.doc = "transitive query on a specific property, maximum 3-ply"
    var ps = fns.settle_params(arguments, freebase.property_lookup, {
      max: 25
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    var all = [];
    freebase.question(ps.q, ps.options, function(r) {
      if (!r || !fns.isarray(r) || r.length === 0) {
        return ps.callback(all)
      }
      all = all.concat(r);
      r = r.slice(0, ps.options.max).map(function(v) {
        return v.id
      })
      return fns.doit_async({
        q: r,
        options: ps.options,
        method: freebase.question,
        callback: function(big) {
          if (!big || !fns.isarray(big) || big.length === 0) {
            return ps.callback(all)
          }
          all = all.concat(_.flatten(big, 'shallow'))
          all = fns.json_unique(all, "id")
         //todo: fix
         obj= {q:r, options:ps.options, method:freebase.question, callback:function(big) {
            if (!big || !fns.isarray(big) || big.length === 0) {
              return ps.callback(all)
            }
            all = all.concat(_.flatten(big, 'shallow'))
            all = fns.json_unique(all, "id")
            return callback(all)
          }}
          fns.doit_async(obj)
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

  freebase.gallery = function(q, options, callback) {
    this.doc = "list of topics with images"
    var ps = fns.settle_params(arguments, freebase.gallery, {
      extend: {
        "/common/topic/image": [{
          "id": null,
          "optional": "required"
        }]
      }
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.list(ps.q, ps.options, function(result) {
      result = result.map(function(obj) {
        obj.href = globals.image_host + _.last(obj["/common/topic/image"]).id;
        obj.thumbnail = globals.image_host + _.last(obj["/common/topic/image"]).id + '?mode=fillcropmid&maxwidth=150&maxheight=150&errorid=/m/0djw4wd';
        obj = freebase.add_widget(obj)
        return obj;
      })
      return ps.callback(result)
    })
  }
  // freebase.gallery('hurricanes') //******


  freebase.wordnet = function(q, options, callback) {
    this.doc = "query wordnet via freebase"
    var ps = fns.settle_params(arguments, freebase.wordnet, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    var query = [{
      "id": null,
      "type": "/base/wordnet/synset",
      "gloss": null,
      "syntactic_category": null,
      "sort": [
        "syntactic_category",
        "word.sense_number",
        "a:word.word_number"],
      "word": {
        "sense_number": null,
        "derivationally_related_forms": [{
          "sense": {
            "name": null,
            "id": null
          },
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
    if (ps.options.limit) {
      query[0].limit = ps.options.limit;
    }
    freebase.mqlread(query, ps.options, function(r) {
      return ps.callback(r.result)
    })
  }
  // freebase.wordnet("charming")

  freebase.transitive = function transitive(q, options, callback) {
    this.doc = "do a transitive-query, like all rivers in canada, using freebase metaschema"
    var ps = fns.settle_params(arguments, freebase.transitive, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback({})
      }
      var candidate_metaschema = fns.metaschema_lookup(ps.options.property);
      if (candidate_metaschema) {
        ps.options.filter = '(all ' + candidate_metaschema + ':"' + topic.mid + '")'
        freebase.search('', ps.options, function(result) {
          return ps.callback(result)
        })
      } else {
        return ps.callback([])
      }
    })
  }
  //*******
 // freebase.transitive("ontario", {property:"part_of"}, function(r){
 //  console.log(r)
 // })



  freebase.geolocation = function(q, options, callback) {
    this.doc = "lat/long for a topic"
    var ps = fns.settle_params(arguments, freebase.geolocation, {
      type: "/location/location"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback({})
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "/location/location/geolocation": [{
          "latitude": null,
          "longitude": null,
          "type": "/location/geocode",
          "optional": true
        }]
      }]
      freebase.mqlread(query, ps.options, function(result) {
        if (result.result && result.result[0] && result.result[0]['/location/location/geolocation'][0]) {
          var geo = result.result[0]['/location/location/geolocation'][0];
          delete geo.type;
          delete geo.optional;
          return ps.callback(geo);
        }
        return ps.callback({})
      })
    })
  }
  // freebase.geolocation("cn tower")

  freebase.nearby = function(q, options, callback) {
    this.doc = "list of topics nearby a location"
    var ps = fns.settle_params(arguments, freebase.nearby, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.geolocation(ps.q, {}, function(geo) {
      if (!geo || !geo.latitude || !geo.longitude) {
        return ps.callback([])
      }
      ps.options.within = ps.options.within || 500;
      ps.options.type = ps.options.type || "/location/location";

      var filter='(all type:'+ps.options.type+' (within radius:'+ps.options.within+'ft lon:'+ geo.longitude +' lat:'+ geo.latitude +'))'
      var url = globals.host+'search?filter='+ encodeURIComponent(filter) +'&limit=200'
      fns.http(url, ps.options, function(r) {
        return ps.callback(r.result)
      })
    })
  }
  // freebase.nearby("cn tower", {type:"/location/location"}, console.log)


  freebase.inside = function(q, options, callback) {
    this.doc = "list of topics inside a location"
    var ps = fns.settle_params(arguments, freebase.inside, {
      property: "part_of"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //handy to have their geocoordinates too
    ps.options.mql_output = ps.options.mql_output || [{
      "name": null,
      "id": null,
      "type": "/location/location",
      "/location/location/geolocation": [{
        "latitude": null,
        "longitude": null,
        "type": "/location/geocode",
        "optional": true
      }]
    }]
    freebase.transitive(ps.q, ps.options, function(r) {
      return ps.callback(r)
    })
  }
  // freebase.inside("montreal")//***********


  freebase.wikipedia_page = function(q, options, callback) {
    this.doc = "get a url for wikipedia based on this topic"
    var ps = fns.settle_params(arguments, freebase.wikipedia, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback("")
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value": null
        }
      }]
      freebase.mqlread(query, ps.options, function(result) {
        if (!result || !result.result || !result.result[0]) {
          return ps.callback('')
        }
        return ps.callback('http://en.wikipedia.org/wiki/' + fns.mql_unencode(result.result[0].key.value))
      })
    })
  }
  // freebase.wikipedia_page('toronto')

  freebase.dbpedia_page = function(q, options, callback) {
    this.doc = "get a url for dbpedia based on this topic"
    var ps = fns.settle_params(arguments, freebase.dbpedia, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback("")
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value": null
        }
      }]
      freebase.mqlread(query, ps.options, function(result) {
        if (!result || !result.result || !result.result[0]) {
          return ps.callback({})
        }
        var key = fns.mql_unencode(result.result[0].key.value)
        var obj = {
          html: 'http://dbpedia.org/page/' + key,
          json: 'http://dbpedia.org/data/' + key + '.json',
        }
        return ps.callback(obj)
      })
    })
  }
  // freebase.dbpedia_page('toronto')

  freebase.wikipedia_categories = function(q, options, callback) {
    this.doc = "get the wikipedia categories for a topic"
    var ps = fns.settle_params(arguments, freebase.wikipedia_categories, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //if its not a wikipedia title, reuse get-topic logic for searches/ids
    // if (ps.q.match(/ /) || ps.q.substr(0, 1) == ps.q.substr(0, 1).toLowerCase() || ps.q.match(/^\//)) {
    //   return freebase.wikipedia_page(ps.q, options, function(r) {
    //     freebase.wikipedia_categories(r, options, ps.callback)
    //   })
    // }
    var url = globals.wikipedia_host + '?action=query&prop=categories&format=json&clshow=!hidden&cllimit=200&titles=' + encodeURIComponent(ps.q);
    fns.http(url, ps.options, function(r) {
      if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
        return ps.callback([])
      }
      var cats = r.query.pages[Object.keys(r.query.pages)[0]].categories || []
      cats = cats.map(function(v) {
        return v.title
      })
      return ps.callback(cats)
    })
  }
  // freebase.wikipedia_categories(["Thom Yorke","Toronto"], {}, console.log)
  // freebase.wikipedia_categories("Thom Yorke", {}, console.log)//****

  freebase.wikipedia_links = function(q, options, callback) {
    this.doc = "outgoing links from this wikipedia page, converted to freebase ids"
    callback = callback || console.log;
    var ps = fns.settle_params(arguments, freebase.wikipedia_links, {});
    if (!q) {
      return callback({})
    }
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {};
    //handle an array
    if (fns.isarray(q) && q.length > 1) {
       var ps = fns.settle_params(arguments, freebase.wikipedia_links, {});
      return fns.doit_async(ps)
    }
    //if its not a wikipedia title, reuse get-topic logic for searches/ids
    if (q.match(/ /) || q.substr(0, 1) == q.substr(0, 1).toLowerCase() || q.match(/^\//)) {
      return freebase.wikipedia_page(q, options, function(r) {
        freebase.wikipedia_links(r, options, callback)
      })
    }
    var url = globals.wikipedia_host + '?action=query&prop=links&format=json&plnamespace=0&pllimit=500&titles=' + encodeURIComponent(q);
    fns.http(url, ps.options, function(r) {
      if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
        return callback([])
      }
      var links = r.query.pages[Object.keys(r.query.pages)[0]].links || []
      //filter-out non-freebase topics
      links = links.filter(function(v) {
        return v.title.match(/^List of /i) == null
      })
      links = links.map(function(o) {
        o.id = "/wikipedia/en/" + freebase.mql_encode(o.title.replace(/ /g, '_'));
        o.name = o.title;
        delete o.title;
        delete o.ns;
        return o
      })
      return callback(links)
    })
  }
  // freebase.wikipedia_links("Toronto", {}, console.log)

  freebase.wikipedia_external_links = function(q, options, callback) {
    this.doc = "outgoing links from this wikipedia page, converted to freebase ids"
    callback = callback || console.log;
    var ps = fns.settle_params(arguments, freebase.wikipedia_external_links, {});
    if (!q) {
      return callback({})
    }
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {};
    //handle an array
    if (fns.isarray(q) && q.length > 1) {
       var ps = fns.settle_params(arguments, freebase.wikipedia_external_links, {});
      return fns.doit_async(ps)
    }
    //if its not a wikipedia title, reuse get-topic logic for searches/ids
    if (q.match(/ /) || q.substr(0, 1) == q.substr(0, 1).toLowerCase() || q.match(/^\//)) {
      return freebase.wikipedia_page(q, options, function(r) {
        freebase.wikipedia_external_links(r, options, callback)
      })
    }
    var url = globals.wikipedia_host + '?action=query&prop=extlinks&format=json&ellimit=500&titles=' + encodeURIComponent(q);
    fns.http(url, ps.options, function(r) {
      if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
        return callback([])
      }
      var links = r.query.pages[Object.keys(r.query.pages)[0]].extlinks || []
      links = links.filter(function(v) {
        return v["*"].match(/^http/)
      })
      links = links.map(function(v) {
        var box = fns.parseurl(v["*"]);
        return {
          url: v["*"],
          domain: box.host
        }
      })
      return callback(links)
    })
  }
  // freebase.wikipedia_external_links("Toronto", {}, console.log)



  freebase.property_introspection = function(q, options, callback) {
    this.doc = "common lookups for freebase property data"
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {};
    var ps = fns.settle_params(arguments, freebase.property_introspection);
    //handle an array
    if (fns.isarray(q) && q.length > 1) {
      return fns.doit_async(ps)
    }
    var query = [{
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
        "/freebase/type_hints/mediator": null
      }],
      "unique": null,
      "schema": {
        "id": null,
        "name": null,
        "/freebase/type_profile/instance_count": null,
        "/freebase/type_hints/mediator": null
      },
      "/common/topic/description": null
    }]
    freebase.mqlread(query, options, function(r) {
      var obj = {}
      if (!r || !r.result || !r.result[0]) {
        return callback(obj)
      }
      r = r.result[0]
      obj.name = r.name
      obj.id = r.id
      obj.type = r.schema
      obj.description = r["/common/topic/description"]
      obj.unique = r.unique || false;
      obj.reverse_property = r.reverse_property
      obj.expected_type = r.expected_type

      //get its metaschema
      var query = [{
        "name": null,
        "type": "/base/fbontology/semantic_predicate",
        "paths": {
          "a:properties": q,
          "b:properties": [{
            "id": null
          }]
        }
      }]
      freebase.mqlread(query, options, function(r) {
        obj.meta = r.result
        return callback(obj)
      })
    })
  }
  // freebase.property_introspection("/government/politician/party")


  freebase.schema = function(q, options, callback) {
    this.doc = "common lookups for types and properties"
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {};
    //handle an array
    if (fns.isarray(q) && q.length > 1) {
      var ps = fns.settle_params(arguments, freebase.schema, {});
      return fns.doit_async(ps)
    }
    //see if its a type
    options.type="/type/type"
    freebase.search(q, options, function(r) {
      if (r && r[0] && r[0].id) {

        r = r[0]
        var query = [{
          "id": r.id,
          "mid": null,
          "name": null,
          "properties": [{
            "id": null,
            "name": null,
            "optional": true,
            "/type/property/reverse_property": [{
              "id": null,
              "name": null,
              "optional": true
            }]
          }],
          "/freebase/type_hints/mediator": null,
          "/freebase/type_hints/included_types": [{
            "id": null,
            "name": null,
            "optional":true
          }],
          "/freebase/type_profile/published": null,
          "/type/type/expected_by": [{
            "id": null,
            "name": null,
            "optional":true
          }],
          "/freebase/type_profile/instance_count": null,
          "/freebase/type_profile/property_count": null,
          "domain": {
            "id": null,
            "name": null
          },
          "/freebase/type_profile/equivalent_topic": [{
            "id": null,
            "name": null,
            "optional":true
          }],
          "type": "/type/type"
        }]
        freebase.mqlread(query, options, function(r) {
          if (!r || !r.result || !r.result[0]) {
            return callback({})
          }
          r = r.result[0]
          var obj = {}
          obj.domain = r.domain
          obj.id = r.id
          obj.name = r.name
          obj.included_types = r["/freebase/type_hints/included_types"]
          obj.incoming_properties = r["/type/type/expected_by"]
          obj.is_compound_value = r["/freebase/type_hints/mediator"] || false
          obj.is_commons = r["/freebase/type_profile/published"] || false
          obj.equivalent_topic = r["/freebase/type_profile/equivalent_topic"]
          obj.topic_count = r["/freebase/type_profile/instance_count"] || 0
          obj.property_count = r["/freebase/type_profile/property_count"] || 0;
          //types that include this one
          var query = [{
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
          freebase.mqlread(query, options, function(r) {
            if (!r || !r.result) {
              return callback(obj)
            }
            obj.included_by = r.result.map(function(v) {
              return {
                id: v.id,
                name: v.name
              }
            })
            return callback(obj)
          })
        })

      } else {
        freebase.property_lookup(q, options, function(r) {
          if (!r || !r[0] || !r[0].id) {
            return callback({})
          }
          return freebase.property_introspection(r[0].id, {}, callback)
        })
      }
    })
  }
  // freebase.schema("politician")


  //
  freebase.drilldown = function(q, options, callback) {
    this.doc = "get insight into the breakdown of the topics in this type, by type and quality"
    var ps = fns.settle_params(arguments, freebase.drilldown, {
      limit: 1000
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback([]);
    }
    //singularize it if its not an id
    if (!ps.q.match(/\/.{1,12}\/.{3}/)) {
      ps.q = fns.singularize(ps.q);
    }
    //get its id
    freebase.get_id(ps.q, {
      type: "/type/type"
    }, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback([])
      }
      var query = [{
        "s:type": topic.id,
        "type": [],
        "name": null,
        "id": null,
        "limit": 150,
        "estimate-count": null,
        "/common/topic/image": [{
          "id": null,
          "limit": 1,
          "optional": true
        }],
        "key": [{
          "namespace": "/wikipedia/en",
          "limit": 1,
          "value": null,
          "optional": true
        }],
        "/common/topic/alias": [{
          "value": null,
          "limit": 1,
          "optional": true
        }]
      }]
      if (options.extend) {
        for (var i in options.extend) {
          query[0][i] = options.extend[i]
        }
      }
      freebase.paginate(query, ps.options, function(result) {
        var types = _.flatten(result.map(function(v) {
          return v.type
        }));
        types = types.filter(function(v) {
          return !v.match(/\/topic$/)
        })
        var topk = fns.topk(types, result.length);
        var aliases = result.filter(function(r) {
          return r["/common/topic/alias"].length > 0
        })
        var images = result.filter(function(r) {
          return r["/common/topic/image"].length > 0
        })
        var wikipedia = result.filter(function(r) {
          return r["key"].length > 0
        })
        var obj = {
          types: topk,
          alias_percent: fns.percentage(aliases.length, result.length),
          image_percent: fns.percentage(images.length, result.length),
          wikipedia_percent: fns.percentage(wikipedia.length, result.length),
          subset: result.length,
          "estimate-count": result[0]["estimate-count"]
        }
        ps.callback(obj)
      })
    })
  }
  // freebase.drilldown("/chemistry/chemical_compound",{max:400},console.log)


  freebase.mql_encode = function(s) {
    this.doc = "quote a unicode string to turn it into a valid mql /type/key/value"
    if (!s) {
      return ''
    }
    s = s.replace(/  /, ' ');
    s = s.replace(/^\s+|\s+$/, '');
    s = s.replace(/ /g, '_');
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
    var x = s.replace(MQLKEY_CHAR_MUSTQUOTE, convert);
    if (x.charAt(0) == '-' || x.charAt(0) == '_') {
      x = convert(x, x.charAt(0)) + x.substr(1);
    }
    return x;
  }


  freebase.category_list = function(q, options, callback) {
    this.doc = "get the freebase topics in a wikipedia category"
    var ps = fns.settle_params(arguments, freebase.category_list, {
      depth: 1
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //if its not a wikipedia category
    if (!ps.q.match(/Category:/)) {
      ps.q = 'Category:' + ps.q
    }
    var all_topics = [];
    var all_categories = [];
    iterate(ps.q, '')

    function iterate(cat, cmcontinue) {
      var url = globals.wikipedia_host + "?action=query&list=categorymembers&format=json&cmlimit=400&cmtitle=" + encodeURIComponent(cat) + "&cmcontinue=" + cmcontinue;
      fns.http(url, ps.options, function(r) {
        if (!r || !r.query || !r.query.categorymembers || !r.query.categorymembers[Object.keys(r.query.categorymembers)[0]]) {
          return ps.callback([])
        }
        all_categories = all_categories.concat(r.query.categorymembers.filter(function(v) {
          return v.ns == 14
        }));
        var cmcontinue = r["query-continue"] || {}
        cmcontinue = cmcontinue.categorymembers || {}
        cmcontinue = cmcontinue.cmcontinue || '';
        var topics = r.query.categorymembers.filter(function(v) {
          return v.ns == 0
        });
        topics = topics.map(function(v) {
          return {
            id: "/wikipedia/en/" + freebase.mql_encode(v.title),
            article: 'http://en.wikipedia.org/wiki/index.html?curid=' + v.pageid,
            title: v.title
          }
        })
        all_topics = all_topics.concat(topics);
        if (!cmcontinue) {
          return ps.callback(all_topics)
        } else {
          iterate(cat, cmcontinue); //recurse
        }
      })
    }
  }
  // freebase.category_list("Category:Redirects_from_plurals")



  freebase.wikipedia_subcategories = function(q, options, callback) {
    this.doc = "find the subcategories of this wikipedia category"
    var ps = fns.settle_params(arguments, freebase.wikipedia_subcategories, {
      depth: 1,
      already: []
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //if its not a wikipedia category
    if (!ps.q.match(/Category:/)) {
      ps.q = 'Category:' + ps.q
    }
    var url = globals.wikipedia_host + "?action=query&list=categorymembers&format=json&cmlimit=400&cmnamespace=14&cmtitle=" + encodeURIComponent(ps.q);
    fns.http(url, ps.options, function(r) {
      if (!r || !r.query || !r.query.categorymembers || !r.query.categorymembers[Object.keys(r.query.categorymembers)[0]]) {
        return ps.callback([]);
      }
      var cats = r.query.categorymembers.map(function(v) {
        return v.title
      });
      //remove if done already (for recursive cats)
      cats = cats.filter(function(v) {
        return !fns.isin(v, ps.options.already)
      })
      ps.options.already = fns.compact_strong(_.flatten(ps.options.already.concat(cats)));
      if (ps.options.depth > 1 && cats.length > 0) {
        ps.options.depth = ps.options.depth - 1;
        return freebase.wikipedia_subcategories(cats, ps.options, function(r) {
          ps.options.already = ps.options.already.concat(r)
          return ps.callback(fns.compact_strong(_.flatten(ps.options.already)));
        })
      } else {
        return ps.callback(ps.options.already)
      }
    })
  }
  // freebase.wikipedia_subcategories("Category:Enzymes",{depth:2},function(r){console.log(JSON.stringify(r))})
  //freebase.wikipedia_subcategories(["Category:Toronto","Category:Vancouver"])


  freebase.rdf = function(q, options, callback) {
    this.doc = "RDF api"
    this.reference = "http://wiki.freebase.com/wiki/RDF"
    var ps = fns.settle_params(arguments, freebase.topic, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      var id = topic.id;
      if (!id) {
        return ps.callback({})
      }
      ps.options.filter = ps.options.filter || 'all'
      var url = globals.host + "rdf" + id;
      fns.softget(url, ps.options, function(result) {
        return ps.callback(result || '')
      })
    })
  }
  // freebase.rdf("toronto")

  freebase.wikipedia_to_freebase = function(q, options, callback) {
    this.doc = "turn a wikipedia title or url into a freebase topic"
    var ps = fns.settle_params(arguments, freebase.wikipedia_to_freebase, {
      depth: 1
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    ps.q = ps.q.replace(/^https?:\/\/..\.wikipedia\.org\/wiki\//, '');
    var title = ps.q;
    var obj = {
      id: "/wikipedia/en/" + freebase.mql_encode(ps.q),
      title: title
    }
    return ps.callback(obj)
  }
  // freebase.wikipedia_to_freebase("Tony Hawk")



  freebase.add_widget = function(obj) {
    this.doc = "add a generic html view of a topic"
    if (!obj || !id) {
      return obj
    }
    var id = obj.mid || obj.id;
    var html = '<a href="#" class="imagewrap" data-id="' + id + '" style="position:relative; width:200px; height:200px;">' + '<img style="border-radius:5px;" src="' + globals.image_host + id + '?maxwidth=200&maxheight=200&errorid=/m/0djw4wd"/>'
    if (obj.name) {
      html += '<div class="caption" style="position:absolute; opacity:0.5; background:black; bottom:10px; color:white; left:10px; border-radius: 5px; min-width:100px; padding:5px;">' + obj.name + '</div>'
    }
    html += '</a>'
    obj.widget = html;
    return obj;
  }




  ////////mqlwrite

  freebase.mqlwrite = function(query, options, callback) {
      this.doc = "write to freebase";
      this.reference = "http://wiki.freebase.com/wiki/MQLwrite";
      callback = callback || console.log;
      if (!query) {
        return callback({})
      }
      if (typeof options == "function") {
        callback = options;
        options = {};
      } //flexible parameter
      options = options || {};
      options.oauth_token = options.token || options.oauth_token || freebase.access_token
      if(!options.oauth_token){
        console.log("=========")
        console.log("to write to freebase, you must create an 'access token'")
        console.log("create one by running 'node ./mqlwrite/create_access_token' and following the instructions")
        console.log("=========")
      }
      var url = globals.host + 'mqlwrite?query=' + encodeURIComponent(JSON.stringify(query)) + "&oauth_token=" + (options.oauth_token || "")
      fns.http(url, callback)
  }
  freebase.add_type=function(topic, options, callback) {
      this.doc = "add a type to a freebase topic";
      this.reference = "http://wiki.freebase.com/wiki/MQLwrite";
      callback = callback || console.log;
      options = options || {};
      var query = {
        "id": topic,
        "type": {
          "id": options.type,
          "connect": "insert"
        }
      }
      freebase.mqlwrite(query, options, callback)
  }
  freebase.add_alias=function(topic, options, callback) {
      this.doc = "add a alias to a freebase topic";
      this.reference = "http://wiki.freebase.com/wiki/MQLwrite";
      callback = callback || console.log;
      options = options || {};
      var query = {
        "id": topic,
        "/common/topic/alias": {
          "value": options.alias,
          "connect": "insert",
          "lang":"/lang/en"
        }
      }
      freebase.mqlwrite(query, options, callback)
  }

  freebase.test_writes = function(token) {
    freebase.add_type("/en/radiohead", {type:"/music/artist", token: token})
    // freebase.add_alias("/wikipedia/en/John_f_kenedy", "jfk", console.log)
  }


  //soften up the api so it will take these methods alternatively..

  // for(var i in aliases){
  //   aliases[i].map(function(v){
  //     freebase[v]=freebase[i]
  //     freebase[v].is_alias=true
  //   })
  // }



  freebase.documentation = function(f, options, callback) {
    callback = callback || console.log;
    options = options || {};
    var str = [];
    str.push('Freebase.com nodejs-library')
    str.push('https://github.com/spencermountain/Freebase-nodejs--');
    if (f) {
      if (freebase[f]) {
        str.push(" * " + f)
        var f = new freebase[f]()
        str.push(f.doc)
        return
      } else {
        str.push("Couldn't find the function " + f + ". Here are the available functions:")
      }
    }
    Object.keys(freebase).filter(function(v){return v!="documentation"}).map(function(f) {
      str.push("==" + f + '==')
      var f = new freebase[f](null, {}, function() {})
      str.push('     -' + f.doc)
    })
    if (options.html) {
      str = str.join('<br/>')
    } else {
      str = str.join('\n')
    }
    callback(str)
  }

  var aliases = {
    mqlread: ["query", "mql_read"],
    topic: ["topic_api", "all_data", "data", "everything", "get_data"],
    paginate: ["continue", "all", "each"],
    same_as_links: ["sameas", "sameAs", "sameaslinks", "links", "sameas_links", "external_links", "weblinks"],
    translate: ["translate_to", "multilingual", "i8n", "get_translation"],
    image: ["pic", "photo", "picture", "get_image", "image_url", "image_src"],
    description: ["get_description", "blurb", "get_blurb", "blurb_api", "text", "get_text"],
    notable: ["notable_type", "notabletype", "notable_for", "notable_as", "main_type", "type"],
    place_data: ["city", "country", "province", "place_info", "location_info", "location", "whereis"],
    incoming: ["incoming_links", "incoming_nodes", "inlinks"],
    outgoing: ["outgoing_links", "outgoing_nodes", "outlinks"],
    related: ["related_topics", "similar", "related_to", "get_related"],
    gallery: ["images", "get_images"],
    geolocation: ["geo", "geocoordinates", "geo_location", "lat_lng", "location"],
    nearby: ["near", "close_to"],
    inside: ["inside_of", "within", "contained_by", "contains"],
    mql_encode: ["encode", "escape"]
  }



  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return freebase;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = freebase;
  }

  return freebase;

})()
