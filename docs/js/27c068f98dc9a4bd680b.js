/*! For license information please see 27c068f98dc9a4bd680b.js.LICENSE.txt */
"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[4059],{4434:(e,t,n)=>{n.r(t),n.d(t,{PageFile:()=>S});var o=n(6116),s=n(3037);const r=()=>"文件选择",l=()=>"Regular File",c=e=>"zh_cn"===e?r:l;class _ extends s.h${static d=c}class i extends s.D7{static d=[c]}const a=()=>"文件选择组件允许用户选择一个或多个文件。可以像普通输入文件一样过滤文件类型，或选择多个文件。",u=()=>"File inputs allows the user to pick one or multiple files. It can also filter the file type just like a normal input file or select multiple files.",d=e=>"zh_cn"===e?a:u;class p extends s.h${static d=d}const h=function(e){return[(()=>{const t=(0,o.Eh)("code","md-file");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"组件可以像"),(()=>{const t=(0,o.Eh)("code","md-input");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"组件一样使用。即，可以使用包括"),(()=>{const t=(0,o.Eh)("strong","placeholder");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"和"),(()=>{const t=(0,o.Eh)("strong","required");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"以及"),(()=>{const t=(0,o.Eh)("strong","disabled");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"等属性。")]},m=function(e){return[(()=>{const t=(0,o.Eh)("code","md-file");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"works just like a regular"),(()=>{const t=(0,o.Eh)("code","md-input");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"component. This means that you can pass any"),(()=>{const t=(0,o.Eh)("code","md-input");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"prop to"),(()=>{const t=(0,o.Eh)("code","md-file");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,", like"),(()=>{const t=(0,o.Eh)("strong","placeholder");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,","),(()=>{const t=(0,o.Eh)("strong","required");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"and"),(()=>{const t=(0,o.Eh)("strong","disabled");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,", for example.")]},f=e=>"zh_cn"===e?h:m;class g extends s.iH{static d=f}const x=function(e){return[(0,o.xc)(e,"浏览器原生"),(()=>{const t=(0,o.Eh)("code",'<input type="file">');return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"支持的各种属性，比如"),(()=>{const t=(0,o.Eh)("strong","multiple");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"和"),(()=>{const t=(0,o.Eh)("strong","accept");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"等，都可以使用到"),(()=>{const t=(0,o.Eh)("code","md-file");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"上。")]},$=function(e){return[(0,o.xc)(e,"All other"),(()=>{const t=(0,o.Eh)("code",'<input type="file">');return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"attributes, such as"),(()=>{const t=(0,o.Eh)("strong","multiple");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"and"),(()=>{const t=(0,o.Eh)("strong","accept");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,", can be used on"),(()=>{const t=(0,o.Eh)("code","md-file");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,".")]},b=e=>"zh_cn"===e?x:$;class v extends s.iH{static d=b}var N=n(8813),E=n(3634),w=n(7393),O=n(5847);const K=()=>"每次选择文件时触发，传递 FileList 参数。",Q=()=>"Emits a FileList. Triggered every time a file is selected.",C=e=>"zh_cn"===e?K:Q;var F=n(6779),R=n(7230),z=n(8387);const k=function(e){return[(()=>{const t=(0,o.rS)("svg",z.b,(0,o.rS)("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}));return e[o.__].rootNodes.push(t),t})()]},y=class extends z.s{constructor(e){e[o.__].slots={default:k},super(e)}};class P extends R.n{constructor(e){super(e,"md-input");const t=this[o.$$].proxy,n=()=>{t.id=e.id||`md-file-${(0,o.hQ)()}`};n(),e[o.$$].__watch("id",n);const s=()=>{t.multiple=e.multiple};s(),e[o.$$].__watch("multiple",s);const r=()=>{t.accept=e.accept};r(),e[o.$$].__watch("accept",r),t.Field.hasFile=!0,t.Field._updateFieldClass()}__afterRender(){this.__domPassListeners(["change"]),super.__afterRender()}getMultipleName(e){const t=[];return[...e].forEach((e=>t.push(e.name))),t.join(", ")}getFileName(e,t){return e&&0!==e.length?e.length>1?this.getMultipleName(e):1===e.length?e[0].name:null:t.value.split("\\").pop()}openPicker(){this.onFocus(),this.__getRef("file").click()}onChange(e){this.onFileSelected(e)}onFileSelected(e){const{target:t,dataTransfer:n}=e,o=t.files||n.files;this.value=this.getFileName(o,t),this.__notify("change",this.value,o||t.value)}}P.template=function(e){const t=e;return[(()=>{const n=(0,o.az)("div",{class:"md-file"},...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{click:{fn:function(...e){t.openPicker(...e)},opts:null}}},class:void 0}),s=()=>{n.class=(0,o.SK)("md-file-icon"+(t.disabled?" md-disabled":""))};s(),t[o.$$].__watch(["disabled"],s,e[o.$$]);const r=y.create(n);return e[o.__].nonRootCompNodes.push(r),(0,o.KO)(r.__render())})(),(()=>{const n=(0,o.az)("input",{class:"md-input",readonly:!0}),s=()=>{n.value=t.value};s(),t[o.$$].__watch(["value"],s,e[o.$$]);const r=()=>{(0,o.P$)(n,"placeholder",t.placeholder)};r(),t[o.$$].__watch(["placeholder"],r,e[o.$$]);const l=()=>{n.required=!!t.required};l(),t[o.$$].__watch(["required"],l,e[o.$$]);const c=()=>{n.disabled=!!t.disabled};return c(),t[o.$$].__watch(["disabled"],c,e[o.$$]),(0,o.vP)(n,"click",(function(...e){t.openPicker(...e)})),(0,o.vP)(n,"blur",(function(...e){t.onBlur(...e)})),n})(),(()=>{const n=(0,o.az)("input",{type:"file"}),s=()=>{n.multiple=!!t.multiple};s(),t[o.$$].__watch(["multiple"],s,e[o.$$]);const r=()=>{(0,o.P$)(n,"accept",t.accept)};return r(),t[o.$$].__watch(["accept"],r,e[o.$$]),(0,o.vP)(n,"change",(function(...e){t.onChange(...e)})),t.__setRef("file",n,e),n})());return e[o.__].rootNodes.push(n),n})()]};class A extends o.wA{constructor(e){super(e);const t=this[o.$$].proxy;t.initial="jinge-material-is-awesome.jpg",t.single=null,t.placeholder=null,t.disabled=null,t.multiple=null}}A.template=function(e){const t=e;return[(()=>{const n=(0,o.Eh)("div",...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.Eh)("label","Single");return e[o.__].rootNodes.push(t),t})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{change:{fn:function(...e){t.single=e[0]},opts:null}}},value:void 0}),s=()=>{n.value=t.single};s(),t[o.$$].__watch(["single"],s,e[o.$$]);const r=P.create(n);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]}}}}),s=F.g.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.Eh)("label","Upload files");return e[o.__].rootNodes.push(t),t})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{change:{fn:function(...e){t.placeholder=e[0]},opts:null}}},value:void 0,placeholder:"A nice input placeholder"}),s=()=>{n.value=t.placeholder};s(),t[o.$$].__watch(["placeholder"],s,e[o.$$]);const r=P.create(n);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]}}}}),s=F.g.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.Eh)("label","Disabled");return e[o.__].rootNodes.push(t),t})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{change:{fn:function(...e){t.disabled=e[0]},opts:null}}},value:void 0,disabled:!0}),s=()=>{n.value=t.disabled};s(),t[o.$$].__watch(["disabled"],s,e[o.$$]);const r=P.create(n);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]}}}}),s=F.g.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.Eh)("label","Initial value");return e[o.__].rootNodes.push(t),t})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{change:{fn:function(...e){t.initial=e[0]},opts:null}}},value:void 0}),s=()=>{n.value=t.initial};s(),t[o.$$].__watch(["initial"],s,e[o.$$]);const r=P.create(n);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]}}}}),s=F.g.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.Eh)("label","Multiple");return e[o.__].rootNodes.push(t),t})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{change:{fn:function(...e){t.multiple=e[0]},opts:null}}},value:void 0,multiple:!0}),s=()=>{n.value=t.multiple};s(),t[o.$$].__watch(["multiple"],s,e[o.$$]);const r=P.create(n);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]}}}}),s=F.g.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.Eh)("label","Only images");return e[o.__].rootNodes.push(t),t})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{change:{fn:function(...e){t.single=e[0]},opts:null}}},value:void 0,accept:"image/*"}),s=()=>{n.value=t.single};s(),t[o.$$].__watch(["single"],s,e[o.$$]);const r=P.create(n);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]}}}}),s=F.g.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return e[o.__].rootNodes.push(n),n})()]};const j={ts:"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './regular.html';\n\nexport default class ExampleFileRegular extends Component {\n  static template = _tpl;\n\n  initial: string;\n  single: boolean;\n  placeholder: string;\n  disabled: boolean;\n  multiple: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.initial = 'jinge-material-is-awesome.jpg';\n    this.single = null;\n    this.placeholder = null;\n    this.disabled = null;\n    this.multiple = null;\n  }\n}\n",sass:"",html:'<div>\n  <md-field>\n    <label>Single</label>\n    <md-file e:value="single" on:change="single = $args[0]" />\n  </md-field>\n\n  <md-field>\n    <label>Upload files</label>\n    <md-file e:value="placeholder" on:change="placeholder = $args[0]" placeholder="A nice input placeholder" />\n  </md-field>\n\n  <md-field>\n    <label>Disabled</label>\n    <md-file e:value="disabled" on:change="disabled = $args[0]" disabled/>\n  </md-field>\n\n  <md-field>\n    <label>Initial value</label>\n    <md-file e:value="initial" on:change="initial = $args[0]" />\n  </md-field>\n\n  <md-field>\n    <label>Multiple</label>\n    <md-file e:value="multiple" on:change="multiple = $args[0]" multiple />\n  </md-field>\n\n  <md-field>\n    <label>Only images</label>\n    <md-file e:value="single" on:change="single = $args[0]" accept="image/*" />\n  </md-field>\n</div>'};class S extends o.wA{constructor(e){super(e);const t=this[o.$$].proxy;(0,s.v7)(t,(()=>{t.api=(0,o.vm)({regular:{events:{headings:[(0,E.z_)(),(0,w.r_)(),(0,O.Ux)()],props:[{name:"change",description:(0,s.t)(C,void 0),value:"name, FileList|File"}]}}})}),!0),t._examples={regular:{component:A,source:j}}}}S.template=function(e){const t=e;return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){const n=e;return[...(()=>{const s=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("p",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=p.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=g.create(t);return e[o.__].rootNodes.push(n),(0,o.KO)(n.__render())})()]}}},tip:!0}),n=N.NW.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})());return e[o.__].rootNodes.push(t),t})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=_.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},title:"File Field",example:t._examples?.regular}),s=N.AA.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{events:function(e){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=t.api?.regular?.events?.headings};s(),t[o.$$].__watch(["api","regular","events","headings"],s,e[o.$$]);const r=()=>{n.props=t.api?.regular?.events?.props};r(),t[o.$$].__watch(["api","regular","events","props"],r,e[o.$$]);const l=N.FG.create(n);return e[o.__].rootNodes.push(l),(0,o.KO)(l.__render())})()]}}},title:"API - md-file"}),s=N.IA.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=v.create(t);return e[o.__].rootNodes.push(n),(0,o.KO)(n.__render())})()]}}},tip:!0}),n=N.NW.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})());return e[o.__].rootNodes.push(n),n})()]}}},title:void 0,centered:!0}),r=()=>{s.title=n.c?.[0]};r(),n[o.$$].__watch(["c",0],r,e[o.$$]);const l=N._z.create(s);return e[o.__].rootNodes.push(l),(0,o.KO)(l.__render())})()]}}}}),s=i.create(n);return e[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}},5847:(e,t,n)=>{n.d(t,{Ux:()=>c});var o=n(3037);const s=()=>"参数",r=()=>"Parameters",l=e=>"zh_cn"===e?s:r,c=e=>(0,o.t)(l,e)},3634:(e,t,n)=>{n.d(t,{z_:()=>c});var o=n(3037);const s=()=>"名称",r=()=>"Name",l=e=>"zh_cn"===e?s:r,c=e=>(0,o.t)(l,e)},7393:(e,t,n)=>{n.d(t,{I1:()=>_,r_:()=>c});var o=n(3037);const s=()=>"描述",r=()=>"Description",l=e=>"zh_cn"===e?s:r,c=e=>(0,o.t)(l,e);class _ extends o.h${static d=l}}}]);