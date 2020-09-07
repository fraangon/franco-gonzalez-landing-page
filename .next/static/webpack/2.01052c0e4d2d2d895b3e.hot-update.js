webpackHotUpdate(2,{

/***/ "./components/projects/projects_items/projects_items_animation.js":
/*!************************************************************************!*\
  !*** ./components/projects/projects_items/projects_items_animation.js ***!
  \************************************************************************/
/*! exports provided: itemAnimation, imgItemAnimation, sliderAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemAnimation", function() { return itemAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgItemAnimation", function() { return imgItemAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderAnimation", function() { return sliderAnimation; });
var easing = [0.6, -0.05, 0.01, 0.99];

function itemAnimation(aIndex) {
  return {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: easing,
        delay: aIndex * 0.1
      }
    },
    exit: {
      y: -60,
      opacity: 0
    }
  };
}

function imgItemAnimation(aIndex) {
  return {
    initial: {
      y: 100,
      scale: 1,
      opacity: 0
    },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: easing,
        delay: aIndex * 0.1 + 0.1
      }
    },
    exit: {
      y: 100,
      scale: 1,
      opacity: 0
    }
  };
}

function sliderAnimation() {
  return {
    initial: {
      y: 100,
      scale: 1,
      opacity: 0
    },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easing,
        delay: aIndex * 0.1 + 0.1
      }
    },
    exit: {
      y: 100,
      scale: 1,
      opacity: 0
    }
  };
}



/***/ })

})
//# sourceMappingURL=2.01052c0e4d2d2d895b3e.hot-update.js.map