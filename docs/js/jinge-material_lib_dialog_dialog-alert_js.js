"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["jinge-material_lib_dialog_dialog-alert_js"],{

/***/ "../jinge-material/lib/dialog/dialog-actions.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-actions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogActions": () => (/* binding */ DialogActions)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _dialog_actions_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-actions.tpl.js */ "../jinge-material/lib/dialog/dialog-actions.tpl.js");


class DialogActions extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
DialogActions.template = _dialog_actions_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=dialog-actions.js.map

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-actions.tpl.js":
/*!**********************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-actions.tpl.js ***!
  \**********************************************************/
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: `md-dialog-actions`
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

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-alert.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-alert.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogAlert": () => (/* binding */ DialogAlert)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_config */ "../jinge-material/lib/_config/index.js");
/* harmony import */ var _dialog_alert_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-alert.tpl.js */ "../jinge-material/lib/dialog/dialog-alert.tpl.js");



function showDialogAlert(opts, closeCallback) {
  if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(opts)) {
    opts = {
      title: opts
    };
  }
  const el = DialogAlert.create((0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
    __portalDisabled: true,
    active: false,
    ...opts
  }));
  el.__on("update.active", (active) => {
    if (active)
      return;
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(closeCallback) && closeCallback() === false) {
      return;
    }
    el.__destroy();
  });
  el.__renderToDOM(document.body, false);
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
    el.active = true;
  });
}
class DialogAlert extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs2) {
    super(attrs2);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.__portalDisabled = attrs2.__portalDisabled;const f2_jg0402 = () => {
    _jg0.active = attrs2.active; }; f2_jg0402(); attrs2[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f2_jg0402);const f3_jg0402 = () => {
    _jg0.title = attrs2.title; }; f3_jg0402(); attrs2[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("title", f3_jg0402);const f4_jg0402 = () => {
    _jg0.content = attrs2.content; }; f4_jg0402(); attrs2[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("content", f4_jg0402);const f5_jg0402 = () => {
    _jg0.confirmText = attrs2.confirmText; }; f5_jg0402(); attrs2[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("confirmText", f5_jg0402);
    _jg0._localeChangeHandler = _jg0._onLocaleChange.bind(_jg0);
    _jg0.locale = (0,_config__WEBPACK_IMPORTED_MODULE_1__.getAndWatchLocale)(_jg0._localeChangeHandler);
  }
  _onLocaleChange(locale) {
    this.locale = locale;
  }
  onClick() {
    this.__notify("update.active", false, "confirm");
  }
  passActive(active, action) {
    this.__notify("update.active", active, action);
  }
}
DialogAlert.template = _dialog_alert_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];
DialogAlert.show = showDialogAlert;


//# sourceMappingURL=dialog-alert.js.map

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-alert.tpl.js":
/*!********************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-alert.tpl.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog */ "../jinge-material/lib/dialog/dialog.js");
/* harmony import */ var _dialog_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-title */ "../jinge-material/lib/dialog/dialog-title.js");
/* harmony import */ var _dialog_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-actions */ "../jinge-material/lib/dialog/dialog-actions.js");
/* harmony import */ var _dialog_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-content */ "../jinge-material/lib/dialog/dialog-content.js");







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
              vm_0.passActive(...args);
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
                            slots: {
                              'default': function(component) {
                                return [
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                  const fn_0 = () => {
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.title }`);
                                  };
                                  fn_0();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["title"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                  return el;
                                })()
                                ];
                              }
                            }
                          },
                        });
                        const el = _dialog_title__WEBPACK_IMPORTED_MODULE_3__.DialogTitle.create(attrs);
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
                attrs.expect = vm_0.title;
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["title"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })(),
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
                                ...(() => {
                                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    },
                                    content: undefined
                                  });
                                  const fn_0 = () => {
                                    attrs.content = vm_0.content;
                                  };
                                  fn_0();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["content"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  const el = jinge__WEBPACK_IMPORTED_MODULE_0__.BindHtmlComponent.create(attrs);
                                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                })()
                                ];
                              }
                            }
                          },
                        });
                        const el = _dialog_content__WEBPACK_IMPORTED_MODULE_5__.DialogContent.create(attrs);
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
                attrs.expect = vm_0.content;
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["content"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })(),
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
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                  const fn_0 = () => {
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.confirmText || vm_0.locale?.Ok }`);
                                  };
                                  fn_0();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["confirmText"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["locale","Ok"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                  return el;
                                })()
                                ];
                              }
                            }
                          },
                          class: `md-primary`
                        });
                        const el = _button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
              });
              const el = _dialog_actions__WEBPACK_IMPORTED_MODULE_4__.DialogActions.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })()
            ];
          }
        }
      },
      __portalDisabled: undefined,
      active: undefined,
      fullscreen: false
    });
    const fn_0 = () => {
      attrs.__portalDisabled = vm_0.__portalDisabled;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["__portalDisabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.active = vm_0.active;
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-content.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-content.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogContent": () => (/* binding */ DialogContent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _dialog_content_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-content.tpl.js */ "../jinge-material/lib/dialog/dialog-content.tpl.js");


class DialogContent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
DialogContent.template = _dialog_content_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=dialog-content.js.map

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-content.tpl.js":
/*!**********************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-content.tpl.js ***!
  \**********************************************************/
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-dialog-content', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-title.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-title.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogTitle": () => (/* binding */ DialogTitle)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _dialog_title_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-title.tpl.js */ "../jinge-material/lib/dialog/dialog-title.tpl.js");


class DialogTitle extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
DialogTitle.template = _dialog_title_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=dialog-title.js.map

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-title.tpl.js":
/*!********************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-title.tpl.js ***!
  \********************************************************/
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "span",
      {
        class: `md-dialog-title md-title`
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

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/dialog/dialog.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _dialog_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.tpl.js */ "../jinge-material/lib/dialog/dialog.tpl.js");


class Dialog extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.__portalDisabled = attrs.__portalDisabled;const f2_jg0402 = () => {
    _jg0.active = attrs.active; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f2_jg0402);const f3_jg0402 = () => {
    _jg0.backdrop = attrs.backdrop !== false; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("backdrop", f3_jg0402);const f4_jg0402 = () => {
    _jg0.backdropClass = attrs.backdropClass || "md-dialog-overlay"; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("backdropClass", f4_jg0402);const f5_jg0402 = () => {
    _jg0.closeOnEsc = attrs.closeOnEsc !== false; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("closeOnEsc", f5_jg0402);const f6_jg0402 = () => {
    _jg0.fullscreen = attrs.fullscreen !== false; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("fullscreen", f6_jg0402);const f7_jg0402 = () => {
    _jg0.closeOnOutsideClick = attrs.closeOnOutsideClick !== false; }; f7_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("closeOnOutsideClick", f7_jg0402);
  }
  onKeydown(evt) {
    if (evt.key === "ESC" && this.closeOnEsc) {
      this.close("esc");
    }
  }
  close(action) {
    this.__notify("update.active", false, action);
  }
  get active() {
    return this._active;
  }
  set active(v) {
    if (this._active === v)
      return;
    this._active = v;
    this.__notify(v ? "open" : "close");
  }
  onClick() {
    if (this.closeOnOutsideClick) {
      this.close("overlay");
    }
    this.__notify("click-overlay");
  }
}
Dialog.template = _dialog_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog.tpl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../focus-trap */ "../jinge-material/lib/focus-trap/index.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../overlay */ "../jinge-material/lib/overlay/index.js");
/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portal */ "../jinge-material/lib/portal/index.js");





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
                                          class: `md-dialog-container`
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
                            });
                            const el = _focus_trap__WEBPACK_IMPORTED_MODULE_1__.FocusTrap.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                        );
                        const fn_0 = () => {
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, `md-dialog${vm_0.fullscreen ? ' md-dialog-fullscreen' : ''}`);
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["fullscreen"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'keydown', function(...args) {
                          vm_0.onKeydown(...args);
                        });
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })()
                      ];
                    }
                  }
                },
                expect: undefined,
                transition: `md-dialog`
              });
              const fn_0 = () => {
                attrs.expect = vm_0.active;
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
    const el = _portal__WEBPACK_IMPORTED_MODULE_3__.Portal.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })(),
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        listeners: {
          click: {
            fn: function(...args) {
              vm_0.onClick(...args);
            },
            opts: null
          }
        },
      },
      __portalDisabled: undefined,
      class: undefined,
      active: undefined
    });
    const fn_0 = () => {
      attrs.__portalDisabled = vm_0.__portalDisabled;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["__portalDisabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)(vm_0.backdropClass);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["backdropClass"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_2 = () => {
      attrs.active = vm_0.backdrop && vm_0.active;
    };
    fn_2();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["backdrop"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/focus-trap/index.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/focus-trap/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusTrap": () => (/* binding */ FocusTrap)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/focus-trap/index.tpl.js");


class FocusTrap extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  setFocus() {
    setTimeout(() => {
      const $el = this.__firstDOM;
      if ($el.tagName) {
        $el.setAttribute("tabindex", "-1");
        $el.focus();
      }
    }, 20);
  }
  __afterRender() {
    this.setFocus();
  }
}
FocusTrap.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/focus-trap/index.tpl.js":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/focus-trap/index.tpl.js ***!
  \*****************************************************/
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

/***/ })

}]);
//# sourceMappingURL=jinge-material_lib_dialog_dialog-alert_js.js.map