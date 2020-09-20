webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/animations_css/motion_animation.module.css":
/*!********************************************************************!*\
  !*** ./components/home/animations_css/motion_animation.module.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./motion_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/animations_css/motion_animation.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./motion_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/animations_css/motion_animation.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./motion_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/animations_css/motion_animation.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/home/animations_css/web_animation.module.css":
/*!*****************************************************************!*\
  !*** ./components/home/animations_css/web_animation.module.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./web_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/animations_css/web_animation.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./web_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/animations_css/web_animation.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./web_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/animations_css/web_animation.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/home/home/home.js":
/*!**************************************!*\
  !*** ./components/home/home/home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module.css */ "./components/home/home/home.module.css");
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _motion_animation_motion_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../motion_animation/motion_animation */ "./components/home/motion_animation/motion_animation.js");
/* harmony import */ var _web_animation_web_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web_animation/web_animation */ "./components/home/web_animation/web_animation.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home_animation */ "./components/home/home/home_animation.js");
/* harmony import */ var _png_sequence_animation_png_secuence_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../png_sequence_animation/png_secuence_animation */ "./components/png_sequence_animation/png_secuence_animation.js");
/* harmony import */ var _animations_css_web_animation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../animations_css/web_animation.module.css */ "./components/home/animations_css/web_animation.module.css");
/* harmony import */ var _animations_css_web_animation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_animations_css_web_animation_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _animations_css_motion_animation_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../animations_css/motion_animation.module.css */ "./components/home/animations_css/motion_animation.module.css");
/* harmony import */ var _animations_css_motion_animation_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_animations_css_motion_animation_module_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/home/home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Home(_ref) {
  var children = _ref.children,
      home = _ref.home;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contaner_fix_pos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    variants: _home_animation__WEBPACK_IMPORTED_MODULE_6__["stagger"],
    animate: "animate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: _home_animation__WEBPACK_IMPORTED_MODULE_6__["animationName"],
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_regular,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "I,m "), __jsx("h1", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Franco"), __jsx("h1", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Gonzalez"), __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_regular,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, " .")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: _home_animation__WEBPACK_IMPORTED_MODULE_6__["animationMotion"],
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.animation_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_png_sequence_animation_png_secuence_animation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    styles: _animations_css_motion_animation_module_css__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: _home_animation__WEBPACK_IMPORTED_MODULE_6__["animationWeb"],
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.animation_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_png_sequence_animation_png_secuence_animation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    styles: _animations_css_web_animation_module_css__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }))))));
}

/***/ }),

/***/ "./components/home/web_animation/default_animation.module.css":
false,

/***/ "./components/home/web_animation/png_secuence_animation.js":
false,

/***/ "./components/png_sequence_animation/png_secuence_animation.js":
/*!*********************************************************************!*\
  !*** ./components/png_sequence_animation/png_secuence_animation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PngSecuenceAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/png_sequence_animation/png_secuence_animation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PngSecuenceAnimation(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playAnimation = _useState[0],
      setPlayAnimation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playAgainAnimation = _useState2[0],
      setPlayAgainAnimation = _useState2[1];

  var defaultStyle = props.styles.animation;
  var animationStyle1 = props.styles.animation_play;
  var animationStyle2 = props.styles.animation_play_again;

  function playAnimationOneTime() {
    setPlayAnimation(true);
    setPlayAgainAnimation(!playAgainAnimation);
  }

  function getStyle() {
    return playAnimation ? getStyleAgain() : defaultStyle;
  }

  function getStyleAgain() {
    if (playAgainAnimation) {
      return animationStyle1;
    } else {
      return animationStyle2;
    }
  }

  return __jsx("div", {
    onClick: function onClick() {
      return playAnimationOneTime();
    },
    className: getStyle(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/animations_css/motion_animation.module.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/home/animations_css/motion_animation.module.css ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".motion_animation_motion_animation__138Vo{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat; \n}\n\n.motion_animation_motion_animation__138Vo:hover{\n    opacity: 85%;\n}\n\n.motion_animation_motion_animation_play__3ShGM{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat;  \n    animation: motion_animation_motion_play_animation__oGOWx 2s steps(60) normal; \n}\n\n@keyframes motion_animation_motion_play_animation__oGOWx {\n    100% { background-position: 0 -3600px; }\n}\n\n.motion_animation_motion_animation_play__3ShGM:hover{\n    opacity: 85%;\n}\n\n.motion_animation_motion_animation_play_again__32dq3{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat;   \n    animation: motion_animation_motion_play_animation_again__3UHvG 2s steps(60) normal; \n}\n\n\n@keyframes motion_animation_motion_play_animation_again__3UHvG {\n    100% { background-position: 0 -3600px; }\n}\n\n.motion_animation_motion_animation_play_again__32dq3:hover{\n    opacity: 85%;\n}", "",{"version":3,"sources":["/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/animations_css/motion_animation.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,6EAA6E;AACjF;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,6EAA6E;IAC7E,4EAAoD;AACxD;;AAEA;IACI,OAAO,8BAA8B,EAAE;AAC3C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,6EAA6E;IAC7E,kFAA0D;AAC9D;;;AAGA;IACI,OAAO,8BAA8B,EAAE;AAC3C;;AAEA;IACI,YAAY;AAChB","file":"motion_animation.module.css","sourcesContent":[".motion_animation{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat; \n}\n\n.motion_animation:hover{\n    opacity: 85%;\n}\n\n.motion_animation_play{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat;  \n    animation: motion_play_animation 2s steps(60) normal; \n}\n\n@keyframes motion_play_animation {\n    100% { background-position: 0 -3600px; }\n}\n\n.motion_animation_play:hover{\n    opacity: 85%;\n}\n\n.motion_animation_play_again{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat;   \n    animation: motion_play_animation_again 2s steps(60) normal; \n}\n\n\n@keyframes motion_play_animation_again {\n    100% { background-position: 0 -3600px; }\n}\n\n.motion_animation_play_again:hover{\n    opacity: 85%;\n}"]}]);
// Exports
exports.locals = {
	"motion_animation": "motion_animation_motion_animation__138Vo",
	"motion_animation_play": "motion_animation_motion_animation_play__3ShGM",
	"motion_play_animation": "motion_animation_motion_play_animation__oGOWx",
	"motion_animation_play_again": "motion_animation_motion_animation_play_again__32dq3",
	"motion_play_animation_again": "motion_animation_motion_play_animation_again__3UHvG"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/animations_css/web_animation.module.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/home/animations_css/web_animation.module.css ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".web_animation_animation__3-9f5{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/web_animation.png') 0 0 no-repeat; \n}\n\n.web_animation_animation__3-9f5:hover{\n    opacity: 85%;\n}\n\n.web_animation_animation_play__p5naa{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/web_animation.png') 0 0 no-repeat;  \n    animation: web_animation_play_animation__3yuYE 2500ms steps(75) normal; \n}\n\n@keyframes web_animation_play_animation__3yuYE {\n    100% { background-position: 0 -4500px; }\n}\n\n.web_animation_animation_play__p5naa:hover{\n    opacity: 85%;\n}\n\n.web_animation_animation_play_again__Xzonk{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/web_animation.png') 0 0 no-repeat;   \n    animation: web_animation_play_animation_again__3XRQQ 2500ms steps(75) normal; \n}\n\n\n@keyframes web_animation_play_animation_again__3XRQQ {\n    100% { background-position: 0 -4500px; }\n}\n\n.web_animation_animation_play_again__Xzonk:hover{\n    opacity: 85%;\n}", "",{"version":3,"sources":["/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/animations_css/web_animation.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,0EAA0E;AAC9E;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,0EAA0E;IAC1E,sEAAiD;AACrD;;AAEA;IACI,OAAO,8BAA8B,EAAE;AAC3C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,0EAA0E;IAC1E,4EAAuD;AAC3D;;;AAGA;IACI,OAAO,8BAA8B,EAAE;AAC3C;;AAEA;IACI,YAAY;AAChB","file":"web_animation.module.css","sourcesContent":[".animation{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/web_animation.png') 0 0 no-repeat; \n}\n\n.animation:hover{\n    opacity: 85%;\n}\n\n.animation_play{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/web_animation.png') 0 0 no-repeat;  \n    animation: play_animation 2500ms steps(75) normal; \n}\n\n@keyframes play_animation {\n    100% { background-position: 0 -4500px; }\n}\n\n.animation_play:hover{\n    opacity: 85%;\n}\n\n.animation_play_again{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/web_animation.png') 0 0 no-repeat;   \n    animation: play_animation_again 2500ms steps(75) normal; \n}\n\n\n@keyframes play_animation_again {\n    100% { background-position: 0 -4500px; }\n}\n\n.animation_play_again:hover{\n    opacity: 85%;\n}"]}]);
// Exports
exports.locals = {
	"animation": "web_animation_animation__3-9f5",
	"animation_play": "web_animation_animation_play__p5naa",
	"play_animation": "web_animation_play_animation__3yuYE",
	"animation_play_again": "web_animation_animation_play_again__Xzonk",
	"play_animation_again": "web_animation_play_animation_again__3XRQQ"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/web_animation/default_animation.module.css":
false

})
//# sourceMappingURL=index.js.4484828193c56747d81d.hot-update.js.map