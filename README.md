# grunt-stats [![Build Status](https://secure.travis-ci.org/t32k/grunt-stats.png?branch=master)](http://travis-ci.org/t32k/grunt-stats) [![NPM version](https://badge.fury.io/js/grunt-stats.png)](http://badge.fury.io/js/grunt-stats)

> Statics of static files using Google Analytics.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-stats --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stats');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-cssmin/tree/grunt-0.3-stable).*


## Stats task
_Run this task with the `grunt stats` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

Files are reported with [Google Analytics](http://www.google.com/analytics/).

### Options

#### gaid (required)

Type: `String`

#### item_name (plan)

Type: `String` Default: file path

#### total (plan)

Type: `Boolean` Default: 'false'


### Usage Examples

#### Example config

```javascript
grunt.initConfig({
  stats: {
    dist: {
      options: {              
        gaid: 'UA-XXXXX-X' // Required
      }
      src:  ['assets/css/*.css']
    }
  }
});

grunt.loadNpmTasks('grunt-stats');

grunt.registerTask('default', ['stats']);
```

## Google Analytics

### [Event Tracking - Web Tracking (ga.js)](https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide)

`_gaq.push(['_trackEvent', 'grunt-stats', 'FILE_NAME', 'DATE', SIZE, true]);`

`_trackEvent(category, action, opt_label, opt_value, opt_noninteraction)`


# Release History

+ 2013/04/02 - v0.1.0 - β-release.


# LICENSE MIT

Copyright (c) 2013 Koji Ishimoto

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
