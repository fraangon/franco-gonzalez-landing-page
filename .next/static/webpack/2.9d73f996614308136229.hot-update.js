webpackHotUpdate(2,{

/***/ "./components/contact/contact_animation.js":
/*!*************************************************!*\
  !*** ./components/contact/contact_animation.js ***!
  \*************************************************/
/*! exports provided: animationElement, animationContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationElement", function() { return animationElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationContactPage", function() { return animationContactPage; });
var easing = [0.6, -0.05, 0.01, 0.99];

function animationElement(unDelay) {
  return {
    initial: {
      x: -40,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
        delay: unDelay
      }
    },
    exit: {
      x: 0,
      opacity: 0
    }
  };
}

function animationContactPage() {
  return {
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
}



/***/ })

})
//# sourceMappingURL=2.9d73f996614308136229.hot-update.js.map