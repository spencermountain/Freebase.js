var globals = {
  host: 'https://www.googleapis.com/freebase/v1/',
  image_host: "https://usercontent.googleapis.com/freebase/v1/image",
  geosearch: 'http://api.freebase.com/api/service/geosearch',
  wikipedia_host: 'http://en.wikipedia.org/w/api.php'
}

var request = require('request');
var async = require('async');
var _ = require('underscore');

var fns = require('./lib/helpers');
var data = require('./lib/data.js').data;
var freebase = {};

freebase.mqlread = {
  "aliases": ["query", "mql_read"],
  "description": "query freebase using the MQL api",
  "code": function (query, options, callback) {
    callback = callback || console.log;
    if (!query) {
      return callback({})
    }
    options = options || {};
    options.uniqueness_failure = options.uniqueness_failure || "soft";
    options.cursor = options.cursor || "";
    //is it an array of sub-queries?
    if (_.isArray(query) && query.length > 1) {
      return fns.doit_async(query, freebase.mqlread, options, callback)
    }
    var params = fns.set_params(options)
    var url = globals.host + 'mqlread?query=' + encodeURIComponent(JSON.stringify(query)) + '&' + params;
    fns.http(url, function (result) {
      return callback(result)
    })
  },
  "tests": [
    []
  ]
}

freebase.lookup = {
  "aliases": [],
  "description": "a freebase search with filtering to ensure reasonable confidence",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.lookup, options, callback)
    }
    //if its a freebase-type object
    if (_.isObject(q)) {
      if ((q.id != null || q.mid != null) && q.name != null) {
        return callback(q);
      } else {
        q = q.id || q.mid;
      }
    }
    //if its a url
    if (q.match(/^(https?:\/\/|www\.)/)) {
      return url_lookup(q, options, function (result) {
        if (result && result.result && result.result[0]) {
          return callback(result.result[0])
        }
        return callback({})
      })
    }
    options.type = options.type || "/common/topic";
    var url = globals.host + 'search?limit=2&lang=en&type=' + options.type + '&filter=';
    url += encodeURIComponent('(any name{full}:"' + q + '" alias{full}:"' + q + '" )'); //id:"'+q+'"
    if (options.type == "/type/type" || options.type == "/type/property") {
      url += "&scoring=schema&stemmed=true"
    }
    if (options.key) {
      url += '&key=' + options.key;
    }
    fns.http(url, function (result) {
      if (!result || !result.result || !result.result[0]) {
        return callback({})
      }
      //filter-out shit results
      result = result.result || []
      result[0] = result[0] || {}
      result[1] = result[1] || {}
      //kill low-relevance
      if (!result[0].score && result[0].score < 30) {
        return callback({})
      }
      //kill if 2nd result is also notable
      if (!((result[0].score || 0) * 0.7) > (result[1].score || 0)) {
        return callback({})
      }
      //kill if types are crap
      var kill = ["/music/track", "/music/release_track", "/tv/tv_episode", "/music/recording", "/music/composition", "/book/book_edition"]
      if (result[1] && result[0].notable && fns.isin(result[0].notable.id, kill)) {
        return callback({})
      }
      result[0].name = result[0].name || result[0].text || '';
      return callback(result[0])
    })
  },
  "tests": [
    ["http://toronto.ca", {}, function (r) {
      console.log(r.id == "/en/toronto")
    }],
    [
      ["/m/09jm8", "http://myspace.com/u2"], {},
      function (r) {
        console.log(r[1].name == "U2")
      }],
    ["australia", {
      type: "/film/film"
    }, function (r) {
      console.log(r.mid == "/m/026qnh6")
    }]
  ]
}

freebase.get_id = {
  "aliases": [],
  "description": "turn a string into a freebase id",
  "code": function (q, options, callback) {
    //if its a freebase-type object
    if (_.isObject(q)) {
      q = q.id || q.mid || q.name;
    }
    //is an id
    if (!q || (q.match(/\/.{1,12}\/.{3}/) != null)) {
      return callback({
        id: q
      })
    }
    //is a normal search
    freebase.lookup(q, options, function (result) {
      if (options.type = "/type/type") {
        return callback(result)
      } else if (result && result.mid) {
        result.id = result.id || result.mid;
        return callback(result)
      }
      return callback({})
    })
  },
  "tests": []
}

freebase.topic = {
  "aliases": ["topic_api", "all_data", "data", "everything", "get_data"],
  "description": "get all of a topic's data using the freebase topic api",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.topic, options, callback)
    }
    freebase.get_id(q, options, function (topic) {
      var id = topic.id;
      if (!id) {
        return callback({})
      }
      options.filter = options.filter || 'all'
      var url = globals.host + 'topic' + id + '?' + fns.set_params(options)
      // if(options.filter){url+='&filter='+encodeURIComponent(options.filter)}
      // if(options.key){url+='&key='+options.key}
      fns.http(url, function (result) {
        return callback(result)
      })
    })
  },
  "tests": []
}

freebase.search = {
  "aliases": [],
  "description": "use freebase's search api",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q && !options.filter) {
      return callback([])
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.search, options, callback)
    }
    options.query = q || '';
    if (options.filter) {
      options.filter = encodeURIComponent(options.filter)
    }
    if (options.type == "/type/type" || options.type == "/type/property") {
      url += "&scoring=schema&stemmed=true"
    }
    options.query = encodeURIComponent(options.query);
    var params = fns.set_params(options)
    var url = globals.host + 'search/?' + params;
    fns.http(url, function (result) {
      if (!result || !result.result || !result.result[0]) {
        return callback([])
      }
      return callback(result.result)
    })
  },
  "tests": []
}

freebase.paginate = {
  "aliases": ["continue", "all", "each"],
  "description": "continue a query until it's done or hits your options.max ",
  "code": function (query, options, callback) {
    callback = callback || console.log;
    if (!query) {
      return callback([])
    }
    options = options || {};
    options.max = options.max || 500;
    //is it an array of sub-tasks?
    if (_.isArray(query) && query.length > 1) {
      return fns.doit_async(query, freebase.paginate, options, callback)
    }
    // if(_.isObject(query)){query=[query]}
    var all = [];
    //recursive mqlread until cursor is false, or maximum reached
    iterate('')

    function iterate(cursor) {
      options.cursor = cursor
      freebase.mqlread(query, options, function (result) {
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
  },
  "tests": []
}

freebase.grammar = {
  "aliases": [],
  "description": "get a topic's linguistic data, like tense, inflection, and gramatical gender",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.pronoun, options, callback)
    }
    freebase.get_id(q, options, function (topic) {
      if (!topic || !topic.id) {
        return callback({})
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
      freebase.mqlread(query, options, function (result) {
        if (!result || !result.result || !result.result[0]) {
          return callback('')
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
        return callback(grammar);
      })
    })
  },
  "tests": []
}

freebase.same_as_links = {
  "aliases": ["sameas", "sameAs", "sameaslinks", "links", "sameas_links", "external_links", "weblinks"],
  "description": "get all of a topics weblinks",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    options.filter = options.filter || "/common/topic"
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.same_as_links, options, callback)
    }
    var url = globals.host + 'search?type=/common/topic&limit=1&query=' + encodeURIComponent(q);
    if (options.key) {
      url += '&key=' + options.key;
    }
    fns.http(url, function (result) {
      if (!result || !result.result || !result.result[0]) {
        return callback({})
      }
      //get its formatted links from the topic api
      freebase.topic(result.result[0].mid, options, function (all) {
        var links = [];
        //same-as ones
        if (all.property['/common/topic/topic_equivalent_webpage']) {
          links = all.property['/common/topic/topic_equivalent_webpage'].values.map(function (v) {
            return {
              href: v.value,
              title: fns.parseurl(v.value).authority
            }
          })
        }
        //webpage ones
        if (all.property['/common/topic/topical_webpage']) {
          links = links.concat(all.property['/common/topic/topical_webpage'].values.map(function (v) {
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
        return callback(obj)
      })
    })
  },
  "tests": []
}

freebase.translate = {
  "aliases": ["translate_to", "multilingual", "i8n", "get_translation"],
  "description": "get translated names for a topic",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.translate, options, callback)
    }
    if (!options.lang) {
      options.lang = "/lang/fr"
    } //defaulting to french is better than an error..?
    if (!options.lang.match(/\/lang\//)) {
      options.lang = '/lang/' + options.lang
    }
    freebase.get_id(q, options, function (topic) {
      if (!topic || !topic.id) {
        return callback("")
      }
      var query = [{
        "id": topic.id,
        "name": [{
          "lang": options.lang,
          "value": null
        }]
      }]
      freebase.mqlread(query, {}, function (result) {
        if (!result || !result.result || !result.result[0]) {
          return callback('')
        }
        var name = result.result[0].name || [{}]
        name = name[0].value || '';
        return callback(name)
      })
    })
  },
  "tests": []
}

freebase.image = {
  "aliases": ["pic", "photo", "picture", "get_image", "image_url", "image_src"],
  "description": "get a image href for a topic",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    options.maxheight = options.maxheight || 250;
    options.maxwidth = options.maxwidth || 250;
    options.errorid = options.errorid || "/m/0djw4wd"
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.image, options, callback)
    }
    freebase.get_id(q, options, function (topic) {
      if (!topic || !topic.id) {
        return callback("")
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "/common/topic/image": [{
          "id": null
        }]
      }]
      freebase.mqlread(query, options, function (result) {
        if (!result || !result.result || !result.result[0] || !result.result[0]["/common/topic/image"][0]) {
          return callback('')
        }
        var url = globals.image_host + result.result[0]["/common/topic/image"][0].id;
        var params = fns.set_params(options);
        url += '?' + params;
        return callback(url)
      })
    })
  },
  "tests": []
}

freebase.description = {
  "aliases": ["get_description", "blurb", "get_blurb", "blurb_api", "text", "get_text"],
  "description": "get a paragraph of text about a topic",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.description, options, callback)
    }
    freebase.get_id(q, options, function (topic) {
      if (!topic || !topic.id) {
        return callback("")
      }
      var url = globals.host + 'text/' + topic.id;
      if (options.key) {
        url += '?key=' + options.key;
      }
      fns.http(url, function (result) {
        if (!result.result) {
          return callback('')
        }
        return callback(result.result)
      })
    });
  },
  "tests": []
}

freebase.notable = {
  "aliases": ["notable_type", "notabletype", "notable_for", "notable_as", "main_type", "type"],
  "description": "get the main type for a topic",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.notable, options, callback)
    }
    freebase.topic(q, {
      filter: "/common/topic/notable_types"
    }, function (result) {
      if (!result || !result.property || !result.property['/common/topic/notable_types']) {
        return callback({})
      }
      var notable = result.property['/common/topic/notable_types'] || {
        values: []
      };
      notable.values[0].name = notable.values[0].text;
      return callback(notable.values[0])
    });
  },
  "tests": []
}

freebase.sentence = {
  "aliases": [],
  "description": "get the first sentence of a topic's wikipedia article",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.sentence, options, callback)
    }
    freebase.description(q, options, function (desc) {
      if (!desc) {
        return callback("")
      }
      desc = fns.sentenceparser(desc) || []
      desc = desc[0] || ''
      desc = desc.replace(/\(.*?\)/g, '') //remove birthdates
      desc = desc.replace(/  /g, ' ')
      return callback(desc)
    })
  },
  "tests": []
}

freebase.list = {
  "aliases": [],
  "description": "from a type, or a 'is a' topic, list out topics that fit the profile, eg. freebase.list('earthquakes')",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    options.max = options.max || options.limit || 500;
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.list, options, callback)
    }
    //singularize it if it's a search query
    if (!q.match(/\/.{1,12}\/.{3}/)) {
      q = fns.singularize(q);
    }
    //get its id
    freebase.get_id(q, {
      type: "/type/type"
    }, function (topic) {
      if (!topic || !topic.id) {
        return callback([])
      }
      var query = [{
        "type": topic.id,
        "name": null,
        "id": null,
        "mid": null,
        "limit": 100
      }]
      if (options.extend) {
        for (var i in options.extend) {
          query[0][i] = options.extend[i]
        }
      }
      freebase.paginate(query, options, callback)
    })
  },
  "tests": []
}

freebase.place_data = {
  "aliases": ["city", "country", "province", "place_info", "location_info", "location", "whereis"],
  "description": "get city, country, province, and timezone data for a geoco-ordinate",
  "code": function (geo, options, callback) {
    callback = callback || console.log;
    if (!geo) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(geo) && geo.length > 1) {
      return fns.doit_async(q, freebase.place_data, options, callback)
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
    var url = globals.geosearch + '?location=' + encodeURIComponent(JSON.stringify(location)) + '&order_by=distance&limit=1&type=/location/citytown&within=15&format=json&mql_output=' + encodeURIComponent(JSON.stringify(out))
    fns.http(url, function (r) {
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
      freebase.mqlread(query, {}, function (r) {
        //hunt for the most appropriate topics in 2 layers
        for (var i in r.result[0]['/location/location/containedby']) {
          var v = r.result[0]['/location/location/containedby'][i]
          if (v.type.filter(function (t) {
            return t == "/location/country"
          })[0]) {
            all.country = {
              id: v.id,
              name: v.name
            }
          } else if (v.type.filter(function (t) {
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
          v['/location/location/containedby'].map(function (o) {
            if (o.type.filter(function (t) {
              return t == "/location/country"
            })[0]) {
              all.country = {
                id: o.id,
                name: o.name
              }
            } else if (!all.province && o.type.filter(function (t) {
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
  },
  "tests": []
}

freebase.incoming = {
  "aliases": ["incoming_links", "incoming_nodes", "inlinks"],
  "description": "all incoming nodes to a topic",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.incoming, options, callback)
    }
    freebase.get_id(q, options, function (topic) {
      if (!topic || !topic.id) {
        return callback([])
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
      freebase.paginate(query, options, function (result) {
        if (!result || !result[0] || !result[0]['/type/reflect/any_reverse']) {
          return callback([])
        }
        return callback(result[0]['/type/reflect/any_reverse'])
      })
    })
  },
  "tests": []
}

freebase.outgoing = {
  "aliases": ["outgoing_links", "outgoing_nodes", "outlinks"],
  "description": "all outgoing nodes to a topic",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.outgoing, options, callback)
    }
    freebase.lookup(q, options, function (topic) {
      if (!topic || !topic.mid) {
        return callback([])
      }
      freebase.topic(topic.mid, options, function (result) {
        var out = [];
        //get rid of permissions and stuff..
        result.property = kill_boring(result.property)
        Object.keys(result.property).forEach(function (key) {
          var v = result.property[key];
          //add topics
          if (v.valuetype == "object") {
            v.values = v.values.map(function (s) {
              s.property = key;
              return s
            })
            out = out.concat(v.values)
          }
          //add the topics from cvt values in the same manner
          if (v.valuetype == "compound") {
            v.values.forEach(function (c) {
              c.property = kill_boring(c.property);
              Object.keys(c.property).forEach(function (key2) {
                if (c.property[key2].valuetype == "object") {
                  c.property[key2].values = c.property[key2].values.map(function (s) {
                    s.property = [key, key2];
                    return s
                  })
                  out = out.concat(c.property[key2].values)
                }
              })
            })
          }
        })
        out = out.map(function (o) {
          return {
            name: o.text,
            id: o.id,
            property: o.property
          }
        })
        //add sentence-forms
        out = out.map(function (o) {
          var property = o.property || '';
          if (_.isArray(o.property)) {
            property = o.property.join('');
          }
          o.sentence = topic.name + "'s " + _.last(property.split('/')).replace('_', ' ') + " is " + o.name; //ugly fallback
          var grammar = data.sentence_grammars.filter(function (v) {
            return v.property == property
          })[0] || {}
          if (grammar["sentence form"] && topic.name && o.name) {
            o.sentence = grammar["sentence form"].replace(/\bsubj\b/, topic.name).replace(/\bobj\b/, o.name);
          }
          return o
        })
        return callback(out)
      })
    })
  },
  "tests": []
}

freebase.graph = {
  "aliases": [],
  "description": "generate subject-verb-object pairs for all a topic's data, including inside cvts",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.graph, options, callback)
    }
    freebase.lookup(q, options, function (topic) {
      if (!topic) {
        return callback({})
      }
      delete topic.score;
      delete topic.lang;
      options.filter = "allproperties";
      freebase.topic(topic.mid, options, function (r) {
        var incoming = {};
        var outgoing = {};
        Object.keys(r.property).forEach(function (k) {
          if (k.match(/^\!/)) {
            outgoing[k] = r.property[k]
          } else {
            incoming[k] = r.property[k]
          }
        })
        incoming = parse_topic_api(incoming);
        outgoing = parse_topic_api(outgoing);
        var out = incoming.map(function (v) {
          return {
            subject: topic,
            property: {
              id: v.property
            },
            object: v
          }
        })
        out = out.concat(outgoing.map(function (v) {
          return {
            object: topic,
            property: {
              id: v.property
            },
            subject: v
          }
        }))
        //add the sentences
        out = out.map(function (obj) {
          obj.property.id = obj.property.id.replace(/^\!/, '')
          delete obj.subject.property
          var grammar = data.sentence_grammars.filter(function (v) {
            return v.property == obj.property.id
          })[0] || {}
          obj.sentence = obj.subject.name + "'s " + _.last(obj.property.id.split('/')).replace('_', ' ') + " is " + obj.object.name;
          if (grammar["sentence form"] && obj.subject.name && obj.object.name) {
            obj.sentence = grammar["sentence form"].replace(/\bsubj\b/, obj.subject.name).replace(/\bobj\b/, obj.object.name);
          }
          return obj
        })
        return callback(out)
      })
    })
  },
  "tests": []
}

freebase.related = {
  "aliases": ["related_topics", "similar", "related_to", "get_related"],
  "description": "list some similar or neighbouring topics for a topic",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback([])
    }
    options = options || {};
    options.max = options.max || 25;
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.related, options, callback)
    }
    var all = [];
    //pluck relevant connected topics from outgoing links
    freebase.outgoing(q, options, function (result) {
      all = result.filter(function (v) {
        return fns.isin(v.property, data.related_properties)
      })
      //randomize the results
      all = all.sort(function (a, b) {
        return (Math.round(Math.random()) - 0.5);
      })
      all = all.map(function (v) {
        if (!v.sentence) {
          v.sentence = v.name + " is related to " + result.name
        }
        return v
      })
      all = fns.json_unique(all, "id")
      if (all.length >= options.max) {
        return callback(all)
      }
      //else, append topics that share the notable type
      freebase.notable(q, options, function (result) {
        if (result && result.id) {
          return freebase.list(result.id, {
            max: options.max
          }, function (r) {
            if (!r) {
              return callback(all)
            }
            r = r.map(function (v) {
              v.sentence = v.name + " is also a " + result.name;
              return v
            })
            all = all.concat(r)
            all = fns.json_unique(all, "id")
            all = all.sort(function (a, b) {
              return (Math.round(Math.random()) - 0.5);
            })
            return callback(all)
          })
        } else {
          return callback(all)
        }
      })
    })
  },
  "tests": []
}

freebase.is_a = {
  "aliases": [],
  "description": "list out a topics 'is_a' data, like its types, or professions",
  "code": function (q, property, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback([])
    }
    options = options || {};
    options.max = options.max || 25;
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.is_a, options, callback)
    }
    freebase.topic(q, options, function (r) {
      var types = r.property["/type/object/type"] || {}
      types = types.values || []
      types = types.filter(function (v) {
        return !v.text.match(/Topic/)
      })
      types = types.map(function (v) {
        return {
          name: v.text,
          id: v.id,
          property: "/type/object/type"
        }
      })
      r = parse_topic_api(r.property)
      r = r.filter(function (v) {
        return fns.isin(v.property, data.is_a)
      })
      r = r.concat(types)
      return callback(r)
    })
  },
  "tests": []
}

freebase.question = {
  "aliases": [],
  "description": "given a topic and a property, answer the question. supports natural language lookups",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q || !options.property) {
      return callback([])
    }
    options = options || {};
    options.max = options.max || 25;
    var property = options.property;
    var type = property.match(/\/.*?\/.*?\//)
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.question, options, callback)
    }
    //straight-up id search
    if (property.match(/^\/.{1,12}\/.{3}/)) {
      return freebase.topic(q, {}, function (r) {
        if (!r || !r.property[property]) {
          return callback([])
        }
        return callback(r.property[property].values)
      })
    }
    var candidate_metaschema = metaschema_lookup(property);
    if (candidate_metaschema) {
      options.filter = '(all ' + candidate_metaschema + ':"' + q + '")'
      freebase.search('', options, function (result) {
        return callback(result)
      })
    } else {
      freebase.property_lookup(property, {}, function (candidate_properties) {
        var candidate_properties = property_lookup(property);
        if (candidate_properties.length == 0) {
          return callback([])
        }
        options.filter = type;
        //look for these properties in the topic api
        freebase.topic(q, options, function (result) {
          var all = [];
          candidate_properties.forEach(function (p) {
            if (result.property[p.id]) {
              all = all.concat(result.property[p.id].values)
            }
          })
          all = fns.json_unique(all, "id")
          return callback(all)
        })
      })
    }
  },
  "tests": []
}

freebase.dig = {
  "aliases": [],
  "description": "given a transitive property like '/location/location/contained_by', iterate over the data as much as possible",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q || !options.property) {
      return callback([])
    }
    options = options || {};
    options.max = options.max || 25;
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return freebase.dig(q[0], options, callback)
    }
    var all = [];
    freebase.question(q, options, function (r) {
      if (!r || !_.isArray(r) || r.length == 0) {
        return callback(all)
      }
      all = all.concat(r);
      r = r.slice(0, options.max).map(function (v) {
        return v.id
      })
      return fns.doit_async(r, freebase.question, options, function (big) {
        if (!big || !_.isArray(big) || big.length == 0) {
          return callback(all)
        }
        all = all.concat(_.flatten(big, 'shallow'))
        all = fns.json_unique(all, "id")
        fns.doit_async(r, freebase.question, options, function (big) {
          if (!big || !_.isArray(big) || big.length == 0) {
            return callback(all)
          }
          all = all.concat(_.flatten(big, 'shallow'))
          all = fns.json_unique(all, "id")
          return callback(all)
        })
      })
    })
  },
  "tests": []
}

freebase.gallery = {
  "aliases": ["images", "get_images"],
  "description": "list topics with images",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback([])
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.gallery, options, callback)
    }
    options.extend = {
      "/common/topic/image": [{
        "id": null,
        "optional": "required"
      }]
    }
    freebase.list(q, options, function (result) {
      result = result.map(function (obj) {
        obj.href = globals.image_host + _.last(obj["/common/topic/image"]).id;
        obj.thumbnail = globals.image_host + _.last(obj["/common/topic/image"]).id + '?mode=fillcropmid&maxwidth=150&maxheight=150&errorid=/m/0djw4wd';
        obj = freebase.add_widget(obj)
        return obj;
      })
      return callback(result)
    })
  },
  "tests": []
}

freebase.wordnet = {
  "aliases": [],
  "description": "look up a word in wordnet",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback([])
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.wordnet, options, callback)
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
    freebase.paginate(query, options, function (r) {
      return callback(r)
    })
  },
  "tests": []
}

freebase.transitive = {
  "aliases": [],
  "description": "*",
  "code": function transitive(q, property, options, callback) {
    callback = callback || console.log;
    if (!q || !property) {
      return callback([])
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, property, freebase.transitive, options, callback)
    }
    freebase.get_id(q, options, function (topic) {
      if (!topic || !topic.id) {
        return callback({})
      }
      var candidate_metaschema = metaschema_lookup(property);
      if (candidate_metaschema) {
        options.filter = '(all ' + candidate_metaschema + ':"' + topic.id + '")'
        freebase.search('', options, function (result) {
          return callback(result)
        })
      } else {
        return callback([])
      }

    })
  },
  "tests": []
}

freebase.geolocation = {
  "aliases": ["geo", "geocoordinates", "geo_location", "lat_lng", "location"],
  "description": "get a topics lat_lng data",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.geolocation, options, callback)
    }
    options.type = options.type || "/location/location";
    freebase.get_id(q, options, function (topic) {
      if (!topic || !topic.id) {
        return callback({})
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
      freebase.mqlread(query, options, function (result) {
        if (result.result && result.result[0] && result.result[0]['/location/location/geolocation'][0]) {
          var geo = result.result[0]['/location/location/geolocation'][0];
          delete geo.type
          delete geo.optional
          return callback(geo)
        }
        return callback({})
      })
    })
  },
  "tests": []
}

freebase.nearby = {
  "aliases": ["near", "close_to"],
  "description": "topics geographicaly close to another topic",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback([])
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.nearby, options, callback)
    }
    freebase.geolocation(q, {}, function (geo) {
      if (!geo || !geo.latitude || !geo.longitude) {
        return callback([])
      }
      //use the *old* freebase api for this, as there's no alternative in the new one
      var location = '{"coordinates":[' + geo.longitude + ',' + geo.latitude + '],"type":"Point"}'
      options.within = options.within || 5;
      options.type = options.type || "/location/location";
      var url = globals.geosearch + '?location=' + encodeURIComponent(location) + '&order_by=distance&type=' + options.type + '&within=' + options.within + '&limit=200&format=json'
      fns.http(url, function (r) {
        return callback(r.result.features)
      })
    })
  },
  "tests": []
}

freebase.inside = {
  "aliases": ["inside_of", "within", "contained_by", "contains"],
  "description": "list topics inside_of this topic",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback([])
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.inside, options, callback)
    }
    //handy to have their geocoordinates too
    options.mql_output = options.mql_output || [{
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
    freebase.transitive(q, "part_of", options, function (r) {
      return callback(r)
    })
  },
  "tests": []
}

freebase.wikipedia_page = {
  "aliases": [],
  "description": "get a topic's entire wikipedia article",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.wikipedia_page, options, callback)
    }
    freebase.get_id(q, options, function (topic) {
      if (!topic || !topic.id) {
        return callback("")
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value": null
        }
      }]
      freebase.mqlread(query, options, function (result) {
        if (!result || !result.result || !result.result[0]) {
          return callback('')
        }
        return callback(fns.mql_unencode(result.result[0].key.value)) //'http://en.wikipedia.org/wiki/'
      })
    })
  },
  "tests": []
}

freebase.wikipedia_categories = {
  "aliases": [],
  "description": "get a topic's categories in wikipedia",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback([])
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.wikipedia_categories, options, callback)
    }
    //if its not a wikipedia title, reuse get-topic logic for searches/ids
    if (q.match(/ /) || q.substr(0, 1) == q.substr(0, 1).toLowerCase() || q.match(/^\//)) {
      return freebase.wikipedia_page(q, options, function (r) {
        freebase.wikipedia_categories(r, options, callback)
      })
    }
    var url = globals.wikipedia_host + '?action=query&prop=categories&format=json&clshow=!hidden&cllimit=200&titles=' + encodeURIComponent(q);
    fns.http(url, function (r) {
      if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
        return callback([])
      }
      var cats = r.query.pages[Object.keys(r.query.pages)[0]].categories || []
      cats = cats.map(function (v) {
        return v.title
      })
      return callback(cats)
    })
  },
  "tests": []
}

freebase.wikipedia_links = {
  "aliases": [],
  "description": "get the topics that this topic links to on wikipedia",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.wikipedia_links, options, callback)
    }
    //if its not a wikipedia title, reuse get-topic logic for searches/ids
    if (q.match(/ /) || q.substr(0, 1) == q.substr(0, 1).toLowerCase() || q.match(/^\//)) {
      return freebase.wikipedia_page(q, options, function (r) {
        freebase.wikipedia_links(r, options, callback)
      })
    }
    var url = globals.wikipedia_host + '?action=query&prop=links&format=json&plnamespace=0&pllimit=500&titles=' + encodeURIComponent(q);
    fns.http(url, function (r) {
      if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
        return callback([])
      }
      var links = r.query.pages[Object.keys(r.query.pages)[0]].links || []
      //filter-out non-freebase topics
      links = links.filter(function (v) {
        return v.title.match(/^List of /i) == null
      })
      links = links.map(function (o) {
        o.id = "/wikipedia/en/" + freebase.mql_encode(o.title.replace(/ /g, '_'));
        o.name = o.title
        delete o.title
        delete o.ns
        return o
      })
      return callback(links)
    })
  },
  "tests": []
}

freebase.wikipedia_external_links = {
  "aliases": [],
  "description": "get the websites linked to from this topic's wikipedia page",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.wikipedia_external_links, options, callback)
    }
    //if its not a wikipedia title, reuse get-topic logic for searches/ids
    if (q.match(/ /) || q.substr(0, 1) == q.substr(0, 1).toLowerCase() || q.match(/^\//)) {
      return freebase.wikipedia_page(q, options, function (r) {
        freebase.wikipedia_external_links(r, options, callback)
      })
    }
    var url = globals.wikipedia_host + '?action=query&prop=extlinks&format=json&plnamespace=0&pllimit=500&titles=' + encodeURIComponent(q);
    fns.http(url, function (r) {
      if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
        return callback([])
      }
      var links = r.query.pages[Object.keys(r.query.pages)[0]].extlinks || []
      links = links.filter(function (v) {
        return v["*"].match(/^http/)
      })
      links = links.map(function (v) {
        var box = fns.parseurl(v["*"]);
        return {
          url: v["*"],
          domain: box.host
        }
      })
      return callback(links)
    })
  },
  "tests": []
}

freebase.schema_introspection = {
  "aliases": [],
  "description": "get some common analysis from a type or property",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.schema_introspection, options, callback)
    }
    //see if its a type
    freebase.search(q, {
      type: "/type/type"
    }, function (r) {
      if (r && r[0] && r[0].id) {
        r = r[0]
        var query = [{
          "id": r.id,
          "mid": null,
          "name": null,
          "properties": [{
            "id": null,
            "name": null,
            "/type/property/reverse_property": [{
              "id": null,
              "name": null,
              "optional": true
            }]
          }],
          "/freebase/type_hints/mediator": null,
          "/freebase/type_hints/included_types": [{
            "id": null,
            "name": null
          }],
          "/freebase/type_profile/published": null,
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
        freebase.mqlread(query, {}, function (r) {
          if (!r || !r.result || !r.result[0]) {
            return callback({})
          }
          r = r.result[0]
          var obj = {}
          obj.domain = r.domain
          obj.id = r.id
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
          freebase.mqlread(query, {}, function (r) {
            if (!r || !r.result) {
              return callback(obj)
            }
            obj.included_by = r.result.map(function (v) {
              return {
                id: v.id,
                name: v.name
              }
            })
            return callback(obj)
          })
        })

      } else {
        freebase.property_lookup(q, {}, function (r) {
          if (!r || !r[0] || !r[0].id) {
            return callback({})
          }
          return freebase.property_inspection(r[0].id, {}, callback)
        })
      }
    })
  },
  "tests": []
}

freebase.property_introspection = {
  "aliases": [],
  "description": "get some common analysis from a property",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.property_introspection, options, callback)
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
      }],
      "unique": null,
      "schema": {
        "id": null,
        "name": null,
        "/freebase/type_profile/instance_count": null
      },
      "/common/topic/description": null
    }]
    freebase.mqlread(query, {}, function (r) {
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
      freebase.mqlread(query, {}, function (r) {
        obj.meta = r.result
        return callback(obj)
      })
    })
    //   //get its property aliases
    // var query=[{type:"/base/natlang/property_alias",
    //   property:property,
    //   alias:[]
    //   }]
  },
  "tests": []
}

freebase.property_lookup = {
  "aliases": [],
  "description": "search for a freebase property, using property aliases and inflection",
  "code": function (q, options, callback) {
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    options = options || {};
    //is it an array of sub-tasks?
    if (_.isArray(q) && q.length > 1) {
      return fns.doit_async(q, freebase.property_lookup, options, callback)
    }
    freebase.search(q, {
      type: "/type/property"
    }, function (candidate_properties) {
      //look up offline for property aliases
      if (!q.match(/\/.*?\/.*?\//)) {
        q = q.toLowerCase();
        q = q.replace(/  /, ' ');
        q = q.replace(/^\s+|\s+$/, '');
        var property_singular = fns.singularize(q);
        candidate_properties = candidate_properties.concat(data.properties.filter(function (v) {
          return v.name == q || v.name == property_singular
        }))
      }
      return callback(candidate_properties)
    })
  },
  "tests": []
}

freebase.mql_encode = {
  "aliases": ["encode", "escape"],
  "description": "escape text to fit MQL queries and keys",
  "code": function (s) {
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
    var convert = function (a, b) {
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
  },
  "tests": []
}

freebase.add_widget = {
  "aliases": [],
  "description": "get a html printout to render this topic",
  "code": function (obj) {
    var id = obj.mid || obj.id;
    if (!obj || !id) {
      return obj
    }
    var html = '<a href="#" class="imagewrap" data-id="' + id + '" style="position:relative; width:200px; height:200px;">' + '<img style="border-radius:5px;" src="' + globals.image_host + id + '?maxwidth=200&maxheight=200&errorid=/m/0djw4wd"/>'
    if (obj.name) {
      html += '<div class="caption" style="position:absolute; opacity:0.5; background:black; bottom:10px; color:white; left:10px; border-radius: 5px; min-width:100px; padding:5px;">' + obj.name + '</div>'
    }
    html += '</a>'
    obj.widget = html;
    return obj;
  },
  "tests": []
}

//freebase.lookup.code("toronto")

var all={}
for(var i in freebase){
  all[i]=freebase[i].code;
}
console.log(freebase.lookup.tests)

freebase=all


module.exports =freebase
freebase.lookup("toronto")
