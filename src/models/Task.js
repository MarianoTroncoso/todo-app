const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
    id: Number,
    title: String,
    done: Boolean
},
{
    timestamps: true
})

module.exports  = mongoose.model('Task', Task);



