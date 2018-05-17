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



//
// const checkLoginMiddleware = (context, next) => {
//   if (LoggedInUser === undefined){
//     page('/')
//   }
//   next()
// }

page("/", home)
page("/personnage", personnage)
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

module.exports = () => {
  render(personnagehtml())
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const personnagehtml = () => `
  <h1>hello personnage</h1>
`

module.exports=personnagehtml


/***/ })
/******/ ]);