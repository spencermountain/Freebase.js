#Freebase
[Freebase](http://freebase.com/) is a large human-curated database

[Nodejs](http://nodejs.org/) is the most efficient software platform in the world.

this is a library to make the two sing along 


## Installation

$ npm install freebase

## Examples

*freebase.get_description("toronto",  console.log);
//Toronto ( /tˈrɑnoʊ/ or /-ɒn-/) is the provincial capital of Ontario and the largest city.....

*freebase.get_image("mike myers",  console.log, [{"key":{"namespace":"/wikipedia/en_title", "value":null, "optional":"required"}}], {width:200} );
//http://www.freebase.com/api/trans/image_thumb/m/02dy0pn?errorid=/m/0djw4wd&maxwidth=200

*freebase.get_weblinks("david bowie",  console.log);
//{ url: 'http://en.wikipedia.org/wiki/David_Bowie' },
  { url: 'http://www.velvetgoldmine.it/' },
  { url: 'http://musicmoz.org/Bands_and_Artists/B/Bowie,_David/' },
  { url: 'http://www.bowiewonderworld.com/' },
  { url: 'http://www.davidbowie.com/' },
  { url: 'http://gighit.com/artists/david-bowie/' }, 
  ...

*freebase.get_wikipedia("tom hanks",  console.log);
//http://en.wikipedia.org/wiki/index.html?curid=43568

*freebase.paginate([{"type":"/event/disaster","id":null}], null, console.log);
// automatically do [mql pagination](http://wiki.freebase.com/wiki/Cursor) to complete the query. gets a list of all disasters. 

*freebase.query_freebase([{'name': null, 'type': '/astronomy/planet'}], console.log);
//queries freebase using an [MQL Query](http://wiki.freebase.com/wiki/Mql)
{ code: '/api/status/ok',
  result: 
   [ { name: 'Earth', type: '/astronomy/planet' },
     { name: 'Venus', type: '/astronomy/planet' },
     { name: 'Mars', type: '/astronomy/planet' },
     { name: 'Mercury', type: '/astronomy/planet' },
     { name: 'Jupiter', type: '/astronomy/planet' },
     { name: 'Neptune', type: '/astronomy/planet' },
     { name: 'Saturn', type: '/astronomy/planet' },
     { name: 'Uranus', type: '/astronomy/planet' } ],
  ...

*freebase.paginate([{"type":"/event/disaster","id":null}], console.log);
 //accepts an MQL query and handles the cursor for large, repetitive reads 


*freebase.get_description("/authority/imdb/title/tt0099892",  console.log);
//Joe Versus the Volcano is an existentialist 1990 comedy film starring Tom Hanks and Meg Ryan, who has three roles...

## Methods

* **paginate**( [MQL Query](http://wiki.freebase.com/wiki/Mql), callback, [envelope (optional))]  ) 
  
## poo  
Creative Commons, MIT  
