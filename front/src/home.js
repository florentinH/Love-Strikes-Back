const render = require('./render')
// const searchFormEvents = require('./searchFormEvents')
const homehtml = require('./homehtml')
const navBarhtml = require('./navBarhtml')

module.exports = () => {
  render(navBarhtml() + homehtml())
}
