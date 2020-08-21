webpackHotUpdate("static/development/pages/home_example_page.js",{

/***/ "./components/home/background.js":
/*!***************************************!*\
  !*** ./components/home/background.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.module.css */ "./components/home/background.module.css");
/* harmony import */ var _background_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_background_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parallax-mousemove */ "./node_modules/react-parallax-mousemove/build/index.js");
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/background.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Background() {
  var style = {
    outter: {
      background: 'radial-gradient(50% 150%, #6CD7E8 50%, #59C2D3 100%)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    },
    inner: {
      width: 700,
      height: 500,
      position: 'absolute',
      margin: 'auto',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: 'center'
    },
    header: {
      fontFamily: 'Open Sans Condensed',
      textTransform: 'uppercase',
      color: 'white',
      textShadow: '0px 0px 2px #43AABA',
      fontSize: '50px',
      marginTop: '35px',
      fontWeight: 600
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
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a, {
    containerStyle: style.outter,
    fullHeight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: 0.05,
      yFactor: 0,
      springSettings: {
        stiffness: 50,
        damping: 30
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/shadow.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: 0.15,
      yFactor: 0,
      springSettings: {
        stiffness: 50,
        damping: 30
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/layer_3.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: 0.25,
      yFactor: 0.025,
      springSettings: {
        stiffness: 50,
        damping: 30
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/layer_2.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: 0.4,
      yFactor: 0.05,
      springSettings: {
        stiffness: 50,
        damping: 30
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/layer_1.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: style.inner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.infoLayerStyle,
    config: {
      xFactor: 0.2,
      yFactor: 0,
      springSettings: {
        stiffness: 50,
        damping: 30
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/layer_3.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.infoLayerStyle,
    config: {
      xFactor: 0.3,
      yFactor: 0,
      springSettings: {
        stiffness: 50,
        damping: 30
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/imgs/bg2.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.infoLayerStyle,
    config: {
      xFactor: 0.4,
      yFactor: 0,
      springSettings: {
        stiffness: 50,
        damping: 30
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/imgs/bg3.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  })))));
}

/***/ })

})
//# sourceMappingURL=home_example_page.js.38d0614263274d7983f3.hot-update.js.map