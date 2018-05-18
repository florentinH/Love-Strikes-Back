const render = require('./render')
// const searchFormEvents = require('./searchFormEvents')
const profilehtml = require('./profilehtml')

module.exports = () => {
  render(profilehtml())
  const updateProfile = document.getElementById('form-profile')
  updateProfile.addEventListener('submit', event => {

    event.preventDefault()
    const inputs = updateProfile.getElementsByClassName('form-control')
    let data = {}
    for (let input of inputs) {
      if (input.name !== '') {
       data[input.name] = input.value
      }
    }

    const profileDataJSON = JSON.stringify(data)
    console.log(profileDataJSON)
    fetch('/update-profile', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: profileDataJSON
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      }
      else {
        LoggedInUser = data
        page('http://localhost:8000/rpg.html')
      }
      console.log(data)
    })
  })
}
