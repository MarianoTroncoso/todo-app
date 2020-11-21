const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('api task is goes here')
})

module.exports = router