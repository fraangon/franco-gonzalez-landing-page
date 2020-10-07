exports.ids = [10];
exports.modules = {

/***/ "9riT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PngSecuenceAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PngSecuenceAnimation(props) {
  const {
    0: playAnimation,
    1: setPlayAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: playAgainAnimation,
    1: setPlayAgainAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const defaultStyle = props.styles.animation;
  const animationStyle1 = props.styles.animation_play;
  const animationStyle2 = props.styles.animation_play_again;

  function playAnimationOneTime() {
    setPlayAnimation(true);
    setPlayAgainAnimation(!playAgainAnimation);
  }

  function getStyle() {
    return playAnimation ? getStyleAgain() : defaultStyle;
  }

  function getStyleAgain() {
    if (playAgainAnimation) {
      return animationStyle1;
    } else {
      return animationStyle2;
    }
  }

  return __jsx("div", {
    onClick: () => playAnimationOneTime(),
    className: getStyle()
  });
}

/***/ }),

/***/ "GYhb":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"animation": "contact_animation_animation__3X1G0",
	"animation_play": "contact_animation_animation_play__1U8US",
	"play_animation": "contact_animation_play_animation__1_HDS",
	"animation_play_again": "contact_animation_animation_play_again__39zrm",
	"play_animation_again": "contact_animation_play_animation_again__2DnhS"
};

/***/ }),

/***/ "Lotd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Contact; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/contact/contact.module.css
var contact_module = __webpack_require__("mAKX");
var contact_module_default = /*#__PURE__*/__webpack_require__.n(contact_module);

// EXTERNAL MODULE: external "framer"
var external_framer_ = __webpack_require__("TFn0");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: ./components/window/window_dimensions.js
var window_dimensions = __webpack_require__("Xs0G");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/contact/contact_animation.js
const easing = [0.6, -0.05, 0.01, 0.99];

function animationElement(unDelay) {
  return {
    initial: {
      opacity: 0,
      x: -40
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
      opacity: 0,
      x: 0
    }
  };
}

function animationContactPage() {
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


// EXTERNAL MODULE: ./components/png_sequence_animation/png_secuence_animation.js
var png_secuence_animation = __webpack_require__("9riT");

// EXTERNAL MODULE: ./components/contact/contact_animation.module.css
var contact_animation_module = __webpack_require__("GYhb");
var contact_animation_module_default = /*#__PURE__*/__webpack_require__.n(contact_animation_module);

// CONCATENATED MODULE: ./components/contact/contact.js

var __jsx = external_react_default.a.createElement;








function Contact() {
  const widthLayer = Math.min(Object(window_dimensions["b" /* getWindowWidth */])(), 1920);
  const heightLayer = Object(window_dimensions["a" /* getWindowHeight */])();
  const social = [{
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
  return __jsx(external_framer_motion_["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationContactPage()
  }, __jsx(external_framer_["Frame"], {
    width: widthLayer,
    height: heightLayer,
    center: true,
    background: "200a48"
  }, __jsx("div", {
    className: contact_module_default.a.container
  }, __jsx(external_framer_["Stack"], {
    center: true,
    width: "100%",
    background: "200a48",
    direction: "vertical",
    gap: "0px"
  }, __jsx(external_framer_["Frame"], {
    width: "100%",
    height: "0px",
    center: "x",
    background: "red",
    className: contact_module_default.a.contact,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: animationElement(0.2)
  }, __jsx(external_framer_["Frame"], {
    width: "1027px",
    height: "0px",
    top: "-50px",
    center: "x",
    background: "blue"
  }, __jsx(png_secuence_animation["a" /* default */], {
    styles: contact_animation_module_default.a
  })))), __jsx(external_framer_["Stack"], {
    center: "x",
    bottom: 0,
    width: "100%",
    background: "200a48",
    direction: "vertical",
    gap: "px"
  }, __jsx(external_framer_["Frame"], {
    width: "100%",
    background: "200a48",
    height: "50px",
    className: contact_module_default.a.social,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: animationElement(0.6)
  }, "Social"), __jsx(external_framer_motion_["motion"].div, {
    className: contact_module_default.a.social_container,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: animationElement(0.8)
  }, social.map(x => __jsx(link_default.a, {
    href: x.link
  }, __jsx("img", {
    src: x.src,
    alt: x.alt,
    className: contact_module_default.a.social_logo
  }))))))));
}
/*
*/

/***/ }),

/***/ "Xs0G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWindowHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getWindowWidth; });
const hasWindow = false;
function getWindowHeight() {
  const height = hasWindow ? window.innerHeight : null;
  return height;
}
function getWindowWidth() {
  const width = hasWindow ? window.innerWidth : null;
  return width;
}

/***/ }),

/***/ "mAKX":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "contact_container__MyePu",
	"contact": "contact_contact__2mLcb",
	"mail": "contact_mail__1Ys6r",
	"social": "contact_social__1cKKB",
	"social_container": "contact_social_container__3Er-7",
	"social_logo": "contact_social_logo__31o0h",
	"center_items": "contact_center_items__2-kyY"
};

/***/ })

};;