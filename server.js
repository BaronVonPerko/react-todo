// server.js

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://reactuser:password@ds151059.mlab.com:51059/react_todo');

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'test' });
});

app.use('/api', router);

app.listen(port);
console.log('API running on port ' + port);