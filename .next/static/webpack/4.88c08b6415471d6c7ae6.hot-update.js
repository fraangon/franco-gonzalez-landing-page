webpackHotUpdate(4,{

/***/ "./components/contact/contact.js":
/*!***************************************!*\
  !*** ./components/contact/contact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.module.css */ "./components/contact/contact.module.css");
/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contact_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer */ "./node_modules/framer/build/framer.js");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/contact/contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Contact() {
  var _this = this;

  var widthLayer = Math.min(Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_3__["getWindowWidth"])(), 1920);
  var heightLayer = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_3__["getWindowHeight"])();
  var social = [{
    link: '',
    src: '/sw_icons_svg/BE.svg',
    alt: 'logo behanse'
  }, {
    link: '',
    src: '/sw_icons_svg/Insta.svg',
    alt: 'logo behanse'
  }, {
    link: '',
    src: '/sw_icons_svg/Linked.svg',
    alt: 'logo behanse'
  }, {
    link: '',
    src: '/sw_icons_svg/Tw.svg',
    alt: 'logo behanse'
  }];
  return __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: widthLayer,
    height: heightLayer,
    center: true,
    background: "200a48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contact,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Contact me"), __jsx("h4", {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.mail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "hello@frangon.com.ar"), __jsx("h4", {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Social"), __jsx("div", {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, social.map(function (x) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: x.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: x.src,
      alt: x.alt,
      className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social_logo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 33
      }
    }));
  }))));
}
/*
*/

/***/ })

})
//# sourceMappingURL=4.88c08b6415471d6c7ae6.hot-update.js.map