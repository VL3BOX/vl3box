(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-63325c20"],{3481:function(t,e,i){"use strict";i("3afe")},"3afe":function(t,e,i){},"5d48":function(t,e,i){"use strict";i("8ec8")},"6c2b":function(t,e,i){"use strict";i.d(e,"d",(function(){return o})),i.d(e,"e",(function(){return c})),i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n})),i.d(e,"f",(function(){return l})),i.d(e,"c",(function(){return r}));i("99af");var s=i("41cb");function o(t){return Object(s.a)()({method:"GET",url:"/api/cms/post/collection/mine",params:t})}function n(t){return Object(s.a)().post("/api/cms/post/collection",t)}function l(t,e){return Object(s.a)().put("/api/cms/post/collection/".concat(t),e)}function c(t){return Object(s.a)().delete("/api/cms/post/collection/".concat(t))}function a(t){return Object(s.a)().post("/api/cms/post/".concat(t.post_type,"-").concat(t.post_id,"/append-to-collection/").concat(t.post_collection),{title:t.post_title})}function r(t){return Object(s.a)()({method:"GET",url:"/api/cms/post/collection/".concat(t,"/raw")})}},"8ec8":function(t,e,i){},b13e:function(t,e,i){"use strict";i("a9e3");var s={name:"post_banner",components:{uploadImage:i("5571").a},props:{data:{type:String,default:""},size:{type:[Array,Number],default:148},info:{type:String,default:(void 0).$t("非必选。首页海报尺寸1600*280（推荐3200*560支持高分屏），最大30M。")}},data:function(){return{banner:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}}},o=(i("3481"),i("2877")),n=Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-banner"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v(t._s(t.$t("海报")))]),e("uploadImage",{attrs:{info:t.info,"max-size":30,size:t.size},model:{value:t.banner,callback:function(e){t.banner=e},expression:"banner"}})],1)}),[],!1,null,null,null);e.a=n.exports},b3aa:function(t,e,i){},b4e5:function(t,e,i){"use strict";i("b3aa")},ef77:function(t,e,i){"use strict";i("b0c0"),i("14d9");var s={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},o=(i("b4e5"),i("2877")),n=Object(o.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},f1e8:function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a"),i("a434"),i("498a");var s=i("b85c"),o=(i("14d9"),i("13d5"),i("4e82"),i("e9c4"),i("b64b"),i("d3b7"),i("ac1f"),i("1276"),i("159b"),i("65c2")),n=i("221a"),l=i("47b9"),c=i("ef77"),a=i("b13e"),r=i("b76a"),p=i.n(r),u=i("6c2b"),d=i("c402"),f=i("85e4"),b=i("2ef0"),m=i.n(b),h={name:"collection",props:[],data:function(){var t=Object.assign({custom:"自定义"},o.__postType);return delete t.jx3dat,delete t.notice,{source_types:t,public:l.a,collection:{id:"",title:"",public:1,image:"",description:"",tags:[],posts:[]},tag:"",legal_tags:null,show_description:!0,processing:!1,onlyMine:!0}},computed:{id:function(){return this.$route.params.collection_id}},methods:{tags_filters:function(t){var e,i=[],o=Object(s.a)(this.legal_tags);try{for(o.s();!(e=o.n()).done;){var n=e.value;n.split(t).length>1&&i.push({value:n})}}catch(t){o.e(t)}finally{o.f()}return i},title_fill:function(t,e){var i=e.posts[t];e.title=i&&i.title?i.title:"",e.post_type=i&&i.post_type?i.post_type:""},add_posts_item:function(){this.collection.posts.push({title:"",type:"",id:"",url:"",posts:null,post_type:""})},search_handle:function(t,e){if(null===t&&(e.id=t=""),this.onlyMine){var i={};t&&(i.title=t),"custom"!==e.type&&(i.type=e.type),Object(d.f)(i).then((function(t){var i;e.posts=(null===(i=t.data.data.list)||void 0===i?void 0:i.reduce((function(t,e){return t[e.ID]={id:e.ID,title:e.post_title,post_type:e.post_type},t}),{}))||{}}))}else{var s={};t&&(s.title=t),"custom"!==e.type&&(s.type=e.type),Object(d.b)(s).then((function(t){var i;e.posts=(null===(i=t.data.data.list)||void 0===i?void 0:i.reduce((function(t,e){return t[e.ID]={id:e.ID,title:e.post_title,post_type:e.post_type},t}),{}))||{}}))}},init:function(){var t=this;Object(u.c)(this.id).then((function(e){var i=e.data.data;if(i){for(var s in i.posts){var o=i.posts[s];i.posts[s].posts="custom"===o.type?null:[{id:o.id,title:o.title,post_type:o.post_type}]}t.collection=i}else t.$message({message:"该剑三小册已被删除或无权限访问",type:"warning"})}))},submit:function(){var t=this,e=JSON.parse(JSON.stringify(this.collection));e.posts||(e.posts=[]);var i="";for(var s in e.posts){var o=e.posts[s];if(!o.type){i="文章类型不能为空哦";break}if("custom"===o.type){if(!o.url){i="请填写正确的小册文章链接（http或https开头）";break}if(!o.title){i="请填写自定义链接的标题";break}}else if(!o.id){i="请选择对应的文章";break}}if(e.posts.forEach((function(t,e){t.sort=e})),i)this.$message({message:i,type:"warning"});else{for(var n in e.posts)delete e.posts[n].posts;e.posts=JSON.stringify(e.posts),this.processing=!0;var l="";this.id?(e=m.a.pick(e,["title","public","image","description","mark","posts"]),l=Object(u.f)(this.id,e)):(e=m.a.omit(e,["id","tags"]),l=Object(u.b)(e)),l.then((function(e){t.$message({message:t.id?"更新成功":"创建成功",type:"success"});var i=t.id||e.data.data.id;setTimeout((function(){location.href=Object(f.getLink)("collection",i)}),500)})).finally((function(){t.processing=!1}))}},showPostType:function(t){return o.__postType[t]}},watch:{id:{immediate:!0,handler:function(t){t&&this.init()}}},components:{Tinymce:n.a,draggable:p.a,"publish-header":c.a,"publish-banner":a.a}},_=(i("5d48"),i("2877")),v=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-box"},[e("publish-header",{attrs:{name:t.$t("剑三小册"),localDraft:!1}},[t._t("header")],2),e("el-form",{staticClass:"m-publish-collection",attrs:{"label-position":"left"}},[e("div",{staticClass:"m-publish-title"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v(t._s(t.$t("标题")))]),e("el-input",{attrs:{placeholder:t.$t("请输入小册标题"),maxlength:"30","show-word-limit":""},model:{value:t.collection.title,callback:function(e){t.$set(t.collection,"title",e)},expression:"collection.title"}})],1),e("div",{staticClass:"m-publish-primary"},[e("div",{staticClass:"m-publish-primary-block"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v(t._s(t.$t("可见性")))]),e("el-radio",{attrs:{label:this.public.PUBLIC},model:{value:t.collection.public,callback:function(e){t.$set(t.collection,"public",t._n(e))},expression:"collection.public"}},[t._v(t._s(t.$t("公开")))]),e("el-radio",{attrs:{label:this.public.PRIVATE},model:{value:t.collection.public,callback:function(e){t.$set(t.collection,"public",t._n(e))},expression:"collection.public"}},[t._v(t._s(t.$t("私有")))]),e("el-tooltip",{attrs:{content:t.$t("私有仅使该小册不出现在公开小册大厅中"),placement:"top"}},[e("i",{staticClass:"el-icon-info"})])],1),e("div",{staticClass:"m-publish-primary-block m-publish-collection-posts"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v(t._s(t.$t("内容"))+" "),e("el-checkbox",{staticStyle:{"margin-left":"12px"},model:{value:t.onlyMine,callback:function(e){t.onlyMine=e},expression:"onlyMine"}},[t._v(t._s(t.$t("仅从自己作品中")))])],1),t.collection.posts&&t.collection.posts.length?e("draggable",{staticClass:"m-list-style",attrs:{tag:"ul",list:t.collection.posts,handle:".u-move"}},t._l(t.collection.posts,(function(i,s){return e("li",{key:s,staticClass:"c-posts-item"},[e("i",{staticClass:"u-move el-icon-more"}),e("i",{staticClass:"u-delete el-icon-close",on:{click:function(e){return t.collection.posts.splice(s,1)}}}),e("el-row",{staticClass:"m-posts-item",attrs:{gutter:10}},[e("el-col",{staticClass:"u-collection-type",attrs:{span:4}},[e("el-select",{staticClass:"u-item-key",attrs:{placeholder:t.$t("请选择作品类型")},model:{value:i.type,callback:function(e){t.$set(i,"type",e)},expression:"item.type"}},t._l(t.source_types,(function(t,i){return e("el-option",{key:i,attrs:{label:t,value:i}})})),1)],1),e("el-col",{staticClass:"u-collection-id",attrs:{span:8}},["custom"!==i.type?e("el-select",{staticClass:"u-item-value",attrs:{filterable:"",remote:"",placeholder:t.$t("通过输入作品标题进行搜索"),"remote-method":function(e){t.search_handle(e,i)},disabled:!i.type},on:{change:function(e){t.title_fill(e,i)},"visible-change":function(e){e&&t.search_handle(null,i)}},model:{value:i.id,callback:function(e){t.$set(i,"id",e)},expression:"item.id"}},[t._l(i.posts,(function(i){return[i.id&&i.title?e("el-option",{key:i.id,attrs:{value:i.id,label:i.title}},[e("div",[i.post_type?e("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.showPostType(i.post_type)))]):t._e(),t._v(" "+t._s(i.title)+" ")],1)]):t._e()]}))],2):e("el-input",{staticClass:"u-item-value",attrs:{placeholder:"请输入完整网页链接（需以HTTP或HTTPS开头）"},model:{value:i.url,callback:function(e){t.$set(i,"url","string"==typeof e?e.trim():e)},expression:"item.url"}})],1),i.url?e("el-col",{staticClass:"u-collection-url",attrs:{span:12}},[e("el-input",{attrs:{placeholder:t.$t("请输入自定义标题")},model:{value:i.title,callback:function(e){t.$set(i,"title",e)},expression:"item.title"}})],1):t._e()],1)],1)})),0):e("div",{staticClass:"u-posts-items-empty"},[t._v(t._s(t.$t("暂无作品信息，请进行作品添加")))]),e("div",{staticClass:"u-posts-add",on:{click:t.add_posts_item}},[e("i",{staticClass:"el-icon-plus"}),e("span",[t._v(t._s(t.$t("添加作品")))])])],1),e("div",{staticClass:"m-publish-primary-block m-publish-description"},[e("el-divider",{attrs:{"content-position":"left"},on:{click:function(e){t.show_description=!t.show_description}}},[t._v(t._s(t.$t("描述（选填）")))]),t.show_description?t._e():e("span",{staticClass:"u-show",on:{click:function(e){t.show_description=!0}}},[t._v("▼ "+t._s(t.$t("展开")))]),t.show_description?e("span",{staticClass:"u-hide",on:{click:function(e){t.show_description=!1}}},[t._v("▲ "+t._s(t.$t("收起")))]):t._e(),e("Tinymce",{directives:[{name:"show",rawName:"v-show",value:t.show_description,expression:"show_description"}],attrs:{attachmentEnable:!0,resourceEnable:!0,height:300},model:{value:t.collection.description,callback:function(e){t.$set(t.collection,"description",e)},expression:"collection.description"}})],1),e("div",{staticClass:"m-publish-other"},[e("publish-banner",{attrs:{size:[128,168],info:t.$t("小册的封面尺寸为 372 * 532 ，支持JPG,PNG上传")},model:{value:t.collection.image,callback:function(e){t.$set(t.collection,"image",e)},expression:"collection.image"}})],1)]),e("div",{staticClass:"m-publish-collection-publish"},[e("el-button",{staticClass:"u-button",attrs:{type:"primary",loading:t.processing,disabled:t.processing},on:{click:t.submit}},[t._v(t._s(t.$t("发"))+"    "+t._s(t.$t("布")))])],1)])],1)}),[],!1,null,"33324234",null);e.default=v.exports}}]);
//# sourceMappingURL=chunk-63325c20.462f764d.js.map