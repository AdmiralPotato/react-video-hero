(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["VideoHero"] = factory(require("react"), require("react-dom"));
	else
		root["VideoHero"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	
	var VideoHero = React.createClass({
		displayName: 'VideoHero',
		getInitialState: function getInitialState() {
			return {
				width: 0,
				height: 0,
				needsResizeUpdate: true
			};
		},
		componentDidMount: function componentDidMount() {
			var slider = this;
			window.addEventListener('resize', slider.invalidateDimensions);
			slider.updateDimensions();
			slider.setState({
				resizeFallbackIntervalId: setInterval(function () {
					slider.fallbackStateUpdate();
				}, 200)
			});
		},
		componentWillUnmount: function componentWillUnmount() {
			window.removeEventListener('resize', this.invalidateDimensions);
			this.updateDimensions();
			clearInterval(this.state.resizeFallbackIntervalId);
		},
		invalidateDimensions: function invalidateDimensions() {
			this.setState({
				needsResizeUpdate: true
			});
		},
		fallbackStateUpdate: function fallbackStateUpdate() {
			var slider = this;
			var holder = ReactDOM.findDOMNode(slider.refs['holder']);
			var holderWidth = holder ? holder.clientWidth : 0;
			var holderHeight = holder ? holder.clientHeight : 0;
			var holderWidthHasChanged = slider.state.holderWidth !== holderWidth;
			var holderHeightHasChanged = slider.state.holderHeight !== holderHeight;
			if (holderWidthHasChanged || holderHeightHasChanged) {
				slider.invalidateDimensions();
				slider.updateDimensions();
			}
		},
		updateDimensions: function updateDimensions() {
			var slider = this;
			//reference: http://stackoverflow.com/questions/19014250/reactjs-rerender-on-browser-resize
			if (slider.state.needsResizeUpdate) {
				var holder = ReactDOM.findDOMNode(slider.refs['holder']);
				var holderWidth = holder ? holder.clientWidth : 0;
				var holderHeight = holder ? holder.clientHeight : 0;
				slider.setState({
					width: holderWidth,
					height: holderHeight,
					needsResizeUpdate: false
				});
			}
		},
		render: function render() {
			var props = this.props;
			var sourceList = props.sources.map(function (source, index) {
				return React.createElement('source', { key: index, type: source.type, src: source.src });
			});
			var ratioStyle = {};
			var videoRatio = 9 / 16;
			var holderRatio = this.state.height / this.state.width;
			if (videoRatio < holderRatio) {
				ratioStyle.height = this.state.height;
			} else {
				ratioStyle.width = this.state.width;
			}
			var videoProps = {
				className: aspect,
				poster: props.poster,
				preload: "auto",
				autoPlay: "autoPlay",
				muted: "muted",
				loop: "loop",
				style: ratioStyle
			};
	
			var aspect = props.aspect || 'aspect-16_9';
			return React.createElement(
				'div',
				{ className: 'VideoHero', ref: 'holder' },
				React.createElement(
					'video',
					_extends({}, videoProps, { 'webkit-playsinline': '' }),
					sourceList
				),
				React.createElement(
					'div',
					{ className: 'children' },
					props.children
				)
			);
		}
	});
	
	module.exports = VideoHero;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-video-hero.js.map