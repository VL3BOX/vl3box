(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c30dcbb"],{"04d1":function(t,n,i){"use strict";var e=i("342f"),o=e.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},"3f95":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t._self._c;return n("uc",{staticClass:"m-dashboard-emotion m-dashboard-skin",attrs:{icon:"el-icon-brush",title:t.$t("主题装扮"),tabList:t.tabList},scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{staticClass:"u-link el-button el-button--default el-button--mini is-round is-plain",attrs:{href:"/vip/mall?category=virtual",target:"_blank"}},[n("i",{staticClass:"el-icon-shopping-cart-2"}),t._v(" "+t._s(t.$t("前往获取装扮")))])]},proxy:!0}])},[n("div",{staticClass:"u-tips"},[n("i",{staticClass:"el-icon-warning-outline"}),t._v(t._s(t.$t("自定义表情包最多只能同时激活五个。"))+" ")]),n("div",{staticClass:"u-list"},t._l(t.emotions,(function(i){return n("div",{key:i.group_id,staticClass:"u-item",class:{"is-using":t.isUsing(i.group_name),disabled:t.isDisabled(i.group_name),hidden:t.isHidden(i.group_name)},on:{click:function(n){return n.stopPropagation(),t.handleEmotionClick(i)}}},[n("img",{staticClass:"u-img",attrs:{src:t.imgSrc(i.group_name),alt:i.group_name}}),n("div",{staticClass:"u-title"},[t._v(t._s(i.group_name))])])})),0),n("div",{staticClass:"u-actions"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check",loading:t.loading},on:{click:t.handleSave}},[t._v(t._s(t.$t("保存")))])],1)])},o=[],r=(i("4de4"),i("7db0"),i("caad"),i("d81d"),i("14d9"),i("4e82"),i("e9c4"),i("b64b"),i("d3b7"),i("2532"),i("b547")),a=i("aa38"),s=i("65c2"),c=i("46c1"),u={name:"emotion",props:[],data:function(){return{tabList:c["d"],emotionList:[],emotions:[],active:[],loading:!1}},computed:{},methods:{loadDecoration:function(){var t=this;Object(a["b"])({type:"emotion"}).then((function(n){t.emotionList=n.data.data,t.active=t.emotionList.filter((function(t){return t.using})).map((function(t){return t.val}));var i=t.emotionList.map((function(t){return t.val}));t.emotions.sort((function(t,n){var e=i.includes(t.group_name),o=i.includes(n.group_name);return e&&!o?-1:!e&&o?1:0}))}))},getEmotion:function(){var t=this;try{var n=JSON.parse(sessionStorage.getItem("jx3_emotion"));if(n)return void(this.emotions=n);Object(a["d"])().then((function(n){t.emotions=n.data,sessionStorage.setItem("jx3_emotion",JSON.stringify(n.data))}))}catch(i){this.emotions=[]}finally{this.loadDecoration()}},imgSrc:function(t){var n,i=this.emotions.find((function(n){return n.group_name===t})),e=null===(n=i.items)||void 0===n?void 0:n[0];return s["__imgPath"]+"emotion/output/"+(null===e||void 0===e?void 0:e.filename)},isUsing:function(t){return this.active.includes(t)||"默认"===t},isDisabled:function(t){return!this.emotionList.map((function(t){return t.val})).includes(t)&&"默认"!==t},isHidden:function(t){return"默认"===t},handleEmotionClick:function(t){this.isDisabled(t.group_name)||(this.active.length>=5&&!this.isUsing(t.group_name)?this.$message.error(this.$t("最多只能选择五个表情包")):this.isUsing(t.group_name)?this.active=this.active.filter((function(n){return n!==t.group_name})):this.active.push(t.group_name))},handleSave:function(){var t=this;this.loading=!0;var n=this.emotionList.map((function(n){return{type:"emotion",val:n.val,using:t.active.includes(n.val)}}));Object(a["h"])(n).then((function(n){t.$message.success(t.$t("保存成功")),t.loading=!1}))}},mounted:function(){this.getEmotion()},components:{uc:r["a"]}},d=u,f=(i("6ea3"),i("2877")),l=Object(f["a"])(d,e,o,!1,null,null,null);n["default"]=l.exports},"4e82":function(t,n,i){"use strict";var e=i("23e7"),o=i("e330"),r=i("59ed"),a=i("7b0b"),s=i("07fa"),c=i("083a"),u=i("577e"),d=i("d039"),f=i("addb"),l=i("a640"),m=i("04d1"),h=i("d998"),p=i("2d00"),v=i("512ce"),g=[],b=o(g.sort),_=o(g.push),k=d((function(){g.sort(void 0)})),j=d((function(){g.sort(null)})),C=l("sort"),O=!d((function(){if(p)return p<70;if(!(m&&m>3)){if(h)return!0;if(v)return v<603;var t,n,i,e,o="";for(t=65;t<76;t++){switch(n=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(e=0;e<47;e++)g.push({k:n+e,v:i})}for(g.sort((function(t,n){return n.v-t.v})),e=0;e<g.length;e++)n=g[e].k.charAt(0),o.charAt(o.length-1)!==n&&(o+=n);return"DGBEFHACIJK"!==o}})),y=k||!j||!C||!O,w=function(t){return function(n,i){return void 0===i?-1:void 0===n?1:void 0!==t?+t(n,i)||0:u(n)>u(i)?1:-1}};e({target:"Array",proto:!0,forced:y},{sort:function(t){void 0!==t&&r(t);var n=a(this);if(O)return void 0===t?b(n):b(n,t);var i,e,o=[],u=s(n);for(e=0;e<u;e++)e in n&&_(o,n[e]);f(o,w(t)),i=s(o),e=0;while(e<i)n[e]=o[e++];while(e<u)c(n,e++);return n}})},"512ce":function(t,n,i){"use strict";var e=i("342f"),o=e.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},"6ba9":function(t,n,i){},"6ea3":function(t,n,i){"use strict";i("6ba9")},aa38:function(t,n,i){"use strict";i.d(n,"b",(function(){return s})),i.d(n,"h",(function(){return c})),i.d(n,"c",(function(){return u})),i.d(n,"d",(function(){return d})),i.d(n,"g",(function(){return f})),i.d(n,"j",(function(){return l})),i.d(n,"e",(function(){return m})),i.d(n,"f",(function(){return h})),i.d(n,"i",(function(){return p})),i.d(n,"a",(function(){return v}));i("99af");var e=i("41cb"),o=i("bc3a"),r=i.n(o),a=i("65c2");function s(t){return Object(e["b"])().get("/api/cms/user/decoration",{params:t})}function c(t){return Object(e["b"])().post("/api/cms/user/decoration",t)}function u(){var t=a["__imgPath"]+"decoration/index.json?".concat(Date.now(),"}");return r.a.get(t)}function d(){return r.a.get("".concat(a["__dataPath"],"emotion/output/catalog.json?").concat(Date.now()))}function f(t,n){return Object(e["b"])().post("/api/cms/user/decoration/check-suit/".concat(t,"/").concat(n,"/for/avatar"))}function l(t){return Object(e["b"])().put("/api/cms/user/my/avatar-frame",t)}function m(){return Object(e["b"])().get("/api/cms/user/config/honor")}function h(t){return Object(e["c"])({mute:!0}).get("/api/next2/user/"+t+"/honors").then((function(t){return t.data.data}))}function p(t){return Object(e["b"])().put("/api/cms/user/honor/use/".concat(t))}function v(){return Object(e["b"])().delete("/api/cms/user/honor/use")}},d998:function(t,n,i){"use strict";var e=i("342f");t.exports=/MSIE|Trident/.test(e)}}]);
//# sourceMappingURL=chunk-7c30dcbb.55923579.js.map