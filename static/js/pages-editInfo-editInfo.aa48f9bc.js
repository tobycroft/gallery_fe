(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-editInfo-editInfo"],{"0058":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAICAYAAAAiJnXPAAAAAXNSR0IArs4c6QAAAKNJREFUKFN10SESAiEUBuD/ZzbaKF4DuIpBg81isNm9gN2gTWc07FUYrmEhaXTAwZEZFnZf5f/gvQe11gcA+xjjwzm3BfBBW51S6kRyCeBIrfWL5Oyf6621qwp2xpg7gEXKxBjfVEqdhRCb4vISDkDKhBAuBNAcAOi992sp5TW/UHaSUKox+AQwH+sgoymYzWDWEk3BZjk1+sG8XpI3a+2u/oYvdOlE2Q2wk/wAAAAASUVORK5CYII="},"2fff":function(e,t,n){"use strict";n.r(t);var i=n("3c70"),a=n("7172");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("dcf2");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"6a350351",null,!1,i["a"],void 0);t["default"]=u.exports},"3c70":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uPopup:n("dbc8").default,uLoadingIcon:n("f4a5").default,uButton:n("ad96").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("u-popup",{attrs:{show:e.show},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.closeHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-picker"},[i("v-uni-view",{staticClass:"picker-header"},[e._v(e._s(e.title)),i("v-uni-image",{attrs:{src:n("cf0c"),mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}})],1),i("v-uni-picker-view",{staticClass:"u-picker__view",style:{height:""+e.$u.addUnit(e.visibleItemCount*e.itemHeight)},attrs:{indicatorStyle:"height: "+e.$u.addUnit(e.itemHeight),value:e.innerIndex,immediateChange:e.immediateChange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeHandler.apply(void 0,arguments)}}},e._l(e.innerColumns,(function(t,n){return i("v-uni-picker-view-column",{key:n,staticClass:"u-picker__view__column"},e._l(t,(function(a,r){return e.$u.test.array(t)?i("v-uni-text",{key:r,staticClass:"u-picker__view__column__item u-line-1",style:{height:e.$u.addUnit(e.itemHeight),lineHeight:e.$u.addUnit(e.itemHeight),fontWeight:r===e.innerIndex[n]?"bold":"normal"}},[e._v(e._s(e.getItemText(a)))]):e._e()})),1)})),1),e.loading?i("v-uni-view",{staticClass:"u-picker--loading"},[i("u-loading-icon",{attrs:{mode:"circle"}})],1):e._e(),i("v-uni-view",{staticClass:"picker-footer"},[i("u-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1)},r=[]},"416f":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={navbar:n("9568").default,"u-Form":n("8e4a").default,uFormItem:n("5bf5").default,uInput:n("3c1b").default,uButton:n("ad96").default,uPicker:n("2fff").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"box"},[i("navbar",{attrs:{title:"修改信息"}}),i("v-uni-view",{staticStyle:{height:"var(--status-bar-height)"}}),i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"form-box"},[i("v-uni-view",{staticClass:"form-header"},[i("v-uni-view",{staticClass:"form-title"},[e._v("报名信息"),i("v-uni-image",{attrs:{src:n("d0c3"),mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"form-tips"},[e._v("Tips：以下信息均为必填项")])],1),i("u--form",{ref:"form",staticClass:"form-container",attrs:{model:e.form,rules:e.rules}},[i("u-form-item",{staticClass:"form-item",attrs:{label:"选手姓名",prop:"name"}},[i("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入参赛选手姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("u-form-item",{staticClass:"form-item",attrs:{label:"选手年龄",prop:"age"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openAgePicker.apply(void 0,arguments)}}},[i("u-input",{attrs:{type:"text",readonly:!0},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}},[i("template",{slot:"suffix"},[i("v-uni-image",{attrs:{src:n("0058"),mode:"widthFix"}})],1)],2)],1),i("u-form-item",{staticClass:"form-item",attrs:{label:"组别名称",prop:"tag_group_id"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openGroupPicker.apply(void 0,arguments)}}},[i("u-input",{attrs:{type:"text",readonly:!0},model:{value:e.tag_group_id,callback:function(t){e.tag_group_id=t},expression:"tag_group_id"}},[i("template",{slot:"suffix"},[i("v-uni-image",{attrs:{src:n("0058"),mode:"widthFix"}})],1)],2)],1),i("u-form-item",{staticClass:"form-item",attrs:{label:"身份证号",prop:"cert"}},[i("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入选手身份证号"},model:{value:e.form.cert,callback:function(t){e.$set(e.form,"cert",t)},expression:"form.cert"}})],1),i("u-form-item",{staticClass:"form-item",attrs:{label:"学校/机构",prop:"school_name_show"}},[i("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入学校名称"},model:{value:e.form.school_name_show,callback:function(t){e.$set(e.form,"school_name_show",t)},expression:"form.school_name_show"}})],1)],1)],1),i("v-uni-view",{staticClass:"login-btn"},[i("u-button",{attrs:{customStyle:"border-radius:51rpx;height: 102rpx;font-size:32rpx;box-shadow: 0px 16px 32px 1px rgba(239,152,1,0.36);",color:"linear-gradient(85deg, #FFCB6F 0%, #FFA900 100%)"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitLogin.apply(void 0,arguments)}}},[e._v("确认修改")])],1)],1),i("u-picker",{attrs:{show:e.agePicker,title:"年龄",columns:e.ageList,defaultIndex:e.ageIndex,keyName:"label",visibleItemCount:"4"},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.ageCancel.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.ageConfirm.apply(void 0,arguments)}}}),i("u-picker",{attrs:{show:e.groupPicker,title:"组别",columns:e.groupList,defaultIndex:e.groupIndex,keyName:"name",visibleItemCount:"3",immediateChange:!0},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.groupCancel.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.groupConfirm.apply(void 0,arguments)}}})],1)},r=[]},4425:function(e,t,n){var i=n("61e8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("302f794d",i,!0,{sourceMap:!1,shadowMode:!1})},"4c2a":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("c7eb")),r=i(n("1da1"));n("ac1f"),n("00b4"),n("d81d"),n("a434"),n("cb29");var o=i(n("85bd")),u={name:"u-picker",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{lastIndex:[],innerIndex:[],innerColumns:[],columnIndex:0}},watch:{defaultIndex:{immediate:!0,handler:function(e){this.setIndexs(e,!0)}},columns:{immediate:!0,handler:function(e){this.setColumns(e)}}},methods:{getItemText:function(e){return uni.$u.test.object(e)?e[this.keyName]:e},closeHandler:function(){this.closeOnClickOverlay&&this.$emit("close")},cancel:function(){this.$emit("cancel")},confirm:function(){var e=this;this.$emit("confirm",{indexs:this.innerIndex,value:this.innerColumns.map((function(t,n){return t[e.innerIndex[n]]})),values:this.innerColumns})},changeHandler:function(e){for(var t=e.detail.value,n=0,i=0,a=0;a<t.length;a++){var r=t[a];if(r!==(this.lastIndex[a]||0)){i=a,n=r;break}}this.columnIndex=i;var o=this.innerColumns;this.setLastIndex(t),this.setIndexs(t),this.$emit("change",{picker:this,value:this.innerColumns.map((function(e,n){return e[t[n]]})),index:n,indexs:t,values:o,columnIndex:i})},setIndexs:function(e,t){this.innerIndex=uni.$u.deepClone(e),t&&this.setLastIndex(e)},setLastIndex:function(e){this.lastIndex=uni.$u.deepClone(e)},setColumnValues:function(e,t){this.innerColumns.splice(e,1,t);for(var n=uni.$u.deepClone(this.innerIndex),i=0;i<this.innerColumns.length;i++)i>this.columnIndex&&(n[i]=0);this.setIndexs(n)},getColumnValues:function(e){return(0,r.default)((0,a.default)().mark((function e(){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.$u.sleep();case 2:case"end":return e.stop()}}),e)})))(),this.innerColumns[e]},setColumns:function(e){this.innerColumns=uni.$u.deepClone(e),0===this.innerIndex.length&&(this.innerIndex=new Array(e.length).fill(0))},getIndexs:function(){return this.innerIndex},getValues:function(){var e=this;return(0,r.default)((0,a.default)().mark((function e(){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.$u.sleep();case 2:case"end":return e.stop()}}),e)})))(),this.innerColumns.map((function(t,n){return t[e.innerIndex[n]]}))}}};t.default=u},"61e8":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-6a350351], uni-scroll-view[data-v-6a350351], uni-swiper-item[data-v-6a350351]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-picker[data-v-6a350351]{position:relative}.u-picker__view__column[data-v-6a350351]{display:flex;flex-direction:row;flex:1;justify-content:center}.u-picker__view__column__item[data-v-6a350351]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;text-align:center;display:block;color:#303133}.u-picker__view__column__item--disabled[data-v-6a350351]{cursor:not-allowed;opacity:.35}.u-picker--loading[data-v-6a350351]{position:absolute;top:0;right:0;left:0;bottom:0;display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:hsla(0,0%,100%,.87);z-index:1000}.u-picker .picker-header[data-v-6a350351]{position:relative;height:%?152?%;line-height:%?152?%;text-align:center;font-size:%?30?%;font-weight:700;color:#333}.u-picker .picker-header uni-image[data-v-6a350351]{position:absolute;right:%?48?%;top:%?64?%;width:%?26?%;height:%?26?%}.u-picker .picker-footer[data-v-6a350351]{border-top:%?1?% solid #eee}.u-picker .picker-footer .u-button[data-v-6a350351]{height:%?104?%;font-size:%?36?%;font-weight:700;color:#3bad55;background-color:#fff;border:none}',""]),e.exports=t},"64e7":function(e,t,n){"use strict";n.r(t);var i=n("bbe7"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"65b3":function(e,t,n){var i=n("8f06");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("603989ea",i,!0,{sourceMap:!1,shadowMode:!1})},7172:function(e,t,n){"use strict";n.r(t);var i=n("4c2a"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"85bd":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var i={props:{show:{type:Boolean,default:uni.$u.props.picker.show},showToolbar:{type:Boolean,default:uni.$u.props.picker.showToolbar},title:{type:String,default:uni.$u.props.picker.title},columns:{type:Array,default:uni.$u.props.picker.columns},loading:{type:Boolean,default:uni.$u.props.picker.loading},itemHeight:{type:[String,Number],default:uni.$u.props.picker.itemHeight},cancelText:{type:String,default:uni.$u.props.picker.cancelText},confirmText:{type:String,default:uni.$u.props.picker.confirmText},cancelColor:{type:String,default:uni.$u.props.picker.cancelColor},confirmColor:{type:String,default:uni.$u.props.picker.confirmColor},visibleItemCount:{type:[String,Number],default:uni.$u.props.picker.visibleItemCount},keyName:{type:String,default:uni.$u.props.picker.keyName},closeOnClickOverlay:{type:Boolean,default:uni.$u.props.picker.closeOnClickOverlay},defaultIndex:{type:Array,default:uni.$u.props.picker.defaultIndex},immediateChange:{type:Boolean,default:uni.$u.props.picker.immediateChange}}};t.default=i},"8f06":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-25a08fca]{background-color:#f7f7f7;padding-top:%?88?%;height:100%}.container[data-v-25a08fca]{padding:%?24?% %?24?% 0 %?24?%}.container .form-box[data-v-25a08fca]{padding:%?24?% %?24?% 0 %?24?%;width:100%;background:#fff;border-radius:%?24?%}.container .form-box .form-header[data-v-25a08fca]{display:flex;justify-content:space-between}.container .form-box .form-header .form-title[data-v-25a08fca]{font-size:%?32?%;font-weight:800}.container .form-box .form-header .form-title uni-image[data-v-25a08fca]{width:%?12?%;-webkit-transform:translateY(%?10?%);transform:translateY(%?10?%)}.container .form-box .form-header .form-tips[data-v-25a08fca]{display:flex;align-items:center;justify-content:center;padding:0 %?24?%;height:%?48?%;line-height:%?48?%;color:#ff9231;font-size:%?24?%;background:#fff9f4;border-radius:%?16?%}.container .form-box .form-item[data-v-25a08fca]{border-bottom:%?0.5?% solid #ccc}.container .form-box .form-item[data-v-25a08fca]:nth-last-child(1){border-bottom:none}.container .form-box .form-item .u-input[data-v-25a08fca]{padding:0!important;height:%?100?%;font-size:%?36?%;border:none;border-radius:0;color:#303133}.container .form-box .form-item uni-image[data-v-25a08fca]{width:%?13?%}.container .form-box[data-v-25a08fca]  .u-form-item__body__right__message{margin:0!important}.container .form-box[data-v-25a08fca]  .u-form-item__body .u-form-item__body__left{width:auto!important}.container .form-box[data-v-25a08fca]  .u-input__content__field-wrapper__field{text-align:right!important}.container .login-btn[data-v-25a08fca]{margin:%?64?% %?56?% %?48?% %?56?%}',""]),e.exports=t},bbe7:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("4de4"),n("d3b7"),n("14d9");var i=n("87cd"),a={data:function(){return{agePicker:!1,groupPicker:!1,groupIndex:[],ageIndex:[],tag_group_id:"",age:"",gender:"",ageList:[[{id:6,label:"6岁"},{id:7,label:"7岁"},{id:8,label:"8岁"},{id:9,label:"9岁"},{id:10,label:"10岁"},{id:11,label:"11岁"},{id:12,label:"12岁"},{id:13,label:"13岁"},{id:14,label:"14岁"},{id:15,label:"15岁"},{id:16,label:"16岁"},{id:17,label:"17岁"},{id:18,label:"18岁"}]],groupList:[],form:{age:"",tag_group_id:""},rules:{name:{type:"string",required:!0,message:"请输入参赛选手姓名",trigger:["blur","change"]},cert:{type:"string",required:!0,message:"请输入选手身份证号",trigger:["blur","change"]},school_name_show:{type:"string",required:!0,message:"请输入学校名称",trigger:["blur","change"]}}}},onLoad:function(e){e.eid&&this.getEnrollInfo(e.eid)},computed:{},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{getEnrollInfo:function(e){var t=this;(0,i.getEnrollInfo)({id:e}).then((function(e){t.form=e.data,t.ageList[0].filter((function(e,n){e.id==t.form.age&&(t.ageIndex.push(n),t.age=e.label)})),t.getGroupList()}))},getGroupList:function(){var e=this;(0,i.tagGroupList)().then((function(t){e.groupList.push(t.data),e.groupList[0].filter((function(t,n){t.id==e.form.tag_group_id&&(e.groupIndex.push(n),e.tag_group_id=t.name)}))}))},submitLogin:function(){var e=this;this.$refs.form.validate().then((function(t){(0,i.enrollInfoEdit)(e.form).then((function(){uni.navigateTo({url:"/pages/enrollSuccess/enrollSuccess"})}))}))},openAgePicker:function(){this.agePicker=!0},ageCancel:function(){this.agePicker=!1},ageConfirm:function(e){this.age=e.value[0].label,this.form.age=e.value[0].id,this.agePicker=!1},openGroupPicker:function(){this.groupPicker=!0},groupCancel:function(){this.groupPicker=!1},groupConfirm:function(e){this.tag_group_id=e.value[0].name,this.form.tag_group_id=e.value[0].id,this.groupPicker=!1}}};t.default=a},cb29:function(e,t,n){var i=n("23e7"),a=n("81d5"),r=n("44d2");i({target:"Array",proto:!0},{fill:a}),r("fill")},cf0c:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAAXNSR0IArs4c6QAAADNQTFRFAAAAKioqMDAwKioqLi4uMzMzMTExMzMzMjIyMjIyMzMzMjIyMjIyMzMzMzMzMzMzMzMzZS4ZGwAAABB0Uk5TAAwQGCcoq6uvw8PHy9f3+64cUK0AAACGSURBVCjPjdJBEoQwCERRYlTGiNL3P+0sxpiE1qph+zbwC5nN1yRh8sdtlh3AFiwfAHY5QZYPADhFEe0nUEkl2CUlSbROgk29DJa2QTojacZy24P0VihbNZa6G/VswtYkWr2nkN2XUuuuQbChzmCh21+trwd4aK3ib61d7K21yWKunE3dli9kSBG4K53AKAAAAABJRU5ErkJggg=="},d0c3:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAARRJREFUKFON0b8vg1EUxvHv0zcSDH1ToxhE0tntIjFJbEj8D7YaqEHSdOskXQzva5D6E0wiKYPFamo7GHSzsFAsTf3oe4SE/tLWHe89n5vnnCNGHDvG496dIJYxO+XpZUMjUeD2kHLtumhrNArdFWihA+3/B9VAyV9klh2KLD87zlSiDky0UWtlOArcJdJSR99N6mV/ILIwVQCyXYOyqKBMNdeHrDDnMxk/By12T9beeWtMa7f2oO/cCf8IxRwQB2YAr28VZmvKVM6+7mWBKyGtDt1XFKW1Uy3+1MhC9wzy/0RmEWJd25VS57ssmD9EsXRP/gZmIc3mgbI3d70fyoqM8ZraBJJY65aYd81j+UJ5PgZF/gSfDF3u7Y4hBQAAAABJRU5ErkJggg=="},dcf2:function(e,t,n){"use strict";var i=n("4425"),a=n.n(i);a.a},deb0:function(e,t,n){"use strict";var i=n("65b3"),a=n.n(i);a.a},e3ba:function(e,t,n){"use strict";n.r(t);var i=n("416f"),a=n("64e7");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("deb0");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"25a08fca",null,!1,i["a"],void 0);t["default"]=u.exports}}]);