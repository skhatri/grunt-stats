var page = require('webpage').create();
page.open('http://dev.t32k.me/', function () {
    page.includeJs("http://www.google-analytics.com/ga.js", function () {
        page.evaluate(function () {
            _gaq.push(
                ['_setAccount', 'UA-2317436-26'],
                ['_trackEvent', 'Stats', 'hoge.png', '2012-3-33', 124, true]
            );
        });
    });
});

setTimeout(function () {
    phantom.exit();
}, 5000);