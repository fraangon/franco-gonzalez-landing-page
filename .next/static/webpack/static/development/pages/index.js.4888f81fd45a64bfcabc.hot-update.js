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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web_animation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web_animation.module.css */ "./components/home/web_animation/web_animation.module.css");
/* harmony import */ var _web_animation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web_animation_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/web_animation/png_secuence_animation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 1027px;   \n    height: 60px;   \n    background: transparent url('/animations/web_animation.png') 0 0 no-repeat; \n    animation: ", " ; \n\n    :hover{\n        opacity: 85%;\n    }\n\n    @keyframes web_play_animation {\n        100% { background-position: 0 -4500px; }\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Animation = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.actualState ? '' : 'web_play_animation 2500ms steps(75) normal';
});
function PngSecuenceAnimation() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      playAnimation = _useState[0],
      setPlayAnimation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      playAgainAnimation = _useState2[0],
      setPlayAgainAnimation = _useState2[1];

  var defaultStyle = _web_animation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.web_animation;
  var animationStyle1 = _web_animation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.web_animation_play;
  var animationStyle2 = _web_animation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.web_animation_play_again;

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

  return __jsx(Animation, {
    onClick: function onClick() {
      return playAnimationOneTime();
    },
    actualState: playAgainAnimation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  });
}

/***/ })

})
//# sourceMappingURL=index.js.4888f81fd45a64bfcabc.hot-update.js.map