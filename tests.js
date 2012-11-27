var freebase=require('./freebase')

//failing
 //freebase.lookup("http://toronto.ca", {}, function(r){console.log(r)})
// freebase.same_as_links("http://www.geonames.org/6167865/", function(r){console.log(r.links.length>3)})
// freebase.image("toronto",{},function(r){console.log(r)})
// freebase.lookup("australia",{type:"/film/film"}, function(r){console.log(r=="/m/026qnh6")})
// freebase.image("australia",{type:"/location/location"}, function(r){console.log(r=="//http://www.freebase.com/api/trans/image_thumb/wikipedia/images/commons_id/1346518")})
//freebase.graph("paul ryan", {}, console.log)

//passing
//console.log(metaschema_lookup('built with'))
//freebase.nearby("cn tower", {type:"/food/restaurant"}, console.log)
//freebase.inside('barrie')
//freebase.transitive("barrie", "part_of", {}, console.log)
//freebase.grammar("toronto maple leafs")
//freebase.grammar("wayne gretzky")
//freebase.grammar("ron weasley")
//freebase.wordnet("wood")
// freebase.wordnet(["bat","wood"])
//freebase.geolocation("toronto")

//freebase.gallery("hurricanes",{},function(r){console.log(r.length>20)})

//freebase.lookup(["toronto","suddenly susan"],{},function(r){console.log(r.length==2)})
//freebase.translate(["toronto","suddenly susan"],{},function(r){console.log(r[0]=='Toronto')})
//freebase.sentence(["toronto","suddenly susan"],{},function(r){console.log(r.length==2)})


//freebase.sentence([{name:"toronto"},{id:"/en/radiohead",name:"suddenly susan"}],{},function(r){console.log(r.length==2)})

//var query=[{id:"/en/toronto", name:null},{id:"/en/radsdfiohead", name:null},{id:"/en/thom_yorke", name:null}]
//freebase.mqlread(query, {}, function(r){console.log(r.length==3)})

//freebase.lookup("thom yorke", {}, function(r){console.log(r.mid=="/m/01p0w_")})
//freebase.lookup("tom green", {}, function(r){console.log(r.mid=="/m/017yxq")})

// freebase.same_as_links("toronto", {}, function(r){console.log(r.links.length>3)})
// freebase.same_as_links("/m/0h7h6", {}, function(r){console.log(r.links.length>3)})



// query={ "type": "/music/album", "id": "/en/keep_it_turned_on", "artist" : null}
// freebase.mqlread(query,{}, function(r){console.log(r.result.artist=='Rick Astley')})

//  freebase.outgoing("ubuntu",{},function(r){console.log(r.length>15)} )

 // query=[{"type":"/base/disaster2/tornado","name":null}]
 // freebase.paginate(query, {max:20}, function(r){console.log(r.length>20)} )


// freebase.list("earthquakes", {}, function(r){console.log(r.length>20)})

// freebase.description("mike myers", {}, function(r){console.log(r.match(/myers/i)!=null)})
// //freebase.description("http://myspace.com/u2", {}, function(r){console.log(r.match(/u2/i)!=null)})

// freebase.sentence("thom yorke", {}, function(r){console.log(r.match(/radiohead/i)!=null)})

// freebase.translate("toronto",{lang:"zh"},function(r){console.log(r.match(/多伦多/i)!=null)})
// freebase.translate("radiohead",{lang:"/lang/ko"},function(r){console.log(r.match(/라디오헤드/i)!=null)})

// freebase.incoming("germany",{},function(r){console.log(r.length>20)})

// freebase.search("franklin",{},function(r){console.log(r.length>2)})
// freebase.notable("canada",{},function(r){console.log(r.id=='/location/country')})
// freebase.wikipedia_page("tony hawk", {}, function(r){r=="http://en.wikipedia.org/wiki/Tony_Hawk"})

//console.log(freebase.mql_encode("Aarno Yrjö-Koskinen")=="Aarno_Yrj$00F6-Koskinen")

//freebase.sentence("meatloaf", {type:"/food/food"}, console.log)