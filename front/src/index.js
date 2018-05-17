'use strict'

const home = require('./home')
const personnage = require('./personnage')



//
// const checkLoginMiddleware = (context, next) => {
//   if (LoggedInUser === undefined){
//     page('/')
//   }
//   next()
// }

page("/", home)
page("/personnage", personnage)
// page("/pagePerso",checkLoginMiddleware, showMyProfile)
page()
