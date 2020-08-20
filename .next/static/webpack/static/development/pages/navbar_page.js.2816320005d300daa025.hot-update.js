webpackHotUpdate("static/development/pages/navbar_page.js",{

/***/ "./components/navbar/nav_item.js":
/*!***************************************!*\
  !*** ./components/navbar/nav_item.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.module.css */ "./components/navbar/navbar.module.css");
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/navbar/nav_item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function NavItem(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nav_item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon_button,
    onClick: function onClick() {
      return setOpen(!open);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, props.text), open && props.children));
}

/***/ })

})
//# sourceMappingURL=navbar_page.js.2816320005d300daa025.hot-update.js.map