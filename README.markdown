[Freebase](http://freebase.com/) is a masculine but complicated human-curated database.

[Nodejs](http://nodejs.org/) is a straight-talkin language that takes no guff

## Giddyup
```javascript
  npm install freebase
```

then:
```javascript
  var freebase= require('freebase');
  freebase.description('tom cruise', {})
  //"Tom Cruise, is an American film actor.."
```

## Showin' off
it's built to be as flexible as possible. all methods return the same things:
```javascript
  freebase.image("/en/thom_yorke", {})
  freebase.image("thom yorke", {})
  freebase.image("http://www.myspace.com/thomyorkemusic", {})
  freebase.image({"name":"thom yorke", "id":"/en/thom_yorke"}, {})
  freebase.image(["/en/radiohead","thom yorke"], {})
```
it's a good idea to include your [api_key](https://code.google.com/apis/console/) in each method:
```javascript
  freebase.sentence("meatloaf", {type:"/food/food", key:"MY_API_KEY"})
```
the paramaters are lazy, if you're lazy.

[![Video Demo](http://i.vimeocdn.com/video/81314153_640.jpg)](https://vimeo.com/13992710)


## In the friggin browser
[Demo](https://rawgit.com/spencermountain/Freebase.js/master/client_side/demo.html)  - freebase.min.js == 63kb
```javascript
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="https://rawgit.com/spencermountain/Freebase.js/master/client_side/freebase.min.js"></script>
  <script>
  $(document).ready(function(){

    $.freebase.description("tony hawk", function (r){
      $('body').append(r)
    })

  })
  </script>
```

## In the shell:
the library can be run in the console, with the optional second parameter as the method:
````bash
 freebase george clooney
   # {  "mid": "/m/014zcr", "id": "/en/george_clooney" ... }
 freebase sentence george clooney
   #"George Timothy Clooney is an American actor, film director, producer, and screenwriter."
````

## Writing to Freebase:
####Oauth is hard, but you can do it.
Instructions:
* Register a project at [https://code.google.com/apis/console](google api console) and enable the Freebase API
* In the 'Credentials' section, create a new Client ID -> 'installed application', 'other'
* Add your data to './auth/credentials.js'
* Run ```node ./auth/authenticate.js```
* You will be given a url to visit in your browser, which gives you an OAuth code.
* Paste the oAuth code, and you'll be given the end tokens.

thats all you need to include in your request:
```javascript
  freebase.add_type("/en/the_who", {type:"/music/artist", token: your_access_token})

  freebase.add_alias("/en/melanie_chisholm", {alias:"Sporty Spice", token: your_access_token})
```
You'll need to get a new token after about 3 hours. (Don't commit your credentials.)

If you're doing inference, or writing a bot, check out [freebase_garden](https://github.com/spencermountain/freebase_garden)

##Documentation
Each method takes the following form:

  freebase.method( "query",   {options},  callback()  )
it supports this form:

  freebase.method( "query",  callback()  )
and also this form, where the callback defaults to console.log()

  freebase.method( "query" )

here are some options that you can ship in to any method:
````javascript
{ nodeCallback: true, // use the 'error-first' callback form -> callback(error, result){}
  key: "MY_API_KEY", // good idea to include your freebase key, to avoid errors
  limit: 2, // truncate results
  debug: true, // print out the urls being fetched
}
````

### Basic methods

####MQLread API
[MQL documentation](https://developers.google.com/freebase/v1/mql-overview)

Books about planets:
```javascript
  var query=[{
    "type":  "/astronomy/planet",
    "name":  null,
    "/book/book_subject/works": []
   }]​
  freebase.mqlread(query, {}, function(r){console.log(r)})
```
the options object will ship [any paramaters](https://developers.google.com/freebase/v1/mql-overview) to the freebase api.

####Pagination
Every Tornado, ever
```javascript
  query=[{
    "type":"/base/disaster2/tornado",
    "name":null
   }]
  freebase.paginate(query, {max:400})
```

####Search API
[search api documentation](https://developers.google.com/freebase/v1/search-overview)

Hockey players named 'doug'
```javascript
  freebase.search("doug",{type: "/ice_hockey/hockey_player"})
```
the options object will ship [any paramaters](https://developers.google.com/freebase/v1/search) to the freebase search api.

####Description API
First paragraph of a topic's wikipedia article:
```javascript
   freebase.description("mike myers", {})
   freebase.description("http://myspace.com/u2", {})
```
####Topic API
[topic api documentation](https://developers.google.com/freebase/v1/topic-overview)

A nicely treated output of all of a topic's data:
```javascript
   freebase.topic("mike myers", {})
   freebase.topic("http://myspace.com/u2", {})
```
####RDF API
[RDF api documentation](https://developers.google.com/freebase/v1/rdf-overview)

A string of tuples for a topic:
```javascript
   freebase.rdf("blonde redhead", {})
```
####Notable-types
The most accurate, or notable type for a topic:
```javascript
   freebase.notable("canada", {})
     -> {id:"/location/country", name:"Country"}
```


## Sugar
####Grammar
Which pronoun, tense, article and gender to use for this topic
```javascript
  freebase.grammar("washing machine", {})
       -> { plural: true,
            gender: null,
            article: 'a',
            pronoun: 'they',
            copula: 'are' }
  freebase.grammar(["prince harry", "miranda july"], {})
       ->  [ { plural: false,
              gender: 'male',
              article: 'a',
              pronoun: 'he',
              copula: 'is' },
            { plural: false,
              gender: 'female',
              article: 'a',
              pronoun: 'she',
              copula: 'is' } ]
```
####Related Topics
Similar topics to this topic
```javascript
  freebase.related("toronto", {}, function(r){
    console.log(r.map(function(v){return v.name}))
  })
   /* Toronto FC
      Toronto Maple Leafs
      Toronto Argonauts
      North York
      Toronto Marlies*/
```
####Wordnet
Query all of wordnet, from freebase:
```javascript
  freebase.wordnet("charming")
  freebase.wordnet("submarine",{},console.log)
```
####SameAs links
sameAs weblinks for a topic, or url
```javascript
  freebase.same_as_links("toronto", {})
  freebase.same_as_links("http://toronto.ca", {})
```
####Safe-Lookup
A common-sense search that only matches when confident:
```javascript
  freebase.lookup("tom green", {})
  freebase.lookup(["sandra bullock","suddenly susan"], {})
```
####First Sentence
The first sentence from a wikipedia article:
```javascript
  freebase.sentence("tokyo", {})
```
####Graph-analysis
Graph-type queries on topics, dancing over tough values and mediators:
```javascript
  freebase.graph("ubuntu", {} )
  freebase.outgoing("ubuntu", {} )
  freebase.incoming("ubuntu", {} )
```
####Schema-agnostic queries
A list of topics in a 'is-a' type of collection:
```javascript
  freebase.list("earthquakes", {})
```
####Translation
Translated names for topics:
```javascript
  freebase.translate("radiohead", {lang:"/lang/ko"})
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
 freebase.property_introspection("politician", {})
     /* { domain: { name: 'Government', id: '/government' },
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

####Wikipedia-Category pages
Get the wikipedia url for a topic
```javascript
freebase.from_category("Category:Bridges_in_Saskatchewan", {
  depth: 2 //levels to recurse down
})
/*[{id: '/wikipedia/en/Long_Creek_Bridge',
    name: 'Long Creek Bridge'},
   {id: '/wikipedia/en/Diefenbaker_Bridge',
     name: 'Diefenbaker Bridge'}
   ...
```

####Wikipedia-page
Get the wikipedia url for a topic
```javascript
 freebase.wikipedia_page("tony hawk", {})
     // http://en.wikipedia/wiki/Tony_Hawk
```
####Wikipedia categories
Get the wikipedia categories on this topic's article
```javascript
 freebase.wikipedia_categories("tony hawk", {})
```
####Wikipedia topic-links
Get the links on it's wikipedia page as freebase ids
```javascript
 freebase.wikipedia_links("tony hawk", {})
       /*[{ id: '/wikipedia/en/Baker_Skateboards',  name: 'Baker Skateboards' },
          { id: '/wikipedia/en/Bam_Margera', name: 'Bam Margera' },
          { id: '/wikipedia/en/Barting_Over', name: 'Barting Over' },
          { id: '/wikipedia/en/Blink-182', name: 'Blink-182' },
          ...*/
```
####Wikipedia external-links
Get the external urls on it's wikipedia page
```javascript
 freebase.wikipedia_external_links("tony hawk", {})
       /*[{ url: 'http://skate.quiksilver.com/riders-detail/',
            domain: 'skate.quiksilver.com' },
          { url: 'http://skateboarding.transworld.net/1000095781/news/tony-hawk-on-theeve-trucks/',
            domain: 'skateboarding.transworld.net' },
            ...*/
```
##Geographical
####Geolocation
  Get the lat/lng for a topic
```javascript
freebase.geolocation("calgary", {})
     //{ latitude: 51.0544444444, longitude: -114.066944444 }
```
####Nearby
  List topics near this geolocation
```javascript
freebase.nearby("cn tower", {type:"/food/restaurant"})
       /*[{id: '/en/sneaky_dees',
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
  freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {})
```

##Writing to freebase
###MQLWrite
```javascript
  query=[{
    "id": "/en/radiohead",
    "type": [{
      "id": "/music/artist",
      "connect": "insert"
    }]
  }]
  freebase.mqlwrite(query, {access_token: your_access_token})
```

###Add type sugar
```javascript
  freebase.add_type("/en/the_who", {type:"/music/artist", access_token: your_access_token})
```
###Add alias sugar
```javascript
  freebase.add_alias("/en/melanie_chisholm", {alias:"Sporty Spice", access_token: your_access_token})
```

##Method-list
* **mqlread**
     -interface to freebase's mql api
* **search**
     -regular search api
* **lookup**
     -freebase search with filters to ensure only a confident, unambiguous result
* **lookup_id**
     -generic info for an id
* **url_lookup**
     -freebase search tuned for looking up a url
* **get_id**
     -like freebase.lookup but satisfied with an id
* **topic**
     -topic api
* **paginate**
     -get all of the results to your query
* **wikipedia_page**
     -get a url for wikipedia based on this topic
* **dbpedia_page**
     -get a url for dbpedia based on this topic
* **mql_encode**
     -quote a unicode string to turn it into a valid mql /type/key/value
* **rdf**
     -RDF api
* **description**
     -get a text blurb from freebase
* **image**
     -get a url for image href of on this topic
* **notable**
     -get a topic's notable type
* **drilldown**
     -get insight into the breakdown of the topics in this type, by type and quality
* **property_introspection**
     -common lookups for freebase property data
* **schema**
     -common lookups for types and properties
* **grammar**
     -get the proper pronoun to use for a topic eg. he/she/they/it
* **same_as_links**
     -turns a url into a freebase topic and list its same:as links
* **translate**
     -return specific language title for a topic
* **sentence**
     -get the first sentence of a topic description
* **list**
     -get a list of topics in a type
* **place_data**
     -from a geo-coordinate and area radius (in feet), get the town, province, country, and timezone for it
* **is_a**
     -get a list of identifiers for a topic
* **property_lookup**
     -lookup soft property matches, like 'birthday' vs 'date of birth'
* **question**
     -give a topic and a property, and get a list of results
* **wordnet**
     -query wordnet via freebase
* **dig**
     -transitive query on a specific property, maximum 3-ply
* **geolocation**
     -lat/long for a topic
* **nearby**
     -list of topics nearby a location
* **inside**
     -list of topics inside a location
* **incoming**
     -get any incoming data to this topic, ignoring cvt types
* **outgoing**
     -return all outgoing links for a topic, traversing cvt types
* **graph**
     -return all outgoing and incoming links for a topic
* **related**
     -get similar topics to a topic
* **wikipedia_categories**
     -get the wikipedia categories for a topic
* **wikipedia_links**
     -outgoing links from this wikipedia page, converted to freebase ids
* **wikipedia_external_links**
     -outgoing links from this wikipedia page, converted to freebase ids
* **from_category**
     -get the freebase topics in a wikipedia category
* **wikipedia_subcategories**
     -find the subcategories of this wikipedia category
* **wikipedia_to_freebase**
     -turn a wikipedia title or url into a freebase topic
* **mqlwrite**
     -write to freebase
* **add_type**
     -add a type to a freebase topic
* **add_alias**
     -add a alias to a freebase topic

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
* freebase.list("hurricanes",{})
* freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {})
* freebase.incoming("toronto")
* freebase.outgoing("vancouver")
* freebase.graph("shawshank redemption")
* freebase.related("toronto", {})
* freebase.is_a("george clooney")
* freebase.property_lookup("albums")
* freebase.question("keanu reeves", {property:"children"})
* freebase.dig('/en/toronto', {property:'/location/location/contains'})
* freebase.gallery('hurricanes')
* freebase.wordnet("charming")
* freebase.geolocation("cn tower")
* freebase.nearby("cn tower", {type:"/location/location"})
* freebase.inside("montreal")
* freebase.wikipedia_page('toronto')
* freebase.dbpedia_page('toronto')
* freebase.wikipedia_categories("Tunisia")
* freebase.wikipedia_links("Toronto", {})
* freebase.wikipedia_external_links("Toronto", {})
* freebase.property_introspection("/government/politician/party")
* freebase.schema("politician")
* freebase.drilldown("/chemistry/chemical_compound",{max:400})
* freebase.from_category("Category:Bridges_in_Canada", {depth:2})
* freebase.wikipedia_subcategories("Category:Enzymes",{depth:2}})
* freebase.rdf("toronto")
* freebase.documentation()


## poo
Creative Commons, MIT
