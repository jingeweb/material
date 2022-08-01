"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_getting-started_ts-jinge-material_lib_snackbar_style_index_css-jinge-material_lib_t-2a91a3"],{

/***/ "./src/pages/getting-started.ts":
/*!**************************************!*\
  !*** ./src/pages/getting-started.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageGettingStarted": () => (/* binding */ PageGettingStarted)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _getting_started_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getting-started.html */ "./src/pages/getting-started.html");


class PageGettingStarted extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
PageGettingStarted.template = _getting_started_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/getting-started.html":
/*!****************************************!*\
  !*** ./src/pages/getting-started.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../jinge-router/lib/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./src/components/index.ts");



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
                  `Jinge Material`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `Jinge Material 是构建在 jinge 框架上的 Material Design 组件库，此处假设你已经知道如何搭建基本的 jinge 框架的项目，比如如何在 webpack 中配置和使用 jinge-loader。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<NoteBlock>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `jinge 框架还处于实验性的阶段，也还几乎没有文档。此处的 Jinge Material 组件库的文档也不保证有效。
                                因此，体验 jinge 框架和 Jinge Material 组件库的最佳方式是直接克隆 Jinge Material 的源码仓库。
                                这个仓库包含了所有组件的源码，以及一个涵盖所有组件的使用示例的完整应用（也就是你现在看到的这个网站）。`)
                          ];
                        }
                      }
                    },
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_2__.NoteBlock.create(attrs);
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
                  `安装`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `要使用 Jinge Material 组件库，需要先通过 npm 或 yarn 的方式安装：`
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
                                      npm install --save jinge-material jinge-material-icons
                                      yarn add jinge-material jinge-material-icons
                                    `
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                    lang: `bash`
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
                  `配置 Webpack`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `在 webpack.config.js 中需要配置使用 jinge 框架提供的模板和组件编译器，并注册相关的组件别名：`
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
                                      const { JingeComponentLoader, getJingeTemplateRuleWithAlias } = require('jinge-compiler');
                                      const { IconAlias } = require('jinge-material-icons/compiler');
                                      const { MaterialAlias } = require('jinge-material/compiler');
                                      module.exports = {
                                        module: {
                                          rules: [ {
                                            test: /\.ts$/,
                                            use: [
                                              JingeComponentLoader,
                                              {
                                                loader: 'esbuild-loader',
                                                options: {
                                                  loader: 'ts',
                                                  charset: 'utf8',
                                                },
                                              },
                                            ],
                                          },
                                          getJingeTemplateRuleWithAlias({
                                            ...MaterialAlias,
                                            ...IconAlias
                                          }) ]
                                        }
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
                    lang: `ts`,
                    height: `630`
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
                  `使用`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `在项目的入口文件中，需要指定组件库默认的语言，并同时引入主题包。`
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
                                      import 'jinge-material/style/themes/default.css';
                                      import zhCN from 'jinge-material/locales/zh_cn';
                                      import { setLocale } from 'jinge-material/config';
                                      setLocale(zhCN);
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
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `Jinge Material 组件库支持多种样式主题和多种语言，但没有默认的样式或语言。因此，只使用一种样式或语言也需要先主动注册资源。
                        如果项目需要支持多种主题和语言，参看`,
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<router-link>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `国际化`)
                            ];
                          }
                        }
                      },
                      to: `i18n`
                    });
                    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  `和`,
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<router-link>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `主题`)
                            ];
                          }
                        }
                      },
                      to: `theme`
                    });
                    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  `章节。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `在模板 html 文件中，可以直接使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-[component]`
                  ),
                  `这样格式的别名：`
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
                                      <div>
                                        <md-button>Click Me</md-button>
                                        <md-icon-home/>
                                      </div>
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
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `在 js/ts 文件中，可直接使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `Snackbar`
                  ),
                  `等组件：`
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
                                      import { Snackbar } from 'jinge-material/lib/snackbar';
                                      // 不推荐 import { Snackbar } from 'jinge-material' 的写法。
                                      Snackbar.show({
                                        message: '你好，世界！',
                                        duration: 1500,
                                      });
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
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `需要注意的是，我们推荐引用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `jinge-material/lib`
                  ),
                  `目录下的组件，
                        而不是直接从`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `jinge-material`
                  ),
                  `中引入，以达到按需引用的目标，加快构建速度。`
                )
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      title: undefined,
      centered: true
    });
    const fn_0 = () => {
      attrs.title = vm_0.快速上手;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["快速上手"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _components__WEBPACK_IMPORTED_MODULE_2__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ })

}]);
//# sourceMappingURL=src_pages_getting-started_ts-jinge-material_lib_snackbar_style_index_css-jinge-material_lib_t-2a91a3.js.map