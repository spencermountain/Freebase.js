//make sure we have core methods

// export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    var freebase = require("./core")
    var fns = require('./helpers/helpers');
    var data = require('./helpers/data').data;
}


if (typeof freebase == 'undefined' || !freebase || !freebase.search) {
    console.warn('freebase sugar methods loaded without freebase core methods')
    freebase = {}
}


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
        ps.q = singularize(ps.q);
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
            var types = fns.flatten(result.map(function(v) {
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
// freebase.drilldown("/chemistry/chemical_compound", {
// 	max: 100
// }, console.log)



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
    options.type = "/type/type"
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
                    "optional": true
                }],
                "/freebase/type_profile/published": null,
                "/type/type/expected_by": [{
                    "id": null,
                    "name": null,
                    "optional": true
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
                    "optional": true
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
                if (fns.intersection(data.plural_types, result.type).length > 0) {
                    grammar.plural = true;
                    grammar.pronoun = "they";
                    grammar.copula = "are"
                }
                //categories that need a 'the' instead of 'a'
                if (fns.intersection(data.definate_articles, result.type).length > 0) {
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

    var url = freebase.globals.host + 'search?type=/common/topic&limit=1&query=' + encodeURIComponent(ps.q);
    fns.http(url, ps.options, function(result) {
        if (!result || !result.result || !result.result[0]) {
            return ps.callback({})
        }
        //get its formatted links from the topic api
        freebase.topic(result.result[0].mid, ps.options, function(all) {
            if (fns.isempty(all)) {
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
        desc = sentenceparser(desc) || []
        desc = desc[0] || ''
        desc = desc.replace(/\(.*?\)/g, '') //remove birthdates
        desc = desc.replace(/  /g, ' ')
        return ps.callback(desc)
    })
}
// freebase.sentence('john malkovich', {}, console.log)
// freebase.sentence(['radiohead', 'john malkovich'], {}, console.log)

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
        ps.q = singularize(ps.q);
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
// freebase.list("planets",{}, function(r){console.log(r)})


freebase.place_data = function(geo, options, callback) {
    this.doc = "from a geo-coordinate and area radius (in feet), get the town, province, country, and timezone for it"
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
    geo.radius = geo.radius || 999000
    var filter = '(all type:/location/citytown (within radius:' + geo.radius + 'ft lon:' + geo.lng + ' lat:' + geo.lat + '))'
    var url = freebase.globals.host + 'search?filter=' + filter + '&limit=200'
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
        if (fns.isempty(r)) {
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
            var property_singular = singularize(q);
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
                if (fns.isempty(result)) {
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
            "a:word.word_number"
        ],
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
                all = all.concat(fns.flatten(big, 'shallow'))
                all = fns.json_unique(all, "id")
                //todo: fix
                obj = {
                    q: r,
                    options: ps.options,
                    method: freebase.question,
                    callback: function(big) {
                        if (!big || !fns.isarray(big) || big.length === 0) {
                            return ps.callback(all)
                        }
                        all = all.concat(fns.flatten(big, 'shallow'))
                        all = fns.json_unique(all, "id")
                        return callback(all)
                    }
                }
                fns.doit_async(obj)
            }
        })
    })
}
// freebase.dig('/en/bovid', {
// 	property: '/biology/organism_classification/lower_classifications'
// }, function(r) {
// 	console.log(r)
// })
// freebase.dig('/en/toronto', {
// 	property: '/location/location/contains'
// }, function(r) {
// 	console.log(r)
// })







//originally by david huynh 2010, http://www.freebase.com/appeditor/#!path=//cubed.dfhuynh.user.dev/index
//Algorithm is adopted from
//http://www.csse.monash.edu.au/~damian/papers/HTML/Plurals.html
function singularize(text) {
    if (text.match(' ')) { //multiple words
        var words = text.split(' ');
        var last = words[words.length - 1];
        var firsts = words.slice(0, -1);
        return firsts.join(" ") + ' ' + singularize(last);
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
//console.log(singularize("george soros"));
//console.log(singularize("mama cass"));




//by spencer kelly (@spencermountain)
function sentenceparser(text) {
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



if (typeof module !== 'undefined' && module.exports) {
    module.exports = freebase
}