"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_components_divider_index_ts"],{

/***/ "./src/pages/components/divider/api.ts":
/*!*********************************************!*\
  !*** ./src/pages/components/divider/api.ts ***!
  \*********************************************/
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
        name: "md-inset",
        description: "创建一个插入分隔符，通常用于分隔相关内容。"
      }
    ]
  }
}));


/***/ }),

/***/ "./src/pages/components/divider/examples/divider.ts":
/*!**********************************************************!*\
  !*** ./src/pages/components/divider/examples/divider.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleDivider)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _divider_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divider.html */ "./src/pages/components/divider/examples/divider.html");


class ExampleDivider extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleDivider.template = _divider_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/divider/index.ts":
/*!***********************************************!*\
  !*** ./src/pages/components/divider/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDivider": () => (/* binding */ PageDivider)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/components/divider/index.html");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/pages/components/divider/api.ts");
/* harmony import */ var _examples_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/divider */ "./src/pages/components/divider/examples/divider.ts");
/* harmony import */ var _examples_divider_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/divider?example */ "./src/pages/components/divider/examples/divider.ts?example");






class PageDivider extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
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
      divider: {
        component: _examples_divider__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_divider_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      }
    };
  }
}
PageDivider.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/divider/examples/divider.html":
/*!************************************************************!*\
  !*** ./src/pages/components/divider/examples/divider.html ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/toolbar */ "../jinge-material/lib/toolbar/index.js");
/* harmony import */ var jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/list */ "../jinge-material/lib/list/index.js");
/* harmony import */ var jinge_material_lib_subheader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/subheader */ "../jinge-material/lib/subheader/index.js");
/* harmony import */ var jinge_material_icons_lib_Phone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/Phone.js */ "../jinge-material-icons/lib/Phone.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Sms_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge-material-icons/lib/Sms.js */ "../jinge-material-icons/lib/Sms.js");
/* harmony import */ var jinge_material_lib_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jinge-material/lib/divider */ "../jinge-material/lib/divider/index.js");
/* harmony import */ var jinge_material_icons_lib_Email_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jinge-material-icons/lib/Email.js */ "../jinge-material-icons/lib/Email.js");
/* harmony import */ var jinge_material_icons_lib_MoveToInbox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jinge-material-icons/lib/MoveToInbox.js */ "../jinge-material-icons/lib/MoveToInbox.js");
/* harmony import */ var jinge_material_icons_lib_Send_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jinge-material-icons/lib/Send.js */ "../jinge-material-icons/lib/Send.js");
/* harmony import */ var jinge_material_icons_lib_Delete_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jinge-material-icons/lib/Delete.js */ "../jinge-material-icons/lib/Delete.js");
/* harmony import */ var jinge_material_icons_lib_Error_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jinge-material-icons/lib/Error.js */ "../jinge-material-icons/lib/Error.js");
/* harmony import */ var jinge_material_lib_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jinge-material/lib/avatar */ "../jinge-material/lib/avatar/index.js");
/* harmony import */ var jinge_material_icons_lib_ChatBubble_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jinge-material-icons/lib/ChatBubble.js */ "../jinge-material-icons/lib/ChatBubble.js");
/* harmony import */ var _divider_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./divider.scss */ "./src/pages/components/divider/examples/divider.scss");
















/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _divider_scss__WEBPACK_IMPORTED_MODULE_15__["default"].demo
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `viewport`
        },
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
                      `Full`
                    );
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return el;
                  })()
                  ];
                }
              }
            },
            elevation: `1`
          });
          const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
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
                        debugName: "attrs_of_<md-subheader>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Phone`)
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_subheader__WEBPACK_IMPORTED_MODULE_3__.Subheader.create(attrs);
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
                                  debugName: "attrs_of_<md-icon-phone>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-primary`
                              });
                              const el = jinge_material_icons_lib_Phone_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "div",
                                {
                                  class: `md-list-item-text`
                                },
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "span",
                                  `(650) 555-1234`
                                ),
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "span",
                                  `Mobile`
                                )
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
                                            debugName: "attrs_of_<md-icon-sms>",
                                            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          },
                                        });
                                        const el = jinge_material_icons_lib_Sms_js__WEBPACK_IMPORTED_MODULE_6__["default"].create(attrs);
                                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                      })()
                                      ];
                                    }
                                  }
                                },
                                class: `md-icon-button md-list-action`
                              });
                              const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_5__.Button.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
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
                                "div",
                                {
                                  class: `md-list-item-text`
                                },
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "span",
                                  `(650) 555-1234`
                                ),
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "span",
                                  `Mobile`
                                )
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
                                            debugName: "attrs_of_<md-icon-sms>",
                                            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          },
                                        });
                                        const el = jinge_material_icons_lib_Sms_js__WEBPACK_IMPORTED_MODULE_6__["default"].create(attrs);
                                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                      })()
                                      ];
                                    }
                                  }
                                },
                                class: `md-icon-button md-list-action`
                              });
                              const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_5__.Button.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                            ];
                          }
                        }
                      },
                      class: `md-inset`
                    });
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-divider>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_lib_divider__WEBPACK_IMPORTED_MODULE_7__.Divider.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-subheader>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Email`)
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_subheader__WEBPACK_IMPORTED_MODULE_3__.Subheader.create(attrs);
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
                                  debugName: "attrs_of_<md-icon-email>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                class: `md-primary`
                              });
                              const el = jinge_material_icons_lib_Email_js__WEBPACK_IMPORTED_MODULE_8__["default"].create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "div",
                                {
                                  class: `md-list-item-text`
                                },
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "span",
                                  `aliconnors@example.com`
                                ),
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "span",
                                  `Personal`
                                )
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
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
                                "div",
                                {
                                  class: `md-list-item-text`
                                },
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "span",
                                  `ali_connors@example.com`
                                ),
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "span",
                                  `Work`
                                )
                              );
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      class: `md-inset`
                    });
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-double-line`
          });
          const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.List.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `viewport`
        },
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
                      `Inset`
                    );
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return el;
                  })()
                  ];
                }
              }
            },
            elevation: `1`
          });
          const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
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
                              const el = jinge_material_icons_lib_MoveToInbox_js__WEBPACK_IMPORTED_MODULE_9__["default"].create(attrs);
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
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
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
                              const el = jinge_material_icons_lib_Send_js__WEBPACK_IMPORTED_MODULE_10__["default"].create(attrs);
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
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
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
                              const el = jinge_material_icons_lib_Delete_js__WEBPACK_IMPORTED_MODULE_11__["default"].create(attrs);
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
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
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
                              const el = jinge_material_icons_lib_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"].create(attrs);
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
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-divider>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                      class: `md-inset`
                    });
                    const el = jinge_material_lib_divider__WEBPACK_IMPORTED_MODULE_7__.Divider.create(attrs);
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
                                  debugName: "attrs_of_<md-avatar>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                  slots: {
                                    'default': function(component) {
                                      return [
                                      (() => {
                                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                          "img",
                                          {
                                            src: `https://placeimg.com/40/40/people/5`,
                                            alt: `People`
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
                              const el = jinge_material_lib_avatar__WEBPACK_IMPORTED_MODULE_13__.Avatar.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
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
                                        const el = jinge_material_icons_lib_ChatBubble_js__WEBPACK_IMPORTED_MODULE_14__["default"].create(attrs);
                                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                      })()
                                      ];
                                    }
                                  }
                                },
                                class: `md-icon-button md-list-action`
                              });
                              const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_5__.Button.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
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
                                  debugName: "attrs_of_<md-avatar>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                  slots: {
                                    'default': function(component) {
                                      return [
                                      (() => {
                                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                          "img",
                                          {
                                            src: `https://placeimg.com/40/40/people/1`,
                                            alt: `People`
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
                              const el = jinge_material_lib_avatar__WEBPACK_IMPORTED_MODULE_13__.Avatar.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
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
                                        const el = jinge_material_icons_lib_ChatBubble_js__WEBPACK_IMPORTED_MODULE_14__["default"].create(attrs);
                                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                      })()
                                      ];
                                    }
                                  }
                                },
                                class: `md-icon-button md-list-action`
                              });
                              const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_5__.Button.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
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
                                  debugName: "attrs_of_<md-avatar>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                  slots: {
                                    'default': function(component) {
                                      return [
                                      (() => {
                                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                          "img",
                                          {
                                            src: `https://placeimg.com/40/40/people/6`,
                                            alt: `People`
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
                              const el = jinge_material_lib_avatar__WEBPACK_IMPORTED_MODULE_13__.Avatar.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })(),
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
                                        const el = jinge_material_icons_lib_ChatBubble_js__WEBPACK_IMPORTED_MODULE_14__["default"].create(attrs);
                                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                      })()
                                      ];
                                    }
                                  }
                                },
                                class: `md-icon-button md-list-action`
                              });
                              const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_5__.Button.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                            ];
                          }
                        }
                      },
                    });
                    const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.ListItem.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
          });
          const el = jinge_material_lib_list__WEBPACK_IMPORTED_MODULE_2__.List.create(attrs);
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

/***/ "./src/pages/components/divider/index.html":
/*!*************************************************!*\
  !*** ./src/pages/components/divider/index.html ***!
  \*************************************************/
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
                  `分隔线是一个轻量级的细法则，用于将列表和页面布局中的内容分组，并有助于将页面内容和层次结构组织到各个图块中。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `分隔符可用于列表中并分隔内容。它们非常适合导航面板和菜单。`
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
                  `分隔线`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Divider`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.divider;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","divider"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                    title: `API - md-divider`
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
      title: `分隔线`
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

/***/ "../jinge-material-icons/lib/Email.js":
/*!********************************************!*\
  !*** ../jinge-material-icons/lib/Email.js ***!
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
          d: `M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z`
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

/***/ "../jinge-material-icons/lib/Phone.js":
/*!********************************************!*\
  !*** ../jinge-material-icons/lib/Phone.js ***!
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
          d: `M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z`
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

/***/ "../jinge-material-icons/lib/Sms.js":
/*!******************************************!*\
  !*** ../jinge-material-icons/lib/Sms.js ***!
  \******************************************/
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
          d: `M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z`
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

/***/ "../jinge-material/lib/divider/style/index.css":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/divider/style/index.css ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205862
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "../jinge-material/lib/subheader/style/index.css":
/*!*******************************************************!*\
  !*** ../jinge-material/lib/subheader/style/index.css ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205864
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/pages/components/divider/examples/divider.scss":
/*!************************************************************!*\
  !*** ./src/pages/components/divider/examples/divider.scss ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--zX2kU"});
    if(true) {
      // 1659344205078
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/divider/examples/divider.ts?example":
/*!******************************************************************!*\
  !*** ./src/pages/components/divider/examples/divider.ts?example ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './divider.html';\n\nexport default class ExampleDivider extends Component {\n  static template = _tpl;\n}\n","sass":".demo {\n  :global {\n    .viewport {\n      width: 320px;\n      margin-right: 6px;\n      max-width: 100%;\n      display: inline-block;\n      vertical-align: top;\n      overflow: auto;\n      border: 1px solid rgb(0 0 0 / 12%);\n    }\n  }\n}\n","html":"<!-- import style from './divider.scss' -->\n<div :class=\"style.demo\">\n  <div class=\"viewport\">\n    <md-toolbar elevation=\"1\">\n      <span class=\"md-title\">Full</span>\n    </md-toolbar>\n\n    <md-list class=\"md-double-line\">\n      <md-subheader>Phone</md-subheader>\n\n      <md-list-item>\n        <md-icon-phone class=\"md-primary\"/>\n\n        <div class=\"md-list-item-text\">\n          <span>(650) 555-1234</span>\n          <span>Mobile</span>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon-sms/>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item class=\"md-inset\">\n        <div class=\"md-list-item-text\">\n          <span>(650) 555-1234</span>\n          <span>Mobile</span>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon-sms/>\n        </md-button>\n      </md-list-item>\n\n      <md-divider></md-divider>\n      <md-subheader>Email</md-subheader>\n\n      <md-list-item>\n        <md-icon-email class=\"md-primary\"/>\n\n        <div class=\"md-list-item-text\">\n          <span>aliconnors@example.com</span>\n          <span>Personal</span>\n        </div>\n      </md-list-item>\n\n      <md-list-item class=\"md-inset\">\n        <div class=\"md-list-item-text\">\n          <span>ali_connors@example.com</span>\n          <span>Work</span>\n        </div>\n      </md-list-item>\n    </md-list>\n  </div>\n\n  <div class=\"viewport\">\n    <md-toolbar elevation=\"1\">\n      <span class=\"md-title\">Inset</span>\n    </md-toolbar>\n\n    <md-list>\n      <md-list-item>\n        <md-icon-move_to_inbox/>\n        <span class=\"md-list-item-text\">Inbox</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon-send/>\n        <span class=\"md-list-item-text\">Sent Mail</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon-delete/>\n        <span class=\"md-list-item-text\">Trash</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon-error/>\n        <span class=\"md-list-item-text\">Spam</span>\n      </md-list-item>\n\n      <md-divider class=\"md-inset\"></md-divider>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/5\" alt=\"People\"/>\n        </md-avatar>\n\n        <span class=\"md-list-item-text\">Abbey Christansen</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon-chat_bubble class=\"md-primary\"/>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/1\" alt=\"People\"/>\n        </md-avatar>\n\n        <span class=\"md-list-item-text\">Alex Nelson</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon-chat_bubble class=\"md-primary\"/>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/6\" alt=\"People\"/>\n        </md-avatar>\n\n        <span class=\"md-list-item-text\">Mary Johnson</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon-chat_bubble/>\n        </md-button>\n      </md-list-item>\n    </md-list>\n  </div>\n</div>"});

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

/***/ "../jinge-material/lib/divider/index.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/divider/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Divider": () => (/* binding */ Divider)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/divider/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/divider/index.tpl.js");


class Divider extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
    _jg0.tag = "hr";
  }
  __afterRender() {
    const el = this.__firstDOM;
    this.tag = el.parentElement.classList.contains("md-list") ? "li" : "hr";
  }
}
Divider.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/divider/index.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/divider/index.tpl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        slots: {
          'default': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "hr",
              );
              const fn_0 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-divider', vm_0.class]));
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          },
          'li': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "li",
              );
              const fn_0 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-divider', vm_0.class]));
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      test: undefined
    });
    const fn_0 = () => {
      attrs.test = vm_0.tag;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["tag"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = jinge__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/divider/style/index.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/divider/style/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/divider/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/subheader/index.js":
/*!************************************************!*\
  !*** ../jinge-material/lib/subheader/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subheader": () => (/* binding */ Subheader)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/subheader/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/subheader/index.tpl.js");


class Subheader extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
  }
  __afterRender() {
    const el = this.__firstDOM;
    this.tag = el.parentElement.classList.contains("md-list") ? "li" : "div";
  }
}
Subheader.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/subheader/index.tpl.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/subheader/index.tpl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        slots: {
          'default': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "span",
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          },
          'li': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "li",
                {
                  class: `md-subheader`
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
                })()
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          },
          'div': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: `md-subheader`
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
                })()
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      test: undefined
    });
    const fn_0 = () => {
      attrs.test = vm_0.tag;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["tag"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = jinge__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/subheader/style/index.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/subheader/style/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/subheader/style/index.css");




/***/ })

}]);
//# sourceMappingURL=src_pages_components_divider_index_ts.js.map