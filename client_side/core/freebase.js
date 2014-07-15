/*! freebase 
 by @spencermountain
 2014-07-15 */
/*! freebase.js 
 by @spencermountain
	https://github.com/spencermountain/Freebase.js
 2013-03-21 
*/

(function( $ ) {
  $.freebase = (function() {
//client-side and serverside http methods, using jquery and micheal/request respectively
var http = (function() {

	var http = {}

	//client-side environment
	if (typeof window != 'undefined' && window.screen) {

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
				callback(trytoparse(body))
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

	// export for Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = http;
	}

	return http;

})()
//if nodejs, load these modules
if (typeof module !== 'undefined' && module.exports) {
    var data = require('./data.js').data;
    var http = require('./http.js');
}

var fns = (function() {


    //non-front-facing methods that are used for the freebase javascript package

    var fns = {}


    fns.isarray = function(x) {
        return toString.call(x) == '[object Array]';
    }

    fns.isobject = function(obj) {
        return obj === Object(obj);
    }

    fns.flatten = function(input, shallow, output) {
        output = output || []
        input.forEach(function(value) {
            if (fns.isarray(value)) {
                shallow ? output.push(value) : fns.flatten(value, shallow, output);
            } else {
                output.push(value);
            }
        });
        return output;
    };
    // console.log(fns.flatten([2, 3, [4, [5]], []]))

    fns.last = function(arr) {
        return arr[arr.length]
    }

    fns.compact = function(arr) {
        return arr.filter(function(v) {
            return v
        })
    }

    //compact even empty objects
    fns.compact_strong = function(arr) {
        return arr.filter(function(a) {
            if (!a || typeof a == "object" && Object.keys(a).length == 0) {
                return false
            } else {
                return true
            }
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
        if (o.q && typeof o.q == "object") {
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
        var all = []
        packs.forEach(function(pack) {
            pack.method(pack.q, pack.options, function(result) {
                all.push(result)
                if (all.length == packs.length) {
                    params.callback(all)
                }
            })
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
            if (fns.isarray(options[v]) || fns.isobject(options[v])) {
                val = encodeURIComponent(JSON.stringify(options[v]));
            }
            return v + '=' + val
        }).join('&')
    }

    fns.clone = function(q) {
        return JSON.parse(JSON.stringify(q))
    }

    fns.softget = function(url, options, callback) {
        http.get(url, function(r) {
            callback(r)
        })
    }

    fns.http = function(url, options, callback) {
        if (options.key) {
            if (!url.match(/\?/)) { //pretty ugly
                url += '?'
            }
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

    fns.intersection = function(arr1, arr2) {
        return arr1.filter(function(a) {
            return fns.isin(a, arr2)
        })
    }

    fns.isempty = function(o) {
        if (!o || typeof o != 'object') {
            return true
        }
        if (Object.prototype.toString.call(o) !== '[object Array]' && Object.keys(o).length == 0) {
            return true
        }
        return false
    }
    // console.log(fns.isempty({sdf:2}))

    // export for Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = fns;
    }

    return fns;

})()
//By Spencer Kelly (@spencermountain)
//https://github.com/spencermountain/Freebase-nodejs

//if nodejs, load these modules, otherwise assume they're included
if (typeof module !== 'undefined' && module.exports) {
    var fns = require('./helpers/helpers');
}

var freebase = (function() {

    var freebase = {};


    ////////////
    /// to use mqlwrite, generate a access token by running 'node ./mqlwrite/create_access_token.js', and paste it in here
    //////////
    freebase.access_token = ""
    ///////////

    freebase.globals = {
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
        var url = freebase.globals.host + 'mqlread?query=' + JSON.stringify(query) + "&cursor=" + options.cursor
        fns.http(url, options, function(result) {
            if (result && result.error) {
                console.log(JSON.stringify(result.error, null, 2));
            }
            return callback(result)
        })
    }
    // freebase.mqlread([{id:"/en/radiohead",name:null}])

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
            return freebase.lookup_id(ps.q, ps.options, function(r) {
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
        var url = freebase.globals.host + 'search/?' + params;
        if (ps.options.type == "/type/type" || ps.options.type == "/type/property") {
            url += "&scoring=schema&stemmed=true"
        }
        fns.http(url, ps.options, function(result) {
            if (!result || !result.result || !result.result[0]) {
                if (result && result.error) {
                    console.log(JSON.stringify(result.error, null, 2));
                }
                return ps.callback([])
            }
            return ps.callback(result.result)
        })
    }
    // freebase.search("bill murray")
    // freebase.search("/m/01sh40")
    // freebase.search("/en/radiohead")



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
        var url = freebase.globals.host + 'search?limit=2&lang=en&type=' + ps.options.type + '&filter=';
        var output = fns.clone(freebase.globals.generic_query);
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
            kill_list = ["/music/track", "/music/release_track", "/tv/tv_episode", "/music/recording", "/music/composition", "/book/book_edition"]
            //kill if types are crap
            if (result[1] && result[0].notable && fns.isin(result[0].notable.id, kill_list)) {
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
        var query = fns.clone(freebase.globals.generic_query);
        query.id = ps.q;
        freebase.mqlread([query], options, function(r) {
            r = r.result || []
            return ps.callback(r[0] || {})
        })
    }
    // freebase.lookup_id('/en/radiohead')
    // freebase.lookup_id('/m/07jnt')



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
        var output = fns.clone(freebase.globals.generic_query);
        var url = freebase.globals.host + 'search?type=/common/topic&limit=1&query=' + encodeURIComponent(ps.q);
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
            var url = freebase.globals.host + 'topic' + id + '?' + fns.set_params(ps.options)
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
        options.max = options.max || 99999999;
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
            var url = freebase.globals.host + "rdf" + id;
            fns.softget(url, ps.options, function(result) {
                return ps.callback(result || '')
            })
        })
    }
    // freebase.rdf("toronto")




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
            var url = freebase.globals.host + 'text' + topic.id;
            fns.http(url, ps.options, function(result) {
                if (!result.result) {
                    return ps.callback('')
                }
                return ps.callback(result.result)
            })
        });
    }
    // freebase.description("tunisia")
    // freebase.description("mike myers")

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
                var url = freebase.globals.image_host + result.result[0]["/common/topic/image"][0].id;
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


    freebase.documentation = function(f, options, callback) {
        Object.keys(freebase).filter(function(v) {
            return v != "documentation" && v != "access_token" && v != "test_writes" && v != "globals"
        }).forEach(function(k) {
            var x = new freebase[k]("", {}, function() {})
            console.log("* **" + k + "**\n     -" + x.doc)
        })
    }
    // freebase.documentation()


    var aliases = {
        mqlread: ["query", "mql_read"],
        topic: ["topic_api", "all_data", "data", "everything", "get_data"],
        paginate: ["continue", "all", "each"],
        same_as_links: ["sameas", "sameaslinks", "links", "external_links", "weblinks"],
        translate: ["translate_to", "i8n", "translation"],
        image: ["picture", "get_image"],
        description: ["blurb", "get_blurb", "blurb_api", "text"],
        notable: ["notable_type", "notable_for", "notable_as", "main_type", "type"],
        place_data: ["place", "place_info", "location_info", "location"],
        incoming: ["incoming_links"],
        outgoing: ["outgoing_links"],
        related: ["related_topics", "similar"],
        geolocation: ["geo", "geocoordinates", "geo_location", "lat_lng", "location"],
        nearby: ["near", "close_to"],
        inside: ["inside_of", "within", "contained_by", "contains"],
        mql_encode: ["encode", "escape"]
    }
    Object.keys(aliases).forEach(function(k) {
        if (freebase[k]) {
            aliases[k].forEach(function(a) {
                freebase[a] = freebase[k]
            })

        }
    })


    // export for Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = freebase;
    }

    return freebase;

})()

 return freebase; })()
})(jQuery)