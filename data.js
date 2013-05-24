

var data = (function() {

  var data = {};



  data.properties={
  	"alias":"/common/topic/alias",
  	"type":"/type/object/type",
  	"name":"/type/object/name",
  	"id":"/type/object/id",
  	"mid":"/type/object/mid",
  	"key":"/type/object/key"
  }




  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return data;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = data;
  }

  return data;

})()