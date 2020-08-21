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
    paragraph: {
      fontFamily: 'Roboto',
      fontSize: '20px',
      color: 'white',
      letterSpacing: '0.62px',
      lineHeight: '30px',
      fontWeight: 300
    },
    button: {
      fontFamily: 'Roboto',
      borderRadius: '100px',
      background: '#247B8A',
      textDecoration: 'none',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '40px',
      fontWeight: 100,
      display: 'block'
    },
    infoLayerStyle: {
      position: 'relative',
      marginTop: '-60px'
    },
    bgLayerStyle: {
      position: 'absolute',
      height: '100%',
      transform: 'translate(-15%, 17%)'
    }
  };
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a, {
    containerStyle: style.outter,
    fullHeight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/imgs/bg4.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/imgs/bg5.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/imgs/bg7.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/imgs/bg6.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: style.inner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/imgs/bg1.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/imgs/bg2.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/imgs/bg3.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  })))));
}

/***/ })

})
//# sourceMappingURL=home_example_page.js.8c229c937e093c8a8dcb.hot-update.js.map