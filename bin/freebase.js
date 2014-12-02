#!/usr/bin/env node
'use strict';
var freebase = require('../index');
var q= ""
var method = process.argv[2];
if(process.argv.length < 2){
  console.log("usage:  freebase wikipedia_categories George Clooney")
  process.exit(1);
}
if(!freebase[method] ){
   method='lookup'
   q = process.argv.slice(2, process.argv.length).join(" ");
}else{
   q = process.argv.slice(3, process.argv.length).join(" ");
}

freebase[method](q, {}, function(r,err){
  if(err){
    console.log(JSON.stringify(err, null, 2));
  }
  console.log(JSON.stringify(r, null, 2));
})