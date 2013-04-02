'use strict';

var grunt = require('grunt');
var fs = require('fs');

exports.stats = {
  main: function (test) {
    test.expect(3);

    var actual = 70;
    var expected = fs.statSync('test/fixtures/foo.css').size;
    test.equal(actual, expected, 'CSS file size should be accurately measured.');

    actual = 64;
    expected = fs.statSync('test/fixtures/bar.js').size;
    test.equal(actual, expected, 'JavaScript file size should be accurately measured.');

    actual = 844;
    expected = fs.statSync('test/fixtures/baz.png').size;
    test.equal(actual, expected, 'PNG file size should be accurately measured.');

    test.done();
  }
};