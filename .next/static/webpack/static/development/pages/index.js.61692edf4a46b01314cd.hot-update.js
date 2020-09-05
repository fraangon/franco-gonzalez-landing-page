webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/background/background copy.js":
/*!*******************************************************!*\
  !*** ./components/home/background/background copy.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundCpy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.module.css */ "./components/home/background/background.module.css");
/* harmony import */ var _background_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_background_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parallax-mousemove */ "./node_modules/react-parallax-mousemove/build/index.js");
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/background/background copy.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Frame = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
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
function BackgroundCpy() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      ssrDone = _useState[0],
      setSsrDone = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSsrDone(true);
  }, []);
  var widthBg = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_3__["getWindowHeight"])() * (7680 / 4320);
  var heightBg = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_3__["getWindowHeight"])();
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
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullHeight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
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
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/background_parallax/bg.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
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
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/background_parallax/layer_3.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
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
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/background_parallax/layer_2.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
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
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/background_parallax/layer_1.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.61692edf4a46b01314cd.hot-update.js.map