/*
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    'use strict';
    response.send('Hello World Domination!!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    'use strict';
    console.log("Listening on " + port);
});
*/

var http = require('http');
var port = process.env.PORT || 3000;
http.createServer(function (req, res) {
  'use strict';
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello, World Domination\n');
}).listen(port);
