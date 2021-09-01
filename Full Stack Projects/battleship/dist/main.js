/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n\\tbackground-color: black;\\r\\n\\theight: 100%;\\r\\n\\twidth: 100%;\\r\\n}\\r\\nh1 {\\r\\n\\tcolor: white;\\r\\n\\ttext-align: center;\\r\\n}\\r\\nmain {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n}\\r\\n#board-container {\\r\\n\\tdisplay: flex;\\r\\n}\\r\\n.board {\\r\\n\\tbackground-color: blue;\\r\\n\\tpadding: 20px;\\r\\n\\r\\n\\tdisplay: grid;\\r\\n\\tgrid-template-rows: repeat(10, 60px);\\r\\n\\tgrid-template-columns: repeat(10, 60px);\\r\\n}\\r\\n\\r\\n/* make the border a consistent number of pixels all the way around */\\r\\n.board > .tile:nth-child(-n + 10) {\\r\\n\\tborder-top: 3px solid black;\\r\\n}\\r\\n.board > .tile:nth-child(10n-9) {\\r\\n\\tborder-left: 3px solid black;\\r\\n}\\r\\n.tile {\\r\\n\\tborder-right: 3px solid black;\\r\\n\\tborder-bottom: 3px solid black;\\r\\n}\\r\\n.tile.empty {\\r\\n\\tbackground-color: white;\\r\\n}\\r\\n.tile.ship {\\r\\n\\tbackground-color: green;\\r\\n}\\r\\n.tile.missed {\\r\\n\\tbackground-color: pink;\\r\\n}\\r\\n.tile.hit {\\r\\n\\tbackground-color: red;\\r\\n}\\r\\n.tile:hover {\\r\\n\\tbackground-color: blue;\\r\\n\\tcolor: white;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBoard),\n/* harmony export */   \"getSymbolAtIdx\": () => (/* binding */ getSymbolAtIdx)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\r\n\r\nconst getCoordinates = (idx) => {\r\n\tconst xPos = idx % 10;\r\n\tconst yPos = Math.floor(idx / 10);\r\n\treturn { xPos, yPos };\r\n};\r\n\r\nconst calculateShipTilesIdxs = (length, startingPos, posChange) => {\r\n\t// calculate the position that the tiles of the new ship will be on\r\n\tconst newTilesIdxs = [];\r\n\tlength--;\r\n\twhile (length > -1) {\r\n\t\tnewTilesIdxs.push(startingPos + length * posChange);\r\n\t\tlength--;\r\n\t}\r\n\treturn newTilesIdxs;\r\n};\r\n\r\nfunction createBoard() {\r\n\t// create the 2-D array representation of the board\r\n\tconst tiles = [];\r\n\t// store the DOM elements for each tile\r\n\tconst tileElements = [];\r\n\tfor (let i = 0; i < 10; i++) {\r\n\t\ttiles.push(new Array(10));\r\n\t}\r\n\t// store all of the ships placed on the board\r\n\tconst ships = [];\r\n\r\n\tfunction checkValidPlacement(length, startingPos, posChange) {\r\n\t\tif (length > 5) {\r\n\t\t\tthrow new Error(`Ships cannot have length ${length}!`);\r\n\t\t} else if (Math.abs(posChange) !== 1 && Math.abs(posChange) !== 10) {\r\n\t\t\tthrow new Error(\r\n\t\t\t\t`${posChange} is an invalid number for the difference in ship positions!`\r\n\t\t\t);\r\n\t\t}\r\n\t\t// calculate the position that the tiles of the new ship will be on\r\n\t\tconst newTilesIdxs = calculateShipTilesIdxs(length, startingPos, posChange);\r\n\t\t// make sure none of these positions overlap with already placed ships or go off the board\r\n\t\tnewTilesIdxs.forEach((idx) => {\r\n\t\t\tconst { xPos, yPos } = getCoordinates(idx);\r\n\t\t\tif (idx < 0 || idx > 99) {\r\n\t\t\t\tthrow new Error(`${idx} is not a valid position!`);\r\n\t\t\t} else if (tiles[yPos][xPos]) {\r\n\t\t\t\tthrow new Error(`A ship has already been placed at index ${idx}!`);\r\n\t\t\t}\r\n\t\t});\r\n\t\t// make sure all indices are on either the same row or the same column\r\n\t\tconst startPos = getCoordinates(newTilesIdxs[0]);\r\n\t\tconst endPos = getCoordinates(newTilesIdxs[newTilesIdxs.length - 1]);\r\n\t\tif (startPos.xPos !== endPos.xPos && startPos.yPos !== endPos.yPos) {\r\n\t\t\tthrow new Error(\r\n\t\t\t\t'Ship must be placed in either the same row or the same column!'\r\n\t\t\t);\r\n\t\t}\r\n\t}\r\n\r\n\treturn {\r\n\t\ttiles,\r\n\t\ttileElements,\r\n\t\tships,\r\n\t\tplaceShip: (length, startingPos, posChange) => {\r\n\t\t\t// verify that the ship is valid\r\n\t\t\tcheckValidPlacement(length, startingPos, posChange);\r\n\t\t\tconst ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(length, startingPos, posChange);\r\n\t\t\t// place the ship on each of the tiles on the board\r\n\t\t\tconst shipTilesIdxs = calculateShipTilesIdxs(\r\n\t\t\t\tlength,\r\n\t\t\t\tstartingPos,\r\n\t\t\t\tposChange\r\n\t\t\t);\r\n\t\t\tshipTilesIdxs.forEach((idx) => {\r\n\t\t\t\tconst { xPos, yPos } = getCoordinates(idx);\r\n\t\t\t\ttiles[yPos][xPos] = ship;\r\n\t\t\t\t// update display\r\n\t\t\t\tconst element = tileElements[idx];\r\n\t\t\t\telement.classList.add('ship');\r\n\t\t\t\telement.textContent = ship.type;\r\n\t\t\t});\r\n\t\t\t// add the ship to the array of ships stored in the board\r\n\t\t\tships.push(ship);\r\n\r\n\t\t\treturn ship;\r\n\t\t},\r\n\t\treceiveAttack: (idx) => {\r\n\t\t\tif (idx < 0 || idx > 99) {\r\n\t\t\t\tthrow new Error(`The index ${idx} is out of range!`);\r\n\t\t\t}\r\n\t\t\tconst { xPos, yPos } = getCoordinates(idx);\r\n\t\t\tconst possibleShip = tiles[yPos][xPos];\r\n\r\n\t\t\tif (possibleShip === 'missed' || possibleShip === 'hit') {\r\n\t\t\t\tthrow new Error(\r\n\t\t\t\t\t`The tile at row ${yPos} column ${xPos} was already guessed!`\r\n\t\t\t\t);\r\n\t\t\t\t// handles the ship being hit and possibly sunk\r\n\t\t\t} else if (possibleShip) {\r\n\t\t\t\tpossibleShip.hit(idx);\r\n\t\t\t\tif (possibleShip.isSunk()) {\r\n\t\t\t\t\tconsole.log('ship is sunk');\r\n\t\t\t\t}\r\n\t\t\t\ttiles[yPos][xPos] = 'hit';\r\n\t\t\t\t// handles a missed attack\r\n\t\t\t} else {\r\n\t\t\t\ttiles[yPos][xPos] = 'missed';\r\n\t\t\t}\r\n\r\n\t\t\t// update display\r\n\t\t\tconst shipState = tiles[yPos][xPos];\r\n\t\t\ttileElements[idx].classList.add(shipState);\r\n\t\t},\r\n\t\tallShipsSunk: () => {\r\n\t\t\tfor (const ship of ships) {\r\n\t\t\t\tif (!ship.isSunk()) {\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\treturn true;\r\n\t\t},\r\n\t};\r\n}\r\n\r\nfunction getSymbolAtIdx(idx, board) {\r\n\tconst { xPos, yPos } = getCoordinates(idx);\r\n\t// for some reason row needs to be converted into an Array\r\n\tconst row = Array.from(board.tiles[yPos]);\r\n\treturn row[xPos];\r\n}\r\n\r\n// add an array of the ships to the board to keep track of when one is completely sunk??????????????????????????????????????????????????????????????????????????????\r\n\n\n//# sourceURL=webpack://battleship/./src/board.js?");

/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boardOne\": () => (/* binding */ boardOne),\n/* harmony export */   \"boardTwo\": () => (/* binding */ boardTwo)\n/* harmony export */ });\nconst boardOne = document.getElementById('board-one');\r\nconst boardTwo = document.getElementById('board-two');\r\n\n\n//# sourceURL=webpack://battleship/./src/domElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\r\n\r\n\r\nconst { playerOne, playerTwo } = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n\r\nfunction renderBoard(player, boardElement) {\r\n\tconst tiles = player.board.tiles;\r\n\tfor (let i = 0; i < tiles.length; i++) {\r\n\t\tconst row = tiles[i];\r\n\t\tlet tileName;\r\n\r\n\t\tfor (let j = 0; j < row.length; j++) {\r\n\t\t\tconst newTile = document.createElement('div');\r\n\t\t\tplayer.board.tileElements.push(newTile);\r\n\t\t\tnewTile.classList.add('tile');\r\n\t\t\tnewTile.dataset.idx = i * 10 + j;\r\n\r\n\t\t\ttileName = 'no ship';\r\n\t\t\tnewTile.classList.add('empty');\r\n\r\n\t\t\tnewTile.textContent = tileName;\r\n\t\t\tboardElement.appendChild(newTile);\r\n\t\t}\r\n\t}\r\n}\r\nrenderBoard(playerOne, _domElements__WEBPACK_IMPORTED_MODULE_1__.boardOne);\r\nrenderBoard(playerTwo, _domElements__WEBPACK_IMPORTED_MODULE_1__.boardTwo);\r\n\r\nplayerTwo.board.placeShip(5, 5, 1);\r\nplayerTwo.board.placeShip(3, 25, 10);\r\nplayerOne.board.placeShip(5, 5, 1);\r\nplayerOne.board.placeShip(3, 25, 10);\r\n\r\n// make sure computer doesn't attack the same tiles twice\r\nplayerOne.board.tileElements.forEach((tile) => {\r\n\ttile.addEventListener('click', () => {\r\n\t\tconst attackIdx = +tile.dataset.idx;\r\n\t\tconsole.log(attackIdx);\r\n\t\tplayerTwo.attack(attackIdx);\r\n\t\tconst randomIdx = Math.floor(Math.random() * 100);\r\n\t\tconsole.log(randomIdx);\r\n\t\tplayerOne.attack(randomIdx);\r\n\t});\r\n});\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBothPlayers)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\r\n\r\nfunction createBothPlayers() {\r\n\tconst boardOne = (0,_board__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\tconst boardTwo = (0,_board__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\tconst playerOne = createPlayer(1, boardOne, boardTwo);\r\n\tconst playerTwo = createPlayer(2, boardTwo, boardOne);\r\n\treturn { playerOne, playerTwo };\r\n}\r\n\r\n// TODO add computer player functionality\r\nfunction createPlayer(number, board, enemyBoard) {\r\n\treturn {\r\n\t\tnumber,\r\n\t\tboard,\r\n\t\tboardElements: [],\r\n\t\tenemyBoard,\r\n\t\tattack: (idx) => {\r\n\t\t\tenemyBoard.receiveAttack(idx);\r\n\t\t},\r\n\t};\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createShip)\n/* harmony export */ });\nfunction createShip(length, startingPos, posChange) {\r\n\t// add all grid numbers the ship occupies to an array\r\n\tconst endingPos = startingPos + posChange * length;\r\n\tconst tiles = [];\r\n\tfor (let i = startingPos; i !== endingPos; i += posChange) {\r\n\t\ttiles.push(i);\r\n\t}\r\n\treturn {\r\n\t\tlength,\r\n\t\ttype: determineShipType(length),\r\n\t\tisSunk: () => {\r\n\t\t\tconst regex = /^[0-9]+$/;\r\n\t\t\treturn !tiles.some((char) => regex.test(char));\r\n\t\t},\r\n\t\thit: (pos) => {\r\n\t\t\tconst idx = tiles.findIndex((val) => val == pos);\r\n\t\t\tif (idx === -1) {\r\n\t\t\t\tthrow new Error('This position has already been hit!');\r\n\t\t\t}\r\n\t\t\ttiles[idx] = 'X';\r\n\t\t},\r\n\t};\r\n}\r\n\r\n// TODO create both cruisers and submarines when the ship length is 3\r\nfunction determineShipType(length) {\r\n\tswitch (length) {\r\n\t\tcase 2:\r\n\t\t\treturn 'Destroyer';\r\n\t\tcase 3:\r\n\t\t\treturn 'Submarine';\r\n\t\tcase 4:\r\n\t\t\treturn 'Battleship';\r\n\t\tcase 5:\r\n\t\t\treturn 'Carrier';\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;