var express = require('express');

var listController = require('./controllers/listController');
var todoController = require('./controllers/todoController');

const routes = express();

routes.post('/list', listController.post);
routes.get('/list', listController.getAll);

routes.post('/todo', todoController.post);
routes.post('/todo/markDone', todoController.markDone);
routes.get('/todo/:list_id', todoController.get);
routes.put('/todo/:todo_id', todoController.update);
routes.delete('/todo/:todo_id', todoController.delete);

module.exports = routes;