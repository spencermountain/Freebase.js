
if (typeof module !== 'undefined' && module.exports) {
  var request = require("request");
  var fns = require('./helpers');
  var data = require('./data');
  var wikipedia = require('./wikipedia');
  var slow = require('./slow');
}


var freebase = (function() {

  var freebase = {};
  freebase.api_key = "AIzaSyD5GmnQC7oW9GJIWPGsJUojspMMuPusAxI" //please don't abuse my key
  freebase.host = "https://www.googleapis.com/freebase/v1" //production
  //freebase.host = "https://www.googleapis.com/freebase/v1sandbox"  //sandbox
  freebase.data=data;
  freebase.wikipedia=wikipedia
  freebase.default_callback = console.log

  //
  //Freebase classes
  //
  freebase.Topic = function(data) {
    var topic = this;
    var type = fns.jstype(data);
    if (type == "null") {
      return {}
    }
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
    topic.name = data.name || data.text || data.title;
    topic.get = function(property, callback, options) {
      options=new freebase.Option(options)
      callback=callback||freebase.default_callback;
      freebase.reconcile_property(property, function(p){
        options.property=p.id;
        freebase.topic_api(topic, function(result){
          return callback(render_results(result.property[options.property]))
        },options)
      },options)
    }
    topic=fns.extend(topic, data)
  }

function render_results(results){
  results=results||{}
  if(results.valuetype=="string"|| results.valuetype=="uri"|| results.valuetype=="int"){
    return results.values.map(function(v){
      return v.text
    })
  }
  if(results.valuetype=="datetime"){
    return results.values.map(function(v){
      return fns.parsedate(v.text)
    })
  }
  if(results.valuetype=="object"){
    return results.values.map(function(v){
      return {
        id:v.id,
        name:v.text
      }
    })
  }
  return results.values
}


  freebase.Property = function(data) {
    var property = this;
    var type = fns.jstype(data);
    if (type == "null") {
      return {}
    }
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
    property.type = (function() {
      return property.mid.split(/\//g).slice(0, 3).join('/')
    })()
    //property=fns.extend(property, data)
  }

  freebase.Topiclist = function(data) {
    var list = this;
    var type = fns.jstype(data);
    if (type == "null") {
      return {}
    }
    list.data = data.map(function(v) {
        return new freebase.Topic(v)
      })
    list.get = function(property, callback, options){
      var doit=function(t, cb){
        t.get(property, cb, options)
      }
      slow(list.data, doit, {}, callback)
    }
    list.set=function(){}
    list.select=function(){}
    list.reject=function(){}
}


  freebase.Option = function(data) {
    var option = this;
    data = data || {}
    option.key = freebase.api_key
    option.property = data.property //|| function(){new Property(data.property);}
    option.type = data.type //|| function(){return new freebase.Property(data.property).type;}
    option=fns.extend(option, data)
  }



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


  freebase.fetch=function(topic, callback, options){
    this.description="lookup a specific property in the topic api"
    callback=callback||freebase.default_callback;
    options = new freebase.Option(options);
    freebase.topic_api(topic, function(result){
      return callback(result.property)
    }, options)
  }


  freebase.topic_api=function(topic, callback, options) {
    this.description="call the freebase topic api"
    options = new freebase.Option(options);
    callback=callback||freebase.default_callback;
    var filter = options.property || options.type || "all";
    var url = freebase.host + '/topic' + topic.mid + '?key=' + (options.key || '') + '&filter=' + (filter || "all")
    fns.http(url, function(result) {
      return callback(result)
    }, options)
  }

  freebase.search_api=function(str, callback, options) {
    this.description="call the freebase search api"
    options = new freebase.Option(options);
    callback=callback||freebase.default_callback;
    var url = freebase.host + '/search?query=' + encodeURIComponent(str) + '&key=' + (options.key || '')
    fns.http(url, function(r) {
      var list=new freebase.Topiclist(r.result)
      return callback(list)
    })
  }

  freebase.reconcile_property=function(str, callback, options){
      callback=callback||freebase.default_callback;
      options = new freebase.Option(options)
      if(fns.isid(str)){
        callback(new freebase.Property(str))
      }
      else if(freebase.data.properties[str]){
        callback(new freebase.Property(freebase.data.properties[str]))
      }
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

// radiohead = new freebase.Topic("/en/radiohead")
// radiohead.get("name", function(o) {
//   console.log(JSON.stringify(o, null, 2));
// })

freebase.search_api("toronto",function(topics){
  topics.get("type",function(names){
    console.log(JSON.stringify(names, null, 2));
   })
})
