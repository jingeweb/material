"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[3392],{4812:(e,t,n)=>{n.r(t),n.d(t,{PageProgress:()=>f});var r=n(4114),o=n(7421),s=n(7683);class a extends r.wA{constructor(e){super(e);const t=this[r.$$].proxy,n=()=>{t.mode=e.mode||"determinate"};n(),e[r.$$].__watch("mode",n);const o=()=>{t.value=Number(e.value||0)};o(),e[r.$$].__watch("value",o);const s=()=>{t.buffer=Number(e.buffer||0)};s(),e[r.$$].__watch("buffer",s),t.updateStyles()}get mode(){return this._mode}set mode(e){this._mode!==e&&(this._mode=e,this.__updateIfNeed(this.updateStyles))}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.__updateIfNeed(this.updateStyles))}get buffer(){return this._buffer}set buffer(e){this._buffer!==e&&(this._buffer=e,this.__updateIfNeed(this.updateStyles))}updateStyles(){this.valueStyle=null,this.trackStyle=null,this.bufferStyle=null,"buffer"!==this.mode&&"determinate"!==this.mode||(this.valueStyle=`width:${this.value}%`,this.trackStyle=`width:${this.buffer}%`,this.bufferStyle=`left: calc(${this.buffer}% + 8px)`)}}a.template=function(e){const t=e;return[(()=>{const n=(0,r.Eh)("div",(()=>{const n=(0,r.az)("div",{class:"md-progress-bar-track"}),o=()=>{(0,r.V7)(n,t.trackStyle)};return o(),t[r.$$].__watch(["trackStyle"],o,e[r.$$]),n})(),(()=>{const n=(0,r.az)("div",{class:"md-progress-bar-fill"}),o=()=>{(0,r.V7)(n,t.valueStyle)};return o(),t[r.$$].__watch(["valueStyle"],o,e[r.$$]),n})(),(()=>{const n=(0,r.az)("div",{class:"md-progress-bar-buffer"}),o=()=>{(0,r.V7)(n,t.bufferStyle)};return o(),t[r.$$].__watch(["bufferStyle"],o,e[r.$$]),n})()),o=()=>{(0,r.VT)(n,["md-progress-bar","md-"+t.mode,t.class])};o(),t[r.$$].__watch(["mode"],o,e[r.$$]),t[r.$$].__watch(["class"],o,e[r.$$]);const s=()=>{(0,r.V7)(n,t.style)};return s(),t[r.$$].__watch(["style"],s,e[r.$$]),e[r.__].rootNodes.push(n),n})()]};class u extends r.wA{constructor(e){super(e),this[r.$$].proxy.amount=100*Math.random()|0}}u.template=function(e){const t=e;return[(()=>{const n=(0,r.az)("div",{class:"MbEfPET_9vZRnEPuVTKA"},...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context},value:void 0,mode:"determinate"}),o=()=>{n.value=t.amount};o(),t[r.$$].__watch(["amount"],o,e[r.$$]);const s=a.create(n);return e[r.__].nonRootCompNodes.push(s),(0,r.KO)(s.__render())})(),...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context},value:void 0,class:"md-accent",mode:"determinate"}),o=()=>{n.value=t.amount};o(),t[r.$$].__watch(["amount"],o,e[r.$$]);const s=a.create(n);return e[r.__].nonRootCompNodes.push(s),(0,r.KO)(s.__render())})(),(0,r.Eh)("div",(()=>{const n=(0,r.az)("input",{type:"range"}),o=()=>{n.value=t.amount};return o(),t[r.$$].__watch(["amount"],o,e[r.$$]),(0,r.vP)(n,"change",(function(...e){t.amount=e[0].target.value})),n})(),(()=>{const n=(0,r.Eg)(),o=()=>{(0,r.Hd)(n,`${t.amount}%`)};return o(),t[r.$$].__watch(["amount"],o,e[r.$$]),n})()));return e[r.__].rootNodes.push(n),n})()]};const c={ts:"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './determinate.html';\n\nexport default class ExampleDeterminateProgress extends Component {\n  static template = _tpl;\n\n  amount: number;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.amount = (Math.random() * 100) | 0;\n  }\n}\n",sass:".demo :global .md-progress-bar {\n  margin: 24px;\n}\n",html:'\x3c!-- import style from \'./determinate.scss\' --\x3e\n<div :class="style.demo">\n  <md-progress-bar mode="determinate" e:value="amount"/>\n  <md-progress-bar class="md-accent" mode="determinate" e:value="amount"/>\n  <div>\n    <input type="range" e:value="amount" on:change="amount = $event.target.value"/> ${ amount }%\n  </div>\n</div>'};class m extends r.wA{}m.template=function(e){return[(()=>{const t=(0,r.az)("div",{class:"ootplFtL2GfWJ2BmCfOE"},...(()=>{const t=(0,r.Qb)({[r.__]:{context:e[r.__].context},mode:"indeterminate"}),n=a.create(t);return e[r.__].nonRootCompNodes.push(n),(0,r.KO)(n.__render())})(),...(()=>{const t=(0,r.Qb)({[r.__]:{context:e[r.__].context},class:"md-accent",mode:"indeterminate"}),n=a.create(t);return e[r.__].nonRootCompNodes.push(n),(0,r.KO)(n.__render())})());return e[r.__].rootNodes.push(t),t})()]};const d={ts:"import { Component } from 'jinge';\n\nimport _tpl from './indeterminate.html';\n\nexport default class ExampleIndeterminateProgress extends Component {\n  static template = _tpl;\n}\n",sass:".demo :global .md-progress-bar {\n  margin: 24px;\n}\n",html:'\x3c!-- import style from \'./indeterminate.scss\' --\x3e\n<div :class="style.demo">\n  <md-progress-bar mode="indeterminate"/>\n  <md-progress-bar class="md-accent" mode="indeterminate"/>\n</div>'};class _ extends r.wA{constructor(e){super(e);const t=this[r.$$].proxy;t.amount=100*Math.random()|0,t.buffer=100*Math.random()|0}}_.template=function(e){const t=e;return[(()=>{const n=(0,r.az)("div",{class:"GjxNVB8hZGtej7inV6Fd"},...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context},value:void 0,buffer:void 0,mode:"buffer"}),o=()=>{n.value=t.amount};o(),t[r.$$].__watch(["amount"],o,e[r.$$]);const s=()=>{n.buffer=t.buffer};s(),t[r.$$].__watch(["buffer"],s,e[r.$$]);const u=a.create(n);return e[r.__].nonRootCompNodes.push(u),(0,r.KO)(u.__render())})(),...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context},value:void 0,buffer:void 0,class:"md-accent",mode:"buffer"}),o=()=>{n.value=t.amount};o(),t[r.$$].__watch(["amount"],o,e[r.$$]);const s=()=>{n.buffer=t.buffer};s(),t[r.$$].__watch(["buffer"],s,e[r.$$]);const u=a.create(n);return e[r.__].nonRootCompNodes.push(u),(0,r.KO)(u.__render())})(),(0,r.Eh)("div","Progress",(0,r.Eh)("br"),(()=>{const n=(0,r.az)("input",{type:"range"}),o=()=>{n.value=t.amount};return o(),t[r.$$].__watch(["amount"],o,e[r.$$]),(0,r.vP)(n,"change",(function(...e){t.amount=e[0].target.value})),n})(),(()=>{const n=(0,r.Eg)(),o=()=>{(0,r.Hd)(n,`${t.amount}%`)};return o(),t[r.$$].__watch(["amount"],o,e[r.$$]),n})()),(0,r.Eh)("div","Buffer",(0,r.Eh)("br"),(()=>{const n=(0,r.az)("input",{type:"range"}),o=()=>{n.value=t.buffer};return o(),t[r.$$].__watch(["buffer"],o,e[r.$$]),(0,r.vP)(n,"change",(function(...e){t.buffer=e[0].target.value})),n})(),(()=>{const n=(0,r.Eg)(),o=()=>{(0,r.Hd)(n,`${t.buffer}%`)};return o(),t[r.$$].__watch(["buffer"],o,e[r.$$]),n})()));return e[r.__].rootNodes.push(n),n})()]};const i={ts:"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './buffer.html';\n\nexport default class ExampleBufferProgress extends Component {\n  static template = _tpl;\n\n  amount: number;\n  buffer: number;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.amount = (Math.random() * 100) | 0;\n    this.buffer = (Math.random() * 100) | 0;\n  }\n}\n",sass:".demo :global .md-progress-bar {\n  margin: 24px;\n}\n",html:'\x3c!-- import style from \'./buffer.scss\' --\x3e\n<div :class="style.demo">\n  <md-progress-bar mode="buffer" e:value="amount" e:buffer="buffer"/>\n  <md-progress-bar class="md-accent" mode="buffer" e:value="amount" e:buffer="buffer"/>\n  <div>\n    Progress <br/>\n    <input type="range" e:value="amount" on:change="amount = $event.target.value"/> ${ amount }%\n  </div>\n\n  <div>\n    Buffer <br/>\n    <input type="range" e:value="buffer" on:change="buffer = $event.target.value"/> ${ buffer }%\n  </div>\n</div>'};class p extends r.wA{}p.template=function(e){return[(()=>{const t=(0,r.az)("div",{class:"OZnSMglHI7kBuFrvUhzV"},...(()=>{const t=(0,r.Qb)({[r.__]:{context:e[r.__].context},mode:"query"}),n=a.create(t);return e[r.__].nonRootCompNodes.push(n),(0,r.KO)(n.__render())})(),...(()=>{const t=(0,r.Qb)({[r.__]:{context:e[r.__].context},class:"md-accent",mode:"query"}),n=a.create(t);return e[r.__].nonRootCompNodes.push(n),(0,r.KO)(n.__render())})());return e[r.__].rootNodes.push(t),t})()]};const l={ts:"import { Component } from 'jinge';\n\nimport _tpl from './query.html';\n\nexport default class ExampleQueryProgress extends Component {\n  static template = _tpl;\n}\n",sass:".demo :global .md-progress-bar {\n  margin: 24px;\n}\n",html:'\x3c!-- import style from \'./query.scss\' --\x3e\n<div :class="style.demo">\n  <md-progress-bar mode="query"/>\n  <md-progress-bar class="md-accent" mode="query"/>\n</div>'};class f extends r.wA{constructor(e){super(e);const t=this[r.$$].proxy;(0,o.v7)(t,(()=>{t.api=(0,r.vm)({props:{headings:["名称","描述","默认值"],props:[{name:"mode",type:"String",description:"设置进度条的模式。请参见下面每种模式的详细说明。",defaults:"determinate"},{offset:!0,name:'mode="determinate"',type:"String",description:"默认模式，与 <code>md-value</code> 属性一起使用。指定 0％ 到 100％ 之间的某个进度。",defaults:"-"},{offset:!0,name:'mode="indeterminate"',type:"String",description:"创建一个不指定具体进度，持续加载状态的进度条",defaults:"-"},{offset:!0,name:'mode="query"',type:"String",description:"创建用于提示正在查询的进度条。在检索大量内容时很有用。",defaults:"-"},{offset:!0,name:'mode="buffer"',type:"String",description:"创建带有缓冲区的进度条，常用于指示视频加载进度。",defaults:"-"},{name:"value",type:"Number",description:"当前进度的值，支持 0 到 100 的数字。",defaults:"null"},{name:"buffer",type:"Number",description:"当前缓冲量的值，支持 0 到 100 的数字。",defaults:"null"}]}})}),!0),t._examples={determinate:{component:u,source:c},indeterminate:{component:m,source:d},buffer:{component:_,source:i},query:{component:p,source:l}}}}f.template=function(e){const t=e;return[...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context,slots:{default:function(e){return[(()=>{const t=(0,r.az)("div",{class:"page-container-section"},(0,r.Eh)("p","进度条用于应用程序加载内容的视觉提示。"),(0,r.Eh)("p","针对不同应用程序可能的需要，进度条提供提供了 4 种类型：确定，不确定，查询或缓冲区。"));return e[r.__].rootNodes.push(t),t})(),(()=>{const n=(0,r.az)("div",{class:"page-container-section"},(0,r.Eh)("h2","进度条"),(0,r.Eh)("p","确定进度条用于指示已完成的百分比。"),...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context},title:"Determinate",example:t._examples?.determinate}),o=s.AA.create(n);return e[r.__].nonRootCompNodes.push(o),(0,r.KO)(o.__render())})());return e[r.__].rootNodes.push(n),n})(),(()=>{const n=(0,r.az)("div",{class:"page-container-section"},(0,r.Eh)("p","当无法确定当前已完成的进度，只是提示用户等待正在进行的操作，可以使用不确定进度条。"),...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context},title:"Indeterminate",example:t._examples?.indeterminate}),o=s.AA.create(n);return e[r.__].nonRootCompNodes.push(o),(0,r.KO)(o.__render())})());return e[r.__].rootNodes.push(n),n})(),(()=>{const n=(0,r.az)("div",{class:"page-container-section"},(0,r.Eh)("p","处理流媒体视频等媒体内容时，我们可以使用进度条在视频上显示缓冲进度指示器。"),...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context},title:"Buffer",example:t._examples?.buffer}),o=s.AA.create(n);return e[r.__].nonRootCompNodes.push(o),(0,r.KO)(o.__render())})());return e[r.__].rootNodes.push(n),n})(),(()=>{const n=(0,r.az)("div",{class:"page-container-section"},(0,r.Eh)("p","当搜索或过滤大量数据时，可以使用查询进度条，以告诉用户正在检索某些内容。"),...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context},title:"Query",example:t._examples?.query}),o=s.AA.create(n);return e[r.__].nonRootCompNodes.push(o),(0,r.KO)(o.__render())})(),...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context,slots:{props:function(e){return[...(()=>{const n=(0,r.Qb)({[r.__]:{context:e[r.__].context},headings:void 0,props:void 0}),o=()=>{n.headings=t.api?.props?.headings};o(),t[r.$$].__watch(["api","props","headings"],o,e[r.$$]);const a=()=>{n.props=t.api?.props?.props};a(),t[r.$$].__watch(["api","props","props"],a,e[r.$$]);const u=s.FG.create(n);return e[r.__].rootNodes.push(u),(0,r.KO)(u.__render())})()]}}},title:"API - md-progress-bar"}),o=s.IA.create(n);return e[r.__].nonRootCompNodes.push(o),(0,r.KO)(o.__render())})());return e[r.__].rootNodes.push(n),n})()]}}},centered:!0,title:"进度条"}),o=s._z.create(n);return e[r.__].rootNodes.push(o),(0,r.KO)(o.__render())})()]}}}]);