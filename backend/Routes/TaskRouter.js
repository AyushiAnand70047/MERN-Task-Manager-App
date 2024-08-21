const { createTask, fetchAllTasks, updateTaskById, deleteTaskById } = require('../Controllers/TaskController');

const router = require('express').Router();

// to get all the tasks
// router.get('/',(req,res)=>{
//     res.send("All tasks")
// })

// to create task
router.post('/',createTask);

// to fetch all tasks
router.get('/',fetchAllTasks);

// to update a task
router.put('/:id',updateTaskById);

// to delete a task
router.delete('/:id',deleteTaskById);

module.exports = router;