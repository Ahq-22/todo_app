var mongoose = require('mongoose');
//                                  DataName
var mongoDB = 'mongodb://127.0.0.1/todo';
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