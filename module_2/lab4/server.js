var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    compression = require('compression'),
    morgan = require('morgan'),
    method_override = require('method-override'),
    response_time = require('response-time'),
    serveIndex = require('serve-index'),
    busboy = require('connect-busboy'),
    error_handler = require('errorhandler');

var app = express();

var access_log_stream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

app.set('view cache', true);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3030);

app.use(morgan('combined', {stream: access_log_stream}));

app.use(method_override('__method'));

app.use(response_time(4));

app.use(express.static(__dirname + '/public'));

app.use('/shared', serveIndex(
    path.join('public', 'shared'),
    {'icons': true}
));


app.delete('/delete-orders', function(request, response){
    console.log('Delete route');
    response.status(201).end();
});

app.get('/', function(request, response){
    response.send('Send information througth Middleware');
});
// test => curl http://localhost:3030/compression -i
app.get('/compression', function(request, response){

    response.render('index');
});


app.use('/upload', busboy({immediate: true}));



// curl -X POST -i -F filedata=@./public/cat.jpg http://localhost:3030/upload
app.use('/upload', function(request, response){

    request.busboy.on('file', function(fieldname, file, filename, encoding, mimetype){

        file.on('data', function(data){

            fs.createWriteStream(__dirname + '/public/upload/' + fieldname + filename, data);
        });

        file.on('end', function(){

            console.log('File' + filename + 'is finish');
        });
    });


    request.busboy.on('finish', function(){
        console.log('Ok file ;)');
        response.status(201).end();
    });
});



app.use(error_handler());

var server = app.listen(app.get('port'), function(){
    console.log('listen on '+ server.address().port);
});