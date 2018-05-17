'use strict'

// const searchbarHtml = require('./searchbar')






const checkLoginMiddleware = (context, next) => {
  if (LoggedInUser === undefined){
    page('/')
  }
  next()
}

page("/", home)
// page("/pagePerso",checkLoginMiddleware, showMyProfile)
page()
