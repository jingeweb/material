"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[1255],{6419:(t,e,n)=>{n.r(e),n.d(e,{PageEmptyState:()=>v});var o=n(4114),s=n(7421),r=n(7683);class c extends o.wA{constructor(t){super(t);const e=this[o.$$].proxy,n=()=>{e.rounded=t.rounded};n(),t[o.$$].__watch("rounded",n);const s=()=>{e.size=Number(t.size||420)};s(),t[o.$$].__watch("size",s);const r=()=>{e.label=t.label};r(),t[o.$$].__watch("label",r);const c=()=>{e.description=t.description};c(),t[o.$$].__watch("description",c)}}c.template=function(t){const e=t;return[(()=>{const n=(0,o.Eh)("div",(0,o.az)("div",{class:"md-empty-state-container"},...(()=>{const n=e[o.__].slots,s=n&&n.icon?n.icon:null,r=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:s||o.qO}}}),c=new o.gU(r,[])[o.$$].proxy;return t[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(()=>{const n=(0,o.az)("strong",{class:"md-empty-state-label"},(()=>{const n=(0,o.Eg)(),s=()=>{(0,o.Hd)(n,e.label)};return s(),e[o.$$].__watch(["label"],s,t[o.$$]),n})());return t[o.__].rootNodes.push(n),n})()]}}},expect:void 0}),s=()=>{n.expect=e.label};s(),e[o.$$].__watch(["label"],s,t[o.$$]);const r=o.uj.create(n);return t[o.__].nonRootCompNodes.push(r),(0,o.KO)(r.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(()=>{const n=(0,o.az)("p",{class:"md-empty-state-description"},(()=>{const n=(0,o.Eg)(),s=()=>{(0,o.Hd)(n,e.description)};return s(),e[o.$$].__watch(["description"],s,t[o.$$]),n})());return t[o.__].rootNodes.push(n),n})()]}}},expect:void 0}),s=()=>{n.expect=e.description};s(),e[o.$$].__watch(["description"],s,t[o.$$]);const r=o.uj.create(n);return t[o.__].nonRootCompNodes.push(r),(0,o.KO)(r.__render())})(),...(()=>{const n=e[o.__].slots,s=n&&n.default?n.default:null,r=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:s||o.qO}}}),c=new o.gU(r,[])[o.$$].proxy;return t[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})())),s=()=>{(0,o.VT)(n,["md-empty-state",e.rounded&&"md-rounded",e.class])};s(),e[o.$$].__watch(["rounded"],s,t[o.$$]),e[o.$$].__watch(["class"],s,t[o.$$]);const r=()=>{(0,o.V7)(n,[e.rounded&&{width:e.size,height:e.size},e.style])};return r(),e[o.$$].__watch(["rounded"],r,t[o.$$]),e[o.$$].__watch(["size"],r,t[o.$$]),e[o.$$].__watch(["style"],r,t[o.$$]),t[o.__].rootNodes.push(n),n})()]};var _=n(2877);const d=function(t){return[(()=>{const e=(0,o.rS)("svg",_.b,(0,o.rS)("path",{d:"M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"}));return t[o.__].rootNodes.push(e),e})()]},a=class extends _.s{constructor(t){t[o.__].slots={default:d},super(t)}};var i=n(8279);class p extends o.wA{}p.template=function(t){return[(()=>{const e=(0,o.Eh)("div",...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{icon:function(t){return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),n=a.create(e);return t[o.__].rootNodes.push(n),(0,o.KO)(n.__render())})()]},default:function(t){return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(0,o.xc)(t,"创建第一个项目")]}}},class:"md-primary md-raised"}),n=i.z.create(e);return t[o.__].rootNodes.push(n),(0,o.KO)(n.__render())})()]}}},label:"创建你的第一个项目",description:"创建项目后，你就可以上传设计稿并和他人协作"}),n=c.create(e);return t[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})());return t[o.__].rootNodes.push(e),e})()]};const l={ts:"import { Component } from 'jinge';\n\nimport _tpl from './basic.html';\n\nexport default class ExampleEmptyBasic extends Component {\n  static template = _tpl;\n}\n",sass:"",html:'<div>\n  <md-empty-state\n    label="创建你的第一个项目"\n    description="创建项目后，你就可以上传设计稿并和他人协作"\n  >\n    <md-icon-devices_other slot-pass:icon/>\n    <md-button slot-pass:default class="md-primary md-raised">创建第一个项目</md-button>\n  </md-empty-state>\n</div>'},u=function(t){return[(()=>{const e=(0,o.rS)("svg",_.b,(0,o.rS)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}));return t[o.__].rootNodes.push(e),e})()]},m=class extends _.s{constructor(t){t[o.__].slots={default:u},super(t)}},h=function(t){return[(()=>{const e=(0,o.rS)("svg",_.b,(0,o.rS)("path",{d:"M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"}));return t[o.__].rootNodes.push(e),e})()]},x=class extends _.s{constructor(t){t[o.__].slots={default:h},super(t)}};class $ extends o.wA{}$.template=function(t){return[(()=>{const e=(0,o.az)("div",{class:"mRcPhCxqCmsgUhvF8usT"},(0,o.Eh)("div",...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{icon:function(t){return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),n=m.create(e);return t[o.__].rootNodes.push(n),(0,o.KO)(n.__render())})()]}}},class:"md-primary",label:"Nothing in Done",description:"Anything you mark done will be safely stored here."}),n=c.create(e);return t[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})(),...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{icon:function(t){return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),n=x.create(e);return t[o.__].rootNodes.push(n),(0,o.KO)(n.__render())})()]}}},class:"md-accent",rounded:!0,label:"Nothing in Reminders",description:"Create a Reminder and it will show up here."}),n=c.create(e);return t[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()));return t[o.__].rootNodes.push(e),e})()]};const f={ts:"import { Component } from 'jinge';\n\nimport _tpl from './colors.html';\n\nexport default class ExampleEmptyColors extends Component {\n  static template = _tpl;\n}\n",sass:".demo {\n  :global {\n    div {\n      text-align: center;\n    }\n\n    .md-empty-state {\n      display: inline-block;\n      vertical-align: middle;\n\n      + .md-empty-state {\n        margin-left: 16px;\n      }\n    }\n  }\n}\n",html:'\x3c!-- import style from \'./colors.scss\' --\x3e\n<div :class="style.demo">\n  <div>\n    <md-empty-state\n      class="md-primary"\n      label="Nothing in Done"\n      description="Anything you mark done will be safely stored here."\n    >\n      <md-icon-done slot-pass:icon/>\n    </md-empty-state>\n\n    <md-empty-state\n      class="md-accent"\n      rounded\n      label="Nothing in Reminders"\n      description="Create a Reminder and it will show up here."\n    >\n      <md-icon-alarm_off slot-pass:icon/>\n    </md-empty-state>\n  </div>\n</div>'};var b=n(6275);class y extends o.wA{}y.template=function(t){return[(()=>{const e=(0,o.Eh)("div",...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{icon:function(t){return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),n=b.Z.create(e);return t[o.__].rootNodes.push(n),(0,o.KO)(n.__render())})()]}}},rounded:!0,label:"Nothing in Snoozed",description:"Anything you snooze will go here until it's time for it to return to the inbox."}),n=c.create(e);return t[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})());return t[o.__].rootNodes.push(e),e})()]};const g={ts:"import { Component } from 'jinge';\n\nimport _tpl from './rounded.html';\n\nexport default class ExampleEmptyRounded extends Component {\n  static template = _tpl;\n}\n",sass:"",html:'<div>\n  <md-empty-state\n    rounded\n    label="Nothing in Snoozed"\n    description="Anything you snooze will go here until it\'s time for it to return to the inbox."\n  >\n    <md-icon-access_time slot-pass:icon/>\n  </md-empty-state>\n</div>'};class v extends o.wA{constructor(t){super(t);const e=this[o.$$].proxy;(0,s.v7)(e,(()=>{e.api=(0,o.vm)({props:{headings:["名称","描述","默认值"],props:[{name:"label",type:"String",description:"空状态的标签，用作标题。",defaults:"null"},{name:"description",type:"String",description:"空状态的描述。",defaults:"null"},{name:"rounded",type:"Boolean",description:"使空状态变圆，并具有漂亮的背景颜色。",defaults:"false"},{name:"size",type:"Number|String",description:"圆角的宽度/高度大小。仅适用于 <code>rounded</code>。",defaults:"420"}]}})}),!0),e._examples={basic:{component:p,source:l},colors:{component:$,source:f},rounded:{component:y,source:g}}}}v.template=function(t){const e=t;return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(()=>{const e=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("p","空状态的示例是不包含任何项目的列表，或者不显示任何结果的搜索。尽管这些状态并不常见，但应设计为防止用户混淆。"),(0,o.Eh)("p","最基本的空白状态显示非交互式图像和文本标语。 为此，您可以使用图标，标题和空状态描述。 空状态默认提供了不错的设计，但是您始终可以在",(0,o.Eh)("code","md-empty-state"),"之上创建自己的设计。"),(0,o.Eh)("p","空状态可以是基本状态或圆形状态。仅对台式机建议使用四舍五入的变体，因为它的大小是固定的，并且无法响应。"));return t[o.__].rootNodes.push(e),e})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2","空状态"),(0,o.Eh)("p","可以在任何屏幕尺寸上使用默认的空状态。您可以将设计与图标，标签和说明结合使用，因为这些都是可选的。"),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},title:"Default",example:e._examples?.basic}),s=r.AA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),(0,o.Eh)("p","圆角的空状态以清新的外观和漂亮的背景色来引起用户的注意。"),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},title:"Rounded",example:e._examples?.rounded}),s=r.AA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),(0,o.Eh)("p","还可以将两种布局与原色或强调色结合使用，以匹配您的主题。"),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},title:"Hue Colors",example:e._examples?.colors}),s=r.AA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{props:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=e.api?.props?.headings};s(),e[o.$$].__watch(["api","props","headings"],s,t[o.$$]);const c=()=>{n.props=e.api?.props?.props};c(),e[o.$$].__watch(["api","props","props"],c,t[o.$$]);const _=r.FG.create(n);return t[o.__].rootNodes.push(_),(0,o.KO)(_.__render())})()]}}},title:"API - md-empty-state"}),s=r.IA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(n),n})()]}}},centered:!0,title:"空提示"}),s=r._z.create(n);return t[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}},6275:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(4114),s=n(2877);const r=function(t){return[(()=>{const e=(0,o.rS)("svg",s.b,(0,o.rS)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),(0,o.rS)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"}));return t[o.__].rootNodes.push(e),e})()]},c=class extends s.s{constructor(t){t[o.__].slots={default:r},super(t)}}}}]);