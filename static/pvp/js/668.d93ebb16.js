"use strict";(self["webpackChunkpvp"]=self["webpackChunkpvp"]||[]).push([[668],{20601:function(t,e,a){a.d(e,{EL:function(){return l},K5:function(){return n},TI:function(){return s},f5:function(){return o}});var i=a(66340);function n(t){return(0,i.WU)().get("/api/cms/posts/pvp",{params:t})}function o(t){return(0,i.WU)().get(`/api/cms/post/${t}`)}function s(t){return(0,i.WU)().get("/api/cms/pve/skill/changelog",{params:t})}function l(t){return(0,i.WU)().get("/api/cms/post/meta",{params:t})}},61981:function(t,e,a){a.d(e,{e:function(){return s},f:function(){return o}});var i=a(74353),n=a.n(i);const o=function(t){return n()(t).format("YYYY-MM-DD hh:mm:ss")};function s(t){if("[object Object]"===Object.prototype.toString.call(t)){for(const e in t)[void 0,null,""].includes(t[e])&&delete t[e];return t}return t}},60872:function(t,e,a){a.d(e,{A:function(){return f}});var i=a(20641),n=a(90033);const o=["href"],s=["src"],l={key:0,class:"c-avatar-frame"},r=["src"];function c(t,e,a,c,d,u){return(0,i.uX)(),(0,i.CE)("a",{class:(0,n.C4)(["c-avatar",a.size]),href:u.authorLink(a.uid)},[(0,i.Lk)("img",{src:u.showAvatar(a.url),class:"c-avatar-pic"},null,8,s),a.frame?((0,i.uX)(),(0,i.CE)("i",l,[(0,i.Lk)("img",{src:u.frameUrl},null,8,r)])):(0,i.Q3)("",!0),(0,i.RG)(t.$slots,"default")],10,o)}var d=a(38364),u=a(26693);const{__imgPath:p}=d;var m={name:"AvatarComp",props:{uid:{type:[Number,String],default:0},url:{type:String,default:""},frame:{type:String,default:""},size:{type:[Number,String],default:"m"}},components:{},data:function(){return{frames:[],styles:{xxs:36,xs:48,s:68,m:88,l:120,xl:150}}},computed:{frameUrl:function(){return p+`avatar/images/${this.frame}/${this.frame}.svg`}},methods:{showAvatar:function(t){return(0,u.showAvatar)(t,3*this.styles[this.size])},authorLink:u.authorLink}},h=a(66262);const v=(0,h.A)(m,[["render",c]]);var f=v},66261:function(t,e,a){a.d(e,{A:function(){return b}});var i=a(20641),n=a(90033);const o={class:"w-thx"},s={class:"w-thx-panel"},l=(0,i.Lk)("path",{d:"M309.9 140.6h402.9c21.1 0 38.2-17.1 38.2-38.2s-17.1-38.2-38.2-38.2H309.9c-21.1 0-38.2 17.1-38.2 38.2s17.1 38.2 38.2 38.2z",fill:"#61D0ED"},null,-1),r=(0,i.Lk)("path",{d:"M776.3 112.1c-4.7 30.5-30.8 54-62.7 54H309.1c-31.8 0-58-23.5-62.7-54-46.2 19.1-78.7 64.5-78.7 117.6v602.7c0 70.3 57 127.3 127.3 127.3h432.7c70.3 0 127.3-57 127.3-127.3V229.7c0-53.1-32.5-98.6-78.7-117.6zm-47.9 572.1h-434c-21.1 0-38.2-17.1-38.2-38.2s17.1-38.2 38.2-38.2h433.9c21.1 0 38.2 17.1 38.2 38.2s-17.1 38.2-38.1 38.2zm0-173h-434c-21.1 0-38.2-17.1-38.2-38.2s17.1-38.2 38.2-38.2h433.9c21.1 0 38.2 17.1 38.2 38.2s-17.1 38.2-38.1 38.2zm0-173h-434c-21.1 0-38.2-17.1-38.2-38.2s17.1-38.2 38.2-38.2h433.9c21.1 0 38.2 17.1 38.2 38.2s-17.1 38.2-38.1 38.2z",fill:"#61D0ED"},null,-1),c=[l,r];function d(t,e,a,l,r,d){const u=(0,i.g2)("boxcoin-admin"),p=(0,i.g2)("Like"),m=(0,i.g2)("fav"),h=(0,i.g2)("boxcoin-user"),v=(0,i.g2)("el-tooltip"),f=(0,i.g2)("BoxcoinRecords"),k=(0,i.g2)("el-drawer");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.Lk)("div",s,[t.hasRight&&a.adminBoxcoinEnable&&t.boxcoin_enable?((0,i.uX)(),(0,i.Wv)(u,{key:0,postId:a.postId,postType:a.postType,userId:a.userId,max:t.admin_max,min:t.admin_min,own:t.admin_left,total:t.admin_total,points:t.admin_points,authors:a.authors,onUpdateRecord:d.updateRecord,client:a.client},null,8,["postId","postType","userId","max","min","own","total","points","authors","onUpdateRecord","client"])):(0,i.Q3)("",!0),(0,i.bF)(p,{postId:a.postId,postType:a.postType},null,8,["postId","postType"]),(0,i.bF)(m,{postId:a.postId,postType:a.postType,postTitle:a.postTitle},null,8,["postId","postType","postTitle"]),a.userBoxcoinEnable&&t.boxcoin_enable&&a.allowGift?((0,i.uX)(),(0,i.Wv)(h,{key:1,postId:a.postId,postType:a.postType,boxcoin:t.boxcoin,userId:a.userId,own:t.user_left,points:t.user_points,authors:a.authors,onUpdateRecord:d.updateRecord,client:a.client},null,8,["postId","postType","boxcoin","userId","own","points","authors","onUpdateRecord","client"])):(0,i.Q3)("",!0),(0,i.bF)(v,{effect:"dark",content:t.$t("打赏记录"),placement:"top-start"},{default:(0,i.k6)((()=>[((0,i.uX)(),(0,i.CE)("svg",{class:(0,n.C4)(["icon","u-record-icon"]),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200","svg-inline":"",onClick:e[0]||(e[0]=(...t)=>d.onRecord&&d.onRecord(...t)),role:"presentation",focusable:"false",tabindex:"-1"},c))])),_:1},8,["content"])]),(0,i.bF)(k,{modelValue:t.showDrawer,"onUpdate:modelValue":e[1]||(e[1]=e=>t.showDrawer=e),title:t.$t("打赏记录"),"append-to-body":""},{default:(0,i.k6)((()=>[(0,i.bF)(f,{postId:a.postId,postType:a.postType,postClient:a.client,cacheRecord:t.cacheRecord,mode:a.mode,"onUpdate:boxcoin":d.updateBoxcoin},null,8,["postId","postType","postClient","cacheRecord","mode","onUpdate:boxcoin"])])),_:1},8,["modelValue","title"])])}var u=a(24456),p=a(65553),m=a(84483),h=a(22036),v=a(630),f=a(40192),k=a(39287),g={name:"SimpleThx",components:{Like:u.A,Fav:p.A,BoxcoinAdmin:m.A,BoxcoinUser:h.A,BoxcoinRecords:v.A},props:{type:{type:String,default:"normal"},postId:{type:Number,default:0},postType:{type:String,default:""},postTitle:{type:String,default:""},userId:{type:Number,default:0},authors:{type:Array,default:()=>[]},mode:{type:String,default:"normal"},client:{type:String,default:"std"},allowGift:{type:[Number,Boolean],default:1},adminBoxcoinEnable:{type:Boolean,default:!1},userBoxcoinEnable:{type:Boolean,default:!1},presetConfig:{type:Object,default:()=>({})}},data:function(){return{boxcoin:0,hasRight:f.A.getInfo().group>=32,user:f.A.getInfo(),admin_max:0,admin_min:0,admin_left:0,admin_total:0,admin_points:[100],user_left:0,user_points:[100],cacheRecord:null,boxcoin_enable:0,showDrawer:!1}},computed:{post_keys:function(){return[this.postId,this.postType]}},watch:{post_keys:{immediate:!0,deep:!0,handler:function(){this.postType&&this.postId&&this.loadBoxcoinConfig()}}},methods:{loadBoxcoinConfig:function(){if(Object.keys(this.presetConfig)?.length)return this.admin_max=this.presetConfig.admin_max||0,this.admin_min=this.presetConfig.admin_min||0,this.admin_points=this.presetConfig.admin_points||[10,1e3],this.admin_left=this.presetConfig.admin_left||0,this.admin_total=this.presetConfig.admin_total||0,this.user_points=this.presetConfig.user_points||[10,1e3],this.user_left=this.presetConfig.user_left||0,void(this.boxcoin_enable=this.presetConfig.boxcoin_enable||0);f.A.isLogin()&&(0,k.h)(this.postType).then((t=>{this.admin_max=t.data.data.limit.admin_max||0,this.admin_min=t.data.data.limit.admin_min||0,this.admin_points=t.data.data.limit.admin_points||[10,1e3],this.admin_left=t.data.data.asManagerBoxCoinRemain||0,this.admin_total=t.data.data.asManagerBoxCoinTotal||0,this.user_points=t.data.data.limit.user_points||[10,1e3],"origin"==this.client?this.user_left=t.data.data.asUserBoxCoinRemainOrigin+t.data.data.asUserBoxCoinRemainAll:"std"==this.client?this.user_left=t.data.data.asUserBoxCoinRemainStd+t.data.data.asUserBoxCoinRemainAll:this.user_left=t.data.data.asUserBoxCoinRemainAll+t.data.data.asUserBoxCoinRemainStd+t.data.data.asUserBoxCoinRemainOrigin})),(0,k.N5)().then((t=>{this.boxcoin_enable=!!~~t.data?.data?.val}))},updateRecord:function(t){this.cacheRecord=t},onRecord:function(){this.showDrawer=!0},updateBoxcoin:function(t){this.boxcoin=t}}},_=a(66262);const y=(0,_.A)(g,[["render",d]]);var b=y},11486:function(t,e,a){a.r(e),a.d(e,{default:function(){return St}});var i=a(20641);function n(t,e,a,n,o,s){const l=(0,i.g2)("CompetitiveTrick"),r=(0,i.g2)("ListLayout");return(0,i.uX)(),(0,i.Wv)(r,null,{default:(0,i.k6)((()=>[(0,i.bF)(l)])),_:1})}var o=a(55129),s=a(53934);const l={class:"m-competitive-trick"},r={key:0,class:"m-competitive-trick"};function c(t,e,a,n,o,s){const c=(0,i.g2)("TrickNotice"),d=(0,i.g2)("TrickHeader"),u=(0,i.g2)("CompetitiveTrickItemVue"),p=(0,i.g2)("el-alert"),m=(0,i.gN)("loading");return(0,i.uX)(),(0,i.CE)("div",l,[(0,i.bF)(c),(0,i.bF)(d,{onFilterImperceptibly:s.filterImperceptibly,onFilterMeta:s.filterMeta,onSearch:s.onSearch},null,8,["onFilterImperceptibly","onFilterMeta","onSearch"]),o.data.length?(0,i.bo)(((0,i.uX)(),(0,i.CE)("div",r,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.data,(t=>((0,i.uX)(),(0,i.Wv)(u,{key:t.id,data:t,preset:o.presetConfig},null,8,["data","preset"])))),128))])),[[m,o.loading]]):((0,i.uX)(),(0,i.Wv)(p,{key:1,class:"m-strategy-null",title:t.$t("没有找到相关条目"),type:"info",center:"","show-icon":""},null,8,["title"]))])}a(44114);var d=a(20601),u=a(90033),p=a(53751),m=a.p+"img/video.d285c52a.svg";const h={key:0,class:"m-trick-item"},v={class:"m-trick-item__header"},f={class:"m-trick-item__title"},k={key:0,class:"u-label u-zlp"},g=["href"],_={key:1,class:"u-marks"},y={key:2,class:"u-tv"},b=(0,i.Lk)("img",{class:"u-tv-icon",src:m},null,-1),C=[b],x={class:"m-trick-item__thx"},L=(0,i.Lk)("path",{d:"M655.36 0H368.64C165.888 0 0 165.888 0 368.64V921.6C0 977.92 46.08 1024 102.4 1024h552.96C859.136 1024 1024 859.136 1024 655.36V368.64C1024 165.888 858.112 0 655.36 0zM366.08 344.064c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2-51.2-23.04-51.2-51.2 23.04-51.2 51.2-51.2zM697.344 606.72c0 90.112-86.528 163.328-176.128 163.328h-18.432c-90.112 0-176.128-73.216-176.128-163.328 0-29.184 24.064-53.248 53.248-53.248H645.12c28.672 0 52.224 23.552 52.224 53.248zM657.92 446.464c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2 51.2 23.04 51.2 51.2-23.04 51.2-51.2 51.2z",fill:"#DD6572"},null,-1),I=[L],T={class:"m-trick-item__content"},w={class:"m-trick-item__left"},F=["href"],A={class:"u-name"},E={class:"m-trick-item__right"},B={key:0,class:"m-header"},$=["innerHTML"],X={class:"m-content"},D={key:0,class:"m-talent"},R={class:"m-talent__title"},S=["src"],M={key:0,class:"u-desc"},z=["innerHTML"],U={class:"m-skills"},q={class:"u-title"},W=["src"],N={key:0,class:"u-skills"},V=["src","alt","title"],O=["title"],H=["title"],Q={key:1,class:"u-desc"};function j(t,e,a,n,o,s){var l,r,c,d,m,b,L,j,K,G,P,Y,J,Z,tt,et,at,it;const nt=(0,i.g2)("SimpleThx"),ot=(0,i.g2)("el-tooltip"),st=(0,i.g2)("Avatar"),lt=(0,i.g2)("Clock"),rt=(0,i.g2)("el-icon"),ct=(0,i.g2)("Comment"),dt=(0,i.g2)("el-drawer");return s.hasData?((0,i.uX)(),(0,i.CE)("div",h,[(0,i.Lk)("div",v,[(0,i.Lk)("div",f,[a.data.zlp?((0,i.uX)(),(0,i.CE)("span",k,(0,u.v_)(a.data.zlp),1)):(0,i.Q3)("",!0),(0,i.Lk)("a",{class:"u-link",href:`/pvp/${null===(l=a.data)||void 0===l?void 0:l.ID}`,target:"_blank"},(0,u.v_)(a.data.post_title||t.$t("未知流派")),9,g),a.data.mark&&a.data.mark.length?((0,i.uX)(),(0,i.CE)("span",_,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.data.mark,(t=>((0,i.uX)(),(0,i.CE)("i",{class:"u-mark",key:t},(0,u.v_)(s.showMark(t)),1)))),128))])):(0,i.Q3)("",!0),a.data.include_video?((0,i.uX)(),(0,i.CE)("span",y,C)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",x,[(0,i.bF)(nt,{postType:"pvp",postTitle:null===(r=a.data)||void 0===r?void 0:r.post_title,userId:null===(c=a.data)||void 0===c?void 0:c.post_author,adminBoxcoinEnable:!0,userBoxcoinEnable:!0,postId:null===(d=a.data)||void 0===d?void 0:d.ID,presetConfig:a.preset},null,8,["postTitle","userId","postId","presetConfig"]),(0,i.bF)(ot,{content:"评论",placement:"top-start"},{default:(0,i.k6)((()=>[((0,i.uX)(),(0,i.CE)("svg",{class:(0,u.C4)(["icon","u-icon"]),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200","svg-inline":"",onClick:e[0]||(e[0]=t=>o.showComment=!0),role:"presentation",focusable:"false",tabindex:"-1"},I))])),_:1})])]),(0,i.Lk)("div",T,[(0,i.Lk)("div",w,[(0,i.Lk)("a",{class:"m-author",href:s.authorLink(null===(m=a.data)||void 0===m?void 0:m.post_author)},[(0,i.bF)(st,{class:"u-avatar",uid:null===(b=a.data)||void 0===b?void 0:b.post_author,size:"s",url:null===(L=a.data.author_info)||void 0===L?void 0:L.user_avatar,frame:null===(j=a.data.author_info)||void 0===j?void 0:j.user_avatar_frame},null,8,["uid","url","frame"]),(0,i.Lk)("span",A,(0,u.v_)(null===(K=a.data.author_info)||void 0===K?void 0:K.display_name),1)],8,F)]),(0,i.Lk)("div",E,[null!==(G=a.data)&&void 0!==G&&null!==(P=G.post_meta)&&void 0!==P&&P.content?((0,i.uX)(),(0,i.CE)("div",B,[(0,i.Lk)("div",{innerHTML:s.nl2br(null===(Y=a.data)||void 0===Y||null===(J=Y.post_meta)||void 0===J?void 0:J.content)},null,8,$)])):(0,i.Q3)("",!0),(0,i.Lk)("div",X,[Object.keys(s.talent).length?((0,i.uX)(),(0,i.CE)("div",D,[(0,i.Lk)("div",R,[(0,i.Lk)("img",{class:"u-icon",src:s.getAppIcon("talent"),alt:""},null,8,S),(0,i.eW)(" "+(0,u.v_)(t.$t("奇穴")),1)]),(0,i.Lk)("div",{class:(0,u.C4)(["m-talent-box",`m-qx-container-${null===(Z=a.data)||void 0===Z?void 0:Z.ID}`])},null,2),null!==(tt=a.data)&&void 0!==tt&&null!==(et=tt.post_meta)&&void 0!==et&&et.talent_desc?((0,i.uX)(),(0,i.CE)("div",M,[(0,i.eW)((0,u.v_)(t.$t("奇穴讲解：")),1),(0,i.Lk)("span",{innerHTML:s.nl2br(null===(at=a.data)||void 0===at||null===(it=at.post_meta)||void 0===it?void 0:it.talent_desc)},null,8,z)])):(0,i.Q3)("",!0)])):(0,i.Q3)("",!0),(0,i.Lk)("div",U,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.skills,((e,a)=>((0,i.uX)(),(0,i.CE)("div",{class:"m-skill-item",key:a},[(0,i.Lk)("div",q,[(0,i.Lk)("img",{class:"u-icon",src:s.getAppIcon("pvp"),alt:""},null,8,W),(0,i.eW)(" "+(0,u.v_)(t.$t("连招：")+e.name),1)]),e.sq?((0,i.uX)(),(0,i.CE)("div",N,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.sq,((e,a)=>((0,i.uX)(),(0,i.CE)("span",{key:e.SkillID+""+a,class:"u-skill"},[(0,i.Lk)("img",{class:"u-skill-icon",src:s.iconLink(e.IconID),alt:e.IconID,title:e.Name},null,8,V),(0,i.Lk)("span",{class:"u-skill-name",title:e.Name},(0,u.v_)(e.Name),9,O),(0,i.bo)((0,i.Lk)("i",{class:"u-gcd-icon",title:t.$t("无GCD技能")},[(0,i.bF)(rt,null,{default:(0,i.k6)((()=>[(0,i.bF)(lt)])),_:1})],8,H),[[p.aG,e.WithoutGcd]])])))),128))])):(0,i.Q3)("",!0),e.desc?((0,i.uX)(),(0,i.CE)("div",Q,(0,u.v_)(t.$t("连招说明：")+e.desc),1)):(0,i.Q3)("",!0)])))),128))])])])]),(0,i.bF)(dt,{title:t.$t("评论"),modelValue:o.showComment,"onUpdate:modelValue":e[1]||(e[1]=t=>o.showComment=t),"destroy-on-close":"",class:"m-trick-drawer"},{default:(0,i.k6)((()=>{var t;return[(0,i.bF)(ct,{category:"post",id:null===(t=a.data)||void 0===t?void 0:t.ID},null,8,["id"])]})),_:1},8,["title","modelValue"])])):(0,i.Q3)("",!0)}var K=a(26693),G=a(56629),P=a(66261),Y=a(60796),J=a(60872),Z=a(59893),tt={name:"CompetitiveTrickItem",components:{SimpleThx:P.A,Comment:Y.A,Avatar:J.A},props:{preset:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}}},data(){return{talentDriver:null,showComment:!1}},computed:{talent(){try{var t,e;return JSON.parse(null===(t=this.data)||void 0===t||null===(e=t.post_meta)||void 0===e?void 0:e.talent)}catch(a){return{}}},hasData(){var t;return!(null===(t=this.data)||void 0===t||!t.ID)},skills(){var t;return null===(t=this.data)||void 0===t?void 0:t.post_meta.data}},watch:{data:{deep:!0,immediate:!0,handler(){this.talentDriver||this.$nextTick((()=>{this.installTalent()}))}},talent:{deep:!0,handler(){this.reloadTalent()}}},methods:{authorLink:K.authorLink,iconLink:K.iconLink,getAppIcon:K.getAppIcon,installTalent(){var t;this.talentDriver=new G.A({container:`.m-qx-container-${null===(t=this.data)||void 0===t?void 0:t.ID}`,version:this.talent.version,xf:this.talent.xf,editable:!1,sq:this.talent.sq})},reloadTalent(){this.$nextTick((()=>{var t;this.talentDriver&&(null===(t=this.talentDriver)||void 0===t||t.then((t=>{t.load({version:this.talent.version,xf:this.talent.xf,editable:!1,sq:this.talent.sq})})))}))},nl2br(t){return t.replace(/\n/g,"<br/>")},showMark:function(t){return Z.A[t]||t}}},et=a(66262);const at=(0,et.A)(tt,[["render",j]]);var it=at;const nt={class:"m-notice-top"},ot={class:"m-notice-top__header"},st={class:"u-title"},lt=(0,i.Lk)("i",{class:"el-icon-news"},null,-1),rt={class:"m-notice-top__content"},ct={class:"m-item_left"},dt=["innerHTML"];function ut(t,e,a,n,o,s){return(0,i.uX)(),(0,i.CE)("div",nt,[(0,i.Lk)("div",ot,[(0,i.Lk)("h3",st,[lt,(0,i.eW)((0,u.v_)(t.$t("公告")),1)])]),(0,i.Lk)("div",rt,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.data,(t=>((0,i.uX)(),(0,i.CE)("div",{class:"m-notice-top__item",key:t.id},[(0,i.Lk)("div",ct,[(0,i.Lk)("span",{class:"u-title",innerHTML:t},null,8,dt)])])))),128))])])}var pt=a(1694),mt={data(){return{data:[]}},mounted(){this.getBreadcrumb()},methods:{getBreadcrumb(){try{const t=sessionStorage.getItem("pvp_ac");t?this.data=JSON.parse(t):(0,pt.O)("pvp_ac").then((t=>{var e,a;console.log(t);const i=(null===(e=t.data)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.html)||"";this.data=i.split("\n"),sessionStorage.setItem("pvp_ac",JSON.stringify(this.data))}))}catch(t){this.data=[]}}}};const ht=(0,et.A)(mt,[["render",ut]]);var vt=ht;const ft={class:"c-macro__header"},kt={class:"m-archive-search"},gt=["href"],_t={class:"u-search"},yt={class:"u-search"},bt={key:0,class:"m-archive-filter"},Ct={class:"m-filter--left"},xt={class:"m-filter--right"};function Lt(t,e,a,n,o,s){const l=(0,i.g2)("Search"),r=(0,i.g2)("el-icon"),c=(0,i.g2)("el-button"),d=(0,i.g2)("el-input"),m=(0,i.g2)("clientBy"),h=(0,i.g2)("markBy"),v=(0,i.g2)("zlpBy"),f=(0,i.g2)("orderBy");return(0,i.uX)(),(0,i.CE)("div",ft,[(0,i.Lk)("div",kt,[(0,i.Lk)("a",{href:s.publish_link,class:"u-publish el-button el-button--primary el-button--large"},"+ "+(0,u.v_)(t.$t("发布作品")),9,gt),(0,i.bF)(d,{placeholder:t.$t("请输入搜索内容"),modelValue:o.search,"onUpdate:modelValue":e[0]||(e[0]=t=>o.search=t),modelModifiers:{trim:!0,lazy:!0},clearable:"",onClear:s.onSearch,onKeydown:(0,p.jR)(s.onSearch,["enter"]),size:"large"},{prepend:(0,i.k6)((()=>[(0,i.Lk)("span",_t,[(0,i.bF)(r,null,{default:(0,i.k6)((()=>[(0,i.bF)(l)])),_:1}),(0,i.eW)(),(0,i.Lk)("span",yt,(0,u.v_)(t.$t("关键词")),1)])])),append:(0,i.k6)((()=>[(0,i.bF)(c,{icon:"Position",class:"u-btn",onClick:s.onSearch},null,8,["onClick"])])),_:1},8,["placeholder","modelValue","onClear","onKeydown"])]),a.canFilter?((0,i.uX)(),(0,i.CE)("div",bt,[(0,i.Lk)("div",Ct,[(0,i.bF)(m,{onFilter:s.filterImperceptibly,type:o.client,showWujie:!0},null,8,["onFilter","type"]),(0,i.bF)(h,{onFilter:s.filterMeta},null,8,["onFilter"]),(0,i.bF)(v,{onFilter:s.filterMeta,type:"zlp",client:o.client},null,8,["onFilter","client"])]),(0,i.Lk)("div",xt,[(0,i.bF)(f,{onFilter:s.filterMeta},null,8,["onFilter"])])])):(0,i.Q3)("",!0)])}var It=a(25830),Tt={name:"TrickHeader",props:{canFilter:{type:Boolean,default:!0}},data(){return{search:"",client:(0,o.P)().client}},computed:{publish_link:function(){return(0,K.publishLink)(It.$k)}},methods:{filterImperceptibly(t){this.$emit("filterImperceptibly",t)},filterMeta(t){this.$emit("filterMeta",t)},onSearch(){this.$emit("search",this.search)}}};const wt=(0,et.A)(Tt,[["render",Lt]]);var Ft=wt,At=a(2543),Et=a(61981),Bt={name:"CompetitiveTrick",components:{CompetitiveTrickItemVue:it,TrickNotice:vt,TrickHeader:Ft},data(){return{data:[],search:"",client:"",presetConfig:{},loading:!1}},computed:{subtype(){var t;return(null===(t=this.$route.query)||void 0===t?void 0:t.subtype)||"冰心诀"},mark(){var t;return(null===(t=this.$route.query)||void 0===t?void 0:t.mark)||""},order(){var t;return(null===(t=this.$route.query)||void 0===t?void 0:t.order)||""},zlp(){var t;return(null===(t=this.$route.query)||void 0===t?void 0:t.zlp)||""},query:function(){return{sticky:1,subtype:this.subtype,order:this.order,mark:this.mark,client:this.client,search:this.search,zlp:this.zlp}}},watch:{query:{immediate:!0,deep:!0,handler(){this.loadData()}}},methods:{publishLink:K.publishLink,loadData(){this.loading=!0;const t=(0,Et.e)((0,At.cloneDeep)(this.query));(0,d.K5)(t).then((t=>{this.data=t.data.data.list||[]})).finally((()=>{this.loading=!1}))},onSearch:function(t){this.search=t},filterImperceptibly:function(t){this[t["type"]]=t["val"]},filterMeta:function(t){this.replaceRoute({[t["type"]]:t["val"]})},replaceRoute:function(t){return this.$router.push({name:this.$route.name,query:Object.assign({},this.$route.query,t)}).then((()=>{window.scrollTo(0,0)})).catch((()=>{}))}}};const $t=(0,et.A)(Bt,[["render",c]]);var Xt=$t,Dt={name:"PostView",components:{ListLayout:s.A,CompetitiveTrick:Xt},props:[],data:function(){return{}},computed:{client(){return(0,o.P)().client}}};const Rt=(0,et.A)(Dt,[["render",n]]);var St=Rt},25830:function(t){t.exports={$k:"pvp"}}}]);
//# sourceMappingURL=668.d93ebb16.js.map