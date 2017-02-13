var Todo = require('./../models/todo');

const todoController = {};

todoController.post = (req, res) => {
    var todo = new Todo();

    todo.text = req.body.text;
    todo.description = req.body.description;
    todo._list = req.body.list_id;
    
    todo.save((err) => {
        if(err) {
            res.send(err);
        }

        res.json({message: 'Todo Created'});
    });
};

todoController.get = (req, res) => {
    Todo.find({ _list: req.params.list_id }, (err, todo) => {
        if(err) {
            res.send(err);
        }

        res.json(todo);
    });
};

todoController.update = (req, res) => {
    Todo.findById(req.params.todo_id, (err, todo) => {
        if(err) {
            res.send(err);
        }

        todo.text = req.body.text;
        todo.description = req.body.description;

        todo.save((err) => {
            if(err) {
                res.send(err);
            }

            res.json({message: 'Todo Updated'});
        });
    });
};

todoController.delete = (req, res) => {
    Todo.remove({
        _id: req.params.todo_id
    }, (err, todo) => {
        if(err) {
            res.send(err);
        }

        res.json({message: 'Deleted'});
    });
};

module.exports = todoController;
