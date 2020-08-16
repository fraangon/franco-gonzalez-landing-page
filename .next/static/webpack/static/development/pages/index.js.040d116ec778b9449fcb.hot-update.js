webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/about/about.js":
/*!***********************************!*\
  !*** ./components/about/about.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _personal_info_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal_info_box */ "./components/about/personal_info_box.js");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills */ "./components/about/skills.js");
/* harmony import */ var _experience_and_education__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience_and_education */ "./components/about/experience_and_education.js");
/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.module.css */ "./components/about/about.module.css");
/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_about_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/about/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function About() {
  return __jsx("div", {
    className: _about_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.about,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_personal_info_box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx(_skills__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(_experience_and_education__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }));
}

/***/ }),

/***/ "./components/about/about.module.css":
/*!*******************************************!*\
  !*** ./components/about/about.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./about.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/about/about.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./about.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/about/about.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./about.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/about/about.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/about/about.module.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/about/about.module.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".about_about__1jfcF{\n    background-color: var(--color-grey);\n}", "",{"version":3,"sources":["/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/about/about.module.css"],"names":[],"mappings":"AAAA;IACI,mCAAmC;AACvC","file":"about.module.css","sourcesContent":[".about{\n    background-color: var(--color-grey);\n}"]}]);
// Exports
exports.locals = {
	"about": "about_about__1jfcF"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/home.module.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/home/home.module.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".home_home__3Di1D{\n    background-color: var(--color-grey);\n}", "",{"version":3,"sources":["/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/home.module.css"],"names":[],"mappings":"AAAA;IACI,mCAAmC;AACvC","file":"home.module.css","sourcesContent":[".home{\n    background-color: var(--color-grey);\n}"]}]);
// Exports
exports.locals = {
	"home": "home_home__3Di1D"
};

/***/ })

})
//# sourceMappingURL=index.js.040d116ec778b9449fcb.hot-update.js.map