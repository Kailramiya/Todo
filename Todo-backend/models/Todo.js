const mongoose= require('mongoose');
// const { use } = require('react');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true
    },
    date : {
        type: Date,
        
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt : {
        type: Date,
        default: Date.now
    },

    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
},{timestamps: true});
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;

