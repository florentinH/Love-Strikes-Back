'use strict'

const home = require('./home')





//
// const checkLoginMiddleware = (context, next) => {
//   if (LoggedInUser === undefined){
//     page('/')
//   }
//   next()
// }

page("/", home)
// page("/pagePerso",checkLoginMiddleware, showMyProfile)
page()
