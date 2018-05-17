const chathtml = (character) => `
<h1>Je tchat avec :</h1>
  <img src="${character.image}" alt="${character.name}"/>
  <p>"${character.gender}"</p>
  <p>"${character.race}"</p>
  <p>"${character.name}"</p>
`

module.exports=chathtml
