// server.js

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var Todo        = require('./models/todo');
var List        = require('./models/list');
var routes      = require('./routes');
var cors        = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/react_todo');

var port = process.env.PORT || 8080;

var router = express.Router();

app.use('/api', routes);

app.listen(port);
console.log('API running on port ' + port);