(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ffc11f3"],{"3a56":function(t,e,n){},"46c1":function(t){t.exports=JSON.parse('{"d":[{"name":"frame","icon":"el-icon-camera","label":"头像框"},{"name":"theme","icon":"el-icon-orange","label":"主题风格"},{"name":"honor","icon":"el-icon-collection-tag","label":"称号"},{"name":"emotion","icon":"el-icon-picture-outline-round","label":"表情包"}],"c":[{"name":"profile","icon":"el-icon-user","label":"基本资料"},{"name":"avatar","icon":"el-icon-camera","label":"修改头像"},{"name":"pwd","icon":"el-icon-lock","label":"修改密码"},{"name":"email","icon":"el-icon-message","label":"邮箱设置"},{"name":"connect","icon":"el-icon-connection","label":"绑定账号"},{"name":"address","icon":"el-icon-map-location","label":"地址管理"}],"a":[{"name":"mall","icon":"el-icon-shopping-bag-1","label":"商城订单"},{"name":"orders","icon":"el-icon-shopping-bag-2","label":"系统订单"}],"b":[{"name":"msg","icon":"el-icon-message","label":"消息"},{"name":"letter","icon":"el-icon-chat-dot-square","label":"私信"}]}')},b547:function(t,e,n){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-dashboard-profile m-profile"},[e("h2",{staticClass:"u-title"},[e("i",{class:t.icon}),t._v(" "+t._s(t.title)+" "),t._t("header")],2),e("tabs",{attrs:{tabs:t.tabList}}),t._t("default")],2)},a=[],s=(n("b0c0"),function(){var t=this,e=t._self._c;return e("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,(function(n){return e("el-tab-pane",{key:n.name,attrs:{name:n.name}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"u-tab-icon",class:n.icon}),t._v(" "+t._s(n.label))])])})),1)}),c=[],o=(n("14d9"),{name:"",props:{tabs:{type:Array,default:function(){return[]}}},data:function(){return{active:""}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),r=o,l=n("2877"),u=Object(l["a"])(r,s,c,!1,null,null,null),d=u.exports,v=n("46c1"),h={name:"uc",props:{icon:{type:String,default:"el-icon-user"},title:{type:String,default:(void 0).$t("我的资料")},tabList:{type:Array,default:function(){return v["c"]}}},data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:d}},f=h,m=(n("c912"),Object(l["a"])(f,i,a,!1,null,null,null));e["a"]=m.exports},b54a:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("uc",{staticClass:"m-dashboard-frame m-dashboard-skin",attrs:{icon:"el-icon-bell",title:t.$t("我的消息"),"tab-list":t.tabList}},[t.hasData?e("div",{staticClass:"m-dashboard-letter"},[e("div",{staticClass:"m-dashboard-letter__left"},[e("div",{staticClass:"u-title"},[t._v(t._s(t.$t("近期消息"))+" "),e("span",{staticClass:"u-limit"},[t._v(t._s(t.$t("每日上限")+t.total_limit+t.$t(t.条)))])]),e("contact-list",{ref:"contacts",attrs:{"can-op":t.canOp},on:{"update:contact":t.updateContact,"check:contacts":t.checkContacts}})],1),e("div",{staticClass:"m-dashboard-letter__right"},[e("letter-list",{attrs:{contact:t.contact,"can-op":t.canOp},on:{"update:contact":t.letterUpdateContact}})],1)]):e("div",{staticClass:"u-null"},[e("el-empty",{attrs:{image:t.emptyPng,description:t.$t("这里什么都没有呢~")}})],1)])},a=[],s=n("46c1"),c=n("2ef0"),o=n("8e44"),r=n("b547"),l=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-letter-contacts"},t._l(t.contacts,(function(n,i){return e("div",{key:i,staticClass:"m-letter-contact",class:{active:t.active==n.receiver_info.id},on:{click:function(e){return t.onContactClick(n)}}},[0!=n.receiver_info.id&&t.canOp?e("div",{staticClass:"u-close",attrs:{title:t.$t("移除")},on:{click:function(e){return e.stopPropagation(),t.removeContact(n)}}},[e("i",{staticClass:"el-icon-close"})]):t._e(),e("img",{staticClass:"u-avatar",attrs:{src:t.showAvatar(n.receiver_info.avatar),alt:""}}),e("div",{staticClass:"m-user"},[e("div",{staticClass:"u-user-name",attrs:{title:n.receiver_info.display_name}},[t._v(" "+t._s(n.receiver_info.display_name)+" ")]),n.latest_letter?e("div",{staticClass:"u-latest-chat"},[t._v(" "+t._s(n.latest_letter.content_type?"[".concat(t.$t("图片"),"]"):n.latest_letter.content)+" ")]):t._e()])])})),0)},u=[],d=(n("4de4"),n("7db0"),n("d3b7"),n("99af"),n("41cb"));function v(t){return Object(d["b"])({mute:!0}).get("/api/cms/config",{params:t})}function h(t){return Object(d["c"])().post("/api/letter/recently/contacts/".concat(t))}function f(){return Object(d["c"])().get("/api/letter/recently/contacts")}function m(t){return Object(d["c"])().delete("/api/letter/recently/contacts/".concat(t))}function p(t,e,n){return Object(d["c"])().post("/api/letter/".concat(t,"/to/").concat(e),n)}function b(t,e,n){return Object(d["c"])().get("/api/letter/".concat(t,"/to/").concat(e,"/newest"),{params:n})}function g(t,e,n){return Object(d["c"])().get("/api/letter/".concat(t,"/to/").concat(e,"/before"),{params:n})}var _=n("85e4"),y={name:"contacts",props:{canOp:{type:Boolean,default:!1}},emits:["update:contact","check:contacts"],data:function(){return{active:"",loading:!1,isInit:!0,contacts:[]}},watch:{active:{handler:function(){var t=this,e=this.contacts.find((function(e){return e.receiver_info.id==t.active}));this.$emit("update:contact",e)}},"$route.query":{deep:!0,immediate:!0,handler:function(t){null!==t&&void 0!==t&&t.receiver?this.addContact(t.receiver):this.getContacts()}}},methods:{addContact:function(t){var e=this;t&&h(t).then((function(t){e.getContacts()}))},getContacts:function(){var t=this;return this.isInit&&(this.loading=!0),f().then((function(e){var n,i,a,s,c;t.contacts=(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data)||[],t.$emit("check:contacts",!(null===(i=t.contacts)||void 0===i||!i.length)),t.contacts.length&&(t.active=t.isInit?null===(a=e.data)||void 0===a||null===(s=a.data[0])||void 0===s||null===(c=s.receiver_info)||void 0===c?void 0:c.id:t.active,t.isInit=!1)})).finally((function(){t.loading=!1}))},removeContact:function(t){var e,n=this;m(null===t||void 0===t||null===(e=t.receiver_info)||void 0===e?void 0:e.id).then((function(e){var i;n.contacts=n.contacts.filter((function(e){return e.receiver_info.id!=t.receiver_info.id})),n.active==t.receiver_info.id&&n.contacts.length&&(n.active=n.contacts[0].receiver_info.id),n.$emit("check:contacts",!(null===(i=n.contacts)||void 0===i||!i.length))}))},onContactClick:function(t){this.active=t.receiver_info.id},showAvatar:_["showAvatar"]}},C=y,x=n("2877"),w=Object(x["a"])(C,l,u,!1,null,null,null),k=w.exports,I=(n("9911"),function(){var t=this,e=t._self._c;return t.contact?e("div",{staticClass:"m-letter-box"},[t.hasData?e("div",{staticClass:"u-chat-name"},[t._v(t._s(t.contact.receiver_info.display_name))]):t._e(),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"letterList",staticClass:"m-letter-list",attrs:{"element-loading-spinner":"el-icon-loading"}},[e("div",{staticClass:"u-letter-more"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.hasHistory,expression:"hasHistory"}],staticClass:"u-load-more",on:{click:function(e){return e.stopPropagation(),t.getHistory.apply(null,arguments)}}},[e("i",{staticClass:"el-icon-d-arrow-right u-more-icon"}),t._v(t._s(t.$t("查看历史消息")))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.historyFetched&&!t.hasHistory,expression:"historyFetched && !hasHistory"}],staticClass:"u-no-more"},[t._v(t._s(t.$t("没有更多消息了"))+"~")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.historyFetching,expression:"historyFetching"}],staticClass:"u-loading"},[e("i",{staticClass:"el-icon-loading"})]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.historyError,expression:"historyError"}],staticClass:"u-error"},[t._v(" "+t._s(t.$t("消息加载失败，"))),e("span",{staticClass:"u-error__btn",on:{click:function(e){return e.stopPropagation(),t.getHistory.apply(null,arguments)}}},[t._v(t._s(t.$t("点击重新加载")))])])]),t._l(t.letters,(function(n,i){return e("div",{key:n.id,staticClass:"m-letter-list-content"},[t.showTime(n,i)?e("div",{staticClass:"u-time"},[t._v(t._s(n.created_at))]):t._e(),e("div",{staticClass:"m-letter-item",class:t.letterItemClass(n)},[e("a",{staticClass:"u-avatar",attrs:{href:t.link(n),target:"_blank"}},[e("img",{staticClass:"u-img",attrs:{src:t.letterBelong(n),alt:n.id}})]),e("div",{staticClass:"u-letter-content"},[0==n.content_type?e("div",{staticClass:"u-letter-text",domProps:{innerHTML:t._s(t.formatContent(n.content))}}):t._e(),1==n.content_type?e("div",{staticClass:"u-letter-image",attrs:{title:t.$t("点击查看大图")}},[e("el-image",{attrs:{src:t.resolveImagePath(n.content),"preview-src-list":[n.content]}})],1):t._e()])])])}))],2),e("div",{directives:[{name:"show",rawName:"v-show",value:t.newMessage,expression:"newMessage"}],staticClass:"u-letter-new"},[e("div",{staticClass:"u-text",on:{click:t.toBottom}},[t._v(t._s(t.$t("您有新消息")))])]),e("send-box",{ref:"sendBox",attrs:{disabled:!t.canOp},on:{send:t.send}})],1):t._e()}),O=[],$=n("2909"),L=(n("ac1f"),n("5319"),n("c0c4")),j=n.n(L),T=n("c9d2"),S=n("506c");function H(t){var e=new S["a"](t);return e.code}var B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-letter-sendbox",class:{disabled:t.disabled}},[e("sendTools",{on:{"update:image":t.sendImage,"update:text":t.updateText}}),e("div",{staticClass:"u-send-content"},[e("el-input",{attrs:{type:"textarea",placeholder:t.$t("按 Ctrl+Enter 可快速发送消息"),id:"letterInput"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey?t.send.apply(null,arguments):null}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),e("div",{staticClass:"u-send-action"},[e("span",{staticClass:"u-text-sum"},[e("span",{staticClass:"u-current-sum",class:{over:t.isOver}},[t._v(t._s(t.currentSum))]),e("span",{staticClass:"u-max-sum"},[t._v("/"+t._s(t.max))])]),e("el-button",{attrs:{size:"mini",disabled:t.isOver||!t.currentSum},on:{click:t.send}},[t._v(t._s(t.$t("发送")))])],1)],1)},E=[],F=n("c7eb"),D=n("1da1"),P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-send-tools"},[e("div",{staticClass:"m-upload"},[e("i",{staticClass:"el-icon-picture-outline u-upload-icon",on:{click:t.select}}),e("input",{ref:"uploadInput",staticClass:"u-upload-file",attrs:{type:"file",accept:".jpg, .jpeg, .png, .gif, .bmp,.webp"},on:{change:t.upload}})]),e("Emotion",{attrs:{type:"pop",max:6},on:{selected:t.emotionSelect}})],1)},N=[],M=n("c840"),z={name:"sendTools",components:{Emotion:M["a"]},emits:["update:image","update:text"],data:function(){return{data:"",maxSize:10}},computed:{fileInput:function(){return this.$refs.uploadInput}},methods:{select:function(){this.fileInput.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))},upload:function(){var t=this,e=this.fileInput.files[0];if(e)if(e.size>1024*this.maxSize*1024)this.$message.error(this.$t("图片大小不能超过")+this.maxSize+"M");else{var n=new FormData;n.append("file",e),Object(o["f"])(n).then((function(e){t.data=e.data.data[0],t.$emit("update:image",t.data)}))}},emotionSelect:function(t){this.$emit("update:text",t.key)}}},A=z,q=Object(x["a"])(A,P,N,!1,null,null,null),U=q.exports,J={name:"sendBox",props:{disabled:{type:Boolean,default:!1}},components:{sendTools:U},emits:["send"],data:function(){return{content:"",max:500,user:T["a"].getInfo(),isLogin:T["a"].isLogin()}},computed:{currentSum:function(){return this.content.length},isOver:function(){return this.currentSum>this.max}},methods:{send:function(){!this.isOver&&this.currentSum&&this.$emit("send",{content:this.content,content_type:0})},clear:function(){this.content=""},sendImage:function(t){this.$emit("send",{content:t,content_type:1})},updateText:function(t){var e=this;return Object(D["a"])(Object(F["a"])().mark((function n(){var i,a,s,c;return Object(F["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=document.querySelector("#letterInput"),a=t,!i.selectionStart&&0!==i.selectionStart){n.next=12;break}return s=i.selectionStart,c=i.selectionEnd,e.content=i.value.substring(0,s)+a+i.value.substring(c,i.value.length),n.next=8,e.$nextTick();case 8:i.focus(),i.setSelectionRange(c+a.length,c+a.length),n.next=13;break;case 12:e.content=a;case 13:case"end":return n.stop()}}),n)})))()}}},K=J,R=Object(x["a"])(K,B,E,!1,null,null,null),G=R.exports,Q={name:"letterList",components:{sendBox:G},props:{contact:{type:Object,default:function(){return{}}},canOp:{type:Boolean,default:!1}},emits:["update:contact"],data:function(){return{letters:[],peoples:{},user:T["a"].getInfo(),loading:!1,isInit:!0,firstId:0,lastId:0,limit:10,timer:null,hasHistory:!0,historyFetched:!1,historyFetching:!1,historyError:!1,newMessage:!1}},computed:{hasData:function(){var t,e;return!(null===(t=this.contact)||void 0===t||null===(e=t.receiver_info)||void 0===e||!e.id)},letterList:function(){return this.$refs.letterList}},watch:{contact:{deep:!0,immediate:!0,handler:function(t,e){var n,i;(null===t||void 0===t||null===(n=t.receiver_info)||void 0===n?void 0:n.id)!==(null===e||void 0===e||null===(i=e.receiver_info)||void 0===i?void 0:i.id)&&(this.letters=[],this.peoples={},this.firstId=0,this.lastId=0,this.hasHistory=!1),this.isInit=!0,this.loadLetter(),clearInterval(this.timer),this.cycleLoad()}}},beforeDestroy:function(){clearInterval(this.timer)},methods:{resolveImagePath:_["resolveImagePath"],formatContent:function(t){return t=j.a.sanitize(t),H(this.nl2br(t))},nl2br:function(t){return t.replace(/\n/g,"<br>")},toBottom:function(){var t=this;this.newMessage=!1,this.$nextTick((function(){var e=t.letterList;e&&(e.scrollTop=e.scrollHeight)}))},loadLetter:function(){var t=this;if(this.hasData){this.isInit&&(this.loading=!0);var e={begin:this.lastId,limit:this.limit};return b(this.contact.sender_info.id,this.contact.receiver_info.id,e).then((function(e){var n,i,a,s;t.letters=Object(c["uniqBy"])(t.letters.concat((null===(n=e.data.data)||void 0===n?void 0:n.letters)||[]),"id"),t.peoples=(null===(i=e.data.data)||void 0===i?void 0:i.peoples)||{},t.lastId=(null===(a=t.letters[t.letters.length-1])||void 0===a?void 0:a.id)||t.lastId,t.firstId=(null===(s=t.letters[0])||void 0===s?void 0:s.id)||t.firstId,t.hasHistory=!(t.letters.length<t.limit),t.$nextTick((function(){t.isInit&&t.letterList&&(t.letterList.scrollTop=t.letterList.scrollHeight)})),t.isInit=!1})).finally((function(){t.loading=!1}))}},cycleLoad:function(){var t=this;this.timer=setInterval((function(){t.loadLetter(),t.$emit("update:contact")}),15e3)},getHistory:function(){var t=this;this.historyFetching=!0,this.hasHistory=!1;var e={begin:this.firstId,limit:this.limit};g(this.contact.sender_info.id,this.contact.receiver_info.id,e).then((function(e){var n,i,a;t.letters=Object(c["uniqBy"])([].concat(Object($["a"])((null===(n=e.data.data)||void 0===n?void 0:n.letters)||[]),Object($["a"])(t.letters)),"id"),t.hasHistory=!((null===(i=e.data.data.letters)||void 0===i?void 0:i.length)<t.limit),t.firstId=(null===(a=t.letters[0])||void 0===a?void 0:a.id)||t.firstId,t.historyFetched=!0,t.historyFetching=!1,t.historyError=!1})).catch((function(e){t.historyFetched=!0,t.historyFetching=!1,t.historyError=!0}))},letterItemClass:function(t){return t.sender==this.user.uid?"me":"not-me"},letterBelong:function(t){var e,n=t.sender==this.user.uid?this.user.uid:t.sender;return Object(_["showAvatar"])(null===(e=this.peoples[n])||void 0===e?void 0:e.avatar)},link:function(t){var e,n=t.sender==this.user.uid?this.user.uid:t.sender;return Object(_["authorLink"])(null===(e=this.peoples[n])||void 0===e?void 0:e.id)},showTime:function(t,e){if(0==e)return!0;var n=this.letters[e-1],i=new Date(n.created_at).getTime(),a=new Date(t.created_at).getTime();return a-i>18e4},send:function(t){var e=this;p(this.contact.sender_info.id,this.contact.receiver_info.id,t).then((function(t){e.loadLetter(!1).then((function(t){var n;null===(n=e.$refs.sendBox)||void 0===n||n.clear(),e.$emit("update:contact"),clearInterval(e.timer),e.cycleLoad(),e.$nextTick((function(){e.letterList&&(e.letterList.scrollTop=e.letterList.scrollHeight)}))}))}))}}},V=Q,W=Object(x["a"])(V,I,O,!1,null,null,null),X=W.exports,Y={name:"letter",components:{uc:r["a"],contactList:k,letterList:X},data:function(){return{tabList:s["b"],hasData:!0,info:{uid:8,name:this.$t("匿名"),user_avatar:"https://img.jx3box.com/image/common/avatar.png",user_avatar_frame:"default",bio:"-",sign:0,experience:0},contact:{},total_limit:0}},computed:{emptyPng:function(){return n("c596")},userLevel:function(){var t;return T["a"].getLevel((null===(t=this.info)||void 0===t?void 0:t.experience)||0)},canOp:function(){return this.userLevel>=3}},mounted:function(){this.loadUserInfo(),this.loadConf()},methods:{updateContact:function(t){this.contact=Object(c["cloneDeep"])(t)},checkContacts:function(t){this.hasData=t},letterUpdateContact:function(){var t;null===(t=this.$refs.contacts)||void 0===t||t.getContacts()},loadUserInfo:function(){var t=this;Object(o["b"])().then((function(e){e.data.data&&(t.info=e.data.data)}))},loadConf:function(){var t=this;v({key:"private_letter_everyday_count_limit"}).then((function(e){t.total_limit=~~e.data.data.val}))}}},Z=Y,tt=(n("fcf1"),Object(x["a"])(Z,i,a,!1,null,null,null));e["default"]=tt.exports},c596:function(t,e,n){t.exports=n.p+"img/null.aec24a0e.png"},c912:function(t,e,n){"use strict";n("cb55")},cb55:function(t,e,n){},fcf1:function(t,e,n){"use strict";n("3a56")}}]);
//# sourceMappingURL=chunk-5ffc11f3.e9f2de1d.js.map