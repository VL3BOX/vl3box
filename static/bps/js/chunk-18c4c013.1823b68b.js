(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18c4c013"],{a7ca:function(t,e,a){"use strict";a("d261")},d261:function(t,e,a){},fbb1:function(t,e,a){"use strict";a.r(e);a("ac1f"),a("841c"),a("498a");var i=function(){var t=this,e=t._self._c;return e("ListLayout",[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-archive-box"},[e("div",{staticClass:"m-archive-search",attrs:{slot:"search-before"},slot:"search-before"},[e("a",{staticClass:"u-publish el-button el-button--primary",attrs:{href:t.publish_link}},[t._v("+ "+t._s(t.$t("发布作品")))]),e("el-input",{attrs:{placeholder:t.$t("请输入搜索内容"),clearable:""},on:{clear:t.onSearch},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch.apply(null,arguments)}},model:{value:t.search,callback:function(e){t.search="string"===typeof e?e.trim():e},expression:"search"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[e("i",{staticClass:"el-icon-search"}),t._v(" "),e("span",{staticClass:"u-search"},[t._v(t._s(t.$t("关键词")))])]),e("el-button",{staticClass:"u-btn",attrs:{slot:"append",icon:"el-icon-position"},on:{click:t.onSearch},slot:"append"})],1)],1),e("div",{staticClass:"m-archive-filter"},[e("div",{staticClass:"m-filter--left"},[e("el-radio-group",{staticClass:"u-type",attrs:{size:"mini"},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}},[e("el-radio-button",{attrs:{label:""}},[t._v(t._s(t.$t("全部")))]),e("el-radio-button",{attrs:{label:"PVE"}},[t._v("PVE")]),e("el-radio-button",{attrs:{label:"PVP"}},[t._v("PVP")])],1),e("markBy",{attrs:{marks:t.marks},on:{filter:t.filterMeta}}),e("zlpBy",{attrs:{type:"zlp",client:t.client},on:{filter:t.filterMeta}}),e("topicBy",{attrs:{topics:t.topics},model:{value:t.topic,callback:function(e){t.topic=e},expression:"topic"}})],1),e("div",{staticClass:"m-filter--right"},[e("orderBy",{on:{filter:t.filterMeta}})],1)]),t.data&&t.data.length?e("div",{staticClass:"m-archive-list"},[e("ul",{staticClass:"u-list"},t._l(t.data,(function(a,i){return e("list-item",{key:i+a,attrs:{item:a,order:t.order,caller:"bps_highlights_index_click"}})})),1)]):e("el-alert",{staticClass:"m-archive-null",attrs:{title:t.$t("没有找到相关条目"),type:"info",center:"","show-icon":""}}),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.hasNextPage,expression:"hasNextPage"}],staticClass:"m-archive-more",attrs:{type:"primary",loading:t.loading,icon:"el-icon-arrow-down"},on:{click:t.appendPage}},[t._v(t._s(t.$t("加载更多")))]),e("el-pagination",{staticClass:"m-archive-pages",attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":!0,"page-size":t.per,total:t.total,"current-page":t.page},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.changePage}})],1)])},n=[],s=a("ade3"),r=a("2909"),o=(a("99af"),a("caad"),a("d81d"),a("14d9"),a("b0c0"),a("b64b"),a("d3b7"),a("2c3e"),a("6062"),a("2532"),a("3ca3"),a("ddb0"),a("79dc")),l=a("44fd"),c=a("1fb9"),u=a("85e4"),p=a("29c2"),d=a("24bf"),h=a("16e5"),g={recommended:"编辑精选",geek:"骨灰必备"},f={name:"Index",props:[],data:function(){return{loading:!1,data:[],page:1,per:10,total:1,pages:1,number_queries:["per","page"],subtype:"",order:"update",mark:"",client:this.$store.state.client,search:"",zlp:"",tag:"",topic:"",pv_types:["PVE","PVP"],marks:g}},computed:{publish_link:function(){return Object(u["publishLink"])(c["a"])},hasNextPage:function(){return this.pages>1&&this.page<this.total},query:function(){return{subtype:this.subtype,order:this.order,mark:this.mark,client:this.client,zlp:this.zlp,tag:this.tag,topic:this.topic,star:1}},pg_queries:function(){return{page:this.page,per:this.per}},reset_queries:function(){return[this.subtype]},topics:function(t){var e=t.tag;return"PVE"===e?d["bps_pve"]:"PVP"===e?d["bps_pvp"]:Object(r["a"])(new Set([].concat(Object(r["a"])(d["bps_pve"]),Object(r["a"])(d["bps_pvp"]))))},aggregate:function(){var t=this;return this.data.map((function(e){return t.postLink(e.ID)}))}},methods:{postLink:function(t){return"/".concat(c["a"],"/")+t},reporterLink:function(t){var e="std"===this.client?"www":"origin";return"".concat(e,":/").concat(c["a"],"/")+t},onSearch:function(){1===this.page?this.loadData():this.page=1},buildQuery:function(t){t&&(this.page+=1);var e={per:this.per,page:this.page};for(var a in this.query)void 0!==this.query[a]&&""!==this.query[a]&&null!==this.query[a]&&("search"==a?e.search=this.query.search.trim():e[a]=this.query[a]);return e.subtype&&(e.sticky=1),this.search&&(e.search=this.search.trim()),e},loadData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=this.buildQuery(e);return console.log("[cms-list]","<loading data>",a),this.loading=!0,Object(p["c"])(a).then((function(a){var i,n,s,r,o,l,c,u,p,d;e?t.data=t.data.concat(null===(c=a.data)||void 0===c||null===(u=c.data)||void 0===u?void 0:u.list):t.data=null===(p=a.data)||void 0===p||null===(d=p.data)||void 0===d?void 0:d.list;t.total=null===(i=a.data)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.total,t.pages=null===(s=a.data)||void 0===s||null===(r=s.data)||void 0===r?void 0:r.pages,Object(h["b"])({caller:"bps_highlight_index_load",data:{aggregate:null===(o=a.data)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.list.map((function(e){return t.reporterLink(e.ID)}))}})})).finally((function(){t.loading=!1}))},replaceRoute:function(t){return this.$router.push({name:this.$route.name,query:Object.assign({},this.$route.query,t)}).then((function(){window.scrollTo(0,0)})).catch((function(t){}))},filterMeta:function(t){this.replaceRoute(Object(s["a"])(Object(s["a"])({},t["type"],t["val"]),"page",1))},filterImperceptibly:function(t){this[t["type"]]=t["val"]},changePage:function(t){this.loadData(),this.replaceRoute({page:t})},appendPage:function(){this.loadData(!0)}},watch:{"$route.query":{deep:!0,immediate:!0,handler:function(t){if(Object.keys(t).length)for(var e in console.log("[cms-list]","<route query change>",t),t)this.number_queries.includes(e)?this[e]=~~t[e]:this[e]=t[e]}},reset_queries:{deep:!0,handler:function(){console.log("[cms-list]","<reset page>"),this.page=1}},query:{deep:!0,immediate:!0,handler:function(t){console.log("[cms-list]","<request query change>",t),this.loadData()}}},mounted:function(){},components:{listItem:l["a"],ListLayout:o["a"]}},v=f,b=(a("a7ca"),a("2877")),m=Object(b["a"])(v,i,n,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-18c4c013.1823b68b.js.map