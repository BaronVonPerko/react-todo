var Todo = require('./../models/todo');

const todoController = {};

todoController.post = (req, res) => {
    var todo = new Todo();

    todo.text = req.body.text;
    todo.description = req.body.description;
    todo._list = req.body.list_id;
    
    todo.save().then((newTodo) => {
        return res.status(200).json({
            success: true,
            data: newTodo
        })
    }).catch((err) => {
        return res.status(500).json({
            message: err
        });
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

todoController.markDone = (req, res) => {
    Todo.findById(req.body.todo_id, (err, todo) => {
        if(err) {
            res.send(err);
            return;
        }

        todo.isComplete = true;
        
        todo.save().then((todo) => {
            return res.status(200).json({
                success: true,
                data: todo
            })
        }).catch((err) => {
            return res.status(500).json({
                message: err
            });
        });
    });
}

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
