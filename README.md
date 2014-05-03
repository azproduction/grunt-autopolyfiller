# grunt-autopolyfiller

[![NPM Version](https://badge.fury.io/js/grunt-autopolyfiller.png)](https://npmjs.org/package/grunt-autopolyfiller) [![Build Status](https://travis-ci.org/azproduction/grunt-autopolyfiller.png?branch=master)](https://travis-ci.org/azproduction/grunt-autopolyfiller) [![Dependency Status](https://gemnasium.com/azproduction/grunt-autopolyfiller.png)](https://gemnasium.com/azproduction/grunt-autopolyfiller)

Autopolyfiller - Precise polyfills. Automatic and minimal polyfills for your code.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-autopolyfiller --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-autopolyfiller');
```

## The "autopolyfiller" task

### Overview
In your project's Gruntfile, add a section named `autopolyfiller` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    autopolyfiller: {
        options: {
            browsers: ['Chrome 7']
        },
        your_target: {
            'result_polyfill_file.js': ['list/of/your/**/*.js']
        }
    }
});
```

### Options

#### options.browsers
Type: `Array`
Default value: `[]` - all browsers

#### options.include
Type: `Array`
Default value: `[]` - list of extra polyfills to add

#### options.exclude
Type: `Array`
Default value: `[]` - list of polyfills to remove

List of target browsers. Autopolyfiller uses Autoprefixer-style browsers format.
See [Browsers format](https://github.com/ai/autoprefixer#browsers) for details.

### Usage Examples

#### Multiply polyfills

By default `autopolyfiller` will generate polyfills for all browsers.

```js
grunt.initConfig({
    autopolyfiller: {
        for_all_browsers: {
            files: {
                'www/file_with_all_polyfills.js': ['your/js/**/*.js'],
                'www/another_polyfills.js': ['some/js/**/*.js'],
            }
        }
    }
});
```

#### Browsers targets

You can specify list of target browsers to reduce amount of polyfills.

```js
grunt.initConfig({
    autopolyfiller: {
        latest_browsers_and_ie: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },
            files: {
                'www/file_with_all_polyfills.js': ['your/js/**/*.js']
            }
        }
    }
});
```

#### Default browsers of Autoprefixer

```js
grunt.initConfig({
    autopolyfiller: {
        for_default_autoprefixer_browsers: {
            options: {
                browsers: require('autoprefixer').default
            },
            files: {
                'www/file_with_all_polyfills.js': ['your/js/**/*.js']
            }
        }
    }
});
```

#### Removing polyfills

```js
grunt.initConfig({
    autopolyfiller: {
        without_promise_polyfill: {
            options: {
                exclude: ['Promise']
            },
            files: {
                'www/file_with_all_polyfills.js': ['your/js/**/*.js']
            }
        }
    }
});
```

## License
Copyright (c) 2014 Mikhail Davydov. Licensed under the MIT license.
