const mongoose = require("mongoose");


// Mongoose Schema and Model
const todoSchema = mongoose.Schema({
    title: {type: String, required: true},
    desc: String,
}, {timestamps: true}); // timestamps will create createdAt and updatedAt fields

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;