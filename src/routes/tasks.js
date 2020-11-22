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
    console.log('req.body')
    console.log(req.body)
    const task = new Task(req.body) // SOLO TITULO NECESITA
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

// put task ORIGINAL 
// router.put('/:id', async (req, res) => {
//     await Task.findByIdAndUpdate(req.params.id, req.body)
//     res.json({
//         status: "Task updated"
//     });
// });

// nuevo
router.put('/:id', (req, res) => {
    console.log('req.params.id')
    console.log(req.params.id)
    console.log('req.body')
    console.log(req.body)
    Task
    .findByIdAndUpdate(req.params.id, req.body)
    .then(doc => {
        res.json({ status: "Task updated", success: true, data: doc })
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({ error: err });
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