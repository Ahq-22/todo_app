var mongoose = require('mongoose');
var cors = require('cors');
//                                  DataName
var mongoDB = 'mongodb://127.0.0.1/todo';
const express = require('express');
const app = express()
app.use(express.json())
app.use(cors());
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

app.post('/create',(req,res)=>{
  User.create({title:req.body.title ,isCompleted: false},(err)=>{
    if(err){
      console.log('ERR:',err)
    }else{
      res.json(req.body.title)
    }
  })
})

  
app.delete('/delete/:id',(req,res)=>{
  User.deleteOne({title : req.params.id},(err)=>{
    if(err){ 
      console.log(err)
    }else{
      res.json('deleteOne')
    }
  })
})


app.put('/ubdete/:id/:result' , (req,res)=>{
  User.updateOne({title:req.params.id},{$set:{isCompleted:req.params.result}},(err)=>{
    if(err){
      console.log('ERR:',err)
    }else{
      res.json('complet Task')
    }
  })
})

// end
app.listen(4000 ,()=>{
  console.log('Server on');
});
