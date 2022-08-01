"use strict";
(self["webpackChunkjinge_material_site"] = self["webpackChunkjinge_material_site"] || []).push([["src_pages_components_autocomplete_index_ts"],{

/***/ "./src/pages/components/autocomplete/api.ts":
/*!**************************************************!*\
  !*** ./src/pages/components/autocomplete/api.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
  slots: {
    headings: ["名称", "描述", "示例"],
    props: [
      {
        name: "item",
        description: "创建自定义的匹配项",
        options: [
          {
            name: "option",
            description: "将收到匹配选项的每个选项。"
          },
          {
            name: "term",
            description: "当前输入的搜索词。"
          }
        ],
        usage: '<_slot slot-pass:"item" vm-use:option="option" vm:term > ... </_slot>'
      },
      {
        name: "empty",
        description: "在零匹配的情况下创建一个空状态",
        options: [
          {
            name: "term",
            description: "当前输入的搜索词。"
          }
        ],
        usage: '<_slot slot-pass:empty vm-use:term="term"> ... </_slot>'
      }
    ]
  },
  props: {
    headings: ["名称", "描述", "默认值"],
    props: [
      {
        name: "value",
        type: "String",
        description: "自动补全输入框的值",
        defaults: "null"
      },
      {
        name: "options",
        type: "Array|Promise",
        description: "要搜索的可用选项。如果为 Array，则自动完成功能将使用内部搜索引擎。 如果是 Promise，则需要您自己执行搜索（这通常是由后端服务进行的）。",
        defaults: "[]"
      },
      {
        name: "name",
        type: "String",
        description: "传递给输入框的 name 属性",
        defaults: "null"
      },
      {
        name: "id",
        type: "String",
        description: "传递给输入框的 id 属性",
        defaults: "a random string"
      },
      {
        name: "maxlength",
        type: "Number",
        description: "指定允许输入的最大的字符数量",
        defaults: "null"
      },
      {
        name: "placeholder",
        type: "Number",
        description: "输入框的占位提示",
        defaults: "null"
      },
      {
        name: "dense",
        type: "Boolean",
        description: "使用紧凑型的自动补全组件",
        defaults: "false"
      },
      {
        name: "layout",
        type: "String",
        description: "设置布局方式，请参见下面每种布局的详细说明。",
        defaults: "floating"
      },
      {
        offset: true,
        name: 'layout="floating"',
        type: "String",
        description: "布局方式使用 floating 模式。这是默认的布局。",
        defaults: "-"
      },
      {
        offset: true,
        name: 'layout="box"',
        type: "String",
        description: "布局方式使用 boxed 模式。",
        defaults: "-"
      },
      {
        name: "openOnFocus",
        type: "Boolean",
        description: "禁用/启用焦点事件。 如果 false，则选项将在按键后立即显示结果。",
        defaults: "true"
      },
      {
        name: "searchProp",
        type: "String",
        description: "如果 option 为 object，则需要指定哪个属性将用于搜索过滤器。",
        defaults: "null"
      },
      {
        name: "searchMethod",
        type: "String",
        description: "选项过滤器的搜索算法。如果传递的 <code>options</code> 属性是 Promise，则此选项不起作用。有关更多详细信息，请参见 <code>md-highlight</code> 的 API。",
        defaults: "fuzzy"
      }
    ]
  },
  events: {
    headings: ["名称", "描述", "参数"],
    props: [
      {
        name: "change",
        description: "用户在输入字段上键入时触发",
        value: "The term string"
      },
      {
        name: "selected",
        description: "当用户选择一个选项时触发",
        value: "The selected option"
      },
      {
        name: "opened",
        description: "在打开选项面板时触发",
        value: "null"
      },
      {
        name: "closed",
        description: "在关闭选项面板时触发",
        value: "null"
      }
    ]
  }
}));


/***/ }),

/***/ "./src/pages/components/autocomplete/examples/async.ts":
/*!*************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/async.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleACAsync)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js");
/* harmony import */ var jinge_material_lib_util_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/_util/search */ "../jinge-material/lib/_util/search.js");
/* harmony import */ var _async_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async.html */ "./src/pages/components/autocomplete/examples/async.html");




const MOCK_DATA_ALL_COUNTRIES = [
  {
    id: 1,
    name: "Algeria"
  },
  {
    id: 2,
    name: "Argentina"
  },
  {
    id: 3,
    name: "Brazil"
  },
  {
    id: 4,
    name: "Canada"
  },
  {
    id: 5,
    name: "Italy"
  },
  {
    id: 6,
    name: "Japan"
  },
  {
    id: 7,
    name: "United Kingdom"
  },
  {
    id: 8,
    name: "United States"
  }
];
function mockFetchCountries(v) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        return reject(new Error("server error."));
      }
      if (!v) {
        resolve(MOCK_DATA_ALL_COUNTRIES.slice());
      } else {
        resolve(
          MOCK_DATA_ALL_COUNTRIES.filter((ci) => {
            return (0,jinge_material_lib_util_search__WEBPACK_IMPORTED_MODULE_1__.fuzzySearch)(ci.name, v);
          }).map((ci) => {
            return {
              name: ci.name,
              html: (0,jinge_material_lib_util_search__WEBPACK_IMPORTED_MODULE_1__.fuzzyHighlight)(ci.name, v)
            };
          })
        );
      }
    }, 500);
  });
}
class ExampleACAsync extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.value = "";
    _jg0.getCountriesPromise = null;
    _jg0._delayGetCountries = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(_jg0._getCountries.bind(_jg0), 400);
  }
  log(v) {
    console.log(v);
  }
  _getCountries() {
    console.log("will get countries");
    this.getCountriesPromise = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(
      mockFetchCountries(this.value).then(
        (result) => {
          console.log("got countries", result);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(result);
        },
        () => {
          console.error("failed to get countries due to network error");
        }
      )
    );
  }
}
ExampleACAsync.template = _async_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/autocomplete/examples/box.ts":
/*!***********************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/box.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleACBox)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _box_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box.html */ "./src/pages/components/autocomplete/examples/box.html");


class ExampleACBox extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.selectedCountry = null;
    _jg0.selectedEmployee = null;
    _jg0.countries = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([
      "Algeria",
      "Argentina",
      "Brazil",
      "Canada",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ]);
    _jg0.employees = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Pam Beesly",
      "Angela Martin",
      "Kelly Kapoor",
      "Ryan Howard",
      "Kevin Malone",
      "Creed Bratton",
      "Oscar Nunez",
      "Toby Flenderson",
      "Stanley Hudson",
      "Meredith Palmer",
      "Phyllis Lapin-Vance"
    ]);
  }
}
ExampleACBox.template = _box_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/autocomplete/examples/search.ts":
/*!**************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/search.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleACSearch)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _search_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.html */ "./src/pages/components/autocomplete/examples/search.html");


class ExampleACSearch extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.selectedCountry = null;
    _jg0.selectedEmployee = null;
    _jg0.countries = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([
      "Algeria",
      "Argentina",
      "Brazil",
      "Canada",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ]);
    _jg0.employees = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Pam Beesly",
      "Angela Martin",
      "Kelly Kapoor",
      "Ryan Howard",
      "Kevin Malone",
      "Creed Bratton",
      "Oscar Nunez",
      "Toby Flenderson",
      "Stanley Hudson",
      "Meredith Palmer",
      "Phyllis Lapin-Vance"
    ]);
  }
}
ExampleACSearch.template = _search_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/autocomplete/examples/static.ts":
/*!**************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/static.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleACStatic)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _static_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static.html */ "./src/pages/components/autocomplete/examples/static.html");


class ExampleACStatic extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.selectedCountry = void 0;
    _jg0.selectedEmployee = void 0;
    _jg0.countries = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([
      "Algeria",
      "Argentina",
      "Brazil",
      "Canada",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ]);
    _jg0.employees = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Pam Beesly",
      "Angela Martin",
      "Kelly Kapoor",
      "Ryan Howard",
      "Kevin Malone",
      "Creed Bratton",
      "Oscar Nunez",
      "Toby Flenderson",
      "Stanley Hudson",
      "Meredith Palmer",
      "Phyllis Lapin-Vance"
    ]);
  }
  log(msg) {
    console.log(msg);
  }
}
ExampleACStatic.template = _static_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/autocomplete/examples/template.ts":
/*!****************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/template.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleACTemplate)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ "./src/pages/components/autocomplete/examples/template.html");


class ExampleACTemplate extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.value = null;
    _jg0.selected = null;
    _jg0.colors = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([
      {
        name: "Aqua",
        color: "#00ffff"
      },
      {
        name: "Aquamarine",
        color: "#7fffd4"
      },
      {
        name: "Azure",
        color: "#f0ffff"
      },
      {
        name: "Beige",
        color: "#f5f5dc"
      },
      {
        name: "Black",
        color: "#000000"
      },
      {
        name: "Blue",
        color: "#0000ff"
      },
      {
        name: "Brown",
        color: "#a52a2a"
      },
      {
        name: "Crimson",
        color: "#dc143c"
      },
      {
        name: "Cyan",
        color: "#00ffff"
      },
      {
        name: "Deep Pink",
        color: "#ff1493"
      },
      {
        name: "Dim Gray",
        color: "#696969"
      },
      {
        name: "Fuchsia",
        color: "#ff00ff"
      },
      {
        name: "Gold",
        color: "#ffd700"
      },
      {
        name: "Gray",
        color: "#808080"
      },
      {
        name: "Green",
        color: "#008000"
      },
      {
        name: "Green Yellow",
        color: "#adff2f"
      },
      {
        name: "Grey",
        color: "#808080"
      },
      {
        name: "Hotpink",
        color: "#ff69b4"
      },
      {
        name: "Indigo",
        color: "#4b0082"
      },
      {
        name: "Ivory",
        color: "#fffff0"
      },
      {
        name: "Khaki",
        color: "#f0e68c"
      },
      {
        name: "Lavender",
        color: "#e6e6fa"
      },
      {
        name: "Lime",
        color: "#00ff00"
      },
      {
        name: "Magenta",
        color: "#ff00ff"
      },
      {
        name: "Maroon",
        color: "#800000"
      },
      {
        name: "Navy",
        color: "#000080"
      },
      {
        name: "Olive",
        color: "#808000"
      },
      {
        name: "Orange",
        color: "#ffa500"
      },
      {
        name: "Orange Red",
        color: "#ff4500"
      },
      {
        name: "Pale Golden Rod",
        color: "#eee8aa"
      },
      {
        name: "Pale Green",
        color: "#98fb98"
      },
      {
        name: "Pink",
        color: "#ffc0cb"
      },
      {
        name: "Purple",
        color: "#800080"
      },
      {
        name: "Red",
        color: "#ff0000"
      },
      {
        name: "Royal Blue",
        color: "#4169e1"
      },
      {
        name: "Sea Green",
        color: "#2e8b57"
      },
      {
        name: "Silver",
        color: "#c0c0c0"
      },
      {
        name: "Sky Blue",
        color: "#87ceeb"
      },
      {
        name: "Slate Blue",
        color: "#6a5acd"
      },
      {
        name: "Slate Grey",
        color: "#708090"
      },
      {
        name: "Teal",
        color: "#008080"
      },
      {
        name: "Turquoise",
        color: "#40e0d0"
      },
      {
        name: "Violet",
        color: "#ee82ee"
      },
      {
        name: "White",
        color: "#ffffff"
      },
      {
        name: "Yellow",
        color: "#ffff00"
      }
    ]);
  }
  onSelected(item) {
    this.selected = item;
  }
  noop() {
    alert("noop");
  }
}
ExampleACTemplate.template = _template_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/autocomplete/examples/trigger.ts":
/*!***************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/trigger.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleACTrigger)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _trigger_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger.html */ "./src/pages/components/autocomplete/examples/trigger.html");


class ExampleACTrigger extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.selectedCountry = null;
    _jg0.selectedEmployee = null;
    _jg0.countries = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([
      "Algeria",
      "Argentina",
      "Brazil",
      "Canada",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ]);
    _jg0.employees = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)([
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Pam Beesly",
      "Angela Martin",
      "Kelly Kapoor",
      "Ryan Howard",
      "Kevin Malone",
      "Creed Bratton",
      "Oscar Nunez",
      "Toby Flenderson",
      "Stanley Hudson",
      "Meredith Palmer",
      "Phyllis Lapin-Vance"
    ]);
  }
}
ExampleACTrigger.template = _trigger_html__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/pages/components/autocomplete/index.ts":
/*!****************************************************!*\
  !*** ./src/pages/components/autocomplete/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAutocomplete": () => (/* binding */ PageAutocomplete)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-i18n */ "../jinge-i18n/lib/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/pages/components/autocomplete/index.html");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/pages/components/autocomplete/api.ts");
/* harmony import */ var _examples_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/static */ "./src/pages/components/autocomplete/examples/static.ts");
/* harmony import */ var _examples_static_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/static?example */ "./src/pages/components/autocomplete/examples/static.ts?example");
/* harmony import */ var _examples_trigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/trigger */ "./src/pages/components/autocomplete/examples/trigger.ts");
/* harmony import */ var _examples_trigger_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/trigger?example */ "./src/pages/components/autocomplete/examples/trigger.ts?example");
/* harmony import */ var _examples_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/box */ "./src/pages/components/autocomplete/examples/box.ts");
/* harmony import */ var _examples_box_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/box?example */ "./src/pages/components/autocomplete/examples/box.ts?example");
/* harmony import */ var _examples_template__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/template */ "./src/pages/components/autocomplete/examples/template.ts");
/* harmony import */ var _examples_template_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/template?example */ "./src/pages/components/autocomplete/examples/template.ts?example");
/* harmony import */ var _examples_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/search */ "./src/pages/components/autocomplete/examples/search.ts");
/* harmony import */ var _examples_search_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/search?example */ "./src/pages/components/autocomplete/examples/search.ts?example");
/* harmony import */ var _examples_async__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/async */ "./src/pages/components/autocomplete/examples/async.ts");
/* harmony import */ var _examples_async_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/async?example */ "./src/pages/components/autocomplete/examples/async.ts?example");
















class PageAutocomplete extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
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
      static: {
        component: _examples_static__WEBPACK_IMPORTED_MODULE_4__["default"],
        source: _examples_static_example__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      trigger: {
        component: _examples_trigger__WEBPACK_IMPORTED_MODULE_6__["default"],
        source: _examples_trigger_example__WEBPACK_IMPORTED_MODULE_7__["default"]
      },
      box: {
        component: _examples_box__WEBPACK_IMPORTED_MODULE_8__["default"],
        source: _examples_box_example__WEBPACK_IMPORTED_MODULE_9__["default"]
      },
      template: {
        component: _examples_template__WEBPACK_IMPORTED_MODULE_10__["default"],
        source: _examples_template_example__WEBPACK_IMPORTED_MODULE_11__["default"]
      },
      search: {
        component: _examples_search__WEBPACK_IMPORTED_MODULE_12__["default"],
        source: _examples_search_example__WEBPACK_IMPORTED_MODULE_13__["default"]
      },
      async: {
        component: _examples_async__WEBPACK_IMPORTED_MODULE_14__["default"],
        source: _examples_async_example__WEBPACK_IMPORTED_MODULE_15__["default"]
      }
    };
  }
}
PageAutocomplete.template = _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./src/pages/components/autocomplete/examples/async.html":
/*!***************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/async.html ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/autocomplete */ "../jinge-material/lib/autocomplete/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-autocomplete>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              change: {
                fn: function(...args) {
                  vm_0.value = args[0]; vm_0.log(vm_0.value); vm_0._delayGetCountries()
                },
                opts: null
              },  opened: {
                fn: function(...args) {
                  vm_0._getCountries(...args);
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "label",
                    `Country`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              },
              'option': function(component) {
                const vm_1 = component;
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
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
                        attrs.content = vm_1.option?.html || vm_1.option?.name;
                      };
                      fn_0();
                      vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["option","html"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["option","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
          value: undefined,
          options: undefined
        });
        const fn_0 = () => {
          attrs.value = vm_0.value;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["value"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.options = vm_0.getCountriesPromise;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["getCountriesPromise"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
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

/***/ "./src/pages/components/autocomplete/examples/box.html":
/*!*************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/box.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/autocomplete */ "../jinge-material/lib/autocomplete/index.js");
/* harmony import */ var jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/toolbar */ "../jinge-material/lib/toolbar/index.js");
/* harmony import */ var jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge-material/lib/button */ "../jinge-material/lib/button/index.js");
/* harmony import */ var jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge-material-icons/lib/Menu.js */ "../jinge-material-icons/lib/Menu.js");
/* harmony import */ var jinge_material_icons_lib_Refresh_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge-material-icons/lib/Refresh.js */ "../jinge-material-icons/lib/Refresh.js");
/* harmony import */ var jinge_material_icons_lib_MoreVert_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge-material-icons/lib/MoreVert.js */ "../jinge-material-icons/lib/MoreVert.js");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-autocomplete>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              change: {
                fn: function(...args) {
                  vm_0.selectedEmployee = args[0]
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "label",
                    `Employees`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              }
            }
          },
          value: undefined,
          options: undefined,
          layout: `box`,
          dense: true
        });
        const fn_0 = () => {
          attrs.value = vm_0.selectedEmployee;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selectedEmployee"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.options = vm_0.employees;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["employees"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
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
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      "div",
                      {
                        class: `md-toolbar-section-start`
                      },
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
                                      debugName: "attrs_of_<md-icon-menu>",
                                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    },
                                  });
                                  const el = jinge_material_icons_lib_Menu_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(attrs);
                                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                })()
                                ];
                              }
                            }
                          },
                          class: `md-icon-button md-on-primary`
                        });
                        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__.Button.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                    ),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<md-autocomplete>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                          listeners: {
                            change: {
                              fn: function(...args) {
                                vm_0.selectedEmployee = args[0]
                              },
                              opts: null
                            }
                          },
                          slots: {
                            'default': function(component) {
                              return [
                              (() => {
                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "label",
                                  `Search...`
                                );
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return el;
                              })()
                              ];
                            }
                          }
                        },
                        value: undefined,
                        options: undefined,
                        class: `search`,
                        layout: `box`
                      });
                      const fn_0 = () => {
                        attrs.value = vm_0.selectedEmployee;
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selectedEmployee"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const fn_1 = () => {
                        attrs.options = vm_0.employees;
                      };
                      fn_1();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["employees"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                    })(),
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      "div",
                      {
                        class: `md-toolbar-section-end`
                      },
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
                                      debugName: "attrs_of_<md-icon-refresh>",
                                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    },
                                  });
                                  const el = jinge_material_icons_lib_Refresh_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(attrs);
                                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                })()
                                ];
                              }
                            }
                          },
                          class: `md-icon-button md-on-primary`
                        });
                        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__.Button.create(attrs);
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
                                      debugName: "attrs_of_<md-icon-more_vert>",
                                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                    },
                                  });
                                  const el = jinge_material_icons_lib_MoreVert_js__WEBPACK_IMPORTED_MODULE_6__["default"].create(attrs);
                                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                                })()
                                ];
                              }
                            }
                          },
                          class: `md-icon-button md-on-primary`
                        });
                        const el = jinge_material_lib_button__WEBPACK_IMPORTED_MODULE_3__.Button.create(attrs);
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
          class: `md-primary`
        });
        const el = jinge_material_lib_toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.create(attrs);
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

/***/ "./src/pages/components/autocomplete/examples/search.html":
/*!****************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/search.html ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/autocomplete */ "../jinge-material/lib/autocomplete/index.js");
/* harmony import */ var jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/highlight */ "../jinge-material/lib/highlight/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "strong",
        `Fuzzy Search:`
      ),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-autocomplete>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "label",
                    `Manager`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              },
              'option': function(component) {
                const vm_1 = component;
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-highlight>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    term: undefined,
                    text: undefined
                  });
                  const fn_0 = () => {
                    attrs.term = vm_0.term;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["term"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.text = vm_0.option;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["option"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_2__.HighlightText.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          value: undefined,
          options: undefined
        });
        const fn_0 = () => {
          attrs.value = vm_0.selectedEmployee;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selectedEmployee"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.options = vm_0.employees;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["employees"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "strong",
        `Includes Search:`
      ),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-autocomplete>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "label",
                    `Country`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              },
              'option': function(component) {
                const vm_1 = component;
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-highlight>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    term: undefined,
                    text: undefined,
                    searchMethod: `includes`
                  });
                  const fn_0 = () => {
                    attrs.term = vm_0.term;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["term"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.text = vm_0.option;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["option"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_2__.HighlightText.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          value: undefined,
          options: undefined,
          searchMethod: `includes`
        });
        const fn_0 = () => {
          attrs.value = vm_0.selectedCountry;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selectedCountry"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.options = vm_0.countries;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["countries"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "strong",
        `StartsWith Search:`
      ),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-autocomplete>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "label",
                    `Country`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              },
              'option': function(component) {
                const vm_1 = component;
                return [
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-highlight>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    term: undefined,
                    text: undefined,
                    searchMethod: `starts`
                  });
                  const fn_0 = () => {
                    attrs.term = vm_0.term;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["term"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.text = vm_0.option;
                  };
                  fn_1();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["option"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_2__.HighlightText.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          value: undefined,
          options: undefined,
          searchMethod: `starts`
        });
        const fn_0 = () => {
          attrs.value = vm_0.selectedCountry;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selectedCountry"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.options = vm_0.countries;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["countries"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
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

/***/ "./src/pages/components/autocomplete/examples/static.html":
/*!****************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/static.html ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/autocomplete */ "../jinge-material/lib/autocomplete/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-autocomplete>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              change: {
                fn: function(...args) {
                  vm_0.selectedCountry = args[0]; vm_0.log(vm_0.selectedCountry)
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "label",
                    `Country`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              }
            }
          },
          value: undefined,
          options: undefined
        });
        const fn_0 = () => {
          attrs.value = vm_0.selectedCountry;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selectedCountry"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.options = vm_0.countries;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["countries"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-autocomplete>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              change: {
                fn: function(...args) {
                  vm_0.selectedEmployee = args[0]; vm_0.log(vm_0.selectedEmployee)
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "label",
                    `Employees`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              }
            }
          },
          value: undefined,
          options: undefined,
          dense: true
        });
        const fn_0 = () => {
          attrs.value = vm_0.selectedEmployee;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selectedEmployee"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.options = vm_0.employees;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["employees"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
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

/***/ "./src/pages/components/autocomplete/examples/template.html":
/*!******************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/template.html ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/autocomplete */ "../jinge-material/lib/autocomplete/index.js");
/* harmony import */ var jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge-material/lib/highlight */ "../jinge-material/lib/highlight/index.js");
/* harmony import */ var _template_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.scss */ "./src/pages/components/autocomplete/examples/template.scss");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        class: _template_scss__WEBPACK_IMPORTED_MODULE_3__["default"].demo
      },
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-autocomplete>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              change: {
                fn: function(...args) {
                  vm_0.value = args[0]
                },
                opts: null
              },  selected: {
                fn: function(...args) {
                  vm_0.onSelected(...args);
                },
                opts: null
              }
            },
            slots: {
              'option': function(component) {
                const vm_1 = component;
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "span",
                    {
                      class: `color`
                    },
                  );
                  const fn_0 = () => {
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, `background-color: ${ vm_1.option?.color };`);
                  };
                  fn_0();
                  vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["option","color"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })(),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<md-highlight>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    term: undefined,
                    text: undefined
                  });
                  const fn_0 = () => {
                    attrs.term = vm_1.term;
                  };
                  fn_0();
                  vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["term"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const fn_1 = () => {
                    attrs.text = vm_1.option?.name;
                  };
                  fn_1();
                  vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["option","name"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_2__.HighlightText.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              },
              'empty': function(component) {
                const vm_1 = component;
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                  const fn_0 = () => {
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `No colors matching "${ vm_1.term }" were found.`);
                  };
                  fn_0();
                  vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["term"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })(),
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "a",
                    `Create a new`
                  );
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'click', function(...args) {
                    vm_0.noop()
                  });
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })(),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `one!`)
                ];
              },
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "label",
                    `Color`
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
                          (() => {
                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                              "div",
                              {
                                class: `md-helper-text`
                              },
                              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                "strong",
                                `Selected Color:`
                              ),
                              (() => {
                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                  "span",
                                  {
                                    class: `color`
                                  },
                                );
                                const fn_0 = () => {
                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, `background-color: ${vm_0.selected?.color};`);
                                };
                                fn_0();
                                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selected","color"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                    attrs.expect = vm_0.selected;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selected"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                })()
                ];
              }
            }
          },
          value: undefined,
          options: undefined,
          searchProp: `name`
        });
        const fn_0 = () => {
          attrs.value = vm_0.value;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["value"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.options = vm_0.colors;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["colors"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
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

/***/ "./src/pages/components/autocomplete/examples/trigger.html":
/*!*****************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/trigger.html ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/autocomplete */ "../jinge-material/lib/autocomplete/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-autocomplete>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              change: {
                fn: function(...args) {
                  vm_0.selectedCountry = args[0];
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "label",
                    `Country`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              }
            }
          },
          value: undefined,
          options: undefined
        });
        const fn_0 = () => {
          attrs.value = vm_0.selectedCountry;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selectedCountry"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.options = vm_0.countries;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["countries"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<md-autocomplete>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            listeners: {
              change: {
                fn: function(...args) {
                  vm_0.selectedEmployee = args[0];
                },
                opts: null
              }
            },
            slots: {
              'default': function(component) {
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "label",
                    `Employees`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              }
            }
          },
          value: undefined,
          options: undefined,
          openOnFocus: false
        });
        const fn_0 = () => {
          attrs.value = vm_0.selectedEmployee;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["selectedEmployee"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          attrs.options = vm_0.employees;
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["employees"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const el = jinge_material_lib_autocomplete__WEBPACK_IMPORTED_MODULE_1__.Autocomplete.create(attrs);
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

/***/ "./src/pages/components/autocomplete/index.html":
/*!******************************************************!*\
  !*** ./src/pages/components/autocomplete/index.html ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-material/lib/highlight */ "../jinge-material/lib/highlight/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./src/components/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/pages/components/autocomplete/index.scss");




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
                  class: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)(['page-container-section', _index_scss__WEBPACK_IMPORTED_MODULE_3__["default"].searchAlgorithms])
                },
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "h2",
                  `搜索算法`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "p",
                  `自动补全组件可以使用 3 种搜索算法：`,
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "a",
                    {
                      href: `https://en.wikipedia.org/wiki/roximate_string_matching`,
                      target: `_blank`
                    },
                    `fuzzy`
                  ),
                  `，includes 和 starts。`
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "div",
                  {
                    class: `md-layout md-gutter`
                  },
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "div",
                    {
                      class: `md-layout-item md-size-33`
                    },
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "p",
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "strong",
                        `Fuzzy search`
                      ),
                      `- search term:`,
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "code",
                        `pam`
                      )
                    ),
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "div",
                      `Matches:`,
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "ul",
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "li",
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-highlight>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              term: `pam`,
                              text: `Pam Beesly`
                            });
                            const el = jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_1__.HighlightText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                        ),
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "li",
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-highlight>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              term: `pam`,
                              text: `Meredith Palmer`
                            });
                            const el = jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_1__.HighlightText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                        )
                      )
                    )
                  ),
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "div",
                    {
                      class: `md-layout-item md-size-33`
                    },
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "p",
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "strong",
                        `Includes Search`
                      ),
                      `- search term:`,
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "code",
                        `pam`
                      )
                    ),
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "div",
                      `Matches:`,
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "ul",
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "li",
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-highlight>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              term: `pam`,
                              searchMethod: `includes`,
                              text: `Pam Beesly`
                            });
                            const el = jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_1__.HighlightText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                        ),
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "li",
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-highlight>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              term: `pam`,
                              searchMethod: `includes`,
                              text: `Ki Pam Beesly`
                            });
                            const el = jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_1__.HighlightText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                        )
                      )
                    )
                  ),
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "div",
                    {
                      class: `md-layout-item md-size-33`
                    },
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "p",
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "strong",
                        `Starts Search`
                      ),
                      `- search term:`,
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "code",
                        `pam`
                      )
                    ),
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "div",
                      `Matches:`,
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "ul",
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "li",
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-highlight>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              searchMethod: `starts`,
                              term: `pam`,
                              text: `Pam Beesly`
                            });
                            const el = jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_1__.HighlightText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                        ),
                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                          "li",
                          ...(() => {
                            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                debugName: "attrs_of_<md-highlight>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                              },
                              searchMethod: `starts`,
                              term: `pam`,
                              text: `Ki Pam Beesly`
                            });
                            const el = jinge_material_lib_highlight__WEBPACK_IMPORTED_MODULE_1__.HighlightText.create(attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                          })()
                        )
                      )
                    )
                  )
                ),
                ...(() => {
                  const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                      debugName: "attrs_of_<CodeExample>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    },
                    example: undefined,
                    title: `Fuzzy or Normal`
                  });
                  const fn_0 = () => {
                    attrs.example = vm_0._examples?.search;
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_examples","search"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                  const el = _components__WEBPACK_IMPORTED_MODULE_2__.CodeExample.create(attrs);
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
      title: `自动补全`
    });
    const el = _components__WEBPACK_IMPORTED_MODULE_2__.PageContainer.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material-icons/lib/MoreVert.js":
/*!***********************************************!*\
  !*** ../jinge-material-icons/lib/MoreVert.js ***!
  \***********************************************/
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
          d: `M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z`
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

/***/ "../jinge-material-icons/lib/Refresh.js":
/*!**********************************************!*\
  !*** ../jinge-material-icons/lib/Refresh.js ***!
  \**********************************************/
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
          d: `M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`
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

/***/ "../jinge-material/lib/autocomplete/style/index.css":
/*!**********************************************************!*\
  !*** ../jinge-material/lib/autocomplete/style/index.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205802
      var cssReload = __webpack_require__(/*! ../../../../jinge-material-site/node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "../jinge-material/lib/highlight/style/index.css":
/*!*******************************************************!*\
  !*** ../jinge-material/lib/highlight/style/index.css ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1659344205513
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

/***/ "./src/pages/components/autocomplete/examples/template.scss":
/*!******************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/template.scss ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"demo":"demo--kDnM6"});
    if(true) {
      // 1659344204995
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/autocomplete/index.scss":
/*!******************************************************!*\
  !*** ./src/pages/components/autocomplete/index.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"searchAlgorithms":"search-algorithms--a1rxe"});
    if(true) {
      // 1659344204458
      var cssReload = __webpack_require__(/*! ../../../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/components/autocomplete/examples/async.ts?example":
/*!*********************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/async.ts?example ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"/* eslint-disable no-console */\nimport { Attributes, Component, vm } from 'jinge';\n\nimport debounce from 'lodash-es/debounce';\n\nimport { fuzzyHighlight, fuzzySearch } from 'jinge-material/lib/_util/search';\nimport _tpl from './async.html';\n\nconst MOCK_DATA_ALL_COUNTRIES = [\n  {\n    id: 1,\n    name: 'Algeria',\n  },\n  {\n    id: 2,\n    name: 'Argentina',\n  },\n  {\n    id: 3,\n    name: 'Brazil',\n  },\n  {\n    id: 4,\n    name: 'Canada',\n  },\n  {\n    id: 5,\n    name: 'Italy',\n  },\n  {\n    id: 6,\n    name: 'Japan',\n  },\n  {\n    id: 7,\n    name: 'United Kingdom',\n  },\n  {\n    id: 8,\n    name: 'United States',\n  },\n];\n\nfunction mockFetchCountries(v: string) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() < 0.1) {\n        return reject(new Error('server error.'));\n      }\n      if (!v) {\n        resolve(MOCK_DATA_ALL_COUNTRIES.slice());\n      } else {\n        resolve(\n          MOCK_DATA_ALL_COUNTRIES.filter((ci) => {\n            return fuzzySearch(ci.name, v);\n          }).map((ci) => {\n            return {\n              name: ci.name,\n              html: fuzzyHighlight(ci.name, v),\n            };\n          }),\n        );\n      }\n    }, 500);\n  });\n}\n\nexport default class ExampleACAsync extends Component {\n  static template = _tpl;\n\n  value: string;\n  getCountriesPromise: unknown;\n  _delayGetCountries: unknown;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.value = '';\n    this.getCountriesPromise = null;\n    this._delayGetCountries = debounce(this._getCountries.bind(this), 400);\n  }\n\n  log(v: unknown) {\n    console.log(v);\n  }\n\n  _getCountries() {\n    console.log('will get countries');\n    this.getCountriesPromise = vm(\n      mockFetchCountries(this.value).then(\n        (result) => {\n          console.log('got countries', result);\n          return vm(result);\n        },\n        () => {\n          console.error('failed to get countries due to network error');\n        },\n      ),\n    );\n  }\n}\n","sass":"","html":"<div>\n  <md-autocomplete\n    e:value=\"value\"\n    e:options=\"getCountriesPromise\"\n    on:change=\"value = $args[0]; log(value); _delayGetCountries()\"\n    on:opened=\"_getCountries\"\n  >\n  <label slot-pass:default>Country</label>\n  <span slot-pass:option vm:option >\n    <bind-html e:content=\"option.html || option.name\"/>\n  </span>\n  </md-autocomplete>\n</div>\n"});

/***/ }),

/***/ "./src/pages/components/autocomplete/examples/box.ts?example":
/*!*******************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/box.ts?example ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component, vm } from 'jinge';\n\nimport _tpl from './box.html';\n\nexport default class ExampleACBox extends Component {\n  static template = _tpl;\n\n  selectedEmployee: unknown;\n  selectedCountry: unknown;\n  countries: string[];\n  employees: string[];\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.selectedCountry = null;\n    this.selectedEmployee = null;\n    this.countries = vm([\n      'Algeria',\n      'Argentina',\n      'Brazil',\n      'Canada',\n      'Italy',\n      'Japan',\n      'United Kingdom',\n      'United States',\n    ]);\n    this.employees = vm([\n      'Jim Halpert',\n      'Dwight Schrute',\n      'Michael Scott',\n      'Pam Beesly',\n      'Angela Martin',\n      'Kelly Kapoor',\n      'Ryan Howard',\n      'Kevin Malone',\n      'Creed Bratton',\n      'Oscar Nunez',\n      'Toby Flenderson',\n      'Stanley Hudson',\n      'Meredith Palmer',\n      'Phyllis Lapin-Vance',\n    ]);\n  }\n}\n","sass":"","html":"<div>\n  <md-autocomplete\n    e:value=\"selectedEmployee\"\n    on:change=\"selectedEmployee = $args[0]\"\n    e:options=\"employees\"\n    layout=\"box\"\n    dense>\n    <label>Employees</label>\n  </md-autocomplete>\n\n  <md-toolbar class=\"md-primary\">\n    <div class=\"md-toolbar-row\">\n      <div class=\"md-toolbar-section-start\">\n        <md-button class=\"md-icon-button md-on-primary\">\n          <md-icon-menu/>\n        </md-button>\n      </div>\n\n      <md-autocomplete\n        class=\"search\"\n        e:value=\"selectedEmployee\"\n        on:change=\"selectedEmployee = $args[0]\"\n        e:options=\"employees\"\n        layout=\"box\">\n        <label>Search...</label>\n      </md-autocomplete>\n\n      <div class=\"md-toolbar-section-end\">\n        <md-button class=\"md-icon-button md-on-primary\">\n          <md-icon-refresh/>\n        </md-button>\n\n        <md-button class=\"md-icon-button md-on-primary\">\n          <md-icon-more_vert/>\n        </md-button>\n      </div>\n    </div>\n  </md-toolbar>\n</div>"});

/***/ }),

/***/ "./src/pages/components/autocomplete/examples/search.ts?example":
/*!**********************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/search.ts?example ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component, vm } from 'jinge';\n\nimport _tpl from './search.html';\n\nexport default class ExampleACSearch extends Component {\n  static template = _tpl;\n\n  selectedEmployee: unknown;\n  selectedCountry: unknown;\n  countries: string[];\n  employees: string[];\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.selectedCountry = null;\n    this.selectedEmployee = null;\n    this.countries = vm([\n      'Algeria',\n      'Argentina',\n      'Brazil',\n      'Canada',\n      'Italy',\n      'Japan',\n      'United Kingdom',\n      'United States',\n    ]);\n    this.employees = vm([\n      'Jim Halpert',\n      'Dwight Schrute',\n      'Michael Scott',\n      'Pam Beesly',\n      'Angela Martin',\n      'Kelly Kapoor',\n      'Ryan Howard',\n      'Kevin Malone',\n      'Creed Bratton',\n      'Oscar Nunez',\n      'Toby Flenderson',\n      'Stanley Hudson',\n      'Meredith Palmer',\n      'Phyllis Lapin-Vance',\n    ]);\n  }\n}\n","sass":"","html":"<div>\n  <strong>Fuzzy Search:</strong>\n  <md-autocomplete\n    e:value=\"selectedEmployee\" \n    e:options=\"employees\"\n  >\n    <label slot-pass:default>Manager</label>\n    <md-highlight\n      slot-pass:option\n      vm:option\n      vm:term\n      e:term=\"term\"\n      e:text=\"option\"\n    />\n  </md-autocomplete>\n\n  <strong>Includes Search:</strong>\n  <md-autocomplete\n    e:value=\"selectedCountry\"\n    e:options=\"countries\"\n    searchMethod=\"includes\"\n  >\n    <label slot-pass:default>Country</label>\n    <md-highlight\n      slot-pass:option\n      vm:option\n      vm:term\n      searchMethod=\"includes\"\n      e:term=\"term\"\n      e:text=\"option\"\n    />\n  </md-autocomplete>\n  <strong>StartsWith Search:</strong>\n  <md-autocomplete\n    e:value=\"selectedCountry\"\n    e:options=\"countries\"\n    searchMethod=\"starts\"\n  >\n    <label slot-pass:default>Country</label>\n    <md-highlight\n      slot-pass:option\n      vm:option\n      vm:term\n      searchMethod=\"starts\"\n      e:term=\"term\"\n      e:text=\"option\"\n    />\n  </md-autocomplete>\n</div>"});

/***/ }),

/***/ "./src/pages/components/autocomplete/examples/static.ts?example":
/*!**********************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/static.ts?example ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component, vm } from 'jinge';\n\nimport _tpl from './static.html';\n\nexport default class ExampleACStatic extends Component {\n  static template = _tpl;\n\n  selectedEmployee: unknown;\n  selectedCountry: unknown;\n  countries: string[];\n  employees: string[];\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.selectedCountry = undefined;\n    this.selectedEmployee = undefined;\n    this.countries = vm([\n      'Algeria',\n      'Argentina',\n      'Brazil',\n      'Canada',\n      'Italy',\n      'Japan',\n      'United Kingdom',\n      'United States',\n    ]);\n    this.employees = vm([\n      'Jim Halpert',\n      'Dwight Schrute',\n      'Michael Scott',\n      'Pam Beesly',\n      'Angela Martin',\n      'Kelly Kapoor',\n      'Ryan Howard',\n      'Kevin Malone',\n      'Creed Bratton',\n      'Oscar Nunez',\n      'Toby Flenderson',\n      'Stanley Hudson',\n      'Meredith Palmer',\n      'Phyllis Lapin-Vance',\n    ]);\n  }\n\n  log(msg: unknown) {\n    // eslint-disable-next-line no-console\n    console.log(msg);\n  }\n}\n","sass":"","html":"<div>\n  <md-autocomplete e:value=\"selectedCountry\" on:change=\"selectedCountry = $args[0]; log(selectedCountry)\" e:options=\"countries\">\n    <label>Country</label>\n  </md-autocomplete>\n\n  <md-autocomplete e:value=\"selectedEmployee\" on:change=\"selectedEmployee = $args[0]; log(selectedEmployee)\" e:options=\"employees\" dense>\n    <label>Employees</label>\n  </md-autocomplete>\n</div>"});

/***/ }),

/***/ "./src/pages/components/autocomplete/examples/template.ts?example":
/*!************************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/template.ts?example ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component, vm } from 'jinge';\n\nimport _tpl from './template.html';\n\ninterface Color {\n  name: string;\n  color: string;\n}\nexport default class ExampleACTemplate extends Component {\n  static template = _tpl;\n\n  value: string;\n  selected: Color;\n  colors: Color[];\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.value = null;\n    this.selected = null;\n    this.colors = vm([\n      {\n        name: 'Aqua',\n        color: '#00ffff',\n      },\n      {\n        name: 'Aquamarine',\n        color: '#7fffd4',\n      },\n      {\n        name: 'Azure',\n        color: '#f0ffff',\n      },\n      {\n        name: 'Beige',\n        color: '#f5f5dc',\n      },\n      {\n        name: 'Black',\n        color: '#000000',\n      },\n      {\n        name: 'Blue',\n        color: '#0000ff',\n      },\n      {\n        name: 'Brown',\n        color: '#a52a2a',\n      },\n      {\n        name: 'Crimson',\n        color: '#dc143c',\n      },\n      {\n        name: 'Cyan',\n        color: '#00ffff',\n      },\n      {\n        name: 'Deep Pink',\n        color: '#ff1493',\n      },\n      {\n        name: 'Dim Gray',\n        color: '#696969',\n      },\n      {\n        name: 'Fuchsia',\n        color: '#ff00ff',\n      },\n      {\n        name: 'Gold',\n        color: '#ffd700',\n      },\n      {\n        name: 'Gray',\n        color: '#808080',\n      },\n      {\n        name: 'Green',\n        color: '#008000',\n      },\n      {\n        name: 'Green Yellow',\n        color: '#adff2f',\n      },\n      {\n        name: 'Grey',\n        color: '#808080',\n      },\n      {\n        name: 'Hotpink',\n        color: '#ff69b4',\n      },\n      {\n        name: 'Indigo',\n        color: '#4b0082',\n      },\n      {\n        name: 'Ivory',\n        color: '#fffff0',\n      },\n      {\n        name: 'Khaki',\n        color: '#f0e68c',\n      },\n      {\n        name: 'Lavender',\n        color: '#e6e6fa',\n      },\n      {\n        name: 'Lime',\n        color: '#00ff00',\n      },\n      {\n        name: 'Magenta',\n        color: '#ff00ff',\n      },\n      {\n        name: 'Maroon',\n        color: '#800000',\n      },\n      {\n        name: 'Navy',\n        color: '#000080',\n      },\n      {\n        name: 'Olive',\n        color: '#808000',\n      },\n      {\n        name: 'Orange',\n        color: '#ffa500',\n      },\n      {\n        name: 'Orange Red',\n        color: '#ff4500',\n      },\n      {\n        name: 'Pale Golden Rod',\n        color: '#eee8aa',\n      },\n      {\n        name: 'Pale Green',\n        color: '#98fb98',\n      },\n      {\n        name: 'Pink',\n        color: '#ffc0cb',\n      },\n      {\n        name: 'Purple',\n        color: '#800080',\n      },\n      {\n        name: 'Red',\n        color: '#ff0000',\n      },\n      {\n        name: 'Royal Blue',\n        color: '#4169e1',\n      },\n      {\n        name: 'Sea Green',\n        color: '#2e8b57',\n      },\n      {\n        name: 'Silver',\n        color: '#c0c0c0',\n      },\n      {\n        name: 'Sky Blue',\n        color: '#87ceeb',\n      },\n      {\n        name: 'Slate Blue',\n        color: '#6a5acd',\n      },\n      {\n        name: 'Slate Grey',\n        color: '#708090',\n      },\n      {\n        name: 'Teal',\n        color: '#008080',\n      },\n      {\n        name: 'Turquoise',\n        color: '#40e0d0',\n      },\n      {\n        name: 'Violet',\n        color: '#ee82ee',\n      },\n      {\n        name: 'White',\n        color: '#ffffff',\n      },\n      {\n        name: 'Yellow',\n        color: '#ffff00',\n      },\n    ]);\n  }\n\n  onSelected(item: Color) {\n    this.selected = item;\n  }\n\n  noop() {\n    alert('noop');\n  }\n}\n","sass":".demo {\n  :global {\n    .color {\n      width: 16px;\n      height: 16px;\n      display: inline-block;\n      margin-right: 16px;\n      border: 1px solid rgb(0 0 0 / 12%);\n    }\n\n    .md-helper-text {\n      display: flex;\n      align-items: center;\n\n      .color {\n        width: 12px;\n        height: 12px;\n        margin-left: 4px;\n      }\n    }\n  }\n}\n","html":"<!-- import style from './template.scss' -->\n<div :class=\"style.demo\">\n  <md-autocomplete\n    e:value=\"value\"\n    on:change=\"value = $args[0]\"\n    on:selected=\"onSelected\"\n    e:options=\"colors\"\n    searchProp=\"name\"\n  >\n    <_slot slot-pass:option vm:option vm:term>\n      <span class=\"color\" style=\"background-color: ${ option.color };\"></span>\n      <md-highlight e:term=\"term\" e:text=\"option.name\"/>\n    </_slot>\n\n    <_slot slot-pass:empty vm-use:term>\n      No colors matching \"${ term }\" were found. <a on:click=\"noop()\">Create a new</a> one!\n    </_slot>\n\n    <_slot slot-pass:default>\n    <label>Color</label>\n    <if e:expect=\"selected\">\n      <div class=\"md-helper-text\">\n        <strong>Selected Color:</strong>\n        <span class=\"color\" style=\"background-color: ${selected.color};\"></span>\n      </div>\n    </if>\n    </_slot>\n  </md-autocomplete>\n</div>"});

/***/ }),

/***/ "./src/pages/components/autocomplete/examples/trigger.ts?example":
/*!***********************************************************************!*\
  !*** ./src/pages/components/autocomplete/examples/trigger.ts?example ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ts":"import { Attributes, Component, vm } from 'jinge';\n\nimport _tpl from './trigger.html';\n\nexport default class ExampleACTrigger extends Component {\n  static template = _tpl;\n\n  selectedEmployee: unknown;\n  selectedCountry: unknown;\n  countries: string[];\n  employees: string[];\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.selectedCountry = null;\n    this.selectedEmployee = null;\n    this.countries = vm([\n      'Algeria',\n      'Argentina',\n      'Brazil',\n      'Canada',\n      'Italy',\n      'Japan',\n      'United Kingdom',\n      'United States',\n    ]);\n    this.employees = vm([\n      'Jim Halpert',\n      'Dwight Schrute',\n      'Michael Scott',\n      'Pam Beesly',\n      'Angela Martin',\n      'Kelly Kapoor',\n      'Ryan Howard',\n      'Kevin Malone',\n      'Creed Bratton',\n      'Oscar Nunez',\n      'Toby Flenderson',\n      'Stanley Hudson',\n      'Meredith Palmer',\n      'Phyllis Lapin-Vance',\n    ]);\n  }\n}\n","sass":"","html":"<div>\n  <md-autocomplete e:value=\"selectedCountry\" on:change=\"selectedCountry = $args[0];\" e:options=\"countries\">\n    <label>Country</label>\n  </md-autocomplete>\n\n  <md-autocomplete e:value=\"selectedEmployee\" on:change=\"selectedEmployee = $args[0];\" e:options=\"employees\" e:openOnFocus=\"false\">\n    <label>Employees</label>\n  </md-autocomplete>\n</div>"});

/***/ }),

/***/ "../jinge-material/lib/autocomplete/index.js":
/*!***************************************************!*\
  !*** ../jinge-material/lib/autocomplete/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Autocomplete": () => (/* binding */ Autocomplete)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/autocomplete/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/autocomplete/index.tpl.js");



const SearchMethodValidator = new _util__WEBPACK_IMPORTED_MODULE_2__.EnumAttrValidator("md-autocomplete", "searchMethod", ["fuzzy", "starts", "includes"]);
const LayoutValidator = new _util__WEBPACK_IMPORTED_MODULE_2__.EnumAttrValidator("md-autocomplete", "layout", ["floating", "box"]);
class Autocomplete extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    SearchMethodValidator.assert(attrs);
    LayoutValidator.assert(attrs);
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
    _jg0._hasScopedEmptySlot = !!attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.__].slots.empty;
    _jg0.isOptionsPromise = false;
    _jg0.hasFilteredItems = false;
    _jg0.promisePendingKey = null;
    _jg0.filteredOptions = null;const f8_jg0402 = () => {
    _jg0.value = attrs.value; }; f8_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("value", f8_jg0402);const f9_jg0402 = () => {
    _jg0.dense = attrs.dense; }; f9_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("dense", f9_jg0402);const f10_jg0402 = () => {
    _jg0.layout = attrs.layout || "floating"; }; f10_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("layout", f10_jg0402);const f11_jg0402 = () => {
    _jg0.openOnFocus = attrs.openOnFocus !== false; }; f11_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("openOnFocus", f11_jg0402);const f12_jg0402 = () => {
    _jg0.searchMethod = attrs.searchMethod || "fuzzy"; }; f12_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("searchMethod", f12_jg0402);const f13_jg0402 = () => {
    _jg0.searchProp = attrs.searchProp; }; f13_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("searchProp", f13_jg0402);const f14_jg0402 = () => {
    _jg0.ignoreCase = attrs.ignoreCase !== false; }; f14_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("ignoreCase", f14_jg0402);const f15_jg0402 = () => {
    _jg0.name = attrs.name; }; f15_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("name", f15_jg0402);const f16_jg0402 = () => {
    _jg0.id = attrs.id; }; f16_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("id", f16_jg0402);const f17_jg0402 = () => {
    _jg0.maxlength = attrs.maxlength; }; f17_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("maxlength", f17_jg0402);const f18_jg0402 = () => {
    _jg0.placeholder = attrs.placeholder; }; f18_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("placeholder", f18_jg0402);const f19_jg0402 = () => {
    _jg0.options = attrs.options; }; f19_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("options", f19_jg0402);
    _jg0.showMenu = false;
  }
  get value() {
    return this._value;
  }
  set value(v) {
    if (this._value === v)
      return;
    this._value = v;
  }
  get options() {
    return this._options;
  }
  set options(v) {
    if (this._options === v)
      return;
    this._options = v;
    this.isOptionsPromise = (0,jinge__WEBPACK_IMPORTED_MODULE_1__.isPromise)(v);
    if (this.isOptionsPromise) {
      const pendingKey = (0,jinge__WEBPACK_IMPORTED_MODULE_1__.uid)();
      this.promisePendingKey = pendingKey;
      v.then((resultOptions) => {
        if (this.promisePendingKey !== pendingKey) {
          return;
        }
        this.promisePendingKey = null;
        if (resultOptions) {
          this.filteredOptions = resultOptions;
          this._updateHasItems();
        }
      }, () => {
        if (this.promisePendingKey !== pendingKey) {
          return;
        }
        this.promisePendingKey = null;
      });
    } else {
      this.promisePendingKey = null;
      this._updateFiltered();
    }
  }
  _updateHasItems() {
    this.hasFilteredItems = this.filteredOptions && this.filteredOptions.length > 0;
  }
  matchText(item) {
    const term = this._value;
    if (!term) {
      return true;
    }
    switch (this.searchMethod) {
      case "fuzzy":
        return (0,_util__WEBPACK_IMPORTED_MODULE_2__.fuzzySearch)(item, term, this.ignoreCase);
      case "starts":
        return (0,_util__WEBPACK_IMPORTED_MODULE_2__.startsSearch)(item, term, this.ignoreCase);
      case "includes":
        return (0,_util__WEBPACK_IMPORTED_MODULE_2__.includesSearch)(item, term, this.ignoreCase);
    }
    return false;
  }
  _updateFiltered() {
    if (this.isOptionsPromise)
      return;
    this.filteredOptions = this._options ? this._options.filter((item) => {
      if (this.searchProp) {
        return this.matchText(item[this.searchProp]);
      } else {
        return this.matchText(item);
      }
    }) : null;
    this._updateHasItems();
  }
  onInput(value) {
    if (this.value === value) {
      return;
    }
    this.value = value;
    this.__notify("change", value);
    this.__updateIfNeed(this._updateFiltered);
    if (!this.openOnFocus) {
      this.showOptions();
    }
  }
  _openOnFocus() {
    if (!this.openOnFocus) {
      return;
    }
    this.showOptions();
  }
  showOptions() {
    if (this.showMenu) {
      return false;
    }
    this.showMenu = true;
    this.__notify("opened");
    return true;
  }
  hideOptions() {
    this.showMenu = false;
    this.__notify("closed");
  }
  selectItem(item, $event) {
    const content = $event.target.textContent.trim();
    if (this.value !== content) {
      this.value = content;
      this.__notify("change", content);
    }
    this.__notify("selected", item);
    this.hideOptions();
  }
}
Autocomplete.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/autocomplete/index.tpl.js":
/*!*******************************************************!*\
  !*** ../jinge-material/lib/autocomplete/index.tpl.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field */ "../jinge-material/lib/field/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu */ "../jinge-material/lib/menu/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input */ "../jinge-material/lib/input/index.js");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner */ "../jinge-material/lib/spinner/index.js");






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
                  listeners: {
                    "update.active": {
                      fn: function(...args) {
                        vm_0.showMenu = args[0]
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
                            listeners: {
                              focus: {
                                fn: function(...args) {
                                  vm_0._openOnFocus(...args);
                                },
                                opts: {"stop":true}
                              },  click: {
                                fn: function(...args) {
                                  vm_0._openOnFocus(...args);
                                },
                                opts: {"stop":true,"prevent":true}
                              },  blur: {
                                fn: function(...args) {
                                  vm_0.hideOptions(...args);
                                },
                                opts: null
                              },  change: {
                                fn: function(...args) {
                                  vm_0.onInput(...args);
                                },
                                opts: null
                              }
                            },
                          },
                          value: undefined,
                          id: undefined,
                          name: undefined,
                          maxlength: undefined,
                          placeholder: undefined
                        });
                        const fn_0 = () => {
                          attrs.value = vm_0.value;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["value"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_1 = () => {
                          attrs.id = vm_0.id;
                        };
                        fn_1();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["id"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_2 = () => {
                          attrs.name = vm_0.name;
                        };
                        fn_2();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["name"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_3 = () => {
                          attrs.maxlength = vm_0.maxlength;
                        };
                        fn_3();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["maxlength"], fn_3, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const fn_4 = () => {
                          attrs.placeholder = vm_0.placeholder;
                        };
                        fn_4();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["placeholder"], fn_4, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = _input__WEBPACK_IMPORTED_MODULE_3__.Input.create(attrs);
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
                            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                            slots: {
                              'default': function(component) {
                                return [
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    "div",
                                    {
                                      class: `md-autocomplete-loading`
                                    },
                                    ...(() => {
                                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                        },
                                        diameter: `40`,
                                        stroke: `4`,
                                        mode: `indeterminate`
                                      });
                                      const el = _spinner__WEBPACK_IMPORTED_MODULE_4__.Spinner.create(attrs);
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
                          attrs.expect = vm_0.promisePendingKey !== null;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["promisePendingKey"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                                (() => {
                                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                    "div",
                                    {
                                      class: `md-autocomplete-items`
                                    },
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
                                                      click: {
                                                        fn: function(...args) {
                                                          vm_0.selectItem(vm_1.each, args[0])
                                                        },
                                                        opts: null
                                                      }
                                                    },
                                                    slots: {
                                                      'default': function(component) {
                                                        return [
                                                        ...(() => {
                                                          const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
                                                          const renderFn = __ac && __ac['option'] ? __ac['option'] :   function(component) {
                                                            return [
                                                            (() => {
                                                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                                              let _0_0;
                                                              let _0_0_p;
                                                              let _0_0_0;
                                                              function _calc_0_0_0() {
                                                                _0_0_0 = vm_0.searchProp;
                                                              }
                                                              function _calc_0_0() {
                                                                _0_0 = vm_1.each?.[_0_0_0];
                                                              }
                                                              function _calc_0() {
                                                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0.searchProp ? _0_0 : vm_1.each}`);
                                                              }
                                                              _calc_0_0_0();
                                                              _calc_0_0();
                                                              _calc_0();
                                                              function _update_0() {
                                                                _calc_0();
                                                              }
                                                              function _update_0_0() {
                                                                _calc_0_0();
                                                                _update_0();
                                                              }
                                                              function _notify_0_0() {
                                                                const _np = ['each', _0_0_0];
                                                                const _eq = _0_0_p && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayEqual)(_0_0_p, _np);
                                                                if (_0_0_p && !_eq) {
                                                                  vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__unwatch(_0_0_p, _update_0_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                                }
                                                                if (!_0_0_p || !_eq) {
                                                                  _0_0_p = _np;
                                                                  vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(_0_0_p, _update_0_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                                }
                                                              }
                                                              function _update_0_0_0() {
                                                                _calc_0_0_0();
                                                                _notify_0_0();
                                                                _update_0_0();
                                                              }
                                                              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["searchProp"], _update_0_0_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                              _notify_0_0();
                                                              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["searchProp"], _calc_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                              vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each"], _calc_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                              return el;
                                                            })()
                                                            ];
                                                          };
                                                          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                                            option: null, term: null, 
                                                            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                                              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                              slots: {
                                                                default: renderFn || jinge__WEBPACK_IMPORTED_MODULE_0__.emptyRenderFn
                                                              }
                                                            }
                                                          });
                                                          const fn_0 = () => {
                                                            attrs.option = vm_1.each;
                                                          };
                                                          fn_0();
                                                          const fn_1 = () => {
                                                            attrs.term = vm_0.value;
                                                          };
                                                          fn_1();
                                                          const el = (new jinge__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent(attrs, ["option","term"]))[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
                                                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each"], fn_0, el[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["value"], fn_1, el[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                                          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                                          debugger
                                                          const xx = el.__render();
                                                          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(xx);
                                                        })()
                                                        ];
                                                      }
                                                    }
                                                  },
                                                });
                                                const el = _menu__WEBPACK_IMPORTED_MODULE_2__.MenuItem.create(attrs);
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
                                        attrs.loop = vm_0.filteredOptions;
                                      };
                                      fn_0();
                                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["filteredOptions"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                          attrs.expect = vm_0.hasFilteredItems;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["hasFilteredItems"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                                          (() => {
                                            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                              "div",
                                              {
                                                class: `md-autocomplete-empty`
                                              },
                                              ...(() => {
                                                const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
                                                const renderFn = __ac && __ac['empty'] ? __ac['empty'] : null;
                                                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                                                  term: null, 
                                                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                                                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                                                    slots: {
                                                      default: renderFn || jinge__WEBPACK_IMPORTED_MODULE_0__.emptyRenderFn
                                                    }
                                                  }
                                                });
                                                const fn_0 = () => {
                                                  attrs.term = vm_0.value;
                                                };
                                                fn_0();
                                                const el = (new jinge__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent(attrs, ["term"]))[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
                                                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["value"], fn_0, el[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
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
                                  const el = _menu__WEBPACK_IMPORTED_MODULE_2__.MenuItem.create(attrs);
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
                          attrs.expect = !vm_0.hasFilteredItems && vm_0._hasScopedEmptySlot;
                        };
                        fn_0();
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["hasFilteredItems"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_hasScopedEmptySlot"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                        const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                        return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
                      })()
                      ];
                    }
                  }
                },
                dense: undefined,
                alignTrigger: undefined,
                active: undefined,
                placement: `bottom`,
                trigger: `none`,
                fullWidth: true
              });
              const fn_0 = () => {
                attrs.dense = vm_0.dense;
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["dense"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_1 = () => {
                attrs.alignTrigger = vm_0.layout === 'box' ? '0,8' : true;
              };
              fn_1();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["layout"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const fn_2 = () => {
                attrs.active = vm_0.showMenu && (vm_0.hasFilteredItems || vm_0._hasScopedEmptySlot);
              };
              fn_2();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["showMenu"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["hasFilteredItems"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["_hasScopedEmptySlot"], fn_2, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              const el = _menu__WEBPACK_IMPORTED_MODULE_2__.Menu.create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
            })(),
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
      inline: undefined,
      clearable: true
    });
    const fn_0 = () => {
      attrs.class = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.class2str)((0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(['md-autocomplete', vm_0.layout === 'box' ? ' md-autocomplete-box' : '']));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["layout"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const fn_1 = () => {
      attrs.inline = vm_0.layout === 'box';
    };
    fn_1();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["layout"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
    const el = _field__WEBPACK_IMPORTED_MODULE_1__.Field.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
  })()
  ];
}

/***/ }),

/***/ "../jinge-material/lib/autocomplete/style/index.js":
/*!*********************************************************!*\
  !*** ../jinge-material/lib/autocomplete/style/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/autocomplete/style/index.css");




/***/ }),

/***/ "../jinge-material/lib/highlight/index.js":
/*!************************************************!*\
  !*** ../jinge-material/lib/highlight/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightText": () => (/* binding */ HighlightText)
/* harmony export */ });
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.js */ "../jinge-material/lib/highlight/style/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../jinge/lib/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util */ "../jinge-material/lib/_util/index.js");
/* harmony import */ var _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.tpl.js */ "../jinge-material/lib/highlight/index.tpl.js");



function generateHighlight(text, term, searchMethod, ignoreCase) {
  switch (searchMethod) {
    case "fuzzy":
      return (0,_util__WEBPACK_IMPORTED_MODULE_2__.fuzzyHighlight)(text, term, ignoreCase);
    case "includes":
      return (0,_util__WEBPACK_IMPORTED_MODULE_2__.includesHighlight)(text, term, ignoreCase);
    case "starts":
      return (0,_util__WEBPACK_IMPORTED_MODULE_2__.startsHighlight)(text, term, ignoreCase);
    default:
      return text;
  }
}
const SearchMethodValidator = new _util__WEBPACK_IMPORTED_MODULE_2__.EnumAttrValidator("<md-highlight>", "searchMethod", ["fuzzy", "starts", "includes"]);
class HighlightText extends jinge__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    SearchMethodValidator.assert(attrs);
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;const f2_jg0402 = () => {
    _jg0.term = attrs.term; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("term", f2_jg0402);const f3_jg0402 = () => {
    _jg0.searchMethod = attrs.searchMethod || "fuzzy"; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("searchMethod", f3_jg0402);const f4_jg0402 = () => {
    _jg0.ignoreCase = attrs.ignoreCase !== false; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("ignoreCase", f4_jg0402);const f5_jg0402 = () => {
    _jg0.text = attrs.text; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_1__.$$].__watch("text", f5_jg0402);
  }
  get term() {
    return this._term;
  }
  set term(v) {
    if (this._term === v)
      return;
    this._term = v;
    this.__updateIfNeed();
  }
  get text() {
    return this._text;
  }
  set text(v) {
    if (this._text === v)
      return;
    this._text = v;
    this.__updateIfNeed();
  }
  __afterRender() {
    this.__update();
  }
  __update() {
    const el = this.__firstDOM;
    el.innerHTML = generateHighlight(this.text, this.term, this.searchMethod, this.ignoreCase);
  }
}
HighlightText.template = _index_tpl_js__WEBPACK_IMPORTED_MODULE_3__["default"];


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../jinge-material/lib/highlight/index.tpl.js":
/*!****************************************************!*\
  !*** ../jinge-material/lib/highlight/index.tpl.js ***!
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
    );
    const fn_0 = () => {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, (['md-highlight-text', vm_0.class]));
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

/***/ "../jinge-material/lib/highlight/style/index.js":
/*!******************************************************!*\
  !*** ../jinge-material/lib/highlight/style/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/index.css */ "../jinge-material/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../jinge-material/lib/highlight/style/index.css");




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
//# sourceMappingURL=src_pages_components_autocomplete_index_ts.js.map