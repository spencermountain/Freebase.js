if (typeof module !== 'undefined' && module.exports) {
  var fns = require('./helpers');
	var freebase = require("./index");
	var request = require("request");
}


var wikipedia = (function() {
	var wikipedia=this
	this.lang="en"
	this.host = 'http://'+lang+'.wikipedia.org/w/api.php'

	function Category(data) {
		var cat = this;
		var type=fns.jstype(data)
		if (type=="null"){ return {} }
    if (type == "string") {
    	if(data.match(/^https?:\/\/.*\.wikipedia\.org/)){
    		var path=fns.parseurl(data).path||''
    		data=decodeURIComponent(path.replace(/\/wiki\//,''))
    	}
    }
		cat.title = cat.title || (function() {
			if (!data.match(/^Category:/)) {
				data = 'Category:' + data
			}
			return data;
		})()
		cat.nice_title=cat.title.replace(/^Category:/,'')

		cat.url='http://'+wikipedia.lang+".wikipedia.org/wiki/"+encodeURIComponent(cat.title);

		cat.pages = function get_pages(callback, options) {
			var all_topics = [];
			var all_categories = [];
			iterate(cat, '')

			function iterate(cat, cmcontinue) {
				var url = wikipedia.host + "?action=query&list=categorymembers&format=json&cmlimit=400&cmtitle=" + encodeURIComponent(cat.title) + "&cmcontinue=" + cmcontinue;
				fns.http(url, function(r) {
					if (!r || !r.query || !r.query.categorymembers || !r.query.categorymembers[Object.keys(r.query.categorymembers)[0]]) {
						return callback([])
					}
					all_categories = all_categories.concat(r.query.categorymembers.filter(function(v) {
						return v.ns == 14
					}));
					var cmcontinue = r["query-continue"] || {}
					cmcontinue = cmcontinue.categorymembers || {}
					cmcontinue = cmcontinue.cmcontinue || '';
					var topics = r.query.categorymembers.filter(function(v) {
						return v.ns == 0
					});
					topics = topics.map(function(v) {
						return {
							id: "/wikipedia/"+wikipedia.lang+"/" + freebase.mql_encode(v.title),
							article: 'http://'+wikipedia.lang+'.wikipedia.org/wiki/index.html?curid=' + v.pageid,
							title: v.title
						}
					})
					all_topics = all_topics.concat(topics);
					if (!cmcontinue) {
						return callback(all_topics)
					} else {
						iterate(cat, cmcontinue); //recurse
					}
				})
			}
		}


  cat.subcategories = function(callback, options) {
  	options=options||{already:[]}
    var url = wikipedia.host + "?action=query&list=categorymembers&format=json&cmlimit=400&cmnamespace=14&cmtitle=" + encodeURIComponent(cat.title);
    fns.http(url, function(r) {
      if (!r || !r.query || !r.query.categorymembers || !r.query.categorymembers[Object.keys(r.query.categorymembers)[0]]) {
        return callback([]);
      }
      var cats = r.query.categorymembers.map(function(v) {
        return v.title
      });
      //remove if done already (for recursive cats)
      cats = cats.filter(function(v) {
        return !fns.isin(v, options.already)
      })
      options.already = fns.compact_strong(fns.flatten(options.already.concat(cats)));
      if (options.depth > 1 && cats.length > 0) {
        poptions.depth = options.depth - 1;
        return freebase.wikipedia_subcategories(cats, options, function(r) {
          options.already = options.already.concat(r)
          var done=fns.compact_strong(fns.flatten(options.already)).map(function(v){
          	return new Category(v)
          })
          return callback(done);
        })
      } else {
      	var done=options.already.map(function(v){
          	return new Category(v)
          })
        return callback(done)
      }
    })
  }


	}




	cat = new Category("http://en.wikipedia.org/wiki/Category:International_friendship_associations")
	// cat.pages(function(data){
	// 	topics=new freebase.TopicList(data.)
	// 	console.log(topics.ids)
	// })
cat.subcategories(function(data){
	console.log(data.map(function(v){return v.nice_title}))
})






	// export for AMD / RequireJS
	if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return wikipedia;
		});
	}
	// export for Node.js
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = wikipedia;
	}

	return wikipedia;
})()