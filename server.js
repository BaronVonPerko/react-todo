// server.js

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var Todo        = require('./app/models/todo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://reactuser:password@ds151059.mlab.com:51059/react_todo');

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'API' });
});

router.route('/todo')
    .post((req, res) => {
        var todo = new Todo();

        todo.text = req.body.text;
        todo.description = req.body.description;

        todo.save((err) => {
            if(err) {
                res.send(err);
            }

            res.json({message: 'Todo Created'});
        });
    })

    .get((req, res) => {
        Todo.find((err, todos) => {
            if(err) {
                res.send(err);
            }

            res.json(todos);
        });
    });

app.use('/api', router);

app.listen(port);
console.log('API running on port ' + port);