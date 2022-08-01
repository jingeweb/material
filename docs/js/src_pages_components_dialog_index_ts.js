"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_components_dialog_index_ts"],{

/***/ "./src/pages/components/dialog/api.ts":
/*!********************************************!*\
  !*** ./src/pages/components/dialog/api.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
  dialog: {
    props: {
      headings: ["名称", "描述", "默认值"],
      props: [
        {
          name: "active",
          type: "Boolean",
          description: "控制对话框的打开和关闭",
          defaults: "false"
        },
        {
          name: "backdrop",
          type: "Boolean",
          description: "是否启用叠加的灰色蒙层",
          defaults: "true"
        },
        {
          name: "closeOnEsc",
          type: "Boolean",
          description: "默认情况下，按 esc 时对话框将关闭。设置为 false 可取消此行为。",
          defaults: "true"
        },
        {
          name: "closeOnOutsideClick",
          type: "Boolean",
          description: "默认情况下，单击外部时该对话框将关闭。设置为 false 可取消此行为。",
          defaults: "true"
        },
        {
          name: "fullscreen",
          type: "Boolean",
          description: "控制该对话框将在移动屏幕上是否会变为全屏。",
          defaults: "true"
        }
      ]
    },
    events: {
      headings: ["名称", "描述", "参数"],
      props: [
        {
          name: "open",
          description: "对话框打开时触发",
          value: "null"
        },
        {
          name: "close",
          description: "对话框关闭时触发",
          value: "null"
        },
        {
          name: "click-overlay",
          description: "在叠加层外点击时触发",
          value: "null"
        }
      ]
    }
  },
  alert: {
    props: {
      headings: ["名称", "描述", "默认值"],
      props: [
        {
          name: "title",
          type: "String",
          description: "通知对话框的标题",
          defaults: "null"
        },
        {
          name: "content",
          type: "String",
          description: "通知对话框的内容。支持 html。",
          defaults: "null"
        },
        {
          name: "confirmText",
          type: "String",
          description: "确认按钮的文案",
          defaults: "确认"
        }
      ]
    }
  },
  confirm: {
    props: {
      headings: ["名称", "描述", "默认值"],
      props: [
        {
          name: "title",
          type: "String",
          description: "确认对话框的标题",
          defaults: "null"
        },
        {
          name: "content",
          type: "String",
          description: "确认对话框的内容。支持 html。",
          defaults: "null"
        },
        {
          name: "confirmText",
          type: "String",
          description: "确认按钮的文案",
          defaults: "确认"
        },
        {
          name: "cancelText",
          type: "String",
          description: "取消按钮的文案",
          defaults: "取消"
        },
        {
          name: "confirmSpinner",
          type: "Boolean",
          description: "确认按钮是否处于加载状态。当该参数为 true 时，确认按钮会展示 md-spinner，并处于 disabled 状态。",
          defaults: "false"
        }
      ]
    },
    events: {
      headings: ["名称", "描述", "参数"],
      props: [
        {
          name: "confirm",
          description: "点击确认按钮时触发",
          value: "null"
        },
        {
          name: "cancel",
          description: "点击取消按钮时触发",
          value: "null"
        }
      ]
    }
  },
  prompt: {
    props: {
      headings: ["名称", "描述", "默认值"],
      props: [
        {
          name: "defaultValue",
          type: "Any",
          description: "输入框的默认值",
          defaults: "null"
        },
        {
          name: "inputRequired",
          type: "Boolean",
          description: "输入框是否必须填写",
          defaults: "false"
        },
        {
          name: "inputMaxLength",
          type: "Number",
          description: "可选参数，指定输入框的最大允许字符数",
          defaults: "null"
        },
        {
          name: "inputPlaceholder",
          type: "Number",
          description: "输入框的占位提示信息",
          defaults: "null"
        },
        {
          name: "title",
          type: "String",
          description: "对话框的标题",
          defaults: "null"
        },
        {
          name: "confirmText",
          type: "String",
          description: "确认按钮的文案",
          defaults: "确认"
        },
        {
          name: "cancelText",
          type: "String",
          description: "取消按钮的文案",
          defaults: "取消"
        },
        {
          name: "confirmSpinner",
          type: "Boolean",
          description: "确认按钮是否处于加载状态。当该参数为 true 时，确认按钮会展示 md-spinner，并处于 disabled 状态。",
          defaults: "false"
        }
      ]
    },
    events: {
      headings: ["名称", "描述", "参数"],
      props: [
        {
          name: "confirm",
          description: "点击确认按钮时触发",
          value: "inputValue"
        },
        {
          name: "cancel",
          description: "点击取消按钮时触发",
          value: "null"
        }
      ]
    }
  }
}));


/***/ }),

/***/ "./src/pages/components/dialog/examples/alert.ts":
/*!*******************************************************!*\
  !*** ./src/pages/components/dialog/examples/alert.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleDialogAlert)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_dialog_dialog_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/dialog/dialog-alert */ "../jinge-material/lib/dialog/dialog-alert.js");
/* harmony import */ var _alert_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.html */ "./src/pages/components/dialog/examples/alert.html");



class ExampleDialogAlert extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.first = false;
    _jg0.second = false;
  }
  show() {
    jinge_material_lib_dialog_dialog_alert__WEBPACK_IMPORTED_MODULE_1__.DialogAlert.show(
      {
        title: "Hello",
        content: "This message is shown by calling DialogAlert.show()"
      },
      () => {
        console.log("callback after close.");
      }
    );
  }
}
ExampleDialogAlert.template = _alert_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/dialog/examples/confirm.ts":
/*!*********************************************************!*\
  !*** ./src/pages/components/dialog/examples/confirm.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleDialogConfirm)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_dialog_dialog_confirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/dialog/dialog-confirm */ "../jinge-material/lib/dialog/dialog-confirm.js");
/* harmony import */ var _confirm_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm.html */ "./src/pages/components/dialog/examples/confirm.html");



function mockDeleteApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5)
        resolve();
      else
        reject(new Error("net work error."));
    }, 3e3);
  });
}
class ExampleDialogConfirm extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.active = false;
    _jg0.value = null;
  }
  static get template() {
    return _confirm_html__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  show() {
    jinge_material_lib_dialog_dialog_confirm__WEBPACK_IMPORTED_MODULE_1__.DialogConfirm.show(
      {
        title: "Confirm to delete?",
        content: "This message is shown by calling DialogConfirm.show()"
      },
      () => {
        console.log("user click confirm.");
        return mockDeleteApi();
      },
      () => {
        console.log("user click cancel.");
      }
    );
  }
  onCancel() {
    this.value = "Disagreed";
  }
  onConfirm() {
    this.value = "Agreed";
  }
}


/***/ }),

/***/ "./src/pages/components/dialog/examples/custom.ts":
/*!********************************************************!*\
  !*** ./src/pages/components/dialog/examples/custom.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleDialogCustomMarkup)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _custom_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom.html */ "./src/pages/components/dialog/examples/custom.html");


class ExampleDialogCustomMarkup extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.showDialog = false;
  }
}
ExampleDialogCustomMarkup.template = _custom_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/dialog/examples/prompt.ts":
/*!********************************************************!*\
  !*** ./src/pages/components/dialog/examples/prompt.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleDialogPrompt)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_dialog_dialog_prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/dialog/dialog-prompt */ "../jinge-material/lib/dialog/dialog-prompt.js");
/* harmony import */ var jinge_material_lib_snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/snackbar */ "../jinge-material/lib/snackbar/index.js");
/* harmony import */ var _prompt_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prompt.html */ "./src/pages/components/dialog/examples/prompt.html");




function mockDeleteApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5)
        resolve();
      else
        reject(new Error("net work error."));
    }, 3e3);
  });
}
class ExampleDialogPrompt extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.active = false;
    _jg0.value = "jinge";
  }
  show() {
    jinge_material_lib_dialog_dialog_prompt__WEBPACK_IMPORTED_MODULE_1__.DialogPrompt.show(
      {
        title: "请输入您的名字：",
        defaultValue: this.value,
        inputPlaceholder: "名字",
        inputRequired: true,
        inputMaxlength: 30
      },
      (input) => {
        if (!input.startsWith("a")) {
          return "名字必须以字符 a 打头！";
        }
        return mockDeleteApi();
      },
      () => {
        console.log("user click cancel.");
      }
    );
  }
  onConfirm(input) {
    this.value = input;
    jinge_material_lib_snackbar__WEBPACK_IMPORTED_MODULE_2__.Snackbar.show(`你好，${this.value}`);
  }
}
ExampleDialogPrompt.template = _prompt_html__WEBPACK_IMPORTED_MODULE_3__["default"];


/***/ }),

/***/ "./src/pages/components/dialog/index.ts":
/*!**********************************************!*\
  !*** ./src/pages/components/dialog/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDialog": () => (/* binding */ PageDialog)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/components/dialog/index.html");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/pages/components/dialog/api.ts");
/* harmony import */ var _examples_custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/custom */ "./src/pages/components/dialog/examples/custom.ts");
/* harmony import */ var _examples_custom_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/custom?example */ "./src/pages/components/dialog/examples/custom.ts?example");
/* harmony import */ var _examples_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/alert */ "./src/pages/components/dialog/examples/alert.ts");
/* harmony import */ var _examples_alert_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/alert?example */ "./src/pages/components/dialog/examples/alert.ts?example");
/* harmony import */ var _examples_confirm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/confirm */ "./src/pages/components/dialog/examples/confirm.ts");
/* harmony import */ var _examples_confirm_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/confirm?example */ "./src/pages/components/dialog/examples/confirm.ts?example");
/* harmony import */ var _examples_prompt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/prompt */ "./src/pages/components/dialog/examples/prompt.ts");
/* harmony import */ var _examples_prompt_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/prompt?example */ "./src/pages/components/dialog/examples/prompt.ts?example");












class PageDialog extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
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
      customMarkup: {
        component: _examples_custom__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_custom_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      dialogAlert: {
        component: _examples_alert__WEBPACK_IMPORTED_MODULE_6__["default"],
        source: _examples_alert_example__WEBPACK_IMPORTED_MODULE_7__["default"]
      },
      dialogConfirm: {
        component: _examples_confirm__WEBPACK_IMPORTED_MODULE_8__["default"],
        source: _examples_confirm_example__WEBPACK_IMPORTED_MODULE_9__["default"]
      },
      dialogPrompt: {
        component: _examples_prompt__WEBPACK_IMPORTED_MODULE_10__["default"],
        source: _examples_prompt_example__WEBPACK_IMPORTED_MODULE_11__["default"]
      }
    };
  }
}
PageDialog.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/dialog/examples/alert.html":
/*!*********************************************************!*\
  !*** ./src/pages/components/dialog/examples/alert.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/dialog */ "../jinge-material/lib/dialog/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-dialog-alert>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              "update.active": {
                fn: function(...args) {
                  vm_0.first = args[0]
                },
                opts: null
              }
            },
          },
          active: undefined,
          content: `您的文章已被删除。`,
          confirmText: `漂亮！`
        });
        const fn_0 = () => {
          attrs.active = vm_0.first;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["first"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogAlert.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-dialog-alert>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              "update.active": {
                fn: function(...args) {
                  vm_0.second = args[0]
                },
                opts: null
              }
            },
          },
          active: undefined,
          title: `提交成功！`,
          content: `您的文章 <strong>你好世界</strong> 已经创建成功！`
        });
        const fn_0 = () => {
          attrs.active = vm_0.second;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["second"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogAlert.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-button>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              click: {
                fn: function(...args) {
                  vm_0.first = true
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Alert`)
                ];
              }
            }
          },
          class: `md-accent md-raised`
        });
        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-button>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              click: {
                fn: function(...args) {
                  vm_0.second = true
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Alert`)
                ];
              }
            }
          },
          class: `md-primary md-raised`
        });
        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-button>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              click: {
                fn: function(...args) {
                  vm_0.show(...args);
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Alert by static method`)
                ];
              }
            }
          },
          class: `md-primary md-raised`
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

/***/ "./src/pages/components/dialog/examples/confirm.html":
/*!***********************************************************!*\
  !*** ./src/pages/components/dialog/examples/confirm.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/dialog */ "../jinge-material/lib/dialog/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-dialog-confirm>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              cancel: {
                fn: function(...args) {
                  vm_0.active=false;vm_0.onCancel();
                },
                opts: null
              },  confirm: {
                fn: function(...args) {
                  vm_0.active=false;vm_0.onConfirm();
                },
                opts: null
              }
            },
          },
          active: undefined,
          title: `确认要使用谷歌的定位服务？`,
          content: `使用谷歌定位服务意味着，应用在被使用或处于后台时，都会向谷歌发送<strong>匿名</strong>位置数据。`,
          confirmText: `同意`,
          cancelText: `拒绝`
        });
        const fn_0 = () => {
          attrs.active = vm_0.active;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogConfirm.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-button>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              click: {
                fn: function(...args) {
                  vm_0.active = true
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Confirm`)
                ];
              }
            }
          },
          class: `md-primary md-raised`
        });
        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
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
                    "span",
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                      const fn_0 = () => {
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `Value: ${vm_0.value}`);
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["value"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
          attrs.expect = vm_0.value;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["value"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-button>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              click: {
                fn: function(...args) {
                  vm_0.show(...args);
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Confirm by static method`)
                ];
              }
            }
          },
          class: `md-primary md-raised`
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

/***/ "./src/pages/components/dialog/examples/custom.html":
/*!**********************************************************!*\
  !*** ./src/pages/components/dialog/examples/custom.html ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/dialog */ "../jinge-material/lib/dialog/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-dialog>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              "update.active": {
                fn: function(...args) {
                  vm_0.showDialog = args[0]
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
                      debugName: "attrs_of_<md-dialog-title>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Preferences`)
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogTitle.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-dialog-content>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `contents here.`)
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogContent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-dialog-actions>",
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
                                      vm_0.showDialog = false
                                    },
                                    opts: null
                                  }
                                },
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Close`)
                                    ];
                                  }
                                }
                              },
                              class: `md-primary`
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-button>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                listeners: {
                                  click: {
                                    fn: function(...args) {
                                      vm_0.showDialog = false
                                    },
                                    opts: null
                                  }
                                },
                                slots: {
                                  'default': function(component) {
                                    return [
                                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Save`)
                                    ];
                                  }
                                }
                              },
                              class: `md-primary`
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogActions.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          active: undefined,
          style: `max-height: 768px`
        });
        const fn_0 = () => {
          attrs.active = vm_0.showDialog;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["showDialog"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__.Dialog.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-button>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              click: {
                fn: function(...args) {
                  vm_0.showDialog = true
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Show Dialog`)
                ];
              }
            }
          },
          class: `md-primary md-raised`
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

/***/ "./src/pages/components/dialog/examples/prompt.html":
/*!**********************************************************!*\
  !*** ./src/pages/components/dialog/examples/prompt.html ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/dialog */ "../jinge-material/lib/dialog/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-dialog-prompt>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              cancel: {
                fn: function(...args) {
                  vm_0.active = false
                },
                opts: null
              },  confirm: {
                fn: function(...args) {
                  vm_0.active = false;vm_0.onConfirm(args[0]);
                },
                opts: null
              }
            },
          },
          active: undefined,
          defaultValue: undefined,
          inputMaxlength: `30`,
          inputRequired: true,
          title: `请输入您的名字：`
        });
        const fn_0 = () => {
          attrs.active = vm_0.active;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.defaultValue = vm_0.value;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["value"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogPrompt.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-button>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              click: {
                fn: function(...args) {
                  vm_0.active = true
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Prompt`)
                ];
              }
            }
          },
          class: `md-primary md-raised`
        });
        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_2__.Button.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-button>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              click: {
                fn: function(...args) {
                  vm_0.show(...args);
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `Prompt by static method`)
                ];
              }
            }
          },
          class: `md-primary md-raised`
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

/***/ "./src/pages/components/dialog/index.html":
/*!************************************************!*\
  !*** ./src/pages/components/dialog/index.html ***!
  \************************************************/
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
                  `对话框用于通知用户有关特定任务的信息，并且可能包含关键信息，需要做出决定或涉及多个任务。您可以在其中包含选项卡，所有表单组件等等。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `对话框包含了一组模拟浏览器原生对话框的预设对话框，例如通知（alert）、确认（confirm）和提示输入（prompt）。`
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
                  `对话框`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `对话框组件内部可以包含任何 HTML 内容，用于创建丰富的对话框内容。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Basic`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.customMarkup;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","customMarkup"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              attrs.headings = vm_0.api?.dialog?.props?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","dialog","props","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.dialog?.props?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","dialog","props","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        },
                        'events': function(component) {
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
                              attrs.headings = vm_0.api?.dialog?.events?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","dialog","events","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.dialog?.events?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","dialog","events","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-dialog`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiItem.create(attrs);
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
                  `提示对话框`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `可以通过在 html 模板里使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-dialog-alert`
                  ),
                  `组件，
                        也可以通过在 js 代码中直接调用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `DialogAlert`
                  ),
                  `组件的静态函数`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `show`
                  ),
                  `来触发。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `DialogAlert.show`
                  ),
                  `函数第一个参数为必须的 Object 类型的 options，
                        该 options 可指定的属性和`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-dialog-alert`
                  ),
                  `组件的属性一致。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `该函数接收的第二个参数是可选的关闭对话框后的回调函数。
                        如果该回调函数返回了`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `false`
                  ),
                  `则会阻止对话框的关闭。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Alert`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.dialogAlert;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","dialogAlert"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              attrs.headings = vm_0.api?.alert?.props?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","alert","props","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.alert?.props?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","alert","props","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-dialog-alert`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiItem.create(attrs);
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
                  `确认对话框`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `展示确认对话框，可以通过在 html 模板里使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-dialog-confirm`
                  ),
                  `组件，
                        也可以通过在 js 代码中直接调用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `DialogConfirm`
                  ),
                  `组件的静态函数`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `show`
                  ),
                  `来触发。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `DialogConfirm.show`
                  ),
                  `函数第一个参数为必须的 Object 类型的 options，
                        该 options 里的可指定的属性和`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-dialog-confirm`
                  ),
                  `组件的属性一致。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `该函数接收的可选的第二个参数和第三个参数依次是确认和取消的回调，
                        如果回调函数返回了`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `false`
                  ),
                  `则会阻止对话框的关闭。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `在实际业务使用时，有一种常见情况是，在 confirm 回调中要调用服务器的 api 接口更新，
                        api 请求成功后，才关闭对话框（如果失败，则允许用户重试），
                        api 请求过程中 Confirm 按钮不能点击且有 spinner 状态。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `针对这种情况，confirmCallback 允许返回 false 来阻止对话框关闭，还允许直接
                        返回一个 Promise 对象。对话框会等待该 Promise，直到其 resolve 返回的数据
                        不是 false 才关闭对话框。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Confirm`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.dialogConfirm;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","dialogConfirm"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              attrs.headings = vm_0.api?.confirm?.props?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","confirm","props","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.confirm?.props?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","confirm","props","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        },
                        'events': function(component) {
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
                              attrs.headings = vm_0.api?.confirm?.events?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","confirm","events","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.confirm?.events?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","confirm","events","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-dialog-confirm`
                  });
                  const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiItem.create(attrs);
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
                  `输入对话框`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `输入对话框和确认对话框类似，可以通过在 html 模板里使用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `md-dialog-prompt`
                  ),
                  `组件，
                        也可以通过在 js 代码中直接调用`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `DialogPrompt`
                  ),
                  `组件的静态函数`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `show`
                  ),
                  `来触发。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `DialogPrompt.show`
                  ),
                  `函数和`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "code",
                    `DialogConfirm.show`
                  ),
                  `的参数一致，但有一个区别是：
                        confirmCallback 如果返回字符串，会认为是对输入值的错误提示；如果返回 Promise，对于 reject 的数据或 resolve 的字符串 也会认为
                        是错误提示。`
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Prompt`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.dialogPrompt;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","dialogPrompt"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              attrs.headings = vm_0.api?.prompt?.props?.headings;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","prompt","props","headings"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.prompt?.props?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","prompt","props","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        },
                        'events': function(component) {
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
                              attrs.headings = vm_0.api?.prompt?.props?.events;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","prompt","props","events"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.props = vm_0.api?.prompt?.events?.props;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["api","prompt","events","props"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _components__WEBPACK_IMPORTED_MODULE_1__.ApiTable.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    title: `API - md-dialog-prompt`
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
      title: `对话框`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_1__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/dialog/style/index.css":
/*!****************************************************!*\
  !*** ../jinge-material/lib/dialog/style/index.css ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205844
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "../jinge-material/lib/spinner/style/index.css":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/spinner/style/index.css ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344206260
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/pages/components/dialog/examples/alert.ts?example":
/*!***************************************************************!*\
  !*** ./src/pages/components/dialog/examples/alert.ts?example ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component } from 'jinge';\n\nimport { DialogAlert } from 'jinge-material/lib/dialog/dialog-alert';\n\nimport _tpl from './alert.html';\n\nexport default class ExampleDialogAlert extends Component {\n  static template = _tpl;\n\n  first: boolean;\n  second: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.first = false;\n    this.second = false;\n  }\n\n  show() {\n    DialogAlert.show(\n      {\n        title: 'Hello',\n        content: 'This message is shown by calling DialogAlert.show()',\n      },\n      () => {\n        // eslint-disable-next-line no-console\n        console.log('callback after close.');\n      },\n    );\n  }\n}\n","sass":"","html":"<div>\n  <md-dialog-alert\n    e:active=\"first\"\n    on:update.active=\"first = $args[0]\"\n    content=\"您的文章已被删除。\"\n    confirmText=\"漂亮！\"\n  />\n\n  <md-dialog-alert\n    e:active=\"second\"\n    on:update.active=\"second = $args[0]\"\n    title=\"提交成功！\"\n    content=\"您的文章 <strong>你好世界</strong> 已经创建成功！\"\n  />\n  <md-button class=\"md-accent md-raised\" on:click=\"first = true\">Alert</md-button>\n  <md-button class=\"md-primary md-raised\" on:click=\"second = true\">Alert</md-button>\n  <md-button class=\"md-primary md-raised\" on:click=\"show\">Alert by static method</md-button>\n</div>"});

/***/ }),

/***/ "./src/pages/components/dialog/examples/confirm.ts?example":
/*!*****************************************************************!*\
  !*** ./src/pages/components/dialog/examples/confirm.ts?example ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component } from 'jinge';\n\nimport { DialogConfirm } from 'jinge-material/lib/dialog/dialog-confirm';\n\nimport _tpl from './confirm.html';\n\nfunction mockDeleteApi() {\n  return new Promise<void>((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() > 0.5) resolve();\n      else reject(new Error('net work error.'));\n    }, 3000);\n  });\n}\n\nexport default class ExampleDialogConfirm extends Component {\n  static get template() {\n    return _tpl;\n  }\n\n  active: boolean;\n  value: string;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.active = false;\n    this.value = null;\n  }\n\n  show() {\n    DialogConfirm.show(\n      {\n        title: 'Confirm to delete?',\n        content: 'This message is shown by calling DialogConfirm.show()',\n      },\n      () => {\n        // eslint-disable-next-line no-console\n        console.log('user click confirm.');\n        return mockDeleteApi();\n      },\n      () => {\n        // eslint-disable-next-line no-console\n        console.log('user click cancel.');\n      },\n    );\n  }\n\n  onCancel() {\n    this.value = 'Disagreed';\n  }\n\n  onConfirm() {\n    this.value = 'Agreed';\n  }\n}\n","sass":"","html":"<div>\n  <md-dialog-confirm\n    e:active=\"active\"\n    title=\"确认要使用谷歌的定位服务？\"\n    content=\"使用谷歌定位服务意味着，应用在被使用或处于后台时，都会向谷歌发送<strong>匿名</strong>位置数据。\"\n    confirmText=\"同意\"\n    cancelText=\"拒绝\"\n    on:cancel=\"active=false;onCancel();\"\n    on:confirm=\"active=false;onConfirm();\"\n  />\n\n  <md-button class=\"md-primary md-raised\" on:click=\"active = true\">Confirm</md-button>\n  <if e:expect=\"value\">\n  <span>Value: ${value}</span>  \n  </if>\n  <md-button class=\"md-primary md-raised\" on:click=\"show\">Confirm by static method</md-button>\n</div>"});

/***/ }),

/***/ "./src/pages/components/dialog/examples/custom.ts?example":
/*!****************************************************************!*\
  !*** ./src/pages/components/dialog/examples/custom.ts?example ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './custom.html';\n\nexport default class ExampleDialogCustomMarkup extends Component {\n  static template = _tpl;\n\n  showDialog: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.showDialog = false;\n  }\n}\n","sass":"","html":"<div>\n  <md-dialog style=\"max-height: 768px\" e:active=\"showDialog\" on:update.active=\"showDialog = $args[0]\">\n    <md-dialog-title>Preferences</md-dialog-title>\n\n    <md-dialog-content>contents here.</md-dialog-content>\n\n    <md-dialog-actions>\n      <md-button class=\"md-primary\" on:click=\"showDialog = false\">Close</md-button>\n      <md-button class=\"md-primary\" on:click=\"showDialog = false\">Save</md-button>\n    </md-dialog-actions>\n  </md-dialog>\n  <md-button class=\"md-primary md-raised\" on:click=\"showDialog = true\">Show Dialog</md-button>\n</div>"});

/***/ }),

/***/ "./src/pages/components/dialog/examples/prompt.ts?example":
/*!****************************************************************!*\
  !*** ./src/pages/components/dialog/examples/prompt.ts?example ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component } from 'jinge';\n\nimport { DialogPrompt } from 'jinge-material/lib/dialog/dialog-prompt';\nimport { Snackbar } from 'jinge-material/lib/snackbar';\n\nimport _tpl from './prompt.html';\n\nfunction mockDeleteApi() {\n  return new Promise<void>((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() > 0.5) resolve();\n      else reject(new Error('net work error.'));\n    }, 3000);\n  });\n}\n\nexport default class ExampleDialogPrompt extends Component {\n  static template = _tpl;\n\n  active: boolean;\n  value: string;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.active = false;\n    this.value = 'jinge';\n  }\n\n  show() {\n    DialogPrompt.show(\n      {\n        title: '请输入您的名字：',\n        defaultValue: this.value,\n        inputPlaceholder: '名字',\n        inputRequired: true,\n        inputMaxlength: 30,\n      },\n      (input) => {\n        if (!input.startsWith('a')) {\n          return '名字必须以字符 a 打头！';\n        }\n        return mockDeleteApi();\n      },\n      () => {\n        // eslint-disable-next-line no-console\n        console.log('user click cancel.');\n      },\n    );\n  }\n\n  onConfirm(input: string) {\n    this.value = input;\n    Snackbar.show(`你好，${this.value}`);\n  }\n}\n","sass":"","html":"<div>\n  <md-dialog-prompt\n    e:active=\"active\"\n    e:defaultValue=\"value\"\n    inputMaxlength=\"30\"\n    inputRequired\n    title=\"请输入您的名字：\"\n    on:cancel=\"active = false\"\n    on:confirm=\"active = false;onConfirm($args[0]);\"\n  />\n  <md-button class=\"md-primary md-raised\" on:click=\"active = true\">Prompt</md-button>\n  <md-button class=\"md-primary md-raised\" on:click=\"show\">Prompt by static method</md-button>\n</div>\n"});

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-confirm.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-confirm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogConfirm": () => (/* binding */ DialogConfirm),
/* harmony export */   "showConfirmOrPrompt": () => (/* binding */ showConfirmOrPrompt)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_config */ "../jinge-material/lib/_config/index.js");
/* harmony import */ var _dialog_confirm_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-confirm.tpl.js */ "../jinge-material/lib/dialog/dialog-confirm.tpl.js");



const _DialogConfirm = class extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.active = attrs.active; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f1_jg0402);const f2_jg0402 = () => {
    _jg0.title = attrs.title; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("title", f2_jg0402);const f3_jg0402 = () => {
    _jg0.content = attrs.content; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("content", f3_jg0402);const f4_jg0402 = () => {
    _jg0.confirmSpinner = attrs.confirmSpinner; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("confirmSpinner", f4_jg0402);const f5_jg0402 = () => {
    _jg0.confirmText = attrs.confirmText; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("confirmText", f5_jg0402);const f6_jg0402 = () => {
    _jg0.cancelText = attrs.cancelText; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("cancelText", f6_jg0402);
    _jg0._localeChangeHandler = _jg0._onLocaleChange.bind(_jg0);
    _jg0.locale = (0,_config__WEBPACK_IMPORTED_MODULE_1__.getAndWatchLocale)(_jg0._localeChangeHandler);
  }
  static show(opts, confirmCallback, cancelCallback) {
    return showConfirmOrPrompt(_DialogConfirm, opts, confirmCallback, cancelCallback);
  }
  _onLocaleChange(locale) {
    this.locale = locale;
  }
  passActive(active) {
    this.__notify("update.active", active);
  }
  onCancel() {
    this.__notify("cancel");
  }
  onConfirm() {
    this.__notify("confirm");
  }
};
let DialogConfirm = _DialogConfirm;
DialogConfirm.template = _dialog_confirm_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];
function showConfirmOrPrompt(Clazz, opts, confirmCallback, cancelCallback) {
  const isConfirm = Clazz === DialogConfirm;
  if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(opts)) {
    opts = {
      title: opts
    };
  }
  const attrs = {
    __portalDisabled: true,
    active: false,
    title: opts.title,
    confirmSpinner: false,
    confirmText: opts.confirmText,
    cancelText: opts.cancelText
  };
  if (isConfirm) {
    attrs.content = opts.content;
  } else {
    attrs.errorTip = opts.errorTip;
    attrs.inputPlaceholder = opts.inputPlaceholder;
    attrs.inputRequired = opts.inputRequired;
    attrs.inputMaxlength = opts.inputMaxlength;
    attrs.defaultValue = opts.defaultValue;
  }
  const el = Clazz.create((0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)(attrs));
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
    el.active = true;
  });
  el.__on("update.active", (active) => {
    if (active)
      return;
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(cancelCallback) && cancelCallback() === false) {
      return;
    }
    el.__destroy();
  });
  el.__on("cancel", () => {
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(cancelCallback) && cancelCallback() === false) {
      return;
    }
    el.__destroy();
  });
  el.__on("confirm", () => {
    if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(confirmCallback)) {
      return el.__destroy();
    }
    const result = isConfirm ? confirmCallback() : confirmCallback(el.inputValue);
    if (result === false || (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(result)) {
      if (!isConfirm) {
        el.errorTip = result;
      }
      return;
    } else if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(result) && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(result.then)) {
      el.confirmSpinner = true;
      result.then((rr) => {
        if (rr === false || (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(rr)) {
          if (!isConfirm) {
            el.errorTip = rr;
          }
          el.confirmSpinner = false;
        } else {
          el.__destroy();
        }
      }, (err) => {
        el.confirmSpinner = false;
        if (!isConfirm) {
          el.errorTip = err.toString();
        }
      });
      return;
    }
    el.__destroy();
  });
  el.__renderToDOM(document.body, false);
  return el;
}


//# sourceMappingURL=dialog-confirm.js.map

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-confirm.tpl.js":
/*!**********************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-confirm.tpl.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinner */ "../jinge-material/lib/spinner/index.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog */ "../jinge-material/lib/dialog/dialog.js");
/* harmony import */ var _dialog_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-title */ "../jinge-material/lib/dialog/dialog-title.js");
/* harmony import */ var _dialog_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-actions */ "../jinge-material/lib/dialog/dialog-actions.js");
/* harmony import */ var _dialog_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-content */ "../jinge-material/lib/dialog/dialog-content.js");








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
                        const el = _dialog_title__WEBPACK_IMPORTED_MODULE_4__.DialogTitle.create(attrs);
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
                        const el = _dialog_content__WEBPACK_IMPORTED_MODULE_6__.DialogContent.create(attrs);
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
                                  vm_0.onCancel(...args);
                                },
                                opts: null
                              }
                            },
                            slots: {
                              'default': function(component) {
                                return [
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                    "span",
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                      const fn_0 = () => {
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.cancelText || vm_0.locale?.Cancel }`);
                                      };
                                      fn_0();
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["cancelText"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["locale","Cancel"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                          disabled: undefined
                        });
                        const fn_0 = () => {
                          attrs.disabled = vm_0.confirmSpinner;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["confirmSpinner"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                                  vm_0.onConfirm(...args);
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
                                              },
                                            });
                                            const el = _spinner__WEBPACK_IMPORTED_MODULE_2__.Spinner.create(attrs);
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
                                    attrs.expect = vm_0.confirmSpinner;
                                  };
                                  fn_0();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["confirmSpinner"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                })(),
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                    "span",
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                      const fn_0 = () => {
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.confirmText || vm_0.locale?.Ok }`);
                                      };
                                      fn_0();
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["confirmText"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["locale","Ok"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                          disabled: undefined,
                          class: `md-primary`
                        });
                        const fn_0 = () => {
                          attrs.disabled = vm_0.confirmSpinner;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["confirmSpinner"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
              });
              const el = _dialog_actions__WEBPACK_IMPORTED_MODULE_5__.DialogActions.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })()
            ];
          }
        }
      },
      __portalDisabled: undefined,
      active: undefined,
      fullscreen: false,
      closeOnOutsideClick: false
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
    const el = _dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-prompt.js":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-prompt.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogPrompt": () => (/* binding */ DialogPrompt)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_config */ "../jinge-material/lib/_config/index.js");
/* harmony import */ var _dialog_confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-confirm */ "../jinge-material/lib/dialog/dialog-confirm.js");
/* harmony import */ var _dialog_prompt_tpl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-prompt.tpl.js */ "../jinge-material/lib/dialog/dialog-prompt.tpl.js");




const _DialogPrompt = class extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.active = attrs.active; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f1_jg0402);const f2_jg0402 = () => {
    _jg0.title = attrs.title; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("title", f2_jg0402);const f3_jg0402 = () => {
    _jg0.errorTip = attrs.errorTip; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("errorTip", f3_jg0402);const f4_jg0402 = () => {
    _jg0.inputValue = attrs.defaultValue; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("defaultValue", f4_jg0402);const f5_jg0402 = () => {
    _jg0.inputPlaceholder = attrs.inputPlaceholder; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("inputPlaceholder", f5_jg0402);const f6_jg0402 = () => {
    _jg0.inputMaxlength = attrs.inputMaxlength; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("inputMaxlength", f6_jg0402);const f7_jg0402 = () => {
    _jg0.inputRequired = !!attrs.inputRequired; }; f7_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("inputRequired", f7_jg0402);const f8_jg0402 = () => {
    _jg0.confirmSpinner = attrs.confirmSpinner; }; f8_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("confirmSpinner", f8_jg0402);const f9_jg0402 = () => {
    _jg0.confirmText = attrs.confirmText; }; f9_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("confirmText", f9_jg0402);const f10_jg0402 = () => {
    _jg0.cancelText = attrs.cancelText; }; f10_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("cancelText", f10_jg0402);
    _jg0.requiredTip = null;
    _jg0._localeChangeHandler = _jg0._onLocaleChange.bind(_jg0);
    _jg0.locale = (0,_config__WEBPACK_IMPORTED_MODULE_1__.getAndWatchLocale)(_jg0._localeChangeHandler);
  }
  static show(opts, confirmCallback, cancelCallback) {
    return (0,_dialog_confirm__WEBPACK_IMPORTED_MODULE_2__.showConfirmOrPrompt)(_DialogPrompt, opts, confirmCallback, cancelCallback);
  }
  _onLocaleChange(locale) {
    this.locale = locale;
  }
  passActive(active, action) {
    this.__notify("update.active", active, action);
  }
  onCancel() {
    this.__notify("cancel");
  }
  onConfirm() {
    this.__notify("confirm", this.inputValue);
  }
  onInputChange(value) {
    this.inputValue = value;
    this.requiredTip = this.inputRequired && !value ? "\u8F93\u5165\u4E0D\u80FD\u4E3A\u7A7A\uFF01" : null;
    this.errorTip = null;
    this.__notify("change", this.inputValue);
  }
  onInputKeydown($evt) {
    if ($evt.key === "Enter") {
      this.onConfirm();
    }
  }
};
let DialogPrompt = _DialogPrompt;
DialogPrompt.template = _dialog_prompt_tpl_js__WEBPACK_IMPORTED_MODULE_3__["default"];


//# sourceMappingURL=dialog-prompt.js.map

/***/ }),

/***/ "../jinge-material/lib/dialog/dialog-prompt.tpl.js":
/*!*********************************************************!*\
  !*** ../jinge-material/lib/dialog/dialog-prompt.tpl.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../field */ "../jinge-material/lib/field/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input */ "../jinge-material/lib/input/index.js");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner */ "../jinge-material/lib/spinner/index.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog */ "../jinge-material/lib/dialog/dialog.js");
/* harmony import */ var _dialog_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-title */ "../jinge-material/lib/dialog/dialog-title.js");
/* harmony import */ var _dialog_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-actions */ "../jinge-material/lib/dialog/dialog-actions.js");
/* harmony import */ var _dialog_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-content */ "../jinge-material/lib/dialog/dialog-content.js");










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
                        const el = _dialog_title__WEBPACK_IMPORTED_MODULE_6__.DialogTitle.create(attrs);
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
                                      listeners: {
                                        change: {
                                          fn: function(...args) {
                                            vm_0.onInputChange(...args);
                                          },
                                          opts: null
                                        },  keydown: {
                                          fn: function(...args) {
                                            vm_0.onInputKeydown(...args);
                                          },
                                          opts: null
                                        }
                                      },
                                    },
                                    value: undefined,
                                    disabled: undefined,
                                    id: undefined,
                                    name: undefined,
                                    maxlength: undefined,
                                    required: undefined,
                                    placeholder: undefined
                                  });
                                  const fn_0 = () => {
                                    attrs.value = vm_0.inputValue;
                                  };
                                  fn_0();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["inputValue"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  const fn_1 = () => {
                                    attrs.disabled = vm_0.confirmSpinner;
                                  };
                                  fn_1();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["confirmSpinner"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  const fn_2 = () => {
                                    attrs.id = vm_0.inputId;
                                  };
                                  fn_2();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["inputId"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  const fn_3 = () => {
                                    attrs.name = vm_0.inputName;
                                  };
                                  fn_3();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["inputName"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  const fn_4 = () => {
                                    attrs.maxlength = vm_0.inputMaxlength;
                                  };
                                  fn_4();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["inputMaxlength"], fn_4, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  const fn_5 = () => {
                                    attrs.required = vm_0.inputRequired;
                                  };
                                  fn_5();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["inputRequired"], fn_5, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  const fn_6 = () => {
                                    attrs.placeholder = vm_0.inputPlaceholder;
                                  };
                                  fn_6();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["inputPlaceholder"], fn_6, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  const el = _input__WEBPACK_IMPORTED_MODULE_3__.Input.create(attrs);
                                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                })(),
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    "span",
                                    {
                                      class: `md-error`
                                    },
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                      const fn_0 = () => {
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.requiredTip || vm_0.errorTip || ''}`);
                                      };
                                      fn_0();
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["requiredTip"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["errorTip"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                          class: undefined
                        });
                        const fn_0 = () => {
                          attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)(vm_0.errorTip || vm_0.requiredTip ? 'md-invalid' : '');
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["errorTip"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["requiredTip"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _field__WEBPACK_IMPORTED_MODULE_2__.Field.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
                class: `md-dialog-prompt-content`
              });
              const el = _dialog_content__WEBPACK_IMPORTED_MODULE_8__.DialogContent.create(attrs);
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
                                  vm_0.onCancel(...args);
                                },
                                opts: null
                              }
                            },
                            slots: {
                              'default': function(component) {
                                return [
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                    "span",
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                      const fn_0 = () => {
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.cancelText || vm_0.locale?.Cancel }`);
                                      };
                                      fn_0();
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["cancelText"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["locale","Cancel"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                          disabled: undefined
                        });
                        const fn_0 = () => {
                          attrs.disabled = vm_0.confirmSpinner;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["confirmSpinner"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
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
                                  vm_0.onConfirm(...args);
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
                                              },
                                            });
                                            const el = _spinner__WEBPACK_IMPORTED_MODULE_4__.Spinner.create(attrs);
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
                                    attrs.expect = vm_0.confirmSpinner;
                                  };
                                  fn_0();
                                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["confirmSpinner"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                  const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                })(),
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                    "span",
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                      const fn_0 = () => {
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${ vm_0.confirmText || vm_0.locale?.Ok }`);
                                      };
                                      fn_0();
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["confirmText"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["locale","Ok"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                          disabled: undefined,
                          class: `md-primary`
                        });
                        const fn_0 = () => {
                          attrs.disabled = vm_0.confirmSpinner || (vm_0.inputRequired && !vm_0.inputValue);
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["confirmSpinner"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["inputRequired"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["inputValue"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _button__WEBPACK_IMPORTED_MODULE_1__.Button.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
              });
              const el = _dialog_actions__WEBPACK_IMPORTED_MODULE_7__.DialogActions.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })()
            ];
          }
        }
      },
      __portalDisabled: undefined,
      active: undefined,
      fullscreen: false,
      closeOnOutsideClick: false
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
    const el = _dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/dialog/index.js":
/*!*********************************************!*\
  !*** ../jinge-material/lib/dialog/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": () => (/* reexport safe */ _dialog__WEBPACK_IMPORTED_MODULE_1__.Dialog),
/* harmony export */   "DialogActions": () => (/* reexport safe */ _dialog_actions__WEBPACK_IMPORTED_MODULE_4__.DialogActions),
/* harmony export */   "DialogAlert": () => (/* reexport safe */ _dialog_alert__WEBPACK_IMPORTED_MODULE_5__.DialogAlert),
/* harmony export */   "DialogConfirm": () => (/* reexport safe */ _dialog_confirm__WEBPACK_IMPORTED_MODULE_6__.DialogConfirm),
/* harmony export */   "DialogContent": () => (/* reexport safe */ _dialog_content__WEBPACK_IMPORTED_MODULE_3__.DialogContent),
/* harmony export */   "DialogPrompt": () => (/* reexport safe */ _dialog_prompt__WEBPACK_IMPORTED_MODULE_7__.DialogPrompt),
/* harmony export */   "DialogTitle": () => (/* reexport safe */ _dialog_title__WEBPACK_IMPORTED_MODULE_2__.DialogTitle),
/* harmony export */   "showConfirmOrPrompt": () => (/* reexport safe */ _dialog_confirm__WEBPACK_IMPORTED_MODULE_6__.showConfirmOrPrompt)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/dialog/style/index.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "../jinge-material/lib/dialog/dialog.js");
/* harmony import */ var _dialog_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-title */ "../jinge-material/lib/dialog/dialog-title.js");
/* harmony import */ var _dialog_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-content */ "../jinge-material/lib/dialog/dialog-content.js");
/* harmony import */ var _dialog_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-actions */ "../jinge-material/lib/dialog/dialog-actions.js");
/* harmony import */ var _dialog_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-alert */ "../jinge-material/lib/dialog/dialog-alert.js");
/* harmony import */ var _dialog_confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-confirm */ "../jinge-material/lib/dialog/dialog-confirm.js");
/* harmony import */ var _dialog_prompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-prompt */ "../jinge-material/lib/dialog/dialog-prompt.js");








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/dialog/style/index.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/dialog/style/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/dialog/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/spinner/index.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/spinner/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spinner": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/spinner/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/spinner/index.tpl.js");


function csize(v) {
  if (v === "normal") {
    v = 48;
  } else if (v === "small") {
    v = 36;
  } else if (v === "large") {
    v = 64;
  }
  if ((0,jinge__WEBPACK_IMPORTED_MODULE_1__.isString)(v)) {
    v = parseInt(v);
  }
  return v;
}
class Spinner extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
    _jg0._determinate = "value" in attrs;const f2_jg0402 = () => {
    _jg0.value = attrs.value; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("value", f2_jg0402);const f3_jg0402 = () => {
    _jg0.size = csize(attrs.size); }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("size", f3_jg0402);
  }
  get value() {
    return this._value;
  }
  set value(v) {
    if (!this._determinate)
      return;
    v = Number(v);
    if (this._value === v)
      return;
    this._value = v;
    this.__updateIfNeed(this.attachCircleStyle);
  }
  attachCircleStyle() {
    const circle = this.__getRef("circle");
    let v = this.value;
    if (v > 100)
      v = 100;
    else if (v < 0)
      v = 0;
    circle.style.strokeDashoffset = 2 * Math.PI * 22 * (100 - v) / 100 + "px";
  }
  __afterRender() {
    if (this._determinate) {
      this.attachCircleStyle();
    }
  }
}
Spinner.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/spinner/index.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/spinner/index.tpl.js ***!
  \**************************************************/
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createSVGElement)(
        "svg",
        {
          preserveAspectRatio: `xMidYMid meet`,
          focusable: `false`,
          viewBox: `0 0 48 48`
        },
        (() => {
          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createSVGElement)(
            "circle",
            {
              "stroke-linecap": `round`,
              cx: `50%`,
              cy: `50%`,
              "stroke-width": `4`,
              r: `22`
            },
          );
          vm_0.__setRef('circle', el, component)
          return el;
        })()
      )
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-spinner', vm_0._determinate && 'md-determinate', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_determinate"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, ([vm_0.style, { width: vm_0.size, height: vm_0.size }]));
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["size"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/spinner/style/index.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/spinner/style/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/spinner/style/index.css");




/***/ })

}]);
//# sourceMappingURL=src_pages_components_dialog_index_ts.js.map