"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[5041],{1531:(n,t,e)=>{e.r(t),e.d(t,{PageSnackbar:()=>_});var o=e(4114),s=e(7421),r=e(7683),a=e(8279),c=e(8317);class i extends o.wA{constructor(n){super(n);const t=this[o.$$].proxy;t.position="left",t.showSnackbar=!1}log(n){console.log(n)}}i.template=function(n){const t=n;return[(()=>{const e=(0,o.az)("form",{novalidate:!0},...(()=>{const e=(0,o.Qb)({[o.__]:{context:n[o.__].context,listeners:{click:{fn:function(...n){t.showSnackbar=!0},opts:null}},slots:{default:function(n){return[(0,o.xc)(n,"打开消息提示")]}}},class:"md-accent md-raised"}),s=a.z.create(e);return n[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const e=(0,o.Qb)({[o.__]:{context:n[o.__].context,listeners:{"update.active":{fn:function(...n){t.showSnackbar=n[0]},opts:null},opened:{fn:function(...n){t.log("opened")},opts:null},closed:{fn:function(...n){t.log("closed")},opts:null}},slots:{default:function(n){return[(()=>{const t=(0,o.Eh)("span","连接超时。巴拉巴拉的错误提示信息...");return n[o.__].rootNodes.push(t),t})(),...(()=>{const e=(0,o.Qb)({[o.__]:{context:n[o.__].context,listeners:{click:{fn:function(...n){t.showSnackbar=!1},opts:null}},slots:{default:function(n){return[(0,o.xc)(n,"确认")]}}},class:"md-accent"}),s=a.z.create(e);return n[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}}},position:void 0,active:void 0}),s=()=>{e.position=t.position};s(),t[o.$$].__watch(["position"],s,n[o.$$]);const r=()=>{e.active=t.showSnackbar};r(),t[o.$$].__watch(["showSnackbar"],r,n[o.$$]);const i=c.A.create(e);return n[o.__].nonRootCompNodes.push(i),(0,o.KO)(i.__render())})());return n[o.__].rootNodes.push(e),e})()]};const d={ts:"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './regular.html';\n\nexport default class ExampleSnackbarRegular extends Component {\n  static template = _tpl;\n\n  position: string;\n  showSnackbar: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.position = 'left';\n    this.showSnackbar = false;\n  }\n\n  log(msg: unknown) {\n    // eslint-disable-next-line no-console\n    console.log(msg);\n  }\n}\n",sass:"",html:'<form novalidate>\n  \x3c!-- <div>\n    <div for="snackbar-center" class="md-body-2">Position</div>\n    <md-radio ="position" id="snackbar-center" name="snackbar-horizontal" value="center">Centered</md-radio>\n    <md-radio v-model="position" id="snackbar-left" name="snackbar-horizontal" value="left">Left</md-radio>\n  </div>\n\n  <div>\n    <div class="md-body-2">Duration</div>\n\n    <md-switch v-model="isInfinity">Infinite</md-switch>\n\n    <md-field>\n      <label for="snackbar-duration">Miliseconds</label>\n      <md-input type="number" id="snackbar-duration" v-model.number="duration" :disabled="isInfinity"></md-input>\n    </md-field>\n  </div> --\x3e\n\n  <md-button on:click="showSnackbar = true" class="md-accent md-raised">打开消息提示</md-button>\n  <md-snackbar\n    e:position="position"\n    e:active="showSnackbar"\n    on:update.active="showSnackbar = $args[0]"\n    on:opened="log(\'opened\')"\n    on:closed="log(\'closed\')"\n  >\n    <span>\n      连接超时。巴拉巴拉的错误提示信息...\n    </span>\n    <md-button class="md-accent" on:click="showSnackbar = false">确认</md-button>\n  </md-snackbar>\n</form>'};function p(n){const t=n;return[(()=>{const e=(0,o.Eh)("div",...(()=>{const e=(0,o.Qb)({[o.__]:{context:n[o.__].context,listeners:{click:{fn:function(...n){t.show(...n)},opts:null}},slots:{default:function(n){return[(0,o.xc)(n,"Show snackbar")]}}},class:"md-accent md-raised"}),s=a.z.create(e);return n[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return n[o.__].rootNodes.push(e),e})()]}class l extends o.wA{constructor(n){super(n),this[o.$$].proxy._inc=0}static get template(){return p}show(){c.A.show({position:Math.random()>.5?"center":"left",message:`Hello, World ${this._inc++}.`,duration:1e3+(3e3*Math.random()|0)})}}const u={ts:"import { Attributes, Component } from 'jinge';\n\nimport { Snackbar } from 'jinge-material/lib/snackbar';\nimport _tpl from './static.html';\n\nexport default class ExampleSnackbarStatic extends Component {\n  static get template() {\n    return _tpl;\n  }\n\n  _inc: number;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this._inc = 0;\n  }\n\n  show() {\n    Snackbar.show({\n      position: Math.random() > 0.5 ? 'center' : 'left',\n      message: `Hello, World ${this._inc++}.`,\n      duration: ((Math.random() * 3000) | 0) + 1000,\n    });\n  }\n}\n",sass:"",html:'<div>\n  <md-button class="md-accent md-raised" on:click="show">Show snackbar</md-button>\n</div>'};class _ extends o.wA{constructor(n){super(n);const t=this[o.$$].proxy;(0,s.v7)(t,(()=>{t.api=(0,o.vm)({props:{headings:["名称","描述","默认值"],props:[{name:"active",type:"Boolean",description:"控制消息提示的展示和关闭",defaults:"false"},{name:"duration",type:"Number",description:"设置自动关闭消息提示之前的持续时间（以毫秒为单位）。设置为 0 则不自动关闭，需要手动处理。",defaults:"4000"},{name:"position",type:"String",description:"设置消息提示在屏幕底部的位置",defaults:"null"},{offset:!0,name:'position="center"',type:"String",description:"设置消息提示位于中心位置",defaults:"-"},{offset:!0,name:'position="left"',type:"String",description:"设置消息提示位于左侧位置",defaults:"-"}]},events:{headings:["名称","描述","参数"],props:[{name:"opened",description:"消息提示打开时触发",value:"null"},{name:"closed",description:"消息提示关闭时触发",value:"null"}]}})}),!0),t._examples={regular:{component:i,source:d},static:{component:l,source:u}}}}_.template=function(n){const t=n;return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:n[o.__].context,slots:{default:function(n){return[(()=>{const t=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("p","消息提示组件通过屏幕底部的消息提供有关操作的简短反馈。"),(0,o.Eh)("p","它们可以在屏幕上具有自定义的持续时间，也可以是持续的。可以居中或左对齐。"),...(()=>{const t=(0,o.Qb)({[o.__]:{context:n[o.__].context,slots:{default:function(n){return[(0,o.xc)(n,"在移动设备上，消息提示将占满整个宽度空间。")]}}}}),e=r.NW.create(t);return n[o.__].nonRootCompNodes.push(e),(0,o.KO)(e.__render())})());return n[o.__].rootNodes.push(t),t})(),(()=>{const e=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2","持续时间和位置"),...(()=>{const e=(0,o.Qb)({[o.__]:{context:n[o.__].context},title:"Regualr",example:t._examples?.regular}),s=r.AA.create(e);return n[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return n[o.__].rootNodes.push(e),e})(),(()=>{const e=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2","在 js 代码里调用"),(0,o.Eh)("p","除了直接在 html 模板里使用",(0,o.Eh)("code","md-snackbar"),"组件外，也可以在 js 代码里直接通过调用",(0,o.Eh)("code","Snackbar.show"),"来展示消息。"),...(()=>{const e=(0,o.Qb)({[o.__]:{context:n[o.__].context},title:"Static method",example:t._examples?.static}),s=r.AA.create(e);return n[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const e=(0,o.Qb)({[o.__]:{context:n[o.__].context,slots:{props:function(n){return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:n[o.__].context},headings:void 0,props:void 0}),s=()=>{e.headings=t.api?.props?.headings};s(),t[o.$$].__watch(["api","props","headings"],s,n[o.$$]);const a=()=>{e.props=t.api?.props?.props};a(),t[o.$$].__watch(["api","props","props"],a,n[o.$$]);const c=r.FG.create(e);return n[o.__].rootNodes.push(c),(0,o.KO)(c.__render())})()]},events:function(n){return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:n[o.__].context},headings:void 0,props:void 0}),s=()=>{e.headings=t.api?.events?.headings};s(),t[o.$$].__watch(["api","events","headings"],s,n[o.$$]);const a=()=>{e.props=t.api?.events?.props};a(),t[o.$$].__watch(["api","events","props"],a,n[o.$$]);const c=r.FG.create(e);return n[o.__].rootNodes.push(c),(0,o.KO)(c.__render())})()]}}},title:"API - md-snackbar"}),s=r.IA.create(e);return n[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return n[o.__].rootNodes.push(e),e})()]}}},centered:!0,title:"消息提示"}),s=r._z.create(e);return n[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}}}]);