const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
// item1  
  UserName : String ,
 //item2 
  password : String
})

const User = mongoose.model('User',userSchema);

module.exports = User 