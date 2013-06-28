module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
           banner: '/*! <%= pkg.name %> \n by @spencermountain\n <%= grunt.template.today("yyyy-mm-dd") %> */\n',
           footer:"\n\n return freebase; })()\n})(jQuery)"
         },
      dist: {
        src: ['./client_side/grunt_header.js','./data.js', './http.js', './helpers.js',  './slow.js',  './freebase.js'],
        dest: './client_side/freebase.js'
      }
    },
    uglify:{
      do:{
       src: ['./client_side/freebase.js'],
       dest: './client_side/freebase.min.js'
     }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat','uglify']);

};