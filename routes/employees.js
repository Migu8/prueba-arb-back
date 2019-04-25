const express = require('express')
const employees = express.Router()
const Employee = require('../models/Employee')

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()) return next()
  return res.status(403).json({message:'You can not entry'})
}

//List
employees.get('/employee', (req, res, next)=>{
  Employee.find()
    .then(response=>{
      res.json(response)
    })
    .catch(e=>{
      console.log('Hola, error en la lista')
      res.json(e)
    })
})

//Detail
employees.get('/employee/:id', (req, res, next)=>{
  Employee.findById(req.params.id)
    .then(response=>{
      res.json(response)
    })
    .catch(e=>{
      console.log('Hola, error en el detalle')
      res.json(e)
    })
})

//List of admins
employees.get('/employee/admin', (req,res,next)=>{
  Employee.find({ role: { $eq: "Admin" } })
    .then(admins=>{
      res.json(admins)
    })
    .catch(e=>{
      res.json(e)
    })
})

//Add (only admin)
employees.put('/new', isAuth, (req,res,next)=>{
  const { role } = req.body
  Employee.register(req.body)
  .then (employee =>{
    res.status(201).json(employee)
  })
  .catch(e=>{
    res.status(500).json(e)
  })
})

module.exports = employees