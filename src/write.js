////////mqlwrite

// export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    var freebase = require("../index")
    var fns = require('./helpers/helpers');
    var async = require('async')
    var request = require('request')
}

freebase.mqlwrite = function(query, options, callback) {
    this.doc = "write to freebase";
    callback = callback || console.log;
    if (!query) {
        return callback({})
    }
    if (typeof options == "function") {
        callback = options;
        options = {};
    }
    options = options || {};
    options.oauth_token = options.oauth_token || options.access_token
    if (!options.oauth_token) {
        console.log("=========")
        console.log("to write to freebase, you must create an 'access token'")
        console.log("create one by running 'node ./mqlwrite_setup.js' and follow the instructions")
        console.log("then include it in the options paramater")
        console.log("=========")
        return
    }
    var url = freebase.globals.host + 'mqlwrite?query=' + encodeURIComponent(JSON.stringify(query))
    var obj = {
        url: url,
        headers: {
            'User-Agent': 'request',
            Authorization: "Bearer " + options.oauth_token
        }
    }
    request(obj, function(err, r, p) {
        if (err) {
            console.log(err)
        }
        var result = JSON.parse(p).result
        return callback(result, err)
    })

}
freebase.add_type = function(topic, options, callback) {
    this.doc = "add a type to a freebase topic";
    callback = callback || console.log;
    options = options || {};
    var query = {
        "id": topic,
        "type": {
            "id": options.type,
            "connect": options.connect || "insert"
        }
    }
    freebase.mqlwrite(query, options, callback)
}
freebase.add_alias = function(topic, options, callback) {
    this.doc = "add a alias to a freebase topic";
    callback = callback || console.log;
    options = options || {};
    var query = {
        "id": topic,
        "/common/topic/alias": {
            "value": options.alias,
            "connect": options.connect || "insert",
            "lang": options.lang || "/lang/en"
        }
    }
    freebase.mqlwrite(query, options, callback)
}



freebase.test_writes = function(token) {
    freebase.add_type("/en/radiohead", {
        type: "/music/artist",
        token: token
    })
    // freebase.add_alias("/wikipedia/en/John_f_kenedy", "jfk", console.log)
}









//accept a list of topics and ensure they meet demands
freebase.filter = function(list, options, callback) {
    options = options || {}
    options.filter = options.filter || {}
    //build query
    var i = 0
    var letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var queries = list.map(function(l) {
        var query = {
            id: l.id,
            name: null,
            type: []
        }
        if (options.filter.type) {
            query['must:type'] = options.filter.type
        }
        if (options.filter.types) {
            options.filter.types.forEach(function(t) {
                query[letters[i % 26] + ':type'] = t
                i++
            })
        }
        if (options.filter.not_type) {
            query['musnt:type'] = {
                "optional": "forbidden",
                "id": options.filter.not_type
            }
        }
        if (options.filter.not_types) {
            options.filter.not_types.forEach(function(t) {
                query[letters[i % 26] + ':type'] = {
                    "optional": "forbidden",
                    "id": t
                }
                i++
            })
        }
        return query
    })

    var doit = function(query, cb) {
        freebase.mqlread(query, options, function(r) {
            cb(null, r.result)
        })
    }
    async.mapLimit(queries, 5, doit, function(err, all) {
        var goods = all.filter(function(r) {
            return r
        })
        if (options.filter.name) {
            goods = goods.filter(function(o) {
                return o.name && o.name.match(options.filter.name)
            })
        }
        if (options.filter.not_name) {
            goods = goods.filter(function(o) {
                return o.name && !o.name.match(options.filter.not_name)
            })
        }
        if (options.filter.orphan) {
            goods = goods.filter(function(t) {
                for (var o in t.type) {
                    if (!t.type[o].match(/topic/i)) {
                        return false
                    }
                }
                return true
            })
        }

        function print_report(full, list) {
            var stat = {}
            stat.names = list.map(function(s) {
                return s.name
            }),
            stat.filtered_out = full.length - list.length
            stat.final_count = list.length,
            stat.orphans = list.filter(function(t) {
                for (var o in t.type) {
                    if (!t.type[o].match(/topic/i)) {
                        return false
                    }
                }
                return true
            }).length
            stat.people = list.filter(function(t) {
                return fns.isin('/people/person', t.type)
            }).length
            stat.events = list.filter(function(t) {
                return fns.isin('/time/event', t.type)
            }).length
            stat.locations = list.filter(function(t) {
                return fns.isin('/location/location', t.type)
            }).length
            console.log(JSON.stringify(stat, null, 2));
        }
        if (!options.silent) {
            print_report(all, goods)
        }
        callback(goods)
    });

}



freebase.write_async = function(topics, options, callback) {
    options = options || {}
    options.write = options.write || {}
    options.connect = options.connect || "insert"
    //need only the ids
    var ids = topics.map(function(t) {
        if (typeof t == "string") {
            return t
        }
        return t.id || t.mid
    })
    var queries = ids.map(function(id) {
        var query = {
            id: id
        }
        Object.keys(options.write).forEach(function(k) {
            query[k] = {
                connect: options.connect,
                id: options.write[k]
            }
        })
        return query
    })
    var write_it = function(q, cb) {
        freebase.mqlwrite(q, options, function(result, err) {
            cb(err, result)
        })
    }
    async.mapLimit(queries, 5, write_it, function(err, all) {
        callback(all)
    })

}




//cross-reference wikipedia+freebase data
freebase.garden = function(cat, options, callback) {

    freebase.from_category(cat, options, function(all) {
        freebase.filter(all, options, function(list) {
            if (!options.write) {
                return callback(list)
            }
            freebase.write_async(list, options, function(result) {
                callback(result)
            })
        })
    })

}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = freebase
}

// var cat = "Category:Canadian bridge (structure) stubs"
// var cat = "Category:Bridges_in_Saskatchewan"
// var cat = "Category:Bridges_in_Canada"
// var mytoken = ""

// var options = {
//     key: "",
//     access_token: mytoken,
//     depth: 2,
//     filter: {
//         not_types: ["/transportation/bridge", "/time/event"],
//         not_name: /collapse/i,
//     },
//     write: {
//         type: "/transportation/bridge"
//     }
// }

// // freebase.garden(cat, options, function(r) {
// //     console.log(JSON.stringify(r, null, 2));
// // })

// options = {
//     key: "",
//     access_token: mytoken,
//     write: {
//         type: "/music/artist"
//     }
// }
// freebase.write_async(['/en/radiohead', '/en/paris_hilton'], options, function(r) {
//     console.log(r)
// })