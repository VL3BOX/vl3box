(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2b5c0c4"],{4007:function(t,e,i){},"46e8":function(t,e,i){"use strict";i.d(e,"l",(function(){return o})),i.d(e,"e",(function(){return c})),i.d(e,"j",(function(){return u})),i.d(e,"k",(function(){return p})),i.d(e,"h",(function(){return _})),i.d(e,"a",(function(){return f})),i.d(e,"b",(function(){return v})),i.d(e,"g",(function(){return b})),i.d(e,"i",(function(){return w})),i.d(e,"c",(function(){return g})),i.d(e,"m",(function(){return h})),i.d(e,"d",(function(){return d})),i.d(e,"f",(function(){return m}));var s=i("41cb"),a=i("bc3a"),r=i.n(a),n=i("65c2"),l=Object(s["a"])("server",{proxy:!1});function c(){return Object(s["b"])().get("/api/cms/user/my/profile")}function o(t){return Object(s["b"])().put("/api/cms/user/my/profile",t)}function u(t){return Object(s["b"])().put("/api/cms/user/my/avatar",t)}function h(t){return Object(s["b"])().post("/api/cms/upload/avatar",t)}function d(){var t=n["__imgPath"]+"avatar/index.json";return r.a.get(t)}function m(t){return Object(s["b"])().get("/api/cms/user/".concat(t,"/info"),{params:{__no_cache:1}})}function p(t){return l.post("profile/password",t)}function v(){return l.get("profile/email/check")}function f(t){return l.get("profile/email/available",{params:{user_email:t}})}function b(t){return l.post("profile/email/bind",t)}function _(){return l.post("profile/email/verify")}function g(){return Object(s["b"])().get("/api/cms/account/oauth/status")}function w(t){return Object(s["b"])({popType:"alert"}).delete("/api/cms/account/oauth/unbind/".concat(t))}},8335:function(t,e,i){"use strict";i("4007")},9945:function(t,e,i){"use strict";function s(t){var e=Object.prototype.toString.call(t);return e.match(/\[object (.*?)\]/)[1].toLowerCase()}Object.defineProperty(e,"__esModule",{value:!0});class a{constructor(t){if("string"!==s(t))throw new Error("[Sterilizer::init] params should be string");this._symbols={"`":"`","~":"~","!":"!","@":"@","#":"#",$:"\\$","%":"%","^":"\\^","&":"&","*":"\\*","-":"\\-",_:"_","=":"=","+":"+","(":"\\(",")":"\\)","[":"\\[","]":"\\]","{":"\\{","}":"\\}","|":"\\|","\\":"\\\\","/":"/","?":"\\?",":":":",";":";","'":"'",'"':'"',">":">","<":"<",",":",",".":"\\."},this.symbols=Object.keys(this._symbols),this.regs=Object.values(this._symbols),this.str=t,this._str=t}toString(){return this._str}_detected(t){let e=s(t),i=["string","array","set"];if(!i.includes(e))throw new Error("[Sterilizer::remove] params should be string|array|set");return t}_sterilize(t){t=[...t].join("");let e=new RegExp(`[${t}]`,"gm");return this._str=this._str.replace(e,""),this}kill(t){let e=null;if(void 0==t)e=new Set(this.regs);else{this._detected(t),e=new Set;let i=new Set(t);for(let t of i)this.symbols.includes(t)&&e.add(this._symbols[t])}return this._sterilize(e)}live(t){this._detected(t);let e=new Set(this.regs);for(let i of t)this.symbols.includes(i)&&e.delete(this._symbols[i]);return this._sterilize(e)}safe(){return this.kill(["&","<",">",'"',"'","+",":","/","?","=","#","%"])}removeHSC(){return this.kill(["&","<",">",'"',"'"])}removeURL(){return this.kill(["+",":","/","?","=","&","#","%"])}removeSpace(){return this._str=this._str.replace(/\s/gm,""),this}remove(t,e){let i=new RegExp(""+t,"gm");return e=void 0!==e?e:"",this._str=this._str.replace(i,e),this}removeHTMLtag(){return this._str=this._str.replace(/<[^>]+>/gm,""),this}isDirty(t){return t?this.str.includes(t):this.symbols.some(t=>this.str.includes(t))}}function r(t){return new a(t)}class n{constructor(t,e){this.val=t,this.opt=e||{}}check(){try{if(1==this.opt.isOptional&&this.isOptional())return!0;for(let t in this.opt)if("isOptional"!=t&&!this[t](this.opt[t]))return!1;return!0}catch(t){console.error(t)}}isOptional(){let t=["",void 0,null];return!!t.includes(this.val)}is(t){if(!t instanceof RegExp)throw new Error("[Validator::is] param should be a RegExp");return t.test(this.val)}not(t){return!this.is(t)}len(t){let e=this.val.length;if("array"==s(t))return e>=t[0]&&e<=t[1];if("string"==s(t)||"number"==s(t))return e==t;throw new Error("[Validator::len] param should be array|string|number")}isIn(t){if("array"!=s(t))throw new Error("[Validator::isIn] param should be an array");return!!t.includes(this.val)}notIn(t){return!this.isIn(t)}isAlpha(t){return!t||/^[A-Z]+$/i.test(this.val)}isAlphanumeric(t){return!t||/^[A-Z0-9]+$/i.test(this.val)}isNumeric(t){return!t||/^[0-9]+$/.test(this.val)}isInt(t){return!t||/^(?:[-+]?(?:0|[1-9][0-9]*))$/.test(this.val)}isFloat(t){return!t||/^[-+]?[0-9]*\.?[0-9]+$/.test(this.val)}max(t){return this.val<=t}min(t){return this.val>=t}isChinese(t){return!t||/^[\u4e00-\u9fa5]+$/.test(this.val)}isIdentityCard(t){return!t||/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(this.val)}isMobilePhone(t){return!t||/^1[3456789]\d{9}$/.test(this.val)}isEmail(t){return!t||/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(this.val)}notEmpty(t){return!t||!/\s/gm.test(this.val)}}function l(t,e){const i=new n(t,e);return i.check()}e.Sterilizer=a,e.Validator=n,e.sterilizer=r,e.validator=l},b622a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("uc",{staticClass:"m-dashboard-email"},[e("div",{staticClass:"m-profile-email"},[e("svg",{class:"u-pic",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 504.124 504.124","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{d:"M0 200.862L252.062 51.2l252.062 149.662v220.554H0V200.862z",fill:"#d07c40"}}),e("path",{attrs:{d:"M55.138 11.815h393.846c8.665 0 15.754 7.089 15.754 15.754v275.692c0 8.665-7.089 15.754-15.754 15.754H55.138c-8.665 0-15.754-7.089-15.754-15.754V27.569c.001-8.664 7.09-15.754 15.754-15.754z",fill:"#efefef"}}),e("path",{attrs:{d:"M415.902 43.323l25.206-31.508h7.877c8.665 0 15.754 7.089 15.754 15.754v15.754h-48.837zm-204.8 0l25.206-31.508h55.138L266.24 43.323h-55.138zm-171.717 0V27.569c0-8.665 7.089-15.754 15.754-15.754h39.385L69.317 43.323H39.385z",fill:"#26a6d1"}}),e("path",{attrs:{d:"M504.123 468.677c0 12.997-10.634 23.631-23.631 23.631H23.631C10.634 492.309 0 481.674 0 468.677V200.862l252.062 110.277 252.062-110.277v267.815h-.001z",fill:"#efc75e"}}),e("path",{attrs:{d:"M504.123 468.677c0 12.997-10.634 23.631-23.631 23.631H23.631C10.634 492.309 0 481.674 0 468.677v-47.262l504.123-220.554v267.816z",fill:"#e8c15b"}}),e("path",{attrs:{d:"M160.295 151.631l3.151 16.542-25.206-39.385-35.446 55.138c-.394 5.12 22.449 9.058 50.806 9.058s51.2-3.938 51.2-9.058l-31.114-46.08-13.391 13.785zm3.151-21.662c5.514 0 9.846-4.332 9.846-9.846s-4.332-9.846-9.846-9.846-9.846 4.332-9.846 9.846 4.332 9.846 9.846 9.846zm80.739-3.938h157.538c4.332 0 7.877-3.545 7.877-7.877s-3.545-7.877-7.877-7.877H244.185c-4.332 0-7.877 3.545-7.877 7.877s3.544 7.877 7.877 7.877zm157.538 15.754H244.185c-4.332 0-7.877 3.545-7.877 7.877s3.545 7.877 7.877 7.877h157.538c4.332 0 7.877-3.545 7.877-7.877 0-4.333-3.545-7.877-7.877-7.877zm-39.385 31.507H244.185c-4.332 0-7.877 3.545-7.877 7.877s3.545 7.877 7.877 7.877h118.154c4.332 0 7.877-3.545 7.877-7.877-.001-4.332-3.545-7.877-7.878-7.877z",fill:"#d6d9db"}}),e("path",{attrs:{d:"M313.502 43.323l25.206-31.508h55.138L368.64 43.323h-55.138zm-204.8 0l25.206-31.508h55.138L163.84 43.323h-55.138z",fill:"#e2574c"}})]),1==t.status?e("div",{staticClass:"u-done"},[1==t.verified?[e("h1",{staticClass:"u-title"},[t._v("已绑定邮箱")]),e("p",{staticClass:"u-address"},[t._v(t._s(t.address))]),e("el-alert",{staticClass:"u-tip",attrs:{title:"已验证邮箱",type:"success",description:"仅绑定邮箱用户支持邮件订阅通知等功能","show-icon":"",closable:!1}}),e("div",{staticClass:"u-btngroup"},[e("el-button",{staticClass:"u-button",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.changeEmail}},[t._v("修改邮箱")])],1)]:t._e(),0==t.verified?[e("h1",{staticClass:"u-title"},[t._v("未验证邮箱")]),e("p",{staticClass:"u-address"},[t._v(t._s(t.address))]),e("el-alert",{staticClass:"u-tip",attrs:{title:"未验证邮箱",type:"warning",description:"请尽快进行邮箱验证,否则您的账号将面临风险与权限受阻","show-icon":"",closable:!1}}),e("div",{staticClass:"u-btngroup"},[e("el-button",{staticClass:"u-button",attrs:{type:"primary",icon:"el-icon-s-promotion"},on:{click:t.verify}},[t._v("验证邮箱")]),e("el-button",{staticClass:"u-button",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.changeEmail}},[t._v("修改邮箱")])],1)]:t._e()],2):t._e(),0==t.status?e("div",{staticClass:"u-none"},[e("h1",{staticClass:"u-title"},[t._v(" "+t._s(t.changeEmailMode?"修改邮箱":"未绑定邮箱")+" ")]),e("div",{staticClass:"u-email"},[e("el-input",{staticClass:"u-text u-email",attrs:{placeholder:"邮箱地址",minlength:"3",maxlength:"50"},on:{change:t.checkEmail},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}},[e("template",{slot:"prepend"},[e("svg",{staticClass:"octicon octicon-mail",class:"i-mail",attrs:{viewBox:"0 0 14 16",width:"14",height:"16","aria-hidden":"true","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"}})])])],2),e("div",{staticClass:"u-error"},[e("el-alert",{directives:[{name:"show",rawName:"v-show",value:0==t.email_validate,expression:"email_validate == false"}],attrs:{title:t.email_validate_tip,type:"error","show-icon":"",closable:!1}}),e("el-alert",{directives:[{name:"show",rawName:"v-show",value:0==t.email_available,expression:"email_available == false"}],attrs:{title:t.email_available_tip,type:"error","show-icon":"",closable:!1}})],1),e("i",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"el-icon-success el-icons-status"})],1),e("el-alert",{staticClass:"u-tip",attrs:{title:"请填写正确的邮箱地址",type:"warning",description:"绑定邮箱后将可以使用邮箱进行登录,当第三方登录出现异常时不会受影响","show-icon":"",closable:!1}}),e("div",{staticClass:"u-btngroup"},[e("el-button",{staticClass:"u-button",attrs:{type:"primary",disabled:!t.ready},on:{click:t.bind}},[t._v("绑定邮箱")])],1)],1):t._e()])])},a=[],r=i("b547"),n=i("9945"),l=i("c9d2"),c=i("46e8"),o={name:"email",props:[],data:function(){return{status:null,uid:l["a"].getInfo().uid,address:"",verified:null,email:"",email_validate:null,email_validate_tip:"邮箱格式不正确或长度超出限制",email_available:null,email_available_tip:"邮箱已被使用,请更换",changeEmailMode:!1}},computed:{ready:function(){return this.email_validate&&this.email_available}},methods:{verify:function(){var t=this;Object(c["h"])(this.uid).then((function(e){t.$message({message:"邮件已发送请查收",type:"success"})}))},checkEmail:function(){var t=this;if(""==this.email)return this.email_validate=null,void(this.email_available=null);var e=Object(n["validator"])(this.email,{isEmail:!0,len:[3,50]});this.email_validate=e,e&&Object(c["a"])(this.email).then((function(e){t.email_available=e.data.data}))},bind:function(){var t=this;this.ready?Object(c["g"])({uid:this.uid,email:this.email}).then((function(e){t.$alert("申请提交成功,请前往邮箱验证","消息",{confirmButtonText:"确定"}),t.status=!0,t.verified=!1,t.address=t.email})):this.$message.error("邮箱地址不合法")},changeEmail:function(){this.status=!1,this.changeEmailMode=!0}},mounted:function(){var t=this;this.uid=l["a"].getInfo().uid,Object(c["b"])().then((function(e){e.data.data.email?(t.status=!0,t.address=e.data.data.email,t.verified=!!parseInt(e.data.data.verified)):t.status=!1}))},components:{uc:r["a"]}},u=o,h=(i("8335"),i("2877")),d=Object(h["a"])(u,s,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-e2b5c0c4.25d85dc0.js.map