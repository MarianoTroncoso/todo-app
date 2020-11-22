const express = require('express');
const router = express.Router();

const Task = require('../models/Task')

// get tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// post task ORIGINAL 
// router.post('/', async (req, res) => {
//     const task = new Task(req.body)
//     await task.save();
//     res.json({
//         status: "Task saved"
//     })
// });

router.post('/', (req, res) => {
    const task = new Task(req.body)
    task
        .save()
        .then(doc => {
            res.json({ success: true, data: doc })
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ error: err });
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
// put task
router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: "Task updated"
    });
});

// delete task
router.delete('/:id', async(req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: "Task deleted"
    });
})

module.exports = router