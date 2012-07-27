var http = require('http');
var port = process.env.PORT || 3000;
http.createServer(function (req, res) {
  'use strict';
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Rob')
}).listen(port);
