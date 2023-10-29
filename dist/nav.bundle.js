/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/shared/navbar.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadNavbar: () => (/* binding */ loadNavbar)
/* harmony export */ });
function loadNavbar() {
    var navbarContainer = document.getElementById("navbar-container");
    var navbar = document.createElement("nav");
    var navbarList = document.createElement("ul");
    var navbarElements = [
        "Home:index.html",
        "Armor:armor.html",
        "About:about.html"
    ];
    navbarElements.forEach(function (element) {
        var nameFilePair = element.split(":");
        var listElement = document.createElement("li");
        var link = document.createElement("a");
        link.text = nameFilePair[0];
        link.href = nameFilePair[1];
        listElement.appendChild(link);
        navbarList.appendChild(listElement);
    });
    navbar.appendChild(navbarList);
    navbarContainer.appendChild(navbar);
}

/******/ })()
;
//# sourceMappingURL=nav.bundle.js.map