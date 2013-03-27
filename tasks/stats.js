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

	var fs 		= require('fs'),
		path 	= require('path'),
		cp 		= require('child_process'),
		moment 	= require('moment'),
		phantom = require('phantomjs'),
		binPath = phantom.path;

	// Tasks
	// ==========================================================================
	grunt.registerMultiTask('stats', 'Statics of static files', function() {

		var done = this.async();

		var options = this.options({
		  ga_id: false,
		  total: false
		});

		if (!options.ga_id) {
			grunt.log.error('Google Analytics ID is REQUIRED.');
			return false;
		}

		var files = this.filesSrc;

		files.forEach(function(filepath) {

			var stat = fs.statSync(filepath);
			var time = moment(stat.mtime).format('"YYYY-MM-DD-HH:mm');
			
			grunt.log.writeln(filepath);
			grunt.log.writeln(stat.size);
			grunt.log.writeln(time);

			postGA(options.ga_id, filepath, time, stat.size );
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
	var postGA = function( id, name, time, size ) {
		grunt.log.writeln(binPath);

		var childArgs = [
		  path.join(__dirname, 'phantom/report.js'), id, name, time, size
		];
		grunt.log.writeln(childArgs);
		cp.execFile(binPath, childArgs, function(err, stdout, stderr) {
		  	grunt.log.error('err: '+err);
		  	grunt.log.ok('stdout: '+stdout);
		  	grunt.log.error('stderr: '+stderr);
		});

	};
};