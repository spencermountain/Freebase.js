var freebase = (function() {

	var freebase = require("./src/core")
	require("./src/sugar")
	require("./src/geo")
	require("./src/graph")
	//these two aren't included on the clientside
	require("./src/wikipedia")
	require("./src/write")

	// export for Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = freebase;
	}
	return freebase;
})()

// freebase.grammar("toronto maple leafs")
// console.log(Object.keys(freebase))
// freebase.wikipedia_categories("Thom Yorke", {}, console.log) //****