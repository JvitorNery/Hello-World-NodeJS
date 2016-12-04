var http = require('http')
    , url = require('url');

http.createServer(function (req, res) {
    var result = url.parse(req.url, true);

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<html><head><title>Be Mean</title></head><body>');
    res.write('<h3>Be Mean</h3>');
    res.write('<h1>Query String</h1>');
    res.write('<ul>');

    console.log(result.query);
    for (var i in result.query) {
        res.write('<li>' + i + ':' + result.query[i] + '</li>');
    }
    res.write('</ul>');
    res.write('</body></html>');
    res.end();
}).listen(3000, function () {
    console.log('server em localhost:3000');
});
