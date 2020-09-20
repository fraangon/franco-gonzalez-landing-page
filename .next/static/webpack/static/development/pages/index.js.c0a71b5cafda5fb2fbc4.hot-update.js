webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/web_animation/png_secuence_animation.js":
/*!*****************************************************************!*\
  !*** ./components/home/web_animation/png_secuence_animation.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PngSecuenceAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web_animation.module.css */ "./components/home/web_animation/web_animation.module.css");
/* harmony import */ var _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web_animation_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/web_animation/png_secuence_animation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function PngSecuenceAnimation(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playAnimation = _useState[0],
      setPlayAnimation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playAgainAnimation = _useState2[0],
      setPlayAgainAnimation = _useState2[1];

  var defaultStyle = props.styles.web_animation;
  var animationStyle1 = props.styles.web_animation_play;
  var animationStyle2 = props.styles.web_animation_play_again;

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

/***/ })

})
//# sourceMappingURL=index.js.c0a71b5cafda5fb2fbc4.hot-update.js.map