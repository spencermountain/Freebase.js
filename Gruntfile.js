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
        src: ['./helpers/grunt_header.js','./helpers/http.js', './helpers/data.js', './helpers/helpers.js',  './index.js'],
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
  // Default task(s).
  //grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['concat','uglify']);

};