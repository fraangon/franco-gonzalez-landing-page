webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/projects_items/projects_items.js":
/*!**************************************************************!*\
  !*** ./components/projects/projects_items/projects_items.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects_items.module.css */ "./components/projects/projects_items/projects_items.module.css");
/* harmony import */ var _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projects_items_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _posts_posts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../posts/posts.js */ "./posts/posts.js");
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../window/window_dimensions.js */ "./components/window/window_dimensions.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/projects/projects_items/projects_items.js";

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
var Stack = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! framer */ "./node_modules/framer/build/framer.js", 7)).then(function (mod) {
    return mod.Stack;
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
var Page = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! framer */ "./node_modules/framer/build/framer.js", 7)).then(function (mod) {
    return mod.Page;
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
function ProjectsItems() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      ssrDone = _useState[0],
      setSsrDone = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSsrDone(true);
  }, []);

  if (ssrDone) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 14
      }
    }, __jsx(Frame, {
      name: "Mask",
      size: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__["getWindowWidth"])(),
      center: true,
      overflow: "hidden",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx(Stack, {
      size: 100,
      direction: "horizontal",
      alignment: "start",
      gap: "40",
      distribution: "start",
      x: -100,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, _posts_posts_js__WEBPACK_IMPORTED_MODULE_3__["posts"].map(function (aPost) {
      return __jsx(Frame, {
        key: aPost.title,
        backgroundColor: "#180233",
        height: '50vh',
        width: '40vh',
        className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.project_item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.project_item_text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }, __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }, aPost.title), __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }, aPost.type)), __jsx("img", {
        src: "/Min_projects.png",
        alt: "min",
        className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_min,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }));
    }))));
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, " Loading... ");
}
/*
{items.map(aItem => (
        
        <Frame key={aItem.name} backgroundColor='#180233' height={'50vh'} width={'40vh'} className={styles.project_item}>
        
            
            <div className={styles.project_item_text}>
            <h3>{aItem.name}</h3>
            <h4>{aItem.type}</h4>
            </div>

            <img src='/Min_projects.png' alt='min' className={styles.img_min}></img>

        </Frame>
            
        ))}

*/

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false

})
//# sourceMappingURL=projects.js.7af7b2b710d9ac7706d2.hot-update.js.map