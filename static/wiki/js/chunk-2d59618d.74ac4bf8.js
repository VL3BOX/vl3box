(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d59618d"],{"500d":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return o}));var i=s("41cb");const a=(t,e)=>Object(i["d"])().get("/pet/"+t,{params:e}),c=location.href.includes("origin")?"origin":"std",n={latest({type:t},e){return Object(i["a"])().get("/api/cms/wiki/post/latest",{params:{client:c,...e,type:t}})},mine(t){return Object(i["a"])().get("/api/cms/wiki/post/mine",{params:t})},counter({type:t},e){return Object(i["a"])().get("/api/cms/wiki/post/counter",{params:{client:c,...e,type:t}})},achievements(t){return Object(i["d"])().get("/achievement/list",{params:{client:c,...t}})},get({type:t,id:e},s){return Object(i["a"])().get(`/api/cms/wiki/post/type/${t}/source/${e}`,{params:{client:c,...s}})},getById(t){return Object(i["a"])().get("/api/cms/wiki/post/id/"+t)},post(t){return Object(i["a"])().post("/api/cms/wiki/post",t)},update(t,e){return Object(i["a"])().put("/api/cms/wiki/post/"+t,e)},remove(t){return Object(i["a"])().delete("/api/cms/wiki/post/"+t)},versions({type:t,id:e},s){return Object(i["a"])().get(`/api/cms/wiki/post/type/${t}/source/${e}/versions`,{params:{client:c,...s}})},async handleMix(t,e,s,i){let a="",c="",n=!0,o=!1,r=[];if("std"===s){const l=await this.get({type:t,id:e},{client:s,...i});return a=l.data.data.post,c=l.data.data.source,r=l.data.data.users,a&&(n=!1),console.log("获取旗舰攻略"),{post:a,source:c,isEmpty:n,compatible:o,type:t,source_id:e,users:r}}{const l=await this.get({type:t,id:e},{client:s,...i});c=l.data.data.source,a=l.data.data.post,r=l.data.data.users,a&&(n=!1),console.log("获取缘起攻略");const u=!!l.data.data.post;return u?{post:a,source:c,isEmpty:n,compatible:o,type:t,source_id:e,users:r}:(console.log("兼容：获取旗舰攻略"),this.get({type:t,id:e},{client:"std",...i}).then(s=>(a=s.data.data.post,c||(c=s.data.data.source),a&&(n=!1),r=s.data.data.users,o=!0,{post:a,source:c,isEmpty:n,compatible:o,type:t,source_id:e,users:r})))}},async mix({type:t,id:e,client:s},i){let c="",n="";if(c="cj"===t?"achievement":"pet"===t?"item":t||"achievement",e){if(n=e,"pet"===t){const t=await a(e,{client:s});let n=t.data,o=n.ItemTabType+"_"+n.ItemTabIndex;return this.handleMix(c,o,s,i)}return this.handleMix(c,n,s,i)}}},o={list({type:t,id:e},s){return Object(i["a"])().get("/api/cms/wiki/comment",{params:{...s,type:t,source_id:e}})},post(t){return Object(i["a"])().post("/api/cms/wiki/comment",t)},delete(t){return Object(i["a"])().delete("/api/cms/wiki/comment/"+t)},myList(t){return Object(i["a"])().get("/api/cms/wiki/comment/mine",{params:t})}}},"59b9":function(t,e,s){},"5b81":function(t,e,s){"use strict";var i=s("23e7"),a=s("c65b"),c=s("e330"),n=s("1d80"),o=s("1626"),r=s("7234"),l=s("44e7"),u=s("577e"),d=s("dc4a"),p=s("90d8"),m=s("0cb2"),v=s("b622"),h=s("c430"),f=v("replace"),w=TypeError,b=c("".indexOf),C=c("".replace),_=c("".slice),g=Math.max;i({target:"String",proto:!0},{replaceAll:function(t,e){var s,i,c,v,y,k,P,x,j,O=n(this),z=0,M=0,H="";if(!r(t)){if(s=l(t),s&&(i=u(n(p(t))),!~b(i,"g")))throw new w("`.replaceAll` does not allow non-global regexes");if(c=d(t,f),c)return a(c,t,O,e);if(h&&s)return C(u(O),t,e)}v=u(O),y=u(t),k=o(e),k||(e=u(e)),P=y.length,x=g(1,P),z=b(v,y);while(-1!==z)j=k?u(e(y,z,v)):m(y,v,z,[],void 0,e),H+=_(v,M,z)+j,M=z+P,z=z+x>v.length?-1:b(v,y,z+x);return M<v.length&&(H+=_(v,M)),H}})},"7a6d":function(t,e,s){"use strict";s("59b9")},"7c78":function(t,e,s){"use strict";s("cc39")},"90cb":function(t,e,s){"use strict";s("eb62")},ac29:function(t,e,s){"use strict";s("b0c0");var i=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"u-item u-item-new",attrs:{to:{name:"view",params:t.getViewParams()}}},["quest"!==t.type?e("div",{staticClass:"u-icon"},[e("img",{attrs:{src:t.iconUrl(t.item.IconID)}})]):t._e(),e("div",{staticClass:"m-carousel-content"},[e("div",{staticClass:"u-title"},[e("i",{staticClass:"el-icon-medal"}),e("span",{domProps:{textContent:t._s("".concat("quest"===t.type?t.item.name:t.item.Name))}})]),e("div",{staticClass:"u-desc"},[e("i",{staticClass:"el-icon-mic"}),e("span",{domProps:{innerHTML:t._s("".concat("quest"===t.type?t.item.target:t.parseDesc(t.item.Desc)))}})])])])},a=[],c=(s("ac1f"),s("5319"),s("5b81"),s("85e4")),n={name:"WikiItem",props:{item:{type:Object,required:!0},type:{type:String,default:"achievement"}},computed:{client:function(){return this.$store.state.client}},methods:{iconUrl:function(t){return Object(c["iconLink"])(t,this.client)},getViewParams:function(){var t={source_id:this.item.ID};return"item"===this.type&&(t={item_id:this.item.id}),"quest"===this.type&&(t={quest_id:this.item.id}),t},parseDesc:function(t){return t?t.replaceAll('<Text>text="',"").replace(/\".*?<\/text>/g,"").replaceAll("\\\\\\n",""):"-"}}},o=n,r=(s("90cb"),s("2877")),l=Object(r["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports},cbfa:function(t,e,s){"use strict";s("b0c0"),s("b680");var i=function(){var t=this,e=t._self._c;return e("router-link",{attrs:{to:{name:"waiting"}}},[e("i",{staticClass:"el-icon-edit-outline"}),e("span",[t._v(t._s(t.$t("待攻略")+t.name))]),t.showCounter?e("span",{staticClass:"u-waiting",style:t.waitingColorStyle()},[t._v("（"+t._s(t.solveRate.toFixed(2))+"%）")]):t._e()])},a=[],c=s("500d"),n=(s("9622"),{name:"WikiCounter",props:{type:{type:String,default:"achievement"},showCounter:{type:Boolean,default:!0}},data:function(){return{solveRate:0}},computed:{name:function(){var t="成就";return"item"===this.type&&(t="物品"),"quest"===this.type&&(t="任务"),t}},methods:{waitingColorStyle:function(){return this.solveRate>95?"color: #8dfa58":this.solveRate>60?"color: #e2d849":"color: #ff3838"}},mounted:function(){var t=this;c["a"].counter({type:this.type}).then((function(e){var s,i=null!==(s=e.data.data)&&void 0!==s?s:{},a=i.wiki_count,c=i.source_count;t.solveRate=a/c*100}))}}),o=n,r=s("2877"),l=Object(r["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports},cc39:function(t,e,s){},cf45:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));s("fb6a"),s("ac1f"),s("5319"),s("498a");var i=function(t){return t=t?t.trim().replace(/<[^>]*>/g,""):"",t.length>100?t.slice(0,100)+"...":t}},d2a1:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-wiki-panel",class:{"border-none":t.borderNone,"m-detail-scene":t.wikiPost||"detail"===t.scene}},[e("div",{staticClass:"m-panel-head"},[t._t("head-before"),e("div",{staticClass:"m-panel-actions"},[t.wikiPost&&t.showQR?e("QRcode",{staticClass:"u-qr"}):t._e(),t._t("head-actions")],2),e("div",{staticClass:"m-panel-title"},[t._t("head-title")],2),t._t("head-after")],2),e("div",{staticClass:"m-panel-body"},[t._t("body-before"),t.wikiPost&&t.wikiPost.post?e("div",{staticClass:"m-wiki-metas"},[t.wikiPost.users&&t.wikiPost.users.length?e("div",{staticClass:"u-meta"},[e("em",{staticClass:"u-label"},[t._v(t._s(t.$t("参与贡献")))]),t._l(t.wikiPost.users,(function(s,i){return e("a",{key:i,staticClass:"u-value u-creator",attrs:{target:"_blank",href:s.id?t.author_url(s.id):null}},[e("img",{attrs:{src:t.thumbnail_url(s.avatar),alt:s.nickname,title:s.nickname}})])}))],2):t._e(),t.wikiPost.post&&t.wikiPost.post.level?e("div",{staticClass:"u-meta"},[e("em",{staticClass:"u-label"},[t._v(t._s(t.$t("综合难度")))]),e("span",{staticClass:"u-value"},t._l(t.wikiPost.post.level,(function(t){return e("i",{key:t,staticClass:"el-icon-star-on"})})),0)]):t._e(),t.stat?e("div",{staticClass:"u-meta"},[e("em",{staticClass:"u-label"},[t._v(t._s(t.$t("热度")))]),e("span",{staticClass:"u-value",domProps:{textContent:t._s(t.stat.views)}})]):t._e(),t.wikiPost.post&&t.wikiPost.post.updated?e("div",{staticClass:"u-meta"},[e("em",{staticClass:"u-label"},[t._v(t._s(t.$t("更新时间")))]),e("span",{staticClass:"u-value",domProps:{textContent:t._s(t.ts2str(t.wikiPost.post.updated))}})]):t._e()]):t._e(),t._t("body"),t._t("body-after")],2)])},a=[],c=(s("2ef0"),function(){var t=this,e=t._self._c;return"cms"==t.mode?e("div",{staticClass:"w-qrcode",class:{on:t.active},on:{click:t.togglePic}},[e("svg",{class:"u-icon",attrs:{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{d:"M456.66 0H385c-8.284 0-15 6.716-15 15s6.716 15 15 15h71.66C470.632 30 482 41.368 482 55.341V127c0 8.284 6.716 15 15 15s15-6.716 15-15V55.341C512 24.826 487.174 0 456.66 0zM15 142c8.284 0 15-6.716 15-15V55.341C30 41.368 41.368 30 55.34 30H127c8.284 0 15-6.716 15-15s-6.716-15-15-15H55.34C24.826 0 0 24.826 0 55.341V127c0 8.284 6.716 15 15 15zM127 482H55.34C41.368 482 30 470.632 30 456.659V385c0-8.284-6.716-15-15-15s-15 6.716-15 15v71.659C0 487.174 24.826 512 55.34 512H127c8.284 0 15-6.716 15-15s-6.716-15-15-15zM497 370c-8.284 0-15 6.716-15 15v71.659C482 470.632 470.632 482 456.66 482H385c-8.284 0-15 6.716-15 15s6.716 15 15 15h71.66c30.515 0 55.34-24.826 55.34-55.341V385c0-8.284-6.716-15-15-15zM341.643 110h47.575c6.497 0 11.782 5.285 11.782 11.782v47.574c0 8.284 6.716 15 15 15s15-6.716 15-15v-47.574C431 98.743 412.256 80 389.218 80h-47.575c-8.284 0-15 6.716-15 15s6.716 15 15 15zM81 121.782v47.574c0 8.284 6.716 15 15 15s15-6.716 15-15v-47.574c0-6.497 5.286-11.782 11.782-11.782h47.575c8.284 0 15-6.716 15-15s-6.716-15-15-15h-47.575C99.744 80 81 98.743 81 121.782zM170.357 400h-47.575c-6.497 0-11.782-5.285-11.782-11.782v-47.574c0-8.284-6.716-15-15-15s-15 6.716-15 15v47.574C81 411.257 99.744 430 122.782 430h47.575c8.284 0 15-6.716 15-15s-6.716-15-15-15zM431 388.218v-47.574c0-8.284-6.716-15-15-15s-15 6.716-15 15v47.574c0 6.497-5.286 11.782-11.782 11.782h-47.575c-8.284 0-15 6.716-15 15s6.716 15 15 15h47.575C412.256 430 431 411.257 431 388.218zM1 256c0 8.284 6.716 15 15 15h480c8.284 0 15-6.716 15-15s-6.716-15-15-15H16c-8.284 0-15 6.716-15 15z"}})]),e("span",{staticClass:"u-text"},[t._v(t._s(t.$t("二维码")))]),e("div",{staticClass:"u-qrcode"},[e("qrcode-vue",{staticClass:"u-pic",attrs:{value:t.value,size:t.size,level:"H"}}),e("span",[t._v(t._s(t.$t("扫一扫即可访问")))])],1)]):"static"==t.mode?e("div",{staticClass:"w-qrcode-static"},[e("div",{staticClass:"u-qrcode"},[e("qrcode-vue",{staticClass:"u-pic",attrs:{value:t.value,size:t.size,level:"H"}}),e("span",{staticClass:"u-txt"},[e("svg",{class:"u-icon",attrs:{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{d:"M456.66 0H385c-8.284 0-15 6.716-15 15s6.716 15 15 15h71.66C470.632 30 482 41.368 482 55.341V127c0 8.284 6.716 15 15 15s15-6.716 15-15V55.341C512 24.826 487.174 0 456.66 0zM15 142c8.284 0 15-6.716 15-15V55.341C30 41.368 41.368 30 55.34 30H127c8.284 0 15-6.716 15-15s-6.716-15-15-15H55.34C24.826 0 0 24.826 0 55.341V127c0 8.284 6.716 15 15 15zM127 482H55.34C41.368 482 30 470.632 30 456.659V385c0-8.284-6.716-15-15-15s-15 6.716-15 15v71.659C0 487.174 24.826 512 55.34 512H127c8.284 0 15-6.716 15-15s-6.716-15-15-15zM497 370c-8.284 0-15 6.716-15 15v71.659C482 470.632 470.632 482 456.66 482H385c-8.284 0-15 6.716-15 15s6.716 15 15 15h71.66c30.515 0 55.34-24.826 55.34-55.341V385c0-8.284-6.716-15-15-15zM341.643 110h47.575c6.497 0 11.782 5.285 11.782 11.782v47.574c0 8.284 6.716 15 15 15s15-6.716 15-15v-47.574C431 98.743 412.256 80 389.218 80h-47.575c-8.284 0-15 6.716-15 15s6.716 15 15 15zM81 121.782v47.574c0 8.284 6.716 15 15 15s15-6.716 15-15v-47.574c0-6.497 5.286-11.782 11.782-11.782h47.575c8.284 0 15-6.716 15-15s-6.716-15-15-15h-47.575C99.744 80 81 98.743 81 121.782zM170.357 400h-47.575c-6.497 0-11.782-5.285-11.782-11.782v-47.574c0-8.284-6.716-15-15-15s-15 6.716-15 15v47.574C81 411.257 99.744 430 122.782 430h47.575c8.284 0 15-6.716 15-15s-6.716-15-15-15zM431 388.218v-47.574c0-8.284-6.716-15-15-15s-15 6.716-15 15v47.574c0 6.497-5.286 11.782-11.782 11.782h-47.575c-8.284 0-15 6.716-15 15s6.716 15 15 15h47.575C412.256 430 431 411.257 431 388.218zM1 256c0 8.284 6.716 15 15 15h480c8.284 0 15-6.716 15-15s-6.716-15-15-15H16c-8.284 0-15 6.716-15 15z"}})]),t._v(t._s(t.$t("扫一扫手机访问")))])],1)]):t._e()}),n=[],o=s("d7b0"),r={name:"QRcode",props:["href","v","s"],data:function(){return{value:this.href||location.href,size:this.s||100,active:!1,mode:this.v||"cms"}},computed:{},methods:{togglePic:function(t){t.stopPropagation(),this.active=!this.active}},mounted:function(){var t=this;document.addEventListener("click",(function(){t.active=!1}))},components:{QrcodeVue:o["a"]}},l=r,u=(s("7c78"),s("2877")),d=Object(u["a"])(l,c,n,!1,null,null,null),p=d.exports,m=s("85e4"),v=s("9616"),h={name:"WikiPost",props:{wikiPost:{type:Object,default:null},scene:{type:String,default:"default"},borderNone:{type:Boolean,default:!1},showQR:{type:Boolean,default:!0}},data:function(){return{stat:null}},watch:{wikiPost:{immediate:!0,handler:function(){var t=this;if(this.wikiPost&&this.wikiPost.type&&this.wikiPost.source_id){var e=this.wikiPost.type;"achievement"===e&&(e="cj"),Object(v["a"])(e,this.wikiPost.source_id).then((function(e){200===e.status&&(t.stat=e.data)}))}}}},methods:{author_url:m["authorLink"],ts2str:m["ts2str"],thumbnail_url:function(t){return Object(m["showAvatar"])(t)}},components:{QRcode:p}},f=h,w=(s("7a6d"),Object(u["a"])(f,i,a,!1,null,null,null));e["a"]=w.exports},eb62:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2d59618d.74ac4bf8.js.map