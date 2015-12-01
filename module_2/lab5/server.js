var express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    error_handler = require('errorhandler'),
    jade = require('jade'),
    fs = require('fs'),
    consolidate = require('consolidate');


var app = express();

var access_log_stream = fs.createWriteStream(__dirname + 'access.log', {flag: 'a'});

app.engine('html', jade.__express);
app.engine('template', jade.__express);
app.engine('swig', consolidate.swig);

app.set('port', process.env.PORT || 3333);

app.use(morgan('combined', {stream: access_log_stream}));

app.use(express.static('public'));

app.get('/', function(request, response){

    response.render('index.html');
});

app.get('/template', function(request, response){

    response.render('index.template');
});


app.get('/swig', function(request, response){

    response.render('index.swig');
});

app.use(error_handler());

var server = app.listen(app.get('port'), function(){
    console.log('listen on: ' + server.address().port);
});

