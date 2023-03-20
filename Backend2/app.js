const express = require('express');
const mongoose = require('mongoose');
const formRoutes = require('./routes/form-routes');
const userRoutes = require('./routes/user-routes')

// const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://lingziyan2015:lingziyaninternship@cluster0.q0gylm5.mongodb.net/?retryWrites=true&w=majority"

const app = express();
app.use(express.json())

async function connect(){
    try{
        await mongoose.connect(url);
        console.log('Connected to mongodb')
    } catch (e) {
        console.log(e);
    }
}

connect();

app.use(formRoutes);
app.use(userRoutes);


app.listen(5000, () => {
    console.log("server up on 5000")
})

