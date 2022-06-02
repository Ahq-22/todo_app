var mongoose = require('mongoose');
//                                  DataName
var mongoDB = 'mongodb://127.0.0.1/todo';
const express = require('express');
const app = express()
app.use(express.json())
//                           modelName
const User = require('./model/users');

mongoose.connect(mongoDB, 
  {useNewUrlParser: true, useUnifiedTopology: true}
  ,()=>{
    console.log('data base on...');
  });
  
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('connected',()=>{
  console.log('mongoDB is connected');
})

// write code Here 

app.get('/all',(req,res)=>{
  res.json('get all')
})

app.post('/create',(req,res)=>{
  res.json('created new user sucssfuly')
})
// end
app.listen(3000 ,()=>{
  console.log('Server on');
});
