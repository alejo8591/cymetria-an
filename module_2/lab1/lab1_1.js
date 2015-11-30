var http = require('http');

http.createServer(function(request, response){

	response.writeHead(200, {'Content-Type': 'text/html'});

	response.end('Lab1_1');

}).listen(8282);