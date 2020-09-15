exports.ids = [2];
exports.modules = {

/***/ "./components/contact/contact.js":
/*!***************************************!*\
  !*** ./components/contact/contact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer */ "framer");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/contact/contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Contact() {
  const widthLayer = Math.min(Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowWidth"])(), 1920);
  const heightLayer = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])();
  return __jsx(framer__WEBPACK_IMPORTED_MODULE_1__["Frame"], {
    width: widthLayer,
    height: heightLayer,
    center: true,
    background: "200a48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Contact me"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "hello@frangon.com.ar"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Social")));
}
/*
<div>
    {
        
        [logo1.svg, logo2.svg].map(
            (unLogo) => (
                <Link>
                    <img/>
                </Link>
            )
        )
        
    }
</div>
*/

/***/ }),

/***/ "./components/window/window_dimensions.js":
/*!************************************************!*\
  !*** ./components/window/window_dimensions.js ***!
  \************************************************/
/*! exports provided: getWindowHeight, getWindowWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowHeight", function() { return getWindowHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowWidth", function() { return getWindowWidth; });
const hasWindow = false;
function getWindowHeight() {
  const height = hasWindow ? window.innerHeight : null;
  return height;
}
function getWindowWidth() {
  const width = hasWindow ? window.innerWidth : null;
  return width;
}

/***/ })

};;
//# sourceMappingURL=2.js.map