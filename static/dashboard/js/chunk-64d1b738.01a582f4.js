(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64d1b738","chunk-2be9b3dd"],{"0521":function(t){t.exports=JSON.parse('{"c":{"4":"改名卡","5":"盒币充值","7":"1年VIP高级会员","8":"1年PRO专业会员","9":"高级会员升级专业会员","10":"0.99铭牌促销活动","11":"铭牌标准售卖","12":"1个月VIP高级会员","13":"3个月VIP高级会员","14":"1个月PRO专业会员","15":"3个月PRO专业会员","16":"金箔"},"a":{"0":"待支付","1":"支付完成","2":"放弃支付","3":"订单过期放弃支付"},"b":{"alipay":"支付宝","wepay":"微信"}}')},"08e1":function(t,a,e){"use strict";e("a7d5")},"0cd3":function(t){t.exports=JSON.parse('{"1":"充值","-2":"金箔消费","-3":"作品消费","-4":"商城消费"}')},1645:function(t){t.exports=JSON.parse('{"default":{"name":"default","style":"square","files":{"xs":{"w":48,"width":60,"file":"default-xs.gif"},"s":{"w":68,"width":84,"file":"default-s.gif"},"m":{"w":108,"width":136,"file":"default-m.png"},"l":{"w":180,"width":224,"file":"default-l.png"},"xl":{"w":240,"width":300,"file":"default-xl.png"}}},"flower_1":{"name":"flower_1","style":"circle","files":{"xs":{"w":48,"width":60,"file":"flower_1-xs.png"},"s":{"w":68,"width":84,"file":"flower_1-s.png"},"m":{"w":108,"width":136,"file":"flower_1-m.png"},"l":{"w":180,"width":224,"file":"flower_1-l.png"},"xl":{"w":240,"width":300,"file":"flower_1-xl.png"}}}}')},"1e4b":function(t,a,e){"use strict";e.r(a);e("a9e3");var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-dashboard m-dashboard-index"},[a("div",{staticClass:"m-basicinfo"},[a("Avatar",{staticClass:"u-avatar",attrs:{uid:t.uid,url:t.info.user_avatar,size:"l",frame:t.info.user_avatar_frame}}),a("div",{staticClass:"u-info"},[a("h1",{staticClass:"u-name"},[a("span",{staticClass:"u-name-txt"},[t._v(t._s(t.info.display_name))]),a("div",{staticClass:"u-name-meta"},[t.isSuperAuthor?a("span",{staticClass:"u-superauth",class:{"is-vip":!(t.isVIP||t.isPRO)},attrs:{title:t.$t("签约作者")}},[a("img",{attrs:{src:t.super_author_icon,alt:"superAuthor"}})]):t._e(),a("span",{staticClass:"u-vip"},[t.isVIP||t.isPRO?[a("a",{staticClass:"i-icon-vip",class:{on:t.isVIP||t.isPRO},attrs:{href:"/vip/premium?from=dashboard_index",target:"_blank"}},[t._v(t._s(t.vipType))]),a("span",{staticClass:"u-expire"},[t._v("（"+t._s(t.$t("有效期至")+":".concat(t.expire_date))+"）")])]:a("a",{staticClass:"u-upgrade",attrs:{href:"/vip/premium?from=dashboard_index",target:"_blank"}},[t._v(t._s(t.$t("升级账号类型")))])],2)])]),a("div",{staticClass:"u-identity"},[a("span",{staticClass:"u-uid"},[a("em",[t._v("UID")]),a("b",[t._v(t._s(t.uid))])]),a("span",{staticClass:"u-group"},[a("em",[t._v("Verify")]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:~~t.info.verify_email?t.$t("邮箱已验证"):t.$t("邮箱未验证"),placement:"top"}},[a("a",{class:t.info.verify_email&&"done",attrs:{href:"/dashboard/email"}},[a("i",{staticClass:"el-icon-message"})])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:~~t.info.verify_phone?t.$t("手机已绑定"):t.$t("手机未绑定"),placement:"top"}},[a("a",{class:t.info.verify_phone&&"done",attrs:{href:"/dashboard/phone"}},[a("i",{staticClass:"el-icon-mobile-phone"})])])],1),t.group>30?a("span",{staticClass:"u-group"},[a("em",[t._v("Group")]),a("b",[t._v(t._s(t.showGroupName(t.group)))])]):t._e()]),a("div",{staticClass:"u-identity m-level"},[a("span",{staticClass:"u-level"},[a("em",[t._v("Level")]),a("b",[t._v("Lv."+t._s(t.level))])]),a("a",{staticClass:"u-progress",attrs:{href:"/notice/28917",target:"_blank"}},[a("el-progress",{staticClass:"u-level-progress",attrs:{percentage:t.levelProgress,color:"#ffb502","text-inside":"","stroke-width":16,format:t.formatProgress,"show-text":!0}})],1)]),t.medals&&t.medals.length?a("div",{staticClass:"u-medals"},[a("medal",{attrs:{medals:t.medals,showIcon:t.showMedalIcon}})],1):t._e()])],1),a("div",{staticClass:"m-credit"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"u-coin"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("1盒币可用于兑换1通宝，通过评审团/用户打赏获取"),placement:"top"}},[a("div",{staticClass:"u-credit-name"},[a("i",{staticClass:"el-icon-coin"}),t._v(" "+t._s(t.$t("盒币")))])]),a("div",{staticClass:"u-credit-value"},[a("b",[t._v(t._s(t.asset.box_coin))])]),a("div",{staticClass:"u-credit-op"},[a("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/boxcoin"}},[t._v(t._s(t.$t("兑换")))])],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"u-cny"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("余额与人民币(单位分)为1:1，只能通过充值或玩家赠送获取"),placement:"top"}},[a("div",{staticClass:"u-credit-name"},[a("i",{staticClass:"el-icon-wallet"}),t._v(" "+t._s(t.$t("金箔")))])]),a("div",{staticClass:"u-credit-value"},[a("b",[t._v(t._s(t.asset.cny))])]),a("div",{staticClass:"u-credit-op"},[a("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/cny"}},[t._v(t._s(t.$t("兑现")))])],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"u-dot"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("积分可用于兑换限量纪念品、激活码等，通过发布作品或参与站内活动获取"),placement:"top"}},[a("div",{staticClass:"u-credit-name"},[a("i",{staticClass:"el-icon-sugar"}),t._v(" "+t._s(t.$t("银铛")))])]),a("div",{staticClass:"u-credit-value"},[a("b",[t._v(t._s(t.asset.points))])]),a("div",{staticClass:"u-credit-op"},[a("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/points"}},[t._v(t._s(t.$t("记录")))]),a("a",{staticClass:"el-button el-button--primary el-button--mini",attrs:{href:"/vip/mall",target:"_blank"}},[t._v(t._s(t.$t("兑换")))])],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"u-packet"},[a("div",{staticClass:"u-credit-name"},[a("i",{staticClass:"el-icon-bank-card"}),t._v(" "+t._s(t.$t("卡密")))]),t.asset.ext_info?a("div",{staticClass:"u-credit-value"},[a("b",[t._v(t._s(Number(t.asset.ext_info.keycode||0)+Number(t.asset.ext_info.sn||0)))])]):t._e(),a("div",{staticClass:"u-credit-op"},[a("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/card"}},[t._v(t._s(t.$t("查看")))])],1)])])],1)],1),a("div",{staticClass:"m-index-asset-logs"},[a("h2",{staticClass:"u-title"},[a("i",{staticClass:"el-icon-bell"}),t._v(" "+t._s(t.$t("资产动态"))+" "),a("div",{staticClass:"u-dates"},[a("i",{staticClass:"el-icon-date"}),a("el-radio-group",{model:{value:t.date,callback:function(a){t.date=a},expression:"date"}},t._l(t.dates,(function(e,s){return a("el-radio",{key:s,attrs:{label:e.value}},[t._v(t._s(e.label))])})),1)],1)]),t.asset_logs&&t.asset_logs.length?a("ul",{staticClass:"u-list"},t._l(t.asset_logs,(function(e,s){return a("li",{key:s,staticClass:"u-item"},[a("i",{class:t.showAssetIcon(e.type)}),a("span",{staticClass:"u-type"},[t._v(t._s(t.showAssetType(e.type)))]),a("span",{staticClass:"u-div"},[t._v("／")]),"points"==e.type?a("span",{staticClass:"u-boxcoin"},[a("span",{staticClass:"u-boxcoin-type"},[t._v(t._s(e.data.remark))]),a("b",{class:t.showBoxcoinCls(e.data)},[a("span",[t._v(t._s(t.showBoxcoinOp(e.data)))]),t._v(" "+t._s(t.countBoxCoin(e.data))+" ")]),e.data.post_type&&e.data.article_id?a("a",{staticClass:"u-link",attrs:{href:t.getPostLink(e.data.post_type,e.data.article_id)}},[a("i",{staticClass:"el-icon-link"}),t._v(t._s(t.$t("查看详情")))]):t._e()]):t._e(),"boxcoin"==e.type?a("span",{staticClass:"u-boxcoin"},[a("span",{staticClass:"u-boxcoin-type"},[t._v(t._s(t.showBoxcoinType(e.data)))]),a("b",{class:t.showBoxcoinCls(e.data)},[a("span",[t._v(t._s(t.showBoxcoinOp(e.data)))]),t._v(t._s(t.countBoxCoin(e.data))+" ")]),t._v(" , "),a("span",{staticClass:"u-boxcoin-remark"},[t._v(t._s(e.data.remark||"-"))]),e.data.post_type&&e.data.post_id?a("a",{staticClass:"u-link",attrs:{href:t.getPostLink(e.data.post_type,e.data.post_id)}},[a("i",{staticClass:"el-icon-link"}),t._v(t._s(t.$t("查看详情")))]):t._e()]):t._e(),"order"==e.type?a("span",{staticClass:"u-order"},[t._v(" 产品："+t._s(t.showProduct(e.data.product_id))+"， "+t._s(t.$t("金额"))+"：¥ "),a("b",[t._v(t._s(t.showPrice(e.data.total_fee)))]),t._v(" ， 状态："+t._s(t.showPayStatus(e.data.pay_status))+" ")]):t._e(),"redpack"==e.type?a("span",{staticClass:"u-redpack"},[t._v(" "+t._s(t.$t("金额"))+"：¥ "),a("b",[t._v(t._s(t.showPrice(e.data.money)))]),t._v(" ， "+t._s(t.$t("补充信息：")+(e.data.describe||"-"))+" ")]):t._e(),"cny"==e.type?a("span",{staticClass:"u-boxcoin"},[a("span",{staticClass:"u-boxcoin-type"},[t._v(t._s(t.showCNYType(e.data)))]),a("b",{class:t.showCNYCls(e.data)},[a("span",[t._v(t._s(t.showCNYOp(e.data)))]),t._v(t._s(e.data.money)+" ")]),t._v(" , "),a("span",{staticClass:"u-boxcoin-remark"},[t._v(t._s(e.data.remark||"-"))]),e.data.link_article_type&&e.data.link_article_id?a("a",{staticClass:"u-link",attrs:{href:t.getPostLink(e.data.link_article_type,e.data.link_article_id)}},[a("i",{staticClass:"el-icon-link"}),t._v(t._s(t.$t("查看详情")))]):t._e()]):t._e(),a("time",{staticClass:"u-time"},[t._v(t._s(t.showTime(e.created_at)))])])})),0):a("div",{staticClass:"u-null"},[a("i",{staticClass:"el-icon-warning-outline"}),t._v(" "+t._s(t.$t("当前时间范围内无记录")))])])])},i=[],n=e("2909"),r=e("3835"),o=(e("a4d3"),e("e01a"),e("99af"),e("d81d"),e("b680"),e("b64b"),e("65c2")),c=e("c9d2"),u=e("85e4"),l=e("8e44"),d=e("e4f1"),p=e("c1fb"),f=e("31e8"),_=e("0cd3"),v=e("0521"),m=e("c1df"),h=e.n(m),b=e("4208"),g=function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-medal"},t._l(t.medals,(function(e){return a("a",{key:e.id,staticClass:"u-medal",attrs:{href:t.medalLink(e),target:"_blank",title:e.medal_desc}},[a("img",{staticClass:"u-medal-img",attrs:{src:t.showIcon(e.medal)}})])})),0)},y=[],C={name:"author_medal",props:{medals:{type:Array,default:function(){return[]}},showIcon:{type:Function,default:function(){return!0}}},methods:{medalLink:function(t){return t.medal_url?"".concat(o["__Root"]).concat(t.medal_url):t.rank_id?Object(u["getMedalLink"])(t.rank_id,t.medal_type||"rank"):""}}},w=C,x=(e("08e1"),e("2877")),k=Object(x["a"])(w,g,y,!1,null,null,null),O=k.exports,j={components:{avatar:b["default"],medal:O},name:"index",props:[],data:function(){return{uid:c["a"].getInfo().uid,group:c["a"].getInfo().group,info:{uid:8,name:"匿名",user_avatar:"https://img.jx3box.com/image/common/avatar.png",user_avatar_frame:"default",bio:"-",sign:0},asset:{expire_date:"2022-03-07T00:00:00+08:00",total_day:395,was_vip:0,pro_expire_date:"2022-03-07T00:00:00+08:00",pro_total_day:366,was_pro:0,box_coin:0,red_packet:0,points:0,gift:0,cny:0},medals:[],asset_logs:[],asset_types:p,boxcoin_types:f,products:v["c"],pay_status:v["a"],pay_types:v["b"],date:h()().subtract(7,"days").format("YYYYMMDD")}},computed:{isVIP:function(){return c["a"]._isVIP(this.asset)||!1},isPRO:function(){return c["a"]._isPRO(this.asset)||!1},vipType:function(){return this.isPRO?"PRO":"PRE"},expire_date:function(){return this.isPRO?Object(d["a"])(this.asset.pro_expire_date):this.isVIP?Object(d["a"])(this.asset.expire_date):""},super_author_icon:function(){return o["__imgPath"]+"image/user/superauthor.svg"},dates:function(){return[{label:this.$t("今天"),value:h()().format("YYYYMMDD")},{label:this.$t("7天"),value:h()().subtract(7,"days").format("YYYYMMDD")},{label:this.$t("30天"),value:h()().subtract(30,"days").format("YYYYMMDD")}]},isSuperAuthor:function(){var t;return!(null===(t=this.info)||void 0===t||!t.sign)},level:function(){var t;return c["a"].getLevel((null===(t=this.info)||void 0===t?void 0:t.experience)||0)},levelProgress:function(){var t,a=Object(r["a"])(o["__userLevel"][this.level],2),e=(a[0],a[1]),s=this.level==this.maxLevel?100:((null===(t=this.info)||void 0===t?void 0:t.experience)/e*100).toFixed(0);return isNaN(s)?0:Number(s)},currentLevelMaxExp:function(){var t=Object(r["a"])(o["__userLevel"][this.level],2),a=(t[0],t[1]);return a},maxLevel:function(){var t,a=null===(t=Object.keys(o["__userLevel"]))||void 0===t?void 0:t.map(Number);return Math.max.apply(Math,Object(n["a"])(a))}},methods:{formatProgress:function(){var t;return"".concat((null===(t=this.info)||void 0===t?void 0:t.experience)||0," / ").concat(this.currentLevelMaxExp)},loadUserInfo:function(){var t=this;Object(l["b"])().then((function(a){a.data.data&&(t.info=a.data.data)}))},loadAsset:function(){var t=this;c["a"].getAsset().then((function(a){t.asset=a}))},loadMedals:function(){var t=this;this.uid&&Object(l["d"])(this.uid).then((function(a){t.medals=a.data.data||[]}))},loadFrames:function(){var t=this;getFrames().then((function(a){a.data&&(t.frames=a.data||[])}))},loadAssetLogs:function(){var t=this;Object(l["a"])(this.date).then((function(a){t.asset_logs=a.data.data.list||[]}))},init:function(){this.loadUserInfo(),this.loadAsset(),this.loadMedals(),this.loadAssetLogs()},getPostLink:function(t,a){return"mall_order"==t?"/vip/mall/".concat(a):Object(u["getLink"])(t,a)},showMedalIcon:function(t){return o["__imgPath"]+"image/medals/user/"+t+".gif"},showBoxcoinType:function(t){return 9==t.action_type?t.operate_user_id==this.uid?"作品付费":"作品收入":f[t.action_type]||t.action_type},countBoxCoin:function(t){if(!t.ext_take_off_count)return t.count;var a=1;return t.user_id==this.uid?a=t.action_type>0?1:-1:t.operate_user_id==this.uid&&(a=t.action_type>0?-1:1),Math.abs(t.count+~~t.ext_take_off_count+~~t.ext2_take_off_count)*a},showBoxcoinOp:function(t){var a=this.countBoxCoin(t);return a>=0?"+":""},showBoxcoinCls:function(t){var a=this.countBoxCoin(t);return 9==t.action_type?t.operate_user_id==this.uid&&"isNegative":("-2"==t.action_type||a<0)&&"isNegative"},showCNYType:function(t){return"-2"==t.action_type?t.pay_user_id==this.uid?"金箔消费":"金箔收入":_[t.action_type]||t.description||t.action_type},showCNYOp:function(t){return"-2"==t.action_type||"-3"==t.action_type?t.pay_user_id==this.uid?"-":"+":t.money>=0?"+":""},showCNYCls:function(t){return"-2"==t.action_type?t.pay_user_id==this.uid&&"isNegative":t.money<0&&"isNegative"},showGroupName:function(t){return t?o["__userGroup"][t]:"游客"},formatCredit:function(t){return t?(t/100).toFixed(2):"0.00"},showAssetType:function(t){var a;return(null===(a=p[t])||void 0===a?void 0:a["label"])||t},showAssetIcon:function(t){var a;return(null===(a=p[t])||void 0===a?void 0:a["icon"])||"el-icon-box"},showProduct:function(t){return v["c"][t]},showPayStatus:function(t){return v["a"][t]},showPrice:function(t){return t?(t/100).toFixed(2):"0.00"},showTime:function(t){return h()(t).format("YYYY-MM-DD HH:mm:ss")}},mounted:function(){this.init()},watch:{date:function(){this.loadAssetLogs()}}},P=j,$=(e("2264"),Object(x["a"])(P,s,i,!1,null,null,null));a["default"]=$.exports},2264:function(t,a,e){"use strict";e("b284")},"31e8":function(t){t.exports=JSON.parse('{"1":"品鉴评分","2":"用户打赏","3":"盒币充值","4":"盒币退回","5":"系统奖励","6":"打赏退回","7":"系统冲正","9":"付费作品","10":"商城退款","-1":"撤销评分","-2":"盒币兑换","-7":"系统冲正","-8":"过期失效","-10":"商城兑换"}')},3835:function(t,a,e){"use strict";function s(t){if(Array.isArray(t))return t}e.d(a,"a",(function(){return o}));e("a4d3"),e("e01a"),e("d28b"),e("14d9"),e("d3b7"),e("3ca3"),e("ddb0");function i(t,a){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var s,i,n,r,o=[],c=!0,u=!1;try{if(n=(e=e.call(t)).next,0===a){if(Object(e)!==e)return;c=!1}else for(;!(c=(s=n.call(e)).done)&&(o.push(s.value),o.length!==a);c=!0);}catch(t){u=!0,i=t}finally{try{if(!c&&null!=e["return"]&&(r=e["return"](),Object(r)!==r))return}finally{if(u)throw i}}return o}}var n=e("06c5");e("d9e2");function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,a){return s(t)||i(t,a)||Object(n["a"])(t,a)||r()}},4208:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("uc",{staticClass:"m-dashboard-avatar"},[a("div",{staticClass:"m-profile-avatar"},[a("div",{staticClass:"m-profile-avatar-primary"},[a("div",{staticClass:"u-avatar"},[a("img",{staticClass:"u-avatar u-avatar-l",attrs:{src:t._f("showAvatar")(t.avatar)}})]),a("el-upload",{staticClass:"u-upload",attrs:{drag:"",accept:"image/png, image/gif, image/jpeg","on-change":t.upload,action:"upload/avatar","auto-upload":!1}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v(" "+t._s(t.$t("将文件拖到此处，或"))+" "),a("em",[t._v(t._s(t.$t("点击上传")))]),a("br"),a("span",{staticClass:"u-tip"},[t._v(t._s(t.$t("只能上传jpg/png/gif文件")))])])]),a("p",{staticClass:"u-btng"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v(t._s(t.$t("确认")))]),a("el-button",{on:{click:t.reset}},[t._v(t._s(t.$t("重置")))])],1)],1)])])},i=[],n=(e("99af"),e("b547")),r=e("46e8"),o=(e("aa38"),e("c9d2")),c=e("85e4"),u=e("1645"),l=e("65c2"),d=(e("2ef0"),{name:"avatar",props:[],data:function(){return{bak:"",avatar:"",frame:"",isVIP:!1,uid:o["a"].getInfo().uid,frames:u,tabActivate:"0",decorationJson:{},decoration:[],decorationActivate:null,originalActivateName:null,selectAll:[],noDecoration:!1}},computed:{data:function(){return{user_avatar:this.avatar}}},methods:{upload:function(t,a){var e=this,s=new FormData,i=t.raw;s.append("avatar",i),Object(r["m"])(s).then((function(t){e.$message({message:e.$t("上传成功"),type:"success"}),e.avatar=t.data.data[0]}))},reset:function(){this.avatar=this.bak},submit:function(){var t=this;Object(r["j"])(this.data).then((function(a){o["a"].refresh("avatar",t.avatar),t.$message({message:t.$t("头像更新成功"),type:"success"})}))},showFrame:function(t){return l["__imgPath"]+"avatar/images/".concat(t,"/").concat(t,".svg")},init:function(){var t=this;this.avatar=this.bak=o["a"].getInfo().avatar_origin,Object(r["f"])(this.uid).then((function(a){t.frame=a.data.data.user_avatar_frame||""}))}},filters:{showAvatar:function(t){return Object(c["showAvatar"])(t,480,!1)},showSmallAvatar:function(t){return Object(c["showAvatar"])(t,136,!1)}},created:function(){this.init()},components:{uc:n["a"]}}),p=d,f=(e("c1d3"),e("2877")),_=Object(f["a"])(p,s,i,!1,null,null,null);a["default"]=_.exports},"46e8":function(t,a,e){"use strict";e.d(a,"l",(function(){return u})),e.d(a,"e",(function(){return c})),e.d(a,"j",(function(){return l})),e.d(a,"k",(function(){return _})),e.d(a,"h",(function(){return b})),e.d(a,"a",(function(){return m})),e.d(a,"b",(function(){return v})),e.d(a,"g",(function(){return h})),e.d(a,"i",(function(){return y})),e.d(a,"c",(function(){return g})),e.d(a,"m",(function(){return d})),e.d(a,"d",(function(){return p})),e.d(a,"f",(function(){return f}));var s=e("41cb"),i=e("bc3a"),n=e.n(i),r=e("65c2"),o=Object(s["a"])("server",{proxy:!1});function c(){return Object(s["b"])().get("/api/cms/user/my/profile")}function u(t){return Object(s["b"])().put("/api/cms/user/my/profile",t)}function l(t){return Object(s["b"])().put("/api/cms/user/my/avatar",t)}function d(t){return Object(s["b"])().post("/api/cms/upload/avatar",t)}function p(){var t=r["__imgPath"]+"avatar/index.json";return n.a.get(t)}function f(t){return Object(s["b"])().get("/api/cms/user/".concat(t,"/info"),{params:{__no_cache:1}})}function _(t){return o.post("profile/password",t)}function v(){return o.get("profile/email/check")}function m(t){return o.get("profile/email/available",{params:{user_email:t}})}function h(t){return o.post("profile/email/bind",t)}function b(){return o.post("profile/email/verify")}function g(){return Object(s["b"])().get("/api/cms/account/oauth/status")}function y(t){return Object(s["b"])({popType:"alert"}).delete("/api/cms/account/oauth/unbind/".concat(t))}},a7d5:function(t,a,e){},aa38:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"h",(function(){return c})),e.d(a,"c",(function(){return u})),e.d(a,"d",(function(){return l})),e.d(a,"g",(function(){return d})),e.d(a,"j",(function(){return p})),e.d(a,"e",(function(){return f})),e.d(a,"f",(function(){return _})),e.d(a,"i",(function(){return v})),e.d(a,"a",(function(){return m}));e("99af");var s=e("41cb"),i=e("bc3a"),n=e.n(i),r=e("65c2");function o(t){return Object(s["b"])().get("/api/cms/user/decoration",{params:t})}function c(t){return Object(s["b"])().post("/api/cms/user/decoration",t)}function u(){var t=r["__imgPath"]+"decoration/index.json?".concat(Date.now(),"}");return n.a.get(t)}function l(){return n.a.get("".concat(r["__dataPath"],"emotion/output/catalog.json?").concat(Date.now()))}function d(t,a){return Object(s["b"])().post("/api/cms/user/decoration/check-suit/".concat(t,"/").concat(a,"/for/avatar"))}function p(t){return Object(s["b"])().put("/api/cms/user/my/avatar-frame",t)}function f(){return Object(s["b"])().get("/api/cms/user/config/honor")}function _(t){return Object(s["c"])({mute:!0}).get("/api/next2/user/"+t+"/honors").then((function(t){return t.data.data}))}function v(t){return Object(s["b"])().put("/api/cms/user/honor/use/".concat(t))}function m(){return Object(s["b"])().delete("/api/cms/user/honor/use")}},b284:function(t,a,e){},c1d3:function(t,a,e){"use strict";e("ff1e")},c1fb:function(t){t.exports=JSON.parse('{"points":{"label":"积分变动","icon":"el-icon-sugar"},"boxcoin":{"label":"盒币变动","icon":"el-icon-coin"},"redpack":{"label":"红包金额","icon":"el-icon-wallet"},"order":{"label":"订单信息","icon":"el-icon-present"},"cny":{"label":"金箔变动","icon":"el-icon-coin"}}')},ff1e:function(t,a,e){}}]);
//# sourceMappingURL=chunk-64d1b738.01a582f4.js.map