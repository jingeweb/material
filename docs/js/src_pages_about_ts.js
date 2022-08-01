"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_about_ts"],{

/***/ "./src/components/page-container.ts":
/*!******************************************!*\
  !*** ./src/components/page-container.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContainer": () => (/* binding */ PageContainer)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/service/index.ts");
/* harmony import */ var _page_container_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-container.html */ "./src/components/page-container.html");



class PageContainer extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.title = attrs.title; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("title", f1_jg0402);const f2_jg0402 = () => {
    _jg0.centered = !!attrs.centered; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("centered", f2_jg0402);
  }
  get title() {
    return this._t;
  }
  set title(v) {
    if (this._t === v)
      return;
    this._t = v;
    _service__WEBPACK_IMPORTED_MODULE_1__.pageState.title = v;
  }
  __afterRender() {
    _service__WEBPACK_IMPORTED_MODULE_1__.pageState.isSplash = false;
  }
}
PageContainer.template = _page_container_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/about.ts":
/*!****************************!*\
  !*** ./src/pages/about.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAbout": () => (/* binding */ PageAbout)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _about_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.html */ "./src/pages/about.html");


class PageAbout extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
PageAbout.template = _about_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/components/page-container.html":
/*!********************************************!*\
  !*** ./src/components/page-container.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _page_container_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-container.scss */ "./src/components/page-container.scss");


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
            debugName: "attrs_of_<parameter>",
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, ([_page_container_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pageContainer, vm_0.centered && _page_container_scss__WEBPACK_IMPORTED_MODULE_1__["default"].centered]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["centered"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/pages/about.html":
/*!******************************!*\
  !*** ./src/pages/about.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.scss */ "./src/pages/about.scss");
/* harmony import */ var _components_page_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page-container */ "./src/components/page-container.ts");



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
                  "strong",
                  `构建在 Jinge 框架上的 Material Design 组件库`
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
                  `作者`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "div",
                  {
                    class: _about_scss__WEBPACK_IMPORTED_MODULE_1__["default"].authorCard
                  },
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "div",
                    {
                      class: _about_scss__WEBPACK_IMPORTED_MODULE_1__["default"].authorCardInfo
                    },
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "span",
                      `Yuhang Ge`
                    ),
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      "div",
                      {
                        class: _about_scss__WEBPACK_IMPORTED_MODULE_1__["default"].authorCardLinks
                      },
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "a",
                        {
                          href: `https://github.com/YuhangGe`,
                          target: `_blank`,
                          rel: `noopener`
                        },
                        `GitHub`
                      ),
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "a",
                        {
                          href: `mailto:abeyuhang@gmail.com`,
                          target: `_blank`,
                          rel: `noopener`
                        },
                        `Email`
                      )
                    )
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
                  class: `style.pageContainerSection`
                },
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "h2",
                  {
                    class: `md-title`
                  },
                  `项目介绍`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `在长期的业务项目研发中，我探索并开发了一个和主流 mvvm 框架的核心都不同的`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "a",
                    {
                      target: `_blank`,
                      href: `https://github.com/YuhangGe/jinge`
                    },
                    `Jinge`
                  ),
                  `框架。为了验证这个框架的能力，我决定在这个框架上开发一个 UI 组件库。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `考虑到主要是为了快速验证 Jinge 框架的能力，并在组件库开发的过程中同步地不断完善这个框架，而不想在组件本身的开发上耗费过多精力，我决定直接从`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "a",
                    {
                      target: `_blank`,
                      href: `https://vuematerial.io`
                    },
                    `Vue Material`
                  ),
                  `这个项目分叉（Fork）。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `但由于 Jinge 框架和 Vue 框架除了在功能和使用方式上都保持了现代 mvvm 框架的一致性外，核心几乎完全不同，因此从 Vue Material 项目分叉后，会需要把整个项目除了 scss 样式之外的代码几乎全部重写。因此我并没有采用在 Github 平台上直接分叉（Fork）该项目的方式，而是另起炉灶新开了 Jinge Material 仓库。所以更准确的说法是，Jinge Materail 项目移植（Port）自 Vue Material 项目。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `Jinge Material 在移植自 Vue Material 项目的过程中，同时也参考`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "a",
                    {
                      href: `https://ant.design`,
                      target: `_blank`
                    },
                    `Ant Design`
                  ),
                  `和`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "a",
                    {
                      href: `https://element.eleme.cn/`,
                      target: `_blank`
                    },
                    `Element`
                  ),
                  `等现代组件库，对项目的目录结构和各别组件的设计进行了重构。`
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
      attrs.title = vm_0.关于;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["关于"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _components_page_container__WEBPACK_IMPORTED_MODULE_2__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "./src/components/page-container.scss":
/*!********************************************!*\
  !*** ./src/components/page-container.scss ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"pageContainer":"page-container--gr0QO","centered":"centered--HqUid"});
    if(true) {
      // 1659344206232
      var cssReload = __webpack_require__(/*! ../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/about.scss":
/*!******************************!*\
  !*** ./src/pages/about.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"authorCard":"author-card--qTJVR","mdAvatar":"md-avatar--R92fx","authorCardInfo":"author-card-info--r75zP","authorCardLinks":"author-card-links--pQqSQ","aboutPatreon":"about-patreon--HX2kw"});
    if(true) {
      // 1659344204274
      var cssReload = __webpack_require__(/*! ../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ })

}]);
//# sourceMappingURL=src_pages_about_ts.js.map