"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[3083],{1066:(t,e,n)=>{n.r(e),n.d(e,{PageContent:()=>y});var o=n(4114),s=n(7421);const r=()=>"内容框",c=()=>"Content",a=t=>"zh_cn"===t?r:c;class _ extends s.h${static d=a}class p extends s.D7{static d=[a]}const i=()=>"包含任意信息的内容容器在 Material Design 规范中称为材料或材料片。",d=()=>"The Content surfaces that comprise applications are referred to in this spec as material, or sheets of material. The content component is commonly used to resemble a piece of paper. It'll be useful to theme an arbitrary content.",u=t=>"zh_cn"===t?i:d;class l extends s.h${static d=u}var m=n(6686),h=n(3634),x=n(7393),f=n(1964);const g=()=>"渲染的 HTML 标签，用于创建不是默认的 div 标签。",v=()=>"The output tag. Useful when you want to create a section instead of div, for example.",b=t=>"zh_cn"===t?g:v;var C=n(5303);class $ extends o.wA{}$.template=function(t){return[(()=>{const e=(0,o.az)("div",{class:"NiymzMFsZ06ErFLjBaJ9"},...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(0,o.xc)(t,"Background")]}}}}),n=C.V.create(e);return t[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})(),...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(0,o.xc)(t,"Primary")]}}},class:"md-primary"}),n=C.V.create(e);return t[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})(),...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(0,o.xc)(t,"Accent")]}}},class:"md-accent"}),n=C.V.create(e);return t[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})());return t[o.__].rootNodes.push(e),e})()]};const N={ts:"import { Component } from 'jinge';\n\nimport _tpl from './paper-content.html';\n\nexport default class ExamplePaperContent extends Component {\n  static template = _tpl;\n}\n",sass:".demo {\n  :global(.md-content) {\n    width: 200px;\n    height: 200px;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n",html:'\x3c!-- import style from \'./paper-content.scss\' --\x3e\n<div :class="style.demo">\n  <md-content>Background</md-content>\n  <md-content class="md-primary">Primary</md-content>\n  <md-content class="md-accent">Accent</md-content>\n</div>'};class y extends o.wA{constructor(t){super(t);const e=this[o.$$].proxy;(0,s.v7)(e,(()=>{e.api=(0,o.vm)({props:{headings:[(0,h.z_)(),(0,x.r_)(),(0,f.bh)()],props:[{name:"tag",type:"String",description:(0,s.t)(b,void 0),defaults:"div"}]}})}),!0),e._examples={paperContent:{component:$,source:N}}}}y.template=function(t){const e=t;return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){const n=t;return[...(()=>{const s=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{default:function(t){return[(()=>{const e=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("p",...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),n=l.create(e);return t[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()));return t[o.__].rootNodes.push(e),e})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2",...(()=>{const e=(0,o.Qb)({[o.__]:{context:t[o.__].context}}),n=_.create(e);return t[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},title:"Content",example:e._examples?.paperContent}),s=m.AA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context,slots:{props:function(t){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:t[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=e.api?.props?.headings};s(),e[o.$$].__watch(["api","props","headings"],s,t[o.$$]);const r=()=>{n.props=e.api?.props?.props};r(),e[o.$$].__watch(["api","props","props"],r,t[o.$$]);const c=m.FG.create(n);return t[o.__].rootNodes.push(c),(0,o.KO)(c.__render())})()]}}},title:"API - md-content"}),s=m.IA.create(n);return t[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return t[o.__].rootNodes.push(n),n})()]}}},title:void 0,centered:!0}),r=()=>{s.title=n.c?.[0]};r(),n[o.$$].__watch(["c",0],r,t[o.$$]);const c=m._z.create(s);return t[o.__].rootNodes.push(c),(0,o.KO)(c.__render())})()]}}}}),s=p.create(n);return t[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}},3634:(t,e,n)=>{n.d(e,{z_:()=>a});var o=n(7421);const s=()=>"名称",r=()=>"Name",c=t=>"zh_cn"===t?s:r,a=t=>(0,o.t)(c,t)},7393:(t,e,n)=>{n.d(e,{I1:()=>_,r_:()=>a});var o=n(7421);const s=()=>"描述",r=()=>"Description",c=t=>"zh_cn"===t?s:r,a=t=>(0,o.t)(c,t);class _ extends o.h${static d=c}},1964:(t,e,n)=>{n.d(e,{bh:()=>a});var o=n(7421);const s=()=>"默认值",r=()=>"Default",c=t=>"zh_cn"===t?s:r,a=t=>(0,o.t)(c,t)}}]);