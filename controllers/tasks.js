const Task = require('../models/task')


//Controller to Get all tasks
const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

//Controller to create a task
const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}

//Controller to get a particular task
const getTask = async (req,res)=>{
    try {
        const task = await Task.findOne({_id: req.params.id})
        if(!task){
            return res.status(404).json({msg: `No task with id: ${req.params.id}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateTask = (req,res)=>{
    res.send('Updated task')
}

const deleteTask = (req,res)=>{
    res.send('Delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}