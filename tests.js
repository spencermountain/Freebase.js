var freebase=require('./freebase')

//failing
// freebase.lookup("http://toronto.ca", {}, function(r){console.log(r)})
// freebase.same_as_links("http://www.geonames.org/6167865/", function(r){console.log(r.links.length>3)})

//passing
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
// freebase.wikipedia_link("tony hawk", {}, function(r){r=="http://en.wikipedia.org/wiki/Tony_Hawk"})