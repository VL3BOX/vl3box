(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={tv:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://vl3box.com/static/index/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([2,"chunk-vendors"]),a()})({2:function(t,e,a){t.exports=a("80f7")},"22b2":function(t,e,a){"use strict";a("986d")},4360:function(t,e,a){"use strict";a("caad"),a("2532");var n=a("2b0e"),i=a("2f62");n["default"].use(i["a"]);var s={state:{client:location.href.includes("origin")?"origin":"std",profile:{server:"蝶恋花"},server:"蝶恋花",config:{index_live_status:0,index_video_status:0,index_live_url:"",index_video_url:""},timezone:"Asia/Shanghai",showAlert:!1},mutations:{setShowAlert:function(t,e){t.showAlert=e}},getters:{showAlert:function(t){return t.showAlert}},actions:{},modules:{}};e["a"]=new i["a"].Store(s)},6208:function(t,e,a){"use strict";a("cfed")},"73ea":function(t,e,a){},"7cb7":function(t,e,a){var n={"./bilibili.svg":"175f","./douyu.svg":"b119","./github.svg":"bffd","./huya.svg":"046a","./msg.svg":"aa9d","./weibo.svg":"50b5"};function i(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="7cb7"},"80f7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("5c96"),s=a.n(i),r=a("6a69"),o=(a("6b30"),a("c5b4"),a("4360")),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-tv"},[e("Header",{attrs:{overlayEnable:!0}}),e("div",{staticClass:"m-tv-title"}),e("div",{staticClass:"m-tv-content",attrs:{loading:t.loading}},[e("List",{attrs:{data:t.list}}),e("Toolbar",{attrs:{total:t.total,pages:t.pages},on:{update:t.update}})],1),t._m(0),e("Footer",{attrs:{darkMode:""}})],1)},u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-jx3box"},[e("img",{staticClass:"u-img",attrs:{src:a("a8f1"),alt:"盒子娘"}})])}],l=(a("d3b7"),a("9911"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-tv-list"},[e("div",{staticClass:"wp"},[t.data&&t.data.length?t._l(t.data,(function(a,n){return e("a",{key:n,staticClass:"m-item",attrs:{href:a.link,target:"_blank"}},[e("el-image",{staticClass:"u-img",attrs:{src:t.resolveImagePath(a.img),fit:"cover"}}),e("span",{staticClass:"u-mark"})],1)})):e("div",{staticClass:"m-null"},[e("span",{staticClass:"u-text"},[t._v("~ 暂无对应历史头条 ~")])])],2)])}),p=[],d=a("85e4"),f={name:"List",props:["data"],data:function(){return{}},methods:{resolveImagePath:d["resolveImagePath"]}},g=f,h=(a("cfac"),a("2877")),m=Object(h["a"])(g,l,p,!1,null,null,null),v=m.exports,b=(a("4de4"),a("b0c0"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-tv-toolbar"},[e("div",{staticClass:"m-toolbar"},[e("div",{staticClass:"m-toolbar-filter"},[e("span",{staticClass:"u-label"},[t._v("筛选")]),e("span",{staticClass:"u-button",class:{active:t.filter},on:{click:function(e){return e.stopPropagation(),t.open("filter")}}},[t._v(" "+t._s(t.filterName)+" ")])]),e("div",{staticClass:"m-toolbar-pagination"},[e("span",{staticClass:"u-turn u-per",on:{click:function(e){return t.turnPages("per")}}},[t._v("上一页")]),e("span",{staticClass:"u-turn u-next",on:{click:function(e){return t.turnPages("next")}}},[t._v("下一页")]),e("span",{staticClass:"u-jump",class:{active:t.jump},on:{click:function(e){return t.open("jump")}}},[t._v("页面跳转")]),e("el-pagination",{staticClass:"u-pagination",attrs:{"current-page":t.pageIndex,"page-size":t.pageSize,"pager-count":9,layout:"pager",total:t.total},on:{"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"current-change":t.changePage}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.filter,expression:"filter"}],staticClass:"m-popup m-popup-filter"},t._l(t.nav,(function(a,n){return e("div",{key:n,staticClass:"m-item",class:{active:t.source_type==n}},[a.list?[e("span",{staticClass:"u-title"},[t._v(t._s(a.name))]),t._l(a.list,(function(a,n){return e("span",{key:n,staticClass:"u-nav",class:n==t.source_type?"active":"",on:{click:function(e){return t.change(n)}}},[t._v(" "+t._s(a)+" ")])}))]:[e("span",{staticClass:"u-title u-all",class:{active:"all"==t.source_type},on:{click:function(e){return t.change(n)}}},[t._v(" "+t._s(a)+" ")])]],2)})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.jump,expression:"jump"}],staticClass:"m-popup m-popup-jump"},[e("span",{staticClass:"u-label"},[t._v("跳转页数")]),e("el-pagination",{staticClass:"u-pagination",attrs:{"current-page":t.pageIndex,"page-size":t.pageSize,"pager-count":5,layout:"pager",total:t.total},on:{"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"current-change":t.changePage}}),e("el-input",{staticClass:"u-input",attrs:{type:"number",size:"mini"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toJump.apply(null,arguments)}},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}}),e("span",{staticClass:"u-button",on:{click:t.toJump}},[t._v("确认")])],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.mark,expression:"mark"}],staticClass:"m-toolbar-mark",on:{click:t.hide}})])}),_=[],x=a("5530"),y=(a("13d5"),a("07ac"),a("65c2")),j={name:"Toolbar",props:["total","pages"],data:function(){return{source_type:"all",pageIndex:1,pageSize:10,filter:!1,jump:!1,mark:!1,index:""}},computed:{nav:function(){return{all:"ALL全部",post:{name:"常用",list:Object(x["a"])({},y["__postType"])},wiki:{name:"百科",list:Object(x["a"])({},y["__wikiType"])},pvx:{name:"PVX",list:Object(x["a"])({},y["__gameType"])},app:{name:"其他",list:Object(x["a"])({},y["__appType"])}}},filterName:function(){var t=Object.values(this.nav).reduce((function(t,e){return e.list&&(t=Object(x["a"])(Object(x["a"])({},t),e.list)),t}),{});return"all"==this.source_type?this.nav[this.source_type]:t[this.source_type]||""},client:function(){return this.$store.state.client},params:function(){var t={client:this.client,type:"slider",per:this.pageSize,page:this.pageIndex};return"all"!==this.source_type&&(t.source_type=this.source_type),t}},watch:{params:{deep:!0,immediate:!0,handler:function(t){this.$emit("update",t)}}},methods:{change:function(t){this.source_type=t,this.pageIndex=1,this.filter=!1,this.mark=!1},changePage:function(t){this.pageIndex=~~t},toJump:function(){this.index>this.pages&&(this.index=this.pages),this.index<1&&(this.index=1),this.changePage(this.index),this.jump=!1,this.mark=!1,this.index=""},turnPages:function(t){"next"==t&&(this.index=this.pageIndex<this.pages?this.pageIndex+1:this.pages),"per"==t&&(this.index=this.pageIndex>1?this.pageIndex-1:1),this.changePage(this.index)},open:function(t){this[t]=!this[t],(this.filter||this.jump)&&(this.mark=!0)},hide:function(){this.filter=!1,this.jump=!1,this.mark=!1}}},k=j,w=(a("6208"),Object(h["a"])(k,b,_,!1,null,null,null)),O=w.exports,C=a("c402"),P={name:"TV",components:{List:v,Toolbar:O},data:function(){return{list:[],params:{},loading:!1,total:0,pages:0}},watch:{params:{deep:!0,immediate:!0,handler:function(t){this.load(t)}}},methods:{load:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params;this.loading=!0,Object(C["c"])(e).then((function(e){t.list=e.data.data.list||[],t.total=e.data.data.total,t.pages=e.data.data.pages,window.scrollTo(0,0)})).finally((function(){t.loading=!1}))},update:function(t){this.params=t}}},S=P,z=(a("22b2"),Object(h["a"])(S,c,u,!1,null,null,null)),I=z.exports;n["default"].config.productionTip=!1,n["default"].use(s.a),n["default"].use(r["a"]),new n["default"]({store:o["a"],render:function(t){return t(I)}}).$mount("#app")},"986d":function(t,e,a){},a8f1:function(t,e,a){t.exports=a.p+"img/box.616b60b4.png"},c402:function(t,e,a){"use strict";a.d(e,"f",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"d",(function(){return l})),a.d(e,"h",(function(){return p})),a.d(e,"g",(function(){return d})),a.d(e,"a",(function(){return f})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return g})),a.d(e,"i",(function(){return h}));var n=a("41cb"),i=a("bc3a"),s=a.n(i),r=a("65c2");function o(t){return Object(n["a"])().get("api/cms/config/banner",{params:t})}function c(t){return Object(n["a"])().get("/api/cms/posts",{params:t})}function u(t){return Object(n["a"])().get("/api/cms/post/".concat(t))}function l(t){return Object(n["a"])().get("/api/cms/config/menu/".concat(t))}function p(t){return console.log(1),Object(n["a"])().get("/api/cms/user/decoration",{params:t})}function d(){var t=r["__imgPath"]+"decoration/index.json";return s.a.get(t)}function f(t){return Object(n["a"])().get("/api/cms/game/celebrity",{params:t})}function g(t){return Object(n["a"])().get("/api/cms/pve/skill/changelog",{params:t})}function h(t){return Object(n["a"])().get("/api/cms/wiki/post/latest",{params:t})}},cfac:function(t,e,a){"use strict";a("73ea")},cfed:function(t,e,a){}});
//# sourceMappingURL=tv.73fe4c75.js.map