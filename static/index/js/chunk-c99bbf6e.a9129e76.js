(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c99bbf6e"],{"358e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-article about-detail-wrapper"},[e("div",{staticClass:"detail-title-list"},t._l(t.tabs,(function(a){return e("router-link",{key:a.type,staticClass:"title-item special-title-item hvr-grow",attrs:{to:{name:a.type}}},[t._v(" "+t._s(a.title)+" ")])})),1),e("div",{staticClass:"detail-content-wrap detail-text-wrap"},[e("AboutText",{attrs:{customType:t.active}})],1)])},i=[],s=(a("b0c0"),function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-about-text",class:"m-about-"+t.type},[e("div",{staticClass:"m-about-meta"},[t.isSuperAdmin?e("a",{attrs:{href:"/notice/"+t.id,target:"_blank"}},[t._v("编辑")]):t._e()]),e("div",{domProps:{innerHTML:t._s(t.data)}})])}),r=[],c=(a("d3b7"),a("f0a3")),u=a("c9d2"),o={name:"AboutText",props:{customType:{type:String,default:""}},data:function(){return{data:"",loading:!1,isSuperAdmin:u["a"].isSuperAdmin()}},computed:{id:function(){return this.$route.meta.article_id}},methods:{loadData:function(){var t=this;this.loading=!0,this.data="",this.id&&Object(c["a"])(this.id).then((function(e){t.data=e})).finally((function(){t.loading=!1}))}},watch:{"$route.name":{immediate:!0,handler:function(){this.loadData()}}}},l=o,d=(a("bafd"),a("2877")),p=Object(d["a"])(l,s,r,!1,null,null,null),b=p.exports,f={name:"Article",components:{AboutText:b},data:function(){return{active:"",list:{terms:[{title:"用户协议",type:"license"},{title:"隐私政策",type:"privacy"}],creation:[{title:"创作公约",type:"treaty"},{title:"创作激励",type:"incentives"}]}}},computed:{name:function(){return this.$route.name},tabs:function(){return this.list[this.$route.meta.belongs]||[]}},watch:{name:{handler:function(){this.active=this.tabs[0].type},immediate:!0}}},m=f,h=(a("5b9d"),Object(d["a"])(m,n,i,!1,null,null,null));e["default"]=h.exports},"4a84":function(t,e,a){},"5b9d":function(t,e,a){"use strict";a("babb")},babb:function(t,e,a){},bafd:function(t,e,a){"use strict";a("4a84")},f0a3:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return s}));a("d3b7"),a("159b");var n=a("41cb");function i(t){return Object(n["a"])().get("/api/cms/post/".concat(t)).then((function(t){return t.data.data.post_content}))}function s(){return Object(n["a"])().get("/api/cms/user/list/super_author").then((function(t){var e;return null===(e=t.data)||void 0===e?void 0:e.data}))}function r(){return Object(n["a"])().get("/api/cms/account/teammate",{params:{status:1}})}}}]);
//# sourceMappingURL=chunk-c99bbf6e.a9129e76.js.map