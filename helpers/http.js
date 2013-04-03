//client-side and serverside http methods, using jquery and micheal/request respectively
var http = (function() {

  var http = {}

  //client-side environment
  if (typeof window != 'undefined' && window.screen) {

    http.get = function(url, callback) {
      callback = callback || defaultcallback;
      $.get(url, function(result) {
        callback(trytoparse(result))
      }).fail(function(e) {
        callback(e.statusText || "error")
      });
    }

    http.jsonp = function(url, callback) {
      callback = callback || defaultcallback;
      $.getJSON(url, function(result) {
        callback(trytoparse(result))
      }).fail(function(e) {
        callback(e.statusText || "error")
      });
    }

    http.post = function(url, data, callback) {
      callback = callback || defaultcallback;
      $.post(url, data, function(result) {
        callback(trytoparse(result))
      }).fail(function(e) {
        callback(e.statusText || "error")
      });
    }

    function defaultcallback(s) {
      console.log(s);
      $('body').append(JSON.stringify(s));
    }
  }
  //server-side environment
  else if (typeof module !== 'undefined' && module.exports) {
    var request = require('request');

    http.get = function(url, callback) {
      callback = callback || console.log;
      request({
        uri: url
      }, function(error, response, body) {
        callback(trytoparse(body))
      })
    }

    http.post = function(url, data, callback) {
      callback = callback || console.log;
      if (typeof data == 'object') {
        data = JSON.stringify(data);
      }
      request({
        url: 'http://api.freebase.com/api/service/mqlread',
        method: 'POST',
        body: data
      }, function(err, res, body) {
        callback(trytoparse(body));
      });
    }

  }

  function trytoparse(d) {
    try {
      return JSON.parse(d);
    } catch (e) {
      return d;
    }
  }

  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return http;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = http;
  }

  return http;

})()