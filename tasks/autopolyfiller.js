/*
 * grunt-autopolyfiller
 * https://github.com/azproduction/grunt-autopolyfiller
 *
 * Copyright (c) 2014 Mikhail Davydov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('autopolyfiller', 'Automatic polyfills', function () {
        var autopolyfiller = require('autopolyfiller');

        // Default options
        var options = this.options({
            browsers: [],
            include: [],
            exclude: []
        });

        // Iterate over all specified file groups.
        this.files.forEach(function (file) {
            var polyfiller = autopolyfiller(options.browsers)
                .include(options.include)
                .exclude(options.exclude);

            file.src
                .filter(function (filepath) {
                    if (!grunt.file.exists(filepath)) {
                        grunt.log.warn('Source file "' + filepath + '" not found.');
                        return false;
                    } else {
                        return true;
                    }
                })
                .forEach(function (filepath) {
                    // Read file source.
                    polyfiller.add(grunt.file.read(filepath));
                });

            // Write the destination file.
            grunt.file.write(file.dest, polyfiller.toString());

            // Print a success message.
            grunt.log.writeln('File "' + file.dest + '" created.');
        });
    });

};
