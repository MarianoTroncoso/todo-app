const express = require('express');
const router = express.Router();

const Task = require('../models/Task')

// get tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// post task
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

router.put('/:id', (req, res) => {
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