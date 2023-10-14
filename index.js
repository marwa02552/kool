const express = require('express')
const app=express()
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port=process.env.PORT
const DataBase=process.env.MONGODBURL

mongoose.connect(DataBase).then(()=>{
    console.log('connect to mongodb databse')
}).catch((err)=>{
    console.log(err)
})

const User=require('./Routes/userRoute')
app.use('/user',User)

app.listen(3000,()=>{
    console.log(`app in runnig on ${port}`)
})