module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/bg.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/home/bg_scroll/bg_scroll.js":
/*!************************************************!*\
  !*** ./components/home/bg_scroll/bg_scroll.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BgScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bg_scroll_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bg_scroll.module.css */ "./components/home/bg_scroll/bg_scroll.module.css");
/* harmony import */ var _bg_scroll_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bg_scroll_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-parallax-mousemove */ "react-parallax-mousemove");
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/bg_scroll/bg_scroll.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Frame = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! framer */ "framer", 7)).then(mod => mod.Frame), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! framer */ "framer")],
    modules: ['framer']
  }
});
function BgScroll() {
  const {
    0: ssrDone,
    1: setSsrDone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSsrDone(true);
  }, []);
  const widthBg = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])() * (7680 / 4320);
  const heightBg = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])();
  const style = {
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
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _bg_scroll_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contaner_fix_pos,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _bg_scroll_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.home,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _bg_scroll_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, __jsx("h2", {
      className: style.bgLayerStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }
    }, "I,m "), __jsx("h1", {
      className: style.bgLayerStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 29
      }
    }, "Franco"), __jsx("h1", {
      className: style.bgLayerStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 29
      }
    }, "Gonzalez"), __jsx("h2", {
      className: style.bgLayerStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, " .")))), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_4___default.a, {
      containerStyle: style.outter,
      fullHeight: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_4___default.a.Layer, {
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
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx(Frame, {
      height: heightBg,
      width: widthBg,
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/shadow.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        mixBlendMode: "multiply"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_4___default.a.Layer, {
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
        lineNumber: 79,
        columnNumber: 21
      }
    }, __jsx(Frame, {
      height: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])(),
      width: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])() * (7680 / 4320),
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/layer_3.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_4___default.a.Layer, {
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
        lineNumber: 101,
        columnNumber: 21
      }
    }, __jsx(Frame, {
      height: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])(),
      width: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])() * (7680 / 4320),
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/layer_2.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_4___default.a.Layer, {
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
        lineNumber: 123,
        columnNumber: 21
      }
    }, __jsx(Frame, {
      height: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])(),
      width: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])() * (7680 / 4320),
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/layer_1.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }))));
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "Loading...");
}
/*

*/

/***/ }),

/***/ "./components/home/bg_scroll/bg_scroll.module.css":
/*!********************************************************!*\
  !*** ./components/home/bg_scroll/bg_scroll.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"home": "bg_scroll_home__2iBNw",
	"title": "bg_scroll_title__3np2o",
	"title_regular": "bg_scroll_title_regular__1TsGr",
	"title_bold": "bg_scroll_title_bold__1fwC4",
	"subtitle": "bg_scroll_subtitle__2ZFSB",
	"fix_pos": "bg_scroll_fix_pos__2oFO-",
	"container_fix_pos": "bg_scroll_container_fix_pos__1MVDH",
	"plain__bg": "bg_scroll_plain__bg__1clyI"
};

/***/ }),

/***/ "./components/home/home/home.js":
/*!**************************************!*\
  !*** ./components/home/home/home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module.css */ "./components/home/home/home.module.css");
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _motion_animation_motion_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../motion_animation/motion_animation */ "./components/home/motion_animation/motion_animation.js");
/* harmony import */ var _web_animation_web_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web_animation/web_animation */ "./components/home/web_animation/web_animation.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-parallax-mousemove */ "react-parallax-mousemove");
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/home/home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Frame = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! framer */ "framer", 7)).then(mod => mod.Frame), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! framer */ "framer")],
    modules: ['framer']
  }
});
const easing = [0.6, -0.05, 0.01, 0.99];
const animationName = {
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
const animationMotion = {
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
      delay: 0.2
    }
  },
  exit: {
    x: 0,
    opacity: 0
  }
};
const animationWeb = {
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
      delay: 0.4
    }
  },
  exit: {
    x: 0,
    opacity: 0
  }
};
const animationBG = {
  initial: {
    scale: 1.2,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: easing
    }
  },
  exit: {
    scale: 0.95,
    opacity: 0
  }
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
function Home({
  children,
  home
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contaner_fix_pos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    variants: stagger,
    animate: "animate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationName,
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_regular,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "I,m "), __jsx("h1", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, "Franco"), __jsx("h1", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "Gonzalez"), __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_regular,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, " .")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationMotion,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx(_motion_animation_motion_animation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: animationWeb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx(_web_animation_web_animation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }))))));
}

/***/ }),

/***/ "./components/home/home/home.module.css":
/*!**********************************************!*\
  !*** ./components/home/home/home.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"home": "home_home__1KXP4",
	"title": "home_title__3Uklb",
	"title_regular": "home_title_regular__1sqZG",
	"title_bold": "home_title_bold__3TDwb",
	"subtitle": "home_subtitle__1Hu2u",
	"fix_pos": "home_fix_pos__1VXCr",
	"container_fix_pos": "home_container_fix_pos__2eu9g",
	"plain__bg": "home_plain__bg__1qd14"
};

/***/ }),

/***/ "./components/home/motion_animation/motion_animation.js":
/*!**************************************************************!*\
  !*** ./components/home/motion_animation/motion_animation.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MotionAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motion_animation.module.css */ "./components/home/motion_animation/motion_animation.module.css");
/* harmony import */ var _motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/motion_animation/motion_animation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MotionAnimation() {
  const {
    0: playAnimation,
    1: setPlayAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: playAgainAnimation,
    1: setPlayAgainAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const defaultStyle = _motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.motion_animation;
  const animationStyle1 = _motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.motion_animation_play;
  const animationStyle2 = _motion_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.motion_animation_play_again;

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
    className: getStyle(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  });
}

/***/ }),

/***/ "./components/home/motion_animation/motion_animation.module.css":
/*!**********************************************************************!*\
  !*** ./components/home/motion_animation/motion_animation.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"motion_animation": "motion_animation_motion_animation__3S-hR",
	"motion_animation_play": "motion_animation_motion_animation_play__1rhud",
	"motion_play_animation": "motion_animation_motion_play_animation__symkI",
	"motion_animation_play_again": "motion_animation_motion_animation_play_again__3OWCP",
	"motion_play_animation_again": "motion_animation_motion_play_animation_again__Vp_TY"
};

/***/ }),

/***/ "./components/home/web_animation/web_animation.js":
/*!********************************************************!*\
  !*** ./components/home/web_animation/web_animation.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web_animation.module.css */ "./components/home/web_animation/web_animation.module.css");
/* harmony import */ var _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web_animation_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/web_animation/web_animation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function WebAnimation() {
  const {
    0: playAnimation,
    1: setPlayAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: playAgainAnimation,
    1: setPlayAgainAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const defaultStyle = _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.web_animation;
  const animationStyle1 = _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.web_animation_play;
  const animationStyle2 = _web_animation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.web_animation_play_again;

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
    className: getStyle(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  });
}

/***/ }),

/***/ "./components/home/web_animation/web_animation.module.css":
/*!****************************************************************!*\
  !*** ./components/home/web_animation/web_animation.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"web_animation": "web_animation_web_animation__Tj3Yu",
	"web_animation_play": "web_animation_web_animation_play__2eRan",
	"web_play_animation": "web_animation_web_play_animation__3zLSW",
	"web_animation_play_again": "web_animation_web_animation_play_again__22skn",
	"web_play_animation_again": "web_animation_web_play_animation_again__3aZm_"
};

/***/ }),

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/layout/layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Layout({
  children,
  home
}) {
  return __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, children));
}

/***/ }),

/***/ "./components/layout/layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/layout.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout_layout__2edI9"
};

/***/ }),

/***/ "./components/window/window_dimensions.js":
/*!************************************************!*\
  !*** ./components/window/window_dimensions.js ***!
  \************************************************/
/*! exports provided: getWindowHeight, getWindowWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowHeight", function() { return getWindowHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowWidth", function() { return getWindowWidth; });
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

/***/ "./pages/bg.js":
/*!*********************!*\
  !*** ./pages/bg.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_home_bg_scroll_bg_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/bg_scroll/bg_scroll */ "./components/home/bg_scroll/bg_scroll.js");
/* harmony import */ var _components_home_home_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/home/home */ "./components/home/home/home.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/pages/bg.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Main() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx(_components_home_home_home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }))), __jsx(_components_home_bg_scroll_bg_scroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));
}
/*

*/

/***/ }),

/***/ 4:
/*!***************************!*\
  !*** multi ./pages/bg.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/pages/bg.js */"./pages/bg.js");


/***/ }),

/***/ "framer":
/*!*************************!*\
  !*** external "framer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-parallax-mousemove":
/*!*******************************************!*\
  !*** external "react-parallax-mousemove" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-parallax-mousemove");

/***/ })

/******/ });
//# sourceMappingURL=bg.js.map