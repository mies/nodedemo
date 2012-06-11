require('http').createServer(function (request, response) {
  'use strict';
  response.writeHead(200, {"Content-Type": "text/plain"});
  var output = "Hello World!\n";
  for (k in request.headers) {
    output += k + '=' + request.headers[k] + '\n';
  }
  response.end(output);
}).listen(8080);