webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/background.js":
false,

/***/ "./components/home/background.module.css":
false,

/***/ "./components/home/background/background.js":
/*!**************************************************!*\
  !*** ./components/home/background/background.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.module.css */ "./components/home/background/background.module.css");
/* harmony import */ var _background_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_background_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parallax-mousemove */ "./node_modules/react-parallax-mousemove/build/index.js");
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/background/background.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Background() {
  var style = {
    outter: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      marginLeft: 'auto',
      marginRigth: 'auto'
    },
    infoLayerStyle: {
      position: 'relative'
    },
    bgLayerStyle: {
      position: 'absolute',
      height: '100%'
    }
  };
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a, {
    containerStyle: style.outter,
    fullHeight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: -0.03,
      yFactor: 0.03,
      springSettings: {
        stiffness: 150,
        damping: 50
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.shadow,
    src: "/background_parallax/bg.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: 0.05,
      yFactor: -0.03,
      springSettings: {
        stiffness: 150,
        damping: 50
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/layer_3.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: 0.10,
      yFactor: -0.06,
      springSettings: {
        stiffness: 150,
        damping: 50
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/layer_2.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: 0.15,
      yFactor: -0.09,
      springSettings: {
        stiffness: 150,
        damping: 50
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/layer_1.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  })))));
}

/***/ }),

/***/ "./components/home/background/background.module.css":
/*!**********************************************************!*\
  !*** ./components/home/background/background.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./background.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/background/background.module.css");

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
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./background.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/background/background.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./background.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/background/background.module.css");

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

/***/ "./components/home/home.js":
false,

/***/ "./components/home/home.module.css":
false,

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
/* harmony import */ var _background_background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../background/background.js */ "./components/home/background/background.js");
/* harmony import */ var _motion_animation_motion_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../motion_animation/motion_animation */ "./components/home/motion_animation/motion_animation.js");
/* harmony import */ var _web_animation_web_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web_animation/web_animation */ "./components/home/web_animation/web_animation.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/home/home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Home(_ref) {
  var children = _ref.children,
      home = _ref.home;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contaner_fix_pos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_regular,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, "I,m "), __jsx("h1", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, "Franco"), __jsx("h1", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, "Gonzalez"), __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_regular,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, " .")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx(_motion_animation_motion_animation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx(_web_animation_web_animation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fix_pos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_background_background_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/home/home/home.module.css":
/*!**********************************************!*\
  !*** ./components/home/home/home.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./home.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/home/home.module.css");

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
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./home.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/home/home.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./home.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/home/home.module.css");

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

/***/ "./components/home/motion_animation.js":
false,

/***/ "./components/home/motion_animation/motion_animation.js":
/*!**************************************************************!*\
  !*** ./components/home/motion_animation/motion_animation.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MotionAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motion_animation.module.css */ "./components/home/motion_animation/motion_animation.module.css");
/* harmony import */ var _motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/motion_animation/motion_animation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MotionAnimation() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playAnimation = _useState[0],
      setPlayAnimation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playAgainAnimation = _useState2[0],
      setPlayAgainAnimation = _useState2[1];

  var defaultStyle = _motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.motion_animation;
  var animationStyle1 = _motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.motion_animation_play;
  var animationStyle2 = _motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.motion_animation_play_again;

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
      lineNumber: 31,
      columnNumber: 9
    }
  });
}

/***/ }),

/***/ "./components/home/motion_animation/motion_animation.module.css":
/*!**********************************************************************!*\
  !*** ./components/home/motion_animation/motion_animation.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./motion_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/motion_animation/motion_animation.module.css");

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
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./motion_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/motion_animation/motion_animation.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./motion_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/motion_animation/motion_animation.module.css");

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

/***/ "./components/home/subtitle_animation.module.css":
false,

/***/ "./components/home/web_animation.js":
false,

/***/ "./components/home/web_animation/web_animation.js":
/*!********************************************************!*\
  !*** ./components/home/web_animation/web_animation.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web_animation.module.css */ "./components/home/web_animation/web_animation.module.css");
/* harmony import */ var _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web_animation_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/web_animation/web_animation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function WebAnimation() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playAnimation = _useState[0],
      setPlayAnimation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playAgainAnimation = _useState2[0],
      setPlayAgainAnimation = _useState2[1];

  var defaultStyle = _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.web_animation;
  var animationStyle1 = _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.web_animation_play;
  var animationStyle2 = _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.web_animation_play_again;

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
      lineNumber: 31,
      columnNumber: 9
    }
  });
}

/***/ }),

/***/ "./components/home/web_animation/web_animation.module.css":
/*!****************************************************************!*\
  !*** ./components/home/web_animation/web_animation.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./web_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/web_animation/web_animation.module.css");

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
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./web_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/web_animation/web_animation.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./web_animation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/web_animation/web_animation.module.css");

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/background.module.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/background/background.module.css":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/home/background/background.module.css ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".background_contenedor_img__11jOn{\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.background_img_style__2BOoX{\n    max-height: 100vh;\n}\n\n.background_shadow__27c-j{\n    max-height: 100vh;\n    mix-blend-mode: multiply;\n    opacity: 40%;\n}\n\n.background_contenedor_bg__3ut5t{\n    display: flex;\n    justify-items: center;\n}\n\n", "",{"version":3,"sources":["/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/background/background.module.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB","file":"background.module.css","sourcesContent":[".contenedor_img{\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.img_style{\n    max-height: 100vh;\n}\n\n.shadow{\n    max-height: 100vh;\n    mix-blend-mode: multiply;\n    opacity: 40%;\n}\n\n.contenedor_bg{\n    display: flex;\n    justify-items: center;\n}\n\n"]}]);
// Exports
exports.locals = {
	"contenedor_img": "background_contenedor_img__11jOn",
	"img_style": "background_img_style__2BOoX",
	"shadow": "background_shadow__27c-j",
	"contenedor_bg": "background_contenedor_bg__3ut5t"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/home.module.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/home/home.module.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/home/home/home.module.css ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".home_home__1KXP4{\n    position: fixed;\n    top: 0;\n    height: auto;\n    width: 100%;\n    height: 100vh;\n    padding-left: 200px ;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    z-index: -2;\n}\n\n.home_title__3Uklb{\n    font-size: 58px;\n    display:flex;\n    margin: 0px;\n}\n\n.home_title_regular__1sqZG{\n    font-weight: 600;\n    margin: 0px;\n    margin-right: 15px;\n}\n\n.home_title_bold__3TDwb{\n    font-weight: 700;\n    margin:0px;\n    margin-right: 15px;\n}\n\n.home_subtitle__1Hu2u{\n    font-size: 45px;\n    font-weight: 600;\n    padding:0px;\n    margin: 0px;\n}\n\n.home_fix_pos__1VXCr{\n    position: fixed;\n    top: 20px;\n    height: auto;\n    width: 100%;\n    z-index: -3;\n}\n\n.home_container_fix_pos__2eu9g{\n    overflow: scroll;\n}\n\n.home_plain__bg__1qd14{\n    background-color: red;\n    z-index: 1;\n}", "",{"version":3,"sources":["/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/home/home.module.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,YAAY;IACZ,WAAW;IACX,aAAa;IACb,oBAAoB;IACpB,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,WAAW;AACf;;AAEA;IACI,eAAe;IACf,SAAS;IACT,YAAY;IACZ,WAAW;IACX,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,UAAU;AACd","file":"home.module.css","sourcesContent":[".home{\n    position: fixed;\n    top: 0;\n    height: auto;\n    width: 100%;\n    height: 100vh;\n    padding-left: 200px ;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    z-index: -2;\n}\n\n.title{\n    font-size: 58px;\n    display:flex;\n    margin: 0px;\n}\n\n.title_regular{\n    font-weight: 600;\n    margin: 0px;\n    margin-right: 15px;\n}\n\n.title_bold{\n    font-weight: 700;\n    margin:0px;\n    margin-right: 15px;\n}\n\n.subtitle{\n    font-size: 45px;\n    font-weight: 600;\n    padding:0px;\n    margin: 0px;\n}\n\n.fix_pos{\n    position: fixed;\n    top: 20px;\n    height: auto;\n    width: 100%;\n    z-index: -3;\n}\n\n.container_fix_pos{\n    overflow: scroll;\n}\n\n.plain__bg{\n    background-color: red;\n    z-index: 1;\n}"]}]);
// Exports
exports.locals = {
	"home": "home_home__1KXP4",
	"title": "home_title__3Uklb",
	"title_regular": "home_title_regular__1sqZG",
	"title_bold": "home_title_bold__3TDwb",
	"subtitle": "home_subtitle__1Hu2u",
	"fix_pos": "home_fix_pos__1VXCr",
	"container_fix_pos": "home_container_fix_pos__2eu9g",
	"plain__bg": "home_plain__bg__1qd14"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/motion_animation/motion_animation.module.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/home/motion_animation/motion_animation.module.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".motion_animation_motion_animation__3S-hR{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat; \n}\n\n.motion_animation_motion_animation__3S-hR:hover{\n    opacity: 85%;\n}\n\n.motion_animation_motion_animation_play__1rhud{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat;  \n    animation: motion_animation_motion_play_animation__symkI 2s steps(60) normal; \n}\n\n@keyframes motion_animation_motion_play_animation__symkI {\n    100% { background-position: 0 -3600px; }\n}\n\n.motion_animation_motion_animation_play__1rhud:hover{\n    opacity: 85%;\n}\n\n.motion_animation_motion_animation_play_again__3OWCP{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat;   \n    animation: motion_animation_motion_play_animation_again__Vp_TY 2s steps(60) normal; \n}\n\n\n@keyframes motion_animation_motion_play_animation_again__Vp_TY {\n    100% { background-position: 0 -3600px; }\n}\n\n.motion_animation_motion_animation_play_again__3OWCP:hover{\n    opacity: 85%;\n}\n", "",{"version":3,"sources":["/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/motion_animation/motion_animation.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,6EAA6E;AACjF;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,6EAA6E;IAC7E,4EAAoD;AACxD;;AAEA;IACI,OAAO,8BAA8B,EAAE;AAC3C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,6EAA6E;IAC7E,kFAA0D;AAC9D;;;AAGA;IACI,OAAO,8BAA8B,EAAE;AAC3C;;AAEA;IACI,YAAY;AAChB","file":"motion_animation.module.css","sourcesContent":[".motion_animation{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat; \n}\n\n.motion_animation:hover{\n    opacity: 85%;\n}\n\n.motion_animation_play{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat;  \n    animation: motion_play_animation 2s steps(60) normal; \n}\n\n@keyframes motion_play_animation {\n    100% { background-position: 0 -3600px; }\n}\n\n.motion_animation_play:hover{\n    opacity: 85%;\n}\n\n.motion_animation_play_again{\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat;   \n    animation: motion_play_animation_again 2s steps(60) normal; \n}\n\n\n@keyframes motion_play_animation_again {\n    100% { background-position: 0 -3600px; }\n}\n\n.motion_animation_play_again:hover{\n    opacity: 85%;\n}\n"]}]);
// Exports
exports.locals = {
	"motion_animation": "motion_animation_motion_animation__3S-hR",
	"motion_animation_play": "motion_animation_motion_animation_play__1rhud",
	"motion_play_animation": "motion_animation_motion_play_animation__symkI",
	"motion_animation_play_again": "motion_animation_motion_animation_play_again__3OWCP",
	"motion_play_animation_again": "motion_animation_motion_play_animation_again__Vp_TY"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/subtitle_animation.module.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/web_animation/web_animation.module.css":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/home/web_animation/web_animation.module.css ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"web_animation.module.css"}]);


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar/navbar */ "./components/navbar/navbar.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _components_home_home_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/home/home */ "./components/home/home/home.js");
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about/about */ "./components/about/about.js");
/* harmony import */ var _components_projects_projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/projects/projects */ "./components/projects/projects.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer/footer */ "./components/footer/footer.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/my-landing-page/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Main() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selected: "HOME",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_components_home_home_home__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.36b1bea4a548403fcef4.hot-update.js.map