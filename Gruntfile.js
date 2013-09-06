module.exports = function(grunt) {

  src = [
    'src/lunr.de.js',
    'src/stemmer.js',
    'src/stop_word_filter.js'
  ];

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist_min: {
        files: {
          'dist/lunr.de.min.js': src 
        }
      }
    },
    concat: {
      dist: {
        src: src,
        dest: 'dist/lunr.de.js'
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/*.js', 'test/*.js'],
      options: {
        globals: {
          console: true,
          module: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js', 'test/*.js', 'tests/*.html'],
        tasks: ['qunit', 'jshint'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks
  grunt.registerTask('default', ['jshint', 'qunit', 'uglify', 'concat']);

  // Test tasks
  grunt.registerTask('test', ['jshint', 'qunit']);

};