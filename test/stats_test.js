'use strict';

var grunt = require('grunt');

exports.stats = {
  main: function (test) {
    test.expect(1);

    //var expect = grunt.file.read('test/expected/output.css');
    //var result = grunt.file.read('tmp/output.css');
    test.equal(expect, result, 'should...');

    test.done();
  }
};