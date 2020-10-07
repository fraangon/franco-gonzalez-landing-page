exports.ids = [11];
exports.modules = {

/***/ "QbYX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ProjectsItems; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/projects/projects_items/projects_items.module.css
var projects_items_module = __webpack_require__("xNXS");
var projects_items_module_default = /*#__PURE__*/__webpack_require__.n(projects_items_module);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");

// EXTERNAL MODULE: ./posts/posts.js
var posts = __webpack_require__("cHGu");

// EXTERNAL MODULE: ./components/window/window_dimensions.js
var window_dimensions = __webpack_require__("Xs0G");

// EXTERNAL MODULE: external "framer"
var external_framer_ = __webpack_require__("TFn0");

// CONCATENATED MODULE: ./components/projects/projects_items/projects_items_animation.js
const easing = [0.6, -0.05, 0.01, 0.99];

function itemAnimation(aIndex) {
  return {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: easing,
        delay: aIndex * 0.1
      }
    },
    exit: {
      y: -60,
      opacity: 0
    },
    whileHover: {
      y: -7,
      scale: 1.05
    },
    whileTap: {
      scale: 1.03
    }
  };
}

function imgItemAnimation(aIndex) {
  return {
    initial: {
      y: 100,
      scale: 1,
      opacity: 0
    },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easing,
        delay: aIndex * 0.1 + 0.05
      }
    },
    exit: {
      y: 0,
      scale: 1,
      opacity: 0
    }
  };
}

function sliderAnimation() {
  return {
    initial: {
      x: -100,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: easing,
        delay: 0.5
      }
    },
    exit: {
      x: -100,
      opacity: 0
    }
  };
}


// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/projects/projects_items/projects_items.js

var __jsx = external_react_default.a.createElement;









function ProjectsItems() {
  const {
    0: ssrDone,
    1: setSsrDone
  } = Object(external_react_["useState"])(false);
  const position = Object(external_framer_["useMotionValue"])(0);
  let i = 1;
  Object(external_react_["useEffect"])(() => {
    setSsrDone(true);
  }, []); // width consts

  const widthLayer = Math.min(Object(window_dimensions["b" /* getWindowWidth */])(), 1920);
  const widthItem = 40 * 0.01 * Object(window_dimensions["a" /* getWindowHeight */])();
  const widthItemAndGap = widthItem + 40;
  const lengthItems = posts["a" /* posts */].length;
  const widthSliderTotal = (lengthItems - 1) * widthItemAndGap + widthItem;
  const widthSlider = (widthLayer - 400) * 0.92; // slider controller

  const [xOffset, setXOffset] = external_react_default.a.useState(100);
  const itemsPosition = Object(external_framer_["useTransform"])(position, [0, widthSlider], [100, 100 - (widthSliderTotal - (widthLayer - 400))]);
  return __jsx("div", null, __jsx(external_framer_["Frame"], {
    name: "Mask",
    overflow: "hidden",
    height: "52vh",
    width: widthLayer - 200,
    x: -100,
    backgroundColor: "#200a48"
  }, __jsx(external_framer_["Stack"], {
    size: 100,
    direction: "horizontal",
    top: "2vh",
    alignment: "start",
    gap: "40",
    distribution: "start",
    x: xOffset
  }, posts["a" /* posts */].map(aPost => __jsx(link_default.a, {
    href: '/projects/' + aPost.title.replace(' ', '_').toLowerCase()
  }, __jsx(external_framer_["Frame"], {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    whileHover: "whileHover",
    whileTap: "whileTap",
    variants: itemAnimation(i),
    key: i++,
    backgroundColor: "#180233",
    height: '50vh',
    width: '40vh',
    className: projects_items_module_default.a.project_item
  }, __jsx("div", {
    className: projects_items_module_default.a.project_item_text
  }, __jsx("h3", null, aPost.title), __jsx("h4", null, aPost.type)), __jsx(external_framer_motion_["motion"].img, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: imgItemAnimation(i),
    src: aPost.thumbnail,
    alt: "min",
    className: projects_items_module_default.a.img_min
  })))))), __jsx(external_framer_["Frame"], {
    name: "Mask Izq",
    width: 120,
    backgroundColor: "#200a48",
    height: "62vh",
    x: -180,
    y: "-2.5vh",
    style: {
      filter: 'blur(15px)'
    }
  }), __jsx(external_framer_["Frame"], {
    name: "Mask Der",
    width: 120,
    backgroundColor: "#200a48",
    height: "62vh",
    x: widthLayer - 340,
    y: "-2.5vh",
    style: {
      filter: 'blur(15px)'
    }
  }), __jsx(external_framer_["Frame"], {
    name: 'Rail',
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: sliderAnimation(),
    width: widthLayer - 400,
    height: '1.6vh',
    radius: 0,
    position: "relative",
    left: '0px',
    background: "rgba(255,255,255,.1)",
    top: '55vh'
  }, __jsx(external_framer_["Frame"], {
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
    }
  })));
}

/***/ }),

/***/ "Xs0G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWindowHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getWindowWidth; });
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

/***/ "cHGu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return posts; });
const posts = [{
  title: 'Luli Gonzalez',
  type: 'Motion Graphics',
  thumbnail: '/project_items/luli_gonzalez/thumb_luli_gonzalez.png',
  content: ['/project_items/luli_gonzalez/1.gif', '/project_items/luli_gonzalez/2.gif', '/project_items/luli_gonzalez/3.gif', '/project_items/luli_gonzalez/4.gif', '/project_items/luli_gonzalez/5.png']
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


/***/ }),

/***/ "xNXS":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"project_item": "projects_items_project_item__3HfLu",
	"project_item_text": "projects_items_project_item_text__1_wIr",
	"img_min": "projects_items_img_min__2_Z5e",
	"projects_items_container": "projects_items_projects_items_container__3KltH"
};

/***/ })

};;