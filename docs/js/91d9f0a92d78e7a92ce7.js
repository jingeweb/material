"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[3740],{3703:(e,t,n)=>{n.r(t),n.d(t,{PageChips:()=>Dt});var o=n(6116),s=n(3037);const c=()=>"纸片",r=()=>"Clips",a=e=>"zh_cn"===e?c:r;class i extends s.D7{static d=[a]}const p=()=>"纸片以小块的形式表示复杂的实体，例如触点。它们可以用作用户创建任意项目（例如类别或标签）的方式。",l=()=>"Chips represent complex entities in small blocks, such as a contact. They can be used as a way for a user to create arbitrary items, like categories or tags.",d=e=>"zh_cn"===e?p:l;class _ extends s.h${static d=d}const h=()=>"独立纸片",u=()=>"Standalone Chip",m=e=>"zh_cn"===e?h:u;class x extends s.h${static d=m}const f=()=>"一个纸片可以独立使用，而无需与其它纸片组合。它可以像徽章或应用程序中的实体类别一样使用。同时可以指定纸片是否可以删除和点击：",g=()=>"A chip can be used as standalone, without any connection with another chip. It can be used like a badge or a category of an entity in your application. You can specify if your chip can be deletable and clickable:",v=e=>"zh_cn"===e?f:g;class b extends s.h${static d=v}const $=()=>"可编辑的纸片集",C=()=>"Editable Chips",y=e=>"zh_cn"===e?$:C;class N extends s.h${static d=y}const w=()=>"有时我们需要在屏幕上编辑项目集，例如，在编辑标签时，用户可能需要删除/添加标签。在这种情况下，您可以使用可编辑的纸片集：",A=()=>"Sometimes we need to edit the set of items on screen, for example, when editing tags, the user may need to remove/add tags. In this case you can use the editable chips, that is the default behaviour:",z=e=>"zh_cn"===e?w:A;class k extends s.h${static d=z}const O=()=>"只读模式",Q=()=>"Readonly",K=e=>"zh_cn"===e?O:Q;class R extends s.h${static d=K}const E=function(e){return[(0,o.xc)(e,"对于一个具有标签的实体，可能需要将这些标签显示在同一行中，但不允许用户对其进行编辑。这种情况下可以使用带有静态选项的"),(()=>{const t=(0,o.Eh)("code","md-chips");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"组件来实现：")]},j=function(e){return[(0,o.xc)(e,"Let's think in an entity that have tags. Sometimes you might need to show all of them in a single row, but not allow the user to edit them. You can achieve that using the"),(()=>{const t=(0,o.Eh)("code","md-chips");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"component, with a static option:")]},T=e=>"zh_cn"===e?E:j;class D extends s.iH{static d=T}const S=()=>"自定义模板",M=()=>"Custom Template",P=e=>"zh_cn"===e?S:M;class I extends s.h${static d=P}const H=()=>"有时需要显示有关纸片的丰富信息，希望为纸片本身可以支持自定义 HTML 结构。可以通过指定自定义的 slot 来实现：",Y=()=>"Sometimes we need to show more information about a chip, so we want to have a custom HTML structure for the chip itself. To create that scenario we can use the template scope. In this case all you have to do is to create a slot with your custom template and you're good to go. Take a look at this example:",J=e=>"zh_cn"===e?H:Y;class U extends s.h${static d=J}const B=()=>"重复检测",F=()=>"Duplicated Chip",G=e=>"zh_cn"===e?B:F;class L extends s.h${static d=G}const W=()=>"如果待插入的新纸片和现有纸片有重复，则无法插入。可以自定义重复纸片的反馈样式：",q=()=>"Chips would reject insertion if a chip is duplicated. You can customize feedback style of the duplicated chip:",V=e=>"zh_cn"===e?W:q;class X extends s.h${static d=V}const Z=()=>"多种颜色",ee=()=>"Hue Colors",te=e=>"zh_cn"===e?Z:ee;class ne extends s.h${static d=te}const oe=function(e){return[(0,o.xc)(e,"可以使用"),(()=>{const t=(0,o.Eh)("code","md-primary");return e[o.__].rootNodes.push(t),t})(),(0,o.xc)(e,"或其它方式赋予纸片不同颜色：")]},se=function(e){return[(0,o.xc)(e,"You can always use the hue modifiers in single chips:")]},ce=e=>"zh_cn"===e?oe:se;class re extends s.iH{static d=ce}var ae=n(8813);function ie(e){const t=e;return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){const n=e;return[...(()=>{const s=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("p",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=_.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()));return e[o.__].rootNodes.push(t),t})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=x.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),(0,o.Eh)("p",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=b.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},title:"Single",example:t._examples?.single}),s=ae.AA.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{props:function(e){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=t.api?.chip?.props?.headings};s(),t[o.$$].__watch(["api","chip","props","headings"],s,e[o.$$]);const c=()=>{n.props=t.api?.chip?.props?.props};c(),t[o.$$].__watch(["api","chip","props","props"],c,e[o.$$]);const r=ae.FG.create(n);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]},events:function(e){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=t.api?.chip?.events?.headings};s(),t[o.$$].__watch(["api","chip","events","headings"],s,e[o.$$]);const c=()=>{n.props=t.api?.chip?.events?.props};c(),t[o.$$].__watch(["api","chip","events","props"],c,e[o.$$]);const r=ae.FG.create(n);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]}}},title:"API - md-chip"}),s=ae.IA.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return e[o.__].rootNodes.push(n),n})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=N.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),(0,o.Eh)("p",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=k.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},title:"Editable",example:t._examples?.editable}),s=ae.AA.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return e[o.__].rootNodes.push(n),n})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=R.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),(0,o.Eh)("p",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=D.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},title:"Static",example:t._examples?.static}),s=ae.AA.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return e[o.__].rootNodes.push(n),n})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=I.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),(0,o.Eh)("p",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=U.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},title:"Scoped Slot",example:t._examples?.template}),s=ae.AA.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return e[o.__].rootNodes.push(n),n})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=L.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),(0,o.Eh)("p",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=X.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},title:"Duplicated Feedback",example:t._examples?.duplicated}),s=ae.AA.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return e[o.__].rootNodes.push(n),n})(),(()=>{const n=(0,o.az)("div",{class:"page-container-section"},(0,o.Eh)("h2",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=ne.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),(0,o.Eh)("p",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context}}),n=re.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})()),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},title:"Themed Chips",example:t._examples?.theme}),s=ae.AA.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{props:function(e){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=t.api?.chips?.props?.headings};s(),t[o.$$].__watch(["api","chips","props","headings"],s,e[o.$$]);const c=()=>{n.props=t.api?.chips?.props?.props};c(),t[o.$$].__watch(["api","chips","props","props"],c,e[o.$$]);const r=ae.FG.create(n);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]},events:function(e){return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},headings:void 0,props:void 0}),s=()=>{n.headings=t.api?.chips?.events?.headings};s(),t[o.$$].__watch(["api","chips","events","headings"],s,e[o.$$]);const c=()=>{n.props=t.api?.chips?.events?.props};c(),t[o.$$].__watch(["api","chips","events","props"],c,e[o.$$]);const r=ae.FG.create(n);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]}}},title:"API - md-chips"}),s=ae.IA.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})());return e[o.__].rootNodes.push(n),n})()]}}},title:void 0,centered:!0}),c=()=>{s.title=n.c?.[0]};c(),n[o.$$].__watch(["c",0],c,e[o.$$]);const r=ae._z.create(s);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]}}}}),s=i.create(n);return e[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}var pe=n(3634),le=n(7393),de=n(1964);const _e=()=>"启用/禁用纸片上的点击动作。",he=()=>"Enables/Disables the click action in the chip.",ue=e=>"zh_cn"===e?_e:he,me=()=>"创建一个可以执行删除操作的纸片。",xe=()=>"Creates a chip that can hold a delete action. Useful when editing a chip series, like tags or categories.",fe=e=>"zh_cn"===e?me:xe,ge=e=>(0,s.t)(fe,e),ve=()=>"指定是否禁用纸片（包括点击和删除）。",be=()=>"Enables/Disables the chip to be clickable of deletable.",$e=e=>"zh_cn"===e?ve:be,Ce=e=>(0,s.t)($e,e);var ye=n(5847);const Ne=()=>"鼠标单击删除图标后触发，仅在 deletable 属性为 true 时才有效。",we=()=>"Triggered after a mouse click on delete icon. Only fired when md-deletable is true.",Ae=e=>"zh_cn"===e?Ne:we,ze=e=>(0,s.t)(Ae,e),ke=()=>"指定全部的纸片。除非您指定自定义模板，否则必须是字符串数组。",Oe=()=>"The content to be displayed as chips. Need to be a array of strings, unless you specify a custom template.",Qe=e=>"zh_cn"===e?ke:Oe,Ke=e=>(0,s.t)(Qe,e),Re=()=>"唯一标识，如果为 null，将自动创建。",Ee=()=>"The input id. If null, it will be created automatically.",je=e=>"zh_cn"===e?Re:Ee,Te=e=>(0,s.t)(je,e),De=()=>"输入框的类型",Se=()=>"The input type. Cannot be file.",Me=e=>"zh_cn"===e?De:Se,Pe=e=>(0,s.t)(Me,e),Ie=()=>"输入框的占位符，可用于向用户显示将插入哪种数据类型。",He=()=>"The input placeholder. It is useful to show to the user which type of data will be inserted.",Ye=e=>"zh_cn"===e?Ie:He,Je=e=>(0,s.t)(Ye,e),Ue=()=>"创建一个不可编辑的纸片集，可以用在显示详细信息的页面。",Be=()=>"Creates a non-editable chips. Useful to show inside a details page.",Fe=e=>"zh_cn"===e?Ue:Be,Ge=e=>(0,s.t)(Fe,e),Le=()=>"当纸片集的数量超过限定时，不允许再创建纸片。",We=()=>"Blocks the chips to create items above the limit.",qe=e=>"zh_cn"===e?Le:We,Ve=e=>(0,s.t)(qe,e),Xe=()=>"更改输入值时始终检查纸片是否重复，或者仅在插入时检查纸片是否重复",Ze=()=>"Always check if there is a duplicated chip while changing the input value, or check it only on insertion",et=e=>"zh_cn"===e?Xe:Ze,tt=e=>(0,s.t)(et,e),nt=()=>"纸片集发生变化（增删）时触发。",ot=()=>"Triggered when chips change, inserted or deleted.",st=e=>"zh_cn"===e?nt:ot,ct=e=>(0,s.t)(st,e),rt=()=>"鼠标单击纸片的删除图标后触发。",at=()=>"Triggered after a mouse click on delete icon of a chip.",it=e=>"zh_cn"===e?rt:at,pt=e=>(0,s.t)(it,e),lt=()=>"鼠标点击纸片时触发。",dt=()=>"Triggered after a mouse click on a single chip.",_t=e=>"zh_cn"===e?lt:dt,ht=e=>(0,s.t)(_t,e),ut=()=>"插入纸片后触发",mt=()=>"Triggered after a chip inserted.",xt=e=>"zh_cn"===e?ut:mt,ft=e=>(0,s.t)(xt,e),gt=()=>"新插入的 chip",vt=()=>"The last inserted chip",bt=e=>"zh_cn"===e?gt:vt,$t=e=>(0,s.t)(bt,e);var Ct=n(2287);class yt extends o.wA{log(e){console.log(e)}}yt.template=function(e){const t=e;return[(()=>{const n=(0,o.Eh)("div",...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(0,o.xc)(e,"Static")]}}}}),n=Ct.A.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{delete:{fn:function(...e){t.log(...e)},opts:null}},slots:{default:function(e){return[(0,o.xc)(e,"Deletable")]}}},class:"md-primary",deletable:!0}),s=Ct.A.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{click:{fn:function(...e){t.log(...e)},opts:null}},slots:{default:function(e){return[(0,o.xc)(e,"Clickable")]}}},class:"md-accent",clickable:!0}),s=Ct.A.create(n);return e[o.__].nonRootCompNodes.push(s),(0,o.KO)(s.__render())})(),...(()=>{const t=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(0,o.xc)(e,"Disabled")]}}},disabled:!0}),n=Ct.A.create(t);return e[o.__].nonRootCompNodes.push(n),(0,o.KO)(n.__render())})());return e[o.__].rootNodes.push(n),n})()]};const Nt={ts:"import { Component } from 'jinge';\n\nimport _tpl from './single.html';\n\nexport default class ExampleClipsSingle extends Component {\n  static template = _tpl;\n\n  log(msg: unknown) {\n    // eslint-disable-next-line no-console\n    console.log(msg);\n  }\n}\n",sass:"",html:'<div>\n  <md-chip>Static</md-chip>\n  <md-chip class="md-primary" deletable on:delete="log">Deletable</md-chip>\n  <md-chip class="md-accent" clickable on:click="log">Clickable</md-chip>\n  <md-chip disabled>Disabled</md-chip>\n</div>'};function wt(e){const t=e;return[(()=>{const n=(0,o.Eh)("div",...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{change:{fn:function(...e){t.log(t.fruits)},opts:null}}},value:void 0,placeholder:"Add fruit..."}),s=()=>{n.value=t.fruits};s(),t[o.$$].__watch(["fruits"],s,e[o.$$]);const c=Ct.c.create(n);return e[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})());return e[o.__].rootNodes.push(n),n})()]}class At extends o.wA{constructor(e){super(e),this[o.$$].proxy.fruits=(0,o.vm)(["Orange","Apple"])}static get template(){return wt}log(e){console.log(e)}}const zt={ts:"import { Attributes, Component, vm } from 'jinge';\n\nimport _tpl from './editable.html';\n\nexport default class ExampleClipsEditable extends Component {\n  static get template() {\n    return _tpl;\n  }\n\n  fruits: string[];\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.fruits = vm(['Orange', 'Apple']);\n  }\n\n  log(msg: unknown) {\n    // eslint-disable-next-line no-console\n    console.log(msg);\n  }\n}\n",sass:"",html:'<div>\n  <md-chips e:value="fruits" on:change="log(fruits)" placeholder="Add fruit..."></md-chips>\n</div>'};class kt extends o.wA{constructor(e){super(e),this[o.$$].proxy.cities=(0,o.vm)(["Chengdu","Shanghai","New York","Tokyo"])}}kt.template=function(e){const t=e;return[(()=>{const n=(0,o.Eh)("div",...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context},value:void 0,static:!0}),s=()=>{n.value=t.cities};s(),t[o.$$].__watch(["cities"],s,e[o.$$]);const c=Ct.c.create(n);return e[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})());return e[o.__].rootNodes.push(n),n})()]};const Ot={ts:"import { Attributes, Component, vm } from 'jinge';\n\nimport _tpl from './static.html';\n\nexport default class ExampleClipsStatic extends Component {\n  static template = _tpl;\n\n  cities: string[];\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.cities = vm(['Chengdu', 'Shanghai', 'New York', 'Tokyo']);\n  }\n}\n",sass:"",html:'<div>\n  <md-chips e:value="cities" static></md-chips>\n</div>'};class Qt extends o.wA{constructor(e){super(e);const t=this[o.$$].proxy;t.currentProject="Jinge Material",t.projects=(0,o.vm)(["Jinge Material","Ant Design","Angular Material"])}}Qt.template=function(e){const t=e;return[(()=>{const n=(0,o.Eh)("div",...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,listeners:{"chip-clicked":{fn:function(...e){t.currentProject=e[0]},opts:null}},slots:{chip:function(e){const n=e;return[(()=>{const t=(0,o.Eg)(),s=()=>{(0,o.Hd)(t,n.chip)};return s(),n[o.$$].__watch(["chip"],s,e[o.$$]),e[o.__].rootNodes.push(t),t})(),...(()=>{const s=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.Eh)("small","(Marcos Moura)");return e[o.__].rootNodes.push(t),t})()]}}},expect:void 0}),c=()=>{s.expect=n.chip===t.currentProject};c(),n[o.$$].__watch(["chip"],c,e[o.$$]),t[o.$$].__watch(["currentProject"],c,e[o.$$]);const r=o.uj.create(s);return e[o.__].rootNodes.push(r),(0,o.KO)(r.__render())})()]},default:function(e){return[(()=>{const t=(0,o.az)("div",{class:"md-helper-text"},"Up to 5 projects");return e[o.__].rootNodes.push(t),t})()]}}},value:void 0,limit:"5",placeholder:"Add project..."}),s=()=>{n.value=t.projects};s(),t[o.$$].__watch(["projects"],s,e[o.$$]);const c=Ct.c.create(n);return e[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})());return e[o.__].rootNodes.push(n),n})()]};const Kt={ts:"import { Attributes, Component, vm } from 'jinge';\n\nimport _tpl from './template.html';\n\nexport default class ExampleClipsTemplate extends Component {\n  static template = _tpl;\n\n  currentProject: string;\n  projects: string[];\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.currentProject = 'Jinge Material';\n    this.projects = vm(['Jinge Material', 'Ant Design', 'Angular Material']);\n  }\n}\n",sass:"",html:'<div>\n  <md-chips on:chip-clicked="currentProject = $args[0]" e:value="projects" limit="5" placeholder="Add project...">\n    <_slot slot-pass:chip vm-use:chip>\n      ${chip}\n      <if e:expect="chip === currentProject">\n      <small>(Marcos Moura)</small>\n      </if>\n    </_slot>\n    <div slot-pass:default class="md-helper-text">Up to 5 projects</div>\n  </md-chips>\n</div>'};class Rt extends o.wA{constructor(e){super(e),this[o.$$].proxy.chips=(0,o.vm)(["Pop","Rock","Jazz","Metal"])}log(e){console.log(e)}}Rt.template=function(e){const t=e;return[(()=>{const n=(0,o.az)("div",{class:"g1MR2Jess9M5WLRfcikr"},...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.az)("div",{class:"md-helper-text"},"Default");return e[o.__].rootNodes.push(t),t})()]}}},value:void 0,class:"md-primary",placeholder:"Add genre..."}),s=()=>{n.value=t.chips};s(),t[o.$$].__watch(["chips"],s,e[o.$$]);const c=Ct.c.create(n);return e[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.az)("div",{class:"md-helper-text"},"Shake duplicated chip on insertion");return e[o.__].rootNodes.push(t),t})()]}}},value:void 0,class:"md-primary shake-on-error",placeholder:"Add genre..."}),s=()=>{n.value=t.chips};s(),t[o.$$].__watch(["chips"],s,e[o.$$]);const c=Ct.c.create(n);return e[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const t=(0,o.az)("div",{class:"md-helper-text"},"Always pulse duplicated chip");return e[o.__].rootNodes.push(t),t})()]}}},value:void 0,class:"md-primary pulse-on-error",placeholder:"Add genre...",checkDuplicated:!0}),s=()=>{n.value=t.chips};s(),t[o.$$].__watch(["chips"],s,e[o.$$]);const c=Ct.c.create(n);return e[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})());return e[o.__].rootNodes.push(n),n})()]};const Et={ts:"import { Attributes, Component, vm } from 'jinge';\n\nimport _tpl from './duplicated.html';\n\nexport default class ExampleClipsDuplicated extends Component {\n  static template = _tpl;\n\n  chips: string[];\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.chips = vm(['Pop', 'Rock', 'Jazz', 'Metal']);\n  }\n\n  log(msg: unknown) {\n    // eslint-disable-next-line no-console\n    console.log(msg);\n  }\n}\n",sass:".demo {\n  :global {\n    .shake-on-error .md-duplicated {\n      animation-name: shake;\n      animation-duration: 0.5s;\n    }\n\n    @keyframes shake {\n      0% {\n        transform: translate(15px);\n      }\n\n      20% {\n        transform: translate(-15px);\n      }\n\n      40% {\n        transform: translate(7px);\n      }\n\n      60% {\n        transform: translate(-7px);\n      }\n\n      80% {\n        transform: translate(3px);\n      }\n\n      100% {\n        transform: translate(0);\n      }\n    }\n\n    .pulse-on-error .md-duplicated {\n      animation-name: pulse;\n      animation-duration: 0.5s;\n      animation-iteration-count: infinite;\n      animation-direction: alternate;\n      animation-timing-function: ease-in-out;\n    }\n\n    @keyframes pulse {\n      0% {\n        transform: scale(1.1, 1.1);\n      }\n\n      100% {\n        transform: scale(0.9, 0.9);\n      }\n    }\n  }\n}\n",html:'\x3c!-- import style from \'./duplicated.scss\' --\x3e\n<div :class="style.demo">\n  <md-chips class="md-primary" e:value="chips" placeholder="Add genre...">\n    <div class="md-helper-text">Default</div>\n  </md-chips>\n  <md-chips class="md-primary shake-on-error" e:value="chips" placeholder="Add genre...">\n    <div class="md-helper-text">Shake duplicated chip on insertion</div>\n  </md-chips>\n  <md-chips class="md-primary pulse-on-error" e:value="chips" placeholder="Add genre..." checkDuplicated>\n    <div class="md-helper-text">Always pulse duplicated chip</div>\n  </md-chips>\n</div>'};class jt extends o.wA{constructor(e){super(e);const t=this[o.$$].proxy;t.primary=(0,o.vm)(["Orange","Apple","Pineapple"]),t.accent=(0,o.vm)(["Cat","Dog","Rabbit"])}}jt.template=function(e){const t=e;return[(()=>{const n=(0,o.Eh)("div",...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){const t=e;return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const n=(0,o.Eg)(),s=()=>{(0,o.Hd)(n,t.each)};return s(),t[o.$$].__watch(["each"],s,e[o.$$]),e[o.__].rootNodes.push(n),n})()]}}},class:"md-primary"}),s=Ct.A.create(n);return e[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}}},loop:void 0}),s=()=>{n.loop=t.primary};s(),t[o.$$].__watch(["primary"],s,e[o.$$]);const c=o.YQ.create(n);return e[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})(),...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){const t=e;return[...(()=>{const n=(0,o.Qb)({[o.__]:{context:e[o.__].context,slots:{default:function(e){return[(()=>{const n=(0,o.Eg)(),s=()=>{(0,o.Hd)(n,t.each)};return s(),t[o.$$].__watch(["each"],s,e[o.$$]),e[o.__].rootNodes.push(n),n})()]}}},class:"md-accent",clickable:!0}),s=Ct.A.create(n);return e[o.__].rootNodes.push(s),(0,o.KO)(s.__render())})()]}}},loop:void 0}),s=()=>{n.loop=t.accent};s(),t[o.$$].__watch(["accent"],s,e[o.$$]);const c=o.YQ.create(n);return e[o.__].nonRootCompNodes.push(c),(0,o.KO)(c.__render())})());return e[o.__].rootNodes.push(n),n})()]};const Tt={ts:"import { Attributes, Component, vm } from 'jinge';\n\nimport _tpl from './theme.html';\n\nexport default class ExampleClipsTheme extends Component {\n  static template = _tpl;\n\n  primary: string[];\n  accent: string[];\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.primary = vm(['Orange', 'Apple', 'Pineapple']);\n    this.accent = vm(['Cat', 'Dog', 'Rabbit']);\n  }\n}\n",sass:".demo {\n  :global {\n    .md-chips {\n      margin-bottom: 24px;\n    }\n\n    small {\n      font-weight: 500;\n    }\n  }\n}\n",html:'<div>\n  <for e:loop="primary" vm:each>\n  <md-chip class="md-primary">${ each }</md-chip>\n  </for>\n  <for e:loop="accent" vm:each>\n  <md-chip class="md-accent" clickable>${ each }</md-chip>  \n  </for>\n</div>'};class Dt extends o.wA{constructor(e){super(e);const t=this[o.$$].proxy;(0,s.v7)(t,(()=>{t.api=(0,o.vm)({chip:{props:{headings:[(0,pe.z_)(),(0,le.r_)(),(0,de.bh)()],props:[{name:"clickable",type:"Boolean",description:(0,s.t)(ue,void 0),defaults:"false"},{name:"deletable",type:"Boolean",description:ge(),defaults:"false"},{name:"disabled",type:"Boolean",description:Ce(),defaults:"false"}]},events:{headings:[(0,pe.z_)(),(0,le.r_)(),(0,ye.Ux)()],props:[{name:"delete",description:ze(),value:"$event"}]}},chips:{props:{headings:[(0,pe.z_)(),(0,le.r_)(),(0,de.bh)()],props:[{name:"value",type:"Array",description:Ke(),defaults:"[]"},{name:"id",type:"String",description:Te(),defaults:"null"},{name:"inputType",type:"String",description:Pe(),defaults:"text"},{name:"placeholder",type:"String",description:Je(),defaults:"null"},{name:"static",type:"Boolean",description:Ge(),defaults:"false"},{name:"limit",type:"Number",description:Ve(),defaults:"false"},{name:"checkDuplicated",type:"Boolean",description:tt(),defaults:"false"}]},events:{headings:[(0,pe.z_)(),(0,le.r_)(),(0,ye.Ux)()],props:[{name:"change",description:ct()},{name:"delete",description:pt(),value:"chip, index"},{name:"chipClicked",description:ht(),value:"chip, index"},{name:"insert",description:ft(),value:$t()}]}}})}),!0),t._examples={single:{component:yt,source:Nt},editable:{component:At,source:zt},static:{component:kt,source:Ot},template:{component:Qt,source:Kt},duplicated:{component:Rt,source:Et},theme:{component:jt,source:Tt}}}static get template(){return ie}}},5847:(e,t,n)=>{n.d(t,{Ux:()=>a});var o=n(3037);const s=()=>"参数",c=()=>"Parameters",r=e=>"zh_cn"===e?s:c,a=e=>(0,o.t)(r,e)},3634:(e,t,n)=>{n.d(t,{z_:()=>a});var o=n(3037);const s=()=>"名称",c=()=>"Name",r=e=>"zh_cn"===e?s:c,a=e=>(0,o.t)(r,e)},7393:(e,t,n)=>{n.d(t,{I1:()=>i,r_:()=>a});var o=n(3037);const s=()=>"描述",c=()=>"Description",r=e=>"zh_cn"===e?s:c,a=e=>(0,o.t)(r,e);class i extends o.h${static d=r}},1964:(e,t,n)=>{n.d(t,{bh:()=>a});var o=n(3037);const s=()=>"默认值",c=()=>"Default",r=e=>"zh_cn"===e?s:c,a=e=>(0,o.t)(r,e)}}]);