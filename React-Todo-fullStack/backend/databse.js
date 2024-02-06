const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rahulptl556:Pzc2kBvfn6KrhRkq@cluster0.syubs5r.mongodb.net/');

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}