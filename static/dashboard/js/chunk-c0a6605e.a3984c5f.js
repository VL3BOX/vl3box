(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0a6605e"],{"0fa0":function(t){t.exports=JSON.parse("{}")},"31e8":function(t){t.exports=JSON.parse('{"1":"品鉴评分","2":"用户打赏","3":"盒币充值","4":"盒币退回","5":"系统奖励","6":"打赏退回","7":"系统冲正","9":"付费作品","10":"商城退款","-1":"撤销评分","-2":"盒币兑换","-7":"系统冲正","-8":"过期失效","-10":"商城兑换"}')},"46f4":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return r}));var i=a("41cb");function n(t){return Object(i["d"])().get("/api/my/boxcoin/cashout/history",{params:t})}function s(t){return Object(i["d"])().get("/api/my/boxcoin/bill",{params:t})}function o(t,e){return Object(i["d"])().post("/api/my/boxcoin/cashout",t,{params:e})}function l(){return Object(i["b"])().get("/api/cms/config",{params:{key:"boxcoin_cashout_forbid_date"}})}function r(){return Object(i["d"])().get("/api/my/boxcoin/overview")}},"511a":function(t,e,a){"use strict";a("f47e")},d15e:function(t){t.exports=JSON.parse('["电信一区","电信五区","电信八区","双线一区","双线二区","双线四区","缘起大区"]')},e963:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-credit m-boxcoin"},[e("h2",{staticClass:"u-title"},[e("i",{staticClass:"el-icon-coin"}),t._v(" "+t._s(t.$t("我的盒币")))]),e("div",{staticClass:"m-credit-total m-packet-total"},[t._v(" "+t._s(t.$t("余额 :"))+" "),e("b",{class:{hasLeft:t.hasLeft}},[t._v(t._s(t.money))]),e("span",{staticClass:"u-types"},[e("span",{staticClass:"u-type u-type-std"},[t._v(t._s(t.$t("重制："))),e("b",[t._v(t._s(t.total_std))])]),e("span",{staticClass:"u-type u-type-origin"},[t._v(t._s(t.$t("缘起："))),e("b",[t._v(t._s(t.total_origin))])]),e("span",{staticClass:"u-type u-type-all"},[t._v(t._s(t.$t("双端："))),e("b",[t._v(t._s(t.total_all))])])]),e("el-button",{staticClass:"u-btn",attrs:{type:"primary",size:"mini",disabled:!t.money},on:{click:t.togglePullBox}},[t._v(t._s(t.$t("兑换")))])],1),t.showPullBox?e("div",{staticClass:"m-credit-pull"},[t.breadcrumb?e("el-alert",{staticClass:"m-boxcoin-ac",attrs:{type:"error","show-icon":"",closable:!1,size:"mini"}},[t._t("title",(function(){return[e("div",{domProps:{innerHTML:t._s(t.breadcrumb)}})]}))],2):t._e(),e("el-alert",{staticClass:"m-boxcoin-tip",attrs:{title:t.$t("1盒币可兑换1通宝，不可折现"),type:"warning","show-icon":""}},[t._t("description",(function(){return[e("div",{staticClass:"u-tips",domProps:{innerHTML:t._s(t.tips)}})]}))],2),e("el-form",{staticClass:"m-boxcoin-form",attrs:{"label-position":"left","label-width":"80px"}},[e("el-form-item",{attrs:{label:t.$t("游戏大区")}},[e("el-select",{attrs:{placeholder:t.$t("请选择所在大区")},model:{value:t.pull.zone,callback:function(e){t.$set(t.pull,"zone",e)},expression:"pull.zone"}},t._l(t.zones,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),e("el-form-item",{attrs:{label:t.$t("游戏账号")}},[e("el-input",{attrs:{placeholder:t.$t("请务必填写正确的账号")},model:{value:t.pull.account,callback:function(e){t.$set(t.pull,"account",e)},expression:"pull.account"}})],1),e("el-form-item",{attrs:{label:t.$t("游戏账号")}},[e("el-input",{attrs:{placeholder:t.$t("请重新再次输入游戏账号")},model:{value:t.pull.accounts,callback:function(e){t.$set(t.pull,"accounts",e)},expression:"pull.accounts"}})],1),e("el-form-item",{attrs:{label:t.$t("兑换数目")}},[e("el-radio-group",{model:{value:t.pull.cash,callback:function(e){t.$set(t.pull,"cash",e)},expression:"pull.cash"}},["std"==t.client?e("el-radio",{attrs:{label:1500,border:"",disabled:!t.canSelect(1500)}},[t._v("1500"+t._s(t.$t("通宝")))]):t._e(),e("el-radio",{attrs:{label:3e3,border:"",disabled:!t.canSelect(3e3)}},[t._v("3000"+t._s(t.$t("通宝")))]),e("el-radio",{attrs:{label:5e3,border:"",disabled:!t.canSelect(5e3)}},[t._v("5000"+t._s(t.$t("通宝")))]),e("el-radio",{attrs:{label:1e4,border:"",disabled:!t.canSelect(1e4)}},[t._v("10000"+t._s(t.$t("通宝")))]),e("el-radio",{attrs:{label:5e4,border:"",disabled:!t.canSelect(5e4)}},[t._v("50000"+t._s(t.$t("通宝")))])],1)],1),e("el-form-item",{attrs:{label:t.$t("邮箱地址")}},[e("el-input",{attrs:{placeholder:t.$t("请务必填写正确的邮箱")},model:{value:t.pull.email,callback:function(e){t.$set(t.pull,"email",e)},expression:"pull.email"}})],1),e("el-form-item",{attrs:{label:""}},[e("el-button",{attrs:{type:"primary",disabled:!t.ready||t.lockStatus},on:{click:t.openConfirmBox}},[t._v(t._s(t.$t("提交申请")))]),t.isAllowDate?t._e():e("span",{staticClass:"u-tip"},[e("i",{staticClass:"el-icon-warning-outline"}),t._v(" "+t._s(t.$t("每月")+t.start_date)+"-"+t._s(t.end_date)+t._s(t.$t("日结算期间不能进行兑换申请"))+" ")])],1)],1)],1):t._e(),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-credit-table m-packet-table"},[e("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.changeType},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e("el-tab-pane",{attrs:{label:t.$t("盒币记录"),name:"in",lazy:""}},[t.list&&t.list.length?e("div",{staticClass:"m-packet-table"},[e("table",{staticClass:"m-boxcoin-in-list m-packet-in-list"},[e("tr",[e("th",[t._v(t._s(t.$t("类型")))]),e("th",[t._v(t._s(t.$t("数量")))]),e("th",[t._v(t._s(t.$t("源于作品")))]),e("th",[t._v(t._s(t.$t("备注")))]),e("th",[t._v(t._s(t.$t("时间")))])]),t._l(t.list,(function(a,i){return e("tr",{key:i},[e("td",[t._v(t._s(t.formatType(a.action_type)))]),e("td",{staticClass:"u-count",class:t.showBoxcoinCls(a)},[e("span",[t._v(t._s(t.showBoxcoinOp(a)))]),e("b",[t._v(t._s(t.countBoxCoin(a)))])]),e("td",[t.getPostLink(a)?e("a",{attrs:{href:t.getPostLink(a),target:"_blank"}},[e("i",{staticClass:"el-icon-link"}),t._v(" "+t._s(t.$t("点击查看"))+" ")]):e("span",[t._v("-")])]),e("td",[e("span",{attrs:{title:a.remark}},[t._v(t._s(t.formatRemark(a.remark)))])]),e("td",[t._v(t._s(t.formatDate(a.created_at)))])])}))],2)]):e("el-alert",{staticClass:"m-credit-null m-packet-null",attrs:{title:t.$t("没有找到相关条目"),type:"info",center:"","show-icon":""}}),e("el-pagination",{staticClass:"m-credit-pages m-packet-pages",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1),e("el-tab-pane",{attrs:{label:t.$t("兑换记录"),name:"out",lazy:""}},[t.list&&t.list.length?e("div",{staticClass:"m-packet-table"},[e("table",{staticClass:"m-boxcoin-out-list m-packet-in-list"},[e("tr",[e("th",[t._v(t._s(t.$t("数量")))]),e("th",[t._v(t._s(t.$t("大区")))]),e("th",[t._v(t._s(t.$t("账号")))]),e("th",[t._v(t._s(t.$t("邮箱")))]),e("th",[t._v(t._s(t.$t("处理状态")))]),e("th",[t._v(t._s(t.$t("备注")))]),e("th",[t._v(t._s(t.$t("申请时间")))])]),t._l(t.list,(function(a,i){return e("tr",{key:i},[e("td",[e("b",[t._v(t._s(a.cash)+t._s(t.$t("通宝")))])]),e("td",[t._v(t._s(a.zone))]),e("td",[t._v(t._s(a.account))]),e("td",[t._v(t._s(a.email))]),e("td",{class:t.statusClass(a)},[t._v(" "+t._s(t.formatHistoryStatus(a))+" ")]),e("td",[t._v(t._s(a.remark))]),e("td",[t._v(t._s(t.formatDate(a.created_at)))])])}))],2)]):e("el-alert",{staticClass:"m-credit-null m-packet-null",attrs:{title:t.$t("没有找到相关条目"),type:"info",center:"","show-icon":""}}),e("el-pagination",{staticClass:"m-credit-pages m-packet-pages",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1)],1)],1)])},n=[],s=(a("99af"),a("4de4"),a("caad"),a("14d9"),a("fb6a"),a("a9e3"),a("b64b"),a("d3b7"),a("2532"),a("2ca0"),a("c9d2")),o=a("85e4"),l=a("e4f1"),r=a("31e8"),c=a("d15e"),u=(a("0fa0"),a("46f4")),d=a("cc9a"),p=a("2ef0"),h={name:"Boxcoin",props:[],data:function(){return{pull:{zone:"",account:"",accounts:"",cash:"",email:""},showPullBox:!1,lockStatus:!1,formStatus:!1,loading:!1,tab:"in",list:[],page:1,per:10,total:1,types:r,dates:[],breadcrumb:"",overview:{all:0,std:0,origin:0},totalCoin:0,uid:s["a"].getInfo().uid,tips:"每个月6~31日开放兑换，1~5日关闭兑换渠道进行汇总。（即1月6日的兑换，和1月31日的兑换，同样在2月1~5日进行汇总）<br />\n                    重制（正式服）汇总后，通常21个工作日内发放奖励，即前一月的兑换，通常在后一个月的月底发放，如遇特殊原因可能会在某些月份锁定兑换。<br />\n                    重制（正式服）会直充到账号上，不会有官方短信/邮件提醒，在个人充值记录中也不可查到。<br />\n                    缘起（怀旧服）汇总后，通常赛季末一次性发放，其中赛季末未兑换部分将被清空重置。<br />\n                    缘起（怀旧服）通过一卡通发放，可在个人中心›我的卡密中查看，如使用的第三方登录还没有设置过密码的用户，需要在个人中心›资料设置›修改密码中设置一个密码。<br />\n\n                    发放后，将会有魔盒公告，请关注首页侧边栏站内动态。"}},computed:{params:function(){var t={pageIndex:this.page,pageSize:this.per};return t},client:function(){return this.$store.state.client},total_std:function(){return this.toPositiveNumber(this.overview.std)},total_origin:function(){return this.toPositiveNumber(this.overview.origin)},total_all:function(){return this.toPositiveNumber(this.overview.all)},money:{get:function(){return"std"==this.client?Math.min(this.totalCoin,Math.max(this.total_std,0)+Math.max(this.total_all,0)):Math.min(this.totalCoin,Math.max(this.total_origin,0)+Math.max(this.total_all,0))},set:function(t){return t}},hasLeft:function(){return this.money>0},min:function(){return"std"==this.client?1500:3e3},isAllowDate:function(){var t=(new Date).getDate();return!this.dates.includes(t)},start_date:function(){return this.dates[0]},end_date:function(){return this.dates[this.dates.length-1]},zones:function(){return"origin"==this.client?c.filter((function(t){return t.startsWith("缘起")})):c.filter((function(t){return!t.startsWith("缘起")}))},canCash:function(){return this.hasLeft&&this.isAllowDate&&this.money>=this.min},ready:function(){return this.canCash&&this.formStatus}},methods:{init:function(){var t=this;Object(u["c"])().then((function(e){t.dates=JSON.parse(e.data.data.val)})),this.loadAsset(),this.loadData(),this.loadAc(),this.loadOverview()},loadData:function(){var t=this;this.loading=!0;var e={in:u["d"],out:u["b"]};this.$router.push({query:{tab:this.tab,page:this.page}}),e[this.tab](this.params).then((function(e){t.list=e.data.data.list,t.total=e.data.data.page.total})).finally((function(){t.loading=!1}))},loadOverview:function(){var t=this;Object(u["e"])().then((function(e){t.overview=e.data.data}))},changeType:function(){this.page=1,this.loadData()},getPostLink:function(t){return Object(o["getLink"])(t.post_type_sub||t.post_type,t.article_id)},loadAsset:function(){var t=this;s["a"].getAsset().then((function(e){t.totalCoin=(null===e||void 0===e?void 0:e.box_coin)||0}))},togglePullBox:function(){this.showPullBox=!this.showPullBox},canSelect:function(t){return~~this.money>=~~t},checkForm:function(){for(var t in this.pull)if(!this.pull[t])return void(this.formStatus=!1);this.formStatus=!0},openConfirmBox:function(){var t=this;if(this.pull.account!==this.pull.accounts)return this.$alert("请确认游戏账号是否填写正确");this.$alert('<div class="m-boxcoin-msg">大区：<b>'.concat(this.pull.zone,"</b> <br/> 账号：<b>").concat(this.pull.account,"</b> <br/> 邮箱：<b>").concat(this.pull.email,"</b> <br/> 兑换：<b>").concat(this.pull.cash,"通宝</b></div>"),"确认信息",{confirmButtonText:"确定",dangerouslyUseHTMLString:!0,callback:function(e){if("confirm"==e){t.lockStatus=!0,t.loading=!0;var a=Object(p["omit"])(t.pull,["accounts"]);Object(u["a"])(Object.assign(a,{client:t.client}),{client:t.client}).then((function(e){t.$message({type:"success",message:"申请成功,请耐心等待结算"}),t.showPullBox=!1,t.money=t.money-t.pull.cash})).then((function(){t.loadData()})).finally((function(){t.lockStatus=!1,t.loading=!1}))}}})},loadAc:function(){var t=this;Object(d["b"])("dashboard-boxcoin").then((function(e){t.breadcrumb=e})),Object(d["b"])("boxcoin-tips").then((function(e){t.tips=e}))},formatDate:function(t){return Object(l["b"])(t)},formatType:function(t){return t&&r[t]||"未知"},formatRemark:function(t){return t?t.length>12?t.slice(0,12)+"...":t:"-"},formatHistoryStatus:function(t){var e=t.status,a=t.received_in_game;return 0==e?"待处理":2==e?"异常":1==e?1==a?"已完成":"审批中":void 0},statusClass:function(t){var e=t.status,a=t.received_in_game;return 0==e?"isProcessing":2==e?"isPending":1==e?1==a?"isFinished":"isProcessing":void 0},toPositiveNumber:function(t){return t>0?t:0},countBoxCoin:function(t){var e=1;return t.user_id==this.uid?e=t.action_type>0?1:-1:t.operate_user_id==this.uid&&(e=t.action_type>0?-1:1),Math.abs(t.count+~~t.ext_take_off_count+~~t.ext2_take_off_count)*e},showBoxcoinOp:function(t){var e=this.countBoxCoin(t);return e>=0?"+":""},showBoxcoinCls:function(t){var e=this.countBoxCoin(t);return 9==t.action_type?t.operate_user_id==this.uid&&"isNegative":("-2"==t.action_type||e<0)&&"isNegative"}},created:function(){this.tab=this.$route.query.tab||"in",this.page=Number(this.$route.query.page||1),this.init()},watch:{params:{deep:!0,handler:function(){this.loadData()}},pull:{deep:!0,handler:function(){this.checkForm()}}}},_=h,b=(a("511a"),a("2877")),f=Object(b["a"])(_,i,n,!1,null,null,null);e["default"]=f.exports},f47e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-c0a6605e.a3984c5f.js.map