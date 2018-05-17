const render = require('./render')
// const searchFormEvents = require('./searchFormEvents')
const homehtml = require('./homehtml')

module.exports = () => {
  render(homehtml())
}
