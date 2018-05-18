const render = require('./render')
// const searchFormEvents = require('./searchFormEvents')
const chathtml = require('./chathtml')

module.exports = () => {
  fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
  .then(response => response.json())
  .then(characters => {

    const chatshtml = characters.map(chathtml)
    render(chatshtml)
  })
}
