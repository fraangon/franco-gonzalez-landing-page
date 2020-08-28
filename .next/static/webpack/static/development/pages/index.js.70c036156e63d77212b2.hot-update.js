webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/home/home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var easing = [0.6, -0.05, 0.01, 0.99];
var animationName = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
      delay: 0
    }
  },
  exit: {
    x: -60,
    opacity: 0
  }
};
var animationMotion = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
      delay: 0.2
    }
  },
  exit: {
    x: -60,
    opacity: 0
  }
};
var animationWeb = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
      delay: 0.4
    }
  },
  exit: {
    x: -60,
    opacity: 0
  }
};
var animationBG = {
  initial: {
    scale: 1.2,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: easing
    }
  },
  exit: {
    scale: 0.95,
    opacity: 0
  }
};
var stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
function Home(_ref) {
  var children = _ref.children,
      home = _ref.home;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contaner_fix_pos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    variants: stagger,
    animate: "animate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationName,
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_regular,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "I,m "), __jsx("h1", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, "Franco"), __jsx("h1", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, "Gonzalez"), __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_regular,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, " .")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationMotion,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx(_motion_animation_motion_animation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationWeb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(_web_animation_web_animation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  })))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationBG,
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fix_pos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx(_background_background_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.70c036156e63d77212b2.hot-update.js.map