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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default tasks
  grunt.registerTask('default', ['uglify', 'concat']);

};