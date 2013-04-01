'use strict';

var grunt = require('grunt');

exports.stats = {
  main: function (test) {
    test.expect(3);


    var CSS = 70;
    var JS = 64;
    var PNG = 844;
    test.equal(CSS, 70, 'should ...');
    test.equal(JS, 64, 'should ...');
    test.equal(PNG, 844, 'should ...');

    test.done();
  }
};