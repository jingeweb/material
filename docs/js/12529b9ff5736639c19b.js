"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[3143],{6344:(e,t,n)=>{n.r(t),n.d(t,{PageRadio:()=>i});var s=n(4114),o=n(7421),r=n(7683),c=n(5910);class a extends s.wA{constructor(e){super(e);const t=this[s.$$].proxy;t.v=null,(0,o.v7)(t,(()=>{const e=(0,s.vm)([{name:"小葛"},{name:"小明"},{name:"小王"}]);t.persons?e.forEach(((e,n)=>{t.persons[n].name=e.name})):t.persons=e}),!0),t.cities=(0,s.vm)(["Chengdu","Beijing","Shanghai"]),t.selectedCity=t.cities[0],t.selectedPerson=null}onSelectedPersonChange(e){this.selectedPerson=e,console.log(e)}}a.template=function(e){const t=e;return[(()=>{const n=(0,s.az)("table",{class:"pEwldV_BgAcdxxgVUAUA"},(0,s.Eh)("thead",(0,s.Eh)("tr",(0,s.Eh)("th","描述"),(0,s.Eh)("th","示例"),(0,s.Eh)("th","值"))),(0,s.Eh)("tbody",(0,s.Eh)("tr",(0,s.Eh)("td","简单选择项"),(0,s.Eh)("td",...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,listeners:{change:{fn:function(...e){t.v=e[0]},opts:null}},slots:{default:function(e){return[(0,s.xc)(e,"Primary")]}}},checked:void 0,class:"md-primary",value:"primary",name:"r-simple"}),o=()=>{n.checked="primary"===t.v};o(),t[s.$$].__watch(["v"],o,e[s.$$]);const r=c.Y.create(n);return e[s.__].nonRootCompNodes.push(r),(0,s.KO)(r.__render())})(),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,listeners:{change:{fn:function(...e){t.v=e[0]},opts:null}},slots:{default:function(e){return[(0,s.xc)(e,"Default")]}}},checked:void 0,value:"default",name:"r-simple"}),o=()=>{n.checked="default"===t.v};o(),t[s.$$].__watch(["v"],o,e[s.$$]);const r=c.Y.create(n);return e[s.__].nonRootCompNodes.push(r),(0,s.KO)(r.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[(0,s.xc)(e,"Disabled")]}}},class:"md-primary",disabled:!0,name:"r-simple"}),n=c.Y.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[(0,s.xc)(e,"Disabled & Checked")]}}},class:"md-primary",disabled:!0,checked:!0,name:"r-simple"}),n=c.Y.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})()),(0,s.Eh)("td",(()=>{const n=(0,s.Eg)(),o=()=>{(0,s.Hd)(n,t.v)};return o(),t[s.$$].__watch(["v"],o,e[s.$$]),n})())),(0,s.Eh)("tr",(0,s.Eh)("td","字符串数组"),(0,s.Eh)("td",...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){const n=e;return[...(()=>{const o=(0,s.Qb)({[s.__]:{context:e[s.__].context,listeners:{change:{fn:function(...e){t.selectedCity=e[0]},opts:null}},slots:{default:function(e){return[(()=>{const t=(0,s.Eg)(),o=()=>{(0,s.Hd)(t,n.each)};return o(),n[s.$$].__watch(["each"],o,e[s.$$]),e[s.__].rootNodes.push(t),t})()]}}},value:void 0,checked:void 0,name:"r-city"}),r=()=>{o.value=n.each};r(),n[s.$$].__watch(["each"],r,e[s.$$]);const a=()=>{o.checked=n.each===t.selectedCity};a(),n[s.$$].__watch(["each"],a,e[s.$$]),t[s.$$].__watch(["selectedCity"],a,e[s.$$]);const d=c.Y.create(o);return e[s.__].rootNodes.push(d),(0,s.KO)(d.__render())})()]}}},loop:void 0,_key:"each"}),o=()=>{n.loop=t.cities};o(),t[s.$$].__watch(["cities"],o,e[s.$$]);const r=s.YQ.create(n);return e[s.__].nonRootCompNodes.push(r),(0,s.KO)(r.__render())})()),(0,s.Eh)("td",(()=>{const n=(0,s.Eg)(),o=()=>{(0,s.Hd)(n,t.selectedCity)};return o(),t[s.$$].__watch(["selectedCity"],o,e[s.$$]),n})())),(0,s.Eh)("tr",(0,s.Eh)("td","Object 数组"),(0,s.Eh)("td",...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){const n=e;return[...(()=>{const o=(0,s.Qb)({[s.__]:{context:e[s.__].context,listeners:{change:{fn:function(...e){t.onSelectedPersonChange(...e)},opts:null}},slots:{default:function(e){return[(()=>{const t=(0,s.Eg)(),o=()=>{(0,s.Hd)(t,n.each?.name)};return o(),n[s.$$].__watch(["each","name"],o,e[s.$$]),e[s.__].rootNodes.push(t),t})()]}}},value:void 0,checked:void 0,name:"r-person",class:"md-primary"}),r=()=>{o.value=n.each};r(),n[s.$$].__watch(["each"],r,e[s.$$]);const a=()=>{o.checked=t.selectedPerson===n.each};a(),t[s.$$].__watch(["selectedPerson"],a,e[s.$$]),n[s.$$].__watch(["each"],a,e[s.$$]);const d=c.Y.create(o);return e[s.__].rootNodes.push(d),(0,s.KO)(d.__render())})()]}}},loop:void 0,_key:"each.name"}),o=()=>{n.loop=t.persons};o(),t[s.$$].__watch(["persons"],o,e[s.$$]);const r=s.YQ.create(n);return e[s.__].nonRootCompNodes.push(r),(0,s.KO)(r.__render())})()),(0,s.Eh)("td",(()=>{const n=(0,s.Eg)(),o=()=>{(0,s.Hd)(n,t.selectedPerson?t.selectedPerson?.name:"未选择")};return o(),t[s.$$].__watch(["selectedPerson"],o,e[s.$$]),t[s.$$].__watch(["selectedPerson","name"],o,e[s.$$]),n})()))));return e[s.__].rootNodes.push(n),n})()]};const d={ts:"import { Attributes, Component, vm } from 'jinge';\nimport { watchForComponent } from 'jinge-i18n';\n\nimport _tpl from './simple-radios.html';\n\nexport default class ExampleSimpleRadio extends Component {\n  static template = _tpl;\n\n  v: string;\n  persons: { name: string }[];\n  selectedPerson: { name: string };\n  cities: string[];\n  selectedCity: string;\n\n  constructor(attrs: Attributes) {\n    super(attrs);\n    this.v = null;\n    watchForComponent(\n      this,\n      () => {\n        const persons = vm([\n          {\n            name: '小葛',\n          },\n          {\n            name: '小明',\n          },\n          {\n            name: '小王',\n          },\n        ]);\n        if (!this.persons) {\n          this.persons = persons;\n        } else {\n          persons.forEach((p, i) => {\n            this.persons[i].name = p.name;\n          });\n        }\n      },\n      true,\n    );\n    this.cities = vm(['Chengdu', 'Beijing', 'Shanghai']);\n    this.selectedCity = this.cities[0];\n    this.selectedPerson = null;\n  }\n\n  onSelectedPersonChange(sp: { name: string }) {\n    this.selectedPerson = sp;\n    // eslint-disable-next-line no-console\n    console.log(sp);\n  }\n}\n",sass:".demo {\n  th {\n    padding-right: 10px;\n    text-align: left;\n  }\n\n  td {\n    padding-right: 10px;\n  }\n}\n",html:'\x3c!-- import style from \'./simple-radios.scss\' --\x3e\n<table :class="style.demo">\n    <thead>\n      <tr>\n        <th>描述</th>\n        <th>示例</th>\n        <th>值</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>简单选择项</td>\n        <td>\n          <md-radio class="md-primary" value="primary" e:checked="v === \'primary\'" on:change="v = $args[0]" name="r-simple">Primary</md-radio>\n          <md-radio value="default" e:checked="v === \'default\'" on:change="v = $args[0]" name="r-simple" >Default</md-radio>\n          <md-radio class="md-primary" disabled name="r-simple" >Disabled</md-radio>\n          <md-radio class="md-primary" disabled checked name="r-simple" >Disabled & Checked</md-radio>\n        </td>\n        <td>\n          ${v}\n        </td>\n      </tr>\n      <tr>\n        <td>字符串数组</td>\n        <td>\n          <for e:loop="cities" vm:each="city" _key="each">\n            <md-radio name="r-city" on:change="selectedCity = $args[0]" e:value="city" e:checked="city === selectedCity">\n            ${city}\n            </md-radio>\n          </for>\n        </td>\n        <td>\n          ${selectedCity}\n        </td>\n      </tr>\n      <tr>\n        <td>Object 数组</td>\n        <td>\n          <for e:loop="persons" vm:each="person" _key="each.name">\n            <md-radio name="r-person" class="md-primary" on:change="onSelectedPersonChange" e:value="person" e:checked="selectedPerson === person">\n            ${person.name}\n            </md-radio>\n          </for>\n        </td>\n        <td>\n          ${selectedPerson ? selectedPerson.name : \'未选择\'}\n        </td>\n      </tr>\n    </tbody>\n  </table>'};class i extends s.wA{constructor(e){super(e);const t=this[s.$$].proxy;(0,o.v7)(t,(()=>{t.api=(0,s.vm)({props:{headings:["名称","描述","默认值"],props:[{name:"value",type:"Any",description:"点击选中时通过 change 事件向外传递的值",defaults:"undefined"},{name:"checked",type:"Boolean",description:"是否为选中状态",defaults:"false"},{name:"id",type:"String",description:"唯一标识",defaults:"a random string"},{name:"name",type:"String",description:"用于标识分组的 name，会传递给原生 input，实现多个 radio 关联",defaults:"a empty string"}]},events:{headings:["名称","描述","参数"],props:[{name:"change",description:"选中的值变化时触发",value:"value"}]}})}),!0),t._examples={simpleRadio:{component:a,source:d}}}}i.template=function(e){const t=e;return[...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[(()=>{const t=(0,s.az)("div",{class:"page-container-section"},(0,s.Eh)("p","单选按钮允许用户从一组选项中选择唯一一个选项。如果认为用户需要并排查看所有可用选项，请使用单选按钮进行独占选择。"));return e[s.__].rootNodes.push(t),t})(),(()=>{const n=(0,s.az)("div",{class:"page-container-section"},(0,s.Eh)("h2","单选项"),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context},title:"Radio",example:t._examples?.simpleRadio}),o=r.AA.create(n);return e[s.__].nonRootCompNodes.push(o),(0,s.KO)(o.__render())})(),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{props:function(e){return[...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context},headings:void 0,props:void 0}),o=()=>{n.headings=t.api?.props?.headings};o(),t[s.$$].__watch(["api","props","headings"],o,e[s.$$]);const c=()=>{n.props=t.api?.props?.props};c(),t[s.$$].__watch(["api","props","props"],c,e[s.$$]);const a=r.FG.create(n);return e[s.__].rootNodes.push(a),(0,s.KO)(a.__render())})()]},events:function(e){return[...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context},headings:void 0,props:void 0}),o=()=>{n.headings=t.api?.events?.headings};o(),t[s.$$].__watch(["api","events","headings"],o,e[s.$$]);const c=()=>{n.props=t.api?.events?.props};c(),t[s.$$].__watch(["api","events","props"],c,e[s.$$]);const a=r.FG.create(n);return e[s.__].rootNodes.push(a),(0,s.KO)(a.__render())})()]}}},title:"API - md-radio"}),o=r.IA.create(n);return e[s.__].nonRootCompNodes.push(o),(0,s.KO)(o.__render())})(),...(()=>{const t=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[(0,s.xc)(e,"浏览器原生"),(()=>{const t=(0,s.Eh)("code",'<input type="radio">');return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"标签上可以使用的属性，比如"),(()=>{const t=(0,s.Eh)("strong","name");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"和"),(()=>{const t=(0,s.Eh)("strong","required");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"等，也可以被应用到"),(()=>{const t=(0,s.Eh)("code","md-radio");return e[s.__].rootNodes.push(t),t})(),(0,s.xc)(e,"组件上。")]}}},tip:!0}),n=r.NW.create(t);return e[s.__].nonRootCompNodes.push(n),(0,s.KO)(n.__render())})());return e[s.__].rootNodes.push(n),n})()]}}},centered:!0,title:"单选项"}),o=r._z.create(n);return e[s.__].rootNodes.push(o),(0,s.KO)(o.__render())})()]}},5910:(e,t,n)=>{n.d(t,{Y:()=>r});var s=n(4114),o=n(5997);class r extends s.wA{constructor(e){if((0,s.kJ)(e.value)&&!("trueValue"in e))throw new Error('<md-radio>: attribute "trueValue" is required when "value" is array(which means array-mode checkbox)');super(e);const t=this[s.$$].proxy;t._renderLabel=!!t[s.__].slots?.default,t.rippleActive=!1;const n=()=>{t.id=e.id||`md-radio-${(0,s.hQ)()}`};n(),e[s.$$].__watch("id",n);const o=()=>{t.name=e.name||""};o(),e[s.$$].__watch("name",o);const r=()=>{t.checked=e.checked};r(),e[s.$$].__watch("checked",r);const c=()=>{t.disabled=!!e.disabled};c(),e[s.$$].__watch("disabled",c);const a=()=>{t.required=!!e.required};a(),e[s.$$].__watch("required",a);const d=()=>{t.value=e.value};d(),e[s.$$].__watch("value",d),t.__update()}toggleCheck(){this.disabled||this.checked||(this.checked=!0,this.rippleActive=!0,this.__notify("change",this.value))}}r.template=function(e){const t=e;return[(()=>{const n=(0,s.Eh)("div",(()=>{const n=(0,s.az)("div",{class:"md-radio-container"},...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,listeners:{"update.active":{fn:function(...e){t.rippleActive=e[0]},opts:null}},slots:{default:function(e){return[(()=>{const n=(0,s.az)("input",{type:"radio"}),o=()=>{(0,s.P$)(n,"id",t.id)};o(),t[s.$$].__watch(["id"],o,e[s.$$]);const r=()=>{n.checked=!!t.checked};r(),t[s.$$].__watch(["checked"],r,e[s.$$]);const c=()=>{(0,s.P$)(n,"name",t.name)};c(),t[s.$$].__watch(["name"],c,e[s.$$]);const a=()=>{n.disabled=!!t.disabled};a(),t[s.$$].__watch(["disabled"],a,e[s.$$]);const d=()=>{n.required=!!t.required};return d(),t[s.$$].__watch(["required"],d,e[s.$$]),e[s.__].rootNodes.push(n),n})()]}}},active:void 0,disabled:void 0,centered:!0}),r=()=>{n.active=t.rippleActive};r(),t[s.$$].__watch(["rippleActive"],r,e[s.$$]);const c=()=>{n.disabled=t.disabled};c(),t[s.$$].__watch(["disabled"],c,e[s.$$]);const a=o.H.create(n);return e[s.__].nonRootCompNodes.push(a),(0,s.KO)(a.__render())})());return(0,s.vP)(n,"click",(function(...e){t.toggleCheck(...e)})),n})(),...(()=>{const n=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:function(e){return[(()=>{const n=(0,s.az)("label",{class:"md-radio-label"},...(()=>{const n=t[s.__].slots,o=n&&n.default?n.default:null,r=(0,s.Qb)({[s.__]:{context:e[s.__].context,slots:{default:o||s.qO}}}),c=new s.gU(r,[])[s.$$].proxy;return e[s.__].nonRootCompNodes.push(c),(0,s.KO)(c.__render())})()),o=()=>{(0,s.P$)(n,"for",t.id)};return o(),t[s.$$].__watch(["id"],o,e[s.$$]),(0,s.vP)(n,"click",(function(...e){t.toggleCheck(...e),e[0].preventDefault()}),{prevent:!0}),e[s.__].rootNodes.push(n),n})()]}}},expect:t._renderLabel}),o=s.uj.create(n);return e[s.__].nonRootCompNodes.push(o),(0,s.KO)(o.__render())})()),r=()=>{(0,s.VT)(n,["md-radio",{"md-disabled":t.disabled,"md-required":t.required,"md-checked":t.checked},t.class])};r(),t[s.$$].__watch(["disabled"],r,e[s.$$]),t[s.$$].__watch(["required"],r,e[s.$$]),t[s.$$].__watch(["checked"],r,e[s.$$]),t[s.$$].__watch(["class"],r,e[s.$$]);const c=()=>{(0,s.V7)(n,t.style)};return c(),t[s.$$].__watch(["style"],c,e[s.$$]),e[s.__].rootNodes.push(n),n})()]}}}]);