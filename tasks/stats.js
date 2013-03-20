/*
 * grunt-stats
 * http://github.com/t32k/grunt-stats
 * http://en.t32k.me
 *
 * Copyright (c) 2013 Koji Ishimoto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
	var fs = require('fs');//
	var bytes = require('bytes');
	var moment = require('moment');

	//var stat = fs.statSync('hoge.js');
//
	//console.log('Size: ' + stat.size);
	//console.log('Time: ' + stat.mtime);
//
	//var hoge = moment(stat.mtime).format('dddd');
	//console.log(hoge);
	//console.log(bytes(stat.size));

	grunt.registerMultiTask('stats', 'Statics of Static files', function() {

		this.files.forEach(function(f) {
		  var max = f.src.filter(function(filepath) {
		    // Warn on and remove invalid source files (if nonull was set).
		    if (!grunt.file.exists(filepath)) {
		      grunt.log.warn('Source file "' + filepath + '" not found.');
		      return false;
		    } else {
		      return true;
		    }
		  })
		  .map(grunt.file.read)
		  .join(grunt.util.normalizelf(grunt.util.linefeed));


		});

		grunt.log.write('hogegegegeeg');
	});

	var measureSize;
};