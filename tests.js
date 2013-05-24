var freebase=require('./freebase')

exports.topic_synchronous = function(test){
 radiohead=new freebase.Topic("/en/radiohead")
  test.equal(radiohead.mid, "/en/radiohead", "mid and id logic")
  test.done()
}

exports.topic_filter = function(test){
 radiohead=new freebase.Topic("/en/radiohead")
 radiohead.get("/type/object/type", function(o) {
   //test.deepEqual(Object.keys(o), ["/type/object/type"], "topic api filter works")
   test.done()
  })
}

exports.search_api = function(test){
	freebase.search_api("toronto",function(topics){
	  test.equal(topics.data()[0].id, "/en/toronto","search is sane")
	  test.done()
	})
}

// radiohead = new freebase.Topic("/en/radiohead")
// radiohead.get("name", function(o) {
//   console.log(JSON.stringify(o, null, 2));
// })

// freebase.search_api("toronto",function(topics){
//   topics.get("name",function(names){
//      console.log(names)
//    })
// })
