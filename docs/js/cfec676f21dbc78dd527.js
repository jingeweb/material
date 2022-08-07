"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[3231],{5287:(e,t,n)=>{n.r(t),n.d(t,{PageSpinner:()=>Ee});var s=n(4114),o=n(7421);const r=()=>"加载指示",c=()=>"Spinner",a=e=>"zh_cn"===e?r:c;class _ extends o.D7{static d=[a]}const i=function(e){return[(0,s.xc)(e,"该组件常用于指示正在加载、正在提交等状态，也可用于具体指示加载的进度。为了简化 API，\n        通过是否指定"),(()=>{const t=(0,s.Eh)("code","value");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"属性来决定 Spinner 属于哪个类型。")]},d=function(e){return[(0,s.xc)(e,"This component is often used to indicate the state of loading, submitting, etc., and can also be used to specifically indicate the progress of loading. To simplify the API, decide whether a Spinner belongs to a type by specifying a"),(()=>{const t=(0,s.Eh)("code","value");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"attribute.")]},p=e=>"zh_cn"===e?i:d;class l extends o.iH{static d=p}const u=function(e){return[(0,s.xc)(e,"指定"),(()=>{const t=(0,s.Eh)("code","value");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"属性时，属于指示具体加载进度的 Spinner，"),(()=>{const t=(0,s.Eh)("code","value");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"属性为 0-100 的数字。")]},m=function(e){return[(0,s.xc)(e,"When the"),(()=>{const t=(0,s.Eh)("code","value");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"attribute is specified, it is a spinner that indicates the specific loading progress, and the"),(()=>{const t=(0,s.Eh)("code","value");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"attribute is a number from 0-100.")]},h=e=>"zh_cn"===e?u:m;class x extends o.iH{static d=h}const b=function(e){return[(0,s.xc)(e,"不指定"),(()=>{const t=(0,s.Eh)("code","value");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"属性时，属于指示正在加载状态的 Spinner,\n        Spinner 表现为一个旋转的加载动画。")]},f=function(e){return[(0,s.xc)(e,"When the"),(()=>{const t=(0,s.Eh)("code","value");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"attribute is not specified, Spinner indicating the loading state, and it appears as a rotating loading animation.")]},$=e=>"zh_cn"===e?b:f;class g extends o.iH{static d=$}const v=()=>"指示正在加载状态的 Spinner",z=()=>"Spinner indicating the loading state",N=e=>"zh_cn"===e?v:z;class y extends o.h${static d=N}class S extends o.D7{static d=[N]}const K=()=>"指示具体的加载进度的 Spinner",O=()=>"Spinner indicating specific load progress",Q=e=>"zh_cn"===e?K:O;class C extends o.h${static d=Q}class w extends o.D7{static d=[Q]}const R=()=>"在按钮中使用 Spinner",E=()=>"Use Spinner in Button",A=e=>"zh_cn"===e?R:E;class j extends o.h${static d=A}class I extends o.D7{static d=[A]}const k=function(e){return[(0,s.xc)(e,"默认情况下，Spinner 的大小为"),(()=>{const t=(0,s.Eh)("code","1em");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"（即字号大小），颜色为"),(()=>{const t=(0,s.Eh)("code","currentColor");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"（即文字颜色）。\n          在实际使用时，可以通过调整父元素的字号和颜色来改变 Spinner 的大小和颜色，也可以通过以下接口来调整：")]},D=function(e){return[(0,s.xc)(e,"By default, the size of Spinner is"),(()=>{const t=(0,s.Eh)("code","1em");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"(the font size) and the color is"),(()=>{const t=(0,s.Eh)("code","currentColor");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"(the text color). In actual use, you can change the size and color of the spinner by adjusting the font size and color of the parent element, or you can adjust it through the following classes:")]},P=e=>"zh_cn"===e?k:D;class T extends o.iH{static d=P}var B=n(6686),H=n(3634),L=n(7393),M=n(1964);const W=()=>"指示进度的值。当不指定该参数时，spinner 表现为旋转加载状态；当指定该参数时，spinner 表现为进度条。",U=()=>"A value indicating progress. When this parameter is not specified, the spinner appears as a spin loading state; when this parameter is specified, the spinner appears as a progress bar.",q=e=>"zh_cn"===e?W:U,F=()=>'图标大小，可以指定为数字，也可以指定为 css 字符串值，还可以指定为 "small"/"normal"/"large" 三者之一（依次对应 36px, 48px, 64px）',G=()=>'Icon size can be specified as a number, as a css string value, or as one of the "small"/"normal"/"large"(corresponds to 36px, 48px, 64px).',V=e=>"zh_cn"===e?F:G,Z=e=>(0,o.t)(V,e),J=()=>"指定使用 primary 颜色。",Y=()=>"Use primary color.",X=e=>"zh_cn"===e?J:Y,ee=e=>(0,o.t)(X,e),te=()=>"指定使用 secondary 颜色。",ne=()=>"Use secondary color.",se=e=>"zh_cn"===e?te:ne,oe=e=>(0,o.t)(se,e),re=()=>"当需要将 Spinner 和文本混合排版时，如果父元素没有使用 flex 布局，则需要使用 md-ajust-baseline 来调整 Baseline。",ce=()=>"When you need to typeset Spinner and text, if the parent element does not use flex layout, you need to use md-ajust-baseline to adjust the baseline.",ae=e=>"zh_cn"===e?re:ce,_e=e=>(0,o.t)(ae,e);var ie=n(4566);class de extends s.wA{}de.template=function(e){return[(()=>{const t=(0,s.az)("div",{class:"iinSMbc2qdB0bmLw40wh"},(0,s.Eh)("div",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{zh_cn:function(e){return[(0,s.xc)(e,"自动适配"),(()=>{const t=(0,s.az)("span",{style:"font-size: 2em;"},"文字大小",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},class:"md-adjust-baseline"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})());return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"和"),(()=>{const t=(0,s.az)("span",{style:"color: #2196f3;"},"颜色",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},class:"md-adjust-baseline"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})());return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"的 Spinner")]},en:function(e){return[(0,s.xc)(e,"Spinner that automatically adapts"),(()=>{const t=(0,s.az)("span",{style:"font-size: 2em;"},"text size",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},class:"md-adjust-baseline"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})());return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"and"),(()=>{const t=(0,s.az)("span",{style:"color: #2196f3;"},"color",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},class:"md-adjust-baseline"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})());return e[s.__].rootNodes.push(t),t})()]}}}}),n=o.Dv.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})()),(0,s.Eh)("p",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},size:"small",class:"md-primary"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},size:"normal",class:"md-accent"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},size:"large",style:"color: #9c27b0;"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},size:"40"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},size:"2em"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})()));return e[s.__].rootNodes.push(t),t})()]};const pe={ts:"import { Component } from 'jinge';\n\nimport _tpl from './loading.html';\n\nexport default class ExampleLoadingSpinner extends Component {\n  static template = _tpl;\n}\n",sass:".demo :global {\n  p {\n    display: inline-flex;\n    align-items: center;\n  }\n\n  .md-spinner + .md-spinner {\n    margin: 6px;\n  }\n}\n",html:'\x3c!-- import style from \'./loading.scss\' --\x3e\n<div :class="style.demo">\n  <div>\n    <switch-locale>\n      <_slot slot-pass:zh_cn>\n        自动适配<span style="font-size: 2em;">文字大小<md-spinner class="md-adjust-baseline"/></span>和<span style="color: #2196f3;">颜色<md-spinner class="md-adjust-baseline"/></span>的 Spinner\n      </_slot>\n      <_slot slot-pass:en>\n        Spinner that automatically adapts <span style= "font-size: 2em; ">text size<md-spinner class= "md-adjust-baseline "/></span> and <span style= "color: #2196f3; ">color<md-spinner class= "md-adjust-baseline "/></span>\n      </_slot>\n    </switch-locale>\n  </div>\n  <p>\n    <md-spinner size="small" class="md-primary"/>\n    <md-spinner size="normal" class="md-accent"/>\n    <md-spinner size="large" style="color: #9c27b0;"/>\n    <md-spinner size="40"/>\n    <md-spinner size="2em"/>\n  </p>\n</div>'};class le extends s.wA{constructor(e){super(e);const t=this[s.$$].proxy;t.v=10,t._int=window.setInterval((()=>{t.v>=100?t.v=10:t.v+=10}),2e3)}__beforeDestroy(){clearInterval(this._int)}}le.template=function(e){const t=e;return[(()=>{const n=(0,s.az)("div",{class:"oi9rsaqZT0AZh8LJN9cK"},(0,s.Eh)("p",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},class:"md-primary",size:"large",value:"60"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},class:"md-accent",size:"normal",value:"80"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context},style:"color: #9c27b0;",size:"small",value:"70"}),n=ie.$.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context},value:void 0,class:"md-primary",size:"3em"}),o=()=>{n.value=t.v};o(),t[s.$$].__watch(["v"],o,e[s.$$]);const r=ie.$.create(n);return e[s.__].nonRootCompNodes.push(r),(0,s.KO)(r.__render())})()));return e[s.__].rootNodes.push(n),n})()]};const ue={ts:"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './progress.html';\n\nexport default class ExampleProgressSpinner extends Component {\n  static template = _tpl;\n\n  v: number;\n  _int: number;\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.v = 10;\n    this._int = window.setInterval(() => {\n      if (this.v >= 100) {\n        this.v = 10;\n      } else {\n        this.v += 10;\n      }\n    }, 2000);\n  }\n\n  __beforeDestroy() {\n    clearInterval(this._int);\n  }\n}\n",sass:".demo :global {\n  p {\n    display: inline-flex;\n    align-items: center;\n  }\n\n  .md-spinner + .md-spinner {\n    margin: 6px;\n  }\n}\n",html:'\x3c!-- import style from \'./progress.scss\' --\x3e\n<div :class="style.demo">\n  <p>\n    <md-spinner class="md-primary" size="large" value="60"/>\n    <md-spinner class="md-accent" size="normal" value="80"/>\n    <md-spinner style="color: #9c27b0;" size="small" value="70"/>\n    <md-spinner e:value="v" class="md-primary" size="3em"/>\n  </p>\n</div>'};var me=n(8279),he=n(2877);const xe=function(e){return[(()=>{const t=(0,s.rS)("svg",he.b,(0,s.rS)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}));return e[s.__].rootNodes.push(t),t})()]},be=class extends he.s{constructor(e){e[s.__].slots={default:xe},super(e)}},fe=()=>"放在文字前面的 Spinner",$e=()=>"Spinner before text",ge=e=>"zh_cn"===e?fe:$e;class ve extends o.h${static d=ge}const ze=()=>"提交",Ne=()=>"Submit",ye=e=>"zh_cn"===e?ze:Ne;class Se extends o.h${static d=ye}const Ke=()=>"搜索",Oe=()=>"Search",Qe=e=>"zh_cn"===e?Ke:Oe;class Ce extends o.h${static d=Qe}class we extends s.wA{constructor(e){super(e),this[s.$$].proxy.loading=!1}submit(){this.loading=!0,setTimeout((()=>{this.loading=!1}),3e3)}}we.template=function(e){const t=e;return[(()=>{const n=(0,s.az)("div",{style:"display: flex; align-items: center;"},...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=ie.$.create(t);return e[s.__].rootNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=ve.create(t);return e[s.__].rootNodes.push(n),(0,s.KO)(n.__render())})()]}}},class:"md-raised"}),n=me.z.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=ie.$.create(t);return e[s.__].rootNodes.push(n),(0,s.KO)(n.__render())})()]}}},class:"md-primary md-raised md-icon-button"}),n=me.z.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,listeners:{click:{fn:function(...e){t.submit(...e)},opts:null}},slots:{default:function(e){return[...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=ie.$.create(t);return e[s.__].rootNodes.push(n),(0,s.KO)(n.__render())})()]}}},expect:void 0}),o=()=>{n.expect=t.loading};o(),t[s.$$].__watch(["loading"],o,e[s.$$]);const r=s.uj.create(n);return e[s.__].rootNodes.push(r),(0,s.KO)(r.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=Se.create(t);return e[s.__].rootNodes.push(n),(0,s.KO)(n.__render())})()]}}},disabled:void 0,class:"md-raised md-primary"}),o=()=>{n.disabled=t.loading};o(),t[s.$$].__watch(["loading"],o,e[s.$$]);const r=me.z.create(n);return e[s.__].nonRootCompNodes.push(r),(0,s.KO)(r.__render())})(),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,listeners:{click:{fn:function(...e){t.submit(...e)},opts:null}},slots:{default:function(e){return[...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=ie.$.create(t);return e[s.__].rootNodes.push(n),(0,s.KO)(n.__render())})()]},else:function(e){return[...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=be.create(t);return e[s.__].rootNodes.push(n),(0,s.KO)(n.__render())})()]}}},expect:void 0}),o=()=>{n.expect=t.loading};o(),t[s.$$].__watch(["loading"],o,e[s.$$]);const r=s.uj.create(n);return e[s.__].rootNodes.push(r),(0,s.KO)(r.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=Ce.create(t);return e[s.__].rootNodes.push(n),(0,s.KO)(n.__render())})()]}}},disabled:void 0,class:"md-raised md-primary"}),o=()=>{n.disabled=t.loading};o(),t[s.$$].__watch(["loading"],o,e[s.$$]);const r=me.z.create(n);return e[s.__].nonRootCompNodes.push(r),(0,s.KO)(r.__render())})());return e[s.__].rootNodes.push(n),n})()]};const Re={ts:"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './button.html';\n\nexport default class ExampleLoadingSpinner extends Component {\n  static template = _tpl;\n\n  loading: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.loading = false;\n  }\n\n  submit() {\n    this.loading = true;\n    setTimeout(() => {\n      this.loading = false;\n    }, 3000);\n  }\n}\n",sass:"",html:'<div style="display: flex; align-items: center;">\n  <md-button class="md-raised">\n    <md-spinner/>\n    <span>放在文字前面的 Spinner</span>\n  </md-button>\n  <md-button class="md-primary md-raised md-icon-button">\n    <md-spinner/>\n  </md-button>\n  <md-button e:disabled="loading" on:click="submit" class="md-raised md-primary">\n    <if e:expect="loading">\n      <md-spinner/>\n    </if>\n    <span>提交</span>\n  </md-button>\n  <md-button e:disabled="loading" on:click="submit" class="md-raised md-primary">\n    <if e:expect="loading">\n      <md-spinner slot-pass:default/>\n      <md-icon-search slot-pass:else/>\n    </if>\n    <span>搜索</span>\n  </md-button>\n</div>'};class Ee extends s.wA{constructor(e){super(e);const t=this[s.$$].proxy;(0,o.v7)(t,(()=>{t.api=(0,s.vm)({props:{headings:[(0,H.z_)(),(0,L.r_)(),(0,M.bh)()],props:[{name:"value",type:"Number",description:(0,o.t)(q,void 0),defaults:"null"},{name:"size",type:"Number|String",description:Z(),defaults:"1em"}]},classes:{headings:[(0,H.z_)(),(0,L.r_)()],props:[{name:"md-primary",description:ee()},{name:"md-accent",description:oe()},{name:"md-ajust-baseline",description:_e()}]}})}),!0),t._examples={loadingSpinner:{component:de,source:pe},progressSpinner:{component:le,source:ue},buttonSpinner:{component:we,source:Re}}}}Ee.template=function(e){const t=e;return[...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){const n=e;return[...(()=>{const o=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[(()=>{const t=(0,s.az)("div",{class:"page-container-section"},(0,s.Eh)("p",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=l.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})()),(0,s.Eh)("p",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=x.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})()),(0,s.Eh)("p",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=g.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})()));return e[s.__].rootNodes.push(t),t})(),(()=>{const n=(0,s.az)("div",{class:"page-container-section"},(0,s.Eh)("h2",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=y.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})()),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){const n=e;return[...(()=>{const o=(0,s.Qb)({[s.__]:{context:e[s.__].context},title:void 0,example:t._examples?.loadingSpinner}),r=()=>{o.title=n.c?.[0]};r(),n[s.$$].__watch(["c",0],r,e[s.$$]);const c=B.AA.create(o);return e[s.__].rootNodes.push(c),(0,s.KO)(c.__render())})()]}}}}),o=S.create(n);return e[s.__].nonRootCompNodes.push(o),(0,s.KO)(o.__render())})(),(0,s.Eh)("h2",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=C.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})()),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){const n=e;return[...(()=>{const o=(0,s.Qb)({[s.__]:{context:e[s.__].context},title:void 0,example:t._examples?.progressSpinner}),r=()=>{o.title=n.c?.[0]};r(),n[s.$$].__watch(["c",0],r,e[s.$$]);const c=B.AA.create(o);return e[s.__].rootNodes.push(c),(0,s.KO)(c.__render())})()]}}}}),o=w.create(n);return e[s.__].nonRootCompNodes.push(o),(0,s.KO)(o.__render())})(),(0,s.Eh)("h2",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=j.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})()),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){const n=e;return[...(()=>{const o=(0,s.Qb)({[s.__]:{context:e[s.__].context},title:void 0,example:t._examples?.buttonSpinner}),r=()=>{o.title=n.c?.[0]};r(),n[s.$$].__watch(["c",0],r,e[s.$$]);const c=B.AA.create(o);return e[s.__].rootNodes.push(c),(0,s.KO)(c.__render())})()]}}}}),o=I.create(n);return e[s.__].nonRootCompNodes.push(o),(0,s.KO)(o.__render())})(),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[(()=>{const t=(0,s.Eh)("p",...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context}}),n=T.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})());return e[s.__].rootNodes.push(t),t})()]},props:function(e){return[...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context},headings:void 0,props:void 0}),o=()=>{n.headings=t.api?.props?.headings};o(),t[s.$$].__watch(["api","props","headings"],o,e[s.$$]);const r=()=>{n.props=t.api?.props?.props};r(),t[s.$$].__watch(["api","props","props"],r,e[s.$$]);const c=B.FG.create(n);return e[s.__].rootNodes.push(c),(0,s.KO)(c.__render())})()]},classes:function(e){return[...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context},headings:void 0,props:void 0}),o=()=>{n.headings=t.api?.classes?.headings};o(),t[s.$$].__watch(["api","classes","headings"],o,e[s.$$]);const r=()=>{n.props=t.api?.classes?.props};r(),t[s.$$].__watch(["api","classes","props"],r,e[s.$$]);const c=B.FG.create(n);return e[s.__].rootNodes.push(c),(0,s.KO)(c.__render())})()]}}},title:"API - md-spinner"}),o=B.IA.create(n);return e[s.__].nonRootCompNodes.push(o),(0,s.KO)(o.__render())})());return e[s.__].rootNodes.push(n),n})()]}}},title:void 0,centered:!0}),r=()=>{o.title=n.c?.[0]};r(),n[s.$$].__watch(["c",0],r,e[s.$$]);const c=B._z.create(o);return e[s.__].rootNodes.push(c),(0,s.KO)(c.__render())})()]}}}}),o=_.create(n);return e[s.__].rootNodes.push(o),(0,s.KO)(o.__render())})()]}},3634:(e,t,n)=>{n.d(t,{z_:()=>a});var s=n(7421);const o=()=>"名称",r=()=>"Name",c=e=>"zh_cn"===e?o:r,a=e=>(0,s.t)(c,e)},7393:(e,t,n)=>{n.d(t,{I1:()=>_,r_:()=>a});var s=n(7421);const o=()=>"描述",r=()=>"Description",c=e=>"zh_cn"===e?o:r,a=e=>(0,s.t)(c,e);class _ extends s.h${static d=c}},1964:(e,t,n)=>{n.d(t,{bh:()=>a});var s=n(7421);const o=()=>"默认值",r=()=>"Default",c=e=>"zh_cn"===e?o:r,a=e=>(0,s.t)(c,e)},4566:(e,t,n)=>{n.d(t,{$:()=>o});var s=n(4114);class o extends s.wA{constructor(e){super(e);const t=this[s.$$].proxy;t._determinate="value"in e;const n=()=>{t.value=e.value};n(),e[s.$$].__watch("value",n);const o=()=>{var n;t.size=("normal"===(n=e.size)?n=48:"small"===n?n=36:"large"===n&&(n=64),(0,s.HD)(n)&&(n=parseInt(n)),n)};o(),e[s.$$].__watch("size",o)}get value(){return this._value}set value(e){this._determinate&&(e=Number(e),this._value!==e&&(this._value=e,this.__updateIfNeed(this.attachCircleStyle)))}attachCircleStyle(){const e=this.__getRef("circle");let t=this.value;t>100?t=100:t<0&&(t=0),e.style.strokeDashoffset=2*Math.PI*22*(100-t)/100+"px"}__afterRender(){this._determinate&&this.attachCircleStyle()}}o.template=function(e){const t=e;return[(()=>{const n=(0,s.Eh)("div",(0,s.rS)("svg",{preserveAspectRatio:"xMidYMid meet",focusable:"false",viewBox:"0 0 48 48"},(()=>{const n=(0,s.rS)("circle",{"stroke-linecap":"round",cx:"50%",cy:"50%","stroke-width":"4",r:"22"});return t.__setRef("circle",n,e),n})())),o=()=>{(0,s.VT)(n,["md-spinner",t._determinate?"md-determinate":"md-indeterminate",t.class])};o(),t[s.$$].__watch(["class"],o,e[s.$$]);const r=()=>{(0,s.V7)(n,[t.style,{width:t.size,height:t.size}])};return r(),t[s.$$].__watch(["style"],r,e[s.$$]),t[s.$$].__watch(["size"],r,e[s.$$]),e[s.__].rootNodes.push(n),n})()]}}}]);