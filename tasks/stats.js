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

	var fs = require('fs'),
		cp = require('child_process'),
		path = require('path'),
		async = require('async'),
		moment = require('moment'),
		phantom = require('phantomjs'),
		binPath = phantom.path;

	// Tasks
	// -----------------------------------------------------------------------
	grunt.registerMultiTask('stats', 'Statics of static files', function () {

		var done = this.async(),
			files = this.filesSrc,
			opts = this.options({
				gaid: false,
				total: false
			});

		if (!opts.gaid) {
			grunt.log.error('Google Analytics ID is REQUIRED.');
			return false;
		}

		async.each(files, function(filename, next) {
			var stat = fs.statSync(filename);
			var time = moment(stat.mtime).format('YYYY-MM-DD-HH:mm');

			var childArgs = [
				path.join(__dirname, 'phantom/report.js'), opts.gaid, filename, time, stat.size
			];

			cp.execFile(binPath, childArgs, function (err, stdout, stderr) {
				if(!err === null) {
					grunt.log.error('ERROR: ' + err);
				} else {
					grunt.log.ok('Data sent: ' + filename + ' is ' + stat.size + 'bytes');
				}
				next();
			});
		}, done);
	});
};