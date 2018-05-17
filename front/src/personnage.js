const render = require('./render')
// const searchFormEvents = require('./searchFormEvents')
const personnagehtml = require('./personnagehtml')

module.exports = () => {
  render(personnagehtml())
}
