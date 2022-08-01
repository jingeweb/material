"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_advance_i18n_ts-jinge-material_lib_snackbar_style_index_css-jinge-material_lib_tool-60df10"],{

/***/ "./src/pages/advance/i18n.ts":
/*!***********************************!*\
  !*** ./src/pages/advance/i18n.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageI18N": () => (/* binding */ PageI18N)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _i18n_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.html */ "./src/pages/advance/i18n.html");


class PageI18N extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
PageI18N.template = _i18n_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/advance/i18n.html":
/*!*************************************!*\
  !*** ./src/pages/advance/i18n.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./src/components/index.ts");


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
                  `国际化`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `Jinge Material 组件库没有直接依赖 jinge 框架内置的国际化方案，而是自己实现了一套国际化方案。
                        因为使用 Jinge Material 组件的项目不一定需要支持多语言。
                        接下来会分不同的情况，介绍如何使用不同语言的 Jinge Material 组件。`
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
                  `使用 npm 或 yarn 包`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "h3",
                  `项目只使用一种语言`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `如果只需要支持一种语言，只需要在项目的入口文件里，加入以下的代码：`
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
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeBlock.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `Jinge Material 组件库没有默认的语言，因此必须指定语言并引入语言资源。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "h3",
                  `项目使用多种语言`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `如果需要支持多种语言，推荐一次性将项目需要支持的语言资源全部引入。这样做的好处是切换语言时不再需要额外的通过 ajax 加载资源的逻辑，并且 Jinge Material 的语言资源也很小，不会引入带宽负担。加载的资源可以存放在某个 service 中，比如：`
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
                                    // app/service/locale.js
                                    import zh_cn from 'jinge-material/locales/zh_cn';
                                    import en from 'jinge-material/locales/en';
                                    // ... more locales to import
                                    import {
                                      setLocale
                                    } from 'jinge-material/config';
                                    const locales = {
                                      zh_cn,
                                      en
                                      // ... more locales
                                    }
                                    export function setCurrentLocale(localeName) {
                                      setLocale(locales[localeName]);
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
                    lang: `ts`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeBlock.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `然后将上述的 service 暴露给业务层，比如项目的入口文件设置默认语言，或者在某个按钮的点击事件中切换语言：`
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
                                    // app/entry.js
                                    import { setCurrentLocale } from './service/locale.js';
                                    setCurrentLocale('zh_cn');
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
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.CodeBlock.create(attrs);
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
      title: `国际化`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ })

}]);
//# sourceMappingURL=src_pages_advance_i18n_ts-jinge-material_lib_snackbar_style_index_css-jinge-material_lib_tool-60df10.js.map