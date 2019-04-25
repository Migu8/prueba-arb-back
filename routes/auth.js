const express = require('express')
const authRoutes = express.Router()
const Employee = require('../models/Employee')
const passport = require('../helpers/passport')

function checkIfLogin(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  return res.status(403).json({message:"Please, login in order to watch your profile"});
}

//Signup
authRoutes.post('/signup', (req, res, next)=>{
  const email = req.body.email
  Employee.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: 'This email account is already taken, choose another one' })
      return
    }
    Employee.register(req.body, req.body.password, (err)=>{
      if(err) return res.json(err)
      return res.json({ message: "Account created succesfully, login to see more information"})
    })
  })
})

//Login
authRoutes.post('/login', 
  passport.authenticate('local'),
   (req,res,next)=>{
    return res.status(200).json(req.user);
})

//Logout
authRoutes.post('/logout', (req, res, next) => {
  req.logout();
  return res.status(200).json({ message: "Log out success, see you later" });
});

//Profile
authRoutes.get('/profile', checkIfLogin, (req, res, next)=>{
  return res.status(200).json(req.user)
})


module.exports = authRoutes