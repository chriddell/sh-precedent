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

    uglify: {
      options: {
      },
      my_target: {
        files: {
          'js/lib/min/require.min.js': ['js/lib/require.js'],
          'js/lib/min/html5-shiv.min.js': ['js/lib/html5-shiv.js']
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']); // Grunt default tasks (run 'grunt')
};