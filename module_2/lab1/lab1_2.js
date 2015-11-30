var http = require('http'),
    path = require('path');

var pages = [
    {route: '', output: 'Hello lab1_2'},
    {route: 'about', output: 'lorem ipsum'},
    {route: 'another', output: function(){ return 'Esto es ' + this.route;}}
];

http.createServer(function(request, response){

    var look = path.basename(decodeURI(request.url));

    pages.forEach(function(page){

        if(page.route === look){
             response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(typeof page.output === 'function' ? page.output() : page.output);
        }

    });

    if(!response.finished){
        response.writeHead(404);
        response.end('Pagina no disponible');
    }
}).listen(7070);

