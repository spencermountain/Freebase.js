#Freebase
[Freebase](http://freebase.com/) is a large human-curated database

[Nodejs](http://nodejs.org/) is the most efficient software platform in the world.

this is a library to make the two sing along 


## Installation

    $ npm install freebase

then make a file with:

   `var freebase=require('freebase');`  
   `freebase.get_description('tom cruise', console.log)`

## Showing off

* `freebase.get_description("toronto",  console.log);`
   
     *Toronto ( /tˈrɑnoʊ/ or /-ɒn-/) is the provincial capital of Ontario and the largest city.....*


* `freebase.get_image("london",  console.log, [], {width:200} );`
    
     *http://www.freebase.com/api/trans/image_thumb/m/02dy0pn?errorid=/m/0djw4wd&maxwidth=200*

* `freebase.get_weblinks("david bowie",  console.log);`

      *[{ url: 'http://en.wikipedia.org/wiki/David_Bowie' },  
      { url: 'http://www.velvetgoldmine.it/' },  
      { url: 'http://musicmoz.org/Bands_and_Artists/B/Bowie,_David/' },  
      { url: 'http://www.bowiewonderworld.com/' },  
      { url: 'http://www.davidbowie.com/' },  
      { url: 'http://gighit.com/artists/david-bowie/' },   
      ...*

* `freebase.get_geolocation("cheddar",  console.log);`

    *[ { '/location/geocode/latitude': 51.2785,
        '/location/geocode/longitude': -2.7777 } ]*
            

* `freebase.get_wikipedia("tom hanks",  console.log);`

    *http://en.wikipedia.org/wiki/index.html?curid=43568*
    

* `freebase.search("meatloaf",  console.log);`
    *[ { id: '/en/meatloaf',
    name: 'Meatloaf',
    search: { query: 'meatloaf', score: 83.35985 } },
  { id: '/m/0k_sqd',
    name: 'Stoney &amp; Meatloaf',
    search: { query: 'meatloaf', score: 77.45284 } },
    ...*
 
## Very masculine parts

* `freebase.query_freebase([{'name': null, 'type': '/astronomy/planet'}], console.log);`

      *queries freebase using an [MQL Query](http://wiki.freebase.com/wiki/Mql)*
      
       *[ { name: 'Earth', type: '/astronomy/planet' },  
           { name: 'Venus', type: '/astronomy/planet' },  
           { name: 'Mars', type: '/astronomy/planet' },  
           { name: 'Mercury', type: '/astronomy/planet' },  
           { name: 'Jupiter', type: '/astronomy/planet' },  
        ...*

* `freebase.paginate([{"type":"/event/disaster","id":null}], console.log);`
    
    *accepts an MQL query and handles the cursor for large, repetitive reads*


## Additional documentation

all methods disambiguate between a search query and a freebase id

* `freebase.get_description("/authority/imdb/title/tt0099892",  console.log);`

    *Joe Versus the Volcano is an existentialist 1990 comedy film starring Tom Hanks and Meg Ryan, who has three roles...*

all methods may be filtered using an mql query:

* `freebase.get_description("london",  console.log, [{"type":"/film/film"}]);`

     * London is a 2006 romantic drama film centering on a Manhattan party. The movie is directed and written by...*

## Methods

* **search**( [ id or string ] , [callback] , [ MQLfilter ]  ) 
* **paginate**( [ [MQL Query](http://wiki.freebase.com/wiki/Mql)] , [callback] , [ [envelope](http://wiki.freebase.com/wiki/MQL_Manual/mqlread#Envelope_Parameters) (optional) ]  ) 
* **query_freebase**( [ [MQL Query](http://wiki.freebase.com/wiki/Mql)] , [callback] , [ [envelope](http://wiki.freebase.com/wiki/MQL_Manual/mqlread#Envelope_Parameters) (optional) ]  ) 
* **get_description**( [ id or string ] , [callback] , [ MQLfilter ]  ) 
* **get_wikipedia**( [ id or string ] , [callback] , [ MQLfilter ]  ) 
* **get_geolocation**( [ id or string ] , [callback] , [ MQLfilter ]  ) 
* **get_weblinks**( [ id or string ] , [callback] , [ MQLfilter ]  ) 
* **get_image**( [ id or string ] , [callback] , [ MQLfilter ] , [options] ) 
*    *options:
*    * width - maximum image width
*    * height - maximum image height
*    * errorid - a freebase topic to use as fallback image
  
## poo  
Creative Commons, MIT  
