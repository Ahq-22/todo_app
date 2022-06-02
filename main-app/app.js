var mongoose = require('mongoose');
//                                  DataName
var mongoDB = 'mongodb://127.0.0.1/NewDataBase';
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

app.post('/newElem/:newU/:newP',(req,res)=>{
  User.create({UserName:req.params.newU,password:req.params.newP}),
  (err,newData)=>{
    if(err){
      return handleError(err)
    }
    console.log('Data',newData);
  }
  res.json('sucss') ;

})


app.get('/all',(req,res)=>{
  User.find({},(err,users)=>{
    if(err){
      return handleError(err)
    }
    console.log("get",users);
    res.json(users)
  });
})

app.delete('/delet/:user',(req,res)=>{
  User.deleteOne({UserName:req.params.user},(err)=>{
    if(err){
      return handleError(err)
    }
    res.json('delete sucss')
  })
})

app.put('/put/:name/:new',(req,res)=>{
  User.updateOne({UserName:req.params.name},{
    
  })
})




app.listen(1234 ,()=>{
  console.log('Server on...');
});
