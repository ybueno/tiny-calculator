var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

var routes = require('./routes/index');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// support body-parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
