(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8795713e"],{"19f4":function(t,i,s){},"3c2d":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("AppLayout",["std"==t.client?i("SkillStd"):i("SkillOrigin")],1)},a=[],n=s("793d"),l=(s("b0c0"),function(){var t=this,i=t._self._c;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"v-skill"},[i("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.changeType},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[i("el-tab-pane",{attrs:{label:"技能",name:"skill"}},[t.skill&&"通用"!=t.xf?i("div",{staticClass:"m-skill-box"},t._l(t.skill,(function(s,e){return i("div",{key:e,staticClass:"m-skill-kungfu"},[i("h4",{staticClass:"u-title"},[t._v(t._s(s.remark))]),i("div",{staticClass:"u-list"},t._l(s.forceSkills,(function(s,e){return i("skill_item",{key:e,attrs:{item:s,wiki:t.wikis[s._id]}})})),1)])})),0):i("div",{staticClass:"m-skill-null"},[i("el-alert",{attrs:{title:"该心法技能数据暂缺，请通过侧边栏切换心法",type:"info","show-icon":""}})],1)]),i("el-tab-pane",{attrs:{label:"奇穴",name:"talent"}},[t.talent&&"通用"!=t.xf?i("div",{staticClass:"m-skill-box"},t._l(t.talent,(function(s,e){return i("div",{key:e,staticClass:"m-skill-talent"},[i("el-divider",{staticClass:"u-title",attrs:{"content-position":"left"}},[t._v(" "+t._s(s.level_name)+" ")]),i("div",{staticClass:"u-list"},[t._l(s.kungfuSkills,(function(t,s){return i("talent_item",{key:"kungfu-"+s,attrs:{item:t}})})),t._l(s.forceSkills,(function(t,s){return i("talent_item",{key:"force-"+s,attrs:{item:t,force:!0}})}))],2)],1)})),0):i("div",{staticClass:"m-skill-null"},[i("el-alert",{attrs:{title:"该心法奇穴数据暂缺，请通过侧边栏切换心法",type:"info","show-icon":""}})],1)]),i("el-tab-pane",{attrs:{label:"阵法",name:"zhenfa"}},[t.zhenfa&&"通用"!=t.xf?i("div",{staticClass:"m-skill-box"},[t.zhenfa?i("div",{staticClass:"m-skill-zhenfa"},[i("i",{staticClass:"u-pic"},[i("img",{attrs:{src:t.zhenfa.icon.FileName}})]),i("h4",{staticClass:"u-title"},[t._v(t._s(t.zhenfa.skillName))]),i("div",{staticClass:"u-descs"},t._l(t.zhenfa.descs,(function(s,e){return i("div",{key:e,staticClass:"u-desc"},[i("em",[t._v(t._s(s.name))]),i("span",[t._v(t._s(s.desc))])])})),0)]):t._e()]):i("div",{staticClass:"m-skill-null"},[i("el-alert",{attrs:{title:"该心法阵法数据暂缺，请通过侧边栏切换心法",type:"info","show-icon":""}})],1)])],1)],1)}),c=[],o=(s("a15b"),s("d81d"),s("d3b7"),s("159b"),s("ed39")),u=s("46d4"),r=s("5fa3"),d=s("73cd"),m=s("2ef0"),f=s.n(m),p=function(){var t=this,i=t._self._c;return t.item?i("div",{staticClass:"u-item"},[i("div",{staticClass:"u-info"},[i("i",{staticClass:"u-pic"},[i("img",{attrs:{src:t.item.icon.FileName}})]),i("span",{staticClass:"u-name"},[t._v(t._s(t.item.skillName)),i("span",{staticClass:"u-id"},[t._v("（ID:"+t._s(t.item._id)+"）")])]),i("span",{staticClass:"u-release"},[t._v(t._s(t.item.releaseType))]),i("span",{staticClass:"u-cd"},[t._v(t._s(t.item.cd))])]),i("div",{staticClass:"u-details"},[i("span",{staticClass:"u-distance"},[i("em",[t._v("距离")]),i("span",[t._v(t._s(t.item.distance))])]),i("span",{staticClass:"u-weapon"},[i("em",[t._v("武器")]),i("span",[t._v(t._s(t.item.weapon))])]),i("span",{staticClass:"u-consumption"},[i("em",[t._v("消耗内力")]),i("span",[t._v(t._s(t.item.consumption))])])]),i("div",{staticClass:"u-descbox"},[i("div",{staticClass:"u-spdesc"},[t._v(t._s(t.item.specialDesc))]),i("div",{staticClass:"u-desc",domProps:{innerHTML:t._s(t.format(t.item.desc))}}),i("div",{staticClass:"u-sdesc"},[t._v(t._s(t.item.simpleDesc))])]),t.item.cheasts.length?i("div",{directives:[{name:"show",rawName:"v-show",value:!!t.item.collapse,expression:"!!item.collapse"}],staticClass:"u-cheasts"},t._l(t.item.cheasts,(function(s,e){return i("div",{key:s+e,staticClass:"u-cheast"},[i("i",{staticClass:"el-icon-collection-tag"}),i("span",{staticClass:"u-cheast-name"},[t._v(t._s(s.name))]),i("span",{staticClass:"u-cheast-desc"},[t._v(t._s(s.desc))])])})),0):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:!!t.item.wiki_visible,expression:"!!item.wiki_visible"}],staticClass:"u-wikis"},[t.wiki||t.item._id?i("skillWiki",{attrs:{wiki:t.wiki,"source-id":t.item._id}}):t._e()],1),i("div",{staticClass:"u-panel"},[t.item.cheasts.length?i("el-button",{staticClass:"u-panel-recipe",attrs:{size:"mini",icon:"el-icon-connection"},on:{click:function(i){return t.toggleCheasts(t.item)}}},[t._v("秘籍")]):t._e(),i("el-button",{staticClass:"u-panel-wiki",attrs:{size:"mini",icon:"el-icon-reading"},on:{click:function(i){return t.toggleWiki(t.item)}}},[t._v("百科")])],1)]):t._e()},k=[],_=(s("ac1f"),s("5319"),function(){var t=this,i=t._self._c;return i("div",{staticClass:"m-skill-wiki"},[t.wiki&&t.wiki.post?i("div",{staticClass:"m-wiki-post-panel"},[i("WikiPanel",{attrs:{"wiki-post":t.wiki,showQR:!1}},[i("template",{slot:"head-title"},[i("span",{staticClass:"u-txt"},[t._v("技能百科")])]),i("template",{slot:"head-actions"},[i("a",{staticClass:"el-button el-button--primary",attrs:{href:t.publish_url("skill/".concat(t.id)),target:"_blank"}},[i("i",{staticClass:"el-icon-edit"}),i("span",[t._v("完善技能百科")])])]),i("template",{slot:"body"},[i("Article",{attrs:{content:t.wiki.post.content}}),i("div",{staticClass:"m-wiki-signature"},[i("i",{staticClass:"el-icon-edit"}),t._v(" 本次修订由 "),i("b",[t._v(t._s(t.user_name))]),t._v(" 提交于"+t._s(t.updated_at)+" ")])],1)],2)],1):t._e(),t.is_empty?i("div",{staticClass:"m-wiki-post-empty"},[i("i",{staticClass:"el-icon-s-opportunity"}),i("span",[t._v("暂无百科，我要")]),i("a",{staticClass:"s-link",attrs:{href:t.publish_url("skill/".concat(t.id))}},[t._v("完善百科")])]):t._e()])}),v=[],h=(s("a9e3"),s("a974")),C=s("662c"),b=s("85e4"),g={name:"skill_wiki",components:{WikiPanel:C["a"],Article:h["a"]},props:{wiki:{type:Object,default:function(){}},sourceId:{type:[Number,String],default:0}},data:function(){return{}},computed:{id:function(){var t;return(null===(t=this.wiki)||void 0===t?void 0:t.source_id)||this.sourceId},client:function(){return this.$store.state.client||"std"},user_name:function(){var t;return null===(t=this.wiki)||void 0===t?void 0:t.post.user_nickname},updated_at:function(){var t;return Object(b["ts2str"])(null===(t=this.wiki)||void 0===t?void 0:t.post.updated)},author_id:function(){var t;return~~(null===(t=this.wiki)||void 0===t?void 0:t.post.user_id)},is_empty:function(){var t;return!(null!==(t=this.wiki)&&void 0!==t&&t.post)}},methods:{publish_url:b["publishLink"]}},w=g,y=(s("87ba"),s("2877")),x=Object(y["a"])(w,_,v,!1,null,null,null),O=x.exports,j={name:"skill_item",props:["item","wiki"],data:function(){return{}},computed:{},methods:{format:function(t){return t.replace(/\\n/g,"\n")},toggleCheasts:function(t){t.collapse=!t.collapse,this.$forceUpdate()},toggleWiki:function(t){t.wiki_visible=!t.wiki_visible,this.$forceUpdate()}},mounted:function(){},components:{skillWiki:O}},N=j,S=(s("dd65"),Object(y["a"])(N,p,k,!1,null,"3c2cdf60",null)),A=S.exports,z=function(){var t=this,i=t._self._c;return t.item?i("div",{staticClass:"u-item"},[i("i",{staticClass:"u-pic"},[i("img",{attrs:{src:t.item.icon.FileName}})]),i("span",{staticClass:"u-name"},[t._v(t._s(t.item.name||t.item.skillName))]),t.muilt_desc?t._l(t.item.desc,(function(s,e){return i("span",{key:e,staticClass:"u-desc"},[i("em",{staticClass:"u-desc-title"},[t._v(t._s(s.title)+"：")]),i("span",{staticClass:"u-desc-content"},[t._v(t._s(s.content))])])})):[i("span",{staticClass:"u-desc"},[t._v(t._s(t.item.desc))])],t.item.cd||t.item.skill_id?[t.force||"std"!=t.client?i("span",{staticClass:"u-id"},[t._v("CD : "+t._s(t.item.cd))]):i("span",{staticClass:"u-id"},[t._v("ID : "+t._s(t.item.skill_id))])]:t._e()],2):t._e()},D=[],W={name:"talent_item",props:["item","force"],data:function(){return{}},computed:{muilt_desc:function(){return this.item.desc instanceof Array},client:function(){return this.$store.state.client||"std"}},methods:{},mounted:function(){},components:{}},I=W,$=Object(y["a"])(I,z,D,!1,null,null,null),T=$.exports,L=12,F={name:"Skill",props:[],data:function(){return{loading:!1,skill:"",talent:"",zhenfa:"",active:"skill",wikis:{}}},computed:{xf:function(){return this.$route.query.subtype||"通用"},kfid:function(){return u[this.xf]["kungfuId"]}},methods:{changeType:function(){},loadData:function(){var t=this;this.loading=!0,Object(o["a"])(this.xf).then((function(i){var s=i;s&&Array.isArray(s)&&s.length&&s.forEach((function(i){i.kungfuId==t.kfid&&(t.skill=i.remarks,t.zhenfa=i.zhenFa)}));var e=f.a.flattenDeep(t.skill.map((function(t){return t.forceSkills}))).map((function(t){return t._id}));t.loadWiki(e.join(","))})).catch((function(){t.skill=null,t.zhenfa=null})).finally((function(){t.loading=!1})),Object(o["d"])(this.xf).then((function(i){var s=i;s&&Array.isArray(s)&&s.length&&s.forEach((function(i){if(i.kungfuId==t.kfid){var s=i.kungfuLevel,e=new Array(L);s.forEach((function(t){t.level_name=r[t.level-1],e[t.level-1]=t})),t.talent=e}}))})).catch((function(){t.talent=null})).finally((function(){t.loading=!1}))},loadWiki:function(t){var i=this;Object(d["c"])("skill",{source_id:t,client:"std"}).then((function(t){Array.isArray(t.data.data)||(i.wikis=t.data.data)}))}},watch:{xf:{immediate:!0,handler:function(){this.loadData()}}},components:{skill_item:A,talent_item:T}},E=F,J=(s("f66f"),Object(y["a"])(E,l,c,!1,null,null,null)),P=J.exports,q=function(){var t=this,i=t._self._c;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"v-skill"},[i("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.changeType},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[i("el-tab-pane",{attrs:{label:"技能",name:"skill"}},[t.skill&&"通用"!=t.schoolName?i("div",{staticClass:"m-skill-box"},t._l(t.skill,(function(s,e){return i("div",{key:e,staticClass:"m-skill-kungfu"},[i("h4",{staticClass:"u-title"},[t._v(t._s(e))]),i("div",{staticClass:"u-list"},t._l(s,(function(t,s){return i("skill_item",{key:s,attrs:{item:t}})})),1)])})),0):i("div",{staticClass:"m-skill-null"},[i("el-alert",{attrs:{title:"该心法数据暂缺，请通过侧边栏切换心法",type:"info","show-icon":""}})],1)]),i("el-tab-pane",{attrs:{label:"镇派",name:"talent"}},[t.talent&&"通用"!=t.schoolName?i("div",{staticClass:"m-skill-box"},t._l(t.talent,(function(s,e){return i("div",{key:e,staticClass:"m-skill-talent"},[i("el-divider",{staticClass:"u-title",attrs:{"content-position":"left"}},[t._v(" "+t._s(e)+" ")]),i("div",{staticClass:"u-list"},t._l(s,(function(t,s){return i("talent_item",{key:s,attrs:{item:t}})})),1)],1)})),0):i("div",{staticClass:"m-skill-null"},[i("el-alert",{attrs:{title:"该心法数据暂缺，请通过侧边栏切换心法",type:"info","show-icon":""}})],1)])],1)],1)},U=[],H=s("9eb6"),M={name:"SkillOrigin",props:[],data:function(){return{loading:!1,skill:"",talent:"",active:"skill",wikis:{}}},computed:{schoolName:function(){return H.mount_belong_school[this.xf]},xf:function(){return this.$route.query.subtype}},methods:{changeType:function(){},loadData:function(){var t=this;this.loading=!0,Object(o["a"])(this.schoolName,"origin").then((function(i){t.skill=i})).catch((function(){t.skill=null})).finally((function(){t.loading=!1})),Object(o["d"])(this.schoolName,"origin").then((function(i){t.talent=i})).catch((function(){t.talent=null})).finally((function(){t.loading=!1}))},loadWiki:function(t){var i=this;Object(d["c"])("skill",{source_id:t,client:"origin"}).then((function(t){Array.isArray(t.data.data)||(i.wikis=t.data.data)}))}},watch:{schoolName:{immediate:!0,handler:function(){this.loadData()}}},components:{skill_item:A,talent_item:T}},Q=M,R=Object(y["a"])(Q,q,U,!1,null,"a0e6d1ee",null),B=R.exports,G={name:"Skill",props:[],components:{SkillStd:P,SkillOrigin:B,AppLayout:n["a"]},data:function(){return{}},computed:{client:function(){return this.$store.state.client}},watch:{},methods:{},created:function(){},mounted:function(){}},K=G,V=Object(y["a"])(K,e,a,!1,null,null,null);i["default"]=V.exports},"5fa3":function(t){t.exports=JSON.parse('["第一重","第二重","第三重","第四重","第五重","第六重","第七重","第八重","第九重","第十重","第十一重","第十二重"]')},"73cd":function(t,i,s){"use strict";s.d(i,"c",(function(){return a})),s.d(i,"b",(function(){return n})),s.d(i,"a",(function(){return l}));var e=s("41cb");function a(t,i){return Object(e["b"])().get("/api/wiki/posts/".concat(t),{params:i})}function n(t){return Object(e["a"])({mute:!0}).get("/api/cms/menu-group",{params:{key:t}})}function l(t){return Object(e["a"])({mute:!0}).get("/api/cms/breadcrumb/".concat(t))}},8653:function(t,i,s){},"87ba":function(t,i,s){"use strict";s("a750")},a750:function(t,i,s){},dd65:function(t,i,s){"use strict";s("19f4")},f66f:function(t,i,s){"use strict";s("8653")}}]);
//# sourceMappingURL=chunk-8795713e.317ba710.js.map