const passport = require('passport')
const Employee = require('../models/Employee')

passport.use(Employee.createStrategy())
passport.serializeUser(Employee.serializeUser())
passport.deserializeUser(Employee.deserializeUser())

module.exports = passport 