webpackHotUpdate(1,{

/***/ "./components/project_page/project_page.js":
/*!*************************************************!*\
  !*** ./components/project_page/project_page.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer */ "./node_modules/framer/build/framer.js");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var _project_page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project_page.module.css */ "./components/project_page/project_page.module.css");
/* harmony import */ var _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_project_page_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _project_page_animation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project_page_animation.js */ "./components/project_page/project_page_animation.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/project_page/project_page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ProjectPage(props) {
  var _this = this;

  var widthLayer = Math.min(Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowWidth"])(), 1400);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_1__["Frame"], {
    top: 225,
    width: widthLayer,
    center: true,
    background: "1b1b1b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contenedor_general,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contenedor_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, props.dataProject.title), __jsx("h4", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, props.dataProject.type)), props.dataProject.content.map(function (aContentPath) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: aContentPath,
      className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 37
      }
    }));
  }), __jsx("div", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contenedor_back,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.back,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, " Back to Projects "))))));
}

/***/ }),

/***/ "./components/project_page/project_page_animation.js":
/*!***********************************************************!*\
  !*** ./components/project_page/project_page_animation.js ***!
  \***********************************************************/
/*! exports provided: animationElement, animationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationElement", function() { return animationElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationPage", function() { return animationPage; });
var easing = [0.6, -0.05, 0.01, 0.99];

function animationElement(unDelay) {
  return {
    initial: {
      opacity: 0,
      y: -100
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
        delay: unDelay
      }
    },
    exit: {
      opacity: 0,
      y: 0
    }
  };
}

function animationPage() {
  return {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
        delay: 0
      }
    },
    exit: {
      opacity: 0
    }
  };
}



/***/ })

})
//# sourceMappingURL=1.07111f5a75ee7b343253.hot-update.js.map