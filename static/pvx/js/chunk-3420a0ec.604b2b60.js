(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3420a0ec"],{"11a3":function(t,i,e){"use strict";e("99af"),e("b0c0");var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"w-pvx-user"},[t.wiki_post&&t.wiki_post.post?i("div",{staticClass:"m-wiki-post-panel"},[i("WikiPanel",{attrs:{"wiki-post":t.wiki_post}},[i("template",{slot:"head-title"},[i("svg",{class:"u-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[i("path",{attrs:{d:"M382.5 109.2C345.1 71.8 296.3 50 243.9 47v110.9c46.7 19.2 79.6 65.2 79.6 118.7 0 58-47.2 105.2-105.2 105.2-47.8 0-86.6-38.9-86.6-86.6 0-39.6 32.2-71.8 71.8-71.8 33.1 0 59.9 26.9 59.9 59.9h-25c0-19.3-15.7-34.9-34.9-34.9-25.8 0-46.8 21-46.8 46.8 0 34 27.6 61.6 61.6 61.6 44.2 0 80.1-35.9 80.1-80.1 0-57-46.3-103.3-103.3-103.3C122.3 173.3 63 232.6 63 305.6 63 398.4 138.5 474 231.4 474c57.1 0 110.7-22.2 151.1-62.6 40.4-40.4 62.6-94 62.6-151.1s-22.2-110.7-62.6-151.1z"}})]),i("span",{staticClass:"u-txt"},[t._v(t._s(t.name+t.$t("攻略")))])]),i("template",{slot:"head-actions"},[i("a",{staticClass:"el-button el-button--primary",attrs:{href:t.publish_url("".concat(t.type,"/").concat(t.id))}},[i("i",{staticClass:"el-icon-edit"}),i("span",[t._v(t._s(t.$t("完善")+t.name+t.$t("攻略")))])])]),i("template",{slot:"body"},[t.compatible?i("div",{staticClass:"m-wiki-compatible"},[i("i",{staticClass:"el-icon-warning-outline"}),t._v(" "+t._s(t.$t("暂无缘起攻略，以下为重制攻略，仅作参考，"))),i("a",{staticClass:"s-link",attrs:{href:t.publish_url("".concat(t.type,"/").concat(t.id))}},[t._v(t._s(t.$t("参与修订")))]),t._v("。 ")]):t._e(),i("Article",{attrs:{content:t.wiki_post.post.content}}),i("div",{staticClass:"m-wiki-signature"},[i("i",{staticClass:"el-icon-edit"}),t._v(" "+t._s(t.$t("本次修订由"))+" "),i("b",[t._v(t._s(t.user_name))]),t._v(" "+t._s(t.$t("提交于")+t.updated_at)+" ")])],1)],2),t._t("serendipity"),i("WikiRevisions",{attrs:{type:t.type,"source-id":t.id}})],2):i("div",{staticClass:"m-wiki-post-empty"},[i("i",{staticClass:"el-icon-s-opportunity"}),i("span",[t._v(t._s(t.$t("暂无攻略，我要")))]),i("a",{staticClass:"s-link",attrs:{href:t.publish_url("".concat(t.type,"/").concat(t.id))}},[t._v(t._s(t.$t("完善攻略")))])]),i("Thx",{key:t.type+"-thx-"+t.id,staticClass:"m-thx",attrs:{postId:t.id,postType:t.type,postTitle:t.wiki_post.source.Name,userId:t.author_id,adminBoxcoinEnable:!1,userBoxcoinEnable:!1,authors:t.authors,mode:"wiki",client:t.client}}),i("WikiComments",{attrs:{type:t.type,"source-id":String(t.id)}})],1)},s=[],n=(e("4de4"),e("d81d"),e("d3b7"),e("9616")),o=e("500d"),r=e("a974"),c=e("662c"),l=e("9307"),u=e("d825"),d=e("85e4"),p={name:"PvxUser",components:{WikiPanel:c["a"],Article:r["a"],WikiRevisions:l["a"],WikiComments:u["a"]},props:{id:{required:!0},name:{type:String,default:""},type:{type:String,required:!0},itemId:{type:String,default:""}},data:function(){return{wiki_post:{source:{},post:null},compatible:!1,is_empty:!0}},watch:{id:{immediate:!0,handler:function(){this.post_id?this.loadRevision():this.loadData()}},post_id:{handler:function(){this.loadRevision()}}},computed:{client:function(){return this.$store.state.client},post_id:function(){return this.itemId||this.$route.params.post_id},isRevision:function(){return this.itemId?!!this.itemId:!!this.$route.params.post_id},author_id:function(){var t,i;return~~(null===(t=this.wiki_post)||void 0===t||null===(i=t.post)||void 0===i?void 0:i.user_id)},user_name:function(){var t,i;return null===(t=this.wiki_post)||void 0===t||null===(i=t.post)||void 0===i?void 0:i.user_nickname},updated_at:function(){var t,i;return Object(d["ts2str"])(null===(t=this.wiki_post)||void 0===t||null===(i=t.post)||void 0===i?void 0:i.updated)},fav_title:function(){var t,i;return null===(t=this.wiki_post)||void 0===t||null===(i=t.source)||void 0===i?void 0:i.Name},authors:function(){var t,i,e;return this.isRevision?[]:(null===(t=this.wiki_post)||void 0===t||null===(i=t.users)||void 0===i||null===(e=i.filter((function(t){return t.id})))||void 0===e?void 0:e.map((function(t){return{user_id:t.id,user_avatar:t.avatar,display_name:t.nickname}})))||[]}},methods:{getLink:d["getLink"],loadData:function(){var t=this;this.id&&o["a"].mix({type:this.type,id:this.id,client:this.client}).then((function(i){var e=i.post,a=i.source,s=i.compatible,n=i.isEmpty,o=i.users;t.wiki_post={post:e,source:a,users:o},t.is_empty=n,t.compatible=s})),this.triggerStat()},loadRevision:function(){var t=this;o["a"].getById(this.post_id).then((function(i){var e;t.wiki_post=null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.data})),this.triggerStat()},publish_url:d["publishLink"],triggerStat:function(){"origin"==this.client?Object(n["b"])("origin_".concat(type),this.id):Object(n["b"])(this.type,this.id)}}},m=p,v=(e("34f6"),e("2877")),h=Object(v["a"])(m,a,s,!1,null,null,null);i["a"]=h.exports},"34f6":function(t,i,e){"use strict";e("4233")},4233:function(t,i,e){},"74e8":function(t,i,e){"use strict";e.r(i);e("b0c0"),e("a9e3");var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"horse-single-wrapper m-single-wrapper"},[i("div",{staticClass:"back-wrap"},[i("el-button",{on:{click:t.goBack}},[t._v(t._s(t.$t("返回列表")))])],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"horse-single-content"},[i("div",{staticClass:"main-info-wrapper"},[t.item.ID?i("div",{staticClass:"main-info-wrap"},[i("div",{staticClass:"info-wrap"},[i("div",{staticClass:"info-item"},[i("span",{staticClass:"u-id"},[t._v("ID: "+t._s(t.item.ID))]),i("span",{staticClass:"u-name"},[t._v(t._s(t.item.Name))])]),i("div",{staticClass:"info-item u-desc"},[i("span",[t._v(" "+t._s(t.$t("分类:")+t.$t(t.displayType))+" ")]),i("span",[t._v(t._s(t.$t("品质:")+t.item.Level))]),"2"!==t.type?i("span",[t._v(t._s(t.$t("跑速:")+t.speedName))]):t._e(),"2"!==t.type?i("span",[t._v(t._s(t.$t("饲料:")+t.feedName))]):t._e()]),i("div",{staticClass:"info-item u-desc"},[i("div",{staticClass:"u-title"},[t._v(t._s(t.$t("基础属性")))]),t.basicAttrs.length?i("div",{staticClass:"u-list"},t._l(t.basicAttrs,(function(e){return i("div",{key:e.id,staticClass:"u-attr"},[i("el-tooltip",{attrs:{trigger:"hover",placement:"top"}},[i("div",{staticClass:"u-attr-pop",attrs:{slot:"content"},slot:"content"},[e.name?i("div",{staticClass:"u-attr-name"},[t._v(" "+t._s((e.name||"")+(Number(e.level)?e.level+t.$t("级"):""))+" ")]):t._e(),i("div",{staticClass:"u-attr-desc"},[t._v(t._s(e.desc))])]),i("img",{staticClass:"u-attr-icon",staticStyle:{cursor:"default"},attrs:{src:e.iconUrl,alt:e.name}})])],1)})),0):i("div",{staticClass:"no-data"},[t._v(t._s(t.$t("无")))])]),i("div",{staticClass:"info-item u-desc"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("特殊属性")))]),t.magicAttrs.length?i("div",{staticClass:"u-list"},t._l(t.magicAttrs,(function(e,a){return i("div",{key:a,staticClass:"u-attr"},[i("el-tooltip",{attrs:{trigger:"hover",placement:"top"}},[i("div",{staticClass:"u-attr-pop",attrs:{slot:"content"},slot:"content"},[e.name?i("div",{staticClass:"u-attr-name"},[t._v(" "+t._s((e.name||"")+(Number(e.level)?e.level+t.$t("级"):""))+" ")]):t._e(),i("div",{staticClass:"u-attr-desc"},[t._v(t._s(e.desc))])]),i("img",{staticClass:"u-attr-icon",attrs:{src:e.iconUrl,alt:e.name}})])],1)})),0):i("div",{staticClass:"no-data"},[t._v(t._s(t.$t("无")))])]),i("a",{staticClass:"u-link",attrs:{href:t.getLink("item",this.id),target:"_blank"}},[i("i",{staticClass:"el-icon-collection-tag"}),t._v(" "+t._s(t.$t("物品信息"))+" ")])]),i("div",{staticClass:"img-wrap",class:"u-quality-bg--"+t.item.Quality},[15===t.item.SubType?i("el-image",{staticClass:"u-image",attrs:{src:t.getImgSrc(t.item)}}):i("item-icon",{staticClass:"u-image",attrs:{item_id:String(t.item.ItemID),isLink:!1,size:150,onlyIcon:!0}})],1)]):i("div",[t._v(t._s(t.$t("无此信息")))])]),t.sameList.length?i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.sameLoading,expression:"sameLoading"}],staticClass:"same-list-container"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("同类坐骑")))]),i("div",{staticClass:"m-horse-list"},t._l(t.sameList,(function(e){return i("HorseCard",{key:e.ItemID,attrs:{item:e},nativeOn:{click:function(i){return t.getHorse(e.ItemID)}}})})),1)]):t._e(),t.originDatas.length?i("div",{staticClass:"catch-container"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("捕获地图")))]),i("horse-map",{attrs:{name:t.item.Name,list:t.originDatas}})],1):t._e(),i("pvx-user",{attrs:{id:t.id,name:t.$t("坐骑"),type:"item"}})],1)])},s=[],n=(e("4de4"),e("7db0"),e("d81d"),e("14d9"),e("fb6a"),e("d3b7"),e("ac1f"),e("466d"),e("5319"),e("159b"),e("bf15")),o=e("f252"),r=e("85e4"),c=e("2efc"),l=function(){var t=this,i=t._self._c;return i("div",{staticClass:"m-horse-map"},[i("el-carousel",{attrs:{autoplay:!1,height:t.height}},t._l(t.mapDatas,(function(e,a){return i("el-carousel-item",{key:a},[i("jx3box-map",{attrs:{mapId:Number(a),datas:e},on:{resize:t.handleResize}})],1)})),1)],1)},u=[],d=e("b85c"),p=(e("99af"),e("abab")),m={name:"HorseMap",props:{name:{type:String,required:!0},list:{type:Array,required:!0}},components:{Jx3boxMap:p["a"]},data:function(){return{height:"896px"}},computed:{mapDatas:function(){var t,i=this.$i18n.t.bind(this.$i18n),e={},a=this.name,s=Object(d["a"])(this.list);try{for(s.s();!(t=s.n()).done;){var n=t.value,o=n.mapId;e[o]||(e[o]=[]);var r,c=Object(d["a"])(n.coordinates);try{for(c.s();!(r=c.n()).done;){var l=r.value;e[o].push({title:n.mapName,content:"\n                        ".concat(i("马驹"),"·").concat(a.indexOf("·")>-1?a.split("·")[0]:a,"\n                        <br /> ").concat(i("坐标："),"(").concat(l.x,",").concat(l.y,",").concat(l.z,")"),x:l.x,y:l.y,z:l.z})}}catch(u){c.e(u)}finally{c.f()}}}catch(u){s.e(u)}finally{s.f()}return e}},methods:{handleResize:function(t){this.height=t[1]+"px"}}},v=m,h=e("2877"),f=Object(h["a"])(v,l,u,!1,null,null,null),_=f.exports,g=e("11a3"),y=e("f34a"),b=e("ef56"),C={name:"Single",inject:["__imgRoot","__imgRoot2"],components:{HorseCard:c["a"],HorseMap:_,PvxUser:g["a"],ItemIcon:n["a"]},data:function(){return{loading:!1,sameLoading:!1,item:{},sameList:[]}},computed:{originDatas:function(){var t=this.item.Name;if(t){var i=y.find((function(i){return t.indexOf(i.name)>-1}))?y.find((function(i){return t.indexOf(i.name)>-1})).mapList:[],e=[];return i.length&&i.forEach((function(t){e.push({mapId:t,mapName:b[t].mapName,coordinates:b[t].coordinates})})),e}return[]},id:function(){return this.$route.params.id},type:function(){return this.$route.query.type},client:function(){return this.$store.state.client},basicAttrs:function(){var t=this.item.MagicAttributes;return t&&t.length?t.filter((function(t){return!t.level||"0"===t.level})).map((function(t){return t.iconUrl=Object(r["iconLink"])(t.icon),t})):[]},magicAttrs:function(){var t=this.item.MagicAttributes;return t&&t.length?t.filter((function(t){return t.icon&&"0"!==t.level})).map((function(t){return t.iconUrl=Object(r["iconLink"])(t.icon),t})):[]},typeName:function(){var t=this.item,i="";return 15===t.SubType?i=0===t.DetailType?"普通坐骑":"奇趣坐骑":23===t.SubType&&(i=0===t.DetailType?"头饰":1===t.DetailType?"鞍饰":2===t.DetailType?"足饰":3===t.DetailType?"马饰":"马具"),i},modeName:function(){var t="",i=this.item;return 15===i.SubType&&i.MagicAttributes&&i.MagicAttributes.length&&(t=i.MagicAttributes.find((function(t){return"15650"===t.id}))?i.MagicAttributes.find((function(t){return"15650"===t.id})).name:"单骑"),t},feedName:function(){var t=this.item,i="";if(15===t.SubType&&t.Feed){var e=t.Feed.FeedTip.indexOf("【"),a=t.Feed.FeedTip.indexOf("】");i=t.Feed.FeedTip.slice(e,a+1)}return i},speedName:function(){var t=this.item,i="";return t.MoveSpeed&&(i=t.MoveSpeedDesc.split("移动速度提高")[1]),i},displayType:function(){var t=this.typeName;return"2"!==this.type&&(t+=" · ".concat(this.modeName),this.item.GetType&&(t+=" · ".concat(this.item.GetType))),t}},watch:{id:{immediate:!0,handler:function(t){t&&this.getHorse(t)}}},methods:{goBack:function(){this.$router.push({path:"/"})},getHorse:function(t){var i=this,e={id:t,client:this.client};"2"===this.type&&(e.type=2),this.loading=!0,Object(o["e"])(e).then((function(t){i.loading=!1,i.item=t.data||{};var e=t.data.Name;"普通坐骑"===i.typeName&&(e=t.data.Name.split("·")[0]),"2"!==i.type&&e&&i.getSameHorses(e)})).finally((function(){i.loading=!1}))},getSameHorses:function(t){var i=this,e={page:1,pageSize:50,client:this.client,keyword:t};this.sameLoading=!0,Object(o["f"])(e).then((function(t){i.sameLoading=!1,i.sameList=t.data.list.filter((function(t){return t.ID!==i.item.ID})).map((function(t){return t.imgUrl=i.getImgSrc(t),t.MagicAttributes&&t.MagicAttributes.length&&t.MagicAttributes.map((function(t){return t.iconUrl=Object(r["iconLink"])(t.icon),t})),t}))})).finally((function(){i.sameLoading=!1}))},getImgSrc:function(t){var i=t.ImgPath;if(i){var e=i.toLowerCase().match(/.*[\/,\\]homeland(.*?).tga/),a=null===e||void 0===e?void 0:e[1].replace(/\\/g,"/");return"default"==(null===e||void 0===e?void 0:e[1])?this.__imgRoot+"homeland/".concat(this.client)+"/default/default.png":this.__imgRoot+"homeland/".concat(this.client)+a+".png"}return this.__imgRoot2+"".concat(this.client,"/")+t.ID+".png"},getLink:r["getLink"]}},k=C,w=(e("de5b"),Object(h["a"])(k,a,s,!1,null,null,null));i["default"]=w.exports},"9ca2":function(t,i,e){},de5b:function(t,i,e){"use strict";e("9ca2")},f34a:function(t){t.exports=JSON.parse('[{"name":"浮云","mapList":["74","105","216","217","411"]},{"name":"绝群","mapList":["74","105","216","217","411"]},{"name":"逸骠","mapList":["74","105","216","217","411"]},{"name":"紫燕骝","mapList":["74","105","216","217","411"]},{"name":"绿螭骢","mapList":["74","105","216","217","411"]},{"name":"龙子","mapList":["13","21","23","216","217","411"]},{"name":"麟驹","mapList":["13","21","23","216","217","411"]},{"name":"绝尘","mapList":["22","30","100","101","216","217","411"]},{"name":"赤蛇","mapList":["22","30","100","101","216","217","411"]},{"name":"闪电","mapList":["22","30","100","101","216","217","411"]},{"name":"里飞沙","mapList":["104","216","217","411"]},{"name":"赤兔","mapList":["216","217","411"]}]')}}]);
//# sourceMappingURL=chunk-3420a0ec.604b2b60.js.map