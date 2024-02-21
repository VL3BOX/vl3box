"use strict";(self["webpackChunkpvp"]=self["webpackChunkpvp"]||[]).push([[486],{24486:function(t,a,e){e.r(a),e.d(a,{default:function(){return _a}});var n=e(20641),o=e(90033);const p={class:"m-pvp-sandbox-content"},s={class:"m-extend"},i={class:"m-strategy-box"};function l(t,a,e,l,r,u){const g=(0,n.g2)("SandboxIndex"),c=(0,n.g2)("SandboxIntro"),d=(0,n.g2)("Collection"),m=(0,n.g2)("el-icon"),x=(0,n.g2)("SandboxHandbook"),f=(0,n.g2)("el-tab-pane"),h=(0,n.g2)("DataAnalysis"),v=(0,n.g2)("SandboxLogs"),L=(0,n.g2)("el-tabs"),k=(0,n.g2)("ListLayout");return(0,n.uX)(),(0,n.Wv)(k,{"has-right":!1},{default:(0,n.k6)((()=>[(0,n.Lk)("div",p,[(0,n.bF)(g,{onSandboxChangeKey:u.onSandboxLogs},null,8,["onSandboxChangeKey"]),(0,n.Lk)("div",s,[(0,n.Lk)("div",i,[(0,n.bF)(c)]),(0,n.bF)(L,{class:"m-tabs",modelValue:t.view,"onUpdate:modelValue":a[0]||(a[0]=a=>t.view=a)},{default:(0,n.k6)((()=>[(0,n.bF)(f,{label:t.$t("沙盘攻略"),name:"index"},{label:(0,n.k6)((()=>[(0,n.bF)(m,null,{default:(0,n.k6)((()=>[(0,n.bF)(d)])),_:1}),(0,n.Lk)("b",null,(0,o.v_)(t.$t("沙盘攻略")),1)])),default:(0,n.k6)((()=>[(0,n.bF)(x)])),_:1},8,["label"]),(0,n.bF)(f,{label:"沙盘记录",name:"logs"},{label:(0,n.k6)((()=>[(0,n.bF)(m,null,{default:(0,n.k6)((()=>[(0,n.bF)(h)])),_:1}),(0,n.Lk)("b",null,(0,o.v_)(t.$t("沙盘记录")),1)])),default:(0,n.k6)((()=>[(0,n.bF)(v,{sandboxData:t.sandboxLogsData},null,8,["sandboxData"])])),_:1})])),_:1},8,["modelValue"])])])])),_:1})}var r=e(55129),u=e(53934);const g={class:"m-pvp-sandbox__content",ref:"sandboxMap"},c={class:"m-sandbox-map"};function d(t,a,e,o,p,s){const i=(0,n.g2)("sandboxSearch"),l=(0,n.g2)("sandboxMaps"),r=(0,n.g2)("sandboxLog");return(0,n.uX)(),(0,n.CE)("div",g,[(0,n.bF)(i,{servers:t.servers,onSandboxChange:s.onSandbox},null,8,["servers","onSandboxChange"]),(0,n.Lk)("div",c,[(0,n.bF)(l,{maps:t.sandMaps,camp:t.camp,route:t.route,onMapClick:s.mapClick},null,8,["maps","camp","route","onMapClick"]),t.showLog?((0,n.uX)(),(0,n.Wv)(r,{key:0,item:t.itemLog},null,8,["item"])):(0,n.Q3)("",!0)]),t.showLog?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"m-mask",onClick:a[0]||(a[0]=(...t)=>s.closeLog&&s.closeLog(...t))})):(0,n.Q3)("",!0)],512)}var m=e(96433);const x={class:"m-sandbox-search"},f=["onClick"];function h(t,a,e,p,s,i){const l=(0,n.g2)("el-switch"),r=(0,n.g2)("el-option"),u=(0,n.g2)("el-select");return(0,n.uX)(),(0,n.CE)("div",x,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.camps,((a,e)=>((0,n.uX)(),(0,n.CE)("span",{class:"u-camp",key:e,onClick:t=>i.changeCamp(e)},[(0,n.Lk)("b",{class:(0,o.C4)(e==t.camp?"active":"")},null,2),(0,n.Lk)("span",null,(0,o.v_)(a),1)],8,f)))),128)),(0,n.bF)(l,{class:"u-route",modelValue:t.route,"onUpdate:modelValue":a[0]||(a[0]=a=>t.route=a),"inactive-text":t.$t("进攻路线")},null,8,["modelValue","inactive-text"]),(0,n.bF)(u,{class:"u-server",modelValue:t.server,"onUpdate:modelValue":a[1]||(a[1]=a=>t.server=a)},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.servers,(t=>((0,n.uX)(),(0,n.Wv)(r,{key:t,label:t,value:t},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])}var v={name:"SandboxSearch",props:["servers"],data:function(){return{server:this.servers[0]||"",camp:"haoqi",camps:{haoqi:"浩气盟",eren:"恶人谷"},route:!0}},computed:{serverData:function(){return{server:this.server,route:this.route,camp:this.camp}}},watch:{serverData:{handler(){this.toEmit()},deep:!0,immediate:!0}},methods:{changeCamp(t){this.camp=t},toEmit:function(){this.$emit("sandboxChange",this.serverData)}}},L=e(66262);const k=(0,L.A)(v,[["render",h]]);var b=k;const y={class:"m-sandboxMap"},_=(0,n.Lk)("div",{class:"u-mapLine"},null,-1),C=["src"],S=["src"],F=["src"],M=["onClick","onMousemove"],X=["src"],E=["src"],P=["src"],W=["src"],w={key:0,class:"u-box"},D=["src"],G={class:"u-txt"},B={class:"u-line"},H={class:"u-camp"},K={class:"u-line"},Y=(0,n.Lk)("i",{class:"el-icon-date"},null,-1),Q=[Y];function I(t,a,e,p,s,i){const l=(0,n.g2)("el-popover");return(0,n.uX)(),(0,n.CE)("div",y,[_,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.camps,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t.key},[(0,n.Lk)("img",{class:"u-pic",src:i.imgPath(t.id,t.name,"pic"),style:(0,o.Tr)(i.positionStyle(t.name,"pic"))},null,12,C),(0,n.Lk)("img",{class:"u-icon",src:i.imgPath(t.key,t.name,"camp"),style:(0,o.Tr)([i.positionStyle(t.name,"icon"),{cursor:"default"}])},null,12,S),(0,n.Lk)("div",{class:"u-name",style:(0,o.Tr)(i.positionStyle(t.name,"name"))},(0,o.v_)(t.names),5)])))),128)),e.maps.list&&e.maps.list.length>0?((0,n.uX)(!0),(0,n.CE)(n.FK,{key:0},(0,n.pI)(e.maps.list,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t.id},[(0,n.Lk)("img",{class:"u-pic",src:i.imgPath(t.id,t.camp,"pic"),style:(0,o.Tr)(i.positionStyle(t.name_pinyin,"pic"))},null,12,F),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.maps.list,((t,e)=>((0,n.uX)(),(0,n.CE)("div",{class:"u-icon",style:(0,o.Tr)(i.positionStyle(t.name_pinyin,"icon")),key:e},[(0,n.Lk)("div",{onClick:a=>i.showLog(t),ref_for:!0,ref:a=>i.setRefs(a,t),onMousemove:a=>i.showPopover(t),onMouseleave:a[0]||(a[0]=(...t)=>i.hidePopover&&i.hidePopover(...t))},[(0,n.Lk)("img",{src:i.imgPath(t.id,t.camp,"icon")},null,8,X)],40,M)],4)))),128)),(0,n.Lk)("div",{class:"u-name",style:(0,o.Tr)(i.positionStyle(t.name_pinyin,"name"))},(0,o.v_)(t.name),5)])))),128)):(0,n.Q3)("",!0),e.maps.detail&&e.maps.detail.length?((0,n.uX)(!0),(0,n.CE)(n.FK,{key:1},(0,n.pI)(e.maps.detail,(t=>((0,n.uX)(),(0,n.CE)("div",{class:"detail",key:t.id},[(0,n.Lk)("img",{class:"u-camps",src:i.imgPath(t.name_pinyin,e.camp,"camp"),style:(0,o.Tr)(i.positionStyle(t.name_pinyin,"camp"))},null,12,E),e.route?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.castles,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t.id},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.attacks,(a=>((0,n.uX)(),(0,n.CE)("img",{key:a.id,class:"u-attacks",src:i.imgPath(a,e.camp,"arr"),style:(0,o.Tr)(i.positionStyle(t.name_pinyin,"arr",a.name_pinyin))},null,12,P)))),128))])))),128)),t.attacks&&0!==t.attacks.length?((0,n.uX)(!0),(0,n.CE)(n.FK,{key:0},(0,n.pI)(t.attacks,(a=>((0,n.uX)(),(0,n.CE)("div",{key:a.id},[(0,n.Lk)("img",{class:"u-attacks",src:i.imgPath(a,e.camp,"attacks"),style:(0,o.Tr)(i.positionStyle(t.name_pinyin,"attacks",a.name_pinyin))},null,12,W)])))),128)):(0,n.Q3)("",!0)],64)):(0,n.Q3)("",!0)])))),128)):(0,n.Q3)("",!0),(0,n.bF)(l,{visible:t.visiblePopover,"onUpdate:visible":a[2]||(a[2]=a=>t.visiblePopover=a),"virtual-ref":t.activeRef,trigger:"manual",width:"240","virtual-triggering":"",placement:"top-start","show-arrow":!1},{default:(0,n.k6)((()=>[t.active?((0,n.uX)(),(0,n.CE)("div",w,[(0,n.Lk)("img",{src:i.imgPath(t.active.name_pinyin,t.active.camp,"camp")},null,8,D),(0,n.Lk)("div",G,[(0,n.Lk)("div",B,[(0,n.Lk)("span",H,(0,o.v_)(t.active.name),1)]),(0,n.Lk)("div",K,[(0,n.Lk)("span",null,(0,o.v_)(t.$t("占领势力：")),1),(0,n.Lk)("span",{class:(0,o.C4)(t.active.camp)},"【"+(0,o.v_)("haoqi"==t.active.camp?"浩气盟":"恶人谷")+"】",3)])]),(0,n.Lk)("div",{class:"u-log",onClick:a[1]||(a[1]=a=>i.showLog(t.active))},Q)])):(0,n.Q3)("",!0)])),_:1},8,["visible","virtual-ref"])])}e(44114);var T=e(50953),A=e(38364);const $=A.__imgPath,{placeArr:Z,placeAttacks:J,placeCamp:V,placeImg:R,placeName:N}=e(29013);var q={name:"SandBoxMaps",props:["maps","camp","route"],data:function(){return{camps:[{id:27,name:"eren",names:"恶人谷",key:"erengu"},{id:25,name:"haoqi",names:"浩气盟",key:"haoqimeng"}],active:"",activeRef:(0,T.KR)(null),visiblePopover:!1,refMap:[]}},methods:{setRefs:function(t,a){t&&this.refMap.push({ref:t,item:a})},showPopover:function(t){const a=this.refMap.findIndex((a=>a.item.id===t.id));this.activeRef=this.refMap[a].ref,this.active=t,this.visiblePopover=!0},hidePopover:function(){this.visiblePopover=!1},imgPath(t,a,e){switch(e){case"pic":return"haoqi"==a?$+"image/camp/h"+t+".png":$+"image/camp/e"+t+".png";case"camp":return $+"image/camp/"+t+".png";case"icon":return"haoqi"==a?$+"image/camp/h"+this.icon(t)+".png":$+"image/camp/e"+this.icon(t)+".png";case"arr":case"attacks":return"haoqi"==a?$+"image/camp/charr.png":$+"image/camp/cearr.png";default:return""}},positionStyle(t,a,e){switch(a){case"pic":return R[t];case"camp":return V[t];case"icon":return N[t];case"name":{let{left:a,top:e}=N[t];return"LinFengBao"!=t&&"WuWangCheng"!=t||(a=this.pixel(a,15)),"eren"!=t&&"haoqi"!=t||(a=this.pixel(a,40)),a=this.pixel(a,45),e=this.pixel(e,-10),{left:a,top:e}}case"attacks":return J[t][e];case"arr":return Z[t][e];default:return"default"}},icon(t){switch(t){case 301:return"_lingfengbao";case 221:return"_wuwangcheng";case 231:case 1031:case 92:case 1002:return"02";case 1392:case 212:case 1012:case 1001:return"03";case 131:case 1042:case 1051:case 351:return"04";case 211:case 1531:return"05";default:return"01"}},pixel(t,a){let e=t.substr(0,t.length-2);return t=+e+a,t+"px"},showLog(t){t.img=$+"image/camp/"+t.name_pinyin+".png",this.$emit("mapClick",t)}}};const U=(0,L.A)(q,[["render",I]]);var z=U;const j={key:0,class:"m-sandbox-log"},O={class:"m-log-box"},tt={class:"m-box-info"},at=["src"],et={class:"u-box"},nt={class:"u-title"},ot={class:"u-desc"},pt=["href"],st={key:0,class:"u-cont",style:{overflow:"auto"}},it={class:"u-line"},lt={class:"u-time"},rt={class:"u-line"},ut={class:"u-line"},gt={key:1,class:"u-cont"},ct={class:"u-nonedata"};function dt(t,a,e,p,s,i){var l,r;return e.item?((0,n.uX)(),(0,n.CE)("div",j,[(0,n.Lk)("div",O,[(0,n.Lk)("div",tt,[(0,n.Lk)("img",{class:"u-img",src:e.item.img},null,8,at),(0,n.Lk)("div",et,[(0,n.Lk)("span",nt,(0,o.v_)(e.item.name),1),(0,n.Lk)("span",ot,(0,o.v_)(e.item.desc||"暂无介绍"),1),(0,n.Lk)("a",{class:"u-baike",href:e.item.link,target:"_blank"},(0,o.v_)(t.$t("查看百科"))+" »",9,pt)])]),null!==(l=e.item)&&void 0!==l&&null!==(r=l.list)&&void 0!==r&&r.length?((0,n.uX)(),(0,n.CE)("ul",st,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.item.list,((a,e)=>((0,n.uX)(),(0,n.CE)("li",{key:e},[(0,n.Lk)("div",it,[(0,n.Lk)("span",lt,(0,o.v_)(a.date),1)]),(0,n.Lk)("div",rt,[(0,n.Lk)("span",null,(0,o.v_)(t.$t("占领势力：")),1),(0,n.Lk)("span",{class:(0,o.C4)(a.camp)},"["+(0,o.v_)("haoqi"==a.camp?"浩气盟":"恶人谷")+"]",3)]),(0,n.Lk)("div",ut,[(0,n.Lk)("span",null,(0,o.v_)(t.$t("占领帮会：")),1),(0,n.Lk)("span",{class:(0,o.C4)(a.camp)},(0,o.v_)(a.gang),3)])])))),128))])):((0,n.uX)(),(0,n.CE)("div",gt,[(0,n.Lk)("div",ct,(0,o.v_)(t.$t("暂无数据")),1)]))])])):(0,n.Q3)("",!0)}var mt={name:"SandBoxLog",props:["item"],data:function(){return{}},methods:{}};const xt=(0,L.A)(mt,[["render",dt]]);var ft=xt,ht=JSON.parse('["蝶恋花","龙争虎斗","长安城","幽月轮","斗转星移","剑胆琴心","乾坤一掷","唯我独尊","梦江南","绝代天骄","天鹅坪","破阵子","飞龙在天","青梅煮酒","共結來緣","傲血戰意","巔峰再起","江海雲夢"]'),vt=e(66340);function Lt(t){return(0,vt.oG)().get("/api/sandmap",{params:t}).then((t=>t.data))}function kt(t=1,a=1){return(0,vt.Xg)().get(`/api/sandmap/${t}/castle/${a}/logs`).then((t=>t.data))}function bt(t){return(0,vt.WU)().get("/api/cms/posts",{params:t}).then((t=>t.data.data.list))}var yt={name:"SandBox",components:{sandboxSearch:b,sandboxMaps:z,sandboxLog:ft},data:function(){return{sandMaps:{},servers:ht.map((t=>this.$i18n.t(t))),itemLog:"",showLog:!1,server:this.$i18n.t(ht[0])||""}},computed:{parms:function(){return{server:this.server,camp:this.camp}}},mounted(){(0,m.X2F)(this.$refs.sandboxMap,(()=>{this.showLog&&(this.showLog=!1)}))},methods:{onSandbox(t){let{server:a,camp:e,route:n}=t;this.server=a,this.camp=e,this.route=n,this.getSandbox(),this.$emit("sandboxChangeKey",a)},getSandbox(){Lt(this.parms).then((t=>{this.sandMaps={list:t.data.castles}}))},mapClick(t){kt(this.id,t.id).then((a=>{t.list=a.data.data,this.itemLog=t,this.showLog=!0}))},closeLog(){this.showLog=!1}},created:function(){this.getSandbox()}};const _t=(0,L.A)(yt,[["render",d]]);var Ct=_t;const St={class:"m-sandbox-logs"},Ft={class:"m-log-box"},Mt={class:"m-box-info"},Xt=["innerHTML"],Et={class:"u-title"},Pt={key:0,class:"u-desc"};function Wt(t,a,e,p,s,i){var l;return(0,n.uX)(),(0,n.CE)("div",St,[(0,n.Lk)("div",Ft,[(0,n.Lk)("div",Mt,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.sandboxData,((t,a)=>((0,n.uX)(),(0,n.CE)("div",{class:"u-box",key:a},[(0,n.Lk)("span",{class:"u-desc",innerHTML:i.toLogText(t.content)},null,8,Xt),(0,n.Lk)("span",Et,(0,o.v_)(i.ToDate(t.time)),1)])))),128)),(null===(l=e.sandboxData)||void 0===l?void 0:l.length)<1?((0,n.uX)(),(0,n.CE)("span",Pt,(0,o.v_)(t.$t("暂无记录")),1)):(0,n.Q3)("",!0)])])])}const wt=(t,a="yyyy-mm-dd MM:mm:ss")=>{let e=new Date(isNaN(t)?t:Number(t)),n=e.getMonth()+1,o=e.getDate(),p=e.getHours(),s=e.getMinutes(),i=e.getSeconds();n>=1&&n<=9&&(n="0"+n),o>=0&&o<=9&&(o="0"+o),p>=0&&p<=9&&(p="0"+p),s>=0&&s<=9&&(s="0"+s),i>=0&&i<=9&&(i="0"+i);let l=e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日";return"yyyy-mm-dd"==a&&(l=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()),"yyyy.mm.dd"==a&&(l=e.getFullYear()+"."+(e.getMonth()+1)+"."+e.getDate()),"yyyy-mm-dd MM:mm:ss"==a&&(l=e.getFullYear()+"-"+n+"-"+o+" "+p+":"+s+":"+i),"yyyy-mm-dd MM:mm"==a&&(l=e.getFullYear()+"-"+n+"-"+o+" "+p+":"+s),"mm-dd MM:mm:ss"==a&&(l=n+"-"+o+" "+p+":"+s+":"+i),"yyyy年mm月dd日 MM:mm:ss"==a&&(l=e.getFullYear()+"年"+n+"月"+o+"日 "+p+":"+s+":"+i),l};var Dt={name:"sendbox_handbook",props:["sandboxData"],data:function(){return{item:{list:[]}}},methods:{ToDate(t){let a=Number(t+"000");return wt(a,"yyyy-mm-dd MM:mm")},toLogText(t){let a=t.split("贡献前三名的帮会将均分"),e=a?a[0].split("感谢他们为阵营的付出")[0]:t,n=e.replaceAll("浩气盟","<i class='sandbox-em-hq'>浩气盟</i>").replaceAll("恶人谷","<i class='sandbox-em-er'>恶人谷</i>"),o=n.replaceAll("【","<i class='sandbox-em-point'>【").replaceAll("】","】</i>");return o}},created(){}};const Gt=(0,L.A)(Dt,[["render",Wt],["__scopeId","data-v-298f53ea"]]);var Bt=Gt;const Ht={class:"m-sandbox-handbook"},Kt={class:"m-log-box"},Yt={key:0,class:"u-list"},Qt=["href","target"],It=["src"],Tt=["src","alt","title"],At={key:0,class:"u-label u-zlp"},$t=["href","target"],Zt={key:1,class:"u-marks"},Jt={class:"u-content u-desc"},Vt={class:"u-metalist u-collection"},Rt=["href"],Nt={class:"u-metalist u-topics"},qt=["href"],Ut={class:"u-misc"},zt=["src","alt"],jt=["href"],Ot={class:"u-date"};function ta(t,a,e,p,s,i){const l=(0,n.g2)("el-pagination"),r=(0,n.gN)("loading");return(0,n.uX)(),(0,n.CE)("div",Ht,[(0,n.bo)(((0,n.uX)(),(0,n.CE)("div",Kt,[t.handbookList.length?((0,n.uX)(),(0,n.CE)("ul",Yt,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.handbookList,(a=>((0,n.uX)(),(0,n.CE)("li",{class:"u-item",key:a.ID},[(0,n.Lk)("a",{class:"u-banner",href:i.postLink(a.ID),target:e.target},[((0,n.uX)(),(0,n.CE)("img",{src:i.getBanner(a.post_banner,a.post_subtype),key:a.ID},null,8,It)),(0,n.Lk)("span",{class:(0,o.C4)(["u-subject",i.subject(a)||"ALL"])},(0,o.v_)(i.subject(a)||"ALL"),3)],8,Qt),(0,n.Lk)("h2",{class:(0,o.C4)(["u-post",{isSticky:a.sticky}])},[(0,n.Lk)("img",{class:"u-icon",src:i.xficon(a.post_subtype),alt:a.post_subtype,title:a.post_subtype},null,8,Tt),a.zlp?((0,n.uX)(),(0,n.CE)("span",At,(0,o.v_)(a.zlp),1)):(0,n.Q3)("",!0),(0,n.Lk)("a",{class:"u-title",style:(0,o.Tr)(i.showHighlight(a.color)),href:i.postLink(a.ID),target:e.target},(0,o.v_)(a.post_title||t.$t("无标题")),13,$t),a.mark&&a.mark.length?((0,n.uX)(),(0,n.CE)("span",Zt,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.mark,(t=>((0,n.uX)(),(0,n.CE)("i",{class:"u-mark",key:t},(0,o.v_)(i.showMark(t)),1)))),128))])):(0,n.Q3)("",!0)],2),(0,n.Lk)("div",Jt,[(0,n.Lk)("div",Vt,[(0,n.Lk)("strong",null,(0,o.v_)(t.$t("小册")),1),(0,n.Lk)("em",null,[~~a.post_collection?((0,n.uX)(),(0,n.CE)("a",{key:0,href:`/collection/${a.post_collection}`,target:"_blank"},"《"+(0,o.v_)(a.collection_info&&a.collection_info.title)+"》",9,Rt)):((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[(0,n.eW)("-")],64))])]),(0,n.Lk)("div",Nt,[(0,n.Lk)("strong",null,(0,o.v_)(t.$t("主题")),1),(0,n.Lk)("em",null,[a.topics&&a.topics.length?((0,n.uX)(!0),(0,n.CE)(n.FK,{key:0},(0,n.pI)(a.topics,(t=>((0,n.uX)(),(0,n.CE)("a",{class:"u-topic",href:`/bps?topic=${t}`,key:t},(0,o.v_)(t),9,qt)))),128)):((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[(0,n.eW)("-")],64))])])]),(0,n.Lk)("div",Ut,[(0,n.Lk)("img",{class:"u-author-avatar",src:i.showAvatar(a.author_info),alt:i.showNickname(a.author_info)},null,8,zt),(0,n.Lk)("a",{class:"u-author-name",href:i.authorLink(a.post_author),target:"_blank"},(0,o.v_)(i.showNickname(a.author_info)),9,jt),(0,n.Lk)("span",Ot,[(0,n.eW)(" Updated on "),(0,n.Lk)("time",null,(0,o.v_)(i.dateFormat(a.post_modified)),1)])])])))),128))])):(0,n.Q3)("",!0),(0,n.bF)(l,{modelValue:t.page,"onUpdate:modelValue":a[0]||(a[0]=a=>t.page=a),"hide-on-single-page":"",class:"u-pagination",small:"",background:"",layout:"prev, pager, next","page-size":t.per,total:t.total},null,8,["modelValue","page-size","total"])])),[[r,t.loading]])])}var aa=e(38839),ea=e(74353),na=e.n(ea),oa=e(26693),pa=e(59894),sa=e(59893),ia=e(8906),la=e.n(ia),ra=e(98867),ua=e.n(ra);na().extend(la()),na().extend(ua());var ga={name:"sendbox_handbook",props:{target:{type:String,default:"_blank"}},data:function(){return{handbookList:[],loading:!0,per:10,page:1,total:0}},computed:{...(0,aa.aH)(r.P,["client"]),params(){return{per:this.per,page:this.page,type:"bps",order:"update",client:this.client,topic:"小攻防"}}},methods:{authorLink:oa.authorLink,async initHandbookList(){try{this.loading=!0;let t=await bt(this.params);this.handbookList=t}catch(t){console.log(t)}finally{this.loading=!1}},getBanner:function(t,a){if(t)return(0,oa.showBanner)(t);{var e;let t=a&&(null===(e=pa[a])||void 0===e?void 0:e["id"])||0;return A.__imgPath+"image/bps_thumbnail/"+t+".png"}},showAvatar(t){return(0,oa.showAvatar)(null===t||void 0===t?void 0:t.user_avatar)},showNickname(t){return(null===t||void 0===t?void 0:t.display_name)||"匿名"},showMark:function(t){return sa.A[t]||t},postLink(t){return location.origin+"/bps/"+t},dateFormat(t){return na()(new Date(t)).format("YYYY-MM-DD")},xficon:function(t){t&&"其它"!=t||(t="通用");let a=pa[t]&&pa[t]["id"];return A.__imgPath+"image/xf/"+a+".png"},showHighlight:function(t){return t?`color:${t};font-weight:600;`:""},subject:function(t){var a,e,n,o;let p="";return null!==(a=t.tags)&&void 0!==a&&a.includes("PVE")&&null!==(e=t.tags)&&void 0!==e&&e.includes("PVP")?p="ALL":null!==(n=t.tags)&&void 0!==n&&n.includes("PVE")?p="PVE":null!==(o=t.tags)&&void 0!==o&&o.includes("PVP")&&(p="PVP"),p}},created(){this.initHandbookList()}};const ca=(0,L.A)(ga,[["render",ta]]);var da=ca;const ma={class:"m-sandbox-intro"},xa=["innerHTML"];function fa(t,a,e,p,s,i){const l=(0,n.g2)("el-icon"),r=(0,n.g2)("el-tab-pane"),u=(0,n.g2)("el-tabs"),g=(0,n.gN)("loading");return(0,n.bo)(((0,n.uX)(),(0,n.CE)("div",ma,[(0,n.bF)(u,{modelValue:t.active,"onUpdate:modelValue":a[0]||(a[0]=a=>t.active=a)},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tabs,(a=>((0,n.uX)(),(0,n.Wv)(r,{key:a.name,label:a.label,name:a.name},{label:(0,n.k6)((()=>[(0,n.bF)(l,{class:"u-tab-icon"},{default:(0,n.k6)((()=>[((0,n.uX)(),(0,n.Wv)((0,n.$y)(t.icons[a.name])))])),_:2},1024),(0,n.Lk)("b",null,(0,o.v_)(a.label),1)])),default:(0,n.k6)((()=>[(0,n.Lk)("div",{innerHTML:null===a||void 0===a?void 0:a.html},null,8,xa)])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue"])])),[[g,t.loading]])}var ha=e(53405),va={name:"SandboxIntro",props:[],components:{},data:function(){return{loading:!1,data:[],active:"",icons:(0,T.IG)({pvp_sandbox_intro:"Compass",pvp_sandbox_rule:"DataBoard",pvp_sandbox_background:"Monitor",pvp_sandbox_base:"LocationInformation",pvp_sandbox_gameplay:"Cpu",pvp_sandbox_tree:"Grape",pvp_sandbox_model:"Apple"})}},computed:{tabs(){return this.data.map((t=>({name:t.name,label:t.label,html:t.html})))}},watch:{tabs:{handler(){this.active=this.tabs[0].name},deep:!0}},mounted(){this.loadData()},methods:{loadData(){this.loading=!0;const t="pvp_sandbox_intro,pvp_sandbox_rule,pvp_sandbox_base,pvp_sandbox_gameplay,pvp_sandbox_tree,pvp_sandbox_model";(0,ha.Vp)({key:t}).then((t=>{this.data=t.data.data||[]})).finally((()=>{this.loading=!1}))}}};const La=(0,L.A)(va,[["render",fa]]);var ka=La,ba={name:"SandBoxPage",components:{SandboxIndex:Ct,ListLayout:u.A,SandboxLogs:Bt,SandboxHandbook:da,SandboxIntro:ka},data:function(){return{view:"index",sandboxLogsData:[]}},computed:{client(){return(0,r.P)().client},params:function(){return{sandmap_id:this.id,camp:this.camp}}},methods:{async onSandboxLogs(t="斗转星移"){let a=await(0,ha.tm)({server:t});this.sandboxLogsData=a.data?a.data.list:[]}},mounted(){this.onSandboxLogs()}};const ya=(0,L.A)(ba,[["render",l]]);var _a=ya},29013:function(t){t.exports=JSON.parse('{"placeImg":{"eren":{"left":"72px","top":"10px"},"haoqi":{"left":"683px","top":"523px"},"QiuYuBao":{"left":"623px","top":"318px"},"HongLianGang":{"left":"607px","top":"259px"},"JinMenGuan":{"left":"637px","top":"123px"},"QingYunWu":{"left":"733px","top":"144px"},"PanLongWu":{"left":"502px","top":"476px"},"ZhuLuPing":{"left":"573px","top":"391px"},"WuWangCheng":{"left":"562px","top":"430px"},"LongMenZhen":{"left":"395px","top":"117px"},"FeiShaGuan":{"left":"362px","top":"136px"},"LinFengBao":{"left":"149px","top":"65px"},"BuKongGuan":{"left":"392px","top":"368px"},"JiLiuWu":{"left":"432px","top":"431px"},"WoLongPo":{"left":"226px","top":"476px"},"RiYueYa":{"left":"257px","top":"356px"},"ShuangGeBao":{"left":"50px","top":"602px"},"LanCangCheng":{"left":"123px","top":"626px"},"ShenChiLing":{"left":"109px","top":"206px"},"LieRiGang":{"left":"12px","top":"271px"},"JingQiuGu":{"left":"11px","top":"386px"},"FengMingBao":{"left":"23px","top":"494px"},"DaLiShanCheng":{"left":"304px","top":"606px"},"QianYanGuan":{"left":"305px","top":"581px"},"DanXingLin":{"left":"502px","top":"152px"},"FengHuZhai":{"left":"496px","top":"203px"},"ShiWaiPo":{"left":"234px","top":"233px"},"FuFengJun":{"left":"295px","top":"187px"}},"placeName":{"eren":{"left":"149px","top":"49px"},"haoqi":{"left":"762px","top":"622px"},"QiuYuBao":{"left":"674px","top":"370px"},"HongLianGang":{"left":"698px","top":"284px"},"JinMenGuan":{"left":"684px","top":"212px"},"QingYunWu":{"left":"768px","top":"178px"},"PanLongWu":{"left":"578px","top":"536px"},"ZhuLuPing":{"left":"622px","top":"434px"},"WuWangCheng":{"left":"706px","top":"560px"},"LongMenZhen":{"left":"450px","top":"162px"},"FeiShaGuan":{"left":"370px","top":"142px"},"LinFengBao":{"left":"284px","top":"132px"},"BuKongGuan":{"left":"480px","top":"392px"},"JiLiuWu":{"left":"458px","top":"466px"},"WoLongPo":{"left":"320px","top":"524px"},"RiYueYa":{"left":"332px","top":"428px"},"ShuangGeBao":{"left":"102px","top":"640px"},"LanCangCheng":{"left":"170px","top":"718px"},"ShenChiLing":{"left":"129px","top":"234px"},"LieRiGang":{"left":"88px","top":"348px"},"JingQiuGu":{"left":"132px","top":"444px"},"FengMingBao":{"left":"62px","top":"522px"},"DaLiShanCheng":{"left":"336px","top":"622px"},"QianYanGuan":{"left":"390px","top":"734px"},"DanXingLin":{"left":"516px","top":"172px"},"FengHuZhai":{"left":"578px","top":"240px"},"ShiWaiPo":{"left":"300px","top":"308px"},"FuFengJun":{"left":"326px","top":"222px"}},"placeCamp":{"LuoDao":{"left":"724px","top":"326px"},"JinShuiZhen":{"left":"730px","top":"150px"},"BaLingXian":{"left":"644px","top":"486px"},"NanPingShan":{"left":"670px","top":"560px"},"LongMenHuangMo":{"left":"428px","top":"124px"},"KunLun":{"left":"252px","top":"142px"},"QuTangXia":{"left":"522px","top":"438px"},"BaiLongKou":{"left":"380px","top":"476px"},"WuLiangShan":{"left":"216px","top":"636px"},"RongTianLing":{"left":"170px","top":"290px"},"HeiLongZhao":{"left":"80px","top":"444px"},"CangShanErHai":{"left":"466px","top":"654px"},"FengHuaGuZhanLuan":{"left":"526px","top":"204px"},"MaWeiYi":{"left":"278px","top":"238px"}},"placeAttacks":{"KunLun":{"RongTianLing":{"left":"192px","top":"212px","transform":"rotate(200deg)"},"MaWeiYi":{"left":"298px","top":"204px","transform":"rotate(170deg)"},"LongMenHuangMo":{"left":"178px","top":"110px","transform":"rotate(110deg)"}},"MaWeiYi":{"KunLun":{"left":"300px","top":"184px","transform":"rotate(320deg)"},"RongTianLing":{"left":"218px","top":"280px","transform":"rotate(250deg)"},"LongMenHuangMo":{"left":"380px","top":"182px","transform":"rotate(50deg)"},"BaiLongKou":{"left":"312px","top":"346px","transform":"rotate(180deg)"}},"LongMenHuangMo":{"KunLun":{"left":"378px","top":"108px","transform":"rotate(280deg)"},"MaWeiYi":{"left":"356px","top":"183px","transform":"rotate(220deg)"},"FengHuaGuZhanLuan":{"left":"504px","top":"144px","transform":"rotate(120deg)"}},"FengHuaGuZhanLuan":{"LongMenHuangMo":{"left":"488px","top":"132px","transform":"rotate(300deg)"},"JinShuiZhen":{"left":"638px","top":"140px","transform":"rotate(90deg)"}},"JinShuiZhen":{"LuoDao":{"left":"704px","top":"246px","transform":"rotate(200deg)"},"FengHuaGuZhanLuan":{"left":"618px","top":"142px","transform":"rotate(270deg)"}},"LuoDao":{"JinShuiZhen":{"left":"666px","top":"228px","transform":"rotate(7deg)"},"BaLingXian":{"left":"644px","top":"382px","transform":"rotate(210deg)"},"NanPingShan":{"left":"726px","top":"414px","transform":"rotate(180deg)"}},"BaLingXian":{"LuoDao":{"left":"642px","top":"368px","transform":"rotate(30deg)"},"NanPingShan":{"left":"674px","top":"512px","transform":"rotate(120deg)"},"CangShanErHai":{"left":"520px","top":"564px","transform":"rotate(200deg)"},"QuTangXia":{"left":"556px","top":"454px","transform":"rotate(290deg)"}},"QuTangXia":{"BaLingXian":{"left":"568px","top":"466px","transform":"rotate(120deg)"},"BaiLongKou":{"left":"400px","top":"434px","transform":"rotate(270deg)"}},"CangShanErHai":{"BaLingXian":{"left":"536px","top":"550px","transform":"rotate(40deg)"},"NanPingShan":{"left":"596px","top":"616px","transform":"rotate(70deg)"},"WuLiangShan":{"left":"282px","top":"652px","transform":"rotate(270deg)"}},"WuLiangShan":{"HeiLongZhao":{"left":"114px","top":"598px","transform":"rotate(0deg)"},"BaiLongKou":{"left":"230px","top":"588px","transform":"rotate(40deg)"},"CangShanErHai":{"left":"300px","top":"652px","transform":"rotate(100deg)"}},"BaiLongKou":{"WuLiangShan":{"left":"240px","top":"610px","transform":"rotate(200deg)"},"QuTangXia":{"left":"416px","top":"438px","transform":"rotate(70deg)"},"MaWeiYi":{"left":"316px","top":"336px","transform":"rotate(340deg)"}},"HeiLongZhao":{"WuLiangShan":{"left":"114px","top":"600px","transform":"rotate(180deg)"},"RongTianLing":{"left":"162px","top":"390px","transform":"rotate(10deg)"}},"RongTianLing":{"KunLun":{"left":"200px","top":"208px","transform":"rotate(30deg)"},"MaWeiYi":{"left":"244px","top":"236px","transform":"rotate(90deg)"},"HeiLongZhao":{"left":"98px","top":"384px","transform":"rotate(190deg)"}},"NanPingShan":{"BaLingXian":{"left":"644px","top":"536px","transform":"rotate(300deg)"},"LuoDao":{"left":"730px","top":"402px","transform":"rotate(0deg)"},"CangShanErHai":{"left":"576px","top":"616px","transform":"rotate(240deg)"}}},"placeArr":{"QiuYuBao":{"HongLianGang":{"left":"678px","top":"318px","transform":"rotate(10deg)"}},"HongLianGang":{"QiuYuBao":{"left":"654px","top":"332px","transform":"rotate(180deg)"}},"JinMenGuan":{"QingYunWu":{"left":"758px","top":"202px","transform":"rotate(70deg)"}},"QingYunWu":{"JinMenGuan":{"left":"750px","top":"202px","transform":"rotate(250deg)"}},"PanLongWu":{"ZhuLuPing":{"left":"604px","top":"470px","transform":"rotate(30deg)"}},"ZhuLuPing":{"PanLongWu":{"left":"600px","top":"490px","transform":"rotate(210deg)"}},"LongMenZhen":{"FeiShaGuan":{"left":"428px","top":"164px","transform":"rotate(240deg)"}},"FeiShaGuan":{"LongMenZhen":{"left":"440px","top":"142px","transform":"rotate(90deg)"}},"BuKongGuan":{"JiLiuWu":{"left":"438px","top":"482px","transform":"rotate(120deg)"}},"JiLiuWu":{"BuKongGuan":{"left":"464px","top":"426px","transform":"rotate(320deg)"}},"WoLongPo":{"RiYueYa":{"left":"312px","top":"466px","transform":"rotate(40deg)"}},"RiYueYa":{"WoLongPo":{"left":"312px","top":"480px","transform":"rotate(200deg)"}},"ShuangGeBao":{"LanCangCheng":{"left":"150px","top":"688px","transform":"rotate(100deg)"}},"LanCangCheng":{"ShuangGeBao":{"left":"136px","top":"688px","transform":"rotate(290deg)"}},"ShenChiLing":{"LieRiGang":{"left":"126px","top":"268px","transform":"rotate(210deg)"}},"LieRiGang":{"ShenChiLing":{"left":"126px","top":"266px","transform":"rotate(30deg)"}},"JingQiuGu":{"FengMingBao":{"left":"124px","top":"476px","transform":"rotate(30deg)"}},"FengMingBao":{"JingQiuGu":{"left":"124px","top":"480px","transform":"rotate(30deg)"}},"DaLiShanCheng":{"QianYanGuan":{"left":"348px","top":"670px","transform":"rotate(180deg)"}},"QianYanGuan":{"DaLiShanCheng":{"left":"348px","top":"662px","transform":"rotate(0deg)"}},"DanXingLin":{"FengHuZhai":{"left":"556px","top":"214px","transform":"rotate(120deg)"}},"FengHuZhai":{"DanXingLin":{"left":"558px","top":"218px","transform":"rotate(320deg)"}},"ShiWaiPo":{"FuFengJun":{"left":"338px","top":"258px","transform":"rotate(30deg)"}},"FuFengJun":{"ShiWaiPo":{"left":"322px","top":"264px","transform":"rotate(210deg)"}}}}')}}]);
//# sourceMappingURL=486.b4c3a41e.js.map