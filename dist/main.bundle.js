/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 1920px) {
  .monster-img {
    width: 50%;
    height: auto;
  }
}
@media (max-width: 1440px) {
  .monster-img {
    width: 70%;
    height: auto;
  }
}
@media (max-width: 360px) {
  .monster-img {
    width: 20%;
    height: auto;
  }
}
nav {
  float: right;
  padding: 10px;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-flex;
  margin-left: 40px;
}

nav a {
  color: #444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
}

nav a:hover {
  color: #000;
}

body {
  margin: 0;
  background: #e6e6e6;
  font-family: "Work Sans", sans-serif;
  font-weight: 4;
}

header {
  background: #55d6aa;
  margin-bottom: 12px;
}

header::after {
  content: "";
  display: table;
  clear: both;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.card {
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}

.form-group label {
  width: 100px;
  /* Fixed width for the labels */
  text-align: right;
  margin-right: 10px;
}

.form-group input {
  flex: 1;
}

.card-anim {
  border-radius: 10px;
  box-shadow: 0 8px 12px rgba(24, 24, 24, 0.4);
  background-color: #fff;
  padding: 20px;
  flex: 0 0 calc(33.33% - 100px);
  transform: scale(1);
  transition: transform 0.2s ease;
}

.card-anim:hover {
  transform: scale(1.15);
  transition: transform 0.5s ease;
}

.card-container {
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  /* Adjust the gap as needed between the cards */
}

.title {
  font-size: larger;
  font-weight: 700;
}

.contents {
  min-width: 1200px;
  height: 100%;
  min-height: 640px;
  margin: 0 0 60px;
  position: relative;
  overflow: hidden;
}

.contents div[class^=text-area-] {
  background-color: #473834;
  width: 660px;
  border-radius: 6px;
  padding: 30px 30px 40px;
  margin: 0 0 20px 20px;
  box-sizing: border-box;
  box-shadow: 10px 6px 12px rgba(24, 24, 24, 0.6);
  position: absolute;
  bottom: 0;
  color: #f4f4f4;
}

/* CSS */
.button-3 {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, 0.1);
  color: rgba(255, 255, 255, 0.8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
}

.sidenav {
  width: 170px;
  position: fixed;
  z-index: 1;
  top: 100px;
  border-radius: 12px;
  right: 0px;
  background: #ffffff;
  overflow-x: hidden;
  padding: 8px;
}

.sidenav li {
  list-style: circle;
  margin-bottom: 6px;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAOA;EAGE;IACE,UAAA;IACA,YAAA;EAPF;AACF;AAUA;EAGE;IACE,UAAA;IACA,YAAA;EAVF;AACF;AAaA;EAGE;IACE,UAAA;IACA,YAAA;EAbF;AACF;AAkBA;EACE,YAAA;EACA,aAAA;AAhBF;;AAmBA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;AAhBF;;AAmBA;EACE,oBAAA;EACA,iBAAA;AAhBF;;AAmBA;EACE,WAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;AAhBF;;AAmBA;EACE,WAAA;AAhBF;;AAmBA;EACE,SAAA;EACA,mBAAA;EACA,oCAAA;EACA,cAAA;AAhBF;;AAmBA;EACE,mBAAA;EACA,mBAAA;AAhBF;;AAmBA;EACE,WAAA;EACA,cAAA;EACA,WAAA;AAhBF;;AAmBA;EACE,UAAA;EACA,cAAA;AAhBF;;AAmBA;EACE,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,uCAAA;AAhBF;;AAoBA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;AAjBF;;AAoBA;EACE,YAAA;EACA,+BAAA;EACA,iBAAA;EACA,kBAAA;AAjBF;;AAoBA;EACE,OAAA;AAjBF;;AAqBA;EACE,mBAAA;EACA,4CAAA;EACA,sBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,+BAAA;AAlBF;;AAqBA;EACE,sBAAA;EACA,+BAAA;AAlBF;;AAqBA;EACE,aAAA;EACA,UAAA;EACA,cAAA;EACA,eAAA;EACA,8BAAA;EACA,SAAA;EACA,+CAAA;AAlBF;;AAqBA;EACE,iBAAA;EACA,gBAAA;AAlBF;;AAqBA;EACE,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAlBF;;AAqBA;EACE,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;EACA,qBAAA;EACA,sBAAA;EACA,+CAAA;EACA,kBAAA;EACA,SAAA;EACA,cAAA;AAlBF;;AAqBA,QAAA;AACA;EACE,gBAAA;EACA,yBAAA;EACA,wCAAA;EACA,kBAAA;EACA,yCAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sHAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,iBAAA;EACA,yBAAA;EACA,0BAAA;EACA,sBAAA;EACA,mBAAA;AAlBF;;AAqBA;EACE,gBAAA;EACA,aAAA;AAlBF;;AAqBA;EACE,yBAAA;AAlBF;;AAqBA;EACE,4CAAA;EACA,aAAA;AAlBF;;AAqBA;EACE,yBAAA;EACA,mCAAA;EACA,+BAAA;EACA,eAAA;AAlBF;;AAqBA;EACE,yBAAA;EACA,+CAAA;AAlBF;;AAqBA;EACE,YAAA;EACA,eAAA;EACA,UAAA;EACA,UAAA;EACA,mBAAA;EACA,UAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AAlBF;;AAqBA;EACE,kBAAA;EACA,kBAAA;AAlBF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n$primary-color: #2fa8cc;\r\n$secondary-color: #f4f4f4;\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n\r\n\r\n@media (max-width: 1920px) {\r\n  body {}\r\n\r\n  .monster-img {\r\n    width: 50%;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 1440px) {\r\n  body {}\r\n  \r\n  .monster-img {\r\n    width: 70%;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 360px) {\r\n  body {}\r\n  \r\n  .monster-img {\r\n    width: 20%;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n\r\n\r\nnav {\r\n  float: right;\r\n  padding: 10px;\r\n}\r\n\r\nnav ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\nnav li {\r\n  display: inline-flex;\r\n  margin-left: 40px;\r\n}\r\n\r\nnav a {\r\n  color: #444;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-size: 16px;\r\n}\r\n\r\nnav a:hover {\r\n  color: #000;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background: #e6e6e6;\r\n  font-family: 'Work Sans', sans-serif;\r\n  font-weight: 4;\r\n}\r\n\r\nheader {\r\n  background: #55d6aa;\r\n  margin-bottom: 12px;\r\n}\r\n\r\nheader::after {\r\n  content: '';\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.container {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.card {\r\n  background-color: #f7f7f7;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  margin: 20px 0px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-group label {\r\n  width: 100px;\r\n  /* Fixed width for the labels */\r\n  text-align: right;\r\n  margin-right: 10px;\r\n}\r\n\r\n.form-group input {\r\n  flex: 1;\r\n}\r\n\r\n\r\n.card-anim {\r\n  border-radius: 10px;\r\n  box-shadow: 0 8px 12px rgba(24, 24, 24, 0.4);\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  flex: 0 0 calc(33.33% - 100px);\r\n  transform: scale(1); // Add a hover effect, increase the scale for a zoom-in effect\r\n  transition: transform 0.2s ease; // Add a smooth transition for the hover effect\r\n}\r\n\r\n.card-anim:hover {\r\n  transform: scale(1.15); // Add a hover effect, increase the scale for a zoom-in effect\r\n  transition: transform 0.5s ease; // Add a smooth transition for the hover effect\r\n}\r\n\r\n.card-container {\r\n  display: flex;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  gap: 30px;\r\n  /* Adjust the gap as needed between the cards */\r\n}\r\n\r\n.title {\r\n  font-size: larger;\r\n  font-weight: 700;\r\n}\r\n\r\n.contents {\r\n  min-width: 1200px;\r\n  height: 100%;\r\n  min-height: 640px;\r\n  margin: 0 0 60px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.contents div[class^=\"text-area-\"] {\r\n  background-color: #473834;\r\n  width: 660px;\r\n  border-radius: 6px;\r\n  padding: 30px 30px 40px;\r\n  margin: 0 0 20px 20px;\r\n  box-sizing: border-box;\r\n  box-shadow: 10px 6px 12px rgba(24, 24, 24, 0.6);\r\n  position: absolute;\r\n  bottom: 0;\r\n  color: #f4f4f4;\r\n}\r\n\r\n/* CSS */\r\n.button-3 {\r\n  appearance: none;\r\n  background-color: #2ea44f;\r\n  border: 1px solid rgba(27, 31, 35, .15);\r\n  border-radius: 6px;\r\n  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  line-height: 20px;\r\n  padding: 6px 16px;\r\n  position: relative;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n}\r\n\r\n.button-3:focus:not(:focus-visible):not(.focus-visible) {\r\n  box-shadow: none;\r\n  outline: none;\r\n}\r\n\r\n.button-3:hover {\r\n  background-color: #2c974b;\r\n}\r\n\r\n.button-3:focus {\r\n  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;\r\n  outline: none;\r\n}\r\n\r\n.button-3:disabled {\r\n  background-color: #94d3a2;\r\n  border-color: rgba(27, 31, 35, .1);\r\n  color: rgba(255, 255, 255, .8);\r\n  cursor: default;\r\n}\r\n\r\n.button-3:active {\r\n  background-color: #298e46;\r\n  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;\r\n}\r\n\r\n.sidenav {\r\n  width: 170px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 100px;\r\n  border-radius: 12px;\r\n  right: 0px;\r\n  background: #ffffff;\r\n  overflow-x: hidden;\r\n  padding: 8px;\r\n}\r\n\r\n.sidenav li {\r\n  list-style: circle;\r\n  margin-bottom: 6px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/formValidation.ts":
/*!*******************************!*\
  !*** ./src/formValidation.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var FormValidation = /** @class */ (function () {
    function FormValidation() {
    }
    FormValidation.prototype.validateForm = function () {
        var textInput = document.getElementById('text-input');
        var numberInput = document.getElementById('number-input');
        var passwordInput = document.getElementById('password-input');
        var emailInput = document.getElementById('email-input');
        var textError = document.getElementById('text-error');
        var numberError = document.getElementById('number-error');
        var passwordError = document.getElementById('password-error');
        var emailError = document.getElementById('email-error');
        textError.textContent = '';
        numberError.textContent = '';
        passwordError.textContent = '';
        emailError.textContent = '';
        var textValue = textInput.value;
        var numberValue = numberInput.valueAsNumber;
        var passwordValue = passwordInput.value;
        var emailValue = emailInput.value;
        if (textValue.length < 3) {
            textError.textContent = 'Text must be at least 3 characters.';
        }
        if (isNaN(numberValue) || numberValue < 0) {
            numberError.textContent = 'Number must be a positive number.';
        }
        if (passwordValue.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters.';
        }
        if (!this.validateEmail(emailValue)) {
            emailError.textContent = 'Invalid email format.';
        }
    };
    FormValidation.prototype.validateEmail = function (email) {
        var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    };
    return FormValidation;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidation);


/***/ }),

/***/ "./src/shared/navbar.ts":
/*!******************************!*\
  !*** ./src/shared/navbar.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/assets/Monster_attack_1.jpg":
/*!*****************************************!*\
  !*** ./src/assets/Monster_attack_1.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1126e4a2b41fd6db6774.jpg";

/***/ }),

/***/ "./src/assets/cover_image.jpg":
/*!************************************!*\
  !*** ./src/assets/cover_image.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ec3336152dc5bab6bd7.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/navbar */ "./src/shared/navbar.ts");
/* harmony import */ var _assets_cover_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/cover_image.jpg */ "./src/assets/cover_image.jpg");
/* harmony import */ var _assets_Monster_attack_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/Monster_attack_1.jpg */ "./src/assets/Monster_attack_1.jpg");
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formValidation */ "./src/formValidation.ts");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");





(0,_shared_navbar__WEBPACK_IMPORTED_MODULE_0__.loadNavbar)();
loadImages();
function loadImages() {
    var introImage = document.getElementById("introduction-img");
    introImage.src = _assets_cover_image_jpg__WEBPACK_IMPORTED_MODULE_1__;
    var historyImage = document.getElementById("history-img");
    historyImage.src = _assets_Monster_attack_1_jpg__WEBPACK_IMPORTED_MODULE_2__;
}
var form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    var formValidation = new _formValidation__WEBPACK_IMPORTED_MODULE_3__["default"]();
    event.preventDefault();
    formValidation.validateForm();
});

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map