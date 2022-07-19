"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_getting-started_ts"],{

/***/ "./src/components/api-item.ts":
/*!************************************!*\
  !*** ./src/components/api-item.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiItem": () => (/* binding */ ApiItem)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _api_item_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-item.html */ "./src/components/api-item.html");


class ApiItem extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._title = attrs.title;
    const slots = Object.keys(_jg0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots).filter((slotName) => slotName !== "default").map((slotName) => ({
      name: slotName,
      title: slotName.replace(/(?:^|\s)\S/g, (transformed) => transformed.toUpperCase()).replace(/-/g, " "),
      render: _jg0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots[slotName]
    }));
    _jg0._slots = slots;
    _jg0.currentSlot = slots.length > 0 ? slots[0].name : null;
  }
}
ApiItem.template = _api_item_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/components/api-table.ts":
/*!*************************************!*\
  !*** ./src/components/api-table.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiTable": () => (/* binding */ ApiTable)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _api_table_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-table.html */ "./src/components/api-table.html");


class ApiTable extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.headings = attrs.headings; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("headings", f1_jg0402);const f2_jg0402 = () => {
    _jg0.props = attrs.props; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("props", f2_jg0402);
  }
}
ApiTable.template = _api_table_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/components/code-block.ts":
/*!**************************************!*\
  !*** ./src/components/code-block.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeBlock": () => (/* binding */ CodeBlock)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/.pnpm/highlight.js@11.6.0/node_modules/highlight.js/es/core.js");
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/.pnpm/highlight.js@11.6.0/node_modules/highlight.js/es/languages/scss.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/.pnpm/highlight.js@11.6.0/node_modules/highlight.js/es/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/bash */ "./node_modules/.pnpm/highlight.js@11.6.0/node_modules/highlight.js/es/languages/bash.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/.pnpm/highlight.js@11.6.0/node_modules/highlight.js/es/languages/javascript.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clipboard */ "./node_modules/.pnpm/clipboard@2.0.11/node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jinge_material_lib_snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jinge-material/lib/snackbar */ "../jinge-material/lib/snackbar/index.js");
/* harmony import */ var _code_block_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./code-block.html */ "./src/components/code-block.html");
/* harmony import */ var _code_block_global_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./code-block.global.scss */ "./src/components/code-block.global.scss");










highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage("scss", highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_2__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage("xml", highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_3__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage("javascript", highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_5__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage("bash", highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_4__["default"]);
class CodeBlock extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._lang = attrs.lang;
    _jg0._code = attrs.code || "";const f3_jg0402 = () => {
    _jg0.height = attrs.height || 450; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("height", f3_jg0402);
    _jg0.showMessage = false;
    _jg0._$ce = null;
  }
  __afterRender() {
    this._$ce = this.__getRef("code");
    this.reindentSource();
    this.enableCopy();
    console.log(this._$ce.textContent);
  }
  reindentSource() {
  }
  enableCopy() {
    const $cb = this.__getRef("copy");
    if (!$cb)
      return;
    const clipboard = new (clipboard__WEBPACK_IMPORTED_MODULE_6___default())($cb.__firstDOM, {
      target: () => this._$ce
    });
    clipboard.on("success", (event) => {
      event.clearSelection();
      jinge_material_lib_snackbar__WEBPACK_IMPORTED_MODULE_7__.Snackbar.show({
        message: "代码已复制！",
        duration: 1500
      });
    });
  }
}
CodeBlock.template = _code_block_html__WEBPACK_IMPORTED_MODULE_8__["default"];


/***/ }),

/***/ "./src/components/code-example.ts":
/*!****************************************!*\
  !*** ./src/components/code-example.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeExample": () => (/* binding */ CodeExample)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _code_example_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-example.html */ "./src/components/code-example.html");


class CodeExample extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._title = attrs.title;
    _jg0._example = attrs.example;
    _jg0._label = attrs.label || "jinge";
    _jg0.tab = "demo";
  }
}
CodeExample.template = _code_example_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiItem": () => (/* reexport safe */ _api_item__WEBPACK_IMPORTED_MODULE_3__.ApiItem),
/* harmony export */   "ApiTable": () => (/* reexport safe */ _api_table__WEBPACK_IMPORTED_MODULE_4__.ApiTable),
/* harmony export */   "CodeBlock": () => (/* reexport safe */ _code_block__WEBPACK_IMPORTED_MODULE_2__.CodeBlock),
/* harmony export */   "CodeExample": () => (/* reexport safe */ _code_example__WEBPACK_IMPORTED_MODULE_1__.CodeExample),
/* harmony export */   "NoteBlock": () => (/* reexport safe */ _note_block__WEBPACK_IMPORTED_MODULE_5__.NoteBlock),
/* harmony export */   "PageContainer": () => (/* reexport safe */ _page_container__WEBPACK_IMPORTED_MODULE_0__.PageContainer)
/* harmony export */ });
/* harmony import */ var _page_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-container */ "./src/components/page-container.ts");
/* harmony import */ var _code_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-example */ "./src/components/code-example.ts");
/* harmony import */ var _code_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-block */ "./src/components/code-block.ts");
/* harmony import */ var _api_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-item */ "./src/components/api-item.ts");
/* harmony import */ var _api_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-table */ "./src/components/api-table.ts");
/* harmony import */ var _note_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-block */ "./src/components/note-block.ts");








/***/ }),

/***/ "./src/components/note-block.ts":
/*!**************************************!*\
  !*** ./src/components/note-block.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteBlock": () => (/* binding */ NoteBlock)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _note_block_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-block.html */ "./src/components/note-block.html");


class NoteBlock extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.alert = attrs.alert; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("alert", f1_jg0402);const f2_jg0402 = () => {
    _jg0.warning = attrs.warning; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("warning", f2_jg0402);const f3_jg0402 = () => {
    _jg0.tip = attrs.tip; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("tip", f3_jg0402);
  }
}
NoteBlock.template = _note_block_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

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
/* harmony import */ var _page_container_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-container.global.scss */ "./src/components/page-container.global.scss");
/* harmony import */ var _page_container_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-container.html */ "./src/components/page-container.html");




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
PageContainer.template = _page_container_html__WEBPACK_IMPORTED_MODULE_3__["default"];


/***/ }),

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

/***/ "./src/components/api-item.html":
/*!**************************************!*\
  !*** ./src/components/api-item.html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var _api_item_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-item.scss */ "./src/components/api-item.scss");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: `api-item`
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "h3",
        (() => {
          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
          const fn_0 = () => {
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0._title}`);
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_title"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          return el;
        })()
      ),
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
      })(),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: _api_item_scss__WEBPACK_IMPORTED_MODULE_2__["default"].apiItemNavigation
        },
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<for>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  const vm_1 = component;
                  return [
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        debugName: "attrs_of_<md-button>",
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        listeners: {
                          click: {
                            fn: function(...args) {
                              vm_0.currentSlot = vm_1.each.name
                            },
                            opts: null
                          }
                        },
                        slots: {
                          'default': function(component) {
                            return [
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                              const fn_0 = () => {
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_1.each?.title }`);
                              };
                              fn_0();
                              vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","title"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                              return el;
                            })()
                            ];
                          }
                        }
                      },
                      class: undefined
                    });
                    const fn_0 = () => {
                      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)(`${ vm_0.currentSlot === vm_1.each?.name ? 'md-primary': '' }`);
                    };
                    fn_0();
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["currentSlot"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                    vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                    const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                  ];
                }
              }
            },
            loop: undefined
          });
          const fn_0 = () => {
            attrs.loop = vm_0._slots;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_slots"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<for>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                const vm_1 = component;
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<if>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `api-item-content`
                              },
                              ...(() => {
                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                    debugName: "attrs_of_<dynamic>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                  },
                                  render: undefined
                                });
                                const fn_0 = () => {
                                  attrs.render = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({_renderFn: vm_1.each?.render});
                                };
                                fn_0();
                                vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","render"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                const el = jinge__WEBPACK_IMPORTED_MODULE_0__.DynamicRenderComponent.create(attrs);
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
                    expect: undefined
                  });
                  const fn_0 = () => {
                    attrs.expect = vm_0.currentSlot === vm_1.each?.name;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["currentSlot"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          loop: undefined
        });
        const fn_0 = () => {
          attrs.loop = vm_0._slots;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_slots"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
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

/***/ "./src/components/api-table.html":
/*!***************************************!*\
  !*** ./src/components/api-table.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _api_table_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-table.scss */ "./src/components/api-table.scss");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _api_table_scss__WEBPACK_IMPORTED_MODULE_1__["default"].apiTable
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "table",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "tr",
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<for>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                slots: {
                  'default': function(component) {
                    const vm_1 = component;
                    return [
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "th",
                        (() => {
                          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                          const fn_0 = () => {
                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_1.each }`);
                          };
                          fn_0();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
              loop: undefined
            });
            const fn_0 = () => {
              attrs.loop = vm_0.headings;
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })()
        ),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<for>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
                  const vm_1 = component;
                  return [
                  (() => {
                    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "tr",
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "td",
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            "span",
                            {
                              class: _api_table_scss__WEBPACK_IMPORTED_MODULE_1__["default"].propName
                            },
                            ...(() => {
                              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                  debugName: "attrs_of_<bind-html>",
                                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                },
                                content: undefined
                              });
                              const fn_0 = () => {
                                attrs.content = vm_1.each?.name;
                              };
                              fn_0();
                              vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                              const el = jinge__WEBPACK_IMPORTED_MODULE_0__.BindHtmlComponent.create(attrs);
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                            })()
                          ),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<if>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                        "small",
                                        {
                                          class: _api_table_scss__WEBPACK_IMPORTED_MODULE_1__["default"].propType
                                        },
                                        (() => {
                                          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                          const fn_0 = () => {
                                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_1.each?.type }`);
                                          };
                                          fn_0();
                                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","type"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              attrs.expect = vm_1.each?.type;
                            };
                            fn_0();
                            vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","type"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                        );
                        const fn_0 = () => {
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, ([_api_table_scss__WEBPACK_IMPORTED_MODULE_1__["default"].prop, vm_1.each?.offset && 'offset']));
                        };
                        fn_0();
                        vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","offset"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        return el;
                      })(),
                      ...(() => {
                        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                            debugName: "attrs_of_<if>",
                            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                            slots: {
                              'default': function(component) {
                                return [
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                    "td",
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<bind-html>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                        },
                                        content: undefined
                                      });
                                      const fn_0 = () => {
                                        attrs.content = vm_1.each?.description;
                                      };
                                      fn_0();
                                      vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","description"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                      const el = jinge__WEBPACK_IMPORTED_MODULE_0__.BindHtmlComponent.create(attrs);
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
                          expect: undefined
                        });
                        const fn_0 = () => {
                          attrs.expect = vm_1.each?.description;
                        };
                        fn_0();
                        vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","description"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })(),
                      ...(() => {
                        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                            debugName: "attrs_of_<if>",
                            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                            slots: {
                              'default': function(component) {
                                return [
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    "td",
                                    {
                                      class: _api_table_scss__WEBPACK_IMPORTED_MODULE_1__["default"].slotOptions
                                    },
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<for>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          slots: {
                                            'default': function(component) {
                                              const vm_2 = component;
                                              return [
                                              (() => {
                                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                                  "p",
                                                  {
                                                    class: _api_table_scss__WEBPACK_IMPORTED_MODULE_1__["default"].option
                                                  },
                                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                                    "code",
                                                    (() => {
                                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                                      const fn_0 = () => {
                                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_2.each?.name }: `);
                                                      };
                                                      fn_0();
                                                      vm_2[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                      return el;
                                                    })()
                                                  ),
                                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                                    "span",
                                                    ...(() => {
                                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                                          debugName: "attrs_of_<bind-html>",
                                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                        },
                                                        content: undefined
                                                      });
                                                      const fn_0 = () => {
                                                        attrs.content = vm_2.each?.description;
                                                      };
                                                      fn_0();
                                                      vm_2[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","description"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                      const el = jinge__WEBPACK_IMPORTED_MODULE_0__.BindHtmlComponent.create(attrs);
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
                                          }
                                        },
                                        loop: undefined,
                                        _key: `index`
                                      });
                                      const fn_0 = () => {
                                        attrs.loop = vm_1.each?.options;
                                      };
                                      fn_0();
                                      vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","options"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                      const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })(),
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<if>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          slots: {
                                            'default': function(component) {
                                              return [
                                              (() => {
                                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                                  "div",
                                                  {
                                                    class: _api_table_scss__WEBPACK_IMPORTED_MODULE_1__["default"].usage
                                                  },
                                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                                    "strong",
                                                    `Usage:`
                                                  ),
                                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                                    "p",
                                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                                      "code",
                                                      (() => {
                                                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                                        const fn_0 = () => {
                                                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.option?.usage }`);
                                                        };
                                                        fn_0();
                                                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["option","usage"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                        return el;
                                                      })()
                                                    )
                                                  )
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
                                        attrs.expect = vm_0.usage;
                                      };
                                      fn_0();
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["usage"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                      const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
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
                          expect: undefined
                        });
                        const fn_0 = () => {
                          attrs.expect = vm_1.each?.options;
                        };
                        fn_0();
                        vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","options"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })(),
                      ...(() => {
                        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                            debugName: "attrs_of_<if>",
                            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                            slots: {
                              'default': function(component) {
                                return [
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                    "td",
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                      "code",
                                      ...(() => {
                                        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                            debugName: "attrs_of_<bind-html>",
                                            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          },
                                          content: undefined
                                        });
                                        const fn_0 = () => {
                                          attrs.content = vm_1.each?.defaults || vm_1.each?.value || vm_1.each?.example;
                                        };
                                        fn_0();
                                        vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","defaults"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                        vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","value"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                        vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","example"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.BindHtmlComponent.create(attrs);
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
                            }
                          },
                          expect: undefined
                        });
                        const fn_0 = () => {
                          attrs.expect = vm_1.each?.defaults || vm_1.each?.value || vm_1.each?.example;
                        };
                        fn_0();
                        vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","defaults"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","value"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","example"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
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
            loop: undefined
          });
          const fn_0 = () => {
            attrs.loop = vm_0.props;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["props"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
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

/***/ "./src/components/code-block.html":
/*!****************************************!*\
  !*** ./src/components/code-block.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var _code_block_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-block.scss */ "./src/components/code-block.scss");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _code_block_scss__WEBPACK_IMPORTED_MODULE_2__["default"].codeBlock
      },
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: _code_block_scss__WEBPACK_IMPORTED_MODULE_2__["default"].codeBlockWrapper
          },
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "pre",
            `
                  `,
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "code",
                `
                        `,
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
                })(),
                `
                      `
              );
              const fn_0 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, vm_0._lang);
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_lang"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              vm_0.__setRef('code', el, component)
              return el;
            })(),
            `
                `
          )
        );
        const fn_0 = () => {
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, `max-height: ${vm_0.height}px;`);
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["height"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        return el;
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-button>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `复制`)
                ];
              }
            }
          },
          class: `md-raised md-accent md-dense`
        });
        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
        vm_0.__setRef('copy', el, component)
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

/***/ "./src/components/code-example.html":
/*!******************************************!*\
  !*** ./src/components/code-example.html ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/toolbar */ "../jinge-material/lib/toolbar/index.js");
/* harmony import */ var jinge_material_lib_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/tooltip */ "../jinge-material/lib/tooltip/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Code_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/Code.js */ "../jinge-material-icons/lib/Code.js");
/* harmony import */ var jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material/lib/content */ "../jinge-material/lib/content/index.js");
/* harmony import */ var _code_example_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-example.scss */ "./src/components/code-example.scss");
/* harmony import */ var _code_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code-block */ "./src/components/code-block.ts");









/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _code_example_scss__WEBPACK_IMPORTED_MODULE_6__["default"].codeExample
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-toolbar>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "span",
                    {
                      class: `md-title`
                    },
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                      const fn_0 = () => {
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0._title}`);
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_title"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      return el;
                    })()
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<if>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-tooltip>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-button>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          listeners: {
                                            click: {
                                              fn: function(...args) {
                                                vm_0.tab = 'demo'
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
                                                    debugName: "attrs_of_<md-icon-code>",
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                  },
                                                });
                                                const el = jinge_material_icons_lib_Code_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                        class: `md-icon-button md-dense md-on-primary`
                                      });
                                      const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__.Button.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                              title: `显示示例`
                            });
                            const el = jinge_material_lib_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip.create(attrs);
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
                    attrs.expect = vm_0.tab !== 'demo';
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["tab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-tooltip>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-button>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                listeners: {
                                  click: {
                                    fn: function(...args) {
                                      vm_0.tab = 'js'
                                    },
                                    opts: null
                                  }
                                },
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `js`)
                                    ];
                                  }
                                }
                              },
                              class: `md-icon-button md-dense md-on-primary`
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `显示 javascript 代码`
                  });
                  const el = jinge_material_lib_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-tooltip>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-button>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                listeners: {
                                  click: {
                                    fn: function(...args) {
                                      vm_0.tab = 'html'
                                    },
                                    opts: null
                                  }
                                },
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `html`)
                                    ];
                                  }
                                }
                              },
                              class: `md-icon-button md-dense md-on-primary`
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `显示 html 代码`
                  });
                  const el = jinge_material_lib_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<if>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-tooltip>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-button>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          listeners: {
                                            click: {
                                              fn: function(...args) {
                                                vm_0.tab = 'scss'
                                              },
                                              opts: null
                                            }
                                          },
                                          slots: {
                                            'default': function(component) {
                                              return [
                                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `scss`)
                                              ];
                                            }
                                          }
                                        },
                                        class: `md-icon-button md-dense md-on-primary`
                                      });
                                      const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__.Button.create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                              title: `显示 scss 代码`
                            });
                            const el = jinge_material_lib_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip.create(attrs);
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
                    attrs.expect = vm_0._example?.source?.scss;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_example","source","scss"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          class: `md-dense md-primary`,
          elevation: `0`
        });
        const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<switch>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'demo': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-content>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: _code_example_scss__WEBPACK_IMPORTED_MODULE_6__["default"].demoContent
                              },
                              ...(() => {
                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                    debugName: "attrs_of_<dynamic>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                  },
                                  render: undefined
                                });
                                const fn_0 = () => {
                                  attrs.render = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({_component: vm_0._example?.component});
                                };
                                fn_0();
                                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_example","component"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                const el = jinge__WEBPACK_IMPORTED_MODULE_0__.DynamicRenderComponent.create(attrs);
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
                    class: _code_example_scss__WEBPACK_IMPORTED_MODULE_6__["default"].demo
                  });
                  const el = jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_5__.Content.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              },
              'html': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeBlock>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    code: undefined,
                    lang: `xml`
                  });
                  const fn_0 = () => {
                    attrs.code = vm_0._example?.source?.html;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_example","source","html"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _code_block__WEBPACK_IMPORTED_MODULE_7__.CodeBlock.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              },
              'js': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeBlock>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    code: undefined,
                    lang: `javascript`
                  });
                  const fn_0 = () => {
                    attrs.code = vm_0._example?.source?.js;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_example","source","js"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _code_block__WEBPACK_IMPORTED_MODULE_7__.CodeBlock.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              },
              'scss': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeBlock>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    code: undefined,
                    lang: `scss`
                  });
                  const fn_0 = () => {
                    attrs.code = vm_0._example?.source?.scss;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_example","source","scss"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _code_block__WEBPACK_IMPORTED_MODULE_7__.CodeBlock.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          test: undefined
        });
        const fn_0 = () => {
          attrs.test = vm_0.tab;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["tab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent.create(attrs);
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

/***/ "./src/components/note-block.html":
/*!****************************************!*\
  !*** ./src/components/note-block.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _note_block_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-block.scss */ "./src/components/note-block.scss");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-state-overlay`
        },
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-state-content`
        },
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
      )
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-state-container md-selected', _note_block_scss__WEBPACK_IMPORTED_MODULE_1__["default"].noteBlock, { alert: vm_0.alert, warning: vm_0.warning, tip: vm_0.tip}]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["alert"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["warning"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["tip"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['page-container', vm_0.centered && 'centered']));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["centered"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components/index.ts");


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
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.NoteBlock.create(attrs);
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
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `$ npm install --save jinge-material jinge-material-icons
                                $ yarn add jinge-material jinge-material-icons`)
                          ];
                        }
                      }
                    },
                    lang: `bash`
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
                "section",
                {
                  class: `page-container-section`
                },
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "h2",
                  {
                    class: `md-title`
                  },
                  `按需加载样式`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `上述的使用方式，都会完整引入全部的样式文件。你可以通过直接使用 Jinge Material 源码的形式，来按需加载样式和组件。
                        你可以克隆这个脚手架项目，里面有完整的 webpack 的配置文件示例，此处不再赘述。`
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
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material-icons/lib/Code.js":
/*!*******************************************!*\
  !*** ../jinge-material-icons/lib/Code.js ***!
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
          d: `M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z`
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

/***/ "../jinge-material/lib/snackbar/style/index.css":
/*!******************************************************!*\
  !*** ../jinge-material/lib/snackbar/style/index.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/tooltip/style/index.css":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/tooltip/style/index.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/api-item.scss":
/*!**************************************!*\
  !*** ./src/components/api-item.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"apiItemNavigation":"api-item-navigation--RSL2X"});

/***/ }),

/***/ "./src/components/api-table.scss":
/*!***************************************!*\
  !*** ./src/components/api-table.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"apiTable":"api-table--zYP4z","offset":"offset--wHPuG","prop":"prop--zOhtN","propName":"prop-name--v6FfT","propType":"prop-type--j6LdS","slotOptions":"slot-options--dZmAF","description":"description--QurX_"});

/***/ }),

/***/ "./src/components/code-block.global.scss":
/*!***********************************************!*\
  !*** ./src/components/code-block.global.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/code-block.scss":
/*!****************************************!*\
  !*** ./src/components/code-block.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"codeBlock":"code-block--Ay8v5","mdButton":"md-button--eCgOU","codeBlockWrapper":"code-block-wrapper--XwzM1"});

/***/ }),

/***/ "./src/components/code-example.scss":
/*!******************************************!*\
  !*** ./src/components/code-example.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"codeExample":"code-example--QT3oy","nav":"nav--TeR_B","demo":"demo--LNvEB","buttonTheme":"button-theme--mb4uP","blockLeaveActive":"block-leave-active--OeQdJ","blockEnterActive":"block-enter-active--FcMBV","blockEnterTo":"block-enter-to--JL1eb"});

/***/ }),

/***/ "./src/components/note-block.scss":
/*!****************************************!*\
  !*** ./src/components/note-block.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"noteBlock":"note-block--r2A7a","alert":"alert--tGgFI","tip":"tip--umu7r","warning":"warning--xn4r3"});

/***/ }),

/***/ "./src/components/page-container.global.scss":
/*!***************************************************!*\
  !*** ./src/components/page-container.global.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/snackbar/index.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/snackbar/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Snackbar": () => (/* binding */ Snackbar)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/snackbar/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queue */ "../jinge-material/lib/snackbar/queue.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/snackbar/index.tpl.js");



const queueManager = new _queue__WEBPACK_IMPORTED_MODULE_2__.SnackbarQueueManager();
const _Snackbar = class extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);
    this.position = attrs.position || "center";
    this.active = attrs.active;
    this.duration = Number(attrs.duration || 4e3);
    this.message = attrs.message || "";
    this.isShown = false;
    this.__portalDisabled = attrs.__portalDisabled;
  }
  static show(options) {
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_1__.isString)(options)) {
      options = {
        message: options
      };
    }
    const el = _Snackbar.create((0,jinge__WEBPACK_IMPORTED_MODULE_1__.attrs)(Object.assign({
      __portalDisabled: true,
      active: false
    }, options || {})));
    el.__renderToDOM(document.body, false);
    (0,jinge__WEBPACK_IMPORTED_MODULE_1__.setImmediate)(() => {
      el.active = true;
    });
  }
  get active() {
    return this._active;
  }
  set active(v) {
    if (this._active === v)
      return;
    this._active = v;
    if (v) {
      queueManager.add(this);
    } else {
      queueManager.remove(this);
    }
  }
  open() {
    if (this.active)
      return;
    this.active = true;
  }
  close() {
    if (!this.active)
      return;
    this.active = false;
  }
  _onOpen() {
    this.isShown = true;
    this.__notify("update.active", true);
    this.__notify("opened");
  }
  _onClose() {
    this.isShown = false;
    this.__notify("update.active", false);
    this.__notify("closed");
  }
};
let Snackbar = _Snackbar;
Snackbar.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/snackbar/index.tpl.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/snackbar/index.tpl.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../portal */ "../jinge-material/lib/portal/index.js");



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
            ...(() => {
              const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                  slots: {
                    'default': function(component) {
                      return [
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "div",
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            "div",
                            {
                              class: `md-snackbar-content`
                            },
                            ...(() => {
                              const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
                              const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {
                                return [
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                  const fn_0 = () => {
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0.message}`);
                                  };
                                  fn_0();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["message"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                          )
                        );
                        const fn_0 = () => {
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, `md-snackbar md-position-${vm_0.position}${vm_0.className ? ' ' + vm_0.className : ''}`);
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["position"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["className"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })()
                      ];
                    }
                  }
                },
                expect: undefined,
                transition: `md-snackbar`
              });
              const fn_0 = () => {
                attrs.expect = vm_0.isShown;
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isShown"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })()
            ];
          }
        }
      },
      __disabled: undefined
    });
    const fn_0 = () => {
      attrs.__disabled = vm_0.__portalDisabled;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["__portalDisabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _portal__WEBPACK_IMPORTED_MODULE_1__.Portal.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/snackbar/queue.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/snackbar/queue.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarQueueManager": () => (/* binding */ SnackbarQueueManager)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

class SnackbarQueueManager {
  constructor() {
    this._queue = [];
    this._snack = null;
    this._ntm = null;
    this._nextHandler = this._next.bind(this);
  }
  _schedule() {
    if (this._queue.length === 0 || this._snack) {
      return;
    }
    this._snack = this._queue.shift();
    this._snack._onOpen();
    if (this._snack.duration > 0 && this._snack.duration < Infinity) {
      this._ntm = window.setTimeout(this._nextHandler, this._snack.duration);
    }
  }
  _next() {
    this._snack._onClose();
    this._ntm = null;
    this._snack = null;
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => this._schedule());
  }
  add(snack) {
    if (this._snack === snack || this._queue.indexOf(snack) >= 0) {
      return;
    }
    this._queue.push(snack);
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => this._schedule());
  }
  remove(snack) {
    if (this._snack === snack) {
      if (this._ntm)
        clearTimeout(this._ntm);
      this._next();
    } else {
      const idx = this._queue.indexOf(snack);
      if (idx >= 0)
        this._queue.splice(idx, 1);
    }
  }
}


//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "../jinge-material/lib/snackbar/style/index.js":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/snackbar/style/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/snackbar/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/tooltip/index.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/tooltip/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tooltip": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/tooltip/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/tooltip/index.tpl.js");


class Tooltip extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;const f1_jg0402 = () => {
    _jg0.title = attrs.title || ""; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("title", f1_jg0402);const f2_jg0402 = () => {
    _jg0.placement = attrs.placement || "bottom"; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("placement", f2_jg0402);const f3_jg0402 = () => {
    _jg0.active = attrs.active; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("active", f3_jg0402);const f4_jg0402 = () => {
    _jg0.trigger = attrs.trigger || "hover"; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("trigger", f4_jg0402);const f5_jg0402 = () => {
    _jg0.delay = attrs.delay || 150; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("delay", f5_jg0402);const f6_jg0402 = () => {
    _jg0.offset = attrs.offset || 16; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("offset", f6_jg0402);const f7_jg0402 = () => {
    _jg0.closeWhenOutsideClick = attrs.closeWhenOutsideClick !== false; }; f7_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("closeWhenOutsideClick", f7_jg0402);const f8_jg0402 = () => {
    _jg0.transition = attrs.transition; }; f8_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("transition", f8_jg0402);
    _jg0._popperOptions = attrs._popperOptions;
  }
  onUpdateActive(isActive) {
    this.__notify("update.active", isActive);
  }
}
Tooltip.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/tooltip/index.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/tooltip/index.tpl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popover */ "../jinge-material/lib/popover/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        listeners: {
          "update.active": {
            fn: function(...args) {
              vm_0.onUpdateActive(...args);
            },
            opts: null
          }
        },
        slots: {
          'default': function(component) {
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
          },
          'content': function(component) {
            return [
            ...(() => {
              const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
              const renderFn = __ac && __ac['content'] ? __ac['content'] :   function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                  const fn_0 = () => {
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0.title}`);
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["title"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })()
            ];
          }
        }
      },
      trigger: undefined,
      active: undefined,
      transition: undefined,
      placement: undefined,
      offset: undefined,
      delay: undefined,
      closeWhenOutsideClidk: undefined,
      class: undefined,
      _popperOptions: undefined
    });
    const fn_0 = () => {
      attrs.trigger = vm_0.trigger;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["trigger"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.active = vm_0.active;
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_2 = () => {
      attrs.transition = vm_0.transition;
    };
    fn_2();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["transition"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_3 = () => {
      attrs.placement = vm_0.placement;
    };
    fn_3();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["placement"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_4 = () => {
      attrs.offset = vm_0.offset;
    };
    fn_4();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["offset"], fn_4, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_5 = () => {
      attrs.delay = vm_0.delay;
    };
    fn_5();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["delay"], fn_5, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_6 = () => {
      attrs.closeWhenOutsideClidk = vm_0.closeWhenOutsideClick;
    };
    fn_6();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["closeWhenOutsideClick"], fn_6, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_7 = () => {
      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)((0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(['md-tooltip', vm_0.class]));
    };
    fn_7();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_7, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_8 = () => {
      attrs._popperOptions = vm_0._popperOptions;
    };
    fn_8();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_popperOptions"], fn_8, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _popover__WEBPACK_IMPORTED_MODULE_1__.Popover.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/tooltip/style/index.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/tooltip/style/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/tooltip/style/index.css");




/***/ })

}]);
//# sourceMappingURL=90fa4132909700e4ccd2.js.map