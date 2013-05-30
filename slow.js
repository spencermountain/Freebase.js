var slow = (function() {

	var slow = function(arr, fn, options, done) {
		this.doc = "keep a steady amount of things going at once"
		this.aliases = ["flow", "waterfall", "steadfast"]
		var i = -1;
		var all = [];
		var at_once = 0;
		if (typeof options == "function") { //flexible paramaters
			done = options;
			options = {};
		}
		done = done || console.log;
		options = options || {};
		options.max = Math.abs(options.max) || 5;
		options.verbose = options.verbose || false;
		options.debug = options.debug || false;
		if (typeof options.monitor != "function") {
			options.monitor = false;
		}

		function iterate() {
			(function() { //wrap scope
				i++;
				var spot = i;
				at_once++;
				if (options.debug) {
					console.log("sending #" + i + " - (" + at_once + " going at once)");
				}
				fn(arr[i], function(result) {
					if (options.monitor) {
						options.monitor(result, spot);
					}
					at_once -= 1;
					all[spot] = result;
					if (i < arr.length - 1) {
						iterate();
						return;
					}
					//think about ending
					if (at_once <= 0) {
						done(all);
					}
				})
			})()
		}
		//get initial functions going
		for (var x = 0;
		(x < options.max && x < arr.length); x++) {
			iterate();
		}
	}

		function finish(s) {
			console.log(JSON.stringify(s, null, 2));
		}


		// export for AMD / RequireJS
	if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return slow;
		});
	}
	// export for Node.js
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = slow;
	}

	return slow;


})()



// 	function test_function(q, callback) {
// 		var x = Math.floor(Math.random() * 4000)
// 		setTimeout(function() {
// 			callback("finished " + q + " in " + x + "ms")
// 		}, x)
// 	}
// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// slow(arr, test_function, {}, console.log)