var async = require('async')
var freebase = require('../index');
var key = require("../auth/credentials").API_KEY || ""
var options = {
    key: key //please use your mqlREAD key..
};

var non_search_methods=[
  "mqlread",
  "lookup_id",
  "url_lookup",
  "property_introspection",
  "schema",
  "list",
  "property_lookup",
  "from_category",
  "mqlwrite",
  "add_type",
  "add_alias",
  "paginate",
  "mql_encode",
  "drilldown",
  "question",
  "dig",
]



var search_methods=[
"search",
"lookup",
"get_id",
"topic",
"wikipedia_page",
"dbpedia_page",
"rdf",
"description",
"image",
"notable",
"grammar",
"same_as_links",
"translate",
"sentence",
"place_data", //
"is_a",
"wordnet",  //
"geolocation",
"nearby",
"inside",
"incoming",
"outgoing",
"graph",
"related",
"wikipedia_categories",
"wikipedia_links",
"wikipedia_external_links",
"wikipedia_subcategories",
"wikipedia_to_freebase",
]


var obj= {
  key:"AIzaSyD5GmnQC7oW9GJIWPGsJUojspMMuPusAxI",
  // debug:true,
  // nodeCallback:true
}
var q="92lkj348ljqeh2qpo2yslkqj2uedhaslkjad7d"
var q="toronto"
function doit(i){
  console.log(search_methods[i])
  var tmp= JSON.parse(JSON.stringify(obj))
  freebase[search_methods[i]](q, tmp, function(r,r2){
    console.log(r)
    if(search_methods[i+1]){
      doit(i+1)
    }
  })
}

doit(0)