webpackHotUpdate(2,{

/***/ "./components/contact/contact_animation.js":
/*!*************************************************!*\
  !*** ./components/contact/contact_animation.js ***!
  \*************************************************/
/*! exports provided: animationElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationElement", function() { return animationElement; });
var easing = [0.6, -0.05, 0.01, 0.99];

function animationElement(unDelay) {
  return {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
        delay: unDelay
      }
    },
    exit: {
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
//# sourceMappingURL=2.f499b6d3ff9b96e7d01f.hot-update.js.map