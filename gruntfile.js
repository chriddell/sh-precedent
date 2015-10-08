module.exports = function (grunt) {
  "use strict";
 
  grunt.initConfig({

    watch: {
      sass: {
        files: ['./css/sass/**/*.scss'],
        tasks: ['sass:dev'],
        options: {
          spawn: false
        }
      }
    },

    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
          sourceMap: true,
        },
        files: {
          './css/style.css': './css/sass/style.scss',
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            './css/style.css'
          ]
        },
        options: {
          watchTask: true,
          proxy: "sh-precedent.dev/"
        }
      }
    }

  });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']); // Grunt default tasks (run 'grunt')
};