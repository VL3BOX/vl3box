(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2169a9"],{c2bf:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-waiting-quest"},[t.old?e("el-alert",{attrs:{title:"所有任务都已经有了各自的攻略，以下是一些比较老旧的成就攻略",type:"success"}}):t._e(),e("list-head"),e("div",{staticClass:"u-quest-list"},t._l(t.data,(function(t,a){return e("quest-card",{key:a,attrs:{quest:t}})})),1),e("el-pagination",{staticStyle:{"text-align":"center"},attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":15,"hide-on-single-page":""},on:{"current-change":t.getData}})],1)},s=[],i=a("c7eb"),c=a("1da1"),r=(a("a15b"),a("d81d"),a("9622")),u=a("5262"),l=a("6fdc"),o={name:"QuestNewest",components:{QuestCard:u["a"],ListHead:l["a"]},data:function(){return{data:[],total:0,old:!1}},computed:{client:function(){return this.$store.state.client}},methods:{getData:function(){var t=arguments,e=this;return Object(c["a"])(Object(i["a"])().mark((function a(){var n,s,c,u,l,o;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:1,c={page:s,client:e.client},a.next=4,Object(r["f"])(c);case 4:if(u=a.sent.data,e.total=u.data.total,e.old=u.data.old,u.data.list){a.next=9;break}return a.abrupt("return");case 9:return l=null===(n=u.data.list)||void 0===n?void 0:n.map((function(t){return t.QuestID})),a.next=12,Object(r["e"])({ids:l.join(","),client:e.client});case 12:o=a.sent,e.data=o.data;case 14:case"end":return a.stop()}}),a)})))()}},mounted:function(){this.getData()}},d=o,p=a("2877"),f=Object(p["a"])(d,n,s,!1,null,"06a69413",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d2169a9.e8ae45f9.js.map