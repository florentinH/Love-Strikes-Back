const personnagehtml = (character, index) => /* @html */`

    <div class="carousel-item ${index==0 ? 'active' : ''}">
      <img class="d-block w-100" src="${character.image}" alt="First slide">
      <p>"${character.name}"</p>
    </div>

`

module.exports=personnagehtml
