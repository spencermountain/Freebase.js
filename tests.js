var freebase=require('./freebase');
var async=require('async');
var fns=require('./lib/helpers')
var _=require('underscore');
var test={}
//failing

// freebase.inside('toronto',{}, function(r){
// 	console.log(r.length>3)
// })
 // freebase.transitive("barrie", "part_of", {}, function(r){
 // 	console.log(r.length>3)
 // })


test.lookup=[
  ["http://toronto.ca", {}, function(r){console.log(r.id=="/en/toronto")}],
  [["/m/09jm8", "http://myspace.com/u2"], {}, function(r){console.log(r[1].name=="U2")	}],
  ["australia",{type:"/film/film"}, function(r){console.log(r.mid=="/m/026qnh6")}],
  ["thom yorke", {}, function(r){console.log(r.mid=="/m/01p0w_")}],
  ["tom green", {}, function(r){console.log(r.mid=="/m/017yxq")}],
  [["toronto","suddenly susan"],{},function(r){console.log(r.length==2)}]
]

test.mqlread=[
  [{ "type": "/music/album", "id": "/en/keep_it_turned_on", "artist" : null},{}, function(r){console.log(r.result.artist=='Rick Astley')}]
]
test.get_id=[
  ["/en/tony_hawk",{},function(r){console.log(r.id=="/en/tony_hawk")}]
]
test.topic=[
 ['radiohead',{},function(r){console.log(r.id=='/m/09jm8' && r.property['/music/artist/origin']!=null) } ]
]
test.search=[
  ["franklin",{},function(r){console.log(r.length>2)}]
]
test.paginate=[
  [[{"type":"/base/disaster2/tornado","name":null}], {max:20}, function(r){console.log(r.length>20)} ],
]
test.grammar=[
  ["toronto maple leafs",{},function(r){
       console.log(_.isEqual(r, { plural: true,
                 gender: null,
                 article: 'a',
                 pronoun: 'they',
                 copula: 'are' }))
      }],
  ["ron weasley",{},function(r){
     console.log(_.isEqual(r, { plural: false,
                     gender: 'male',
                     article: 'a',
                     pronoun: 'he',
                     copula: 'is' }))
    }]
]
test.same_as_links=[
	["http://www.geonames.org/6167865/", {}, function(r){console.log(r.links.length>3)}],
	["toronto", {}, function(r){console.log(r.links.length>3)}],
	["/m/0h7h6", {}, function(r){console.log(r.links.length>3)}]
]
test.translate=[
	["toronto",{lang:"zh"},function(r){console.log(r.match(/多伦多/i)!=null)}],
	["radiohead",{lang:"/lang/ko"},function(r){console.log(r.match(/라디오헤드/i)!=null)}]
]
test.image=[
  ["australia",{type:"/location/location"}, function(r){console.log(r);console.log(r.match(/maxheight/)!=null)}]
]
test.description=[
 ["mike myers", {}, function(r){console.log(r.match(/myers/i)!=null)}],
 ["http://myspace.com/u2", {}, function(r){console.log(r.match(/u2/i)!=null)}]
]
test.notable=[
  ["canada",{},function(r){console.log(r.id=='/location/country')}]
]
test.sentence=[
  ["thom yorke", {}, function(r){console.log(r.match(/radiohead/i)!=null)}],
  ["meatloaf", {type:"/food/food"}, function(r){console.log(r!=null)}],
  [[{name:"toronto"},{id:"/en/radiohead",name:"radiohead"}],{},function(r){console.log(r.length==2)}]
]
test.list=[
  ["earthquakes", {}, function(r){console.log(r.length>20)}]
]
test.place_data=[
  [{lat:43.64806,lng:-79.40417}, {}, function(r){
   console.log(r.city.name=="Toronto")
  }],
   [{lat:52.05375719395869,lng:5.9511566162109375}, {}, function(r){
   console.log(r.country.name=="Netherlands")
  }],
  [{lat:47.9991410647952,lng:14.172706604003906}, {}, function(r){
   console.log(r.country.name=="Austria")
  }]
]
test.incoming=[
  ["germany",{},function(r){console.log(r.length>20)}]
]
test.outgoing=[
  ["ubuntu",{},function(r){console.log(r.length>15)} ]
]
test.graph=function(){
	["paul ryan", {}, function(r){console.log(r[0].object.name=="Paul Ryan"|| r[0].subject.name=="Paul Ryan")}]
}
test.related=[
  ["radiohead",{},function(r){console.log(r.length>4 && r[2].id!=null)}]
]
test.gallery=[
  ["hurricanes",{},function(r){console.log(r.length>20)}]
]
test.wordnet=[
   [["bat","wood"],{}, function(r){console.log(r.length==2)}],
   ["wood",{}, function(r){console.log(r.length==4) }]
]
test.geolocation=[
 ["toronto", {}, function(r){  console.log(r.latitude!=null)  }]
]
test.nearby=[
  ["cn tower", {type:"/food/restaurant"}, function(r){console.log(r.length>4)}]
]
test.inside=[
  ["toronto", {type:"/locaton/citytown"}, function(r){console.log(r.length>4)}]
]
test.wikipedia_page=[
  ["tony hawk", {}, function(r){console.log(r=="Tony_Hawk")}]
]
test.wikipedia_categories=[
  ["meatloaf",{type:"/food/food"},function(r){console.log(r.length>4 && r[3].match(/^Category/)!=null)}]
]
test.wikipedia_links=[
  ["Toronto", {}, function(r){console.log(r.length>=5)}]
]
test.wikipedia_external_links=[
  ["/en/toronto", {}, function(r){console.log(r.length>=3)}]
]
test.schema_introspection=[
 ["person",{},function(r){console.log(r.id=="/people/person" && r.incoming_properties.length>5)}]
 ["/people/person",{},function(r){console.log(r.id=="/people/person" && r.incoming_properties.length>5)}]
]
test.property_introspection=[
]
test.property_lookup=[
]
test.transitive=[
]
test.is_a=[
]
test.question=[
]
test.dig=[
]
test.mql_encode=[
]
test.add_widget=[
]


testit('sentence')
  function testit(v){
    var all=[]
    console.log('========')
    console.log(v)
    test[v].map(function(t){
      freebase[v](t[0],t[1],function(r){
        t[2](r)
      })
    })
  }

// f='sentence'
//   async.mapLimit(test[f],2,function(v){
//     console.log(freebase[f][v][0])
//   }, function(){console.log('done')})