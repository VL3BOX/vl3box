(function(){"use strict";var e={38691:function(e,n,t){var r=t(49963),o=t(66252);function i(e,n,t,r,i,a){const u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(u)}var a={name:"App",props:[],components:{},data:function(){return{}}},u=t(83744);const c=(0,u.Z)(a,[["render",i]]);var f=c,l=t(21232),s=t(22201);const d=()=>Promise.all([t.e(611),t.e(194),t.e(755),t.e(969),t.e(185)]).then(t.bind(t,23185)),p=()=>Promise.all([t.e(611),t.e(194),t.e(647)]).then(t.bind(t,2647)),h=()=>Promise.all([t.e(611),t.e(755),t.e(773),t.e(0)]).then(t.bind(t,29e3)),m=()=>Promise.all([t.e(611),t.e(194),t.e(722)]).then(t.bind(t,74722)),v=()=>Promise.all([t.e(611),t.e(194),t.e(755),t.e(969),t.e(773),t.e(46)]).then(t.bind(t,2108)),b=[{path:"/",name:"index",component:d},{path:"/sandbox",name:"sandbox",component:p},{path:"/desert",name:"desert",component:h},{path:"/changelog",name:"changelog",component:m},{path:"/post",name:"post",component:v},{path:"/:id(\\d+)",name:"single",component:()=>Promise.all([t.e(755),t.e(969),t.e(773),t.e(164)]).then(t.bind(t,67119))}],g=(0,s.p7)({history:(0,s.PO)("/pvp"),routes:b});var y=g,w=t(69876),O=t(28158),k=t(68642),j=t(65781),C=t(41604),P=t(45051);const x=(0,r.ri)(f),E=(0,l.G6)();x.use(E),x.use(y),x.use((0,w.WB)()),x.use(O.Z,{locale:k.Z});for(const[A,N]of Object.entries(j))x.component(A,N);(0,C.N)(x),P.Z.installVue3(x),x.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{0:"dbc95b26",46:"f38ac92c",164:"412a2f09",185:"44963fe5",194:"2899872b",611:"9b452cd3",647:"f0c28c1e",722:"f521f69a",755:"8948bb6f",773:"1438368c",969:"85006c75"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{0:"f2a8febc",46:"9e174abe",164:"7dead92b",185:"3b632ce6",194:"4a41166a",647:"5ffd3309",722:"ab393853",773:"f9c9e780",969:"f210be52"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="pvp:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="https://cdn.jx3box.com/static/pvp/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={0:1,46:1,164:1,185:1,194:1,647:1,722:1,773:1,969:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(n&&n(r);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkpvp"]=self["webpackChunkpvp"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(38691)}));r=t.O(r)})();
//# sourceMappingURL=app.e82afaea.js.map