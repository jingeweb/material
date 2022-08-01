"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_ui-elements_layout_index_ts"],{

/***/ "./src/pages/ui-elements/layout/apis.ts":
/*!**********************************************!*\
  !*** ./src/pages/ui-elements/layout/apis.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
  breakpoints: {
    headings: ["名称", "描述", "宽度"],
    props: [
      {
        name: "xsmall",
        description: "适用于最大 599px 宽的屏幕，比如大、中、小型人像手机以及纵向的小型平板电脑。",
        value: "< 599px"
      },
      {
        name: "small",
        description: "适用于宽度介于 600 像素到 959 像素之间的屏幕，比如中型和大型手机、纵向模式的小型和大型平板电脑以及某些台式机显示器。",
        value: "959px"
      },
      {
        name: "medium",
        description: "适用于 960 像素至 1279 像素之间的屏幕，比如横向和台式显示器中的小型和大型平板电脑。",
        value: "1279px"
      },
      {
        name: "large",
        description: "适用于 1280 像素至 1919 像素之间的屏幕，比如大型台式机显示器。",
        value: "1919px"
      },
      {
        name: "xlarge",
        description: "适用于宽于 1920 像素的屏幕，比如大型台式机显示器或并排屏幕。",
        value: "> 1920px"
      }
    ]
  },
  gutter: {
    headings: ["屏幕大小", "间隙"],
    props: [
      {
        name: "xsmall",
        value: "8px"
      },
      {
        name: "small",
        value: "16px"
      },
      {
        name: "medium",
        value: "24px"
      },
      {
        name: "large",
        value: "48px"
      }
    ]
  },
  layout: {
    headings: ["名称", "描述"],
    props: [
      {
        name: "md-gutter",
        description: "布局项目之间使用自动计算的间隙。"
      },
      {
        name: "md-layout-nowrap",
        description: "默认情况下，布局项目将始终包装在父布局下。 如果要禁用此行为，请使用此类，但是响应性将不起作用。"
      },
      {
        name: "md-alignment-<code>[x]</code>-<code>[y]</code>",
        description: `设置所有子项的对齐方式，仅当 [x] 和 [y] 同时存在时，对齐方式才有效，例如 <code>md-alignment-top-center</code>。 可能的值包括：<br>
<ul>
  <li>top</li>
  <li>center</li>
  <li>left</li>
  <li>space-around</li>
  <li>space-between</li>
</ul>`
      }
    ]
  },
  item: {
    headings: ["名称", "描述"],
    props: [
      {
        name: "md-size-<code>[amount]</code>",
        description: "设置元素的布局大小，按百分比计算，[amount] 可以是 33、66 或 5 的倍数，例如 <code>md-size-25</code>。"
      },
      {
        name: "md-<code>[breakpoint]</code>-size-<code>[amount]</code>",
        description: `设置元素在特定断点下的布局大小，可能的值包括：<br/>
<ul>
  <li>xsmall</li>
  <li>small</li>
  <li>medium</li>
  <li>large</li>
  <li>xlarge</li>
</ul>`
      }
    ]
  },
  hide: {
    headings: ["名称", "描述"],
    props: [
      {
        name: "md-<code>[breakpoint]</code>-hide",
        description: `设置元素在特定断点下隐藏，可能的值包括：<br/>
<ul>
  <li>xsmall</li>
  <li>small</li>
  <li>medium</li>
  <li>large</li>
  <li>xlarge</li>
</ul>`
      }
    ]
  }
}));


/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/alignment.ts":
/*!************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/alignment.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleLayoutAlignment)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _alignment_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alignment.html */ "./src/pages/ui-elements/layout/examples/alignment.html");


class ExampleLayoutAlignment extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.vertical = null;
    _jg0.horizontal = null;
  }
}
ExampleLayoutAlignment.template = _alignment_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/columns.ts":
/*!**********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/columns.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleLayoutColumns)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _columns_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns.html */ "./src/pages/ui-elements/layout/examples/columns.html");


class ExampleLayoutColumns extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleLayoutColumns.template = _columns_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/gutter.ts":
/*!*********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/gutter.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleLayoutGutter)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _gutter_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutter.html */ "./src/pages/ui-elements/layout/examples/gutter.html");


class ExampleLayoutGutter extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleLayoutGutter.template = _gutter_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/hide.ts":
/*!*******************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/hide.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleLayoutHide)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _hide_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hide.html */ "./src/pages/ui-elements/layout/examples/hide.html");


class ExampleLayoutHide extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleLayoutHide.template = _hide_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/nested.ts":
/*!*********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/nested.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleLayoutNested)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _nested_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nested.html */ "./src/pages/ui-elements/layout/examples/nested.html");


class ExampleLayoutNested extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleLayoutNested.template = _nested_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/responsive.ts":
/*!*************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/responsive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleLayoutResponsive)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _responsive_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsive.html */ "./src/pages/ui-elements/layout/examples/responsive.html");


class ExampleLayoutResponsive extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleLayoutResponsive.template = _responsive_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/sizes.ts":
/*!********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/sizes.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleLayoutSizes)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _sizes_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizes.html */ "./src/pages/ui-elements/layout/examples/sizes.html");


class ExampleLayoutSizes extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleLayoutSizes.template = _sizes_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/ui-elements/layout/index.ts":
/*!***********************************************!*\
  !*** ./src/pages/ui-elements/layout/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayout": () => (/* binding */ PageLayout)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/ui-elements/layout/index.html");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apis */ "./src/pages/ui-elements/layout/apis.ts");
/* harmony import */ var _examples_columns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/columns */ "./src/pages/ui-elements/layout/examples/columns.ts");
/* harmony import */ var _examples_columns_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/columns?example */ "./src/pages/ui-elements/layout/examples/columns.ts?example");
/* harmony import */ var _examples_gutter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/gutter */ "./src/pages/ui-elements/layout/examples/gutter.ts");
/* harmony import */ var _examples_gutter_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/gutter?example */ "./src/pages/ui-elements/layout/examples/gutter.ts?example");
/* harmony import */ var _examples_nested__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/nested */ "./src/pages/ui-elements/layout/examples/nested.ts");
/* harmony import */ var _examples_nested_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/nested?example */ "./src/pages/ui-elements/layout/examples/nested.ts?example");
/* harmony import */ var _examples_alignment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/alignment */ "./src/pages/ui-elements/layout/examples/alignment.ts");
/* harmony import */ var _examples_alignment_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/alignment?example */ "./src/pages/ui-elements/layout/examples/alignment.ts?example");
/* harmony import */ var _examples_hide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/hide */ "./src/pages/ui-elements/layout/examples/hide.ts");
/* harmony import */ var _examples_hide_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/hide?example */ "./src/pages/ui-elements/layout/examples/hide.ts?example");
/* harmony import */ var _examples_sizes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/sizes */ "./src/pages/ui-elements/layout/examples/sizes.ts");
/* harmony import */ var _examples_sizes_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/sizes?example */ "./src/pages/ui-elements/layout/examples/sizes.ts?example");
/* harmony import */ var _examples_responsive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/responsive */ "./src/pages/ui-elements/layout/examples/responsive.ts");
/* harmony import */ var _examples_responsive_example__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/responsive?example */ "./src/pages/ui-elements/layout/examples/responsive.ts?example");


















class PageLayout extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    (0,jinge_i18n__WEBPACK_IMPORTED_MODULE_1__.watchForComponent)(
      _jg0,
      () => {
        _jg0.api = (0,_apis__WEBPACK_IMPORTED_MODULE_3__["default"])();
      },
      true
    );
    _jg0._examples = {
      columns: {
        component: _examples_columns__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_columns_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      gutter: {
        component: _examples_gutter__WEBPACK_IMPORTED_MODULE_6__["default"],
        source: _examples_gutter_example__WEBPACK_IMPORTED_MODULE_7__["default"]
      },
      nested: {
        component: _examples_nested__WEBPACK_IMPORTED_MODULE_8__["default"],
        source: _examples_nested_example__WEBPACK_IMPORTED_MODULE_9__["default"]
      },
      alignment: {
        component: _examples_alignment__WEBPACK_IMPORTED_MODULE_10__["default"],
        source: _examples_alignment_example__WEBPACK_IMPORTED_MODULE_11__["default"]
      },
      hide: {
        component: _examples_hide__WEBPACK_IMPORTED_MODULE_12__["default"],
        source: _examples_hide_example__WEBPACK_IMPORTED_MODULE_13__["default"]
      },
      sizes: {
        component: _examples_sizes__WEBPACK_IMPORTED_MODULE_14__["default"],
        source: _examples_sizes_example__WEBPACK_IMPORTED_MODULE_15__["default"]
      },
      responsive: {
        component: _examples_responsive__WEBPACK_IMPORTED_MODULE_16__["default"],
        source: _examples_responsive_example__WEBPACK_IMPORTED_MODULE_17__["default"]
      }
    };
  }
}
PageLayout.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/alignment.html":
/*!**************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/alignment.html ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/field */ "../jinge-material/lib/field/index.js");
/* harmony import */ var jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/select */ "../jinge-material/lib/select/index.js");
/* harmony import */ var _alignment_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alignment.scss */ "./src/pages/ui-elements/layout/examples/alignment.scss");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _alignment_scss__WEBPACK_IMPORTED_MODULE_3__["default"].demo
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout md-gutter`
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: `md-layout-item md-size-25`
          },
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<md-field>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                slots: {
                  'default': function(component) {
                    return [
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "label",
                        {
                          for: `vertical`
                        },
                        `Vertical`
                      );
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                      return el;
                    })(),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<md-select>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                          listeners: {
                            change: {
                              fn: function(...args) {
                                vm_0.vertical = args[0]
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
                                    debugName: "attrs_of_<md-option>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    slots: {
                                      'default': function(component) {
                                        return [
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Top`)
                                        ];
                                      }
                                    }
                                  },
                                  value: `top`
                                });
                                const el = jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__.Option.create(attrs);
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                              })(),
                              ...(() => {
                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                    debugName: "attrs_of_<md-option>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    slots: {
                                      'default': function(component) {
                                        return [
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Center`)
                                        ];
                                      }
                                    }
                                  },
                                  value: `center`
                                });
                                const el = jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__.Option.create(attrs);
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                              })(),
                              ...(() => {
                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                    debugName: "attrs_of_<md-option>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    slots: {
                                      'default': function(component) {
                                        return [
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Bottom`)
                                        ];
                                      }
                                    }
                                  },
                                  value: `bottom`
                                });
                                const el = jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__.Option.create(attrs);
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                              })()
                              ];
                            }
                          }
                        },
                        value: undefined,
                        id: `vertical`
                      });
                      const fn_0 = () => {
                        attrs.value = vm_0.vertical;
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["vertical"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const el = jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__.Select.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                    })()
                    ];
                  }
                }
              },
            });
            const el = jinge_material_lib_field__WEBPACK_IMPORTED_MODULE_1__.Field.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })()
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: `md-layout-item md-size-25`
          },
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<md-field>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                slots: {
                  'default': function(component) {
                    return [
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "label",
                        {
                          for: `horizontal`
                        },
                        `Horizontal`
                      );
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                      return el;
                    })(),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<md-select>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                          listeners: {
                            change: {
                              fn: function(...args) {
                                vm_0.horizontal = args[0]
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
                                    debugName: "attrs_of_<md-option>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    slots: {
                                      'default': function(component) {
                                        return [
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Left`)
                                        ];
                                      }
                                    }
                                  },
                                  value: `left`
                                });
                                const el = jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__.Option.create(attrs);
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                              })(),
                              ...(() => {
                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                    debugName: "attrs_of_<md-option>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    slots: {
                                      'default': function(component) {
                                        return [
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Center`)
                                        ];
                                      }
                                    }
                                  },
                                  value: `center`
                                });
                                const el = jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__.Option.create(attrs);
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                              })(),
                              ...(() => {
                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                    debugName: "attrs_of_<md-option>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    slots: {
                                      'default': function(component) {
                                        return [
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Right`)
                                        ];
                                      }
                                    }
                                  },
                                  value: `right`
                                });
                                const el = jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__.Option.create(attrs);
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                              })(),
                              ...(() => {
                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                    debugName: "attrs_of_<md-option>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    slots: {
                                      'default': function(component) {
                                        return [
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Space Around`)
                                        ];
                                      }
                                    }
                                  },
                                  value: `space-around`
                                });
                                const el = jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__.Option.create(attrs);
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                              })(),
                              ...(() => {
                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                    debugName: "attrs_of_<md-option>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    slots: {
                                      'default': function(component) {
                                        return [
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Space Between`)
                                        ];
                                      }
                                    }
                                  },
                                  value: `space-between`
                                });
                                const el = jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__.Option.create(attrs);
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                              })()
                              ];
                            }
                          }
                        },
                        value: undefined,
                        id: `horizontal`
                      });
                      const fn_0 = () => {
                        attrs.value = vm_0.horizontal;
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["horizontal"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const el = jinge_material_lib_select__WEBPACK_IMPORTED_MODULE_2__.Select.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                    })()
                    ];
                  }
                }
              },
            });
            const el = jinge_material_lib_field__WEBPACK_IMPORTED_MODULE_1__.Field.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })()
        )
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `example`
        },
        (() => {
          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "div",
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "div",
              {
                class: `md-layout-item md-size-25`
              },
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "span",
                `Lorem ipsum dolor sit amet.`
              )
            ),
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "div",
              {
                class: `md-layout-item md-size-25`
              },
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "span",
                `Repellat praesentium quasi ipsa totam, delectus aperiam deleniti, voluptates inventore.`
              )
            ),
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "div",
              {
                class: `md-layout-item md-size-25`
              },
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "span",
                `Excepturi natus dolorem maxime.`
              )
            )
          );
          const fn_0 = () => {
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, `md-layout md-gutter md-alignment-${vm_0.vertical}-${vm_0.horizontal}`);
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["vertical"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["horizontal"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          return el;
        })()
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/columns.html":
/*!************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/columns.html ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _columns_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns.scss */ "./src/pages/ui-elements/layout/examples/columns.scss");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)(['md-layout', _columns_scss__WEBPACK_IMPORTED_MODULE_1__["default"].demo])
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item`
        },
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/gutter.html":
/*!***********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/gutter.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _gutter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutter.scss */ "./src/pages/ui-elements/layout/examples/gutter.scss");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)([_gutter_scss__WEBPACK_IMPORTED_MODULE_1__["default"].demo, 'md-layout md-gutter'])
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item`
        },
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/hide.html":
/*!*********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/hide.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _hide_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hide.scss */ "./src/pages/ui-elements/layout/examples/hide.scss");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)([_hide_scss__WEBPACK_IMPORTED_MODULE_1__["default"].demo, 'md-layout md-gutter md-alignment-center'])
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100`
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "span",
          `Always Show`
        )
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100`
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "span",
          `Always Show`
        )
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100`
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "span",
          `Always Show`
        )
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-hide`
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "span",
          `Hide Xsmall`
        )
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-50 md-small-hide`
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "span",
          `Hide Small`
        )
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-hide`
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "span",
          `Hide Medium`
        )
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/nested.html":
/*!***********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/nested.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _nested_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nested.scss */ "./src/pages/ui-elements/layout/examples/nested.scss");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _nested_scss__WEBPACK_IMPORTED_MODULE_1__["default"].demo
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout md-gutter`
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: `md-layout-item md-layout md-gutter`
          },
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              class: `md-layout-item`
            },
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              class: `md-layout-item`
            },
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              class: `md-layout-item`
            },
          )
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: `md-layout-item md-layout md-gutter`
          },
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              class: `md-layout-item`
            },
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              class: `md-layout-item`
            },
          )
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: `md-layout-item md-layout md-gutter`
          },
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              class: `md-layout-item`
            },
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              class: `md-layout-item`
            },
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              class: `md-layout-item`
            },
          ),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              class: `md-layout-item`
            },
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

/***/ "./src/pages/ui-elements/layout/examples/responsive.html":
/*!***************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/responsive.html ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsive.scss */ "./src/pages/ui-elements/layout/examples/responsive.scss");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)([_responsive_scss__WEBPACK_IMPORTED_MODULE_1__["default"].demo, 'md-layout md-gutter md-alignment-center'])
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100`
        },
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/sizes.html":
/*!**********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/sizes.html ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _sizes_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizes.scss */ "./src/pages/ui-elements/layout/examples/sizes.scss");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)([_sizes_scss__WEBPACK_IMPORTED_MODULE_1__["default"].demo, 'md-layout md-gutter'])
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-size-15`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-layout-item md-size-15`
        },
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/ui-elements/layout/index.html":
/*!*************************************************!*\
  !*** ./src/pages/ui-elements/layout/index.html ***!
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
                  `Material Design 中的响应式布局可适应任何可能的屏幕尺寸，该布局方案包括一个灵活的网格系统，以确保各个布局之间的一致性。`
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
                  `断点`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `使用断点来控制响应式布局：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<ApiTable>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    headings: undefined,
                    props: undefined,
                    slot: `props`
                  });
                  const fn_0 = () => {
                    attrs.headings = vm_0.api?.breakpoints?.headings;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","breakpoints","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.props = vm_0.api?.breakpoints?.props;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","breakpoints","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
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
                  `列布局`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `列布局系统通过 css 的 flexbox 实现，从而提供了灵活而便捷的 API。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `使用布局系统，需要先创建一个`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-layout`
                  ),
                  `的父元素，然后在其下创建任意数量的`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-layout-item`
                  ),
                  `列表：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Columns`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.columns;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","columns"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                  "p",
                  `默认情况下，布局项之间没有间隙。可以设置为基于屏幕宽度和断点自动计算元素之间的间距：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<ApiTable>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    headings: undefined,
                    props: undefined,
                    slot: `props`
                  });
                  const fn_0 = () => {
                    attrs.headings = vm_0.api?.gutter?.headings;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","gutter","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.props = vm_0.api?.gutter?.props;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","gutter","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `试试调整浏览器的大小并观察布局变化：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Gutter`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.gutter;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","gutter"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                  "p",
                  `布局列也可用于嵌套布局：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Nested columns`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.nested;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","nested"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                  "p",
                  `可以指定`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-layout`
                  ),
                  `使用不同的对齐方式，并可以对`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-alignment-[horizontal]-[vertical]`
                  ),
                  `类进行水平和垂直对齐的各种组合，例如，`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-alignment-top-center`
                  ),
                  `。对齐在父元素上起作用，它将更改所有子项的位置：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Alignments`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.alignment;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","alignment"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                  "p",
                  `使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-size-[amount]`
                  ),
                  `可以指定元素在布局中的大小，例如`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-size-30`
                  ),
                  `。其中，[amount] 的值可以是 33、66 或 5 的倍数。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `不是所有元素都必须指定布局大小。对于没有指定大小的元素，会自动计算其大小：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Size`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.sizes;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","sizes"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                  "p",
                  `使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-[breakpoint]-size-[amount]`
                  ),
                  `可以基于断点来更改布局大小。尝试调整浏览器的大小：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Responsive`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.responsive;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","responsive"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                  "p",
                  `可以使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-[breakpoint]-hide`
                  ),
                  `类来实现在较小屏幕上隐藏某个元素：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Hide Elements`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.hide;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","hide"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                    'default': function(component) {
                      return [
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "p",
                          `以下类可以被应用到任何 HTML 元素上：`
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
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
                          attrs.headings = vm_0.api?.layout?.headings;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","layout","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_1 = () => {
                          attrs.props = vm_0.api?.layout?.props;
                        };
                        fn_1();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","layout","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
                title: `API - md-layout`
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
                    'default': function(component) {
                      return [
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "p",
                          `以下类可以应用于任何`,
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                            "code",
                            `md-layout`
                          ),
                          `的直接子元素：`
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
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
                          attrs.headings = vm_0.api?.item?.headings;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","item","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_1 = () => {
                          attrs.props = vm_0.api?.item?.props;
                        };
                        fn_1();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","item","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
                title: `API - md-layout-item`
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
                    'default': function(component) {
                      return [
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "p",
                          `以下类可以被应用到任何 HTML 元素上：`
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
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
                          attrs.headings = vm_0.api?.hide?.headings;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","hide","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_1 = () => {
                          attrs.props = vm_0.api?.hide?.props;
                        };
                        fn_1();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","hide","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
                title: `API - md-hide`
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
      title: `布局`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material-icons/lib/ArrowDropDown.js":
/*!****************************************************!*\
  !*** ../jinge-material-icons/lib/ArrowDropDown.js ***!
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
          d: `M7 10l5 5 5-5z`
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

/***/ "../jinge-material/lib/checkbox/style/index.css":
/*!******************************************************!*\
  !*** ../jinge-material/lib/checkbox/style/index.css ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344206456
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "../jinge-material/lib/select/style/index.css":
/*!****************************************************!*\
  !*** ../jinge-material/lib/select/style/index.css ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205810
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

/***/ "./src/pages/ui-elements/layout/examples/alignment.scss":
/*!**************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/alignment.scss ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--UY6BB"});
    if(true) {
      // 1659344206450
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/columns.scss":
/*!************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/columns.scss ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--R7A3m"});
    if(true) {
      // 1659344206207
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/gutter.scss":
/*!***********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/gutter.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--UTVmx"});
    if(true) {
      // 1659344206200
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/hide.scss":
/*!*********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/hide.scss ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--bBnxn"});
    if(true) {
      // 1659344206205
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/nested.scss":
/*!***********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/nested.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--HFKUu"});
    if(true) {
      // 1659344206210
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/responsive.scss":
/*!***************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/responsive.scss ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"mdLayoutItem":"md-layout-item--tPLw1"});
    if(true) {
      // 1659344206447
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/sizes.scss":
/*!**********************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/sizes.scss ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--Xkes7"});
    if(true) {
      // 1659344206203
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/alignment.ts?example":
/*!********************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/alignment.ts?example ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './alignment.html';\n\nexport default class ExampleLayoutAlignment extends Component {\n  static template = _tpl;\n\n  vertical: string;\n  horizontal: string;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.vertical = null;\n    this.horizontal = null;\n  }\n}\n","sass":"@import '~jinge-material/style/palette.scss';\n@import '~jinge-material/style/animation/variables.scss';\n\n.demo {\n  :global {\n    .md-layout {\n      transition: 0.3s $md-transition-stand-timing;\n    }\n\n    .example .md-layout-item {\n      min-height: 40px;\n      transition: 0.3s $md-transition-stand-timing;\n\n      span {\n        width: 100%;\n        height: 100%;\n        padding: 8px;\n        display: block;\n        background: md-get-palette-color(blue, 200);\n      }\n    }\n  }\n}\n","html":"<!-- import style from './alignment.scss' -->\n<div :class=\"style.demo\">\n  <div class=\"md-layout md-gutter\">\n    <div class=\"md-layout-item md-size-25\">\n      <md-field>\n        <label for=\"vertical\">Vertical</label>\n        <md-select id=\"vertical\" e:value=\"vertical\" on:change=\"vertical = $args[0]\">\n          <md-option value=\"top\">Top</md-option>\n          <md-option value=\"center\">Center</md-option>\n          <md-option value=\"bottom\">Bottom</md-option>\n        </md-select>\n      </md-field>\n    </div>\n\n    <div class=\"md-layout-item md-size-25\">\n      <md-field>\n        <label for=\"horizontal\">Horizontal</label>\n        <md-select id=\"horizontal\" e:value=\"horizontal\" on:change=\"horizontal = $args[0]\" >\n          <md-option value=\"left\">Left</md-option>\n          <md-option value=\"center\">Center</md-option>\n          <md-option value=\"right\">Right</md-option>\n          <md-option value=\"space-around\">Space Around</md-option>\n          <md-option value=\"space-between\">Space Between</md-option>\n        </md-select>\n      </md-field>\n    </div>\n  </div>\n\n  <div class=\"example\">\n    <div class=\"md-layout md-gutter md-alignment-${vertical}-${horizontal}\">\n      <div class=\"md-layout-item md-size-25\">\n        <span>Lorem ipsum dolor sit amet.</span>\n      </div>\n\n      <div class=\"md-layout-item md-size-25\">\n        <span>Repellat praesentium quasi ipsa totam, delectus aperiam deleniti, voluptates inventore.</span>\n      </div>\n\n      <div class=\"md-layout-item md-size-25\">\n        <span>Excepturi natus dolorem maxime.</span>\n      </div>\n    </div>\n  </div>\n</div>"});

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/columns.ts?example":
/*!******************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/columns.ts?example ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './columns.html';\n\nexport default class ExampleLayoutColumns extends Component {\n  static template = _tpl;\n}\n","sass":"@import '~jinge-material/style/palette.scss';\n\n.demo {\n  :global {\n    .md-layout-item {\n      height: 40px;\n\n      &:nth-child(1) {\n        background: md-get-palette-color(grey, 300);\n      }\n\n      &:nth-child(2) {\n        background: md-get-palette-color(grey, 400);\n      }\n\n      &:nth-child(3) {\n        background: md-get-palette-color(grey, 500);\n      }\n    }\n  }\n}\n","html":"<!-- import style from './columns.scss' -->\n<div :class=\"['md-layout', style.demo]\">\n  <div class=\"md-layout-item\"></div>\n  <div class=\"md-layout-item\"></div>\n  <div class=\"md-layout-item\"></div>\n</div>"});

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/gutter.ts?example":
/*!*****************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/gutter.ts?example ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './gutter.html';\n\nexport default class ExampleLayoutGutter extends Component {\n  static template = _tpl;\n}\n","sass":"@import '~jinge-material/style/palette.scss';\n\n.demo {\n  :global {\n    .md-layout-item {\n      height: 40px;\n\n      &::after {\n        width: 100%;\n        height: 100%;\n        display: block;\n        background: md-get-palette-color(red, 200);\n        content: ' ';\n      }\n    }\n  }\n}\n","html":"<!-- import style from './gutter.scss' -->\n<div :class=\"[style.demo, 'md-layout md-gutter']\">\n  <div class=\"md-layout-item\"></div>\n  <div class=\"md-layout-item\"></div>\n  <div class=\"md-layout-item\"></div>\n</div>"});

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/hide.ts?example":
/*!***************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/hide.ts?example ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './hide.html';\n\nexport default class ExampleLayoutHide extends Component {\n  static template = _tpl;\n}\n","sass":"@import '~jinge-material/style/palette.scss';\n\n.demo {\n  :global {\n    .md-layout-item {\n      height: 40px;\n      margin-top: 8px;\n      margin-bottom: 8px;\n\n      span {\n        width: 100%;\n        height: 100%;\n        padding: 8px;\n        display: block;\n        background: md-get-palette-color(teal, 200);\n      }\n    }\n  }\n}\n","html":"<!-- import style from './hide.scss' -->\n<div :class=\"[style.demo, 'md-layout md-gutter md-alignment-center']\">\n  <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\">\n    <span>Always Show</span>\n  </div>\n\n  <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\">\n    <span>Always Show</span>\n  </div>\n\n  <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\">\n    <span>Always Show</span>\n  </div>\n\n  <div class=\"md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-hide\">\n    <span>Hide Xsmall</span>\n  </div>\n\n  <div class=\"md-layout-item md-medium-size-50 md-small-hide\">\n    <span>Hide Small</span>\n  </div>\n\n  <div class=\"md-layout-item md-medium-hide\">\n    <span>Hide Medium</span>\n  </div>\n</div>"});

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/nested.ts?example":
/*!*****************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/nested.ts?example ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './nested.html';\n\nexport default class ExampleLayoutNested extends Component {\n  static template = _tpl;\n}\n","sass":"@import '~jinge-material/style/palette.scss';\n\n.demo {\n  :global {\n    .md-layout-item {\n      height: 72px;\n\n      &::after {\n        width: 100%;\n        height: 100%;\n        display: block;\n        content: ' ';\n      }\n\n      &.md-layout {\n        &::after {\n          transform: translateY(-100%);\n          background: md-get-palette-color(yellow, 200);\n        }\n\n        .md-layout-item::after {\n          height: 40px;\n          margin-top: 16px;\n          position: relative;\n          z-index: 1;\n          background: md-get-palette-color(pink, 200);\n        }\n      }\n    }\n  }\n}\n","html":"<!-- import style from './nested.scss' -->\n<div :class=\"style.demo\">\n  <div class=\"md-layout md-gutter\">\n    <div class=\"md-layout-item md-layout md-gutter\">\n      <div class=\"md-layout-item\"></div>\n      <div class=\"md-layout-item\"></div>\n      <div class=\"md-layout-item\"></div>\n    </div>\n\n    <div class=\"md-layout-item md-layout md-gutter\">\n      <div class=\"md-layout-item\"></div>\n      <div class=\"md-layout-item\"></div>\n    </div>\n\n    <div class=\"md-layout-item md-layout md-gutter\">\n      <div class=\"md-layout-item\"></div>\n      <div class=\"md-layout-item\"></div>\n      <div class=\"md-layout-item\"></div>\n      <div class=\"md-layout-item\"></div>\n    </div>\n  </div>\n</div>"});

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/responsive.ts?example":
/*!*********************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/responsive.ts?example ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './responsive.html';\n\nexport default class ExampleLayoutResponsive extends Component {\n  static template = _tpl;\n}\n","sass":"@import '~jinge-material/style/palette.scss';\n@import '~jinge-material/style/animation/variables.scss';\n\n.md-layout-item {\n  height: 40px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  transition: 0.3s $md-transition-stand-timing;\n\n  &::after {\n    width: 100%;\n    height: 100%;\n    display: block;\n    background: md-get-palette-color(purple, 200);\n    content: ' ';\n  }\n}\n","html":"<!-- import style from './responsive.scss' -->\n<div :class=\"[style.demo, 'md-layout md-gutter md-alignment-center']\">\n  <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n  <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n  <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n  <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n  <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n  <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n</div>"});

/***/ }),

/***/ "./src/pages/ui-elements/layout/examples/sizes.ts?example":
/*!****************************************************************!*\
  !*** ./src/pages/ui-elements/layout/examples/sizes.ts?example ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './sizes.html';\n\nexport default class ExampleLayoutSizes extends Component {\n  static template = _tpl;\n}\n","sass":"@import '~jinge-material/style/palette.scss';\n\n.demo {\n  :global {\n    .md-layout-item {\n      height: 40px;\n\n      &::after {\n        width: 100%;\n        height: 100%;\n        display: block;\n        background: md-get-palette-color(green, 200);\n        content: ' ';\n      }\n    }\n  }\n}\n","html":"<!-- import style from './sizes.scss' -->\n<div :class=\"[style.demo, 'md-layout md-gutter']\">\n  <div class=\"md-layout-item md-size-15\"></div>\n  <div class=\"md-layout-item\"></div>\n  <div class=\"md-layout-item\"></div>\n  <div class=\"md-layout-item md-size-15\"></div>\n</div>"});

/***/ }),

/***/ "../jinge-material/lib/checkbox/index.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/checkbox/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/checkbox/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/checkbox/index.tpl.js");


class Checkbox extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs, name = "checkbox") {
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_1__.isArray)(attrs.value) && !("trueValue" in attrs)) {
      throw new Error(`<md-${name}>: attribute "trueValue" is required when "value" is array(which means array-mode ${name})`);
    }
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
    _jg0._renderLabel = !!_jg0[jinge__WEBPACK_IMPORTED_MODULE_1__.__].slots?.default;
    _jg0._isArrayMode = (0,jinge__WEBPACK_IMPORTED_MODULE_1__.isArray)(attrs.value);
    _jg0.checked = null;
    _jg0.rippleActive = false;const f6_jg0402 = () => {
    _jg0.id = attrs.id || `md-${name}-${(0,jinge__WEBPACK_IMPORTED_MODULE_1__.uid)()}`; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("id", f6_jg0402);const f7_jg0402 = () => {
    _jg0.name = attrs.name || ""; }; f7_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("name", f7_jg0402);const f8_jg0402 = () => {
    _jg0.disabled = !!attrs.disabled; }; f8_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("disabled", f8_jg0402);const f9_jg0402 = () => {
    _jg0.required = !!attrs.required; }; f9_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("required", f9_jg0402);const f10_jg0402 = () => {
    _jg0.trueValue = attrs.trueValue; }; f10_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("trueValue", f10_jg0402);const f11_jg0402 = () => {
    _jg0.falseValue = attrs.falseValue; }; f11_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("falseValue", f11_jg0402);const f12_jg0402 = () => {
    _jg0.value = attrs.value; }; f12_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("value", f12_jg0402);
    _jg0._calcChecked();
  }
  get value() {
    return this._value;
  }
  set value(v) {
    const isArr = (0,jinge__WEBPACK_IMPORTED_MODULE_1__.isArray)(v);
    if (isArr !== this._isArrayMode) {
      throw new Error(`<md-checkbox/>: attribute "value" can't change array mode.`);
    }
    this._value = v;
    this.__updateIfNeed(this._calcChecked);
  }
  get trueValue() {
    return this._trueValue;
  }
  set trueValue(v) {
    this._trueValue = (0,jinge__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(v) ? true : v;
    this.__updateIfNeed(this._calcChecked);
  }
  get falseValue() {
    return this._falseValue;
  }
  set falseValue(v) {
    this._falseValue = (0,jinge__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(v) ? false : v;
    this.__updateIfNeed(this._calcChecked);
  }
  __afterRender() {
    this.__domPassListeners();
  }
  toggleCheck() {
    if (this.disabled)
      return;
    this._updateChecked(!this.checked);
  }
  _updateChecked(v) {
    if (this.checked === v)
      return;
    this.checked = v;
    if (this._isArrayMode) {
      if (this.checked) {
        (0,jinge__WEBPACK_IMPORTED_MODULE_1__.arrayPushIfNotExist)(this._value, this.trueValue);
      } else {
        (0,jinge__WEBPACK_IMPORTED_MODULE_1__.arrayRemove)(this._value, this.trueValue);
      }
    } else {
      this._value = this.checked ? this.trueValue : this.falseValue;
    }
    this.rippleActive = true;
    this.__notify("change", this._value);
  }
  _calcChecked() {
    const nc = this._isArrayMode ? this.value.indexOf(this.trueValue) >= 0 : this.value === this.trueValue;
    if (nc === this.checked)
      return;
    this.checked = nc;
  }
}
Checkbox.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/checkbox/index.tpl.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/checkbox/index.tpl.js ***!
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
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: `md-checkbox-container`
          },
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                listeners: {
                  "update.active": {
                    fn: function(...args) {
                      vm_0.rippleActive = args[0]
                    },
                    opts: null
                  }
                },
                slots: {
                  'default': function(component) {
                    return [
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "input",
                        {
                          type: `checkbox`
                        },
                      );
                      const fn_0 = () => {
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "id", vm_0.id);
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["id"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const fn_1 = () => {
                        el.checked = !!(vm_0.checked);
                      };
                      fn_1();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["checked"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const fn_2 = () => {
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "name", vm_0.name);
                      };
                      fn_2();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["name"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const fn_3 = () => {
                        el.disabled = !!(vm_0.disabled);
                      };
                      fn_3();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const fn_4 = () => {
                        el.required = !!(vm_0.required);
                      };
                      fn_4();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["required"], fn_4, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                      return el;
                    })()
                    ];
                  }
                }
              },
              active: undefined,
              disabled: undefined,
              centered: true
            });
            const fn_0 = () => {
              attrs.active = vm_0.rippleActive;
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["rippleActive"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const fn_1 = () => {
              attrs.disabled = vm_0.disabled;
            };
            fn_1();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const el = _ripple__WEBPACK_IMPORTED_MODULE_1__.Ripple.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })()
        );
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'click', function(...args) {
          vm_0.toggleCheck(...args);
        });
        return el;
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
                    "label",
                    {
                      class: `md-checkbox-label`
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
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "for", vm_0.id);
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["id"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'click', function(...args) {
                    vm_0.toggleCheck(...args);
                    args[0].preventDefault();
                  }, {"prevent":true});
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
          attrs.expect = vm_0._renderLabel;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_renderLabel"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-checkbox', { 'md-disabled': vm_0.disabled, 'md-required': vm_0.required, 'md-checked': vm_0.checked }, vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["required"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["checked"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/checkbox/style/index.js":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/checkbox/style/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/checkbox/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/select/index.js":
/*!*********************************************!*\
  !*** ../jinge-material/lib/select/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HELPER_MODE": () => (/* reexport safe */ _select__WEBPACK_IMPORTED_MODULE_1__.HELPER_MODE),
/* harmony export */   "OPTGROUP_PROVIDER": () => (/* reexport safe */ _optgroup__WEBPACK_IMPORTED_MODULE_2__.OPTGROUP_PROVIDER),
/* harmony export */   "Optgroup": () => (/* reexport safe */ _optgroup__WEBPACK_IMPORTED_MODULE_2__.Optgroup),
/* harmony export */   "Option": () => (/* reexport safe */ _option__WEBPACK_IMPORTED_MODULE_3__.Option),
/* harmony export */   "SELECT_PROVIDER": () => (/* reexport safe */ _select__WEBPACK_IMPORTED_MODULE_1__.SELECT_PROVIDER),
/* harmony export */   "Select": () => (/* reexport safe */ _select__WEBPACK_IMPORTED_MODULE_1__.Select)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/select/style/index.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "../jinge-material/lib/select/select.js");
/* harmony import */ var _optgroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optgroup */ "../jinge-material/lib/select/optgroup.js");
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option */ "../jinge-material/lib/select/option.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/select/optgroup.js":
/*!************************************************!*\
  !*** ../jinge-material/lib/select/optgroup.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OPTGROUP_PROVIDER": () => (/* binding */ OPTGROUP_PROVIDER),
/* harmony export */   "Optgroup": () => (/* binding */ Optgroup)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _optgroup_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optgroup.tpl.js */ "../jinge-material/lib/select/optgroup.tpl.js");


const OPTGROUP_PROVIDER = Symbol("optgroup_provider");
class Optgroup extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.label = attrs.label; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("label", f1_jg0402);const f2_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f2_jg0402);
    _jg0.__setContext(OPTGROUP_PROVIDER, _jg0);
  }
  stop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}
Optgroup.template = _optgroup_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=optgroup.js.map

/***/ }),

/***/ "../jinge-material/lib/select/optgroup.tpl.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/select/optgroup.tpl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _subheader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subheader */ "../jinge-material/lib/subheader/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: `md-optgroup`
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                  const fn_0 = () => {
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.label }`);
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["label"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              }
            }
          },
        });
        const el = _subheader__WEBPACK_IMPORTED_MODULE_1__.Subheader.create(attrs);
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
    );
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'mousedown', function(...args) {
      vm_0.stop(...args);
    });
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/select/option.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/select/option.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Option": () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field */ "../jinge-material/lib/field/index.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select */ "../jinge-material/lib/select/select.js");
/* harmony import */ var _optgroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./optgroup */ "../jinge-material/lib/select/optgroup.js");
/* harmony import */ var _option_tpl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./option.tpl.js */ "../jinge-material/lib/select/option.tpl.js");





class Option extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.value = attrs.value; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("value", f1_jg0402);const f2_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f2_jg0402);
    _jg0.isSelected = false;
    _jg0._isHelper = _jg0.__getContext(_select__WEBPACK_IMPORTED_MODULE_2__.HELPER_MODE);
    _jg0._hasSlot = false;
    _jg0._Field = _jg0.__getContext(_field__WEBPACK_IMPORTED_MODULE_1__.FIELD_PROVIDER);
    _jg0.Select = _jg0.__getContext(_select__WEBPACK_IMPORTED_MODULE_2__.SELECT_PROVIDER);
    _jg0.Group = _jg0.__getContext(_optgroup__WEBPACK_IMPORTED_MODULE_3__.OPTGROUP_PROVIDER);
    _jg0.Select._add(_jg0, _jg0._isHelper);
    _jg0._Field._updateFieldClass();
  }
  __render() {
    if (!this._isHelper) {
      return super.__render();
    }
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)("span");
    const ac = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
    if (ac && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(ac.default)) {
      this._hasSlot = true;
      const els = ac.default(this);
      el.appendChild(els.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(els) : els[0]);
    }
    this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
  }
  __beforeDestroy() {
    this.Select._remove(this, this._isHelper);
    this.Select = null;
    this._Field = null;
  }
  onCheck(isChecked) {
    if (this.disabled || this.Group?.disabled) {
      return;
    }
    this.Select._toggleChecked(this, isChecked);
  }
  stop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  onClick(evt) {
    evt.preventDefault();
    if (this.disabled || this.Group?.disabled) {
      return;
    }
    if (this.Select.multiple) {
      this.Select._toggleChecked(this, !this.isSelected);
    } else {
      this.Select._toggleSelected(this);
    }
  }
  getText() {
    if (this._isHelper) {
      return this._hasSlot ? this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes[0].textContent : this.value;
    } else {
      return this.__getRef("text").textContent;
    }
  }
}
Option.template = _option_tpl_js__WEBPACK_IMPORTED_MODULE_4__["default"];


//# sourceMappingURL=option.js.map

/***/ }),

/***/ "../jinge-material/lib/select/option.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/select/option.tpl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu */ "../jinge-material/lib/menu/index.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkbox */ "../jinge-material/lib/checkbox/index.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        listeners: {
          mousedown: {
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
                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                  slots: {
                    'default': function(component) {
                      return [
                      ...(() => {
                        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                            listeners: {
                              mousedown: {
                                fn: function(...args) {
                                  vm_0.stop(...args);
                                },
                                opts: null
                              },  change: {
                                fn: function(...args) {
                                  vm_0.onCheck(...args);
                                },
                                opts: null
                              }
                            },
                          },
                          value: undefined,
                          disabled: undefined,
                          class: `md-primary`
                        });
                        const fn_0 = () => {
                          attrs.value = vm_0.isSelected;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSelected"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_1 = () => {
                          attrs.disabled = vm_0.disabled;
                        };
                        fn_1();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox.create(attrs);
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
                attrs.expect = vm_0.Select?.multiple;
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["Select","multiple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "span",
                {
                  class: `md-list-item-text`
                },
                ...(() => {
                  const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
                  const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {
                    return [
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                      const fn_0 = () => {
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0.value}`);
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["value"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
              );
              vm_0.__setRef('text', el, component)
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      class: undefined,
      disabled: undefined
    });
    const fn_0 = () => {
      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)(vm_0.isSelected ? 'md-selected' : null);
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSelected"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.disabled = vm_0.disabled || (vm_0.Group && vm_0.Group?.disabled);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["Group"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["Group","disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _menu__WEBPACK_IMPORTED_MODULE_1__.MenuItem.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/select/select.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/select/select.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HELPER_MODE": () => (/* binding */ HELPER_MODE),
/* harmony export */   "SELECT_PROVIDER": () => (/* binding */ SELECT_PROVIDER),
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _field_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field/base */ "../jinge-material/lib/field/base.js");
/* harmony import */ var _select_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.tpl.js */ "../jinge-material/lib/select/select.tpl.js");



const SELECT_PROVIDER = Symbol("select_provider");
const HELPER_MODE = Symbol("helper_mode");
//! @jinge-component-parse 继承的 BaseField 无法被编译器识别，强制标记需要 parse。
class Select extends _field_base__WEBPACK_IMPORTED_MODULE_1__.BaseField {
  constructor(attrs) {
    super(attrs, "<md-select>");const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.id = attrs.id; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("id", f1_jg0402);const f2_jg0402 = () => {
    _jg0.name = attrs.name; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("name", f2_jg0402);const f3_jg0402 = () => {
    _jg0.multiple = !!attrs.multiple; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("multiple", f3_jg0402);const f4_jg0402 = () => {
    _jg0.dense = attrs.dense; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("dense", f4_jg0402);const f5_jg0402 = () => {
    _jg0.alignTrigger = attrs.alignTrigger; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("alignTrigger", f5_jg0402);const f6_jg0402 = () => {
    _jg0.fullwidth = attrs.fullWidth; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("fullWidth", f6_jg0402);
    _jg0.label = "";
    _jg0._items = [];
    _jg0._helper = {
      el: null,
      $dom: null,
      items: []
    };const f10_jg0402 = () => {
    _jg0.value = attrs.value; }; f10_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("value", f10_jg0402);
    _jg0.__setContext(SELECT_PROVIDER, _jg0);
    _jg0.showSelect = false;
  }
  get multiple() {
    return this._multiple;
  }
  set multiple(v) {
    if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(this._multiple)) {
      throw new Error("changing multiple attribute is not support.");
    }
    this._multiple = v;
  }
  get value() {
    return this._value;
  }
  set value(v) {
    if (this._value === v)
      return;
    this._value = v;
    this.__updateIfNeed(this._updateSelect);
  }
  __afterRender() {
    this._updateSelect();
  }
  _renderHelperOptions() {
    const $container = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)("div");
    const el = new jinge__WEBPACK_IMPORTED_MODULE_0__.Component((0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        slots: this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots
      }
    }));
    el.__setContext(HELPER_MODE, true);
    el.__renderToDOM($container, false);
    this._helper.$dom = $container;
    this._helper.el = el;
  }
  _destroyHelperOptions() {
    this._helper.el.__destroy(true);
    this._helper.el = null;
    this._helper.$dom = null;
  }
  _updateSelect() {
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(this._value) || this._value === null) {
      this._items.forEach((opt) => {
        opt.isSelected = false;
      });
      this.label = "";
      return;
    }
    if (!this.showSelect) {
      this._renderHelperOptions();
    }
    const items = this.showSelect ? this._items : this._helper.items;
    const label = [];
    items.forEach((opt) => {
      this._updateOptionSelected(opt);
      if (opt.isSelected) {
        label.push(opt.getText());
      }
    });
    this.label = label.join(", ");
    if (!this.showSelect) {
      this._destroyHelperOptions();
    }
  }
  _updateOptionSelected(option) {
    option.isSelected = this.multiple ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isArray)(this.value) && this.value.indexOf(option.value) >= 0 : this.value === option.value;
  }
  _add(option, isHelper) {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayPushIfNotExist)(isHelper ? this._helper.items : this._items, option);
    this._updateOptionSelected(option);
  }
  _remove(option, isHelper) {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(isHelper ? this._helper.items : this._items, option);
  }
  _toggleChecked(option, isChecked) {
    option.isSelected = isChecked;
    this.label = this._items.filter((opt) => {
      return opt.isSelected;
    }).map((opt) => {
      return opt.getText();
    }).join(", ");
    if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isArray)(this._value)) {
      return;
    }
    if (option.isSelected) {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayPushIfNotExist)(this._value, option.value);
    } else {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(this._value, option.value);
    }
    this.__notify("change", this._value);
  }
  _toggleSelected(option) {
    this._items.forEach((opt) => {
      opt.isSelected = opt === option;
    });
    if (this._value === option.value) {
      return this.closeSelect();
    }
    this._value = option.value;
    this.label = option.getText();
    this.__notify("change", this.value);
    this.closeSelect();
  }
  openSelect() {
    if (this.showSelect || this.disabled)
      return;
    this.showSelect = true;
  }
  closeSelect() {
    if (!this.showSelect)
      return;
    this.showSelect = false;
  }
  onFocus() {
    this.openSelect();
  }
}
Select.template = _select_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=select.js.map

/***/ }),

/***/ "../jinge-material/lib/select/select.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/select/select.tpl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_icons_lib_ArrowDropDown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material-icons/lib/ArrowDropDown.js */ "../jinge-material-icons/lib/ArrowDropDown.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu */ "../jinge-material/lib/menu/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input */ "../jinge-material/lib/input/index.js");




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
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: `md-field-container`
                },
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      listeners: {
                        focus: {
                          fn: function(...args) {
                            vm_0.onFocus(...args);
                          },
                          opts: {"prevent":true}
                        },  blur: {
                          fn: function(...args) {
                            vm_0.closeSelect(...args);
                          },
                          opts: {"prevent":true}
                        },  click: {
                          fn: function(...args) {
                            vm_0.openSelect(...args);
                          },
                          opts: null
                        },  keydown: {
                          fn: function(...args) {
                            vm_0.onKeyDown(...args);
                          },
                          opts: null
                        }
                      },
                    },
                    value: undefined,
                    disabled: undefined,
                    required: undefined,
                    placeholder: undefined,
                    class: `md-input md-select-value`,
                    readonly: true
                  });
                  const fn_0 = () => {
                    attrs.value = vm_0.label;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["label"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.disabled = vm_0.disabled;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_2 = () => {
                    attrs.required = vm_0.required;
                  };
                  fn_2();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["required"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_3 = () => {
                    attrs.placeholder = vm_0.placeholder;
                  };
                  fn_3();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["placeholder"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _input__WEBPACK_IMPORTED_MODULE_3__.Input.create(attrs);
                  vm_0.__setRef('input', el, component)
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      listeners: {
                        click: {
                          fn: function(...args) {
                            vm_0.openSelect(...args);
                          },
                          opts: null
                        }
                      },
                    },
                  });
                  const el = jinge_material_icons_lib_ArrowDropDown_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          },
          'content': function(component) {
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
      active: undefined,
      alignTrigger: undefined,
      fullWidth: undefined,
      dense: undefined,
      trigger: `none`,
      closeOnSelect: false
    });
    const fn_0 = () => {
      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)(`md-select${vm_0.disabled ? ' md-disabled' : ''}`);
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.active = vm_0.showSelect;
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["showSelect"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_2 = () => {
      attrs.alignTrigger = vm_0.alignTrigger;
    };
    fn_2();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["alignTrigger"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_3 = () => {
      attrs.fullWidth = vm_0.fullWidth;
    };
    fn_3();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["fullWidth"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_4 = () => {
      attrs.dense = vm_0.dense;
    };
    fn_4();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["dense"], fn_4, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _menu__WEBPACK_IMPORTED_MODULE_2__.Menu.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/select/style/index.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/select/style/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/select/style/index.css");




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
//# sourceMappingURL=src_pages_ui-elements_layout_index_ts.js.map