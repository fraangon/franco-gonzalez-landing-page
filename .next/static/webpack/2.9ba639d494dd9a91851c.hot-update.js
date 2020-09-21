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
/* harmony import */ var _png_sequence_animation_png_secuence_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../png_sequence_animation/png_secuence_animation */ "./components/png_sequence_animation/png_secuence_animation.js");
/* harmony import */ var _contact_animation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact_animation.module.css */ "./components/contact/contact_animation.module.css");
/* harmony import */ var _contact_animation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_contact_animation_module_css__WEBPACK_IMPORTED_MODULE_8__);
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
    src: '/sw_icons_svg/Insta_2.svg',
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
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
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
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: widthLayer,
    height: heightLayer,
    center: true,
    background: "200a48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
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
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: "100%",
    height: "25px",
    center: "x",
    background: "red",
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contact,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationElement"])(0.2),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: "1027px",
    height: "0px",
    center: "x",
    background: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, __jsx(_png_sequence_animation_png_secuence_animation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    styles: _contact_animation_module_css__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  })))), __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    center: "x",
    bottom: 0,
    width: "100%",
    background: "200a48",
    direction: "vertical",
    gap: "px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: "100%",
    background: "200a48",
    height: "50px",
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationElement"])(0.6),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, "Social"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social_container,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationElement"])(0.8),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, social.map(function (x) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: x.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: x.src,
      alt: x.alt,
      className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social_logo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 41
      }
    }));
  }))))));
}
/*
*/

/***/ })

})
//# sourceMappingURL=2.9ba639d494dd9a91851c.hot-update.js.map