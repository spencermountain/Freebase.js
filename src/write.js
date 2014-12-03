////////mqlwrite

// export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    var freebase = require("./core")
    var fns = require('./helpers/helpers');
    var async = require('async')
    var request = require('request')
}

freebase.mqlwrite = function(query, options, callback) {
    this.doc = "write to freebase";
    callback = callback || console.log;
    if (!query) {
        return options.nodeCallback ? callback(null, {}) : callback({})
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
    if(options.debug){
        console.log(obj)
    }
    request(obj, function(err, r, p) {
        var result = JSON.parse(p).result || {}
        if (!options.nodeCallback && (err || !p || p.error)) {
            console.log(err)
            console.log(p)
        }
        var error= err || result.error
        return options.nodeCallback ? callback(error, result) : callback(result, error)
    })

}
freebase.add_type = function(topic, options, callback) {
    this.doc = "add a type to a freebase topic[s]";
    callback = callback || console.log;
    options = options || {};
    //just one id for a topic..
    if(typeof topic=="string"){
        var query = {
            "id": topic,
            "type": {
                "id": options.type,
                "connect": options.connect || "insert"
            }
        }
        return freebase.mqlwrite(query, options, callback)
    }
    //do a list of topics
    var queries= topic.map(function(t){
        return {
            "id": t,
            "type": {
                "id": options.type,
                "connect": options.connect || "insert"
            }
        }
    })
    var write_it = function(q, cb) {
        freebase.mqlwrite(q, options, function(result, err) {
            cb(err, result)
        })
    }
    return async.mapLimit(queries, 5, write_it, function(err, all) {
        options.nodeCallback ? callback(null, all) : callback(all)
    })
}


freebase.remove_type = function(topic, options, callback) {
    this.doc = "remove a type to a freebase topic[s]";
    options= options || {}
    options.connect="delete"
    return freebase.add_type(topic, options, callback)
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




freebase.write_async = function(topics, options, callback) {
    topics= topics || []
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
        options.nodeCallback ? callback(null, all) : callback(all)
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