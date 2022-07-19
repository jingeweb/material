/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entry/app.ts":
/*!**************************!*\
  !*** ./src/entry/app.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/router */ "./src/service/router.ts");
/* harmony import */ var _service_page_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/page-state */ "./src/service/page-state.ts");
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.html */ "./src/entry/app.html");




class App extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.__setContext("router", _service_router__WEBPACK_IMPORTED_MODULE_1__.router);
    _jg0.isSplash = _service_page_state__WEBPACK_IMPORTED_MODULE_2__.pageState.isSplash;
    _jg0.appTitle = _service_page_state__WEBPACK_IMPORTED_MODULE_2__.pageState.title;
    _jg0.menuShown = false;
    _service_page_state__WEBPACK_IMPORTED_MODULE_2__.pageState.__on("is-splash-change", (isSplash) => {
      _jg0.isSplash = isSplash;
    });
    _service_page_state__WEBPACK_IMPORTED_MODULE_2__.pageState.__on("title-change", (title) => {
      _jg0.appTitle = title;
    });
    _jg0.hideFooter = true;
    _service_router__WEBPACK_IMPORTED_MODULE_1__.router.beforeEach(() => {
      _jg0.hideFooter = true;
    });
    _service_router__WEBPACK_IMPORTED_MODULE_1__.router.afterEach(() => {
      _jg0.hideFooter = false;
    });
  }
  __afterRender() {
    _service_router__WEBPACK_IMPORTED_MODULE_1__.router.start();
  }
}
App.template = _app_html__WEBPACK_IMPORTED_MODULE_3__["default"];


/***/ }),

/***/ "./src/entry/routes.ts":
/*!*****************************!*\
  !*** ./src/entry/routes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  {
    name: "home",
    path: "/",
    component() {
      return __async(this, null, function* () {
        return (yield __webpack_require__.e(/*! import() */ "src_pages_home_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home */ "./src/pages/home/index.ts"))).PageHome;
      });
    }
  },
  {
    name: "about",
    path: "/about",
    component: () => __async(void 0, null, function* () {
      return (yield __webpack_require__.e(/*! import() */ "src_pages_about_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/about */ "./src/pages/about.ts"))).PageAbout;
    })
  },
  {
    name: "getting-started",
    path: "/getting-started",
    component: () => __async(void 0, null, function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_clipboard_2_0_11_node_modules_clipboard_dist_clipboard_js-node_modu-c1cf79"), __webpack_require__.e("src_pages_getting-started_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/getting-started */ "./src/pages/getting-started.ts"))).PageGettingStarted;
    })
  },
  {
    name: "license",
    path: "/license",
    component: () => __async(void 0, null, function* () {
      return (yield __webpack_require__.e(/*! import() */ "src_pages_license_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/license */ "./src/pages/license.ts"))).PageLicense;
    })
  },
  {
    path: "/(.*)",
    redirect: "home"
  }
]);


/***/ }),

/***/ "./src/layout/footer.ts":
/*!******************************!*\
  !*** ./src/layout/footer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _footer_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.html */ "./src/layout/footer.html");


class Footer extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.hide = attrs.hide; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("hide", f1_jg0402);const f2_jg0402 = () => {
    _jg0.isSplash = attrs.isSplash; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("isSplash", f2_jg0402);
  }
}
Footer.template = _footer_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/layout/header.ts":
/*!******************************!*\
  !*** ./src/layout/header.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/service/index.ts");
/* harmony import */ var _header_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.global.scss */ "./src/layout/header.global.scss");
/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.html */ "./src/layout/header.html");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales */ "./src/layout/locales.ts");






function getThemes() {
  return [
    {
      theme: "default",
      name: "默认蓝"
    },
    {
      theme: "default-dark",
      name: "暗夜蓝"
    },
    {
      theme: "purple",
      name: "炫酷紫"
    },
    {
      theme: "purple-dark",
      name: "暗夜紫"
    }
  ];
}
class Header extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.isSplash = attrs.isSplash; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("isSplash", f1_jg0402);const f2_jg0402 = () => {
    _jg0.title = attrs.title; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("title", f2_jg0402);
    _jg0._locales = _locales__WEBPACK_IMPORTED_MODULE_5__["default"];
    (0,jinge_i18n__WEBPACK_IMPORTED_MODULE_1__.watchForComponent)(
      _jg0,
      () => {
        _jg0.themes = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(getThemes());
      },
      true
    );
    _jg0.locale = _locales__WEBPACK_IMPORTED_MODULE_5__["default"].find((l) => l.locale === (0,jinge_i18n__WEBPACK_IMPORTED_MODULE_1__.getLocale)()).name;
  }
  toggleMenu() {
    this.__notify("toggle-menu");
  }
  changeLocale(loc) {
    this.locale = loc.name;
    (0,_service__WEBPACK_IMPORTED_MODULE_2__.setCurrentLocale)(loc.locale);
  }
  changeTheme(theme) {
    (0,_service__WEBPACK_IMPORTED_MODULE_2__.setCurrentTheme)(theme);
  }
}
Header.template = _header_html__WEBPACK_IMPORTED_MODULE_4__["default"];


/***/ }),

/***/ "./src/layout/index.ts":
/*!*****************************!*\
  !*** ./src/layout/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_2__.Footer),
/* harmony export */   "Header": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_1__.Header),
/* harmony export */   "Nav": () => (/* reexport safe */ _nav__WEBPACK_IMPORTED_MODULE_0__.Nav)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/layout/nav.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/layout/header.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/layout/footer.ts");





/***/ }),

/***/ "./src/layout/locales.ts":
/*!*******************************!*\
  !*** ./src/layout/locales.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! jinge-i18n-ignore */
const locales = [
  {
    locale: "zh_cn",
    name: "简体中文"
  },
  {
    locale: "en",
    name: "English"
  }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locales);


/***/ }),

/***/ "./src/layout/nav-content.ts":
/*!***********************************!*\
  !*** ./src/layout/nav-content.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavContent": () => (/* binding */ NavContent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _nav_content_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-content.html */ "./src/layout/nav-content.html");



let aid = 0;
function generateMenus() {
  function loopName(arr) {
    arr.forEach((m) => {
      m.key = `m-${aid++}`;
      const i = m.name.indexOf("|");
      if (i > 0) {
        m.tip = m.name.substring(i + 1);
        m.name = m.name.substring(0, i);
      }
      m.children && loopName(m.children);
    });
    return arr;
  }
  return loopName([
    {
      name: "首页",
      state: "home"
    },
    {
      name: "快速上手",
      state: "getting-started"
    },
    {
      name: "主题",
      state: "theme"
    },
    {
      name: "路由整合",
      state: "use-router"
    },
    {
      name: "国际化",
      state: "i18n"
    },
    {
      name: "UI 规范",
      state: "ui",
      children: [
        {
          name: "阴影|Elevation",
          state: "ui.elevation"
        },
        {
          name: "布局|Layout",
          state: "ui.layout"
        },
        {
          name: "版式|Typography",
          state: "ui.typography"
        },
        {
          name: "状态|States",
          state: "ui.states"
        }
      ]
    },
    {
      name: "组件",
      state: "components",
      children: [
        {
          name: "头像|Avatar",
          state: "components.avatar"
        },
        {
          name: "徽章|Badge",
          state: "components.badge"
        },
        {
          name: "底栏|Bottom Bar",
          state: "components.bottom-bar"
        },
        {
          name: "按钮|Button",
          state: "components.button"
        },
        {
          name: "卡片|Card",
          state: "components.card"
        },
        {
          name: "内容|Content",
          state: "components.content"
        },
        {
          name: "日期选择|Datepicker",
          state: "components.datepicker"
        },
        {
          name: "对话框|Dialog",
          state: "components.dialog"
        },
        {
          name: "分隔线|Divider",
          state: "components.divider"
        },
        {
          name: "抽屉|Drawer",
          state: "components.drawer"
        },
        {
          name: "空提示|Empty State",
          state: "components.empty-state"
        },
        {
          name: "表单|Forms",
          state: "components.forms",
          children: [
            {
              name: "自动补全|Autocomplete",
              state: "components.forms.autocomplete"
            },
            {
              name: "多选框|Checkbox",
              state: "components.forms.checkbox"
            },
            {
              name: "纸片|Chips",
              state: "components.forms.chips"
            },
            {
              name: "文件选择|File",
              state: "components.forms.file"
            },
            {
              name: "文本框|Input & Textarea",
              state: "components.forms.input"
            },
            {
              name: "单选项|Radio",
              state: "components.forms.radio"
            },
            {
              name: "下拉选择|Select",
              state: "components.forms.select"
            },
            {
              name: "切换|Switch",
              state: "components.forms.switch"
            }
          ]
        },
        {
          name: "文本高亮|Highlight",
          state: "components.highlight"
        },
        {
          name: "图标|Icon",
          state: "components.icon"
        },
        {
          name: "列表|List",
          state: "components.list"
        },
        {
          name: "菜单|Menu",
          state: "components.menu"
        },
        {
          name: "分页|Pagination",
          state: "components.pagination"
        },
        {
          name: "气泡确认框|Popconfirm",
          state: "components.popconfirm"
        },
        {
          name: "气泡卡片|Popover",
          state: "components.popover"
        },
        {
          name: "进度条|Progress",
          state: "components.progress"
        },
        {
          name: "消息提示|Snackbar",
          state: "components.snackbar"
        },
        {
          name: "正在加载|Spinner",
          state: "components.spinner"
        },
        {
          name: "步骤条|Steppers",
          state: "components.steppers"
        },
        {
          name: "子标题|Subheader",
          state: "components.subheader"
        },
        {
          name: "表格|Table",
          state: "components.table"
        },
        {
          name: "标签页|Tabs",
          state: "components.tabs"
        },
        {
          name: "工具栏|Toolbar",
          state: "components.toolbar"
        },
        {
          name: "工具提示|Tooltip",
          state: "components.tooltip"
        }
      ]
    },
    {
      name: "关于",
      state: "about"
    },
    {
      name: "许可证",
      state: "license"
    }
  ]);
}
class NavContent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    (0,jinge_i18n__WEBPACK_IMPORTED_MODULE_1__.watchForComponent)(
      _jg0,
      () => {
        _jg0.menus = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(generateMenus());
      },
      true
    );
  }
}
NavContent.template = _nav_content_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/layout/nav-menu.ts":
/*!********************************!*\
  !*** ./src/layout/nav-menu.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenu": () => (/* binding */ NavMenu)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _nav_menu_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-menu.html */ "./src/layout/nav-menu.html");


class NavMenu extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._menu = attrs._menu;
  }
}
NavMenu.template = _nav_menu_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/layout/nav.ts":
/*!***************************!*\
  !*** ./src/layout/nav.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nav": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/service/index.ts");
/* harmony import */ var _nav_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.html */ "./src/layout/nav.html");



function _r(routeInfo) {
  const routeInfoPath = routeInfo._routePath;
  return routeInfoPath.length > 0 ? routeInfoPath[routeInfoPath.length - 1].route : null;
}
class Nav extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.isSplash = attrs.isSplash; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("isSplash", f1_jg0402);const f2_jg0402 = () => {
    _jg0.menuShown = attrs.menuShown; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("menuShown", f2_jg0402);
    _jg0._obd = null;
  }
  hideMenu() {
    this.menuShown = false;
    this.__notify("hide-menu");
  }
  __afterRender() {
    this._obd = _service__WEBPACK_IMPORTED_MODULE_1__.router.afterEach((from, to) => {
      if (_r(from) !== _r(to)) {
        document.documentElement.scrollTop = 0;
      }
      this.hideMenu();
    });
  }
  __beforeDestroy() {
    this._obd();
  }
}
Nav.template = _nav_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/service/code-source.ts":
/*!************************************!*\
  !*** ./src/service/code-source.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIndentedSource": () => (/* binding */ getIndentedSource)
/* harmony export */ });
function getIndentedSource(source) {
  let lines = source.split("\n");
  let matches;
  if (lines[0] === "") {
    lines.shift();
  }
  const indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null;
  if (indentation) {
    lines = lines.map((line) => {
      line = line.replace(indentation, "");
      return line.replace(/\t/g, "  ");
    });
    return lines.join("\n").trim();
  }
  return source;
}


/***/ }),

/***/ "./src/service/env.ts":
/*!****************************!*\
  !*** ./src/service/env.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "env": () => (/* binding */ env)
/* harmony export */ });
const env = window.__env__;


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS_SPLASH_CHANGED": () => (/* reexport safe */ _page_state__WEBPACK_IMPORTED_MODULE_0__.IS_SPLASH_CHANGED),
/* harmony export */   "TITLE_CHANGED": () => (/* reexport safe */ _page_state__WEBPACK_IMPORTED_MODULE_0__.TITLE_CHANGED),
/* harmony export */   "env": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_3__.env),
/* harmony export */   "getIndentedSource": () => (/* reexport safe */ _code_source__WEBPACK_IMPORTED_MODULE_1__.getIndentedSource),
/* harmony export */   "pageState": () => (/* reexport safe */ _page_state__WEBPACK_IMPORTED_MODULE_0__.pageState),
/* harmony export */   "router": () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_4__.router),
/* harmony export */   "setCurrentLocale": () => (/* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_2__.setCurrentLocale),
/* harmony export */   "setCurrentTheme": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_5__.setCurrentTheme)
/* harmony export */ });
/* harmony import */ var _page_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-state */ "./src/service/page-state.ts");
/* harmony import */ var _code_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-source */ "./src/service/code-source.ts");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale */ "./src/service/locale.ts");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ "./src/service/env.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/service/router.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ "./src/service/theme.ts");








/***/ }),

/***/ "./src/service/locale.ts":
/*!*******************************!*\
  !*** ./src/service/locale.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentLocale": () => (/* binding */ setCurrentLocale)
/* harmony export */ });
/* harmony import */ var jinge_material_locales_zh_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge-material/locales/zh_cn */ "../jinge-material/locales/zh_cn.js");
/* harmony import */ var jinge_material_locales_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/locales/en */ "../jinge-material/locales/en.js");
/* harmony import */ var jinge_material_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/config */ "../jinge-material/config/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env */ "./src/service/env.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/service/router.ts");






function loadFontIfNeed(locale) {
  const ID = "roboto-webfont-link";
  if (locale !== "en" || document.head.querySelector("#" + ID))
    return;
  const $s = document.createElement("link");
  $s.id = ID;
  $s.rel = "stylesheet";
  $s.href = "https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:300,400,500,700";
  document.head.appendChild($s);
}
function setCurrentLocale(targetLocale) {
  loadFontIfNeed(targetLocale);
  (0,jinge_material_config__WEBPACK_IMPORTED_MODULE_2__.setLocale)(targetLocale === "en" ? jinge_material_locales_en__WEBPACK_IMPORTED_MODULE_1__["default"] : jinge_material_locales_zh_cn__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const newBaseHref = `${_env__WEBPACK_IMPORTED_MODULE_4__.env.baseHref}${targetLocale}/`;
  _router__WEBPACK_IMPORTED_MODULE_5__.router.baseHref = newBaseHref;
  const currentLocale = (0,jinge_i18n__WEBPACK_IMPORTED_MODULE_3__.getLocale)();
  if (targetLocale === currentLocale) {
    return;
  }
  const oldBaseHrefRegExp = new RegExp(`^${_env__WEBPACK_IMPORTED_MODULE_4__.env.baseHref}${currentLocale}/`);
  (0,jinge_i18n__WEBPACK_IMPORTED_MODULE_3__.setLocale)(targetLocale);
  history.pushState(null, null, location.pathname.replace(oldBaseHrefRegExp, newBaseHref));
  localStorage.setItem(_env__WEBPACK_IMPORTED_MODULE_4__.env.localeKey, targetLocale);
  _env__WEBPACK_IMPORTED_MODULE_4__.env.locale = targetLocale;
}


/***/ }),

/***/ "./src/service/page-state.ts":
/*!***********************************!*\
  !*** ./src/service/page-state.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS_SPLASH_CHANGED": () => (/* binding */ IS_SPLASH_CHANGED),
/* harmony export */   "TITLE_CHANGED": () => (/* binding */ TITLE_CHANGED),
/* harmony export */   "pageState": () => (/* binding */ pageState)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./src/service/env.ts");


const TITLE_CHANGED = Symbol("title-changed");
const IS_SPLASH_CHANGED = Symbol("is-splash-changed");
function isHome(pathname) {
  if (_env__WEBPACK_IMPORTED_MODULE_1__.env.baseHref !== "/" && pathname.startsWith(_env__WEBPACK_IMPORTED_MODULE_1__.env.baseHref)) {
    pathname = pathname.substring(_env__WEBPACK_IMPORTED_MODULE_1__.env.baseHref.length - 1);
  }
  return pathname === "/" || pathname === "/zh_cn/" || pathname === "/en/";
}
class PageStateManager extends jinge__WEBPACK_IMPORTED_MODULE_0__.Messenger {
  constructor() {
    super();
    this._title = "";
    this._splash = isHome(location.pathname);
  }
  get title() {
    return this._title;
  }
  set title(v) {
    if (this._title === v)
      return;
    this._title = v ? v + " - Jinge Material" : "Jinge Material";
    document.title = this._title;
    this.__notify("title-change", v);
  }
  get isSplash() {
    return this._splash;
  }
  set isSplash(v) {
    if (this._splash === !!v)
      return;
    this._splash = !!v;
    this.__notify("is-splash-change", this._splash);
  }
}
const pageState = new PageStateManager();


/***/ }),

/***/ "./src/service/router.ts":
/*!*******************************!*\
  !*** ./src/service/router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge-router */ "../jinge-router/lib/index.js");

const router = new jinge_router__WEBPACK_IMPORTED_MODULE_0__.Router({
  mode: "html5"
});


/***/ }),

/***/ "./src/service/theme.ts":
/*!******************************!*\
  !*** ./src/service/theme.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentTheme": () => (/* binding */ setCurrentTheme)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./src/service/env.ts");


function setCurrentTheme(theme) {
  localStorage.setItem(_env__WEBPACK_IMPORTED_MODULE_1__.env.themeKey, theme);
  _env__WEBPACK_IMPORTED_MODULE_1__.env.theme = theme;
  const $head = document.head;
  const $oldLink = document.getElementById(_env__WEBPACK_IMPORTED_MODULE_1__.env.themeId);
  const $link = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)("link", {
    rel: "stylesheet",
    href: `${_env__WEBPACK_IMPORTED_MODULE_1__.env.baseHref}css/theme-${theme}.css`,
    id: _env__WEBPACK_IMPORTED_MODULE_1__.env.themeId
  });
  $link.onload = function() {
    $oldLink && $head.removeChild($oldLink);
  };
  $head.appendChild($link);
}


/***/ }),

/***/ "./src/entry/app.html":
/*!****************************!*\
  !*** ./src/entry/app.html ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../jinge-router/lib/index.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.scss */ "./src/entry/app.scss");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ "./src/layout/index.ts");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<Header>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              "toggle-menu": {
                fn: function(...args) {
                  vm_0.menuShown = !vm_0.menuShown;
                },
                opts: null
              }
            },
          },
          title: undefined,
          isSplash: undefined
        });
        const fn_0 = () => {
          attrs.title = vm_0.appTitle;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["appTitle"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.isSplash = vm_0.isSplash;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSplash"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = _layout__WEBPACK_IMPORTED_MODULE_3__.Header.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "div",
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<Nav>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                listeners: {
                  "hide-menu": {
                    fn: function(...args) {
                      vm_0.menuShown = false;
                    },
                    opts: null
                  }
                },
              },
              menuShown: undefined,
              isSplash: undefined
            });
            const fn_0 = () => {
              attrs.menuShown = vm_0.menuShown;
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["menuShown"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const fn_1 = () => {
              attrs.isSplash = vm_0.isSplash;
            };
            fn_1();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSplash"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const el = _layout__WEBPACK_IMPORTED_MODULE_3__.Nav.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })(),
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<router-view>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              },
              doc: `after`
            });
            const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterViewComponent.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })(),
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<Footer>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              },
              hide: undefined,
              isSplash: undefined
            });
            const fn_0 = () => {
              attrs.hide = vm_0.hideFooter;
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["hideFooter"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const fn_1 = () => {
              attrs.isSplash = vm_0.isSplash;
            };
            fn_1();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSplash"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const el = _layout__WEBPACK_IMPORTED_MODULE_3__.Footer.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })()
        );
        const fn_0 = () => {
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, ([_app_scss__WEBPACK_IMPORTED_MODULE_2__["default"].containerWrapper, 'md-layout-row', vm_0.isSplash && _app_scss__WEBPACK_IMPORTED_MODULE_2__["default"].splash]));
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSplash"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        return el;
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, ([_app_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container, vm_0.isSplash && _app_scss__WEBPACK_IMPORTED_MODULE_2__["default"].splash]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSplash"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/layout/footer.html":
/*!********************************!*\
  !*** ./src/layout/footer.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../jinge-router/lib/index.js");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.scss */ "./src/layout/footer.scss");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "footer",
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: _footer_scss__WEBPACK_IMPORTED_MODULE_2__["default"].mainFooterContainer
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: _footer_scss__WEBPACK_IMPORTED_MODULE_2__["default"].mainFooterSection
          },
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<router-link>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              },
              to: `about`,
              text: `关于`
            });
            const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })(),
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<router-link>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              },
              to: `license`,
              text: `许可证`
            });
            const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })()
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: _footer_scss__WEBPACK_IMPORTED_MODULE_2__["default"].mainFooterSection
          },
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "a",
            {
              href: `https://github.com/YuhangGe`,
              target: `_blank`
            },
            `Made with`,
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "span",
              {
                class: _footer_scss__WEBPACK_IMPORTED_MODULE_2__["default"].red
              },
              `❤`
            ),
            `by Yuhang Ge`
          )
        )
      )
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, ([_footer_scss__WEBPACK_IMPORTED_MODULE_2__["default"].mainFooter, vm_0.isSplash && _footer_scss__WEBPACK_IMPORTED_MODULE_2__["default"].splash, vm_0.hide && 'jg-hide']));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSplash"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["hide"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./src/layout/header.html":
/*!********************************!*\
  !*** ./src/layout/header.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/toolbar */ "../jinge-material/lib/toolbar/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-router */ "../jinge-router/lib/index.js");
/* harmony import */ var jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/icon */ "../jinge-material/lib/icon/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material-icons/lib/Menu.js */ "../jinge-material-icons/lib/Menu.js");
/* harmony import */ var jinge_material_lib_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge-material/lib/menu */ "../jinge-material/lib/menu/index.js");
/* harmony import */ var jinge_material_icons_lib_GTranslate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jinge-material-icons/lib/GTranslate.js */ "../jinge-material-icons/lib/GTranslate.js");
/* harmony import */ var jinge_material_icons_lib_ColorLens_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jinge-material-icons/lib/ColorLens.js */ "../jinge-material-icons/lib/ColorLens.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.scss */ "./src/layout/header.scss");











/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
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
                "div",
                {
                  class: `md-toolbar-row`
                },
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<router-link>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                              "a",
                              ...(() => {
                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                    debugName: "attrs_of_<md-icon>",
                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                  },
                                  class: `logo jinge-material-site-logo`,
                                  src: `assets/logo_nc.svg`
                                });
                                const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_3__.Icon.create(attrs);
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
                    to: `home`
                  });
                  const el = jinge_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkComponent.create(attrs);
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
                            vm_0.toggleMenu(...args);
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
                                debugName: "attrs_of_<md-icon-menu>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                            });
                            const el = jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    class: `md-icon-button menu`
                  });
                  const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_4__.Button.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "div",
                  {
                    class: `md-title`
                  },
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "span",
                    {
                      class: `md-xsmall-hide`
                    },
                    `Jinge Material`
                  ),
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "span",
                    {
                      class: `app-title`
                    },
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                      const fn_0 = () => {
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0.title}`);
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["title"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      return el;
                    })()
                  )
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-menu>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-button>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-icon-g_translate>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                        },
                                      });
                                      const el = jinge_material_icons_lib_GTranslate_js__WEBPACK_IMPORTED_MODULE_7__["default"].create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })(),
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                        "span",
                                        (() => {
                                          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                          const fn_0 = () => {
                                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0.locale}`);
                                          };
                                          fn_0();
                                          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["locale"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                              class: `locale`
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_4__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        },
                        'content': function(component) {
                          return [
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
                                          debugName: "attrs_of_<md-menu-item>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          listeners: {
                                            click: {
                                              fn: function(...args) {
                                                vm_0.changeLocale(vm_1.each)
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
                                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_1.each?.name}`);
                                                };
                                                fn_0();
                                                vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_menu__WEBPACK_IMPORTED_MODULE_6__.MenuItem.create(attrs);
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
                              attrs.loop = vm_0._locales;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_locales"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    size: `medium`
                  });
                  const el = jinge_material_lib_menu__WEBPACK_IMPORTED_MODULE_6__.Menu.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-menu>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-button>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                slots: {
                                  'default': function(component) {
                                    return [
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          debugName: "attrs_of_<md-icon-color_lens>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                        },
                                      });
                                      const el = jinge_material_icons_lib_ColorLens_js__WEBPACK_IMPORTED_MODULE_8__["default"].create(attrs);
                                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                    })()
                                    ];
                                  }
                                }
                              },
                              class: `md-icon-button`
                            });
                            const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_4__.Button.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        },
                        'content': function(component) {
                          return [
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
                                          debugName: "attrs_of_<md-menu-item>",
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                          listeners: {
                                            click: {
                                              fn: function(...args) {
                                                vm_0.changeTheme(vm_1.each.theme)
                                              },
                                              opts: null
                                            }
                                          },
                                          slots: {
                                            'default': function(component) {
                                              return [
                                              (() => {
                                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                                  "i",
                                                );
                                                const fn_0 = () => {
                                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, `theme-preview ${vm_1.each?.theme}`);
                                                };
                                                fn_0();
                                                vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","theme"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })(),
                                              (() => {
                                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                                const fn_0 = () => {
                                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_1.each?.name}`);
                                                };
                                                fn_0();
                                                vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                return el;
                                              })()
                                              ];
                                            }
                                          }
                                        },
                                      });
                                      const el = jinge_material_lib_menu__WEBPACK_IMPORTED_MODULE_6__.MenuItem.create(attrs);
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
                              attrs.loop = vm_0.themes;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["themes"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    size: `medium`,
                    class: `header-theme-menu`
                  });
                  const el = jinge_material_lib_menu__WEBPACK_IMPORTED_MODULE_6__.Menu.create(attrs);
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
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-icon>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              src: `assets/icon/github.svg`,
                              class: `icon-github`
                            });
                            const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_3__.Icon.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    class: `md-icon-button`,
                    href: `https://github.com/jingeweb/jinge-material`,
                    target: `_blank`
                  });
                  const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_4__.Button.create(attrs);
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
      class: undefined,
      elevation: undefined
    });
    const fn_0 = () => {
      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)((0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([_header_scss__WEBPACK_IMPORTED_MODULE_9__["default"].mainHeader, vm_0.isSplash && _header_scss__WEBPACK_IMPORTED_MODULE_9__["default"].splash]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSplash"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.elevation = vm_0.isSplash ? 0 : 2;
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSplash"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "./src/layout/nav-content.html":
/*!*************************************!*\
  !*** ./src/layout/nav-content.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _nav_content_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-content.scss */ "./src/layout/nav-content.scss");
/* harmony import */ var _nav_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu */ "./src/layout/nav-menu.ts");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _nav_content_scss__WEBPACK_IMPORTED_MODULE_1__["default"].mainNavContent
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
                      debugName: "attrs_of_<NavMenu>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    _menu: undefined
                  });
                  const fn_0 = () => {
                    attrs._menu = vm_1.each;
                  };
                  fn_0();
                  vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _nav_menu__WEBPACK_IMPORTED_MODULE_2__.NavMenu.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          loop: undefined,
          key: `each.key`
        });
        const fn_0 = () => {
          attrs.loop = vm_0.menus;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["menus"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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

/***/ "./src/layout/nav-menu.html":
/*!**********************************!*\
  !*** ./src/layout/nav-menu.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../jinge-router/lib/index.js");
/* harmony import */ var _nav_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu */ "./src/layout/nav-menu.ts");
/* harmony import */ var _nav_menu_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-menu.scss */ "./src/layout/nav-menu.scss");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        debugName: "attrs_of_<router-link>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        slots: {
          'default': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "a",
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "span",
                  (() => {
                    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                    const fn_0 = () => {
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0._menu?.name}`);
                    };
                    fn_0();
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_menu","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                    return el;
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
                              "span",
                              {
                                class: `tip`
                              },
                              (() => {
                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                const fn_0 = () => {
                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0._menu?.tip}`);
                                };
                                fn_0();
                                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_menu","tip"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                    attrs.expect = vm_0._menu?.tip;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_menu","tip"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
      to: undefined,
      active: `active`
    });
    const fn_0 = () => {
      attrs.to = vm_0._menu?.state;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_menu","state"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
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
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: _nav_menu_scss__WEBPACK_IMPORTED_MODULE_3__["default"].mainNavLevel
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
                                debugName: "attrs_of_<NavMenu>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              _menu: undefined
                            });
                            const fn_0 = () => {
                              attrs._menu = vm_1.each;
                            };
                            fn_0();
                            vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _nav_menu__WEBPACK_IMPORTED_MODULE_2__.NavMenu.create(attrs);
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
                    attrs.loop = vm_0._menu?.children;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_menu","children"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
        }
      },
      expect: undefined
    });
    const fn_0 = () => {
      attrs.expect = !!vm_0._menu?.children;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_menu","children"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "./src/layout/nav.html":
/*!*****************************!*\
  !*** ./src/layout/nav.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/content */ "../jinge-material/lib/content/index.js");
/* harmony import */ var jinge_material_lib_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/drawer */ "../jinge-material/lib/drawer/index.js");
/* harmony import */ var jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/toolbar */ "../jinge-material/lib/toolbar/index.js");
/* harmony import */ var jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material/lib/icon */ "../jinge-material/lib/icon/index.js");
/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav.scss */ "./src/layout/nav.scss");
/* harmony import */ var _nav_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-content */ "./src/layout/nav-content.ts");








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _nav_scss__WEBPACK_IMPORTED_MODULE_5__["default"].mainNavContainer
      },
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
                      debugName: "attrs_of_<md-content>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<NavContent>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                            });
                            const el = _nav_content__WEBPACK_IMPORTED_MODULE_6__.NavContent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)([_nav_scss__WEBPACK_IMPORTED_MODULE_5__["default"].mainNav, 'md-elevation-1'])
                  });
                  const el = jinge_material_lib_content__WEBPACK_IMPORTED_MODULE_1__.Content.create(attrs);
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
          attrs.expect = !vm_0.isSplash;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isSplash"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-drawer>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              closed: {
                fn: function(...args) {
                  vm_0.hideMenu(...args);
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
                      debugName: "attrs_of_<md-toolbar>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      slots: {
                        'default': function(component) {
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-icon>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              class: `jinge-material-site-logo`,
                              style: `font-size: 24px; margin: 0 0 0 8px;`,
                              src: `assets/logo_nc.svg`
                            });
                            const el = jinge_material_lib_icon__WEBPACK_IMPORTED_MODULE_4__.Icon.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })(),
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "span",
                              {
                                class: `md-title`
                              },
                              `Jinge Material`
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                    class: `md-transparent`,
                    elevation: `0`
                  });
                  const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })(),
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "div",
                    {
                      class: _nav_scss__WEBPACK_IMPORTED_MODULE_5__["default"].mainNavDrawerContent
                    },
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<NavContent>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        },
                      });
                      const el = _nav_content__WEBPACK_IMPORTED_MODULE_6__.NavContent.create(attrs);
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
          active: undefined,
          fixed: true
        });
        const fn_0 = () => {
          attrs.active = vm_0.menuShown;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["menuShown"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_drawer__WEBPACK_IMPORTED_MODULE_2__.Drawer.create(attrs);
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

/***/ "../jinge-i18n/lib/components/switch.js":
/*!**********************************************!*\
  !*** ../jinge-i18n/lib/components/switch.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchLocaleComponent": () => (/* binding */ SwitchLocaleComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/service */ "../jinge-i18n/lib/core/service.js");


function createEl(component) {
  const locale = (0,_core_service__WEBPACK_IMPORTED_MODULE_1__.getLocale)();
  const renderFn = component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots[locale];
  if (!renderFn) {
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)("span", `missing ${locale} content`);
  }
  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
      slots: {
        default: renderFn
      }
    }
  });
  return jinge__WEBPACK_IMPORTED_MODULE_0__.Component.create(attrs);
}
class SwitchLocaleComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    (0,_core_service__WEBPACK_IMPORTED_MODULE_1__.watchForComponent)(_jg0, () => {
      _jg0.__updateIfNeed();
    });
  }
  __render() {
    const el = createEl(this);
    const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
    roots.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(el) ? el.__render() : roots;
  }
  __update() {
    const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
    const el = roots[0];
    const fd = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(el) ? el.__firstDOM : el;
    const pa = fd.parentNode;
    const newEl = createEl(this);
    roots[0] = newEl;
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(newEl)) {
      const nels = newEl.__render();
      pa.insertBefore(nels.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(nels) : nels[0], fd);
    } else {
      pa.insertBefore(newEl, fd);
    }
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(el)) {
      el.__destroy();
    } else {
      pa.removeChild(el);
    }
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(newEl)) {
      newEl.__handleAfterRender();
    }
  }
}


//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "../jinge-i18n/lib/components/text.js":
/*!********************************************!*\
  !*** ../jinge-i18n/lib/components/text.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AComponent": () => (/* binding */ AComponent),
/* harmony export */   "TComponent": () => (/* binding */ TComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/service */ "../jinge-i18n/lib/core/service.js");


class TComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("**", () => {
      _jg0.__updateIfNeed();
    });
    (0,_core_service__WEBPACK_IMPORTED_MODULE_1__.watchForComponent)(_jg0, () => {
      _jg0.__updateIfNeed();
    });
  }
  r() {
    return this.constructor.d((0,_core_service__WEBPACK_IMPORTED_MODULE_1__.getLocale)())(this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].passedAttrs);
  }
  __render() {
    return [(0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(this, this.r())];
  }
  __update() {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes[0], this.r());
  }
}
class AComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("**", () => {
      _jg0.__updateIfNeed();
    });
    (0,_core_service__WEBPACK_IMPORTED_MODULE_1__.watchForComponent)(_jg0, () => {
      _jg0.__updateIfNeed();
    });
    _jg0.c = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(_jg0.constructor.d.map((fn) => fn((0,_core_service__WEBPACK_IMPORTED_MODULE_1__.getLocale)())(attrs)));
  }
  __update() {
    this.constructor.d.forEach((fn, i) => {
      const v = fn((0,_core_service__WEBPACK_IMPORTED_MODULE_1__.getLocale)())(this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].passedAttrs);
      this.c[i] = v;
    });
  }
}


//# sourceMappingURL=text.js.map

/***/ }),

/***/ "../jinge-i18n/lib/core/service.js":
/*!*****************************************!*\
  !*** ../jinge-i18n/lib/core/service.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cw": () => (/* binding */ cw),
/* harmony export */   "getLocale": () => (/* binding */ getLocale),
/* harmony export */   "setLocale": () => (/* binding */ setLocale),
/* harmony export */   "t": () => (/* binding */ t),
/* harmony export */   "unwatch": () => (/* binding */ unwatch),
/* harmony export */   "w": () => (/* binding */ w),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "watchForComponent": () => (/* binding */ watchForComponent)
/* harmony export */ });
let currentLocale = window.I18N_DEFAULT_LOCALE || void 0;
const listeners = /* @__PURE__ */ new Set();
function getLocale() {
  return currentLocale;
}
function setLocale(locale) {
  if (currentLocale === locale)
    return;
  currentLocale = locale;
  listeners.forEach((fn) => fn(currentLocale));
}
function watch(fn, immediate = false) {
  if (immediate && currentLocale)
    fn(currentLocale);
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
function unwatch(fn) {
  listeners.delete(fn);
}
function watchForComponent(component, fn, immediate = false) {
  component.__addDeregisterFn(watch(fn, immediate));
}
const w = watch;
const cw = watchForComponent;
function t(fn, ctx) {
  return fn(currentLocale)(ctx);
}


//# sourceMappingURL=service.js.map

/***/ }),

/***/ "../jinge-i18n/lib/index.js":
/*!**********************************!*\
  !*** ../jinge-i18n/lib/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AComponent": () => (/* reexport safe */ _components_text__WEBPACK_IMPORTED_MODULE_1__.AComponent),
/* harmony export */   "SwitchLocaleComponent": () => (/* reexport safe */ _components_switch__WEBPACK_IMPORTED_MODULE_2__.SwitchLocaleComponent),
/* harmony export */   "TComponent": () => (/* reexport safe */ _components_text__WEBPACK_IMPORTED_MODULE_1__.TComponent),
/* harmony export */   "cw": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_0__.cw),
/* harmony export */   "getLocale": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_0__.getLocale),
/* harmony export */   "setLocale": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_0__.setLocale),
/* harmony export */   "t": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   "unwatch": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_0__.unwatch),
/* harmony export */   "w": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "watch": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchForComponent": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_0__.watchForComponent)
/* harmony export */ });
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/service */ "../jinge-i18n/lib/core/service.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/text */ "../jinge-i18n/lib/components/text.js");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/switch */ "../jinge-i18n/lib/components/switch.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material-icons/lib/ColorLens.js":
/*!************************************************!*\
  !*** ../jinge-material-icons/lib/ColorLens.js ***!
  \************************************************/
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
          d: `M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z`
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

/***/ "../jinge-material-icons/lib/GTranslate.js":
/*!*************************************************!*\
  !*** ../jinge-material-icons/lib/GTranslate.js ***!
  \*************************************************/
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
          d: `M21 4H11l-1-3H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8l1 3h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.35 0 2.48.5 3.35 1.3L9.03 8.57c-.38-.36-1.04-.78-2.03-.78-1.74 0-3.15 1.44-3.15 3.21S5.26 14.21 7 14.21c2.01 0 2.84-1.44 2.92-2.41H7v-1.71h4.68c.07.31.12.61.12 1.02C11.8 13.97 9.89 16 7 16zm6.17-5.42h3.7c-.43 1.25-1.11 2.43-2.05 3.47-.31-.35-.6-.72-.86-1.1l-.79-2.37zm8.33 9.92c0 .55-.45 1-1 1H14l2-2.5-1.04-3.1 3.1 3.1.92-.92-3.3-3.25.02-.02c1.13-1.25 1.93-2.69 2.4-4.22H20v-1.3h-4.53V8h-1.29v1.29h-1.44L11.46 5.5h9.04c.55 0 1 .45 1 1v14z`
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

/***/ "../jinge-material-icons/lib/KeyboardArrowDown.js":
/*!********************************************************!*\
  !*** ../jinge-material-icons/lib/KeyboardArrowDown.js ***!
  \********************************************************/
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
          d: `M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z`
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

/***/ "../jinge-material-icons/lib/Menu.js":
/*!*******************************************!*\
  !*** ../jinge-material-icons/lib/Menu.js ***!
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
          d: `M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z`
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

/***/ "../jinge-material-icons/lib/_icon.js":
/*!********************************************!*\
  !*** ../jinge-material-icons/lib/_icon.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseIcon": () => (/* binding */ BaseIcon),
/* harmony export */   "svgTagAttrs": () => (/* binding */ svgTagAttrs)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _icon_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_icon.tpl.js */ "../jinge-material-icons/lib/_icon.tpl.js");



const NUM_REGEXP = /^\d+$/;

function _size(v) {
  if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isNumber)(v) || ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && NUM_REGEXP.test(v))) {
    return v + 'px';
  } else {
    return v;
  }
}
function _style(attrs) {
  let sty = attrs.style || '';
  if (attrs.size) {
    if (sty && !sty.endsWith(';')) {
      sty += ';';
    }
    sty += `font-size:${_size(attrs.size)};`;
  }
  return sty;
}

const svgTagAttrs = {
  xmlns: `http://www.w3.org/2000/svg`,
  height: `24`,
  viewBox: `0 0 24 24`,
  width: `24`
};

class BaseIcon extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static template = _icon_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.className = attrs.class; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("class", f1_jg0402);const f2_jg0402 = () => {
    _jg0.style = attrs.style || attrs.size ? _style(attrs) : null; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("style", f2_jg0402);attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("size", f2_jg0402);
  }
  __afterRender() {
    this.__domPassListeners();
  }
}


/***/ }),

/***/ "../jinge-material-icons/lib/_icon.tpl.js":
/*!************************************************!*\
  !*** ../jinge-material-icons/lib/_icon.tpl.js ***!
  \************************************************/
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
      "i",
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "class", `md-icon${vm_0.className ? ' ' + vm_0.className : ''}`);
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["className"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "style", vm_0.style);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/button/style/index.css":
/*!****************************************************!*\
  !*** ../jinge-material/lib/button/style/index.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/content/style/index.css":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/content/style/index.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/drawer/style/index.css":
/*!****************************************************!*\
  !*** ../jinge-material/lib/drawer/style/index.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/icon/style/index.css":
/*!**************************************************!*\
  !*** ../jinge-material/lib/icon/style/index.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/list/style/index.css":
/*!**************************************************!*\
  !*** ../jinge-material/lib/list/style/index.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/menu/style/index.css":
/*!**************************************************!*\
  !*** ../jinge-material/lib/menu/style/index.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/overlay/style/index.css":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/overlay/style/index.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/popover/style/index.css":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/popover/style/index.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/ripple/style/index.css":
/*!****************************************************!*\
  !*** ../jinge-material/lib/ripple/style/index.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/lib/toolbar/style/index.css":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/toolbar/style/index.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../jinge-material/style/index.css":
/*!*****************************************!*\
  !*** ../jinge-material/style/index.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/entry/app.scss":
/*!****************************!*\
  !*** ./src/entry/app.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container--C5PBg","splash":"splash--LmyWA","containerWrapper":"container-wrapper--HOg6D"});

/***/ }),

/***/ "./src/entry/style.scss":
/*!******************************!*\
  !*** ./src/entry/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./src/layout/footer.scss":
/*!********************************!*\
  !*** ./src/layout/footer.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"mainFooter":"main-footer--kDcIy","splash":"splash--U1OtU","mainFooterContainer":"main-footer-container--fjKVR","red":"red--mlNCo","mainFooterSection":"main-footer-section--x6v2b"});

/***/ }),

/***/ "./src/layout/header.global.scss":
/*!***************************************!*\
  !*** ./src/layout/header.global.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/layout/header.scss":
/*!********************************!*\
  !*** ./src/layout/header.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"mainHeader":"main-header--J0L_x","splash":"splash--QC6H6"});

/***/ }),

/***/ "./src/layout/nav-content.scss":
/*!*************************************!*\
  !*** ./src/layout/nav-content.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"mainNavContent":"main-nav-content--wCSAx","w":"w--t_iVe","mdIcon":"md-icon--o6pDK","tip":"tip--lU26T","active":"active--khgS0"});

/***/ }),

/***/ "./src/layout/nav-menu.scss":
/*!**********************************!*\
  !*** ./src/layout/nav-menu.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"mainNavLevel":"main-nav-level--o3yZK"});

/***/ }),

/***/ "./src/layout/nav.scss":
/*!*****************************!*\
  !*** ./src/layout/nav.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"mainNav":"main-nav--ltpIL","navLeaveActive":"nav-leave-active--ijl9J","navEnterActive":"nav-enter-active--fRzcx","navEnterTo":"nav-enter-to--XElH3","mdDrawer":"md-drawer--JxvR6","mainNavDrawerContent":"main-nav-drawer-content--c1Qfm"});

/***/ }),

/***/ "../jinge-material/config/index.js":
/*!*****************************************!*\
  !*** ../jinge-material/config/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAndWatchLocale": () => (/* reexport safe */ _lib_config_index__WEBPACK_IMPORTED_MODULE_0__.getAndWatchLocale),
/* harmony export */   "getLocale": () => (/* reexport safe */ _lib_config_index__WEBPACK_IMPORTED_MODULE_0__.getLocale),
/* harmony export */   "setLocale": () => (/* reexport safe */ _lib_config_index__WEBPACK_IMPORTED_MODULE_0__.setLocale),
/* harmony export */   "unwatchLocale": () => (/* reexport safe */ _lib_config_index__WEBPACK_IMPORTED_MODULE_0__.unwatchLocale),
/* harmony export */   "watchLocale": () => (/* reexport safe */ _lib_config_index__WEBPACK_IMPORTED_MODULE_0__.watchLocale)
/* harmony export */ });
/* harmony import */ var _lib_config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/_config/index */ "../jinge-material/lib/_config/index.js");



/***/ }),

/***/ "../jinge-material/lib/_config/index.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/_config/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAndWatchLocale": () => (/* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_0__.getAndWatchLocale),
/* harmony export */   "getLocale": () => (/* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_0__.getLocale),
/* harmony export */   "setLocale": () => (/* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_0__.setLocale),
/* harmony export */   "unwatchLocale": () => (/* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_0__.unwatchLocale),
/* harmony export */   "watchLocale": () => (/* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_0__.watchLocale)
/* harmony export */ });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "../jinge-material/lib/_config/locale.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/_config/locale.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/_config/locale.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAndWatchLocale": () => (/* binding */ getAndWatchLocale),
/* harmony export */   "getLocale": () => (/* binding */ getLocale),
/* harmony export */   "setLocale": () => (/* binding */ setLocale),
/* harmony export */   "unwatchLocale": () => (/* binding */ unwatchLocale),
/* harmony export */   "watchLocale": () => (/* binding */ watchLocale)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

let watcher;
let currentLocale;
function setLocale(v) {
  currentLocale = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(v);
  watcher?.forEach((listener) => {
    listener(currentLocale);
  });
}
function getLocale() {
  if (!currentLocale) {
    throw new Error("locale not found. use setLocale() first.");
  }
  return currentLocale;
}
function watchLocale(listener, immediate = false) {
  if (!watcher)
    watcher = [];
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayPushIfNotExist)(watcher, listener);
  if (immediate) {
    listener(getLocale());
  }
}
function getAndWatchLocale(listener, immediate = false) {
  watchLocale(listener, immediate);
  return getLocale();
}
function unwatchLocale(listener) {
  if (!watcher)
    return;
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(watcher, listener);
}


//# sourceMappingURL=locale.js.map

/***/ }),

/***/ "../jinge-material/lib/_locales/en.js":
/*!********************************************!*\
  !*** ../jinge-material/lib/_locales/en.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ en_default)
/* harmony export */ });
const en_dict = {
  sizePerPage: "items per page:",
  jumpToPage: "Jump to page:",
  totalCount: "${ctx.count} total,",
  Cancel: "Cancel",
  Ok: "Ok",
  datePlaceholder: "Please choose date",
  dateFormat: "yyyy-MM-dd",
  firstDayOfWeek: 0,
  dayPickerHeader: "MMMM YYYY",
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
};
var en_default = en_dict;


//# sourceMappingURL=en.js.map

/***/ }),

/***/ "../jinge-material/lib/_locales/zh_cn.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/_locales/zh_cn.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ zh_cn_default)
/* harmony export */ });
const zh_cn_dict = {
  sizePerPage: "\u6BCF\u9875\u6761\u6570\uFF1A",
  jumpToPage: "\u8DF3\u5230\u9875\u7801\uFF1A",
  totalCount: "\u5171 ${ctx.count} \u6761\uFF0C",
  Cancel: "\u53D6\u6D88",
  Ok: "\u786E\u8BA4",
  datePlaceholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
  dateFormat: "yyyy-MM-dd",
  firstDayOfWeek: 1,
  dayPickerHeader: "YYYY\u5E74 MMM",
  months: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
  monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
  weekdays: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"],
  weekdaysShort: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"],
  weekdaysMin: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"]
};
var zh_cn_default = zh_cn_dict;


//# sourceMappingURL=zh_cn.js.map

/***/ }),

/***/ "../jinge-material/lib/_util/attr-validator.js":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/_util/attr-validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayAttrValidator": () => (/* binding */ ArrayAttrValidator),
/* harmony export */   "BaseAttrValidator": () => (/* binding */ BaseAttrValidator),
/* harmony export */   "EnumAttrValidator": () => (/* binding */ EnumAttrValidator),
/* harmony export */   "FunctionAttrValidator": () => (/* binding */ FunctionAttrValidator),
/* harmony export */   "NumberAttrValidator": () => (/* binding */ NumberAttrValidator)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

class BaseAttrValidator {
  constructor(componentName, attrName, isOptional = true) {
    this._cn = componentName;
    this._an = attrName;
    this._io = isOptional;
  }
  throwRequired() {
    throw new Error(`Attribute "${this._an}" of ${this._cn} is required.`);
  }
  throwType(requiredType) {
    throw new Error(`Type of value of attribute "${this._an}" must be ${requiredType} for ${this._cn}.`);
  }
  assert(attrs) {
    if (!(this._an in attrs)) {
      if (this._io)
        return;
      this.throwRequired();
    }
  }
}
const NUM_REGEXP = /^[+-]?\d+(\.\d*)?$/;
class NumberAttrValidator extends BaseAttrValidator {
  constructor(componentName, attrName, isOptional = true) {
    super(componentName, attrName, isOptional);
  }
  assert(attrs) {
    super.assert(attrs);
    const val = attrs[this._an];
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isNumber)(val))
      return;
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(val) && NUM_REGEXP.test(val))
      return;
    this.throwType("number");
  }
}
class ArrayAttrValidator extends BaseAttrValidator {
  assert(attrs) {
    super.assert(attrs);
    if (this._an in attrs && !(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isArray)(attrs[this._an])) {
      this.throwType("Array");
    }
  }
}
class FunctionAttrValidator extends BaseAttrValidator {
  constructor(componentName, attrName, isOptional = true) {
    super(componentName, attrName, isOptional);
  }
  assert(attrs) {
    super.assert(attrs);
    if (this._an in attrs && !(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(attrs[this._an])) {
      this.throwType("function");
    }
  }
}
class EnumAttrValidator extends BaseAttrValidator {
  constructor(componentName, attrName, enums, isOptional = true) {
    if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isArray)(enums) || enums.length === 0) {
      throw new Error('EnumAttrValidator require "enums" argument to be non-empty array.');
    }
    super(componentName, attrName, isOptional);
    this._en = enums;
  }
  assert(attrs) {
    super.assert(attrs);
    if (this._an in attrs && this._en.indexOf(attrs[this._an]) < 0) {
      throw new Error(`Value of attribute "${this._an}" must be one of ${JSON.stringify(this._en)} for ${this._cn}`);
    }
  }
}


//# sourceMappingURL=attr-validator.js.map

/***/ }),

/***/ "../jinge-material/lib/_util/common.js":
/*!*********************************************!*\
  !*** ../jinge-material/lib/_util/common.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "caf": () => (/* binding */ caf),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "getBaseHref": () => (/* binding */ getBaseHref),
/* harmony export */   "mergePopperOpts": () => (/* binding */ mergePopperOpts),
/* harmony export */   "raf": () => (/* binding */ raf)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

function getBaseHref() {
  const $bs = document.getElementsByTagName("base");
  const href = $bs.length > 0 ? $bs[0].getAttribute("href") : "";
  return href || "/";
}
function raf(callback) {
  return window.requestAnimationFrame(callback);
}
function caf(handle) {
  return window.cancelAnimationFrame(handle);
}
function mergePopperOpts(src, dst) {
  if (!dst)
    return src;
  for (const prop in dst) {
    const sv = src[prop];
    const dv = dst[prop];
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(sv) && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(dv)) {
      mergePopperOpts(sv, dv);
    } else if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(dv) && dv !== null) {
      src[prop] = dv;
    }
  }
  return src;
}
function debounce(fn, time) {
  let tm;
  return function() {
    clearTimeout(tm);
    tm = window.setTimeout((...args) => {
      fn(...args);
    }, time);
  };
}


//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../jinge-material/lib/_util/focus.js":
/*!********************************************!*\
  !*** ../jinge-material/lib/_util/focus.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deregisterFocus": () => (/* binding */ deregisterFocus),
/* harmony export */   "registerFocus": () => (/* binding */ registerFocus)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

let inited = false;
let eventTarget = null;
let supportsPassiveEvent = false;
let currentElement = null;
const components = [];
function setKeyboardInteraction(event) {
  currentElement = event.target;
  components.forEach((c) => {
    const el = c.__firstDOM;
    const isFocus = el === currentElement;
    if (c.hasFocus !== isFocus) {
      c.hasFocus = isFocus;
    }
  });
}
function setMouseAndTouchInteraction() {
  currentElement = null;
  components.forEach((c) => {
    if (c.hasFocus !== false) {
      c.hasFocus = false;
    }
  });
}
function createKeyboardEvents() {
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(eventTarget, "keyup", setKeyboardInteraction);
}
function createPointerEvents() {
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(eventTarget, "pointerup", setMouseAndTouchInteraction);
}
function createMouseAndTouchEvents() {
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(eventTarget, "mouseup", setMouseAndTouchInteraction);
  if ("ontouchend" in window) {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(eventTarget, "touchend", setMouseAndTouchInteraction, supportsPassiveEvent);
  }
}
function checkPassiveEventSupport() {
  try {
    const opts = Object.defineProperty({}, "passive", {
      get() {
        supportsPassiveEvent = {
          passive: true
        };
        return true;
      }
    });
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(window, "ghost", null, opts);
  } catch (e) {
  }
}
function bindEvents() {
  if (window.PointerEvent) {
    createPointerEvents();
  } else {
    createMouseAndTouchEvents();
  }
  createKeyboardEvents();
}
function initEvents() {
  if (inited)
    return;
  eventTarget = document.body;
  checkPassiveEventSupport();
  bindEvents();
  inited = true;
}
function registerFocus(component) {
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayPushIfNotExist)(components, component);
  initEvents();
}
function deregisterFocus(component) {
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(components, component);
}


//# sourceMappingURL=focus.js.map

/***/ }),

/***/ "../jinge-material/lib/_util/index.js":
/*!********************************************!*\
  !*** ../jinge-material/lib/_util/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayAttrValidator": () => (/* reexport safe */ _attr_validator__WEBPACK_IMPORTED_MODULE_2__.ArrayAttrValidator),
/* harmony export */   "BaseAttrValidator": () => (/* reexport safe */ _attr_validator__WEBPACK_IMPORTED_MODULE_2__.BaseAttrValidator),
/* harmony export */   "ELEVATION_ENUMS": () => (/* binding */ ELEVATION_ENUMS),
/* harmony export */   "EnumAttrValidator": () => (/* reexport safe */ _attr_validator__WEBPACK_IMPORTED_MODULE_2__.EnumAttrValidator),
/* harmony export */   "FunctionAttrValidator": () => (/* reexport safe */ _attr_validator__WEBPACK_IMPORTED_MODULE_2__.FunctionAttrValidator),
/* harmony export */   "MutationObserveDOM": () => (/* reexport safe */ _observe__WEBPACK_IMPORTED_MODULE_3__.MutationObserveDOM),
/* harmony export */   "NumberAttrValidator": () => (/* reexport safe */ _attr_validator__WEBPACK_IMPORTED_MODULE_2__.NumberAttrValidator),
/* harmony export */   "caf": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.caf),
/* harmony export */   "debounce": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.debounce),
/* harmony export */   "deregisterFocus": () => (/* reexport safe */ _focus__WEBPACK_IMPORTED_MODULE_1__.deregisterFocus),
/* harmony export */   "fuzzyHighlight": () => (/* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_5__.fuzzyHighlight),
/* harmony export */   "fuzzySearch": () => (/* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_5__.fuzzySearch),
/* harmony export */   "getBaseHref": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.getBaseHref),
/* harmony export */   "includesHighlight": () => (/* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_5__.includesHighlight),
/* harmony export */   "includesSearch": () => (/* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_5__.includesSearch),
/* harmony export */   "interactionEvents": () => (/* reexport safe */ _interaction_events__WEBPACK_IMPORTED_MODULE_4__.interactionEvents),
/* harmony export */   "mergePopperOpts": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.mergePopperOpts),
/* harmony export */   "raf": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.raf),
/* harmony export */   "registerFocus": () => (/* reexport safe */ _focus__WEBPACK_IMPORTED_MODULE_1__.registerFocus),
/* harmony export */   "startsHighlight": () => (/* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_5__.startsHighlight),
/* harmony export */   "startsSearch": () => (/* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_5__.startsSearch)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../jinge-material/lib/_util/common.js");
/* harmony import */ var _focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focus */ "../jinge-material/lib/_util/focus.js");
/* harmony import */ var _attr_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attr-validator */ "../jinge-material/lib/_util/attr-validator.js");
/* harmony import */ var _observe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observe */ "../jinge-material/lib/_util/observe.js");
/* harmony import */ var _interaction_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interaction-events */ "../jinge-material/lib/_util/interaction-events.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ "../jinge-material/lib/_util/search.js");






const ELEVATION_ENUMS = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/_util/interaction-events.js":
/*!*********************************************************!*\
  !*** ../jinge-material/lib/_util/interaction-events.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interactionEvents": () => (/* binding */ interactionEvents)
/* harmony export */ });
const interactionEvents = ["click", "dblclick", "mousedown", "mouseup", "touchstart", "touchend"];


//# sourceMappingURL=interaction-events.js.map

/***/ }),

/***/ "../jinge-material/lib/_util/observe.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/_util/observe.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationObserveDOM": () => (/* binding */ MutationObserveDOM)
/* harmony export */ });
function MutationObserveDOM(el, config, cb) {
  if (!window.MutationObserver) {
    return null;
  }
  const observer = new window.MutationObserver(cb);
  observer.observe(el, config);
  return () => {
    observer.disconnect();
  };
}


//# sourceMappingURL=observe.js.map

/***/ }),

/***/ "../jinge-material/lib/_util/search.js":
/*!*********************************************!*\
  !*** ../jinge-material/lib/_util/search.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fuzzyHighlight": () => (/* binding */ fuzzyHighlight),
/* harmony export */   "fuzzySearch": () => (/* binding */ fuzzySearch),
/* harmony export */   "includesHighlight": () => (/* binding */ includesHighlight),
/* harmony export */   "includesSearch": () => (/* binding */ includesSearch),
/* harmony export */   "startsHighlight": () => (/* binding */ startsHighlight),
/* harmony export */   "startsSearch": () => (/* binding */ startsSearch)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

function defaultHighlightFn(str) {
  return `<span class="md-highlight-text-match">${str.replace(/</g, "&#x3C;")}</span>`;
}
function fuzzy(text, term, ignoreCase = true, highlightFn) {
  const hlen = text.length;
  const nlen = term.length;
  if (nlen > hlen) {
    return highlightFn ? text : false;
  }
  const ctext = ignoreCase ? text.toLowerCase() : text;
  const cterm = ignoreCase ? term.toLowerCase() : term;
  if (nlen === hlen) {
    if (ctext === cterm) {
      return highlightFn ? highlightFn(text) : true;
    } else {
      return highlightFn ? text : false;
    }
  }
  let pI = 0;
  let pY = -1;
  let pN = -1;
  let i = 0;
  let j = 0;
  let segs;
  outer:
    for (; i < nlen; i++) {
      const nch = cterm.charCodeAt(i);
      while (j < hlen) {
        if (ctext.charCodeAt(j) === nch) {
          if (highlightFn) {
            pY = j;
            if (pN >= 0) {
              if (!segs)
                segs = [];
              segs.push(text.substring(pI, pN + 1));
              pN = -1;
              pI = pY;
            }
          }
          j++;
          continue outer;
        } else {
          if (highlightFn) {
            pN = j;
            if (pY >= 0) {
              if (!segs)
                segs = [];
              segs.push(highlightFn(text.substring(pI, pY + 1)));
              pY = -1;
              pI = pN;
            }
          }
          j++;
        }
      }
      return highlightFn ? text : false;
    }
  if (!highlightFn) {
    return true;
  }
  if (pI > 0) {
    segs.push(highlightFn(text.substring(pI, pY + 1)));
    if (pY + 1 < text.length) {
      segs.push(text.substring(pY + 1));
    }
    return segs.join("");
  } else {
    return highlightFn(text.substring(0, pY + 1)) + text.substring(pY + 1);
  }
}
function fuzzySearch(text, term, ignoreCase = true) {
  if (!text || !term)
    return false;
  return fuzzy(text, term, ignoreCase);
}
function fuzzyHighlight(text, term, ignoreCase = true, highlightFn = defaultHighlightFn) {
  if (!text || !term) {
    return text || "";
  }
  if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(ignoreCase)) {
    highlightFn = ignoreCase;
    ignoreCase = true;
  }
  return fuzzy(text, term, ignoreCase, highlightFn);
}
function includesSearch(text, term, ignoreCase = true) {
  if (!text && !term) {
    return true;
  }
  if (!text && term || text && !term || term.length > text.length) {
    return false;
  }
  return ignoreCase ? text.toLowerCase().includes(term.toLowerCase()) : text.includes(term);
}
function includesHighlight(text, term, ignoreCase = true, highlightFn = defaultHighlightFn) {
  if (!text && !term || !text) {
    return "";
  }
  if (!term || term.length > text.length) {
    return text;
  }
  if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(ignoreCase)) {
    highlightFn = ignoreCase;
    ignoreCase = true;
  }
  return text.replace(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ignoreCase ? "i" : ""), (m) => highlightFn(m));
}
function startsSearch(text, term, ignoreCase = true) {
  if (!text && !term) {
    return true;
  }
  if (!text && term || text && !term || term.length > text.length) {
    return false;
  }
  return ignoreCase ? text.toLowerCase().startsWith(term.toLowerCase()) : text.startsWith(term);
}
function startsHighlight(text, term, ignoreCase = true, highlightFn = defaultHighlightFn) {
  if (!text && !term || !text) {
    return "";
  }
  if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(ignoreCase)) {
    highlightFn = ignoreCase;
    ignoreCase = true;
  }
  if (!startsSearch(text, term, ignoreCase)) {
    return text;
  }
  return highlightFn(text.substring(0, term.length)) + text.substring(term.length);
}


//# sourceMappingURL=search.js.map

/***/ }),

/***/ "../jinge-material/lib/button/button.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/button/button.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _button_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.tpl.js */ "../jinge-material/lib/button/button.tpl.js");



const IGNORED_EVENTS = ["touchstart", "mousedown"];
class Button extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._tag = attrs.to ? "sref" : attrs.href ? "a" : "button";const f2_jg0402 = () => {
    _jg0.to = attrs.to || ""; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("to", f2_jg0402);const f3_jg0402 = () => {
    _jg0.target = attrs.target || "_self"; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("target", f3_jg0402);const f4_jg0402 = () => {
    _jg0.href = attrs.href || ""; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("href", f4_jg0402);const f5_jg0402 = () => {
    _jg0.active = attrs.active; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f5_jg0402);const f6_jg0402 = () => {
    _jg0.type = attrs.type || "button"; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("type", f6_jg0402);const f7_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f7_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f7_jg0402);const f8_jg0402 = () => {
    _jg0.ripple = attrs.ripple !== false; }; f8_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("ripple", f8_jg0402);
    _jg0.rippleActive = false;
    _jg0.hasFocus = false;
    _jg0._ts = -1;
  }
  __afterRender() {
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.registerFocus)(this);
    this.__domPassListeners(IGNORED_EVENTS);
  }
  __beforeDestroy() {
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.deregisterFocus)(this);
  }
  touchstart(event) {
    if (this.ripple && !this.disabled) {
      this._ts = event.timeStamp;
      this.rippleActive = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
        _event: event
      });
    }
    this.__notify("touchstart", event);
  }
  mousedown(event) {
    if (this.ripple && !this.disabled && this._ts !== event.timeStamp) {
      this.rippleActive = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
        _event: event
      });
    }
    this.__notify("mousedown", event);
  }
}
Button.template = _button_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=button.js.map

/***/ }),

/***/ "../jinge-material/lib/button/button.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/button/button.tpl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "../jinge-material/lib/button/content.js");
/* harmony import */ var _uisref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uisref */ "../jinge-material/lib/uisref/index.js");




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
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "button",
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "div",
                  {
                    class: `md-state-overlay`
                  },
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      listeners: {
                        "update.rippleActive": {
                          fn: function(...args) {
                            vm_0.rippleActive = args[0]
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
                        }
                      }
                    },
                    ripple: undefined,
                    disabled: undefined,
                    rippleActive: undefined
                  });
                  const fn_0 = () => {
                    attrs.ripple = vm_0.ripple;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.disabled = vm_0.disabled;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_2 = () => {
                    attrs.rippleActive = vm_0.rippleActive;
                  };
                  fn_2();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["rippleActive"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _content__WEBPACK_IMPORTED_MODULE_1__.ButtonContent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
              );
              const fn_0 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-button md-state-container', { 'md-ripple-off': !vm_0.ripple, 'md-focused': vm_0.hasFocus }, vm_0.class]));
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["hasFocus"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_1 = () => {
                el.disabled = !!(vm_0.disabled);
              };
              fn_1();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_2 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
              };
              fn_2();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_3 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "type", vm_0.type);
              };
              fn_3();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["type"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'touchstart', function(...args) {
                vm_0.touchstart(args[0])
              });
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'mousedown', function(...args) {
                vm_0.mousedown(args[0])
              });
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          },
          'a': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "a",
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "div",
                  {
                    class: `md-state-overlay`
                  },
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      listeners: {
                        "update.rippleActive": {
                          fn: function(...args) {
                            vm_0.rippleActive = args[0]
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
                        }
                      }
                    },
                    ripple: undefined,
                    disabled: undefined,
                    rippleActive: undefined
                  });
                  const fn_0 = () => {
                    attrs.ripple = vm_0.ripple;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.disabled = vm_0.disabled;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_2 = () => {
                    attrs.rippleActive = vm_0.rippleActive;
                  };
                  fn_2();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["rippleActive"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _content__WEBPACK_IMPORTED_MODULE_1__.ButtonContent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
              );
              const fn_0 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-button md-state-container', { 'md-ripple-off': !vm_0.ripple, 'md-focused': vm_0.hasFocus }, vm_0.class]));
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["hasFocus"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_1 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
              };
              fn_1();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_2 = () => {
                el.disabled = !!(vm_0.disabled);
              };
              fn_2();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_3 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "href", vm_0.href);
              };
              fn_3();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["href"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_4 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "target", vm_0.target);
              };
              fn_4();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["target"], fn_4, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'touchstart', function(...args) {
                vm_0.touchstart(args[0])
              });
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'touchmove', function(...args) {
                vm_0.touchmove(args[0])
              });
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'mousedown', function(...args) {
                vm_0.mousedown(args[0])
              });
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          },
          'sref': function(component) {
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
                          "a",
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            "div",
                            {
                              class: `md-state-overlay`
                            },
                          ),
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                listeners: {
                                  "update.rippleActive": {
                                    fn: function(...args) {
                                      vm_0.rippleActive = args[0]
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
                                  }
                                }
                              },
                              ripple: undefined,
                              disabled: undefined,
                              rippleActive: undefined
                            });
                            const fn_0 = () => {
                              attrs.ripple = vm_0.ripple;
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.disabled = vm_0.disabled;
                            };
                            fn_1();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_2 = () => {
                              attrs.rippleActive = vm_0.rippleActive;
                            };
                            fn_2();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["rippleActive"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _content__WEBPACK_IMPORTED_MODULE_1__.ButtonContent.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                        );
                        const fn_0 = () => {
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, `md-button md-state-container${vm_0.className ? ' ' + vm_0.className : ''}${!vm_0.ripple ? ' md-ripple-off' : ''}${vm_0.hasFocus ? ' md-focused' : ''}`);
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["className"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["hasFocus"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_1 = () => {
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
                        };
                        fn_1();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_2 = () => {
                          el.disabled = !!(vm_0.disabled);
                        };
                        fn_2();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'touchstart', function(...args) {
                          vm_0.touchstart(args[0])
                        });
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'touchmove', function(...args) {
                          vm_0.touchmove(args[0])
                        });
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'mousedown', function(...args) {
                          vm_0.mousedown(args[0])
                        });
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })()
                      ];
                    }
                  }
                },
                target: undefined,
                to: undefined,
                active: undefined
              });
              const fn_0 = () => {
                attrs.target = vm_0.target;
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["target"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_1 = () => {
                attrs.to = vm_0.to;
              };
              fn_1();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["to"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_2 = () => {
                attrs.active = vm_0.active;
              };
              fn_2();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const el = _uisref__WEBPACK_IMPORTED_MODULE_2__.UISref.create(attrs);
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
      attrs.test = vm_0._tag;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_tag"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = jinge__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/button/content.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/button/content.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonContent": () => (/* binding */ ButtonContent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _content_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.tpl.js */ "../jinge-material/lib/button/content.tpl.js");


class ButtonContent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.ripple = attrs.ripple; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("ripple", f1_jg0402);const f2_jg0402 = () => {
    _jg0.rippleActive = attrs.rippleActive; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("rippleActive", f2_jg0402);const f3_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f3_jg0402);
  }
  onRippleActive(evt) {
    this.__notify("update.rippleActive", evt);
  }
}
ButtonContent.template = _content_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=content.js.map

/***/ }),

/***/ "../jinge-material/lib/button/content.tpl.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/button/content.tpl.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ripple */ "../jinge-material/lib/ripple/index.js");


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
              vm_0.onRippleActive(...args);
            },
            opts: null
          }
        },
        slots: {
          'default': function(component) {
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  class: `md-button-content`
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
      disabled: undefined,
      active: undefined,
      eventTrigger: false
    });
    const fn_0 = () => {
      attrs.disabled = !vm_0.ripple || vm_0.disabled;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.active = vm_0.rippleActive;
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["rippleActive"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _ripple__WEBPACK_IMPORTED_MODULE_1__.Ripple.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/button/index.js":
/*!*********************************************!*\
  !*** ../jinge-material/lib/button/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_1__.Button),
/* harmony export */   "ButtonContent": () => (/* reexport safe */ _content__WEBPACK_IMPORTED_MODULE_2__.ButtonContent)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/button/style/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "../jinge-material/lib/button/button.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "../jinge-material/lib/button/content.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/button/style/index.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/button/style/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/button/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/content/content.tpl.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/content/content.tpl.js ***!
  \****************************************************/
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-content', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/content/index.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/content/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/content/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _content_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.tpl.js */ "../jinge-material/lib/content/content.tpl.js");


class Content extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
}
Content.template = _content_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/content/style/index.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/content/style/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/content/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/drawer/container.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/drawer/container.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerContainer": () => (/* binding */ DrawerContainer)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _container_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.tpl.js */ "../jinge-material/lib/drawer/container.tpl.js");


class DrawerContainer extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.active = attrs.active; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f1_jg0402);
    _jg0.mainMargin = 0;const f3_jg0402 = () => {
    _jg0.right = attrs.right; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("right", f3_jg0402);
    _jg0._pushMode = attrs.pushMode;
  }
  onUpdateActive(isActive) {
    this.__notify("update.active", isActive);
  }
  __afterRender() {
    if (!this._pushMode)
      return;
    const el = this.__firstDOM.children[0];
    this.mainMargin = el.offsetWidth;
  }
}
DrawerContainer.template = _container_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=container.js.map

/***/ }),

/***/ "../jinge-material/lib/drawer/container.tpl.js":
/*!*****************************************************!*\
  !*** ../jinge-material/lib/drawer/container.tpl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer */ "../jinge-material/lib/drawer/drawer.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
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
                  const renderFn = __ac && __ac['drawer'] ? __ac['drawer'] : null;
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
          _pushMode: undefined,
          active: undefined,
          right: undefined
        });
        const fn_0 = () => {
          attrs._pushMode = vm_0._pushMode;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_pushMode"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.active = vm_0.active;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_2 = () => {
          attrs.right = vm_0._right;
        };
        fn_2();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_right"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = _drawer__WEBPACK_IMPORTED_MODULE_1__.Drawer.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: `md-drawer-main`
          },
          ...(() => {
            const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
            const renderFn = __ac && __ac['main'] ? __ac['main'] : null;
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
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, `margin-${vm_0.right ? 'right' : 'left'}: ${vm_0.active ? vm_0.mainMargin : 0}px;`);
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["right"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["mainMargin"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        return el;
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-drawer-container', vm_0.active && 'md-active', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/drawer/drawer.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/drawer/drawer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drawer": () => (/* binding */ Drawer)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _drawer_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.tpl.js */ "../jinge-material/lib/drawer/drawer.tpl.js");


class Drawer extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.active = attrs.active; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f1_jg0402);const f2_jg0402 = () => {
    _jg0.fixed = attrs.fixed; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("fixed", f2_jg0402);const f3_jg0402 = () => {
    _jg0.right = attrs.right; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("right", f3_jg0402);
    _jg0._pushMode = attrs._pushMode;
  }
  close() {
    this.active = false;
    this.__notify("update.active", false);
    this.__notify("closed");
  }
}
Drawer.template = _drawer_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=drawer.js.map

/***/ }),

/***/ "../jinge-material/lib/drawer/drawer.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/drawer/drawer.tpl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../overlay */ "../jinge-material/lib/overlay/index.js");



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
                            vm_0.close(...args);
                          },
                          opts: null
                        }
                      },
                    },
                    __portalTarget: undefined,
                    active: undefined
                  });
                  const fn_0 = () => {
                    attrs.__portalTarget = vm_0.fixed ? 'body' : 'parent';
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["fixed"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.active = vm_0.active;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay.create(attrs);
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
          attrs.expect = !vm_0._pushMode;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_pushMode"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-drawer', vm_0.right ? 'md-right' : 'md-left', vm_0.active && 'md-active', vm_0.fixed && 'md-fixed']));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["right"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["fixed"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/drawer/index.js":
/*!*********************************************!*\
  !*** ../jinge-material/lib/drawer/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drawer": () => (/* reexport safe */ _drawer__WEBPACK_IMPORTED_MODULE_1__.Drawer),
/* harmony export */   "DrawerContainer": () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_2__.DrawerContainer)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/drawer/style/index.js");
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer */ "../jinge-material/lib/drawer/drawer.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ "../jinge-material/lib/drawer/container.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/drawer/style/index.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/drawer/style/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/drawer/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/icon/index.js":
/*!*******************************************!*\
  !*** ../jinge-material/lib/icon/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/icon/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/icon/index.tpl.js");



const svgCacheStore = /* @__PURE__ */ new Map();
const BASE_HREF = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getBaseHref)();
class Icon extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;const f1_jg0402 = () => {
    _jg0.cache = attrs.cache !== false; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("cache", f1_jg0402);const f2_jg0402 = () => {
    _jg0.src = attrs.src; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("src", f2_jg0402);const f3_jg0402 = () => {
    _jg0.size = attrs.size; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("size", f3_jg0402);
  }
  get src() {
    return this._src;
  }
  set src(v) {
    if (this._src === v)
      return;
    this._src = v;
    this.__updateIfNeed(this._loadSvg);
  }
  _loadSvg() {
    if (!this.src)
      return;
    if (!svgCacheStore.has(this.src)) {
      window.fetch(this.src.startsWith("/") ? `${BASE_HREF}${this.src.substring(1)}` : this.src).then((res) => res.text()).then((html) => {
        this.cache && svgCacheStore.set(this.src, html);
        this._renderSvg(html);
        this.__notify("loaded");
      }).catch((err) => {
        console.error("<md-icon/> load svg failed:", this.src, err);
        this.__notify("loaded", err);
      });
    } else {
      this._renderSvg(svgCacheStore.get(this.src));
    }
  }
  _renderSvg(svg) {
    this.__firstDOM.innerHTML = svg;
  }
  __afterRender() {
    if (this.src) {
      this._loadSvg();
    }
    this.__domPassListeners();
  }
}
Icon.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/icon/index.tpl.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/icon/index.tpl.js ***!
  \***********************************************/
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
      "i",
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-icon', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, ([{ fontSize: vm_0.size }, vm_0.style]));
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["size"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/icon/style/index.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/icon/style/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/icon/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/list/index.js":
/*!*******************************************!*\
  !*** ../jinge-material/lib/list/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LIST_PROVIDER": () => (/* reexport safe */ _list__WEBPACK_IMPORTED_MODULE_1__.LIST_PROVIDER),
/* harmony export */   "List": () => (/* reexport safe */ _list__WEBPACK_IMPORTED_MODULE_1__.List),
/* harmony export */   "ListItem": () => (/* reexport safe */ _list_item__WEBPACK_IMPORTED_MODULE_2__.ListItem),
/* harmony export */   "ListItemButton": () => (/* reexport safe */ _list_item_button__WEBPACK_IMPORTED_MODULE_3__.ListItemButton),
/* harmony export */   "ListItemContent": () => (/* reexport safe */ _list_item_content__WEBPACK_IMPORTED_MODULE_4__.ListItemContent),
/* harmony export */   "ListItemDefault": () => (/* reexport safe */ _list_item_default__WEBPACK_IMPORTED_MODULE_5__.ListItemDefault),
/* harmony export */   "ListItemExpand": () => (/* reexport safe */ _list_item_expand__WEBPACK_IMPORTED_MODULE_8__.ListItemExpand),
/* harmony export */   "ListItemLink": () => (/* reexport safe */ _list_item_link__WEBPACK_IMPORTED_MODULE_6__.ListItemLink),
/* harmony export */   "ListItemUISref": () => (/* reexport safe */ _list_item_uisref__WEBPACK_IMPORTED_MODULE_7__.ListItemUISref)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/list/style/index.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "../jinge-material/lib/list/list.js");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item */ "../jinge-material/lib/list/list-item.js");
/* harmony import */ var _list_item_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item-button */ "../jinge-material/lib/list/list-item-button.js");
/* harmony import */ var _list_item_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-item-content */ "../jinge-material/lib/list/list-item-content.js");
/* harmony import */ var _list_item_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item-default */ "../jinge-material/lib/list/list-item-default.js");
/* harmony import */ var _list_item_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-item-link */ "../jinge-material/lib/list/list-item-link.js");
/* harmony import */ var _list_item_uisref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-item-uisref */ "../jinge-material/lib/list/list-item-uisref.js");
/* harmony import */ var _list_item_expand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-item-expand */ "../jinge-material/lib/list/list-item-expand.js");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/list/list-item-button.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/list/list-item-button.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemButton": () => (/* binding */ ListItemButton)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_item_button_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-button.tpl.js */ "../jinge-material/lib/list/list-item-button.tpl.js");


class ListItemButton extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.ripple = attrs.ripple !== false; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("ripple", f1_jg0402);const f2_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f2_jg0402);
  }
}
ListItemButton.template = _list_item_button_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=list-item-button.js.map

/***/ }),

/***/ "../jinge-material/lib/list/list-item-button.tpl.js":
/*!**********************************************************!*\
  !*** ../jinge-material/lib/list/list-item-button.tpl.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_item_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-content */ "../jinge-material/lib/list/list-item-content.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "button",
      {
        type: `button`
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          class: `md-state-overlay`
        },
      ),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
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
              }
            }
          },
          disabled: undefined
        });
        const fn_0 = () => {
          attrs.disabled = vm_0.disabled || !vm_0.ripple;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = _list_item_content__WEBPACK_IMPORTED_MODULE_1__.ListItemContent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-list-item-button md-state-container', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      el.disabled = !!(vm_0.disabled);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/list/list-item-content.js":
/*!*******************************************************!*\
  !*** ../jinge-material/lib/list/list-item-content.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemContent": () => (/* binding */ ListItemContent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_item_content_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-content.tpl.js */ "../jinge-material/lib/list/list-item-content.tpl.js");


class ListItemContent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f1_jg0402);
  }
}
ListItemContent.template = _list_item_content_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=list-item-content.js.map

/***/ }),

/***/ "../jinge-material/lib/list/list-item-content.tpl.js":
/*!***********************************************************!*\
  !*** ../jinge-material/lib/list/list-item-content.tpl.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ripple */ "../jinge-material/lib/ripple/index.js");


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
        }
      },
      disabled: undefined,
      class: `md-list-item-content`
    });
    const fn_0 = () => {
      attrs.disabled = vm_0.disabled;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _ripple__WEBPACK_IMPORTED_MODULE_1__.Ripple.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/list/list-item-default.js":
/*!*******************************************************!*\
  !*** ../jinge-material/lib/list/list-item-default.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemDefault": () => (/* binding */ ListItemDefault)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_item_default_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-default.tpl.js */ "../jinge-material/lib/list/list-item-default.tpl.js");


class ListItemDefault extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  toggleControl(evt) {
    const $el = this.__firstDOM;
    const control = $el.querySelector(".md-checkbox-container, .md-switch-container, .md-radio-container");
    if (control && !control.contains(evt.target)) {
      control.click();
    }
  }
}
ListItemDefault.template = _list_item_default_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=list-item-default.js.map

/***/ }),

/***/ "../jinge-material/lib/list/list-item-default.tpl.js":
/*!***********************************************************!*\
  !*** ../jinge-material/lib/list/list-item-default.tpl.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_item_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-content */ "../jinge-material/lib/list/list-item-content.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
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
            }
          },
          disabled: true
        });
        const el = _list_item_content__WEBPACK_IMPORTED_MODULE_1__.ListItemContent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-list-item-default', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'click', function(...args) {
      vm_0.toggleControl(...args);
    });
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/list/list-item-expand.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/list/list-item-expand.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemExpand": () => (/* binding */ ListItemExpand)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "../jinge-material/lib/list/list.js");
/* harmony import */ var _list_item_expand_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item-expand.tpl.js */ "../jinge-material/lib/list/list-item-expand.tpl.js");



class ListItemExpand extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.ripple = attrs.ripple !== false; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("ripple", f1_jg0402);const f2_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f2_jg0402);const f3_jg0402 = () => {
    _jg0.expanded = attrs.expanded; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("expanded", f3_jg0402);
    _jg0._List = _jg0.__getContext(_list__WEBPACK_IMPORTED_MODULE_1__.LIST_PROVIDER);
    _jg0._List.pushExpandable(_jg0);
  }
  get expanded() {
    return this._expanded;
  }
  set expanded(v) {
    if (this._expanded === v)
      return;
    this._expanded = v;
    if (v)
      this.open();
    else
      this.close();
  }
  get showContent() {
    return this._showCnt;
  }
  set showContent(v) {
    if (this._showCnt === v)
      return;
    this._showCnt = v;
    this.__notify("update.expanded", v);
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
      this.__notify(v ? "expanded" : "collapsed");
    });
    if (v && this._List) {
      this._List.expandATab(this);
    }
  }
  __afterRender() {
    const el = this.__getRef("item").children[0];
    this.__domAddListener(el, "click", this._onClick);
    if (this.expanded) {
      this.open();
    }
  }
  __beforeDestroy() {
    this._List.removeExpandable(this);
    this._List = null;
  }
  _onClick() {
    this.toggleExpand();
  }
  toggleExpand() {
    this.showContent = !this.showContent;
  }
  open() {
    if (this.showContent) {
      return false;
    }
    this.showContent = true;
    return true;
  }
  close() {
    if (!this.showContent) {
      return false;
    }
    this.showContent = false;
    return true;
  }
}
ListItemExpand.template = _list_item_expand_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=list-item-expand.js.map

/***/ }),

/***/ "../jinge-material/lib/list/list-item-expand.tpl.js":
/*!**********************************************************!*\
  !*** ../jinge-material/lib/list/list-item-expand.tpl.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_icons_lib_KeyboardArrowDown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material-icons/lib/KeyboardArrowDown.js */ "../jinge-material-icons/lib/KeyboardArrowDown.js");
/* harmony import */ var _list_item_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item-content.js */ "../jinge-material/lib/list/list-item-content.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
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
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    class: `md-list-expand-icon`
                  });
                  const el = jinge_material_icons_lib_KeyboardArrowDown_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          disabled: undefined
        });
        const fn_0 = () => {
          attrs.disabled = vm_0.disabled || !vm_0.ripple;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = _list_item_content_js__WEBPACK_IMPORTED_MODULE_2__.ListItemContent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          "div",
          {
            class: `md-list-expand`
          },
          ...(() => {
            const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
            const renderFn = __ac && __ac['expand'] ? __ac['expand'] : null;
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
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, `height: ${vm_0.showContent ? 'auto' : '0'}`);
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["showContent"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        return el;
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-list-item-expand', vm_0.showContent && 'md-active', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["showContent"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0.__setRef('item', el, component)
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/list/list-item-link.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/list/list-item-link.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemLink": () => (/* binding */ ListItemLink)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_item_link_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-link.tpl.js */ "../jinge-material/lib/list/list-item-link.tpl.js");


class ListItemLink extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.ripple = attrs.ripple !== false; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("ripple", f1_jg0402);const f2_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f2_jg0402);const f3_jg0402 = () => {
    _jg0.href = attrs.href; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("href", f3_jg0402);const f4_jg0402 = () => {
    _jg0.target = attrs.target; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("target", f4_jg0402);
  }
}
ListItemLink.template = _list_item_link_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=list-item-link.js.map

/***/ }),

/***/ "../jinge-material/lib/list/list-item-link.tpl.js":
/*!********************************************************!*\
  !*** ../jinge-material/lib/list/list-item-link.tpl.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_item_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-content */ "../jinge-material/lib/list/list-item-content.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "a",
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "i",
        {
          class: `md-state-overlay`
        },
      ),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
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
              }
            }
          },
          disabled: undefined
        });
        const fn_0 = () => {
          attrs.disabled = vm_0.disabled || !vm_0.ripple;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = _list_item_content__WEBPACK_IMPORTED_MODULE_1__.ListItemContent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-state-container md-content-on-surface md-list-item-link', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      el.disabled = !!(vm_0.disabled);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_2 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "href", vm_0.href);
    };
    fn_2();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["href"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_3 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "target", vm_0.target);
    };
    fn_3();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["target"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/list/list-item-uisref.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/list/list-item-uisref.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemUISref": () => (/* binding */ ListItemUISref)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_item_uisref_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-uisref.tpl.js */ "../jinge-material/lib/list/list-item-uisref.tpl.js");


class ListItemUISref extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.ripple = attrs.ripple !== false; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("ripple", f1_jg0402);const f2_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f2_jg0402);const f3_jg0402 = () => {
    _jg0.to = attrs.to; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("to", f3_jg0402);const f4_jg0402 = () => {
    _jg0.active = attrs.active || "router-active"; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f4_jg0402);const f5_jg0402 = () => {
    _jg0.target = attrs.target; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("target", f5_jg0402);
  }
}
ListItemUISref.template = _list_item_uisref_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=list-item-uisref.js.map

/***/ }),

/***/ "../jinge-material/lib/list/list-item-uisref.tpl.js":
/*!**********************************************************!*\
  !*** ../jinge-material/lib/list/list-item-uisref.tpl.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_item_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-content */ "../jinge-material/lib/list/list-item-content.js");
/* harmony import */ var _uisref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uisref */ "../jinge-material/lib/uisref/index.js");



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
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "a",
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "i",
                  {
                    class: `md-state-overlay`
                  },
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
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
                        }
                      }
                    },
                    disabled: undefined
                  });
                  const fn_0 = () => {
                    attrs.disabled = vm_0.disabled || !vm_0.ripple;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _list_item_content__WEBPACK_IMPORTED_MODULE_1__.ListItemContent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
              );
              const fn_0 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-state-container md-content-on-surface md-list-item-router', vm_0.class]));
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_1 = () => {
                el.disabled = !!(vm_0.disabled);
              };
              fn_1();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      to: undefined,
      target: undefined,
      active: undefined
    });
    const fn_0 = () => {
      attrs.to = vm_0.to;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["to"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.target = vm_0.target;
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["target"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_2 = () => {
      attrs.active = vm_0.active;
    };
    fn_2();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _uisref__WEBPACK_IMPORTED_MODULE_2__.UISref.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/list/list-item.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/list/list-item.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItem": () => (/* binding */ ListItem)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _list_item_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item.tpl.js */ "../jinge-material/lib/list/list-item.tpl.js");



function hasInteractionEvents(attrs) {
  const listeners = attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.__].listeners;
  if (!listeners)
    return false;
  for (const eventName in listeners) {
    if (_util__WEBPACK_IMPORTED_MODULE_1__.interactionEvents.includes(eventName)) {
      return true;
    }
  }
  return false;
}
function getTag(attrs) {
  if (attrs.expand)
    return "expand";
  if (attrs.disabled)
    return "button";
  if (attrs.to)
    return "sref";
  if (attrs.href)
    return "link";
  if (hasInteractionEvents(attrs))
    return "button";
  return "default";
}
class ListItem extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.ripple = attrs.ripple; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("ripple", f1_jg0402);const f2_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f2_jg0402);
    _jg0._tag = getTag(attrs);const f4_jg0402 = () => {
    _jg0.href = attrs.href; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("href", f4_jg0402);const f5_jg0402 = () => {
    _jg0.to = attrs.to; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("to", f5_jg0402);const f6_jg0402 = () => {
    _jg0.target = attrs.target || "_self"; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("target", f6_jg0402);const f7_jg0402 = () => {
    _jg0.active = attrs.active; }; f7_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f7_jg0402);const f8_jg0402 = () => {
    _jg0.expanded = attrs.expanded; }; f8_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("expanded", f8_jg0402);
  }
  notifyExpanded(v) {
    this.__notify("update.expanded", v);
  }
  __afterRender() {
    let el = this.__firstDOM;
    const tag = this._tag;
    if (tag === "button" || tag === "sref" || tag === "link") {
      el = el.children[0];
    }
    this.__domPassListeners(el);
  }
}
ListItem.template = _list_item_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=list-item.js.map

/***/ }),

/***/ "../jinge-material/lib/list/list-item.tpl.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/list/list-item.tpl.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_item_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-link.js */ "../jinge-material/lib/list/list-item-link.js");
/* harmony import */ var _list_item_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item-button.js */ "../jinge-material/lib/list/list-item-button.js");
/* harmony import */ var _list_item_default_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item-default.js */ "../jinge-material/lib/list/list-item-default.js");
/* harmony import */ var _list_item_uisref_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-item-uisref.js */ "../jinge-material/lib/list/list-item-uisref.js");
/* harmony import */ var _list_item_expand_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item-expand.js */ "../jinge-material/lib/list/list-item-expand.js");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "li",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'expand': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                      listeners: {
                        "update.expanded": {
                          fn: function(...args) {
                            vm_0.notifyExpanded(...args);
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
                        'expand': function(component) {
                          return [
                          ...(() => {
                            const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
                            const renderFn = __ac && __ac['expand'] ? __ac['expand'] : null;
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
                    ripple: undefined,
                    expanded: undefined,
                    class: `md-list-item-container md-button-clean`
                  });
                  const fn_0 = () => {
                    attrs.ripple = vm_0.ripple;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.expanded = vm_0.expanded;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["expanded"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _list_item_expand_js__WEBPACK_IMPORTED_MODULE_5__.ListItemExpand.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              },
              'sref': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
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
                        }
                      }
                    },
                    to: undefined,
                    target: undefined,
                    active: undefined,
                    class: `md-list-item-container md-button-clean`
                  });
                  const fn_0 = () => {
                    attrs.to = vm_0.to;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["to"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.target = vm_0.target;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["target"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_2 = () => {
                    attrs.active = vm_0.active;
                  };
                  fn_2();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _list_item_uisref_js__WEBPACK_IMPORTED_MODULE_4__.ListItemUISref.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              },
              'link': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
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
                        }
                      }
                    },
                    href: undefined,
                    target: undefined,
                    class: `md-list-item-container md-button-clean`
                  });
                  const fn_0 = () => {
                    attrs.href = vm_0.href;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["href"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.target = vm_0.target;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["target"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _list_item_link_js__WEBPACK_IMPORTED_MODULE_1__.ListItemLink.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              },
              'button': function(component) {
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
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
                        }
                      }
                    },
                    ripple: undefined,
                    disabled: undefined,
                    class: `md-list-item-container md-button-clean`
                  });
                  const fn_0 = () => {
                    attrs.ripple = vm_0.ripple;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.disabled = vm_0.disabled;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _list_item_button_js__WEBPACK_IMPORTED_MODULE_2__.ListItemButton.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              },
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
                      }
                    },
                    ripple: undefined,
                    class: `md-list-item-container md-button-clean`
                  });
                  const fn_0 = () => {
                    attrs.ripple = vm_0.ripple;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _list_item_default_js__WEBPACK_IMPORTED_MODULE_3__.ListItemDefault.create(attrs);
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
          attrs.test = vm_0._tag;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_tag"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-list-item', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/list/list.js":
/*!******************************************!*\
  !*** ../jinge-material/lib/list/list.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LIST_PROVIDER": () => (/* binding */ LIST_PROVIDER),
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.tpl.js */ "../jinge-material/lib/list/list.tpl.js");


const LIST_PROVIDER = Symbol("list_provider");
class List extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.expandSingle = attrs.expandSingle; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("expandSingle", f1_jg0402);
    _jg0._List = {
      expandable: [],
      expandATab: _jg0.expandATab.bind(_jg0),
      pushExpandable: _jg0.pushExpandable.bind(_jg0),
      removeExpandable: _jg0.removeExpandable.bind(_jg0)
    };
    _jg0.__setContext(LIST_PROVIDER, _jg0._List, true);
  }
  expandATab(expandedListItem) {
    if (!this.expandSingle || !expandedListItem) {
      return;
    }
    for (const item of this._List.expandable) {
      if (item !== expandedListItem) {
        item.close();
      }
    }
  }
  pushExpandable(expandableListItem) {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayPushIfNotExist)(this._List.expandable, expandableListItem);
  }
  removeExpandable(expandableListItem) {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(this._List.expandable, expandableListItem);
  }
}
List.template = _list_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=list.js.map

/***/ }),

/***/ "../jinge-material/lib/list/list.tpl.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/list/list.tpl.js ***!
  \**********************************************/
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
      "ul",
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-list', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/list/style/index.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/list/style/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/list/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/menu/index.js":
/*!*******************************************!*\
  !*** ../jinge-material/lib/menu/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU_PROVIDER": () => (/* reexport safe */ _menu__WEBPACK_IMPORTED_MODULE_1__.MENU_PROVIDER),
/* harmony export */   "Menu": () => (/* reexport safe */ _menu__WEBPACK_IMPORTED_MODULE_1__.Menu),
/* harmony export */   "MenuItem": () => (/* reexport safe */ _menu_item__WEBPACK_IMPORTED_MODULE_2__.MenuItem)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/menu/style/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "../jinge-material/lib/menu/menu.js");
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-item */ "../jinge-material/lib/menu/menu-item.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/menu/menu-item.js":
/*!***********************************************!*\
  !*** ../jinge-material/lib/menu/menu-item.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItem": () => (/* binding */ MenuItem)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "../jinge-material/lib/menu/menu.js");
/* harmony import */ var _menu_item_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-item.tpl.js */ "../jinge-material/lib/menu/menu-item.tpl.js");



const IGNORED_EVENTS = [
  "click"
];
class MenuItem extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.ripple = attrs.ripple; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("ripple", f1_jg0402);const f2_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f2_jg0402);const f3_jg0402 = () => {
    _jg0.href = attrs.href; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("href", f3_jg0402);const f4_jg0402 = () => {
    _jg0.to = attrs.to; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("to", f4_jg0402);const f5_jg0402 = () => {
    _jg0.target = attrs.target; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("target", f5_jg0402);const f6_jg0402 = () => {
    _jg0.active = attrs.active; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f6_jg0402);const f7_jg0402 = () => {
    _jg0.expand = attrs.expand; }; f7_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("expand", f7_jg0402);const f8_jg0402 = () => {
    _jg0.expanded = attrs.expanded; }; f8_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("expanded", f8_jg0402);
    _jg0._Menu = _jg0.__getContext(_menu__WEBPACK_IMPORTED_MODULE_1__.MENU_PROVIDER);
    _jg0._tch = _jg0.triggerCloseMenu.bind(_jg0);
  }
  handleClick(event) {
    !this.disabled && this._Menu.close();
    this.__notify("click", event);
  }
  triggerCloseMenu() {
    if (!this.disabled) {
      this._Menu.close();
    }
  }
  __afterRender() {
    const $el = this.__firstDOM.children[0];
    this.__domPassListeners(IGNORED_EVENTS, $el);
  }
}
MenuItem.template = _menu_item_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=menu-item.js.map

/***/ }),

/***/ "../jinge-material/lib/menu/menu-item.tpl.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/menu/menu-item.tpl.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list */ "../jinge-material/lib/list/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        listeners: {
          click: {
            fn: function(...args) {
              vm_0.handleClick(...args);
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
          }
        }
      },
      class: undefined,
      style: undefined,
      href: undefined,
      to: undefined,
      target: undefined,
      ripple: undefined,
      active: undefined,
      expand: undefined,
      expanded: undefined,
      disabled: undefined,
      tabindex: undefined
    });
    const fn_0 = () => {
      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)((0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(['md-menu-item', vm_0.highlighted && 'md-highlight', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["highlighted"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.style = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.style2str)(vm_0.style);
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_2 = () => {
      attrs.href = vm_0.href;
    };
    fn_2();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["href"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_3 = () => {
      attrs.to = vm_0.to;
    };
    fn_3();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["to"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_4 = () => {
      attrs.target = vm_0.target;
    };
    fn_4();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["target"], fn_4, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_5 = () => {
      attrs.ripple = vm_0.ripple;
    };
    fn_5();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripple"], fn_5, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_6 = () => {
      attrs.active = vm_0.active;
    };
    fn_6();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_6, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_7 = () => {
      attrs.expand = vm_0.expand;
    };
    fn_7();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["expand"], fn_7, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_8 = () => {
      attrs.expanded = vm_0.expanded;
    };
    fn_8();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["expanded"], fn_8, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_9 = () => {
      attrs.disabled = vm_0.disabled;
    };
    fn_9();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_9, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_10 = () => {
      attrs.tabindex = vm_0.highlighted && -1;
    };
    fn_10();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["highlighted"], fn_10, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _list__WEBPACK_IMPORTED_MODULE_1__.ListItem.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/menu/menu.js":
/*!******************************************!*\
  !*** ../jinge-material/lib/menu/menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU_PROVIDER": () => (/* binding */ MENU_PROVIDER),
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _menu_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.tpl.js */ "../jinge-material/lib/menu/menu.tpl.js");



const sizeValidator = new _util__WEBPACK_IMPORTED_MODULE_1__.EnumAttrValidator("<md-menu>", "size", ["auto", "small", "medium", "big", "huge"]);
const MENU_PROVIDER = Symbol("menu_provider");
class Menu extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    sizeValidator.assert(attrs);
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.contentStyles = null;const f3_jg0402 = () => {
    _jg0.active = attrs.active; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f3_jg0402);const f4_jg0402 = () => {
    _jg0.trigger = attrs.trigger || "click"; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("trigger", f4_jg0402);
    _jg0.popperOffset = null;const f6_jg0402 = () => {
    _jg0.offset = attrs.offset; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("offset", f6_jg0402);const f7_jg0402 = () => {
    _jg0.placement = attrs.placement || "bottom-start"; }; f7_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("placement", f7_jg0402);const f8_jg0402 = () => {
    _jg0.dense = attrs.dense; }; f8_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("dense", f8_jg0402);const f9_jg0402 = () => {
    _jg0.fullWidth = attrs.fullWidth; }; f9_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("fullWidth", f9_jg0402);const f10_jg0402 = () => {
    _jg0.alignTrigger = attrs.alignTrigger; }; f10_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("alignTrigger", f10_jg0402);const f11_jg0402 = () => {
    _jg0.closeOnSelect = attrs.closeOnSelect !== false; }; f11_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("closeOnSelect", f11_jg0402);const f12_jg0402 = () => {
    _jg0.closeOnOutsideClick = attrs.closeOnOutsideClick !== false; }; f12_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("closeOnOutsideClick", f12_jg0402);const f13_jg0402 = () => {
    _jg0.size = attrs.size || "auto"; }; f13_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("size", f13_jg0402);
    _jg0._popperOptions = (0,_util__WEBPACK_IMPORTED_MODULE_1__.mergePopperOpts)({
      modifiers: {
        keepTogether: {
          enabled: true
        },
        flip: {
          enabled: false
        }
      }
    }, attrs._popperOptions);const f15_jg0402 = () => {
    _jg0.listClass = attrs.listClass; }; f15_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("listClass", f15_jg0402);
    _jg0._Menu = {
      close: _jg0.close.bind(_jg0)
    };
    _jg0.__setContext(MENU_PROVIDER, _jg0._Menu, true);
  }
  get placement() {
    return this._placement;
  }
  set placement(v) {
    if (this._placement === v)
      return;
    this._placement = v;
    this.__updateIfNeed(this.updateOffset);
  }
  get offset() {
    return this._offset;
  }
  set offset(v) {
    if (this._offset === v)
      return;
    this._offset = v;
    this.__updateIfNeed(this.updateOffset);
  }
  onUpdateActive(isActive) {
    this.active = isActive;
    this.__notify("update.active", isActive);
    this.__notify(isActive ? "opened" : "closed");
  }
  close() {
    if (!this.active || !this.closeOnSelect)
      return;
    this.active = !this.active;
    this.__notify("update.active", this.active, "close");
    this.__notify("closed");
  }
  __afterRender() {
    this.updateOffset();
    this.updateWidth();
  }
  updateOffset() {
    if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(this.offset) && this.offset !== null) {
      if (this.popperOffset !== this.offset) {
        this.popperOffset = this.offset;
      }
      return;
    }
    const el = this.__firstDOM;
    const pl = this.placement;
    let offsetX = 0;
    let offsetY = 0;
    if (this.alignTrigger) {
      this.popperOffset = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(this.alignTrigger) ? this.alignTrigger : "0, 0";
      return;
    }
    if (pl.startsWith("bottom") || pl.startsWith("top")) {
      offsetY = -(el.offsetHeight + 11);
      if (pl.endsWith("-start")) {
        offsetX = -8;
      } else if (pl.endsWith("-end")) {
        offsetX = 8;
      }
    } else {
      offsetY = -(el.offsetWidth + 8);
      if (pl.endsWith("-start")) {
        offsetX = -11;
      } else if (pl.endsWith("-end")) {
        offsetX = 11;
      }
    }
    this.popperOffset = `${offsetX}, ${offsetY}`;
  }
  updateWidth() {
    if (!this.fullWidth) {
      return;
    }
    const el = this.__firstDOM;
    if (!el)
      return;
    const w = el.offsetWidth;
    this.contentStyles = `width: ${w}px; max-width: ${w}px;`;
  }
}
Menu.template = _menu_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../jinge-material/lib/menu/menu.tpl.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/menu/menu.tpl.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popover */ "../jinge-material/lib/popover/index.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list */ "../jinge-material/lib/list/index.js");



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
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "div",
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "div",
                  {
                    class: `md-menu-content-container`
                  },
                  ...(() => {
                    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        slots: {
                          'default': function(component) {
                            return [
                            ...(() => {
                              const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
                              const renderFn = __ac && __ac['content'] ? __ac['content'] : null;
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
                      class: undefined
                    });
                    const fn_0 = () => {
                      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)((0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([vm_0.dense && 'md-dense', vm_0.listClass]));
                    };
                    fn_0();
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["dense"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["listClass"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                    const el = _list__WEBPACK_IMPORTED_MODULE_2__.List.create(attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                  })()
                )
              );
              const fn_0 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.contentStyles);
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["contentStyles"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_1 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-menu-content', vm_0.size]));
              };
              fn_1();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["size"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      class: undefined,
      trigger: undefined,
      active: undefined,
      transition: undefined,
      placement: undefined,
      offset: undefined,
      delay: undefined,
      closeOnOutsideClick: undefined,
      _popperOptions: undefined
    });
    const fn_0 = () => {
      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)((0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(['md-menu', vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.trigger = vm_0.trigger;
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["trigger"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_2 = () => {
      attrs.active = vm_0.active;
    };
    fn_2();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_3 = () => {
      attrs.transition = vm_0.transition;
    };
    fn_3();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["transition"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_4 = () => {
      attrs.placement = vm_0.placement;
    };
    fn_4();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["placement"], fn_4, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_5 = () => {
      attrs.offset = vm_0.popperOffset;
    };
    fn_5();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["popperOffset"], fn_5, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_6 = () => {
      attrs.delay = vm_0.delay;
    };
    fn_6();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["delay"], fn_6, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_7 = () => {
      attrs.closeOnOutsideClick = vm_0.closeOnOutsideClick;
    };
    fn_7();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["closeOnOutsideClick"], fn_7, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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

/***/ "../jinge-material/lib/menu/style/index.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/menu/style/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/menu/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/overlay/index.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/overlay/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Overlay": () => (/* binding */ Overlay)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/overlay/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/overlay/index.tpl.js");


class Overlay extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
    _jg0.__portalDisabled = attrs.__portalDisabled;
    _jg0.__portalTarget = attrs.__portalTarget || "body";const f3_jg0402 = () => {
    _jg0.active = attrs.active; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("active", f3_jg0402);const f4_jg0402 = () => {
    _jg0.fixed = attrs.fixed; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("fixed", f4_jg0402);
  }
  onClick(evt) {
    this.__notify("click", evt);
  }
}
Overlay.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/overlay/index.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/overlay/index.tpl.js ***!
  \**************************************************/
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
                        );
                        const fn_0 = () => {
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-overlay', vm_0.fixed && 'md-fixed', vm_0.class]));
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["fixed"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'click', function(...args) {
                          vm_0.onClick(...args);
                        });
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })()
                      ];
                    }
                  }
                },
                expect: undefined,
                transition: `md-overlay`
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
      __disabled: undefined,
      __target: undefined
    });
    const fn_0 = () => {
      attrs.__disabled = vm_0.__portalDisabled;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["__portalDisabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.__target = vm_0.__portalTarget;
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["__portalTarget"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _portal__WEBPACK_IMPORTED_MODULE_1__.Portal.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/overlay/style/index.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/overlay/style/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/overlay/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/popover/index.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/popover/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popover": () => (/* binding */ Popover)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/popover/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/popover/index.tpl.js");



const triggerValidator = new _util__WEBPACK_IMPORTED_MODULE_2__.EnumAttrValidator("<md-popover>", "trigger", ["click", "hover", "none"]);
class Popover extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    triggerValidator.assert(attrs);
    if ("offset" in attrs) {
      const v = attrs.offset;
      if (v && !((0,jinge__WEBPACK_IMPORTED_MODULE_1__.isString)(v) || (0,jinge__WEBPACK_IMPORTED_MODULE_1__.isNumber)(v) || Array.isArray(v) || (0,jinge__WEBPACK_IMPORTED_MODULE_1__.isFunction)(v))) {
        throw new Error('<md-popper/> invalid attribute value of "offset"');
      }
    }
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
    _jg0._instance = null;const f4_jg0402 = () => {
    _jg0.active = !!attrs.active; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("active", f4_jg0402);const f5_jg0402 = () => {
    _jg0.trigger = attrs.trigger || "click"; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("trigger", f5_jg0402);const f6_jg0402 = () => {
    _jg0.delay = Number(attrs.delay || 0); }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("delay", f6_jg0402);const f7_jg0402 = () => {
    _jg0.placement = attrs.placement || "bottom-start"; }; f7_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("placement", f7_jg0402);const f8_jg0402 = () => {
    _jg0.offset = attrs.offset || (0,jinge__WEBPACK_IMPORTED_MODULE_1__.vm)([0, 0]); }; f8_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("offset", f8_jg0402);const f9_jg0402 = () => {
    _jg0.transition = attrs.transition || "md-popover"; }; f9_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("transition", f9_jg0402);const f10_jg0402 = () => {
    _jg0.closeOnOutsideClick = attrs.closeOnOutsideClick !== false; }; f10_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("closeOnOutsideClick", f10_jg0402);
    _jg0._popperOptions = attrs._popperOptions;
    _jg0.isShown = !!_jg0.active;
    _jg0._state = _jg0.isShown ? jinge__WEBPACK_IMPORTED_MODULE_1__.TransitionStates.ENTERED : jinge__WEBPACK_IMPORTED_MODULE_1__.TransitionStates.LEAVED;
    _jg0._delayTM = null;
    _jg0._ts = null;
    _jg0._tsEndDeregister = null;
    _jg0._outsideClickDeregister = null;
  }
  get active() {
    return this._active;
  }
  set active(v) {
    if (this._active === v)
      return;
    this._active = v;
    this.__updateIfNeed();
  }
  __afterRender() {
    this._$ref = this[jinge__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes[0].__firstDOM;
    if (this._active) {
      this.show();
    }
    if (this.trigger === "click") {
      this.__domAddListener(this._$ref, "click", () => this.toggle());
    } else if (this.trigger === "hover") {
      this.__domAddListener(this._$ref, "click", () => this.hide());
      this.__domAddListener(this._$ref, "mouseenter", () => this.show());
      this.__domAddListener(this._$ref, "mouseleave", () => this.hide());
    }
  }
  __beforeDestroy() {
    this.hide(true);
  }
  __update() {
    if (this._active) {
      this.show();
    } else {
      this.hide();
    }
  }
  toggle() {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  }
  show() {
    if (!this._active) {
      this._active = true;
      this.__notify("update.active", true);
    }
    if (this._state === jinge__WEBPACK_IMPORTED_MODULE_1__.TransitionStates.ENTERING || this._state === jinge__WEBPACK_IMPORTED_MODULE_1__.TransitionStates.ENTERED) {
      return;
    }
    if (this._ts) {
      this._onTsEnd(false);
    }
    if (this._delayTM) {
      clearTimeout(this._delayTM);
      this._delayTM = null;
    }
    if (this.delay > 0) {
      this._delayTM = window.setTimeout(() => {
        this.isShown = true;
      }, this.delay);
    } else {
      this.isShown = true;
    }
  }
  hide(disableTransition = false) {
    if (this._active) {
      this._active = false;
      this.__notify("update.active", false);
    }
    if (this._delayTM) {
      clearTimeout(this._delayTM);
      this._delayTM = null;
    }
    if (this._ts) {
      this._onTsEnd(false);
    }
    if (this._state === jinge__WEBPACK_IMPORTED_MODULE_1__.TransitionStates.LEAVING || this._state === jinge__WEBPACK_IMPORTED_MODULE_1__.TransitionStates.LEAVED) {
      return;
    }
    if (this.trigger !== "none" && this._outsideClickDeregister) {
      this._outsideClickDeregister();
      this._outsideClickDeregister = null;
    }
    if (disableTransition === false && this.transition) {
      this._state = jinge__WEBPACK_IMPORTED_MODULE_1__.TransitionStates.LEAVING;
      this._handleTransition("leave", () => {
        this._doHide();
      });
    } else {
      this._doHide();
    }
  }
  _doHide() {
    this._state = jinge__WEBPACK_IMPORTED_MODULE_1__.TransitionStates.LEAVED;
    this.isShown = false;
    this._instance?.destroy();
    this._instance = null;
    this._$pop = null;
  }
  _onIfSwitched(trueBranch) {
    if (!trueBranch)
      return;
    this._doShow();
  }
  _doShow() {
    this._$pop = this.__getRef("pop");
    if (!this._$pop || (0,jinge__WEBPACK_IMPORTED_MODULE_1__.isArray)(this._$pop)) {
      throw new Error("ref:pop not found.");
    }
    this._state = jinge__WEBPACK_IMPORTED_MODULE_1__.TransitionStates.ENTERING;
    if (this.trigger !== "none") {
      this._outsideClickDeregister = this.__domAddListener(document, "click", this._onOutsideClick);
    }
    Promise.all([
      Promise.all(/*! import() */[__webpack_require__.e("vendors-jinge-material_node_modules_pnpm_popperjs_core_2_11_5_node_modules_popperjs_core_lib_-2b39d3"), __webpack_require__.e("vendors-jinge-material_node_modules_pnpm_popperjs_core_2_11_5_node_modules_popperjs_core_lib_-5ed046")]).then(__webpack_require__.bind(__webpack_require__, /*! @popperjs/core/lib/popper-lite */ "../jinge-material/node_modules/.pnpm/@popperjs+core@2.11.5/node_modules/@popperjs/core/lib/popper-lite.js")),
      __webpack_require__.e(/*! import() */ "jinge-material_node_modules_pnpm_popperjs_core_2_11_5_node_modules_popperjs_core_lib_modifier-f8b58a").then(__webpack_require__.bind(__webpack_require__, /*! @popperjs/core/lib/modifiers/offset */ "../jinge-material/node_modules/.pnpm/@popperjs+core@2.11.5/node_modules/@popperjs/core/lib/modifiers/offset.js")),
      Promise.all(/*! import() */[__webpack_require__.e("vendors-jinge-material_node_modules_pnpm_popperjs_core_2_11_5_node_modules_popperjs_core_lib_-2b39d3"), __webpack_require__.e("jinge-material_node_modules_pnpm_popperjs_core_2_11_5_node_modules_popperjs_core_lib_modifier-187ae2")]).then(__webpack_require__.bind(__webpack_require__, /*! @popperjs/core/lib/modifiers/preventOverflow */ "../jinge-material/node_modules/.pnpm/@popperjs+core@2.11.5/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js"))
    ]).then((results) => {
      let offset = this.offset;
      if ((0,jinge__WEBPACK_IMPORTED_MODULE_1__.isString)(offset)) {
        offset = offset.split(",").map((so) => Number(so));
      } else if ((0,jinge__WEBPACK_IMPORTED_MODULE_1__.isNumber)(offset)) {
        offset = (0,jinge__WEBPACK_IMPORTED_MODULE_1__.vm)([0, offset]);
      }
      if (!(0,jinge__WEBPACK_IMPORTED_MODULE_1__.isFunction)(offset) && offset.length < 2) {
        offset.unshift(0);
      }
      const opts = (0,_util__WEBPACK_IMPORTED_MODULE_2__.mergePopperOpts)({
        placement: this.placement,
        modifiers: [
          results[2].default,
          Object.assign({
            options: {
              offset
            }
          }, results[1].default)
        ],
        onFirstUpdate: this._onPopperCreated.bind(this)
      }, this._popperOptions);
      this._instance = results[0].createPopper(this._$ref, this._$pop, opts);
    });
  }
  _onOutsideClick(evt) {
    if (!this.closeOnOutsideClick) {
      return;
    }
    const $el = evt.target;
    if (this._$ref.contains($el) || this._$pop.contains($el)) {
      return;
    }
    this.hide();
  }
  _onPopperCreated() {
    if (!this.transition)
      return;
    this._handleTransition("enter", () => {
      this._state = jinge__WEBPACK_IMPORTED_MODULE_1__.TransitionStates.ENTERED;
    });
  }
  _handleTransition(act, callback) {
    const ce = `${this.transition}-${act}`;
    const ca = `${ce}-active`;
    const el = this._$pop.children[0];
    el.classList.add(ce);
    (0,jinge__WEBPACK_IMPORTED_MODULE_1__.getDurationType)(el);
    el.classList.add(ca);
    const { type: tsEndName, time: tsDuration } = (0,jinge__WEBPACK_IMPORTED_MODULE_1__.getDuration)(el);
    this._ts = [el, ce, ca, tsEndName, callback, null];
    if (!tsEndName) {
      this._onTsEnd();
    } else {
      this._tsEndDeregister = this.__domAddListener(el, tsEndName, this._onTsEnd);
      this._ts[this._ts.length - 1] = setTimeout(this._onTsEnd, tsDuration + 50);
    }
  }
  _onTsEnd(callCb = true) {
    if (!this._ts) {
      return;
    }
    const [el, ce, ca, tsEndName, callback, tm] = this._ts;
    if (tm)
      clearTimeout(tm);
    this._ts = null;
    el.classList.remove(ce);
    el.classList.remove(ca);
    if (tsEndName && this._tsEndDeregister) {
      this._tsEndDeregister();
      this._tsEndDeregister = null;
    }
    callCb && callback && callback();
  }
}
Popover.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/popover/index.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/popover/index.tpl.js ***!
  \**************************************************/
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
    const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
    const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {
      return [
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `missing!!`)
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
  })(),
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        listeners: {
          "branch-switched": {
            fn: function(...args) {
              vm_0._onIfSwitched(...args);
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
                      (() => {
                        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "div",
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            "div",
                            {
                              class: `content`
                            },
                            ...(() => {
                              const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
                              const renderFn = __ac && __ac['content'] ? __ac['content'] :   function(component) {
                                return [
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `missing!!`)
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
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-popover', vm_0.class]));
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_1 = () => {
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
                        };
                        fn_1();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_0.__setRef('pop', el, component)
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return el;
                      })()
                      ];
                    }
                  }
                },
              });
              const el = _portal__WEBPACK_IMPORTED_MODULE_1__.Portal.create(attrs);
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

/***/ }),

/***/ "../jinge-material/lib/popover/style/index.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/popover/style/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/popover/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/portal/index.js":
/*!*********************************************!*\
  !*** ../jinge-material/lib/portal/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Portal": () => (/* binding */ Portal)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/portal/index.tpl.js");



const targetValidator = new _util__WEBPACK_IMPORTED_MODULE_1__.EnumAttrValidator("<md-portal>", "__target", ["parent", "body"]);
class Portal extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    targetValidator.assert(attrs);
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._disabled = attrs.__disabled;
    _jg0._target = attrs.__target || "body";
    _jg0._removed = false;
    _jg0._savedRootNode = null;
    _jg0._elsToAppend = null;
  }
  get __transitionDOM() {
    if (this._disabled) {
      return super.__transitionDOM;
    } else {
      return this._savedRootNode.__firstDOM;
    }
  }
  __render() {
    const els = super.__render();
    if (this._disabled) {
      return els;
    }
    if (this._target === "body") {
      document.body.appendChild(els.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(els) : els[0]);
    } else {
      this._elsToAppend = els;
    }
    this._savedRootNode = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes[0];
    this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes = [document.createComment("ported")];
    return this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
  }
  __handleAfterRender() {
    if (!this._disabled) {
      if (this._target === "parent") {
        let pa = this.__firstDOM.parentNode;
        if (pa !== document.body) {
          pa = pa.parentNode;
        }
        const els = this._elsToAppend;
        pa.appendChild(els.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(els) : els[0]);
        this._elsToAppend = null;
      }
      this._savedRootNode.__handleAfterRender();
    }
    super.__handleAfterRender();
  }
  __handleBeforeDestroy(removeDOM = false) {
    if (!this._disabled) {
      this._savedRootNode.__destroy(true);
    }
    super.__handleBeforeDestroy(removeDOM);
  }
}
Portal.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/portal/index.tpl.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/portal/index.tpl.js ***!
  \*************************************************/
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

/***/ }),

/***/ "../jinge-material/lib/ripple/index.js":
/*!*********************************************!*\
  !*** ../jinge-material/lib/ripple/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ripple": () => (/* reexport safe */ _ripple__WEBPACK_IMPORTED_MODULE_1__.Ripple),
/* harmony export */   "Wave": () => (/* reexport safe */ _wave__WEBPACK_IMPORTED_MODULE_2__.Wave)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/ripple/style/index.js");
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ripple */ "../jinge-material/lib/ripple/ripple.js");
/* harmony import */ var _wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wave */ "../jinge-material/lib/ripple/wave.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/ripple/ripple.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/ripple/ripple.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ripple": () => (/* binding */ Ripple)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _ripple_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ripple.tpl.js */ "../jinge-material/lib/ripple/ripple.tpl.js");


class Ripple extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.active = attrs.active; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f1_jg0402);const f2_jg0402 = () => {
    _jg0.disabled = attrs.disabled; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("disabled", f2_jg0402);const f3_jg0402 = () => {
    _jg0.centered = attrs.centered; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("centered", f3_jg0402);
    _jg0.ripples = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([]);
    _jg0._eventTrigger = attrs.eventTrigger !== false;
    _jg0._touchTimeout = null;
    _jg0._eventType = null;
  }
  get active() {
    return this.__active;
  }
  set active(v) {
    if (this.__active === v)
      return;
    this.__active = v;
    let isBool = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(v);
    if (!isBool) {
      if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(v)) {
        isBool = true;
        v = !!v;
      }
    }
    if (isBool && this.centered && v) {
      this.startRipple({
        type: "mousedown"
      });
    } else if (!isBool && v && v._event) {
      this.startRipple(v._event);
    }
    this.__notify("update.active", false);
  }
  touchMoveCheck() {
    this._touchTimeout && clearTimeout(this._touchTimeout);
  }
  touchStartCheck($event) {
    this._touchTimeout = window.setTimeout(() => {
      this.startRipple.bind(this, $event);
    }, 100);
  }
  startRipple($event) {
    const { _eventType, disabled, centered } = this;
    if (!disabled && (!_eventType || _eventType === $event.type)) {
      const size = this.getSize();
      let position;
      if (centered) {
        position = this.getCenteredPosition(size);
      } else {
        position = this.getHitPosition($event, size);
      }
      this._eventType = $event.type;
      this.ripples.push((0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
        waveStyles: this.applyStyles(position, size),
        uuid: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.uid)()
      }));
    }
  }
  applyStyles(position, size) {
    return {
      width: size,
      height: size,
      ...position
    };
  }
  clearWave(uuid) {
    if (!uuid) {
      this.ripples.length = 0;
      return;
    }
    const idx = this.ripples.findIndex((ripple) => ripple.uuid === uuid);
    if (idx < 0)
      return;
    this.ripples.splice(idx, 1);
  }
  getSize() {
    const { offsetWidth, offsetHeight } = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes[0];
    return Math.round(Math.max(offsetWidth, offsetHeight));
  }
  getCenteredPosition(size) {
    const halfSize = -size / 2 + "px";
    return {
      "margin-top": halfSize,
      "margin-left": halfSize
    };
  }
  getHitPosition($event, elementSize) {
    const rect = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes[0].getBoundingClientRect();
    let top = $event.pageY;
    let left = $event.pageX;
    if ($event.type === "touchstart") {
      top = $event.changedTouches[0].pageY;
      left = $event.changedTouches[0].pageX;
    }
    return {
      top: top - rect.top - elementSize / 2 - document.documentElement.scrollTop + "px",
      left: left - rect.left - elementSize / 2 - document.documentElement.scrollLeft + "px"
    };
  }
}
Ripple.template = _ripple_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=ripple.js.map

/***/ }),

/***/ "../jinge-material/lib/ripple/ripple.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/ripple/ripple.tpl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _wave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wave */ "../jinge-material/lib/ripple/wave.js");



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
                          const vm_1 = component;
                          return [
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                listeners: {
                                  end: {
                                    fn: function(...args) {
                                      vm_0.clearWave(vm_1.each.uuid)
                                    },
                                    opts: null
                                  }
                                },
                              },
                              class: undefined,
                              uuid: undefined,
                              style: undefined
                            });
                            const fn_0 = () => {
                              attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)((0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({ 'md-ripple-wave': true, 'md-centered': vm_0.centered }));
                            };
                            fn_0();
                            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["centered"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_1 = () => {
                              attrs.uuid = vm_1.each?.uuid;
                            };
                            fn_1();
                            vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","uuid"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const fn_2 = () => {
                              attrs.style = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.style2str)(vm_1.each?.waveStyles);
                            };
                            fn_2();
                            vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","waveStyles"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                            const el = _wave__WEBPACK_IMPORTED_MODULE_1__.Wave.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                    loop: undefined,
                    key: `each.uuid`
                  });
                  const fn_0 = () => {
                    attrs.loop = vm_0.ripples;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripples"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
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
          attrs.expect = !vm_0.disabled || vm_0.ripples?.length > 0;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["ripples","length"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })()
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-ripple', { 'md-disabled' : vm_0.disabled }, vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["disabled"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'touchsart', function(...args) {
      vm_0._eventTrigger && vm_0.touchStartCheck(args[0])
    }, {"passive":true});
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'touchmove', function(...args) {
      vm_0._eventTrigger && vm_0.touchMoveCheck(args[0])
    }, {"passive":true});
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'mousedown', function(...args) {
      vm_0._eventTrigger && vm_0.startRipple(args[0])
    }, {"passive":true});
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/ripple/style/index.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/ripple/style/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/ripple/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/ripple/wave.js":
/*!********************************************!*\
  !*** ../jinge-material/lib/ripple/wave.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wave": () => (/* binding */ Wave)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _wave_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wave.tpl.js */ "../jinge-material/lib/ripple/wave.tpl.js");


class Wave extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.uuid = attrs.uuid; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("uuid", f1_jg0402);
    _jg0.animating = false;
  }
  __afterRender() {
    this.animating = true;
  }
  onTransition(action) {
    if (action === "after-enter") {
      this.animating = false;
      this.__notify("end", this.uuid);
    }
  }
}
Wave.template = _wave_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=wave.js.map

/***/ }),

/***/ "../jinge-material/lib/ripple/wave.tpl.js":
/*!************************************************!*\
  !*** ../jinge-material/lib/ripple/wave.tpl.js ***!
  \************************************************/
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
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        listeners: {
          transition: {
            fn: function(...args) {
              vm_0.onTransition(...args);
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
              );
              const fn_0 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, vm_0.class);
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_1 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
              };
              fn_1();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      expect: undefined,
      transition: `md-ripple-wave`
    });
    const fn_0 = () => {
      attrs.expect = vm_0.animating;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["animating"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/toolbar/index.js":
/*!**********************************************!*\
  !*** ../jinge-material/lib/toolbar/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toolbar": () => (/* binding */ Toolbar)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/toolbar/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/toolbar/index.tpl.js");



const elevationValidator = new _util__WEBPACK_IMPORTED_MODULE_2__.EnumAttrValidator("<md-toolbar>", "elevation", _util__WEBPACK_IMPORTED_MODULE_2__.ELEVATION_ENUMS);
class Toolbar extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    attrs.elevation = "elevation" in attrs ? Number(attrs.elevation) : 4;
    elevationValidator.assert(attrs);
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;const f3_jg0402 = () => {
    _jg0.elevation = attrs.elevation; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("elevation", f3_jg0402);
  }
}
Toolbar.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/toolbar/index.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-material/lib/toolbar/index.tpl.js ***!
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
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-toolbar', 'md-elevation-' + vm_0.elevation, vm_0.class]));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["elevation"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/toolbar/style/index.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/toolbar/style/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/toolbar/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/uisref/index.js":
/*!*********************************************!*\
  !*** ../jinge-material/lib/uisref/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UISref": () => (/* binding */ UISref),
/* harmony export */   "isParamsOrQuerySameOrInclude": () => (/* binding */ isParamsOrQuerySameOrInclude)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/uisref/index.tpl.js");


function isParamsOrQuerySameOrInclude(src, dst, strict = true) {
  if (!src)
    return !dst;
  if (!dst)
    return !src;
  let kc = 0;
  for (const k in src) {
    const sv = src[k];
    const dv = dst[k];
    if (strict) {
      if (sv !== dv)
        return false;
    } else {
      if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(dv) || dv === null) {
        if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(sv) && sv !== null) {
          return false;
        }
      } else if (sv !== dv) {
        return false;
      }
    }
    kc++;
  }
  if (strict && kc !== Object.keys(dst).length) {
    return false;
  }
  return true;
}
class UISref extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.to = attrs.to; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("to", f1_jg0402);const f2_jg0402 = () => {
    _jg0.text = attrs.text || ""; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("text", f2_jg0402);const f3_jg0402 = () => {
    _jg0.target = attrs.target || "_self"; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("target", f3_jg0402);const f4_jg0402 = () => {
    _jg0.replace = !!attrs.replace; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("replace", f4_jg0402);const f5_jg0402 = () => {
    _jg0.active = attrs.active; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f5_jg0402);
    _jg0._router = _jg0.__getContext("router");
    if (!_jg0._router) {
      throw new Error('Context named "router" not found.');
    }
    _jg0._tag = attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots?.default ? 0 : -1;
    _jg0._el = null;
    _jg0._qw = false;
    _jg0._clh = _jg0._onClick.bind(_jg0);
    _jg0._rch = _jg0._onRc.bind(_jg0);
    _jg0._rcd = null;
  }
  _onRc() {
    this._upA();
  }
  get target() {
    return this._target;
  }
  set target(v) {
    if (this._target === v)
      return;
    this._target = v;
    this._upT();
  }
  get active() {
    return this._active;
  }
  set active(v) {
    if (this._active === v)
      return;
    if (this._tag >= 0 && this._active && this._el) {
      this._el.classList.remove(this._active);
    }
    this._active = v;
    this.__updateIfNeed(this._upA);
  }
  get to() {
    return this._to;
  }
  set to(v) {
    if (this._to === v)
      return;
    this._to = v;
    this.__updateIfNeed(this._upHa);
  }
  _onClick(e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey) {
      return;
    }
    if (this._tag <= 0) {
      e.preventDefault();
    }
    this._router.go(this._to, {
      target: this.target,
      replace: this.replace
    });
  }
  __afterRender() {
    const el = this.__firstDOM;
    if (this._tag >= 0) {
      this._tag = el.tagName === "A" ? 0 : 1;
    }
    this._el = el;
    this._upT();
    this._upHa();
    this._rcd = this._router.afterEach(() => {
      this._onRc();
    });
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, "click", this._clh);
  }
  __beforeDestroy() {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(this._el, "click", this._clh);
    this._rcd();
    if (this._qw) {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.unwatch)(this._router.__info, "query.*", this._rch);
    }
  }
  _upT() {
    if (this._tag <= 0) {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(this._el, "target", this.target);
    }
  }
  _upHa() {
    this._upH();
    this._upA();
  }
  _upH() {
    if (this._tag <= 0) {
      let href;
      if (!this._to || !(href = this._router.href(this._to))) {
        this._el.removeAttribute("href");
      } else {
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(this._el, "href", href);
      }
    }
  }
  _upA() {
    let isActive = this._to && this._router.includes(this._to);
    if (isActive && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(this._to) && this._to.query) {
      if (!this._qw) {
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.watch)(this._router.__info, "query.*", this._rch);
        this._qw = true;
      }
      isActive = isParamsOrQuerySameOrInclude(this._to.query, this._router.__info?.query);
    } else if (this._qw) {
      this._qw = false;
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.unwatch)(this._router.__info, "query.*", this._rch);
    }
    if (this.isActive === isActive) {
      return;
    }
    this.isActive = isActive;
    if (!this._active || this._tag < 0) {
      return;
    }
    if (this.isActive) {
      this._el.classList.add(this._active);
    } else {
      this._el.classList.remove(this._active);
    }
  }
}
UISref.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/uisref/index.tpl.js":
/*!*************************************************!*\
  !*** ../jinge-material/lib/uisref/index.tpl.js ***!
  \*************************************************/
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
    const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {
      return [
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "a",
          (() => {
            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
            const fn_0 = () => {
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0.text}`);
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["text"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            return el;
          })()
        );
        const fn_0 = () => {
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, ([vm_0.isActive && vm_0.active, vm_0.class]));
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isActive"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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

/***/ }),

/***/ "../jinge-material/locales/en.js":
/*!***************************************!*\
  !*** ../jinge-material/locales/en.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_locales_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/_locales/en */ "../jinge-material/lib/_locales/en.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_locales_en__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../jinge-material/locales/zh_cn.js":
/*!******************************************!*\
  !*** ../jinge-material/locales/zh_cn.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_locales_zh_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/_locales/zh_cn */ "../jinge-material/lib/_locales/zh_cn.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_locales_zh_cn__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../jinge-router/lib/common.js":
/*!*************************************!*\
  !*** ../jinge-router/lib/common.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VIEW_NAME_PATH": () => (/* binding */ VIEW_NAME_PATH)
/* harmony export */ });
const VIEW_NAME_PATH = Symbol("#viewNamePath");


//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../jinge-router/lib/components/index.js":
/*!***********************************************!*\
  !*** ../jinge-router/lib/components/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterComponent": () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_2__.RouterComponent),
/* harmony export */   "RouterLinkComponent": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent),
/* harmony export */   "RouterViewComponent": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_0__.RouterViewComponent)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "../jinge-router/lib/components/view.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "../jinge-router/lib/components/link.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "../jinge-router/lib/components/router.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-router/lib/components/link.js":
/*!**********************************************!*\
  !*** ../jinge-router/lib/components/link.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterLinkComponent": () => (/* binding */ RouterLinkComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "../jinge-router/lib/util.js");
/* harmony import */ var _link_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link.tpl.js */ "../jinge-router/lib/components/link.tpl.js");



class RouterLinkComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.to = attrs.to; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("to", f1_jg0402);const f2_jg0402 = () => {
    _jg0.text = attrs.text || ""; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("text", f2_jg0402);const f3_jg0402 = () => {
    _jg0.target = attrs.target || "_self"; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("target", f3_jg0402);const f4_jg0402 = () => {
    _jg0.replace = !!attrs.replace; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("replace", f4_jg0402);const f5_jg0402 = () => {
    _jg0.active = attrs.active; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f5_jg0402);
    _jg0._router = _jg0.__getContext("router");
    if (!_jg0._router) {
      throw new Error('Context named "router" not found.');
    }
    _jg0._tag = attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots?.default ? 0 : -1;
    _jg0._el = null;
    _jg0._qw = false;
    _jg0._clh = _jg0._onClick.bind(_jg0);
    _jg0._rch = _jg0._onRc.bind(_jg0);
    _jg0._rcd = null;
  }
  _onRc() {
    this._upA();
  }
  get target() {
    return this._target;
  }
  set target(v) {
    if (this._target === v)
      return;
    this._target = v;
    this._upT();
  }
  get active() {
    return this._active;
  }
  set active(v) {
    if (this._active === v)
      return;
    if (this._tag >= 0 && this._active && this._el) {
      this._el.classList.remove(this._active);
    }
    this._active = v;
    this.__updateIfNeed(this._upA);
  }
  get to() {
    return this._to;
  }
  set to(v) {
    if (this._to === v)
      return;
    this._to = v;
    this.__updateIfNeed(this._upHa);
  }
  _onClick(e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey) {
      return;
    }
    if (this._tag <= 0) {
      e.preventDefault();
    }
    this._router.go(this._to, {
      target: this.target,
      replace: this.replace
    });
  }
  __afterRender() {
    const el = this.__firstDOM;
    if (this._tag >= 0) {
      this._tag = el.tagName === "A" ? 0 : 1;
    }
    this._el = el;
    this._upT();
    this._upHa();
    this._rcd = this._router.afterEach(() => {
      this._onRc();
    });
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, "click", this._clh);
  }
  __beforeDestroy() {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(this._el, "click", this._clh);
    this._rcd();
    if (this._qw) {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.unwatch)(this._router.__info, "query.*", this._rch);
    }
  }
  _upT() {
    if (this._tag <= 0) {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(this._el, "target", this.target);
    }
  }
  _upHa() {
    this._upH();
    this._upA();
  }
  _upH() {
    if (this._tag <= 0) {
      let href;
      if (!this._to || !(href = this._router.href(this._to))) {
        this._el.removeAttribute("href");
      } else {
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(this._el, "href", href);
      }
    }
  }
  _upA() {
    let isActive = this._to && this._router.includes(this._to);
    if (isActive && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(this._to) && this._to.query) {
      if (!this._qw) {
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.watch)(this._router.__info, "query.*", this._rch);
        this._qw = true;
      }
      isActive = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isParamsOrQuerySameOrInclude)(this._to.query, this._router.__info?.query);
    } else if (this._qw) {
      this._qw = false;
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.unwatch)(this._router.__info, "query.*", this._rch);
    }
    if (this.isActive === isActive) {
      return;
    }
    this.isActive = isActive;
    if (!this._active || this._tag < 0) {
      return;
    }
    if (this.isActive) {
      this._el.classList.add(this._active);
    } else {
      this._el.classList.remove(this._active);
    }
  }
}
RouterLinkComponent.template = _link_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=link.js.map

/***/ }),

/***/ "../jinge-router/lib/components/link.tpl.js":
/*!**************************************************!*\
  !*** ../jinge-router/lib/components/link.tpl.js ***!
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
  ...(() => {
    const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
    const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {
      return [
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "a",
          (() => {
            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
            const fn_0 = () => {
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0.text}`);
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["text"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            return el;
          })()
        );
        const fn_0 = () => {
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([vm_0.isActive && vm_0.active, vm_0.class]));
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isActive"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["class"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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

/***/ }),

/***/ "../jinge-router/lib/components/redirect.js":
/*!**************************************************!*\
  !*** ../jinge-router/lib/components/redirect.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterParentComponent": () => (/* binding */ RouterParentComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _redirect_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirect.tpl.js */ "../jinge-router/lib/components/redirect.tpl.js");


class RouterParentComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
RouterParentComponent.template = _redirect_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=redirect.js.map

/***/ }),

/***/ "../jinge-router/lib/components/redirect.tpl.js":
/*!******************************************************!*\
  !*** ../jinge-router/lib/components/redirect.tpl.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "../jinge-router/lib/components/view.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
      },
      doc: `after`
    });
    const el = _view__WEBPACK_IMPORTED_MODULE_1__.RouterViewComponent.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-router/lib/components/router.js":
/*!************************************************!*\
  !*** ../jinge-router/lib/components/router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterComponent": () => (/* binding */ RouterComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "../jinge-router/lib/router.js");


class RouterComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    let router;
    if (attrs.router instanceof _router__WEBPACK_IMPORTED_MODULE_1__.Router) {
      router = attrs.router;
    } else if (attrs.router === "hash") {
      router = new _router__WEBPACK_IMPORTED_MODULE_1__.Router({
        mode: "hash"
      });
    } else {
      router = new _router__WEBPACK_IMPORTED_MODULE_1__.Router({
        mode: "html5"
      });
    }
    attrs.routes?.forEach((rd) => {
      router.register(rd);
    });
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._router = router;const f5_jg0402 = () => {
    _jg0.baseHref = attrs.baseHref || "/"; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("baseHref", f5_jg0402);
    _jg0.__setContext("router", router);
    _jg0.__notify("load", _jg0._router);
  }
  get baseHref() {
    return this._router.baseHref;
  }
  set baseHref(v) {
    this._router.baseHref = v;
  }
  __afterRender() {
    this._router.start();
  }
}


//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../jinge-router/lib/components/view.js":
/*!**********************************************!*\
  !*** ../jinge-router/lib/components/view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterViewComponent": () => (/* binding */ RouterViewComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../jinge-router/lib/common.js");


function createEl(renderFn, context) {
  const el = new jinge__WEBPACK_IMPORTED_MODULE_0__.Component((0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
      context,
      slots: {
        default: renderFn
      }
    }
  }));
  return el[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
}
class RouterViewComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs2) {
    super(attrs2);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._name = attrs2.name || "default";
    _jg0._doc = attrs2.doc || "before";
    _jg0._router = _jg0.__getContext("router");
    if (!_jg0._router) {
      throw new Error('Context named "router" not found.');
    }
    const parentNamePath = _jg0.__getContext(_common__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME_PATH);
    _jg0._path = [...parentNamePath || [], _jg0._name];
    _jg0.__setContext(_common__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME_PATH, _jg0._path, true);
    _jg0.resolving = false;
  }
  __afterRender() {
    this._router.__regView(this._path, this);
  }
  __render() {
    const el = document.createComment("router-view");
    this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
  }
  async _shouldUpdateView(from, to) {
    const el = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes[0];
    if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(el)) {
      return true;
    }
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(el.__routeShouldLeave)) {
      return await el.__routeShouldLeave(from, to);
    }
    return true;
  }
  _doUpdateView(err, current, routeMatchItem) {
    const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
    const oldEl = roots[0];
    const oldIsComp = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(oldEl);
    const $el = oldIsComp ? oldEl.__firstDOM : oldEl;
    const $pa = $el.parentNode;
    const removeOldEl = () => {
      if (oldIsComp) {
        oldEl.__destroy(true);
      } else {
        $pa.removeChild($el);
      }
    };
    if (err) {
      err = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(err) ? err.message || err.toString() : err;
      const errRenderFn = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots?.error;
      if (!errRenderFn) {
        const newEl3 = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", { style: "color: red;" }, err);
        $pa.insertBefore(newEl3, $el);
        removeOldEl();
        roots[0] = newEl3;
        return;
      }
      const newEl2 = createEl(errRenderFn, this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context);
      newEl2.error = err;
      const ns2 = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(newEl2.__render());
      $pa.insertBefore(ns2.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(ns2) : ns2[0], $el);
      removeOldEl();
      roots[0] = newEl2;
      newEl2.__handleAfterRender();
      return;
    }
    let CompClazz = null;
    if (routeMatchItem) {
      CompClazz = routeMatchItem.route.components[this._name];
      if (!CompClazz) {
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.warn)(`Component of <router-view/> named "${this._name}" not provided.`);
      }
    }
    if (!CompClazz) {
      const newEl2 = document.createComment("router-view");
      $pa.insertBefore(newEl2, $el);
      removeOldEl();
      roots[0] = newEl2;
      return;
    }
    const newEl = CompClazz.create((0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      ...routeMatchItem.resolves,
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context
      }
    }));
    const ns = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(newEl.__render());
    $pa.insertBefore(ns.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(ns) : ns[0], $el);
    removeOldEl();
    roots[0] = newEl;
    newEl.__handleAfterRender();
  }
  _prepareUpdateView() {
    if (this._doc !== "before") {
      return;
    }
    const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
    const oldEl = roots[0];
    const oldIsComp = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(oldEl);
    const $el = oldIsComp ? oldEl.__firstDOM : oldEl;
    const $pa = $el.parentNode;
    const $cursor = document.createComment("--");
    $pa.insertBefore($cursor, $el);
    if (oldIsComp) {
      oldEl.__destroy(true);
    } else {
      $pa.removeChild($el);
    }
    const loadingRenderFn = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots?.default;
    if (!loadingRenderFn) {
      roots[0] = $cursor;
      return;
    }
    const loadingEl = createEl(loadingRenderFn, this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context);
    const ns = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(loadingEl.__render());
    $pa.insertBefore(ns.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(ns) : ns[0], $cursor);
    $pa.removeChild($cursor);
    roots[0] = loadingEl;
  }
  __beforeDestroy() {
    this._router.__deregView(this._path);
  }
}


//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../jinge-router/lib/index.js":
/*!************************************!*\
  !*** ../jinge-router/lib/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_2__.Router),
/* harmony export */   "RouterComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.RouterComponent),
/* harmony export */   "RouterLinkComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.RouterLinkComponent),
/* harmony export */   "RouterViewComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.RouterViewComponent),
/* harmony export */   "VIEW_NAME_PATH": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.VIEW_NAME_PATH),
/* harmony export */   "cloneParamsOrQuery": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.cloneParamsOrQuery),
/* harmony export */   "encodeParamsOrQuery": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.encodeParamsOrQuery),
/* harmony export */   "isParamsOrQuerySameOrInclude": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.isParamsOrQuerySameOrInclude)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../jinge-router/lib/common.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../jinge-router/lib/util.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "../jinge-router/lib/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "../jinge-router/lib/components/index.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-router/lib/router.js":
/*!*************************************!*\
  !*** ../jinge-router/lib/router.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path-to-regexp */ "../jinge-router/node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js");
/* harmony import */ var _components_redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/redirect */ "../jinge-router/lib/components/redirect.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../jinge-router/lib/util.js");




function normPath(p) {
  if (!p || !p.startsWith("/"))
    p = "/" + p;
  return p.replace(/[/\\]+/g, "/");
}
function parseVal(v) {
  if (v === "true") {
    return true;
  } else if (v === "false") {
    return false;
  } else if (/^\d+$/.test(v)) {
    return Number(v);
  } else {
    return v;
  }
}
function parseQuery(search) {
  const segments = search.split("&").map((s) => s.trim()).filter((s) => !!s);
  if (segments.length === 0)
    return {};
  return Object.fromEntries(segments.map((seg) => {
    const pair = seg.split("=").map(decodeURIComponent);
    return [pair[0], pair.length <= 1 ? true : parseVal(pair[1])];
  }));
}
function addRoute(map, route, container, parent = null) {
  const hasChild = route.children && route.children.length > 0;
  const path = normPath(route.path + (hasChild ? "/" : ""));
  const name = route.name || (parent ? parent.name : "") + route.path;
  if (map.has(name)) {
    throw new Error("duplicated route name: " + name);
  }
  if (hasChild && !route.component && !route.components) {
    route.component = _components_redirect__WEBPACK_IMPORTED_MODULE_1__.RouterParentComponent;
  }
  const _route = {
    name,
    parent,
    p2r: {
      match: (0,path_to_regexp__WEBPACK_IMPORTED_MODULE_3__.match)(path, { end: !hasChild, decode: decodeURIComponent }),
      toPath: (0,path_to_regexp__WEBPACK_IMPORTED_MODULE_3__.compile)(path)
    },
    define: route,
    components: null,
    redirect: route.redirect
  };
  map.set(name, _route);
  if (hasChild) {
    _route.children = [];
    route.children.forEach((cr) => {
      addRoute(map, cr, _route.children, _route);
    });
  }
  container.push(_route);
}
function matchRoutePath(pathname, routes, parentPath = []) {
  routes.find((route) => {
    const matches = route.p2r.match(pathname);
    if (matches) {
      const params = parentPath.reduce((pv, it) => {
        return Object.assign({}, it.params);
      }, {});
      parentPath.push({
        route,
        params: Object.assign(params, matches.params)
      });
      if (route.children) {
        matchRoutePath(pathname.substring(matches.path.length - 1), route.children, parentPath);
      }
    }
    return !!matches;
  });
  return parentPath;
}
function rollback(currentInfo, mode) {
  const _search = (0,_util__WEBPACK_IMPORTED_MODULE_2__.encodeParamsOrQuery)(currentInfo.query);
  const _url = currentInfo._pathname + (_search ? "?" + _search : "");
  history.replaceState(null, "", (mode === "hash" ? "#" : "") + _url);
}
function getPathnameAndSearch(destination, __map, baseHref) {
  if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(destination)) {
    destination = { name: destination };
  }
  const name = destination.name;
  const route = __map.get(name);
  if (!route) {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.warn)(`target route name "${name}" not found.`);
    return null;
  }
  const rs = [route];
  let _p = route;
  while (_p = _p.parent) {
    rs.unshift(_p);
  }
  return {
    pathname: normPath(baseHref + "/" + rs.reduce((pv, it) => {
      return pv + "/" + it.p2r.toPath(destination.params);
    }, "")),
    search: Object.keys(destination.query || {}).map((k) => {
      return encodeURIComponent(k) + "=" + encodeURIComponent(destination.query[k]);
    }).join("&")
  };
}
function getViewsToUpdate(views, resetLv, curLv = 0, viewsToUpdate = []) {
  views.forEach((node) => {
    if (curLv >= resetLv) {
      viewsToUpdate.push(node);
    } else if (node.__views) {
      getViewsToUpdate(node.__views, resetLv, curLv + 1, viewsToUpdate);
    }
  });
  return viewsToUpdate;
}
function addGuard(arr, fn) {
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayPushIfNotExist)(arr, fn);
  return () => {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(arr, fn);
  };
}
class Router {
  constructor({ mode, baseHref = "/" }) {
    this.__mode = mode;
    this.__started = false;
    this.__dereg = null;
    this.__routes = [];
    this.__map = /* @__PURE__ */ new Map();
    this.__views = null;
    this.__guard = {
      before: [],
      after: []
    };
    this.__info = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
      _pathname: null,
      _routePath: [],
      params: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({}),
      query: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({})
    });
    this.__asyncKey = 0;
    this.baseHref = baseHref;
  }
  get baseHref() {
    return this.__base;
  }
  set baseHref(v) {
    v = normPath(v);
    if (!v.endsWith("/")) {
      v += "/";
    }
    this.__base = v;
  }
  beforeEach(guardFn) {
    return addGuard(this.__guard.before, guardFn);
  }
  afterEach(guardFn) {
    return addGuard(this.__guard.after, guardFn);
  }
  __regView(viewNamePath, viewComponent) {
    let node = this;
    for (let i = 0; i < viewNamePath.length - 1; i++) {
      node = node.__views.get(viewNamePath[i]);
    }
    if (!node.__views) {
      node.__views = /* @__PURE__ */ new Map();
    }
    const viewName = viewNamePath[viewNamePath.length - 1];
    if (node.__views.has(viewName)) {
      throw new Error("dulplicated view name: " + viewName + " at path: " + viewNamePath.join("->"));
    }
    node.__views.set(viewName, {
      component: viewComponent,
      __views: null
    });
    if (viewNamePath.length > this.__info._routePath.length) {
      return;
    }
    viewComponent._doUpdateView(null, this.__info, this.__info._routePath[viewNamePath.length - 1]);
  }
  __deregView(viewNamePath) {
    let node = this;
    for (let i = 0; i < viewNamePath.length - 1; i++) {
      node = node.__views.get(viewNamePath[i]);
      if (!node)
        return;
    }
    if (!node.__views) {
      return;
    }
    node.__views.delete(viewNamePath[viewNamePath.length - 1]);
  }
  register(route) {
    if (this.__started) {
      throw new Error("can't register after Router.start()");
    }
    addRoute(this.__map, route, this.__routes);
    return this;
  }
  start() {
    if (this.__started)
      return;
    this.__started = true;
    const isHashMode = this.__mode === "hash";
    this.__dereg = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.registerEvent)(window, isHashMode ? "hashchange" : "popstate", isHashMode ? this._onHashChange.bind(this) : this._onStateChange.bind(this));
    if (isHashMode) {
      this._onHashChange();
    } else {
      this._onStateChange();
    }
  }
  destroy() {
    if (!this.__started)
      return;
    this.__dereg?.();
  }
  _onErr(err) {
    console.error(err);
  }
  _onHashChange() {
    const hash = location.hash.slice(1);
    const qi = hash.indexOf("?");
    this._update(qi > 0 ? hash.substring(0, qi) : hash, qi > 0 ? hash.substring(qi + 1) : "").catch((err) => this._onErr(err));
  }
  _onStateChange() {
    this._update(location.pathname, location.search ? location.search.substring(1) : "").catch((err) => this._onErr(err));
  }
  async _update(pathname, search) {
    pathname = normPath(pathname);
    if (this.__base !== "/" && pathname.startsWith(this.__base)) {
      pathname = pathname.substring(this.__base.length - 1);
    }
    const query = search ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(search) ? parseQuery(search) : (0,_util__WEBPACK_IMPORTED_MODULE_2__.cloneParamsOrQuery)(search) : {};
    const asyncKey = ++this.__asyncKey;
    const currentInfo = this.__info;
    if (pathname === currentInfo._pathname) {
      if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isParamsOrQuerySameOrInclude)(query, currentInfo.query)) {
        currentInfo.query = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(query);
      }
      return;
    }
    const newMatchPath = matchRoutePath(pathname, this.__routes);
    if (newMatchPath.length === 0) {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.warn)("no route match path:", pathname);
      return;
    }
    const last = newMatchPath[newMatchPath.length - 1];
    const newRouteInfo = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
      _pathname: pathname,
      _routePath: newMatchPath,
      query: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(query),
      params: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(Object.assign({}, last.params))
    });
    let redirect = last.route.redirect;
    if (redirect) {
      if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(redirect)) {
        redirect = await redirect(newRouteInfo.params, newRouteInfo.query);
        if (asyncKey !== this.__asyncKey) {
          return;
        }
      } else if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(redirect)) {
        redirect = {
          name: redirect,
          params: newRouteInfo.params,
          query: newRouteInfo.query
        };
      }
      this.go(redirect, {
        replace: true
      });
      return;
    }
    let sameLevel = -1;
    let shouldUpdateParams = false;
    for (let i = 0; i < currentInfo._routePath.length; i++) {
      if (i >= newMatchPath.length)
        break;
      const oldIt = currentInfo._routePath[i];
      const newIt = newMatchPath[i];
      if (oldIt.route !== newIt.route) {
        break;
      }
      if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isParamsOrQuerySameOrInclude)(newIt.params, oldIt.params)) {
        if (newIt.route.define.dynamic) {
          oldIt.params = newIt.params;
          shouldUpdateParams = true;
        } else {
          break;
        }
      }
      sameLevel = i;
    }
    if (currentInfo._routePath.length === newMatchPath.length && sameLevel === newMatchPath.length - 1) {
      const shouldUpdateQuery = !(0,_util__WEBPACK_IMPORTED_MODULE_2__.isParamsOrQuerySameOrInclude)(query, currentInfo.query);
      const oldRouteInfo2 = shouldUpdateQuery || shouldUpdateParams ? Object.assign({}, currentInfo) : currentInfo;
      if (shouldUpdateParams) {
        Object.assign(currentInfo.params, newRouteInfo.params);
        currentInfo._pathname = newRouteInfo._pathname;
      }
      if (shouldUpdateQuery) {
        Object.assign(currentInfo.query, query);
      }
      this.__guard.after.forEach((fn) => {
        fn(oldRouteInfo2, newRouteInfo);
      });
      return;
    }
    const routeIdxToUpdate = sameLevel + 1;
    const viewsToUpdate = getViewsToUpdate(this.__views, routeIdxToUpdate);
    for (let i = 0; i < viewsToUpdate.length; i++) {
      const vtp = viewsToUpdate[i];
      const shouldUpdate = await vtp.component._shouldUpdateView(currentInfo, newRouteInfo);
      if (asyncKey !== this.__asyncKey) {
        return;
      }
      if (shouldUpdate === false) {
        return rollback(currentInfo, this.__mode);
      }
    }
    if (currentInfo._routePath.length > routeIdxToUpdate) {
      const beforeEachGuardFns = this.__guard.before;
      for (let i = 0; i < beforeEachGuardFns.length; i++) {
        const shouldLeave = await beforeEachGuardFns[i](currentInfo, newRouteInfo);
        if (this.__asyncKey !== asyncKey) {
          return;
        }
        if (shouldLeave === false) {
          return rollback(currentInfo, this.__mode);
        }
      }
      const routeDef = currentInfo._routePath[routeIdxToUpdate].route.define;
      if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(routeDef.onLeave)) {
        const shouldLeave = await routeDef.onLeave(currentInfo, newRouteInfo);
        if (this.__asyncKey !== asyncKey) {
          return;
        }
        if (shouldLeave === false) {
          return rollback(currentInfo, this.__mode);
        }
      }
    }
    viewsToUpdate.forEach((vtp) => {
      vtp.__views?.clear();
      vtp.component._prepareUpdateView(newRouteInfo, newMatchPath[routeIdxToUpdate]);
    });
    if (newRouteInfo._routePath.length > routeIdxToUpdate) {
      for (let i = routeIdxToUpdate; i < newRouteInfo._routePath.length; i++) {
        const routeDef = newRouteInfo._routePath[i].route.define;
        if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(routeDef.onEnter)) {
          await routeDef.onEnter(currentInfo, newRouteInfo);
          if (this.__asyncKey !== asyncKey) {
            return;
          }
        }
      }
    }
    let parentResolves = newMatchPath.slice(0, routeIdxToUpdate).reduce((pv, it) => {
      return Object.assign(pv, it.resolves);
    }, {});
    for (let i = routeIdxToUpdate; i < newMatchPath.length; i++) {
      const matchedRoute = newMatchPath[i];
      const resolveDefs = matchedRoute.route.define.resolves;
      const currentResolves = { ...parentResolves };
      const promises = [];
      resolveDefs && Object.keys(resolveDefs).forEach((k) => {
        const resolveOrFn = resolveDefs[k];
        if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resolveOrFn)) {
          try {
            const rtn = resolveOrFn(matchedRoute.params, newRouteInfo.query, parentResolves);
            if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(rtn) && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(rtn.then)) {
              promises.push(rtn.then((rr) => {
                currentResolves[k] = rr;
              }));
            } else {
              currentResolves[k] = rtn;
            }
          } catch (ex) {
            viewsToUpdate.forEach((vtp) => {
              vtp.component._doUpdateView(ex);
            });
            throw ex;
          }
        } else {
          currentResolves[k] = resolveOrFn;
        }
      });
      let loadedComClasses = matchedRoute.route.components;
      if (!loadedComClasses) {
        const comClasses = matchedRoute.route.define.components || {};
        loadedComClasses = {};
        if (matchedRoute.route.define.component) {
          comClasses.default = matchedRoute.route.define.component;
        }
        Object.keys(comClasses).forEach((cn) => {
          const CompClazz = comClasses[cn];
          if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(CompClazz) && !(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(CompClazz)) {
            try {
              const r = CompClazz(matchedRoute.params, newRouteInfo.query, currentResolves);
              if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(r) && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(r.then)) {
                promises.push(r.then((rr) => {
                  loadedComClasses[cn] = rr;
                }));
              } else {
                loadedComClasses[cn] = CompClazz;
              }
            } catch (ex) {
              viewsToUpdate.forEach((vtp) => {
                vtp.component._doUpdateView(ex);
              });
              throw ex;
            }
          } else {
            loadedComClasses[cn] = CompClazz;
          }
        });
      }
      try {
        await Promise.all(promises);
      } catch (ex) {
        if (asyncKey === this.__asyncKey) {
          viewsToUpdate.forEach((vtp) => {
            vtp.component._doUpdateView(ex);
          });
        }
        throw ex;
      }
      if (asyncKey !== this.__asyncKey) {
        return;
      }
      matchedRoute.route.components = loadedComClasses;
      matchedRoute.resolves = currentResolves;
      parentResolves = currentResolves;
    }
    const oldRouteInfo = Object.assign({}, currentInfo);
    Object.assign(currentInfo, newRouteInfo);
    viewsToUpdate.forEach((vtp) => {
      vtp.component._doUpdateView(null, newRouteInfo, newMatchPath[routeIdxToUpdate]);
    });
    this.__guard.after.forEach((fn) => {
      fn(oldRouteInfo, newRouteInfo);
    });
  }
  get params() {
    return this.__info?.params;
  }
  get query() {
    return this.__info?.query;
  }
  get current() {
    const rp = this.__info?._routePath;
    if (!rp || rp.length === 0)
      return null;
    return rp[rp.length - 1];
  }
  includes(destination, checkQuery = false) {
    if (!this.__info || this.__info._routePath.length === 0)
      return false;
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(destination)) {
      destination = { name: destination };
    }
    const name = destination.name;
    const route = this.__map.get(name);
    if (!route) {
      return false;
    }
    if (checkQuery && destination.query && !(0,_util__WEBPACK_IMPORTED_MODULE_2__.isParamsOrQuerySameOrInclude)(destination.query, this.__info.query, false)) {
      return false;
    }
    return this.__info._routePath.findIndex((it) => {
      return it.route === route && (0,_util__WEBPACK_IMPORTED_MODULE_2__.isParamsOrQuerySameOrInclude)(destination.params || {}, it.params || {}, false);
    }) >= 0;
  }
  href(destination) {
    const pathAndSearch = getPathnameAndSearch(destination, this.__map, this.__base);
    if (!pathAndSearch) {
      return null;
    }
    const { pathname, search } = pathAndSearch;
    const path = search ? pathname + "?" + search : pathname;
    return this.__mode === "hash" ? "#" + path : path;
  }
  go(destination, { target = "_self", replace = false } = {
    target: "_self",
    replace: false
  }) {
    const pathAndSearch = getPathnameAndSearch(destination, this.__map, this.__base);
    if (!pathAndSearch) {
      return;
    }
    const { pathname, search } = pathAndSearch;
    const path = search ? pathname + "?" + search : pathname;
    const isHashMode = this.__mode === "hash";
    const url = isHashMode ? location.pathname + "#" + path : path;
    if (target === "_blank") {
      window.open(url, "_blank");
      return;
    }
    if (replace) {
      history.replaceState(null, "", url);
    } else {
      history.pushState(null, "", url);
    }
    this._update(pathname, destination.query);
  }
}


//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../jinge-router/lib/util.js":
/*!***********************************!*\
  !*** ../jinge-router/lib/util.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneParamsOrQuery": () => (/* binding */ cloneParamsOrQuery),
/* harmony export */   "encodeParamsOrQuery": () => (/* binding */ encodeParamsOrQuery),
/* harmony export */   "isParamsOrQuerySameOrInclude": () => (/* binding */ isParamsOrQuerySameOrInclude)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

function isParamsOrQuerySameOrInclude(src, dst, strict = true) {
  if (!src)
    return !dst;
  if (!dst)
    return !src;
  let kc = 0;
  for (const k in src) {
    const sv = src[k];
    const dv = dst[k];
    if (strict) {
      if (sv !== dv)
        return false;
    } else {
      if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(dv) || dv === null) {
        if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(sv) && sv !== null) {
          return false;
        }
      } else if (sv !== dv) {
        return false;
      }
    }
    kc++;
  }
  if (strict && kc !== Object.keys(dst).length) {
    return false;
  }
  return true;
}
function cloneParamsOrQuery(v) {
  return Object.fromEntries(Object.keys(v).map((k) => {
    return [k, v[k]];
  }));
}
function encodeParamsOrQuery(v) {
  if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(v))
    return "";
  return Object.keys(v).map((k) => {
    return encodeURIComponent(k) + "=" + encodeURIComponent(v[k]);
  }).join("&");
}


//# sourceMappingURL=util.js.map

/***/ }),

/***/ "../jinge-router/node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js":
/*!****************************************************************************************************************!*\
  !*** ../jinge-router/node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compile": () => (/* binding */ compile),
/* harmony export */   "match": () => (/* binding */ match),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "pathToRegexp": () => (/* binding */ pathToRegexp),
/* harmony export */   "regexpToFunction": () => (/* binding */ regexpToFunction),
/* harmony export */   "tokensToFunction": () => (/* binding */ tokensToFunction),
/* harmony export */   "tokensToRegexp": () => (/* binding */ tokensToRegexp)
/* harmony export */ });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: "",
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    }
                    else {
                        route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                    }
                }
                else {
                    if (token.modifier === "+" || token.modifier === "*") {
                        route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
                    }
                    else {
                        route += "(".concat(token.pattern, ")").concat(token.modifier);
                    }
                }
            }
            else {
                route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
            }
        }
    }
    if (end) {
        if (!strict)
            route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1
            : endToken === undefined;
        if (!strict) {
            route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
            route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge/lib/components/class.js":
/*!****************************************!*\
  !*** ../jinge/lib/components/class.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleClassComponent": () => (/* binding */ ToggleClassComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transition */ "../jinge/lib/core/transition.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vm */ "../jinge/lib/vm/index.js");




var ClassOpType = /* @__PURE__ */ ((ClassOpType2) => {
  ClassOpType2[ClassOpType2["ADD"] = 0] = "ADD";
  ClassOpType2[ClassOpType2["DEL"] = 1] = "DEL";
  return ClassOpType2;
})(ClassOpType || {});
class ToggleClassComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.transition = attrs.transition !== false; }; f1_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("transition", f1_jg0402);
    _jg0[_vm__WEBPACK_IMPORTED_MODULE_4__.$$].__watch("class", () => {
      _jg0.__updateIfNeed();
    });
  }
  __render() {
    const rr = super.__render();
    this.__update(true);
    return rr;
  }
  __beforeDestroy() {
    this._ts = null;
  }
  __update(first) {
    const el = this.__transitionDOM;
    if (el && el.nodeType !== Node.ELEMENT_NODE) {
      return;
    }
    if (!this.transition) {
      (0,_util__WEBPACK_IMPORTED_MODULE_2__.setAttribute)(el, "class", this.class);
      return;
    }
    if (!this._ts) {
      this._ts = /* @__PURE__ */ new Map();
    }
    const newClassList = new Set(this.class ? this.class.split(" ") : []);
    if (first) {
      newClassList.forEach((clz) => {
        this._ts.set(clz, [_core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED, null]);
        el.classList.add(clz);
      });
      this._cs = newClassList;
      return;
    }
    const preClassList = this._cs;
    const diffClassList = [];
    newClassList.forEach((clz) => {
      if (preClassList.has(clz)) {
        preClassList.delete(clz);
      } else {
        diffClassList.push({ className: clz, type: 0 /* ADD */ });
      }
    });
    preClassList.forEach((clz) => {
      diffClassList.push({ className: clz, type: 1 /* DEL */ });
    });
    this._cs = newClassList;
    if (diffClassList.length === 0) {
      return;
    }
    diffClassList.forEach(({ className, type }) => {
      const isAdd = type === 0 /* ADD */;
      let t = this._ts.get(className);
      if (!t) {
        t = [isAdd ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVED : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED, null];
        this._ts.set(className, t);
      }
      if (isAdd && t[0] <= _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED || !isAdd && t[0] >= _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVING) {
        return;
      }
      if (t && t[0] === (isAdd ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVING : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERING)) {
        el.classList.remove(className + (isAdd ? "-leave-active" : "-enter-active"));
        el.classList.remove(className + (isAdd ? "-leave" : "-enter"));
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, "transitionend", t[1]);
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, "animationend", t[1]);
        t[1] = null;
        this.__notify("transition", isAdd ? "leave-cancelled" : "enter-cancelled", className, el);
      }
      const classOfStart = className + (isAdd ? "-enter" : "-leave");
      const classOfActive = className + (isAdd ? "-enter-active" : "-leave-active");
      el.classList.add(classOfStart);
      (0,_core_transition__WEBPACK_IMPORTED_MODULE_3__.getDurationType)(el);
      el.classList.add(classOfActive);
      const tsEndName = (0,_core_transition__WEBPACK_IMPORTED_MODULE_3__.getDurationType)(el);
      if (!tsEndName) {
        el.classList.remove(classOfStart);
        el.classList.remove(classOfActive);
        t[0] = isAdd ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVED;
        if (isAdd) {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
        return;
      }
      const onEnd = () => {
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, "transitionend", onEnd);
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, "animationend", onEnd);
        el.classList.remove(classOfStart);
        el.classList.remove(classOfActive);
        t[1] = null;
        t[0] = isAdd ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVED;
        if (isAdd) {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
        this.__notify("transition", isAdd ? "after-enter" : "after-leave", className, el);
      };
      t[0] = isAdd ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVING;
      t[1] = onEnd;
      (0,_util__WEBPACK_IMPORTED_MODULE_2__.addEvent)(el, tsEndName, onEnd);
      this.__notify("transition", isAdd ? "before-enter" : "before-leave", className, el);
      (0,_util__WEBPACK_IMPORTED_MODULE_2__.setImmediate)(() => {
        this.__notify("transition", isAdd ? "enter" : "leave", className, el);
      });
    });
  }
}


//# sourceMappingURL=class.js.map

/***/ }),

/***/ "../jinge/lib/components/dynamic.js":
/*!******************************************!*\
  !*** ../jinge/lib/components/dynamic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicRenderComponent": () => (/* binding */ DynamicRenderComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");
/* harmony import */ var _core_render_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/render_fns */ "../jinge/lib/core/render_fns.js");




function createEl(component) {
  let Clazz = component._r?.component;
  const pAttrs = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].passedAttrs;
  const attrs = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.attrs)({
    [_core_component__WEBPACK_IMPORTED_MODULE_1__.__]: {
      slots: null,
      context: component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context
    }
  });
  if (!Clazz) {
    attrs[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots = {
      default: component._r?.renderFn || _core_render_fns__WEBPACK_IMPORTED_MODULE_3__.emptyRenderFn
    };
    Clazz = _core_component__WEBPACK_IMPORTED_MODULE_1__.Component;
  }
  for (const attrName in pAttrs) {
    attrs[attrName] = pAttrs[attrName];
  }
  component._ca = attrs;
  if (!component._w) {
    pAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("*", (prop) => {
      component._ca[prop[0]] = pAttrs[prop[0]];
    });
    component._w = true;
  }
  return Clazz.create(attrs);
}
class DynamicRenderComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._ca = null;
    _jg0._w = false;const f3_jg0402 = () => {
    _jg0.render = attrs.render; }; f3_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("render", f3_jg0402);
  }
  get render() {
    return this._r;
  }
  set render(v) {
    if (this._r?.component === v?.component && this._r?.renderFn === v?.renderFn) {
      return;
    }
    this._r = v;
    this.__updateIfNeed();
  }
  __render() {
    const el = createEl(this);
    this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
    return el.__render();
  }
  __update() {
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
    const el = roots[0];
    const fd = el.__firstDOM;
    const pa = fd.parentNode;
    const newEl = createEl(this);
    roots[0] = newEl;
    const nels = newEl.__render();
    pa.insertBefore(nels.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(nels) : nels[0], fd);
    el.__destroy();
    newEl.__handleAfterRender();
  }
}


//# sourceMappingURL=dynamic.js.map

/***/ }),

/***/ "../jinge/lib/components/for.js":
/*!**************************************!*\
  !*** ../jinge/lib/components/for.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForComponent": () => (/* binding */ ForComponent),
/* harmony export */   "ForEachComponent": () => (/* binding */ ForEachComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");



class ForEachComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs2, item, index, isLast) {
    super(attrs2);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    if ((0,_vm_common__WEBPACK_IMPORTED_MODULE_0__.isViewModel)(item)) {
      _jg0.each = item;
    } else {
      _jg0._e = item;
    }
    _jg0.index = index;
    _jg0.isFirst = index === 0;
    _jg0.isLast = isLast;
  }
  get each() {
    return this._e;
  }
  set each(v) {
    this._e = v;
  }
  __render() {
    return this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots.default(this);
  }
}
function createEl(item, i, isLast, itemRenderFn, context) {
  return new ForEachComponent(
    (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.attrs)({
      [_core_component__WEBPACK_IMPORTED_MODULE_1__.__]: {
        context,
        slots: {
          default: itemRenderFn
        }
      }
    }),
    item,
    i,
    isLast
  )[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
}
function appendRenderEach(item, i, isLast, itemRenderFn, roots, context) {
  const el = createEl(item, i, isLast, itemRenderFn, context);
  roots.push(el);
  return el.__render();
}
function _prepareKey(item, i, keyMap, keyName) {
  const key = keyName === "each" ? item : keyName(item);
  if (keyMap.has(key)) {
    console.error(
      `loop items [${i}] and [${keyMap.get(
        key
      )}] of <for> component both have key '${key}', dulplicated key may cause update error.`
    );
  }
  keyMap.set(key, i);
  return key;
}
function renderItems(items, itemRenderFn, roots, keys, keyName, context) {
  const result = [];
  const tmpKeyMap = /* @__PURE__ */ new Map();
  items.forEach((item, i) => {
    if (keyName !== "index") {
      keys.push(_prepareKey(item, i, tmpKeyMap, keyName));
    }
    result.push(...appendRenderEach(item, i, i === items.length - 1, itemRenderFn, roots, context));
  });
  return result;
}
function loopAppend($parent, el) {
  el[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.forEach((node) => {
    if ((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(node)) {
      loopAppend($parent, node);
    } else {
      $parent.appendChild(node);
    }
  });
}
function updateEl(el, i, items) {
  if (el.isFirst !== (i === 0)) {
    el.isFirst = i === 0;
  }
  if (el.isLast !== (i === items.length - 1)) {
    el.isLast = i === items.length - 1;
  }
  if (el.index !== i) {
    el.index = i;
  }
  if (el.each !== items[i]) {
    el.each = items[i];
  }
}
function _parseIndexPath(p) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_2__.isString)(p) && p !== "length" && /^\d+$/.test(p) ? Number(p) : p;
}
class ForComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs2) {
    if (attrs2.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs2.key)) {
      throw new Error('Value of "key" attribute of <for> component is invalidate. See https://[todo]');
    }
    super(attrs2);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    if (!(0,_vm_common__WEBPACK_IMPORTED_MODULE_0__.isViewModel)(attrs2.loop)) {
      throw new Error("require ViewModelArray");
    }const f3_jg0402 = () => {
    _jg0.loop = attrs2.loop; }; f3_jg0402(); attrs2[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("loop", f3_jg0402);
    const kn = attrs2.key || "index";
    _jg0._keyName = kn;
    _jg0._length = 0;
    _jg0._keys = null;
    _jg0._waitingUpdate = false;
    if (kn !== "index" && kn !== "each") {
      _jg0._keyName = new Function("each", `return ${kn}`);
      const propCount = kn.split(".").length + 1;
      _jg0[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("loop.*." + kn.slice(5), (propPath) => {
        if (propPath.length !== propCount || _jg0._waitingUpdate) {
          return;
        }
        const items = _jg0.loop;
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(items) || items.length === 0)
          return;
        const p = _parseIndexPath(propPath[1]);
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isNumber)(p) || p >= items.length) {
          return;
        }
        _jg0._keys[p] = _jg0._keyName(items[p]);
      });
    }
    _jg0[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("loop.*", (propPath) => {
      if (_jg0[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].state !== _core_component__WEBPACK_IMPORTED_MODULE_1__.ComponentStates.RENDERED || propPath.length !== 2 || _jg0._waitingUpdate) {
        return;
      }
      const p = _parseIndexPath(propPath[1]);
      if (p === "length") {
        _jg0._waitingUpdate = true;
        _jg0.__updateIfNeed();
      } else if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isNumber)(p)) {
        _jg0._updateItem(p);
      }
    });
  }
  get loop() {
    return this._l;
  }
  set loop(v) {
    this._l = v;
    this._waitingUpdate = true;
    this.__updateIfNeed();
  }
  __render() {
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
    const itemRenderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.default;
    if (!itemRenderFn) {
      roots.push(document.createComment("empty"));
      return roots;
    }
    const items = this.loop;
    const keyName = this._keyName;
    if (keyName !== "index")
      this._keys = [];
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(items) || items.length === 0) {
      roots.push(document.createComment("empty"));
      return roots;
    }
    this._length = items.length;
    return renderItems(items, itemRenderFn, roots, this._keys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
  }
  _updateItem(index) {
    const items = this.loop;
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(items) || index >= roots.length)
      return;
    const keys = this._keys;
    const item = items[index];
    const oldEl = roots[index];
    if (oldEl.each === item) {
      return;
    }
    const itemRenderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.default;
    if (!itemRenderFn)
      return;
    const keyName = this._keyName;
    if (keyName !== "index") {
      const newKey = keyName === "each" ? item : keyName(item);
      const oldKey = keys[index];
      if (newKey !== oldKey) {
        const $fd = oldEl.__firstDOM;
        const newEl = createEl(item, index, oldEl.isLast, itemRenderFn, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
        const rr = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults)(newEl.__render());
        $fd.parentNode.insertBefore(rr.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(rr) : rr[0], $fd);
        oldEl.__destroy();
        roots[index] = newEl;
        keys[index] = newKey;
        newEl.__handleAfterRender();
      } else {
        oldEl.each = item;
      }
    } else {
      oldEl.each = item;
    }
  }
  __update() {
    this._waitingUpdate = false;
    const itemRenderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.default;
    if (!itemRenderFn)
      return;
    const newItems = (0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(this.loop) ? this.loop : [];
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
    const nl = newItems.length;
    const ol = this._length;
    if (nl === 0 && ol === 0)
      return;
    const keyName = this._keyName;
    if (nl === 0 && ol > 0) {
      const fd = roots[0].__firstDOM;
      const $cmt = document.createComment("empty");
      fd.parentNode.insertBefore($cmt, fd);
      for (let i = 0; i < ol; i++) {
        roots[i].__destroy();
      }
      roots.length = 1;
      roots[0] = $cmt;
      if (keyName !== "index") {
        this._keys.length = 0;
      }
      this._length = 0;
      return;
    }
    this._length = nl;
    const ctx = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context;
    const firstEl = roots[0];
    const $parent = (ol === 0 ? firstEl : firstEl.__firstDOM).parentNode;
    if (keyName === "index") {
      let $f = null;
      if (ol === 0)
        roots.length = 0;
      for (let i = 0; i < nl; i++) {
        if (i < ol) {
          updateEl(roots[i], i, newItems);
        } else {
          if (!$f)
            $f = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)();
          appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx).forEach((el) => {
            $f.appendChild(el);
          });
        }
      }
      if ($f) {
        const $le = ol === 0 ? firstEl : roots[ol - 1].__lastDOM;
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.insertAfter)($parent, $f, $le);
        for (let i = ol; i < nl; i++) {
          roots[i].__handleAfterRender();
        }
      }
      if (ol === 0) {
        $parent.removeChild(firstEl);
      }
      if (nl >= ol)
        return;
      for (let i = nl; i < ol; i++) {
        roots[i].__destroy();
      }
      roots.splice(nl);
      return;
    }
    const oldKeys = this._keys;
    if (ol === 0) {
      roots.length = 0;
      const rs = renderItems(newItems, itemRenderFn, roots, oldKeys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
      (0,_util__WEBPACK_IMPORTED_MODULE_2__.insertAfter)($parent, (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(rs), firstEl);
      $parent.removeChild(firstEl);
      roots.forEach((el) => el.__handleAfterRender());
      return;
    }
    const oldKeyMap = /* @__PURE__ */ new Map();
    oldKeys.forEach((k, i) => {
      oldKeyMap.set(k, i);
    });
    const newKeys = [];
    const newKeyMap = /* @__PURE__ */ new Map();
    newItems.forEach((item, i) => {
      newKeys.push(_prepareKey(item, i, newKeyMap, keyName));
    });
    let oi = 0;
    let ni = 0;
    let $lastS = null;
    const newRoots = [];
    const oldTags = new Uint8Array(ol);
    while (oi < ol || ni < nl) {
      while (oi < ol) {
        if (oldTags[oi] !== 0) {
          oi++;
        } else if (newKeyMap.has(oldKeys[oi]) && newKeyMap.get(oldKeys[oi]) >= ni) {
          if (oi === ol - 1) {
            $lastS = roots[oi].__lastDOM.nextSibling;
          }
          break;
        } else {
          if (oi === ol - 1) {
            $lastS = roots[oi].__lastDOM.nextSibling;
          }
          roots[oi].__destroy();
          oi++;
        }
      }
      if (oi >= ol) {
        let $f2 = null;
        const cei = newRoots.length;
        for (; ni < nl; ni++) {
          const el2 = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx);
          if (!$f2)
            $f2 = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)();
          el2.__render().forEach(($n) => $f2.appendChild($n));
          newRoots.push(el2);
        }
        if ($f2) {
          if ($lastS) {
            $parent.insertBefore($f2, $lastS);
          } else {
            $parent.appendChild($f2);
          }
          for (let i = cei; i < newRoots.length; i++) {
            newRoots[i].__handleAfterRender();
          }
        }
        break;
      }
      const oldKey = oldKeys[oi];
      let $f = null;
      let $nes = null;
      while (ni < nl) {
        const newKey = newKeys[ni];
        if (newKey === oldKey)
          break;
        let reuseEl = null;
        if (oldKeyMap.has(newKey)) {
          const oldIdx = oldKeyMap.get(newKey);
          if (oldIdx > oi && oldTags[oldIdx] === 0) {
            reuseEl = roots[oldIdx];
            oldTags[oldIdx] = 1;
          }
        }
        if (!$f)
          $f = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)();
        if (!reuseEl) {
          reuseEl = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx);
          reuseEl.__render().forEach(($n) => $f.appendChild($n));
          if (!$nes)
            $nes = [];
          $nes.push(reuseEl);
        } else {
          loopAppend($f, reuseEl);
          updateEl(reuseEl, ni, newItems);
        }
        newRoots.push(reuseEl);
        ni++;
      }
      if (ni >= nl) {
        throw new Error("unimpossible?!");
      }
      const el = roots[oi];
      $f && $parent.insertBefore($f, el.__firstDOM);
      $nes?.forEach((el2) => el2.__handleAfterRender());
      updateEl(el, ni, newItems);
      newRoots.push(el);
      oi++;
      ni++;
    }
    this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes = newRoots;
    this._keys = newKeys;
  }
}


//# sourceMappingURL=for.js.map

/***/ }),

/***/ "../jinge/lib/components/hide.js":
/*!***************************************!*\
  !*** ../jinge/lib/components/hide.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideComponent": () => (/* binding */ HideComponent)
/* harmony export */ });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../jinge/lib/vm/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "../jinge/lib/components/class.js");


class HideComponent extends _class__WEBPACK_IMPORTED_MODULE_1__.ToggleClassComponent {
  constructor(attrs) {
    const fn = () => {
      attrs.class = attrs.test ? "jg-hide" : null;
    };
    fn();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("test", fn);
    super(attrs);
  }
}


//# sourceMappingURL=hide.js.map

/***/ }),

/***/ "../jinge/lib/components/html.js":
/*!***************************************!*\
  !*** ../jinge/lib/components/html.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindHtmlComponent": () => (/* binding */ BindHtmlComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");


function renderHtml(content) {
  const $d = document.createElement("div");
  $d.innerHTML = content || "";
  let cn = $d.childNodes;
  if (cn.length === 0) {
    cn = [document.createComment("empty")];
  } else {
    cn = [].slice.call(cn);
  }
  return cn;
}
class BindHtmlComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    if (!("content" in attrs))
      throw new Error('<bind-html/> require "content" attribute');
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f2_jg0402 = () => {
    _jg0.content = attrs.content; }; f2_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("content", f2_jg0402);
  }
  get content() {
    return this._c;
  }
  set content(v) {
    if (this._c === v)
      return;
    this._c = v;
    this.__updateIfNeed();
  }
  __render() {
    return this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes = renderHtml(this._c);
  }
  __update() {
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
    const oldFirstEl = roots[0];
    const $p = oldFirstEl.parentNode;
    const newEls = renderHtml(this._c);
    $p.insertBefore(newEls.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(newEls) : newEls[0], oldFirstEl);
    roots.forEach((oldEl) => $p.removeChild(oldEl));
    this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes = newEls;
  }
}


//# sourceMappingURL=html.js.map

/***/ }),

/***/ "../jinge/lib/components/if.js":
/*!*************************************!*\
  !*** ../jinge/lib/components/if.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfComponent": () => (/* binding */ IfComponent),
/* harmony export */   "SwitchComponent": () => (/* binding */ SwitchComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../jinge/lib/core/component.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/transition */ "../jinge/lib/core/transition.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");



function createEl(renderFn, context) {
  const attrs = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.attrs)({
    [_core_component__WEBPACK_IMPORTED_MODULE_1__.__]: {
      context,
      slots: {
        default: renderFn
      }
    }
  });
  return _core_component__WEBPACK_IMPORTED_MODULE_1__.Component.create(attrs);
}
function renderSwitch(component) {
  const value = component._currentValue;
  const acs = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots;
  if (component.transition && acs) {
    component._transitionMap = /* @__PURE__ */ new Map();
    for (const k in acs) {
      component._transitionMap.set(k, [
        k === value ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED,
        null
      ]);
    }
    component._previousValue = value;
    component._onEndHandler = component.onTransitionEnd.bind(component);
  }
  const renderFn = acs ? acs[value] : null;
  const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
  if (!renderFn) {
    roots.push(document.createComment("empty"));
    return roots;
  }
  const el = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
  roots.push(el);
  return el.__render();
}
function doUpdate(component) {
  const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
  const el = roots[0];
  const isComp = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(el);
  const firstDOM = isComp ? el.__firstDOM : el;
  const parentDOM = (isComp ? firstDOM : el).parentNode;
  const renderFn = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.[component._currentValue];
  if (renderFn) {
    const newEl = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
    const nodes = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults)(newEl.__render());
    parentDOM.insertBefore(nodes.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_3__.createFragment)(nodes) : nodes[0], firstDOM);
    roots[0] = newEl;
  } else {
    roots[0] = document.createComment("empty");
    parentDOM.insertBefore(roots[0], firstDOM);
  }
  if (isComp) {
    el.__destroy();
  } else {
    parentDOM.removeChild(firstDOM);
  }
  renderFn && roots[0].__handleAfterRender();
  component.__notify("branch-switched", component._branch);
}
function cancelTs(t, tn, e, component) {
  const el = t[1];
  if (el.nodeType !== Node.ELEMENT_NODE) {
    return;
  }
  const onEnd = component._onEndHandler;
  el.classList.remove(tn + (e ? "-enter" : "-leave"));
  el.classList.remove(tn + (e ? "-enter-active" : "-leave-active"));
  (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "transitionend", onEnd);
  (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "animationend", onEnd);
  component.__notify("transition", e ? "enter-cancelled" : "leave-cancelled", el);
}
function startTs(t, tn, e, component) {
  const el = t[1];
  const onEnd = component._onEndHandler;
  if (el.nodeType !== Node.ELEMENT_NODE) {
    onEnd();
    return;
  }
  const classOfStart = tn + (e ? "-enter" : "-leave");
  const classOfActive = tn + (e ? "-enter-active" : "-leave-active");
  el.classList.add(classOfStart);
  (0,_core_transition__WEBPACK_IMPORTED_MODULE_2__.getDurationType)(el);
  el.classList.add(classOfActive);
  const tsEndName = (0,_core_transition__WEBPACK_IMPORTED_MODULE_2__.getDurationType)(el);
  if (!tsEndName) {
    onEnd();
    return;
  }
  t[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVING;
  (0,_util__WEBPACK_IMPORTED_MODULE_3__.addEvent)(el, tsEndName, onEnd);
  component.__notify("transition", e ? "before-enter" : "before-leave", el);
  (0,_util__WEBPACK_IMPORTED_MODULE_3__.setImmediate)(() => {
    component.__notify("transition", e ? "enter" : "leave", el);
  });
}
function updateSwitchWithTransition(component) {
  const value = component._currentValue;
  const pv = component._previousValue;
  const tn = component.transition;
  let pt = component._transitionMap.get(pv);
  if (!pt) {
    pt = [
      pv === "else" ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED,
      null
    ];
    component._transitionMap.set(pv, pt);
  }
  if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERING) {
    if (value === pv)
      return;
    cancelTs(pt, tn, true, component);
    startTs(pt, tn, false, component);
  } else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVING) {
    if (value !== pv)
      return;
    cancelTs(pt, tn, false, component);
    startTs(pt, tn, true, component);
  } else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED) {
    pt[1] = component.__transitionDOM;
    startTs(pt, tn, false, component);
  } else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED) {
    pt[1] = component.__transitionDOM;
    startTs(pt, tn, true, component);
  }
}
function updateSwitch(component) {
  if (!(0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes[0]) && (!component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots || !component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots[component._currentValue])) {
    return;
  }
  if (component._transitionMap) {
    updateSwitchWithTransition(component);
    return;
  }
  doUpdate(component);
}
function updateSwitchOnTransitionEnd(component) {
  const value = component._currentValue;
  const pv = component._previousValue;
  const tn = component.transition;
  const pt = component._transitionMap.get(pv);
  const e = pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERING;
  const el = pt[1];
  if (el.nodeType === Node.ELEMENT_NODE) {
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "transitionend", component._onEndHandler);
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "animationend", component._onEndHandler);
    el.classList.remove(tn + (e ? "-enter" : "-leave"));
    el.classList.remove(tn + (e ? "-enter-active" : "-leave-active"));
    component.__notify("transition", e ? "after-enter" : "after-leave");
  }
  pt[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED;
  if (e)
    return;
  doUpdate(component);
  component._previousValue = value;
  const ct = component._transitionMap.get(value);
  if (!ct) {
    return;
  }
  const fd = component.__transitionDOM;
  if (fd.nodeType !== Node.ELEMENT_NODE) {
    ct[0] = _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED;
    return;
  }
  ct[1] = fd;
  startTs(ct, tn, true, component);
}
function destroySwitch(component) {
  if (component._transitionMap) {
    component._transitionMap.forEach((ts) => {
      const el = ts[1];
      if (el) {
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "transitionend", component._onEndHandler);
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "animationend", component._onEndHandler);
      }
    });
    component._transitionMap = null;
  }
}
class IfComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._currentValue = "default";
    _jg0._onEndHandler = null;
    _jg0._transitionMap = null;
    _jg0._previousValue = null;const f5_jg0402 = () => {
    _jg0.expect = attrs.expect; }; f5_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("expect", f5_jg0402);const f6_jg0402 = () => {
    _jg0.transition = attrs.transition; }; f6_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("transition", f6_jg0402);
  }
  get expect() {
    return this._currentValue === "default";
  }
  set expect(value) {
    const v = value ? "default" : "else";
    if (this._currentValue === v)
      return;
    this._currentValue = v;
    this.__updateIfNeed();
  }
  get _branch() {
    return this.expect;
  }
  onTransitionEnd() {
    updateSwitchOnTransitionEnd(this);
  }
  __render() {
    return renderSwitch(this);
  }
  __update() {
    updateSwitch(this);
  }
  __beforeDestroy() {
    destroySwitch(this);
  }
}
class SwitchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._onEndHandler = null;
    _jg0._transitionMap = null;
    _jg0._previousValue = null;
    _jg0._currentValue = null;const f5_jg0402 = () => {
    _jg0.test = attrs.test; }; f5_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("test", f5_jg0402);const f6_jg0402 = () => {
    _jg0.transition = attrs.transition; }; f6_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("transition", f6_jg0402);
  }
  get test() {
    return this._currentValue;
  }
  set test(v) {
    const acs = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots;
    if (!acs || !(v in acs)) {
      v = "default";
    }
    if (this._currentValue === v)
      return;
    this._currentValue = v;
    this.__updateIfNeed();
  }
  get _branch() {
    return this.test;
  }
  onTransitionEnd() {
    updateSwitchOnTransitionEnd(this);
  }
  __render() {
    return renderSwitch(this);
  }
  __update() {
    updateSwitch(this);
  }
  __beforeDestroy() {
    destroySwitch(this);
  }
}


//# sourceMappingURL=if.js.map

/***/ }),

/***/ "../jinge/lib/components/index.js":
/*!****************************************!*\
  !*** ../jinge/lib/components/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindHtmlComponent": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_3__.BindHtmlComponent),
/* harmony export */   "DynamicRenderComponent": () => (/* reexport safe */ _dynamic__WEBPACK_IMPORTED_MODULE_7__.DynamicRenderComponent),
/* harmony export */   "ForComponent": () => (/* reexport safe */ _for__WEBPACK_IMPORTED_MODULE_1__.ForComponent),
/* harmony export */   "ForEachComponent": () => (/* reexport safe */ _for__WEBPACK_IMPORTED_MODULE_1__.ForEachComponent),
/* harmony export */   "HideComponent": () => (/* reexport safe */ _hide__WEBPACK_IMPORTED_MODULE_2__.HideComponent),
/* harmony export */   "IfComponent": () => (/* reexport safe */ _if__WEBPACK_IMPORTED_MODULE_4__.IfComponent),
/* harmony export */   "LogComponent": () => (/* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_6__.LogComponent),
/* harmony export */   "ParameterComponent": () => (/* reexport safe */ _parameter__WEBPACK_IMPORTED_MODULE_5__.ParameterComponent),
/* harmony export */   "SwitchComponent": () => (/* reexport safe */ _if__WEBPACK_IMPORTED_MODULE_4__.SwitchComponent),
/* harmony export */   "ToggleClassComponent": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_0__.ToggleClassComponent)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "../jinge/lib/components/class.js");
/* harmony import */ var _for__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for */ "../jinge/lib/components/for.js");
/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide */ "../jinge/lib/components/hide.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "../jinge/lib/components/html.js");
/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./if */ "../jinge/lib/components/if.js");
/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameter */ "../jinge/lib/components/parameter.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "../jinge/lib/components/log.js");
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamic */ "../jinge/lib/components/dynamic.js");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge/lib/components/log.js":
/*!**************************************!*\
  !*** ../jinge/lib/components/log.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogComponent": () => (/* binding */ LogComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../jinge/lib/core/component.js");

class LogComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.msg = attrs.msg; }; f1_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("msg", f1_jg0402);
  }
  set msg(v) {
    console.log(v);
    this._msg = v;
  }
  get msg() {
    return this._msg;
  }
  __render() {
    return [document.createComment("log placeholder")];
  }
}


//# sourceMappingURL=log.js.map

/***/ }),

/***/ "../jinge/lib/components/parameter.js":
/*!********************************************!*\
  !*** ../jinge/lib/components/parameter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParameterComponent": () => (/* binding */ ParameterComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../jinge/lib/core/component.js");


class ParameterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs, params) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    params.forEach((p) => {
      _jg0[p] = attrs[p];
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(p, () => {
        _jg0[p] = attrs[p];
      });
    });
  }
}


//# sourceMappingURL=parameter.js.map

/***/ }),

/***/ "../jinge/lib/core/bootstrap.js":
/*!**************************************!*\
  !*** ../jinge/lib/core/bootstrap.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap)
/* harmony export */ });
function bootstrap(ComponentClazz, dom, attrs) {
  const app = ComponentClazz.create(attrs);
  app.__renderToDOM(dom, dom !== document.body);
  return app;
}


//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "../jinge/lib/core/component.js":
/*!**************************************!*\
  !*** ../jinge/lib/core/component.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "ComponentStates": () => (/* binding */ ComponentStates),
/* harmony export */   "ContextStates": () => (/* binding */ ContextStates),
/* harmony export */   "__": () => (/* binding */ __),
/* harmony export */   "assertRenderResults": () => (/* binding */ assertRenderResults),
/* harmony export */   "attrs": () => (/* binding */ wrapAttrs),
/* harmony export */   "isComponent": () => (/* binding */ isComponent)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/proxy */ "../jinge/lib/vm/proxy.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../jinge/lib/core/messenger.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "../jinge/lib/core/style.js");
var _a;





(0,_style__WEBPACK_IMPORTED_MODULE_4__.initStyle)();
var ComponentStates = /* @__PURE__ */ ((ComponentStates2) => {
  ComponentStates2[ComponentStates2["INITIALIZE"] = 0] = "INITIALIZE";
  ComponentStates2[ComponentStates2["RENDERED"] = 1] = "RENDERED";
  ComponentStates2[ComponentStates2["WILLDESTROY"] = 2] = "WILLDESTROY";
  ComponentStates2[ComponentStates2["DESTROIED"] = 3] = "DESTROIED";
  return ComponentStates2;
})(ComponentStates || {});
var ContextStates = /* @__PURE__ */ ((ContextStates2) => {
  ContextStates2[ContextStates2["UNTOUCH"] = 0] = "UNTOUCH";
  ContextStates2[ContextStates2["TOUCHED"] = 1] = "TOUCHED";
  ContextStates2[ContextStates2["UNTOUCH_FREEZED"] = 2] = "UNTOUCH_FREEZED";
  ContextStates2[ContextStates2["TOUCHED_FREEZED"] = 3] = "TOUCHED_FREEZED";
  return ContextStates2;
})(ContextStates || {});
const __ = Symbol("__");
function isComponent(v) {
  return __ in v;
}
function assertRenderResults(renderResults) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(renderResults) || renderResults.length === 0) {
    throw new Error("Render results of component is empty");
  }
  return renderResults;
}
function wrapAttrs(target) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(target) || (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    throw new Error("attrs() traget must be plain object.");
  }
  return (0,_vm_proxy__WEBPACK_IMPORTED_MODULE_2__.createAttributes)(target);
}
class Component extends _messenger__WEBPACK_IMPORTED_MODULE_3__.Messenger {
  constructor(attrs) {
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrs) || !(_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$ in attrs)) {
      throw new Error("Attributes passed to Component constructor must be ViewModel. See https://[todo]");
    }
    const compilerAttrs = attrs[__] || {};
    super(compilerAttrs.listeners);
    (0,_vm_proxy__WEBPACK_IMPORTED_MODULE_2__.createComponent)(this);
    this[__] = {
      passedAttrs: attrs,
      context: compilerAttrs.context || null,
      contextState: 0 /* UNTOUCH */,
      slots: compilerAttrs.slots,
      state: 0 /* INITIALIZE */,
      rootNodes: [],
      nonRootCompNodes: [],
      refs: null,
      relatedRefs: null,
      upNextMap: null,
      deregFns: null
    };
    const $proxy = this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
    ["class", "style"].forEach((attrN) => {
      if (!(attrN in attrs))
        return;
      const f = () => $proxy[attrN] = attrs[attrN];
      f();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__watch(attrN, f);
    });
  }
  static create(attrs) {
    const isObj = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrs);
    const vmAttrs = isObj && _vm_common__WEBPACK_IMPORTED_MODULE_1__.$$ in attrs ? attrs : wrapAttrs(isObj ? attrs : {});
    return new this(vmAttrs)[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
  }
  __addDeregisterFn(deregisterFn) {
    let deregs = this[__].deregFns;
    if (!deregs) {
      this[__].deregFns = deregs = /* @__PURE__ */ new Set();
    }
    deregs.add(deregisterFn);
  }
  __domAddListener($el, eventName, listener, capture) {
    const deregEvtFn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.registerEvent)(
      $el,
      eventName,
      ($event) => {
        listener.call(this, $event);
      },
      capture
    );
    this.__addDeregisterFn(deregEvtFn);
    return () => {
      deregEvtFn();
      this[__].deregFns.delete(deregEvtFn);
    };
  }
  __domPassListeners(ignoredEventNames, targetEl) {
    if (this[__].state !== 1 /* RENDERED */) {
      throw new Error("domPassListeners must be applied to component which is rendered.");
    }
    const lis = this[_messenger__WEBPACK_IMPORTED_MODULE_3__.MESSENGER_LISTENERS];
    if (!lis || lis.size === 0) {
      return;
    }
    if (ignoredEventNames && !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(ignoredEventNames)) {
      targetEl = ignoredEventNames;
      ignoredEventNames = null;
    } else if (!targetEl) {
      targetEl = this.__firstDOM;
    }
    if (targetEl.nodeType !== Node.ELEMENT_NODE) {
      return;
    }
    lis.forEach((handlers, eventName) => {
      if (ignoredEventNames && ignoredEventNames.indexOf(eventName) >= 0) {
        return;
      }
      handlers.forEach((opts, handler) => {
        const deregFn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.registerEvent)(
          targetEl,
          eventName,
          opts && (opts.stop || opts.prevent) ? ($evt) => {
            opts.stop && $evt.stopPropagation();
            opts.prevent && $evt.preventDefault();
            handler.call(this, $evt);
          } : ($evt) => {
            handler.call(this, $evt);
          },
          opts
        );
        this.__addDeregisterFn(deregFn);
      });
    });
  }
  get __transitionDOM() {
    const el = this[__].rootNodes[0];
    return isComponent(el) ? el.__transitionDOM : el;
  }
  get __firstDOM() {
    const el = this[__].rootNodes[0];
    return isComponent(el) ? el.__firstDOM : el;
  }
  get __lastDOM() {
    const rns = this[__].rootNodes;
    const el = rns[rns.length - 1];
    return isComponent(el) ? el.__lastDOM : el;
  }
  __render() {
    const Clazz = this.constructor;
    let renderFn = Clazz.template;
    if (!renderFn && this[__].slots) {
      renderFn = this[__].slots.default;
    }
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(renderFn)) {
      throw new Error(`Template of ${Clazz.name} not found. Forget static getter "template"?`);
    }
    return renderFn(this);
  }
  __renderToDOM(targetEl, replaceMode = true) {
    if (this[__].state !== 0 /* INITIALIZE */) {
      throw new Error("component has already been rendered.");
    }
    const rr = assertRenderResults(this.__render());
    if (replaceMode) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.replaceChildren)(targetEl.parentNode, rr, targetEl);
    } else {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(targetEl, rr);
    }
    this.__handleAfterRender();
  }
  __destroy(removeDOM = true) {
    const comp = this[__];
    if (comp.state > 2 /* WILLDESTROY */)
      return;
    comp.state = 2 /* WILLDESTROY */;
    this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = false;
    comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = false;
    this.__notify("before-destroy");
    this.__beforeDestroy();
    this.__handleBeforeDestroy(removeDOM);
    super.__off();
    comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__destroy();
    comp.passedAttrs = null;
    this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__destroy();
    if (comp.upNextMap) {
      comp.upNextMap.forEach((imm) => {
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.clearImmediate)(imm);
      });
      comp.upNextMap = null;
    }
    if (comp.relatedRefs) {
      comp.relatedRefs.forEach((info) => {
        const refs = info.origin[__].refs;
        if (!refs)
          return;
        const rns = refs.get(info.ref);
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(rns)) {
          (0,_util__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(rns, info.node || this);
        } else {
          refs.delete(info.ref);
        }
      });
      comp.relatedRefs = null;
    }
    if (comp.deregFns) {
      comp.deregFns.forEach((deregFn) => deregFn());
      comp.deregFns.clear();
      comp.deregFns = null;
    }
    comp.state = 3 /* DESTROIED */;
    comp.rootNodes = comp.nonRootCompNodes = comp.refs = comp.slots = comp.context = null;
  }
  __handleBeforeDestroy(removeDOM = false) {
    this[__].nonRootCompNodes.forEach((component) => {
      component.__destroy(false);
    });
    let $parent;
    this[__].rootNodes.forEach((node) => {
      if (isComponent(node)) {
        node.__destroy(removeDOM);
      } else if (removeDOM) {
        if (!$parent) {
          $parent = node.parentNode;
        }
        $parent.removeChild(node);
      }
    });
  }
  __handleAfterRender() {
    this[__].passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = true;
    this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = true;
    this[__].rootNodes.forEach((n) => {
      if (isComponent(n))
        n.__handleAfterRender();
    });
    this[__].nonRootCompNodes.forEach((n) => {
      n.__handleAfterRender();
    });
    this[__].state = 1 /* RENDERED */;
    this[__].contextState = this[__].contextState === 1 /* TOUCHED */ ? 3 /* TOUCHED_FREEZED */ : 2 /* UNTOUCH_FREEZED */;
    this.__afterRender();
    this.__notify("after-render");
  }
  __updateIfNeed(handler, nextTick = true) {
    if (this[__].state !== 1 /* RENDERED */) {
      return;
    }
    if (handler === false) {
      return this.__update();
    }
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(handler)) {
      handler = this.__update;
    }
    if (!nextTick) {
      handler.call(this);
      return;
    }
    let ntMap = this[__].upNextMap;
    if (!ntMap)
      ntMap = this[__].upNextMap = /* @__PURE__ */ new Map();
    if (ntMap.has(handler)) {
      return;
    }
    ntMap.set(
      handler,
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
        ntMap.delete(handler);
        handler.call(this);
      })
    );
  }
  __update(first) {
  }
  __setContext(key, value, forceOverride = false) {
    if (this[__].contextState === 2 /* UNTOUCH_FREEZED */ || this[__].contextState === 3 /* TOUCHED_FREEZED */) {
      throw new Error("Can't setContext after component has been rendered. Try put setContext code into constructor.");
    }
    if (this[__].contextState === 0 /* UNTOUCH */) {
      this[__].context = Object.assign({}, this[__].context);
      this[__].contextState = 1 /* TOUCHED */;
    }
    if (key in this[__].context) {
      if (!forceOverride) {
        throw new Error(
          `Contenxt with key: ${key.toString()} is exist. Pass third argument forceOverride=true to override it.`
        );
      }
    }
    this[__].context[key] = value;
  }
  __getContext(key) {
    return this[__].context?.[key];
  }
  __setRef(ref, el, relatedComponent) {
    let rns = this[__].refs;
    if (!rns) {
      this[__].refs = rns = /* @__PURE__ */ new Map();
    }
    let elOrArr = rns.get(ref);
    if (!elOrArr) {
      rns.set(ref, el);
    } else if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(elOrArr)) {
      elOrArr.push(el);
    } else {
      elOrArr = [elOrArr, el];
      rns.set(ref, elOrArr);
    }
    const isComp = isComponent(el);
    if (!isComp && this === relatedComponent) {
      return;
    }
    let rbs = (isComp ? el : relatedComponent)[__].relatedRefs;
    if (!rbs) {
      (isComp ? el : relatedComponent)[__].relatedRefs = rbs = [];
    }
    rbs.push({
      origin: this,
      ref,
      node: isComp ? null : el
    });
  }
  __getRef(ref) {
    if (this[__].state !== 1 /* RENDERED */) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.warn)(
        `Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing. see https://[TODO]`
      );
    }
    return this[__].refs?.get(ref);
  }
  __afterRender() {
  }
  __beforeDestroy() {
  }
}
_a = __, __, _vm_common__WEBPACK_IMPORTED_MODULE_1__.$$;
Component[_a] = true;


//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../jinge/lib/core/index.js":
/*!**********************************!*\
  !*** ../jinge/lib/core/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ComponentStates": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ComponentStates),
/* harmony export */   "ContextStates": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ContextStates),
/* harmony export */   "MESSENGER_LISTENERS": () => (/* reexport safe */ _messenger__WEBPACK_IMPORTED_MODULE_2__.MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* reexport safe */ _messenger__WEBPACK_IMPORTED_MODULE_2__.Messenger),
/* harmony export */   "TransitionStates": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_5__.TransitionStates),
/* harmony export */   "__": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.__),
/* harmony export */   "assertRenderResults": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults),
/* harmony export */   "attrs": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.attrs),
/* harmony export */   "bootstrap": () => (/* reexport safe */ _bootstrap__WEBPACK_IMPORTED_MODULE_0__.bootstrap),
/* harmony export */   "emptyRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.errorRenderFn),
/* harmony export */   "getDuration": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_5__.getDuration),
/* harmony export */   "getDurationType": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_5__.getDurationType),
/* harmony export */   "initStyle": () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_4__.initStyle),
/* harmony export */   "isComponent": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.isComponent),
/* harmony export */   "textRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.textRenderFn)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "../jinge/lib/core/bootstrap.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../jinge/lib/core/component.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messenger */ "../jinge/lib/core/messenger.js");
/* harmony import */ var _render_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render_fns */ "../jinge/lib/core/render_fns.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "../jinge/lib/core/style.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transition */ "../jinge/lib/core/transition.js");







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge/lib/core/messenger.js":
/*!**************************************!*\
  !*** ../jinge/lib/core/messenger.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSENGER_LISTENERS": () => (/* binding */ MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* binding */ Messenger)
/* harmony export */ });
const MESSENGER_LISTENERS = Symbol("listeners");
class Messenger {
  constructor(templateListeners) {
    this[MESSENGER_LISTENERS] = null;
    if (templateListeners) {
      for (const eventName in templateListeners) {
        const handler = templateListeners[eventName];
        this.__on(eventName, handler.fn, handler.opts);
      }
    }
  }
  __notify(eventName, ...args) {
    if (!this[MESSENGER_LISTENERS])
      return;
    const listeners = this[MESSENGER_LISTENERS].get(eventName);
    if (!listeners)
      return;
    listeners.forEach((opts, handler) => {
      handler(...args);
      if (opts?.once) {
        listeners.delete(handler);
      }
    });
  }
  __on(eventName, eventListener, options) {
    if (!this[MESSENGER_LISTENERS]) {
      this[MESSENGER_LISTENERS] = /* @__PURE__ */ new Map();
    }
    let listeners = this[MESSENGER_LISTENERS].get(eventName);
    if (!listeners) {
      this[MESSENGER_LISTENERS].set(eventName, listeners = /* @__PURE__ */ new Map());
    }
    listeners.set(eventListener, options);
  }
  __off(eventName, eventListener) {
    const lisMap = this[MESSENGER_LISTENERS];
    if (!lisMap) {
      return;
    }
    if (!eventName) {
      lisMap.forEach((listeners2) => listeners2.clear());
      lisMap.clear();
      return;
    }
    const listeners = lisMap.get(eventName);
    if (!listeners) {
      return;
    }
    if (!eventListener) {
      listeners.clear();
    } else {
      listeners.delete(eventListener);
    }
  }
}
MESSENGER_LISTENERS;


//# sourceMappingURL=messenger.js.map

/***/ }),

/***/ "../jinge/lib/core/render_fns.js":
/*!***************************************!*\
  !*** ../jinge/lib/core/render_fns.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyRenderFn": () => (/* binding */ emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* binding */ errorRenderFn),
/* harmony export */   "textRenderFn": () => (/* binding */ textRenderFn)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../jinge/lib/core/component.js");


function emptyRenderFn(component) {
  const el = document.createComment("empty");
  component[_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
  return [el];
}
function errorRenderFn(component) {
  const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: "color: red !important;"
  });
  el.textContent = "template parsing failed! please check webpack log.";
  component[_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
  return el;
}
function textRenderFn(component, txtContent) {
  const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTextNode)(txtContent);
  component[_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
  return el;
}


//# sourceMappingURL=render_fns.js.map

/***/ }),

/***/ "../jinge/lib/core/style.js":
/*!**********************************!*\
  !*** ../jinge/lib/core/style.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initStyle": () => (/* binding */ initStyle)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");

const CSS = ".jg-hide{display:none!important}.jg-hide.jg-hide-enter,.jg-hide.jg-hide-leave{display:block!important}";
let inited = false;
function initStyle() {
  if (inited)
    return;
  inited = true;
  const $style = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    type: "text/css"
  });
  if ($style.styleSheet)
    $style.styleSheet.cssText = CSS;
  else
    $style.textContent = CSS;
  document.head.appendChild($style);
}


//# sourceMappingURL=style.js.map

/***/ }),

/***/ "../jinge/lib/core/transition.js":
/*!***************************************!*\
  !*** ../jinge/lib/core/transition.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitionStates": () => (/* binding */ TransitionStates),
/* harmony export */   "getDuration": () => (/* binding */ getDuration),
/* harmony export */   "getDurationType": () => (/* binding */ getDurationType)
/* harmony export */ });
var TransitionStates = /* @__PURE__ */ ((TransitionStates2) => {
  TransitionStates2[TransitionStates2["ENTERING"] = 1] = "ENTERING";
  TransitionStates2[TransitionStates2["ENTERED"] = 2] = "ENTERED";
  TransitionStates2[TransitionStates2["LEAVING"] = 3] = "LEAVING";
  TransitionStates2[TransitionStates2["LEAVED"] = 4] = "LEAVED";
  return TransitionStates2;
})(TransitionStates || {});
function getDurationType(el) {
  const cst = getComputedStyle(el);
  if (cst.getPropertyValue("transition-duration") !== "0s") {
    return "transitionend";
  } else if (cst.getPropertyValue("animation-duration") !== "0s") {
    return "animationend";
  }
  return null;
}
function parseDuration(v) {
  if (/ms$/.test(v)) {
    return parseInt(v);
  } else if (/s$/.test(v)) {
    return parseFloat(v) * 1e3;
  } else {
    return 0;
  }
}
function getDuration(el) {
  const cst = getComputedStyle(el);
  let dur = cst.getPropertyValue("transition-duration");
  if (dur !== "0s") {
    return {
      type: "transitionend",
      time: parseDuration(dur)
    };
  }
  dur = cst.getPropertyValue("animation-duration");
  if (dur !== "0s") {
    return {
      type: "animationend",
      time: parseDuration(dur)
    };
  }
  return {
    type: null,
    time: 0
  };
}


//# sourceMappingURL=transition.js.map

/***/ }),

/***/ "../jinge/lib/index.js":
/*!*****************************!*\
  !*** ../jinge/lib/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.$$),
/* harmony export */   "BindHtmlComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BindHtmlComponent),
/* harmony export */   "Component": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ComponentStates": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ComponentStates),
/* harmony export */   "ContextStates": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ContextStates),
/* harmony export */   "DynamicRenderComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.DynamicRenderComponent),
/* harmony export */   "ForComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ForComponent),
/* harmony export */   "ForEachComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ForEachComponent),
/* harmony export */   "HideComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.HideComponent),
/* harmony export */   "IfComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.IfComponent),
/* harmony export */   "LogComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.LogComponent),
/* harmony export */   "MESSENGER_LISTENERS": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Messenger),
/* harmony export */   "ParameterComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent),
/* harmony export */   "SwitchComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent),
/* harmony export */   "ToggleClassComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ToggleClassComponent),
/* harmony export */   "TransitionStates": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.TransitionStates),
/* harmony export */   "ViewModelCoreImpl": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.ViewModelCoreImpl),
/* harmony export */   "__": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.__),
/* harmony export */   "addEvent": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.addEvent),
/* harmony export */   "addParent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.addParent),
/* harmony export */   "appendChildren": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.appendChildren),
/* harmony export */   "arrayEqual": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayEqual),
/* harmony export */   "arrayPushIfNotExist": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayPushIfNotExist),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayRemove),
/* harmony export */   "assertRenderResults": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults),
/* harmony export */   "attrs": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.attrs),
/* harmony export */   "bootstrap": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.bootstrap),
/* harmony export */   "class2str": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.class2str),
/* harmony export */   "clearImmediate": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.clearImmediate),
/* harmony export */   "createAttributes": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createAttributes),
/* harmony export */   "createComponent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createComponent),
/* harmony export */   "createElement": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElement),
/* harmony export */   "createElementWithChild": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElementWithChild),
/* harmony export */   "createElementWithoutAttrs": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElementWithoutAttrs),
/* harmony export */   "createFragment": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createFragment),
/* harmony export */   "createSVGElement": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createSVGElement),
/* harmony export */   "createSVGElementWithoutAttrs": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createSVGElementWithoutAttrs),
/* harmony export */   "createTextNode": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createTextNode),
/* harmony export */   "createViewModel": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createViewModel),
/* harmony export */   "deleteNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.deleteNode),
/* harmony export */   "disableWarning": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.disableWarning),
/* harmony export */   "emptyRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.errorRenderFn),
/* harmony export */   "getDuration": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.getDuration),
/* harmony export */   "getDurationType": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.getDurationType),
/* harmony export */   "getPropertyName": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.getPropertyName),
/* harmony export */   "handleCancel": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.handleCancel),
/* harmony export */   "handleOnce": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.handleOnce),
/* harmony export */   "initStyle": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.initStyle),
/* harmony export */   "insertAfter": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.insertAfter),
/* harmony export */   "isArray": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isArray),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isBoolean),
/* harmony export */   "isComponent": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.isComponent),
/* harmony export */   "isFunction": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isFunction),
/* harmony export */   "isInnerObj": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isInnerObj),
/* harmony export */   "isNumber": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isObject),
/* harmony export */   "isPromise": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isPromise),
/* harmony export */   "isPublicProperty": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isPublicProperty),
/* harmony export */   "isString": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isString),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isUndefined),
/* harmony export */   "isViewModel": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isViewModel),
/* harmony export */   "loopClearNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopClearNode),
/* harmony export */   "loopCreateNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopGetNode),
/* harmony export */   "loopHandle": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopHandle),
/* harmony export */   "loopNotify": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopNotify),
/* harmony export */   "parsePropertyPath": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.parsePropertyPath),
/* harmony export */   "registerEvent": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.registerEvent),
/* harmony export */   "removeAttribute": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.removeAttribute),
/* harmony export */   "removeEvent": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.removeEvent),
/* harmony export */   "removeParent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.removeParent),
/* harmony export */   "replaceChildren": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.replaceChildren),
/* harmony export */   "setAttribute": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setAttribute),
/* harmony export */   "setClassAttribute": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setClassAttribute),
/* harmony export */   "setImmediate": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setImmediate),
/* harmony export */   "setStyleAttribute": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setStyleAttribute),
/* harmony export */   "setText": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setText),
/* harmony export */   "shiftParent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.shiftParent),
/* harmony export */   "style2str": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.style2str),
/* harmony export */   "textRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.textRenderFn),
/* harmony export */   "typeOf": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.typeOf),
/* harmony export */   "uid": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.uid),
/* harmony export */   "unwatch": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.unwatch),
/* harmony export */   "vm": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.vm),
/* harmony export */   "warn": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.watch)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../jinge/lib/components/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../jinge/lib/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../jinge/lib/util/index.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "../jinge/lib/vm/index.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge/lib/util/array.js":
/*!**********************************!*\
  !*** ../jinge/lib/util/array.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayEqual": () => (/* binding */ arrayEqual),
/* harmony export */   "arrayPushIfNotExist": () => (/* binding */ arrayPushIfNotExist),
/* harmony export */   "arrayRemove": () => (/* binding */ arrayRemove)
/* harmony export */ });
function arrayRemove(array, item) {
  const idx = array.indexOf(item);
  if (idx < 0)
    return false;
  array.splice(idx, 1);
  return true;
}
function arrayPushIfNotExist(array, item) {
  const idx = array.indexOf(item);
  if (idx >= 0)
    return;
  array.push(item);
}
function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
}


//# sourceMappingURL=array.js.map

/***/ }),

/***/ "../jinge/lib/util/common.js":
/*!***********************************!*\
  !*** ../jinge/lib/util/common.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableWarning": () => (/* binding */ disableWarning),
/* harmony export */   "uid": () => (/* binding */ uid),
/* harmony export */   "warn": () => (/* binding */ warn)
/* harmony export */ });
let UID_INC = 0;
function uid() {
  return Date.now().toString(32) + "-" + Math.floor(Math.random() * 16777215).toString(32) + "-" + (UID_INC++).toString(32);
}
let warning = true;
function warn(...args) {
  warning && console.warn(...args);
}
function disableWarning() {
  warning = false;
}


//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../jinge/lib/util/dom.js":
/*!********************************!*\
  !*** ../jinge/lib/util/dom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* binding */ addEvent),
/* harmony export */   "appendChildren": () => (/* binding */ appendChildren),
/* harmony export */   "class2str": () => (/* binding */ class2str),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createElementWithChild": () => (/* binding */ createElementWithChild),
/* harmony export */   "createElementWithoutAttrs": () => (/* binding */ createElementWithoutAttrs),
/* harmony export */   "createFragment": () => (/* binding */ createFragment),
/* harmony export */   "createSVGElement": () => (/* binding */ createSVGElement),
/* harmony export */   "createSVGElementWithoutAttrs": () => (/* binding */ createSVGElementWithoutAttrs),
/* harmony export */   "createTextNode": () => (/* binding */ createTextNode),
/* harmony export */   "insertAfter": () => (/* binding */ insertAfter),
/* harmony export */   "registerEvent": () => (/* binding */ registerEvent),
/* harmony export */   "removeAttribute": () => (/* binding */ removeAttribute),
/* harmony export */   "removeEvent": () => (/* binding */ removeEvent),
/* harmony export */   "replaceChildren": () => (/* binding */ replaceChildren),
/* harmony export */   "setAttribute": () => (/* binding */ setAttribute),
/* harmony export */   "setClassAttribute": () => (/* binding */ setClassAttribute),
/* harmony export */   "setStyleAttribute": () => (/* binding */ setStyleAttribute),
/* harmony export */   "setText": () => (/* binding */ setText),
/* harmony export */   "style2str": () => (/* binding */ style2str)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../jinge/lib/util/type.js");

function setText($element, text) {
  if (!(0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(text)) {
    text = JSON.stringify(text);
  }
  $element.textContent = text;
}
function createTextNode(text = "") {
  return document.createTextNode((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(text) ? text : JSON.stringify(text));
}
function createFragment(children) {
  const f = document.createDocumentFragment();
  children?.forEach((n) => {
    f.appendChild((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(n) ? document.createTextNode(n) : n);
  });
  return f;
}
function appendChildren($parent, children) {
  $parent.appendChild(
    children.length > 1 ? createFragment(children) : (0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(children[0]) ? createTextNode(children[0]) : children[0]
  );
}
function replaceChildren($parent, children, oldNode) {
  $parent.replaceChild(createFragment(children), oldNode);
}
function removeAttribute($ele, attrName) {
  if (!attrName)
    return;
  if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrName)) {
    for (const attrN in attrName) {
      removeAttribute($ele, attrN);
    }
    return;
  }
  return $ele.removeAttribute(attrName);
}
function setAttribute($ele, attrName, attrValue) {
  if (!attrName)
    return;
  if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrName)) {
    for (const attrN in attrName) {
      setAttribute($ele, attrN, attrName[attrN]);
    }
    return;
  }
  if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(attrValue) || attrValue === null) {
    removeAttribute($ele, attrName);
  } else {
    $ele.setAttribute(attrName, attrValue);
  }
}
function _createEl($el, attrs, children) {
  if (attrs) {
    for (const an in attrs) {
      if (an && !(0,_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(attrs[an])) {
        setAttribute($el, an, attrs[an]);
      }
    }
  }
  children.length > 0 && appendChildren($el, children);
  return $el;
}
function createElement(tag, attrs, ...children) {
  return _createEl(document.createElement(tag), attrs, children);
}
function createElementWithoutAttrs(tag, ...children) {
  return createElement(tag, null, ...children);
}
function createSVGElement(tag, attrs, ...children) {
  return _createEl(document.createElementNS("http://www.w3.org/2000/svg", tag), attrs, children);
}
function createSVGElementWithoutAttrs(tag, ...children) {
  return createSVGElement(tag, null, ...children);
}
function createElementWithChild(tag, attrs, child) {
  const $e = createElement(tag, attrs);
  $e.appendChild((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(child) ? createTextNode(child) : child);
  return $e;
}
function insertAfter($parent, newNode, referenceNode) {
  const rn = referenceNode.nextSibling;
  if (!rn) {
    $parent.appendChild(newNode);
  } else {
    $parent.insertBefore(newNode, rn);
  }
}
function addEvent($element, eventName, handler, capture) {
  (0,_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(capture) && (capture = eventName.startsWith("touch") ? {
    capture: false,
    passive: true
  } : false);
  $element.addEventListener(eventName, handler, capture);
}
function removeEvent($element, eventName, handler) {
  $element.removeEventListener(eventName, handler);
}
function registerEvent($element, eventName, handler, capture) {
  addEvent($element, eventName, handler, capture);
  return function deregister() {
    removeEvent($element, eventName, handler);
  };
}
function class2str(className) {
  if (!className)
    return className;
  if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(className)) {
    return className.trim();
  }
  if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isArray)(className)) {
    const clist = [];
    className.forEach((cn) => {
      const seg = class2str(cn);
      seg && clist.push(seg);
    });
    return clist.join(" ").trim();
  }
  return Object.keys(className).filter((k) => !!className[k]).join(" ").trim();
}
function setClassAttribute($ele, className) {
  className = class2str(className);
  if (!className)
    $ele.removeAttribute("class");
  else
    $ele.setAttribute("class", className);
}
const UNITLESS = /* @__PURE__ */ new Set([
  "box-flex",
  "box-flex-group",
  "column-count",
  "flex",
  "flex-grow",
  "flex-positive",
  "flex-shrink",
  "flex-negative",
  "font-weight",
  "line-clamp",
  "line-height",
  "opacity",
  "order",
  "orphans",
  "tab-size",
  "widows",
  "z-index",
  "zoom",
  "fill-opacity",
  "stroke-dashoffset",
  "stroke-opacity",
  "stroke-width"
]);
function style2str(style) {
  if (!style)
    return style;
  if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(style))
    return style.trim();
  if (Array.isArray(style)) {
    const slist = [];
    style.forEach((sty) => {
      const seg = style2str(sty);
      seg && slist.push(seg);
    });
    return slist.join("").trim();
  }
  const segs = [];
  Object.keys(style).forEach((k) => {
    let v = style[k];
    if (!v && v !== 0)
      return;
    k = k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isNumber)(v) && !UNITLESS.has(k)) {
      v = `${v}px`;
    } else {
      v = v.toString();
    }
    segs.push(`${k}:${v};`);
  });
  return segs.join("").trim();
}
function setStyleAttribute($ele, style) {
  style = style2str(style);
  if (!style)
    $ele.removeAttribute("style");
  else
    $ele.setAttribute("style", style);
}


//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "../jinge/lib/util/index.js":
/*!**********************************!*\
  !*** ../jinge/lib/util/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.addEvent),
/* harmony export */   "appendChildren": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.appendChildren),
/* harmony export */   "arrayEqual": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayEqual),
/* harmony export */   "arrayPushIfNotExist": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayPushIfNotExist),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayRemove),
/* harmony export */   "class2str": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.class2str),
/* harmony export */   "clearImmediate": () => (/* reexport safe */ _setimm__WEBPACK_IMPORTED_MODULE_3__.clearImmediate),
/* harmony export */   "createElement": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElement),
/* harmony export */   "createElementWithChild": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElementWithChild),
/* harmony export */   "createElementWithoutAttrs": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElementWithoutAttrs),
/* harmony export */   "createFragment": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createFragment),
/* harmony export */   "createSVGElement": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createSVGElement),
/* harmony export */   "createSVGElementWithoutAttrs": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createSVGElementWithoutAttrs),
/* harmony export */   "createTextNode": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createTextNode),
/* harmony export */   "disableWarning": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.disableWarning),
/* harmony export */   "insertAfter": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.insertAfter),
/* harmony export */   "isArray": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isBoolean),
/* harmony export */   "isFunction": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   "isNumber": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   "isPromise": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isPromise),
/* harmony export */   "isString": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isString),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   "registerEvent": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.registerEvent),
/* harmony export */   "removeAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.removeAttribute),
/* harmony export */   "removeEvent": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.removeEvent),
/* harmony export */   "replaceChildren": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.replaceChildren),
/* harmony export */   "setAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setAttribute),
/* harmony export */   "setClassAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setClassAttribute),
/* harmony export */   "setImmediate": () => (/* reexport safe */ _setimm__WEBPACK_IMPORTED_MODULE_3__.setImmediate),
/* harmony export */   "setStyleAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setStyleAttribute),
/* harmony export */   "setText": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setText),
/* harmony export */   "style2str": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.style2str),
/* harmony export */   "typeOf": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.typeOf),
/* harmony export */   "uid": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.uid),
/* harmony export */   "warn": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.warn)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../jinge/lib/util/type.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "../jinge/lib/util/array.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../jinge/lib/util/common.js");
/* harmony import */ var _setimm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setimm */ "../jinge/lib/util/setimm.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "../jinge/lib/util/dom.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge/lib/util/setimm.js":
/*!***********************************!*\
  !*** ../jinge/lib/util/setimm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearImmediate": () => (/* binding */ clearImmediate),
/* harmony export */   "setImmediate": () => (/* binding */ setImmediate)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../jinge/lib/util/type.js");

let autoIncrement = 0;
let nextHandle = 1;
let tasksByHandle;
let currentlyRunningATask = false;
let registerImmediate;
function setImmediateFallback(callback) {
  if (!(0,_type__WEBPACK_IMPORTED_MODULE_0__.isFunction)(callback) || arguments.length > 1) {
    throw new Error("setImmediate require callback function.");
  }
  tasksByHandle.set(nextHandle, callback);
  registerImmediate(nextHandle);
  return nextHandle++;
}
function clearImmediateFallback(handle) {
  tasksByHandle.delete(handle);
}
function runIfPresent(handle) {
  if (currentlyRunningATask) {
    setTimeout(runIfPresent, 0, handle);
    return;
  }
  const callback = tasksByHandle.get(handle);
  if (!callback)
    return;
  currentlyRunningATask = true;
  try {
    callback();
  } finally {
    clearImmediateFallback(handle);
    currentlyRunningATask = false;
  }
}
const win = typeof window === "undefined" ? globalThis : window;
if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(win.setImmediate)) {
  tasksByHandle = /* @__PURE__ */ new Map();
  const messagePrefix = "setImmediate$" + (autoIncrement++).toString(32) + "$";
  win.addEventListener(
    "message",
    (event) => {
      if (event.source === window && (0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(event.data) && event.data.startsWith(messagePrefix)) {
        runIfPresent(Number(event.data.slice(messagePrefix.length)));
      }
    },
    false
  );
  registerImmediate = function(handle) {
    win.postMessage(messagePrefix + handle, "*");
  };
}
const setImmediate = win.setImmediate || setImmediateFallback;
const clearImmediate = win.clearImmediate || clearImmediateFallback;


//# sourceMappingURL=setimm.js.map

/***/ }),

/***/ "../jinge/lib/util/type.js":
/*!*********************************!*\
  !*** ../jinge/lib/util/type.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "typeOf": () => (/* binding */ typeOf)
/* harmony export */ });
function typeOf(v) {
  return typeof v;
}
function isObject(v) {
  return v !== null && typeOf(v) === "object";
}
function isString(v) {
  return typeOf(v) === "string";
}
function isNumber(v) {
  return typeOf(v) === "number" && !Number.isNaN(v) && Number.isFinite(v);
}
function isUndefined(v) {
  return typeOf(v) === "undefined";
}
function isArray(v) {
  return Array.isArray(v);
}
function isBoolean(v) {
  return typeof v === "boolean" || v instanceof Boolean;
}
function isFunction(v) {
  return typeOf(v) === "function";
}
function isPromise(obj) {
  return isObject(obj) && isFunction(obj.then);
}


//# sourceMappingURL=type.js.map

/***/ }),

/***/ "../jinge/lib/vm/common.js":
/*!*********************************!*\
  !*** ../jinge/lib/vm/common.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "addParent": () => (/* binding */ addParent),
/* harmony export */   "getPropertyName": () => (/* binding */ getPropertyName),
/* harmony export */   "isInnerObj": () => (/* binding */ isInnerObj),
/* harmony export */   "isPublicProperty": () => (/* binding */ isPublicProperty),
/* harmony export */   "isViewModel": () => (/* binding */ isViewModel),
/* harmony export */   "parsePropertyPath": () => (/* binding */ parsePropertyPath),
/* harmony export */   "removeParent": () => (/* binding */ removeParent),
/* harmony export */   "shiftParent": () => (/* binding */ shiftParent)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");

const $$ = Symbol("$$");
function isInnerObj(v) {
  const clazz = v.constructor;
  return clazz === RegExp || clazz === Date || clazz === Boolean;
}
function isViewModel(v) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(v) && $$ in v;
}
function isPublicProperty(v) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && v.charCodeAt(0) !== 95;
}
function getPropertyName(v) {
  if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(v)) {
    return v;
  }
  if (v === null) {
    return "null";
  }
  if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(v)) {
    return "undefined";
  }
  return v.toString();
}
function parsePropertyPath(propertyPath) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(propertyPath) ? propertyPath.indexOf(".") > 0 ? propertyPath.split(".") : [propertyPath] : (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(propertyPath) ? propertyPath : [propertyPath];
}
function addParent(child, parent, property) {
  if (!child.__parents) {
    child.__parents = [];
  }
  child.__parents.push({
    core: parent,
    prop: property
  });
}
function removeParent(child, parent, property) {
  if (!child.__parents) {
    return;
  }
  const idx = child.__parents.findIndex((item) => {
    return item.core === parent && item.prop === property;
  });
  if (idx >= 0) {
    child.__parents.splice(idx, 1);
  }
}
function shiftParent(child, parent, property, delta) {
  if (!child.__parents)
    return;
  const item = child.__parents.find((it) => {
    return it.core === parent && it.prop === property;
  });
  if (item) {
    item.prop += delta;
  }
}


//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../jinge/lib/vm/core.js":
/*!*******************************!*\
  !*** ../jinge/lib/vm/core.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModelCoreImpl": () => (/* binding */ ViewModelCoreImpl)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "../jinge/lib/vm/node.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "../jinge/lib/vm/notify.js");




class ViewModelCoreImpl {
  constructor(target) {
    this.__notifiable = true;
    this.__parents = null;
    this.__listeners = null;
    this.__related = null;
    this.__setters = null;
    this.target = target;
    this.proxy = null;
    Object.defineProperty(target, _common__WEBPACK_IMPORTED_MODULE_1__.$$, {
      value: this,
      writable: false,
      configurable: true,
      enumerable: false
    });
  }
  __watch(propertyPath, handler, related) {
    propertyPath = (0,_common__WEBPACK_IMPORTED_MODULE_1__.parsePropertyPath)(propertyPath);
    const dbStarIdx = propertyPath.indexOf("**");
    if (dbStarIdx >= 0 && dbStarIdx !== propertyPath.length - 1) {
      throw new Error('wizard "**" must be last element in path.');
    }
    const node = (0,_node__WEBPACK_IMPORTED_MODULE_2__.loopCreateNode)(this, propertyPath);
    if (!node.__handlers) {
      node.__handlers = [];
    }
    if (node.__handlers.indexOf(handler) < 0) {
      node.__handlers.push(handler);
    }
    if (related && related !== this) {
      related.__addRelated(this, propertyPath, handler);
    }
  }
  __unwatch(propertyPath, handler, related) {
    if (!propertyPath) {
      (0,_node__WEBPACK_IMPORTED_MODULE_2__.loopClearNode)(this);
      return;
    }
    const node = (0,_node__WEBPACK_IMPORTED_MODULE_2__.loopGetNode)(this, (0,_common__WEBPACK_IMPORTED_MODULE_1__.parsePropertyPath)(propertyPath));
    if (!node) {
      return;
    }
    const handlers = node.__handlers;
    if (!handlers) {
      return;
    }
    if (!handler) {
      handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_3__.handleCancel);
      handlers.length = 0;
    } else {
      (0,_notify__WEBPACK_IMPORTED_MODULE_3__.handleCancel)(handler);
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(handlers, handler);
    }
    (0,_node__WEBPACK_IMPORTED_MODULE_2__.deleteNode)(node);
    if (related && related !== this) {
      related.__rmRelated(this, propertyPath, handler);
    }
  }
  __notify(propertyPath, immediate = false) {
    if (!this.__notifiable) {
      return;
    }
    propertyPath = (0,_common__WEBPACK_IMPORTED_MODULE_1__.parsePropertyPath)(propertyPath);
    if (this.__listeners) {
      (0,_notify__WEBPACK_IMPORTED_MODULE_3__.loopNotify)(this, propertyPath, immediate);
    }
    const parents = this.__parents;
    parents?.forEach((ps) => {
      const vm = ps.core;
      if (!vm) {
        console.error("dev-warn-unexpected: parent of ViewModelCore has been destroied but not unlink.");
        return;
      }
      vm.__notify([ps.prop].concat(propertyPath), immediate);
    });
  }
  __destroy() {
    this.__notifiable = false;
    this.__parents = null;
    (0,_node__WEBPACK_IMPORTED_MODULE_2__.loopClearNode)(this);
    this.proxy = null;
    if (this.__related) {
      this.__related.forEach((hooks, origin) => {
        hooks.forEach((hook) => {
          origin.__unwatch(hook.prop, hook.handler);
        });
      });
      this.__related = null;
    }
    const target = this.target;
    const sfm = this.__setters;
    if (sfm) {
      sfm.forEach((fn, prop) => {
        if (fn === null) {
          return;
        }
        const v = target[prop];
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(v) || !(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in v)) {
          return;
        }
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(v[_common__WEBPACK_IMPORTED_MODULE_1__.$$], this, prop);
      });
      this.__setters = null;
    }
    Object.getOwnPropertyNames(target).forEach((prop) => {
      const v = target[prop];
      if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(v) || !(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in v)) {
        return;
      }
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(v[_common__WEBPACK_IMPORTED_MODULE_1__.$$], this, prop);
    });
    delete target[_common__WEBPACK_IMPORTED_MODULE_1__.$$];
    this.target = null;
  }
  __addRelated(origin, propertyPath, handler) {
    if (!this.__related)
      this.__related = /* @__PURE__ */ new Map();
    let hook = this.__related.get(origin);
    if (!hook) {
      this.__related.set(origin, hook = []);
    }
    hook.push({
      prop: propertyPath,
      handler
    });
  }
  __rmRelated(origin, propertyPath, handler) {
    if (!this.__related)
      return;
    const hook = this.__related.get(origin);
    if (!hook)
      return;
    const isPropArray = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(propertyPath);
    const i = hook.findIndex((it) => {
      return handler === it.handler && (isPropArray ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.arrayEqual)(propertyPath, it.prop) : propertyPath === it.prop);
    });
    if (i >= 0) {
      hook.splice(i, 1);
    }
  }
}


//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../jinge/lib/vm/index.js":
/*!********************************!*\
  !*** ../jinge/lib/vm/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.$$),
/* harmony export */   "ViewModelCoreImpl": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ViewModelCoreImpl),
/* harmony export */   "addParent": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.addParent),
/* harmony export */   "createAttributes": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createAttributes),
/* harmony export */   "createComponent": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createComponent),
/* harmony export */   "createViewModel": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createViewModel),
/* harmony export */   "deleteNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.deleteNode),
/* harmony export */   "getPropertyName": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.getPropertyName),
/* harmony export */   "handleCancel": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.handleCancel),
/* harmony export */   "handleOnce": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.handleOnce),
/* harmony export */   "isInnerObj": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isInnerObj),
/* harmony export */   "isPublicProperty": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isPublicProperty),
/* harmony export */   "isViewModel": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isViewModel),
/* harmony export */   "loopClearNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopClearNode),
/* harmony export */   "loopCreateNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopGetNode),
/* harmony export */   "loopHandle": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.loopHandle),
/* harmony export */   "loopNotify": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.loopNotify),
/* harmony export */   "parsePropertyPath": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.parsePropertyPath),
/* harmony export */   "removeParent": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.removeParent),
/* harmony export */   "shiftParent": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.shiftParent),
/* harmony export */   "unwatch": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.unwatch),
/* harmony export */   "vm": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.vm),
/* harmony export */   "watch": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.watch)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../jinge/lib/vm/core.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "../jinge/lib/vm/node.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "../jinge/lib/vm/notify.js");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxy */ "../jinge/lib/vm/proxy.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge/lib/vm/node.js":
/*!*******************************!*\
  !*** ../jinge/lib/vm/node.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteNode": () => (/* binding */ deleteNode),
/* harmony export */   "loopClearNode": () => (/* binding */ loopClearNode),
/* harmony export */   "loopCreateNode": () => (/* binding */ loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* binding */ loopGetNode)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify */ "../jinge/lib/vm/notify.js");


function loopCreateNode(parentNode, propertyPath, level = 0) {
  const propertyName = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPropertyName)(propertyPath[level]);
  if (!parentNode.__listeners) {
    parentNode.__listeners = /* @__PURE__ */ new Map();
  }
  let node = parentNode.__listeners.get(propertyName);
  if (!node) {
    node = {
      __parent: parentNode,
      __property: propertyName,
      __handlers: null,
      __listeners: null
    };
    parentNode.__listeners.set(propertyName, node);
  }
  if (propertyPath.length - 1 === level) {
    return node;
  } else {
    return loopCreateNode(node, propertyPath, level + 1);
  }
}
function loopGetNode(parentNode, propertyPath, level = 0) {
  const propertyName = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPropertyName)(propertyPath[level]);
  if (!propertyName) {
    return null;
  }
  const node = parentNode.__listeners?.get(propertyName);
  if (!node) {
    return null;
  }
  if (propertyPath.length - 1 === level) {
    return node;
  } else {
    return loopGetNode(node, propertyPath, level + 1);
  }
}
function deleteNode(node) {
  if (node?.__handlers && node.__handlers.length > 0 || node.__listeners && node.__listeners.size > 0) {
    return null;
  }
  const parent = node.__parent;
  const property = node.__property;
  node.__parent = null;
  parent.__listeners.delete(property);
  return parent;
}
function loopClearNode(node) {
  const listeners = node.__listeners;
  if (listeners) {
    listeners.forEach((sn) => loopClearNode(sn));
    node.__listeners = null;
  }
  const handlers = node.__handlers;
  if (handlers) {
    handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_1__.handleCancel);
    node.__handlers = null;
  }
  node.__parent = null;
}


//# sourceMappingURL=node.js.map

/***/ }),

/***/ "../jinge/lib/vm/notify.js":
/*!*********************************!*\
  !*** ../jinge/lib/vm/notify.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCancel": () => (/* binding */ handleCancel),
/* harmony export */   "handleOnce": () => (/* binding */ handleOnce),
/* harmony export */   "loopHandle": () => (/* binding */ loopHandle),
/* harmony export */   "loopNotify": () => (/* binding */ loopNotify)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../jinge/lib/vm/common.js");


const handleTasks = /* @__PURE__ */ new Map();
function handleCancel(handler) {
  const t = handleTasks.get(handler);
  if (t) {
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.clearImmediate)(t.immediate);
    handleTasks.delete(handler);
  }
}
function handleOnce(handler, propertyPath) {
  if (handleTasks.has(handler)) {
    return;
  }
  const imm = (0,_util__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
    const arg = handleTasks.get(handler);
    try {
      handler(arg.propertyPath);
    } finally {
      handleTasks.delete(handler);
    }
  });
  handleTasks.set(handler, {
    immediate: imm,
    propertyPath
  });
}
function loopHandle(propertyPath, node, immediate) {
  const handlers = node.__handlers;
  handlers?.forEach((handler) => {
    if (immediate) {
      handler(propertyPath);
    } else {
      handleOnce(handler, propertyPath);
    }
  });
  const listeners = node.__listeners;
  listeners?.forEach((c) => {
    loopHandle(propertyPath, c, immediate);
  });
}
function loopNotify(vm, propertyPath, immediate, level = 0) {
  const listeners = vm.__listeners;
  if (!listeners) {
    return;
  }
  const propertyName = (0,_common__WEBPACK_IMPORTED_MODULE_1__.getPropertyName)(propertyPath[level]);
  if (!propertyName) {
    return;
  }
  let node = listeners.get(propertyName);
  if (node) {
    if (propertyPath.length - 1 === level) {
      loopHandle(propertyPath, node, immediate);
    } else {
      loopNotify(node, propertyPath, immediate, level + 1);
    }
  }
  node = listeners.get("*");
  if (node) {
    if (propertyPath.length - 1 === level) {
      loopHandle(propertyPath, node, true);
    } else {
      loopNotify(node, propertyPath, immediate, level + 1);
    }
  }
  node = listeners.get("**");
  if (node) {
    loopHandle(propertyPath, node, true);
  }
}


//# sourceMappingURL=notify.js.map

/***/ }),

/***/ "../jinge/lib/vm/proxy.js":
/*!********************************!*\
  !*** ../jinge/lib/vm/proxy.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAttributes": () => (/* binding */ createAttributes),
/* harmony export */   "createComponent": () => (/* binding */ createComponent),
/* harmony export */   "createViewModel": () => (/* binding */ createViewModel),
/* harmony export */   "unwatch": () => (/* binding */ unwatch),
/* harmony export */   "vm": () => (/* binding */ vm),
/* harmony export */   "watch": () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../jinge/lib/vm/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "../jinge/lib/vm/core.js");



function getSetterFnIfPropIsSetter(obj, prop) {
  let map = obj[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__setters;
  if (!map) {
    obj[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__setters = map = /* @__PURE__ */ new Map();
  }
  if (!map.has(prop)) {
    let clazz = obj.constructor;
    let desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
    let fn;
    if (desc) {
      fn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(desc.set) ? desc.set : null;
      map.set(prop, fn);
      return fn;
    }
    clazz = Object.getPrototypeOf(clazz);
    while (clazz?.prototype) {
      desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
      if (desc) {
        fn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(desc.set) ? desc.set : null;
        map.set(prop, fn);
        return fn;
      }
      clazz = Object.getPrototypeOf(clazz);
    }
    map.set(prop, null);
    return null;
  } else {
    return map.get(prop);
  }
}
function notifyPropChanged(vm2, prop) {
  vm2[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notify(prop);
}
function __propSetHandler(target, prop, value, setFn, assertVM = true) {
  if (!(0,_common__WEBPACK_IMPORTED_MODULE_1__.isPublicProperty)(prop)) {
    target[prop] = value;
    return true;
  }
  const oldVal = target[prop];
  if (oldVal === value && !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {
    return true;
  }
  let newValIsVM = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && !(0,_common__WEBPACK_IMPORTED_MODULE_1__.isInnerObj)(value);
  if (newValIsVM) {
    newValIsVM = _common__WEBPACK_IMPORTED_MODULE_1__.$$ in value;
    if (assertVM && !newValIsVM) {
      throw new Error(`public property "${prop.toString()}" of ViewModel must also be ViewModel`);
    }
  }
  if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(oldVal) && _common__WEBPACK_IMPORTED_MODULE_1__.$$ in oldVal) {
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(oldVal[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], prop);
  }
  setFn(target, prop, value);
  if (newValIsVM) {
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(value[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], prop);
  }
  notifyPropChanged(target, prop);
  return true;
}
function __objectPropSetFn(target, prop, value) {
  target[prop] = value;
}
function __componentPropSetFn(target, prop, value) {
  const setterFn = getSetterFnIfPropIsSetter(target, prop);
  if (setterFn) {
    setterFn.call(target[_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy, value);
  } else {
    target[prop] = value;
  }
}
function objectPropSetHandler(target, prop, value) {
  if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
    return true;
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}
function attrsPropSetHandler(target, prop, value) {
  if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
    return true;
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn, false);
}
function componentPropSetHandler(target, prop, value) {
  if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.warn)(
      `call setter "${prop.toString()}" after destroied, resources such as setInterval maybe not released before destroy. component:`,
      target
    );
    return true;
  }
  return __propSetHandler(target, prop, value, __componentPropSetFn);
}
function arrayNotifyItems(target, idxStart, idxEnd) {
  let i = idxStart;
  if (idxStart > idxEnd) {
    i = idxEnd;
    idxEnd = idxStart;
  }
  for (; i < idxEnd; i++) {
    notifyPropChanged(target, i);
  }
}
function arrayLengthSetHandler(target, value) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value)) {
    throw new Error("bad argument. array length must be validate number.");
  }
  const oldLen = target.length;
  if (oldLen > value) {
    for (let i = value; i < oldLen; i++) {
      const v = target[i];
      if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(v)) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(v[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
      }
    }
  }
  target.length = value;
  if (oldLen !== value) {
    notifyPropChanged(target, "length");
    arrayNotifyItems(target, oldLen, value);
  }
  return true;
}
function arrayPropSetHandler(target, prop, value) {
  if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
    return true;
  }
  if (prop === "length") {
    return arrayLengthSetHandler(target, value);
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}
const ObjectProxyHandler = {
  set: objectPropSetHandler
};
const PromiseProxyHandler = {
  get(target, prop) {
    if (prop === "then" || prop === "catch") {
      const v = target[prop];
      return function(...args) {
        return v.call(target, ...args);
      };
    } else {
      return target[prop];
    }
  },
  set: objectPropSetHandler
};
function _arrayReverseSort(target, fn) {
  target.forEach((it, i) => {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
    }
  });
  fn();
  target.forEach((it, i) => {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
    }
  });
  arrayNotifyItems(target, 0, target.length);
  return target[_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
}
function wrapSubArray(arr, wrapEachItem = false) {
  const rtn = wrapProxy(arr, true);
  arr.forEach((it, i) => {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], arr[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
    } else if (wrapEachItem) {
      arr[i] = createViewModel(it);
    }
  });
  return rtn;
}
function _arrayShiftOrUnshiftProp(arr, delta) {
  arr.forEach((el, i) => {
    if (!(0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(el))
      return;
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.shiftParent)(el[_common__WEBPACK_IMPORTED_MODULE_1__.$$], arr[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i, delta);
  });
}
function _argAssert(arg, fn) {
  if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(arg)) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in arg)) {
      throw new Error(`argument passed to Array.${fn} must be ViewModel if the array is ViewModel`);
    } else {
      return true;
    }
  } else {
    return false;
  }
}
const ArrayFns = {
  splice(target, idx, delCount, ...args) {
    if (idx < 0)
      idx = 0;
    args.forEach((arg, i) => {
      if (_argAssert(arg, "splice")) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(arg[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], idx + i);
      }
    });
    for (let i = 0; i < delCount; i++) {
      if (idx + i >= target.length)
        break;
      const el = target[idx + i];
      if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(el)) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(el[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], idx + i);
      }
    }
    const delta = args.length - delCount;
    if (delta !== 0) {
      for (let i = idx + delCount; i < target.length; i++) {
        const el = target[i];
        if (!(0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(el)) {
          continue;
        }
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.shiftParent)(el[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i, delta);
      }
    }
    const rtn = wrapSubArray(target.splice(idx, delCount, ...args));
    if (delta !== 0) {
      notifyPropChanged(target, "length");
      for (let i = idx; i < target.length; i++) {
        notifyPropChanged(target, i);
      }
    }
    return rtn;
  },
  shift(target) {
    if (target.length === 0)
      return target.shift();
    _arrayShiftOrUnshiftProp(target, -1);
    const el = target.shift();
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(el)) {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(el[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], -1);
    }
    notifyPropChanged(target, "length");
    for (let i = 0; i < target.length + 1; i++) {
      notifyPropChanged(target, i);
    }
    return el;
  },
  unshift(target, ...args) {
    if (args.length === 0)
      return target.unshift();
    args.forEach((arg, i) => {
      if (_argAssert(arg, "unshift")) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(arg[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
      }
    });
    _arrayShiftOrUnshiftProp(target, args.length);
    const rtn = target.unshift(...args);
    notifyPropChanged(target, "length");
    for (let i = 0; i < target.length; i++) {
      notifyPropChanged(target, i);
    }
    return rtn;
  },
  pop(target) {
    if (target.length === 0) {
      return target.pop();
    }
    const el = target.pop();
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(el)) {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(el[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target.length);
    }
    notifyPropChanged(target, "length");
    notifyPropChanged(target, target.length);
    return el;
  },
  push(target, ...args) {
    if (args.length === 0)
      return 0;
    args.forEach((arg, i) => {
      if (_argAssert(arg, "push")) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(arg[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target.length + i);
      }
    });
    const rtn = target.push(...args);
    notifyPropChanged(target, "length");
    for (let i = target.length - args.length; i < target.length; i++) {
      notifyPropChanged(target, i);
    }
    return rtn;
  },
  fill(target, v) {
    _argAssert(v, "fill");
    target.forEach((it, i) => {
      if (it === v && !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(it)) {
        return;
      }
      if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
      }
      target[i] = v;
      if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(v)) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(v[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
      }
      notifyPropChanged(target, i);
    });
    return target[_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
  },
  reverse(target) {
    return _arrayReverseSort(target, () => target.reverse());
  },
  sort(target, fn) {
    return _arrayReverseSort(target, () => target.sort(fn));
  },
  concat(target, arr) {
    _argAssert(arr, "concat");
    return wrapSubArray(target.concat(arr));
  },
  filter(target, fn) {
    return wrapSubArray(target.filter(fn));
  },
  slice(target, si, ei) {
    return wrapSubArray(target.slice(si, ei));
  },
  map(target, fn) {
    return wrapSubArray(target.map(fn), true);
  }
};
const ArrayProxyHandler = {
  get(target, prop) {
    if (prop in ArrayFns) {
      const fn = ArrayFns[prop];
      return function(...args) {
        return fn(target, ...args);
      };
    } else {
      return target[prop];
    }
  },
  set: arrayPropSetHandler
};
function wrapProxy(target, isArr) {
  const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__.ViewModelCoreImpl(target);
  return vmCore.proxy = new Proxy(
    target,
    isArr ? ArrayProxyHandler : (0,_util__WEBPACK_IMPORTED_MODULE_0__.isPromise)(target) ? PromiseProxyHandler : ObjectProxyHandler
  );
}
function wrapProp(parent, child, property) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(child) || (0,_common__WEBPACK_IMPORTED_MODULE_1__.isInnerObj)(child)) {
    return;
  }
  if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in child)) {
    parent[property] = child = createViewModel(child);
  }
  (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(child[_common__WEBPACK_IMPORTED_MODULE_1__.$$], parent[_common__WEBPACK_IMPORTED_MODULE_1__.$$], property);
}
function createViewModel(target) {
  if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isInnerObj)(target) || _common__WEBPACK_IMPORTED_MODULE_1__.$$ in target) {
      return target;
    }
    const isArr = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
    const rtn = wrapProxy(target, isArr);
    if (isArr) {
      for (let i = 0; i < target.length; i++) {
        wrapProp(target, target[i], i);
      }
    } else {
      for (const k in target) {
        if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isPublicProperty)(k)) {
          wrapProp(target, target[k], k);
        }
      }
    }
    return rtn;
  } else {
    return target;
  }
}
function createAttributes(attributes) {
  const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__.ViewModelCoreImpl(attributes);
  vmCore.__notifiable = false;
  return vmCore.proxy = new Proxy(attributes, {
    set: attrsPropSetHandler
  });
}
function createComponent(component) {
  if (_common__WEBPACK_IMPORTED_MODULE_1__.$$ in component) {
    throw new Error("component has alreay been wrapped.");
  }
  const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__.ViewModelCoreImpl(component);
  vmCore.__notifiable = false;
  return vmCore.proxy = new Proxy(component, {
    set: componentPropSetHandler
  });
}
function vm(target) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    throw new Error("vm() target must be object or array.");
  }
  return createViewModel(target);
}
function watch(vm2, propertyPath, handler) {
  vm2[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__watch(propertyPath, handler);
}
function unwatch(vm2, propertyPath, handler) {
  vm2[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__unwatch(propertyPath, handler);
}


//# sourceMappingURL=proxy.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + {"vendors-jinge-material_node_modules_pnpm_popperjs_core_2_11_5_node_modules_popperjs_core_lib_-2b39d3":"b1835ba4f54a6c655946","vendors-jinge-material_node_modules_pnpm_popperjs_core_2_11_5_node_modules_popperjs_core_lib_-5ed046":"1d63d4276efd422d73eb","jinge-material_node_modules_pnpm_popperjs_core_2_11_5_node_modules_popperjs_core_lib_modifier-f8b58a":"9bfac4088ee852782518","jinge-material_node_modules_pnpm_popperjs_core_2_11_5_node_modules_popperjs_core_lib_modifier-187ae2":"dec751d5280fb3a79672","src_pages_home_index_ts":"9b1e84ee868dc38a19d1","src_pages_about_ts":"31e19126c2f50bc67c09","vendors-node_modules_pnpm_clipboard_2_0_11_node_modules_clipboard_dist_clipboard_js-node_modu-c1cf79":"c1de0533ce15c66fdbe5","src_pages_getting-started_ts":"90fa4132909700e4ccd2","src_pages_license_ts":"b7d3af9f592ec35c3e1d"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + {"src_pages_home_index_ts":"3ac22379d2151a9081a5","src_pages_about_ts":"50c09b2385f5afe6fd60","src_pages_getting-started_ts":"16d81688b8cdf86672da","src_pages_license_ts":"679f3194b23e018f2004"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "jinge-material-site:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"src_pages_home_index_ts":1,"src_pages_about_ts":1,"src_pages_getting-started_ts":1,"src_pages_license_ts":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entry_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entry/style.scss */ "./src/entry/style.scss");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/router */ "./src/service/router.ts");
/* harmony import */ var _entry_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entry/app */ "./src/entry/app.ts");
/* harmony import */ var _entry_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entry/routes */ "./src/entry/routes.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/service/index.ts");






_entry_routes__WEBPACK_IMPORTED_MODULE_4__["default"].forEach((r) => _service_router__WEBPACK_IMPORTED_MODULE_2__.router.register(r));
(0,_service__WEBPACK_IMPORTED_MODULE_5__.setCurrentLocale)(_service__WEBPACK_IMPORTED_MODULE_5__.env.locale);
(0,jinge__WEBPACK_IMPORTED_MODULE_1__.bootstrap)(_entry_app__WEBPACK_IMPORTED_MODULE_3__["default"], document.getElementById("root-app"));

})();

/******/ })()
;
//# sourceMappingURL=index.3d7900d209bbbcfe333f.js.map