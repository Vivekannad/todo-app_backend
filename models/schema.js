const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const todo = mongoose.Schema({
    todo : String,
    id : {
        type: String ,
        unique: false
    }
})

const todoModal = mongoose.model("todo",todo);

module.exports = todoModal