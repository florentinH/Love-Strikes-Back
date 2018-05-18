'use strict'

const home = require('./home')
const personnage = require('./personnage')
const chat = require('./chat')

//
// const checkLoginMiddleware = (context, next) => {
//   if (LoggedInUser === undefined){
//     page('/')
//   }
//   next()
// }

page("/", home)
page("/personnage", personnage)
page("/chat", chat)
// page("/pagePerso",checkLoginMiddleware, showMyProfile)
page()
