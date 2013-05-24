if (typeof module !== 'undefined' && module.exports) {
  var freebase = require("./index");
  var request = require("request");
 }


var fns= (function() {

  var fns = {};

  fns.flatten = function(arr) {
    return arr.reduce(function(a, b) {
        return a.concat(b);
    },[]);
  }

  fns.http=function(url, callback) {
    request({
      uri: url,
    }, function(error, response, body) {
      if (response.statusCode == 200) {
        callback(JSON.parse(body))
      } else {
        console.log("===" + response.statusCode + " error==")
        console.log(body)
        callback(JSON.parse(body))
      }
    });
  }

fns.isin=function(word,arr){
  return arr.some(function(v){return v==word})
}

  fns.compact=function(arr){
    return arr.filter(function(v){return v})
  }

fns.compact_strong = function(arr) {
  return fns.unique(fns.compact(arr)).filter(function(v) {
    return fns.isEmpty(v) == false
  })
}

fns.isEmpty = function(obj) {
    if (obj == null) return true;
    if (fns.jstype(obj)=="array" || fns.jstype(obj)=="string" ) return obj.length === 0;
    for (var key in obj) if (obj[key]!=undefined) return false;
    return true;
  };


fns.unique = function(x,field) {
    if (!field) {
      var newArray = new Array();
      label: for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < newArray.length; j++) {
          if (newArray[j] == x[i]) continue label;
        }
        newArray[newArray.length] = x[i];
      }
      return newArray;
    } else {
      var newArray = new Array();
      label: for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < newArray.length; j++) {
          if (newArray[j][field] == x[i][field]) continue label;
        }
        newArray[newArray.length] = x[i];
      }
      return newArray;
    }
  }

fns.parseurl = function(str) {
  var o = {
    strictMode: false,
    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    q: {
      name: "queryKey",
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  },
  m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
    uri = {},
    i = 14;
  while (i--) uri[o.key[i]] = m[i] || "";
  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });
  return uri;
}


//does it look like a freebase id?
fns.isid=function(str) {
  if (str.match(/^\/[^ ]*?\/[^ ]*?$/)) {
    return true;
  }
  return false
}

//get the generic javascript class of a variable

fns.jstype=function(obj) {
  var classToType, myClass, name, _i, _len, _ref;
  if (obj === void 0 || obj === null) {
    return "null";
  }
  classToType = new Object;
  _ref = "Boolean Number String Function Array Date RegExp".split(" ");
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    classToType["[object " + name + "]"] = name.toLowerCase();
  }
  myClass = Object.prototype.toString.call(obj);
  if (myClass in classToType) {
    return classToType[myClass];
  }
  return "object";
};

  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return fns;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = fns;
  }

  return fns;


})()