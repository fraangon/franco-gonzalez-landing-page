webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/home/bg/bg.js":
/*!**********************************!*\
  !*** ./components/home/bg/bg.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-parallax-mousemove */ "./node_modules/react-parallax-mousemove/build/index.js");
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _bg_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bg_animation */ "./components/home/bg/bg_animation.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/bg/bg.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Frame = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! framer */ "./node_modules/framer/build/framer.js", 7)).then(function (mod) {
    return mod.Frame;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! framer */ "./node_modules/framer/build/framer.js")];
    },
    modules: ['framer']
  }
});
function Bg() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      ssrDone = _useState[0],
      setSsrDone = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSsrDone(true);
  }, []);
  var widthBg = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])() * (7680 / 4320);
  var heightBg = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])(); // Styles for the mouse paralax efect

  var style = {
    outter: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      marginLeft: 'auto',
      marginRigth: 'auto'
    },
    infoLayerStyle: {
      position: 'relative'
    },
    bgLayerStyle: {
      position: 'absolute',
      height: '100%'
    }
  };

  if (ssrDone) {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      exit: "exit",
      initial: "initial",
      animate: "animate",
      variants: _bg_animation__WEBPACK_IMPORTED_MODULE_5__["animationBG"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_3___default.a, {
      containerStyle: style.outter,
      fullHeight: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_3___default.a.Layer, {
      layerStyle: style.bgLayerStyle,
      config: {
        xFactor: -0.03,
        yFactor: 0.03,
        springSettings: {
          stiffness: 150,
          damping: 50
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, __jsx(Frame, {
      height: heightBg,
      width: widthBg,
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/shadow.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        mixBlendMode: "multiply"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_3___default.a.Layer, {
      layerStyle: style.bgLayerStyle,
      config: {
        xFactor: 0.05,
        yFactor: -0.03,
        springSettings: {
          stiffness: 150,
          damping: 50
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, __jsx(Frame, {
      height: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])(),
      width: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])() * (7680 / 4320),
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/layer_3.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 25
      }
    })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_3___default.a.Layer, {
      layerStyle: style.bgLayerStyle,
      config: {
        xFactor: 0.10,
        yFactor: -0.06,
        springSettings: {
          stiffness: 150,
          damping: 50
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    }, __jsx(Frame, {
      height: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])(),
      width: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])() * (7680 / 4320),
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/layer_2.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 25
      }
    })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_3___default.a.Layer, {
      layerStyle: style.bgLayerStyle,
      config: {
        xFactor: 0.15,
        yFactor: -0.09,
        springSettings: {
          stiffness: 150,
          damping: 50
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    }, __jsx(Frame, {
      height: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])(),
      width: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])() * (7680 / 4320),
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/layer_1.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    }))));
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "Loading...");
}
/*

*/

/***/ }),

/***/ "./components/navbar/navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.module.css */ "./components/navbar/navbar.module.css");
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav_item */ "./components/navbar/nav_item.js");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer */ "./node_modules/framer/build/framer.js");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navbar_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar_animation */ "./components/navbar/navbar_animation.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/navbar/navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function NavBar(props) {
  return __jsx(framer__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: _navbar_animation__WEBPACK_IMPORTED_MODULE_4__["animationName"],
    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "fg_logo.svg",
    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("nav", {
    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selected: props.selected,
    itemName: "HOME",
    link: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selected: props.selected,
    itemName: "PROJECTS",
    link: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selected: props.selected,
    itemName: "CONTACT",
    link: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  })))));
}

/***/ }),

/***/ "./components/navbar/navbar_animation.js":
/*!***********************************************!*\
  !*** ./components/navbar/navbar_animation.js ***!
  \***********************************************/
/*! exports provided: easing, animationName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationName", function() { return animationName; });
var easing = [0.6, -0.05, 0.01, 0.99];
var animationName = {
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
//# sourceMappingURL=projects.js.bfc313d70b86602f04ba.hot-update.js.map