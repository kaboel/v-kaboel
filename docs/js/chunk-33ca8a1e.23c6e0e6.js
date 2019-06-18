(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33ca8a1e"],{"5df2":function(e,a,t){e.exports=t.p+"img/KS-logo-black-160.eeb35ebc.png"},7300:function(e,a,t){},b8fa:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("form",{attrs:{id:"contact",autocomplete:"off"},on:{submit:function(a){return e.submitForm(a)}}},[t("nav",{staticClass:"navbar is-spaced has-shadow"},[t("div",{staticClass:"navbar-brand has-text-centered"},[e._m(0),t("div",{staticClass:"navbar-burger burger",class:{"is-active":e.navToggle},attrs:{id:"navbarBurger","data-target":"navbarMenu"},on:{click:function(a){e.navToggle=!e.navToggle}}},[t("span"),t("span"),t("span")])]),t("div",{staticClass:"navbar-menu",class:{"is-active":e.navToggle},attrs:{id:"navbarMenu"}},[t("div",{staticClass:"navbar-end"},[t("div",{staticClass:"navbar-item has-text-centered"},[t("b-tooltip",{staticClass:"f-control",attrs:{label:"Reset",type:"is-dark",animated:"",position:"is-bottom"}},[t("a",{staticClass:"has-text-black pl-md pr-md",on:{click:e.resetForm}},[t("font-awesome-icon",{staticClass:"fa-1x",attrs:{icon:["fas","undo"]}})],1)]),t("b-tooltip",{staticClass:"f-control",attrs:{label:"Close",type:"is-dark",animated:"",position:"is-bottom"}},[t("router-link",{staticClass:"has-text-black pl-md pr-md",attrs:{to:"/"}},[t("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:["fas","times"]}})],1)],1)],1)])])]),t("div",{staticClass:"container pr-lg pl-lg"},[e._m(1),t("div",{staticClass:"columns mt-md"},[t("div",{staticClass:"column is-8-desktop is-10-mobile is-offset-2-desktop is-offset-1-mobile"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column field"},[t("label",{staticClass:"label is-medium",attrs:{for:"name"}},[e._v("Name")]),t("div",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required:true|min:5",expression:"'required:true|min:5'"},{name:"model",rawName:"v-model",value:e.form.surname,expression:"form.surname"}],staticClass:"input is-medium",attrs:{name:"surname",type:"text",id:"name",placeholder:"e.g. Faiq Kaboel"},domProps:{value:e.form.surname},on:{input:function(a){a.target.composing||e.$set(e.form,"surname",a.target.value)}}}),t("span",{staticClass:"icon is-small is-left"},[t("font-awesome-icon",{attrs:{icon:["far","smile-wink"]}})],1),t("span",{directives:[{name:"show",rawName:"v-show",value:e.fields.surname&&e.fields.surname.valid,expression:"fields.surname && fields.surname.valid"}],staticClass:"icon is-small is-right"},[t("font-awesome-icon",{staticClass:"has-text-success",attrs:{icon:["fas","check"]}})],1),e.errors.has("surname")?t("span",{staticClass:"icon is-small is-right"},[t("font-awesome-icon",{staticClass:"has-text-danger",attrs:{icon:["fas","exclamation-circle"]}})],1):e._e(),t("p",{staticClass:"help has-text-danger"},[e._v(e._s(e.errors.first("surname")))])])]),t("div",{staticClass:"column field"},[t("label",{staticClass:"label is-medium",attrs:{for:"email"}},[e._v("Email Address")]),t("div",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required:true|email",expression:"'required:true|email'"},{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"input is-medium",attrs:{name:"email",type:"email",id:"email",placeholder:"e.g. kaboel@example.com"},domProps:{value:e.form.email},on:{input:function(a){a.target.composing||e.$set(e.form,"email",a.target.value)}}}),t("span",{staticClass:"icon is-small is-left"},[t("font-awesome-icon",{attrs:{icon:["fas","envelope"]}})],1),t("span",{directives:[{name:"show",rawName:"v-show",value:e.fields.email&&e.fields.email.valid,expression:"fields.email && fields.email.valid"}],staticClass:"icon is-small is-right"},[t("font-awesome-icon",{staticClass:"has-text-success",attrs:{icon:["fas","check"]}})],1),e.errors.has("email")?t("span",{staticClass:"icon is-small is-right"},[t("font-awesome-icon",{staticClass:"has-text-danger",attrs:{icon:["fas","exclamation-circle"]}})],1):e._e()]),t("p",{staticClass:"help has-text-danger"},[e._v(e._s(e.errors.first("email")))])])]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column field"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.fields.message&&e.fields.message.valid,expression:"fields.message && fields.message.valid"}],staticClass:"is-pulled-right mt-sm mr-sm"},[t("font-awesome-icon",{staticClass:"has-text-success fa-lg",attrs:{icon:["fas","check"]}})],1),e.errors.has("message")?t("span",{staticClass:"is-pulled-right mt-sm mr-sm"},[t("font-awesome-icon",{staticClass:"has-text-danger fa-lg",attrs:{icon:["fas","exclamation-circle"]}})],1):e._e(),t("label",{staticClass:"label is-medium",attrs:{for:"message"}},[e._v("Message")]),t("div",{staticClass:"control"},[t("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required:true|min:100",expression:"'required:true|min:100'"},{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"textarea is-medium",attrs:{name:"message",id:"message",placeholder:"e.g. Hey Faiq ! I really like your bio, I have this project in mind, we should talk about it. I look forward for us to meet. Coffee is on me !",rows:"6"},domProps:{value:e.form.message},on:{input:function(a){a.target.composing||e.$set(e.form,"message",a.target.value)}}})]),t("p",{staticClass:"help has-text-danger"},[e._v(e._s(e.errors.first("message")))])])]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column has-text-centered"},[t("button",{staticClass:"button is-black is-outlined is-medium is-rounded",attrs:{type:"submit",disabled:!e.isFormValid}},[e._v("\n                            Submit\n                        ")])])])])])])])},i=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("a",{staticClass:"is-size-4 navbar-item",attrs:{href:"/"}},[s("img",{attrs:{src:t("5df2"),alt:"Faiq Allam | A Code Junkie... oh God, I've said those too much"}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"hero has-text-centered"},[t("div",{staticClass:"hero-body"},[t("p",{staticClass:"subtitle is-2"},[e._v("\n                    I'm glad you are trying to reach out.\n                    "),t("br"),e._v("\n                    Tell me what you need.\n                ")])])])}],l=(t("456d"),t("ac6a"),t("7bb1")),n=t("be08"),o={name:"contacts",components:{BTooltip:n["a"]},data:function(){return{form:{surname:null,email:null,message:null},$validator:l["a"],navToggle:!1,email:"",surname:"",message:""}},mounted:function(){this.$validator.localize({en:{attributes:{email:"Email Address",surname:"Name",message:"Message"}}}),this.$notification.open({duration:1e4,message:"This page is <b>Under Maintenance</b>.<br>Please visit again next time.",type:"is-warning",position:"is-bottom-right",hasIcon:!0})},methods:{submitForm:function(e){e.preventDefault(),this.$snackbar.open({duration:1e4,message:"I'm sorry but this page is <b>Under Maintenance</b>.<br>Please visit and try again next time.",type:"is-warning",position:"is-bottom-right",actionText:"Ok"}),this.resetForm()},resetForm:function(){var e=this;Object.keys(this.form).forEach(function(a){e.form[a]=null}),this.$validator.reset()}},computed:{isFormValid:function(){var e=this;return Object.keys(this.fields).every(function(a){return e.fields[a]&&e.fields[a].valid})}}},r=o,m=(t("e544"),t("2877")),c=Object(m["a"])(r,s,i,!1,null,"59002c72",null);a["default"]=c.exports},be08:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{class:[e.newType,e.position,e.size,{"b-tooltip":e.active,"is-square":e.square,"is-animated":e.newAnimated,"is-always":e.always,"is-multiline":e.multilined,"is-dashed":e.dashed}],attrs:{"data-label":e.label}},[e._t("default")],2)},i=[];let l={defaultContainerElement:null,defaultIconPack:"mdi",defaultIconComponent:null,defaultDialogConfirmText:null,defaultDialogCancelText:null,defaultSnackbarDuration:3500,defaultSnackbarPosition:null,defaultToastDuration:2e3,defaultToastPosition:null,defaultNotificationDuration:2e3,defaultNotificationPosition:null,defaultTooltipType:"is-primary",defaultTooltipAnimated:!1,defaultInputAutocomplete:"on",defaultDateFormatter:null,defaultDateParser:null,defaultDateCreator:null,defaultDayNames:null,defaultMonthNames:null,defaultFirstDayOfWeek:null,defaultUnselectableDaysOfWeek:null,defaultTimeFormatter:null,defaultTimeParser:null,defaultModalCanCancel:null,defaultModalScroll:null,defaultDatepickerMobileNative:!0,defaultTimepickerMobileNative:!0,defaultNoticeQueue:!0,defaultInputHasCounter:!0,defaultUseHtml5Validation:!0,defaultDropdownMobileModal:!0};var n=l;var o={name:"BTooltip",props:{active:{type:Boolean,default:!0},type:String,label:String,position:{type:String,default:"is-top",validator:function(e){return["is-top","is-bottom","is-left","is-right"].indexOf(e)>-1}},always:Boolean,animated:Boolean,square:Boolean,dashed:Boolean,multilined:Boolean,size:{type:String,default:"is-medium"}},computed:{newType:function(){return this.type||n.defaultTooltipType},newAnimated:function(){return this.animated||n.defaultTooltipAnimated}}},r=o,m=t("2877"),c=Object(m["a"])(r,s,i,!1,null,null,null);a["a"]=c.exports},e544:function(e,a,t){"use strict";var s=t("7300"),i=t.n(s);i.a}}]);
//# sourceMappingURL=chunk-33ca8a1e.23c6e0e6.js.map