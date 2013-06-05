/*! freebase 
 by @spencermountain
 2013-06-05 */


var data = (function() {

  var data = {};



  data.properties={
  	"alias":"/common/topic/alias",
  	"type":"/type/object/type",
  	"name":"/type/object/name",
  	"id":"/type/object/id",
  	"mid":"/type/object/mid",
  	"key":"/type/object/key"
  }

data.is_a = ["/amusement_parks/ride/ride_type", "/amusement_parks/roller_coaster/propulsion", "/amusement_parks/roller_coaster/train_configuration", "/architecture/building/building_function", "/architecture/museum/type_of_museum", "/astronomy/asteroid/spectral_type", "/astronomy/celestial_object/category", "/astronomy/extraterrestrial_location/type_of_planetographic_feature", "/astronomy/galaxy/galaxy_classification_hubble",
    "/astronomy/galaxy_classification_code/galaxy_shape", "/astronomy/near_earth_object/near_earth_object_classification", "/astronomy/orbital_relationship/orbit_type", "/astronomy/star/spectral_type", "/astronomy/telescope/type_of_telescope", "/automotive/model/automotive_class", "/automotive/transmission/classification", "/aviation/aircraft_model/aircraft_type", "/aviation/airliner_accident/accident_type", "/aviation/airport/airport_type", "/aviation/aviation_waypoint/waypoint_type", "/award/competition/type_of_competition",
    "/bicycles/bicycle_model/bicycle_type", "/biology/breed_registration/breed_group", "/biology/fossil_specimen/organism", "/biology/gene_group_membership/group", "/biology/gene_ontology_group/group_type", "/biology/organism/organism_type", "/biology/organism/sex", "/biology/organism_classification/rank", "/biology/pedigreed_animal/breed", "/boats/ship/ship_class", "/boats/ship_class/ship_type", "/book/book_edition/binding", "/book/periodical_format_period/format", "/book/poem/verse_form", "/book/short_non_fiction/mode_of_writing",
    "/business/consumer_product/category", "/business/issue/type_of_issue", "/business/product_line/category", "/celebrities/sexual_orientation_phase/sexual_orientation", "/chemistry/chemical_compound/classifications", "/chemistry/chemical_element/chemical_series", "/chemistry/chemical_element/periodic_table_block", "/computer/computer_peripheral/peripheral_class", "/computer/file_format/genre", "/conferences/conference_series/type_of_conference", "/cricket/cricket_match/match_type", "/cvg/computer_videogame/gameplay_modes",
    "/digicams/digital_camera/format", "/distilled_spirits/blended_spirit/style", "/distilled_spirits/distilled_spirit/spirit_type", "/distilled_spirits/infused_spirit/infusion_style", "/education/educational_institution/school_type", "/education/fraternity_sorority/fraternity_sorority_type", "/engineering/battery/cell_type", "/engineering/battery/size", "/engineering/battery_size/shape_format", "/engineering/engine/category", "/engineering/piston_engine/cooling_method", "/engineering/piston_engine/fuel_delivery_method",
    "/engineering/piston_engine/piston_configuration", "/engineering/piston_engine/valvetrain_configuration", "/engineering/power_plug_standard/plug_type", "/event/disaster/type_of_disaster", "/event/speech_or_presentation/type_or_format_of_presentation", "/exhibitions/exhibition/exhibition_types", "/fashion/textile/weave", "/fictional_universe/fictional_setting/setting_type", "/film/film/film_format", "/food/beer/beer_style", "/food/beer_style/bjcp_style_category", "/food/cheese/texture", "/food/dish/type_of_dish1",
    "/food/drinking_establishment/drinking_establishment_type", "/food/tea/tea_type", "/food/wine_style/wine_types", "/geography/geographical_feature/category", "/geography/glacier/glacier_type", "/geography/lake/lake_type", "/geography/mountain/listings", "/geography/mountain/mountain_type", "/geography/waterfall/waterfall_type", "/government/government_office_or_title/category", "/government/government_position_held/basic_title", "/interests/collectable_item/collection_category", "/internet/top_level_domain/domain_type",
    "/language/conlang/conlang_type", "/language/language_writing_system/type_of_writing", "/law/us_patent/international_classification", "/law/us_patent/us_classification_category", "/law/us_patent/us_patent_type", "/location/administrative_division_capital_relationship/capital_type", "/location/country/form_of_government", "/location/location_symbol_relationship/Kind_of_symbol", "/martial_arts/martial_art/category", "/medicine/cancer_center/cancer_center_type", "/medicine/drug/drug_class", "/medicine/drug/mechanism_of_action",
    "/medicine/drug_formulation/dosage_form", "/medicine/drug_formulation/drug_category", "/medicine/hospital_ownership/ownership_status", "/medicine/infectious_disease/infectious_agent_type", "/medicine/medical_trial/design", "/medicine/medical_trial/phase", "/medicine/medical_trial/type_of_trial", "/meteorology/cloud/classification", "/meteorology/tropical_cyclone/category", "/metropolitan_transit/transit_line/service_type", "/military/military_unit/unit_size", "/music/album/release_type", "/music/composition/form",
    "/music/opera_singer/voice_type", "/music/release/format", "/organization/organization/legal_structure", "/organization/organization/organization_type", "/people/person/ethnicity", "/people/person/gender", "/physics/particle/family", "/physics/particle/generation", "/protected_sites/natural_or_cultural_site_designation/categories", "/protected_sites/natural_or_cultural_site_listing/designation", "/protected_sites/protected_site/iucn_category", "/rail/locomotive_class/gauge", "/rail/railway_gauge_relationship/gauge",
    "/rail/railway_type_relationship/railway_type", "/rail/steam_locomotive_class/fuel_type", "/rail/steam_locomotive_class/wheel_configuration", "/religion/place_of_worship/religion", "/religion/place_of_worship/type_of_place_of_worship", "/religion/place_of_worship_historical_use/religion", "/religion/religious_leadership_jurisdiction/size_or_type", "/royalty/chivalric_rank/gender", "/royalty/noble_rank/gender", "/royalty/order_of_chivalry/category", "/skiing/lift_tenure/lift_type", "/skiing/ski_run/rating", "/spaceflight/bipropellant_rocket_engine/engine_cycle",
    "/spaceflight/rocket/rocket_function", "/spaceflight/satellite/primary_use", "/sports/boxer/weight_division", "/time/holiday/type_of_holiday", "/transportation/bridge/bridge_type", "/travel/accommodation/accommodation_type", "/visual_art/artwork/art_form", "/wine/wine/color", "/wine/wine/wine_style", "/wine/wine/wine_type", "/zoos/zoo/category", "/people/person/profession", "/soccer/football_player/position_s", "/american_football/football_historical_roster_position/position_s", "/american_football/football_player/position_s",
    "/american_football/football_roster_position/position", "/baseball/baseball_player/position_s", "/baseball/baseball_roster_position/position", "/basketball/basketball_player/position_s", "/basketball/basketball_roster_position/position", "/ice_hockey/hockey_player/hockey_position", "/ice_hockey/hockey_roster_position/position", "/soccer/football_player/position_s", "/soccer/football_roster_position/position"
    ]



  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return data;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = data;
  }

  return data;

})()
//client-side and serverside http methods, using jquery and micheal/request respectively
var http = (function() {

  var http = {}

  //client-side environment
  if (typeof window != 'undefined' && window.screen) {
    console.log('clientside')
    http.get = function(url, callback) {
      callback = callback || defaultcallback;
      $.get(url, function(result) {
        callback(trytoparse(result))
      }).fail(function(e) {
        callback(e.statusText || "error")
      });
    }

    http.jsonp = function(url, callback) {
      callback = callback || defaultcallback;
      $.getJSON(url, function(result) {
        callback(trytoparse(result))
      }).fail(function(e) {
        callback(e.statusText || "error")
      });
    }

    http.post = function(url, data, callback) {
      callback = callback || defaultcallback;
      $.post(url, data, function(result) {
        callback(trytoparse(result))
      }).fail(function(e) {
        callback(e.statusText || "error")
      });
    }

    function defaultcallback(s) {
      console.log(s);
      $('body').append(JSON.stringify(s));
    }
  }
  //server-side environment
  else if (typeof module !== 'undefined' && module.exports) {
    var request = require('request');

    http.get = function(url, callback) {
      callback = callback || console.log;
      request({
        uri: url
      }, function(error, response, body) {
        if (response && response.statusCode == 200) {
          callback(JSON.parse(body))
        } else {
          console.log("===" + response.statusCode + " error==")
          console.log(body)
          callback({error:body})
        }
      })
    }


    http.post = function(url, data, callback) {
      callback = callback || console.log;
      if (typeof data == 'object') {
        data = JSON.stringify(data);
      }
      request({
        url: 'http://api.freebase.com/api/service/mqlread',
        method: 'POST',
        body: data
      }, function(err, res, body) {
        callback(trytoparse(body));
      });
    }

  }

  function trytoparse(d) {
    try {
      return JSON.parse(d);
    } catch (e) {
      return d;
    }
  }

  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return http;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = http;
  }

  return http;

})()
if (typeof module !== 'undefined' && module.exports) {
  //var freebase = require("./freebase");
  //var request = require("request");
  var http = require("./http");
}


var fns = (function() {

  var fns = {};


  fns.command_line_ask = function(question, format, callback) {
    var stdin = process.stdin,
      stdout = process.stdout;
    stdin.resume();
    console.log(question + ": ");
    stdin.once('data', function(data) {
      data = data.toString().trim();
      if (format.test(data)) {
        callback(data);
      } else {
        stdout.write("paste in the data and press enter ;)\n");
        ask(question, format, callback);
      }
    });
  }

  fns.mql_encode = function(s) {
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

  fns.parsedate = function(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]); // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  }

  fns.flatten = function(arr) {
    return arr.reduce(function(a, b) {
      return a.concat(b);
    }, []);
  }

  fns.http = function(url, callback) {
    http.get(url, callback)
  }

  fns.isin = function(word, arr) {
    return arr.some(function(v) {
      return v == word
    })
  }

  fns.compact = function(arr) {
    return arr.filter(function(v) {
      return v
    })
  }

  fns.compact_strong = function(arr) {
    return fns.unique(fns.compact(arr)).filter(function(v) {
      return fns.isEmpty(v) == false
    })
  }

  fns.isEmpty = function(obj) {
    if (obj == null) return true;
    if (fns.jstype(obj) == "array" || fns.jstype(obj) == "string") return obj.length === 0;
    for (var key in obj) if (obj[key] != undefined) return false;
    return true;
  };


  fns.unique = function(x, field) {
    if (!field) {
      var newArray = new Array();
      label: for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < newArray.length; j++) {
          if (newArray[j] == x[i]) continue label;
        }
        newArray[newArray.length] = x[i];
      }
      return newArray;
    } else {
      var newArray = new Array();
      label: for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < newArray.length; j++) {
          if (newArray[j][field] == x[i][field]) continue label;
        }
        newArray[newArray.length] = x[i];
      }
      return newArray;
    }
  }

  fns.extend = function(bad, good) {
    for (var i in good) {
      bad[i] = good[i];
    }
    return bad;
  };

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


  //does it look like a freebase id?
  fns.isid = function(str) {
    if (str.match(/^\/[^ ]*?\/[^ ]*?$/)) {
      return true;
    }
    return false
  }

  //get the generic javascript class of a variable

  fns.jstype = function(obj) {
    var classToType, myClass, name, _i, _len, _ref;
    if (obj === void 0 || obj === null) {
      return "null";
    }
    classToType = new Object;
    _ref = "Boolean Number String Function Array Date RegExp".split(" ");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      classToType["[object " + name + "]"] = name.toLowerCase();
    }
    myClass = Object.prototype.toString.call(obj);
    if (myClass in classToType) {
      return classToType[myClass];
    }
    return "object";
  };

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
var slow = (function() {

	var slow = function(arr, fn, options, done) {
		var i = -1;
		var all = [];
		var at_once = 0;
		done = done || console.log;
		options = options || {};
		options.max = Math.abs(options.max) || 5;
		options.verbose = options.verbose || false;
		options.debug = options.debug || false;
		if (typeof options.monitor != "function") {
			options.monitor = false;
		}

		function iterate() {
				i++;
				var spot = i;
				at_once++;
				if (options.debug) {
					console.log("sending #" + i + " - (" + at_once + " going at once)");
				}
				fn(arr[i], function(result) {
					console.log(result)
					at_once -= 1;
					all[spot] = result;
					if (i < arr.length - 1) {
						return iterate();
					}
					//think about ending
					if (at_once <= 0) {
						return done(all);
					}
				})
		}
		//get initial functions going
		for (var x = 0;
		(x < options.max && x < arr.length); x++) {
			iterate();
		}
	}

		function finish(s) {
			console.log(JSON.stringify(s, null, 2));
		}


		// export for AMD / RequireJS
	if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return slow;
		});
	}
	// export for Node.js
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = slow;
	}

	return slow;


})()



// 	function test_function(q, callback) {
// 		var x = Math.floor(Math.random() * 4000)
// 		setTimeout(function() {
// 			callback("finished " + q + " in " + x + "ms")
// 		}, x)
// 	}
// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// slow(arr, test_function, {}, console.log)
if (typeof module !== 'undefined' && module.exports) {
  var request = require("request");
  var fns = require('./helpers');
  var data = require('./data');
  var wikipedia = require('./wikipedia');
  //var slow = require('slow');
  var slow=require('./slow');
  var request = require('request');
  var googleapis = require('googleapis');
  var OAuth2Client = googleapis.OAuth2Client;
  var fs=require("fs")
  var path=require('path');
  var file=path.resolve(path.dirname(require.main.filename),"oauth_data.json")
  var oauth_data={}
  if(fs.existsSync(file)){
      oauth_data=JSON.parse(fs.readFileSync(file))
  }
}


var freebase = (function() {

  var freebase = {};
  freebase.api_key = "AIzaSyD5GmnQC7oW9GJIWPGsJUojspMMuPusAxI" //please don't abuse my key
  freebase.host = "https://www.googleapis.com/freebase/v1" //production
  //freebase.host = "https://www.googleapis.com/freebase/v1sandbox"  //sandbox
  freebase.data = data;
  freebase.wikipedia = wikipedia
  freebase.default_callback = function(r){console.log(JSON.stringify(r, null, 2));}


  freebase.authenticate=function(callback){

    callback=callback||console.log;
    var now=new Date().getTime()
    if(oauth_data && oauth_data.token && oauth_data.token.alive_until > now ){
      var minutes=((oauth_data.token.alive_until  - now )/1000)/60
      console.log("your token is good for another "+parseInt(minutes)+" minutes")
      freebase.access_token=oauth_data.token.access_token
      callback()
      return
    }
    var oauth2Client = new OAuth2Client(oauth_data.CLIENT_ID, oauth_data.CLIENT_SECRET, oauth_data.REDIRECT_URL);
    var url = oauth2Client.generateAuthUrl({
      scope: 'https://www.googleapis.com/auth/freebase'
    });
    console.log("please visit this url to get your code: ")
    console.log(url)
    console.log(" ")
    fns.command_line_ask("what is the 'code' parameter on the page you redirected to?", /.+/, function(code) {
        oauth2Client.getToken(code, function(err, token) {
          if (err) {console.log(err)}
          var now=new Date()
          token.alive_until=now.setSeconds(now.getSeconds() + token.expires_in);
          freebase.access_token=token.access_token
          oauth_data.token=token
          var str=JSON.stringify(oauth_data, null, 4)
          fs.writeFile(file, str, function(err) {
              if(err) { console.log(err); }
              callback()
              return
          });
        })
    })
  }
  //
  //Freebase classes
  //
  freebase.Topic = function(data) {
    var topic = this;
    if(topic instanceof freebase.Topic){
      return topic
    }
    var type = fns.jstype(data);
    if (type == "null") {
      return {}
    }
    if (type == "string") {
      if (fns.isid(data)) {
        data = {
          id: data
        }
      } else {
        //search automatically?
        console.log(JSON.stringify(data) + " is not a freebase id")
        process.exit(code = 1)
      }
    }
    topic.id = data.id || data.mid;
    topic.mid = data.mid || data.id;
    topic.name = data.name || data.text || data.title;
    topic.get = function(property, callback, options) {
      options = new freebase.Option(options)
      callback = callback || freebase.default_callback;
      freebase.reconcile_property(property, function(p) {
        options.property = p.id;
        freebase.topic_api(topic, function(result) {
          if (!result.property || result.property.length == 0) {
            callback([])
          } else {
            return callback(render_results(result.property[options.property]))
          }
        }, options)
      }, options)
    }
    topic.set = function(property, id, callback, options) {
      options = new freebase.Option(options)
      callback = callback || freebase.default_callback;
      freebase.reconcile_property(property, function(prop) {
         var query = {
          id: topic.id,
        }
        query[prop.id]={
          id:id,
          connect: (options.connect || "insert")
        }
        freebase.mqlwrite(query, function(result) {
          if(!result || !result.result || !result.result.id){
            console.log("=======error=====")
            console.log(JSON.stringify(result, null, 2));
            console.log("=======error=====")
          }else{
            console.log([result.result.id, result.result[prop.id].id, result.result[prop.id].connect, result.result.name].join("   \t"))
          }
          callback(result)
        }, options)
      })
    }
    topic.add_type = function(type, callback, options) {
      topic.set("/type/object/type", type, callback, options)
    }
  topic = fns.extend(topic, data)
}

function render_results(results) {
  results = results || {}
  if (results.valuetype == "string" || results.valuetype == "uri" || results.valuetype == "int") {
    return results.values.map(function(v) {
      return v.text
    })
  }
  if (results.valuetype == "datetime") {
    return results.values.map(function(v) {
      return fns.parsedate(v.text)
    })
  }
  if (results.valuetype == "object") {
    return results.values.map(function(v) {
      return {
        id: v.id,
        name: v.text
      }
    })
  }
  return results.values
}


freebase.Property = function(data) {
  var property = this;
  var type = fns.jstype(data);
  if (type == "null") {
    return {}
  }
  if (type == "string") {
    if (fns.isid(data)) {
      data = {
        id: data
      }
    } else {
      //search automatically?
      console.log(JSON.stringify(data) + " is not a freebase id")
      process.exit(code = 1)
    }
  }
  property.id = data.id || data.mid;
  property.mid = data.mid || data.id;
  property.type = (function() {
    return property.mid.split(/\//g).slice(0, 3).join('/')
  })()
  //property=fns.extend(property, data)
}

freebase.Topiclist = function(data) {
  var list = this;
  var type = fns.jstype(data);
  if (type == "null") {
    return {}
  }
  list.data = list.data || data.map(function(v) {
    return new freebase.Topic(v)
  })
  list.get = function(property, callback, options) {
    var doit = function(t, cb) {
      t.get(property, cb, options)
    }
    slow(list.data, doit, {}, function(r) {
      list.data = list.data.map(function(t, i) {
        t[property] = r[i]
        return t
      })
      callback(list.data)
    })
  }
  list.set = function() {}
  list.select = function() {}
  list.reject = function() {}
  list.each = function(method, done){
    var doit=function(t,cb){
      cb=cb||console.log
      method(t,cb)
    }
    done=done||freebase.default_callback
    slow.quick(list.data, doit, {debug:true}, done)
  }
}


freebase.Option = function(data) {
  var option = this;
  data = data || {}
  option.key = freebase.api_key
  option.property = data.property //|| function(){new Property(data.property);}
  option.type = data.type //|| function(){return new freebase.Property(data.property).type;}
  option = fns.extend(option, data)
}



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


freebase.fetch = function(topic, callback, options) {
  this.description = "lookup a specific property in the topic api"
  callback = callback || freebase.default_callback;
  options = new freebase.Option(options);
  freebase.topic_api(topic, function(result) {
    return callback(result.property)
  }, options)
}


freebase.topic_api = function(topic, callback, options) {
  this.description = "call the freebase topic api"
  options = new freebase.Option(options);
  topic=new freebase.Topic(topic)
  console.log(topic)
  callback = callback || freebase.default_callback;
  var filter = options.property || options.type || "all";
  var url = freebase.host + '/topic' + topic.mid + '?key=' + (options.key || '') + '&filter=' + (filter || "all")
  fns.http(url, function(result) {
    return callback(result)
  }, options)
}

freebase.search_api = function(str, callback, options) {
  this.description = "call the freebase search api"
  options = new freebase.Option(options);
  callback = callback || freebase.default_callback;
  var url = freebase.host + '/search?query=' + encodeURIComponent(str) + '&key=' + (options.key || '')
  fns.http(url, function(r) {
    var list = new freebase.Topiclist(r.result)
    return callback(list)
  })
}

freebase.mqlread = function(query, callback, options) {
  this.description = "call the freebase mql api"
  options = new freebase.Option(options);
  callback = callback || freebase.default_callback;
  var url = freebase.host + '/mqlread?query=' + encodeURIComponent(JSON.stringify(query)) + '&key=' + (options.key || '') + "&cursor=" + (options.cursor || "")
  fns.http(url, function(r) {
    return callback(r)
  })
}

freebase.mqlwrite = function(query, callback, options) {
  this.description = "call the freebase mql api"
  options = new freebase.Option(options);
  callback = callback || freebase.default_callback;
  options.oauth_token = options.oauth_token || freebase.access_token || options.oauth || options.token
  var url = freebase.host + '/mqlwrite?query=' + encodeURIComponent(JSON.stringify(query)) + "&oauth_token=" + (options.oauth_token || "")
  fns.http(url, callback)
}

freebase.paginate = function(query, callback, options) {
  this.description = "call the freebase mql api until it finishes, or reaches your maximum"
  options = new freebase.Option(options);
  callback = callback || freebase.default_callback;
  options.max = options.max || options.maximum || 6000;
  var all = [];
  (function iterate(cursor) {
    options.cursor = cursor
    console.log(all.length)
    freebase.mqlread(query, function(r) {
      all = all.concat(r.result)
      if (r.cursor && all.length < options.max) {
        iterate(r.cursor)
      } else {
        callback(all)
      }
    }, options)
  })()
}

freebase.reconcile_property = function(str, callback, options) {
  callback = callback || freebase.default_callback;
  options = new freebase.Option(options)
  if (fns.isid(str)) {
    callback(new freebase.Property(str))
  } else if (freebase.data.properties[str]) {
    callback(new freebase.Property(freebase.data.properties[str]))
  }
}

freebase.test_write = function(callback) {
  var query = {
    "id": "/en/radiohead",
    "type": {
      "id": "/music/artist",
      "connect": "insert"
    }
  }
  freebase.mqlwrite(query, function(r) {
    return callback(r && r.result && r.result.type && r.result.type.connect == "insert")
  })
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

// radiohead = new freebase.Topic("/en/radiohead")
// radiohead.get("name", function(o) {
//   console.log(JSON.stringify(o, null, 2));
// })

// freebase.search_api("toronto",function(topics){
//   topics.get("type",function(names){
//     console.log(JSON.stringify(names, null, 2));
//    })
// })
// query=[
//     {
//       "id": "/en/radiohead",
//       "type": [
//         {
//           "connect": "insert",
//           "id": "/music/artist"
//         }
//       ]
//     }
//   ]
// var dirty=require('/Users/spencer/mountain/dirty');
//  options={oauth:"ya29.AHES6ZQUWg_VCnz4YfPnojkGK6ZWcfFzba-lI9x1UvivkRfm"}
// // freebase.mqlwrite(query, console.log, options)

// // radiohead = new freebase.Topic("/en/radiohead")
// // radiohead.add_type("/music/artist",console.log,options)
// done=function(r){
//   console.log(JSON.stringify(r, null, 2));
// }
// end=function(r){
//   console.log("==done==")
//   console.log(JSON.stringify(r, null, 2));
// }

// list = new freebase.Topiclist(["/en/thom_yorke","/en/paris_hilton"])
// list.each(function(t,cb){
//   //t.get("name",cb)
//   t.add_type("/people/person",cb, options)
// }, end)
//list.each()


// freebase.authenticate()

freebase.topic_api("/en/radiohead", function(r){
  console.log(r)
})
radiohead = new freebase.Topic("/en/radiohead")
console.log(radiohead instanceof freebase.Topic)