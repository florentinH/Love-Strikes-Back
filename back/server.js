const express = require('express')
// Module path: manipulation des chemins de fichiers
const path = require('path')
const app = express()
const connection = require('./database')


const session = require('express-session')
app.use(session({secret:"cats", resave:true, saveUninitialized: true}))
// Je veux public qui est à ../public
// Avec node, je ne peux pas mettre qqchose comme:
// /home/wilder/projet2/wildhelp/back/../public
// path.normalize va transformer
// /home/wilder/projet2/wildhelp/back/../public
// /home/wilder/projet2/wildhelp/public
const staticPath = path.normalize(`${__dirname}/../public`)
app.use(express.static(staticPath))
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// const requestAllHelp = require('./routes/requestAllHelp')


//
// const middleware = (req, res, next) => {
//    if(req.session !== undefined && req.session.user !== undefined){
//       const user = req.session.user
//       next()
//    } else {
//      res.status(401).json({
//        error: 'Unauthorized Access'
//      })
//    }
// }
//
//

const middleware = (req, res, next) => {
   if(req.session !== undefined && req.session.user !== undefined){
      const user = req.session.user
      next()
   } else {
     res.status(401).json({
       error: 'Unauthorized Access'
     })
   }
}

// app.delete('/request/:id', deleteRequest)
//
// app.post('/register', getInscriptions)

const indexHtml = user => /* @html */ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>accueil</title>
      <link rel="stylesheet" href="css/chat.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <!-- <link rel="stylesheet" href="css/personnage.css"> -->
      <link rel="stylesheet" href="css/accueil.css">
      <link rel="stylesheet" href="css/carousel.css">
      <link rel="stylesheet" href="css/profile.css">

  </head>
  <body>


    <div id="main">
      <!-- ON VA INSERER DU HTML ICI -->
    </div>



    <!-- SCRIPTS -->
   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
   <!-- <script type="text/javascript" src="js/jquery.gallery.js"></script> -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
   <script src="/page.js"></script>
   <script src="/app.js"></script>
   <script> let LoggedInUser = ${JSON.stringify(user)}</script>


  </body>
</html>
`

const newAccount = (req, res, next) => {
  if((req.session !== undefined) && (req.session.user !== undefined)) {
    const user = req.session.user
    next()
  }
  else {
    res.status(401).json({
      error: 'Unauthorized Access'
    })
  }
}

app.post('/sign-up', (req, res) => {
  console.log(req.body)

  const pseudo = req.body.pseudo
  const password = req.body.password
  const gender = req.body.gender
  let request1 = `INSERT INTO Profile(Pseudo, Password, Gender) VALUES('${pseudo}', '${password}', '${gender}')`
  console.log(request1)


  connection.query(request1, (error, resultats) => {
    if (error) {
      return res.status(500).json({
        error: error.message
      })
    }
    let request2 = `SELECT * FROM Profile WHERE Pseudo = '${pseudo}'`
    connection.query(request2, (error, results) => {
      if (error) {
        return res.status(500).json({
          error: error.message
        })
      }
      let user = results[0]
      req.session.user = user
      console.log(user)
      res.json(user)
    })
  })
})

const checkLoggedInUser = (req, res, next) => {
  if((req.session !== undefined) && (req.session.user !== undefined)) {
    const user = req.session.user
    next()
  }
  else {
    res.status(401).json({
      error: 'Unauthorized Access'
    })
  }
}

app.post('/sign-in', (req, res) => {
  console.log(req.body)

  const signedPseudo = req.body.signedPseudo
  const signedPassword = req.body.signedPassword
  const query = `SELECT * FROM Profile WHERE Pseudo = '${signedPseudo}'`

  connection.query(query, (error, results) => {
  console.log(results)
    if (error) {
      return res.status(500).json({
        error: error.message
      })
    }
    if (results.length === 0) {
      return res.status(400).json({
        error: 'Identifiant ou mot de passe incorrect'
      })
    }
    if ((results[0].Pseudo == signedPseudo) && (results[0].Password !== signedPassword)){
      return res.status(400).json({
        error: 'Identifiant ou mot de passe incorrect'
      })
    }
    const user = results[0]
    req.session.user = user
    res.json(user)
  })
})

app.post('/update-profile', (req, res) => {
  console.log(req.body)

  const pseudo = req.session.user.Pseudo
  const age = req.body.age
  const job = req.body.job
  const description = req.body.description
  // const leitimov = req.body.leitimov
  const query1 = `UPDATE Profile SET Age = '${age}', Job = '${job}', Description = '${description}' WHERE Pseudo = '${pseudo}'`
  console.log(query1)

  connection.query(query1, (error, resultats) => {
  console.log(resultats)
    if (error) {
      return res.status(500).json({
        error: error.message
      })
    }
    const query2 = `SELECT * FROM Profile WHERE Pseudo = '${pseudo}'`
    connection.query(query2, (error, results) => {
      if (error) {
        return res.status(500).json({
          error: error.message
        })
      }
      const user = results[0]
      for(let key in user) {
          req.session.user[key] = user[key]
        }
      res.json(user)
    })
  })
})

app.get('*', (req, res) => {
  console.log(req.session.user)
  res.send(indexHtml(req.session.user))
  res.end()

})


console.log('Server listening on http://127.0.0.1:4000')
app.listen(4000)
