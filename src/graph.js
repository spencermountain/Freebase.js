//make sure we have core methods

// export for Node.js
if (typeof module !== 'undefined' && module.exports) {
	var freebase = require("./core")
	var fns = require('./helpers/helpers');
	var data = require('./helpers/data').data;
}


if (typeof freebase == 'undefined' || !freebase || !freebase.search) {
	console.warn('freebase sugar methods loaded without freebase core methods')
	freebase = {}
}




freebase.incoming = function(q, options, callback) {
	this.doc = "get any incoming data to this topic, ignoring cvt types"
	var ps = fns.settle_params(arguments, freebase.incoming, {});
	if (ps.array) {
		return fns.doit_async(ps);
	}
	if (!ps.valid) {
		return ps.callback({});
	}

	freebase.get_id(ps.q, ps.options, function(topic) {
		if (!topic || !topic.id) {
			return ps.callback([])
		}
		var query = [{
			"id": topic.id,
			"/type/reflect/any_reverse": [{
				"link": null,
				"id": null,
				"name": null,
				"type": "/common/topic",
				"limit": 170
			}]
		}]
		//this technically doesn't paginate.
		freebase.paginate(query, ps.options, function(result) {
			if (!result || !result[0] || !result[0]['/type/reflect/any_reverse']) {
				return ps.callback([])
			}
			return ps.callback(result[0]['/type/reflect/any_reverse'])
		})
	})
}
// freebase.incoming("toronto")

freebase.outgoing = function(q, options, callback) {
	this.doc = "return all outgoing links for a topic, traversing cvt types"
	var ps = fns.settle_params(arguments, freebase.outgoing, {});
	if (ps.array) {
		return fns.doit_async(ps);
	}
	if (!ps.valid) {
		return ps.callback({});
	}

	freebase.lookup(ps.q, ps.options, function(topic) {
		if (!topic || !topic.mid) {
			return ps.callback([])
		}
		freebase.topic(topic.mid, ps.options, function(result) {
			if (!result || Object.keys(result).length == 0) {
				return ps.callback([]);
			}
			var out = [];
			//get rid of permissions and stuff..
			result.property = fns.kill_boring(result.property)
			Object.keys(result.property).forEach(function(key) {
				var v = result.property[key];
				//add topics
				if (v.valuetype == "object") {
					v.values = v.values.map(function(s) {
						s.property = key;
						return s
					})
					out = out.concat(v.values)
				}
				//add the topics from cvt values in the same manner
				if (v.valuetype == "compound") {
					v.values.forEach(function(c) {
						c.property = fns.kill_boring(c.property);
						Object.keys(c.property).forEach(function(key2) {
							if (c.property[key2].valuetype == "object") {
								c.property[key2].values = c.property[key2].values.map(function(s) {
									s.property = [key, key2];
									return s
								})
								out = out.concat(c.property[key2].values)
							}
						})
					})
				}
			})
			out = out.map(function(o) {
				return {
					name: o.text,
					id: o.id,
					property: o.property
				}
			})
			return ps.callback(out)
		})
	})
}
// freebase.outgoing("vancouver")

freebase.graph = function(q, options, callback) {
	this.doc = "return all outgoing and incoming links for a topic"
	var ps = fns.settle_params(arguments, freebase.graph, {});
	if (ps.array) {
		return fns.doit_async(ps);
	}
	if (!ps.valid) {
		return ps.callback({});
	}
	freebase.lookup(ps.q, ps.options, function(topic) {
		if (!topic) {
			return ps.callback({})
		}
		delete topic.score;
		delete topic.lang;
		ps.options.filter = "allproperties";
		freebase.topic(topic.mid, ps.options, function(r) {
			if (!r || !r.property) {
				return ps.callback([])
			}
			var incoming = {};
			var outgoing = {};
			Object.keys(r.property).forEach(function(k) {
				if (k.match(/^\!/)) {
					outgoing[k] = r.property[k]
				} else {
					incoming[k] = r.property[k]
				}
			})
			incoming = fns.parse_topic_api(incoming);
			outgoing = fns.parse_topic_api(outgoing);
			var out = incoming.map(function(v) {
				return {
					subject: topic,
					property: {
						id: v.property
					},
					object: v,
					direction: "outgoing"
				}
			})
			out = out.concat(outgoing.map(function(v) {
				return {
					object: topic,
					property: {
						id: v.property
					},
					subject: v,
					direction: "incoming"
				}
			}))
			return ps.callback(out)
		})
	})
}
//freebase.graph("toronto")
// freebase.graph("/m/07jnt")
// freebase.graph("shawshank redemption")




freebase.related = function(q, options, callback) {
	this.doc = "get similar topics to a topic"
	var ps = fns.settle_params(arguments, freebase.related, {});
	if (ps.array) {
		return fns.doit_async(ps);
	}
	if (!ps.valid) {
		return ps.callback({});
	}
	var all = [];
	//pluck relevant connected topics from outgoing links
	freebase.outgoing(ps.q, ps.options, function(result) {
		all = result.filter(function(v) {
			return fns.isin(v.property, data.related_properties)
		})
		all = all.map(function(v) {
			if (!v.sentence) {
				v.sentence = v.name + " is related to " + result.name
			}
			return v
		})
		all = fns.json_unique(all, "id")
		if (all.length >= options.max) {
			return ps.callback(all)
		}
		//else, append topics that share the notable type
		freebase.notable(ps.q, ps.options, function(result) {
			if (result && result.id) {
				return freebase.list(result.id, {
					max: ps.options.max || 100
				}, function(r) {
					if (!r || fns.isempty(r)) {
						return ps.callback(all)
					}
					r = r.map(function(v) {
						v.sentence = v.name + " is also a " + result.name;
						return v
					})
					all = all.concat(r); //todo
					all = fns.json_unique(all, "id")
					return ps.callback(all)
				})
			} else {
				return ps.callback(all)
			}
		})
	})
}
// require("./sugar")
// freebase.related("toronto", {}, function(r) {
// 	console.log(JSON.stringify(r, null, 2));
// })