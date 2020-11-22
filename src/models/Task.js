const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
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



