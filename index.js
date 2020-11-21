// backend

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const cors = require('cors')

const dotenv = require("dotenv");
dotenv.config();

const app = express();

// settings 
app.set('port', process.env.PORT || 3000)

// MONGO
const uri = process.env.URI_MONGO;
mongoose.connect(uri, 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to Mongo')
})


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes 
app.use('/tasks', require('./src/routes/tasks'))

// static files
app.use(express.static(__dirname + '/public'))



// server is listening
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'))
})