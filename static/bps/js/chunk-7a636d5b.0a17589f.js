(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a636d5b"],{"07ac":function(e,t,n){"use strict";var a=n("23e7"),r=n("6f53").values;a({target:"Object",stat:!0},{values:function(e){return r(e)}})},3450:function(e,t,n){"use strict";n.r(t);n("caad"),n("d81d"),n("ac1f"),n("2532"),n("841c");var a=function(){var e=this,t=e._self._c;return t("AppLayout",[e.isSuperAuthor?t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"v-lua"},[t("div",{staticClass:"m-lua-index m-lua-box"},[t("div",{staticClass:"u-title"},[t("i",{staticClass:"el-icon-collection-tag"}),t("span",{staticClass:"u-title-list",on:{click:e.showList}},[e._v(e._s(e.$t("文件夹")))])]),e._l(e.schoolmap,(function(n,a){return t("div",{key:a,staticClass:"u-type",class:{on:e.current==a},on:{click:function(t){return e.changeType(a)}}},[t("img",{staticClass:"u-typeicon",attrs:{src:e._f("iconURL")(a)}}),t("span",[e._v(e._s(e.showTypeLabel(a)))])])}))],2),t("div",{staticClass:"m-lua-search"},[t("el-input",{staticClass:"input-with-select",attrs:{placeholder:e.$t("请输入关键词")},on:{change:e.searchLua},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[t("i",{staticClass:"el-icon-search"}),e._v(" "+e._s(e.$t("搜索")))]),t("el-button",{attrs:{slot:"append",icon:"el-icon-position"},on:{change:e.searchLua},slot:"append"})],1)],1),t("el-alert",{staticClass:"m-lua-warning",attrs:{title:e.$t("本功能仅内部作者可见，仅作为攻略写作的参考资料。禁止外传，违者后果自负！(本功能需要额外独立申请授权)"),type:"warning",effect:"dark","show-icon":"",closable:!1}}),t("div",{staticClass:"m-lua-tree m-lua-box"},[t("div",{staticClass:"u-title"},[t("i",{staticClass:"el-icon-collection-tag"}),t("span",{staticClass:"u-title-list",on:{click:e.showList}},[e._v(e._s(e.$t("文件列表")))]),t("span",{staticClass:"u-title-file"},[t("i",{staticClass:"el-icon-arrow-right"}),e._v(" "+e._s(e.file))]),e.data?t("div",{staticClass:"u-back",on:{click:e.showList}},[t("i",{staticClass:"el-icon-caret-left"}),e._v(" "+e._s(e.$t("返 回")))]):e._e()]),e._l(e.map,(function(n,a){return t("div",{directives:[{name:"show",rawName:"v-show",value:a==e.current&&!e.data,expression:"group == current && !data"}],key:a,staticClass:"u-item"},e._l(n,(function(n,r){return t("div",{key:r,staticClass:"u-subitem",class:{isHidden:e.search&&!e.hasResult(n)}},[t("div",{staticClass:"u-wrapper"},[e.isDirectory(n,r)?t("div",{staticClass:"u-container"},[t("div",{staticClass:"u-folder",on:{click:function(t){return e.showSubtree(t,a+r)}}},[t("i",{staticClass:"el-icon-folder"}),e._v(" "+e._s(r)+" ")]),t("div",{ref:a+r,refInFor:!0,staticClass:"u-subtree"},e._l(n,(function(n,a){return t("div",{directives:[{name:"show",rawName:"v-show",value:!e.search||n.includes(e.search),expression:"!search || lua.includes(search)"}],key:a,staticClass:"u-leaf",on:{click:function(t){return e.showCode(n)}}},[t("i",{staticClass:"el-icon-tickets"}),e._v(" "+e._s(n)+" ")])})),0)]):t("div",{staticClass:"u-leaf",on:{click:function(t){return e.showCode(n)}}},[t("i",{staticClass:"el-icon-tickets"}),e._v(" "+e._s(r)+" ")])])])})),0)})),t("div",{directives:[{name:"show",rawName:"v-show",value:e.data,expression:"data"}],staticClass:"u-data"},[t("div",{ref:"lua",staticClass:"u-code"},[t("pre",[t("code",{staticClass:"language-lua",attrs:{id:"lua"},domProps:{innerHTML:e._s(e.data)}})])])])],2)],1):t("div",{staticClass:"v-null"},[t("el-alert",{attrs:{type:"warning","show-icon":""}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("没有查看权限，仅"))),t("a",{attrs:{href:"/dashboard/#cooperation",target:"_blank"}},[e._v("【"+e._s(e.$t("签约作者"))+"】")]),e._v(e._s(e.$t("可见。")))])])],1)])},r=[],i=n("b85c"),s=(n("b64b"),n("d3b7"),n("07ac"),n("793d")),o=n("41cb");function l(e){return Object(o["c"])({mute:!0}).get("/api/lua/bps/index.json",{params:{client:e}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))}function c(e,t){var n="/api/lua/bps/",a=encodeURIComponent(t),r=n+a;return Object(o["c"])().get(r,{headers:{"content-type":"text/plain"},params:{client:e}}).catch((function(e){console.log(e)}))}var u=n("65c2"),f=n("7aaa"),d=n("46d4"),h=(n("f272"),n("a326"),{name:"Lua",components:{AppLayout:s["a"]},props:[],data:function(){return{loading:!1,map:{},schoolmap:f,current:"",data:"",file:"",search:""}},computed:{subtype:function(){return this.$store.state.subtype},school:function(){var e=this.subtype||"通用";return d[e]["school"]},school_name:function(){var e=Object.keys(f),t=Object.values(f),n=t.indexOf(this.school);return n>=0?e[n]:""},client:function(){return this.$store.state.client||"std"},isSuperAuthor:function(){return this.$store.state.isSuperAuthor||!1}},methods:{isDirectory:function(e,t){return Array.isArray(e)},showSubtree:function(e,t){this.$refs[t][0]["classList"].toggle("on")},showCode:function(e){this.file=e,this.loadLua(e)},showList:function(){this.file=this.current,this.data=""},loadMap:function(){var e=this;this.loading=!0,l(this.client).then((function(t){e.$store.state.isSuperAuthor=!0,e.map=t})).catch((function(t){e.$store.state.isSuperAuthor=!1})).finally((function(){e.loading=!1}))},loadLua:function(e){var t=this;this.loading=!0,c(this.client,e).then((function(e){t.data=e.data})).then((function(){var e=t.$refs.lua;e&&Prism.highlightAllUnder(e),t.$forceUpdate()})).finally((function(){t.loading=!1}))},changeType:function(e){this.file=this.current=e,this.data="",this.search=""},hasResult:function(e){if(this.isDirectory(e)){var t,n=Object(i["a"])(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.includes(this.search))return!0}}catch(r){n.e(r)}finally{n.f()}return!1}return e.includes(this.search)},searchLua:function(){this.data&&(this.data="")},showTypeLabel:function(e){var t={item:"物品","百战异闻录_玩家":"百战"};return t[e]||e}},filters:{iconURL:function(e){return u["__imgPath"]+"image/school/"+f[e]+".png"}},watch:{isSuperAuthor:{immediate:!0,handler:function(e){e&&(this.current=this.school_name,this.loadMap())}}}}),g=h,p=(n("a007"),n("2877")),v=Object(p["a"])(g,a,r,!1,null,null,null);t["default"]=v.exports},"390b":function(e,t,n){},"4d63":function(e,t,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("e330"),s=n("94ca"),o=n("7156"),l=n("9112"),c=n("7c73"),u=n("241c").f,f=n("3a9b"),d=n("44e7"),h=n("577e"),g=n("90d8"),p=n("9f7f"),v=n("aeb0"),b=n("cb2d"),m=n("d039"),y=n("1a2d"),w=n("69f3").enforce,k=n("2626"),x=n("b622"),_=n("fce3"),C=n("107c"),A=x("match"),S=r.RegExp,O=S.prototype,E=r.SyntaxError,j=i(O.exec),L=i("".charAt),P=i("".replace),$=i("".indexOf),N=i("".slice),I=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,R=/a/g,T=/a/g,M=new S(R)!==R,D=p.MISSED_STICKY,U=p.UNSUPPORTED_Y,z=a&&(!M||D||_||C||m((function(){return T[A]=!1,S(R)!==R||S(T)===T||"/a/i"!==String(S(R,"i"))}))),H=function(e){for(var t,n=e.length,a=0,r="",i=!1;a<=n;a++)t=L(e,a),"\\"!==t?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),r+=t):r+="[\\s\\S]":r+=t+L(e,++a);return r},W=function(e){for(var t,n=e.length,a=0,r="",i=[],s=c(null),o=!1,l=!1,u=0,f="";a<=n;a++){if(t=L(e,a),"\\"===t)t+=L(e,++a);else if("]"===t)o=!1;else if(!o)switch(!0){case"["===t:o=!0;break;case"("===t:j(I,N(e,a+1))&&(a+=2,l=!0),r+=t,u++;continue;case">"===t&&l:if(""===f||y(s,f))throw new E("Invalid capture group name");s[f]=!0,i[i.length]=[f,u],l=!1,f="";continue}l?f+=t:r+=t}return[r,i]};if(s("RegExp",z)){for(var q=function(e,t){var n,a,r,i,s,c,u=f(O,this),p=d(e),v=void 0===t,b=[],m=e;if(!u&&p&&v&&e.constructor===q)return e;if((p||f(O,e))&&(e=e.source,v&&(t=g(m))),e=void 0===e?"":h(e),t=void 0===t?"":h(t),m=e,_&&"dotAll"in R&&(a=!!t&&$(t,"s")>-1,a&&(t=P(t,/s/g,""))),n=t,D&&"sticky"in R&&(r=!!t&&$(t,"y")>-1,r&&U&&(t=P(t,/y/g,""))),C&&(i=W(e),e=i[0],b=i[1]),s=o(S(e,t),u?this:O,q),(a||r||b.length)&&(c=w(s),a&&(c.dotAll=!0,c.raw=q(H(e),n)),r&&(c.sticky=!0),b.length&&(c.groups=b)),e!==m)try{l(s,"source",""===m?"(?:)":m)}catch(y){}return s},F=u(S),B=0;F.length>B;)v(q,S,F[B++]);O.constructor=q,q.prototype=O,b(r,"RegExp",q,{constructor:!0})}k("RegExp")},"6f53":function(e,t,n){"use strict";var a=n("83ab"),r=n("d039"),i=n("e330"),s=n("e163"),o=n("df75"),l=n("fc6a"),c=n("d1e7").f,u=i(c),f=i([].push),d=a&&r((function(){var e=Object.create(null);return e[2]=2,!u(e,2)})),h=function(e){return function(t){var n,r=l(t),i=o(r),c=d&&null===s(r),h=i.length,g=0,p=[];while(h>g)n=i[g++],a&&!(c?n in r:u(r,n))||f(p,e?[n,r[n]]:r[n]);return p}};e.exports={entries:h(!0),values:h(!1)}},"793d":function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",[t("Header"),t("Breadcrumb",{attrs:{name:e.$t("职业专栏"),slug:"bps",root:"/bps",publishEnable:!1,adminEnable:!1,feedbackEnable:!0,crumbEnable:!0}},[t("Info")],1),t("LeftSidebar",[t("Nav",{staticClass:"m-nav"})],1),t("Main",{attrs:{withoutRight:!0}},[t("div",{staticClass:"m-main"},[t("tabs"),e._t("default")],2),t("Footer")],1)],1)},r=[],i=n("7748"),s=n("a078"),o=n("107b"),l={name:"App",props:[],data:function(){return{}},methods:{},components:{Info:i["a"],Nav:s["a"],tabs:o["a"]}},c=l,u=(n("b129"),n("2877")),f=Object(u["a"])(c,a,r,!1,null,null,null);t["a"]=f.exports},"7aaa":function(e){e.exports=JSON.parse('{"七秀":4,"万花":2,"五毒":9,"长歌":19,"天策":1,"少林":5,"明教":8,"苍云":18,"纯阳":3,"唐门":10,"藏剑":6,"丐帮":7,"霸刀":20,"蓬莱":21,"凌雪阁":22,"衍天":23,"北天药宗":24,"刀宗":26,"万灵山庄":29,"江湖":0,"item":"item","装备":"equip","轻功":"fly","经脉":"jm","阵法":"zf","秘笈":"mj","百战异闻录_玩家":"baizhan","八荒衡鉴":"bahuang","npc":"npc","global":"global"}')},"7ea6":function(e,t,n){},a007:function(e,t,n){"use strict";n("390b")},a15b:function(e,t,n){"use strict";var a=n("23e7"),r=n("e330"),i=n("44ad"),s=n("fc6a"),o=n("a640"),l=r([].join),c=i!==Object,u=c||!o("join",",");a({target:"Array",proto:!0,forced:u},{join:function(e){return l(s(this),void 0===e?",":e)}})},a326:function(e,t,n){},b129:function(e,t,n){"use strict";n("7ea6")},b85c:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d28b"),n("d9e2"),n("d3b7"),n("3ca3"),n("ddb0");var a=n("06c5");function r(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(a["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,s=e},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(l)throw s}}}}},c607:function(e,t,n){"use strict";var a=n("83ab"),r=n("fce3"),i=n("c6b6"),s=n("edd0"),o=n("69f3").get,l=RegExp.prototype,c=TypeError;a&&r&&s(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===i(this))return!!o(this).dotAll;throw new c("Incompatible receiver, RegExp required")}}})},c73d:function(e,t,n){"use strict";var a=n("23e7"),r=n("da84"),i=n("edd0"),s=n("83ab"),o=TypeError,l=Object.defineProperty,c=r.self!==r;try{if(s){var u=Object.getOwnPropertyDescriptor(r,"self");!c&&u&&u.get&&u.enumerable||i(r,"self",{get:function(){return r},set:function(e){if(this!==r)throw new o("Illegal invocation");l(r,"self",{value:e,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else a({global:!0,simple:!0,forced:c},{self:r})}catch(f){}},f272:function(e,t,n){(function(t){n("d9e2"),n("a15b"),n("d81d"),n("14d9"),n("fb6a"),n("e9c4"),n("b64b"),n("d3b7"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("00b4"),n("25f0"),n("466d"),n("5319"),n("159b"),n("c73d");var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},r=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var s in r={},n[i]=r,t)t.hasOwnProperty(s)&&(r[s]=e(t[s],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(l){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(l.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=i[o])}var c=r[e];return r[e]=s,a.languages.DFS(a.languages,(function(t,n){n===c&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,r,i){i=i||{};var s=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],c=a.util.type(l);"Object"!==c||i[s(l)]?"Array"!==c||i[s(l)]||(i[s(l)]=!0,e(l,n,o,i)):(i[s(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,s=0;i=r.elements[s++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var s=a.util.getLanguage(n),o=a.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var c={element:n,language:s,grammar:o,code:n.textContent};function u(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)}if(a.hooks.run("before-sanity-check",c),!c.code)return a.hooks.run("complete",c),void(i&&i.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var f=new Worker(a.filename);f.onmessage=function(e){u(e.data)},f.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var l in n)t[l]=n[l];delete t.rest}var c=new i;return s(c,c.head,e),function e(t,n,i,l,c,u,f){for(var d in i)if(i.hasOwnProperty(d)&&i[d]){var h=i[d];h=Array.isArray(h)?h:[h];for(var g=0;g<h.length;++g){if(f&&f==d+","+g)return;var p=h[g],v=p.inside,b=!!p.lookbehind,m=!!p.greedy,y=0,w=p.alias;if(m&&!p.pattern.global){var k=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,k+"g")}p=p.pattern||p;for(var x=l.next,_=c;x!==n.tail;_+=x.value.length,x=x.next){var C=x.value;if(n.length>t.length)return;if(!(C instanceof r)){var A=1;if(m&&x!=n.tail.prev){p.lastIndex=_;var S=p.exec(t);if(!S)break;var O=S.index+(b&&S[1]?S[1].length:0),E=S.index+S[0].length,j=_;for(j+=x.value.length;j<=O;)x=x.next,j+=x.value.length;if(j-=x.value.length,_=j,x.value instanceof r)continue;for(var L=x;L!==n.tail&&(j<E||"string"==typeof L.value&&!L.prev.value.greedy);L=L.next)A++,j+=L.value.length;A--,C=t.slice(_,j),S.index-=_}else{p.lastIndex=0;S=p.exec(C)}if(S){b&&(y=S[1]?S[1].length:0);O=S.index+y,S=S[0].slice(y),E=O+S.length;var P=C.slice(0,O),$=C.slice(E),N=x.prev;P&&(N=s(n,N,P),_+=P.length),o(n,N,A);var I=new r(d,v?a.tokenize(S,v):S,w,S,m);if(x=s(n,N,I),$&&s(n,x,$),1<A&&e(t,n,i,x.prev,_,!0,d+","+g),u)break}else if(u)break}}}}}(e,c,t,c.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(c)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function s(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function o(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;(t.next=a).prev=t,e.length-=r}if(e.Prism=a,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(i.classes,s):i.classes.push(s)),a.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener&&(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,s=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),s&&e.close()}),!1)),a;var l=a.util.currentScript();function c(){a.manual||a.highlightAll()}if(l&&(a.filename=l.src,l.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var u=document.readyState;"loading"===u||"interactive"===u&&l&&l.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return a}(a);e.exports&&(e.exports=r),"undefined"!=typeof t&&(t.Prism=r),r.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-7a636d5b.0a17589f.js.map