"use strict";(self.webpackChunkjinge_material_site=self.webpackChunkjinge_material_site||[]).push([[6982],{6874:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(9299),r=n(4634);function i(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),i=1,a=1;if((0,o.Re)(e)&&t){var s=e.offsetHeight,f=e.offsetWidth;f>0&&(i=(0,r.NM)(n.width)/f||1),s>0&&(a=(0,r.NM)(n.height)/s||1)}return{width:n.width/i,height:n.height/a,top:n.top/a,right:n.right/i,bottom:n.bottom/a,left:n.left/i,x:n.left/i,y:n.top/a}}},9331:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(2691);function r(e){return(0,o.Z)(e).getComputedStyle(e)}},6394:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(9299);function r(e){return(((0,o.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}},3831:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(6874);function r(e){var t=(0,o.Z)(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}},6669:(e,t,n)=>{function o(e){return e?(e.nodeName||"").toLowerCase():null}n.d(t,{Z:()=>o})},276:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(2691),r=n(6669),i=n(9331),a=n(9299);function s(e){return["table","td","th"].indexOf((0,r.Z)(e))>=0}var f=n(4774);function c(e){return(0,a.Re)(e)&&"fixed"!==(0,i.Z)(e).position?e.offsetParent:null}function u(e){for(var t=(0,o.Z)(e),n=c(e);n&&s(n)&&"static"===(0,i.Z)(n).position;)n=c(n);return n&&("html"===(0,r.Z)(n)||"body"===(0,r.Z)(n)&&"static"===(0,i.Z)(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&(0,a.Re)(e)&&"fixed"===(0,i.Z)(e).position)return null;var n=(0,f.Z)(e);for((0,a.Zq)(n)&&(n=n.host);(0,a.Re)(n)&&["html","body"].indexOf((0,r.Z)(n))<0;){var o=(0,i.Z)(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}},4774:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(6669),r=n(6394),i=n(9299);function a(e){return"html"===(0,o.Z)(e)?e:e.assignedSlot||e.parentNode||((0,i.Zq)(e)?e.host:null)||(0,r.Z)(e)}},2691:(e,t,n)=>{function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}n.d(t,{Z:()=>o})},1722:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(2691);function r(e){var t=(0,o.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}},806:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(6874),r=n(6394),i=n(1722);function a(e){return(0,o.Z)((0,r.Z)(e)).left+(0,i.Z)(e).scrollLeft}},9299:(e,t,n)=>{n.d(t,{Re:()=>i,Zq:()=>a,kK:()=>r});var o=n(2691);function r(e){return e instanceof(0,o.Z)(e).Element||e instanceof Element}function i(e){return e instanceof(0,o.Z)(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof(0,o.Z)(e).ShadowRoot||e instanceof ShadowRoot)}},6004:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(9331);function r(e){var t=(0,o.Z)(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}},1403:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(4774),r=n(6004),i=n(6669),a=n(9299);function s(e){return["html","body","#document"].indexOf((0,i.Z)(e))>=0?e.ownerDocument.body:(0,a.Re)(e)&&(0,r.Z)(e)?e:s((0,o.Z)(e))}var f=n(2691);function c(e,t){var n;void 0===t&&(t=[]);var i=s(e),a=i===(null==(n=e.ownerDocument)?void 0:n.body),u=(0,f.Z)(i),p=a?[u].concat(u.visualViewport||[],(0,r.Z)(i)?i:[]):i,l=t.concat(p);return a?l:l.concat(c((0,o.Z)(p)))}},9037:(e,t,n)=>{n.d(t,{BL:()=>f,Ct:()=>h,F2:()=>i,I:()=>r,Pj:()=>p,YP:()=>d,k5:()=>l,mv:()=>s,t$:()=>a,ut:()=>c,we:()=>o,xs:()=>v,zV:()=>u});var o="top",r="bottom",i="right",a="left",s=[o,r,i,a],f="start",c="end",u="clippingParents",p="viewport",l="popper",d="reference",h=[].concat(s,["auto"]).reduce((function(e,t){return e.concat([t,t+"-"+f,t+"-"+c])}),[]),v=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},915:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a,distanceAndSkiddingToXY:()=>i});var o=n(7149),r=n(9037);function i(e,t,n){var i=(0,o.Z)(e),a=[r.t$,r.we].indexOf(i)>=0?-1:1,s="function"==typeof n?n(Object.assign({},t,{placement:e})):n,f=s[0],c=s[1];return f=f||0,c=(c||0)*a,[r.t$,r.F2].indexOf(i)>=0?{x:c,y:f}:{x:f,y:c}}const a={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,a=n.offset,s=void 0===a?[0,0]:a,f=r.Ct.reduce((function(e,n){return e[n]=i(n,t.rects,s),e}),{}),c=f[t.placement],u=c.x,p=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=f}}},8511:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var o=n(9037),r=n(7149),i=n(3585),a=n(4634);function s(e,t,n){return(0,a.Fp)(e,(0,a.VV)(t,n))}var f=n(3831),c=n(276),u=n(610),p=n(7947),l=n(8412);const d={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,d=e.name,h=n.mainAxis,v=void 0===h||h,m=n.altAxis,g=void 0!==m&&m,y=n.boundary,Z=n.rootBoundary,w=n.altBoundary,b=n.padding,x=n.tether,O=void 0===x||x,j=n.tetherOffset,k=void 0===j?0:j,E=(0,u.Z)(t,{boundary:y,rootBoundary:Z,padding:b,altBoundary:w}),R=(0,r.Z)(t.placement),M=(0,p.Z)(t.placement),L=!M,A=(0,i.Z)(R),D="x"===A?"y":"x",F=t.modifiersData.popperOffsets,P=t.rects.reference,V=t.rects.popper,W="function"==typeof k?k(Object.assign({},t.rects,{placement:t.placement})):k,T="number"==typeof W?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0};if(F){if(v){var B,C="y"===A?o.we:o.t$,S="y"===A?o.I:o.F2,I="y"===A?"height":"width",$=F[A],q=$+E[C],K=$-E[S],z=O?-V[I]/2:0,Y=M===o.BL?P[I]:V[I],U=M===o.BL?-V[I]:-P[I],_=t.elements.arrow,X=O&&_?(0,f.Z)(_):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,l.Z)(),J=G[C],Q=G[S],ee=s(0,P[I],X[I]),te=L?P[I]/2-z-ee-J-T.mainAxis:Y-ee-J-T.mainAxis,ne=L?-P[I]/2+z+ee+Q+T.mainAxis:U+ee+Q+T.mainAxis,oe=t.elements.arrow&&(0,c.Z)(t.elements.arrow),re=oe?"y"===A?oe.clientTop||0:oe.clientLeft||0:0,ie=null!=(B=null==H?void 0:H[A])?B:0,ae=$+te-ie-re,se=$+ne-ie,fe=s(O?(0,a.VV)(q,ae):q,$,O?(0,a.Fp)(K,se):K);F[A]=fe,N[A]=fe-$}if(g){var ce,ue="x"===A?o.we:o.t$,pe="x"===A?o.I:o.F2,le=F[D],de="y"===D?"height":"width",he=le+E[ue],ve=le-E[pe],me=-1!==[o.we,o.t$].indexOf(R),ge=null!=(ce=null==H?void 0:H[D])?ce:0,ye=me?he:le-P[de]-V[de]-ge+T.altAxis,Ze=me?le+P[de]+V[de]-ge-T.altAxis:ve,we=O&&me?function(e,t,n){var o=s(e,t,n);return o>n?n:o}(ye,le,Ze):s(O?ye:he,le,O?Ze:ve);F[D]=we,N[D]=we-le}t.modifiersData[d]=N}},requiresIfExists:["offset"]}},238:(e,t,n)=>{n.r(t),n.d(t,{createPopper:()=>F,defaultModifiers:()=>D,detectOverflow:()=>b.Z,popperGenerator:()=>w});var o=n(6874),r=n(1722),i=n(2691),a=n(9299),s=n(6669),f=n(806),c=n(6394),u=n(6004),p=n(4634);function l(e,t,n){void 0===n&&(n=!1);var l,d,h=(0,a.Re)(t),v=(0,a.Re)(t)&&function(e){var t=e.getBoundingClientRect(),n=(0,p.NM)(t.width)/e.offsetWidth||1,o=(0,p.NM)(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),m=(0,c.Z)(t),g=(0,o.Z)(e,v),y={scrollLeft:0,scrollTop:0},Z={x:0,y:0};return(h||!h&&!n)&&(("body"!==(0,s.Z)(t)||(0,u.Z)(m))&&(y=(l=t)!==(0,i.Z)(l)&&(0,a.Re)(l)?{scrollLeft:(d=l).scrollLeft,scrollTop:d.scrollTop}:(0,r.Z)(l)),(0,a.Re)(t)?((Z=(0,o.Z)(t,!0)).x+=t.clientLeft,Z.y+=t.clientTop):m&&(Z.x=(0,f.Z)(m))),{x:g.left+y.scrollLeft-Z.x,y:g.top+y.scrollTop-Z.y,width:g.width,height:g.height}}var d=n(3831),h=n(1403),v=n(276),m=n(9037);function g(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}var y={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function w(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?y:r;return function(e,t,n){void 0===n&&(n=i);var r,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},y,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,p={state:f,setOptions:function(n){var r="function"==typeof n?n(f.options):n;w(),f.options=Object.assign({},i,f.options,r),f.scrollParents={reference:(0,a.kK)(e)?(0,h.Z)(e):e.contextElement?(0,h.Z)(e.contextElement):[],popper:(0,h.Z)(t)};var s,u,l=function(e){var t=g(e);return m.xs.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),u=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))));return f.orderedModifiers=l.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:f,name:t,instance:p,options:o});c.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!u){var e=f.elements,t=e.reference,n=e.popper;if(Z(t,n)){f.rects={reference:l(t,(0,v.Z)(n),"fixed"===f.options.strategy),popper:(0,d.Z)(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<f.orderedModifiers.length;o++)if(!0!==f.reset){var r=f.orderedModifiers[o],i=r.fn,a=r.options,s=void 0===a?{}:a,c=r.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:p})||f)}else f.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(e){p.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(r())}))}))),s}),destroy:function(){w(),u=!0}};if(!Z(e,t))return p;function w(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var b=n(610),x={passive:!0};const O={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=void 0===r||r,s=o.resize,f=void 0===s||s,c=(0,i.Z)(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,x)})),f&&c.addEventListener("resize",n.update,x),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,x)})),f&&c.removeEventListener("resize",n.update,x)}},data:{}};var j=n(6811);const k={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=(0,j.Z)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var E=n(9331),R=n(7149),M=n(7947),L={top:"auto",right:"auto",bottom:"auto",left:"auto"};function A(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,s=e.offsets,f=e.position,u=e.gpuAcceleration,l=e.adaptive,d=e.roundOffsets,h=e.isFixed,g=s.x,y=void 0===g?0:g,Z=s.y,w=void 0===Z?0:Z,b="function"==typeof d?d({x:y,y:w}):{x:y,y:w};y=b.x,w=b.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),j=m.t$,k=m.we,R=window;if(l){var M=(0,v.Z)(n),A="clientHeight",D="clientWidth";M===(0,i.Z)(n)&&(M=(0,c.Z)(n),"static"!==(0,E.Z)(M).position&&"absolute"===f&&(A="scrollHeight",D="scrollWidth")),(r===m.we||(r===m.t$||r===m.F2)&&a===m.ut)&&(k=m.I,w-=(h&&M===R&&R.visualViewport?R.visualViewport.height:M[A])-o.height,w*=u?1:-1),r!==m.t$&&(r!==m.we&&r!==m.I||a!==m.ut)||(j=m.F2,y-=(h&&M===R&&R.visualViewport?R.visualViewport.width:M[D])-o.width,y*=u?1:-1)}var F,P=Object.assign({position:f},l&&L),V=!0===d?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:(0,p.NM)(t*o)/o||0,y:(0,p.NM)(n*o)/o||0}}({x:y,y:w}):{x:y,y:w};return y=V.x,w=V.y,u?Object.assign({},P,((F={})[k]=O?"0":"",F[j]=x?"0":"",F.transform=(R.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",F)):Object.assign({},P,((t={})[k]=O?w+"px":"",t[j]=x?y+"px":"",t.transform="",t))}var D=[O,k,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:(0,R.Z)(t.placement),variation:(0,M.Z)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,A(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,A(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];(0,a.Re)(r)&&(0,s.Z)(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});(0,a.Re)(o)&&(0,s.Z)(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]}],F=w({defaultModifiers:D})},6811:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(7149),r=n(7947),i=n(3585),a=n(9037);function s(e){var t,n=e.reference,s=e.element,f=e.placement,c=f?(0,o.Z)(f):null,u=f?(0,r.Z)(f):null,p=n.x+n.width/2-s.width/2,l=n.y+n.height/2-s.height/2;switch(c){case a.we:t={x:p,y:n.y-s.height};break;case a.I:t={x:p,y:n.y+n.height};break;case a.F2:t={x:n.x+n.width,y:l};break;case a.t$:t={x:n.x-s.width,y:l};break;default:t={x:n.x,y:n.y}}var d=c?(0,i.Z)(c):null;if(null!=d){var h="y"===d?"height":"width";switch(u){case a.BL:t[d]=t[d]-(n[h]/2-s[h]/2);break;case a.ut:t[d]=t[d]+(n[h]/2-s[h]/2)}}return t}},610:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(9037),r=n(2691),i=n(6394),a=n(806),s=n(9331),f=n(1722),c=n(4634),u=n(1403),p=n(276),l=n(9299),d=n(6874),h=n(4774),v=n(6669);function m(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function g(e,t){return t===o.Pj?m(function(e){var t=(0,r.Z)(e),n=(0,i.Z)(e),o=t.visualViewport,s=n.clientWidth,f=n.clientHeight,c=0,u=0;return o&&(s=o.width,f=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=o.offsetLeft,u=o.offsetTop)),{width:s,height:f,x:c+(0,a.Z)(e),y:u}}(e)):(0,l.kK)(t)?function(e){var t=(0,d.Z)(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):m(function(e){var t,n=(0,i.Z)(e),o=(0,f.Z)(e),r=null==(t=e.ownerDocument)?void 0:t.body,u=(0,c.Fp)(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),p=(0,c.Fp)(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),l=-o.scrollLeft+(0,a.Z)(e),d=-o.scrollTop;return"rtl"===(0,s.Z)(r||n).direction&&(l+=(0,c.Fp)(n.clientWidth,r?r.clientWidth:0)-u),{width:u,height:p,x:l,y:d}}((0,i.Z)(e)))}var y=n(6811),Z=n(8412);function w(e,t){void 0===t&&(t={});var n,r=t,a=r.placement,f=void 0===a?e.placement:a,w=r.boundary,b=void 0===w?o.zV:w,x=r.rootBoundary,O=void 0===x?o.Pj:x,j=r.elementContext,k=void 0===j?o.k5:j,E=r.altBoundary,R=void 0!==E&&E,M=r.padding,L=void 0===M?0:M,A=function(e){return Object.assign({},(0,Z.Z)(),e)}("number"!=typeof L?L:(n=L,o.mv.reduce((function(e,t){return e[t]=n,e}),{}))),D=k===o.k5?o.YP:o.k5,F=e.rects.popper,P=e.elements[R?D:k],V=function(e,t,n){var o="clippingParents"===t?function(e){var t=(0,u.Z)((0,h.Z)(e)),n=["absolute","fixed"].indexOf((0,s.Z)(e).position)>=0&&(0,l.Re)(e)?(0,p.Z)(e):e;return(0,l.kK)(n)?t.filter((function(e){return(0,l.kK)(e)&&function(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,l.Zq)(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}(e,n)&&"body"!==(0,v.Z)(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),i=r[0],a=r.reduce((function(t,n){var o=g(e,n);return t.top=(0,c.Fp)(o.top,t.top),t.right=(0,c.VV)(o.right,t.right),t.bottom=(0,c.VV)(o.bottom,t.bottom),t.left=(0,c.Fp)(o.left,t.left),t}),g(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}((0,l.kK)(P)?P:P.contextElement||(0,i.Z)(e.elements.popper),b,O),W=(0,d.Z)(e.elements.reference),T=(0,y.Z)({reference:W,element:F,strategy:"absolute",placement:f}),H=m(Object.assign({},F,T)),N=k===o.k5?H:W,B={top:V.top-N.top+A.top,bottom:N.bottom-V.bottom+A.bottom,left:V.left-N.left+A.left,right:N.right-V.right+A.right},C=e.modifiersData.offset;if(k===o.k5&&C){var S=C[f];Object.keys(B).forEach((function(e){var t=[o.F2,o.I].indexOf(e)>=0?1:-1,n=[o.we,o.I].indexOf(e)>=0?"y":"x";B[e]+=S[n]*t}))}return B}},7149:(e,t,n)=>{function o(e){return e.split("-")[0]}n.d(t,{Z:()=>o})},8412:(e,t,n)=>{function o(){return{top:0,right:0,bottom:0,left:0}}n.d(t,{Z:()=>o})},3585:(e,t,n)=>{function o(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}n.d(t,{Z:()=>o})},7947:(e,t,n)=>{function o(e){return e.split("-")[1]}n.d(t,{Z:()=>o})},4634:(e,t,n)=>{n.d(t,{Fp:()=>o,NM:()=>i,VV:()=>r});var o=Math.max,r=Math.min,i=Math.round}}]);