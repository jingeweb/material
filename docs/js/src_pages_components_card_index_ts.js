"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_components_card_index_ts"],{

/***/ "./src/pages/components/card/api.ts":
/*!******************************************!*\
  !*** ./src/pages/components/card/api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
  card: {
    headings: ["名称", "描述", "默认值"],
    props: [
      {
        name: "withHover",
        type: "Boolean",
        description: "卡片在鼠标悬停时启用阴影（elevation）效果",
        defaults: "false"
      }
    ]
  },
  cardActions: {
    headings: ["名称", "描述", "默认值"],
    props: [
      {
        name: "alignment",
        type: "String",
        description: "操作按钮的对齐方式",
        defaults: "right"
      }
    ]
  },
  cardArea: {
    headings: ["名称", "描述", "默认值"],
    props: [
      {
        name: "inset",
        type: "Boolean",
        description: "使用 inset 类型的边框",
        defaults: "false"
      }
    ]
  },
  cardMedia: {
    headings: ["名称", "描述", "默认值"],
    props: [
      {
        name: "ratio",
        type: "String",
        description: "自动调整大小或裁剪图像。可选比例包括：1:1、1/1、4:3、4/3、16:9 或 16/9。",
        defaults: "null"
      },
      {
        name: "medium",
        type: "Boolean",
        description: "指定使用中等大小的媒介。仅在 md-card-header 内部起作用。",
        defaults: "false"
      },
      {
        name: "big",
        type: "Boolean",
        description: "指定使用大尺寸的媒介。仅在 md-card-header 内部起作用。",
        defaults: "false"
      }
    ]
  },
  cardMediaCover: {
    headings: ["名称", "描述", "默认值"],
    props: [
      {
        name: "textScrim",
        type: "Boolean",
        description: "根据图像应用自动计算出来的渐变背景。此选项通过提取图像上的明暗度来应用背景颜色，从而增加了文本的清晰度。如果图像较暗，则文本的背景会更亮。如果不是很暗，则背景会更暗。",
        defaults: "false"
      },
      {
        name: "solid",
        type: "Boolean",
        description: "以与 textScrim 相同的计算逻辑应用纯色背景。",
        defaults: "false"
      }
    ]
  }
}));


/***/ }),

/***/ "./src/pages/components/card/examples/expand.ts":
/*!******************************************************!*\
  !*** ./src/pages/components/card/examples/expand.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleExpandCard)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _expand_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expand.html */ "./src/pages/components/card/examples/expand.html");


class ExampleExpandCard extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleExpandCard.template = _expand_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/card/examples/layouts.ts":
/*!*******************************************************!*\
  !*** ./src/pages/components/card/examples/layouts.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleLayoutsCard)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_dialog_dialog_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/dialog/dialog-alert */ "../jinge-material/lib/dialog/dialog-alert.js");
/* harmony import */ var _layouts_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts.html */ "./src/pages/components/card/examples/layouts.html");



class ExampleLayoutsCard extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  sendMessage() {
    jinge_material_lib_dialog_dialog_alert__WEBPACK_IMPORTED_MODULE_1__.DialogAlert.show("Send a message...");
  }
  doACall() {
    jinge_material_lib_dialog_dialog_alert__WEBPACK_IMPORTED_MODULE_1__.DialogAlert.show("Calling someone...");
  }
}
ExampleLayoutsCard.template = _layouts_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/card/examples/media-cover.ts":
/*!***********************************************************!*\
  !*** ./src/pages/components/card/examples/media-cover.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleMediaCoverCard)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _media_cover_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-cover.html */ "./src/pages/components/card/examples/media-cover.html");


class ExampleMediaCoverCard extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleMediaCoverCard.template = _media_cover_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/card/examples/media.ts":
/*!*****************************************************!*\
  !*** ./src/pages/components/card/examples/media.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleMediaCard)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _media_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.html */ "./src/pages/components/card/examples/media.html");


class ExampleMediaCard extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleMediaCard.template = _media_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/card/examples/regular.ts":
/*!*******************************************************!*\
  !*** ./src/pages/components/card/examples/regular.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleRegularCard)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _regular_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regular.html */ "./src/pages/components/card/examples/regular.html");


class ExampleRegularCard extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleRegularCard.template = _regular_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/card/examples/theme.ts":
/*!*****************************************************!*\
  !*** ./src/pages/components/card/examples/theme.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleThemeCard)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _theme_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.html */ "./src/pages/components/card/examples/theme.html");


class ExampleThemeCard extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleThemeCard.template = _theme_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/card/index.ts":
/*!********************************************!*\
  !*** ./src/pages/components/card/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageCard": () => (/* binding */ PageCard)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/components/card/index.html");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/pages/components/card/api.ts");
/* harmony import */ var _examples_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/regular */ "./src/pages/components/card/examples/regular.ts");
/* harmony import */ var _examples_regular_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/regular?example */ "./src/pages/components/card/examples/regular.ts?example");
/* harmony import */ var _examples_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/media */ "./src/pages/components/card/examples/media.ts");
/* harmony import */ var _examples_media_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/media?example */ "./src/pages/components/card/examples/media.ts?example");
/* harmony import */ var _examples_media_cover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/media-cover */ "./src/pages/components/card/examples/media-cover.ts");
/* harmony import */ var _examples_media_cover_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/media-cover?example */ "./src/pages/components/card/examples/media-cover.ts?example");
/* harmony import */ var _examples_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/theme */ "./src/pages/components/card/examples/theme.ts");
/* harmony import */ var _examples_theme_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/theme?example */ "./src/pages/components/card/examples/theme.ts?example");
/* harmony import */ var _examples_expand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/expand */ "./src/pages/components/card/examples/expand.ts");
/* harmony import */ var _examples_expand_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/expand?example */ "./src/pages/components/card/examples/expand.ts?example");
/* harmony import */ var _examples_layouts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/layouts */ "./src/pages/components/card/examples/layouts.ts");
/* harmony import */ var _examples_layouts_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/layouts?example */ "./src/pages/components/card/examples/layouts.ts?example");
















class PageCard extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
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
      regular: {
        component: _examples_regular__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_regular_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      media: {
        component: _examples_media__WEBPACK_IMPORTED_MODULE_6__["default"],
        source: _examples_media_example__WEBPACK_IMPORTED_MODULE_7__["default"]
      },
      mediaCover: {
        component: _examples_media_cover__WEBPACK_IMPORTED_MODULE_8__["default"],
        source: _examples_media_cover_example__WEBPACK_IMPORTED_MODULE_9__["default"]
      },
      theme: {
        component: _examples_theme__WEBPACK_IMPORTED_MODULE_10__["default"],
        source: _examples_theme_example__WEBPACK_IMPORTED_MODULE_11__["default"]
      },
      expand: {
        component: _examples_expand__WEBPACK_IMPORTED_MODULE_12__["default"],
        source: _examples_expand_example__WEBPACK_IMPORTED_MODULE_13__["default"]
      },
      layouts: {
        component: _examples_layouts__WEBPACK_IMPORTED_MODULE_14__["default"],
        source: _examples_layouts_example__WEBPACK_IMPORTED_MODULE_15__["default"]
      }
    };
  }
}
PageCard.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/card/examples/expand.html":
/*!********************************************************!*\
  !*** ./src/pages/components/card/examples/expand.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/card */ "../jinge-material/lib/card/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_KeyboardArrowDown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material-icons/lib/KeyboardArrowDown.js */ "../jinge-material-icons/lib/KeyboardArrowDown.js");
/* harmony import */ var _expand_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expand.scss */ "./src/pages/components/card/examples/expand.scss");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _expand_scss__WEBPACK_IMPORTED_MODULE_4__["default"].demo
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "img",
                              {
                                src: `assets/examples/card-image-1.jpg`,
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
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-header>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `md-title`
                              },
                              `Title goes here`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `md-subhead`
                              },
                              `Subtitle here`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-expand>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-actions>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                        "div",
                                        ...(() => {
                                          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                              debugName: "attrs_of_<md-button>",
                                              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                              slots: {
                                                'default': function(component) {
                                                  return [
                                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                                  ];
                                                }
                                              }
                                            },
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
                                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                                  ];
                                                }
                                              }
                                            },
                                          });
                                          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
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
                                          debugName: "attrs_of_<md-card-expand-trigger>",
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
                                                              debugName: "attrs_of_<md-icon-keyboard_arrow_down>",
                                                              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                            },
                                                          });
                                                          const el = jinge_material_icons_lib_KeyboardArrowDown_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
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
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardExpandTrigger.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                              "md-alignment": `space-between`
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-expand-content>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-card-content>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          slots: {
                                            'default': function(component) {
                                              return [
                                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`)
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardExpandContent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardExpand.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "img",
                              {
                                src: `assets/examples/card-image-1.jpg`,
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
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-header>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `md-title`
                              },
                              `Title goes here`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `md-subhead`
                              },
                              `Subtitle here`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-expand>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-actions>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                        "div",
                                        ...(() => {
                                          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                              debugName: "attrs_of_<md-button>",
                                              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                              slots: {
                                                'default': function(component) {
                                                  return [
                                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                                  ];
                                                }
                                              }
                                            },
                                          });
                                          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
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
                                          debugName: "attrs_of_<md-card-expand-trigger>",
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
                                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Learn more`)
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
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardExpandTrigger.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                              "md-alignment": `space-between`
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-expand-content>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-card-content>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          slots: {
                                            'default': function(component) {
                                              return [
                                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`)
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardExpandContent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardExpand.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
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

/***/ "./src/pages/components/card/examples/layouts.html":
/*!*********************************************************!*\
  !*** ./src/pages/components/card/examples/layouts.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/card */ "../jinge-material/lib/card/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/avatar */ "../jinge-material/lib/avatar/index.js");
/* harmony import */ var jinge_material_icons_lib_MyLocation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/MyLocation.js */ "../jinge-material-icons/lib/MyLocation.js");
/* harmony import */ var jinge_material_icons_lib_AccessTime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material-icons/lib/AccessTime.js */ "../jinge-material-icons/lib/AccessTime.js");
/* harmony import */ var jinge_material_lib_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge-material/lib/ripple */ "../jinge-material/lib/ripple/index.js");
/* harmony import */ var jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jinge-material/lib/icon */ "../jinge-material/lib/icon/index.js");
/* harmony import */ var jinge_material_lib_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jinge-material/lib/menu */ "../jinge-material/lib/menu/index.js");
/* harmony import */ var jinge_material_icons_lib_MoreVert_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jinge-material-icons/lib/MoreVert.js */ "../jinge-material-icons/lib/MoreVert.js");
/* harmony import */ var jinge_material_icons_lib_Phone_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jinge-material-icons/lib/Phone.js */ "../jinge-material-icons/lib/Phone.js");
/* harmony import */ var jinge_material_icons_lib_Message_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jinge-material-icons/lib/Message.js */ "../jinge-material-icons/lib/Message.js");
/* harmony import */ var _layouts_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts.scss */ "./src/pages/components/card/examples/layouts.scss");













/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _layouts_scss__WEBPACK_IMPORTED_MODULE_12__["default"].demo
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "img",
                              {
                                src: `assets/examples/card-image-1.jpg`,
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
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-header>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `md-title`
                              },
                              `Title goes here`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `md-subhead`
                              },
                              `Subtitle here`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-content>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`)
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-header>",
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
                            const el = jinge_material_lib_avatar__WEBPACK_IMPORTED_MODULE_3__.Avatar.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `md-title`
                              },
                              `Title goes here`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `md-subhead`
                              },
                              `Subtitle here`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "img",
                              {
                                src: `assets/examples/card-image-1.jpg`,
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
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-content>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.`)
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-area>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/card-example.jpg`,
                                          alt: `Coffee House`
                                        },
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                              ratio: `16:9`
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "h2",
                                        {
                                          class: `md-title`
                                        },
                                        `Coffee House`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        ...(() => {
                                          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                              debugName: "attrs_of_<md-icon-my_location>",
                                              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                            },
                                          });
                                          const el = jinge_material_icons_lib_MyLocation_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                                          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                                          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                        })(),
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                          "span",
                                          `2 miles`
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
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-content>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    inset: true
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardArea.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-content>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "h3",
                              {
                                class: `md-subheading`
                              },
                              `Today's availability`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `card-reservation`
                              },
                              ...(() => {
                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                    debugName: "attrs_of_<md-icon-access_time>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                  },
                                });
                                const el = jinge_material_icons_lib_AccessTime_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(attrs);
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                              })(),
                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                "div",
                                {
                                  class: `md-button-group`
                                },
                                ...(() => {
                                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                      debugName: "attrs_of_<md-button>",
                                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                      slots: {
                                        'default': function(component) {
                                          return [
                                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `5:30PM`)
                                          ];
                                        }
                                      }
                                    },
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
                                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `7:30PM`)
                                          ];
                                        }
                                      }
                                    },
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
                                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `9:00PM`)
                                          ];
                                        }
                                      }
                                    },
                                  });
                                  const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
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
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Reserve`)
                                    ];
                                  }
                                }
                              },
                              class: `md-primary`
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
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          class: `md-card-example`
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-area>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/card-image-1.jpg`,
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
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-title`
                                        },
                                        `Actions left aligned`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        `Subtitle here`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-content>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardArea.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                    alignment: `left`
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-ripple>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/card-image-1.jpg`,
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
                            const el = jinge_material_lib_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                          debugName: "attrs_of_<md-icon>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          slots: {
                                            'default': function(component) {
                                              return [
                                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `favorite`)
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_7__.Icon.create(attrs);
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
                                          debugName: "attrs_of_<md-icon>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          slots: {
                                            'default': function(component) {
                                              return [
                                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `bookmark`)
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_7__.Icon.create(attrs);
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
                                          debugName: "attrs_of_<md-icon>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          slots: {
                                            'default': function(component) {
                                              return [
                                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `share`)
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_7__.Icon.create(attrs);
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
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "img",
                              {
                                src: `assets/examples/card-image-2.jpg`,
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
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-content>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.`)
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-header>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header-text>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-title`
                                        },
                                        `Actions left aligned`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        `Subtitle here`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeaderText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-menu>",
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
                                                    debugName: "attrs_of_<md-icon-more_vert>",
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                  },
                                                });
                                                const el = jinge_material_icons_lib_MoreVert_js__WEBPACK_IMPORTED_MODULE_9__["default"].create(attrs);
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
                                  },
                                  'content': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-menu-item>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          listeners: {
                                            click: {
                                              fn: function(...args) {
                                                vm_0.doACall(...args);
                                              },
                                              opts: null
                                            }
                                          },
                                          slots: {
                                            'default': function(component) {
                                              return [
                                              (() => {
                                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                                  "span",
                                                  `Call`
                                                );
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })(),
                                              ...(() => {
                                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                                    debugName: "attrs_of_<md-icon-phone>",
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                  },
                                                });
                                                const el = jinge_material_icons_lib_Phone_js__WEBPACK_IMPORTED_MODULE_10__["default"].create(attrs);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_menu__WEBPACK_IMPORTED_MODULE_8__.MenuItem.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })(),
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-menu-item>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          listeners: {
                                            click: {
                                              fn: function(...args) {
                                                vm_0.sendMessage(...args);
                                              },
                                              opts: null
                                            }
                                          },
                                          slots: {
                                            'default': function(component) {
                                              return [
                                              (() => {
                                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                                  "span",
                                                  `Send a message`
                                                );
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })(),
                                              ...(() => {
                                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                                    debugName: "attrs_of_<md-icon-message>",
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                  },
                                                });
                                                const el = jinge_material_icons_lib_Message_js__WEBPACK_IMPORTED_MODULE_11__["default"].create(attrs);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_menu__WEBPACK_IMPORTED_MODULE_8__.MenuItem.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                              size: `big`,
                              placement: `bottom-end`
                            });
                            const el = jinge_material_lib_menu__WEBPACK_IMPORTED_MODULE_8__.Menu.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-content>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`)
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                    alignment: `left`
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
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

/***/ "./src/pages/components/card/examples/media-cover.html":
/*!*************************************************************!*\
  !*** ./src/pages/components/card/examples/media-cover.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/card */ "../jinge-material/lib/card/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Favorite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material-icons/lib/Favorite.js */ "../jinge-material-icons/lib/Favorite.js");
/* harmony import */ var jinge_material_icons_lib_Share_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/Share.js */ "../jinge-material-icons/lib/Share.js");
/* harmony import */ var _media_cover_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media-cover.scss */ "./src/pages/components/card/examples/media-cover.scss");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _media_cover_scss__WEBPACK_IMPORTED_MODULE_5__["default"].demo
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media-cover>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/card-sky.jpg`,
                                          alt: `Skyscraper`
                                        },
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                              ratio: `16:9`
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-area>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-card-header>",
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
                                                  `Without text background`
                                                );
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })(),
                                              (() => {
                                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                                  "span",
                                                  {
                                                    class: `md-subhead`
                                                  },
                                                  `I bet you can't read this`
                                                );
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })(),
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-card-actions>",
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
                                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Neither this`)
                                                        ];
                                                      }
                                                    }
                                                  },
                                                });
                                                const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Or this`)
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
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardArea.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMediaCover.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media-cover>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/card-sky.jpg`,
                                          alt: `Skyscraper`
                                        },
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                              ratio: `16:9`
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-area>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-card-header>",
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
                                                  `Gradient background`
                                                );
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })(),
                                              (() => {
                                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                                  "span",
                                                  {
                                                    class: `md-subhead`
                                                  },
                                                  `16/9 image`
                                                );
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })(),
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-card-actions>",
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
                                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                                        ];
                                                      }
                                                    }
                                                  },
                                                });
                                                const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardArea.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    textScrim: true
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMediaCover.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media-cover>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/card-sky.jpg`,
                                          alt: `Skyscraper`
                                        },
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                              ratio: `4:3`
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-area>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-card-header>",
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
                                                  `Solid background`
                                                );
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })(),
                                              (() => {
                                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                                  "span",
                                                  {
                                                    class: `md-subhead`
                                                  },
                                                  `4/3 image`
                                                );
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardArea.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    solid: true
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMediaCover.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media-cover>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/card-sky.jpg`,
                                          alt: `Skyscraper`
                                        },
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                              ratio: `1:1`
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-area>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-card-header>",
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
                                                  `Solid background`
                                                );
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })(),
                                              (() => {
                                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                                  "span",
                                                  {
                                                    class: `md-subhead`
                                                  },
                                                  `1/1 image`
                                                );
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })(),
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-card-actions>",
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
                                                              debugName: "attrs_of_<md-icon-favorite>",
                                                              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                            },
                                                          });
                                                          const el = jinge_material_icons_lib_Favorite_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
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
                                                              debugName: "attrs_of_<md-icon-share>",
                                                              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                            },
                                                          });
                                                          const el = jinge_material_icons_lib_Share_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
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
                                      });
                                      const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardArea.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    solid: true
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMediaCover.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
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

/***/ "./src/pages/components/card/examples/media.html":
/*!*******************************************************!*\
  !*** ./src/pages/components/card/examples/media.html ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/card */ "../jinge-material/lib/card/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Favorite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material-icons/lib/Favorite.js */ "../jinge-material-icons/lib/Favorite.js");
/* harmony import */ var jinge_material_icons_lib_Bookmark_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/Bookmark.js */ "../jinge-material-icons/lib/Bookmark.js");
/* harmony import */ var jinge_material_icons_lib_Share_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material-icons/lib/Share.js */ "../jinge-material-icons/lib/Share.js");
/* harmony import */ var _media_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media.scss */ "./src/pages/components/card/examples/media.scss");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _media_scss__WEBPACK_IMPORTED_MODULE_6__["default"].demo
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-header>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header-text>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-title`
                                        },
                                        `Media card`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        `Normal size`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeaderText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/avatar-2.jpg`,
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
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-header>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header-text>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-title`
                                        },
                                        `Media card`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        `Medium size`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeaderText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/card-weather.png`,
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
                              medium: true
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-header>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header-text>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-title`
                                        },
                                        `Media card`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        `Big size`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeaderText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/cover.png`,
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
                              big: true
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-media-actions>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/villains.png`,
                                          alt: `Cover`
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
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-actions>",
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
                                                    debugName: "attrs_of_<md-icon-favorite>",
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                  },
                                                });
                                                const el = jinge_material_icons_lib_Favorite_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
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
                                                    debugName: "attrs_of_<md-icon-bookmark>",
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                  },
                                                });
                                                const el = jinge_material_icons_lib_Bookmark_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
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
                                                    debugName: "attrs_of_<md-icon-share>",
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                  },
                                                });
                                                const el = jinge_material_icons_lib_Share_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(attrs);
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
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMediaActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
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

/***/ "./src/pages/components/card/examples/regular.html":
/*!*********************************************************!*\
  !*** ./src/pages/components/card/examples/regular.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/card */ "../jinge-material/lib/card/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_lib_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/ripple */ "../jinge-material/lib/ripple/index.js");
/* harmony import */ var _regular_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regular.scss */ "./src/pages/components/card/examples/regular.scss");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _regular_scss__WEBPACK_IMPORTED_MODULE_4__["default"].demo
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-header>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `md-title`
                              },
                              `Card without hover effect`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-content>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea,
                                nostrum odio. Dolores, sed accusantium quasi non.`)
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-ripple>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-title`
                                        },
                                        `Card with hover effect`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        `It also have a ripple`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-content>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque
                                            ea, nostrum odio. Dolores, sed accusantium quasi non.`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-actions>",
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
                                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          withHover: true
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
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

/***/ "./src/pages/components/card/examples/theme.html":
/*!*******************************************************!*\
  !*** ./src/pages/components/card/examples/theme.html ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/card */ "../jinge-material/lib/card/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_lib_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/ripple */ "../jinge-material/lib/ripple/index.js");
/* harmony import */ var _theme_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.scss */ "./src/pages/components/card/examples/theme.scss");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _theme_scss__WEBPACK_IMPORTED_MODULE_4__["default"].demo
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-header>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header-text>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-title`
                                        },
                                        `Primary color`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        `Subtitle here`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeaderText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-media>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "img",
                                        {
                                          src: `assets/examples/avatar-2.jpg`,
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
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardMedia.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-card-actions>",
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                  });
                  const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          class: `md-primary`
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-ripple>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-title`
                                        },
                                        `Accent color`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        `With hover and ripple effects`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-content>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-actions>",
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
                                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
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
                                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Action`)
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
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardActions.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          class: `md-accent`,
          withHover: true
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-ripple>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-title`
                                        },
                                        `Purple primary color`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        `With hover and ripple effects`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-content>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          class: `md-primary md-purple-card`,
          withHover: true
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-card>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-ripple>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-header>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-title`
                                        },
                                        `Orange primary color`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "div",
                                        {
                                          class: `md-subhead`
                                        },
                                        `With hover and ripple effects`
                                      );
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return el;
                                    })()
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-card-content>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.`)
                                    ];
                                  }
                                }
                              },
                            });
                            const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.CardContent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          class: `md-primary md-orange-card`,
          withHover: true
        });
        const el = jinge_material_lib_card__WEBPACK_IMPORTED_MODULE_1__.Card.create(attrs);
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

/***/ "./src/pages/components/card/index.html":
/*!**********************************************!*\
  !*** ./src/pages/components/card/index.html ***!
  \**********************************************/
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
                  `卡片可能包含照片，文字和超链接。它们可能会显示包含大小可变的元素的内容，例如带有可变长度标题的照片。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `卡片被拆分成了非常细的子组件。卡片的每个部分都是一个组件。可以按照示例的相同逻辑以任意顺序组合它们。`
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
                  `常规卡片`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `最简单的卡片由卡片头（header）、内容区（content area）和动作按钮（action buttons）构成，依次对应组件`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-header`
                  ),
                  `、`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-content`
                  ),
                  `和`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-actions`
                  ),
                  `。
                        卡片头可以包含标题和副标题，依次通过类`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `.md-title`
                  ),
                  `和`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `.md-subhead`
                  ),
                  `指定。内容区可以包含各种文本和图片。动作按钮通常包含`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-button`
                  ),
                  `组件。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `如果想在用户将鼠标悬停在卡片上时添加阴影（elevation），请添加`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `withHover`
                  ),
                  `属性。还可以添加波纹效果，只需要将`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card`
                  ),
                  `的包裹在`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-ripple`
                  ),
                  `组件里。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Regular Cards`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.regular;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","regular"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "h2",
                  `带图片的卡片`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `为了给卡片增添视觉吸引力，可以在`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-header`
                  ),
                  `标签内添加包含有图片（`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `img`
                  ),
                  `标签）的`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-media`
                  ),
                  `组件。使用属性`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-medium`
                  ),
                  `和`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-big`
                  ),
                  `可以将图像大小增加到中等或大尺寸。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `尽管对于纯文本标题不是必需的，但是当使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-media`
                  ),
                  `时，标题和副标题应包裹在`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-header-text`
                  ),
                  `组件周围。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `对于侧面带有操作图标按钮的无文本卡片，请将卡片内容包裹在`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-media-actions`
                  ),
                  `组件内。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Media cover`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.media;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","media"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `如果要使图像充满整个卡片区域，请将卡片内容包装在`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-media-cover`
                  ),
                  `组件内。它的基本结构包括以下组件：`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "ul",
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "li",
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "code",
                      `md-card-media`
                    ),
                    `，用于展示图片。图片的缩放比例可以通过`,
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "code",
                      `md-card-media`
                    ),
                    `组件的`,
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "code",
                      `md-ratio`
                    ),
                    `属性控制。`
                  ),
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "li",
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "code",
                      `md-card-area`
                    ),
                    `，用于有卡片头（`,
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "code",
                      `md-header`
                    ),
                    `）和动作（`,
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "code",
                      `md-card-actions`
                    ),
                    `）的情况。`
                  )
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `如果背景图片和标题之间的对比度不足，则后者将无法清晰辨认。为了解决这个问题，请使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-media-cover`
                  ),
                  `的属性`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `solid`
                  ),
                  `或`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `textScrim`
                  ),
                  `。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Card background with Aspect Ratio`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.mediaCover;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","mediaCover"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "h2",
                  `不同底色的卡片`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `为卡片添加`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `.md-primary`
                  ),
                  `或`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `.md-accent`
                  ),
                  `类可以指定卡片底色。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Theme Colors`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.theme;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","theme"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "h2",
                  `可展开的卡片`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `为避免卡内信息过多或使卡片的高度不超过最大高度，可以将补充信息隐藏在可扩展区域内。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-expand`
                  ),
                  `组件可以实现可展开卡片，同时需要搭配`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-expand-content`
                  ),
                  `用于展示内容，
                        以及`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-action`
                  ),
                  `用于提供一个触发展开动作的`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-card-expand-trigger`
                  ),
                  `组件。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Expansion Control`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.expand;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","expand"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "h2",
                  `不同布局的卡片`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `可以通过许多不同的方式组合这些和其他组件。比如下面的例子：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Different Layouts`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.layouts;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","layouts"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              attrs.headings = vm_0.api?.card?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","card","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.card?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","card","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-card`
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
                              attrs.headings = vm_0.api?.cardActions?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","cardActions","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.cardActions?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","cardActions","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-card-actions`
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
                              attrs.headings = vm_0.api?.cardArea?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","cardArea","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.cardArea?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","cardArea","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-card-area`
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
                              attrs.headings = vm_0.api?.cardMedia?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","cardMedia","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.cardMedia?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","cardMedia","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-card-media`
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
                              attrs.headings = vm_0.api?.cardMediaCover?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","cardMediaCover","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.cardMediaCover?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","cardMediaCover","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-card-media-cover`
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
      title: `卡片`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material-icons/lib/AccessTime.js":
/*!*************************************************!*\
  !*** ../jinge-material-icons/lib/AccessTime.js ***!
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
          d: `M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createSVGElement)(
        "path",
        {
          d: `M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z`
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

/***/ "../jinge-material-icons/lib/Bookmark.js":
/*!***********************************************!*\
  !*** ../jinge-material-icons/lib/Bookmark.js ***!
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
          d: `M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z`
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

/***/ "../jinge-material-icons/lib/Message.js":
/*!**********************************************!*\
  !*** ../jinge-material-icons/lib/Message.js ***!
  \**********************************************/
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
          d: `M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z`
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

/***/ "../jinge-material-icons/lib/MoreVert.js":
/*!***********************************************!*\
  !*** ../jinge-material-icons/lib/MoreVert.js ***!
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
          d: `M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z`
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

/***/ "../jinge-material-icons/lib/MyLocation.js":
/*!*************************************************!*\
  !*** ../jinge-material-icons/lib/MyLocation.js ***!
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
          d: `M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z`
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

/***/ "../jinge-material-icons/lib/Share.js":
/*!********************************************!*\
  !*** ../jinge-material-icons/lib/Share.js ***!
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
          d: `M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z`
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

/***/ "../jinge-material/lib/card/style/index.css":
/*!**************************************************!*\
  !*** ../jinge-material/lib/card/style/index.css ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205907
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/pages/components/card/examples/expand.scss":
/*!********************************************************!*\
  !*** ./src/pages/components/card/examples/expand.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--RliNs"});
    if(true) {
      // 1659344205419
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/card/examples/layouts.scss":
/*!*********************************************************!*\
  !*** ./src/pages/components/card/examples/layouts.scss ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--gygrw"});
    if(true) {
      // 1659344205494
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/card/examples/media-cover.scss":
/*!*************************************************************!*\
  !*** ./src/pages/components/card/examples/media-cover.scss ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--WnDLh"});
    if(true) {
      // 1659344205410
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/card/examples/media.scss":
/*!*******************************************************!*\
  !*** ./src/pages/components/card/examples/media.scss ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--pSlDr"});
    if(true) {
      // 1659344205417
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/card/examples/regular.scss":
/*!*********************************************************!*\
  !*** ./src/pages/components/card/examples/regular.scss ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--EU9un"});
    if(true) {
      // 1659344205413
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/card/examples/theme.scss":
/*!*******************************************************!*\
  !*** ./src/pages/components/card/examples/theme.scss ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--dJV6D"});
    if(true) {
      // 1659344206186
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/card/examples/expand.ts?example":
/*!**************************************************************!*\
  !*** ./src/pages/components/card/examples/expand.ts?example ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './expand.html';\n\nexport default class ExampleExpandCard extends Component {\n  static template = _tpl;\n}\n","sass":".demo {\n  height: 480px;\n\n  :global {\n    .md-card {\n      width: 320px;\n      margin: 4px;\n      display: inline-block;\n      vertical-align: top;\n    }\n  }\n}\n","html":"<!-- import style from './expand.scss' -->\n<div :class=\"style.demo\">\n  <md-card>\n    <md-card-media>\n      <img src=\"assets/examples/card-image-1.jpg\" alt=\"People\"/>\n    </md-card-media>\n\n    <md-card-header>\n      <div class=\"md-title\">Title goes here</div>\n      <div class=\"md-subhead\">Subtitle here</div>\n    </md-card-header>\n\n    <md-card-expand>\n      <md-card-actions md-alignment=\"space-between\">\n        <div>\n          <md-button>Action</md-button>\n          <md-button>Action</md-button>\n        </div>\n\n        <md-card-expand-trigger>\n          <md-button class=\"md-icon-button\">\n            <md-icon-keyboard_arrow_down/>\n          </md-button>\n        </md-card-expand-trigger>\n      </md-card-actions>\n\n      <md-card-expand-content>\n        <md-card-content>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.\n        </md-card-content>\n      </md-card-expand-content>\n    </md-card-expand>\n  </md-card>\n\n  <md-card>\n    <md-card-media>\n      <img src=\"assets/examples/card-image-1.jpg\" alt=\"People\"/>\n    </md-card-media>\n\n    <md-card-header>\n      <div class=\"md-title\">Title goes here</div>\n      <div class=\"md-subhead\">Subtitle here</div>\n    </md-card-header>\n\n    <md-card-expand>\n      <md-card-actions md-alignment=\"space-between\">\n        <div>\n          <md-button>Action</md-button>\n        </div>\n\n        <md-card-expand-trigger>\n          <md-button>Learn more</md-button>\n        </md-card-expand-trigger>\n      </md-card-actions>\n\n      <md-card-expand-content>\n        <md-card-content>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.\n        </md-card-content>\n      </md-card-expand-content>\n    </md-card-expand>\n  </md-card>\n</div>"});

/***/ }),

/***/ "./src/pages/components/card/examples/layouts.ts?example":
/*!***************************************************************!*\
  !*** ./src/pages/components/card/examples/layouts.ts?example ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport { DialogAlert } from 'jinge-material/lib/dialog/dialog-alert';\nimport _tpl from './layouts.html';\n\nexport default class ExampleLayoutsCard extends Component {\n  static template = _tpl;\n\n  sendMessage() {\n    DialogAlert.show('Send a message...');\n  }\n\n  doACall() {\n    DialogAlert.show('Calling someone...');\n  }\n}\n","sass":".demo {\n  :global {\n    .md-card {\n      width: 320px;\n      margin: 4px;\n      display: inline-block;\n      vertical-align: top;\n    }\n\n    .md-card-example {\n      .md-subhead {\n        .md-icon {\n          $size: 16px;\n\n          width: $size;\n          min-width: $size;\n          height: $size;\n          font-size: $size !important;\n        }\n\n        span {\n          vertical-align: middle;\n        }\n      }\n\n      .card-reservation {\n        margin-top: 8px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        .md-icon {\n          margin: 8px;\n        }\n      }\n\n      .md-button-group {\n        display: flex;\n\n        .md-button {\n          min-width: 60px;\n          border-radius: 2px;\n        }\n      }\n    }\n  }\n}\n","html":"<!-- import style from './layouts.scss' -->\n<div :class=\"style.demo\">\n  <md-card>\n    <md-card-media>\n      <img src=\"assets/examples/card-image-1.jpg\" alt=\"People\"/>\n    </md-card-media>\n\n    <md-card-header>\n      <div class=\"md-title\">Title goes here</div>\n      <div class=\"md-subhead\">Subtitle here</div>\n    </md-card-header>\n\n    <md-card-actions>\n      <md-button>Action</md-button>\n      <md-button>Action</md-button>\n    </md-card-actions>\n\n    <md-card-content>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.\n    </md-card-content>\n  </md-card>\n\n  <md-card>\n    <md-card-header>\n      <md-avatar>\n        <img src=\"assets/examples/avatar.png\" alt=\"Avatar\"/>\n      </md-avatar>\n\n      <div class=\"md-title\">Title goes here</div>\n      <div class=\"md-subhead\">Subtitle here</div>\n    </md-card-header>\n\n    <md-card-media>\n      <img src=\"assets/examples/card-image-1.jpg\" alt=\"People\"/>\n    </md-card-media>\n\n    <md-card-content>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.\n    </md-card-content>\n\n    <md-card-actions>\n      <md-button>Action</md-button>\n      <md-button>Action</md-button>\n    </md-card-actions>\n  </md-card>\n\n  <md-card class=\"md-card-example\">\n    <md-card-area inset>\n      <md-card-media ratio=\"16:9\">\n        <img src=\"assets/examples/card-example.jpg\" alt=\"Coffee House\"/>\n      </md-card-media>\n\n      <md-card-header>\n        <h2 class=\"md-title\">Coffee House</h2>\n        <div class=\"md-subhead\">\n          <md-icon-my_location/>\n          <span>2 miles</span>\n        </div>\n      </md-card-header>\n\n      <md-card-content>\n        Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.\n      </md-card-content>\n    </md-card-area>\n\n    <md-card-content>\n      <h3 class=\"md-subheading\">Today's availability</h3>\n      <div class=\"card-reservation\">\n        <md-icon-access_time/>\n        <div class=\"md-button-group\">\n          <md-button>5:30PM</md-button>\n          <md-button>7:30PM</md-button>\n          <md-button>9:00PM</md-button>\n        </div>\n      </div>\n    </md-card-content>\n\n    <md-card-actions>\n      <md-button class=\"md-primary\">Reserve</md-button>\n    </md-card-actions>\n  </md-card>\n\n  <md-card>\n    <md-card-area>\n      <md-card-media>\n        <img src=\"assets/examples/card-image-1.jpg\" alt=\"People\"/>\n      </md-card-media>\n\n      <md-card-header>\n        <div class=\"md-title\">Actions left aligned</div>\n        <div class=\"md-subhead\">Subtitle here</div>\n      </md-card-header>\n\n      <md-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.\n      </md-card-content>\n    </md-card-area>\n\n    <md-card-actions alignment=\"left\">\n      <md-button>Action</md-button>\n      <md-button>Action</md-button>\n    </md-card-actions>\n  </md-card>\n\n  <md-card>\n    <md-card-media>\n      <md-ripple>\n        <img src=\"assets/examples/card-image-1.jpg\" alt=\"People\"/>\n      </md-ripple>\n    </md-card-media>\n\n    <md-card-actions>\n      <md-button class=\"md-icon-button\">\n        <md-icon>favorite</md-icon>\n      </md-button>\n\n      <md-button class=\"md-icon-button\">\n        <md-icon>bookmark</md-icon>\n      </md-button>\n\n      <md-button class=\"md-icon-button\">\n        <md-icon>share</md-icon>\n      </md-button>\n    </md-card-actions>\n  </md-card>\n\n  <md-card>\n    <md-card-media>\n      <img src=\"assets/examples/card-image-2.jpg\" alt=\"People\"/>\n    </md-card-media>\n\n    <md-card-content>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.\n    </md-card-content>\n  </md-card>\n\n  <md-card>\n    <md-card-header>\n      <md-card-header-text>\n        <div class=\"md-title\">Actions left aligned</div>\n        <div class=\"md-subhead\">Subtitle here</div>\n      </md-card-header-text>\n\n      <md-menu size=\"big\" placement=\"bottom-end\">\n        <md-button class=\"md-icon-button\" slot-pass:default>\n          <md-icon-more_vert/>\n        </md-button>\n\n        <_slot slot-pass:content>\n          <md-menu-item on:click=\"doACall\">\n            <span>Call</span>\n            <md-icon-phone/>\n          </md-menu-item>\n\n          <md-menu-item on:click=\"sendMessage\">\n            <span>Send a message</span>\n            <md-icon-message/>\n          </md-menu-item>\n        </_slot>\n      </md-menu>\n    </md-card-header>\n\n    <md-card-content>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.\n    </md-card-content>\n\n    <md-card-actions alignment=\"left\">\n      <md-button>Action</md-button>\n      <md-button>Action</md-button>\n    </md-card-actions>\n  </md-card>\n</div>"});

/***/ }),

/***/ "./src/pages/components/card/examples/media-cover.ts?example":
/*!*******************************************************************!*\
  !*** ./src/pages/components/card/examples/media-cover.ts?example ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './media-cover.html';\n\nexport default class ExampleMediaCoverCard extends Component {\n  static template = _tpl;\n}\n","sass":".demo {\n  :global {\n    .md-card {\n      width: 320px;\n      margin: 4px;\n      display: inline-block;\n      vertical-align: top;\n    }\n  }\n}\n","html":"<!-- import style from './media-cover.scss' -->\n<div :class=\"style.demo\">\n  <md-card>\n    <md-card-media-cover>\n      <md-card-media ratio=\"16:9\">\n        <img src=\"assets/examples/card-sky.jpg\" alt=\"Skyscraper\"/>\n      </md-card-media>\n\n      <md-card-area>\n        <md-card-header>\n          <span class=\"md-title\">Without text background</span>\n          <span class=\"md-subhead\">I bet you can't read this</span>\n        </md-card-header>\n\n        <md-card-actions>\n          <md-button>Neither this</md-button>\n          <md-button>Or this</md-button>\n        </md-card-actions>\n      </md-card-area>\n    </md-card-media-cover>\n  </md-card>\n\n  <md-card>\n    <md-card-media-cover textScrim>\n      <md-card-media ratio=\"16:9\">\n        <img src=\"assets/examples/card-sky.jpg\" alt=\"Skyscraper\"/>\n      </md-card-media>\n\n      <md-card-area>\n        <md-card-header>\n          <span class=\"md-title\">Gradient background</span>\n          <span class=\"md-subhead\">16/9 image</span>\n        </md-card-header>\n\n        <md-card-actions>\n          <md-button>Action</md-button>\n          <md-button>Action</md-button>\n        </md-card-actions>\n      </md-card-area>\n    </md-card-media-cover>\n  </md-card>\n\n  <md-card>\n    <md-card-media-cover solid>\n      <md-card-media ratio=\"4:3\">\n        <img src=\"assets/examples/card-sky.jpg\" alt=\"Skyscraper\"/>\n      </md-card-media>\n\n      <md-card-area>\n        <md-card-header>\n          <span class=\"md-title\">Solid background</span>\n          <span class=\"md-subhead\">4/3 image</span>\n        </md-card-header>\n      </md-card-area>\n    </md-card-media-cover>\n  </md-card>\n\n  <md-card>\n    <md-card-media-cover solid>\n      <md-card-media ratio=\"1:1\">\n        <img src=\"assets/examples/card-sky.jpg\" alt=\"Skyscraper\"/>\n      </md-card-media>\n\n      <md-card-area>\n        <md-card-header>\n          <span class=\"md-title\">Solid background</span>\n          <span class=\"md-subhead\">1/1 image</span>\n        </md-card-header>\n\n        <md-card-actions>\n          <md-button class=\"md-icon-button\">\n            <md-icon-favorite/>\n          </md-button>\n\n          <md-button class=\"md-icon-button\">\n            <md-icon-share/>\n          </md-button>\n        </md-card-actions>\n      </md-card-area>\n    </md-card-media-cover>\n  </md-card>\n</div>"});

/***/ }),

/***/ "./src/pages/components/card/examples/media.ts?example":
/*!*************************************************************!*\
  !*** ./src/pages/components/card/examples/media.ts?example ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './media.html';\n\nexport default class ExampleMediaCard extends Component {\n  static template = _tpl;\n}\n","sass":".demo {\n  :global {\n    .md-card {\n      width: 320px;\n      margin: 4px;\n      display: inline-block;\n      vertical-align: top;\n    }\n  }\n}\n","html":"<!-- import style from './media.scss' -->\n<div :class=\"style.demo\">\n  <md-card>\n    <md-card-header>\n      <md-card-header-text>\n        <div class=\"md-title\">Media card</div>\n        <div class=\"md-subhead\">Normal size</div>\n      </md-card-header-text>\n\n      <md-card-media>\n        <img src=\"assets/examples/avatar-2.jpg\" alt=\"People\"/>\n      </md-card-media>\n    </md-card-header>\n\n    <md-card-actions>\n      <md-button>Action</md-button>\n      <md-button>Action</md-button>\n    </md-card-actions>\n  </md-card>\n\n  <md-card>\n      <md-card-header>\n        <md-card-header-text>\n          <div class=\"md-title\">Media card</div>\n          <div class=\"md-subhead\">Medium size</div>\n        </md-card-header-text>\n  \n        <md-card-media medium>\n          <img src=\"assets/examples/card-weather.png\" alt=\"People\"/>\n        </md-card-media>\n      </md-card-header>\n  \n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-card>\n  \n    <md-card>\n      <md-card-header>\n        <md-card-header-text>\n          <div class=\"md-title\">Media card</div>\n          <div class=\"md-subhead\">Big size</div>\n        </md-card-header-text>\n  \n        <md-card-media big>\n          <img src=\"assets/examples/cover.png\" alt=\"People\"/>\n        </md-card-media>\n      </md-card-header>\n  \n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-card>\n  \n    <md-card>\n      <md-card-media-actions>\n        <md-card-media>\n          <img src=\"assets/examples/villains.png\" alt=\"Cover\"/>\n        </md-card-media>\n  \n        <md-card-actions>\n          <md-button class=\"md-icon-button\">\n            <md-icon-favorite/>\n          </md-button>\n  \n          <md-button class=\"md-icon-button\">\n            <md-icon-bookmark/>\n          </md-button>\n  \n          <md-button class=\"md-icon-button\">\n            <md-icon-share/>\n          </md-button>\n        </md-card-actions>\n      </md-card-media-actions>\n    </md-card>\n</div>"});

/***/ }),

/***/ "./src/pages/components/card/examples/regular.ts?example":
/*!***************************************************************!*\
  !*** ./src/pages/components/card/examples/regular.ts?example ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './regular.html';\n\nexport default class ExampleRegularCard extends Component {\n  static template = _tpl;\n}\n","sass":".demo {\n  :global {\n    .md-card {\n      width: 320px;\n      margin: 4px;\n      display: inline-block;\n      vertical-align: top;\n    }\n  }\n}\n","html":"<!-- import style from './regular.scss' -->\n<div :class=\"style.demo\">\n  <md-card>\n    <md-card-header>\n      <div class=\"md-title\">Card without hover effect</div>\n    </md-card-header>\n\n    <md-card-content>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea,\n      nostrum odio. Dolores, sed accusantium quasi non.\n    </md-card-content>\n\n    <md-card-actions>\n      <md-button>Action</md-button>\n      <md-button>Action</md-button>\n    </md-card-actions>\n  </md-card>\n\n  <md-card withHover>\n    <md-ripple>\n      <md-card-header>\n        <div class=\"md-title\">Card with hover effect</div>\n        <div class=\"md-subhead\">It also have a ripple</div>\n      </md-card-header>\n\n      <md-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque\n        ea, nostrum odio. Dolores, sed accusantium quasi non.\n      </md-card-content>\n\n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-ripple>\n  </md-card>\n</div>\n"});

/***/ }),

/***/ "./src/pages/components/card/examples/theme.ts?example":
/*!*************************************************************!*\
  !*** ./src/pages/components/card/examples/theme.ts?example ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './theme.html';\n\nexport default class ExampleThemeCard extends Component {\n  static template = _tpl;\n}\n","sass":"@import '~jinge-material/style/palette.scss';\n\n.demo {\n  :global {\n    .md-purple-card {\n      background: md-get-palette-color(purple, 500);\n    }\n\n    .md-orange-card {\n      background: md-get-palette-color(orange, 500);\n    }\n\n    .md-card {\n      width: 320px;\n      margin: 4px;\n      display: inline-block;\n      vertical-align: top;\n    }\n  }\n}\n","html":"<!-- import style from './theme.scss' -->\n<div :class=\"style.demo\">\n  <md-card class=\"md-primary\">\n    <md-card-header>\n      <md-card-header-text>\n        <div class=\"md-title\">Primary color</div>\n        <div class=\"md-subhead\">Subtitle here</div>\n      </md-card-header-text>\n\n      <md-card-media>\n        <img src=\"assets/examples/avatar-2.jpg\" alt=\"Avatar\"/>\n      </md-card-media>\n    </md-card-header>\n\n    <md-card-actions>\n      <md-button>Action</md-button>\n      <md-button>Action</md-button>\n    </md-card-actions>\n  </md-card>\n\n  <md-card class=\"md-accent\" withHover>\n    <md-ripple>\n      <md-card-header>\n        <div class=\"md-title\">Accent color</div>\n        <div class=\"md-subhead\">With hover and ripple effects</div>\n      </md-card-header>\n\n      <md-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.\n      </md-card-content>\n\n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-ripple>\n  </md-card>\n\n  <md-card class=\"md-primary md-purple-card\" withHover>\n    <md-ripple>\n      <md-card-header>\n        <div class=\"md-title\">Purple primary color</div>\n        <div class=\"md-subhead\">With hover and ripple effects</div>\n      </md-card-header>\n\n      <md-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.\n      </md-card-content>\n    </md-ripple>\n  </md-card>\n\n  <md-card class=\"md-primary md-orange-card\" withHover>\n    <md-ripple>\n      <md-card-header>\n        <div class=\"md-title\">Orange primary color</div>\n        <div class=\"md-subhead\">With hover and ripple effects</div>\n      </md-card-header>\n\n      <md-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.\n      </md-card-content>\n    </md-ripple>\n  </md-card>\n</div>"});

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

/***/ "../jinge-material/lib/card/card-actions.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/card/card-actions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardActions": () => (/* binding */ CardActions)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _card_actions_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-actions.tpl.js */ "../jinge-material/lib/card/card-actions.tpl.js");


class CardActions extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.alignment = attrs.alignment || "right"; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("alignment", f1_jg0402);
  }
}
CardActions.template = _card_actions_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=card-actions.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-actions.tpl.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/card/card-actions.tpl.js ***!
  \******************************************************/
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, `md-card-actions md-alignment-${vm_0.alignment}`);
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["alignment"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/card/card-area.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/card/card-area.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardArea": () => (/* binding */ CardArea)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _card_area_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-area.tpl.js */ "../jinge-material/lib/card/card-area.tpl.js");


class CardArea extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.inset = !!attrs.inset; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("inset", f1_jg0402);
  }
}
CardArea.template = _card_area_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=card-area.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-area.tpl.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/card/card-area.tpl.js ***!
  \***************************************************/
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, `md-card-area${vm_0.inset ? ' md-inset' : ''}`);
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["inset"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/card/card-content.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/card/card-content.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardContent": () => (/* binding */ CardContent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _card_content_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-content.tpl.js */ "../jinge-material/lib/card/card-content.tpl.js");


class CardContent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
CardContent.template = _card_content_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=card-content.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-content.tpl.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/card/card-content.tpl.js ***!
  \******************************************************/
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: `md-card-content`
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

/***/ }),

/***/ "../jinge-material/lib/card/card-expand-content.js":
/*!*********************************************************!*\
  !*** ../jinge-material/lib/card/card-expand-content.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardExpandContent": () => (/* binding */ CardExpandContent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "../jinge-material/lib/card/card.js");
/* harmony import */ var _card_expand_content_tpl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-expand-content.tpl.js */ "../jinge-material/lib/card/card-expand-content.tpl.js");




class CardExpandContent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.marginTop = 0;
    _jg0.transitionEnabled = true;
    _jg0.card = _jg0.__getContext(_card__WEBPACK_IMPORTED_MODULE_2__.CARD_PROVIDER);
    _jg0._rod = null;
    _jg0._eh = _jg0._onExpand.bind(_jg0);
  }
  _onExpand() {
    this.calculateMarginTop(this.__firstDOM);
  }
  calculateMarginTop($el) {
    if (!this.card.expand) {
      this.marginTop = $el.children[0].offsetHeight;
    } else {
      this.marginTop = 0;
    }
  }
  calculateMarginTopImmediately($el) {
    if (this.card.expand) {
      return;
    }
    this.transitionEnabled = false;
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
      this.calculateMarginTop($el);
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
        $el.offsetHeight;
        this.transitionEnabled = true;
      });
    });
  }
  __afterRender() {
    const $el = this.__firstDOM;
    this.calculateMarginTopImmediately($el);
    this._rod = (0,_util__WEBPACK_IMPORTED_MODULE_1__.MutationObserveDOM)($el, {
      childList: true,
      characterData: true,
      subtree: true
    }, () => {
      this.calculateMarginTopImmediately($el);
    });
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.watch)(this.card, "expand", this._eh);
  }
  __beforeDestroy() {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.unwatch)(this.card, "expand", this._eh);
    this._rod?.();
  }
}
CardExpandContent.template = _card_expand_content_tpl_js__WEBPACK_IMPORTED_MODULE_3__["default"];


//# sourceMappingURL=card-expand-content.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-expand-content.tpl.js":
/*!*************************************************************!*\
  !*** ../jinge-material/lib/card/card-expand-content.tpl.js ***!
  \*************************************************************/
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: `md-card-expand-content`
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
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, ({ 'margin-top': 0 - vm_0.marginTop, opacity: vm_0.marginTop === 0 ? 1 : 0, 'transition-property': vm_0.transitionEnabled ? 'inherit' : 'none' }));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["marginTop"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["transitionEnabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/card/card-expand-trigger.js":
/*!*********************************************************!*\
  !*** ../jinge-material/lib/card/card-expand-trigger.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardExpandTrigger": () => (/* binding */ CardExpandTrigger)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "../jinge-material/lib/card/card.js");
/* harmony import */ var _card_expand_trigger_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-expand-trigger.tpl.js */ "../jinge-material/lib/card/card-expand-trigger.tpl.js");



class CardExpandTrigger extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.marginTop = 0;
    _jg0.transitionEnabled = true;
    _jg0.card = _jg0.__getContext(_card__WEBPACK_IMPORTED_MODULE_1__.CARD_PROVIDER);
  }
  __afterRender() {
    const $el = this.__firstDOM;
    $el.classList.add("md-card-expand-trigger");
    this.__domAddListener($el, "click", this._onClick);
  }
  _onClick() {
    this.card.expand = !this.card.expand;
  }
}
CardExpandTrigger.template = _card_expand_trigger_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=card-expand-trigger.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-expand-trigger.tpl.js":
/*!*************************************************************!*\
  !*** ../jinge-material/lib/card/card-expand-trigger.tpl.js ***!
  \*************************************************************/
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
    const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
    const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {
      return [
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "div",
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
        return el;
      })()
      ];
    };
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

/***/ }),

/***/ "../jinge-material/lib/card/card-expand.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/card/card-expand.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardExpand": () => (/* binding */ CardExpand)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _card_expand_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-expand.tpl.js */ "../jinge-material/lib/card/card-expand.tpl.js");


class CardExpand extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
CardExpand.template = _card_expand_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=card-expand.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-expand.tpl.js":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/card/card-expand.tpl.js ***!
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: `md-card-expand`
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

/***/ }),

/***/ "../jinge-material/lib/card/card-header-text.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/card/card-header-text.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardHeaderText": () => (/* binding */ CardHeaderText)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _card_header_text_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-header-text.tpl.js */ "../jinge-material/lib/card/card-header-text.tpl.js");


class CardHeaderText extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  __afterRender() {
    const $pa = this.__firstDOM.parentElement;
    if ($pa?.classList.contains("md-card-header")) {
      $pa.classList.add("md-card-header-flex");
    }
  }
  __beforeDestroy() {
    const $pa = this.__firstDOM.parentElement;
    if ($pa)
      $pa.classList.remove("md-card-header-flex");
  }
}
CardHeaderText.template = _card_header_text_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=card-header-text.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-header-text.tpl.js":
/*!**********************************************************!*\
  !*** ../jinge-material/lib/card/card-header-text.tpl.js ***!
  \**********************************************************/
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: `md-card-header-text`
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

/***/ }),

/***/ "../jinge-material/lib/card/card-header.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/card/card-header.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardHeader": () => (/* binding */ CardHeader)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _card_header_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-header.tpl.js */ "../jinge-material/lib/card/card-header.tpl.js");


class CardHeader extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
CardHeader.template = _card_header_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=card-header.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-header.tpl.js":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/card/card-header.tpl.js ***!
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: `md-card-header`
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

/***/ }),

/***/ "../jinge-material/lib/card/card-media-actions.js":
/*!********************************************************!*\
  !*** ../jinge-material/lib/card/card-media-actions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardMediaActions": () => (/* binding */ CardMediaActions)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _card_media_actions_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-media-actions.tpl.js */ "../jinge-material/lib/card/card-media-actions.tpl.js");


class CardMediaActions extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
CardMediaActions.template = _card_media_actions_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=card-media-actions.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-media-actions.tpl.js":
/*!************************************************************!*\
  !*** ../jinge-material/lib/card/card-media-actions.tpl.js ***!
  \************************************************************/
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: `md-card-media-actions`
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

/***/ }),

/***/ "../jinge-material/lib/card/card-media-cover.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/card/card-media-cover.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardMediaCover": () => (/* binding */ CardMediaCover)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _card_media_cover_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-media-cover.tpl.js */ "../jinge-material/lib/card/card-media-cover.tpl.js");


function getImageLightness(image, onLoad, onError) {
  const canvas = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)("canvas");
  image.crossOrigin = "Anonymous";
  image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const imageMetadata = imageData.data;
    let colorSum = 0;
    for (let x = 0, len = imageMetadata.length; x < len; x += 4) {
      const r = imageMetadata[x];
      const g = imageMetadata[x + 1];
      const b = imageMetadata[x + 2];
      const average = Math.floor((r + g + b) / 3);
      colorSum += average;
    }
    onLoad(Math.floor(colorSum / (image.width * image.height)));
  };
  image.onerror = onError;
}
class CardMediaCover extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.textScrim = attrs.textScrim; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("textScrim", f1_jg0402);const f2_jg0402 = () => {
    _jg0.solid = attrs.solid; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("solid", f2_jg0402);
    _jg0.backdropBg = "inherit";
  }
  applyScrimColor(darkness) {
    this.backdropBg = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ${darkness / 2}) 66%, rgba(0, 0, 0, ${darkness}) 100%)`;
  }
  applySolidColor($el, darkness) {
    const area = $el.querySelector(".md-card-area");
    if (!area)
      return;
    area.style.background = `rgba(0, 0, 0, ${darkness})`;
  }
  __afterRender() {
    const $el = this.__firstDOM;
    const applyBackground = (darkness = 0.6) => {
      if (this.textScrim) {
        this.applyScrimColor(darkness);
      } else if (this.solid) {
        this.applySolidColor($el, darkness);
      }
    };
    const image = $el.querySelector("img");
    if (image && (this.textScrim || this.solid)) {
      getImageLightness(image, (lightness) => {
        const limit = 256;
        let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;
        if (darkness >= 0.7) {
          darkness = 0.7;
        }
        applyBackground(darkness);
      }, applyBackground);
    }
  }
}
CardMediaCover.tempalte = _card_media_cover_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=card-media-cover.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-media-cover.tpl.js":
/*!**********************************************************!*\
  !*** ../jinge-material/lib/card/card-media-cover.tpl.js ***!
  \**********************************************************/
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
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "div",
                    {
                      class: `md-card-backdrop`
                    },
                  );
                  const fn_0 = () => {
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, `background: ${vm_0.backdropBg}`);
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["backdropBg"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  vm_0.__setRef('backdrop', el, component)
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              }
            }
          },
          expect: undefined
        });
        const fn_0 = () => {
          attrs.expect = vm_0.textScrim;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["textScrim"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-card-media-cover', { 'md-text-scrim': vm_0.textScrim, 'md-solid': vm_0.solid }]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["textScrim"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["solid"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/card/card-media.js":
/*!************************************************!*\
  !*** ../jinge-material/lib/card/card-media.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardMedia": () => (/* binding */ CardMedia)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _card_media_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-media.tpl.js */ "../jinge-material/lib/card/card-media.tpl.js");



const ratioValidator = new _util__WEBPACK_IMPORTED_MODULE_1__.EnumAttrValidator("<md-card-media>", "ratio", [
  "16-9",
  "16/9",
  "16:9",
  "4-3",
  "4/3",
  "4:3",
  "1-1",
  "1/1",
  "1:1"
]);
class CardMedia extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    ratioValidator.assert(attrs);
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.ratioClass = "";const f3_jg0402 = () => {
    _jg0.big = !!attrs.big; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("big", f3_jg0402);const f4_jg0402 = () => {
    _jg0.medium = !!attrs.medium; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("medium", f4_jg0402);const f5_jg0402 = () => {
    _jg0.ratio = attrs.ratio; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("ratio", f5_jg0402);
  }
  get ratio() {
    return this._ratio;
  }
  set ratio(v) {
    if (this._ratio === v)
      return;
    this._ratio = v;
    if (!this._ratio) {
      this.ratioClass = "";
    } else {
      const rts = this._ratio.split(/[:/-]/);
      if (rts.length !== 2) {
        this.ratioClass = "";
      } else {
        this.ratioClass = `md-ratio-${rts[0]}-${rts[1]}`;
      }
    }
  }
}
CardMedia.template = _card_media_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=card-media.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card-media.tpl.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/card/card-media.tpl.js ***!
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-card-media', { 'md-medium': !vm_0.ratio && vm_0.medium, 'md-big': !vm_0.ratio && vm_0.big }, vm_0.ratioClass]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ratio"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["medium"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["big"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ratioClass"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/card/card.js":
/*!******************************************!*\
  !*** ../jinge-material/lib/card/card.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CARD_PROVIDER": () => (/* binding */ CARD_PROVIDER),
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _card_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.tpl.js */ "../jinge-material/lib/card/card.tpl.js");


const CARD_PROVIDER = Symbol("card_provider");
class Card extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.withHover = attrs.withHover; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("withHover", f1_jg0402);
    _jg0.card = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
      expand: false
    });
    _jg0.__setContext(CARD_PROVIDER, _jg0.card);
  }
}
Card.template = _card_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=card.js.map

/***/ }),

/***/ "../jinge-material/lib/card/card.tpl.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/card/card.tpl.js ***!
  \**********************************************/
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-card', { 'md-with-hover': vm_0.withHover, 'md-expand-active': vm_0.card?.expand }, vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["withHover"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["card","expand"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/card/index.js":
/*!*******************************************!*\
  !*** ../jinge-material/lib/card/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CARD_PROVIDER": () => (/* reexport safe */ _card__WEBPACK_IMPORTED_MODULE_1__.CARD_PROVIDER),
/* harmony export */   "Card": () => (/* reexport safe */ _card__WEBPACK_IMPORTED_MODULE_1__.Card),
/* harmony export */   "CardActions": () => (/* reexport safe */ _card_actions__WEBPACK_IMPORTED_MODULE_2__.CardActions),
/* harmony export */   "CardArea": () => (/* reexport safe */ _card_area__WEBPACK_IMPORTED_MODULE_3__.CardArea),
/* harmony export */   "CardContent": () => (/* reexport safe */ _card_content__WEBPACK_IMPORTED_MODULE_4__.CardContent),
/* harmony export */   "CardExpand": () => (/* reexport safe */ _card_expand__WEBPACK_IMPORTED_MODULE_5__.CardExpand),
/* harmony export */   "CardExpandContent": () => (/* reexport safe */ _card_expand_content__WEBPACK_IMPORTED_MODULE_6__.CardExpandContent),
/* harmony export */   "CardExpandTrigger": () => (/* reexport safe */ _card_expand_trigger__WEBPACK_IMPORTED_MODULE_7__.CardExpandTrigger),
/* harmony export */   "CardHeader": () => (/* reexport safe */ _card_header__WEBPACK_IMPORTED_MODULE_11__.CardHeader),
/* harmony export */   "CardHeaderText": () => (/* reexport safe */ _card_header_text__WEBPACK_IMPORTED_MODULE_12__.CardHeaderText),
/* harmony export */   "CardMedia": () => (/* reexport safe */ _card_media__WEBPACK_IMPORTED_MODULE_8__.CardMedia),
/* harmony export */   "CardMediaActions": () => (/* reexport safe */ _card_media_actions__WEBPACK_IMPORTED_MODULE_9__.CardMediaActions),
/* harmony export */   "CardMediaCover": () => (/* reexport safe */ _card_media_cover__WEBPACK_IMPORTED_MODULE_10__.CardMediaCover)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/card/style/index.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "../jinge-material/lib/card/card.js");
/* harmony import */ var _card_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-actions */ "../jinge-material/lib/card/card-actions.js");
/* harmony import */ var _card_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-area */ "../jinge-material/lib/card/card-area.js");
/* harmony import */ var _card_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-content */ "../jinge-material/lib/card/card-content.js");
/* harmony import */ var _card_expand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-expand */ "../jinge-material/lib/card/card-expand.js");
/* harmony import */ var _card_expand_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-expand-content */ "../jinge-material/lib/card/card-expand-content.js");
/* harmony import */ var _card_expand_trigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-expand-trigger */ "../jinge-material/lib/card/card-expand-trigger.js");
/* harmony import */ var _card_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-media */ "../jinge-material/lib/card/card-media.js");
/* harmony import */ var _card_media_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-media-actions */ "../jinge-material/lib/card/card-media-actions.js");
/* harmony import */ var _card_media_cover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-media-cover */ "../jinge-material/lib/card/card-media-cover.js");
/* harmony import */ var _card_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card-header */ "../jinge-material/lib/card/card-header.js");
/* harmony import */ var _card_header_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card-header-text */ "../jinge-material/lib/card/card-header-text.js");













//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/card/style/index.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/card/style/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/card/style/index.css");




/***/ })

}]);
//# sourceMappingURL=src_pages_components_card_index_ts.js.map