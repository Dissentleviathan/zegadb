// (1) 
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// (3)
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

    // jika error
    db.on('error', console.error.bind(console, 'Error Establishing a Database Connection?'))

    // jika success
    db.once('open', () => {
       console.log('Database is connected');
    })

// (2) 
app.listen(process.env.PORT, () => {
    
    console.log(`Server running on ${process.env.PORT}`);

})