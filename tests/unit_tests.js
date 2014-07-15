var async = require('async')
var freebase = require('../index');
var key = require("../auth/credentials").API_KEY || ''
var options = {
    key: key //please use your mqlREAD key..
};
var test = {}

test.search = [
    ["franklin", {},
        function(r) {
            console.log(r.length > 2)
        }
    ]
]

test.lookup = [
    ["http://toronto.ca", options,
        function(r) {
            console.log(r.id == "/en/toronto")
        }
    ],
    [
        ["/m/09jm8", "http://myspace.com/u2"], options,
        function(r) {
            console.log(r[1].name == "U2")
        }
    ],
    ["australia", {
            type: "/film/film"
        },
        function(r) {
            console.log(r.mid == "/m/026qnh6")
        }
    ],
    ["thom yorke", options,
        function(r) {
            console.log(r.mid == "/m/01p0w_")
        }
    ],
    ["tom green", options,
        function(r) {
            console.log(r.mid == "/m/017yxq")
        }
    ]
    // [
    //     ["toronto", "suddenly susan"], options,
    //     function(r) {
    //         console.log(r.length == 2)
    //     }
    // ]
]


test.lookup_id = [
    ["/en/pulp_fiction", options,
        function(r) {
            console.log(r.mid == "/m/0f4_l")
        }
    ],
]

test.url_lookup = [
    ["http://myspace.com/u2", options,
        function(r) {
            console.log(r.mid == '/m/0dw4g')
        }
    ],
]

test.mqlread = [
    [{
            "type": "/music/album",
            "id": "/en/keep_it_turned_on",
            "artist": null
        },
        options,
        function(r) {
            console.log(r.result.artist == 'Rick Astley')
        }
    ],
    [{
            id: "/en/radiohead",
            name: null
        },
        options,
        function(r) {
            console.log(r.result.name == 'Radiohead')
        }
    ],
]
test.get_id = [
    ["/en/tony_hawk", options,
        function(r) {
            console.log(r.id == "/en/tony_hawk")
        }
    ]
]
test.topic = [
    ['radiohead', options,
        function(r) {
            // console.log(r)
            console.log(r.id == '/m/09jm8' && r.property['/music/artist/origin'] != null)
        }
    ]
]
test.paginate = [
    [
        [{
            "type": "/astronomy/moon",
            "name": null
        }], options,
        function(r) {
            console.log(r.length > 20)
        }
    ],
]
test.grammar = [
    ["toronto maple leafs", options,
        function(r) {
            console.log(isequal(r, {
                plural: true,
                gender: null,
                article: 'a',
                pronoun: 'they',
                copula: 'are'
            }))
        }
    ],
    ["ron weasley", options,
        function(r) {
            console.log(isequal(r, {
                plural: false,
                gender: 'male',
                article: 'a',
                pronoun: 'he',
                copula: 'is'
            }))
        }
    ]
]
test.same_as_links = [
    ["http://www.geonames.org/6167865/", options,
        function(r) {
            console.log(r.links.length > 3)
        }
    ],
    ["toronto", options,
        function(r) {
            console.log(r.links.length > 3)
        }
    ],
    ["/m/0h7h6", options,
        function(r) {
            console.log(r.links.length > 3)
        }
    ]
]
test.translate = [
    ["toronto", {
            lang: "zh"
        },
        function(r) {
            console.log(r.match(/多伦多/i) != null)
        }
    ],
    ["radiohead", {
            lang: "/lang/ko"
        },
        function(r) {
            console.log(r.match(/라디오헤드/i) != null)
        }
    ]
]
test.image = [
    ["australia", {
            type: "/location/location"
        },
        function(r) {
            console.log(r.match(/maxheight/) != null)
        }
    ]
]
test.description = [
    ["mike myers", options,
        function(r) {
            console.log(r.match(/myers/i) != null)
        }
    ],
    ["http://myspace.com/u2", options,
        function(r) {
            console.log(r.match(/u2/i) != null)
        }
    ]
]
test.notable = [
    ["canada", options,
        function(r) {
            console.log(r.id == '/location/country')
        }
    ]
]
test.sentence = [
    ["thom yorke", options,
        function(r) {
            console.log(r.match(/radiohead/i) != null)
        }
    ],
    ["meatloaf", {
            type: "/food/food"
        },
        function(r) {
            console.log(r != null)
        }
    ],
    [
        [{
            name: "toronto"
        }, {
            id: "/en/radiohead",
            name: "radiohead"
        }], options,
        function(r) {
            console.log(r.length == 2)
        }
    ]
]
test.list = [
    ["earthquakes", options,
        function(r) {
            console.log(r.length > 20)
        }
    ]
]
test.place_data = [
    [{
            lat: 43.64806,
            lng: -79.40417
        },
        options,
        function(r) {
            console.log(r.city.name == "Toronto")
        }
    ],
    [{
            lat: 47.9991410647952,
            lng: 14.172706604003906
        },
        options,
        function(r) {
            console.log(r.country.name == "Austria")
        }
    ]
]
test.incoming = [
    ["germany", options,
        function(r) {
            console.log(r.length > 20)
        }
    ]
]
test.outgoing = [
    ["ubuntu", options,
        function(r) {
            console.log(r.length > 15)
        }
    ]
]
test.graph = [
    ["paul ryan", options,
        function(r) {
            console.log(r[0] && (r[0].object.name == "Paul Ryan" || r[0].subject.name == "Paul Ryan"))
        }
    ]
]
test.related = [
    ["radiohead", options,
        function(r) {
            console.log(r.length > 4 && r[2].id != null)
        }
    ]
]
test.gallery = [
    ["hurricanes", options,
        function(r) {
            console.log(r.length > 20)
        }
    ]
]
test.wordnet = [
    [
        ["bat", "wood"], options,
        function(r) {
            console.log(r.length == 2)
        }
    ],
    ["wood", options,
        function(r) {
            console.log(r && r.length == 4)
        }
    ]
]
test.geolocation = [
    ["toronto", options,
        function(r) {
            console.log(r.latitude != null)
        }
    ]
]
test.nearby = [
    ["cn tower", {
            type: "/location/location"
        },
        function(r) {
            console.log(r.length > 4)
        }
    ]
]
test.inside = [
    ["ontario", {}, //type:/location/location produces no results
        function(r) {
            console.log(r.length > 4)
        }
    ]
]
test.wikipedia_page = [
    ["tony hawk", options,
        function(r) {
            console.log(r == "http://en.wikipedia.org/wiki/Tony_Hawk")
        }
    ]
]
test.dbpedia_page = [
    ["tony hawk", options,
        function(r) {
            console.log(r.json == "http://dbpedia.org/data/Tony_Hawk.json")
        }
    ]
]
test.wikipedia_categories = [
    ["meatloaf", {
            type: "/food/food"
        },
        function(r) {
            console.log(r.length > 4 && r[3].match(/^Category/) != null)
        }
    ]
]
test.wikipedia_links = [
    ["Toronto", options,
        function(r) {
            console.log(r.length >= 5)
        }
    ]
]
test.wikipedia_external_links = [
    ["/en/toronto", options,
        function(r) {
            console.log(r.length >= 3)
        }
    ]
]
test.rdf = [
    ["/en/toronto", options,
        function(r) {
            console.log(r.match(/ns:common\.topic\.alias/) != null)
        }
    ]
]
test.drilldown = [
    ["/astronomy/planet", options,
        function(r) {
            console.log(r.types.length > 0)
        }
    ]
]
test.schema = [
    ["politician", options,
        function(res) {
            console.log(res && res.incoming_properties && res.incoming_properties.length > 0)
        }
    ]
]
// test.schema_introspection=[
//  ["person",options,function(r){console.log(r.id=="/people/person" && r.incoming_properties.length>5)}]
//  ["/people/person",options,function(r){console.log(r.id=="/people/person" && r.incoming_properties.length>5)}]
// ]
test.property_introspection = [
    ["/government/politician/party", options,
        function(r) {
            console.log(r.name == "Party")
        }
    ]
]
// test.property_lookup = []
// test.is_a = []
// test.question = []
// test.dig = []
// test.mql_encode = []


function done(r) {
    console.log('===========done========')
}

function isequal(o1, o2) {
    for (var i in o1) {
        if (o1[i] != o2[i]) {
            return false
        }
    }
    return true
}


function testone(v, cb) {
    if (!test[v]) {
        console.log("need test for " + v)
        console.log('')
        cb()
    } else {
        var d = 0
        test[v].forEach(function(t, i) {
            freebase[v](t[0], t[1], function(r) {
                console.log(v + ' ' + i + ':  ')
                t[2](r)
                d++
                if (d >= test[v].length) {
                    cb()
                    return
                }
            })
        })
    }
}


function core_test(cb) {
    var core = [
        'mqlread',
        'search',
        'lookup',
        'lookup_id',
        'url_lookup',
        'get_id',
        'topic',
        'paginate',
        'wikipedia_page',
        'dbpedia_page',
        'rdf',
        'description',
        'image',
        'notable',
        'drilldown',
        'property_introspection',
        'schema',
        'grammar',
        'same_as_links',
        'translate',
        'sentence',
        'list',
        'place_data',
        'is_a',
        'property_lookup',
        'question',
        'wordnet',
        'geolocation',
        'nearby',
        'inside',
        'incoming',
        'outgoing',
        'graph',
        'related'
    ]

    async.mapLimit(core, 1, testone, function(err, r) {
        console.log('done')
    });

}


core_test(function() {})
// testone('inside', function() {})






//console.log(coverage(freebase, test))
//broadly(null)
// freebase.search("franklin", options, console.log)
// freebase.mqlread([{
//     id: "/en/radiohead",
//     name: null
// }])
// freebase.lookup_id('/en/radiohead')
// freebase.search("bill murray")
// freebase.url_lookup("http://myspace.com/u2")
// freebase.lookup_id("/en/pulp_fiction")
// freebase.get_id("/en/radiohead")
// freebase.topic("toronto", {filter:"allproperties"})
// freebase.paginate([{"type":"/astronomy/moon","name":null, limit:2}],{max:13})
// freebase.description("tunisia")
// freebase.image('toronto',{type:"/location/citytown"})
// freebase.grammar("toronto maple leafs")
// freebase.same_as_links("toronto maple leafs")
// freebase.translate("toronto maple leafs", {lang:"/lang/ja"})
// freebase.notable("toronto maple leafs")
// freebase.sentence('john malkovich', {}, console.log)
// freebase.list("hurricanes",{}, function(r){console.log(r)})
// freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {}, console.log)
// freebase.incoming("toronto")
// freebase.outgoing("vancouver")
// freebase.graph("shawshank redemption")
// freebase.related("toronto", {}, function(r){console.log(JSON.stringify(r, null, 2));})
// freebase.is_a("george clooney")
// freebase.property_lookup("albums")
// freebase.question("keanu reeves", {property:"children"})
// freebase.question("bill murray", {property:"birthday"})
// freebase.dig('/en/toronto', {property:'/location/location/contains'}, function(r){ console.log(r) })
// freebase.gallery('hurricanes')
// freebase.wordnet("charming")
// freebase.transitive("ontario", {property:"part_of"}, function(r){ console.log(r)})
// freebase.geolocation("cn tower")
// freebase.nearby("cn tower", {type:"/location/location"}, console.log)
// freebase.inside("montreal")
// freebase.wikipedia_page('toronto')
// freebase.dbpedia_page('toronto')
// freebase.wikipedia_categories("Tunisia")
// freebase.wikipedia_links("Toronto", {}, console.log)
// freebase.wikipedia_external_links("Toronto", {}, console.log)
// freebase.property_introspection("/government/politician/party")
// freebase.schema("politician")
// freebase.drilldown("/chemistry/chemical_compound",{max:400},console.log)
// freebase.category_list("Category:Redirects_from_plurals")
// freebase.wikipedia_subcategories("Category:Enzymes",{depth:2},function(r){console.log(JSON.stringify(r))})
// freebase.rdf("toronto")
// freebase.wikipedia_to_freebase("Tony Hawk")
// freebase.documentation()