module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'src/lunr.de.js',
          'src/stemmer.js',
          'src/stop_word_filter.js'
        ],
        dest: 'dist/lunr.de.js'
      }
    },
    uglify: {
      dist: {
        src: '<%%= concat.dist.dest %>',
        dest: 'dist/lunr.de.min.js'
      }
    },
    qunit: {
      all: {
        options: {
          urls: ['http://localhost:3000/test/index.html']
        }
      }
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
    },
    connect: {
      server: {
        options: {
          hostname: '*',
          port: 3000
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default tasks
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

  // Test tasks
  grunt.registerTask('test', ['jshint', 'connect', 'qunit']);

};