"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[9270],{5633:(t,e,n)=>{n.r(e),n.d(e,{PageStates:()=>F});var s=n(4114),a=n(7421);const o=()=>"状态",c=()=>"States",r=t=>"zh_cn"===t?o:c;class i extends a.D7{static d=[r]}const d=()=>"状态包括悬停，点击，焦点，禁用等情况下的交互响应。Material Design 使用 Content/Overlay/Container 三层模型来统一了状态的设计。",p=()=>"The status includes interactive responses under hover, click, focus, disable, etc. Material Design uses a three-layer model of Content / Overlay / Container to unify the design of states.",l=t=>"zh_cn"===t?d:p;class m extends a.h${static d=l}var _=n(6686),h=n(3634),u=n(7393);const f=()=>"对应 Material Design States 规范里的 Container，指定状态的容器层。",v=()=>"Corresponds to the Container in the Material Design States specification and specifies the container layer for the state.",y=t=>"zh_cn"===t?f:v,x=()=>"对应 Material Design States 规范里的 Overlay，指定状态的悬停层。",g=()=>"Corresponds to the Overlay in the Material Design States specification, the hover layer of the specified state.",C=t=>"zh_cn"===t?x:g,z=t=>(0,a.t)(C,t),O=()=>"对应 Material Design States 规范里的 Content，指定状态的内容层。",S=()=>"Corresponds to Content in the Material Design States specification, specifying the content layer of the state.",b=t=>"zh_cn"===t?O:S,$=t=>(0,a.t)(b,t),D=()=>"指定使用设计规范里的 Content: On Surface 类型。",w=()=>"Specifies to use the Content: On Surface type from the design specification.",N=t=>"zh_cn"===t?D:w,P=t=>(0,a.t)(N,t),M=()=>"指定使用设计规范里的 Content: Primary 类型。",k=()=>"Specifies to use the Content: Primary type from the design specification.",Q=t=>"zh_cn"===t?M:k,A=t=>(0,a.t)(Q,t),K=()=>"指定使用设计规范里的 Content: On Primary 类型。",j=()=>"Specifies to use the Content: On Primary type from the design specification.",I=t=>"zh_cn"===t?K:j,R=t=>(0,a.t)(I,t);class E extends s.wA{}E.template=function(t){return[(()=>{const e=(0,s.az)("div",{class:"SZBgjnDvJtQVYboxdO9o"},(0,s.az)("div",{class:"md-state-container md-content-on-surface"},(0,s.az)("i",{class:"md-state-overlay"}),(0,s.az)("span",{class:"md-state-content"},"Content: On Surface")),(0,s.az)("div",{class:"md-state-container md-content-is-primary"},(0,s.az)("i",{class:"md-state-overlay"}),(0,s.az)("span",{class:"md-state-content"},"Content: Primary")),(0,s.az)("div",{class:"md-state-container md-content-on-primary"},(0,s.az)("i",{class:"md-state-overlay"}),(0,s.az)("span",{class:"md-state-content"},"Content: On Primary")));return t[s.__].rootNodes.push(e),e})()]};const B={ts:"import { Component } from 'jinge';\n\nimport _tpl from './basic.html';\n\nexport default class ExampleStates extends Component {\n  static template = _tpl;\n}\n",sass:".states-demo {\n  background: var(--demo-states-background);\n  padding: 16px;\n  display: flex;\n  flex-wrap: wrap;\n\n  :global {\n    .md-state-container {\n      width: 200px;\n      height: 200px;\n      margin: 24px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n}\n",html:'\x3c!-- import style from \'./basic.scss\' --\x3e\n<div :class="style.statesDemo">\n  <div class="md-state-container md-content-on-surface">\n    <i class="md-state-overlay"/>\n    <span class="md-state-content">\n      Content: On Surface\n    </span>\n  </div>\n  <div class="md-state-container md-content-is-primary">\n    <i class="md-state-overlay"/>\n    <span class="md-state-content">\n      Content: Primary\n    </span>\n  </div>\n  <div class="md-state-container md-content-on-primary">\n    <i class="md-state-overlay"/>\n    <span class="md-state-content">\n      Content: On Primary\n    </span>\n  </div>\n</div>'};class F extends s.wA{constructor(t){super(t);const e=this[s.$$].proxy;(0,a.v7)(e,(()=>{e.api=(0,s.vm)({classes:{headings:[(0,h.z_)(),(0,u.r_)()],props:[{name:"md-state-container",description:(0,a.t)(y,void 0)},{name:"md-state-overlay",description:z()},{name:"md-state-content",description:$()},{name:"md-content-on-surface",description:P()},{name:"md-content-is-primary",description:A()},{name:"md-content-on-primary",description:R()}]}})}),!0),e._examples={basic:{component:E,source:B}}}}F.template=function(t){const e=t;return[...(()=>{const n=(0,s.Qb)({[s.__]:{context:t[s.__].context,slots:{default:function(t){const n=t;return[...(()=>{const a=(0,s.Qb)({[s.__]:{context:t[s.__].context,slots:{default:function(t){return[(()=>{const e=(0,s.az)("div",{class:"page-container-section"},(0,s.Eh)("p",...(()=>{const e=(0,s.Qb)({[s.__]:{context:t[s.__].context}}),n=m.create(e);return t[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})()));return t[s.__].rootNodes.push(e),e})(),(()=>{const n=(0,s.az)("div",{class:"page-container-section"},...(()=>{const n=(0,s.Qb)({[s.__]:{context:t[s.__].context},title:"States",example:e._examples?.basic}),a=_.AA.create(n);return t[s.__].nonRootCompNodes.push(a),(0,s.KO)(a.__render())})(),...(()=>{const n=(0,s.Qb)({[s.__]:{context:t[s.__].context,slots:{classes:function(t){return[...(()=>{const n=(0,s.Qb)({[s.__]:{context:t[s.__].context},headings:void 0,props:void 0}),a=()=>{n.headings=e.api?.classes?.headings};a(),e[s.$$].__watch(["api","classes","headings"],a,t[s.$$]);const o=()=>{n.props=e.api?.classes?.props};o(),e[s.$$].__watch(["api","classes","props"],o,t[s.$$]);const c=_.FG.create(n);return t[s.__].rootNodes.push(c),(0,s.KO)(c.__render())})()]}}},title:"API - md-states"}),a=_.IA.create(n);return t[s.__].nonRootCompNodes.push(a),(0,s.KO)(a.__render())})());return t[s.__].rootNodes.push(n),n})()]}}},title:void 0,centered:!0}),o=()=>{a.title=n.c?.[0]};o(),n[s.$$].__watch(["c",0],o,t[s.$$]);const c=_._z.create(a);return t[s.__].rootNodes.push(c),(0,s.KO)(c.__render())})()]}}}}),a=i.create(n);return t[s.__].rootNodes.push(a),(0,s.KO)(a.__render())})()]}},3634:(t,e,n)=>{n.d(e,{z_:()=>r});var s=n(7421);const a=()=>"名称",o=()=>"Name",c=t=>"zh_cn"===t?a:o,r=t=>(0,s.t)(c,t)},7393:(t,e,n)=>{n.d(e,{I1:()=>i,r_:()=>r});var s=n(7421);const a=()=>"描述",o=()=>"Description",c=t=>"zh_cn"===t?a:o,r=t=>(0,s.t)(c,t);class i extends s.h${static d=c}}}]);