var product = {
    name: 'Node.JS for peolple',
    publisher: 'La oveja negra',
    discount: 'ASD13',
    type: 'book',
    amount: '34555934'
};

var express = require('express'),
    path = require('path');

var app = express();

console.log(app.get('env'));

app.set('view cache', true);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 4545);

app.set('trust proxy', true);
app.set('json replacer', function(key, value){

    if(key === 'type'){
        return undefined;
    } else {
        return value;
    }
});

app.set('json space', 4);

app.set('case sensitive routing', true);
app.set('strict routing', true);
app.set('x-powered-by', false);

app.get('/json', function(request, response){
    response.send(product);
});

app.get('/users', function(request, response){
    response.send('users');
});

app.get('/Users/', function(request, response){
    response.send('Users/');
});

app.get('*', function(request, response){
    response.send('COnfiguraciones sobre expressJS');
});

var server = app.listen(app.get('port'), function(){
    console.log('listening ' + server.address().port);
});

