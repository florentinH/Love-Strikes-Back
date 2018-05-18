const render = require('./render')
// const searchFormEvents = require('./searchFormEvents')
const carousel = require('./carousel')
// Requête une URL pour récupérer UN héros
// $('#dg-container').gallery();
module.exports = () => {
  fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
  .then(response => response.json())
  .then(characters => {
    render(carousel(characters))
    $("#myCarousel").carousel({interval: false});

    const validAvatar = document.getElementById('buttonVal')

    validAvatar.addEventListener('click', evt => {
      const active = document.getElementsByClassName('active')
      console.log(active)
    })
  })

}

// {/* <section id="dg-container" class="dg-container">
//   <div class="dg-wrapper">
// // </div>
// // <nav>
// //   <a class="dg-prev" href="#dg-wrapper" data-slide="prev"><span class="carousel-control-prev-icon"></span></a>
// //   <a class="dg-next" href="#dg-wrapper" data-slide="next"><span class="carousel-control-next-icon"></span></a>
// // </nav>
// // <!-- <nav>
// // <span class="dg-prev" img src="JEUXFIGHT/PAGE2/ARROW.png" alt="arrow"></span>
// // <span class="dg-next"></span>
// // </nav> -->
// // </section> */}
// fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
// .then(response => response.json())
// .then(allHeroes => {
// const indices = getRandom()
// heroes = allHeroes.filter(
// (hero, i) => indices.includes(i)
// )
// console.log(heroes)
// let html = ''
// for(hero of heroes) {
// html += createHero(hero)
// }
//
// targetElement.innerHTML = charSelection(html)
// })
