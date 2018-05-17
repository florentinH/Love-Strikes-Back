/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const render = html =>{
  document.getElementById('main').innerHTML=html
}


module.exports=render


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const home = __webpack_require__(2)
const personnage = __webpack_require__(4)
const chat = __webpack_require__(6)

//
// const checkLoginMiddleware = (context, next) => {
//   if (LoggedInUser === undefined){
//     page('/')
//   }
//   next()
// }

page("/", home)
page("/personnage", personnage)
page("/chat", chat)
// page("/pagePerso",checkLoginMiddleware, showMyProfile)
page()


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const render = __webpack_require__(0)
// const searchFormEvents = require('./searchFormEvents')
const homehtml = __webpack_require__(3)

module.exports = () => {
  render(homehtml())
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const homehtml = () => `
  <h1>hello</h1>
`

module.exports=homehtml


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const render = __webpack_require__(0)
// const searchFormEvents = require('./searchFormEvents')
const personnagehtml = __webpack_require__(5)
// Requête une URL pour récupérer UN héros
// $('#dg-container').gallery();
module.exports = () => {
  fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
  .then(response => response.json())
  .then(characters => {

    const charactershtml = characters.map(personnagehtml)

    render(charactershtml)

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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

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
<div id="myCarousel" class="carousel slide bg-inverse w-50 ml-auto mr-auto" data-ride="carousel">
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
</div>


  <!-- <section class="slider-for slider">

  </section>
  <section class="slider-nav slider">

  </section>
  <script type="text/javascript">
    $(document).on('ready', function() {

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });

    });
  </script> -->
`
// function getData() {
//     $.getJSON("item-data.json", function(results) {
//         var slideShowArray = results.characters.map(item => item.Images.map(imgs =>[imgs.PrimaryImage[0].image, ...imgs.AlternateImages.map(alt => alt.image)]))[0][0];
//         $.each(slideShowArray, function(k, v){
//             var slidesBig = "<div><img src='" + v + "'></div>";
//             var slidesSmall = "<div><img src='" + v + "'></div>";
//             $(".slider-for").slick("slickAdd", slidesBig);
//             $(".slider-nav").slick("slickAdd", slidesSmall);
//         });
//
//     });
// }

module.exports=personnagehtml


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const render = __webpack_require__(0)
// const searchFormEvents = require('./searchFormEvents')
const chathtml = __webpack_require__(7)

module.exports = () => {
  fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
  .then(response => response.json())
  .then(characters => {

    const chatshtml = characters.map(chathtml)
    render(chatshtml)
  })
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

const chathtml = (character) => `
<h1>Je tchat avec :</h1>
  <img src="${character.image}" alt="${character.name}"/>
  <p>"${character.gender}"</p>
  <p>"${character.race}"</p>
  <p>"${character.name}"</p>
`

module.exports=chathtml


/***/ })
/******/ ]);
