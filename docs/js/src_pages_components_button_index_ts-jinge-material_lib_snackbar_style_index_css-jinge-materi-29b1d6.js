"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_components_button_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-materi-29b1d6"],{

/***/ "./src/pages/components/button/api.ts":
/*!********************************************!*\
  !*** ./src/pages/components/button/api.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
  regular: {
    props: {
      headings: ["名称", "描述", "默认值"],
      props: [
        {
          name: "type",
          type: "String",
          description: "直接传递到原生 &lt;button&gt; 元素的 type 属性",
          defaults: "button"
        },
        {
          name: "e:disabled",
          type: "Boolean",
          description: "禁用按钮。",
          defaults: "false"
        },
        {
          name: "e:ripple",
          type: "Boolean",
          description: "是否启用 ripple 效果。",
          defaults: "true"
        }
      ]
    },
    events: {
      headings: ["事件名称", "描述", "参数"],
      props: [
        {
          name: "click",
          description: "鼠标点击事件。",
          value: "$event"
        },
        {
          name: "&lt;any&gt;",
          description: "任意可作用到原生 &lt;button&gt; 元素的事件，组件会将事件绑定传递到原生 &lt;button&gt; 元素。",
          value: "$event"
        }
      ]
    },
    classes: {
      headings: ["名称", "描述"],
      props: [
        {
          name: "md-primary",
          description: "主题 Primary 颜色按钮。"
        },
        {
          name: "md-accent",
          description: "主题 Accent 颜色按钮。"
        },
        {
          name: "md-raised",
          description: "创建带有阴影的凸起按钮"
        },
        {
          name: "md-dense",
          description: "使用紧凑型的按钮样式。"
        }
      ]
    }
  },
  icons: {
    classes: {
      headings: ["名称", "描述"],
      props: [
        {
          name: "md-icon-button",
          description: "使用圆形的图标按钮。"
        }
      ]
    }
  },
  fab: {
    classes: {
      headings: ["名称", "描述"],
      props: [
        {
          name: "md-fab",
          description: "使用 FAB 按钮"
        },
        {
          name: "md-dense",
          description: "使用紧凑型的按钮样式。"
        },
        {
          name: "md-fab-[position]",
          description: `指定 FAB 按钮的位置。位置 [position] 可选值包括：<br/>
<ul>
  <li>top-right</li>
  <li>top-center</li>
  <li>top-left</li>
  <li>bottom-right</li>
  <li>bottom-center</li>
  <li>bottom-left</li>
</ul>`
        },
        {
          name: "md-fixed",
          description: "使用 fixed 模式展示按钮。推荐和上述的 6 种位置配合使用。"
        }
      ]
    }
  }
}));


/***/ }),

/***/ "./src/pages/components/button/examples/floating-buttons.ts":
/*!******************************************************************!*\
  !*** ./src/pages/components/button/examples/floating-buttons.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExapmleFloatingButtons)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _floating_buttons_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floating-buttons.html */ "./src/pages/components/button/examples/floating-buttons.html");


class ExapmleFloatingButtons extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  onClick(evt) {
    console.log("click button", evt);
  }
}
ExapmleFloatingButtons.template = _floating_buttons_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/button/examples/icon-buttons.ts":
/*!**************************************************************!*\
  !*** ./src/pages/components/button/examples/icon-buttons.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExapmleIconButtons)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _icon_buttons_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-buttons.html */ "./src/pages/components/button/examples/icon-buttons.html");


class ExapmleIconButtons extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  onClick(evt) {
    console.log("click button", evt);
  }
}
ExapmleIconButtons.template = _icon_buttons_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/button/examples/link-buttons.ts":
/*!**************************************************************!*\
  !*** ./src/pages/components/button/examples/link-buttons.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExapmleLinkButtons)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _link_buttons_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-buttons.html */ "./src/pages/components/button/examples/link-buttons.html");


class ExapmleLinkButtons extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.pageUrl = window.location.href;
  }
}
ExapmleLinkButtons.template = _link_buttons_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/button/examples/regular-buttons.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/components/button/examples/regular-buttons.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleRegularButtons)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _regular_buttons_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regular-buttons.html */ "./src/pages/components/button/examples/regular-buttons.html");


class ExampleRegularButtons extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.loading = false;
  }
  onClick(evt) {
    console.log("click button", evt);
  }
  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3e3);
  }
}
ExampleRegularButtons.template = _regular_buttons_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/button/examples/uisref-buttons.ts":
/*!****************************************************************!*\
  !*** ./src/pages/components/button/examples/uisref-buttons.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExapmleSrefButtons)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _uisref_buttons_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uisref-buttons.html */ "./src/pages/components/button/examples/uisref-buttons.html");


class ExapmleSrefButtons extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExapmleSrefButtons.template = _uisref_buttons_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/button/index.ts":
/*!**********************************************!*\
  !*** ./src/pages/components/button/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageButton": () => (/* binding */ PageButton)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/components/button/index.html");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/pages/components/button/api.ts");
/* harmony import */ var _examples_regular_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/regular-buttons */ "./src/pages/components/button/examples/regular-buttons.ts");
/* harmony import */ var _examples_regular_buttons_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/regular-buttons?example */ "./src/pages/components/button/examples/regular-buttons.ts?example");
/* harmony import */ var _examples_icon_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/icon-buttons */ "./src/pages/components/button/examples/icon-buttons.ts");
/* harmony import */ var _examples_icon_buttons_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/icon-buttons?example */ "./src/pages/components/button/examples/icon-buttons.ts?example");
/* harmony import */ var _examples_floating_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/floating-buttons */ "./src/pages/components/button/examples/floating-buttons.ts");
/* harmony import */ var _examples_floating_buttons_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/floating-buttons?example */ "./src/pages/components/button/examples/floating-buttons.ts?example");
/* harmony import */ var _examples_link_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/link-buttons */ "./src/pages/components/button/examples/link-buttons.ts");
/* harmony import */ var _examples_link_buttons_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/link-buttons?example */ "./src/pages/components/button/examples/link-buttons.ts?example");
/* harmony import */ var _examples_uisref_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/uisref-buttons */ "./src/pages/components/button/examples/uisref-buttons.ts");
/* harmony import */ var _examples_uisref_buttons_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/uisref-buttons?example */ "./src/pages/components/button/examples/uisref-buttons.ts?example");














class PageButton extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
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
      regularButtons: {
        component: _examples_regular_buttons__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_regular_buttons_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      iconButtons: {
        component: _examples_icon_buttons__WEBPACK_IMPORTED_MODULE_6__["default"],
        source: _examples_icon_buttons_example__WEBPACK_IMPORTED_MODULE_7__["default"]
      },
      floatingButtons: {
        component: _examples_floating_buttons__WEBPACK_IMPORTED_MODULE_8__["default"],
        source: _examples_floating_buttons_example__WEBPACK_IMPORTED_MODULE_9__["default"]
      },
      linkButtons: {
        component: _examples_link_buttons__WEBPACK_IMPORTED_MODULE_10__["default"],
        source: _examples_link_buttons_example__WEBPACK_IMPORTED_MODULE_11__["default"]
      },
      srefButtons: {
        component: _examples_uisref_buttons__WEBPACK_IMPORTED_MODULE_12__["default"],
        source: _examples_uisref_buttons_example__WEBPACK_IMPORTED_MODULE_13__["default"]
      }
    };
  }
}
PageButton.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/button/examples/floating-buttons.html":
/*!********************************************************************!*\
  !*** ./src/pages/components/button/examples/floating-buttons.html ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material-icons/lib/Menu.js */ "../jinge-material-icons/lib/Menu.js");
/* harmony import */ var jinge_material_icons_lib_Add_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material-icons/lib/Add.js */ "../jinge-material-icons/lib/Add.js");
/* harmony import */ var jinge_material_icons_lib_Edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/Edit.js */ "../jinge-material-icons/lib/Edit.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/pages/components/button/examples/style.scss");






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
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Regular`
        ),
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
                        debugName: "attrs_of_<md-icon-menu>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-fab`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-add>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Add_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-fab md-primary`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-edit>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Edit_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-fab md-plain`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Mini/Dense`
        ),
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
                        debugName: "attrs_of_<md-icon-menu>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-fab md-mini`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-add>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Add_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-fab md-mini md-primary`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-edit>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Edit_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-fab md-mini md-plain`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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

/***/ "./src/pages/components/button/examples/icon-buttons.html":
/*!****************************************************************!*\
  !*** ./src/pages/components/button/examples/icon-buttons.html ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_3dRotation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material-icons/lib/3dRotation.js */ "../jinge-material-icons/lib/3dRotation.js");
/* harmony import */ var jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material-icons/lib/Menu.js */ "../jinge-material-icons/lib/Menu.js");
/* harmony import */ var jinge_material_icons_lib_ThumbUp_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/ThumbUp.js */ "../jinge-material-icons/lib/ThumbUp.js");
/* harmony import */ var jinge_material_icons_lib_Add_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material-icons/lib/Add.js */ "../jinge-material-icons/lib/Add.js");
/* harmony import */ var jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge-material-icons/lib/Home.js */ "../jinge-material-icons/lib/Home.js");
/* harmony import */ var jinge_material_icons_lib_Person_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jinge-material-icons/lib/Person.js */ "../jinge-material-icons/lib/Person.js");
/* harmony import */ var jinge_material_icons_lib_Cached_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jinge-material-icons/lib/Cached.js */ "../jinge-material-icons/lib/Cached.js");









/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Flat`
        ),
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
                        debugName: "attrs_of_<md-icon-3d_rotation>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_3dRotation_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-icon-button`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
            class: `md-icon-button md-primary`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-thumb_up>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_ThumbUp_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-icon-button md-accent`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-add>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Add_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-icon-button`,
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Raised`
        ),
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
                    const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_6__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-icon-button md-raised`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
            class: `md-icon-button md-raised md-primary`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-thumb_up>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_ThumbUp_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-icon-button md-raised md-accent`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-add>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Add_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-icon-button md-raised`,
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Dense`
        ),
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
                        debugName: "attrs_of_<md-icon-person>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Person_js__WEBPACK_IMPORTED_MODULE_7__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-icon-button md-dense md-primary`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-cached>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Cached_js__WEBPACK_IMPORTED_MODULE_8__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            class: `md-icon-button md-dense md-raised md-primary`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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

/***/ "./src/pages/components/button/examples/link-buttons.html":
/*!****************************************************************!*\
  !*** ./src/pages/components/button/examples/link-buttons.html ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/pages/components/button/examples/style.scss");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].demo
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Buttons`
        ),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-button>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Default`)
                  ];
                }
              }
            },
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary`)
                  ];
                }
              }
            },
            class: `md-primary`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Accent`)
                  ];
                }
              }
            },
            class: `md-accent`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Disabled`)
                  ];
                }
              }
            },
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Links`
        ),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-button>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Default`)
                  ];
                }
              }
            },
            href: undefined
          });
          const fn_0 = () => {
            attrs.href = vm_0.pageUrl;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["pageUrl"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary`)
                  ];
                }
              }
            },
            href: undefined,
            class: `md-primary`
          });
          const fn_0 = () => {
            attrs.href = vm_0.pageUrl;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["pageUrl"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Accent`)
                  ];
                }
              }
            },
            href: undefined,
            class: `md-accent`
          });
          const fn_0 = () => {
            attrs.href = vm_0.pageUrl;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["pageUrl"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Disabled`)
                  ];
                }
              }
            },
            href: undefined,
            disabled: true
          });
          const fn_0 = () => {
            attrs.href = vm_0.pageUrl;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["pageUrl"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Open in new tab`)
                  ];
                }
              }
            },
            href: `https://www.google.com`,
            target: `_blank`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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

/***/ "./src/pages/components/button/examples/regular-buttons.html":
/*!*******************************************************************!*\
  !*** ./src/pages/components/button/examples/regular-buttons.html ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material-icons/lib/Home.js */ "../jinge-material-icons/lib/Home.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        style: `background-color: var(--demo-states-background); padding: 12px;`
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Basic Buttons`
        ),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-button>",
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
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-icon-home>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                    });
                    const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  (() => {
                    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "span",
                      `Default`
                    );
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return el;
                  })()
                  ];
                }
              }
            },
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Ripple Off`)
                  ];
                }
              }
            },
            ripple: false
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })(),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-button>",
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary`)
                  ];
                }
              }
            },
            class: `md-primary`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Accent`)
                  ];
                }
              }
            },
            class: `md-accent`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Disabled`)
                  ];
                }
              }
            },
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary Disabled`)
                  ];
                }
              }
            },
            class: `md-primary`,
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Raised Buttons`
        ),
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
                    const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  (() => {
                    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "span",
                      `Default`
                    );
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return el;
                  })()
                  ];
                }
              }
            },
            class: `md-raised`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Ripple Off`)
                  ];
                }
              }
            },
            class: `md-raised`,
            ripple: false
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })(),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-button>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              listeners: {
                click: {
                  fn: function(...args) {
                    vm_0.load(...args);
                  },
                  opts: null
                }
              },
              slots: {
                'default': function(component) {
                  return [
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary`)
                  ];
                }
              }
            },
            disabled: undefined,
            class: `md-raised md-primary`
          });
          const fn_0 = () => {
            attrs.disabled = vm_0.loading;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["loading"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Accent`)
                  ];
                }
              }
            },
            class: `md-raised md-accent`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Disabled`)
                  ];
                }
              }
            },
            class: `md-raised`,
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary Disabled`)
                  ];
                }
              }
            },
            class: `md-raised md-primary`,
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Flat Buttons`
        ),
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
                    const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  (() => {
                    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "span",
                      `Default`
                    );
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return el;
                  })()
                  ];
                }
              }
            },
            class: `md-flat`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Ripple Off`)
                  ];
                }
              }
            },
            class: `md-flat`,
            ripple: false
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })(),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-button>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              listeners: {
                click: {
                  fn: function(...args) {
                    vm_0.load(...args);
                  },
                  opts: null
                }
              },
              slots: {
                'default': function(component) {
                  return [
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary`)
                  ];
                }
              }
            },
            disabled: undefined,
            class: `md-flat md-primary`
          });
          const fn_0 = () => {
            attrs.disabled = vm_0.loading;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["loading"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Accent`)
                  ];
                }
              }
            },
            class: `md-flat md-accent`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Disabled`)
                  ];
                }
              }
            },
            class: `md-flat`,
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary Disabled`)
                  ];
                }
              }
            },
            class: `md-flat md-primary`,
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Stroked Buttons`
        ),
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
                    const el = jinge_material_icons_lib_Home_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  (() => {
                    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "span",
                      `Default`
                    );
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return el;
                  })()
                  ];
                }
              }
            },
            class: `md-stroked`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Ripple Off`)
                  ];
                }
              }
            },
            class: `md-stroked`,
            ripple: false
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })(),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-button>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              listeners: {
                click: {
                  fn: function(...args) {
                    vm_0.load(...args);
                  },
                  opts: null
                }
              },
              slots: {
                'default': function(component) {
                  return [
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary`)
                  ];
                }
              }
            },
            disabled: undefined,
            class: `md-stroked md-primary`
          });
          const fn_0 = () => {
            attrs.disabled = vm_0.loading;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["loading"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Accent`)
                  ];
                }
              }
            },
            class: `md-stroked md-accent`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Disabled`)
                  ];
                }
              }
            },
            class: `md-stroked`,
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary Disabled`)
                  ];
                }
              }
            },
            class: `md-stroked md-primary`,
            disabled: true
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "small",
          `Dense`
        ),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<md-button>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  return [
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Flat`)
                  ];
                }
              }
            },
            class: `md-dense md-primary`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Raised`)
                  ];
                }
              }
            },
            class: `md-dense md-raised md-primary`
          });
          const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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

/***/ "./src/pages/components/button/examples/uisref-buttons.html":
/*!******************************************************************!*\
  !*** ./src/pages/components/button/examples/uisref-buttons.html ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
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
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Default`)
                ];
              }
            }
          },
          to: `components.button`
        });
        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary`)
                ];
              }
            }
          },
          to: `components.button`,
          class: `md-primary`
        });
        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Accent`)
                ];
              }
            }
          },
          to: `components.icon`,
          class: `md-accent`
        });
        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Disabled`)
                ];
              }
            }
          },
          to: `components.button`,
          disabled: true
        });
        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Open in new tab`)
                ];
              }
            }
          },
          to: `components.icon`,
          target: `_blank`
        });
        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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

/***/ "./src/pages/components/button/index.html":
/*!************************************************!*\
  !*** ./src/pages/components/button/index.html ***!
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
                  `按钮组件用于响应用户的点（触）击操作。按钮类型包括`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "strong",
                    `Flat`
                  ),
                  `,`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "strong",
                    `Raised`
                  ),
                  `和`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "strong",
                    `Floating`
                  ),
                  `。
                        Flat 和 Raised 类型的按钮默认情况下只展示文本，但也可以通过特殊的 class 来附加图标。
                        Floating 类型的按钮只展示图标。按钮可以通过添加`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "strong",
                    `Dense`
                  ),
                  `这个 class 来调整为较小的紧凑型大小。`
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
                  `Flat 和 Raised 类型`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `不添加任何 class 的情况下，按钮的默认类型即 Flat。
                        添加`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-raised`
                  ),
                  `这个 class 即可指定按钮类型为 Raised。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Regular`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.regularButtons;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","regularButtons"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                              "p",
                              `所有按钮都有以下接口：`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        },
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
                              attrs.headings = vm_0.api?.regular?.props?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","regular","props","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.regular?.props?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","regular","props","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              attrs.headings = vm_0.api?.regular?.classes?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","regular","classes","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.regular?.classes?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","regular","classes","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              attrs.headings = vm_0.api?.regular?.events?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","regular","events","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.regular?.events?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","regular","events","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-button`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiItem.create(attrs);
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
                  `图标类型`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `要在按钮内显示图标，只需要添加 md-icon-button 类就可以了。您还可以将其与 md-raised 类结合使用。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Icon`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.iconButtons;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","iconButtons"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              attrs.headings = vm_0.api?.icons?.classes?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","icons","classes","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.icons?.classes?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","icons","classes","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiItem.create(attrs);
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
                  `FAB 按钮`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `FAB 按钮代表应用程序中的主要动作，用于升级动作。FAB 按钮可以是常规大小或小型，默认情况下带有强调色。这种类型的按钮只能有图标，因此应与 md-icon 一起使用。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<NoteBlock>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `每屏最多只使用一个 FAB 按钮，并且仅在按钮的目的是触发屏幕的主要操作时才使用。否则，请使用`),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                              "code",
                              `md-icon-button`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })(),
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `。`)
                          ];
                        }
                      }
                    },
                    tip: true
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.NoteBlock.create(attrs);
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
                    title: `FAB`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.floatingButtons;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","floatingButtons"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              attrs.headings = vm_0.api?.fab?.classes?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","fab","classes","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.fab?.classes?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","fab","classes","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiItem.create(attrs);
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
                  `链接 vs 按钮`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `默认情况下，所有按钮都会输出一个`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `button`
                  ),
                  `标签。 如果要将其更改为`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `a`
                  ),
                  `标记，只需为其指定 href 属性：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Links and Buttons`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.linkButtons;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","linkButtons"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                  `和 jinge-router 无缝整合`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `按钮可以默认和 jinge-router 整合。可以把 md-button 当 router-link 一样使用，为其指定 to, params, active, target 等属性。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `UI Router Buttons`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.srefButtons;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","srefButtons"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeExample.create(attrs);
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
      title: `按钮`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material-icons/lib/3dRotation.js":
/*!*************************************************!*\
  !*** ../jinge-material-icons/lib/3dRotation.js ***!
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
          d: `M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z`
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

/***/ "../jinge-material-icons/lib/Add.js":
/*!******************************************!*\
  !*** ../jinge-material-icons/lib/Add.js ***!
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
          d: `M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z`
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

/***/ "../jinge-material-icons/lib/Cached.js":
/*!*********************************************!*\
  !*** ../jinge-material-icons/lib/Cached.js ***!
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
          d: `M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z`
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

/***/ "../jinge-material-icons/lib/Edit.js":
/*!*******************************************!*\
  !*** ../jinge-material-icons/lib/Edit.js ***!
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
          d: `M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z`
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

/***/ "../jinge-material-icons/lib/Person.js":
/*!*********************************************!*\
  !*** ../jinge-material-icons/lib/Person.js ***!
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
          d: `M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z`
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

/***/ "../jinge-material-icons/lib/ThumbUp.js":
/*!**********************************************!*\
  !*** ../jinge-material-icons/lib/ThumbUp.js ***!
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
          d: `M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z`
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

/***/ "./src/pages/components/button/examples/style.scss":
/*!*********************************************************!*\
  !*** ./src/pages/components/button/examples/style.scss ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--z16fi"});
    if(true) {
      // 1659344205406
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/button/examples/floating-buttons.ts?example":
/*!**************************************************************************!*\
  !*** ./src/pages/components/button/examples/floating-buttons.ts?example ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './floating-buttons.html';\n\nexport default class ExapmleFloatingButtons extends Component {\n  static template = _tpl;\n\n  onClick(evt: MouseEvent) {\n    // eslint-disable-next-line no-console\n    console.log('click button', evt);\n  }\n}\n","sass":"","html":"<!-- import style from './style.scss' -->\n<div :class=\"style.demo\">\n  <div>\n    <small>Regular</small>\n    <md-button class=\"md-fab\">\n      <md-icon-menu/>\n    </md-button>\n    <md-button class=\"md-fab md-primary\">\n      <md-icon-add/>\n    </md-button>\n    <md-button class=\"md-fab md-plain\">\n      <md-icon-edit/>\n    </md-button>\n  </div>\n\n  <div>\n    <small>Mini/Dense</small>\n    <md-button class=\"md-fab md-mini\">\n      <md-icon-menu/>\n    </md-button>\n    <md-button class=\"md-fab md-mini md-primary\">\n      <md-icon-add/>\n    </md-button>\n    <md-button class=\"md-fab md-mini md-plain\">\n      <md-icon-edit/>\n    </md-button>\n  </div>\n</div>"});

/***/ }),

/***/ "./src/pages/components/button/examples/icon-buttons.ts?example":
/*!**********************************************************************!*\
  !*** ./src/pages/components/button/examples/icon-buttons.ts?example ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './icon-buttons.html';\n\nexport default class ExapmleIconButtons extends Component {\n  static template = _tpl;\n\n  onClick(evt: MouseEvent) {\n    // eslint-disable-next-line no-console\n    console.log('click button', evt);\n  }\n}\n","sass":"","html":"<div>\n  <div>\n    <small>Flat</small>\n    <md-button class=\"md-icon-button\">\n      <md-icon-3d_rotation/>\n    </md-button>\n\n    <md-button class=\"md-icon-button md-primary\">\n      <md-icon-menu/>\n    </md-button>\n\n    <md-button class=\"md-icon-button md-accent\">\n      <md-icon-thumb_up/>\n    </md-button>\n\n    <md-button class=\"md-icon-button\" disabled>\n      <md-icon-add/>\n    </md-button>\n  </div>\n\n  <div>\n    <small>Raised</small>\n    <md-button class=\"md-icon-button md-raised\">\n      <md-icon-home/>\n    </md-button>\n\n    <md-button class=\"md-icon-button md-raised md-primary\">\n      <md-icon-menu/>\n    </md-button>\n\n    <md-button class=\"md-icon-button md-raised md-accent\">\n      <md-icon-thumb_up/>\n    </md-button>\n\n    <md-button class=\"md-icon-button md-raised\" disabled>\n      <md-icon-add/>\n    </md-button>\n  </div>\n\n  <div>\n    <small>Dense</small>\n    <md-button class=\"md-icon-button md-dense md-primary\">\n      <md-icon-person/>\n    </md-button>\n\n    <md-button class=\"md-icon-button md-dense md-raised md-primary\">\n      <md-icon-cached/>\n    </md-button>\n  </div>\n</div>\n"});

/***/ }),

/***/ "./src/pages/components/button/examples/link-buttons.ts?example":
/*!**********************************************************************!*\
  !*** ./src/pages/components/button/examples/link-buttons.ts?example ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './link-buttons.html';\n\nexport default class ExapmleLinkButtons extends Component {\n  static template = _tpl;\n\n  pageUrl: string;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.pageUrl = window.location.href;\n  }\n}\n","sass":"","html":"<!-- import style from './style.scss' -->\n<div :class=\"style.demo\">\n  <div>\n    <small>Buttons</small>\n    <md-button>Default</md-button>\n    <md-button class=\"md-primary\">Primary</md-button>\n    <md-button class=\"md-accent\">Accent</md-button>\n    <md-button disabled>Disabled</md-button>\n  </div>\n\n  <div>\n    <small>Links</small>\n    <md-button e:href=\"pageUrl\">Default</md-button>\n    <md-button e:href=\"pageUrl\" class=\"md-primary\">Primary</md-button>\n    <md-button e:href=\"pageUrl\" class=\"md-accent\">Accent</md-button>\n    <md-button e:href=\"pageUrl\" disabled>Disabled</md-button>\n    <md-button href=\"https://www.google.com\" target=\"_blank\">Open in new tab</md-button>\n  </div>\n</div>"});

/***/ }),

/***/ "./src/pages/components/button/examples/regular-buttons.ts?example":
/*!*************************************************************************!*\
  !*** ./src/pages/components/button/examples/regular-buttons.ts?example ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './regular-buttons.html';\n\nexport default class ExampleRegularButtons extends Component {\n  static template = _tpl;\n\n  loading: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.loading = false;\n  }\n\n  onClick(evt: MouseEvent) {\n    // eslint-disable-next-line no-console\n    console.log('click button', evt);\n  }\n\n  load() {\n    this.loading = true;\n    setTimeout(() => {\n      this.loading = false;\n    }, 3000);\n  }\n}\n","sass":"","html":"<div style=\"background-color: var(--demo-states-background); padding: 12px;\">\n  <div>\n    <small>Basic Buttons</small>\n    <md-button on:click=\"onClick\">\n      <md-icon-home/>\n      <span>Default</span>\n    </md-button>\n    <md-button e:ripple=\"false\">Ripple Off</md-button>\n    <md-button on:click=\"onClick\" class=\"md-primary\">Primary</md-button>\n    <md-button class=\"md-accent\">Accent</md-button>\n    <md-button disabled>Disabled</md-button>\n    <md-button class=\"md-primary\" disabled>Primary Disabled</md-button>\n  </div>\n\n  <div>\n    <small>Raised Buttons</small>\n    <md-button class=\"md-raised\">\n      <md-icon-home/>\n      <span>Default</span>\n    </md-button>\n    <md-button class=\"md-raised\" e:ripple=\"false\">Ripple Off</md-button>\n    <md-button on:click=\"load\" e:disabled=\"loading\" class=\"md-raised md-primary\">Primary</md-button>\n    <md-button class=\"md-raised md-accent\">Accent</md-button>\n    <md-button class=\"md-raised\" disabled>Disabled</md-button>\n    <md-button class=\"md-raised md-primary\" disabled>Primary Disabled</md-button>\n  </div>\n  <div>\n    <small>Flat Buttons</small>\n    <md-button class=\"md-flat\">\n      <md-icon-home/>\n      <span>Default</span>\n    </md-button>\n    <md-button class=\"md-flat\" e:ripple=\"false\">Ripple Off</md-button>\n    <md-button on:click=\"load\" e:disabled=\"loading\" class=\"md-flat md-primary\">Primary</md-button>\n    <md-button class=\"md-flat md-accent\">Accent</md-button>\n    <md-button class=\"md-flat\" disabled>Disabled</md-button>\n    <md-button class=\"md-flat md-primary\" disabled>Primary Disabled</md-button>\n  </div>\n  <div>\n    <small>Stroked Buttons</small>\n    <md-button class=\"md-stroked\">\n      <md-icon-home/>\n      <span>Default</span>\n    </md-button>\n    <md-button class=\"md-stroked\" e:ripple=\"false\">Ripple Off</md-button>\n    <md-button on:click=\"load\" e:disabled=\"loading\" class=\"md-stroked md-primary\">Primary</md-button>\n    <md-button class=\"md-stroked md-accent\">Accent</md-button>\n    <md-button class=\"md-stroked\" disabled>Disabled</md-button>\n    <md-button class=\"md-stroked md-primary\" disabled>Primary Disabled</md-button>\n  </div>\n  \n  <div>\n    <small>Dense</small>\n    <md-button class=\"md-dense md-primary\">Flat</md-button>\n    <md-button class=\"md-dense md-raised md-primary\">Raised</md-button>\n  </div>\n</div>"});

/***/ }),

/***/ "./src/pages/components/button/examples/uisref-buttons.ts?example":
/*!************************************************************************!*\
  !*** ./src/pages/components/button/examples/uisref-buttons.ts?example ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './uisref-buttons.html';\n\nexport default class ExapmleSrefButtons extends Component {\n  static template = _tpl;\n}\n","sass":"","html":"<div>\n  <md-button to=\"components.button\">Default</md-button>\n  <md-button to=\"components.button\" class=\"md-primary\">Primary</md-button>\n  <md-button to=\"components.icon\" class=\"md-accent\">Accent</md-button>\n  <md-button to=\"components.button\" disabled>Disabled</md-button>\n  <md-button to=\"components.icon\" target=\"_blank\">Open in new tab</md-button>\n</div>"});

/***/ })

}]);
//# sourceMappingURL=src_pages_components_button_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-materi-29b1d6.js.map