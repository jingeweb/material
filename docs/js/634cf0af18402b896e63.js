"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[5640],{5920:(t,e,n)=>{n.r(e),n.d(e,{PageDialog:()=>b});var o=n(4114),s=n(7421),r=n(7683),i=n(5292),a=n(8279);class c extends o.wA{constructor(t){super(t),this[o.$$].proxy.showDialog=!1}}c.template=function(t){const e=t;return[(()=>{const n=(0,o.Eh)("div",...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{"update.active":{fn:function(...t){e.showDialog=t[0]},opts:null}},slots:{default:function(t){return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(0,o.xc)(t,"Preferences")]}}}}),n=i.$N.create(e);return t[o.__].rootNodes.push(n),(0,o.KO)(n.__render())})(),...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(0,o.xc)(t,"contents here.")]}}}}),n=i.cZ.create(e);return t[o.__].rootNodes.push(n),(0,o.KO)(n.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){e.showDialog=!1},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Close")]}}},class:"md-primary"}),s=a.z.create(n);return t[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){e.showDialog=!1},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Save")]}}},class:"md-primary"}),s=a.z.create(n);return t[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}}}}),s=i.kX.create(n);return t[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}}},active:void 0,style:"max-height: 768px"}),s=()=>{n.active=e.showDialog};s(),e[o.$$].__watch(["showDialog"],s,t[o.$$]);const r=i.Vq.create(n);return t[o.__].nonRootCompNodes.push(r),(0,o.KO)(r.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){e.showDialog=!0},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Show Dialog")]}}},class:"md-primary md-raised"}),s=a.z.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(n),n})()]};const l={ts:"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './custom.html';\n\nexport default class ExampleDialogCustomMarkup extends Component {\n  static template = _tpl;\n\n  showDialog: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.showDialog = false;\n  }\n}\n",sass:"",html:'<div>\n  <md-dialog style="max-height: 768px" e:active="showDialog" on:update.active="showDialog = $args[0]">\n    <md-dialog-title>Preferences</md-dialog-title>\n\n    <md-dialog-content>contents here.</md-dialog-content>\n\n    <md-dialog-actions>\n      <md-button class="md-primary" on:click="showDialog = false">Close</md-button>\n      <md-button class="md-primary" on:click="showDialog = false">Save</md-button>\n    </md-dialog-actions>\n  </md-dialog>\n  <md-button class="md-primary md-raised" on:click="showDialog = true">Show Dialog</md-button>\n</div>'};var p=n(8624);class d extends o.wA{constructor(t){super(t);const e=this[o.$$].proxy;e.first=!1,e.second=!1}show(){p.l.show({title:"Hello",content:"This message is shown by calling DialogAlert.show()"},(()=>{console.log("callback after close.")}))}}d.template=function(t){const e=t;return[(()=>{const n=(0,o.Eh)("div",...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{"update.active":{fn:function(...t){e.first=t[0]},opts:null}}},active:void 0,content:"您的文章已被删除。",confirmText:"漂亮！"}),s=()=>{n.active=e.first};s(),e[o.$$].__watch(["first"],s,t[o.$$]);const r=i.ld.create(n);return t[o.__].nonRootCompNodes.push(r),(0,o.KO)(r.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{"update.active":{fn:function(...t){e.second=t[0]},opts:null}}},active:void 0,title:"提交成功！",content:"您的文章 <strong>你好世界</strong> 已经创建成功！"}),s=()=>{n.active=e.second};s(),e[o.$$].__watch(["second"],s,t[o.$$]);const r=i.ld.create(n);return t[o.__].nonRootCompNodes.push(r),(0,o.KO)(r.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){e.first=!0},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Alert")]}}},class:"md-accent md-raised"}),s=a.z.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){e.second=!0},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Alert")]}}},class:"md-primary md-raised"}),s=a.z.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){e.show(...t)},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Alert by static method")]}}},class:"md-primary md-raised"}),s=a.z.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(n),n})()]};const u={ts:"import { Attributes, Component } from 'jinge';\n\nimport { DialogAlert } from 'jinge-material/lib/dialog/dialog-alert';\n\nimport _tpl from './alert.html';\n\nexport default class ExampleDialogAlert extends Component {\n  static template = _tpl;\n\n  first: boolean;\n  second: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.first = false;\n    this.second = false;\n  }\n\n  show() {\n    DialogAlert.show(\n      {\n        title: 'Hello',\n        content: 'This message is shown by calling DialogAlert.show()',\n      },\n      () => {\n        // eslint-disable-next-line no-console\n        console.log('callback after close.');\n      },\n    );\n  }\n}\n",sass:"",html:'<div>\n  <md-dialog-alert\n    e:active="first"\n    on:update.active="first = $args[0]"\n    content="您的文章已被删除。"\n    confirmText="漂亮！"\n  />\n\n  <md-dialog-alert\n    e:active="second"\n    on:update.active="second = $args[0]"\n    title="提交成功！"\n    content="您的文章 <strong>你好世界</strong> 已经创建成功！"\n  />\n  <md-button class="md-accent md-raised" on:click="first = true">Alert</md-button>\n  <md-button class="md-primary md-raised" on:click="second = true">Alert</md-button>\n  <md-button class="md-primary md-raised" on:click="show">Alert by static method</md-button>\n</div>'};var _=n(2926);function m(t){const e=t;return[(()=>{const n=(0,o.Eh)("div",...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{cancel:{fn:function(...t){e.active=!1,e.onCancel()},opts:null},confirm:{fn:function(...t){e.active=!1,e.onConfirm()},opts:null}}},active:void 0,title:"确认要使用谷歌的定位服务？",content:"使用谷歌定位服务意味着，应用在被使用或处于后台时，都会向谷歌发送<strong>匿名</strong>位置数据。",confirmText:"同意",cancelText:"拒绝"}),s=()=>{n.active=e.active};s(),e[o.$$].__watch(["active"],s,t[o.$$]);const r=i.Qf.create(n);return t[o.__].nonRootCompNodes.push(r),(0,o.KO)(r.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){e.active=!0},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Confirm")]}}},class:"md-primary md-raised"}),s=a.z.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(()=>{const n=(0,o.Eh)("span",(()=>{const n=(0,o.Eg)(),s=()=>{(0,o.Hd)(n,`Value: ${e.value}`)};return s(),e[o.$$].__watch(["value"],s,t[o.$$]),n})());return t[o.__].rootNodes.push(n),n})()]}}},expect:void 0}),s=()=>{n.expect=e.value};s(),e[o.$$].__watch(["value"],s,t[o.$$]);const r=o.uj.create(n);return t[o.__].nonRootCompNodes.push(r),(0,o.KO)(r.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){e.show(...t)},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Confirm by static method")]}}},class:"md-primary md-raised"}),s=a.z.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(n),n})()]}class h extends o.wA{constructor(t){super(t);const e=this[o.$$].proxy;e.active=!1,e.value=null}static get template(){return m}show(){_.Q.show({title:"Confirm to delete?",content:"This message is shown by calling DialogConfirm.show()"},(()=>(console.log("user click confirm."),new Promise(((t,e)=>{setTimeout((()=>{Math.random()>.5?t():e(new Error("net work error."))}),3e3)})))),(()=>{console.log("user click cancel.")}))}onCancel(){this.value="Disagreed"}onConfirm(){this.value="Agreed"}}const f={ts:"import { Attributes, Component } from 'jinge';\n\nimport { DialogConfirm } from 'jinge-material/lib/dialog/dialog-confirm';\n\nimport _tpl from './confirm.html';\n\nfunction mockDeleteApi() {\n  return new Promise<void>((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() > 0.5) resolve();\n      else reject(new Error('net work error.'));\n    }, 3000);\n  });\n}\n\nexport default class ExampleDialogConfirm extends Component {\n  static get template() {\n    return _tpl;\n  }\n\n  active: boolean;\n  value: string;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.active = false;\n    this.value = null;\n  }\n\n  show() {\n    DialogConfirm.show(\n      {\n        title: 'Confirm to delete?',\n        content: 'This message is shown by calling DialogConfirm.show()',\n      },\n      () => {\n        // eslint-disable-next-line no-console\n        console.log('user click confirm.');\n        return mockDeleteApi();\n      },\n      () => {\n        // eslint-disable-next-line no-console\n        console.log('user click cancel.');\n      },\n    );\n  }\n\n  onCancel() {\n    this.value = 'Disagreed';\n  }\n\n  onConfirm() {\n    this.value = 'Agreed';\n  }\n}\n",sass:"",html:'<div>\n  <md-dialog-confirm\n    e:active="active"\n    title="确认要使用谷歌的定位服务？"\n    content="使用谷歌定位服务意味着，应用在被使用或处于后台时，都会向谷歌发送<strong>匿名</strong>位置数据。"\n    confirmText="同意"\n    cancelText="拒绝"\n    on:cancel="active=false;onCancel();"\n    on:confirm="active=false;onConfirm();"\n  />\n\n  <md-button class="md-primary md-raised" on:click="active = true">Confirm</md-button>\n  <if e:expect="value">\n  <span>Value: ${value}</span>  \n  </if>\n  <md-button class="md-primary md-raised" on:click="show">Confirm by static method</md-button>\n</div>'};var g=n(8613),v=n(8317);class x extends o.wA{constructor(t){super(t);const e=this[o.$$].proxy;e.active=!1,e.value="jinge"}show(){g.C.show({title:"请输入您的名字：",defaultValue:this.value,inputPlaceholder:"名字",inputRequired:!0,inputMaxlength:30},(t=>t.startsWith("a")?new Promise(((t,e)=>{setTimeout((()=>{Math.random()>.5?t():e(new Error("net work error."))}),3e3)})):"名字必须以字符 a 打头！"),(()=>{console.log("user click cancel.")}))}onConfirm(t){this.value=t,v.A.show(`你好，${this.value}`)}}x.template=function(t){const e=t;return[(()=>{const n=(0,o.Eh)("div",...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{cancel:{fn:function(...t){e.active=!1},opts:null},confirm:{fn:function(...t){e.active=!1,e.onConfirm(t[0])},opts:null}}},active:void 0,defaultValue:void 0,inputMaxlength:"30",inputRequired:!0,title:"请输入您的名字："}),s=()=>{n.active=e.active};s(),e[o.$$].__watch(["active"],s,t[o.$$]);const r=()=>{n.defaultValue=e.value};r(),e[o.$$].__watch(["value"],r,t[o.$$]);const a=i.Cy.create(n);return t[o.__].nonRootCompNodes.push(a),(0,o.KO)(a.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){e.active=!0},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Prompt")]}}},class:"md-primary md-raised"}),s=a.z.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){e.show(...t)},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Prompt by static method")]}}},class:"md-primary md-raised"}),s=a.z.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(n),n})()]};const $={ts:"import { Attributes, Component } from 'jinge';\n\nimport { DialogPrompt } from 'jinge-material/lib/dialog/dialog-prompt';\nimport { Snackbar } from 'jinge-material/lib/snackbar';\n\nimport _tpl from './prompt.html';\n\nfunction mockDeleteApi() {\n  return new Promise<void>((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() > 0.5) resolve();\n      else reject(new Error('net work error.'));\n    }, 3000);\n  });\n}\n\nexport default class ExampleDialogPrompt extends Component {\n  static template = _tpl;\n\n  active: boolean;\n  value: string;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.active = false;\n    this.value = 'jinge';\n  }\n\n  show() {\n    DialogPrompt.show(\n      {\n        title: '请输入您的名字：',\n        defaultValue: this.value,\n        inputPlaceholder: '名字',\n        inputRequired: true,\n        inputMaxlength: 30,\n      },\n      (input) => {\n        if (!input.startsWith('a')) {\n          return '名字必须以字符 a 打头！';\n        }\n        return mockDeleteApi();\n      },\n      () => {\n        // eslint-disable-next-line no-console\n        console.log('user click cancel.');\n      },\n    );\n  }\n\n  onConfirm(input: string) {\n    this.value = input;\n    Snackbar.show(`你好，${this.value}`);\n  }\n}\n",sass:"",html:'<div>\n  <md-dialog-prompt\n    e:active="active"\n    e:defaultValue="value"\n    inputMaxlength="30"\n    inputRequired\n    title="请输入您的名字："\n    on:cancel="active = false"\n    on:confirm="active = false;onConfirm($args[0]);"\n  />\n  <md-button class="md-primary md-raised" on:click="active = true">Prompt</md-button>\n  <md-button class="md-primary md-raised" on:click="show">Prompt by static method</md-button>\n</div>\n'};class b extends o.wA{constructor(t){super(t);const e=this[o.$$].proxy;(0,s.v7)(e,(()=>{e.api=(0,o.vm)({dialog:{props:{headings:["名称","描述","默认值"],props:[{name:"active",type:"Boolean",description:"控制对话框的打开和关闭",defaults:"false"},{name:"backdrop",type:"Boolean",description:"是否启用叠加的灰色蒙层",defaults:"true"},{name:"closeOnEsc",type:"Boolean",description:"默认情况下，按 esc 时对话框将关闭。设置为 false 可取消此行为。",defaults:"true"},{name:"closeOnOutsideClick",type:"Boolean",description:"默认情况下，单击外部时该对话框将关闭。设置为 false 可取消此行为。",defaults:"true"},{name:"fullscreen",type:"Boolean",description:"控制该对话框将在移动屏幕上是否会变为全屏。",defaults:"true"}]},events:{headings:["名称","描述","参数"],props:[{name:"open",description:"对话框打开时触发",value:"null"},{name:"close",description:"对话框关闭时触发",value:"null"},{name:"click-overlay",description:"在叠加层外点击时触发",value:"null"}]}},alert:{props:{headings:["名称","描述","默认值"],props:[{name:"title",type:"String",description:"通知对话框的标题",defaults:"null"},{name:"content",type:"String",description:"通知对话框的内容。支持 html。",defaults:"null"},{name:"confirmText",type:"String",description:"确认按钮的文案",defaults:"确认"}]}},confirm:{props:{headings:["名称","描述","默认值"],props:[{name:"title",type:"String",description:"确认对话框的标题",defaults:"null"},{name:"content",type:"String",description:"确认对话框的内容。支持 html。",defaults:"null"},{name:"confirmText",type:"String",description:"确认按钮的文案",defaults:"确认"},{name:"cancelText",type:"String",description:"取消按钮的文案",defaults:"取消"},{name:"confirmSpinner",type:"Boolean",description:"确认按钮是否处于加载状态。当该参数为 true 时，确认按钮会展示 md-spinner，并处于 disabled 状态。",defaults:"false"}]},events:{headings:["名称","描述","参数"],props:[{name:"confirm",description:"点击确认按钮时触发",value:"null"},{name:"cancel",description:"点击取消按钮时触发",value:"null"}]}},prompt:{props:{headings:["名称","描述","默认值"],props:[{name:"defaultValue",type:"Any",description:"输入框的默认值",defaults:"null"},{name:"inputRequired",type:"Boolean",description:"输入框是否必须填写",defaults:"false"},{name:"inputMaxLength",type:"Number",description:"可选参数，指定输入框的最大允许字符数",defaults:"null"},{name:"inputPlaceholder",type:"Number",description:"输入框的占位提示信息",defaults:"null"},{name:"title",type:"String",description:"对话框的标题",defaults:"null"},{name:"confirmText",type:"String",description:"确认按钮的文案",defaults:"确认"},{name:"cancelText",type:"String",description:"取消按钮的文案",defaults:"取消"},{name:"confirmSpinner",type:"Boolean",description:"确认按钮是否处于加载状态。当该参数为 true 时，确认按钮会展示 md-spinner，并处于 disabled 状态。",defaults:"false"}]},events:{headings:["名称","描述","参数"],props:[{name:"confirm",description:"点击确认按钮时触发",value:"inputValue"},{name:"cancel",description:"点击取消按钮时触发",value:"null"}]}}})}),!0),e._examples={customMarkup:{component:c,source:l},dialogAlert:{component:d,source:u},dialogConfirm:{component:h,source:f},dialogPrompt:{component:x,source:$}}}}b.template=function(t){const e=t;return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(()=>{const e=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("p","对话框用于通知用户有关特定任务的信息，并且可能包含关键信息，需要做出决定或涉及多个任务。您可以在其中包含选项卡，所有表单组件等等。"),(0,o.Eh)("p","对话框包含了一组模拟浏览器原生对话框的预设对话框，例如通知（alert）、确认（confirm）和提示输入（prompt）。"));return t[o.__].rootNodes.push(e),e})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2","对话框"),(0,o.Eh)("p","对话框组件内部可以包含任何 HTML 内容，用于创建丰富的对话框内容。"),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},title:"Basic",example:e._examples?.customMarkup}),s=r.AA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{props:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=e.api?.dialog?.props?.headings};s(),e[o.$$].__watch(["api","dialog","props","headings"],s,t[o.$$]);const i=()=>{n.props=e.api?.dialog?.props?.props};i(),e[o.$$].__watch(["api","dialog","props","props"],i,t[o.$$]);const a=r.FG.create(n);return t[o.__].rootNodes.push(a),(0,o.KO)(a.__render())})()]},events:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=e.api?.dialog?.events?.headings};s(),e[o.$$].__watch(["api","dialog","events","headings"],s,t[o.$$]);const i=()=>{n.props=e.api?.dialog?.events?.props};i(),e[o.$$].__watch(["api","dialog","events","props"],i,t[o.$$]);const a=r.FG.create(n);return t[o.__].rootNodes.push(a),(0,o.KO)(a.__render())})()]}}},title:"API - md-dialog"}),s=r.IA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(n),n})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2","提示对话框"),(0,o.Eh)("p","可以通过在 html 模板里使用",(0,o.Eh)("code","md-dialog-alert"),"组件，\n                        也可以通过在 js 代码中直接调用",(0,o.Eh)("code","DialogAlert"),"组件的静态函数",(0,o.Eh)("code","show"),"来触发。"),(0,o.Eh)("p",(0,o.Eh)("code","DialogAlert.show"),"函数第一个参数为必须的 Object 类型的 options，\n                        该 options 可指定的属性和",(0,o.Eh)("code","md-dialog-alert"),"组件的属性一致。"),(0,o.Eh)("p","该函数接收的第二个参数是可选的关闭对话框后的回调函数。\n                        如果该回调函数返回了",(0,o.Eh)("code","false"),"则会阻止对话框的关闭。"),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},title:"Alert",example:e._examples?.dialogAlert}),s=r.AA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{props:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=e.api?.alert?.props?.headings};s(),e[o.$$].__watch(["api","alert","props","headings"],s,t[o.$$]);const i=()=>{n.props=e.api?.alert?.props?.props};i(),e[o.$$].__watch(["api","alert","props","props"],i,t[o.$$]);const a=r.FG.create(n);return t[o.__].rootNodes.push(a),(0,o.KO)(a.__render())})()]}}},title:"API - md-dialog-alert"}),s=r.IA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(n),n})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2","确认对话框"),(0,o.Eh)("p","展示确认对话框，可以通过在 html 模板里使用",(0,o.Eh)("code","md-dialog-confirm"),"组件，\n                        也可以通过在 js 代码中直接调用",(0,o.Eh)("code","DialogConfirm"),"组件的静态函数",(0,o.Eh)("code","show"),"来触发。"),(0,o.Eh)("p",(0,o.Eh)("code","DialogConfirm.show"),"函数第一个参数为必须的 Object 类型的 options，\n                        该 options 里的可指定的属性和",(0,o.Eh)("code","md-dialog-confirm"),"组件的属性一致。"),(0,o.Eh)("p","该函数接收的可选的第二个参数和第三个参数依次是确认和取消的回调，\n                        如果回调函数返回了",(0,o.Eh)("code","false"),"则会阻止对话框的关闭。"),(0,o.Eh)("p","在实际业务使用时，有一种常见情况是，在 confirm 回调中要调用服务器的 api 接口更新，\n                        api 请求成功后，才关闭对话框（如果失败，则允许用户重试），\n                        api 请求过程中 Confirm 按钮不能点击且有 spinner 状态。"),(0,o.Eh)("p","针对这种情况，confirmCallback 允许返回 false 来阻止对话框关闭，还允许直接\n                        返回一个 Promise 对象。对话框会等待该 Promise，直到其 resolve 返回的数据\n                        不是 false 才关闭对话框。"),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},title:"Confirm",example:e._examples?.dialogConfirm}),s=r.AA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{props:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=e.api?.confirm?.props?.headings};s(),e[o.$$].__watch(["api","confirm","props","headings"],s,t[o.$$]);const i=()=>{n.props=e.api?.confirm?.props?.props};i(),e[o.$$].__watch(["api","confirm","props","props"],i,t[o.$$]);const a=r.FG.create(n);return t[o.__].rootNodes.push(a),(0,o.KO)(a.__render())})()]},events:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=e.api?.confirm?.events?.headings};s(),e[o.$$].__watch(["api","confirm","events","headings"],s,t[o.$$]);const i=()=>{n.props=e.api?.confirm?.events?.props};i(),e[o.$$].__watch(["api","confirm","events","props"],i,t[o.$$]);const a=r.FG.create(n);return t[o.__].rootNodes.push(a),(0,o.KO)(a.__render())})()]}}},title:"API - md-dialog-confirm"}),s=r.IA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(n),n})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2","输入对话框"),(0,o.Eh)("p","输入对话框和确认对话框类似，可以通过在 html 模板里使用",(0,o.Eh)("code","md-dialog-prompt"),"组件，\n                        也可以通过在 js 代码中直接调用",(0,o.Eh)("code","DialogPrompt"),"组件的静态函数",(0,o.Eh)("code","show"),"来触发。"),(0,o.Eh)("p",(0,o.Eh)("code","DialogPrompt.show"),"函数和",(0,o.Eh)("code","DialogConfirm.show"),"的参数一致，但有一个区别是：\n                        confirmCallback 如果返回字符串，会认为是对输入值的错误提示；如果返回 Promise，对于 reject 的数据或 resolve 的字符串 也会认为\n                        是错误提示。"),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},title:"Prompt",example:e._examples?.dialogPrompt}),s=r.AA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{props:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=e.api?.prompt?.props?.headings};s(),e[o.$$].__watch(["api","prompt","props","headings"],s,t[o.$$]);const i=()=>{n.props=e.api?.prompt?.props?.props};i(),e[o.$$].__watch(["api","prompt","props","props"],i,t[o.$$]);const a=r.FG.create(n);return t[o.__].rootNodes.push(a),(0,o.KO)(a.__render())})()]},events:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=e.api?.prompt?.props?.events};s(),e[o.$$].__watch(["api","prompt","props","events"],s,t[o.$$]);const i=()=>{n.props=e.api?.prompt?.events?.props};i(),e[o.$$].__watch(["api","prompt","events","props"],i,t[o.$$]);const a=r.FG.create(n);return t[o.__].rootNodes.push(a),(0,o.KO)(a.__render())})()]}}},title:"API - md-dialog-prompt"}),s=r.IA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(n),n})()]}}},centered:!0,title:"对话框"}),s=r._z.create(n);return t[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}}}]);