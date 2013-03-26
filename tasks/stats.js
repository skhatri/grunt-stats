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
	var fs = require('fs');
	var moment = require('moment');

	grunt.registerMultiTask('stats', 'Statics of static files', function() {

		var files = this.filesSrc;

		files.forEach(function(filepath) {

			var stat = fs.statSync(filepath);
			var time = moment(stat.mtime).format('"YYYY-MM-DD-HH:mm');
			
			grunt.log.writeln(stat.size);
			grunt.log.writeln(time);

		});

		grunt.log.ok('Files : ' + files.length);

	});

};