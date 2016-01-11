var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require('./config/config')

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extend: true}));
app.use(methodOverride('X-HTTP-Method=Override'));
app.use(express.static(__dirname + '/client'));
require('./server/routes')(app);

app.listen(port);

console.log('Meet me at the port...its going down' + port);

exports = module.exports = app;