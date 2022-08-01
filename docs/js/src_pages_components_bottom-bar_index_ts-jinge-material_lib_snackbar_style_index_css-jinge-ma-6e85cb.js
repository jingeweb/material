"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_components_bottom-bar_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-ma-6e85cb"],{

/***/ "./src/pages/components/bottom-bar/api.ts":
/*!************************************************!*\
  !*** ./src/pages/components/bottom-bar/api.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
  bar: {
    props: {
      headings: ["名称", "描述", "默认值"],
      props: [
        {
          name: "type",
          type: "String",
          description: "设置显示模式。请参见下面每种类型的详细说明。",
          defaults: "fixed"
        },
        {
          offset: true,
          name: 'type="fixed"',
          type: "String",
          description: "用固定项目制作栏。适合少量元素。",
          defaults: "-"
        },
        {
          offset: true,
          name: 'type="shift"',
          type: "String",
          description: "突出显示所选项目，并隐藏其他项目的标签。适合最多达 6 个的大量元素。",
          defaults: "-"
        },
        {
          name: "activeItem",
          type: "String/Number",
          description: "动态更改所选项目，通过传递底部栏项目的 id 来实现。",
          defaults: "null"
        }
      ]
    }
  },
  item: {
    props: {
      headings: ["名称", "描述", "默认值"],
      props: [
        {
          name: "id",
          type: "String",
          description: "项目的编号，需要动态更改所选项目时可指定",
          defaults: "a random string"
        },
        {
          name: "disabled",
          type: "Boolean",
          description: "禁用底部栏，阻止包括单击在内的所有操作。",
          defaults: "false"
        }
      ]
    }
  }
}));


/***/ }),

/***/ "./src/pages/components/bottom-bar/examples/fixed.ts":
/*!***********************************************************!*\
  !*** ./src/pages/components/bottom-bar/examples/fixed.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleBottomBarFixed)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _fixed_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixed.html */ "./src/pages/components/bottom-bar/examples/fixed.html");


class ExampleBottomBarFixed extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleBottomBarFixed.template = _fixed_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/bottom-bar/examples/shift.ts":
/*!***********************************************************!*\
  !*** ./src/pages/components/bottom-bar/examples/shift.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleBottomBarShift)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _shift_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift.html */ "./src/pages/components/bottom-bar/examples/shift.html");


class ExampleBottomBarShift extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleBottomBarShift.template = _shift_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/bottom-bar/index.ts":
/*!**************************************************!*\
  !*** ./src/pages/components/bottom-bar/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBottomBar": () => (/* binding */ PageBottomBar)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/components/bottom-bar/index.html");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/pages/components/bottom-bar/api.ts");
/* harmony import */ var _examples_fixed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/fixed */ "./src/pages/components/bottom-bar/examples/fixed.ts");
/* harmony import */ var _examples_fixed_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/fixed?example */ "./src/pages/components/bottom-bar/examples/fixed.ts?example");
/* harmony import */ var _examples_shift__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/shift */ "./src/pages/components/bottom-bar/examples/shift.ts");
/* harmony import */ var _examples_shift_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/shift?example */ "./src/pages/components/bottom-bar/examples/shift.ts?example");








class PageBottomBar extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    (0,jinge_i18n__WEBPACK_IMPORTED_MODULE_1__.watchForComponent)(
      _jg0,
      () => {
        _jg0.api = (0,_api__WEBPACK_IMPORTED_MODULE_3__["default"])();
      },
      true
    );
    _jg0._examples = {
      fixed: {
        component: _examples_fixed__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_fixed_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      shift: {
        component: _examples_shift__WEBPACK_IMPORTED_MODULE_6__["default"],
        source: _examples_shift_example__WEBPACK_IMPORTED_MODULE_7__["default"]
      }
    };
  }
}
PageBottomBar.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/bottom-bar/examples/fixed.html":
/*!*************************************************************!*\
  !*** ./src/pages/components/bottom-bar/examples/fixed.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/bottom-bar */ "../jinge-material/lib/bottom-bar/index.js");
/* harmony import */ var jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material-icons/lib/Home.js */ "../jinge-material-icons/lib/Home.js");
/* harmony import */ var jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/icon */ "../jinge-material/lib/icon/index.js");
/* harmony import */ var jinge_material_icons_lib_Favorite_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/Favorite.js */ "../jinge-material-icons/lib/Favorite.js");
/* harmony import */ var _fixed_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fixed.scss */ "./src/pages/components/bottom-bar/examples/fixed.scss");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _fixed_scss__WEBPACK_IMPORTED_MODULE_5__["default"].demo
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `phone-viewport`
        },
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-bottom-bar>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-home>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`
                              });
                              const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Home`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'components.bottom-bar', params: {sub: null}})
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`,
                                src: `assets/icon/whatshot.svg`
                              });
                              const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_3__.Icon.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Posts`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'components.bottom-bar', params: {sub: 'posts'}})
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-favorite>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`
                              });
                              const el = jinge_material_icons_lib_Favorite_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Favorites`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'components.bottom-bar', params: {sub: 'favorites'}})
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
          });
          const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBar.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `phone-viewport`
        },
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-bottom-bar>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-home>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`
                              });
                              const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Home`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'components.bottom-bar', params: {sub: null}})
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`,
                                src: `assets/icon/whatshot.svg`
                              });
                              const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_3__.Icon.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Posts`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'components.bottom-bar', params: {sub: 'posts'}})
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-favorite>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`
                              });
                              const el = jinge_material_icons_lib_Favorite_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Favorites`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'components.bottom-bar', params: { sub: 'favorites' }})
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-accent`
          });
          const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBar.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/components/bottom-bar/examples/shift.html":
/*!*************************************************************!*\
  !*** ./src/pages/components/bottom-bar/examples/shift.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/bottom-bar */ "../jinge-material/lib/bottom-bar/index.js");
/* harmony import */ var jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material-icons/lib/Home.js */ "../jinge-material-icons/lib/Home.js");
/* harmony import */ var jinge_material_icons_lib_Pages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material-icons/lib/Pages.js */ "../jinge-material-icons/lib/Pages.js");
/* harmony import */ var jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material/lib/icon */ "../jinge-material/lib/icon/index.js");
/* harmony import */ var jinge_material_icons_lib_Favorite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material-icons/lib/Favorite.js */ "../jinge-material-icons/lib/Favorite.js");
/* harmony import */ var _shift_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shift.scss */ "./src/pages/components/bottom-bar/examples/shift.scss");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _shift_scss__WEBPACK_IMPORTED_MODULE_6__["default"].demo
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `phone-viewport`
        },
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-bottom-bar>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-home>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`
                              });
                              const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Home`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      to: `components.bottom-bar`
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-pages>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`
                              });
                              const el = jinge_material_icons_lib_Pages_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Pages`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'components.bottom-bar', params: { sub: 'pages' }})
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`,
                                src: `assets/icon/whatshot.svg`
                              });
                              const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_4__.Icon.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Posts`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'components.bottom-bar', params: { sub: 'posts' }})
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-favorite>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`
                              });
                              const el = jinge_material_icons_lib_Favorite_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Favorites`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'components.bottom-bar', params: { sub: 'favorites' }})
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            type: `shift`
          });
          const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBar.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `phone-viewport`
        },
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-bottom-bar>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-home>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`
                              });
                              const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Home`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-pages>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`
                              });
                              const el = jinge_material_icons_lib_Pages_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Pages`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`,
                                src: `assets/icon/whatshot.svg`
                              });
                              const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_4__.Icon.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Posts`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-bottom-bar-item>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-favorite>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-bottom-bar-icon`
                              });
                              const el = jinge_material_icons_lib_Favorite_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "span",
                                {
                                  class: `md-bottom-bar-label`
                                },
                                `Favorites`
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBarItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-accent`,
            type: `shift`
          });
          const el = jinge_material_lib_bottom_bar__WEBPACK_IMPORTED_MODULE_1__.BottomBar.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/components/bottom-bar/index.html":
/*!****************************************************!*\
  !*** ./src/pages/components/bottom-bar/index.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ "./src/components/index.ts");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        debugName: "attrs_of_<PageContainer>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        slots: {
          'default': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: `page-container-section`
                },
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `底部导航栏使您轻松单击即可浏览和在顶级视图之间切换。`
                )
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: `page-container-section`
                },
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "h2",
                  `和 jinge-router 无缝结合`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `With default fixed style`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.fixed;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","fixed"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
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
                  class: `page-container-section`
                },
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "h2",
                  `移位效果`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `可以在底栏上使用超棒的移位效果。可以最多同时展示 6 个项目，并让活动项目保持焦点：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<ApiItem>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'props': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<ApiTable>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              headings: undefined,
                              props: undefined
                            });
                            const fn_0 = () => {
                              attrs.headings = vm_0.api?.bar?.props?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","bar","props","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.bar?.props?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","bar","props","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-bottom-bar`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiItem.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<ApiItem>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'props': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<ApiTable>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              headings: undefined,
                              props: undefined
                            });
                            const fn_0 = () => {
                              attrs.headings = vm_0.api?.item?.props?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","item","props","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.item?.props?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","item","props","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-bottom-bar-item`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiItem.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      centered: true,
      title: `底栏`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material-icons/lib/Favorite.js":
/*!***********************************************!*\
  !*** ../jinge-material-icons/lib/Favorite.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_icon.js */ "../jinge-material-icons/lib/_icon.js");
 

const _svg = function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createSVGElement)(
      "svg", _icon_js__WEBPACK_IMPORTED_MODULE_1__.svgTagAttrs,
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createSVGElement)(
        "path",
        {
          d: `M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`
        },
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
  constructor(attrs) {
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots = { default: _svg };
    super(attrs);
  }
});

/***/ }),

/***/ "../jinge-material-icons/lib/Home.js":
/*!*******************************************!*\
  !*** ../jinge-material-icons/lib/Home.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_icon.js */ "../jinge-material-icons/lib/_icon.js");
 

const _svg = function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createSVGElement)(
      "svg", _icon_js__WEBPACK_IMPORTED_MODULE_1__.svgTagAttrs,
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createSVGElement)(
        "path",
        {
          d: `M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z`
        },
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
  constructor(attrs) {
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots = { default: _svg };
    super(attrs);
  }
});

/***/ }),

/***/ "../jinge-material-icons/lib/Pages.js":
/*!********************************************!*\
  !*** ../jinge-material-icons/lib/Pages.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_icon.js */ "../jinge-material-icons/lib/_icon.js");
 

const _svg = function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createSVGElement)(
      "svg", _icon_js__WEBPACK_IMPORTED_MODULE_1__.svgTagAttrs,
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createSVGElement)(
        "path",
        {
          d: `M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z`
        },
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
  constructor(attrs) {
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots = { default: _svg };
    super(attrs);
  }
});

/***/ }),

/***/ "../jinge-material/lib/bottom-bar/style/index.css":
/*!********************************************************!*\
  !*** ../jinge-material/lib/bottom-bar/style/index.css ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205895
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/pages/components/bottom-bar/examples/fixed.scss":
/*!*************************************************************!*\
  !*** ./src/pages/components/bottom-bar/examples/fixed.scss ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--kgvOI"});
    if(true) {
      // 1659344205521
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/bottom-bar/examples/shift.scss":
/*!*************************************************************!*\
  !*** ./src/pages/components/bottom-bar/examples/shift.scss ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--tr1SS"});
    if(true) {
      // 1659344205524
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/bottom-bar/examples/fixed.ts?example":
/*!*******************************************************************!*\
  !*** ./src/pages/components/bottom-bar/examples/fixed.ts?example ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './fixed.html';\n\nexport default class ExampleBottomBarFixed extends Component {\n  static template = _tpl;\n}\n","sass":".demo {\n  :global {\n    .phone-viewport {\n      width: 322px;\n      margin-right: 6px;\n      height: 200px;\n      display: flex;\n      align-items: flex-end;\n      overflow: hidden;\n      border: 1px solid rgb(0 0 0 / 26%);\n      background: rgb(0 0 0 / 6%);\n    }\n  }\n}\n","html":"<!-- import style from './fixed.scss' -->\n<div :class=\"style.demo\">\n  <div class=\"phone-viewport\">\n    <md-bottom-bar>\n      <md-bottom-bar-item e:to=\"{name: 'components.bottom-bar', params: {sub: null}}\">\n        <md-icon-home class=\"md-bottom-bar-icon\"/>\n        <span class=\"md-bottom-bar-label\">Home</span>\n      </md-bottom-bar-item>\n      <md-bottom-bar-item e:to=\"{name: 'components.bottom-bar', params: {sub: 'posts'}}\">\n        <md-icon class=\"md-bottom-bar-icon\" src=\"assets/icon/whatshot.svg\"/>\n        <span class=\"md-bottom-bar-label\">Posts</span>\n      </md-bottom-bar-item>\n      <md-bottom-bar-item e:to=\"{name: 'components.bottom-bar', params: {sub: 'favorites'}}\">\n        <md-icon-favorite class=\"md-bottom-bar-icon\"/>\n        <span class=\"md-bottom-bar-label\">Favorites</span>\n      </md-bottom-bar-item>\n    </md-bottom-bar>\n  </div>\n  <div class=\"phone-viewport\">\n    <md-bottom-bar class=\"md-accent\">\n      <md-bottom-bar-item e:to=\"{name: 'components.bottom-bar', params: {sub: null}}\">\n        <md-icon-home class=\"md-bottom-bar-icon\"/>\n        <span class=\"md-bottom-bar-label\">Home</span>\n      </md-bottom-bar-item>\n      <md-bottom-bar-item e:to=\"{name: 'components.bottom-bar', params: {sub: 'posts'}}\">\n        <md-icon class=\"md-bottom-bar-icon\" src=\"assets/icon/whatshot.svg\"/>\n        <span class=\"md-bottom-bar-label\">Posts</span>\n      </md-bottom-bar-item>\n      <md-bottom-bar-item e:to=\"{name: 'components.bottom-bar', params: { sub: 'favorites' }}\">\n        <md-icon-favorite class=\"md-bottom-bar-icon\"/>\n        <span class=\"md-bottom-bar-label\">Favorites</span>\n      </md-bottom-bar-item>\n    </md-bottom-bar>\n  </div>\n</div>"});

/***/ }),

/***/ "./src/pages/components/bottom-bar/examples/shift.ts?example":
/*!*******************************************************************!*\
  !*** ./src/pages/components/bottom-bar/examples/shift.ts?example ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './shift.html';\n\nexport default class ExampleBottomBarShift extends Component {\n  static template = _tpl;\n}\n","sass":".demo {\n  :global {\n    .phone-viewport {\n      width: 322px;\n      margin-right: 6px;\n      height: 200px;\n      display: flex;\n      align-items: flex-end;\n      overflow: hidden;\n      border: 1px solid rgb(0 0 0 / 26%);\n      background: rgb(0 0 0 / 6%);\n    }\n  }\n}\n","html":"<!-- import style from './shift.scss' -->\n<div :class=\"style.demo\">\n  <div class=\"phone-viewport\">\n    <md-bottom-bar type=\"shift\">\n      <md-bottom-bar-item to=\"components.bottom-bar\">\n        <md-icon-home class=\"md-bottom-bar-icon\"/>\n        <span class=\"md-bottom-bar-label\">Home</span>\n      </md-bottom-bar-item>\n      <md-bottom-bar-item e:to=\"{name: 'components.bottom-bar', params: { sub: 'pages' }}\">\n        <md-icon-pages class=\"md-bottom-bar-icon\"/>\n        <span class=\"md-bottom-bar-label\">Pages</span>\n      </md-bottom-bar-item>\n      <md-bottom-bar-item e:to=\"{name: 'components.bottom-bar', params: { sub: 'posts' }}\">\n        <md-icon class=\"md-bottom-bar-icon\" src=\"assets/icon/whatshot.svg\"/>\n        <span class=\"md-bottom-bar-label\">Posts</span>\n      </md-bottom-bar-item>\n      <md-bottom-bar-item e:to=\"{name: 'components.bottom-bar', params: { sub: 'favorites' }}\">\n        <md-icon-favorite class=\"md-bottom-bar-icon\"/>\n        <span class=\"md-bottom-bar-label\">Favorites</span>\n      </md-bottom-bar-item>\n    </md-bottom-bar>\n  </div>\n  <div class=\"phone-viewport\">\n    <md-bottom-bar class=\"md-accent\" type=\"shift\">\n      <md-bottom-bar-item>\n        <md-icon-home class=\"md-bottom-bar-icon\"/>\n        <span class=\"md-bottom-bar-label\">Home</span>\n      </md-bottom-bar-item>\n      <md-bottom-bar-item>\n        <md-icon-pages class=\"md-bottom-bar-icon\"/>\n        <span class=\"md-bottom-bar-label\">Pages</span>\n      </md-bottom-bar-item>\n      <md-bottom-bar-item>\n        <md-icon class=\"md-bottom-bar-icon\" src=\"assets/icon/whatshot.svg\"/>\n        <span class=\"md-bottom-bar-label\">Posts</span>\n      </md-bottom-bar-item>\n      <md-bottom-bar-item>\n        <md-icon-favorite class=\"md-bottom-bar-icon\"/>\n        <span class=\"md-bottom-bar-label\">Favorites</span>\n      </md-bottom-bar-item>\n    </md-bottom-bar>\n  </div>\n</div>"});

/***/ }),

/***/ "../jinge-material/lib/bottom-bar/bar.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/bottom-bar/bar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOTTOM_BAR_PROVIDER": () => (/* binding */ BOTTOM_BAR_PROVIDER),
/* harmony export */   "BottomBar": () => (/* binding */ BottomBar)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _bar_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar.tpl.js */ "../jinge-material/lib/bottom-bar/bar.tpl.js");



const BOTTOM_BAR_PROVIDER = Symbol("bottom_bar_provider");
const typeValidator = new _util__WEBPACK_IMPORTED_MODULE_1__.EnumAttrValidator("<md-bottom-bar>", "type", ["fixed", "shift"]);
class BottomBar extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    typeValidator.assert(attrs);
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f2_jg0402 = () => {
    _jg0.type = attrs.type || "fixed"; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("type", f2_jg0402);const f3_jg0402 = () => {
    _jg0.activeItem = attrs.activeItem; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("activeItem", f3_jg0402);
    _jg0.Bar = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
      mouseEvent: null,
      type: _jg0.type,
      _count: 0,
      _items: [],
      _active: _jg0._active.bind(_jg0),
      _register: _jg0._register.bind(_jg0)
    });
    _jg0.__setContext(BOTTOM_BAR_PROVIDER, _jg0.Bar);
  }
  get type() {
    return this._type;
  }
  set type(v) {
    if (this._type === v)
      return;
    this._type = v;
    this.Bar && (this.Bar.type = v);
  }
  _register(item) {
    if (!item.to) {
      this.Bar._items.push(item);
    }
    this.Bar._count++;
  }
  get activeItem() {
    return this._activeIt;
  }
  set activeItem(v) {
    if (this._activeIt === v)
      return;
    this._activeIt = v;
    this.Bar && this._active(this._activeIt);
  }
  __afterRender() {
    const its = this.Bar._items;
    if (its.length > 0 && its.length !== this.Bar._count) {
      throw new Error("<md-bottom-bar> can only support neither ui-sref mode or non-ui-sref mode.");
    }
    if (its.length > 0) {
      this._active(this.activeItem);
    }
  }
  _active(idOrIdx) {
    let isIdx = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isNumber)(idOrIdx);
    if (!isIdx && !idOrIdx) {
      idOrIdx = 0;
      isIdx = true;
    }
    let found = false;
    const its = this.Bar._items;
    if (its.length === 0) {
      return;
    }
    its.forEach((item, idx) => {
      if (found) {
        item.isActive = false;
        return;
      }
      item.isActive = isIdx ? idx === idOrIdx : item.id === idOrIdx;
      if (item.isActive) {
        found = true;
      }
    });
    if (!found) {
      its[0].isActive = true;
    }
  }
}
BottomBar.template = _bar_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=bar.js.map

/***/ }),

/***/ "../jinge-material/lib/bottom-bar/bar.tpl.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/bottom-bar/bar.tpl.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ripple */ "../jinge-material/lib/ripple/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
                  const renderFn = __ac && __ac['default'] ? __ac['default'] : null;
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        default: renderFn || jinge__WEBPACK_IMPORTED_MODULE_0__.emptyRenderFn
                      }
                    }
                  });
                  const el = (new jinge__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent(attrs, []))[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          disabled: undefined,
          active: undefined
        });
        const fn_0 = () => {
          attrs.disabled = vm_0.type === 'fixed';
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["type"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.active = vm_0.Bar?.mouseEvent;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["Bar","mouseEvent"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = _ripple__WEBPACK_IMPORTED_MODULE_1__.Ripple.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, ([`md-bottom-bar md-type-${vm_0.type}`, vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["type"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/bottom-bar/index.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/bottom-bar/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOTTOM_BAR_PROVIDER": () => (/* reexport safe */ _bar__WEBPACK_IMPORTED_MODULE_1__.BOTTOM_BAR_PROVIDER),
/* harmony export */   "BottomBar": () => (/* reexport safe */ _bar__WEBPACK_IMPORTED_MODULE_1__.BottomBar),
/* harmony export */   "BottomBarItem": () => (/* reexport safe */ _item__WEBPACK_IMPORTED_MODULE_2__.BottomBarItem)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/bottom-bar/style/index.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar */ "../jinge-material/lib/bottom-bar/bar.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "../jinge-material/lib/bottom-bar/item.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/bottom-bar/item.js":
/*!************************************************!*\
  !*** ../jinge-material/lib/bottom-bar/item.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomBarItem": () => (/* binding */ BottomBarItem)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar */ "../jinge-material/lib/bottom-bar/bar.js");
/* harmony import */ var _item_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.tpl.js */ "../jinge-material/lib/bottom-bar/item.tpl.js");



class BottomBarItem extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.id = attrs.id || (0,jinge__WEBPACK_IMPORTED_MODULE_0__.uid)(); }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("id", f1_jg0402);const f2_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f2_jg0402);const f3_jg0402 = () => {
    _jg0.active = "md-active" + (attrs.active ? " " + attrs.active : ""); }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f3_jg0402);const f4_jg0402 = () => {
    _jg0.to = attrs.to; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("to", f4_jg0402);const f5_jg0402 = () => {
    _jg0.target = attrs.target; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("target", f5_jg0402);
    _jg0.isActive = false;
    _jg0.Bar = _jg0.__getContext(_bar__WEBPACK_IMPORTED_MODULE_1__.BOTTOM_BAR_PROVIDER);
  }
  onClick(evt) {
    if (this.Bar.type === "shift") {
      this.Bar.mouseEvent = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
        _event: evt
      });
    }
    if (!this.to) {
      this.Bar._active(this.id);
    }
    this.__notify("click", evt);
  }
  __afterRender() {
    this.Bar._register(this);
    this.__domPassListeners(["click"]);
  }
}
BottomBarItem.template = _item_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../jinge-material/lib/bottom-bar/item.tpl.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/bottom-bar/item.tpl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "../jinge-material/lib/button/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        listeners: {
          click: {
            fn: function(...args) {
              vm_0.onClick(...args);
            },
            opts: null
          }
        },
        slots: {
          'default': function(component) {
            return [
            ...(() => {
              const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
              const renderFn = __ac && __ac['default'] ? __ac['default'] : null;
              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                  slots: {
                    default: renderFn || jinge__WEBPACK_IMPORTED_MODULE_0__.emptyRenderFn
                  }
                }
              });
              const el = (new jinge__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent(attrs, []))[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })()
            ];
          }
        }
      },
      class: undefined,
      disabled: undefined,
      to: undefined,
      ripple: undefined,
      active: undefined,
      target: undefined
    });
    const fn_0 = () => {
      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)(`md-bottom-bar-item${vm_0.isActive ? ' md-active' : ''}`);
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isActive"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.disabled = vm_0.disabled;
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_2 = () => {
      attrs.to = vm_0.to;
    };
    fn_2();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["to"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_3 = () => {
      attrs.ripple = vm_0.Bar?.type === 'fixed';
    };
    fn_3();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["Bar","type"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_4 = () => {
      attrs.active = vm_0.active;
    };
    fn_4();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_4, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_5 = () => {
      attrs.target = vm_0.target;
    };
    fn_5();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["target"], fn_5, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/bottom-bar/style/index.js":
/*!*******************************************************!*\
  !*** ../jinge-material/lib/bottom-bar/style/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/bottom-bar/style/index.css");




/***/ })

}]);
//# sourceMappingURL=src_pages_components_bottom-bar_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-ma-6e85cb.js.map