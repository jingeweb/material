"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[18],{6609:(e,t,o)=>{o.r(t),o.d(t,{PagePopover:()=>d});var n=o(4114),s=o(7421),r=o(7683);var p=o(6488),c=o(8279);class i extends n.wA{constructor(e){super(e),this[n.$$].proxy.isPopShown=!1}}i.template=function(e){const t=e;return[(()=>{const o=(0,n.az)("div",{class:"NRTGCUtA02ZoodzvNGgL"},(0,n.Eh)("p","简单地使用内置 Trigger 触发气泡卡片展示和隐藏："),(0,n.Eh)("p",...(()=>{const t=(0,n.Qb)({[n.__]:{context:e[n.__].context,slots:{default:function(e){return[...(()=>{const t=(0,n.Qb)({[n.__]:{context:e[n.__].context,slots:{default:function(e){return[(0,n.xc)(e,"Hover Me")]}}},class:"md-primary md-raised"}),o=c.z.create(t);return e[n.__].rootNodes.push(o),(0,n.KO)(o.__render())})()]},content:function(e){return[(()=>{const t=(0,n.az)("div",{class:"md-popover-title"},"Title");return e[n.__].rootNodes.push(t),t})(),(()=>{const t=(0,n.az)("div",{class:"md-popover-content"},"Content",(0,n.Eh)("br"),"Content");return e[n.__].rootNodes.push(t),t})()]}}},class:"md-example-popover",trigger:"hover",offset:8}),o=p.J.create(t);return e[n.__].nonRootCompNodes.push(o),(0,n.KO)(o.__render())})(),...(()=>{const t=(0,n.Qb)({[n.__]:{context:e[n.__].context,slots:{default:function(e){return[...(()=>{const t=(0,n.Qb)({[n.__]:{context:e[n.__].context,slots:{default:function(e){return[(0,n.xc)(e,"Click Me")]}}},class:"md-primary md-raised"}),o=c.z.create(t);return e[n.__].rootNodes.push(o),(0,n.KO)(o.__render())})()]},content:function(e){return[(()=>{const t=(0,n.az)("div",{class:"md-popover-title"},"Title");return e[n.__].rootNodes.push(t),t})(),(()=>{const t=(0,n.az)("div",{class:"md-popover-content"},"Content",(0,n.Eh)("br"),"Content");return e[n.__].rootNodes.push(t),t})()]}}},offset:"16",placement:"top",class:"md-example-popover"}),o=p.J.create(t);return e[n.__].nonRootCompNodes.push(o),(0,n.KO)(o.__render())})()),(0,n.Eh)("p","通过父组件里的参数控制气泡的显示和隐藏："),(0,n.Eh)("p",...(()=>{const o=(0,n.Qb)({[n.__]:{context:e[n.__].context,listeners:{"update.active":{fn:function(...e){t.isPopShown=e[0]},opts:null}},slots:{default:function(e){return[...(()=>{const t=(0,n.Qb)({[n.__]:{context:e[n.__].context,slots:{default:function(e){return[(0,n.xc)(e,"Click me to toggle popover")]}}},class:"md-primary md-raised"}),o=c.z.create(t);return e[n.__].rootNodes.push(o),(0,n.KO)(o.__render())})()]},content:function(e){return[(()=>{const t=(0,n.az)("div",{class:"md-popover-title"},"Title");return e[n.__].rootNodes.push(t),t})(),(()=>{const t=(0,n.az)("div",{class:"md-popover-content"},"Content",(0,n.Eh)("br"),"Content");return e[n.__].rootNodes.push(t),t})(),(()=>{const o=(0,n.az)("div",{class:"md-popover-ctrl"},...(()=>{const o=(0,n.Qb)({[n.__]:{context:e[n.__].context,listeners:{click:{fn:function(...e){t.isPopShown=!1},opts:null}},slots:{default:function(e){return[(0,n.xc)(e,"Close")]}}},class:"md-primary"}),s=c.z.create(o);return e[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})());return e[n.__].rootNodes.push(o),o})()]}}},active:void 0,closeWhenOutsideClidk:!1,class:"md-example-popover"}),s=()=>{o.active=t.isPopShown};s(),t[n.$$].__watch(["isPopShown"],s,e[n.$$]);const r=p.J.create(o);return e[n.__].nonRootCompNodes.push(r),(0,n.KO)(r.__render())})(),...(()=>{const o=(0,n.Qb)({[n.__]:{context:e[n.__].context,listeners:{click:{fn:function(...e){t.isPopShown=!t.isPopShown},opts:null}},slots:{default:function(e){return[(()=>{const o=(0,n.Eg)(),s=()=>{(0,n.Hd)(o,t.isPopShown?"hide":"show")};return s(),t[n.$$].__watch(["isPopShown"],s,e[n.$$]),e[n.__].rootNodes.push(o),o})()]}}},class:"md-raised"}),s=c.z.create(o);return e[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})()));return e[n.__].rootNodes.push(o),o})()]};const a={ts:"import './simple.scss';\n\nimport { Attributes, Component } from 'jinge';\n\nimport _tpl from './simple.html';\n\nexport default class ExampleSimplePopover extends Component {\n  static template = _tpl;\n\n  isPopShown: boolean;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.isPopShown = false;\n  }\n}\n",sass:".demo :global {\n  .md-example-popover > .content {\n    min-width: 160px;\n  }\n}\n",html:'\x3c!-- import style from \'./simple.scss\' --\x3e\n<div :class="style.demo">\n  <p>简单地使用内置 Trigger 触发气泡卡片展示和隐藏：</p>\n  <p>\n    <md-popover class="md-example-popover" trigger="hover" e:offset="8">\n      <md-button class="md-primary md-raised" slot-pass:default>Hover Me</md-button>\n      <_slot slot-pass:content>\n        <div class="md-popover-title">Title</div>\n        <div class="md-popover-content">Content<br/>Content</div>\n      </_slot>\n    </md-popover>\n    <md-popover offset="16" placement="top" class="md-example-popover">\n      <md-button class="md-primary md-raised" slot-pass:default>Click Me</md-button>\n      <_slot slot-pass:content>\n        <div class="md-popover-title">Title</div>\n        <div class="md-popover-content">Content<br/>Content</div>\n      </_slot>\n    </md-popover>\n  </p>\n  <p>\n    通过父组件里的参数控制气泡的显示和隐藏：\n  </p>\n  <p>\n    <md-popover\n      e:active="isPopShown"\n      e:closeWhenOutsideClidk="false"\n      on:update.active="isPopShown = $args[0]"\n      class="md-example-popover"\n    >\n      <md-button class="md-primary md-raised" slot-pass:default>Click me to toggle popover</md-button>\n      <_slot slot-pass:content>\n        <div class="md-popover-title">Title</div>\n        <div class="md-popover-content">Content<br/>Content</div>\n        <div class="md-popover-ctrl">\n          <md-button on:click="isPopShown = false" class="md-primary">Close</md-button>\n        </div>\n      </_slot>\n    </md-popover>\n    <md-button on:click="isPopShown = !isPopShown" class="md-raised">\n      ${isPopShown ? \'hide\' : \'show\'}\n    </md-button>\n  </p>\n</div>'};class d extends n.wA{constructor(e){super(e);const t=this[n.$$].proxy;(0,s.v7)(t,(()=>{t.api=(0,n.vm)({props:{headings:["名称","描述","默认值"],props:[{name:"active",type:"Boolean",description:"控制气泡卡片是否展示。外部父组件可通过此属性手动控制。",defaults:"false"},{name:"trigger",type:"String",description:"气泡卡片的触发方式，包括 click, hover 和 none。如果指定为 none，代表气泡卡片不自动绑定触发元素，完全靠 active 属性控制。",defaults:"click"},{name:"delay",type:"Number",description:"卡片在延迟一定的时间后显示，单位为毫秒。",defaults:"0"},{name:"placement",type:"String",description:"卡片显示时的相对位置，参看 Popper.js 的 placement 概念。",defaults:"bottom-start"},{name:"offset",type:"Number/String",description:"卡片显示时的偏移量，参看 Popper.js 的 offset 概念。",defaults:"0"},{name:"className",type:"String",description:"附加在卡片的 DOM 上的 html class。",defaults:"an empty string"},{name:"transition",type:"String",description:"卡片显示和隐藏时的 css 动画。",defaults:"md-popover"},{name:"closeWhenOutsideClidk",type:"Boolean",description:"点击卡片之外的其它区域时，是否隐藏卡片。",defaults:"true"},{name:"_popperOptions",type:"Object",description:"Popper.js 的更多自定义高级配置。",defaults:"null"}]},classes:{headings:["Name","Description"],props:[{name:"md-popover-title",description:"用于控制气泡里面顶部的标题样式。"},{name:"md-popover-content",description:"控制气泡里面中间的内容样式。"},{name:"md-popover-ctrl",description:"控制气泡里面底部的按钮区域样式。"}]},events:{headings:["名称","描述","参数"],props:[{name:"update.active",description:"气泡显示或隐藏时的事件",value:"isActive"}]}})}),!0),t._examples={simple:{component:i,source:a}}}}d.template=function(e){const t=e;return[...(()=>{const o=(0,n.Qb)({[n.__]:{context:e[n.__].context,slots:{default:function(e){return[(()=>{const t=(0,n.az)("div",{class:"page-container-section"},(0,n.Eh)("p","当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。点击/鼠标移入元素，弹出气泡式的卡片浮层。"),(0,n.Eh)("p","和",(0,n.Eh)("code","Tooltip"),"的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。"));return e[n.__].rootNodes.push(t),t})(),(()=>{const o=(0,n.az)("div",{class:"page-container-section"},(0,n.Eh)("h2","气泡卡片"),...(()=>{const o=(0,n.Qb)({[n.__]:{context:e[n.__].context},title:"Popover",example:t._examples?.simple}),s=r.AA.create(o);return e[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const o=(0,n.Qb)({[n.__]:{context:e[n.__].context,slots:{props:function(e){return[...(()=>{const o=(0,n.Qb)({[n.__]:{context:e[n.__].context},headings:void 0,props:void 0}),s=()=>{o.headings=t.api?.props?.headings};s(),t[n.$$].__watch(["api","props","headings"],s,e[n.$$]);const p=()=>{o.props=t.api?.props?.props};p(),t[n.$$].__watch(["api","props","props"],p,e[n.$$]);const c=r.FG.create(o);return e[n.__].rootNodes.push(c),(0,n.KO)(c.__render())})()]},classes:function(e){return[...(()=>{const o=(0,n.Qb)({[n.__]:{context:e[n.__].context},headings:void 0,props:void 0}),s=()=>{o.headings=t.api?.classes?.headings};s(),t[n.$$].__watch(["api","classes","headings"],s,e[n.$$]);const p=()=>{o.props=t.api?.classes?.props};p(),t[n.$$].__watch(["api","classes","props"],p,e[n.$$]);const c=r.FG.create(o);return e[n.__].rootNodes.push(c),(0,n.KO)(c.__render())})()]},events:function(e){return[...(()=>{const o=(0,n.Qb)({[n.__]:{context:e[n.__].context},headings:void 0,props:void 0}),s=()=>{o.headings=t.api?.events?.headings};s(),t[n.$$].__watch(["api","events","headings"],s,e[n.$$]);const p=()=>{o.props=t.api?.events?.props};p(),t[n.$$].__watch(["api","events","props"],p,e[n.$$]);const c=r.FG.create(o);return e[n.__].rootNodes.push(c),(0,n.KO)(c.__render())})()]}}},title:"API - md-popover"}),s=r.IA.create(o);return e[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})());return e[n.__].rootNodes.push(o),o})()]}}},centered:!0,title:"气泡卡片"}),s=r._z.create(o);return e[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}}]);