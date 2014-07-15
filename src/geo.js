//make sure we have core methods

// export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    var freebase = require("./core")
    var fns = require('./helpers/helpers');
}


if (typeof freebase == 'undefined' || !freebase || !freebase.search) {
    console.warn('freebase sugar methods loaded without freebase core methods')
    freebase = {}
}


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

        var filter = '(all type:' + ps.options.type + ' (within radius:' + ps.options.within + 'ft lon:' + geo.longitude + ' lat:' + geo.latitude + '))'
        var url = freebase.globals.host + 'search?filter=' + encodeURIComponent(filter) + '&limit=200'
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
    ps.options.filter = ps.options.filter || "(all part_of:'" + ps.q + "')"
    ps.options.output = ps.options.output || "(geocode)"
    freebase.search("", ps.options, function(r) {
        return ps.callback(r)
    })
}
// freebase.inside("montreal") //***********



if (typeof module !== 'undefined' && module.exports) {
    module.exports = freebase
}