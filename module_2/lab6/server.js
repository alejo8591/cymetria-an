var express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    consolidate = require('consolidate'),
    fs = require('fs'),
    swig = require('swig'),
    error_handler = require('errorhandler');

var app = express();

var access_log_stream = fs.createWriteStream(__dirname + '/access.log',{flags: 'a'});

app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));


app.set('port', process.env.PORT || 3000);

app.use(morgan('combined', { stream: access_log_stream }));

var users = {
    'alrock': {
        'email': 'hi@alrock.co',
        'website': 'http://alrock.co',
        'blog': 'http://alrockblog.co'
    }
};


var findUserByUsername = function(username, callback){

    if(!users[username]) return callback(new Error('No user ' + username));

    return callback(null, users[username]);
};

/* First Part */
app.get('/v1/users/:username', function(request, response, next) {
    var username = request.params.username;
    findUserByUsername(username, function(error, user) {
        if(error) return next(error);

        console.log(user);
        return response.render('index', user);
    });
});

app.get('/v1/admin/:username', function(request, response, next) {
    var username = request.params.username;
    findUserByUsername(username, function(error, user) {
        if (error) return next(error);
        return response.render('admin', user);
    });
});


app.use(error_handler());

var server = app.listen(app.get('port'), function(){
    console.log('Listen on: ' + server.address().port);
});