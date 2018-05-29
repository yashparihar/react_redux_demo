var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8081);
// function sum(a,b) { return a+b; }

// console.log(sum(4,5));
