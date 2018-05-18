const navBarhtml = require('./navBarhtml')





module.exports = mainHTML => {

  mainDiv.innerHTML = navBar+ mainHTML + footerHtml

  if (LoggedInUser === undefined) {
    setEventListeners ()
  }
  removeBackdrops()
}
