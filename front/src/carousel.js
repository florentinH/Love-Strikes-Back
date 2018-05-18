
const personnagehtml = require('./personnagehtml')

const carousel = characters => /* @html */ `
<div class="container">
  <div id="myCarousel" class="carousel slide bg-inverse w-50 ml-auto mr-auto" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
    ${characters.map(personnagehtml).join('')}
  </div>
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="row">
  <div class="col-md-2 offset-md-7">
    <button id="buttonVal" class="btn">Validé</button>
  </div>
</div>
</div>
`

module.exports = carousel
