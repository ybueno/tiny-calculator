
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var routes = require('./routes/index');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// support body-parser
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
