exports.ids = [0];
exports.modules = {

/***/ "./components/projects/projects_items/projects_items.js":
/*!**************************************************************!*\
  !*** ./components/projects/projects_items/projects_items.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects_items.module.css */ "./components/projects/projects_items/projects_items.module.css");
/* harmony import */ var _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projects_items_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _posts_posts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../posts/posts.js */ "./posts/posts.js");
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer */ "framer");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/projects/projects_items/projects_items.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // TBR: No necesito importar dinamicamente.
//const Frame = dynamic( () => import('framer').then((mod) => mod.Frame), { ssr: false } );
//const Stack = dynamic( () => import('framer').then((mod) => mod.Stack), { ssr: false } );
//const useMotionValue = dynamic( () => import('framer').then((mod) => mod.useMotionValue), { ssr: false } );

function ProjectsItems() {
  const {
    0: ssrDone,
    1: setSsrDone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const position = Object(framer__WEBPACK_IMPORTED_MODULE_5__["useMotionValue"])(0);
  let i = 1;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSsrDone(true);
  }, []); // width consts

  const widthLayer = Math.min(Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__["getWindowWidth"])(), 1920);
  const widthItem = 40 * 0.01 * Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__["getWindowHeight"])();
  const widthItemAndGap = widthItem + 40;
  const lengthItems = _posts_posts_js__WEBPACK_IMPORTED_MODULE_3__["posts"].length;
  const widthSliderTotal = (lengthItems - 1) * widthItemAndGap + widthItem;
  const widthSlider = (widthLayer - 400) * 0.92; // slider controller

  const [xOffset, setXOffset] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(100);
  const itemsPosition = Object(framer__WEBPACK_IMPORTED_MODULE_5__["useTransform"])(position, [0, widthSlider], [100, 100 - (widthSliderTotal - (widthLayer - 400))]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_5__["Frame"], {
    name: "Mask",
    overflow: "hidden",
    height: "50vh",
    width: widthLayer - 200,
    x: -100,
    backgroundColor: "#200a48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_5__["Stack"], {
    size: 100,
    direction: "horizontal",
    alignment: "start",
    gap: "40",
    distribution: "start",
    x: xOffset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, _posts_posts_js__WEBPACK_IMPORTED_MODULE_3__["posts"].map(aPost => __jsx(framer__WEBPACK_IMPORTED_MODULE_5__["Frame"], {
    key: i++,
    backgroundColor: "#180233",
    height: '50vh',
    width: '40vh',
    className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.project_item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.project_item_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, aPost.title), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, aPost.type)), __jsx("img", {
    src: "/Min_projects.png",
    alt: "min",
    className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_min,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }))))), __jsx(framer__WEBPACK_IMPORTED_MODULE_5__["Frame"], {
    name: "Mask Izq",
    width: 120,
    backgroundColor: "#200a48",
    height: "55vh",
    x: -180,
    y: "-2.5vh",
    style: {
      filter: 'blur(15px)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx(framer__WEBPACK_IMPORTED_MODULE_5__["Frame"], {
    name: "Mask Der",
    width: 120,
    backgroundColor: "#200a48",
    height: "55vh",
    x: widthLayer - 340,
    y: "-2.5vh",
    style: {
      filter: 'blur(15px)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx(framer__WEBPACK_IMPORTED_MODULE_5__["Frame"], {
    name: 'Rail',
    width: widthLayer - 400,
    height: '1.6vh',
    radius: 0,
    position: "relative",
    left: '0px',
    background: "rgba(255,255,255,.1)",
    top: '55vh',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_5__["Frame"], {
    name: 'Knob',
    width: '8%',
    height: '1.6vh',
    radius: 0,
    position: "relative",
    left: '0%',
    background: "rgba(255,255,255,.1)",
    drag: "x",
    dragConstraints: {
      left: 0,
      right: (widthLayer - 400) * 0.92
    },
    dragElastic: 0,
    dragMomentum: false,
    x: position,
    onDrag: function () {
      setXOffset(itemsPosition.get());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  })));
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

/***/ "./components/projects/projects_items/projects_items.module.css":
/*!**********************************************************************!*\
  !*** ./components/projects/projects_items/projects_items.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"project_item": "projects_items_project_item__3HfLu",
	"project_item_text": "projects_items_project_item_text__1_wIr",
	"img_min": "projects_items_img_min__2_Z5e",
	"projects_items_container": "projects_items_projects_items_container__3KltH"
};

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
const posts = [{
  title: 'Luli Gonzalez',
  type: 'Motion Graphics',
  thumbnail: 'luli_gonzalez_thumb.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Marti Benza',
  type: 'Motion Graphics',
  thumbnail: 'marti_benza_thumb.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Personal Portfolio',
  type: 'Web Develop',
  thumbnail: 'luli_gonzalez_thumb.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Paralax Background',
  type: 'Ux/Ui Desing',
  thumbnail: 'marti_benza_thumb.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Behanse Redisign',
  type: 'Ux/Ui Design',
  thumbnail: 'marti_benza_thumb.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}];


/***/ })

};;
//# sourceMappingURL=0.js.map