(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03d69c8e"],{"20bf":function(e,t,a){},a15b:function(e,t,a){"use strict";var o=a("23e7"),l=a("e330"),n=a("44ad"),i=a("fc6a"),r=a("a640"),c=l([].join),s=n!==Object,u=s||!r("join",",");o({target:"Array",proto:!0,forced:u},{join:function(e){return c(i(this),void 0===e?",":e)}})},c5dd:function(e,t,a){"use strict";a("20bf")},d427:function(e,t,a){"use strict";var o=a("ade3"),l=(a("99af"),a("4de4"),a("b0c0"),a("d3b7"),a("9911"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"pvx-search-wrapper"},[t("div",{staticClass:"search-group"},[e._t("default"),e._l(e.items,(function(a){return t("div",{key:a.key,staticClass:"search-item",class:{"type-list":"radio"===a.type,"filter-wrap":"filter"===a.type,"select-wrap":"select"===a.type,"input-wrap":!a.type,"select-active-wrap":"select"===a.type&&a.showActive}},["radio"===a.type?[t("el-radio-group",{model:{value:e.formData[a.key],callback:function(t){e.$set(e.formData,a.key,t)},expression:"formData[item.key]"}},e._l(a.options.filter((function(e){return!e.link})),(function(o){return t("el-radio-button",{key:o.type,staticClass:"type-item",class:{active:o.type===e.formData[a.type]},attrs:{label:o.type}},[e._v(e._s(o.name))])})),1),a.options.filter((function(e){return e.link})).length?e._l(a.options.filter((function(e){return e.link})),(function(a){return t("a",{key:a.type,staticClass:"type-item",attrs:{href:a.link,target:"blank"}},[e._v(e._s(a.name))])})):e._e()]:e._e(),"filter"===a.type&&a.options.length?[t("el-popover",{ref:"popover",refInFor:!0,attrs:{placement:e.isPhone()?"right":"bottom",width:!e.isPhone()&&420,trigger:"click"},model:{value:e.filterValue,callback:function(t){e.filterValue=t},expression:"filterValue"}},[t("div",{staticClass:"filter-content"},[e._l(a.options,(function(a){return t("div",{key:a.key,staticClass:"filter-item"},["select"===a.type?t("el-select",{staticClass:"select-wrapper",staticStyle:{width:"100%"},attrs:{id:a.remote,multiple:a.multiple,"collapse-tags":a.multiple,clearable:"",filterable:a.filterable,placeholder:"请".concat(a.remote?"输入":"选择").concat(a.name),remote:Boolean(a.remote),"remote-method":e.remoteMethod,loading:e.selectLoading===a.remote,"default-first-option":!0},on:{focus:e.selectFocus},model:{value:e.formData[a.key],callback:function(t){e.$set(e.formData,a.key,t)},expression:"formData[fItem.key]"}},e._l((a.remote,a.options),(function(e){return t("el-option",{key:e.value,attrs:{label:a.showValue?e.label+"("+e.value+")":e.label,value:e.value}})})),1):e._e(),"checkbox"===a.type?t("div",{staticClass:"check-box-wrapper"},[t("div",{staticClass:"name"},[e._v(e._s(a.name))]),t("el-checkbox-group",{on:{change:function(t){return e.checkboxChange(a.key)}},model:{value:e.checkboxData[a.key],callback:function(t){e.$set(e.checkboxData,a.key,t)},expression:"checkboxData[fItem.key]"}},e._l(a.options,(function(a){return t("el-checkbox-button",{key:a.value,attrs:{label:a.value,"custom-label":a.label},nativeOn:{mouseenter:function(t){return e.labelSet(t)},mouseleave:function(t){return e.labelRemove(t)}}},[e._v(" "+e._s(e.customLabel===a.label?e.customLabel:a.label.indexOf("·")>-1?a.label.split("·")[1]:a.label)+" ")])})),1)],1):e._e(),"radio"===a.type?t("div",{staticClass:"check-box-wrapper"},[t("div",{staticClass:"name"},[e._v(e._s(a.name))]),t("el-radio-group",{model:{value:e.formData[a.key],callback:function(t){e.$set(e.formData,a.key,t)},expression:"formData[fItem.key]"}},e._l(a.options,(function(o){return t("el-radio-button",{key:o.type,staticClass:"type-item",class:{active:o.value===e.formData[a.key]},attrs:{label:o.key}},[e._v(e._s(o.value))])})),1)],1):e._e()],1)})),a.options.length?t("el-row",[t("el-col",{attrs:{offset:20,span:4}},[t("el-button",{attrs:{size:"mini",type:"info",plain:""},on:{click:e.reset}},[e._v("重置")])],1)],1):e._e()],2),t("div",{staticClass:"filter-img",class:e.filterValue&&"active",attrs:{slot:"reference"},slot:"reference"},[t("svg",{attrs:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg","svg-inline":""},"fill","#949494"),"role","presentation"),"focusable","false"),"tabindex","-1")},[t("rect",{attrs:{width:"40",height:"40",rx:"20",fill:"transparent"}}),t("path",{attrs:{d:"M12.25 13.61C14.27 16.2 18 21 18 21v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39a.998.998 0 00-.79-1.61H13.04c-.83 0-1.3.95-.79 1.61z",fill:"tranparent"}})])])])]:e._e(),"select"===a.type&&a.options.length?[a.showLabel?t("label",[e._v(e._s(a.name))]):e._e(),t("el-select",{staticClass:"select-wrapper",style:!a.showLabel&&"width: 100%",attrs:{id:a.remote,multiple:a.multiple,"collapse-tags":a.multiple,clearable:"",filterable:a.filterable,placeholder:a.noPlaceholder?"请选择":"请".concat(a.remote?"输入":"选择").concat(a.name),remote:Boolean(a.remote),"remote-method":e.remoteMethod,loading:e.selectLoading===a.remote,"default-first-option":!0},on:{focus:e.selectFocus},model:{value:e.formData[a.key],callback:function(t){e.$set(e.formData,a.key,t)},expression:"formData[item.key]"}},e._l((a.remote,a.options),(function(e){return t("el-option",{key:e.value,attrs:{label:a.showValue?e.label+"("+e.value+")":e.label,value:e.value}})})),1)]:e._e(),a.type?e._e():[t("el-input",{staticClass:"search-input",attrs:{placeholder:"输入".concat(a.name,"搜索"),clearable:"","suffix-icon":"el-icon-search"},model:{value:e.formData[a.key],callback:function(t){e.$set(e.formData,a.key,t)},expression:"formData[item.key]"}})]],2)}))],2),e._t("extra")],2)}),n=[],i=a("c7eb"),r=a("1da1"),c=a("5530"),s=(a("7db0"),a("a15b"),a("14d9"),a("159b"),a("ed08")),u=a("2ef0"),f={name:"PvxSearch",props:{items:{type:Array,required:!0},initValue:{type:Object,default:function(){}},active:{type:Boolean,default:!1}},data:function(){return{filterValue:!1,formData:{},currentMethod:"",currentOptions:[],selectLoading:"",checkboxData:{},customLabel:""}},watch:{formData:{deep:!0,handler:function(e){this.$emit("search",e)}},initValue:{immediate:!0,deep:!0,handler:function(e){var t=this,a=this.items,o={};a.forEach((function(a){if("filter"!==a.type)o[a.key]="";else{var l=a.options;l.forEach((function(a){o[a.key]="";var l=e&&e[a.key]?[e[a.key]]:[];t.$set(t.checkboxData,a.key,l)}))}})),this.formData=Object(c["a"])(Object(c["a"])({},o),e)}}},methods:{labelSet:function(e){var t=e.target.getAttribute("custom-label");this.customLabel=t},labelRemove:function(e){this.customLabel=""},isPhone:s["b"],selectFocus:function(e){this.currentMethod=e.target.id},checkboxChange:function(e){var t=this.checkboxData[e];this.formData[e]=t.join(",")},reset:function(){var e,t=this,a=(null===(e=this.items.find((function(e){return"filter"===e.type})))||void 0===e?void 0:e.options)||[],o=a.filter((function(e){return"radio"===e.type}));for(var l in o.forEach((function(e){t.formData[e.key]=""})),this.checkboxData)this.checkboxData[l]=[];var n=Object(u["cloneDeep"])(this.formData);this.formData=n,this.filterValue=!1,this.$router.push({query:""})},remoteMethod:function(e){var t=this;return Object(r["a"])(Object(i["a"])().mark((function a(){var o;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t.currentMethod,t.selectLoading=o,a.next=4,t.$parent[o]({name:e}).then((function(){t.selectLoading=""}));case 4:case"end":return a.stop()}}),a)})))()}},mounted:function(){this.filterValue=this.active,this.active&&"furniture"===this.$route.name&&(document.getElementsByClassName("type-list")[0].style.width="1080px")}},p=f,m=(a("c5dd"),a("2877")),d=Object(m["a"])(p,l,n,!1,null,null,null);t["a"]=d.exports},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l}));a("caad"),a("d3b7"),a("ac1f"),a("25f0"),a("2532"),a("466d");function o(e){if("[object Object]"===Object.prototype.toString.call(e)){for(var t in e)[void 0,null,""].includes(e[t])&&delete e[t];return e}return e}function l(){var e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return null!==e}}}]);
//# sourceMappingURL=chunk-03d69c8e.030c0db3.js.map