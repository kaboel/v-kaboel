(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4fdf2e2"],{"2a85":function(t,e,a){"use strict";var i=a("c033"),n=a.n(i);n.a},"5df2":function(t,e,a){t.exports=a.p+"img/KS-logo-black-160.eeb35ebc.png"},"9c9b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"vitae"}},[a("nav",{staticClass:"navbar is-spaced has-shadow"},[a("div",{staticClass:"navbar-brand has-text-centered"},[t._m(0),a("div",{staticClass:"navbar-burger burger",class:{"is-active":t.navToggle},attrs:{id:"navbarBurger","data-target":"navbarMenu"},on:{click:function(e){t.navToggle=!t.navToggle}}},[a("span"),a("span"),a("span")])]),a("div",{staticClass:"navbar-menu",class:{"is-active":t.navToggle},attrs:{id:"navbarMenu"}},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item has-text-centered"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:"id"===t.$route.params.lang,expression:"$route.params.lang === 'id'"}],staticClass:"has-text-black f-control pl-md pr-md",attrs:{to:"/vitae/en"}},[a("font-awesome-icon",{attrs:{icon:["fas","arrow-left"]}}),a("span",{staticClass:"ml-sm"},[t._v("English Version")])],1),a("b-tooltip",{attrs:{label:"Still Unavailable",type:"is-warning",position:"is-bottom",animated:""}},[a("a",{directives:[{name:"show",rawName:"v-show",value:"en"===t.$route.params.lang,expression:"$route.params.lang === 'en'"}],staticClass:"has-text-black f-control pl-md pr-md disabled"},[a("font-awesome-icon",{attrs:{icon:["fas","arrow-left"]}}),a("span",{staticClass:"ml-sm"},[t._v("Versi Bahasa Indonesia")])],1)]),a("b-tooltip",{staticClass:"f-control",attrs:{label:"Close",type:"is-dark",position:"is-bottom",animated:""}},[a("router-link",{staticClass:"has-text-black pl-md pr-md",attrs:{to:"/"}},[a("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:["fas","times"]}})],1)],1)],1)])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-8-desktop is-offset-2-desktop p-lg has-text-centered"},[a("o",{staticClass:"subtitle",attrs:{id:"dataView"}},[t._v("\n                    Curriculum Vitae -\n                    "),a("strong",[t._v(t._s(t.$route.params.lang))])])],1)])]),a("div",{staticClass:"view"},[a("b-loading",{attrs:{"is-full-page":!1,active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("iframe",{attrs:{id:"file",src:t.getData(t.$route.params.lang)}})],1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"is-size-4 navbar-item",attrs:{href:"/"}},[i("img",{attrs:{src:a("5df2"),alt:"Faiq Allam | A Code Junkie, and Full Stack Web Developer"}})])}],s=a("be08"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.animation}},[t.isActive?a("div",{staticClass:"loading-overlay is-active",class:{"is-full-page":t.isFullPage}},[a("div",{staticClass:"loading-background",on:{click:t.cancel}}),t._t("default",[a("div",{staticClass:"loading-icon"})])],2):t._e()])},o=[];function r(t){"undefined"!==typeof t.remove?t.remove():"undefined"!==typeof t.parentNode&&t.parentNode.removeChild(t)}const u="undefined"===typeof window,c=u?Object:window.HTMLElement;u?Object:window.File;var d={name:"BLoading",props:{active:Boolean,programmatic:Boolean,container:[Object,Function,c],isFullPage:{type:Boolean,default:!0},animation:{type:String,default:"fade"},canCancel:{type:Boolean,default:!1},onCancel:{type:Function,default:function(){}}},data:function(){return{isActive:this.active||!1}},watch:{active:function(t){this.isActive=t}},methods:{cancel:function(){this.canCancel&&this.isActive&&this.close()},close:function(){var t=this;this.onCancel.apply(null,arguments),this.$emit("close"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(function(){t.$destroy(),r(t.$el)},150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},created:function(){"undefined"!==typeof window&&document.addEventListener("keyup",this.keyPress)},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0)},beforeDestroy:function(){"undefined"!==typeof window&&document.removeEventListener("keyup",this.keyPress)}},f=d,p=a("2877"),m=Object(p["a"])(f,l,o,!1,null,null,null),v=m.exports,g={name:"vitae",components:{BLoading:v,BTooltip:s["a"]},data:function(){return{navToggle:!1,isLoading:!1}},created:function(){var t=this.$route.params.lang;"id"!==t&&"en"!==t&&this.$router.push("/*"),this.counterLang("id")},mounted:function(){this.loadVitae()},updated:function(){this.counterLang("id")},methods:{loadVitae:function(){var t=this.$loading.open(),e=document.getElementById("file");e.onload=function(e){e.preventDefault(),t.close()}},counterLang:function(t){this.$route.params.lang===t&&this.$snackbar.open({duration:5e4,message:"<b>".concat(t,"</b> version of this page is still unavailable."),type:"is-warning",position:"is-bottom-right",actionText:"Ok"})},getData:function(t){return"id"===t?null:"en"===t?"https://drive.google.com/file/d/1bsoBLmFDDO5Z3XTzz16WZlderPLPbhdr/preview":void 0}}},h=g,b=(a("2a85"),Object(p["a"])(h,i,n,!1,null,"3fa3a2d4",null));e["default"]=b.exports},be08:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{class:[t.newType,t.position,t.size,{"b-tooltip":t.active,"is-square":t.square,"is-animated":t.newAnimated,"is-always":t.always,"is-multiline":t.multilined,"is-dashed":t.dashed}],attrs:{"data-label":t.label}},[t._t("default")],2)},n=[];let s={defaultContainerElement:null,defaultIconPack:"mdi",defaultIconComponent:null,defaultDialogConfirmText:null,defaultDialogCancelText:null,defaultSnackbarDuration:3500,defaultSnackbarPosition:null,defaultToastDuration:2e3,defaultToastPosition:null,defaultNotificationDuration:2e3,defaultNotificationPosition:null,defaultTooltipType:"is-primary",defaultTooltipAnimated:!1,defaultInputAutocomplete:"on",defaultDateFormatter:null,defaultDateParser:null,defaultDateCreator:null,defaultDayNames:null,defaultMonthNames:null,defaultFirstDayOfWeek:null,defaultUnselectableDaysOfWeek:null,defaultTimeFormatter:null,defaultTimeParser:null,defaultModalCanCancel:null,defaultModalScroll:null,defaultDatepickerMobileNative:!0,defaultTimepickerMobileNative:!0,defaultNoticeQueue:!0,defaultInputHasCounter:!0,defaultUseHtml5Validation:!0,defaultDropdownMobileModal:!0};var l=s;var o={name:"BTooltip",props:{active:{type:Boolean,default:!0},type:String,label:String,position:{type:String,default:"is-top",validator:function(t){return["is-top","is-bottom","is-left","is-right"].indexOf(t)>-1}},always:Boolean,animated:Boolean,square:Boolean,dashed:Boolean,multilined:Boolean,size:{type:String,default:"is-medium"}},computed:{newType:function(){return this.type||l.defaultTooltipType},newAnimated:function(){return this.animated||l.defaultTooltipAnimated}}},r=o,u=a("2877"),c=Object(u["a"])(r,i,n,!1,null,null,null);e["a"]=c.exports},c033:function(t,e,a){}}]);
//# sourceMappingURL=chunk-e4fdf2e2.51b83653.js.map