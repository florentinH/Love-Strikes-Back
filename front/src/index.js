'use strict'

const home = require('./home')
const personnage = require('./personnage')
const profile = require('./profile')


const chat = require('./chat')


const checkLoginMiddleware = (context, next) => {
  if (LoggedInUser === undefined){
    page('/')
  }
  next()
}

page("/", home)
page("/personnage", personnage)
page("/profile", profile)
page("/chat", chat)
// page("/pagePerso",checkLoginMiddleware, showMyProfile)
page()
