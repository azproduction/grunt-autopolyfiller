/*global describe, it, beforeEach, afterEach*/
/*jshint expr:true*/

var expect = require('chai').expect,
    readFile = require('fs').readFileSync;

describe('grunt-autopolyfiller', function () {
    it('generates polyfills for all browsers', function () {
        var polyfills = readFile('./tmp/for_all_browsers.js');

        expect(polyfills).to.match(/Array\.prototype\.map/);
        expect(polyfills).to.match(/Object\.keys/);
        expect(polyfills).to.match(/String\.prototype\.trim/);
        expect(polyfills).to.match(/Promise/);
    });

    it('generates polyfills for specific browsers', function () {
        var polyfills = readFile('./tmp/for_custom_browsers.js');

        expect(polyfills).to.not.match(/Array\.prototype\.map/);
        expect(polyfills).to.not.match(/Object\.keys/);
        expect(polyfills).to.not.match(/String\.prototype\.trim/);
        expect(polyfills).to.match(/Promise/);
    });

    it('includes extra polyfills', function () {
        var polyfills = readFile('./tmp/include_polyfills.js');

        expect(polyfills).to.match(/Array\.prototype\.map/);
        expect(polyfills).to.match(/Object\.keys/);
        expect(polyfills).to.match(/String\.prototype\.trim/);
        expect(polyfills).to.match(/Promise/);
        expect(polyfills).to.match(/Array\.prototype\.forEach/);
    });

    it('excludes optional polyfills', function () {
        var polyfills = readFile('./tmp/exclude_polyfills.js');

        expect(polyfills).to.match(/Array\.prototype\.map/);
        expect(polyfills).to.match(/Object\.keys/);
        expect(polyfills).to.not.match(/String\.prototype\.trim/);
        expect(polyfills).to.not.match(/Promise/);
    });
});
