const render = require('./render')
// const searchFormEvents = require('./searchFormEvents')
const homehtml = require('./homehtml')
const navBar = require('./navBar')

module.exports = () => {
  render(navBar() + homehtml())
}
