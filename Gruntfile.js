module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/build/script.min.js',
      },
    },
    uglify: {
      dist: {
        src: ['js/build/script.min.js'],
        dest: 'js/build/script.min.js',
      },
    },
  });

  

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
