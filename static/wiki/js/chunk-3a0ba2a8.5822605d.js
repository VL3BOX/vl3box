(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a0ba2a8"],{"118d":function(t,e,s){"use strict";s("7886")},"28ea":function(t,e,s){"use strict";s("f7ed")},"38cf":function(t,e,s){"use strict";var a=s("23e7"),n=s("1148");a({target:"String",proto:!0},{repeat:n})},"3ff4":function(t,e,s){},"498a":function(t,e,s){"use strict";var a=s("23e7"),n=s("58a8").trim,i=s("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},7886:function(t,e,s){},a15b:function(t,e,s){"use strict";var a=s("23e7"),n=s("e330"),i=s("44ad"),o=s("fc6a"),r=s("a640"),c=n([].join),u=i!==Object,l=u||!r("join",",");a({target:"Array",proto:!0,forced:l},{join:function(t){return c(o(this),void 0===t?",":t)}})},c8d2:function(t,e,s){"use strict";var a=s("5e77").PROPER,n=s("d039"),i=s("5899"),o="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||o[t]()!==o||a&&i[t].name!==t}))}},ea1a:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-quest-home"},[e("wiki-panel",{attrs:{"border-none":!0}},[e("template",{slot:"head-title"},[e("i",{staticClass:"el-icon-location-information"}),e("span",[t._v("便捷入口")])]),e("template",{slot:"head-actions"}),e("template",{slot:"body"},[e("ul",{staticClass:"u-qlinks"},[e("li",{staticClass:"u-qlink"},[e("a",{staticStyle:{"background-color":"#fe7979"},attrs:{target:"_blank",href:"/tool/1428"}},[e("i",{staticClass:"el-icon-trophy"}),e("span",[t._v("游戏内看百科")])])]),e("li",{staticClass:"u-qlink"},[e("Counter",{attrs:{type:"quest",showCounter:!1}})],1),e("li",{staticClass:"u-qlink"},[e("a",{staticStyle:{"background-color":"#f7b044"},attrs:{target:"_blank",href:"/exam"}},[e("i",{staticClass:"el-icon-goblet-square-full"}),e("span",[t._v("科举题库")])])]),e("li",{staticClass:"u-qlink"},[e("a",{attrs:{target:"_blank",href:"/reputation"}},[e("i",{staticClass:"el-icon-grape"}),e("span",[t._v("声望大全")])])]),e("li",{staticClass:"u-qlink"},[e("a",{attrs:{target:"_blank",href:"/book"}},[e("i",{staticClass:"el-icon-watermelon"}),e("span",[t._v("书籍大全")])])]),e("li",{staticClass:"u-qlink"},[e("a",{attrs:{target:"_blank",href:"pvg/gonggao/daily"}},[e("i",{staticClass:"el-icon-cherry"}),e("span",[t._v("日常活动")])])])])])],2),e("wiki-panel",{attrs:{"border-none":!0}},[e("template",{slot:"head-title"},[e("i",{staticClass:"el-icon-notebook-1"}),e("span",[t._v("热门任务")])]),e("template",{slot:"body"},[e("quest-carousel",{attrs:{quests:t.hotQuests,views:t.hotViews,hot:!0}})],1)],2),e("wiki-panel",{attrs:{"border-none":!0}},[e("template",{slot:"head-title"},[e("i",{staticClass:"el-icon-notebook-2"}),e("span",[t._v("最新任务")])]),e("template",{slot:"head-actions"},[e("router-link",{staticClass:"other",attrs:{to:{name:"newest"}}},[t._v("查看更多 »")])],1),e("template",{slot:"body"},[e("quest-carousel",{attrs:{quests:t.newestQuests}})],1)],2),e("wiki-panel",{attrs:{"border-none":!0}},[e("template",{slot:"head-title"},[e("i",{staticClass:"el-icon-collection"}),e("span",[t._v("最新攻略")])]),e("newest-post",{attrs:{slot:"body"},slot:"body"})],2)],1)},n=[],i=s("b85c"),o=s("c7eb"),r=s("1da1"),c=(s("a15b"),s("14d9"),s("b0c0"),s("d2a1")),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-newest-post"},t._l(t.data,(function(s,a){return e("div",{key:a,staticClass:"u-post"},[e("div",{staticClass:"u-post-head"},[e("div",{staticClass:"u-quest"},[e("router-link",{staticClass:"u-quest-name",attrs:{to:{name:"view",params:{quest_id:s.source_id,post_id:s.id}},target:"_blank"}},[t._v(t._s(t.questName(s.title)))]),e("div",{staticClass:"u-quest-level",domProps:{textContent:t._s("综合难度："+t.star(s.level))}}),s.remark?e("div",{staticClass:"u-post-remark",domProps:{textContent:t._s("📑 "+s.remark)}}):t._e()],1),e("div",{staticClass:"u-post-user"},[e("div",{staticClass:"u-author"},[e("img",{staticClass:"u-icon",attrs:{src:t.showAvatar(s.user),alt:s.user_nickname}}),e("a",{staticClass:"u-name",attrs:{href:s.user_id?t.authorLink(s.user_id):null,target:"_blank"},domProps:{textContent:t._s(s.user_nickname)}})]),e("div",{staticClass:"u-updated",domProps:{textContent:t._s(t.ts2str(s.updated))}})])]),e("div",{staticClass:"u-post-body"},[e("div",{staticClass:"u-excerpt",attrs:{to:{name:"view",params:{quest_id:s.source_id}}},domProps:{innerHTML:t._s(t.ellipsis(s.content))}})])])})),0)},l=[],d=(s("38cf"),s("85e4")),p=s("500d"),f=s("cf45"),h={name:"NewestPost",data:function(){return{data:[]}},mounted:function(){this.getData()},computed:{client:function(){return this.$store.state.client}},methods:{authorLink:d["authorLink"],ts2str:d["ts2str"],iconLink:d["iconLink"],showAvatar:function(t){var e=(null===t||void 0===t?void 0:t.user_avatar)||"";return Object(d["showAvatar"])(e)},getLink:d["getLink"],getData:function(){var t=this;return Object(r["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:p["a"].latest({type:"quest"}).then((function(e){var s,a;t.data=null!==(s=null===(a=e.data.data)||void 0===a?void 0:a.list)&&void 0!==s?s:[]}),(function(){t.data=[]}));case 1:case"end":return e.stop()}}),e)})))()},star:function(t){return"⭐️".repeat(t||1)},ellipsis:f["a"],questName:function(t){return t||"未知任务"}}},v=h,m=(s("f9ca"),s("2877")),b=Object(m["a"])(v,u,l,!1,null,"2c098992",null),k=b.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-quest-carousel"},[e("el-carousel",{attrs:{height:"66px",direction:"vertical",interval:3500,"indicator-position":"none"}},t._l(t.chunkedQuests,(function(s,a){return e("el-carousel-item",{key:a,staticClass:"m-carousel",class:{"m-hot":t.hot}},[e("el-row",{attrs:{gutter:20}},t._l(s,(function(t,s){return e("el-col",{key:s,attrs:{md:8}},[e("WikiItem",{class:"u-item-".concat(s),attrs:{type:"quest",item:t}})],1)})),1)],1)})),1)],1)},w=[],C=s("2ef0"),g=s("ac29"),q={name:"QuestCarousel",components:{WikiItem:g["a"]},props:{quests:{type:Array,default:function(){return[]}},views:{type:Object,default:function(){}},hot:{type:Boolean,default:!1}},data:function(){return{chunkedQuests:[]}},watch:{quests:{immediate:!0,handler:function(){this.chunkedQuests=Object(C["chunk"])(this.quests,3)}}}},y=q,j=(s("118d"),Object(m["a"])(y,_,w,!1,null,"0ba529bb",null)),O=j.exports,x=s("9622"),Q=s("65c2"),L=s("9616"),P=s("cbfa"),D={name:"Home",components:{NewestPost:k,QuestCarousel:O,WikiPanel:c["a"],Counter:P["a"]},data:function(){return{by:"all",feedback:Q["feedback"],newestQuests:[],hotQuests:[],hotViews:{}}},computed:{client:function(){return this.$store.state.client}},methods:{getNewestData:function(){var t=arguments,e=this;return Object(r["a"])(Object(o["a"])().mark((function s(){var a,n;return Object(o["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:a=t.length>0&&void 0!==t[0]?t[0]:1,n={page:a,pageSize:12,client:e.client},Object(x["b"])(n).then((function(t){e.newestQuests=t.data.list}));case 3:case"end":return s.stop()}}),s)})))()},getHotData:function(){var t=this;return Object(r["a"])(Object(o["a"])().mark((function e(){var s;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:s="origin"==t.client?"origin_quest":"quest",Object(L["b"])(s,"views",12).then((function(e){e=e.data;var s,a=[],n=Object(i["a"])(e);try{for(n.s();!(s=n.n()).done;){var o,r=s.value,c=null===(o=r.name.split("-"))||void 0===o?void 0:o.pop();a.push(c),t.hotViews[c]=r.value}}catch(u){n.e(u)}finally{n.f()}Object(x["e"])({ids:a.join(","),client:t.client}).then((function(e){t.hotQuests=e.data}))}));case 2:case"end":return e.stop()}}),e)})))()},iconLink:d["iconLink"]},mounted:function(){this.getNewestData(),this.getHotData()}},N=D,A=(s("28ea"),Object(m["a"])(N,a,n,!1,null,null,null));e["default"]=A.exports},f7ed:function(t,e,s){},f9ca:function(t,e,s){"use strict";s("3ff4")}}]);
//# sourceMappingURL=chunk-3a0ba2a8.5822605d.js.map