(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ccd0a3a"],{1510:function(t,e,s){},"498a":function(t,e,s){"use strict";var a=s("23e7"),n=s("58a8").trim,i=s("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},"79c7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-home-view"},[e("WikiPanel",{attrs:{"border-none":!0}},[e("template",{slot:"head-title"},[e("i",{staticClass:"el-icon-location-information"}),e("span",[t._v("便捷入口")])]),e("template",{slot:"head-actions"}),e("template",{slot:"body"},[e("ul",{staticClass:"m-qlinks"},[e("li",{staticClass:"qlink"},[e("a",{staticStyle:{"background-color":"#fe7979"},attrs:{target:"_blank",href:"/tool/18151/"}},[e("i",{staticClass:"el-icon-trophy"}),e("span",[t._v("游戏内看百科")])])]),e("li",{staticClass:"qlink"},[e("Counter",{attrs:{type:"item",showCounter:!1}})],1),e("li",{staticClass:"qlink"},[e("router-link",{staticStyle:{"background-color":"#f7b044"},attrs:{to:{name:"search",query:{ids:"5_24423,5_24424,5_24425,5_24426,5_24427,5_24428,5_24429,5_24430"}}}},[e("i",{staticClass:"el-icon-sugar"}),e("span",[t._v("五行石合成")])])],1),e("li",{staticClass:"qlink"},[e("a",{attrs:{target:"_blank",href:"/pvg/manufacture"}},[e("i",{staticClass:"el-icon-grape"}),e("span",[t._v("技艺助手")])])]),e("li",{staticClass:"qlink"},[e("a",{attrs:{target:"_blank",href:"/pvg/price"}},[e("i",{staticClass:"el-icon-watermelon"}),e("span",[t._v("价格走势")])])]),e("li",{staticClass:"qlink"},[e("a",{attrs:{href:"/item/plan_list"}},[e("i",{staticClass:"el-icon-cherry"}),e("span",[t._v("物品清单")])])])])])],2),e("WikiPanel",{attrs:{"border-none":!0}},[e("template",{slot:"head-title"},[e("i",{staticClass:"el-icon-notebook-1"}),e("span",[t._v("最新物品")])]),e("template",{slot:"body"},[t.new_plans&&t.new_plans.length?e("el-carousel",{attrs:{height:"66px",direction:"vertical","indicator-position":"none"}},t._l(t.new_plans,(function(s,a){return e("el-carousel-item",{key:a,staticClass:"m-carousel m-hot"},[e("el-row",{attrs:{gutter:20}},[t._l(s,(function(s,a){return[s?e("el-col",{key:a,attrs:{md:8}},[e("WikiItem",{class:"u-item-".concat(a),attrs:{item:s,type:"item"}})],1):t._e()]}))],2)],1)})),1):e("div",{staticStyle:{"text-align":"center"}},[t._v("😂 暂无物品清单")])],1)],2),e("WikiPanel",{attrs:{"border-none":!0}},[e("template",{slot:"head-title"},[e("i",{staticClass:"el-icon-notebook-1"}),e("span",[t._v("最热物品")])]),e("template",{slot:"body"},[t.hot_plans&&t.hot_plans.length?e("el-carousel",{attrs:{height:"66px",direction:"vertical","indicator-position":"none"}},t._l(t.hot_plans,(function(s,a){return e("el-carousel-item",{key:a,staticClass:"m-carousel m-carousel-hot"},[e("el-row",{attrs:{gutter:20}},[t._l(s,(function(s,a){return[s?e("el-col",{key:a,attrs:{md:8}},[e("WikiItem",{class:"u-item-".concat(a),attrs:{item:s,type:"item"}})],1):t._e()]}))],2)],1)})),1):e("div",{staticStyle:{"text-align":"center"}},[t._v("😂 暂无物品清单")])],1)],2),e("WikiPanel",{attrs:{"border-none":!0}},[e("template",{slot:"head-title"},[e("i",{staticClass:"el-icon-collection"}),e("span",[t._v("最新攻略")])]),e("template",{slot:"body"},[t.newest_posts.length?e("div",{staticClass:"wiki-post-list"},t._l(t.newest_posts,(function(s,a){return e("div",{key:a,staticClass:"wiki-post"},[e("div",{staticClass:"m-about-post"},[e("div",{staticClass:"m-wiki"},[e("div",{staticClass:"u-wiki"},[e("img",{staticClass:"u-icon",attrs:{src:t.icon_url(s.source_icon_id)},on:{"~error":function(e){e.target.src=t.icon_url()}}}),e("router-link",{staticClass:"u-name",attrs:{to:{name:"view",params:{item_id:s.source_id}},target:"_blank"}},[e("span",{domProps:{textContent:t._s(s.title)}})])],1),e("div",{staticClass:"u-level",domProps:{textContent:t._s("综合难度："+t.star(s.level))}}),s.remark?e("div",{staticClass:"u-remark",domProps:{textContent:t._s("📑 "+s.remark)}}):t._e()]),e("div",{staticClass:"m-user"},[e("div",{staticClass:"u-author"},[e("img",{staticClass:"u-icon",attrs:{src:t.showAvatar(s.user),alt:s.user_nickname}}),s.user_id?e("a",{staticClass:"u-name",attrs:{href:t._f("author_url")(s.user_id),target:"_blank"},domProps:{textContent:t._s(s.user_nickname)}}):e("span",{staticClass:"u-name"},[t._v(t._s(s.user_nickname))])]),e("div",{staticClass:"u-updated",domProps:{textContent:t._s(t.date_format(s.updated))}})])]),e("div",{staticClass:"m-excerpt"},[e("router-link",{staticClass:"u-excerpt",attrs:{to:{name:"view",params:{item_id:s.source_id}}}},[e("span",{domProps:{innerHTML:t._s(t.ellipsis(s.content))}})])],1)])})),0):e("div",{staticStyle:{"text-align":"center"}},[t._v("😂 暂无攻略")])])],2)],1)},n=[],i=(s("4de4"),s("d81d"),s("b0c0"),s("d3b7"),s("ac1f"),s("466d"),s("5319"),s("d2a1")),r=s("ac29"),c=s("85e4"),o=s("9616"),l=s("65c2"),u=s("500d"),d=s("b78a"),_=s("8975"),p=s("cf45"),m=s("2ef0"),f=s("cbfa"),v={name:"Home",components:{WikiPanel:i["a"],Counter:f["a"],WikiItem:r["a"]},data:function(){return{newest_posts:[],new_plans:[],hot_plans:[],feedback:l["feedback"],plan_2_icon:l["__iconPath"]+"icon/2410.png",plan_1_icon:l["__iconPath"]+"icon/3089.png"}},computed:{client:function(){return this.$store.state.client}},methods:{icon_url:function(t){return Object(c["iconLink"])(t,this.client)},ellipsis:p["a"],date_format:_["date_format"],star:_["star"],showAvatar:function(t){var e=(null===t||void 0===t?void 0:t.user_avatar)||"";return Object(c["showAvatar"])(e)},showItemTrending:function(t){if(t.sub_days_0_price&&t.sub_days_1_price)return t.sub_days_0_price-t.sub_days_1_price>0?"▲":t.sub_days_0_price-t.sub_days_1_price<0?"▼":""},showItemTrendingClass:function(t){if(t.sub_days_0_price&&t.sub_days_1_price)return t.sub_days_0_price-t.sub_days_1_price>0?"up":t.sub_days_0_price-t.sub_days_1_price<0?"down":"keep"}},created:function(){var t=this;u["a"].latest({type:"item"}).then((function(e){var s,a;t.newest_posts=null!==(s=null===(a=e.data.data)||void 0===a?void 0:a.list)&&void 0!==s?s:[]}),(function(){t.newest_posts=[]})),Object(d["p"])({client:this.client}).then((function(e){t.new_plans=Object(m["chunk"])(e.data,3)})),Object(o["b"])("item","views",15).then((function(e){var s=e.data.map((function(t){var e,s;return(null===t||void 0===t||null===(e=t.name)||void 0===e?void 0:e.match(/item-(\d+_\d+)/))&&(null===(s=t.name)||void 0===s?void 0:s.replace(/item-(\d+_\d+)/,"$1"))})).filter((function(t){return t}));Object(d["l"])({ids:s,client:t.client,per:15}).then((function(e){var s;t.hot_plans=Object(m["chunk"])(null===(s=e.data)||void 0===s?void 0:s.list,3)}))})).catch((function(t){console.log(t)}))}},h=v,b=(s("f7d1"),s("2877")),k=Object(b["a"])(h,a,n,!1,null,null,null);e["default"]=k.exports},9622:function(t,e,s){"use strict";s.d(e,"c",(function(){return i})),s.d(e,"e",(function(){return r})),s.d(e,"b",(function(){return c})),s.d(e,"f",(function(){return o})),s.d(e,"d",(function(){return l})),s.d(e,"a",(function(){return u}));var a=s("41cb"),n=Object(a["d"])();function i(t){return n.get("/quest/",{params:t})}function r(t){return n.get("/quests",{params:t})}function c(t){return n.get("/quests/newest",{params:t})}function o(t){return t=Object.assign(t,{type:"quest"}),Object(a["a"])().get("/api/cms/wiki/post/waiting",{params:t})}function l(){return n.get("/quest/maps")}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wiki_quest_ac";return Object(a["a"])().get("/api/cms/breadcrumb/".concat(t)).then((function(t){return t.data.data.html||""}))}},c8d2:function(t,e,s){"use strict";var a=s("5e77").PROPER,n=s("d039"),i=s("5899"),r="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||r[t]()!==r||a&&i[t].name!==t}))}},f7d1:function(t,e,s){"use strict";s("1510")}}]);
//# sourceMappingURL=chunk-1ccd0a3a.ebbe0a92.js.map