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
        defaults= defaults || {}
        var o = {
            valid: false,
            q: params[0],
            options: params[1] || {},
            callback: params[2] || function(r){console.log(r)},
            method: method || ''
        }
        //clone the options object to avoid memory leaks passing it around
        o.options=JSON.parse(JSON.stringify(o.options))
        //flexible parameters
        if (typeof o.options == "function") {
            o.callback = o.options;
            o.options = {};
        }
        // support for error-first callbacks
        if (o.options.nodeCallback) {
            o.callback = o.callback.bind(undefined, null);
            o.options.nodeCallback = false;
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
        Object.keys(defaults).forEach(function(k){
            if(!o.options[k]){
              o.options[k] = defaults[k];
            }
        })
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