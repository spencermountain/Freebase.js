var freebase = (function() {

	var freebase = require("./src/core")
	require("./src/sugar")
	require("./src/geo")
	require("./src/graph")

	// export for Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = freebase;
	}
	return freebase;
})()

// freebase.grammar("toronto maple leafs")
// console.log(Object.keys(freebase))