var http = require('http');

var pages = [
    {route: '/', output: 'Lab1_·'},
    {route: '/about/this', output: 'Routing del tipo multinivel'},
    {route: '/about/node', output:'Node se encuentra en su version 4.2.2 porque integra io.js'},
    {route: '/other page', output: function(){return 'Esto es: ' + this.route;}}
];

http.createServer(function(request, response){
    var look = decodeURI(request.url);

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
}
).listen(7575);