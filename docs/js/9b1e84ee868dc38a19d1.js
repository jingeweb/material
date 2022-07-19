"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_home_index_ts"],{

/***/ "./src/pages/home/home-icon-circle.ts":
/*!********************************************!*\
  !*** ./src/pages/home/home-icon-circle.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeIconCircle": () => (/* binding */ HomeIconCircle)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _home_icon_circle_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-icon-circle.html */ "./src/pages/home/home-icon-circle.html");


class HomeIconCircle extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
HomeIconCircle.template = _home_icon_circle_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/home/home-icon-devices.ts":
/*!*********************************************!*\
  !*** ./src/pages/home/home-icon-devices.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeIconDevices": () => (/* binding */ HomeIconDevices)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _home_icon_devices_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-icon-devices.html */ "./src/pages/home/home-icon-devices.html");


class HomeIconDevices extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
HomeIconDevices.template = _home_icon_devices_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/home/home-icon-square.ts":
/*!********************************************!*\
  !*** ./src/pages/home/home-icon-square.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeIconSquare": () => (/* binding */ HomeIconSquare)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _home_icon_square_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-icon-square.html */ "./src/pages/home/home-icon-square.html");


class HomeIconSquare extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
HomeIconSquare.template = _home_icon_square_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/home/home-icon.ts":
/*!*************************************!*\
  !*** ./src/pages/home/home-icon.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeIcon": () => (/* binding */ HomeIcon)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _home_icon_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-icon.html */ "./src/pages/home/home-icon.html");


class HomeIcon extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
HomeIcon.template = _home_icon_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/home/index.ts":
/*!*********************************!*\
  !*** ./src/pages/home/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHome": () => (/* binding */ PageHome)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service */ "./src/service/index.ts");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/home/index.html");



class PageHome extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  __afterRender() {
    _service__WEBPACK_IMPORTED_MODULE_1__.pageState.isSplash = true;
    _service__WEBPACK_IMPORTED_MODULE_1__.pageState.title = "Jinge Material - 构建在 Jinge 框架上的 Material Design 组件库";
  }
}
PageHome.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/home/home-icon-circle.html":
/*!**********************************************!*\
  !*** ./src/pages/home/home-icon-circle.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/ripple */ "../jinge-material/lib/ripple/index.js");
/* harmony import */ var _home_icon_circle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-icon-circle.scss */ "./src/pages/home/home-icon-circle.scss");
/* harmony import */ var _home_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-icon */ "./src/pages/home/home-icon.ts");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        debugName: "attrs_of_<HomeIcon>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        slots: {
          'default': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: _home_icon_circle_scss__WEBPACK_IMPORTED_MODULE_2__["default"].circle
                },
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-ripple>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    centered: true
                  });
                  const el = jinge_material_lib_ripple__WEBPACK_IMPORTED_MODULE_1__.Ripple.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: _home_icon_circle_scss__WEBPACK_IMPORTED_MODULE_2__["default"].circle
                },
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: _home_icon_circle_scss__WEBPACK_IMPORTED_MODULE_2__["default"].circle
                },
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      class: _home_icon_circle_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeIconCircle
    });
    const el = _home_icon__WEBPACK_IMPORTED_MODULE_3__.HomeIcon.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "./src/pages/home/home-icon-devices.html":
/*!***********************************************!*\
  !*** ./src/pages/home/home-icon-devices.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _home_icon_devices_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-icon-devices.scss */ "./src/pages/home/home-icon-devices.scss");
/* harmony import */ var _home_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-icon */ "./src/pages/home/home-icon.ts");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        debugName: "attrs_of_<HomeIcon>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        slots: {
          'default': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: _home_icon_devices_scss__WEBPACK_IMPORTED_MODULE_1__["default"].device
                },
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: _home_icon_devices_scss__WEBPACK_IMPORTED_MODULE_1__["default"].device
                },
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: _home_icon_devices_scss__WEBPACK_IMPORTED_MODULE_1__["default"].device
                },
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      class: _home_icon_devices_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIconDevices
    });
    const el = _home_icon__WEBPACK_IMPORTED_MODULE_2__.HomeIcon.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "./src/pages/home/home-icon-square.html":
/*!**********************************************!*\
  !*** ./src/pages/home/home-icon-square.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _home_icon_square_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-icon-square.scss */ "./src/pages/home/home-icon-square.scss");
/* harmony import */ var _home_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-icon */ "./src/pages/home/home-icon.ts");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        debugName: "attrs_of_<HomeIcon>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        slots: {
          'default': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: _home_icon_square_scss__WEBPACK_IMPORTED_MODULE_1__["default"].square
                },
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: _home_icon_square_scss__WEBPACK_IMPORTED_MODULE_1__["default"].square
                },
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: _home_icon_square_scss__WEBPACK_IMPORTED_MODULE_1__["default"].square
                },
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      class: _home_icon_square_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIconSquare
    });
    const el = _home_icon__WEBPACK_IMPORTED_MODULE_2__.HomeIcon.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "./src/pages/home/home-icon.html":
/*!***************************************!*\
  !*** ./src/pages/home/home-icon.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _home_icon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-icon.scss */ "./src/pages/home/home-icon.scss");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
        const renderFn = __ac && __ac['default'] ? __ac['default'] : null;
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<parameter>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              default: renderFn || jinge__WEBPACK_IMPORTED_MODULE_0__.emptyRenderFn
            }
          }
        });
        const el = (new jinge__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent(attrs, []))[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, ([_home_icon_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIcon, vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/home/index.html":
/*!***********************************!*\
  !*** ./src/pages/home/index.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/icon */ "../jinge-material/lib/icon/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/pages/home/index.scss");
/* harmony import */ var _home_icon_circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-icon-circle */ "./src/pages/home/home-icon-circle.ts");
/* harmony import */ var _home_icon_square__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-icon-square */ "./src/pages/home/home-icon-square.ts");
/* harmony import */ var _home_icon_devices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-icon-devices */ "./src/pages/home/home-icon-devices.ts");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeSplash
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "header",
        {
          class: _index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeHeader
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: _index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeLogo
          },
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<md-icon>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              },
              class: `jinge-material-site-logo`,
              src: `assets/logo_nc.svg`
            });
            const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_1__.Icon.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })()
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: _index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeCall
          },
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "h1",
            {
              class: _index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeName
            },
            `Jinge Material`
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "p",
            `构建在 Jinge 框架上的 Material Design 组件库`
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              class: _index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeActions
            },
            ...(() => {
              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                  debugName: "attrs_of_<md-button>",
                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                  slots: {
                    'default': function(component) {
                      return [
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `快速上手`)
                      ];
                    }
                  }
                },
                class: `md-button-spaced md-plain md-raised`,
                to: `getting-started`
              });
              const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })(),
            ...(() => {
              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                  debugName: "attrs_of_<md-button>",
                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                  slots: {
                    'default': function(component) {
                      return [
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `浏览组件`)
                      ];
                    }
                  }
                },
                class: `md-button-spaced md-plain md-raised`,
                to: `components`
              });
              const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })()
          )
        )
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "section",
        {
          class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)([_index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeFeatures, 'md-layout md-gutter md-layout-wrap'])
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)([_index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeFeature, 'md-layout-item md-small-size-100'])
          },
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<HomeIconSquare>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              },
            });
            const el = _home_icon_square__WEBPACK_IMPORTED_MODULE_5__.HomeIconSquare.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })(),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "h2",
            {
              class: `md-title`
            },
            `Material Design`
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "p",
            `精准实现 Google Material Design 设计规范。`
          )
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)([_index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeFeature, 'md-layout-item md-small-size-100'])
          },
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<HomeIconDevices>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              },
            });
            const el = _home_icon_devices__WEBPACK_IMPORTED_MODULE_6__.HomeIconDevices.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })(),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "h2",
            {
              class: `md-title`
            },
            `Compatible`
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "p",
            `适配所有主流的现代浏览器，支持移动设备的响应式。`
          )
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)([_index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeFeature, 'md-layout-item md-small-size-100'])
          },
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<HomeIconCircle>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              },
            });
            const el = _home_icon_circle__WEBPACK_IMPORTED_MODULE_4__.HomeIconCircle.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })(),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "h2",
            {
              class: `md-title`
            },
            `Full-featured`
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "p",
            `支持多皮肤主题，国际化多语言等丰富全面的功能。`
          )
        )
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/home/home-icon-circle.scss":
/*!**********************************************!*\
  !*** ./src/pages/home/home-icon-circle.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"homeIconCircle":"home-icon-circle--Fue9_","circle":"circle--E8E60","mdRipple":"md-ripple--fnrtI"});

/***/ }),

/***/ "./src/pages/home/home-icon-devices.scss":
/*!***********************************************!*\
  !*** ./src/pages/home/home-icon-devices.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"homeIconDevices":"home-icon-devices--ikbLZ","device":"device--HOuCn"});

/***/ }),

/***/ "./src/pages/home/home-icon-square.scss":
/*!**********************************************!*\
  !*** ./src/pages/home/home-icon-square.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"homeIconSquare":"home-icon-square--XdyVb","square":"square--Y3VEc"});

/***/ }),

/***/ "./src/pages/home/home-icon.scss":
/*!***************************************!*\
  !*** ./src/pages/home/home-icon.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"homeIcon":"home-icon--oH2j7"});

/***/ }),

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"homeSplash":"home-splash--pn4Da","forkDesc":"fork-desc--exH2e","homeHeader":"home-header--ADmzZ","homeLogo":"home-logo--ZSMzH","homeCall":"home-call--rIW5g","homeName":"home-name--T2aap","homeActions":"home-actions--ELFOn","mdButton":"md-button--dJnGB","homeFeatures":"home-features--FukAt","homeFeature":"home-feature--eRvDw"});

/***/ })

}]);
//# sourceMappingURL=9b1e84ee868dc38a19d1.js.map