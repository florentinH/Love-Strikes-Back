
const removeBackdrops = require('./removeBackdrops')

const render = html =>{
  document.getElementById('main').innerHTML=html
  removeBackdrops()
}


module.exports=render
