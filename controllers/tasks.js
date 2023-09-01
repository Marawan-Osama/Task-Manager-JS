const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')

//Controller to Get all tasks
const getAllTasks = asyncWrapper( async (req,res)=>{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
})

//Controller to create a task
const createTask = asyncWrapper(async (req,res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

//Controller to get a particular task
const getTask = asyncWrapper(async (req,res)=>{
        const task = await Task.findOne({_id: req.params.id})
        if(!task){
            return res.status(404).json({msg: `No task with id: ${req.params.id}`})
        }
        res.status(200).json({task})
})

//Controller to update a task
const updateTask = asyncWrapper( async (req,res)=>{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!task){
            return res.status(404).json({msg: `No task with id: ${req.params.id}`})
        }
        res.send({task})
    })

const deleteTask = asyncWrapper(async (req,res)=>{
        const task = await Task.findOneAndDelete({_id: req.params.id})
        if(!task){
            return res.status(404).json({msg: `No task with id: ${req.params.id}`})
        }
        res.status(200).json({task})
    })

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}