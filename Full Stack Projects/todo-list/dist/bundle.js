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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n\\t--dark-gray: rgb(35, 35, 35);\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n\\tcolor: violet;\\r\\n\\tbackground-color: black;\\r\\n\\tfont-family: tangerine;\\r\\n\\tfont-size: 44px;\\r\\n\\ttext-align: center;\\r\\n\\r\\n\\twidth: 100%;\\r\\n\\theight: 100%;\\r\\n}\\r\\n\\r\\nheader {\\r\\n\\tbackground-color: var(--dark-gray);\\r\\n}\\r\\n\\r\\nfooter {\\r\\n\\tposition: absolute;\\r\\n\\tbottom: 0;\\r\\n\\twidth: 100%;\\r\\n\\r\\n\\tfont-size: 28px;\\r\\n\\tbackground-color: var(--dark-gray);\\r\\n\\r\\n\\tpadding: 5px 0px;\\r\\n}\\r\\n\\r\\nul {\\r\\n\\t/* remove the bullets from list items */\\r\\n\\tlist-style-type: none;\\r\\n}\\r\\n\\r\\n#projects-list {\\r\\n\\tfont-size: 32px;\\r\\n\\tpadding: 10px;\\r\\n\\tmargin: 5px;\\r\\n\\tpadding-bottom: 0px;\\r\\n\\tmargin-bottom: 0px;\\r\\n}\\r\\n#projects-navbar {\\r\\n\\tposition: absolute;\\r\\n\\ttop: 0;\\r\\n\\tleft: 0;\\r\\n\\tbottom: 0;\\r\\n\\tpadding: 15px;\\r\\n\\r\\n\\tbackground-color: white;\\r\\n\\tcolor: black;\\r\\n}\\r\\n\\r\\n.project {\\r\\n\\tborder: 1px solid;\\r\\n\\tpadding: 4px 8px;\\r\\n\\tmargin: 5px;\\r\\n\\tborder-radius: 5px;\\r\\n\\r\\n\\tbackground-color: black;\\r\\n\\tcolor: violet;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n\\t/* denotes the currently selected project from which the todos are displayed */\\r\\n\\tborder: 4px dashed violet;\\r\\n}\\r\\n\\r\\n.project:hover,\\r\\n#add-project-button:hover {\\r\\n\\tbackground-color: var(--dark-gray);\\r\\n\\ttransform: scale(1.05);\\r\\n}\\r\\n\\r\\n#add-project-button,\\r\\n#add-todo-button {\\r\\n\\tbackground-color: black;\\r\\n\\tcolor: white;\\r\\n\\tborder: 1px solid violet;\\r\\n\\tborder-radius: 5px;\\r\\n\\r\\n\\tfont-size: 32px;\\r\\n\\tfont-family: tangerine;\\r\\n}\\r\\n\\r\\ninput {\\r\\n\\tbackground-color: black;\\r\\n\\tcolor: violet;\\r\\n\\twidth: auto;\\r\\n\\tfont-size: 28px;\\r\\n\\tfont-family: tangerine;\\r\\n\\tborder-radius: 5px;\\r\\n}\\r\\n\\r\\n.finalize-decline-buttons {\\r\\n\\t/* alters the buttons that appear after clicking the add project button */\\r\\n\\tcolor: white;\\r\\n\\tfont-size: 35%;\\r\\n\\tfont-weight: bold;\\r\\n\\r\\n\\tborder: 1px solid black;\\r\\n\\tborder-radius: 5px;\\r\\n\\tmargin: 0px 5px;\\r\\n}\\r\\n\\r\\n.finalize-decline-buttons:hover {\\r\\n\\ttransform: scale(1.05);\\r\\n}\\r\\n\\r\\n#content {\\r\\n\\tposition: relative; /* allows the navbar to be positioned absolutely to the left */\\r\\n\\twidth: 100%;\\r\\n\\theight: 75%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _populatePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populatePage */ \"./src/populatePage.js\");\n/* harmony import */ var _taskLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskLogic */ \"./src/taskLogic.js\");\n\r\n// what to do if navbar gets too crowded????\r\n\r\n\r\n\r\n\r\n(0,_taskLogic__WEBPACK_IMPORTED_MODULE_2__.initializePage)();\r\n\r\n// temporary\r\n(0,_populatePage__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/populatePage.js":
/*!*****************************!*\
  !*** ./src/populatePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects),\n/* harmony export */   \"renderTodos\": () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _taskLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskLogic */ \"./src/taskLogic.js\");\n\r\n\r\nconst addProjectButton = document.getElementById('add-project-button');\r\nconst addTodoButton = document.getElementById('add-todo-button');\r\n\r\n// when add project is button clicked, changes the add project button into a text field to allow the user to enter a name for the project\r\naddProjectButton.addEventListener('click', () => {\r\n\tconst projectsNavBar = document.getElementById('projects-navbar');\r\n\tconst projectsList = document.getElementById('projects-list');\r\n\r\n\t// remove add button\r\n\tprojectsNavBar.removeChild(addProjectButton);\r\n\t// create a new wrapper div to add to the navbar\r\n\tconst wrapperDiv = document.createElement('div');\r\n\t// add an input box to the navbar\r\n\tconst numProjects = projectsList.children.length;\r\n\tconst projectInput = document.createElement('input');\r\n\tprojectInput.defaultValue = `Project ${numProjects + 1}`;\r\n\t// adds a confirm button\r\n\tconst finalizeProjectButton = document.createElement('button');\r\n\tfinalizeProjectButton.classList.add('finalize-decline-buttons');\r\n\tfinalizeProjectButton.textContent = 'Confirm';\r\n\tfinalizeProjectButton.style.backgroundColor = 'green';\r\n\tfinalizeProjectButton.addEventListener('click', (e) => {\r\n\t\t(0,_taskLogic__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectInput.value);\r\n\t\trenderProjects();\r\n\t\trevertToDefault(projectsNavBar, wrapperDiv, addProjectButton);\r\n\t});\r\n\t// adds a decline button\r\n\tconst declineProjectButton = document.createElement('button');\r\n\tdeclineProjectButton.classList.add('finalize-decline-buttons');\r\n\tdeclineProjectButton.textContent = 'Delete';\r\n\tdeclineProjectButton.style.backgroundColor = 'red';\r\n\tdeclineProjectButton.addEventListener('click', (e) => {\r\n\t\trevertToDefault(projectsNavBar, wrapperDiv, addProjectButton);\r\n\t});\r\n\t// adds all children to the wrapper div, which is added to the navbar\r\n\twrapperDiv.appendChild(projectInput);\r\n\twrapperDiv.appendChild(document.createElement('br'));\r\n\twrapperDiv.appendChild(finalizeProjectButton);\r\n\twrapperDiv.appendChild(declineProjectButton);\r\n\tprojectsNavBar.appendChild(wrapperDiv);\r\n});\r\n\r\nfunction revertToDefault(parent, child, button) {\r\n\t// remove the extra input box and accept/decline buttons\r\n\tparent.removeChild(child);\r\n\t// add the button back that allows for more projects or todos to be added\r\n\tparent.appendChild(button);\r\n}\r\n\r\n// displays options for adding a todo when the user clicks the add todo button\r\naddTodoButton.addEventListener('click', () => {\r\n\tconst todoList = document.getElementById('todos');\r\n\tconst todoParent = document.getElementById('content');\r\n\r\n\t// remove add button\r\n\ttodoParent.removeChild(addTodoButton);\r\n\t// create a new wrapper div to add to the navbar\r\n\tconst wrapperDiv = document.createElement('div');\r\n\t// add an input box to the navbar\r\n\tconst numTodos = todoList.children.length;\r\n\tconst todoInput = document.createElement('input');\r\n\ttodoInput.defaultValue = `Task ${numTodos + 1}`;\r\n\t// adds a confirm button\r\n\tconst finalizeTodoButton = document.createElement('button');\r\n\tfinalizeTodoButton.classList.add('finalize-decline-buttons');\r\n\tfinalizeTodoButton.textContent = 'Add';\r\n\tfinalizeTodoButton.style.backgroundColor = 'violet';\r\n\tfinalizeTodoButton.addEventListener('click', (e) => {\r\n\t\t// split the data into the task and the date itself\r\n\t\tconst data = todoInput.value.split(' ');\r\n\t\tconst activeProjectTitle = document.querySelector('.selected').textContent;\r\n\t\tconst selectedProject = (0,_taskLogic__WEBPACK_IMPORTED_MODULE_0__.getProject)(activeProjectTitle);\r\n\t\t(0,_taskLogic__WEBPACK_IMPORTED_MODULE_0__.createTodo)(selectedProject, data[0], data[1]);\r\n\t\trenderTodos(selectedProject);\r\n\t\trevertToDefault(todoParent, wrapperDiv, addTodoButton);\r\n\t});\r\n\t// adds all children to the wrapper div, which is added to the navbar\r\n\twrapperDiv.appendChild(todoInput);\r\n\twrapperDiv.appendChild(document.createElement('br'));\r\n\twrapperDiv.appendChild(finalizeTodoButton);\r\n\ttodoParent.appendChild(wrapperDiv);\r\n});\r\n\r\nfunction renderProjects() {\r\n\t// remove all projects from the list\r\n\tconst projectsList = document.getElementById('projects-list');\r\n\twhile (projectsList.firstChild) {\r\n\t\tprojectsList.removeChild(projectsList.firstChild);\r\n\t}\r\n\t// add all of the remaining projects back\r\n\t_taskLogic__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {\r\n\t\tlet projectTag;\r\n\t\tprojectTag = document.createElement('li');\r\n\t\tprojectTag.classList.add('project');\r\n\t\tprojectTag.textContent = project.title;\r\n\t\tprojectsList.appendChild(projectTag);\r\n\t\t// switch to a project's todos when it is clicked\r\n\t\tprojectTag.addEventListener('click', () => {\r\n\t\t\trenderTodos(project);\r\n\t\t\t// add the selected class to a given project and remove it for the previously selected projects\r\n\t\t\tconst projTags = Array.from(projectsList.children);\r\n\t\t\tprojTags.forEach((projTag) => {\r\n\t\t\t\tprojTag.classList.remove('selected');\r\n\t\t\t});\r\n\t\t\tprojectTag.classList.add('selected');\r\n\t\t});\r\n\t});\r\n\t// display the last added project by default\r\n\tif (_taskLogic__WEBPACK_IMPORTED_MODULE_0__.projects) {\r\n\t\trenderTodos(_taskLogic__WEBPACK_IMPORTED_MODULE_0__.projects[_taskLogic__WEBPACK_IMPORTED_MODULE_0__.projects.length - 1]);\r\n\t\tprojectsList.lastChild.classList.add('selected');\r\n\t}\r\n}\r\n\r\nfunction renderTodos(project) {\r\n\tconst todosList = document.getElementById('todos');\r\n\t// remove all todos from the list\r\n\twhile (todosList.firstChild) {\r\n\t\ttodosList.removeChild(todosList.firstChild);\r\n\t}\r\n\t// add the updated todos from the selected project\r\n\tlet todoTag;\r\n\tlet checkBox;\r\n\r\n\tproject.todos.forEach((todo) => {\r\n\t\ttodoTag = document.createElement('li');\r\n\t\t// add check box\r\n\t\tcheckBox = document.createElement('input');\r\n\t\tcheckBox.type = 'checkbox';\r\n\t\tcheckBox.name = todo.title;\r\n\t\ttodoTag.appendChild(checkBox);\r\n\t\tcheckBox.style.margin = '15px';\r\n\t\t// add the task title\r\n\t\ttodoTag.appendChild(document.createTextNode(todo.title + ' | '));\r\n\t\t// add the task due date\r\n\t\ttodoTag.appendChild(document.createTextNode(todo.dueDate));\r\n\t\ttodosList.appendChild(todoTag);\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/populatePage.js?");

/***/ }),

/***/ "./src/taskLogic.js":
/*!**************************!*\
  !*** ./src/taskLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"initializePage\": () => (/* binding */ initializePage),\n/* harmony export */   \"getProject\": () => (/* binding */ getProject)\n/* harmony export */ });\nconst projects = [];\r\n\r\n// creates a new project, adds it to the list of projects, and returns it\r\nfunction createProject(title) {\r\n\tconst todos = [];\r\n\tconst newProject = {\r\n\t\ttitle,\r\n\t\ttodos,\r\n\t\tselected: false,\r\n\t\taddTodo: (newTodo) => {\r\n\t\t\ttodos.push(newTodo);\r\n\t\t},\r\n\t\tdeleteTodo: (toRemove) => {\r\n\t\t\tconst idxToRemove = todos.indexOf(toRemove);\r\n\t\t\ttodos.splice(idxToRemove, 1);\r\n\t\t},\r\n\t};\r\n\tprojects.push(newProject);\r\n\treturn newProject;\r\n}\r\n\r\n// creates a new todo, adds it to a specified project, and returns it\r\nfunction createTodo(project, title, dueDate) {\r\n\tconst newTodo = { title, dueDate };\r\n\tproject.addTodo(newTodo);\r\n\treturn newTodo;\r\n}\r\n\r\n// adds default projects and todos to the page to demonstrate how the page should initially look to users\r\nfunction initializePage() {\r\n\tconst exampleProject = createProject('Example Project');\r\n\tcreateTodo(exampleProject, 'Garbage', 'Tuesday');\r\n\tcreateTodo(exampleProject, 'Brush teeth', 'Monday');\r\n\tcreateTodo(exampleProject, 'Workout', 'Wednesday');\r\n}\r\n\r\n// return a project object for a give title\r\nfunction getProject(title) {\r\n\tfor (let i = 0; i < projects.length; i++) {\r\n\t\tconst curProject = projects[i];\r\n\t\tif (curProject.title == title) {\r\n\t\t\treturn curProject;\r\n\t\t}\r\n\t}\r\n\tconsole.error('No project found!');\r\n\treturn null;\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/taskLogic.js?");

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