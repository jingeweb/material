"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_components_content_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-mater-eb6a82"],{

/***/ "./src/pages/components/content/api.ts":
/*!*********************************************!*\
  !*** ./src/pages/components/content/api.ts ***!
  \*********************************************/
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
        name: "tag",
        type: "String",
        description: "渲染的 HTML 标签，用于创建不是默认的 div 标签。",
        defaults: "div"
      }
    ]
  }
}));


/***/ }),

/***/ "./src/pages/components/content/examples/paper-content.ts":
/*!****************************************************************!*\
  !*** ./src/pages/components/content/examples/paper-content.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExamplePaperContent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _paper_content_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paper-content.html */ "./src/pages/components/content/examples/paper-content.html");


class ExamplePaperContent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
ExamplePaperContent.template = _paper_content_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/content/index.ts":
/*!***********************************************!*\
  !*** ./src/pages/components/content/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContent": () => (/* binding */ PageContent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/components/content/index.html");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/pages/components/content/api.ts");
/* harmony import */ var _examples_paper_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/paper-content */ "./src/pages/components/content/examples/paper-content.ts");
/* harmony import */ var _examples_paper_content_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/paper-content?example */ "./src/pages/components/content/examples/paper-content.ts?example");






class PageContent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
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
      paperContent: {
        component: _examples_paper_content__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_paper_content_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      }
    };
  }
}
PageContent.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/content/examples/paper-content.html":
/*!******************************************************************!*\
  !*** ./src/pages/components/content/examples/paper-content.html ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/content */ "../jinge-material/lib/content/index.js");
/* harmony import */ var _paper_content_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-content.scss */ "./src/pages/components/content/examples/paper-content.scss");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _paper_content_scss__WEBPACK_IMPORTED_MODULE_2__["default"].demo
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-content>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Background`)
                ];
              }
            }
          },
        });
        const el = jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_1__.Content.create(attrs);
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
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Primary`)
                ];
              }
            }
          },
          class: `md-primary`
        });
        const el = jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_1__.Content.create(attrs);
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
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Accent`)
                ];
              }
            }
          },
          class: `md-accent`
        });
        const el = jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_1__.Content.create(attrs);
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

/***/ "./src/pages/components/content/index.html":
/*!*************************************************!*\
  !*** ./src/pages/components/content/index.html ***!
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
                  `包含任意信息的内容容器在 Material Design 规范中称为材料或材料片。`
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
                  `内容框`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Content`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.paperContent;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","paperContent"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                    title: `API - md-content`
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
      title: `内容框`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "./src/pages/components/content/examples/paper-content.scss":
/*!******************************************************************!*\
  !*** ./src/pages/components/content/examples/paper-content.scss ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--Niymz"});
    if(true) {
      // 1659344205422
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/content/examples/paper-content.ts?example":
/*!************************************************************************!*\
  !*** ./src/pages/components/content/examples/paper-content.ts?example ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Component } from 'jinge';\n\nimport _tpl from './paper-content.html';\n\nexport default class ExamplePaperContent extends Component {\n  static template = _tpl;\n}\n","sass":".demo {\n  :global(.md-content) {\n    width: 200px;\n    height: 200px;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n","html":"<!-- import style from './paper-content.scss' -->\n<div :class=\"style.demo\">\n  <md-content>Background</md-content>\n  <md-content class=\"md-primary\">Primary</md-content>\n  <md-content class=\"md-accent\">Accent</md-content>\n</div>"});

/***/ })

}]);
//# sourceMappingURL=src_pages_components_content_index_ts-jinge-material_lib_snackbar_style_index_css-jinge-mater-eb6a82.js.map