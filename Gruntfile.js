/*
 * grunt-autopolyfiller
 * https://github.com/azproduction/grunt-autopolyfiller
 *
 * Copyright (c) 2014 Mikhail Davydov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // load all npm grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'test/test.*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        autopolyfiller: {
            for_all_browsers: {
                files: {
                    'tmp/for_all_browsers.js': [
                        'test/fixtures/*.js'
                    ]
                }
            },
            for_custom_browsers: {
                options: {
                    browsers: ['Chrome 30']
                },
                files: {
                    'tmp/for_custom_browsers.js': [
                        'test/fixtures/*.js'
                    ]
                }
            }
        },

        // Unit tests.
        mochaTest: {
            'grunt-autopolyfiller': {
                options: {
                    reporter: 'spec'
                },
                src: ['test/test.*.js']
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'autopolyfiller', 'mochaTest']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
