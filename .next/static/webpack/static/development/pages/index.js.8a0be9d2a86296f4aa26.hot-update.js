webpackHotUpdate("static/development/pages/index.js",{

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
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! framer */ "./node_modules/framer/build/framer.js", 7)).then(function (mod) {
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
      style: {
        zIndex: '200'
      },
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
        lineNumber: 53,
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
        lineNumber: 55,
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
        lineNumber: 63,
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
        lineNumber: 76,
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
        lineNumber: 85,
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
        lineNumber: 98,
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
        lineNumber: 107,
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
        lineNumber: 120,
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
        lineNumber: 129,
        columnNumber: 25
      }
    }))));
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, "Loading...");
}
/*

*/

/***/ })

})
//# sourceMappingURL=index.js.8a0be9d2a86296f4aa26.hot-update.js.map