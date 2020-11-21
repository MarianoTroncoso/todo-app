const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
    // no borro definitivamente el id por si lo necesito en los metodos que lo usan
    // id: Number,
    title: String,
    done: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})

module.exports  = mongoose.model('Task', Task);



