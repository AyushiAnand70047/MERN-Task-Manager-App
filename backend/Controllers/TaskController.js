const TaskModel = require("../Models/TaskModel");

const createTask = async(req,res) => {
    const data = req.body;
    try{
        const model = new TaskModel(data);
        await model.save();
        res.status(200).json({message: 'task is created',success: true});
    }
    catch(err){
        res.status(500).json({message: 'Failed to create task',success: false});
    }
}

const fetchAllTasks = async(req,res) => {
    try{
        const data = await TaskModel.find({});
        res.status(200).json({message: 'All tasks fetched',success: true, data});
    }
    catch(err){
        res.status(500).json({message: 'error in fetching', success: false});
    }
}

const updateTaskById = async(req,res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const obj = { $set: {...body}};
        await TaskModel.findByIdAndUpdate(id,obj);
        res.status(200).json({message: "task updated", success: true});
    }
    catch(err){
        res.status(500).json({message: 'error in updating the data', success: false,err});
    }
}

const deleteTaskById = async(req,res) => {
    try{
        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200).json({message: 'data deleted successfully', success: true});
    }
    catch(err){
        res.status(500).json({message: 'errror in deleting the data', success: false});
    }
}

module.exports = {
    createTask,
    fetchAllTasks,
    updateTaskById,
    deleteTaskById
};