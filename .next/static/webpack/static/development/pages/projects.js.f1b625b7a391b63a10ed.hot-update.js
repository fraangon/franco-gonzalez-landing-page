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
/* harmony import */ var _projects_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects_animations */ "./components/projects/projects/projects_animations.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/projects/projects/projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import ProjectsItems from '../projects_items/projects_items'



var ProjectsItems = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../projects_items/projects_items */ "./components/projects/projects_items/projects_items.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../projects_items/projects_items */ "./components/projects/projects_items/projects_items.js")];
    },
    modules: ['../projects_items/projects_items']
  }
});
function Projects() {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: _projects_animations__WEBPACK_IMPORTED_MODULE_3__["animationProject"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.projects,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.addMargin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].h3, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: _projects_animations__WEBPACK_IMPORTED_MODULE_3__["projectTitleAnimation"],
    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Projects."), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].h4, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: _projects_animations__WEBPACK_IMPORTED_MODULE_3__["projectSubtitleAnimation"],
    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Freelance works and personal proyects."), __jsx("div", {
    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.slider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(ProjectsItems, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./components/projects/projects/projects_animations.js":
/*!*************************************************************!*\
  !*** ./components/projects/projects/projects_animations.js ***!
  \*************************************************************/
/*! exports provided: easing, animationProject, projectTitleAnimation, projectSubtitleAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationProject", function() { return animationProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectTitleAnimation", function() { return projectTitleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectSubtitleAnimation", function() { return projectSubtitleAnimation; });
var easing = [0.6, -0.05, 0.01, 0.99];
var animationProject = {
  initial: {
    opacity: 1
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
var projectTitleAnimation = {
  initial: {
    opacity: 0,
    x: -30
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing,
      delay: 0.1
    }
  },
  exit: {
    opacity: 0,
    x: -30
  }
};
var projectSubtitleAnimation = {
  initial: {
    opacity: 0,
    x: -30
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing,
      delay: 0.2
    }
  },
  exit: {
    opacity: 0,
    x: -30
  }
};


/***/ })

})
//# sourceMappingURL=projects.js.f1b625b7a391b63a10ed.hot-update.js.map