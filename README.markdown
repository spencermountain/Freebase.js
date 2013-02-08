#Freebase
[Freebase](http://freebase.com/) is a large human-curated database

[Nodejs](http://nodejs.org/) is the most efficient software platform in the world.

this is a library to make the two sing along


## Installation

    npm install freebase

then make a .js file with:

    var freebase=require('freebase');
    freebase.description('tom cruise', [options], callback)

## Showing off

it's built to be as flexible as possible:

    freebase.sentence("/en/thom_yorke")
    freebase.sentence("thom yorke")
    freebase.sentence("http://www.myspace.com/thomyorkemusic")
    freebase.sentence({"name":"thom yorke", "id":"/en/thom_yorke"})
these all return the same thing.

you can also do this, which is pretty clever i'd say:

    freebase.sentence("meatloaf", {type:"/food/food"}, console.log)

you can also do this, which chunks asynchronous requests into groups of 10 for speed.

    freebase.sentence(["johny greenwood", "thom yorke", "marvin gaye"], {}, console.log)

you can also do this, which is handy when you're hacking-away in the console:

    freebase.sentences("thom yorke")
    freebase.get_sentences("thom yorke")


## Very masculine parts

### Freebase methods

Books about planets:

    var query=[{
                "type":  "/astronomy/planet",
                "name":  null,
                "/book/book_subject/works": []
               }]​
    freebase.mqlread(query, {}, function(r){console.log(r)})

Every Tornado, ever

      query=[{
              "type":"/base/disaster2/tornado",
              "name":null
             }]
      freebase.paginate(query, {max:400}, console.log)

Hockey players named 'doug'

    freebase.search("doug",{type: "/ice_hockey/hockey_player"}, console.log)


### Sugar

Which pronoun to use for this topic

    freebase.pronoun("banana", {}, console.log)
       -> "they"
    freebase.pronoun(["prince harry", "miranda july"], {}, console.log)
       -> ["he", "she"]
    freebase.pronoun("washing machine", {}, console.log)
       -> "they"
    freebase.pronoun("cheddar", {type:"/food/food"}, console.log)
       -> "it"

Similar topics to this topic

    freebase.related("toronto", {}, function(r){
        r.forEach(function(v){return console.log(v.name)})
      })
     ->   Toronto FC
          Toronto Maple Leafs
          Toronto Argonauts
          North York
          Toronto Marlies

A common-sense search that only matches when confident:

    freebase.lookup("tom green", {}, console.log)
    freebase.lookup(["toronto","suddenly susan"], {}, console.log)

sameAs weblinks for a topic, or url

    freebase.same_as_links("toronto", {}, console.log)
    freebase.same_as_links("http://toronto.ca", {}, console.log)

The first sentence from a wikipedia article:

    freebase.sentence("tokyo", {}, console.log)

Graph-type queries on topics, dancing over tough values and mediators:

      freebase.graph("ubuntu", {}, console.log )
      freebase.outgoing("ubuntu", {}, console.log )
      freebase.incoming("ubuntu", {}, console.log )

A list of topics in a collection:

     freebase.list("earthquakes", {}, console.log)

The first paragraph of something's wikipedia article:

     freebase.description("mike myers", {}, console.log)
     freebase.description("http://myspace.com/u2", {}, console.log)

Translated names for topics:

     freebase.translate("radiohead", {lang:"/lang/ko"}, console.log)// 라디오헤드

The most accurate, or notable type for a topic:

     freebase.notable("canada", {}, console.log) // {id:"/location/country", name:"Country"}

Get the wikipedia link for a topic

     freebase.wikipedia_link("tony hawk", {}, console.log) //http://en.wikipedia/wiki/Tony_Hawk

Encode a string for inclusion in a freebase id/key/whatever

    freebase.mql_encode("Aarno Yrjö-Koskinen") //"Aarno_Yrj$00F6-Koskinen"

##Methods
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
