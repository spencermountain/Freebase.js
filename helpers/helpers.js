//if nodejs, load these modules
if (typeof module !== 'undefined' && module.exports) {
  var _ = require('underscore');
  var async = require('async');
  var data = require('./data.js').data;
  var http = require('./http.js');
}

var fns= (function(){

var async_max = 10; //the hardest we will ever concurrently hit freebase

//non-front-facing methods that are used for the freebase javascript package

var fns = {}

var globals = {
  host: 'https://www.googleapis.com/freebase/v1/',
  image_host: "https://usercontent.googleapis.com/freebase/v1/image",
  wikipedia_host: 'http://en.wikipedia.org/w/api.php'
}

fns.isarray=function(x){
    return toString.call(x) == '[object Array]';
}

fns.isobject=function(obj){
    return obj === Object(obj);
  }

  fns.flatten = function(input, shallow, output) {
    input.each(function(value) {
      if (fns.isarray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  fns.last=function(arr){
    return arr[arr.length]
  }

  fns.compact=function(arr){
    return arr.filter(function(v){return v})
  }

//compact even empty objects
fns.compact_strong = function(arr) {
  return _.unique(_.compact(arr)).filter(function(v) {
    return _.isEmpty(v) == false
  })
}


fns.settle_params = function(params, method, defaults) {
  var o = {
    valid: false,
    q: params[0],
    options: params[1] || {},
    callback: params[2] || console.log,
    defaults: defaults || {},
    method: method || ''
  }
  //flexible parameters
  if (typeof o.options == "function") {
    o.callback = o.options;
    o.options = {};
  }
  //fancy callback wrapper
  if (o.options.verbose) {
    var tmp = o.callback
    o.callback = function(r) {
      return tmp(r)
    }
  }
  //handle an array
  if (fns.isarray(o.q)) {
    if (o.q.length > 1) {
      o.q = fns.compact_strong(o.q);
      o.valid = true;
      o.array = true;
      return o
    } else {
      o.q = o.q[0]; //just use the first element
    }
  }
  //if its a freebase-type object
  if (typeof o.q =="object") {
    o.q = o.q.id || o.q.mid || o.q.name;
  }
  //make sure we're sane
  if (typeof o.q != "string" || typeof o.options != "object" || typeof o.callback != "function") {
    return o;
  }
  //handle an id
  if (o.q.match(/\/.*?\/.*?/)) {
    o.is_id = true;
  }
  //set default options
  for (var i in o.defaults) {
    o.options[i] = o.options[i] || o.defaults[i];
  }
  //remove whitespace
  o.q = o.q.replace(/  /, ' ');
  o.q = o.q.replace(/^\s+|\s+$/, '');
  //if it's a url, clean it up
  if (o.q.match(/^(https?:\/\/|www\.)/)) {
    o.q = o.q.replace(/\/$/, '');
    o.q = o.q.replace(/^https/, 'http');
    o.url = true;
  }
  o.valid = true;
  return o
}

//sort by frequency
fns.topk = function(myArray, length) {
  var newArray = [];
  length = length || 1
  var freq = {};
  //Count Frequency of Occurances
  var i = myArray.length - 1;
  for (var i; i > -1; i--) {
    var value = myArray[i];
    freq[value] == null ? freq[value] = 1 : freq[value]++;
  }
  //convert to sortable array
  for (var value in freq) {
    newArray.push(value);
  }
  return newArray.sort(function(a, b) {
    return freq[b] - freq[a];
  }).map(function(v) {
    return {
      value: v,
      count: freq[v],
      percentage: ((freq[v] / length) * 100).toFixed(2)
    }
  });
}

fns.percentage = function(a, b) {
  return parseInt((a / b) * 100)
}


//kill the freebase internal-properties that don't feel graphy
fns.kill_boring = function(obj) {
  if (!obj) {
    return {}
  }
  data.boring.forEach(function(v) {
    delete obj[v]
  })
  return obj
}

//****************************
fns.parse_topic_api = function(properties, options) {
  var out = [];
  properties = fns.kill_boring(properties)
  Object.keys(properties).forEach(function(key) {
    var v = properties[key];
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
  out = out.map(function(o) {
    if (fns.isarray(o.property)) {
      o.property = o.property.join('');
    }
    return o
  })
  return out;
}

///////**************
//lookup metaschema predicate matches offline..
fns.metaschema_lookup = function(property) {
  property = property.toLowerCase();
  property = property.replace(/\W(is|was|are|will be|has been)\W/, ' ');
  property = property.replace(/  /g, ' ');
  property = property.replace(/_/g, ' ');
  property = property.replace(/^\s+|\s+$/, '');
  var candidate_properties = data.metaschema.filter(function(v) {
    v.aliases = v.aliases || []
    return v.id == property || v.name.toLowerCase() == property || fns.isin(property, v.aliases) || v.search.replace(/_/g, ' ') == property
  })[0]
  candidate_properties = candidate_properties || {}
  return candidate_properties.search;
}
//console.log(metaschema_lookup('built with'))

/////*****************************
// fns.list_category_like=function(q, options, callback){
//   callback=callback||console.log;
//   if(!q){return callback({})}
//   options=options||{};
//   q=fns.singularize(q);
//   freebase.topic(q, options, function(r){
//     if(!r || !r.property || !_.isObject(r.property) ){return callback([])}
//     var all=Object.keys(r.property).filter(function(v){
//       return fns.isin(v, data.category_like)
//     }).map(function(p){
//       //add the property
//       r.property[p].values=r.property[p].values.map(function(v){
//         v.property=p;
//         return v;
//       })
//       return r.property[p].values
//     })
//     all=_.flatten(all);
//     return callback(all)
//   })
// }
//list_category_like("city")

//originally by david huynh 2010, http://www.freebase.com/appeditor/#!path=//cubed.dfhuynh.user.dev/index
//Algorithm is adopted from
//http://www.csse.monash.edu.au/~damian/papers/HTML/Plurals.html
fns.singularize = function(text) {
  if (text.match(' ')) { //multiple words
    var words = text.split(' ');
    var last = words[words.length - 1];
    var firsts = words.slice(0, -1);
    return firsts.join(" ") + ' ' + fns.singularize(last);
  }
  var prepositions = {
    "about": 1,
    "above": 1,
    "across": 1,
    "after": 1,
    "against": 1,
    "along": 1,
    "among": 1,
    "around": 1,
    "at": 1,
    "before": 1,
    "behind": 1,
    "below": 1,
    "beneath": 1,
    "beside": 1,
    "between": 1,
    "beyond": 1,
    "but": 1,
    "by": 1,
    "despite": 1,
    "down": 1,
    "during": 1,
    "except": 1,
    "for": 1,
    "from": 1,
    "in": 1,
    "inside": 1,
    "into": 1,
    "like": 1,
    "near": 1,
    "of": 1,
    "off": 1,
    "on": 1,
    "onto": 1,
    "out": 1,
    "outside": 1,
    "over": 1,
    "past": 1,
    "since": 1,
    "through": 1,
    "throughout": 1,
    "till": 1,
    "to": 1,
    "toward": 1,
    "under": 1,
    "underneath": 1,
    "until": 1,
    "up": 1,
    "upon": 1,
    "with": 1,
    "within": 1,
    "without": 1
  };
  var userDefinedNouns = [{
    "p": "people",
    "s": "person"
  }, {
    "p": "tornadoes",
    "s": "tornado"
  }, {
    "p": "churches",
    "s": "church"
  }, {
    "p": "countries",
    "s": "country"
  }, {
    "p": "cities",
    "s": "city"
  }, {
    "p": "companies",
    "s": "company"
  }, {
    "p": "monkies",
    "s": "monkey"
  }, {
    "p": "donkies",
    "s": "donkey"
  }, {
    "p": "mysteries",
    "s": "mystery"
  }, {
    "p": "authors",
    "s": "author"
  }];

  // Table A.1
  var irregularNouns = {
    "beef": {
      anglicized: "beefs",
      classical: "beeves"
    },
    "brother": {
      anglicized: "brothers",
      classical: "brethren"
    },
    "child": {
      anglicized: null,
      classical: "children"
    },
    "cow": {
      anglicized: null,
      classical: "kine"
    },
    "ephemeris": {
      anglicized: null,
      classical: "ephemerides"
    },
    "genie": {
      anglicized: null,
      classical: "genii"
    },
    "money": {
      anglicized: "moneys",
      classical: "monies"
    },
    "mongoose": {
      anglicized: "mongooses",
      classical: null
    },
    "mythos": {
      anglicized: null,
      classical: "mythoi"
    },
    "octopus": {
      anglicized: "octopuses",
      classical: "octopodes"
    },
    "ox": {
      anglicized: null,
      classical: "oxen"
    },
    "soliloquy": {
      anglicized: "soliloquies",
      classical: null
    },
    "trilby": {
      anglicized: "trilbys",
      classical: null
    }
  };

  var uninflectedSuffixes = ["fish", "ois", "sheep", "deer", "pox", "itis"];

  // Table A.2
  var uninflectedNouns = {
    "bison": 1,
    "flounder": 1,
    "pliers": 1,
    "bream": 1,
    "gallows": 1,
    "proceedings": 1,
    "breeches": 1,
    "graffiti": 1,
    "rabies": 1,
    "britches": 1,
    "headquarters": 1,
    "salmon": 1,
    "carp": 1,
    "herpes": 1,
    "scissors": 1,
    "chassis": 1,
    "high-jinks": 1,
    "sea-bass": 1,
    "seabass": 1,
    "clippers": 1,
    "homework": 1,
    "series": 1,
    "cod": 1,
    "innings": 1,
    "shears": 1,
    "contretemps": 1,
    "jackanapes": 1,
    "species": 1,
    "corps": 1,
    "mackerel": 1,
    "swine": 1,
    "debris": 1,
    "measles": 1,
    "trout": 1,
    "diabetes": 1,
    "mews": 1,
    "tuna": 1,
    "djinn": 1,
    "mumps": 1,
    "whiting": 1,
    "eland": 1,
    "news": 1,
    "wildebeest": 1,
    "elk": 1,
    "pincers": 1,

    "moose": 1,
    "shrimp": 1,
    "hoi polloi": 1,
    "riffraff": 1,
    "rabble": 1
  };
  var inflectionCategories = [{ // Table A.10
    from: "a",
    to: "ae",
    words: ["alumna", "alga", "vertebra"]
  }, {
    // Table A.11
    from: "a",
    anglicized: "as",
    classical: "ae",
    words: ["abscissa", "amoeba", "antenna", "aurora", "formula", "hydra", "hyperbola", "lacuna", "medusa", "nebula", "nova", "parabola"]
  }, {
    // Table A.12
    from: "a",
    anglicized: "as",
    classical: "ata",
    words: ["anathema", "bema", "carcinoma", "charisma", "diploma", "dogma", "drama", "edema", "enema", "enigma", "gumma", "lemma", "lymphoma", "magma", "melisma", "miasma", "oedema", "sarcoma", "schema", "soma", "stigma", "stoma", "trauma"]
  }, {
    // Table A.13
    from: "en",
    anglicized: "ens",
    classical: "ina",
    words: ["stamen", "foramen", "lumen"]
  }, {
    // Table A.14
    from: "ex",
    to: "ices",
    words: ["codex", "murex", "silex"]
  }, {
    // Table A.15
    from: "ex",
    anglicized: "exes",
    classical: "ices",
    words: ["apex", "cortex", "index", "latex", "pontifex", "simplex", "vertex", "vortex"]
  }, {
    // Table A.16
    from: "is",
    anglicized: "ises",
    classical: "ides",
    words: ["iris", "clitoris"]
  }, {
    // Table A.17
    from: "o",
    to: "os",
    words: ["albino", "archipelago", "armadillo", "commando", "ditto", "dynamo", "embryo", "fiasco", "generalissimo", "ghetto", "guano", "inferno", "jumbo", "lingo", "lumbago", "magneto", "manifesto", "medico", "octavo", "photo", "pro", "quarto", "rhino", "stylo"]
  }, {
    // Table A.18
    from: "o",
    anglicized: "os",
    classical: "i",
    words: ["alto", "basso", "canto", "contralto", "crescendo", "solo", "soprano", "tempo"]
  }, {
    // Table A.19
    from: "on",
    to: "a",
    words: ["aphelion", "asyndeton", "criterion", "hyperbaton", "noumenon", "organon", "perihelion", "phenomenon", "prolegomenon"]
  }, {
    // Table A.20
    from: "um",
    to: "a",
    words: ["agendum", "bacterium", "candelabrum", "datum", "desideratum", "erratum", "extremum", "stratum", "ovum"]
  }, {
    // Table A.21
    from: "um",
    anglicized: "ums",
    classical: "a",
    words: ["aquarium", "compendium", "consortium", "cranium", "curriculum", "dictum", "emporium", "enconium", "gymnasium", "honorarium", "interregnum", "lustrum", "maximum", "medium", "memorandum", "millenium", "minimum", "momentum", "optimum", "phylum", "quantum", "rostrum", "spectrum", "speculum", "stadium", "trapezium", "ultimatum", "vacuum", "velum"]
  }, {
    // Table A.22
    from: "us",
    anglicized: "uses",
    classical: "i",
    words: ["focus", "fungus", "genius", "incubus", "nimbus", "nucleolus", "radius", "stylus", "succubus", "torus", "umbilicus", "uterus"]
  }, {
    // Table A.23
    from: "us",
    anglicized: "uses",
    classical: "us",
    words: ["apparatus", "cantus", "coitus", "hiatus", "impetus", "nexus", "plexus", "prospectus", "sinus", "status"]
  }, {
    // Table A.24
    from: "",
    to: "i",
    words: ["afreet", "afrit", "efreet"]
  }, {
    // Table A.25
    from: "",
    to: "im",
    words: ["cherub", "goy", "geraph"]
  }];

  function suffix(text, s) {
    return text.length >= s.length && text.substring(text.length - s.length) == s;
  }

  function capIfCap(s, s2) {
    if (typeof s == "string") {
      var isCap = s2.charAt(0).toLowerCase() != s2.charAt(0);
      return isCap ? (s.charAt(0).toUpperCase() + s.substr(1)) : s;
    } else {
      var a = [];
      for (var i in s) {
        var s3 = s[i];
        a.push(capIfCap(s3, s2));
      }
      return a;
    }
  }

  function inflection(text, from, to) {
    return text.substring(0, text.length - from.length) + to;
  }

  function isOneOf(c, chars) {
    return chars.indexOf(c) >= 0;
  }

  function isVowel(c) {
    return isOneOf(c, "aeiou");
  }
  var text2 = text.toLowerCase();
  for (var o in userDefinedNouns) {
    if (userDefinedNouns[o].p == text) {
      return userDefinedNouns[o].s;
    }
  }
  for (var singular in irregularNouns) {
    var entry = irregularNouns[singular];
    if (entry.anglicized === text2 || entry.classical === text2) {
      return capIfCap(singular, text);
    }
  }
  for (var s in uninflectedSuffixes) {
    if (suffix(text2, s)) {
      return text;
    }
  }
  if (uninflectedNouns && uninflectedNouns[text2]) {
    return text;
  }
  var checkWords = function(from, to, words) {
    if (suffix(text, to)) {
      var prefix = text.substring(text.length - to.length);
      var text3 = prefix + entry.from;
      for (var word in words) {
        if (text3 === word) {
          return capIfCap(text3, text);
        }
      }
    }
    return null;
  }
  for (var e in inflectionCategories) {
    var entry = inflectionCategories[e];
    var text3 = ("to" in entry && checkWords(entry.from, entry.to, entry.words)) || ("anglicized" in entry && checkWords(entry.from, entry.anglicized, entry.words)) || ("classical" in entry && checkWords(entry.from, entry.classical, entry.words));

    if (text3 != null && typeof text3 == "string") {
      return text3;
    }
  }
  for (var prep in prepositions) {
    var n = text.indexOf(" " + prep + " ");
    if (n > 0) {
      var prefix = text.substring(0, n);
      var r = singularize(prefix);
      if (r != null) {
        return r + " " + prep + " " + text.substr(n + prep.length + 2);
      } else {
        return null;
      }
    }
    n = text.indexOf("-" + prep + "-");
    if (n > 0) {
      var prefix = text.substring(0, n);
      var r = singularize(prefix);
      if (r != null) {
        return r + "-" + prep + "-" + text.substr(n + prep.length + 2);
      } else {
        return null;
      }
    }
  }
  var j = text.lastIndexOf(" ");
  if (j > 0) {
    var r = singularize(text.substring(j + 1));
    if (r != null) {
      return text.substring(0, j + 1) + r;
    } else {
      return null;
    }
  }
  if (suffix(text, "xes") || suffix(text, "ses")) {
    return text.substring(0, text.length - 2);
  }
  if (suffix(text, "s") && !suffix(text, "ss")) {
    return text.substring(0, text.length - 1);
  }
  return text;
}
//console.log(fns.singularize("george soros"));
//console.log(fns.singularize("mama cass"));


//by spencer kelly (@spencermountain)
fns.sentenceparser = function(text) {
  var tmp = text.split(/(\S.+?[.])(?=\s+|$)/g);
  var sentences = [];
  //join acronyms, titles
  for (var i in tmp) {
    if (tmp[i]) {
      tmp[i] = tmp[i].replace(/^\s+|\s+$/g, ''); //trim extra whitespace
      //join common abbreviations + acronyms
      if (tmp[i].match(/(^| )(mr|dr|llb|md|bl|phd|ma|ba|mrs|miss|misses|mister|sir|esq|mstr|jr|sr|st|lit|inc|fl|ex|eg|jan|feb|mar|apr|jun|aug|sept?|oct|nov|dec)\. ?$/i) || tmp[i].match(/[ |\.][a-z]\.?$/i)) {
        tmp[parseInt(i, 10) + 1] = tmp[i] + ' ' + tmp[parseInt(i, 10) + 1];
      } else {
        sentences.push(tmp[i]);
        tmp[i] = '';
      }
    }
  }
  //cleanup afterwards
  var clean = [];
  for (var i2 in sentences) {
    sentences[i2] = sentences[i2].replace(/^\s+|\s+$/g, ''); //trim extra whitespace
    if (sentences[i2]) {
      clean.push(sentences[i2]);
    }
  }
  return clean;
}
//console.log(fns.sentenceparser('Dr. calm is me. lkj'))

//remove objects with a duplicate field from json
fns.json_unique = function(x, field) {
  var newArray = [];
  label: for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      if (newArray[j] && x[i] && newArray[j][field] == x[i][field]) continue label;
    }
    newArray[newArray.length] = x[i];
  }
  return newArray;
}



//handle rate-limited asynchronous freebase calls with a ending callback
fns.doit_async = function(params) {
  params.q = params.q || [];
  //pack the options in the array
  var packs = params.q.map(function(q, i) {
    return {
      q: q,
      options: params.options,
      method: params.method
    }
  });
  var unpack = function(pack, callback) {
    pack.method(pack.q, pack.options, function(result) {
      callback(null, result)
    })
  }
  async.mapLimit(packs, async_max, unpack, function(err, result) {
    return params.callback(result);
  })
}



//turn freebase's silly $00 encoding into unicode
fns.mql_unencode = function(x) {
  x = x.replace(/\$([0-9A-Fa-f]{4})/g, function(a, b) {
    return String.fromCharCode(parseInt(b, 16));
  });
  return x;
}
//console.log(fns.mql_unencode("K$00F6ppen_climate_classification"))


//turn an array into smaller groups of arrays
fns.groups_of = function(arr, group_length) {
  var all = []
  for (var i in arr) {
    if (i % group_length === 0) {
      all.push([arr[i]])
    } else {
      all[all.length - 1].push(arr[i])
    }
  }
  return all
}

fns.parseurl = function(str) {
  var o = {
    strictMode: false,
    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    q: {
      name: "queryKey",
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  },
  m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
    uri = {},
    i = 14;
  while (i--) uri[o.key[i]] = m[i] || "";
  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });
  return uri;
}

//turn options object into get paramaters
fns.set_params = function(o) {
  var options = o;
  if (!options) {
    return ''
  }
  return Object.keys(options).map(function(v) {
    var val = options[v];
    if (fns.isarray(options[v]) || _.isObject(options[v])) {
      val = encodeURIComponent(JSON.stringify(options[v]));
    }
    return v + '=' + val
  }).join('&')
}

fns.clone = function(q) {
  return JSON.parse(JSON.stringify(q))
}

fns.softget=function(url, options, callback) {
  http.get(url, function(r){
    callback(r)
  })
}

fns.http = function(url, options, callback) {
  if (options.key) {
    url += '&key=' + options.key;
  }
  http.get(url, callback);
}

fns.post = function(query, options, callback) {
  var body = 'query=' + JSON.stringify({
    query: query,
    key: options.key,
    cursor: options.cursor
  })
  http.post('https://www.googleapis.com/freebase/v1/mqlread', body, callback);
}
//fns.post([{"id":"/en/radiohead","name":null}],{},console.log)

fns.isin = function(word, arr) {
  return arr.some(function(v) {
    return v == word
  })
}


  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return fns;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = fns;
  }

  return fns;

})()