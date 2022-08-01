"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_advance_theme_ts-jinge-material_lib_snackbar_style_index_css-jinge-material_lib_too-1e561c"],{

/***/ "./src/pages/advance/theme.ts":
/*!************************************!*\
  !*** ./src/pages/advance/theme.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTheme": () => (/* binding */ PageTheme)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _theme_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.html */ "./src/pages/advance/theme.html");


class PageTheme extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
PageTheme.template = _theme_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/advance/theme.html":
/*!**************************************!*\
  !*** ./src/pages/advance/theme.html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../jinge-router/lib/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/components/index.ts");



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
                "section",
                {
                  class: `page-container-section`
                },
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "h2",
                  {
                    class: `md-headline`
                  },
                  `主题`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `Jinge Material 组件库`,
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<router-link>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `移植自 Vue Material`)
                            ];
                          }
                        }
                      },
                      to: `about`
                    });
                    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  `，但在多主题的支持上，进行了彻底地重构。主要包括两个方面：`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "ul",
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "li",
                    `完全依赖 CSS 变量（css3 variable）来实现颜色的指定和色板的切换。`
                  ),
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "li",
                    `完全遵循 Material Design 最新的设计规范中关于色板的规定，包括暗色主题。`
                  )
                )
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "section",
                {
                  class: `page-container-section`
                },
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "h2",
                  {
                    class: `md-title`
                  },
                  `预置主题`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `Jinge Material 提供了 4 个预先构建好的主题，包括蓝色（default）、紫色（purple）、暗色蓝（default-dark）和暗色紫（purple-dark）。
                        构建好的主题文件位于`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `themes`
                  ),
                  `目录下，使用时在 html 中或 js 中加载即可：`
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
                                    <link rel="stylesheet" href="node_modules/jinge-material/style/themes/default.min.css"/>
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
                  const el = _components__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
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
                                      import 'jinge-material/style/themes/default.css';
                                    `
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                    lang: `ts`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "section",
                {
                  class: `page-container-section`
                },
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "h2",
                  {
                    class: `md-title`
                  },
                  `切换主题`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `组件的颜色全部通过 CSS 变量引用色板中定义的颜色，因此切换主题只需要简单地替换色板文件即可。
                        从技术角度讲，替换色板本质上是替换(覆盖) CSS 变量的值。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `有多种方式可以实现替换（覆盖）CSS 变量的值。一种简单的方案是，在 html 中加载默认的色板时，
                        为`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `link`
                  ),
                  `元素赋予 id 属性，然后在切换主题的 js 逻辑里，通过这个 id 删除旧的`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `link`
                  ),
                  `元素，然后插入一个指向新主题色板的 css 文件的`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `link`
                  ),
                  `元素。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `当前网页的切换主题能力就是通过上述方式实现，可参看 `,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "a",
                    {
                      target: `_blank`,
                      href: `https://github.com/jingeweb/material/blob/main/src/service/theme.ts`
                    },
                    `jinge-material-site`
                  ),
                  ` 仓库的源码。`
                )
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "section",
                {
                  class: `page-container-section`
                },
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "h2",
                  {
                    class: `md-title`
                  },
                  `自定义主题`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `自定义主题可以通过加载自定义的主题文件（即色板文件）实现。色板里颜色的定义严格遵循 Material Design 的规范。
                        可在参考 themes 目录下构建好的色板 css 文件创建自定义色板文件，也可以参考下面的 scss 源码创建并构建色板文件：`
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
                                    @import 'jinge-material/style/themes/_elevation';
                                    :root {
                                      @include theme-elevation(false, #fff);
                                      --md-primary: #3f51b5;
                                      --md-secondary: #ff4081;
                                      --md-background: #fff;
                                      --md-surface: #fff;
                                      --md-surface-disabled: rgba(0, 0, 0, 0.12);
                                      --md-error: #b00020;
                                      --md-on-primary: #fff;
                                      --md-on-primary-medium: rgba(255, 255, 255, 0.74);
                                      --md-on-primary-disabled: rgba(255, 255, 255, 0.38);
                                      --md-on-secondary: #fff;
                                      --md-on-secondary-disabled: rgba(255, 255, 255, 0.38);
                                      --md-on-background: #000;
                                      --md-on-surface: rgba(0, 0, 0, 0.87);
                                      --md-on-surface-medium: rgba(0, 0, 0, 0.6);
                                      --md-on-surface-disabled: rgba(0, 0, 0, 0.38);
                                      --md-on-error: #fff;
                                      --md-outline: rgba(0, 0, 0, 0.12);
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
                  const el = _components__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.create(attrs);
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
      title: `主题`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_2__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ })

}]);
//# sourceMappingURL=src_pages_advance_theme_ts-jinge-material_lib_snackbar_style_index_css-jinge-material_lib_too-1e561c.js.map