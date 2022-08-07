"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[5041],{8538:(t,n,e)=>{e.r(n),e.d(n,{PageSnackbar:()=>Ot});var o=e(4114),s=e(7421);const r=()=>"消息提示",c=()=>"Snackbar",a=t=>"zh_cn"===t?r:c;class i extends s.D7{static d=[a]}const d=()=>"消息提示组件通过屏幕底部的消息提供有关操作的简短反馈。",_=()=>"Snackbars provide brief feedback about an operation through a message at the bottom of the screen.",l=t=>"zh_cn"===t?d:_;class p extends s.h${static d=l}const u=()=>"它们可以在屏幕上具有自定义的持续时间，也可以是持续的。可以居中或左对齐。",h=()=>"They can have a custom duration on the screen or be persistent. It can be centered or left aligned.",m=t=>"zh_cn"===t?u:h;class b extends s.h${static d=m}const x=()=>"在移动设备上，消息提示将占满整个宽度空间。",f=()=>"On mobile devices the snackbar will fit the whole width space.",k=t=>"zh_cn"===t?x:f;class v extends s.h${static d=k}const g=()=>"持续时间和位置",$=()=>"Duration and position",w=t=>"zh_cn"===t?g:$;class z extends s.h${static d=w}const N=()=>"在 js 代码里调用",S=()=>"Static method",O=t=>"zh_cn"===t?N:S;class K extends s.h${static d=O}const Q=function(t){return[(0,o.xc)(t,"除了直接在 html 模板里使用"),(()=>{const n=(0,o.Eh)("code","md-snackbar");return t[o.__].rootNodes.push(n),n})(),(0,o.xc)(t,"组件外，也可以在 js 代码里直接通过调用"),(()=>{const n=(0,o.Eh)("code","Snackbar.show");return t[o.__].rootNodes.push(n),n})(),(0,o.xc)(t,"来展示消息。")]},y=function(t){return[(0,o.xc)(t,"In addition to using the"),(()=>{const n=(0,o.Eh)("code","md-snackbar");return t[o.__].rootNodes.push(n),n})(),(0,o.xc)(t,"component directly in the html template, you can also display the message by calling"),(()=>{const n=(0,o.Eh)("code","Snackbar.show");return t[o.__].rootNodes.push(n),n})(),(0,o.xc)(t,"directly in the js code.")]},C=t=>"zh_cn"===t?Q:y;class A extends s.iH{static d=C}var R=e(6686),E=e(3634),j=e(7393),I=e(1964);const M=()=>"控制消息提示的展示和关闭",D=()=>"Option used to trigger the snackbar visibility.",G=t=>"zh_cn"===t?M:D,P=()=>"设置自动关闭消息提示之前的持续时间（以毫秒为单位）。设置为 0 则不自动关闭，需要手动处理。",H=()=>"Sets the duration in milliseconds before close the snackbar.",T=t=>"zh_cn"===t?P:H,W=t=>(0,s.t)(T,t),F=()=>"设置消息提示在屏幕底部的位置",U=()=>"Sets the snackbar position on the bottom of the screen.",B=t=>"zh_cn"===t?F:U,L=t=>(0,s.t)(B,t),q=()=>"设置消息提示位于中心位置",J=()=>"Make the snackbar centered.",V=t=>"zh_cn"===t?q:J,X=t=>(0,s.t)(V,t),Y=()=>"设置消息提示位于左侧位置",Z=()=>"Make the snackbar left aligned.",tt=t=>"zh_cn"===t?Y:Z,nt=t=>(0,s.t)(tt,t);var et=e(5847);const ot=()=>"消息提示打开时触发",st=()=>"Triggered when a snackbar opens.",rt=t=>"zh_cn"===t?ot:st,ct=t=>(0,s.t)(rt,t),at=()=>"消息提示关闭时触发",it=()=>"Triggered when a snackbar closes.",dt=t=>"zh_cn"===t?at:it,_t=t=>(0,s.t)(dt,t);var lt=e(8279),pt=e(8317);const ut=()=>"打开消息提示",ht=()=>"Open snackbar",mt=t=>"zh_cn"===t?ut:ht;class bt extends s.h${static d=mt}const xt=()=>"连接超时。巴拉巴拉的错误提示信息...",ft=()=>"Connection timeout. Some error message...",kt=t=>"zh_cn"===t?xt:ft;class vt extends s.h${static d=kt}var gt=e(3801);class $t extends o.wA{constructor(t){super(t);const n=this[o.$$].proxy;n.position="left",n.showSnackbar=!1}log(t){console.log(t)}}$t.template=function(t){const n=t;return[(()=>{const e=(0,o.az)("form",{novalidate:!0},...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){n.showSnackbar=!0},opts:null}},slots:{default:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),e=bt.create(n);return t[o.__].rootNodes.push(e),(0,o.KO)(e.__render())})()]}}},class:"md-accent md-raised"}),s=lt.z.create(e);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{"update.active":{fn:function(...t){n.showSnackbar=t[0]},opts:null},opened:{fn:function(...t){n.log("opened")},opts:null},closed:{fn:function(...t){n.log("closed")},opts:null}},slots:{default:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),e=vt.create(n);return t[o.__].rootNodes.push(e),(0,o.KO)(e.__render())})(),...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){n.showSnackbar=!1},opts:null}},slots:{default:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),e=gt.G2.create(n);return t[o.__].rootNodes.push(e),(0,o.KO)(e.__render())})()]}}},class:"md-accent"}),s=lt.z.create(e);return t[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}}},position:void 0,active:void 0}),s=()=>{e.position=n.position};s(),n[o.$$].__watch(["position"],s,t[o.$$]);const r=()=>{e.active=n.showSnackbar};r(),n[o.$$].__watch(["showSnackbar"],r,t[o.$$]);const c=pt.A.create(e);return t[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})());return t[o.__].rootNodes.push(e),e})()]};const wt={ts:"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './regular.html';\n\nexport default class ExampleSnackbarRegular extends Component {\n  static template = _tpl;\n\n  position: string;\n  showSnackbar: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.position = 'left';\n    this.showSnackbar = false;\n  }\n\n  log(msg: unknown) {\n    // eslint-disable-next-line no-console\n    console.log(msg);\n  }\n}\n",sass:"",html:'<form novalidate>\n  \x3c!-- <div>\n    <div for="snackbar-center" class="md-body-2">Position</div>\n    <md-radio ="position" id="snackbar-center" name="snackbar-horizontal" value="center">Centered</md-radio>\n    <md-radio v-model="position" id="snackbar-left" name="snackbar-horizontal" value="left">Left</md-radio>\n  </div>\n\n  <div>\n    <div class="md-body-2">Duration</div>\n\n    <md-switch v-model="isInfinity">Infinite</md-switch>\n\n    <md-field>\n      <label for="snackbar-duration">Miliseconds</label>\n      <md-input type="number" id="snackbar-duration" v-model.number="duration" :disabled="isInfinity"></md-input>\n    </md-field>\n  </div> --\x3e\n\n  <md-button on:click="showSnackbar = true" class="md-accent md-raised">打开消息提示</md-button>\n  <md-snackbar\n    e:position="position"\n    e:active="showSnackbar"\n    on:update.active="showSnackbar = $args[0]"\n    on:opened="log(\'opened\')"\n    on:closed="log(\'closed\')"\n  >\n    <span>\n      连接超时。巴拉巴拉的错误提示信息...\n    </span>\n    <md-button class="md-accent" on:click="showSnackbar = false">确认</md-button>\n  </md-snackbar>\n</form>'};function zt(t){const n=t;return[(()=>{const e=(0,o.Eh)("div",...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,listeners:{click:{fn:function(...t){n.show(...t)},opts:null}},slots:{default:function(t){return[(0,o.xc)(t,"Show snackbar")]}}},class:"md-accent md-raised"}),s=lt.z.create(e);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(e),e})()]}class Nt extends o.wA{constructor(t){super(t),this[o.$$].proxy._inc=0}static get template(){return zt}show(){pt.A.show({position:Math.random()>.5?"center":"left",message:`Hello, World ${this._inc++}.`,duration:1e3+(3e3*Math.random()|0)})}}const St={ts:"import { Attributes, Component } from 'jinge';\n\nimport { Snackbar } from 'jinge-material/lib/snackbar';\nimport _tpl from './static.html';\n\nexport default class ExampleSnackbarStatic extends Component {\n  static get template() {\n    return _tpl;\n  }\n\n  _inc: number;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this._inc = 0;\n  }\n\n  show() {\n    Snackbar.show({\n      position: Math.random() > 0.5 ? 'center' : 'left',\n      message: `Hello, World ${this._inc++}.`,\n      duration: ((Math.random() * 3000) | 0) + 1000,\n    });\n  }\n}\n",sass:"",html:'<div>\n  <md-button class="md-accent md-raised" on:click="show">Show snackbar</md-button>\n</div>'};class Ot extends o.wA{constructor(t){super(t);const n=this[o.$$].proxy;(0,s.v7)(n,(()=>{n.api=(0,o.vm)({props:{headings:[(0,E.z_)(),(0,j.r_)(),(0,I.bh)()],props:[{name:"active",type:"Boolean",description:(0,s.t)(G,void 0),defaults:"false"},{name:"duration",type:"Number",description:W(),defaults:"4000"},{name:"position",type:"String",description:L(),defaults:"null"},{offset:!0,name:'position="center"',type:"String",description:X(),defaults:"-"},{offset:!0,name:'position="left"',type:"String",description:nt(),defaults:"-"}]},events:{headings:[(0,E.z_)(),(0,j.r_)(),(0,et.Ux)()],props:[{name:"opened",description:ct(),value:"null"},{name:"closed",description:_t(),value:"null"}]}})}),!0),n._examples={regular:{component:$t,source:wt},static:{component:Nt,source:St}}}}Ot.template=function(t){const n=t;return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){const e=t;return[...(()=>{const s=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("p",...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),e=p.create(n);return t[o.__].nonRootCompNodes.push(e),(0,o.KO)(e.__render())})()),(0,o.Eh)("p",...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),e=b.create(n);return t[o.__].nonRootCompNodes.push(e),(0,o.KO)(e.__render())})()),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),e=v.create(n);return t[o.__].rootNodes.push(e),(0,o.KO)(e.__render())})()]}}}}),e=R.NW.create(n);return t[o.__].nonRootCompNodes.push(e),(0,o.KO)(e.__render())})());return t[o.__].rootNodes.push(n),n})(),(()=>{const e=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2",...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),e=z.create(n);return t[o.__].nonRootCompNodes.push(e),(0,o.KO)(e.__render())})()),...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context},title:"Regualr",example:n._examples?.regular}),s=R.AA.create(e);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(e),e})(),(()=>{const e=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2",...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),e=K.create(n);return t[o.__].nonRootCompNodes.push(e),(0,o.KO)(e.__render())})()),(0,o.Eh)("p",...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),e=A.create(n);return t[o.__].nonRootCompNodes.push(e),(0,o.KO)(e.__render())})()),...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context},title:"Static method",example:n._examples?.static}),s=R.AA.create(e);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{props:function(t){return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{e.headings=n.api?.props?.headings};s(),n[o.$$].__watch(["api","props","headings"],s,t[o.$$]);const r=()=>{e.props=n.api?.props?.props};r(),n[o.$$].__watch(["api","props","props"],r,t[o.$$]);const c=R.FG.create(e);return t[o.__].rootNodes.push(c),(0,o.KO)(c.__render())})()]},events:function(t){return[...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{e.headings=n.api?.events?.headings};s(),n[o.$$].__watch(["api","events","headings"],s,t[o.$$]);const r=()=>{e.props=n.api?.events?.props};r(),n[o.$$].__watch(["api","events","props"],r,t[o.$$]);const c=R.FG.create(e);return t[o.__].rootNodes.push(c),(0,o.KO)(c.__render())})()]}}},title:"API - md-snackbar"}),s=R.IA.create(e);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(e),e})()]}}},title:void 0,centered:!0}),r=()=>{s.title=e.c?.[0]};r(),e[o.$$].__watch(["c",0],r,t[o.$$]);const c=R._z.create(s);return t[o.__].rootNodes.push(c),(0,o.KO)(c.__render())})()]}}}}),s=i.create(e);return t[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}},5847:(t,n,e)=>{e.d(n,{Ux:()=>a});var o=e(7421);const s=()=>"参数",r=()=>"Parameters",c=t=>"zh_cn"===t?s:r,a=t=>(0,o.t)(c,t)},3634:(t,n,e)=>{e.d(n,{z_:()=>a});var o=e(7421);const s=()=>"名称",r=()=>"Name",c=t=>"zh_cn"===t?s:r,a=t=>(0,o.t)(c,t)},3801:(t,n,e)=>{e.d(n,{G2:()=>i,oh:()=>a});var o=e(7421);const s=()=>"确认",r=()=>"Ok",c=t=>"zh_cn"===t?s:r,a=t=>(0,o.t)(c,t);class i extends o.h${static d=c}},7393:(t,n,e)=>{e.d(n,{I1:()=>i,r_:()=>a});var o=e(7421);const s=()=>"描述",r=()=>"Description",c=t=>"zh_cn"===t?s:r,a=t=>(0,o.t)(c,t);class i extends o.h${static d=c}},1964:(t,n,e)=>{e.d(n,{bh:()=>a});var o=e(7421);const s=()=>"默认值",r=()=>"Default",c=t=>"zh_cn"===t?s:r,a=t=>(0,o.t)(c,t)}}]);