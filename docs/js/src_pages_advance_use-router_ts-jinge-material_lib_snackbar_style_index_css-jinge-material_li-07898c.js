"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_advance_use-router_ts-jinge-material_lib_snackbar_style_index_css-jinge-material_li-07898c"],{

/***/ "./src/pages/advance/use-router.ts":
/*!*****************************************!*\
  !*** ./src/pages/advance/use-router.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageUseRouter": () => (/* binding */ PageUseRouter)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _use_router_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-router.html */ "./src/pages/advance/use-router.html");


class PageUseRouter extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
PageUseRouter.template = _use_router_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/advance/use-router.html":
/*!*******************************************!*\
  !*** ./src/pages/advance/use-router.html ***!
  \*******************************************/
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
                  `路由整合`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `Jinge Material 组件库中，个别组件可以直接集成 `,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "a",
                    {
                      target: `_blank`,
                      href: `https://github.com/jinge-design/jinge-router`
                    },
                    `jinge-router`
                  ),
                  ` 的路由功能。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `这些组件目前包括：`,
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<router-link>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                      to: `components.button`,
                      text: `md-button`
                    });
                    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  `、`,
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<router-link>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                      to: `components.list`,
                      text: `md-list-item`
                    });
                    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  `、`,
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<router-link>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                      to: `components.bottom-bar`,
                      text: `md-bottom-bar`
                    });
                    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  ` 和 `,
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<router-link>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      },
                      to: `components.list`,
                      text: `md-tab`
                    });
                    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })(),
                  `。
                        在这些组件上，可以直接使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `router-link`
                  ),
                  `组件的 to、target 和 active 属性。详见这些组件的示例。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `需要说明的是，Jinge Material 组件库并不直接依赖 jinge-router，而是利用 jinge 框架的 Context 功能，在需要的时候通过`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `__getContext('router')`
                  ),
                  `来获取上下文中的路由器。也就是说，如果不需要使用上述组件的路由功能，则不需要安装
                        jinge-router 库。但如果使用了路由功能（为上述组件指定了 to 属性），但没有在整个项目中依赖 jinge-router，则会报错。`
                )
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      centered: true,
      title: `路由整合`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_2__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ })

}]);
//# sourceMappingURL=src_pages_advance_use-router_ts-jinge-material_lib_snackbar_style_index_css-jinge-material_li-07898c.js.map