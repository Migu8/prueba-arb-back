const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')

const employeeSchema = new Schema({
  name: String,
  lastName: String,
  address: String,
  age: Number,
  telephone:Number,
  gender: String,
  married: String,
  email: String,
  profilePic: String,
  role:{
    type:String,
    enum: ['Employee', 'Admin', 'Evaluador', 'Administrador'],
    default: 'Employee'
  }, 
  area:{
    type: String,
    enum: ['Operations', 'Management']
  }
},{
  timestamps:true
})

employeeSchema.plugin(plm, {usernameField: 'email'})

module.exports = mongoose.model('Employee', employeeSchema)

//Para postman
// "name": "Miguel",
// 	"lastName": "López",
// 	"address": "Rodríguez Saro 615",
// 	"age": 27,
// 	"telephone": 5521288941,
// 	"gender": "Male",
// 	"married": false,
// 	"email": "miguel@mail.com",
// 	"profilePic": "https://scontent.fmex2-1.fna.fbcdn.net/v/t1.0-9/1009929_10153371300051687_5006319259013562760_n.jpg?_nc_cat=105&_nc_ht=scontent.fmex2-1.fna&oh=97d506f0133d15e36c8d7c8ea2ef8b47&oe=5C8B3594",
// 	"role": "Admin",
// 	"area": "Operations",
// 	"password": "12345"