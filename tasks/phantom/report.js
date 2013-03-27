// 'UA-2317436-26',
var page	= require('webpage').create(),
	system 	= require('system');

var g_path	= 'http://www.google-analytics.com/__utm.gif',
	param	= '?utmwv=0&utmhn=en.t32k.me&utmt=event&utmcs=UTF-8&utmul=en-us&utmr=-&utmp=-&utmni=1',
	utmac	= system.args[1],
	utme	= '5(Final*'+ system.args[2] + '*' + system.args[3] + ')(' + system.args[4] + ')',
	utmn 	= Math.floor(Math.random()*100000);

var url 	= g_path + param +  '&utmac=' + utmac + '&utme=' + utme + '&utmn=' + utmn;

console.log(url);

page.open(url, function () { phantom.exit(); });