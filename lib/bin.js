#!/usr/bin/env node
/**
 * Freebase Command line library
 * query freebase.com data from the command line
 *
 * Usage:
 *  --help            Prints out this help text
 */
var freebase = require('../freebase');
var pkg       = require('../package.json');

if (process.argv.length <= 2) {
  // Print out the help information
  freebase.documentation();
  process.exit(0);
}
else if(process.argv.length == 3){
	//documentation for just that method
	freebase.documentation(process.argv[2])
}
else if(process.argv.length >= 4){
	var method=process.argv[2]
	var query=process.argv[3]
	var options=process.argv[4] || {}
	var callback=process.argv[5] || console.log
	if(freebase[method] && query){
		freebase[method](query, options, callback)
	}else{
		freebase.documentation(method);
	}
}


