var express = require('express'),
     port = 3232;

var app = express();

app.get('/name/:user_name/:surname', function(request, response){

    console.log(request.params);

    response.status(200);
    response.set('Content-Type', 'text/html');
    response.end(
        '<html><body>' +
            '<h1>Hola ' + request.params.user_name + '</h1>'+
        '</body></html>'
    );
});

app.get('*', function(request, response){

    response.end('hello world');
});

app.listen(port, function(){

    console.log('listen on %s', port);
});


