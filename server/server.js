// server.js

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var Todo        = require('./models/todo');
var List        = require('./models/list');
var routes      = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://reactuser:password@ds151059.mlab.com:51059/react_todo');

var port = process.env.PORT || 8080;

var router = express.Router();

app.use('/api', routes);

app.listen(port);
console.log('API running on port ' + port);