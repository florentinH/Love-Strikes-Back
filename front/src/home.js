const render = require('./render')
// const searchFormEvents = require('./searchFormEvents')
const homehtml = require('./homehtml')
const navBarhtml = require('./navBarhtml')
const setEventListeners = require('./setEventListeners')

module.exports = () => {
  render(navBarhtml() + homehtml())
  setEventListeners()
}
