"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_ui-elements_typography_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-m-a1f9c3"],{

/***/ "./src/pages/ui-elements/typography/apis.ts":
/*!**************************************************!*\
  !*** ./src/pages/ui-elements/typography/apis.ts ***!
  \**************************************************/
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
        name: "md-headline-1",
        description: "对应于 Material Design 设计规范中的 Headline 1 样式。"
      },
      {
        name: "md-headline-2",
        description: "对应于 Material Design 设计规范中的 Headline 2 样式。"
      },
      {
        name: "md-headline-3",
        description: "对应于 Material Design 设计规范中的 Headline 3 样式。"
      },
      {
        name: "md-headline-4",
        description: "对应于 Material Design 设计规范中的 Headline 4 样式。"
      },
      {
        name: "md-headline-5",
        description: "对应于 Material Design 设计规范中的 Headline 5 样式。"
      },
      {
        name: "md-headline-6",
        description: "对应于 Material Design 设计规范中的 Headline 6 样式。"
      },
      {
        name: "md-subtitle-1",
        description: "对应于 Material Design 设计规范中的 Subtitle 1 样式。"
      },
      {
        name: "md-subtitle-2",
        description: "对应于 Material Design 设计规范中的 Subtitle 2 样式。"
      },
      {
        name: "md-body-1",
        description: "对应于 Material Design 设计规范中的 Body 1 样式。"
      },
      {
        name: "md-body-2",
        description: "对应于 Material Design 设计规范中的 Body 2 样式。"
      },
      {
        name: "md-caption",
        description: "对应于 Material Design 设计规范中的 Caption 样式。"
      }
    ]
  }
}));


/***/ }),

/***/ "./src/pages/ui-elements/typography/examples/basic.ts":
/*!************************************************************!*\
  !*** ./src/pages/ui-elements/typography/examples/basic.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleElevation)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _basic_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic.html */ "./src/pages/ui-elements/typography/examples/basic.html");


class ExampleElevation extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExampleElevation.template = _basic_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/ui-elements/typography/index.ts":
/*!***************************************************!*\
  !*** ./src/pages/ui-elements/typography/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTypography": () => (/* binding */ PageTypography)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/ui-elements/typography/index.html");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apis */ "./src/pages/ui-elements/typography/apis.ts");
/* harmony import */ var _examples_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/basic */ "./src/pages/ui-elements/typography/examples/basic.ts");
/* harmony import */ var _examples_basic_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/basic?example */ "./src/pages/ui-elements/typography/examples/basic.ts?example");






class PageTypography extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
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
      basic: {
        component: _examples_basic__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_basic_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      }
    };
  }
}
PageTypography.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/ui-elements/typography/examples/basic.html":
/*!**************************************************************!*\
  !*** ./src/pages/ui-elements/typography/examples/basic.html ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../jinge-router/lib/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var _basic_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic.scss */ "./src/pages/ui-elements/typography/examples/basic.scss");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _basic_scss__WEBPACK_IMPORTED_MODULE_3__["default"].typoDemo
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "h1",
        {
          class: `md-headline-1`
        },
        `Headline 1 - H1/Roboto/Light/96px`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "h2",
        {
          class: `md-headline-2`
        },
        `Headline 2 - H2/Roboto/Light/60px`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "h3",
        {
          class: `md-headline-3`
        },
        `Headline 3 - H3/Roboto/Regular/48px`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "h4",
        {
          class: `md-headline-4`
        },
        `Headline 4 - H4/Roboto/Regular/34px`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "h5",
        {
          class: `md-headline-5`
        },
        `Headline 5 - H5/Roboto/Regular/24px`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "h6",
        {
          class: `md-headline-6`
        },
        `Headline 6 - H6/Roboto/Medium/20px`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "p",
        {
          class: `md-subtitle-1`
        },
        `Subtitle 1 - Subtitle 1/Roboto/Regular/16px`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "p",
        {
          class: `md-subtitle-2`
        },
        `Subtitle 2 - Subtitle 2/Roboto/Medium/14px`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "p",
        {
          class: `md-body-1`
        },
        `Body 1 - Body 1/Roboto/Regular/16px`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "p",
        {
          class: `md-body-2`
        },
        `Body 2 - Body 2/Roboto/Regular/14px`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "span",
        {
          class: `md-caption`
        },
        `Caption - Caption/Roboto/Regular/12px`
      ),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<router-link>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
          },
          to: `ui.typography`,
          text: `Links`
        });
        const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
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
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Buttons`)
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
  })()
  ];
}

/***/ }),

/***/ "./src/pages/ui-elements/typography/index.html":
/*!*****************************************************!*\
  !*** ./src/pages/ui-elements/typography/index.html ***!
  \*****************************************************/
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
                  "h2",
                  `字体`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `Material Design 设计规范里的英文字体为 Roboto，推荐使用 Google Fonts 来加载字体资源。
                        你需要在 html 的头里，加入以下的代码：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeBlock>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                              "code",
                              `
                                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:300,400,500,700"/>
                                    `
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                    lang: `html`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeBlock.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `当没有加载 Roboto 字体文件，或遇到 Roboto 字体未涵盖的字符（比如中文字符），
                        会倒退到使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "a",
                    {
                      href: `https://ant.design/docs/spec/font`,
                      target: `_blank`
                    },
                    `Ant Desgin`
                  ),
                  `里指定的兼容性字体列表：`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeBlock>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                              "code",
                              `
                                    body {
                                      font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                                    }
                                    `
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                    lang: `sass`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeBlock.create(attrs);
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
                  `文字样式`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `Material Desgin 设计规范约束了可以使用的文字样式（包括字号、粗细和行距）。
                        Jinge Material 提供了这几类样式的 class 可供使用：`
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
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Typography`
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
                    title: `API`
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
      title: `版式`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "./src/pages/ui-elements/typography/examples/basic.scss":
/*!**************************************************************!*\
  !*** ./src/pages/ui-elements/typography/examples/basic.scss ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"typoDemo":"typo-demo--kZMvu"});
    if(true) {
      // 1659344204998
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/ui-elements/typography/examples/basic.ts?example":
/*!********************************************************************!*\
  !*** ./src/pages/ui-elements/typography/examples/basic.ts?example ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './basic.html';\n\nexport default class ExampleElevation extends Component {\n  static template = _tpl;\n}\n","sass":".typo-demo {\n  div > * {\n    margin: 0.5em 0;\n    display: block;\n  }\n}\n","html":"<!-- import style from './basic.scss' -->\n<div :class=\"style.typoDemo\">\n  <h1 class=\"md-headline-1\">Headline 1 - H1/Roboto/Light/96px</h1>\n  <h2 class=\"md-headline-2\">Headline 2 - H2/Roboto/Light/60px</h2>\n  <h3 class=\"md-headline-3\">Headline 3 - H3/Roboto/Regular/48px</h3>\n  <h4 class=\"md-headline-4\">Headline 4 - H4/Roboto/Regular/34px</h4>\n  <h5 class=\"md-headline-5\">Headline 5 - H5/Roboto/Regular/24px</h5>\n  <h6 class=\"md-headline-6\">Headline 6 - H6/Roboto/Medium/20px</h6>\n  <p class=\"md-subtitle-1\">Subtitle 1 - Subtitle 1/Roboto/Regular/16px</p>\n  <p class=\"md-subtitle-2\">Subtitle 2 - Subtitle 2/Roboto/Medium/14px</p>\n  <p class=\"md-body-1\">Body 1 - Body 1/Roboto/Regular/16px</p>\n  <p class=\"md-body-2\">Body 2 - Body 2/Roboto/Regular/14px</p>\n  <span class=\"md-caption\">Caption - Caption/Roboto/Regular/12px</span>\n  <router-link to=\"ui.typography\" text=\"Links\"/>\n  <md-button>Buttons</md-button>\n</div>"});

/***/ })

}]);
//# sourceMappingURL=src_pages_ui-elements_typography_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-m-a1f9c3.js.map