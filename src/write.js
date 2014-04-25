////////mqlwrite

// export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    var freebase = require("./core")
    var fns = require('./helpers/helpers');
}


if (typeof freebase == 'undefined' || !freebase || !freebase.search) {
    console.warn('freebase sugar methods loaded without freebase core methods')
    freebase = {}
}



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
    if (!options.oauth_token) {
        console.log("=========")
        console.log("to write to freebase, you must create an 'access token'")
        console.log("create one by running 'node ./mqlwrite/create_access_token' and following the instructions")
        console.log("=========")
    }
    var url = freebase.globals.host + 'mqlwrite?query=' + encodeURIComponent(JSON.stringify(query)) + "&oauth_token=" + (options.oauth_token || "")
    fns.http(url, callback)
}
freebase.add_type = function(topic, options, callback) {
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
freebase.add_alias = function(topic, options, callback) {
    this.doc = "add a alias to a freebase topic";
    this.reference = "http://wiki.freebase.com/wiki/MQLwrite";
    callback = callback || console.log;
    options = options || {};
    var query = {
        "id": topic,
        "/common/topic/alias": {
            "value": options.alias,
            "connect": "insert",
            "lang": "/lang/en"
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