(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0283053e"],{ba02:function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"m-achievement-singles"},e._l(e.achievements,(function(n,a){return t("AchievementSingle",{key:a,attrs:{achievement:n,target:e.target,jump:e.jump,initFold:!0}})})),1)},s=[],i=(n("b0c0"),n("1c47")),c={name:"Achievements",props:["achievements","target","jump"],components:{AchievementSingle:i["a"]},watch:{achievements:function(){var e=this;this.$route&&"undefined"!==typeof this.$store.state.scroll_tops[this.$route.name]&&setTimeout((function(){window.scrollTo(0,e.$store.state.scroll_tops[e.$route.name])}),200)}}},r=c,u=n("2877"),o=Object(u["a"])(r,a,s,!1,null,null,null);t["a"]=o.exports},c845:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-adventure-view"},[e.isEmpty?t("span",{staticClass:"u-list-empty"},[e._v("👻 "+e._s(e.$t("暂无记录")))]):e._e(),t("Achievements",{attrs:{achievements:e.achievements}}),t("el-pagination",{attrs:{background:"",total:e.achievements_count,"hide-on-single-page":"",layout:"prev, pager, next","current-page":e.page,"page-size":e.length,"prev-html":"&laquo;","next-html":"&raquo;"},on:{"current-change":e.page_change_handle}})],1)},s=[],i=(n("14d9"),n("ba02")),c=n("262e"),r=n("2ef0"),u={name:"Adventure",data:function(){return{achievements:null,achievements_count:0,page:1,length:15}},computed:{isEmpty:function(){return!Object(r["get"])(this.achievements,"length")}},methods:{get_achievements:function(e){var t=this;Object(c["c"])(e).then((function(e){e=e.data,t.achievements=e.data.achievements,t.achievements_count=e.data.total}),(function(){t.achievements=!1}))},page_change_handle:function(e){this.$router.push({name:"adventure",params:{keyword:this.$route.params.keyword},query:{page:e}})}},components:{Achievements:i["a"]},watch:{$route:{immediate:!0,handler:function(){this.page=parseInt(this.$route.query.page),this.get_achievements(this.page)}}}},o=u,h=n("2877"),l=Object(h["a"])(o,a,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-0283053e.adba8a2f.js.map