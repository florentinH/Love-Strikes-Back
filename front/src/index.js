'use strict'

const home = require('./home')
const personnage = require('./personnage')
const profile = require('./profile')




const checkLoginMiddleware = (context, next) => {
  if (LoggedInUser === undefined){
    page('/')
  }
  next()
}

page("/", home)
page("/personnage", personnage)
page("/profile", checkLoginMiddleware, profile)
// page("/pagePerso",checkLoginMiddleware, showMyProfile)
page()
