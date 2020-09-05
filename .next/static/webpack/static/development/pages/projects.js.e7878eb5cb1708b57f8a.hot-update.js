webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/projects/projects.js":
/*!**************************************************!*\
  !*** ./components/projects/projects/projects.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projects_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.module.css */ "./components/projects/projects/projects.module.css");
/* harmony import */ var _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projects_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _projects_items_projects_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects_items/projects_items */ "./components/projects/projects_items/projects_items.js");
/* harmony import */ var _projects_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects_animations */ "./components/projects/projects/projects_animations.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/projects/projects/projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Projects() {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.projects,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.addMargin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Projects."), __jsx("h4", {
    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Freelance works and personal proyects."), __jsx("div", {
    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.slider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(_projects_items_projects_items__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 19
    }
  })))));
}

/***/ }),

/***/ "./components/projects/projects/projects_animations.js":
/*!*************************************************************!*\
  !*** ./components/projects/projects/projects_animations.js ***!
  \*************************************************************/
/*! exports provided: easing, animationProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationProject", function() { return animationProject; });
var easing = [0.6, -0.05, 0.01, 0.99];
var animationProject = {
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
    x: 0,
    opacity: 0
  }
};


/***/ })

})
//# sourceMappingURL=projects.js.e7878eb5cb1708b57f8a.hot-update.js.map