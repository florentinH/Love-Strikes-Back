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
        const inputsForm = signUp.getElementsByClassName('form-control')
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

module.exports = setEventListeners
