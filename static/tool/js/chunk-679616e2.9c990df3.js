(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-679616e2"],{"0e99":function(t,n,e){"use strict";e("c781")},"0f57":function(t){t.exports=JSON.parse("[13,316,109,245,889,2178,2179,2180,2588,2589,2646,2647,2648,2789,3089,3111,3112,3113,3114,3115,3116,3117,3118,3119,3120,3121,3122,3123,3137,3138,3139,3140,3321,4704,4707,4708,4709,4710,4835,4853,5389,8848,10451,10452,10909]")},3835:function(t,n,e){"use strict";function i(t){if(Array.isArray(t))return t}e.d(n,"a",(function(){return r}));e("a4d3"),e("e01a"),e("d28b"),e("14d9"),e("d3b7"),e("3ca3"),e("ddb0");function a(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var i,a,s,c,r=[],o=!0,l=!1;try{if(s=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;o=!1}else for(;!(o=(i=s.call(e)).done)&&(r.push(i.value),r.length!==n);o=!0);}catch(t){l=!0,a=t}finally{try{if(!o&&null!=e["return"]&&(c=e["return"](),Object(c)!==c))return}finally{if(l)throw a}}return r}}var s=e("06c5");e("d9e2");function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){return i(t)||a(t,n)||Object(s["a"])(t,n)||c()}},4486:function(t,n,e){"use strict";e("523d")},"523d":function(t,n,e){},"540f":function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"e",(function(){return u})),e.d(n,"f",(function(){return d})),e.d(n,"a",(function(){return h})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return l}));var i=e("bc3a"),a=e.n(i),s=e("41cb"),c=e("65c2");function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"std";return Object(s["c"])().get("/icon/name/".concat(t),{params:{client:n}}).then((function(t){return t.data}))}function o(t){return Object(s["c"])().get("/icon",{params:t})}function l(t){return Object(s["c"])().get("/icon/latest",{params:t})}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"std",n="origin"==t?"origin_favicons":"favicons";return Object(s["a"])().get("/api/cms/user/my/meta",{params:{key:n}}).then((function(t){return t.data.data}))}function d(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"std",e="origin"==n?"origin_favicons":"favicons";return Object(s["a"])().post("/api/cms/user/my/meta",{val:t},{params:{key:e}}).then((function(t){return t.data.data}))}function h(){return a.a.get(c["__dataPath"]+"emotion/output/catalog.json").then((function(t){return t.data}))}},8908:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-icons"},[n("h1",{staticClass:"m-icons-title"},[t._v("剑三图标库")]),n("div",{staticClass:"m-icons-box"},[n("el-radio-group",{staticClass:"m-icons-radio",model:{value:t.mode,callback:function(n){t.mode=n},expression:"mode"}},[n("el-radio-button",{attrs:{label:"search"}},[t._v("探索模式")]),n("el-radio-button",{attrs:{label:"view"}},[t._v("浏览模式")])],1),"search"===t.mode?n("IconsSearch"):t._e(),"view"===t.mode?n("IconsView"):t._e()],1)])},a=[],s=(e("ac1f"),e("841c"),function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-icons-search"},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入搜索条件，例如：3089、1-100、幽月乱花"},on:{"~change":function(n){return t.useSearchIcon.apply(null,arguments)}},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.onSearch.apply(null,arguments)}},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.onSearch},slot:"append"})],1),t._m(0),t.isNewbie?n("el-alert",{staticClass:"m-icons-tips",attrs:{title:"以下为部分图标展示，请在上方自定义搜索范围，点击图标即可收藏。",type:"warning",center:"","show-icon":""}}):t._e(),t.searchList.length?t._e():n("el-alert",{staticClass:"m-icons-tips",attrs:{title:"没有找到对应的图标，请重新输入关键词搜索图标。",type:"info",center:"","show-icon":""}}),t.searchList.length>0?n("div",{staticClass:"m-icons-matrix m-icons-matrix-main"},t._l(t.searchList,(function(t,e){return n("icon-item",{key:e,attrs:{icon:t,isFav:!1}})})),1):t._e(),t.isNumber?n("div",{staticClass:"m-more"},[n("el-button",{on:{click:t.searchMore}},[t._v("查询后500个")])],1):t._e()],1)}),c=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-icon-search-tip"},[n("ul",[n("li",[t._v("输入单个数字，例如1，返回IconID为1的图标；")]),n("li",[t._v("输入多个数字，例如2,4,6（支持中英文逗号“,”,顿号“、”,斜杠“/”,竖杠“|”），返回IconID分别为2,4,6的三个图标；")]),n("li",[t._v("输入范围区间，例如1~100或1-100，返回IconID从1至100的100个图标；")]),n("li",[t._v("可以同时输入多个数字和多个范围，例如2,3,11-14,17，返回IconID分别为2,3,11,12,13,14,17的7个图标；")]),n("li",[t._v("输入单个图标名称，可以根据名称模糊搜索相关图标，例如：幽月、幽月乱花。")]),n("li",[t._v("每次上限500个")])])])}],r=e("2909"),o=e("c7eb"),l=e("3835"),u=e("1da1"),d=(e("99af"),e("caad"),e("d81d"),e("14d9"),e("fb6a"),e("4e82"),e("a9e3"),e("d3b7"),e("00b4"),e("2532"),e("5319"),e("159b"),e("e5c7")),h=e("540f"),f=e("0f57"),v={name:"search",props:[],components:{iconItem:d["a"]},data:function(){return{search:"",searchList:[],isNewbie:!0,isNumber:!1,page:1}},computed:{client:function(){return this.$store.state.client},favList:function(){return this.$store.state.favList||[]}},methods:{useSearchIcon:function(){this.isNewbie=!1},onSearch:function(){this.search&&this.getSearchData(this.search)},getSearchData:function(t){var n=this;return Object(u["a"])(Object(o["a"])().mark((function e(){var i,a,s;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t!=n.searchKey){e.next=2;break}return e.abrupt("return");case 2:if(t=t.replace(/\s/g,"").replace(/，|、|\/|\||\\/g,",").replace(/~/g,"-"),i=/^[0-9]+$/,t.includes(",")||t.includes("-")||i.test(t)){e.next=10;break}return e.next=7,n.searchIconByName(t);case 7:return n.searchList=e.sent,n.isNumber=!1,e.abrupt("return");case 10:a=[],s=[],n.searchList=[],t.includes(",")&&(s=t.split(",")),s.length||(s=[t]),s.forEach((function(t){if(t.includes("-")){var n=t.split("-").map(Number).sort(),e=Object(l["a"])(n,2),i=e[0],s=e[1];if(!isNaN(i)&&!isNaN(s))for(var c=i;c<=s;c++)a.includes(c)||a.push(c)}else isNaN(parseInt(t))||a.push(parseInt(t))})),n.$nextTick((function(){n.searchList=a.slice(0,500),n.isNumber=!0}));case 17:case"end":return e.stop()}}),e)})))()},searchIconByName:function(t){var n=this;return Object(u["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(h["d"])(t,n.client).then((function(t){var n=t.item,e=t.skill,i=t.buff,a=[].concat(Object(r["a"])(n),Object(r["a"])(e),Object(r["a"])(i)),s=[],c=[];return a.forEach((function(t){if(t.iconID){var n=String(t.iconID);s.includes(n)||(s.push(n),c.push({id:n,name:t.Name}))}})),c})).catch((function(t){console.log("Error:",t)})));case 1:case"end":return e.stop()}}),e)})))()},searchMore:function(){for(var t=this.searchList,n=t[t.length-1],e=[],i=n+1;i<=n+500;i++)e.push(i);this.searchList=[].concat(e),document.documentElement.scrollTop=0}},created:function(){this.searchList=f}},p=v,m=e("2877"),b=Object(m["a"])(p,s,c,!1,null,null,null),g=b.exports,_=function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-icons-view"},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入搜索条件，按 enter 进行搜索",clearable:""},on:{clear:t.onClear},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.onSearch.apply(null,arguments)}},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.onSearch},slot:"append"})],1),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-icons-matrix__view m-icons-matrix"},[t._l(t.listIndex,(function(e){return[t.listObj[e].ID?n("el-popover",{key:e,attrs:{trigger:"hover",placement:"top","popper-class":"m-icon-pop","visible-arrow":!1}},[n("div",{staticClass:"m-icon-content"},[n("div",{staticClass:"m-icon-content__top"},[n("el-image",{staticClass:"u-icon",attrs:{src:t.iconLink(e),alt:""}},[n("i",{staticClass:"el-icon-warning-outline u-error",attrs:{slot:"error"},slot:"error"})]),n("span",{staticClass:"u-id"},[t._v("ID: "+t._s(e))])],1),n("div",{staticClass:"m-icon-content__bottom"},[n("div",{staticClass:"m-icon-content-item"},[n("span",{staticClass:"u-label"},[t._v("类别"),n("small",[t._v("Kind")])]),n("span",{staticClass:"u-val"},[t._v(t._s(t.listObj[e].Kind))])]),n("div",{staticClass:"m-icon-content-item"},[n("span",{staticClass:"u-label"},[t._v("子类别"),n("small",[t._v("SubKind")])]),n("span",{staticClass:"u-val"},[t._v(t._s(t.listObj[e].SubKind))])]),t.listObj[e].Tag1||t.listObj[e].Tag2?n("div",{staticClass:"m-icon-content-item"},[n("span",{staticClass:"u-label"},[t._v("标签"),n("small",[t._v("Tag")])]),n("span",{staticClass:"u-val"},[t._v(t._s(t.iconTag(t.listObj[e])))])]):t._e(),n("div",{staticClass:"m-icon-content-item"},[n("span",{staticClass:"u-label"},[t._v("文件"),n("small",[t._v("FileName")])]),n("span",{staticClass:"u-val"},[t._v(t._s(t.listObj[e].FileName))])])])]),n("icon-item",{attrs:{slot:"reference",icon:e,isFav:!1},slot:"reference"})],1):n("div",{key:e,staticClass:"m-icon__empty"},[n("div",{staticClass:"u-icon"}),n("span",{staticClass:"u-id"},[t._v(t._s(e))])])]}))],2),""==t.search&&t.done?n("el-pagination",{staticClass:"u-pagination",attrs:{background:"",layout:"prev, pager, next,jumper",total:t.total,"page-size":t.per,"current-page":t.page,"hide-on-single-page":""},on:{"current-change":t.onPageChange}}):t._e()],1)},C=[],y=(e("4de4"),e("7db0"),e("a630"),e("a15b"),e("13d5"),e("3ca3"),e("85e4")),j={name:"icons-view",components:{iconItem:d["a"]},data:function(){return{icons:[],start:1,end:144,total:0,search:"",loading:!1,per:144,page:1,done:!0}},computed:{client:function(){return this.$store.state.client},listIndex:function(){var t=this;return this.search?this.icons.map((function(t){return t.ID})):Array.from({length:this.per},(function(n,e){return e+t.start})).filter((function(n){return n<=t.total}))},listObj:function(){var t=this;return this.listIndex.reduce((function(n,e){var i=t.icons.find((function(t){return t.ID===e}));return n[e]=i||{ID:"",Kind:"",SubKind:"",Tag1:"",Tag2:"",FileName:""},n}),{})}},mounted:function(){this.loadLatest(),this.loadData()},methods:{onSearch:function(){this.search&&(this.start=1,this.end=this.total,this.loadData())},onClear:function(){this.start=1,this.end=this.per,this.loadData()},loadLatest:function(){var t=this;Object(h["b"])().then((function(n){t.total=n.data[0].ID}))},loadData:function(){var t=this;this.loading=!0,this.done=!1;var n={start:this.start,end:this.end,search:this.search};Object(h["c"])(n).then((function(n){t.icons=n.data||[]})).finally((function(){t.loading=!1,t.done=!0}))},onPageChange:function(t){this.page=t,this.start=(t-1)*this.per+1,this.end=t*this.per,this.loadData()},iconLink:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.client;return Object(y["iconLink"])(t,n)},iconTag:function(t){var n=t.Tag1,e=t.Tag2;return[n,e].filter((function(t){return t})).join("、")},onIconError:function(t,n){t.target.src=this.iconLink(n,"std")}}},O=j,I=(e("4486"),Object(m["a"])(O,_,C,!1,null,null,null)),k=I.exports,w={name:"icons",props:[],components:{IconsSearch:g,IconsView:k},data:function(){return{activeTabName:"list",mode:"search"}},computed:{},methods:{}},x=w,S=(e("0e99"),Object(m["a"])(x,i,a,!1,null,null,null));n["default"]=S.exports},c781:function(t,n,e){},e5c7:function(t,n,e){"use strict";var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"u-icons-item"},[n("div",{staticClass:"u-pic"},[n("el-image",{staticClass:"u-img",attrs:{src:t.iconPath(t.icon)}},[n("i",{staticClass:"el-icon-warning-outline u-error",attrs:{slot:"error"},slot:"error"})]),t.isFav?n("span",{staticClass:"u-remove",on:{click:function(n){return t.removeFav(t.icon)}}}):n("div",{staticClass:"u-mark",on:{click:function(n){return t.setFav(t.icon)}}},[n("el-tooltip",{staticClass:"u-love",attrs:{disabled:!t.icon.id,content:t.iconName(t.icon),placement:"top-start"}},[n("i",{staticClass:"w-heart",class:{"w-heart-animation":t.onFav(t.icon)}})])],1),t.isStar?n("i",{staticClass:"el-icon-star-on",class:{on:t.onFav(t.icon)}}):t._e()],1),t.isFav?n("span",[t._v(t._s(t.iconId(t.icon)))]):n("span",{staticClass:"u-copy",attrs:{title:"点击快速复制"},on:{click:function(n){return n.stopPropagation(),t.onCopy(t.icon)}}},[t._v(t._s(t.iconId(t.icon)))])])},a=[],s=e("53ca"),c=e("c7eb"),r=e("1da1"),o=e("2909"),l=(e("99af"),e("4de4"),e("caad"),e("a15b"),e("14d9"),e("b0c0"),e("e9c4"),e("a9e3"),e("d3b7"),e("2532"),e("65c2")),u=e("540f"),d=e("c9d2"),h={name:"iconItem",props:{icon:{type:[Object,String,Number],default:function(){}},isFav:{type:Boolean,default:!1}},computed:{client:function(){return this.$store.state.client},favList:function(){return this.$store.state.favList||[]},uid:function(){return d["a"].isLogin()?d["a"].getInfo().uid:0},isStar:function(){return!this.isFav&&this.favList.includes(this.iconId(this.icon))}},methods:{setFav:function(t){var n=Object(o["a"])(this.favList),e=this.iconId(t);n.includes(e)?n=n.filter((function(t){return t!==e})):n.push(e),this.postFav(n)},removeFav:function(t){var n=this,e=Object(o["a"])(this.favList);e=e.filter((function(e){return e!==n.iconId(t)})),this.postFav(e)},postFav:function(t){var n=this;return Object(r["a"])(Object(c["a"])().mark((function e(){var i;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.join(","),localStorage.setItem("favList",JSON.stringify(t)),n.$store.commit("storeFav",t),e.prev=3,!n.uid){e.next=7;break}return e.next=7,Object(u["f"])(i,n.client);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))()},iconName:function(t){return(null===t||void 0===t?void 0:t.name)||String(t)},onFav:function(t){var n;return t=(null===(n=t)||void 0===n?void 0:n.id)||t,this.favList.includes(String(t))},iconPath:function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.client;return t=(null===(n=t)||void 0===n?void 0:n.id)||t,"origin"===e?"".concat(l["__iconPath"],"origin_icon/").concat(t,".png"):"".concat(l["__iconPath"],"icon/").concat(t,".png")},iconId:function(t){return"object"==Object(s["a"])(t)?String(null===t||void 0===t?void 0:t.id):String(t)},onCopy:function(t){var n,e=this;t=this.iconId((null===(n=t)||void 0===n?void 0:n.value)||t),navigator.clipboard.writeText(t).then((function(){e.$notify({title:"复制成功",message:"复制内容 : "+t,type:"success"})}))},onImgError:function(t){t.target.src!==this.iconPath(this.icon,"std")?t.target.src=this.iconPath(this.icon,"std"):console.log("error")}}},f=h,v=e("2877"),p=Object(v["a"])(f,i,a,!1,null,null,null);n["a"]=p.exports}}]);
//# sourceMappingURL=chunk-679616e2.9c990df3.js.map