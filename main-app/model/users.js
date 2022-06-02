const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
// item1  
  title : String ,
 //item2 
  isCompleted : Boolean
})

const User = mongoose.model('User',userSchema);

module.exports = User 