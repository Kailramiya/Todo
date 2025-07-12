const express = require('express');
const todoController = require('../controllers/todoController');

const todoRouter = express.Router();

todoRouter.post('/', todoController.createTodoItem);
todoRouter.get('/', todoController.getTodoItems);
todoRouter.delete('/:id', todoController.deleteTodoItem);
todoRouter.put('/:id/completed', todoController.markCompleted);


module.exports = todoRouter;