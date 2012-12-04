var freebase=require('./freebase')
var fns=require('./lib/helpers')
var _=require('underscore');

//failing

// freebase.inside('toronto',{}, function(r){
// 	console.log(r.length>3)
// })
 // freebase.transitive("barrie", "part_of", {}, function(r){
 // 	console.log(r.length>3)
 // })

//passing
// freebase.lookup("http://toronto.ca", {}, function(r){console.log(r.id=="/en/toronto")})
// freebase.lookup(["/m/09jm8", "http://myspace.com/u2"], {}, function(r){
// 	console.log(r[1].name=="U2")
// })
// freebase.nearby("cn tower", {type:"/food/restaurant"}, function(r){
// 	console.log(r.length>4)
// })
// freebase.wordnet(["bat","wood"],{}, function(r){console.log(r.length==2)})
// freebase.wikipedia_external_links("/en/toronto", {}, function(r){console.log(r.length>=3)})
//freebase.wikipedia_links("Toronto", {}, function(r){console.log(r.length>=5)})

//freebase.graph("paul ryan", {}, function(r){console.log(r[0].object.name=="Paul Ryan"|| r[0].subject.name=="Paul Ryan")})

//  freebase.lookup("australia",{type:"/film/film"}, function(r){console.log(r.mid=="/m/026qnh6")})
//   freebase.same_as_links("http://www.geonames.org/6167865/", {}, function(r){console.log(r.links.length>3)})
//  freebase.image("australia",{type:"/location/location"}, function(r){console.log(r.match(/maxheight/)!=null)})

// freebase.grammar("toronto maple leafs",{},function(r){
// 	console.log(_.isEqual(r, { plural: true,
// 					  gender: null,
// 					  article: 'a',
// 					  pronoun: 'they',
// 					  copula: 'are' }))
// })

// freebase.grammar("ron weasley",{},function(r){
// 	console.log(_.isEqual(r, { plural: false,
// 								  gender: 'male',
// 								  article: 'a',
// 								  pronoun: 'he',
// 								  copula: 'is' }))
// })

// freebase.wordnet("wood",{}, function(r){
// 	console.log(r.length==4)
// })
// freebase.geolocation("toronto", {}, function(r){
// 	console.log(r.latitude!=null)
// })
// freebase.place_data({lat:43.64806,lng:-79.40417}, {}, function(r){
// 	console.log(r.city.name=="Toronto")
// })
//  freebase.place_data({lat:52.05375719395869,lng:5.9511566162109375}, {}, function(r){
// 	console.log(r.country.name=="Netherlands")
// })
// freebase.place_data({lat:47.9991410647952,lng:14.172706604003906}, {}, function(r){
// 	console.log(r.country.name=="Austria")
// })

// freebase.gallery("hurricanes",{},function(r){console.log(r.length>20)})

// freebase.lookup(["toronto","suddenly susan"],{},function(r){console.log(r.length==2)})
// freebase.translate(["toronto","suddenly susan"],{},function(r){console.log(r[0]=='Toronto')})
// freebase.sentence(["toronto","suddenly susan"],{},function(r){console.log(r.length==2)})


//freebase.sentence([{name:"toronto"},{id:"/en/radiohead",name:"suddenly susan"}],{},function(r){console.log(r.length==2)})

// var query=[{id:"/en/toronto", name:null},{id:"/en/radsdfiohead", name:null},{id:"/en/thom_yorke", name:null}, {id:"/en/tony_hawk", name:null} ]
// freebase.mqlread(query, {}, function(r){console.log(r.length==4)})

// freebase.lookup("thom yorke", {}, function(r){console.log(r.mid=="/m/01p0w_")})
// freebase.lookup("tom green", {}, function(r){console.log(r.mid=="/m/017yxq")})

// freebase.same_as_links("toronto", {}, function(r){console.log(r.links.length>3)})
// freebase.same_as_links("/m/0h7h6", {}, function(r){console.log(r.links.length>3)})



// query={ "type": "/music/album", "id": "/en/keep_it_turned_on", "artist" : null}
// freebase.mqlread(query,{}, function(r){console.log(r.result.artist=='Rick Astley')})

 // freebase.outgoing("ubuntu",{},function(r){console.log(r.length>15)} )

 // query=[{"type":"/base/disaster2/tornado","name":null}]
 // freebase.paginate(query, {max:20}, function(r){console.log(r.length>20)} )

 // query=[{"type":"/base/disaster2/tornado","name":null}]
 // freebase.continue(query, {max:20}, function(r){console.log(r.length>20)} )


// freebase.list("earthquakes", {}, function(r){console.log(r.length>20)})

// freebase.description("mike myers", {}, function(r){console.log(r.match(/myers/i)!=null)})
// //freebase.description("http://myspace.com/u2", {}, function(r){console.log(r.match(/u2/i)!=null)})

// freebase.sentence("thom yorke", {}, function(r){console.log(r.match(/radiohead/i)!=null)})

// freebase.translate("toronto",{lang:"zh"},function(r){console.log(r.match(/多伦多/i)!=null)})
// freebase.translate("radiohead",{lang:"/lang/ko"},function(r){console.log(r.match(/라디오헤드/i)!=null)})

// freebase.incoming("germany",{},function(r){console.log(r.length>20)})

// freebase.search("franklin",{},function(r){console.log(r.length>2)})
// freebase.notable("canada",{},function(r){console.log(r.id=='/location/country')})
// freebase.wikipedia_page("tony hawk", {}, function(r){console.log(r=="Tony_Hawk")})

// freebase.sentence("meatloaf", {type:"/food/food"}, function(r){console.log(r!=null)})