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

module.exports = router