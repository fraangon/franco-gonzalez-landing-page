webpackHotUpdate(2,{

/***/ "./components/contact/contact.js":
false,

/***/ "./components/contact/contact.module.css":
false,

/***/ "./components/contact/contact_animation.js":
false,

/***/ "./components/contact/contact_animation.module.css":
false,

/***/ "./components/png_sequence_animation/png_secuence_animation.js":
false,

/***/ "./components/projects/projects_items/projects_items.js":
/*!**************************************************************!*\
  !*** ./components/projects/projects_items/projects_items.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsItems; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _projects_items_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects_items.module.css */ "./components/projects/projects_items/projects_items.module.css");
/* harmony import */ var _projects_items_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projects_items_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _posts_posts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../posts/posts.js */ "./posts/posts.js");
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer */ "./node_modules/framer/build/framer.js");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _projects_items_animation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects_items_animation.js */ "./components/projects/projects_items/projects_items_animation.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/projects/projects_items/projects_items.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function ProjectsItems() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      ssrDone = _useState[0],
      setSsrDone = _useState[1];

  var position = Object(framer__WEBPACK_IMPORTED_MODULE_6__["useMotionValue"])(0);
  var i = 1;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSsrDone(true);
  }, []); // width consts

  var widthLayer = Math.min(Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_5__["getWindowWidth"])(), 1920);
  var widthItem = 40 * 0.01 * Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_5__["getWindowHeight"])();
  var widthItemAndGap = widthItem + 40;
  var lengthItems = _posts_posts_js__WEBPACK_IMPORTED_MODULE_4__["posts"].length;
  var widthSliderTotal = (lengthItems - 1) * widthItemAndGap + widthItem;
  var widthSlider = (widthLayer - 400) * 0.92; // slider controller

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(100),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      xOffset = _React$useState2[0],
      setXOffset = _React$useState2[1];

  var itemsPosition = Object(framer__WEBPACK_IMPORTED_MODULE_6__["useTransform"])(position, [0, widthSlider], [100, 100 - (widthSliderTotal - (widthLayer - 400))]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    name: "Mask",
    overflow: "hidden",
    height: "52vh",
    width: widthLayer - 200,
    x: -100,
    backgroundColor: "#200a48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
    size: 100,
    direction: "horizontal",
    top: "2vh",
    alignment: "start",
    gap: "40",
    distribution: "start",
    x: xOffset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, _posts_posts_js__WEBPACK_IMPORTED_MODULE_4__["posts"].map(function (aPost) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: '/projects/' + aPost.title.replace(' ', '_').toLowerCase(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
      exit: "exit",
      initial: "initial",
      animate: "animate",
      whileHover: "whileHover",
      whileTap: "whileTap",
      variants: Object(_projects_items_animation_js__WEBPACK_IMPORTED_MODULE_7__["itemAnimation"])(i),
      key: i++,
      backgroundColor: "#180233",
      height: '50vh',
      width: '40vh',
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.project_item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.project_item_text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, aPost.title), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, aPost.type)), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].img, {
      exit: "exit",
      initial: "initial",
      animate: "animate",
      variants: Object(_projects_items_animation_js__WEBPACK_IMPORTED_MODULE_7__["imgItemAnimation"])(i),
      src: aPost.thumbnail,
      alt: "min",
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_min,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 19
      }
    })));
  }))), __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    name: "Mask Izq",
    width: 120,
    backgroundColor: "#200a48",
    height: "62vh",
    x: -180,
    y: "-2.5vh",
    style: {
      filter: 'blur(15px)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    name: "Mask Der",
    width: 120,
    backgroundColor: "#200a48",
    height: "62vh",
    x: widthLayer - 340,
    y: "-2.5vh",
    style: {
      filter: 'blur(15px)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }), __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    name: 'Rail',
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: Object(_projects_items_animation_js__WEBPACK_IMPORTED_MODULE_7__["sliderAnimation"])(),
    width: widthLayer - 400,
    height: '1.6vh',
    radius: 0,
    position: "relative",
    left: '0px',
    background: "rgba(255,255,255,.1)",
    top: '55vh',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    name: 'Knob',
    width: '8%',
    height: '1.6vh',
    radius: 0,
    position: "relative",
    left: '0%',
    background: "rgba(255,255,255,.1)",
    drag: "x",
    dragConstraints: {
      left: 0,
      right: (widthLayer - 400) * 0.92
    },
    dragElastic: 0,
    dragMomentum: false,
    x: position,
    onDrag: function onDrag() {
      setXOffset(itemsPosition.get());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  })));
}

/***/ }),

/***/ "./components/projects/projects_items/projects_items.module.css":
/*!**********************************************************************!*\
  !*** ./components/projects/projects_items/projects_items.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./projects_items.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/projects/projects_items/projects_items.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./projects_items.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/projects/projects_items/projects_items.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./projects_items.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/projects/projects_items/projects_items.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

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
      scale: 1,
      transition: {
        duration: 0.9,
        ease: easing,
        delay: aIndex * 0.1
      }
    },
    exit: {
      y: -60,
      opacity: 0
    },
    whileHover: {
      y: -7,
      scale: 1.05
    },
    whileTap: {
      scale: 1.03
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
        duration: 0.4,
        ease: easing,
        delay: aIndex * 0.1 + 0.05
      }
    },
    exit: {
      y: 0,
      scale: 1,
      opacity: 0
    }
  };
}

function sliderAnimation() {
  return {
    initial: {
      x: -100,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: easing,
        delay: 0.5
      }
    },
    exit: {
      x: -100,
      opacity: 0
    }
  };
}



/***/ }),

/***/ "./components/window/window_dimensions.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/contact/contact.module.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/contact/contact_animation.module.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/projects/projects_items/projects_items.module.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/projects/projects_items/projects_items.module.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".projects_items_project_item__3HfLu{\n    display: flex;\n    flex-direction: column ;\n    justify-content: space-between;\n    margin:0;\n    padding: 0;\n}\n\n.projects_items_project_item_text__1_wIr{\n    padding: 4vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.projects_items_project_item_text__1_wIr h3 {\n    font-weight: 400;\n    font-size: 2.1vh;\n}\n\n.projects_items_project_item_text__1_wIr h4 {\n    font-weight: 400;\n    font-size: 1.5vh;\n}\n\n.projects_items_img_min__2_Z5e{\n    width: 40vh;\n    margin-top: 3.95vh;\n}\n\n.projects_items_projects_items_container__3KltH{\n    display: flex;\n    flex-direction: column;\n}", "",{"version":3,"sources":["/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/projects/projects_items/projects_items.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,8BAA8B;IAC9B,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B","file":"projects_items.module.css","sourcesContent":[".project_item{\n    display: flex;\n    flex-direction: column ;\n    justify-content: space-between;\n    margin:0;\n    padding: 0;\n}\n\n.project_item_text{\n    padding: 4vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.project_item_text h3 {\n    font-weight: 400;\n    font-size: 2.1vh;\n}\n\n.project_item_text h4 {\n    font-weight: 400;\n    font-size: 1.5vh;\n}\n\n.img_min{\n    width: 40vh;\n    margin-top: 3.95vh;\n}\n\n.projects_items_container{\n    display: flex;\n    flex-direction: column;\n}"]}]);
// Exports
exports.locals = {
	"project_item": "projects_items_project_item__3HfLu",
	"project_item_text": "projects_items_project_item_text__1_wIr",
	"img_min": "projects_items_img_min__2_Z5e",
	"projects_items_container": "projects_items_projects_items_container__3KltH"
};

/***/ }),

/***/ "./posts/posts.js":
/*!************************!*\
  !*** ./posts/posts.js ***!
  \************************/
/*! exports provided: posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
var posts = [{
  title: 'Luli Gonzalez',
  type: 'Motion Graphics',
  thumbnail: '/project_items/luli_gonzalez/thumb_luli_gonzalez.png',
  content: ['/project_items/luli_gonzalez/1.gif', '/project_items/luli_gonzalez/2.gif', '/project_items/luli_gonzalez/3.gif', '/project_items/luli_gonzalez/4.gif', '/project_items/luli_gonzalez/5.png']
}, {
  title: 'Marti Benza',
  type: 'Motion Graphics',
  thumbnail: '/project_items/default_thumb_projects.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Personal Portfolio',
  type: 'Web Develop',
  thumbnail: '/project_items/default_thumb_projects.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Paralax Background',
  type: 'Ux/Ui Desing',
  thumbnail: '/project_items/default_thumb_projects.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Behanse Redisign',
  type: 'Ux/Ui Design',
  thumbnail: '/project_items/default_thumb_projects.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}];


/***/ })

})
//# sourceMappingURL=2.4e55fb01204f309e3ba7.hot-update.js.map