webpackHotUpdate("static/development/pages/projects/[title].js",{

/***/ "./pages/projects/[title].js":
/*!***********************************!*\
  !*** ./pages/projects/[title].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navbar/navbar */ "./components/navbar/navbar.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _posts_posts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../posts/posts.js */ "./posts/posts.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/pages/projects/[title].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var __N_SSG = true;
function Project(props) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "hola"));
}

function getAllPostsPaths() {
  return _posts_posts_js__WEBPACK_IMPORTED_MODULE_3__["posts"].map(function (aPost) {
    return {
      params: {
        id: titleToPath(_posts_posts_js__WEBPACK_IMPORTED_MODULE_3__["posts"].title)
      }
    };
  });
}

function titleToPath(aTitle) {
  return aTitle.replace(' ', '_').toLowerCase();
}
/*
function pathToTitle( aPath ) {
    return aPath.replace('_', ' ')
}

function getPostFromPath( aPath ){
    postData = posts.filter( (x) => {
        return x.title.toLowerCase() == pathToTitle( aPath );
    })
}
*/

/***/ })

})
//# sourceMappingURL=[title].js.505b8cfdc8379fcf9006.hot-update.js.map