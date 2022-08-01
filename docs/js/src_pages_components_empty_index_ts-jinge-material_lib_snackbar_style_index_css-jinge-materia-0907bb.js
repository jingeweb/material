"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_components_empty_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-materia-0907bb"],{

/***/ "./src/pages/components/empty/api.ts":
/*!*******************************************!*\
  !*** ./src/pages/components/empty/api.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
  props: {
    headings: ["名称", "描述", "默认值"],
    props: [
      {
        name: "label",
        type: "String",
        description: "空状态的标签，用作标题。",
        defaults: "null"
      },
      {
        name: "description",
        type: "String",
        description: "空状态的描述。",
        defaults: "null"
      },
      {
        name: "rounded",
        type: "Boolean",
        description: "使空状态变圆，并具有漂亮的背景颜色。",
        defaults: "false"
      },
      {
        name: "size",
        type: "Number|String",
        description: "圆角的宽度/高度大小。仅适用于 <code>rounded</code>。",
        defaults: "420"
      }
    ]
  }
}));


/***/ }),

/***/ "./src/pages/components/empty/examples/basic.ts":
/*!******************************************************!*\
  !*** ./src/pages/components/empty/examples/basic.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleEmptyBasic)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _basic_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic.html */ "./src/pages/components/empty/examples/basic.html");


class ExampleEmptyBasic extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleEmptyBasic.template = _basic_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/empty/examples/colors.ts":
/*!*******************************************************!*\
  !*** ./src/pages/components/empty/examples/colors.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleEmptyColors)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _colors_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors.html */ "./src/pages/components/empty/examples/colors.html");


class ExampleEmptyColors extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleEmptyColors.template = _colors_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/empty/examples/rounded.ts":
/*!********************************************************!*\
  !*** ./src/pages/components/empty/examples/rounded.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleEmptyRounded)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _rounded_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rounded.html */ "./src/pages/components/empty/examples/rounded.html");


class ExampleEmptyRounded extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleEmptyRounded.template = _rounded_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/empty/index.ts":
/*!*********************************************!*\
  !*** ./src/pages/components/empty/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageEmptyState": () => (/* binding */ PageEmptyState)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/components/empty/index.html");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/pages/components/empty/api.ts");
/* harmony import */ var _examples_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/basic */ "./src/pages/components/empty/examples/basic.ts");
/* harmony import */ var _examples_basic_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/basic?example */ "./src/pages/components/empty/examples/basic.ts?example");
/* harmony import */ var _examples_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/colors */ "./src/pages/components/empty/examples/colors.ts");
/* harmony import */ var _examples_colors_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/colors?example */ "./src/pages/components/empty/examples/colors.ts?example");
/* harmony import */ var _examples_rounded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/rounded */ "./src/pages/components/empty/examples/rounded.ts");
/* harmony import */ var _examples_rounded_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/rounded?example */ "./src/pages/components/empty/examples/rounded.ts?example");










class PageEmptyState extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
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
      basic: {
        component: _examples_basic__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_basic_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      colors: {
        component: _examples_colors__WEBPACK_IMPORTED_MODULE_6__["default"],
        source: _examples_colors_example__WEBPACK_IMPORTED_MODULE_7__["default"]
      },
      rounded: {
        component: _examples_rounded__WEBPACK_IMPORTED_MODULE_8__["default"],
        source: _examples_rounded_example__WEBPACK_IMPORTED_MODULE_9__["default"]
      }
    };
  }
}
PageEmptyState.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/empty/examples/basic.html":
/*!********************************************************!*\
  !*** ./src/pages/components/empty/examples/basic.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/empty */ "../jinge-material/lib/empty/index.js");
/* harmony import */ var jinge_material_icons_lib_DevicesOther_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material-icons/lib/DevicesOther.js */ "../jinge-material-icons/lib/DevicesOther.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-empty-state>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'icon': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-icon-devices_other>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                  });
                  const el = jinge_material_icons_lib_DevicesOther_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              },
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
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `创建第一个项目`)
                          ];
                        }
                      }
                    },
                    class: `md-primary md-raised`
                  });
                  const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__.Button.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          label: `创建你的第一个项目`,
          description: `创建项目后，你就可以上传设计稿并和他人协作`
        });
        const el = jinge_material_lib_empty__WEBPACK_IMPORTED_MODULE_1__.EmptyState.create(attrs);
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

/***/ "./src/pages/components/empty/examples/colors.html":
/*!*********************************************************!*\
  !*** ./src/pages/components/empty/examples/colors.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/empty */ "../jinge-material/lib/empty/index.js");
/* harmony import */ var jinge_material_icons_lib_Done_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material-icons/lib/Done.js */ "../jinge-material-icons/lib/Done.js");
/* harmony import */ var jinge_material_icons_lib_AlarmOff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material-icons/lib/AlarmOff.js */ "../jinge-material-icons/lib/AlarmOff.js");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors.scss */ "./src/pages/components/empty/examples/colors.scss");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _colors_scss__WEBPACK_IMPORTED_MODULE_4__["default"].demo
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-empty-state>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'icon': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-done>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Done_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-primary`,
            label: `Nothing in Done`,
            description: `Anything you mark done will be safely stored here.`
          });
          const el = jinge_material_lib_empty__WEBPACK_IMPORTED_MODULE_1__.EmptyState.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })(),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-empty-state>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'icon': function(component) {
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-alarm_off>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_AlarmOff_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-accent`,
            rounded: true,
            label: `Nothing in Reminders`,
            description: `Create a Reminder and it will show up here.`
          });
          const el = jinge_material_lib_empty__WEBPACK_IMPORTED_MODULE_1__.EmptyState.create(attrs);
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

/***/ "./src/pages/components/empty/examples/rounded.html":
/*!**********************************************************!*\
  !*** ./src/pages/components/empty/examples/rounded.html ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/empty */ "../jinge-material/lib/empty/index.js");
/* harmony import */ var jinge_material_icons_lib_AccessTime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material-icons/lib/AccessTime.js */ "../jinge-material-icons/lib/AccessTime.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-empty-state>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'icon': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-icon-access_time>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                  });
                  const el = jinge_material_icons_lib_AccessTime_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          rounded: true,
          label: `Nothing in Snoozed`,
          description: `Anything you snooze will go here until it's time for it to return to the inbox.`
        });
        const el = jinge_material_lib_empty__WEBPACK_IMPORTED_MODULE_1__.EmptyState.create(attrs);
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

/***/ "./src/pages/components/empty/index.html":
/*!***********************************************!*\
  !*** ./src/pages/components/empty/index.html ***!
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
                  `空状态的示例是不包含任何项目的列表，或者不显示任何结果的搜索。尽管这些状态并不常见，但应设计为防止用户混淆。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `最基本的空白状态显示非交互式图像和文本标语。 为此，您可以使用图标，标题和空状态描述。 空状态默认提供了不错的设计，但是您始终可以在`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-empty-state`
                  ),
                  `之上创建自己的设计。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `空状态可以是基本状态或圆形状态。仅对台式机建议使用四舍五入的变体，因为它的大小是固定的，并且无法响应。`
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
                  `空状态`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `可以在任何屏幕尺寸上使用默认的空状态。您可以将设计与图标，标签和说明结合使用，因为这些都是可选的。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Default`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.basic;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","basic"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `圆角的空状态以清新的外观和漂亮的背景色来引起用户的注意。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Rounded`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.rounded;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","rounded"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `还可以将两种布局与原色或强调色结合使用，以匹配您的主题。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Hue Colors`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.colors;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","colors"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                        }
                      }
                    },
                    title: `API - md-empty-state`
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
      title: `空提示`
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

/***/ "../jinge-material-icons/lib/AlarmOff.js":
/*!***********************************************!*\
  !*** ../jinge-material-icons/lib/AlarmOff.js ***!
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
          d: `M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z`
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

/***/ "../jinge-material-icons/lib/DevicesOther.js":
/*!***************************************************!*\
  !*** ../jinge-material-icons/lib/DevicesOther.js ***!
  \***************************************************/
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
          d: `M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z`
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

/***/ "../jinge-material-icons/lib/Done.js":
/*!*******************************************!*\
  !*** ../jinge-material-icons/lib/Done.js ***!
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
          d: `M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z`
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

/***/ "../jinge-material/lib/empty/style/index.css":
/*!***************************************************!*\
  !*** ../jinge-material/lib/empty/style/index.css ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205808
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/pages/components/empty/examples/colors.scss":
/*!*********************************************************!*\
  !*** ./src/pages/components/empty/examples/colors.scss ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--mRcPh"});
    if(true) {
      // 1659344205031
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/empty/examples/basic.ts?example":
/*!**************************************************************!*\
  !*** ./src/pages/components/empty/examples/basic.ts?example ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './basic.html';\n\nexport default class ExampleEmptyBasic extends Component {\n  static template = _tpl;\n}\n","sass":"","html":"<div>\n  <md-empty-state\n    label=\"创建你的第一个项目\"\n    description=\"创建项目后，你就可以上传设计稿并和他人协作\"\n  >\n    <md-icon-devices_other slot-pass:icon/>\n    <md-button slot-pass:default class=\"md-primary md-raised\">创建第一个项目</md-button>\n  </md-empty-state>\n</div>"});

/***/ }),

/***/ "./src/pages/components/empty/examples/colors.ts?example":
/*!***************************************************************!*\
  !*** ./src/pages/components/empty/examples/colors.ts?example ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './colors.html';\n\nexport default class ExampleEmptyColors extends Component {\n  static template = _tpl;\n}\n","sass":".demo {\n  :global {\n    div {\n      text-align: center;\n    }\n\n    .md-empty-state {\n      display: inline-block;\n      vertical-align: middle;\n\n      + .md-empty-state {\n        margin-left: 16px;\n      }\n    }\n  }\n}\n","html":"<!-- import style from './colors.scss' -->\n<div :class=\"style.demo\">\n  <div>\n    <md-empty-state\n      class=\"md-primary\"\n      label=\"Nothing in Done\"\n      description=\"Anything you mark done will be safely stored here.\"\n    >\n      <md-icon-done slot-pass:icon/>\n    </md-empty-state>\n\n    <md-empty-state\n      class=\"md-accent\"\n      rounded\n      label=\"Nothing in Reminders\"\n      description=\"Create a Reminder and it will show up here.\"\n    >\n      <md-icon-alarm_off slot-pass:icon/>\n    </md-empty-state>\n  </div>\n</div>"});

/***/ }),

/***/ "./src/pages/components/empty/examples/rounded.ts?example":
/*!****************************************************************!*\
  !*** ./src/pages/components/empty/examples/rounded.ts?example ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './rounded.html';\n\nexport default class ExampleEmptyRounded extends Component {\n  static template = _tpl;\n}\n","sass":"","html":"<div>\n  <md-empty-state\n    rounded\n    label=\"Nothing in Snoozed\"\n    description=\"Anything you snooze will go here until it's time for it to return to the inbox.\"\n  >\n    <md-icon-access_time slot-pass:icon/>\n  </md-empty-state>\n</div>"});

/***/ }),

/***/ "../jinge-material/lib/empty/index.js":
/*!********************************************!*\
  !*** ../jinge-material/lib/empty/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyState": () => (/* binding */ EmptyState)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/empty/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/empty/index.tpl.js");


class EmptyState extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;const f1_jg0402 = () => {
    _jg0.rounded = attrs.rounded; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("rounded", f1_jg0402);const f2_jg0402 = () => {
    _jg0.size = Number(attrs.size || 420); }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("size", f2_jg0402);const f3_jg0402 = () => {
    _jg0.label = attrs.label; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("label", f3_jg0402);const f4_jg0402 = () => {
    _jg0.description = attrs.description; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("description", f4_jg0402);
  }
}
EmptyState.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/empty/index.tpl.js":
/*!************************************************!*\
  !*** ../jinge-material/lib/empty/index.tpl.js ***!
  \************************************************/
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-empty-state-container`
        },
        ...(() => {
          const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
          const renderFn = __ac && __ac['icon'] ? __ac['icon'] : null;
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
                      "strong",
                      {
                        class: `md-empty-state-label`
                      },
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                        const fn_0 = () => {
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.label }`);
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["label"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
            expect: undefined
          });
          const fn_0 = () => {
            attrs.expect = vm_0.label;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["label"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
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
                      "p",
                      {
                        class: `md-empty-state-description`
                      },
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                        const fn_0 = () => {
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.description }`);
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["description"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
            expect: undefined
          });
          const fn_0 = () => {
            attrs.expect = vm_0.description;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["description"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })(),
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
      )
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-empty-state', vm_0.rounded && 'md-rounded', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["rounded"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, ([vm_0.rounded && { width: vm_0.size, height: vm_0.size }, vm_0.style]));
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["rounded"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["size"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/empty/style/index.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/empty/style/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/empty/style/index.css");




/***/ })

}]);
//# sourceMappingURL=src_pages_components_empty_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-materia-0907bb.js.map