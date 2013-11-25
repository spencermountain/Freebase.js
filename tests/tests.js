var freebase=require('../index');
var async=require('async');
var fns=require('../helpers/helpers')
var _=require('underscore');
var options={key:""};//use your mqlREAD key..
var test={}




// freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {}, console.log)
// freebase.nearby("cn tower", {type:"/food/restaurant"}, console.log)



//failing

// freebase.inside('toronto',options, function(r){
// 	console.log(r.length>3)
// })
 // freebase.transitive("barrie", "part_of", options, function(r){
 // 	console.log(r.length>3)
 // })


  // freebase.dig('/en/toronto', {property:'/location/location/contains'}, function(r){
  //   console.log(r)
  // })


test.search=[
  ["franklin", {}, function(r){console.log(r.length>2)}]
]

test.lookup=[
  ["http://toronto.ca", options, function(r){console.log(r.id=="/en/toronto")}],
  [["/m/09jm8", "http://myspace.com/u2"], options, function(r){console.log(r[1].name=="U2") }],
  ["australia",{type:"/film/film"}, function(r){console.log(r.mid=="/m/026qnh6")}],
  ["thom yorke", options, function(r){console.log(r.mid=="/m/01p0w_")}],
  ["tom green", options, function(r){console.log(r.mid=="/m/017yxq")}],
  [["toronto","suddenly susan"],options,function(r){console.log(r.length==2)}]
]

test.mqlread=[
  [{ "type": "/music/album", "id": "/en/keep_it_turned_on", "artist" : null},options, function(r){console.log(r.result.artist=='Rick Astley')}]
]
test.get_id=[
  ["/en/tony_hawk",options,function(r){console.log(r.id=="/en/tony_hawk")}]
]
test.topic=[
 ['radiohead',options,function(r){console.log(r.id=='/m/09jm8' && r.property['/music/artist/origin']!=null) } ]
]
 test.paginate=[
   [[{"type":"/astronomy/moon","name":null}], options, function(r){console.log(r.length>20)} ],
 ]
test.grammar=[
  ["toronto maple leafs",options,function(r){
       console.log(_.isEqual(r, { plural: true,
                 gender: null,
                 article: 'a',
                 pronoun: 'they',
                 copula: 'are' }))
      }],
  ["ron weasley",options,function(r){
     console.log(_.isEqual(r, { plural: false,
                     gender: 'male',
                     article: 'a',
                     pronoun: 'he',
                     copula: 'is' }))
    }]
]
test.same_as_links=[
	["http://www.geonames.org/6167865/", options, function(r){console.log(r.links.length>3)}],
	["toronto", options, function(r){console.log(r.links.length>3)}],
	["/m/0h7h6", options, function(r){console.log(r.links.length>3)}]
]
test.translate=[
	["toronto",{lang:"zh"},function(r){console.log(r.match(/多伦多/i)!=null)}],
	["radiohead",{lang:"/lang/ko"},function(r){console.log(r.match(/라디오헤드/i)!=null)}]
]
test.image=[
  ["australia",{type:"/location/location"}, function(r){console.log(r);console.log(r.match(/maxheight/)!=null)}]
]
test.description=[
 ["mike myers", options, function(r){console.log(r.match(/myers/i)!=null)}],
 ["http://myspace.com/u2", options, function(r){console.log(r.match(/u2/i)!=null)}]
]
test.notable=[
  ["canada",options,function(r){console.log(r.id=='/location/country')}]
]
test.sentence=[
  ["thom yorke", options, function(r){console.log(r.match(/radiohead/i)!=null)}],
  ["meatloaf", {type:"/food/food"}, function(r){console.log(r!=null)}],
  [[{name:"toronto"},{id:"/en/radiohead",name:"radiohead"}],options,function(r){console.log(r.length==2)}]
]
test.list=[
  ["earthquakes", options, function(r){console.log(r.length>20)}]
]
test.place_data=[
  [{lat:43.64806,lng:-79.40417}, options, function(r){
   console.log(r.city.name=="Toronto")
  }],
   [{lat:52.05375719395869,lng:5.9511566162109375}, options, function(r){
   console.log(r.country.name=="Netherlands")
  }],
  [{lat:47.9991410647952,lng:14.172706604003906}, options, function(r){
   console.log(r.country.name=="Austria")
  }]
]
test.incoming=[
  ["germany",options,function(r){console.log(r.length>20)}]
]
test.outgoing=[
  ["ubuntu",options,function(r){console.log(r.length>15)} ]
]
test.graph=[
	["paul ryan", options, function(r){console.log(r[0].object.name=="Paul Ryan"|| r[0].subject.name=="Paul Ryan")}]
]
test.related=[
  ["radiohead",options,function(r){console.log(r.length>4 && r[2].id!=null)}]
]
test.gallery=[
  ["hurricanes",options,function(r){console.log(r.length>20)}]
]
test.wordnet=[
   [["bat","wood"],options, function(r){console.log(r.length==2)}],
   ["wood",options, function(r){console.log(r.length==4) }]
]
test.geolocation=[
 ["toronto", options, function(r){  console.log(r.latitude!=null)  }]
]
test.nearby=[
  ["cn tower", {type:"/food/restaurant"}, function(r){console.log(r.length>4)}]
]
test.inside=[
  ["toronto", {type:"/locaton/citytown"}, function(r){console.log(r.length>4)}]
]
test.wikipedia_page=[
  ["tony hawk", options, function(r){console.log(r=="Tony_Hawk")}]
]
test.wikipedia_categories=[
  ["meatloaf",{type:"/food/food"},function(r){console.log(r.length>4 && r[3].match(/^Category/)!=null)}]
]
test.wikipedia_links=[
  ["Toronto", options, function(r){console.log(r.length>=5)}]
]
test.wikipedia_external_links=[
  ["/en/toronto", options, function(r){console.log(r.length>=3)}]
]
// test.schema_introspection=[
//  ["person",options,function(r){console.log(r.id=="/people/person" && r.incoming_properties.length>5)}]
//  ["/people/person",options,function(r){console.log(r.id=="/people/person" && r.incoming_properties.length>5)}]
// ]
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


//testit('sentence')


function done(r){
  console.log('===========done========')
}


  function testone(v, callback){
    var all=[]
    test[v].patient(function(t){
      freebase[v](t[0], t[1], function(r){
        console.log('========'+v+'=========')
        t[2](r)
      })
    },function(){callback('done')})
  }

//apply same thing to all functions
function broadly(x){
  Object.keys(freebase).forEach(function(t){
    console.log('------'+t+'------')
    obj[t](x, function(r){
      console.log(r)
    })
  })
}

function coverage(fn, tests){
  fn=Object.keys(fn)
  tests=Object.keys(test)
  return {missing:_.difference(fn,tests),
    has:_.union(fn,tests).length,
    doesnt:_.difference(fn,tests).length,
    dangling_tests:_.difference(tests,fn)
  }
}
//console.log(coverage(freebase, test))
//broadly(null)
// freebase.search("franklin", options, console.log)