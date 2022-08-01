"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_components_badge_index_ts"],{

/***/ "./src/pages/components/badge/api.ts":
/*!*******************************************!*\
  !*** ./src/pages/components/badge/api.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
  classes: {
    headings: ["名称", "描述"],
    props: [
      {
        name: "md-square",
        description: "创建静态的方形徽标"
      }
    ]
  },
  props: {
    headings: ["名称", "描述", "默认值"],
    props: [
      {
        name: "content",
        type: "String, Number",
        description: "指定徽章内容",
        defaults: " "
      },
      {
        name: "position",
        type: "String",
        description: "指定徽章位置，<code>top</code> 或 <code>bottom</code>",
        defaults: "top"
      },
      {
        name: "dense",
        type: "Boolean",
        description: "使用紧凑型徽章",
        defaults: "false"
      }
    ]
  }
}));


/***/ }),

/***/ "./src/pages/components/badge/examples/button.ts":
/*!*******************************************************!*\
  !*** ./src/pages/components/badge/examples/button.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleBadgeButton)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _button_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.html */ "./src/pages/components/badge/examples/button.html");


class ExampleBadgeButton extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleBadgeButton.template = _button_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/badge/examples/dense.ts":
/*!******************************************************!*\
  !*** ./src/pages/components/badge/examples/dense.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleBadgeDense)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _dense_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dense.html */ "./src/pages/components/badge/examples/dense.html");


class ExampleBadgeDense extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleBadgeDense.template = _dense_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/badge/examples/list.ts":
/*!*****************************************************!*\
  !*** ./src/pages/components/badge/examples/list.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleBadgeList)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.html */ "./src/pages/components/badge/examples/list.html");


class ExampleBadgeList extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleBadgeList.template = _list_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/badge/index.ts":
/*!*********************************************!*\
  !*** ./src/pages/components/badge/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBadge": () => (/* binding */ PageBadge)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/components/badge/index.html");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/pages/components/badge/api.ts");
/* harmony import */ var _examples_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/button */ "./src/pages/components/badge/examples/button.ts");
/* harmony import */ var _examples_button_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/button?example */ "./src/pages/components/badge/examples/button.ts?example");
/* harmony import */ var _examples_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/list */ "./src/pages/components/badge/examples/list.ts");
/* harmony import */ var _examples_list_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/list?example */ "./src/pages/components/badge/examples/list.ts?example");
/* harmony import */ var _examples_dense__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/dense */ "./src/pages/components/badge/examples/dense.ts");
/* harmony import */ var _examples_dense_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/dense?example */ "./src/pages/components/badge/examples/dense.ts?example");










class PageBadge extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
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
      buttons: {
        component: _examples_button__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_button_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      lists: {
        component: _examples_list__WEBPACK_IMPORTED_MODULE_6__["default"],
        source: _examples_list_example__WEBPACK_IMPORTED_MODULE_7__["default"]
      },
      dense: {
        component: _examples_dense__WEBPACK_IMPORTED_MODULE_8__["default"],
        source: _examples_dense_example__WEBPACK_IMPORTED_MODULE_9__["default"]
      }
    };
  }
}
PageBadge.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/badge/examples/button.html":
/*!*********************************************************!*\
  !*** ./src/pages/components/badge/examples/button.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/badge */ "../jinge-material/lib/badge/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Notifications_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material-icons/lib/Notifications.js */ "../jinge-material-icons/lib/Notifications.js");
/* harmony import */ var jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/Home.js */ "../jinge-material-icons/lib/Home.js");
/* harmony import */ var jinge_material_lib_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material/lib/avatar */ "../jinge-material/lib/avatar/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/pages/components/badge/examples/style.scss");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].demo
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-badge>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-button>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-notifications>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                              });
                              const el = jinge_material_icons_lib_Notifications_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                            ];
                          }
                        }
                      },
                      class: `md-icon-button`
                    });
                    const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            content: `1`
          });
          const el = jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_1__.Badge.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })(),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-badge>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-button>",
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
                              });
                              const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                            ];
                          }
                        }
                      },
                      class: `md-icon-button`
                    });
                    const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-primary`,
            content: `1`
          });
          const el = jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_1__.Badge.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })(),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-badge>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-button>",
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
                              });
                              const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                            ];
                          }
                        }
                      },
                      class: `md-icon-button`
                    });
                    const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            position: `bottom`,
            content: `2`
          });
          const el = jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_1__.Badge.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-badge>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-avatar>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "img",
                                {
                                  src: `assets/examples/avatar.png`,
                                  alt: `Avatar`
                                },
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_avatar__WEBPACK_IMPORTED_MODULE_5__.Avatar.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-primary`,
            content: `999+`
          });
          const el = jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_1__.Badge.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-badge>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-button>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Button with`)
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-primary md-square`,
            position: `bottom`,
            content: `12`
          });
          const el = jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_1__.Badge.create(attrs);
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

/***/ "./src/pages/components/badge/examples/dense.html":
/*!********************************************************!*\
  !*** ./src/pages/components/badge/examples/dense.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/badge */ "../jinge-material/lib/badge/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Notifications_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material-icons/lib/Notifications.js */ "../jinge-material-icons/lib/Notifications.js");
/* harmony import */ var jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/Home.js */ "../jinge-material-icons/lib/Home.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/pages/components/badge/examples/style.scss");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _style_scss__WEBPACK_IMPORTED_MODULE_5__["default"].demo
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-badge>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-button>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<md-icon-notifications>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                              });
                              const el = jinge_material_icons_lib_Notifications_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                            ];
                          }
                        }
                      },
                      class: `md-icon-button`
                    });
                    const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            content: `1`,
            dense: true
          });
          const el = jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_1__.Badge.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })(),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-badge>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-button>",
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
                              });
                              const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                            ];
                          }
                        }
                      },
                      class: `md-icon-button`
                    });
                    const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-primary`,
            content: `12`,
            dense: true
          });
          const el = jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_1__.Badge.create(attrs);
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

/***/ "./src/pages/components/badge/examples/list.html":
/*!*******************************************************!*\
  !*** ./src/pages/components/badge/examples/list.html ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/list */ "../jinge-material/lib/list/index.js");
/* harmony import */ var jinge_material_icons_lib_MoveToInbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material-icons/lib/MoveToInbox.js */ "../jinge-material-icons/lib/MoveToInbox.js");
/* harmony import */ var jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/badge */ "../jinge-material/lib/badge/index.js");
/* harmony import */ var jinge_material_icons_lib_Send_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/Send.js */ "../jinge-material-icons/lib/Send.js");
/* harmony import */ var jinge_material_icons_lib_Delete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material-icons/lib/Delete.js */ "../jinge-material-icons/lib/Delete.js");
/* harmony import */ var jinge_material_icons_lib_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge-material-icons/lib/Error.js */ "../jinge-material-icons/lib/Error.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/pages/components/badge/examples/style.scss");








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _style_scss__WEBPACK_IMPORTED_MODULE_7__["default"].demo
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-list>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-list-item>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-icon-move_to_inbox>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                            });
                            const el = jinge_material_icons_lib_MoveToInbox_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "span",
                              {
                                class: `md-list-item-text`
                              },
                              `Inbox`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-badge>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              class: `md-primary md-square`,
                              content: `6`
                            });
                            const el = jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_3__.Badge.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_1__.ListItem.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-list-item>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-icon-send>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                            });
                            const el = jinge_material_icons_lib_Send_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "span",
                              {
                                class: `md-list-item-text`
                              },
                              `Sent Mail`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_1__.ListItem.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-list-item>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-icon-delete>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                            });
                            const el = jinge_material_icons_lib_Delete_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "span",
                              {
                                class: `md-list-item-text`
                              },
                              `Trash`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-badge>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              class: `md-primary`,
                              content: `6`
                            });
                            const el = jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_3__.Badge.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_1__.ListItem.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-list-item>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-icon-error>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                            });
                            const el = jinge_material_icons_lib_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"].create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "span",
                              {
                                class: `md-list-item-text`
                              },
                              `Spam`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-badge>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              class: `md-square`,
                              content: `New`
                            });
                            const el = jinge_material_lib_badge__WEBPACK_IMPORTED_MODULE_3__.Badge.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_1__.ListItem.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_1__.List.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/components/badge/index.html":
/*!***********************************************!*\
  !*** ./src/pages/components/badge/index.html ***!
  \***********************************************/
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
                  `徽章是用于在 UI 元素上提示小状态的描述符。`
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
                  "p",
                  `按钮，头像等组件需要使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-badge`
                  ),
                  `进行包装。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Example with buttons`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.buttons;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","buttons"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Example with lists`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.lists;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","lists"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Dense`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.dense;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","dense"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
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
                              attrs.headings = vm_0.api?.props?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","props","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.props?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","props","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        },
                        'classes': function(component) {
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
                              attrs.headings = vm_0.api?.classes?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","classes","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.classes?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","classes","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-badge`
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
      title: `徽章`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material-icons/lib/Delete.js":
/*!*********************************************!*\
  !*** ../jinge-material-icons/lib/Delete.js ***!
  \*********************************************/
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
          d: `M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z`
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

/***/ "../jinge-material-icons/lib/Error.js":
/*!********************************************!*\
  !*** ../jinge-material-icons/lib/Error.js ***!
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
          d: `M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z`
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

/***/ "../jinge-material-icons/lib/MoveToInbox.js":
/*!**************************************************!*\
  !*** ../jinge-material-icons/lib/MoveToInbox.js ***!
  \**************************************************/
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
          d: `M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z`
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

/***/ "../jinge-material-icons/lib/Notifications.js":
/*!****************************************************!*\
  !*** ../jinge-material-icons/lib/Notifications.js ***!
  \****************************************************/
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
          d: `M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z`
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

/***/ "../jinge-material-icons/lib/Send.js":
/*!*******************************************!*\
  !*** ../jinge-material-icons/lib/Send.js ***!
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
          d: `M2.01 21L23 12 2.01 3 2 10l15 2-15 2z`
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

/***/ "../jinge-material/lib/avatar/style/index.css":
/*!****************************************************!*\
  !*** ../jinge-material/lib/avatar/style/index.css ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205838
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "../jinge-material/lib/badge/style/index.css":
/*!***************************************************!*\
  !*** ../jinge-material/lib/badge/style/index.css ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205867
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/pages/components/badge/examples/style.scss":
/*!********************************************************!*\
  !*** ./src/pages/components/badge/examples/style.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--pZu86"});
    if(true) {
      // 1659344205058
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/badge/examples/button.ts?example":
/*!***************************************************************!*\
  !*** ./src/pages/components/badge/examples/button.ts?example ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './button.html';\n\nexport default class ExampleBadgeButton extends Component {\n  static template = _tpl;\n}\n","sass":"","html":"<!-- import style from './style.scss' -->\n<div :class=\"style.demo\">\n  <div>\n    <md-badge content=\"1\">\n      <md-button class=\"md-icon-button\">\n        <md-icon-notifications/>\n      </md-button>\n    </md-badge>\n\n    <md-badge class=\"md-primary\" content=\"1\">\n      <md-button class=\"md-icon-button\">\n        <md-icon-home/>\n      </md-button>\n    </md-badge>\n\n    <md-badge position=\"bottom\" content=\"2\">\n      <md-button class=\"md-icon-button\">\n        <md-icon-home/>\n      </md-button>\n    </md-badge>\n  </div>\n\n  <div>\n    <md-badge class=\"md-primary\" content=\"999+\">\n      <md-avatar>\n        <img src=\"assets/examples/avatar.png\" alt=\"Avatar\"/>\n      </md-avatar>\n    </md-badge>\n  </div>\n\n  <div>\n    <md-badge class=\"md-primary md-square\" position=\"bottom\" content=\"12\">\n      <md-button>\n        Button with\n      </md-button>\n    </md-badge>\n  </div>\n</div>"});

/***/ }),

/***/ "./src/pages/components/badge/examples/dense.ts?example":
/*!**************************************************************!*\
  !*** ./src/pages/components/badge/examples/dense.ts?example ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './dense.html';\n\nexport default class ExampleBadgeDense extends Component {\n  static template = _tpl;\n}\n","sass":"","html":"<!-- import style from './style.scss' -->\n<div :class=\"style.demo\">\n  <div>\n    <md-badge content=\"1\" dense>\n      <md-button class=\"md-icon-button\">\n        <md-icon-notifications/>\n      </md-button>\n    </md-badge>\n\n    <md-badge class=\"md-primary\" content=\"12\" dense>\n      <md-button class=\"md-icon-button\">\n        <md-icon-home/>\n      </md-button>\n    </md-badge>\n  </div>\n</div>"});

/***/ }),

/***/ "./src/pages/components/badge/examples/list.ts?example":
/*!*************************************************************!*\
  !*** ./src/pages/components/badge/examples/list.ts?example ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './list.html';\n\nexport default class ExampleBadgeList extends Component {\n  static template = _tpl;\n}\n","sass":"","html":"<!-- import style from './style.scss' -->\n<div :class=\"style.demo\">\n  <md-list>\n    <md-list-item>\n      <md-icon-move_to_inbox/>\n      <span class=\"md-list-item-text\">Inbox</span>\n      <md-badge class=\"md-primary md-square\" content=\"6\" />\n    </md-list-item>\n\n    <md-list-item>\n      <md-icon-send/>\n      <span class=\"md-list-item-text\">Sent Mail</span>\n    </md-list-item>\n\n    <md-list-item>\n      <md-icon-delete/>\n      <span class=\"md-list-item-text\">Trash</span>\n      <md-badge class=\"md-primary\" content=\"6\" />\n    </md-list-item>\n\n    <md-list-item>\n      <md-icon-error/>\n      <span class=\"md-list-item-text\">Spam</span>\n      <md-badge class=\"md-square\" content=\"New\" />\n    </md-list-item>\n  </md-list>\n</div>"});

/***/ }),

/***/ "../jinge-material/lib/avatar/index.js":
/*!*********************************************!*\
  !*** ../jinge-material/lib/avatar/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Avatar": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/avatar/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/avatar/index.tpl.js");


class Avatar extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
}
Avatar.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/avatar/index.tpl.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/avatar/index.tpl.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-avatar', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/avatar/style/index.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/avatar/style/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/avatar/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/badge/badge.js":
/*!********************************************!*\
  !*** ../jinge-material/lib/badge/badge.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _badge_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge.tpl.js */ "../jinge-material/lib/badge/badge.tpl.js");


class Badge extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.content = attrs.content; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("content", f1_jg0402);const f2_jg0402 = () => {
    _jg0.dense = attrs.dense; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("dense", f2_jg0402);const f3_jg0402 = () => {
    _jg0.position = attrs.position || "top"; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("position", f3_jg0402);
  }
}
Badge.template = _badge_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=badge.js.map

/***/ }),

/***/ "../jinge-material/lib/badge/badge.tpl.js":
/*!************************************************!*\
  !*** ../jinge-material/lib/badge/badge.tpl.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _standalone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standalone.js */ "../jinge-material/lib/badge/standalone.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: `md-badge-content`
      },
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
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "div",
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                      const fn_0 = () => {
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.content }`);
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["content"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      return el;
                    })()
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              }
            }
          },
          class: undefined,
          style: undefined
        });
        const fn_0 = () => {
          attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)((0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([`md-position-${vm_0.position}`, vm_0.dense && 'md-dense', vm_0.class]));
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["position"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["dense"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.style = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.style2str)(vm_0.style);
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = _standalone_js__WEBPACK_IMPORTED_MODULE_1__.BadgeStandalone.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/badge/index.js":
/*!********************************************!*\
  !*** ../jinge-material/lib/badge/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => (/* reexport safe */ _badge__WEBPACK_IMPORTED_MODULE_1__.Badge),
/* harmony export */   "BadgeStandalone": () => (/* reexport safe */ _standalone__WEBPACK_IMPORTED_MODULE_2__.BadgeStandalone)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/badge/style/index.js");
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge */ "../jinge-material/lib/badge/badge.js");
/* harmony import */ var _standalone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standalone */ "../jinge-material/lib/badge/standalone.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/badge/standalone.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/badge/standalone.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeStandalone": () => (/* binding */ BadgeStandalone)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _standalone_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standalone.tpl.js */ "../jinge-material/lib/badge/standalone.tpl.js");


class BadgeStandalone extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
BadgeStandalone.template = _standalone_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=standalone.js.map

/***/ }),

/***/ "../jinge-material/lib/badge/standalone.tpl.js":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/badge/standalone.tpl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-badge', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/badge/style/index.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/badge/style/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/badge/style/index.css");




/***/ })

}]);
//# sourceMappingURL=src_pages_components_badge_index_ts.js.map