(function(n){function e(e){for(var c,a,r=e[0],s=e[1],d=e[2],i=0,f=[];i<r.length;i++)a=r[i],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&f.push(u[a][0]),u[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(n[c]=s[c]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],c=!0,a=1;a<t.length;a++){var r=t[a];0!==u[r]&&(c=!1)}c&&(o.splice(e--,1),n=s(s.s=t[0]))}return n}var c={},a={index:0},u={index:0},o=[];function r(n){return s.p+"js/"+({}[n]||n)+"."+{"chunk-0b46d9b3":"01b442a8","chunk-14d7b5e2":"49fa574d","chunk-179abe49":"34d8c465","chunk-2b4f38e9":"93799b03","chunk-2d216214":"6ab50da4","chunk-72db90c9":"693b2cb8","chunk-922c6768":"401dbe91","chunk-74670451":"91953a72","chunk-a12b599a":"c0fefb66","chunk-344bd854":"8a1690cb","chunk-358998b3":"8dff8abf","chunk-3bfc0259":"e1f3e228","chunk-3c5dd817":"c370a31f","chunk-271fc172":"ef692da0","chunk-64942880":"17a62528","chunk-717f705f":"6b59d498","chunk-a454450a":"30feb990","chunk-b28be826":"2bec0216","chunk-d5e41df0":"2972a982","chunk-e20c0180":"96474015","chunk-e2b5c0c4":"25d85dc0","chunk-f100516c":"d1174b57","chunk-fbd24d34":"bc50eb3f","chunk-435e298a":"b78d5810","chunk-48e5b408":"e673a6a2","chunk-4cb248c4":"adea0a33","chunk-574922ac":"3b90fd34","chunk-5cbf9945":"111e30f9","chunk-7dea8f24":"1d4f3d65","chunk-7fd6118c":"e6c3d1cb","chunk-83f500d0":"786a6de5","chunk-8e02dab4":"6d3fd6a1","chunk-d57d4b8e":"0f06c70e","chunk-d7fa4d42":"1e3ac75d","chunk-dba3e61a":"fcf26da7","chunk-f0445c64":"dfb1eb99","chunk-f95608d8":"b263f6f4"}[n]+".js"}function s(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(n){var e=[],t={"chunk-0b46d9b3":1,"chunk-14d7b5e2":1,"chunk-179abe49":1,"chunk-2b4f38e9":1,"chunk-72db90c9":1,"chunk-922c6768":1,"chunk-74670451":1,"chunk-a12b599a":1,"chunk-344bd854":1,"chunk-358998b3":1,"chunk-3bfc0259":1,"chunk-3c5dd817":1,"chunk-271fc172":1,"chunk-64942880":1,"chunk-717f705f":1,"chunk-a454450a":1,"chunk-b28be826":1,"chunk-d5e41df0":1,"chunk-e20c0180":1,"chunk-e2b5c0c4":1,"chunk-f100516c":1,"chunk-fbd24d34":1,"chunk-435e298a":1,"chunk-48e5b408":1,"chunk-4cb248c4":1,"chunk-574922ac":1,"chunk-5cbf9945":1,"chunk-7dea8f24":1,"chunk-7fd6118c":1,"chunk-83f500d0":1,"chunk-8e02dab4":1,"chunk-d57d4b8e":1,"chunk-d7fa4d42":1,"chunk-dba3e61a":1,"chunk-f0445c64":1,"chunk-f95608d8":1};a[n]?e.push(a[n]):0!==a[n]&&t[n]&&e.push(a[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-0b46d9b3":"cc01edb6","chunk-14d7b5e2":"72ad67ed","chunk-179abe49":"0caabdf0","chunk-2b4f38e9":"08d9dc27","chunk-2d216214":"31d6cfe0","chunk-72db90c9":"181545fe","chunk-922c6768":"268c6e79","chunk-74670451":"d90ac10c","chunk-a12b599a":"52129120","chunk-344bd854":"5f0c20bc","chunk-358998b3":"a02d81ef","chunk-3bfc0259":"d8e8d018","chunk-3c5dd817":"ce2a9c28","chunk-271fc172":"3f570387","chunk-64942880":"05c22b39","chunk-717f705f":"6814e7d8","chunk-a454450a":"9c26d1d3","chunk-b28be826":"41e34023","chunk-d5e41df0":"9ad743d4","chunk-e20c0180":"df96141c","chunk-e2b5c0c4":"90db6469","chunk-f100516c":"c3c61c72","chunk-fbd24d34":"1fbdeb87","chunk-435e298a":"80823869","chunk-48e5b408":"b72703c7","chunk-4cb248c4":"9efc80b0","chunk-574922ac":"2d0e6cba","chunk-5cbf9945":"1984e7c5","chunk-7dea8f24":"510af41d","chunk-7fd6118c":"ae5fc5c7","chunk-83f500d0":"0ffae7d3","chunk-8e02dab4":"03a551c9","chunk-d57d4b8e":"4b370131","chunk-d7fa4d42":"9b1a6b05","chunk-dba3e61a":"999f724a","chunk-f0445c64":"9b1a6b05","chunk-f95608d8":"3f07197c"}[n]+".css",u=s.p+c,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var d=o[r],i=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(i===c||i===u))return e()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){d=f[r],i=d.getAttribute("data-href");if(i===c||i===u)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var c=e&&e.target&&e.target.src||u,o=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[n],h.parentNode.removeChild(h),t(o)},h.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){a[n]=0})));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise((function(e,t){c=u[n]=[e,t]}));e.push(c[2]=o);var d,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=r(n);var f=new Error;d=function(e){i.onerror=i.onload=null,clearTimeout(h);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+n+" failed.\n("+c+": "+a+")",f.name="ChunkLoadError",f.type=c,f.request=a,t[1](f)}u[n]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:i})}),12e4);i.onerror=i.onload=d,document.head.appendChild(i)}return Promise.all(e)},s.m=n,s.c=c,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)s.d(t,c,function(e){return n[e]}.bind(null,c));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="https://vl3box.com/static/dashboard/",s.oe=function(n){throw console.error(n),n};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var f=0;f<d.length;f++)e(d[f]);var h=i;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("7ea5")},1463:function(n,e,t){},4678:function(n,e,t){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-ps":"4c98","./ar-ps.js":"4c98","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku-kmr":"7558","./ku-kmr.js":"7558","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"64030","./ms-my.js":"64030","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(n){var e=u(n);return t(e)}function u(n){if(!t.o(c,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return c[n]}a.keys=function(){return Object.keys(c)},a.resolve=u,n.exports=a,a.id="4678"},"4ed7":function(n,e,t){"use strict";t("1463")},"6bff":function(n,e,t){"use strict";t("bf4c")},"7cb7":function(n,e,t){var c={"./bilibili.svg":"175f","./douyu.svg":"b119","./github.svg":"bffd","./huya.svg":"046a","./msg.svg":"aa9d","./weibo.svg":"50b5"};function a(n){var e=u(n);return t(e)}function u(n){if(!t.o(c,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return c[n]}a.keys=function(){return Object.keys(c)},a.resolve=u,n.exports=a,a.id="7cb7"},"7ea5":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=t("4eb5"),u=t.n(a),o=t("5c96"),r=t.n(o),s=(t("0fae"),t("16e5")),d=t("6a69"),i=(t("6b30"),t("c5b4"),t("caad"),t("d3b7"),t("ac1f"),t("2532"),t("3ca3"),t("5319"),t("ddb0"),t("8c4f")),f=i["a"].prototype.push;i["a"].prototype.push=function(n){return f.call(this,n).catch((function(n){return n}))};var h=function(){return Promise.all([t.e("chunk-3c5dd817"),t.e("chunk-717f705f")]).then(t.bind(null,"1e4b"))},b=function(){return t.e("chunk-344bd854").then(t.bind(null,"33de"))},l=function(){return Promise.all([t.e("chunk-2d216214"),t.e("chunk-922c6768"),t.e("chunk-74670451")]).then(t.bind(null,"b54a"))},m=function(){return t.e("chunk-0b46d9b3").then(t.bind(null,"d51a"))},p=function(){return t.e("chunk-2b4f38e9").then(t.bind(null,"9df5"))},k=function(){return Promise.all([t.e("chunk-3c5dd817"),t.e("chunk-271fc172")]).then(t.bind(null,"9be6"))},j=function(){return Promise.all([t.e("chunk-3c5dd817"),t.e("chunk-e20c0180")]).then(t.bind(null,"a83c"))},v=function(){return Promise.all([t.e("chunk-3c5dd817"),t.e("chunk-fbd24d34")]).then(t.bind(null,"3f95"))},g=function(){return Promise.all([t.e("chunk-3c5dd817"),t.e("chunk-b28be826")]).then(t.bind(null,"4039"))},y=function(){return t.e("chunk-7fd6118c").then(t.bind(null,"ff9a"))},w=function(){return t.e("chunk-574922ac").then(t.bind(null,"88bc"))},_=function(){return t.e("chunk-f0445c64").then(t.bind(null,"e963"))},x=function(){return t.e("chunk-14d7b5e2").then(t.bind(null,"f516"))},z=function(){return t.e("chunk-d7fa4d42").then(t.bind(null,"31dd"))},O=function(){return t.e("chunk-f95608d8").then(t.bind(null,"6d24"))},P=function(){return t.e("chunk-48e5b408").then(t.bind(null,"337f"))},M=function(){return Promise.all([t.e("chunk-3c5dd817"),t.e("chunk-f100516c")]).then(t.bind(null,"b3b1"))},C=function(){return Promise.all([t.e("chunk-3c5dd817"),t.e("chunk-d5e41df0")]).then(t.bind(null,"4208"))},L=function(){return Promise.all([t.e("chunk-3c5dd817"),t.e("chunk-a454450a")]).then(t.bind(null,"7cb6"))},T=function(){return Promise.all([t.e("chunk-3c5dd817"),t.e("chunk-e2b5c0c4")]).then(t.bind(null,"b622a"))},E=function(){return Promise.all([t.e("chunk-3c5dd817"),t.e("chunk-64942880")]).then(t.bind(null,"fe82"))},N=function(){return t.e("chunk-3bfc0259").then(t.bind(null,"f121"))},S=function(){return t.e("chunk-dba3e61a").then(t.bind(null,"0fe0"))},D=function(){return t.e("chunk-8e02dab4").then(t.bind(null,"e097"))},I=function(){return t.e("chunk-d57d4b8e").then(t.bind(null,"c6bd"))},Y=function(){return t.e("chunk-358998b3").then(t.bind(null,"7984"))},A=function(){return t.e("chunk-5cbf9945").then(t.bind(null,"b8fd"))},B=function(){return t.e("chunk-4cb248c4").then(t.bind(null,"ed5e"))},H=function(){return t.e("chunk-83f500d0").then(t.bind(null,"2ede"))},U=function(){return t.e("chunk-179abe49").then(t.bind(null,"8435"))},$=function(){return t.e("chunk-7dea8f24").then(t.bind(null,"b286"))};c["default"].use(i["a"]);var q=[{name:"index",path:"/",component:h},{name:"msg",path:"/msg",component:b},{name:"letter",path:"/letter",component:l},{name:"fav",path:"/fav/:subtype?",component:m},{name:"purchases",path:"/purchases",component:p},{name:"frame",path:"/frame",component:k},{name:"theme",path:"/theme",component:j},{name:"emotion",path:"/emotion",component:v},{name:"honor",path:"/honor",component:g},{name:"mall",path:"/mall",component:A},{name:"orders",path:"/orders",component:y},{name:"packet",path:"/packet",component:w},{name:"boxcoin",path:"/boxcoin",component:_},{name:"cny",path:"/cny",component:z},{name:"points",path:"/points",component:x},{name:"tasks",path:"/tasks",component:O},{name:"card",path:"/card",component:P},{name:"profile",path:"/profile",component:M},{name:"avatar",path:"/avatar",component:C},{name:"pwd",path:"/pwd",component:L},{name:"email",path:"/email",component:T},{name:"connect",path:"/connect",component:E},{name:"config",path:"/config",component:N},{name:"cooperation",path:"/cooperation",component:D},{name:"privacy",path:"/privacy",component:S},{name:"filter",path:"/filter",component:H},{name:"address",path:"/address",component:Y},{name:"order-detail",path:"/mall-detail/:id",component:B},{name:"feedback",path:"/feedback",component:I,redirect:{name:"feedback_index"},children:[{name:"feedback_index",path:"/feedback",component:function(){return t.e("chunk-435e298a").then(t.bind(null,"39a2"))}},{name:"feedback_erase",path:"/feedback/erase",component:function(){return Promise.all([t.e("chunk-2d216214"),t.e("chunk-72db90c9")]).then(t.bind(null,"954e"))}},{name:"feedback_single",path:"/feedback/:id",component:function(){return Promise.all([t.e("chunk-2d216214"),t.e("chunk-922c6768"),t.e("chunk-a12b599a")]).then(t.bind(null,"b8d3"))}}]},{name:"invitation_creators",path:"/callback/invitation/creators",component:U},{name:"invitation_kith",path:"/callback/invitation/kith",component:$}],F=new i["a"]({routes:q,mode:"history",base:"/dashboard"});F.beforeEach((function(n,e,t){n.fullPath.includes("/#")&&t(n.fullPath.replace("/#","")),t()}));var J=F,V=t("2f62"),K=t("8e44");c["default"].use(V["a"]);var R={state:{userdata:"",client:location.href.includes("origin")?"origin":"std",isTeammate:!1},mutations:{setIsTeammate:function(n,e){n.isTeammate=e}},getters:{},actions:{getIsTeammate:function(n){var e=n.commit;Object(K["e"])().then((function(n){e("setIsTeammate",n.data.data)})).catch((function(n){console.log(n)}))}},modules:{}},G=new V["a"].Store(R),Q=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("Breadcrumb",{attrs:{name:"个人中心",slug:"dashboard",root:"/dashboard",crumbEnable:!0}},[e("svg",{attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 341.3 341.3","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[e("path",{attrs:{d:"M136.6 137.2h67.1v67.1h-67.1zM36 36.5h67.1v67.1H36zM136.6 237.8h67.1v67.1h-67.1zM36 137.2h67.1v67.1H36zM36 237.8h67.1v67.1H36zM237.2 36.5h67.1v67.1h-67.1zM136.6 36.5h67.1v67.1h-67.1zM237.2 137.2h67.1v67.1h-67.1zM237.2 237.8h67.1v67.1h-67.1z"}})]),e("Info")],1),e("LeftSidebar",[e("Nav")],1),e("Main",{staticClass:"m-dashboard-container",attrs:{withoutRight:!0}},[e("router-view")],1)],1)},W=[],X=function(){var n=this,e=n._self._c;return e("div",{staticClass:"m-info"},[e("div",{staticClass:"u-stat"}),e("div",{staticClass:"u-home"},[e("a",{staticClass:"el-button el-button--default is-plain",attrs:{href:n.home}},[e("svg",{class:"u-home-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{d:"M256 152.96L79.894 288.469v181.549h141.507V336.973h75.175v133.045h135.531V288.469z"}}),e("path",{attrs:{d:"M439.482 183.132V90.307h-74.166v35.77L256 41.982 0 238.919l35.339 45.936L256 115.062l220.662 169.794L512 238.92z"}})]),n._v("个人主页")])])])},Z=[],nn=t("85e4"),en=t("c9d2"),tn={name:"Info",props:[],data:function(){return{uid:en["a"].getInfo().uid}},computed:{home:function(){return Object(nn["authorLink"])(this.uid)}},methods:{},mounted:function(){}},cn=tn,an=(t("6bff"),t("2877")),un=Object(an["a"])(cn,X,Z,!1,null,null,null),on=un.exports,rn=(t("b0c0"),function(){var n=this,e=n._self._c;return e("nav",{staticClass:"m-nav"},[n._m(0),n._l(n.navList,(function(t){return e("div",{key:t.group_name},[e("h5",{staticClass:"u-title"},[n._v(n._s(t.group_name))]),e("div",{staticClass:"m-nav-group"},n._l(t.children,(function(t){return e("router-link",{key:t.path,class:n.isProfile(t.path)||n.isTheme(t.path)||n.isMall(t.path)||n.isMsg(t.path),attrs:{to:t.path}},[e("i",{class:t.icon}),e("span",[n._v(n._s(t.name))])])})),1)])}))],2)}),sn=[function(){var n=this,e=n._self._c;return e("a",{staticClass:"m-nav-publish el-button el-button--primary",attrs:{href:"/publish",target:"_blank"}},[e("span",[n._v("前往创作中心")])])}],dn=t("65c2"),fn=(t("2ca0"),function(n){return"/dashboard/"+n}),hn=t("c243"),bn=["profile","avatar","pwd","connect","email","address"],ln=["theme","frame","emotion","honor"],mn=["mall","orders"],pn=["msg","letter"],kn={name:"Nav",data:function(){return{feedback:dn["feedback"],navList:hn}},computed:{},methods:{catg_url:function(n){return fn("#/".concat(n))},isProfile:function(n){return"/profile"===n&&bn.includes(this.$route.name)?"on":""},isTheme:function(n){return"/frame"===n&&ln.includes(this.$route.name)?"on":""},isMall:function(n){return"/mall"===n&&mn.includes(this.$route.name)?"on":""},isMsg:function(n){return"/msg"===n&&pn.includes(this.$route.name)?"on":""}},mounted:function(){}},jn=kn,vn=(t("cd36"),Object(an["a"])(jn,rn,sn,!1,null,null,null)),gn=vn.exports,yn=function(){"www.jx3box.com"!=location.hostname&&"origin.jx3box.com"!=location.hostname||en["a"].isLogin()||(en["a"].destroy(),en["a"].toLogin())},wn={name:"dashboard",props:[],data:function(){return{}},methods:{},created:function(){yn()},components:{Info:on,Nav:gn}},_n=wn,xn=(t("4ed7"),Object(an["a"])(_n,Q,W,!1,null,null,null)),zn=xn.exports;c["default"].config.productionTip=!1,c["default"].use(u.a),c["default"].use(r.a),s["a"].install(c["default"]),c["default"].use(d["a"]),new c["default"]({router:J,store:G,render:function(n){return n(zn)}}).$mount("#app")},"899f":function(n,e,t){},"8e44":function(n,e,t){"use strict";t.d(e,"d",(function(){return o})),t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return r})),t.d(e,"e",(function(){return d})),t.d(e,"c",(function(){return i})),t.d(e,"f",(function(){return f}));var c=t("41cb"),a=t("c1df"),u=t.n(a);function o(n){return Object(c["c"])().get("/api/user/"+n+"/medals")}function r(){return Object(c["b"])().get("/api/cms/user/my/info",{params:{__no_cache:1}})}function s(n){return Object(c["d"])().get("/api/my/assets/history",{params:{start:n||u()().format("YYYYMMDD"),end:u()().add(1,"day").format("YYYYMMDD")}})}function d(){return Object(c["b"])().get("/api/cms/account/teammate")}function i(){return Object(c["b"])().get("/api/cms/account/teammate")}function f(n){return Object(c["b"])().post("/api/cms/upload",n)}},bf4c:function(n,e,t){},c243:function(n){n.exports=JSON.parse('[{"group_name":"我的仓库","children":[{"path":"/msg","name":"我的消息","icon":"el-icon-bell"},{"path":"/fav","name":"收藏订阅","icon":"el-icon-star-off"},{"path":"/purchases","name":"付费资源","icon":"el-icon-shopping-cart-2"},{"path":"/frame","name":"主题装扮","icon":"el-icon-brush"}]},{"group_name":"权益中心","children":[{"path":"/boxcoin","name":"我的盒币","icon":"el-icon-coin"},{"path":"/cny","name":"我的金箔","icon":"el-icon-wallet"},{"path":"/points","name":"我的银铛","icon":"el-icon-sugar"},{"path":"/card","name":"我的卡密","icon":"el-icon-bank-card"}]},{"group_name":"账号中心","children":[{"path":"/profile","name":"资料设置","icon":"el-icon-user"},{"path":"/privacy","name":"隐私设置","icon":"el-icon-ship"},{"path":"/config","name":"全局设置","icon":"el-icon-setting"},{"path":"/cooperation","name":"签约作者","icon":"el-icon-reading"}]},{"group_name":"服务中心","children":[{"path":"/mall","name":"订单中心","icon":"el-icon-shopping-bag-1"},{"path":"/tasks","name":"任务中心","icon":"el-icon-coffee-cup"},{"path":"/feedback","name":"反馈中心","icon":"el-icon-phone-outline"}]}]')},cd36:function(n,e,t){"use strict";t("899f")}});
//# sourceMappingURL=index.d5492975.js.map