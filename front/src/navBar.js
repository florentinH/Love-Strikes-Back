const navBarhtml = require('./navBarhtml')

function removeBackdrops() {
  const backdrops = document.getElementsByClassName('modal-backdrop')
  if (backdrops.length > 0) {
    document.body.removeChild(backdrops[0])
  }
  document.body.classList.remove('modal-open')
}


function setEventListeners (){
    const signIn = document.getElementById('form-post')
    signIn.addEventListener('submit', event => {

      event.preventDefault()
      const inputs = signIn.getElementsByTagName('input')
      let data = {}
      for (let input of inputs) {
        if (input.name !== '') {
         data[input.name] = input.value
        }
      }

      const dataJSON = JSON.stringify(data)
      console.log(dataJSON)
      fetch('/sign-in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: dataJSON
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        }
        else {
          LoggedInUser = data
          page('/profile')
        }
        console.log(data)
      })
    })

      const signUp = document.getElementById('form-account')
      console.log(signUp)
      signUp.addEventListener('submit', event => {

        event.preventDefault()
        const inputsForm = signUp.getElementsByTagName('input')
        let accountData = {}
        for (let input of inputsForm) {
          if (input.name !== '') {
              accountData[input.name] = input.value
          }
          if (input.value === '') {
            return alert('Veuillez renseigner tous les champs')
          }
        }
        const accountDataJSON = JSON.stringify(accountData)


        fetch('/sign-up', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: accountDataJSON
        })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          }
          else {
            LoggedInUser = data
            page('/personnage')
          }
          console.log(accountData)
        })
    })
}

module.exports = mainHTML => {

  mainDiv.innerHTML = navBar+ mainHTML + footerHtml

  if (LoggedInUser === undefined) {
    setEventListeners ()
  }
  removeBackdrops()
}
