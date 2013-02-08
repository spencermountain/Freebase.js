#Freebase
[Freebase](http://freebase.com/) is a very masculine, but complicated human-curated database. [Nodejs](http://nodejs.org/) is a very masculine, but complicated software platform.

## Installation

    npm install freebase

then:

    var freebase=require('freebase');
    freebase.description('tom cruise', [options], [callback])

## Showing off

it's built to be as flexible as possible:

    freebase.sentence("/en/thom_yorke") //freebase link
    freebase.sentence("thom yorke") //search term
    freebase.sentence("http://www.myspace.com/thomyorkemusic") //weblink
    freebase.sentence({"name":"thom yorke", "id":"/en/thom_yorke"}) //freebase object
    freebase.sentence(["/en/radiohead","thom yorke"]) //array
these all return the same thing.

you can also do this, which chunks asynchronous requests into groups of 10 for speed.

    freebase.sentence(["johny greenwood", "thom yorke", "marvin gaye"], {max:10}, console.log)

you can do this, which is pretty clever i'd say:

    freebase.sentence("meatloaf", {type:"/food/food"}, console.log)

you can do this, which is handy when you're hacking-away in the console:

    freebase.sentence("thom yorke")
    freebase.wikipedia_links("thom yorke")

### Freebase methods

####MQLread API
Books about planets:

    var query=[{
                "type":  "/astronomy/planet",
                "name":  null,
                "/book/book_subject/works": []
               }]​
    freebase.mqlread(query, {}, function(r){console.log(r)})

####Pagination
Every Tornado, ever

      query=[{
              "type":"/base/disaster2/tornado",
              "name":null
             }]
      freebase.paginate(query, {max:400}, console.log)

####Search API
Hockey players named 'doug'

    freebase.search("doug",{type: "/ice_hockey/hockey_player"}, console.log)

####Description API
The first paragraph of something's wikipedia article:

     freebase.description("mike myers", {}, console.log)
     freebase.description("http://myspace.com/u2", {}, console.log)

####Topic API
A nicely treated output of all of a topic's data:

     freebase.topic("mike myers", {}, console.log)
     freebase.topic("http://myspace.com/u2", {}, console.log)

####Notable-types
The most accurate, or notable type for a topic:

     freebase.notable("canada", {}, console.log)
     -> {id:"/location/country", name:"Country"}

### Sugar
####Grammar
Which pronoun, tense, article and gender to use for this topic

    freebase.grammar("banana", {}, console.log)
       -> { plural: true,
            gender: null,
            article: 'a',
            pronoun: 'they',
            copula: 'are' }
    freebase.grammar(["prince harry", "miranda july"], {}, console.log)
       -> [ { plural: false,
              gender: 'male',
              article: 'a',
              pronoun: 'he',
              copula: 'is' },
            { plural: false,
              gender: 'female',
              article: 'a',
              pronoun: 'she',
              copula: 'is' } ]
    freebase.grammar("washing machine", {}, console.log)
       -> { plural: true,
            gender: null,
            article: 'a',
            pronoun: 'they',
            copula: 'are' }
    freebase.grammar("cheddar", {type:"/food/food"}, console.log)
       -> { plural: false,
            gender: null,
            article: 'a',
            pronoun: 'it',
            copula: 'is' }

####Related Topics
Similar topics to this topic

    freebase.related("toronto", {}, function(r){
        r.forEach(function(v){return console.log(v.name)})
      })
      ->  Toronto FC
          Toronto Maple Leafs
          Toronto Argonauts
          North York
          Toronto Marlies

####Safe-Lookup
A common-sense search that only matches when confident:

    freebase.lookup("tom green", {}, console.log)
    freebase.lookup(["toronto","suddenly susan"], {}, console.log)

####SameAs links
sameAs weblinks for a topic, or url

    freebase.same_as_links("toronto", {}, console.log)
    freebase.same_as_links("http://toronto.ca", {}, console.log)

####First Sentence
The first sentence from a wikipedia article:

    freebase.sentence("tokyo", {}, console.log)

####Graph-analysis
Graph-type queries on topics, dancing over tough values and mediators:

      freebase.graph("ubuntu", {}, console.log )
      freebase.outgoing("ubuntu", {}, console.log )
      freebase.incoming("ubuntu", {}, console.log )

####Schema-agnostic queries
A list of topics in a 'is-a' type of collection:

     freebase.list("earthquakes", {}, console.log)

####Translation
Translated names for topics:

     freebase.translate("radiohead", {lang:"/lang/ko"}, console.log)
     -> 라디오헤드

####Encoding
Encode a string for inclusion in a freebase id/key/whatever

    freebase.mql_encode("Aarno Yrjö-Koskinen") //"Aarno_Yrj$00F6-Koskinen"

####Schema introspection
Find-out relevant information for a type or property:

     freebase.schema_introspection("politician", {}, console.log)
     -> { domain: { name: 'Government', id: '/government' },
          included_types: [ { name: 'Person', id: '/people/person' },
                            { name: 'Topic', id: '/common/topic' } ],
          is_compound_value: false,
          is_commons: 'Published',
          equivalent_topic: { name: 'Politician', id: '/en/politician' },
          topic_count: 90971,
          property_count: 0,
          ...

###Wikipedia

####Wikipedia-page
Get the wikipedia article linkfor a topic

     freebase.wikipedia_page("tony hawk", {}, console.log)
     -> http://en.wikipedia/wiki/Tony_Hawk

####Wikipedia categories
Get the wikipedia categories for this topic's article

     freebase.wikipedia_categories("tony hawk", {}, console.log)

####Wikipedia topic-links
Get the freebase topics linked-to in this topic's article

     freebase.wikipedia_links("tony hawk", {}, console.log)

####Wikipedia external-links
Get the webpages linked-to from this topic's article

     freebase.wikipedia_external_links("tony hawk", {}, console.log)


###Geographical
####Geolocation
  Get the lat/lng for a topic

    freebase.geolocation("calgary", {}, console.log)
    -> { latitude: 51.0544444444, longitude: -114.066944444 }

####Nearby
  List topics near this geolocation

    freebase.nearby("cn tower", {type:"/food/restaurant"}, console.log)

####Inside
  List topics inside of this location
    freebase.inside("montreal")

####Place-data
From a geo-coordinate, find out its City, Province, Country, and timezone

    freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {}, console.log)

##Method-list
 * mqlread
    -interface to freebase's mql api
 * lookup
     -freebase search with filters to ensure only a confident, unambiguous result
 * get_id
     -like freebase.lookup but satisfied with an id
 * topic
     -topic api
 * search
     -regular search api
 * paginate
     -get all of the results to your query
 * grammar
     -get the proper pronoun to use for a topic eg. he/she/they/it
 * same_as_links
     -turns a url into a freebase topic and list its same:as links
 * translate
     -return specific language title for a topic
 * image
     -get a url for image href of on this topic
 * description
     -get a text blurb from freebase
 * notable
     -get a topic's notable type
 * sentence
     -get the first sentence of a topic description
 * list
     -get a list of topics in a type
 * place_data
     -from a geo-coordinate, get the town, province, country, and timezone for it
 * incoming
     -get any incoming data to this topic, ignoring cvt types
 * outgoing
     -return all outgoing links for a topic, traversing cvt types
 * graph
     -return all outgoing and incoming links for a topic
 * related
     -get similar topics to a topic
 * is_a
     -get a list of identifiers for a topic
 * question
     -give a topic and a property, and get a list of results
 * dig
     -transitive query on a specific property, maximum 3-ply
 * gallery
     -list of topics with images
 * wordnet
     -query wordnet via freebase
 * transitive
     -do a transitive-query, like all rivers in canada, using freebase metaschema
 * geolocation
     -lat/long for a topic
 * nearby
     -list of topics nearby a location
 * inside
     -list of topics inside a location
 * wikipedia_page
     -get a url for wikipedia based on this topic
 * wikipedia_categories
     -get the wikipedia categories for a topic
 * wikipedia_links
     -outgoing links from this wikipedia page, converted to freebase ids
 * wikipedia_external_links
     -outgoing links from this wikipedia page, converted to freebase ids
 * schema_introspection
     -common lookups for types and properties
 * property_introspection
     -common lookups for freebase property data
 * property_lookup
     -lookup soft property matches, like 'birthday' vs 'date of birth'
 * mql_encode
     -quote a unicode string to turn it into a valid mql /type/key/value
 * add_widget
     -add a generic html view of a topic

## poo
Creative Commons, MIT
