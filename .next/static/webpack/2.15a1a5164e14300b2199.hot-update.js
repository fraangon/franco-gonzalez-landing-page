webpackHotUpdate(2,{

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contact_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact_animation */ "./components/contact/contact_animation.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/contact/contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Contact() {
  var _this = this;

  var widthLayer = Math.min(Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__["getWindowWidth"])(), 1920);
  var heightLayer = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__["getWindowHeight"])();
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
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationContactPage"])(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    center: true,
    width: "100%",
    background: "200a48",
    direction: "vertical",
    gap: "0px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: "100%",
    height: "25px",
    center: "x",
    background: "200a48",
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contact,
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationElement"])(0.2),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Contact me"), __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: "100%",
    height: "100px",
    center: "x",
    background: "200a48",
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.mail,
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationElement"])(0.4),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, "hello@frangon.com.ar")), __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    center: "x",
    bottom: 0,
    width: "100%",
    background: "200a48",
    direction: "vertical",
    gap: "px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: "100%",
    background: "200a48",
    height: "50px",
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social,
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationElement"])(0.6),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "Social"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social_container,
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationElement"])(0.8),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, social.map(function (x) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: x.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: x.src,
      alt: x.alt,
      className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social_logo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 37
      }
    }));
  })))));
}
/*
*/

/***/ })

})
//# sourceMappingURL=2.15a1a5164e14300b2199.hot-update.js.map