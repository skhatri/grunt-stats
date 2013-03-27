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
		path = require('path'),
		cp = require('child_process'),
		moment = require('moment'),
		phantom = require('phantomjs'),
		binPath = phantom.path;

	// Tasks
	// ==========================================================================
	grunt.registerMultiTask('stats', 'Statics of static files', function () {

		var done = this.async(),
			files = this.filesSrc,
			opts = this.options({
				ga_id: false,
				total: false
			});

		if (!opts.ga_id) {
			grunt.log.error('Google Analytics ID is REQUIRED.');
			return false;
		}

		files.forEach(function (filepath) {

			var stat = fs.statSync(filepath);
			var time = moment(stat.mtime).format('"YYYY-MM-DD-HH:mm');

			// grunt.log.writeln(filepath);
			// grunt.log.writeln(stat.size);
			// grunt.log.writeln(time);

			postGA(opts.ga_id, filepath, time, stat.size);
		});

	});

	// Helper
	// ==========================================================================

	/* *
	 * Post data to Google Analytics
	 * @param {String} id
	 * @param {String} name
	 * @param {String} time
	 * @param {Number} size
	 */
	var postGA = function (id, name, time, size) {

		var childArgs = [
			path.join(__dirname, 'phantom/report.js'), id, name, time, size
		];
		cp.execFile(binPath, childArgs, function (err, stdout, stderr) {
			grunt.log.error('err: ' + err);
			grunt.log.writeln('stdout: ' + stdout);
			grunt.log.writeln('stderr: ' + stderr);
		});
	};
};