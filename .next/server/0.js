exports.ids = [0];
exports.modules = {

/***/ "./components/projects/carrusel/carrusel.js":
/*!**************************************************!*\
  !*** ./components/projects/carrusel/carrusel.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carrusel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer */ "framer");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/projects/carrusel/carrusel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const items = [{
  name: 'Name project 1',
  type: "Type project 1"
}, {
  name: 'Name project 2',
  type: "Type project 2"
}, {
  name: 'Name project 3',
  type: "Type project 3"
}, {
  name: 'Name project 4',
  type: "Type project 4"
}, {
  name: 'Name project 5',
  type: "Type project 5"
}];
function Carrusel() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, items.map(aItem => __jsx(framer__WEBPACK_IMPORTED_MODULE_1__["Frame"], {
    key: aItem.name,
    backgroundColor: "#180233",
    height: '50vh',
    width: '40vh',
    className: styles.project_item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: styles.project_item_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, aItem.name), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, aItem.type)), __jsx("img", {
    src: "/Min_projects.png",
    alt: "min",
    className: styles.img_min,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }))));
}
/*

*/

/***/ })

};;
//# sourceMappingURL=0.js.map