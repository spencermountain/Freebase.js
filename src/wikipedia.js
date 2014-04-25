// export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  var freebase = require("./core")
  var fns = require('./helpers/helpers');
}


if (typeof freebase == 'undefined' || !freebase || !freebase.search) {
  console.warn('freebase sugar methods loaded without freebase core methods')
  freebase = {}
}

freebase.wikipedia_categories = function(q, options, callback) {
  this.doc = "get the wikipedia categories for a topic"
  var ps = fns.settle_params(arguments, freebase.wikipedia_categories, {});
  if (ps.array) {
    return fns.doit_async(ps);
  }
  if (!ps.valid) {
    return ps.callback({});
  }
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  // if (ps.q.match(/ /) || ps.q.substr(0, 1) == ps.q.substr(0, 1).toLowerCase() || ps.q.match(/^\//)) {
  //   return freebase.wikipedia_page(ps.q, options, function(r) {
  //     freebase.wikipedia_categories(r, options, ps.callback)
  //   })
  // }
  var url = freebase.globals.wikipedia_host + '?action=query&prop=categories&format=json&clshow=!hidden&cllimit=200&titles=' + encodeURIComponent(ps.q);
  fns.http(url, ps.options, function(r) {
    if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
      return ps.callback([])
    }
    var cats = r.query.pages[Object.keys(r.query.pages)[0]].categories || []
    cats = cats.map(function(v) {
      return v.title
    })
    return ps.callback(cats)
  })
}
// freebase.wikipedia_categories(["Thom Yorke","Toronto"], {}, console.log)
// freebase.wikipedia_categories("Thom Yorke", {}, console.log) //****

freebase.wikipedia_links = function(q, options, callback) {
  this.doc = "outgoing links from this wikipedia page, converted to freebase ids"
  callback = callback || console.log;
  var ps = fns.settle_params(arguments, freebase.wikipedia_links, {});
  if (!q) {
    return callback({})
  }
  if (typeof options == "function") {
    callback = options;
    options = {};
  } //flexible parameter
  options = options || {};
  //handle an array
  if (fns.isarray(q) && q.length > 1) {
    var ps = fns.settle_params(arguments, freebase.wikipedia_links, {});
    return fns.doit_async(ps)
  }
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if (q.match(/ /) || q.substr(0, 1) == q.substr(0, 1).toLowerCase() || q.match(/^\//)) {
    return freebase.wikipedia_page(q, options, function(r) {
      freebase.wikipedia_links(r, options, callback)
    })
  }
  var url = freebase.globals.wikipedia_host + '?action=query&prop=links&format=json&plnamespace=0&pllimit=500&titles=' + encodeURIComponent(q);
  fns.http(url, ps.options, function(r) {
    if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
      return callback([])
    }
    var links = r.query.pages[Object.keys(r.query.pages)[0]].links || []
    //filter-out non-freebase topics
    links = links.filter(function(v) {
      return v.title.match(/^List of /i) == null
    })
    links = links.map(function(o) {
      o.id = "/wikipedia/en/" + freebase.mql_encode(o.title.replace(/ /g, '_'));
      o.name = o.title;
      delete o.title;
      delete o.ns;
      return o
    })
    return callback(links)
  })
}
// freebase.wikipedia_links("Toronto", {}, console.log)

freebase.wikipedia_external_links = function(q, options, callback) {
  this.doc = "outgoing links from this wikipedia page, converted to freebase ids"
  callback = callback || console.log;
  var ps = fns.settle_params(arguments, freebase.wikipedia_external_links, {});
  if (!q) {
    return callback({})
  }
  if (typeof options == "function") {
    callback = options;
    options = {};
  } //flexible parameter
  options = options || {};
  //handle an array
  if (fns.isarray(q) && q.length > 1) {
    var ps = fns.settle_params(arguments, freebase.wikipedia_external_links, {});
    return fns.doit_async(ps)
  }
  //if its not a wikipedia title, reuse get-topic logic for searches/ids
  if (q.match(/ /) || q.substr(0, 1) == q.substr(0, 1).toLowerCase() || q.match(/^\//)) {
    return freebase.wikipedia_page(q, options, function(r) {
      freebase.wikipedia_external_links(r, options, callback)
    })
  }
  var url = freebase.globals.wikipedia_host + '?action=query&prop=extlinks&format=json&ellimit=500&titles=' + encodeURIComponent(q);
  fns.http(url, ps.options, function(r) {
    if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
      return callback([])
    }
    var links = r.query.pages[Object.keys(r.query.pages)[0]].extlinks || []
    links = links.filter(function(v) {
      return v["*"].match(/^http/)
    })
    links = links.map(function(v) {
      var box = fns.parseurl(v["*"]);
      return {
        url: v["*"],
        domain: box.host
      }
    })
    return callback(links)
  })
}
// freebase.wikipedia_external_links("Toronto", {}, console.log)




freebase.category_list = function(q, options, callback) {
  this.doc = "get the freebase topics in a wikipedia category"
  var ps = fns.settle_params(arguments, freebase.category_list, {
    depth: 1
  });
  if (ps.array) {
    return fns.doit_async(ps);
  }
  if (!ps.valid) {
    return ps.callback({});
  }
  //if its not a wikipedia category
  if (!ps.q.match(/Category:/)) {
    ps.q = 'Category:' + ps.q
  }
  var all_topics = [];
  var all_categories = [];
  iterate(ps.q, '')

  function iterate(cat, cmcontinue) {
    var url = freebase.globals.wikipedia_host + "?action=query&list=categorymembers&format=json&cmlimit=400&cmtitle=" + encodeURIComponent(cat) + "&cmcontinue=" + cmcontinue;
    fns.http(url, ps.options, function(r) {
      if (!r || !r.query || !r.query.categorymembers || !r.query.categorymembers[Object.keys(r.query.categorymembers)[0]]) {
        return ps.callback([])
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
          id: "/wikipedia/en/" + freebase.mql_encode(v.title),
          article: 'http://en.wikipedia.org/wiki/index.html?curid=' + v.pageid,
          title: v.title
        }
      })
      all_topics = all_topics.concat(topics);
      if (!cmcontinue) {
        return ps.callback(all_topics)
      } else {
        iterate(cat, cmcontinue); //recurse
      }
    })
  }
}
// freebase.category_list("Category:Redirects_from_plurals")



freebase.wikipedia_subcategories = function(q, options, callback) {
  this.doc = "find the subcategories of this wikipedia category"
  var ps = fns.settle_params(arguments, freebase.wikipedia_subcategories, {
    depth: 1,
    already: []
  });
  if (ps.array) {
    return fns.doit_async(ps);
  }
  if (!ps.valid) {
    return ps.callback({});
  }
  //if its not a wikipedia category
  if (!ps.q.match(/Category:/)) {
    ps.q = 'Category:' + ps.q
  }
  var url = freebase.globals.wikipedia_host + "?action=query&list=categorymembers&format=json&cmlimit=400&cmnamespace=14&cmtitle=" + encodeURIComponent(ps.q);
  fns.http(url, ps.options, function(r) {
    if (!r || !r.query || !r.query.categorymembers || !r.query.categorymembers[Object.keys(r.query.categorymembers)[0]]) {
      return ps.callback([]);
    }
    var cats = r.query.categorymembers.map(function(v) {
      return v.title
    });
    //remove if done already (for recursive cats)
    cats = cats.filter(function(v) {
      return !fns.isin(v, ps.options.already)
    })
    ps.options.already = fns.compact_strong(_.flatten(ps.options.already.concat(cats)));
    if (ps.options.depth > 1 && cats.length > 0) {
      ps.options.depth = ps.options.depth - 1;
      return freebase.wikipedia_subcategories(cats, ps.options, function(r) {
        ps.options.already = ps.options.already.concat(r)
        return ps.callback(fns.compact_strong(_.flatten(ps.options.already)));
      })
    } else {
      return ps.callback(ps.options.already)
    }
  })
}
// freebase.wikipedia_subcategories("Category:Enzymes",{depth:2},function(r){console.log(JSON.stringify(r))})
//freebase.wikipedia_subcategories(["Category:Toronto","Category:Vancouver"])



freebase.wikipedia_to_freebase = function(q, options, callback) {
  this.doc = "turn a wikipedia title or url into a freebase topic"
  var ps = fns.settle_params(arguments, freebase.wikipedia_to_freebase, {
    depth: 1
  });
  if (ps.array) {
    return fns.doit_async(ps);
  }
  if (!ps.valid) {
    return ps.callback({});
  }
  ps.q = ps.q.replace(/^https?:\/\/..\.wikipedia\.org\/wiki\//, '');
  var title = ps.q;
  var obj = {
    id: "/wikipedia/en/" + freebase.mql_encode(ps.q),
    title: title
  }
  return ps.callback(obj)
}
// freebase.wikipedia_to_freebase("Tony Hawk")