(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bcbfe0a"],{"08cb":function(t,s,e){},"107b":function(t,s,e){"use strict";var l=function(){var t=this,s=t._self._c;return s("el-tabs",{staticClass:"m-tabs",on:{"tab-click":t.changeView},model:{value:t.view,callback:function(s){t.view=s},expression:"view"}},[s("el-tab-pane",{attrs:{label:t.$t("职业攻略"),name:"index"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-collection"}),s("b",[t._v(t._s(t.$t("职业攻略")))])])]),s("el-tab-pane",{attrs:{label:t.$t("精品区"),name:"highlights"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-off"}),s("b",[t._v(t._s(t.$t("精品区")))]),s("em",{staticClass:"u-secret"},[t._v(t._s(t.$t("优质作品")))])])]),s("el-tab-pane",{attrs:{label:"技能/Buff数据库",name:"raw"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-reading"}),s("b",[t._v(t._s(t.$t("技能大全")))])])]),s("el-tab-pane",{attrs:{label:t.$t("秘籍大全"),name:"recipe"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-magic-stick"}),s("b",[t._v(t._s(t.$t("秘籍大全")))])])]),s("el-tab-pane",{attrs:{label:t.$t("技能合集"),name:"kungfu"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-notebook-1"}),s("b",[t._v(t._s(t.$t("技能合集")))])])]),s("el-tab-pane",{attrs:{label:t.$t("急速阈值"),name:"haste"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-stopwatch"}),s("b",[t._v(t._s(t.$t("急速阈值")))])])]),s("el-tab-pane",{attrs:{label:"DPS计算器",name:"dps"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-cpu"}),s("b",[t._v("DPS计算器")])])]),"std"==t.client?s("el-tab-pane",{attrs:{label:t.$t("门派天梯"),name:"ladder"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-s-data"}),s("b",[t._v(t._s(t.$t("门派天梯")))])])]):t._e(),t.isSuperAuthor?s("el-tab-pane",{attrs:{label:t.$t("源码解析"),name:"lua"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-full-screen"}),s("b",[t._v(t._s(t.$t("源码分析")))]),s("em",{staticClass:"u-ready"},[t._v(t._s(t.$t("签约")))])])]):t._e()],1)},a=[],n=(e("14d9"),e("b0c0"),e("c9d2")),i={name:"tabs",props:[],data:function(){return{view:"index"}},watch:{$route:{handler:function(t){this.view=t.name},immediate:!0,deep:!0}},computed:{client:function(){return this.$store.state.client||"std"},isSuperAuthor:function(){return this.$store.state.isSuperAuthor||!1}},methods:{changeView:function(){this.$router.push({name:this.view,query:{subtype:this.$route.query.subtype}})}},mounted:function(){var t=this;n["a"].isSuperAuthor().then((function(s){t.$store.state.isSuperAuthor=s}))}},o=i,c=(e("99a4"),e("2877")),r=Object(c["a"])(o,l,a,!1,null,null,null);s["a"]=r.exports},"46d4":function(t){t.exports=JSON.parse('{"冰心诀":{"name":"冰心诀","id":10081,"force":5,"kungfuId":10,"school":4,"client":["all","std","origin"]},"云裳心经":{"name":"云裳心经","id":10080,"force":5,"kungfuId":9,"school":4,"client":["all","std","origin"]},"花间游":{"name":"花间游","id":10021,"force":2,"kungfuId":5,"school":2,"client":["all","std","origin"]},"离经易道":{"name":"离经易道","id":10028,"force":2,"kungfuId":7,"school":2,"client":["all","std","origin"]},"毒经":{"name":"毒经","id":10175,"force":6,"kungfuId":13,"school":9,"client":["all","std","origin"]},"补天诀":{"name":"补天诀","id":10176,"force":6,"kungfuId":14,"school":9,"client":["all","std","origin"]},"莫问":{"name":"莫问","id":10447,"force":22,"kungfuId":22,"school":19,"client":["all","std"]},"相知":{"name":"相知","id":10448,"force":22,"kungfuId":23,"school":19,"client":["all","std"]},"无方":{"name":"无方","id":10627,"force":212,"kungfuId":29,"school":24,"client":["all","std"]},"灵素":{"name":"灵素","id":10626,"force":212,"kungfuId":28,"school":24,"client":["all","std"]},"傲血战意":{"name":"傲血战意","id":10026,"force":3,"kungfuId":6,"school":1,"client":["all","std","origin"]},"铁牢律":{"name":"铁牢律","id":10062,"force":3,"kungfuId":8,"school":1,"client":["all","std","origin"]},"易筋经":{"name":"易筋经","id":10003,"force":1,"kungfuId":2,"school":5,"client":["all","std","origin"]},"洗髓经":{"name":"洗髓经","id":10002,"force":1,"kungfuId":1,"school":5,"client":["all","std","origin"]},"焚影圣诀":{"name":"焚影圣诀","id":10242,"force":10,"kungfuId":17,"school":8,"client":["all","std","origin"]},"明尊琉璃体":{"name":"明尊琉璃体","id":10243,"force":10,"kungfuId":18,"school":8,"client":["all","std","origin"]},"分山劲":{"name":"分山劲","id":10390,"force":21,"kungfuId":21,"school":18,"client":["all","std"]},"铁骨衣":{"name":"铁骨衣","id":10389,"force":21,"kungfuId":20,"school":18,"client":["all","std"]},"紫霞功":{"name":"紫霞功","id":10014,"force":4,"kungfuId":3,"school":3,"client":["all","std","origin"]},"太虚剑意":{"name":"太虚剑意","id":10015,"force":4,"kungfuId":4,"school":3,"client":["all","std","origin"]},"天罗诡道":{"name":"天罗诡道","id":10225,"force":7,"kungfuId":16,"school":10,"client":["all","std","origin"]},"惊羽诀":{"name":"惊羽诀","id":10224,"force":7,"kungfuId":15,"school":10,"client":["all","std","origin"]},"问水诀":{"name":"问水诀","id":10144,"force":8,"kungfuId":11,"school":6,"client":["all","std","origin"]},"山居剑意":{"name":"山居剑意","id":10145,"force":8,"kungfuId":11,"school":6,"client":["all","std","origin"]},"笑尘诀":{"name":"笑尘诀","id":10268,"force":9,"kungfuId":19,"school":7,"client":["all","std","origin"]},"北傲诀":{"name":"北傲诀","id":10464,"force":23,"kungfuId":24,"school":20,"client":["all","std"]},"凌海诀":{"name":"凌海诀","id":10533,"force":24,"kungfuId":25,"school":21,"client":["all","std"]},"隐龙诀":{"name":"隐龙诀","id":10585,"force":25,"kungfuId":26,"school":22,"client":["all","std"]},"太玄经":{"name":"太玄经","id":10615,"force":211,"kungfuId":27,"school":23,"client":["all","std"]},"孤锋诀":{"name":"孤锋诀","id":10698,"force":213,"kungfuId":30,"school":26,"client":["all","std"]},"山海心诀":{"name":"山海心诀","id":10756,"force":214,"kungfuId":32,"school":29,"client":["all","std"]},"通用":{"name":"通用","id":0,"force":0,"kungfuId":0,"school":0,"client":["all","std","origin"]}}')},7748:function(t,s,e){"use strict";var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"m-info"},[s("div",{staticClass:"m-info-router"},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"el-icon-collection"})]),s("router-link",{attrs:{to:"/raw"}},[s("i",{staticClass:"el-icon-reading"})]),s("router-link",{attrs:{to:"/recipe"}},[s("i",{staticClass:"el-icon-magic-stick"})]),s("router-link",{attrs:{to:"/kungfu"}},[s("i",{staticClass:"el-icon-notebook-1"})]),s("router-link",{attrs:{to:"/haste"}},[s("i",{staticClass:"el-icon-stopwatch"})]),s("router-link",{attrs:{to:"/dps"}},[s("i",{staticClass:"el-icon-cpu"})]),s("router-link",{attrs:{to:"/ladder"}},[s("i",{staticClass:"el-icon-s-data"})]),t.isSuperAuthor?s("router-link",{attrs:{to:"/lua"}},[s("i",{staticClass:"el-icon-full-screen"})]):t._e()],1)])},a=[],n=(e("c9d2"),{name:"Info",props:[],data:function(){return{}},computed:{client:function(){return this.$store.state.client},isSuperAuthor:function(){return this.$store.state.isSuperAuthor}},methods:{},mounted:function(){}}),i=n,o=(e("a82b"),e("2877")),c=Object(o["a"])(i,l,a,!1,null,null,null);s["a"]=c.exports},"7c8c":function(t,s,e){},"99a4":function(t,s,e){"use strict";e("08cb")},a078:function(t,s,e){"use strict";e("caad"),e("b0c0"),e("2532");var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"m-list-nav"},[s("h5",{staticClass:"u-title"},[t._v(" "+t._s(t.$t("心法导航"))+" "),s("router-link",{staticClass:"u-more",attrs:{to:{query:{subtype:""}}}},[t._v(t._s(t.$t("全部心法"))),s("i",{staticClass:"el-icon-arrow-right"})])],1),s("ul",{staticClass:"m-bps-nav u-list"},t._l(t.xfmaps,(function(e,l){return s("li",{directives:[{name:"show",rawName:"v-show",value:e.client.includes(t.client),expression:"item.client.includes(client)"}],key:l,staticClass:"u-item"},[s("router-link",{staticClass:"u-link",class:{on:t.isActive(e)},attrs:{to:{query:{subtype:e.name,tab:t.tab}}}},[s("i",{staticClass:"u-pic"},[s("img",{attrs:{src:t.showMountIcon(e.id),alt:e.name}})]),s("span",{staticClass:"u-txt"},[t._v(t._s(e.name))])])],1)})),0),s("h5",{staticClass:"u-title"},[t._v(t._s(t.$t("在线应用")))]),s("div",{staticClass:"m-nav-group"},[s("a",{attrs:{href:"/bps/haste",target:"_blank"}},[s("img",{staticClass:"u-icon",attrs:{src:t.getAppIcon("haste")}}),s("span",[t._v(t._s(t.$t("加速阈值")))]),s("em",[t._v("Haste")])]),s("a",{attrs:{href:"/bps/dps",target:"_blank"}},[s("img",{staticClass:"u-icon",attrs:{src:t.getAppIcon("dps")}}),s("span",[t._v(t._s(t.$t("DPS计算器")))]),s("em",[t._v("DPS")])])])])},a=[],n=e("46d4"),i=(e("65c2"),e("85e4")),o={name:"list_nav",props:[],computed:{client:function(){return this.$store.state.client},tab:function(){return this.$route.query.tab},xfmaps:function(){return delete n["山居剑意"],n}},methods:{isActive:function(t){return t.name==this.$route.query.subtype},getAppIcon:i["getAppIcon"],showMountIcon:i["showMountIcon"]}},c=o,r=(e("c91e"),e("2877")),u=Object(r["a"])(c,l,a,!1,null,null,null);s["a"]=u.exports},a82b:function(t,s,e){"use strict";e("7c8c")},c91e:function(t,s,e){"use strict";e("e98a")},e98a:function(t,s,e){}}]);
//# sourceMappingURL=chunk-8bcbfe0a.7cd689b9.js.map