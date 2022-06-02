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
  User.find({},(err,data)=>{
    if(err){
      console.log('ERR :',err);
    }else{
      res.json(data)
    }
  })
})

app.post('/create/:title/:completed',(req,res)=>{
  User.create({title:req.params.title,isCompleted:req.params.completed},(err)=>{
    if(err){
      console.log('ERR:',err)
    }else{
      res.json('created new user sucssfuly')
    }
  })
})
  
app.delete('/delete/:id',(req,res)=>{
  User.findByIdAndDelete({_id : req.params.id},(err)=>{
    if(err){
      console.log(err)
    }else{
      res.json('delete one')
    }
  })
})

app.put('/ubdete/:id' , (req,res)=>{
  User.findByIdAndUpdate({_id:req.params.id},{$set:{isCompleted:true}},(err)=>{
    if(err){
      console.log('ERR:',err)
    }else{
      res.json('complet Task')
    }
  })
})

// end
app.listen(3000 ,()=>{
  console.log('Server on');
});
