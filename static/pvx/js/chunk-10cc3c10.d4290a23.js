(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10cc3c10"],{"05cd":function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return i}));var a=s("41cb");const r=Object(a["d"])();function n(e,t,s="std"){return r.post(`/resource/${s}/${e}/`,{ids:t})}function i(e,t){let s=isNaN(e)?"name":"id";return Object(a["d"])().get(`/skill/${s}/${e}`,{params:t}).then(e=>e.data).catch(e=>{console.log(e)})}},3835:function(e,t,s){"use strict";function a(e){if(Array.isArray(e))return e}s.d(t,"a",(function(){return c}));s("a4d3"),s("e01a"),s("d28b"),s("14d9"),s("d3b7"),s("3ca3"),s("ddb0");function r(e,t){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var a,r,n,i,c=[],o=!0,u=!1;try{if(n=(s=s.call(e)).next,0===t){if(Object(s)!==s)return;o=!1}else for(;!(o=(a=n.call(s)).done)&&(c.push(a.value),c.length!==t);o=!0);}catch(e){u=!0,r=e}finally{try{if(!o&&null!=s["return"]&&(i=s["return"](),Object(i)!==i))return}finally{if(u)throw r}}return c}}var n=s("06c5");s("d9e2");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){return a(e)||r(e,t)||Object(n["a"])(e,t)||i()}},"4ae4":function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s("41cb");function r(e,t){if(e)return Object(a["d"])().get(`/resource/${t}/item_merged.${e}`)}},8902:function(e,t,s){},b85c:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));s("a4d3"),s("e01a"),s("d28b"),s("d9e2"),s("d3b7"),s("3ca3"),s("ddb0");var a=s("06c5");function r(e,t){var s="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=Object(a["a"])(e))||t&&e&&"number"===typeof e.length){s&&(e=s);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,o=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return c=e.done,e},e:function(e){o=!0,i=e},f:function(){try{c||null==s["return"]||s["return"]()}finally{if(o)throw i}}}}},c10e:function(e){e.exports=JSON.parse('{"remarks":["这个文件用于存储游戏内的字体ini","但是由于大部分场景下我们只需要字体的颜色","而且存在着很多个字体id对应同一种颜色的情况","所以用颜色作为键，值是一个数组，包含着颜色是键值的所有字体ID"],"#ffffff":["0","2","3","5","7","9","10","13","15","18","22","26","28","37","40","41","42","44","106","135","162","175","190","197","203","207","210","211","212","213","214","216","227","228","230","231","232","233","234","238","244","245","247","248","250","254","257","259","263","264","272","273","276","292","300","301","303","304","310","324","327","329","331","332","336","339","343","344","362","371"],"#000000":["1","6","29","38","43","156","160","180","191","225","260","269","288","326"],"#282828":["4","296","312"],"#ffff00":["8","11","14","16","23","27","31","48","59","65","99","100","136","163","187","188","200","201","204","236","241","258","289","306","315","328","330","334","372"],"#ff7e7e":["12","17","51","52","53","54","55","56","57","58","70","85","86","87","88","89","90","91","92","93","94","95","96","97","98","111","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","178","179","279","320","370"],"#a3b06a":["19","39","66"],"#ff0000":["20","33","71","102","137","159","166","217","219","270","308","317"],"#00c848":["21","36","80","105","165","167","222","226","287","316","365","369"],"#ff9600":["24","32","68","101","164","168","237","256","318","335","366"],"#adadad":["25","30","61","108","132","161","169","220","319","333"],"#df12c9":["34","74","103","367"],"#007eff":["35","77","104","285","323","368"],"#cfcfcf":["45","60","107","131","189","215","221","223","261","283","374"],"#969696":["46","62","109","133","218"],"#04d1b6":["47"],"#fff78e":["49","155"],"#636363":["50","63","110","134","313"],"#ffffbb":["64","177","182","185","239","375"],"#ffca7e":["67","157","266","321"],"#a96300":["69","158","240","307"],"#a90000":["72","337","338","340"],"#ca7eff":["73","112","195","278","305"],"#5e1ba0":["75","181"],"#7e7eff":["76","113","193"],"#0000a9":["78"],"#7ee3a3":["79","139","176","192","194","282"],"#00842f":["81","138"],"#e68c00":["82","294","295","325"],"#dc1e00":["83"],"#968c00":["84"],"#606000":["170"],"#1e366c":["171"],"#8b2e1c":["172","293","299"],"#105830":["173","309"],"#45544b":["174"],"#1e68fe":["183"],"#ef370c":["184","208","235"],"#4cdf15":["186","229"],"#ff0012":["196","199"],"#4fff6c":["198"],"#33f3ff":["202","205","252","253","262"],"#30bdd6":["206","281"],"undefined":["209"],"#fbeab7":["224","274","275","311","342"],"#453d2a":["242","341"],"#bafbdf":["243","246","249","255"],"#ffde00":["251","271","280"],"#96cedf":["265"],"#fab07e":["267"],"#e8c368":["268"],"#99452b":["277"],"#0b0b0b":["284"],"#df11c9":["286"],"#3e281b":["290","291","373"],"#493c23":["297","298"],"#46332b":["302","314","349"],"#92de5f":["322"],"#776859":["345","352"],"#735c3c":["346","347","355","356"],"#615044":["348"],"#513301":["350","354","357"],"#ece4cc":["351"],"#fef9e7":["353"],"#92bcb4":["358"],"#6fa497":["359"],"#bce5db":["360"],"#e3d7c7":["361"],"#95b9ba":["363"],"#a9a7a3":["364"]}')},c547:function(e,t,s){"use strict";var a=function(){var e=this,t=e._self._c;return t("span",{domProps:{innerHTML:e._s(e.html)}})},r=[],n=s("c7eb"),i=s("3835"),c=s("1da1"),o=s("b85c"),u=(s("99af"),s("caad"),s("14d9"),s("b0c0"),s("e9c4"),s("b64b"),s("d3b7"),s("ac1f"),s("2532"),s("466d"),s("5319"),s("ddb0"),s("85e4")),l=s("05cd"),d=s("2ef0"),f={name:"GameText",props:{text:{type:String,default:""},ignoreColor:{type:Boolean,default:!1},client:{type:String,default:"std"}},data:function(){return{html:""}},methods:{renderItemHtml:function(e){var t=e.text,a="",r=null;if(t=t.replace(/\\n/g,"<br />").replace(/\\/g,""),[e.r,e.g,e.b].every((function(e){return void 0!=e&&e>0})))a="color: rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,");");else if(void 0!=e.font&&100!=e.font){var n=s("c10e");for(var i in n)if(n[i].includes(e.font)){a="color: ".concat(i,";");break}}if("iteminfolink"==e.name&&e.script){var c,o,l,d,f=null===(c=e.script)||void 0===c||null===(o=c.match(/this\.dwTabType=(\d+)/i))||void 0===o?void 0:o[1],h=null===(l=e.script)||void 0===l||null===(d=l.match(/this\.dwIndex=(\d+)/i))||void 0===d?void 0:d[1];if(f&&h){var m="".concat(f,"_").concat(h);r=Object(u["getLink"])("item",m)}}return this.ignoreColor&&(a=""),r?'<a style="'.concat(a,' text-decoration: none;" target="_blank" href="').concat(r,'">').concat(t,"</a>"):'<span style="'.concat(a,'">').concat(t,"</span>")},renderImageHtml:function(e){var t=e.match(/<image>([\s\S]*?)<\/image>/gim);if(!t)return e;var s,a=Object(o["a"])(t);try{for(a.s();!(s=a.n()).done;){var r,n,i,c=s.value,l=null===(r=c.match(/frame=(\d+)/i))||void 0===r?void 0:r[1],d=parseInt(null===(n=c.match(/w=(\d+)/i))||void 0===n?void 0:n[1])/1.12,f=parseInt(null===(i=c.match(/h=(\d+)/i))||void 0===i?void 0:i[1])/1.12,h=Object(u["iconLink"])(l,this.client),m='<img src="'.concat(h,'" style="width: ').concat(d,"px; height: ").concat(f,'px; margin-bottom: -5px" />');e=e.replace(c,m)}}catch(b){a.e(b)}finally{a.f()}return e},renderTextHtml:function(e){var t=e;t=this.renderImageHtml(t);var s=e.match(/<Text>([\s\S]*?)<\/text>/gim);if(!s)return e;var a,r=Object(o["a"])(s);try{for(r.s();!(a=r.n()).done;){var n=a.value,i=Object(u["extractTextContent"])(n),c=this.renderItemHtml(i[0]);t=t.replace(n,c)}}catch(l){r.e(l)}finally{r.f()}return t},renderBuffResource:function(){var e=Object(c["a"])(Object(n["a"])().mark((function e(){var t,s,a,r,c,u,l,f,h,m,b,p,v,g,y,_,C,x,$,S,k,w,O,P,M,j,A,D,B,I,R;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=null===(t=this.html)||void 0===t?void 0:t.match(/<BUFF (\d+) (\d+) (.*?)>/gim),s){e.next=3;break}return e.abrupt("return");case 3:a=[],r={},c=Object(o["a"])(s);try{for(c.s();!(u=c.n()).done;)l=u.value,f=l.match(/<BUFF (\d+) (\d+) (.*?)>/i),h=Object(i["a"])(f,4),m=h[0],b=h[1],p=h[2],v=h[3],a.push("".concat(b,"_").concat(p)),0!=p&&a.push("".concat(b,"_0")),r[m]=[b,p,v]}catch(H){c.e(H)}finally{c.f()}return e.next=9,this.getAllResources("buff",a,this.client);case 9:e.t0=Object(n["a"])().keys(r);case 10:if((e.t1=e.t0()).done){e.next=37;break}if(g=e.t1.value,y=Object(i["a"])(r[g],3),_=y[0],C=y[1],x=y[2],"time"!==x){e.next=25;break}if($=void 0,S=this.getResource("buff",_,C),$=S["Interval"]?S["Interval"]:this.getResource("buff",_,0)["Interval"],$){e.next=21;break}return console.log(g,Object(d["escape"])(g)),this.html=this.html.replace(g,Object(d["escape"])(g)),e.abrupt("continue",10);case 21:return k=$/16,k>60?k=Math.floor(k/60)+"分钟":k+="秒",this.html=this.html.replace(g,Object(d["escape"])(k)),e.abrupt("continue",10);case 25:if("desc"!==x){e.next=35;break}if(w=this.getResource("buff",_,C),O=w["Desc"],O||(O=this.getResource("buff",_,0)["Desc"]),O){e.next=32;break}return this.html=this.html.replace(g,Object(d["escape"])(g)),e.abrupt("continue",10);case 32:if(P=O.match(/<BUFF ([0-9a-zA-Z]+)>/gi),P){M=Object(o["a"])(P);try{for(M.s();!(j=M.n()).done;)for(A=j.value,D=A.match(/<BUFF ([0-9a-zA-Z]+)>/i),B=Object(i["a"])(D,2),B[0],I=B[1],R=1;R<15;R++)w["BeginAttrib".concat(R)]==I&&(O=O.replace(A,w["BeginValue".concat(R,"A")]))}catch(H){M.e(H)}finally{M.f()}}this.html=this.html.replace(g,O);case 35:e.next=10;break;case 37:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),renderEnchantResource:function(){var e=Object(c["a"])(Object(n["a"])().mark((function e(){var t,s,a,r,i,c,u,l,f,h,m,b;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.html.match(/<ENCHANT (\d+)>/gim),t){e.next=3;break}return e.abrupt("return");case 3:s=[],a={},r=Object(o["a"])(t);try{for(r.s();!(i=r.n()).done;)c=i.value,u=c.match(/<ENCHANT (\d+)>/i)[1],s.push(u),a[c]=u}catch(n){r.e(n)}finally{r.f()}return e.next=9,this.getAllResources("enchant",s,this.client);case 9:for(l in a)try{f=a[l],h=this.getResource("enchant",f),m=h.Time,m&&(m="，持续".concat(parseInt(m)/60,"分钟。")),b="".concat(h.AttriName).concat(m||""),this.html=this.html.replace(l,b)}catch(p){console.log(p),this.html=this.html.replace(l,Object(d["escape"])(l))}case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),renderResource:function(){this.renderBuffResource(),this.renderEnchantResource()},getAllResources:function(){var e=Object(c["a"])(Object(n["a"])().mark((function e(t,s){var a,r,i,c,u,d,f,h,m,b;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["a"])(t,s,this.client);case 2:if(a=e.sent,r=a.data,void 0===r.length&&(r=[r]),"buff"==t){i=Object(o["a"])(r);try{for(i.s();!(c=i.n()).done;)u=c.value,d="".concat(u.BuffID,"_").concat(u.Level),sessionStorage.setItem("buff-".concat(this.client,"-").concat(d),JSON.stringify(u))}catch(n){i.e(n)}finally{i.f()}}else if("enchant"==t){f=Object(o["a"])(r);try{for(f.s();!(h=f.n()).done;)m=h.value,b="".concat(m.ID),sessionStorage.setItem("enchant-".concat(this.client,"-").concat(b),JSON.stringify(m))}catch(n){f.e(n)}finally{f.f()}}case 6:case"end":return e.stop()}}),e,this)})));function t(t,s){return e.apply(this,arguments)}return t}(),getResource:function(e,t,s){var a="".concat(t);"buff"==e&&(a="".concat(t,"_").concat(s));var r=sessionStorage.getItem("".concat(e,"-").concat(this.client,"-").concat(a));return r?JSON.parse(r):null}},watch:{text:{immediate:!0,handler:function(e){e&&(this.html=this.renderTextHtml(e),this.renderResource())}}}},h=f,m=s("2877"),b=Object(m["a"])(h,a,r,!1,null,null,null);t["a"]=b.exports},c7fa:function(e,t,s){"use strict";s("99af"),s("b0c0"),s("ac1f"),s("5319");var a=function(){var e=this,t=e._self._c;return e.source?t("div",{staticClass:"c-item",class:{"c-item-equipment":e.source.AucGenre>=1&&e.source.AucGenre<=4,"c-item-furniture":21==e.source.AucGenre}},[t("div",{staticClass:"c-item-wrapper"},[e.source.MaxStrengthLevel?t("div",{staticClass:"u-max-strength-level"},[t("span",{domProps:{textContent:e._s("精炼等级：0 / ".concat(e.source.MaxStrengthLevel))}})]):e._e(),t("div",{staticClass:"u-title",style:{color:e.color(e.source.Quality)},domProps:{textContent:e._s(e.source.Name)}}),e.source.BindType>1?t("div",{staticClass:"u-bind",domProps:{textContent:e._s(e.bind(e.source.BindType))}}):e._e(),1===parseInt(e.source.MaxExistAmount)?t("div",{staticClass:"unique",domProps:{textContent:e._s("唯一")}}):e._e(),parseInt(e.source.MaxExistTime)>0?t("div",{staticClass:"u-max-exist-time",domProps:{textContent:e._s("限时时间："+e.showDuration(e.source.MaxExistTime))}}):e._e(),parseInt(e.source.MaxExistAmount)>1?t("div",{staticClass:"u-max-exist-amount",domProps:{textContent:e._s("最大拥有数："+e.source.MaxExistAmount)}}):e._e(),1==e.source.AucGenre?t("div",{staticClass:"u-weapon-type-label"},[e._v("近身武器")]):e._e(),2==e.source.AucGenre?t("div",{staticClass:"u-weapon-type-label"},[e._v("远程武器")]):e._e(),e.source.TypeLabel?t("div",{staticClass:"u-type-label",domProps:{textContent:e._s(e.source.TypeLabel)}}):e._e(),e.source.attributes&&e.source.attributes.length?t("div",{staticClass:"u-attributes"},e._l(e.source.attributes,(function(s,a){return t("div",{key:a,staticClass:"u-field",class:["u-".concat(s.color)]},["atMeleeWeaponAttackSpeedBase"==s.type||"atRangeWeaponAttackSpeedBase"==s.type?t("span",{staticClass:"u-value u-speed",domProps:{textContent:e._s(s.label)}}):"atHorseAttribute"==s.type?t("span",{staticClass:"u-value u-horse-attribute"},[s.icon_id>0?t("img",{staticClass:"u-horse-icon",attrs:{src:e.iconLink(s.icon_id)}}):e._e(),t("div",{staticClass:"u-horse-desc",domProps:{innerHTML:e._s(s.label)}})]):t("span",{staticClass:"u-value"},[t("game-text",{attrs:{text:s.label}})],1)])})),0):e._e(),e.source.furniture_attributes?t("div",{staticClass:"u-furniture-attributes"},[e.source.furniture_attributes.view?t("div",{staticClass:"u-field u-green"},[t("span",{staticClass:"u-value",domProps:{textContent:e._s("观赏提高".concat(e.source.furniture_attributes.view))}})]):e._e(),e.source.furniture_attributes.practical?t("div",{staticClass:"u-field u-green"},[t("span",{staticClass:"u-value",domProps:{textContent:e._s("实用提高".concat(e.source.furniture_attributes.practical))}})]):e._e(),e.source.furniture_attributes.hard?t("div",{staticClass:"u-field u-green"},[t("span",{staticClass:"u-value",domProps:{textContent:e._s("坚固提高".concat(e.source.furniture_attributes.hard))}})]):e._e(),e.source.furniture_attributes.geomantic?t("div",{staticClass:"u-field u-green"},[t("span",{staticClass:"u-value",domProps:{textContent:e._s("风水提高".concat(e.source.furniture_attributes.geomantic))}})]):e._e(),e.source.furniture_attributes.interesting?t("div",{staticClass:"u-field u-green"},[t("span",{staticClass:"u-value",domProps:{textContent:e._s("趣味提高".concat(e.source.furniture_attributes.interesting))}})]):e._e()]):e._e(),e.source.Diamonds?t("ul",{staticClass:"u-diamonds u-gray"},[e._l(e.source.Diamonds,(function(s,a){return t("li",{key:a,staticClass:"u-diamond"},[t("span",{staticClass:"u-square"}),t("span",{staticClass:"u-text",domProps:{textContent:e._s("镶嵌孔：".concat(s))}})])})),1==e.source.AucGenre?t("li",{staticClass:"u-diamond"},[t("span",{staticClass:"u-square"}),t("span",{staticClass:"u-text"},[e._v("<只能镶嵌五彩石>")])]):e._e()],2):e._e(),e.source.Requires&&e.source.Requires[7]?t("div",{staticClass:"u-require-sex",domProps:{textContent:e._s(e.source.Requires[7])}}):e._e(),e.source.Requires&&e.source.Requires[6]?t("div",{staticClass:"u-require-school",domProps:{textContent:e._s(e.source.Requires[6])}}):e._e(),e.source.Requires&&e.source.Requires[5]?t("div",{staticClass:"u-require-level",domProps:{textContent:e._s(e.source.Requires[5])}}):e._e(),e.source.Requires&&e.source.Requires[100]?t("div",{staticClass:"u-require-camp",domProps:{textContent:e._s(e.source.Requires[100])}}):e._e(),e.source.Requires&&e.source.Requires[101]?t("div",{staticClass:"u-require-homeland-level",domProps:{textContent:e._s(e.source.Requires[101])}}):e._e(),e.source.AucGenre>=1&&e.source.AucGenre<=3&&e.source.MaxDurability?t("div",{staticClass:"u-max-durability",domProps:{textContent:e._s("最大耐久度"+e.source.MaxDurability)}}):e._e(),e.source.Set?t("div",{staticClass:"u-set"},[t("br"),t("div",{staticClass:"u-yellow",domProps:{textContent:e._s("".concat(e.source.Set.name,"(1/").concat(e.source.Set.siblings.length,")"))}}),t("ul",{staticClass:"u-set-siblings u-gray"},e._l(e.source.Set.siblings,(function(s,a){return t("li",{key:a,class:{"u-yellow":s==e.source.Name},domProps:{textContent:e._s(s)}})})),0),t("br"),t("ul",{staticClass:"u-set-attributes u-gray"},e._l(e.source.Set.attributes,(function(s,a){return t("li",{key:a},[t("span",[e._v(e._s("[".concat(a,"]")))]),t("game-text",{attrs:{client:e.client,text:s,"ignore-color":!0}})],1)})),0),t("br")]):e._e(),e.source.ImageUrl?t("div",{staticClass:"u-image-url"},[t("img",{attrs:{src:e.source.ImageUrl},on:{"~error":function(t){e.source.ImageUrl=null}}})]):e._e(),e.source.Desc?t("p",{staticClass:"u-desc u-yellow"},[t("game-text",{attrs:{client:e.client,text:e.source.Desc}})],1):e._e(),e.source.WuCaiHtml?t("p",{staticClass:"u-desc",domProps:{innerHTML:e._s(e.source.WuCaiHtml)}}):e._e(),e.source.Level?t("div",{staticClass:"u-level u-yellow",domProps:{textContent:e._s("品质等级"+e.source.Level)}}):e._e(),e.source.EquipmentRating?t("div",{staticClass:"u-equipment-rating u-orange",domProps:{textContent:e._s("装备分数"+e.source.EquipmentRating)}}):e._e(),e.source.Recommend?t("div",{staticClass:"u-equipment-recommend",domProps:{textContent:e._s("推荐门派："+e.source.Recommend)}}):e._e(),e.source.CoolDown?t("div",{staticClass:"u-equipment-recommend",domProps:{textContent:e._s("使用间隔"+e.second_format(e.source.CoolDown))}}):e._e(),e.source.Appearance?t("div",{staticClass:"u-appearance",domProps:{textContent:e._s("外观名称："+e.source.Appearance)}}):e._e(),e.source.CanExterior?t("div",{staticClass:"u-can-exterior",domProps:{textContent:e._s("外观："+e.source.CanExterior)}}):e._e(),!e.source.CanShared||e.source.AucGenre>=1&&e.source.AucGenre<=4?e._e():t("div",{staticClass:"u-can-shared"},[e._v("该物品可以放入账号储物箱共享。")]),e.source.CanShared&&e.source.AucGenre>=1&&e.source.AucGenre<=4?t("div",{staticClass:"u-can-shared"},[e._v("该装备未精炼、镶嵌、附魔、穿戴前可以放入账号储物箱共享。")]):e._e(),e.source.furniture_attributes?t("div",{staticClass:"u-furniture-can"},[e.source.furniture_attributes.interact?t("span",[e._v("可交互")]):e._e(),e.source.furniture_attributes.scale_range?t("span",{domProps:{textContent:e._s("可缩放(".concat(e.source.furniture_attributes.scale_range.replace(";"," - "),"倍)"))}}):e._e()]):e._e(),e.source.GetType?t("div",{staticClass:"u-get-type",domProps:{textContent:e._s("物品来源：".concat(e.source.GetType))}}):e._e()])]):e._e()},r=[],n=(s("caad"),s("e9c4"),s("a9e3"),s("b680"),s("b64b"),s("2532"),s("4ae4")),i=s("c547"),c=(e,t)=>{let s="";switch(t=t?parseInt(t):0,e){case"atAllTypeCriticalStrike":case"atLunarCriticalStrike":case"atMagicCriticalStrike":case"atNeutralCriticalStrike":case"atPhysicsCriticalStrike":case"atPoisonCriticalStrike":case"atSolarAndLunarCriticalStrike":case"atSolarCriticalStrike":s=`+${(t/35737.5*100).toFixed(2)}%`;break;case"atAllTypeCriticalDamagePowerBase":case"atLunarCriticalDamagePowerBase":case"atMagicCriticalDamagePowerBase":case"atNeutralCriticalDamagePowerBase":case"atPhysicsCriticalDamagePowerBase":case"atPoisonCriticalDamagePowerBase":case"atSolarAndLunarCriticalDamagePowerBase":case"atSolarCriticalDamagePowerBase":s=`+${(t/12506.25*100).toFixed(2)}%`;break;case"atToughnessBase":s=`+${(t/35737.5*100).toFixed(2)}% +${(t/9588.75*100).toFixed(2)}%会心减害`;break;case"atDecriticalDamagePowerBase":s="";break;case"atAllTypeHitValue":case"atLunarHitValue":case"atMagicHitValue":case"atNeutralHitValue":case"atPhysicsHitValue":case"atPoisonHitValue":case"atSolarAndLunarHitValue":case"atSolarHitValue":s=`+${(t/25991.25*100).toFixed(2)}%`;break;case"atDodge":s="";break;case"atParryBase":s="";break;case"atStrainBase":s=`+${(t/34458.75*100).toFixed(2)}%`;break;case"atPhysicsDefenceAdd":case"atPhysicsShieldAdditional":case"atPhysicsShieldBase":s="";break;case"atLunarMagicShieldBase":case"atMagicShield":case"atNeutralMagicShieldBase":case"atPoisonMagicShieldBase":case"atSolarMagicShieldBase":s="";break;case"atLunarOvercomeBase":case"atMagicOvercome":case"atNeutralOvercomeBase":case"atPhysicsOvercomeBase":case"atPoisonOvercomeBase":case"atSolarAndLunarOvercomeBase":case"atSolarOvercomeBase":s=`+${(t/35737.5*100).toFixed(2)}%`;break;case"atHasteBase":s=`+${(t/43856.25*100).toFixed(2)}%`;break;default:break}return s?` (${s})`:""},o=e=>{switch(e){case 1:return"不绑定";case 2:return"装备后绑定";case 3:return"拾取后绑定";default:return"未知"}},u=e=>{switch(e=parseInt(e),e){case 0:return"rgb(167,167,167)";case 1:return"rgb(255,255,255)";case 2:return"rgb(0,210,75)";case 3:return"rgb(0,126,255)";case 4:return"rgb(254,45,254)";case 5:return"rgb(255,165,0)";default:return"rgb(167,167,167)"}},l=s("85e4"),d=e=>{let t=Math.floor(e/86400),s=Math.floor((e-24*t*3600)/3600),a=Math.floor((e-24*t*3600-3600*s)/60);e=e-24*t*3600-3600*s-60*a;let r="";return t&&(r+=t+"天"),s&&(r+=s+"小时"),a&&(r+=a+"分钟"),e&&(r+=e+"秒"),r},f=s("5a0c"),h=s.n(f),m=s("d772"),b=s.n(m);h.a.extend(b.a);var p={name:"Item",props:{item:{type:Object},item_id:{type:String},client:{type:String},jx3ClientType:{type:Number}},data:function(){return{source:null}},components:{GameText:i["a"]},computed:{env_client_id:function(){return location.href.includes("origin")?2:1},client_id:function(){return this.jx3ClientType||this.env_client_id},client_by_id:function(){return 1==this.client_id?"std":"origin"},final_client:function(){return this.client||this.client_by_id},cache_key:function(){return"item-".concat(this.final_client,"-").concat(this.item_id)}},methods:{iconLink:function(e){return Object(l["iconLink"])(e,this.final_client)},second_format:d,showDuration:function(e){return e=Number(e),e&&h.a.duration(e).asDays().toFixed(0)+"天"},attribute_percent:c,bind:o,color:u,formatDescHtml:function(e){return e.replace(/font=\d+\s>/g,"")}},watch:{item:{immediate:!0,handler:function(){"undefined"!==typeof this.item&&(this.source=this.item)}},item_id:{immediate:!0,handler:function(e){var t=this;if(e){var s=sessionStorage.getItem(this.cache_key);if(s)try{this.source=JSON.parse(s)}catch(a){console.log(a,"[Item]无法解析本地缓存")}else Object(n["a"])(this.item_id,this.final_client).then((function(e){var s=e.data,a="{}"!==JSON.stringify(s);a?(t.source=s,sessionStorage.setItem(t.cache_key,JSON.stringify(t.source))):t.source=null}))}}}}},v=p,g=(s("f0af"),s("2877")),y=Object(g["a"])(v,a,r,!1,null,null,null);t["a"]=y.exports},d772:function(e,t,s){!function(t,s){e.exports=s()}(0,(function(){"use strict";var e,t,s=1e3,a=6e4,r=36e5,n=864e5,i=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,o=2628e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:c,months:o,days:n,hours:r,minutes:a,seconds:s,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof g},f=function(e,t,s){return new g(e,s,t.$l)},h=function(e){return t.p(e)+"s"},m=function(e){return e<0},b=function(e){return m(e)?Math.ceil(e):Math.floor(e)},p=function(e){return Math.abs(e)},v=function(e,t){return e?m(e)?{negative:!0,format:""+p(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},g=function(){function m(e,t,s){var a=this;if(this.$d={},this.$l=s,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return f(e*l[h(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){a.$d[h(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var r=e.match(u);if(r){var n=r.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=n[0],this.$d.months=n[1],this.$d.weeks=n[2],this.$d.days=n[3],this.$d.hours=n[4],this.$d.minutes=n[5],this.$d.seconds=n[6],this.calMilliseconds(),this}}return this}var p=m.prototype;return p.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,s){return t+(e.$d[s]||0)*l[s]}),0)},p.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=b(e/c),e%=c,this.$d.months=b(e/o),e%=o,this.$d.days=b(e/n),e%=n,this.$d.hours=b(e/r),e%=r,this.$d.minutes=b(e/a),e%=a,this.$d.seconds=b(e/s),e%=s,this.$d.milliseconds=e},p.toISOString=function(){var e=v(this.$d.years,"Y"),t=v(this.$d.months,"M"),s=+this.$d.days||0;this.$d.weeks&&(s+=7*this.$d.weeks);var a=v(s,"D"),r=v(this.$d.hours,"H"),n=v(this.$d.minutes,"M"),i=this.$d.seconds||0;this.$d.milliseconds&&(i+=this.$d.milliseconds/1e3,i=Math.round(1e3*i)/1e3);var c=v(i,"S"),o=e.negative||t.negative||a.negative||r.negative||n.negative||c.negative,u=r.format||n.format||c.format?"T":"",l=(o?"-":"")+"P"+e.format+t.format+a.format+u+r.format+n.format+c.format;return"P"===l||"-P"===l?"P0D":l},p.toJSON=function(){return this.toISOString()},p.format=function(e){var s=e||"YYYY-MM-DDTHH:mm:ss",a={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return s.replace(i,(function(e,t){return t||String(a[e])}))},p.as=function(e){return this.$ms/l[h(e)]},p.get=function(e){var t=this.$ms,s=h(e);return"milliseconds"===s?t%=1e3:t="weeks"===s?b(t/l[s]):this.$d[s],t||0},p.add=function(e,t,s){var a;return a=t?e*l[h(t)]:d(e)?e.$ms:f(e,this).$ms,f(this.$ms+a*(s?-1:1),this)},p.subtract=function(e,t){return this.add(e,t,!0)},p.locale=function(e){var t=this.clone();return t.$l=e,t},p.clone=function(){return f(this.$ms,this)},p.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},p.valueOf=function(){return this.asMilliseconds()},p.milliseconds=function(){return this.get("milliseconds")},p.asMilliseconds=function(){return this.as("milliseconds")},p.seconds=function(){return this.get("seconds")},p.asSeconds=function(){return this.as("seconds")},p.minutes=function(){return this.get("minutes")},p.asMinutes=function(){return this.as("minutes")},p.hours=function(){return this.get("hours")},p.asHours=function(){return this.as("hours")},p.days=function(){return this.get("days")},p.asDays=function(){return this.as("days")},p.weeks=function(){return this.get("weeks")},p.asWeeks=function(){return this.as("weeks")},p.months=function(){return this.get("months")},p.asMonths=function(){return this.as("months")},p.years=function(){return this.get("years")},p.asYears=function(){return this.as("years")},m}(),y=function(e,t,s){return e.add(t.years()*s,"y").add(t.months()*s,"M").add(t.days()*s,"d").add(t.hours()*s,"h").add(t.minutes()*s,"m").add(t.seconds()*s,"s").add(t.milliseconds()*s,"ms")};return function(s,a,r){e=r,t=r().$utils(),r.duration=function(e,t){var s=r.locale();return f(e,{$l:s},t)},r.isDuration=d;var n=a.prototype.add,i=a.prototype.subtract;a.prototype.add=function(e,t){return d(e)?y(this,e,1):n.bind(this)(e,t)},a.prototype.subtract=function(e,t){return d(e)?y(this,e,-1):i.bind(this)(e,t)}}}))},f0af:function(e,t,s){"use strict";s("8902")}}]);
//# sourceMappingURL=chunk-10cc3c10.d4290a23.js.map