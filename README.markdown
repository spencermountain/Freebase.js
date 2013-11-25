[Freebase](http://freebase.com/) is a very masculine but complicated human-curated database.

[Nodejs](http://nodejs.org/) is a straight-talkin language that takes no guff

## Giddyup
```javascript
    npm install freebase
```

then:
```javascript
    var freebase=require('freebase');
    freebase.description('tom cruise', [options], [callback])
    //"Tom Cruise, is an American film actor.."
```
## Showin' off

it's built to be as flexible as possible. all methods can handle the same things:
```javascript
    freebase.sentence("/en/thom_yorke")//freebase link
    freebase.weblinks("thom yorke")//search term
    freebase.wikipedia_categories("http://www.myspace.com/thomyorkemusic")//weblink
    freebase.search({"name":"thom yorke", "id":"/en/thom_yorke"})//freebase object
    freebase.notable(["/en/radiohead","thom yorke"])//array of stuff
```
this properly handles many asynchronous requests, rate-limiting them to 10-at-a-time.
```javascript
    freebase.images(["johny greenwood", "marvin gaye", "Yusuf Islam"], {max:10}, console.log)
```
this is pretty clever i'd say:
```javascript
    freebase.sentence("meatloaf", {type:"/food/food"}, console.log)
```
and when you're hacking in the shell, you can use it like this:
```shell
$ freebase sentence "batman"
```

## In the friggin broswer
```javascript
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/async/0.2.7/async.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js"></script>
  <script src="https://dl.dropboxusercontent.com/s/0fvdus9v0hhnsfd/freebase.min.js"></script>
  <script>
  $(document).ready(function(){
    function show(r){
      $('body').append(r)
    }
    $.freebase.sentence("tony hawk",{},show)
  })
  </script>
```

## Writing to Freebase:
####Oauth is hard, but you can do it.
register a 'web app' at [https://code.google.com/apis/console](google api console) to get your ''Client ID'' and ''Client secret''.
run this 'wizard' to get your ''access token''.
```shell
  node mqlwrite_setup.js
```

thats all you need to include in your request:
```javascript
    freebase.add_type("/en/radiohead", {type:"/music/artist", token: your_access_token})

    freebase.add_alias("/en/melanie_chisholm", {alias:"Sporty Spice", token: your_access_token})
```

''mqlwrite_setup.js'' will take you through the steps of authenticating and making a write to freebase. You'll need to get a new token after about 3 hours. Just run it again.

### Basic methods

####MQLread API
Books about planets:
```javascript
    var query=[{
                "type":  "/astronomy/planet",
                "name":  null,
                "/book/book_subject/works": []
               }]​
    freebase.mqlread(query, {}, function(r){console.log(r)})
```

####Pagination
Every Tornado, ever
```javascript
      query=[{
              "type":"/base/disaster2/tornado",
              "name":null
             }]
      freebase.paginate(query, {max:400}, console.log)
```
####Search API
Hockey players named 'doug'
```javascript
    freebase.search("doug",{type: "/ice_hockey/hockey_player"}, console.log)
```
####Description API
First paragraph of the wikipedia article:
```javascript
     freebase.description("mike myers", {}, console.log)
     freebase.description("http://myspace.com/u2", {}, console.log)
```
####Topic API
A nicely treated output of all of a topic's data:
```javascript
     freebase.topic("mike myers", {}, console.log)
     freebase.topic("http://myspace.com/u2", {}, console.log)
```
####Notable-types
The most accurate, or notable type for a topic:
```javascript
     freebase.notable("canada", {}, console.log)
     -> {id:"/location/country", name:"Country"}
```
## Sugar
####Grammar
Which pronoun, tense, article and gender to use for this topic
```javascript
    freebase.grammar("washing machine", {}, console.log)
       -> { plural: true,
            gender: null,
            article: 'a',
            pronoun: 'they',
            copula: 'are' }
    freebase.grammar(["prince harry", "miranda july"], {}, console.log)
       /* [ { plural: false,
              gender: 'male',
              article: 'a',
              pronoun: 'he',
              copula: 'is' },
            { plural: false,
              gender: 'female',
              article: 'a',
              pronoun: 'she',
              copula: 'is' } ]
            */
```
####Related Topics
Similar topics to this topic
```javascript
    freebase.related("toronto", {}, function(r){
        console.log(r.map(function(v){return v.name}))
      })
      -> /* Toronto FC
          Toronto Maple Leafs
          Toronto Argonauts
          North York
          Toronto Marlies*/
```
####Safe-Lookup
A common-sense search that only matches when confident:
```javascript
    freebase.lookup("tom green", {}, console.log)
    freebase.lookup(["toronto","suddenly susan"], {}, console.log)
```
####SameAs links
sameAs weblinks for a topic, or url
```javascript
    freebase.same_as_links("toronto", {}, console.log)
    freebase.same_as_links("http://toronto.ca", {}, console.log)
```
####First Sentence
The first sentence from a wikipedia article:
```javascript
    freebase.sentence("tokyo", {}, console.log)
```
####Graph-analysis
Graph-type queries on topics, dancing over tough values and mediators:
```javascript
      freebase.graph("ubuntu", {}, console.log )
      freebase.outgoing("ubuntu", {}, console.log )
      freebase.incoming("ubuntu", {}, console.log )
```
####Schema-agnostic queries
A list of topics in a 'is-a' type of collection:
```javascript
     freebase.list("earthquakes", {}, console.log)
```
####Translation
Translated names for topics:
```javascript
     freebase.translate("radiohead", {lang:"/lang/ko"}, console.log)
     -> 라디오헤드
```
####Encoding
Encode a string for inclusion in a freebase id/key/whatever
```javascript
    freebase.mql_encode("Aarno Yrjö-Koskinen")
    ->"Aarno_Yrj$00F6-Koskinen"
```
####Schema introspection
Find-out relevant information for a type or property:
```javascript
     freebase.schema_introspection("politician", {}, console.log)
     ->/* { domain: { name: 'Government', id: '/government' },
          is_compound_value: false,
          is_commons: 'Published',
          equivalent_topic: { name: 'Politician', id: '/en/politician' },
          topic_count: 90971,
          property_count: 0,
          included_types: [ { name: 'Person', id: '/people/person' },
                  { name: 'Topic', id: '/common/topic' } ],
          ...*/
```
##Wikipedia

####Wikipedia-page
Get the wikipedia link for a topic
```javascript
     freebase.wikipedia_page("tony hawk", {}, console.log)
     ->// http://en.wikipedia/wiki/Tony_Hawk
```
####Wikipedia categories
Get the wikipedia categories for this topic's article
```javascript
     freebase.wikipedia_categories("tony hawk", {}, console.log)
```
####Wikipedia topic-links
Get the freebase topics linked-to in this topic's wikipedia article
```javascript
     freebase.wikipedia_links("tony hawk", {}, console.log)
      -> /*[{ id: '/wikipedia/en/Baker_Skateboards',  name: 'Baker Skateboards' },
          { id: '/wikipedia/en/Bam_Margera', name: 'Bam Margera' },
          { id: '/wikipedia/en/Barting_Over', name: 'Barting Over' },
          { id: '/wikipedia/en/Blink-182', name: 'Blink-182' },
          ...*/
```
####Wikipedia external-links
Get the webpages linked-to from this topic's article
```javascript
     freebase.wikipedia_external_links("tony hawk", {}, console.log)
      -> /*[{ url: 'http://skate.quiksilver.com/riders-detail/',
            domain: 'skate.quiksilver.com' },
          { url: 'http://skateboarding.transworld.net/1000095781/news/tony-hawk-on-theeve-trucks/',
            domain: 'skateboarding.transworld.net' },
            ...*/
```
##Geographical
####Geolocation
  Get the lat/lng for a topic
```javascript
    freebase.geolocation("calgary", {}, console.log)
    -> //{ latitude: 51.0544444444, longitude: -114.066944444 }
```
####Nearby
  List topics near this geolocation
```javascript
    freebase.nearby("cn tower", {type:"/food/restaurant"}, console.log)
      -> /*[{id: '/en/sneaky_dees',
           name: 'Sneaky Dee\'s',
          },
          {id: '/en/keg_mansion',
           name: 'Keg Mansion',
          }
          ...*/
```
####Inside
  List topics inside of this location
```javascript
    freebase.inside("montreal")
```
####Place-data
From a geo-coordinate, find out its City, Province, Country, and timezone
```javascript
    freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {}, console.log)
```
##Method-list
Freebase.com nodejs-library
https://github.com/spencermountain/Freebase-nodejs--

* **mqlread**
     -interface to freebase's mql api
* **lookup_id**
     -generic info for an id
* **search**
     -regular search api
* **url_lookup**
     -freebase search tuned for looking up a url
* **lookup**
     -freebase search with filters to ensure only a confident, unambiguous result
* **get_id**
     -like freebase.lookup but satisfied with an id
* **topic**
     -topic api
* **paginate**
     -get all of the results to your query
* **description**
     -get a text blurb from freebase
* **image**
     -get a url for image href of on this topic
* **grammar**
     -get the proper pronoun to use for a topic eg. he/she/they/it
* **same_as_links**
     -turns a url into a freebase topic and list its same:as links
* **translate**
     -return specific language title for a topic
* **notable**
     -get a topic's notable type
* **sentence**
     -get the first sentence of a topic description
* **list**
     -get a list of topics in a type
* **place_data**
     -from a geo-coordinate, get the town, province, country, and timezone for it
* **incoming**
     -get any incoming data to this topic, ignoring cvt types
* **outgoing**
     -return all outgoing links for a topic, traversing cvt types
* **graph**
     -return all outgoing and incoming links for a topic
* **related**
     -get similar topics to a topic
* **is_a**
     -get a list of identifiers for a topic
* **property_lookup**
     -lookup soft property matches, like 'birthday' vs 'date of birth'
* **question**
     -give a topic and a property, and get a list of results
* **dig**
     -transitive query on a specific property, maximum 3-ply
* **gallery**
     -list of topics with images
* **wordnet**
     -query wordnet via freebase
* **transitive**
     -do a transitive-query, like all rivers in canada, using freebase metaschema
* **geolocation**
     -lat/long for a topic
* **nearby**
     -list of topics nearby a location
* **inside**
     -list of topics inside a location
* **wikipedia_page**
     -get a url for wikipedia based on this topic
* **dbpedia_page**
     -get a url for dbpedia based on this topic
* **wikipedia_categories**
     -get the wikipedia categories for a topic
* **wikipedia_links**
     -outgoing links from this wikipedia page, converted to freebase ids
* **wikipedia_external_links**
     -outgoing links from this wikipedia page, converted to freebase ids
* **property_introspection**
     -common lookups for freebase property data
* **schema**
     -common lookups for types and properties
* **drilldown**
     -get insight into the breakdown of the topics in this type, by type and quality
* **mql_encode**
     -quote a unicode string to turn it into a valid mql /type/key/value
* **category_list**
     -get the freebase topics in a wikipedia category
* **wikipedia_subcategories**
     -find the subcategories of this wikipedia category
* **rdf**
     -RDF api
* **wikipedia_to_freebase**
     -turn a wikipedia title or url into a freebase topic
* **add_widget**
     -add a generic html view of a topic

##Examples
* freebase.mqlread([{id:"/en/radiohead",name:null}])
* freebase.lookup_id('/en/radiohead')
* freebase.search("bill murray")
* freebase.url_lookup("http://myspace.com/u2")
* freebase.lookup("pulp fiction")
* freebase.get_id("/en/radiohead")
* freebase.topic("toronto", {filter:"allproperties"})
* freebase.paginate([{"type":"/astronomy/moon","name":null, limit:2}],{max:13})
* freebase.description("tunisia")
* freebase.image('toronto',{type:"/location/citytown"})
* freebase.grammar("toronto maple leafs")
* freebase.same_as_links("toronto maple leafs")
* freebase.translate("toronto maple leafs", {lang:"/lang/ja"})
* freebase.notable("toronto maple leafs")
* freebase.sentence('john malkovich',{},console.log)
* freebase.list("hurricanes",{}, function(r){console.log(r)})
* freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {}, console.log)
* freebase.incoming("toronto")
* freebase.outgoing("vancouver")
* freebase.graph("shawshank redemption")
* freebase.related("toronto", {}, function(r){console.log(JSON.stringify(r, null, 2));})
* freebase.is_a("george clooney")
* freebase.property_lookup("albums")
* freebase.question("keanu reeves", {property:"children"})
* freebase.dig('/en/toronto', {property:'/location/location/contains'}, function(r){ console.log(r) })
* freebase.gallery('hurricanes')
* freebase.wordnet("charming")
* freebase.transitive("ontario", {property:"part_of"}, function(r){ console.log(r)})
* freebase.geolocation("cn tower")
* freebase.nearby("cn tower", {type:"/location/location"}, console.log)
* freebase.inside("montreal")
* freebase.wikipedia_page('toronto')
* freebase.dbpedia_page('toronto')
* freebase.wikipedia_categories("Tunisia")
* freebase.wikipedia_links("Toronto", {}, console.log)
* freebase.wikipedia_external_links("Toronto", {}, console.log)
* freebase.property_introspection("/government/politician/party")
* freebase.schema("politician")
* freebase.drilldown("/chemistry/chemical_compound",{max:400},console.log)
* freebase.category_list("Category:Redirects_from_plurals")
* freebase.wikipedia_subcategories("Category:Enzymes",{depth:2},function(r){console.log(JSON.stringify(r))})
* freebase.rdf("toronto")
* freebase.wikipedia_to_freebase("Tony Hawk")
* freebase.documentation()


## poo
Creative Commons, MIT
