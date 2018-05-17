const render = require('./render')
// const searchFormEvents = require('./searchFormEvents')
const profilehtml = require('./profilehtml')

module.exports = () => {
  render(profilehtml())
}
