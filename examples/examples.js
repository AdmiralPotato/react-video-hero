/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	var VideoHero = __webpack_require__(4);
	
	var variationList = [2, 4];
	var whichOne = variationList[Math.round(Math.random())];
	var heroProps = {
		poster: "https://raw.githubusercontent.com/AdmiralPotato/react-video-hero-content/master/live_for_the_tacos-" + whichOne + "-large-comp-b-1920-poster.jpg",
		sources: [{
			type: "video/webm",
			src: "https://raw.githubusercontent.com/AdmiralPotato/react-video-hero-content/master/live_for_the_tacos-" + whichOne + "-large-comp-b-1920.webm"
		}]
	};
	
	ReactDOM.render(React.createElement(
		VideoHero,
		heroProps,
		React.createElement(
			'div',
			{ className: 'container-fluid' },
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(
					'div',
					{ className: 'col-sm-8 col-sm-offset-2' },
					React.createElement(
						'h1',
						null,
						React.createElement(
							'strong',
							null,
							'The fastest, easiest way'
						),
						React.createElement(
							'span',
							null,
							' to look at motion graphics in hero banners on the internet!'
						)
					),
					React.createElement(
						'p',
						null,
						'New to looking at motion graphics?'
					),
					React.createElement(
						'button',
						{ className: 'btn' },
						'Get started'
					)
				)
			)
		)
	), document.getElementById('example-basic'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = VideoHero;

/***/ }
/******/ ]);
//# sourceMappingURL=examples.js.map