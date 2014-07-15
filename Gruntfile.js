module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> \n by @spencermountain\n <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                footer: "\n\n return freebase; })()\n})(jQuery)"
            },
            dist: {
                //minimum file
                // src: ['./src/helpers/grunt_header.js', './src/helpers/http.js', './src/helpers/helpers.js', './src/core.js'],
                //full file
                src: ['./src/helpers/grunt_header.js', './src/helpers/http.js', './src/helpers/data.js', './src/helpers/helpers.js', './src/core.js', './src/sugar.js', './src/geo.js', './src/graph.js'],
                dest: './client_side/freebase.js'
            }
        },
        uglify: {
            do :{
                src: ['./client_side/freebase.js'],
                dest: './client_side/freebase.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat', 'uglify']);

};