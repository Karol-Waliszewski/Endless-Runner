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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacle */ \"./src/obstacle.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object */ \"./src/object.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\n\n\n\n\nclass Game {\n    constructor() {\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](100, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height - 250, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].player.radius);\n        this.ground = new _object__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height - 40, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width, 40);\n        this.obstacles = [];\n        this.points = 0;\n        this.speed = _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].obstacle.acceleration;\n    }\n\n    init() {\n        this.generateObstacle();\n    }\n\n    generateObstacle() {\n        let h = random(_variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].obstacle.minH, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].obstacle.maxH);\n        let w = random(_variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].obstacle.minW, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].obstacle.maxW);\n        let obstacle = new _obstacle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width + 100, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height - h, w, h, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].obstacle.speed);\n        this.obstacles.push(obstacle);\n\n        setTimeout(() => {\n            this.generateObstacle()\n        }, random(1500 + _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].obstacle.speed * 10, 2300 + _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].obstacle.speed * 10));\n    }\n\n    checkCollison(player, object) {\n        // TODO: Change player to circle rather than rectangle\n        if (player.x + player.r >= object.x && player.x - player.r <= object.x + object.w) {\n            if (player.y + player.r >= object.y) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    tick() {\n \n        // Ground\n        this.ground.draw();\n\n        // Obstacles\n        for (let obstacle of this.obstacles) {\n            obstacle.update(this.speed);\n            obstacle.move();\n            obstacle.draw();\n            // Removing unnecessary objects\n            if (obstacle.x < -_variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].obstacle.maxW) {\n                this.obstacles.shift();\n            }\n        }\n\n        // Player\n        this.player.update(0, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gravity);\n        if (this.player.y + this.player.vy < _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height - _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ground.height - _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].player.radius) {\n            this.player.move();\n        } else {\n            this.player.y = _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height - _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ground.height - _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].player.radius;\n            this.player.isJumping = false;\n        }\n        this.player.draw();\n\n\n        // Checking for defeat\n        if (this.obstacles.length > 0) {\n            if (this.checkCollison(this.player, this.obstacles[0])) {\n                textAlign(CENTER);\n                text(`YOU LOST`, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width / 2, _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height / 2);\n                 textAlign(LEFT);\n                window.noLoop();\n            }\n        }\n\n        // Update\n        this.speed += _variables__WEBPACK_IMPORTED_MODULE_3__[\"default\"].obstacle.acceleration;\n        this.points += 1;\n    }\n\n    handleKey(keycode) {\n        // Spacebar\n        if (keycode == 32) {\n            this.player.jump();\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\n\n\nvar game;\n\nconst restart = () => {\n    game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    game.init();\n    window.loop();\n}\n\nconst addListeners = () => {\n    let restartButton = document.querySelector(\"#restart\");\n    restartButton.addEventListener(\"click\", function () {\n        restartButton.blur();\n        restart();\n    });\n}\n\nwindow.keyPressed = function (key) {\n    game.handleKey(window.keyCode);\n}\n\nwindow.setup = function () {\n    let canvas = createCanvas(_variables__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width, _variables__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height);\n    canvas.parent('playground');\n    noStroke();\n    addListeners();\n    restart();\n}\n\nwindow.draw = function () {\n    background(220);\n    fill('#000');\n    text(`Points: ${game.points}`, 20, 20);\n    game.tick();\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Object {\n    constructor(x, y, w, h) {\n        this.w = w;\n        this.h = h;\n        this.y = y;\n        this.x = x;\n\n    }\n    draw() {\n        fill(\"gray\");\n        rect(this.x, this.y, this.w, this.h);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object);\n\n//# sourceURL=webpack:///./src/object.js?");

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./src/object.js\");\n\n\nclass Obstacle extends _object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y, w, h, vo) {\n        super(x, y, w, h);\n        this.vx = vo;\n    }\n    update(ax) {\n        this.vx += ax;\n    }\n\n    move() {\n        this.x -= this.vx;\n    }\n\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacle);\n\n//# sourceURL=webpack:///./src/obstacle.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n    constructor(x, y, r) {\n        this.x = x;\n        this.y = y;\n        this.vy = 0;\n        this.vx = 0;\n        this.r = r;\n        this.color = \"red\"\n        this.jStrength = r;\n        this.isJumping = false;\n    }\n    draw() {\n        fill(this.color);\n        circle(this.x, this.y, this.r);\n    }\n\n    update(ax, ay) {\n        this.vx += ax;\n        this.vy += ay;\n    }\n\n    move() {\n        this.x += this.vx;\n        this.y += this.vy;\n    }\n\n    jump() {\n        if (!this.isJumping) {\n            this.isJumping = true;\n            this.vy = 0;\n            this.vy -= this.jStrength;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst variables = {\n    width: 700,\n    height: 300,\n    gravity: 3,\n\n    obstacle: {\n        speed: 10,\n        acceleration: 0.0003,\n        minH: 70,\n        maxH: 110,\n        minW: 10,\n        maxW: 40\n    },\n\n    player: {\n        radius: 30\n    },\n\n    ground: {\n        height: 40\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (variables);\n\n//# sourceURL=webpack:///./src/variables.js?");

/***/ })

/******/ });