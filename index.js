//require express
const express = require('express')
const app = express()

//use express
app.use(express.urlencoded({ extended: false }));

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree')

//shortcut to the mongoose connection
const db = mongoose.connection;
db.once('open', ()=>{
    //printing what host and port youre on for mongodb
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
})

//logs errs on the database
db.on('error', (err)=>{
    console.log(`Database Error:${err}`);
})

//home route
app.get('/', (req,res)=>{
    res.send('Mongoose')
})

//port for app an listen
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`Listening to ${PORT}`);
})