(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bb1221a"],{"4e28":function(a,t,e){"use strict";e.r(t);e("b0c0");var n=function(){var a=this,t=a._self._c;return t("div",{staticClass:"m-wallpaper"},[t("el-tabs",{attrs:{type:"card"},model:{value:a.active,callback:function(t){a.active=t},expression:"active"}},a._l(a.wallpaper,(function(e){return t("el-tab-pane",{key:e.name,attrs:{name:e.name,label:e.label}},[t("div",{staticClass:"m-wallpaper-box"},a._l(a.getPreviewImgs(e),(function(n){return t("figure",{key:n.name,staticClass:"m-wallpaper-item"},[t("el-image",{attrs:{src:a.getThumbnail(n.url)}}),t("figcaption",{staticClass:"u-img-name"},[a._v(a._s(n.name))]),t("div",{staticClass:"u-sizes"},a._l(e.sizes,(function(r){return t("a",{key:r,staticClass:"u-size-item",attrs:{href:a.getImgUrl(e.name,r,n.name),target:"_blank",title:"点击查看原图"}},[a._v(a._s(a.format(r)))])})),0)],1)})),0),t("div",{staticClass:"m-design-author"},[t("b",[a._v("Designed By :")]),a.authors&&a.authors.length?t("div",{staticClass:"u-authors"},a._l(a.authors,(function(e,n){return t("a",{key:n,staticClass:"u-author",attrs:{target:"_blank",href:a.authorLink(e.ID)}},[t("img",{attrs:{src:a.showAvatar(e.user_avatar),alt:e.display_name}}),a._v(" "+a._s(e.display_name)+" ")])})),0):a._e()])])})),1)],1)},r=[],s=e("c7eb"),i=e("1da1"),l=(e("99af"),e("7db0"),e("a15b"),e("d81d"),e("d3b7"),e("ac1f"),e("5319"),e("e8fd")),c=e("85e4"),u=e("c402"),o=e("65c2"),d=e("0644"),m=e.n(d),p={name:"wallpaper",data:function(){return{wallpaper:m()(l),active:"",authors:[]}},computed:{},watch:{wallpaper:{deep:!0,immediate:!0,handler:function(){var a;this.active=null===(a=this.wallpaper[0])||void 0===a?void 0:a.name}},active:{immediate:!0,handler:function(a){a&&this.loadAuthors()}}},methods:{authorLink:c["authorLink"],showAvatar:c["showAvatar"],getThumbnail:function(a){return Object(c["getThumbnail"])(a,[360,202])},getImgUrl:function(a,t,e){return"".concat(o["__cdn"],"design/wallpaper/").concat(a,"/").concat(t,"/").concat(e,".jpg")},getPreviewImgs:function(a){var t,e=this;return null===(t=a.schools)||void 0===t?void 0:t.map((function(t){return{url:e.getImgUrl(a.name,a.sizes[0],t),name:t}}))},format:function(a){return null===a||void 0===a?void 0:a.replace("x","×")},loadAuthors:function(){var a=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var e,n,r,i;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=a.wallpaper.find((function(t){return t.name==a.active})),r=null===(e=n.authors)||void 0===e?void 0:e.join(","),t.next=4,Object(u["f"])(r);case 4:i=t.sent,a.authors=i;case 6:case"end":return t.stop()}}),t)})))()}}},h=p,v=(e("9196"),e("2877")),f=Object(v["a"])(h,n,r,!1,null,null,null);t["default"]=f.exports},6059:function(a,t,e){},9196:function(a,t,e){"use strict";e("6059")},e8fd:function(a){a.exports=JSON.parse('[{"name":"jdt7th","label":"第七届百强赛事壁纸","schools":["万花","五毒","唐门","天策","百强","苍云","蓬莱","藏剑","衍天","霸刀"],"sizes":["1280x720","1920x1080","2560x1440","3840x1080","3840x2160"],"authors":[6037,23214]}]')}}]);
//# sourceMappingURL=chunk-3bb1221a.51d1e62a.js.map