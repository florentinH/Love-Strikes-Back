const personnagehtml = (character) => /* @html */`
<!--
<a href="#">
  <img src="${character.image}" alt="${character.name}"/>
  <p>"${character.name}"</p>
  <ul class="menu">
    <li role="separator" class="divider">
      <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
      VALIDER
    </button>
  </li>
  </ul>
</a> -->
<!-- <div id="myCarousel" class="carousel slide bg-inverse w-50 ml-auto mr-auto" data-ride="carousel">
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img class="d-block w-100" src="${character.image}" alt="First slide">
      <p>"${character.name}"</p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${character.image}" alt="Second slide">
      <p>"${character.name}"</p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${character.image}" alt="Third slide">
      <p>"${character.name}"</p>
    </div>
  </div>
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> -->
`

module.exports=personnagehtml
