
OAUTH_TOKEN = "ya29.AHES6ZSSJJaGP17WplSzJ0xvYw4nC_gBmW-4Ykn6b3BHGLvY"
FREEBASE_KEY="AIzaSyD5GmnQC7oW9GJIWPGsJUojspMMuPusAxI";
FREEBASE_HOST="https://www.googleapis.com/freebase/v1"


if (typeof module !== 'undefined' && module.exports) {
  var request=require("request");
  var dirty = require('/Users/spencer/mountain/dirty');
  var slow = require('/Users/spencer/mountain/slow');
  var fns = require('./helpers');
}



function Topic(data) {
  var topic = this;
  var type=fns.jstype(data);
  if (type=="null"){ return {} }
  if (type == "string") {
    if (fns.isid(data)) {
      data = {
        id: data
      }
    } else {
      //search automatically?
      console.log(JSON.stringify(data) + " is not a freebase id")
      process.exit(code = 1)
    }
  }
  topic.id = data.id || data.mid;
  topic.mid = data.mid || data.id;
  topic.types=data.types||data.type||function(callback, options){
    fetch(topic,options,callback)
  }
}





function Property(data){
  var property = this;
  var type=fns.jstype(data);
  if (type=="null"){ return {} }
  if (type == "string") {
    if (fns.isid(data)) {
      data = {
        id: data
      }
    } else {
      //search automatically?
      console.log(JSON.stringify(data) + " is not a freebase id")
      process.exit(code = 1)
    }
  }
  property.id = data.id || data.mid;
  property.mid = data.mid || data.id;
  property.type=(function(){return property.mid.split(/\//g).slice(0,3).join('/')})()
}


function Option(data){
  var option=this;
  option.key=data.key||FREEBASE_KEY
  option.property=new Property(data.property);
  option.type=data.type || new Property(data.property).type;
}


// radiohead=new Topic("/en/radiohead")
// console.log(radiohead.id)
// radiohead.types(function(o){console.log(JSON.stringify(o, null, 2));}, {property:"/type/object/type"})






 function fetch(topic, options, callback) {
      options=new Option(options);
      var filter=options.property.id || options.property.type;
      var url = FREEBASE_HOST + '/topic' + topic.mid + '?key='+(options.key||'')+'&filter='+(filter||"all")
      console.log(url)
      http(url, function(result) {
        return callback(result.property)
      })
  }

  function http(url,callback){
    request({
      uri: url,
    },
    function(error, response, body) {
      if (response.statusCode == 200) {
        callback(JSON.parse(body))
      } else {
        console.log("===" + response.statusCode + " error==")
        console.log(body)
        callback(JSON.parse(body))
      }
    });
  }




var freebase= (function() {

  var freebase = {};



    freebase.mql_encode = function(s) {
    this.doc = "quote a unicode string to turn it into a valid mql /type/key/value"
    if (!s) {
      return ''
    }
    s = s.replace(/  /, ' ');
    s = s.replace(/^\s+|\s+$/, '');
    s = s.replace(/ /g, '_');
    var mqlkey_start = 'A-Za-z0-9';
    var mqlkey_char = 'A-Za-z0-9_-';
    var MQLKEY_VALID = new RegExp('^[' + mqlkey_start + '][' + mqlkey_char + ']*$');
    var MQLKEY_CHAR_MUSTQUOTE = new RegExp('([^' + mqlkey_char + '])', 'g');
    if (MQLKEY_VALID.exec(s)) // fastpath
    return s;
    var convert = function(a, b) {
      var hex = b.charCodeAt(0).toString(16).toUpperCase();
      if (hex.length == 2) hex = '00' + hex;
      if (hex.length == 3) hex = '0' + hex;
      return '$' + hex;
    };
    var x = s.replace(MQLKEY_CHAR_MUSTQUOTE, convert);
    if (x.charAt(0) == '-' || x.charAt(0) == '_') {
      x = convert(x, x.charAt(0)) + x.substr(1);
    }
    return x;
  }

  freebase.TopicList=function(data) {
    var fb = this;
    var type=fns.jstype(data);
    if (type=="null"){ return {} }
    this.data=data.map(function(v) {
      return new Topic(v)
    })
    this.ids=this.data.map(function(t){return t.id})
  }

  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return freebase;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = freebase;
  }

  return freebase;

})()