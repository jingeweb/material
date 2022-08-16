"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[549],{6018:(t,e,s)=>{s.r(e),s.d(e,{PageHighlight:()=>Y});var n=s(6116),r=s(3037);const o=()=>"文本高亮",c=()=>"Highlight Text",a=t=>"zh_cn"===t?o:c;class h extends r.h${static d=a}class i extends r.D7{static d=[a]}const _=()=>"文本高亮组件用于在浏览器端进行字符串关键字搜索并以高亮匹配字符的形式展示结果。\n      搜索算法是在浏览器中执行的，但通常情况下，都应该尽可能使用后端接口来实现字符串的关键字搜索。",d=()=>"Highlight Text组件用于在浏览器端进行字符串关键字搜索并以高亮匹配字符的形式展示结果。\n      搜索算法是在浏览器中执行的，但通常情况下，都应该尽可能使用后端接口来实现字符串的关键字搜索。",l=t=>"zh_cn"===t?_:d;class m extends r.h${static d=l}const u=function(t){return[(0,n.xc)(t,"文本高亮组件支持三种查询算法，包括"),(()=>{const e=(0,n.az)("a",{href:"https://en.wikipedia.org/wiki/roximate_string_matching",target:"_blank"},"fuzzy");return t[n.__].rootNodes.push(e),e})(),(0,n.xc)(t,"、includes 和 starts，依次代表模糊匹配、包含子串匹配和以子串打头匹配。默认情况下使用模糊匹配。")]},p=function(t){return[(0,n.xc)(t,"This component supports three search algorithms, including"),(()=>{const e=(0,n.az)("a",{href:"https://en.wikipedia.org/wiki/roximate_string_matching",target:"_blank"},"fuzzy");return t[n.__].rootNodes.push(e),e})(),(0,n.xc)(t,", includes and starts. Fuzzy search is used by default.")]},x=t=>"zh_cn"===t?u:p;class g extends r.iH{static d=x}var z=s(8813),f=s(3634),y=s(7393),v=s(1964);const $=()=>"待进行关键字搜索的文本",M=()=>"Text to render.",E=t=>"zh_cn"===t?$:M,b=()=>"待查询的高亮关键字",w=()=>"Term to search.",N=t=>"zh_cn"===t?b:w,C=t=>(0,r.t)(N,t),K=()=>"搜索算法忽略大小写",O=()=>"Ignore case when search.",Q=t=>"zh_cn"===t?K:O,P=t=>(0,r.t)(Q,t),S=()=>"指定使用哪种算法进行搜索，默认使用模糊查询（fuzzysearch）",R=()=>"Specify which algorithm to use for searching, fuzzy search is used by default",B=t=>"zh_cn"===t?S:R,k=t=>(0,r.t)(B,t),I=()=>"使用模糊查询（fuzzysearch）算法来搜索关键字。",T=()=>"Use fuzzysearch algorithm to search term.",A=t=>"zh_cn"===t?I:T,H=t=>(0,r.t)(A,t),D=()=>"使用包含子串（includes）算法来搜索关键字。",F=()=>"Use the includes algorithm to search term.",V=t=>"zh_cn"===t?D:F,j=t=>(0,r.t)(V,t),L=()=>"使用以子串打头（starts）算法来搜索关键字。",U=()=>"Use the startsWith algorithm to search term.",X=t=>"zh_cn"===t?L:U,G=t=>(0,r.t)(X,t);var J=s(952);class W extends n.wA{}W.template=function(t){return[(()=>{const e=(0,n.az)("div",{class:(0,n.SK)(["md-layout md-gutter","iurrX6uCm1h5J7QVldVw"])},(0,n.az)("div",{class:"md-layout-item md-size-33"},(0,n.Eh)("p",(0,n.Eh)("strong","Fuzzy search"),"- search term:",(0,n.Eh)("code","pam")),(0,n.Eh)("div","Matches:",(0,n.Eh)("ul",(0,n.Eh)("li",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},term:"pam",text:"Pam Beesly"}),s=J.y.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})()),(0,n.Eh)("li",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},term:"pam",text:"Meredith Palmer"}),s=J.y.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})())))),(0,n.az)("div",{class:"md-layout-item md-size-33"},(0,n.Eh)("p",(0,n.Eh)("strong","Includes Search"),"- search term:",(0,n.Eh)("code","pam")),(0,n.Eh)("div","Matches:",(0,n.Eh)("ul",(0,n.Eh)("li",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},term:"pam",searchMethod:"includes",text:"Pam Beesly"}),s=J.y.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})()),(0,n.Eh)("li",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},term:"pam",searchMethod:"includes",text:"Ki Pam Beesly"}),s=J.y.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})())))),(0,n.az)("div",{class:"md-layout-item md-size-33"},(0,n.Eh)("p",(0,n.Eh)("strong","Starts Search"),"- search term:",(0,n.Eh)("code","pam")),(0,n.Eh)("div","Matches:",(0,n.Eh)("ul",(0,n.Eh)("li",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},searchMethod:"starts",term:"pam",text:"Pam Beesly"}),s=J.y.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})()),(0,n.Eh)("li",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context},searchMethod:"starts",term:"pam",text:"Ki Pam Beesly"}),s=J.y.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})())))));return t[n.__].rootNodes.push(e),e})()]};const q={ts:"import { Component } from 'jinge';\n\nimport _tpl from './text.html';\n\nexport default class ExampleHighlightText extends Component {\n  static template = _tpl;\n}\n",sass:".demo :global .md-highlight-text-match {\n  color: #448aff;\n}\n",html:'\x3c!-- import style from \'./text.scss\' --\x3e\n<div :class="[\'md-layout md-gutter\', style.demo]">\n  <div class="md-layout-item md-size-33">\n    <p>\n      <strong>Fuzzy search</strong> - search term: <code>pam</code>\n    </p>\n    <div>\n      Matches:\n      <ul>\n        <li>\n          <md-highlight term="pam" text="Pam Beesly"/>\n        </li>\n\n        <li>\n          <md-highlight term="pam" text="Meredith Palmer"/>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class="md-layout-item md-size-33">\n    <p>\n      <strong>Includes Search</strong> - search term: <code>pam</code>\n    </p>\n    <div>\n      Matches:\n      <ul>\n        <li>\n          <md-highlight term="pam" searchMethod="includes" text="Pam Beesly"/>\n        </li>\n        <li>\n          <md-highlight term="pam" searchMethod="includes" text="Ki Pam Beesly"/>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="md-layout-item md-size-33">\n    <p>\n      <strong>Starts Search</strong> - search term: <code>pam</code>\n    </p>\n    <div>\n      Matches:\n      <ul>\n        <li>\n          <md-highlight searchMethod="starts" term="pam" text="Pam Beesly"/>\n        </li>\n        <li>\n          <md-highlight searchMethod="starts" term="pam" text="Ki Pam Beesly"/>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>'};class Y extends n.wA{constructor(t){super(t);const e=this[n.$$].proxy;(0,r.v7)(e,(()=>{e.api=(0,n.vm)({props:{headings:[(0,f.z_)(),(0,y.r_)(),(0,v.bh)()],props:[{name:"text",type:"String",description:(0,r.t)(E,void 0),defaults:""},{name:"term",type:"String",description:C(),defaults:"null"},{name:"ignoreCase",type:"Boolean",description:P(),defaults:"true"},{name:"searchMethod",type:"String",description:k(),defaults:"fuzzy"},{offset:!0,name:'searchMethod="fuzzy"',type:"String",description:H(),defaults:"-"},{offset:!0,name:'searchMethod="starts"',type:"String",description:j(),defaults:"-"},{offset:!0,name:'searchMethod="includes"',type:"String",description:G(),defaults:"-"}]}})}),!0),e._examples={text:{component:W,source:q}}}}Y.template=function(t){const e=t;return[...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){const s=t;return[...(()=>{const r=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{default:function(t){return[(()=>{const s=(0,n.az)("div",{class:"page-container-section"},(0,n.Eh)("h2",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context}}),s=h.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})()),(0,n.Eh)("p",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context}}),s=m.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})()),(0,n.Eh)("p",...(()=>{const e=(0,n.Qb)({[n.__]:{context:t[n.__].context}}),s=g.create(e);return t[n.__].nonRootCompNodes.push(s),(0,n.KO)(s.__render())})()),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},title:"Highlight",example:e._examples?.text}),r=z.AA.create(s);return t[n.__].nonRootCompNodes.push(r),(0,n.KO)(r.__render())})(),...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context,slots:{props:function(t){return[...(()=>{const s=(0,n.Qb)({[n.__]:{context:t[n.__].context},headings:void 0,props:void 0}),r=()=>{s.headings=e.api?.props?.headings};r(),e[n.$$].__watch(["api","props","headings"],r,t[n.$$]);const o=()=>{s.props=e.api?.props?.props};o(),e[n.$$].__watch(["api","props","props"],o,t[n.$$]);const c=z.FG.create(s);return t[n.__].rootNodes.push(c),(0,n.KO)(c.__render())})()]}}},title:"API - md-highlight"}),r=z.IA.create(s);return t[n.__].nonRootCompNodes.push(r),(0,n.KO)(r.__render())})());return t[n.__].rootNodes.push(s),s})()]}}},title:void 0,centered:!0}),o=()=>{r.title=s.c?.[0]};o(),s[n.$$].__watch(["c",0],o,t[n.$$]);const c=z._z.create(r);return t[n.__].rootNodes.push(c),(0,n.KO)(c.__render())})()]}}}}),r=i.create(s);return t[n.__].rootNodes.push(r),(0,n.KO)(r.__render())})()]}},952:(t,e,s)=>{s.d(e,{y:()=>c});var n=s(6116),r=s(9193);const o=new r.LX("<md-highlight>","searchMethod",["fuzzy","starts","includes"]);class c extends n.wA{constructor(t){o.assert(t),super(t);const e=this[n.$$].proxy,s=()=>{e.term=t.term};s(),t[n.$$].__watch("term",s);const r=()=>{e.searchMethod=t.searchMethod||"fuzzy"};r(),t[n.$$].__watch("searchMethod",r);const c=()=>{e.ignoreCase=!1!==t.ignoreCase};c(),t[n.$$].__watch("ignoreCase",c);const a=()=>{e.text=t.text};a(),t[n.$$].__watch("text",a)}get term(){return this._term}set term(t){this._term!==t&&(this._term=t,this.__updateIfNeed())}get text(){return this._text}set text(t){this._text!==t&&(this._text=t,this.__updateIfNeed())}__afterRender(){this.__update()}__update(){this.__firstDOM.innerHTML=function(t,e,s,n){switch(s){case"fuzzy":return(0,r.tL)(t,e,n);case"includes":return(0,r.n6)(t,e,n);case"starts":return(0,r.lb)(t,e,n);default:return t}}(this.text,this.term,this.searchMethod,this.ignoreCase)}}c.template=function(t){const e=t;return[(()=>{const s=(0,n.Eh)("div"),r=()=>{(0,n.VT)(s,["md-highlight-text",e.class])};r(),e[n.$$].__watch(["class"],r,t[n.$$]);const o=()=>{(0,n.V7)(s,e.style)};return o(),e[n.$$].__watch(["style"],o,t[n.$$]),t[n.__].rootNodes.push(s),s})()]}},3634:(t,e,s)=>{s.d(e,{z_:()=>a});var n=s(3037);const r=()=>"名称",o=()=>"Name",c=t=>"zh_cn"===t?r:o,a=t=>(0,n.t)(c,t)},7393:(t,e,s)=>{s.d(e,{I1:()=>h,r_:()=>a});var n=s(3037);const r=()=>"描述",o=()=>"Description",c=t=>"zh_cn"===t?r:o,a=t=>(0,n.t)(c,t);class h extends n.h${static d=c}},1964:(t,e,s)=>{s.d(e,{bh:()=>a});var n=s(3037);const r=()=>"默认值",o=()=>"Default",c=t=>"zh_cn"===t?r:o,a=t=>(0,n.t)(c,t)}}]);