"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[7698],{5115:(t,e,s)=>{s.r(e),s.d(e,{PageTabs:()=>C});var n=s(4114),o=s(7421),a=s(7683),r=s(4707),_=s(8279),c=s(5303);const i=new r.LX("<md-toolbar>","elevation",r.Pb),d=Symbol("tabs_provider"),l=[].indexOf;class u extends n.wA{constructor(t){t.elevation=Number(t.elevation||0),i.assert(t),super(t);const e=this[n.$$].proxy,s=()=>{e.activeTab=t.activeTab||0};s(),t[n.$$].__watch("activeTab",s);const o=()=>{e.alignment=t.alignment||"left"};o(),t[n.$$].__watch("alignment",o);const a=()=>{e.elevation=t.elevation};a(),t[n.$$].__watch("elevation",a);const r=()=>{e.dynamicHeight=t.dynamicHeight};r(),t[n.$$].__watch("dynamicHeight",r),e.noTransition=!0,e._syncRoute=0,e._activeEl=null,e._rod=null,e._bed=null,e._syncImm=0,e.hasContent=!0,e.contentStyles=null,e.containerStyles=null,e.items=(0,n.vm)([]),e.__setContext(d,e)}get activeTab(){return this._activeTab}set activeTab(t){this._activeTab!==t&&(this._activeTab=t,this.__updateIfNeed())}__afterRender(){if(this.hasContent=this.items.some((t=>t._hasContent)),this.items.length>0&&this.items[n.$$].__notify("length",!0),0===this._syncRoute)this._update(!1);else{const t=this.__getContext("router");if(!t)throw new Error("syncRoute attribute is true, but jinge-router not found.");this._bed=t.afterEach((()=>{this._syncImm=(0,n.xS)((()=>{this._sync()}))})),this._syncImm=(0,n.xS)((()=>{this._sync()}))}setTimeout((()=>{this.noTransition=!1,this._setupObservers()}),100)}__beforeDestroy(){this._syncImm>0&&(0,n.Ag)(this._syncImm),this._syncRoute>0&&this._bed(),this._rod&&this._rod()}_setupObservers(){this._rod=(0,r.Sh)(this.__firstDOM.querySelector(".md-tabs-content"),{childList:!0,characterData:!0,subtree:!0},(()=>{this._reCalc()})),this.__domAddListener(window,"resize",this._reCalc)}_sync(t){this._syncImm=0;const e=this.__getRef("nav"),s=(0,n.hj)(t),o=e.querySelector(".md-tab-nav-button"+(s?`:nth-child(${t+1})`:".md-active"));this._activeEl!==o&&(this._activeEl=o,s||(this._activeTab=o?l.call(e.children,o):-1),this._reCalc())}_update(t=!0){(0,n.hj)(this._activeTab)||(this._activeTab=this.items.findIndex((t=>t.id===this._activeTab))),this._activeEl=this.__getRef("nav").querySelector(".md-tab-nav-button.md-active"),this._setActive(this._activeTab,t)}_add(t){(this._syncRoute>0&&!t.to||t.to&&this._syncRoute!==this.items.length)&&console.warn('<md-tabs>: if one <md-tab> has "to" attribute, all tabs must also have "to" attribute.'),t.to&&this._syncRoute++,this.items.push(t)}_remove(t){const e=this.items.indexOf(t);this.items.splice(e,1)}_active(t){this._syncRoute>0||this._activeTab===t||(this._activeTab=t,this._setActive(t))}_setActive(t,e=!0){if(!(t<0||t>=this.items.length)){for(let e=0;e<this.items.length;e++)this.items[e].isActive=e===t;this._syncImm=(0,n.xS)((()=>this._sync(this._activeTab))),e&&this.__notify("changed",t,this.items[t])}}_reCalc(){this._calcIndicator(),this._calcTab()}_calcIndicator(){const t=this.__getRef("indicator");if(!this._activeEl||!t)return void(this.indicatorStyles="left: 100%; right: 100%");const e=this._activeEl.offsetWidth,s=this._activeEl.offsetLeft,n=t.offsetLeft;this.indicatorClass=n<s?"md-tabs-indicator-right":"md-tabs-indicator-left",this.indicatorStyles=`left: ${s}px; right: calc(100% - ${e+s}px);`}_calcTab(){if(!this.hasContent)return void(this.contentStyles="height: 0");const t=this.__firstDOM.querySelector(`.md-tab:nth-child(${this._activeTab+1})`);this.contentStyles=`height: ${t?`${t.offsetHeight}px`:0}`,this.containerStyles=`transform: translate3D(${100*-this._activeTab}%, 0, 0)`}}u.template=function(t){const e=t;return[(()=>{const s=(0,n.Eh)("div",(()=>{const s=(0,n.Eh)("div",...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){const s=t;return[...(()=>{const o=(0,n.Qb)({[n.__]:{context:t[n.__].context,listeners:{click:{fn:function(...t){e._active(s.index)},opts:null}},slots:{default:function(t){return[...(()=>{const o=e[n.__].slots,a=o&&o.tab?o.tab:function(t){return[(()=>{const e=(0,n.Eg)(),o=()=>{(0,n.Hd)(e,s.each?.label)};return o(),s[n.$$].__watch(["each","label"],o,t[n.$$]),t[n.__].rootNodes.push(e),e})()]},r=(0,n.Qb)({tab:null,[n.__]:{context:t[n.__].context,slots:{default:a||n.qO}}}),_=()=>{r.tab=s.each};_();const c=new n.gU(r,["tab"])[n.$$].proxy;return s[n.$$].__watch(["each"],_,c[n.$$]),t[n.__].rootNodes.push(c),(0,n.KO)(c.__render())})()]}}},class:void 0,disabled:void 0,href:void 0,to:void 0,active:"md-active"}),a=()=>{o.class=(0,n.SK)((0,n.vm)(["md-tab-nav-button",s.each?.class,0===e._syncRoute&&s.each?.isActive?"md-active":""]))};a(),s[n.$$].__watch(["each","class"],a,t[n.$$]),s[n.$$].__watch(["each","isActive"],a,t[n.$$]);const r=()=>{o.disabled=s.each?.disabled};r(),s[n.$$].__watch(["each","disabled"],r,t[n.$$]);const c=()=>{o.href=s.each?.href};c(),s[n.$$].__watch(["each","href"],c,t[n.$$]);const i=()=>{o.to=s.each?.to};i(),s[n.$$].__watch(["each","to"],i,t[n.$$]);const d=_.z.create(o);return t[n.__].rootNodes.push(d),(0,n.KO)(d.__render())})()]}}},loop:void 0}),o=()=>{s.loop=e.items};o(),e[n.$$].__watch(["items"],o,t[n.$$]);const a=n.YQ.create(s);return t[n.__].nonRootCompNodes.push(a),(0,n.KO)(a.__render())})(),(()=>{const s=(0,n.Eh)("span"),o=()=>{(0,n.VT)(s,["md-tabs-indicator",e.indicatorClass])};o(),e[n.$$].__watch(["indicatorClass"],o,t[n.$$]);const a=()=>{(0,n.V7)(s,e.indicatorStyles)};return a(),e[n.$$].__watch(["indicatorStyles"],a,t[n.$$]),e.__setRef("indicator",s,t),s})()),o=()=>{(0,n.VT)(s,`md-tabs-navigation md-elevation-${e.elevation}`)};return o(),e[n.$$].__watch(["elevation"],o,t[n.$$]),e.__setRef("nav",s,t),s})(),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(()=>{const s=(0,n.az)("div",{class:"md-tabs-container"},...(()=>{const s=e[n.__].slots,o=s&&s.default?s.default:null,a=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:o||n.qO}}}),r=new n.gU(a,[])[n.$$].proxy;return t[n.__].nonRootCompNodes.push(r),(0,n.KO)(r.__render())})()),o=()=>{(0,n.V7)(s,e.containerStyles)};return o(),e[n.$$].__watch(["containerStyles"],o,t[n.$$]),t[n.__].rootNodes.push(s),s})()]}}},class:void 0,style:void 0}),o=()=>{s.class=(0,n.SK)((0,n.vm)(["md-tabs-content",e.hasContent?"":"jg-hide"]))};o(),e[n.$$].__watch(["hasContent"],o,t[n.$$]);const a=()=>{s.style=(0,n.rB)(e.contentStyles)};a(),e[n.$$].__watch(["contentStyles"],a,t[n.$$]);const r=c.V.create(s);return t[n.__].nonRootCompNodes.push(r),(0,n.KO)(r.__render())})()),o=()=>{(0,n.VT)(s,["md-tabs",`md-alignment-${e.alignment}${e.noTransition?" md-no-transition":""}`,e.dynamicHeight?"md-dynamic-height":"",e.class])};return o(),e[n.$$].__watch(["alignment"],o,t[n.$$]),e[n.$$].__watch(["noTransition"],o,t[n.$$]),e[n.$$].__watch(["dynamicHeight"],o,t[n.$$]),e[n.$$].__watch(["class"],o,t[n.$$]),t[n.__].rootNodes.push(s),s})()]};class m extends n.wA{constructor(t){super(t);const e=this[n.$$].proxy,s=()=>{e.id=t.id||`md-tab-${(0,n.hQ)()}`};s(),t[n.$$].__watch("id",s);const o=()=>{e.disabled=t.disabled};o(),t[n.$$].__watch("disabled",o);const a=()=>{e.data=t.data};a(),t[n.$$].__watch("data",a);const r=()=>{e.label=t.label};r(),t[n.$$].__watch("label",r);const _=()=>{e.to=t.to};_(),t[n.$$].__watch("to",_);const c=()=>{e.href=t.href};c(),t[n.$$].__watch("href",c),e.isActive=!1,e._hasContent=!!t[n.__].slots?.default,e._Tabs=e.__getContext(d),e._Tabs._add(e)}__beforeDestroy(){this._Tabs._remove(this),this._Tabs=null}}m.template=function(t){const e=t;return[(()=>{const s=(0,n.az)("div",{class:"md-tab"},...(()=>{const s=e[n.__].slots,o=s&&s.default?s.default:null,a=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:o||n.qO}}}),r=new n.gU(a,[])[n.$$].proxy;return t[n.__].nonRootCompNodes.push(r),(0,n.KO)(r.__render())})());return t[n.__].rootNodes.push(s),s})()]};var b=s(3662);class p extends n.wA{}p.template=function(t){return[(()=>{const e=(0,n.Eh)("div",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},label:"Home",to:(0,n.vm)({name:"components.tabs",params:{module:null}})}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(0,n.xc)(t,"Go to Subpage 1")]}}},to:(0,n.vm)({name:"components.tabs",params:{module:"pages",sub:"1"}})}),s=b.HC.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(0,n.xc)(t,"Go to Subpage 2")]}}},to:(0,n.vm)({name:"components.tabs",params:{module:"pages",sub:"2"}})}),s=b.HC.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}}}),s=b.aV.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}},label:"Pages",to:(0,n.vm)({name:"components.tabs",params:{module:"pages"}})}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},label:"Posts",to:(0,n.vm)({name:"components.tabs",params:{module:"posts"}})}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},label:"Favorites",to:(0,n.vm)({name:"components.tabs",params:{module:"favorites"}})}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},label:"Disabled",to:(0,n.vm)({name:"components.tabs",params:{module:"disabled"}}),disabled:!0}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}}}),s=u.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})(),(0,n.Eh)("h2","Mirror Subpage"),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(0,n.xc)(t,"Subpage 1")]}}},label:"Pages 1",to:(0,n.vm)({name:"components.tabs",params:{module:"pages",sub:"1"}})}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(0,n.xc)(t,"Subpage 2")]}}},label:"Pages 2",to:(0,n.vm)({name:"components.tabs",params:{module:"pages",sub:"2"}})}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}}}),s=u.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})());return t[n.__].rootNodes.push(e),e})()]};const h={ts:"import { Component } from 'jinge';\n\nimport _tpl from './router.html';\n\nexport default class ExampleTabsRouter extends Component {\n  static template = _tpl;\n}\n",sass:"",html:"<div>\n  <md-tabs>\n    <md-tab label=\"Home\" e:to=\"{name: 'components.tabs', params: {module: null}}\"></md-tab>\n    <md-tab label=\"Pages\" e:to=\"{name: 'components.tabs', params: {module: 'pages'}}\">\n      <md-list>\n        <md-list-item e:to=\"{name: 'components.tabs', params: {module: 'pages', sub: '1'}}\">Go to Subpage 1</md-list-item>\n        <md-list-item e:to=\"{name: 'components.tabs', params: {module: 'pages', sub: '2'}}\">Go to Subpage 2</md-list-item>\n      </md-list>\n    </md-tab>\n    <md-tab label=\"Posts\" e:to=\"{name: 'components.tabs', params: {module: 'posts'}}\"></md-tab>\n    <md-tab label=\"Favorites\" e:to=\"{name: 'components.tabs', params: {module: 'favorites'}}\"></md-tab>\n    <md-tab label=\"Disabled\" e:to=\"{name: 'components.tabs', params: {module:'disabled'}}\"disabled></md-tab>\n  </md-tabs>\n  <h2>Mirror Subpage</h2>\n  <md-tabs>\n    <md-tab label=\"Pages 1\" e:to=\"{name: 'components.tabs', params: {module: 'pages', sub: '1'}}\">Subpage 1</md-tab>\n    <md-tab label=\"Pages 2\" e:to=\"{name: 'components.tabs', params: {module: 'pages', sub: '2'}}\">Subpage 2</md-tab>\n  </md-tabs>\n</div>"};class x extends n.wA{}x.template=function(t){return[(()=>{const e=(0,n.Eh)("div",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(0,n.xc)(t,"Home Tab")]}}},id:"tab-home",label:"Home",to:(0,n.vm)({name:"components.tabs",params:{module:null}})}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(0,n.xc)(t,"Pages tab"),(()=>{const e=(0,n.Eh)("p","Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.");return t[n.__].rootNodes.push(e),e})()]}}},id:"tab-pages",label:"Pages",to:(0,n.vm)({name:"components.tabs",params:{module:"pages"}})}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(0,n.xc)(t,"Posts tab"),(()=>{const e=(0,n.Eh)("p","Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.");return t[n.__].rootNodes.push(e),e})()]}}},id:"tab-posts",label:"Posts",to:(0,n.vm)({name:"components.tabs",params:{module:"posts"}})}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(0,n.xc)(t,"Favorites tab"),(()=>{const e=(0,n.Eh)("p","Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.");return t[n.__].rootNodes.push(e),e})()]}}},id:"tab-favorites",label:"Favorites",to:(0,n.vm)({name:"components.tabs",params:{module:"favorites"}})}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}}}),s=u.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})());return t[n.__].rootNodes.push(e),e})()]};const f={ts:"import { Component } from 'jinge';\n\nimport _tpl from './content.html';\n\nexport default class ExampleTabsContent extends Component {\n  static template = _tpl;\n}\n",sass:"",html:'<div>\n  <md-tabs>\n    <md-tab id="tab-home" label="Home" e:to="{name: \'components.tabs\', params: {module: null}}">\n      Home Tab\n    </md-tab>\n\n    <md-tab id="tab-pages" label="Pages" e:to="{name: \'components.tabs\', params: {module: \'pages\'}}">\n      Pages tab\n      <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>\n    </md-tab>\n\n    <md-tab id="tab-posts" label="Posts" e:to="{name: \'components.tabs\', params: {module: \'posts\'}}">\n      Posts tab\n      <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>\n    </md-tab>\n\n    <md-tab id="tab-favorites" label="Favorites" e:to="{name: \'components.tabs\', params: {module: \'favorites\'}}">\n      Favorites tab\n      <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>\n    </md-tab>\n  </md-tabs>\n</div>'};class g extends n.wA{}g.template=function(t){return[(()=>{const e=(0,n.az)("div",{class:"ZJRkANMjLg6NBRjRY7S9"},"Left aligned (default)",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-home",label:"Home"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-pages",label:"Pages"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-posts",label:"Posts"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-favorites",label:"Favorites"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}}}),s=u.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})(),"Centered",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-home",label:"Home"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-pages",label:"Pages"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-posts",label:"Posts"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-favorites",label:"Favorites"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}},class:"md-primary",alignment:"centered"}),s=u.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})(),"Right aligned",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-home",label:"Home"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-pages",label:"Pages"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-posts",label:"Posts"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-favorites",label:"Favorites"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}},class:"md-accent",alignment:"right"}),s=u.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})(),"Fixed",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-home",label:"Home"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-pages",label:"Pages"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-posts",label:"Posts"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-favorites",label:"Favorites"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}},class:"md-transparent",alignment:"fixed"}),s=u.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})());return t[n.__].rootNodes.push(e),e})()]};const v={ts:"import { Component } from 'jinge';\n\nimport _tpl from './alignments.html';\n\nexport default class ExampleTabsAlignments extends Component {\n  static template = _tpl;\n}\n",sass:".demo :global {\n  .md-tabs {\n    margin-bottom: 24px;\n  }\n}\n",html:'\x3c!-- import style from \'./alignments.scss\' --\x3e\n<div :class="style.demo">\n  Left aligned (default)\n  <md-tabs>\n    <md-tab id="tab-home" label="Home"></md-tab>\n    <md-tab id="tab-pages" label="Pages"></md-tab>\n    <md-tab id="tab-posts" label="Posts"></md-tab>\n    <md-tab id="tab-favorites" label="Favorites"></md-tab>\n  </md-tabs>\n\n  Centered\n  <md-tabs class="md-primary" alignment="centered">\n    <md-tab id="tab-home" label="Home"></md-tab>\n    <md-tab id="tab-pages" label="Pages"></md-tab>\n    <md-tab id="tab-posts" label="Posts"></md-tab>\n    <md-tab id="tab-favorites" label="Favorites"></md-tab>\n  </md-tabs>\n\n  Right aligned\n  <md-tabs class="md-accent" alignment="right">\n    <md-tab id="tab-home" label="Home"></md-tab>\n    <md-tab id="tab-pages" label="Pages"></md-tab>\n    <md-tab id="tab-posts" label="Posts"></md-tab>\n    <md-tab id="tab-favorites" label="Favorites"></md-tab>\n  </md-tabs>\n\n  Fixed\n  <md-tabs class="md-transparent" alignment="fixed">\n    <md-tab id="tab-home" label="Home"></md-tab>\n    <md-tab id="tab-pages" label="Pages"></md-tab>\n    <md-tab id="tab-posts" label="Posts"></md-tab>\n    <md-tab id="tab-favorites" label="Favorites"></md-tab>\n  </md-tabs>\n</div>'};var $=s(1493),N=s(1032),w=s(5610),O=s(3365);class P extends n.wA{}P.template=function(t){return[(()=>{const e=(0,n.az)("div",{class:"ynY7ZLFexcqRBS06hndt"},...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{tab:function(t){const e=t;return[...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{Home:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context}}),s=$.Z.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]},Pages:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context}}),s=N.Z.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]},Posts:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},src:"assets/icon/whatshot.svg"}),s=w.J.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]},Favorites:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context}}),s=O.Z.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}},test:void 0}),o=()=>{s.test=e.tab?.label};o(),e[n.$$].__watch(["tab","label"],o,t[n.$$]);const a=n.qU.create(s);return t[n.__].rootNodes.push(a),(0,n.KO)(a.__render())})(),(()=>{const s=(0,n.Eh)("span",(()=>{const s=(0,n.Eg)(),o=()=>{(0,n.Hd)(s,e.tab?.label)};return o(),e[n.$$].__watch(["tab","label"],o,t[n.$$]),s})());return t[n.__].rootNodes.push(s),s})()]},default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},class:"md-icon-label",label:"Home"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},class:"md-icon-label",label:"Pages"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},class:"md-icon-label",label:"Posts","md-icon":"/assets/icon-whatshot.svg"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},class:"md-icon-label",label:"Favorites"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}}}),s=u.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{tab:function(t){const e=t;return[...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{Home:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context}}),s=$.Z.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]},Pages:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context}}),s=N.Z.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]},Posts:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},src:"assets/icon/whatshot.svg"}),s=w.J.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]},Favorites:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context}}),s=O.Z.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}},test:void 0}),o=()=>{s.test=e.tab?.label};o(),e[n.$$].__watch(["tab","label"],o,t[n.$$]);const a=n.qU.create(s);return t[n.__].rootNodes.push(a),(0,n.KO)(a.__render())})()]},default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},label:"Home"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},label:"Pages"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},label:"Posts","md-icon":"/assets/icon-whatshot.svg"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},label:"Favorites"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}},class:"md-primary",alignment:"centered"}),s=u.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})());return t[n.__].rootNodes.push(e),e})()]};const y={ts:"import { Component } from 'jinge';\n\nimport _tpl from './icons.html';\n\nexport default class ExampleTabsIcons extends Component {\n  static template = _tpl;\n}\n",sass:".demo :global {\n  .md-tabs + .md-tabs {\n    margin-top: 24px;\n  }\n}\n",html:'\x3c!-- import style from \'./icons.scss\' --\x3e\n<div :class="style.demo">\n  <md-tabs>\n    <_slot slot-pass:tab vm-use:tab="tab">\n      <switch e:test="tab.label">\n        <md-icon-home slot-pass:Home/>\n        <md-icon-pages slot-pass:Pages/>\n        <md-icon src="assets/icon/whatshot.svg" slot-pass:Posts/>\n        <md-icon-favorite slot-pass:Favorites/>\n      </switch>\n      <span>${tab.label}</span>\n    </_slot>\n    <_slot slot-pass:default>\n      <md-tab class="md-icon-label" label="Home"></md-tab>\n      <md-tab class="md-icon-label" label="Pages"></md-tab>\n      <md-tab class="md-icon-label" label="Posts" md-icon="/assets/icon-whatshot.svg"></md-tab>\n      <md-tab class="md-icon-label" label="Favorites"></md-tab>\n    </_slot>\n  </md-tabs>\n\n  <md-tabs class="md-primary" alignment="centered">\n    <_slot slot-pass:tab vm-use:tab="tab">\n    <switch e:test="tab.label">\n      <md-icon-home slot-pass:Home/>\n      <md-icon-pages slot-pass:Pages/>\n      <md-icon src="assets/icon/whatshot.svg" slot-pass:Posts/>\n      <md-icon-favorite slot-pass:Favorites/>\n    </switch>\n    </_slot>\n    <_slot slot-pass:default>\n      <md-tab label="Home"></md-tab>\n      <md-tab label="Pages"></md-tab>\n      <md-tab label="Posts" md-icon="/assets/icon-whatshot.svg"></md-tab>\n      <md-tab label="Favorites"></md-tab>\n    </_slot>\n  </md-tabs>\n</div>'};class Q extends n.wA{constructor(t){super(t);const e=this[n.$$].proxy;e.newPosts=0,e._int=null}clearCheckPosts(){clearInterval(this._int),this._int=null}clearNewPosts(){this.clearCheckPosts(),this.newPosts=0}checkNewPosts(t,e){e&&"tab-posts"===e.id?this.clearNewPosts():this._int||(this._int=window.setInterval((()=>{99===this.newPosts?(this.newPosts="99+",this.clearCheckPosts()):this.newPosts++}),1e3))}__afterRender(){this.checkNewPosts()}__beforeDestroy(){this.clearCheckPosts()}}Q.template=function(t){const e=t;return[(()=>{const s=(0,n.Eh)("div",...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,listeners:{changed:{fn:function(...t){e.checkNewPosts(...t)},opts:null}},slots:{tab:function(t){const e=t;return[(()=>{const s=(0,n.Eg)(),o=()=>{(0,n.Hd)(s,e.tab?.label)};return o(),e[n.$$].__watch(["tab","label"],o,t[n.$$]),t[n.__].rootNodes.push(s),s})(),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(()=>{const s=(0,n.az)("i",{class:"badge"},(()=>{const s=(0,n.Eg)(),o=()=>{(0,n.Hd)(s,e.tab?.data?.badge)};return o(),e[n.$$].__watch(["tab","data","badge"],o,t[n.$$]),s})());return t[n.__].rootNodes.push(s),s})()]}}},expect:void 0}),o=()=>{s.expect=e.tab?.data&&e.tab?.data?.badge};o(),e[n.$$].__watch(["tab","data"],o,t[n.$$]),e[n.$$].__watch(["tab","data","badge"],o,t[n.$$]);const a=n.uj.create(s);return t[n.__].rootNodes.push(a),(0,n.KO)(a.__render())})()]},default:function(t){return[...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-home",label:"Home"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-pages",label:"Pages"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})(),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},data:void 0,id:"tab-posts",label:"Posts"}),o=()=>{s.data=(0,n.vm)({badge:e.newPosts})};o(),e[n.$$].__watch(["newPosts"],o,t[n.$$]);const a=m.create(s);return t[n.__].rootNodes.push(a),(0,n.KO)(a.__render())})(),...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},id:"tab-favorites",label:"Favorites"}),s=m.create(e);return t[n.__].rootNodes.push(s),(0,n.KO)(s.__render())})()]}}}}),o=u.create(s);return t[n.__].nonRootCompNodes.push(o),(0,n.KO)(o.__render())})());return t[n.__].rootNodes.push(s),s})()]};const K={ts:"import { Attributes, Component } from 'jinge';\n\nimport _tpl from './template.html';\n\nexport default class ExampleTabsTemplate extends Component {\n  static template = _tpl;\n\n  newPosts: string | number;\n  _int: number;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.newPosts = 0;\n    this._int = null;\n  }\n\n  clearCheckPosts() {\n    clearInterval(this._int);\n    this._int = null;\n  }\n\n  clearNewPosts() {\n    this.clearCheckPosts();\n    this.newPosts = 0;\n  }\n\n  checkNewPosts(index?: number, tab?: { id: string }) {\n    if (tab && tab.id === 'tab-posts') {\n      this.clearNewPosts();\n    } else if (!this._int) {\n      this._int = window.setInterval(() => {\n        if (this.newPosts === 99) {\n          this.newPosts = '99+';\n          this.clearCheckPosts();\n        } else {\n          (this.newPosts as number)++;\n        }\n      }, 1000);\n    }\n  }\n\n  __afterRender() {\n    this.checkNewPosts();\n  }\n\n  __beforeDestroy() {\n    this.clearCheckPosts();\n  }\n}\n",sass:".badge {\n  width: 19px;\n  height: 19px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  background: red;\n  border-radius: 100%;\n  color: #fff;\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 600;\n  letter-spacing: -0.05em;\n}\n",html:'<div>\n  <md-tabs on:changed="checkNewPosts">\n    <_slot slot-pass:tab vm-use:tab="tab">\n      ${ tab.label }\n      <if e:expect="tab.data && tab.data.badge">\n        <i class="badge">${ tab.data.badge }</i>\n      </if>\n    </_slot>\n    <_slot slot-pass:default>\n      <md-tab id="tab-home" label="Home"></md-tab>\n      <md-tab id="tab-pages" label="Pages"></md-tab>\n      <md-tab id="tab-posts" label="Posts" e:data="{ badge: newPosts }"></md-tab>\n      <md-tab id="tab-favorites" label="Favorites"></md-tab>\n    </_slot>\n  </md-tabs>\n</div>'};class C extends n.wA{constructor(t){super(t);const e=this[n.$$].proxy;(0,o.v7)(e,(()=>{e.api=(0,n.vm)({tabs:{props:{headings:["名称","描述","默认值"],props:[{name:"activeTab",type:"String|Number",description:"设置当前激活状态的标签页。可以指定为数字索引，也可以指定为 <code>md-tab</code> 组件的 id 属性值。",defaults:"null"},{name:"alignment",type:"String",description:"设置标签页的对齐方式。请参见下面每种布局的详细说明。",defaults:"left"},{offset:!0,name:'alignment="left"',type:"String",description:"使用左对齐",defaults:"-"},{offset:!0,name:'alignment="center"',type:"String",description:"使用居中对齐",defaults:"-"},{offset:!0,name:'alignment="right"',type:"String",description:"使用右对齐",defaults:"-"},{offset:!0,name:'alignment="fixed"',type:"String",description:"标签页撑满屏幕可用空间",defaults:"-"},{name:"dynamicHeight",type:"Boolean",description:"指定工具栏高度使用动态过渡。请谨慎使用使用此选项，以免降低页面性能。",defaults:"false"},{name:"elevation",type:"Number",description:"为标签页指定阴影(Elevation)，默认无阴影。",defaults:"0"}]},events:{headings:["名称","描述","参数"],props:[{name:"changed",description:"当激活的标签页变化时触发。",value:"(index, tab)"}]}},tab:{headings:["名称","描述","默认值"],props:[{name:"id",type:"String",description:"唯一标识，可用于配合 active 属性指定激活的标签页。",defaults:"a random string"},{name:"href",type:"String",description:"为标签页添加 html 超链接。",defaults:"null"},{name:"label",type:"String",description:"标签页的文本",defaults:"null"},{name:"disabled",type:"Boolean",description:"禁用某个标签页",defaults:"null"},{name:"to",type:"String",description:"为标签页添加 jinge-router 的路由功能，指定目标路由状态。",defaults:"null"},{name:"data",type:"Object",description:"附加给标签页的额外数据。可用于传递给标签页内容的渲染 Slot。",defaults:"null"}]}})}),!0),e._examples={router:{component:p,source:h},content:{component:x,source:f},alignments:{component:g,source:v},icons:{component:P,source:y},template:{component:Q,source:K}}}}C.template=function(t){const e=t;return[...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(()=>{const e=(0,n.az)("div",{class:"page-container-section"},(0,n.Eh)("p","标签页也叫选项卡。使用标签页可以轻松浏览，在不同视图之间切换以及启用高级别的内容组织，例如不同的数据集或应用程序的功能方面。"));return t[n.__].rootNodes.push(e),e})(),(()=>{const s=(0,n.az)("div",{class:"page-container-section"},(0,n.Eh)("h2","导航标签页"),(0,n.Eh)("p","可以使用标签页作为应用程序的主导航。标签页默认情况下可以和 jinge-router 无缝集成，可以像按钮或 router-link 组件一样使用",(0,n.Eh)("code","to"),"、",(0,n.Eh)("code","params"),"等属性。"),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},title:"Seamless integration with jinge-router",example:e._examples?.router}),o=a.AA.create(s);return t[n.__].nonRootCompNodes.push(o),(0,n.KO)(o.__render())})());return t[n.__].rootNodes.push(s),s})(),(()=>{const s=(0,n.az)("div",{class:"page-container-section"},(0,n.Eh)("h2","标签页内容"),(0,n.Eh)("p","在前面的示例中，选项卡的工作原理与导航按钮相同，但没有内容。可以指定自定义内容。可以将任意内容传递到选项卡。可以与路由器同步："),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},title:"Content syncing with Router",example:e._examples?.content}),o=a.AA.create(s);return t[n.__].nonRootCompNodes.push(o),(0,n.KO)(o.__render())})());return t[n.__].rootNodes.push(s),s})(),(()=>{const s=(0,n.az)("div",{class:"page-container-section"},(0,n.Eh)("h2","对齐方式"),(0,n.Eh)("p","选项卡具有四种类型的导航按钮对齐方式：左，中，右和固定。 您可以将它们与任何选项卡一起使用："),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},title:"With different hue colors",example:e._examples?.alignments}),o=a.AA.create(s);return t[n.__].nonRootCompNodes.push(o),(0,n.KO)(o.__render())})());return t[n.__].rootNodes.push(s),s})(),(()=>{const s=(0,n.az)("div",{class:"page-container-section"},(0,n.Eh)("h2","图标"),(0,n.Eh)("p","可以在标签页中使用图标，以使得用户更容易理解标签的内容："),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},title:"With icon support",example:e._examples?.icons}),o=a.AA.create(s);return t[n.__].nonRootCompNodes.push(o),(0,n.KO)(o.__render())})());return t[n.__].rootNodes.push(s),s})(),(()=>{const s=(0,n.az)("div",{class:"page-container-section"},(0,n.Eh)("h2","自定义模版"),(0,n.Eh)("p","通过 slot 可以指定标签页里面的内容的自定义模板。下面是一个提示未读信息的简单示例："),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},title:"Template Slot",example:e._examples?.template}),o=a.AA.create(s);return t[n.__].nonRootCompNodes.push(o),(0,n.KO)(o.__render())})(),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{props:function(t){return[...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},headings:void 0,props:void 0}),o=()=>{s.headings=e.api?.tabs?.props?.headings};o(),e[n.$$].__watch(["api","tabs","props","headings"],o,t[n.$$]);const r=()=>{s.props=e.api?.tabs?.props?.props};r(),e[n.$$].__watch(["api","tabs","props","props"],r,t[n.$$]);const _=a.FG.create(s);return t[n.__].rootNodes.push(_),(0,n.KO)(_.__render())})()]},events:function(t){return[...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},headings:void 0,props:void 0}),o=()=>{s.headings=e.api?.tabs?.events?.headings};o(),e[n.$$].__watch(["api","tabs","events","headings"],o,t[n.$$]);const r=()=>{s.props=e.api?.tabs?.events?.props};r(),e[n.$$].__watch(["api","tabs","events","props"],r,t[n.$$]);const _=a.FG.create(s);return t[n.__].rootNodes.push(_),(0,n.KO)(_.__render())})()]}}},title:"API - md-tabs"}),o=a.IA.create(s);return t[n.__].nonRootCompNodes.push(o),(0,n.KO)(o.__render())})(),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{props:function(t){return[...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},headings:void 0,props:void 0}),o=()=>{s.headings=e.api?.tab?.headings};o(),e[n.$$].__watch(["api","tab","headings"],o,t[n.$$]);const r=()=>{s.props=e.api?.tab?.props};r(),e[n.$$].__watch(["api","tab","props"],r,t[n.$$]);const _=a.FG.create(s);return t[n.__].rootNodes.push(_),(0,n.KO)(_.__render())})()]}}},title:"API - md-tab"}),o=a.IA.create(s);return t[n.__].nonRootCompNodes.push(o),(0,n.KO)(o.__render())})());return t[n.__].rootNodes.push(s),s})()]}}},centered:!0,title:"标签页"}),o=a._z.create(s);return t[n.__].rootNodes.push(o),(0,n.KO)(o.__render())})()]}},3365:(t,e,s)=>{s.d(e,{Z:()=>r});var n=s(4114),o=s(2877);const a=function(t){return[(()=>{const e=(0,n.rS)("svg",o.b,(0,n.rS)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}));return t[n.__].rootNodes.push(e),e})()]},r=class extends o.s{constructor(t){t[n.__].slots={default:a},super(t)}}},1493:(t,e,s)=>{s.d(e,{Z:()=>r});var n=s(4114),o=s(2877);const a=function(t){return[(()=>{const e=(0,n.rS)("svg",o.b,(0,n.rS)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}));return t[n.__].rootNodes.push(e),e})()]},r=class extends o.s{constructor(t){t[n.__].slots={default:a},super(t)}}},1032:(t,e,s)=>{s.d(e,{Z:()=>r});var n=s(4114),o=s(2877);const a=function(t){return[(()=>{const e=(0,n.rS)("svg",o.b,(0,n.rS)("path",{d:"M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"}));return t[n.__].rootNodes.push(e),e})()]},r=class extends o.s{constructor(t){t[n.__].slots={default:a},super(t)}}}}]);