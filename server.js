var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.get('*', function(req, res){
  res.sendFile('./public/index.html');
});
var port = 2323;

app.listen(port);
console.log('coconet server started on port '+port);