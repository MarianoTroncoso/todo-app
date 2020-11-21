// backend

const express = require('express');
const morgan = require('morgan');
// const mongoose = require('mongoose');

const app = express();

// settings 
app.set('port', process.env.PORT || 3000)


// middlewares
app.use(morgan('dev'));
app.use(express.json())

// routes 
app.use('/tasks', require('./src/routes/tasks'))

// static files
app.use(express.static(__dirname + '/public'))



// server is listening
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'))
})