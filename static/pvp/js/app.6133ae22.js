(function(){var e={79105:function(e,n,t){var r={"./vi.json":[55520,935],"./zh-CN.json":[52819,28]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t.t(o,19)}))}o.keys=function(){return Object.keys(r)},o.id=79105,e.exports=o},44664:function(e,n,t){"use strict";var r=t(53751),o=t(20641);function i(e,n,t,r,i,u){const a=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(a)}var u={name:"App",props:[],components:{},data:function(){return{}}},a=t(66262);const c=(0,a.A)(u,[["render",i]]);var f=c,s=t(93474),l=t(75220);const d=()=>Promise.all([t.e(182),t.e(934),t.e(692),t.e(96),t.e(8)]).then(t.bind(t,7008)),p=()=>Promise.all([t.e(182),t.e(934),t.e(486)]).then(t.bind(t,24486)),h=()=>Promise.all([t.e(182),t.e(692),t.e(739),t.e(608)]).then(t.bind(t,32608)),v=()=>Promise.all([t.e(182),t.e(934),t.e(137)]).then(t.bind(t,18137)),m=()=>Promise.all([t.e(182),t.e(934),t.e(692),t.e(96),t.e(739),t.e(668)]).then(t.bind(t,11486)),b=[{path:"/",name:"index",component:d},{path:"/sandbox",name:"sandbox",component:p},{path:"/desert",name:"desert",component:h},{path:"/changelog",name:"changelog",component:v},{path:"/post",name:"post",component:m},{path:"/:id(\\d+)",name:"single",component:()=>Promise.all([t.e(692),t.e(96),t.e(739),t.e(50)]).then(t.bind(t,22006))}],g=(0,l.aE)({history:(0,l.LA)("/pvp"),routes:b});var y=g,O=t(38839),j=t(46625),w=t(47487),k=t(76428),E=t(48548),C=t(29961),P=t(93810);const A=(0,r.Ef)(f),_=(0,s.Zf)();A.use(_),A.use(y),A.use((0,O.Ey)()),A.use(k.Ay),A.use(j.A,{locale:w.A});for(const[N,x]of Object.entries(E))A.component(N,x);(0,C.a)(A),P.A.installVue3(A),A.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);t.r(i);var u={};e=e||[null,n({}),n([]),n(n)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(e){u[e]=function(){return r[e]}}));return u["default"]=function(){return r},t.d(i,u),i}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+({28:"zh-CN-json",935:"vi-json"}[e]||e)+"."+{8:"d0dc08c8",28:"6299ccc1",50:"f94b2af9",96:"6df3fa47",137:"1e8cf44f",182:"d265d2f8",486:"b4c3a41e",608:"e7e54c77",668:"d93ebb16",692:"5da7bcb7",739:"02209049",934:"1b19a81b",935:"ba6459d6"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{8:"f0d71cd7",50:"ca2656b1",96:"13602f6c",137:"ab393853",486:"d162543b",608:"f2a8febc",668:"9e174abe",739:"f9c9e780",934:"c91333c5"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="pvp:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="https://vl3box.com/static/pvp/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var u=t&&t.type,a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={8:1,50:1,96:1,137:1,486:1,608:1,668:1,739:1,934:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(n&&n(r);f<u.length;f++)i=u[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkpvp"]=self["webpackChunkpvp"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(44664)}));r=t.O(r)})();
//# sourceMappingURL=app.6133ae22.js.map