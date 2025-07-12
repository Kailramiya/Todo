const Todo = require('../models/Todo');

exports.createTodoItem = async (req, res) => {
    const { task, date } = req.body;
    const todoItem =new Todo({
        task,
        date: date ? new Date(date) : undefined, // Convert to Date object if provided
    });
    await todoItem.save();
    res.status(201).json({ message: 'Todo item created successfully', todoItem });
}
exports.getTodoItems = async (req, res) => {
    const todoItems = await Todo.find();
    res.status(200).json(todoItems);
}

exports.deleteTodoItem = async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({_id:id}); // Return the deleted item's ID
}

exports.markCompleted = async (req, res) => {
    const { id } = req.params;
    const todoItem = await Todo.findById(id);
    todoItem.completed = true;
    await todoItem.save();
    
    res.status(200).json(todoItem);
}

