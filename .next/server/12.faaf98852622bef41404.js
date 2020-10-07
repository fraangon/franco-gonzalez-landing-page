exports.ids = [12];
exports.modules = {

/***/ "TQKn":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contenedor_general": "project_page_contenedor_general__R9Y7i",
	"contenedor_header": "project_page_contenedor_header__3b_l6",
	"title": "project_page_title__e2YUw",
	"type": "project_page_type__3EUOA",
	"contenedor_back": "project_page_contenedor_back__VfeMD",
	"back": "project_page_back__tVD_x",
	"img": "project_page_img__3ZVwO"
};

/***/ }),

/***/ "W/4O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ProjectPage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "framer"
var external_framer_ = __webpack_require__("TFn0");

// EXTERNAL MODULE: ./components/window/window_dimensions.js
var window_dimensions = __webpack_require__("Xs0G");

// EXTERNAL MODULE: ./components/project_page/project_page.module.css
var project_page_module = __webpack_require__("TQKn");
var project_page_module_default = /*#__PURE__*/__webpack_require__.n(project_page_module);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/project_page/project_page_animation.js
const easing = [0.6, -0.05, 0.01, 0.99];

function animationElement(unDelay) {
  return {
    initial: {
      opacity: 0,
      y: 50
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


// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./components/project_page/project_page.js

var __jsx = external_react_default.a.createElement;






function ProjectPage(props) {
  const widthLayer = Math.min(Object(window_dimensions["b" /* getWindowWidth */])(), 1400);
  return __jsx(external_framer_motion_["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationPage()
  }, __jsx(external_framer_["Frame"], {
    top: 225,
    width: widthLayer,
    center: true,
    background: "1b1b1b"
  }, __jsx("div", {
    className: project_page_module_default.a.contenedor_general
  }, __jsx("div", {
    className: project_page_module_default.a.contenedor_header
  }, __jsx(external_framer_motion_["motion"].h3, {
    className: project_page_module_default.a.title,
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationElement(0.2)
  }, props.dataProject.title), __jsx(external_framer_motion_["motion"].h4, {
    className: project_page_module_default.a.type,
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationElement(0.4)
  }, props.dataProject.type)), props.dataProject.content.map(aContentPath => __jsx("div", null, __jsx("img", {
    src: aContentPath,
    className: project_page_module_default.a.img
  }))), __jsx("div", {
    className: project_page_module_default.a.contenedor_back
  }, __jsx(link_default.a, {
    href: "/projects"
  }, __jsx("a", {
    className: project_page_module_default.a.back
  }, " Back to Projects "))))));
}

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

/***/ })

};;