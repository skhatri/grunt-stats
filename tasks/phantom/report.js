var sys = require('system'),
	page = require('webpage').create(),
	id = String(sys.args[1]),
	name = String(sys.args[2]),
	time = String(sys.args[3]),
	size = Number(sys.args[4]);

page.open('http://dev.t32k.me/', function () {
	page.includeJs('http://www.google-analytics.com/ga.js', function () {
		page.evaluate(function (id, name, time, size) {
			_gaq.push(
				['_setAccount', id],
				['_trackEvent', 'grunt-stats', name, time, size, true]
			);
		}, id, name, time, size);
	});
});

setTimeout(function () {
	phantom.exit();
}, 500);