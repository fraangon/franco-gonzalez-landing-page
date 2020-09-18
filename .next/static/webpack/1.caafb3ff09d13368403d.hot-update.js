webpackHotUpdate(1,{

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
      y: 800
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
//# sourceMappingURL=1.caafb3ff09d13368403d.hot-update.js.map