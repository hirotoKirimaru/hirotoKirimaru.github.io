(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47e9670b"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i("fe6c"),n=i("58df");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"7a74":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{staticClass:"justify-center",attrs:{height:"88"}},[i("social-media",{attrs:{large:!0}})],1)},n=[],a=(i("d3b7"),i("9ab4")),s=i("60a3"),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a["b"])(e,t),e=Object(a["a"])([Object(s["a"])({components:{SocialMedia:function(){return i.e("chunk-42e36909").then(i.bind(null,"48c3"))}}})],e),e}(s["c"]),r=c,u=r,p=i("2877"),l=i("6544"),h=i.n(l),d=(i("a9e3"),i("c7cd"),i("5530")),f=(i("b5b6"),i("3a66")),b=i("8dd9"),v=i("d10f"),m=i("58df"),g=i("80d2"),y=Object(m["a"])(b["a"],Object(f["a"])("footer",["height","inset"]),v["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(d["a"])({},b["a"].options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(d["a"])({},b["a"].options.computed.styles.call(this),{height:isNaN(t)?t:Object(g["d"])(t),left:Object(g["d"])(this.computedLeft),right:Object(g["d"])(this.computedRight),bottom:Object(g["d"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),j=Object(p["a"])(u,o,n,!1,null,null,null);e["default"]=j.exports;h()(j,{VFooter:y})},b5b6:function(t,e,i){},d10f:function(t,e,i){"use strict";var o=i("2b0e");e["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);
//# sourceMappingURL=chunk-47e9670b.8d7e7daa.js.map