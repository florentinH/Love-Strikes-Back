const express = require('express')
// Module path: manipulation des chemins de fichiers
const path = require('path')
const app = express()


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

const indexHtml = /* @html */ `
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

  </head>
  <body>


    <div id="main">
      <!-- ON VA INSERER DU HTML ICI -->
    </div>



    <!-- SCRIPTS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script type="text/javascript" src="/jquery.gallery.js"></script>
        <script type="text/javascript" src="/modernizr.custom.53451.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="/page.js"></script>
        <script src="/app.js"></script>
  </body>
</html>
`

app.get('*', (req, res) => res.send(indexHtml))


console.log('Server listening on http://127.0.0.1:4000')
app.listen(4000)
