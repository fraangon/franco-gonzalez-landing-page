webpackHotUpdate("static/development/pages/projects/[id].js",{

/***/ "./pages/projects/[id].js":
/*!********************************!*\
  !*** ./pages/projects/[id].js ***!
  \********************************/
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
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/pages/projects/[id].js";

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
    selected: "PROJECTS",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "hola"))));
}

function titleToId(aTitle) {
  return aTitle.replace(' ', '_').toLowerCase();
}

function idIsPost(aId, aPost) {
  return aPost.title.toLowerCase() == aId.replace('_', ' ');
}

function getDataProjectFromId(aId) {
  return _posts_posts_js__WEBPACK_IMPORTED_MODULE_3__["posts"].filter(function (aPost) {
    return pathIsPost(aId, aPost);
  });
}

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
  content: ['/public/project_items/luli_gonzalez/1.gif', '/public/project_items/luli_gonzalez/2.gif', '/public/project_items/luli_gonzalez/3.gif', '/public/project_items/luli_gonzalez/4.gif', '/public/project_items/luli_gonzalez/5.png']
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
//# sourceMappingURL=[id].js.cb0f373d8d164d9c55f2.hot-update.js.map