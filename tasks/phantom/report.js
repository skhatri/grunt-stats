var system = require('system'),
	page = require('webpage').create();

var utm = 'http://www.google-analytics.com/__utm.gif',
	etc = '?utmwv=0&utmhn=en.t32k.me&utmt=event&utmcs=UTF-8&utmul=en-us&utmr=-&utmp=-&utmni=1',
	utmac = system.args[1],
	utme = '5(iekara*' + system.args[2] + '*' + system.args[3] + ')(' + system.args[4] + ')',
	utmn = Math.floor(Math.random() * 100000);

var url = utm + etc + '&utmac=' + utmac + '&utme=' + utme + '&utmn=' + utmn;

console.log(url);

page.open(url, function () {
	phantom.exit();
});