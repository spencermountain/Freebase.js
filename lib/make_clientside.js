/**
 * Create an clientside js file from the nodejs version
 *
 */
var pkg       = require('../package.json');
var freebase = require('../freebase');

var fns=require('./helpers');
var data=require('./data').data;

var globals={
  host:'https://www.googleapis.com/freebase/v1/',
  image_host:"https://usercontent.googleapis.com/freebase/v1/image",
  geosearch:'http://api.freebase.com/api/service/geosearch',
  wikipedia_host:'http://en.wikipedia.org/w/api.php'
}

//replace the server-side request method with a jquery one
fns.http=function(url, callback){
 url+='callback=?'
 $.getJSON(url, callback)
}

function to_source(obj){
	for(var i in obj){
		obj[i]=obj[i].toString();
	}
	return obj
}


var all=function(){
	this.globals=JSON.stringify(globals, null, 2);
	this.data=data;
	this.fns=to_source(fns);
	this.freebase=to_source(freebase);
}

console.log(all.toString())
// //ugly-print them out
// console.log(JSON.stringify(globals, null, 2));
// console.log(JSON.stringify(data, null, 2));
// console.log(JSON.stringify(to_source(fns)));
// console.log(JSON.stringify(to_source(freebase)));