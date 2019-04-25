const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  lastName: String,
  address: String,
  age: Number,
  telephone:String,
  gender: String,
  married: Boolean,
  email: String,
  profilePic: String,
  role:{
    type:String,
    enum: ['Employee', 'Admin'],
    default: 'Employee'
  }, 
  area:{
    type: String,
    enum: ['Operations', 'Management']
  }
},{
  timestamps:true
})

module.exports = mongoose.model('User', userSchema)