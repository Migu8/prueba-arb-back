const mongoose = require('mongoose')
const Schema = mongoose.Schema

const surveySchema = new Schema({
  year: Number,
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  comment: String,
  evaluator: String,
  evaluated: String
},{
  timestamps:true
})

module.exports = mongoose.model('Survey', surveySchema)


//postman

// "year": "2018",
// 	"question1": "Pregunta 1",
// 	"question2": "Pregunta 2",
// 	"question3": "Pregunta 3",
// 	"question4": "Pregunta 4",
// 	"question5": "Pregunta 5",
// 	"evaluator": "Ileana Marín",
// 	"evaluated": "Miguel López"