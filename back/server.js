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




console.log('Server listening on http://127.0.0.1:4000')
app.listen(4000)
