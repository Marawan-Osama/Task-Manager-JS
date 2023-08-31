const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [20, "Max name length is 20 characters"],
    } , 
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('task', TaskSchema)