const express = require('express');
const router = express.Router();

const Task = require('../models/Task')

router.get('/', async (req, res) => {
    // res.send('api task is goes here')
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const task = new Task(req.body)
    await task.save();
    res.json({
        status: "Task saved"
    });
});

// // NO uso el id de mongo (ORIGINAL)
// router.put('/:id', async (req, res) => {

//     // obtengo el documento que quiero actualizar mediante el "id" (no "_id") 
//     const oldTask = await Task.find({"id": req.params.id})
//     console.log(oldTask[0]._id) 
        
//     await Task.findByIdAndUpdate(oldTask[0]._id, req.body)

//     res.json({
//         status: "Task updated"
//     });
// });

// NUEVO (ahora con el id de mongo)
router.put('/:id', async (req, res) => {
        
    await Task.findByIdAndUpdate(req.params.id, req.body)

    res.json({
        status: "Task updated"
    });
});

router.delete('/:id', async(req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: "Task deleted"
    });
})

module.exports = router