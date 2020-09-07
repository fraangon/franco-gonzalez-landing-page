webpackHotUpdate("static/development/pages/projects.js",{

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
    x: 0
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
    x: 0
  }
};


/***/ })

})
//# sourceMappingURL=projects.js.06beca19f93c9a242ba6.hot-update.js.map