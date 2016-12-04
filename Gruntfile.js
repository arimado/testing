module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jasmine: {
        test: {
          src: 'src/*.js',
          options: {
            specs: 'test/*.spec.js'
          }
        }
      },
      browserify: {
        dist: {
          options: {
             transform: [['babelify', {presets: ['es2015', 'react']}]]
          },
          src: ['src/app/index.js'],
          dest: 'dist/app.js',
        }
      }
    })

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('build', ['browserify']);
    grunt.registerTask('default', ['jasmine']);
}
