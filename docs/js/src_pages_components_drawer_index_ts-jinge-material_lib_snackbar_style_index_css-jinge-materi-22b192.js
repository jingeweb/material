"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_components_drawer_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-materi-22b192"],{

/***/ "./src/pages/components/drawer/api.ts":
/*!********************************************!*\
  !*** ./src/pages/components/drawer/api.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
  container: {
    props: {
      headings: ["名称", "描述", "默认值"],
      props: [
        {
          name: "pushMode",
          type: "Boolean",
          description: "将抽屉的打开设置为从侧面推送模式，会挤压内容。",
          defaults: "false"
        }
      ]
    }
  },
  drawer: {
    props: {
      headings: ["名称", "描述", "默认值"],
      props: [
        {
          name: "active",
          type: "Boolean",
          description: "控制抽屉的打开和关闭",
          defaults: "false"
        },
        {
          name: "fixed",
          type: "Boolean",
          description: "将 position:fixed 应用于抽屉。可用作应用程序的主抽屉（类似于本文档）。",
          defaults: "false"
        },
        {
          name: "right",
          type: "Boolean",
          description: "将抽屉放置在屏幕的右侧。",
          defaults: "false"
        }
      ]
    },
    events: {
      headings: ["名称", "描述", "参数"],
      props: [
        {
          name: "opened",
          description: "抽屉打开时触发",
          value: "null"
        },
        {
          name: "closed",
          description: "抽屉关闭时触发",
          value: "null"
        }
      ]
    }
  }
}));


/***/ }),

/***/ "./src/pages/components/drawer/examples/over.ts":
/*!******************************************************!*\
  !*** ./src/pages/components/drawer/examples/over.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleDrawerTemporary)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _over_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./over.html */ "./src/pages/components/drawer/examples/over.html");


class ExampleDrawerTemporary extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.showNavigation = false;
    _jg0.showSidepanel = false;
  }
}
ExampleDrawerTemporary.template = _over_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/drawer/examples/push.ts":
/*!******************************************************!*\
  !*** ./src/pages/components/drawer/examples/push.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleDrawerTemporary)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _push_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./push.html */ "./src/pages/components/drawer/examples/push.html");


class ExampleDrawerTemporary extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.showNavigation = false;
    _jg0.showSidepanel = false;
  }
}
ExampleDrawerTemporary.template = _push_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/drawer/index.ts":
/*!**********************************************!*\
  !*** ./src/pages/components/drawer/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDrawer": () => (/* binding */ PageDrawer)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/components/drawer/index.html");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/pages/components/drawer/api.ts");
/* harmony import */ var _examples_over__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/over */ "./src/pages/components/drawer/examples/over.ts");
/* harmony import */ var _examples_over_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/over?example */ "./src/pages/components/drawer/examples/over.ts?example");
/* harmony import */ var _examples_push__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/push */ "./src/pages/components/drawer/examples/push.ts");
/* harmony import */ var _examples_push_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/push?example */ "./src/pages/components/drawer/examples/push.ts?example");








class PageDrawer extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
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
      over: {
        component: _examples_over__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_over_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      push: {
        component: _examples_push__WEBPACK_IMPORTED_MODULE_6__["default"],
        source: _examples_push_example__WEBPACK_IMPORTED_MODULE_7__["default"]
      }
    };
  }
}
PageDrawer.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/drawer/examples/over.html":
/*!********************************************************!*\
  !*** ./src/pages/components/drawer/examples/over.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/toolbar */ "../jinge-material/lib/toolbar/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material-icons/lib/Menu.js */ "../jinge-material-icons/lib/Menu.js");
/* harmony import */ var jinge_material_lib_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material/lib/drawer */ "../jinge-material/lib/drawer/index.js");
/* harmony import */ var jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material/lib/list */ "../jinge-material/lib/list/index.js");
/* harmony import */ var jinge_material_icons_lib_MoveToInbox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge-material-icons/lib/MoveToInbox.js */ "../jinge-material-icons/lib/MoveToInbox.js");
/* harmony import */ var jinge_material_icons_lib_Send_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jinge-material-icons/lib/Send.js */ "../jinge-material-icons/lib/Send.js");
/* harmony import */ var jinge_material_icons_lib_Delete_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jinge-material-icons/lib/Delete.js */ "../jinge-material-icons/lib/Delete.js");
/* harmony import */ var jinge_material_icons_lib_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jinge-material-icons/lib/Error.js */ "../jinge-material-icons/lib/Error.js");
/* harmony import */ var jinge_material_icons_lib_ChatBubble_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jinge-material-icons/lib/ChatBubble.js */ "../jinge-material-icons/lib/ChatBubble.js");
/* harmony import */ var jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jinge-material/lib/content */ "../jinge-material/lib/content/index.js");
/* harmony import */ var _over_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./over.scss */ "./src/pages/components/drawer/examples/over.scss");













/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)(['page-container md-elevation-24 md-layout-column', _over_scss__WEBPACK_IMPORTED_MODULE_12__["default"].demo])
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-toolbar>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-button>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      listeners: {
                        click: {
                          fn: function(...args) {
                            vm_0.showNavigation = true
                          },
                          opts: null
                        }
                      },
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-icon-menu>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                            });
                            const el = jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    class: `md-icon-button md-on-accent`
                  });
                  const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "span",
                    {
                      class: `md-title`
                    },
                    `My Title`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })(),
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "div",
                    {
                      class: `md-toolbar-section-end`
                    },
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<md-button>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                          listeners: {
                            click: {
                              fn: function(...args) {
                                vm_0.showSidepanel = true
                              },
                              opts: null
                            }
                          },
                          slots: {
                            'default': function(component) {
                              return [
                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Favorites`)
                              ];
                            }
                          }
                        },
                        class: `md-on-accent`
                      });
                      const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
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
          class: `md-accent`
        });
        const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-drawer>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              "update.active": {
                fn: function(...args) {
                  vm_0.showNavigation = vm_0.args[0]
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-toolbar>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "span",
                              {
                                class: `md-title`
                              },
                              `My App name`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                    class: `md-transparent`,
                    elevation: `0`
                  });
                  const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
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
                                      const el = jinge_material_icons_lib_MoveToInbox_js__WEBPACK_IMPORTED_MODULE_6__["default"].create(attrs);
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
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
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
                                      const el = jinge_material_icons_lib_Send_js__WEBPACK_IMPORTED_MODULE_7__["default"].create(attrs);
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
                            const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
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
                                      const el = jinge_material_icons_lib_Delete_js__WEBPACK_IMPORTED_MODULE_8__["default"].create(attrs);
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
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
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
                                      const el = jinge_material_icons_lib_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"].create(attrs);
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
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.List.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          active: undefined
        });
        const fn_0 = () => {
          attrs.active = vm_0.showNavigation;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["showNavigation"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_drawer__WEBPACK_IMPORTED_MODULE_4__.Drawer.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-drawer>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              "update.active": {
                fn: function(...args) {
                  vm_0.showSidepanel = vm_0.args[0]
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-toolbar>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "span",
                              {
                                class: `md-title`
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
                    class: `md-transparent`,
                    elevation: `0`
                  });
                  const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
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
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "span",
                                        {
                                          class: `md-list-item-text`
                                        },
                                        `Abbey Christansen`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
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
                                                    debugName: "attrs_of_<md-icon-chat_bubble>",
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                  },
                                                  class: `md-primary`
                                                });
                                                const el = jinge_material_icons_lib_ChatBubble_js__WEBPACK_IMPORTED_MODULE_10__["default"].create(attrs);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                        class: `md-icon-button md-list-action`
                                      });
                                      const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
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
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "span",
                                        {
                                          class: `md-list-item-text`
                                        },
                                        `Alex Nelson`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
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
                                                    debugName: "attrs_of_<md-icon-chat_bubble>",
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                  },
                                                  class: `md-primary`
                                                });
                                                const el = jinge_material_icons_lib_ChatBubble_js__WEBPACK_IMPORTED_MODULE_10__["default"].create(attrs);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                        class: `md-icon-button md-list-action`
                                      });
                                      const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
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
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "span",
                                        {
                                          class: `md-list-item-text`
                                        },
                                        `Mary Johnson`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
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
                                                    debugName: "attrs_of_<md-icon-chat_bubble>",
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                  },
                                                });
                                                const el = jinge_material_icons_lib_ChatBubble_js__WEBPACK_IMPORTED_MODULE_10__["default"].create(attrs);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                        class: `md-icon-button md-list-action`
                                      });
                                      const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.List.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          active: undefined,
          right: true
        });
        const fn_0 = () => {
          attrs.active = vm_0.showSidepanel;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["showSidepanel"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_drawer__WEBPACK_IMPORTED_MODULE_4__.Drawer.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-content>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.`)
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_11__.Content.create(attrs);
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

/***/ "./src/pages/components/drawer/examples/push.html":
/*!********************************************************!*\
  !*** ./src/pages/components/drawer/examples/push.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/drawer */ "../jinge-material/lib/drawer/index.js");
/* harmony import */ var jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/toolbar */ "../jinge-material/lib/toolbar/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_KeyboardArrowLeft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/KeyboardArrowLeft.js */ "../jinge-material-icons/lib/KeyboardArrowLeft.js");
/* harmony import */ var jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material/lib/list */ "../jinge-material/lib/list/index.js");
/* harmony import */ var jinge_material_icons_lib_MoveToInbox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge-material-icons/lib/MoveToInbox.js */ "../jinge-material-icons/lib/MoveToInbox.js");
/* harmony import */ var jinge_material_icons_lib_Send_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jinge-material-icons/lib/Send.js */ "../jinge-material-icons/lib/Send.js");
/* harmony import */ var jinge_material_icons_lib_Delete_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jinge-material-icons/lib/Delete.js */ "../jinge-material-icons/lib/Delete.js");
/* harmony import */ var jinge_material_icons_lib_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jinge-material-icons/lib/Error.js */ "../jinge-material-icons/lib/Error.js");
/* harmony import */ var jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jinge-material-icons/lib/Menu.js */ "../jinge-material-icons/lib/Menu.js");
/* harmony import */ var jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jinge-material/lib/content */ "../jinge-material/lib/content/index.js");
/* harmony import */ var _push_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./push.scss */ "./src/pages/components/drawer/examples/push.scss");














/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        debugName: "attrs_of_<md-drawer-container>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        listeners: {
          "update.active": {
            fn: function(...args) {
              vm_0.showNavigation = vm_0.args[0]
            },
            opts: null
          }
        },
        slots: {
          'drawer': function(component) {
            return [
            ...(() => {
              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                  debugName: "attrs_of_<md-toolbar>",
                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                  slots: {
                    'default': function(component) {
                      return [
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                          "span",
                          {
                            class: `md-title`
                          },
                          `My App name`
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })(),
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                          "div",
                          {
                            class: `md-toolbar-section-end`
                          },
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-button>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                listeners: {
                                  click: {
                                    fn: function(...args) {
                                      vm_0.showNavigation = false
                                    },
                                    opts: null
                                  }
                                },
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-icon-keyboard_arrow_left>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                        },
                                      });
                                      const el = jinge_material_icons_lib_KeyboardArrowLeft_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                              class: `md-icon-button md-dense`
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__.Button.create(attrs);
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
                class: `md-transparent`,
                elevation: `0`
              });
              const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })(),
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
                                  const el = jinge_material_icons_lib_MoveToInbox_js__WEBPACK_IMPORTED_MODULE_6__["default"].create(attrs);
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
                                })()
                                ];
                              }
                            }
                          },
                        });
                        const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
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
                                  const el = jinge_material_icons_lib_Send_js__WEBPACK_IMPORTED_MODULE_7__["default"].create(attrs);
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
                        const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
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
                                  const el = jinge_material_icons_lib_Delete_js__WEBPACK_IMPORTED_MODULE_8__["default"].create(attrs);
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
                                })()
                                ];
                              }
                            }
                          },
                        });
                        const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
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
                                  const el = jinge_material_icons_lib_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"].create(attrs);
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
                                })()
                                ];
                              }
                            }
                          },
                        });
                        const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.ListItem.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
              });
              const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_5__.List.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })()
            ];
          },
          'main': function(component) {
            return [
            ...(() => {
              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                  debugName: "attrs_of_<md-toolbar>",
                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                  slots: {
                    'default': function(component) {
                      return [
                      ...(() => {
                        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                            debugName: "attrs_of_<if>",
                            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                            slots: {
                              'default': function(component) {
                                return [
                                ...(() => {
                                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                      debugName: "attrs_of_<md-button>",
                                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                      listeners: {
                                        click: {
                                          fn: function(...args) {
                                            vm_0.showNavigation = true
                                          },
                                          opts: null
                                        }
                                      },
                                      slots: {
                                        'default': function(component) {
                                          return [
                                          ...(() => {
                                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                                debugName: "attrs_of_<md-icon-menu>",
                                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                              },
                                            });
                                            const el = jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_10__["default"].create(attrs);
                                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                          })()
                                          ];
                                        }
                                      }
                                    },
                                    class: `md-icon-button md-on-accent`
                                  });
                                  const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__.Button.create(attrs);
                                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                })()
                                ];
                              }
                            }
                          },
                          expect: undefined
                        });
                        const fn_0 = () => {
                          attrs.expect = !vm_0.showNavigation;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["showNavigation"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })(),
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                          "span",
                          {
                            class: `md-title`
                          },
                          `My Title`
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })()
                      ];
                    }
                  }
                },
                class: `md-accent`
              });
              const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })(),
            ...(() => {
              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                  debugName: "attrs_of_<md-content>",
                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                  slots: {
                    'default': function(component) {
                      return [
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet,`),
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "br",
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })(),
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `consectetur adipisicing elit. Error quibusdam,`),
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "br",
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })(),
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `non molestias et! Earum magnam, similique,`),
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "br",
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })(),
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime?`),
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "br",
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })(),
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "br",
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })(),
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "br",
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })(),
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "br",
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })(),
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Quae non explicabo, neque.`)
                      ];
                    }
                  }
                },
              });
              const el = jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_11__.Content.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })()
            ];
          }
        }
      },
      active: undefined,
      pushMode: true,
      class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)(['md-elevation-24', _push_scss__WEBPACK_IMPORTED_MODULE_12__["default"].demo])
    });
    const fn_0 = () => {
      attrs.active = vm_0.showNavigation;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["showNavigation"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = jinge_material_lib_drawer__WEBPACK_IMPORTED_MODULE_1__.DrawerContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "./src/pages/components/drawer/index.html":
/*!************************************************!*\
  !*** ./src/pages/components/drawer/index.html ***!
  \************************************************/
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
                  `导航抽屉从左侧或右侧滑入，并包含应用程序的导航目标。尽管可以接受任何类型的内容，但通常与内部列表一起使用。`
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
                  `覆盖在上方`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Also works on the right side`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.over;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","over"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                  `从侧边推出`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Push content`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.push;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","push"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
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
                          attrs.headings = vm_0.api?.drawer?.props?.headings;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","drawer","props","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_1 = () => {
                          attrs.props = vm_0.api?.drawer?.props?.props;
                        };
                        fn_1();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","drawer","props","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    },
                    'events': function(component) {
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
                          attrs.headings = vm_0.api?.drawer?.events?.headings;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","drawer","events","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_1 = () => {
                          attrs.props = vm_0.api?.drawer?.events?.props;
                        };
                        fn_1();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","drawer","events","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
                title: `API - md-drawer`
              });
              const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiItem.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                          attrs.headings = vm_0.api?.container?.props?.headings;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","container","props","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_1 = () => {
                          attrs.props = vm_0.api?.container?.props?.props;
                        };
                        fn_1();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","container","props","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
                title: `API - md-drawer-container`
              });
              const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiItem.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })()
            ];
          }
        }
      },
      centered: true,
      title: `抽屉`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material-icons/lib/ChatBubble.js":
/*!*************************************************!*\
  !*** ../jinge-material-icons/lib/ChatBubble.js ***!
  \*************************************************/
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
          d: `M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z`
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

/***/ "../jinge-material-icons/lib/KeyboardArrowLeft.js":
/*!********************************************************!*\
  !*** ../jinge-material-icons/lib/KeyboardArrowLeft.js ***!
  \********************************************************/
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
          d: `M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z`
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

/***/ "./src/pages/components/drawer/examples/over.scss":
/*!********************************************************!*\
  !*** ./src/pages/components/drawer/examples/over.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--rGuUj"});
    if(true) {
      // 1659344205519
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/drawer/examples/push.scss":
/*!********************************************************!*\
  !*** ./src/pages/components/drawer/examples/push.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--pt39n"});
    if(true) {
      // 1659344205516
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/drawer/examples/over.ts?example":
/*!**************************************************************!*\
  !*** ./src/pages/components/drawer/examples/over.ts?example ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './over.html';\n\nexport default class ExampleDrawerTemporary extends Component {\n  static template = _tpl;\n\n  showNavigation: boolean;\n  showSidepanel: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.showNavigation = false;\n    this.showSidepanel = false;\n  }\n}\n","sass":".demo {\n  min-height: 300px;\n  margin: 0 30px;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid rgb(0 0 0 / 12%);\n\n  :global {\n    .md-drawer {\n      width: 230px;\n      max-width: calc(100vw - 125px);\n    }\n\n    .md-content {\n      padding: 16px;\n    }\n  }\n}\n","html":"<!-- import style from './over.scss' -->\n<div :class=\"['page-container md-elevation-24 md-layout-column', style.demo]\">\n  <md-toolbar class=\"md-accent\">\n    <md-button class=\"md-icon-button md-on-accent\" on:click=\"showNavigation = true\">\n      <md-icon-menu/>\n    </md-button>\n    <span class=\"md-title\">My Title</span>\n\n    <div class=\"md-toolbar-section-end\">\n      <md-button class=\"md-on-accent\" on:click=\"showSidepanel = true\">Favorites</md-button>\n    </div>\n  </md-toolbar>\n\n  <md-drawer e:active=\"showNavigation\" on:update.active=\"showNavigation = args[0]\">\n    <md-toolbar class=\"md-transparent\" elevation=\"0\">\n      <span class=\"md-title\">My App name</span>\n    </md-toolbar>\n\n    <md-list>\n      <md-list-item>\n        <md-icon-move_to_inbox/>\n        <span class=\"md-list-item-text\">Inbox</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon-send/>\n        <span class=\"md-list-item-text\">Sent Mail</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon-delete/>\n        <span class=\"md-list-item-text\">Trash</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon-error/>\n        <span class=\"md-list-item-text\">Spam</span>\n      </md-list-item>\n    </md-list>\n  </md-drawer>\n\n  <md-drawer right e:active=\"showSidepanel\" on:update.active=\"showSidepanel = args[0]\">\n    <md-toolbar class=\"md-transparent\" elevation=\"0\">\n      <span class=\"md-title\">Favorites</span>\n    </md-toolbar>\n\n    <md-list>\n      <md-list-item>\n        <span class=\"md-list-item-text\">Abbey Christansen</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon-chat_bubble class=\"md-primary\"/>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item>\n        <span class=\"md-list-item-text\">Alex Nelson</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon-chat_bubble class=\"md-primary\"/>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item>\n        <span class=\"md-list-item-text\">Mary Johnson</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon-chat_bubble/>\n        </md-button>\n      </md-list-item>\n    </md-list>\n  </md-drawer>\n\n  <md-content>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.\n  </md-content>\n</div>"});

/***/ }),

/***/ "./src/pages/components/drawer/examples/push.ts?example":
/*!**************************************************************!*\
  !*** ./src/pages/components/drawer/examples/push.ts?example ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './push.html';\n\nexport default class ExampleDrawerTemporary extends Component {\n  static template = _tpl;\n\n  showNavigation: boolean;\n  showSidepanel: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.showNavigation = false;\n    this.showSidepanel = false;\n  }\n}\n","sass":":global {\n  :local(.demo) {\n    margin: 0 30px;\n    border: 1px solid rgb(0 0 0 / 12%);\n\n    .md-content {\n      padding: 16px;\n    }\n\n    &.md-active .md-content {\n      border-left: 1px solid rgb(0 0 0 / 12%);\n    }\n  }\n}\n","html":"<!-- import style from './push.scss' -->\n<md-drawer-container\n  pushMode\n  :class=\"['md-elevation-24', style.demo]\"\n  e:active=\"showNavigation\"\n  on:update.active=\"showNavigation = args[0]\"\n>\n  <_slot slot-pass:drawer>\n    <md-toolbar class=\"md-transparent\" elevation=\"0\">\n      <span class=\"md-title\">My App name</span>\n      <div class=\"md-toolbar-section-end\">\n        <md-button class=\"md-icon-button md-dense\" on:click=\"showNavigation = false\">\n          <md-icon-keyboard_arrow_left/>\n        </md-button>\n      </div>\n    </md-toolbar>\n\n    <md-list>\n      <md-list-item>\n        <md-icon-move_to_inbox/>\n        <span class=\"md-list-item-text\">Inbox</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon-send/>\n        <span class=\"md-list-item-text\">Sent Mail</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon-delete/>\n        <span class=\"md-list-item-text\">Trash</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon-error/>\n        <span class=\"md-list-item-text\">Spam</span>\n      </md-list-item>\n    </md-list>\n  </_slot>\n\n  <_slot slot-pass:main>\n    <md-toolbar class=\"md-accent\">\n      <if e:expect=\"!showNavigation\">\n      <md-button class=\"md-icon-button md-on-accent\" on:click=\"showNavigation = true\">\n        <md-icon-menu/>\n      </md-button>\n      </if>\n      <span class=\"md-title\">My Title</span>\n    </md-toolbar>\n    <md-content>\n      Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit. Error quibusdam,<br/> non molestias et! Earum magnam, similique,<br/> quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime?<br/><br/><br/><br/> Quae non explicabo, neque.\n    </md-content>\n  </_slot>\n</md-drawer-container>"});

/***/ })

}]);
//# sourceMappingURL=src_pages_components_drawer_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-materi-22b192.js.map