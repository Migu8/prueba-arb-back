const express = require('express')
const router = express.Router()
const Survey = require('../models/Survey')


//Create
router.post('/new', (req, res, next)=>{
    Survey.create(req.body, (err)=>{
      if(err) return res.json(err)
      return res.json({ message: "Survey created succesfully"})
    })
})


//List
router.get('/survey', (req, res, next)=>{
  Survey.find()
    .then(response=>{
      res.json(response)
    })
    .catch(e=>{
      res.json(e)
    })
})

//Detail
router.get('/survey/:id', (req, res, next)=>{
  Survey.findById(req.params.id)
    .then(response=>{
      res.json(response)
    })
    .catch(e=>{
      res.json(e)
    })
})

module.exports = router