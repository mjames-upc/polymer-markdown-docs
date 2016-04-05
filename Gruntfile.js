/*
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'gh-pages': {
      options: {
        base: '_site',
        message: 'Auto-generated commit'
      },
      src: ['**']
    },

    pkg: grunt.file.readJSON('package.json'),
    jekyllConfig: grunt.file.readYAML('_config.yml'),

    jekyll: {
      options: {
        bundleExec: true,
      },
      build: {
      },
      serve: {
        options: {
          //port: '<%= jekyllConfig.server_port %>',
          watch: true,
          serve: true
        }
      }
    },

    vulcanize: {
      options: {
        strip: true,
        csp: true,
        inline: true
      },
      elements: {
        options: {
          excludes: {
            imports: [
              "polymer.html$"
            ]
          }
        },
        files: {
          'elements/common_elements.vulcanized.html': 'elements/common_elements.html',
          'elements/homepage_elements.vulcanized.html': 'elements/homepage_elements.html',
        }
      }
    },

    watch: {
      elements: {
        files: ['elements/**/*.html'],
        tasks: ['vulcanize'],
        options: {
          spawn: false,
        }
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          watch: true
        }
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true,
        limit: 5
      },
      target1: [
        'vulcanize-elements',
        'jekyll:serve',
        'compass',
        'watch'
      ]
    },

  });

  // Plugin and grunt tasks.
  require('load-grunt-tasks')(grunt);

  // Default task
  // Task to run vulcanize, jekyll, app engine server, compass watch, vulcanize watch
  grunt.registerTask('default', ['concurrent']);

  grunt.task.registerTask('vulcanize-elements', 'Vulcanizes site elements', function() {

    var vulcanize = grunt.config.get('vulcanize') || {};
    //vulcanize.elements.files = vulcanize.elements.files || {};

    // Dynamic add vulcanize rules for each polymer version.
    var files = vulcanize.elements.files;
    //files['elements/common_elements.vulcanized.html'] = 'elements/common_elements.html';
    //files['elements/homepage_elements.vulcanized.html'] = 'elements/homepage_elements.html';

    grunt.config.set('vulcanize', vulcanize);
    grunt.task.run('vulcanize');
  });

  // Task to run vulcanize and build the jekyll site
  grunt.registerTask('docs', ['vulcanize-elements', 'jekyll:build']);

  // Task just for running the GAE dev server.
  grunt.registerTask('serve', ['jekyll:serve']);

  // Task to build and copy docs over to publishing repo.
  //grunt.registerTask('publish', ['jekyll:prod', 'copy:main']);
  //grunt.loadNpmTasks('grunt-gh-pages');

};
