(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-infoFill-infoFill"],{"0058":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAICAYAAAAiJnXPAAAAAXNSR0IArs4c6QAAAKNJREFUKFN10SESAiEUBuD/ZzbaKF4DuIpBg81isNm9gN2gTWc07FUYrmEhaXTAwZEZFnZf5f/gvQe11gcA+xjjwzm3BfBBW51S6kRyCeBIrfWL5Oyf6621qwp2xpg7gEXKxBjfVEqdhRCb4vISDkDKhBAuBNAcAOi992sp5TW/UHaSUKox+AQwH+sgoymYzWDWEk3BZjk1+sG8XpI3a+2u/oYvdOlE2Q2wk/wAAAAASUVORK5CYII="},"2bce":function(e,t,i){"use strict";var n=i("dc24"),r=i.n(n);r.a},"2fff":function(e,t,i){"use strict";i.r(t);var n=i("3c70"),r=i("7172");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("dcf2");var o=i("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"6a350351",null,!1,n["a"],void 0);t["default"]=s.exports},"3c70":function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uPopup:i("dbc8").default,uLoadingIcon:i("f4a5").default,uButton:i("ad96").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("u-popup",{attrs:{show:e.show},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.closeHandler.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-picker"},[n("v-uni-view",{staticClass:"picker-header"},[e._v(e._s(e.title)),n("v-uni-image",{attrs:{src:i("cf0c"),mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}})],1),n("v-uni-picker-view",{staticClass:"u-picker__view",style:{height:""+e.$u.addUnit(e.visibleItemCount*e.itemHeight)},attrs:{indicatorStyle:"height: "+e.$u.addUnit(e.itemHeight),value:e.innerIndex,immediateChange:e.immediateChange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeHandler.apply(void 0,arguments)}}},e._l(e.innerColumns,(function(t,i){return n("v-uni-picker-view-column",{key:i,staticClass:"u-picker__view__column"},e._l(t,(function(r,a){return e.$u.test.array(t)?n("v-uni-text",{key:a,staticClass:"u-picker__view__column__item u-line-1",style:{height:e.$u.addUnit(e.itemHeight),lineHeight:e.$u.addUnit(e.itemHeight),fontWeight:a===e.innerIndex[i]?"bold":"normal"}},[e._v(e._s(e.getItemText(r)))]):e._e()})),1)})),1),e.loading?n("v-uni-view",{staticClass:"u-picker--loading"},[n("u-loading-icon",{attrs:{mode:"circle"}})],1):e._e(),n("v-uni-view",{staticClass:"picker-footer"},[n("u-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1)},a=[]},4425:function(e,t,i){var n=i("61e8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("302f794d",n,!0,{sourceMap:!1,shadowMode:!1})},"4c2a":function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("c7eb")),a=n(i("1da1"));i("ac1f"),i("00b4"),i("d81d"),i("a434"),i("cb29");var o=n(i("85bd")),s={name:"u-picker",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{lastIndex:[],innerIndex:[],innerColumns:[],columnIndex:0}},watch:{defaultIndex:{immediate:!0,handler:function(e){this.setIndexs(e,!0)}},columns:{immediate:!0,handler:function(e){this.setColumns(e)}}},methods:{getItemText:function(e){return uni.$u.test.object(e)?e[this.keyName]:e},closeHandler:function(){this.closeOnClickOverlay&&this.$emit("close")},cancel:function(){this.$emit("cancel")},confirm:function(){var e=this;this.$emit("confirm",{indexs:this.innerIndex,value:this.innerColumns.map((function(t,i){return t[e.innerIndex[i]]})),values:this.innerColumns})},changeHandler:function(e){for(var t=e.detail.value,i=0,n=0,r=0;r<t.length;r++){var a=t[r];if(a!==(this.lastIndex[r]||0)){n=r,i=a;break}}this.columnIndex=n;var o=this.innerColumns;this.setLastIndex(t),this.setIndexs(t),this.$emit("change",{picker:this,value:this.innerColumns.map((function(e,i){return e[t[i]]})),index:i,indexs:t,values:o,columnIndex:n})},setIndexs:function(e,t){this.innerIndex=uni.$u.deepClone(e),t&&this.setLastIndex(e)},setLastIndex:function(e){this.lastIndex=uni.$u.deepClone(e)},setColumnValues:function(e,t){this.innerColumns.splice(e,1,t);for(var i=uni.$u.deepClone(this.innerIndex),n=0;n<this.innerColumns.length;n++)n>this.columnIndex&&(i[n]=0);this.setIndexs(i)},getColumnValues:function(e){return(0,a.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.$u.sleep();case 2:case"end":return e.stop()}}),e)})))(),this.innerColumns[e]},setColumns:function(e){this.innerColumns=uni.$u.deepClone(e),0===this.innerIndex.length&&(this.innerIndex=new Array(e.length).fill(0))},getIndexs:function(){return this.innerIndex},getValues:function(){var e=this;return(0,a.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.$u.sleep();case 2:case"end":return e.stop()}}),e)})))(),this.innerColumns.map((function(t,i){return t[e.innerIndex[i]]}))}}};t.default=s},"4d23":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac1f"),i("00b4"),i("d9e2"),i("d401"),i("e25e"),i("14d9"),i("d3b7"),i("ddb0");var n=i("87cd"),r={data:function(){return{agePicker:!1,groupPicker:!1,sexPicker:!1,areaPicker:!1,title:"",imgName:"",majorName:"",ageIndex:[0],groupIndex:[0],sexIndex:[0],tag_group_id:"",age:"",gender:"",ageList:[[{id:6,label:"6岁"},{id:7,label:"7岁"},{id:8,label:"8岁"},{id:9,label:"9岁"},{id:10,label:"10岁"},{id:11,label:"11岁"},{id:12,label:"12岁"},{id:13,label:"13岁"},{id:14,label:"14岁"},{id:15,label:"15岁"},{id:16,label:"16岁"},{id:17,label:"17岁"},{id:18,label:"18岁"}]],groupList:[],sexList:[[{id:1,label:"男"},{id:2,label:"女"}]],areaList:[["福州市","厦门市","莆田市","三明市","泉州市","漳州市","南平市","龙岩市","宁德市"],["鼓楼区","台江区","仓山区","马尾区","晋安区","长乐区","闽侯县","连江县","罗源县","闽清县","永泰县","平潭县","福清市"]],columnData:[["鼓楼区","台江区","仓山区","马尾区","晋安区","长乐区","闽侯县","连江县","罗源县","闽清县","永泰县","平潭县","福清市"],["思明区","海沧区","湖里区","集美区","同安区","翔安区"],["仙游县","城厢区","涵江区","荔城区","秀屿区"],["永安市","明溪县","清流县","宁化县","大田县","尤溪县","将乐县","泰宁县","建宁县","三元区","沙县区"],["石狮市","晋江市","南安市","惠安县","安溪县","永春县","德化县","金门县","鲤城区","丰泽区","洛江区","泉港区"],["云霄县","漳浦县","诏安县","东山县","南靖县","平和县","华安县","芗城区","龙文区","长泰区","龙海区"],["邵武市","武夷山市","建瓯市","顺昌县","蒲城县","光泽县","松溪县","政和县","延平区","建阳区"],["漳平市","长汀县","上杭县","武平县","连城县","新罗区","永定区"],["福安市","福鼎市","霞浦县","古田县","屏南县","寿宁县","周宁县","柘荣县","蕉城区"]],form:{phone:"",age:"",tag_group_id:"",gender:"",province:"福建省",city:"福州市",district:"仓山区",address:"",school_name:""},rules:{phone:{type:"string",required:!0,validator:function(e,t,i){t?1==/^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(t)?i():i(new Error("请输入合法的手机号")):i(new Error("请输入号码"))},trigger:["blur","change"]},name:{type:"string",required:!0,message:"请输入参赛选手姓名",trigger:["blur","change"]},email:{type:"string",required:!0,validator:function(e,t,i){t?/^\w+@\w+(\.\w+)+$/.test(t)?i():i(new Error("请输入合法邮箱")):i(new Error("请输入邮箱"))},trigger:["blur","change"]},cert:{type:"string",required:!0,message:"请输入选手身份证号",trigger:["blur","change"]},school_name_show:{type:"string",required:!0,message:"请输入学校名称",trigger:["blur","change"]},address:{type:"string",required:!0,message:"请输入详细地址",trigger:["blur","change"]}}}},onLoad:function(e){var t=JSON.parse(e.obj);this.title=t.name,this.imgName=t.ename,this.majorName=t.name+"组",this.form.tag_id=t.id,this.age=this.ageList[0][0].label,this.form.age=this.ageList[0][0].id,this.gender=this.sexList[0][0].label,this.form.gender=this.sexList[0][0].id;var i=uni.getStorageSync("schoolname");i&&(this.form.school_name=i,this.form.school_name_show=i),this.getGroupList()},computed:{},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{getGroupList:function(){var e=this;(0,n.tagGroupList)().then((function(t){e.groupList.push(t.data),e.tag_group_id=e.groupList[0][0].name,e.form.tag_group_id=e.groupList[0][0].id}))},submitLogin:function(){var e=this;this.$refs.form.validate().then((function(t){(0,n.enrollInfoAdd)(e.form).then((function(e){uni.navigateTo({url:"/pages/enrollSuccess/enrollSuccess"})}))}))},changeHandler:function(e){var t=e.columnIndex,i=(e.value,e.values,e.index),n=e.picker,r=void 0===n?this.$refs.uPicker:n;0===t&&r.setColumnValues(1,this.columnData[i])},openAgePicker:function(){this.agePicker=!0},ageCancel:function(){this.agePicker=!1},ageConfirm:function(e){this.age=e.value[0].label,this.form.age=e.value[0].id,this.agePicker=!1},openGroupPicker:function(){this.groupPicker=!0},groupCancel:function(){this.groupPicker=!1},groupConfirm:function(e){this.tag_group_id=e.value[0].name,this.form.tag_group_id=e.value[0].id,this.groupPicker=!1},openSexPicker:function(){this.sexPicker=!0},sexCancel:function(){this.sexPicker=!1},sexConfirm:function(e){this.gender=e.value[0].label,this.form.gender=e.value[0].id,this.sexPicker=!1},openAreaPicker:function(){this.areaPicker=!0},areaCancel:function(){this.areaPicker=!1},areaConfirm:function(e){this.form.city=e.value[0],this.form.district=e.value[1],this.areaPicker=!1}}};t.default=r},"61e8":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-6a350351], uni-scroll-view[data-v-6a350351], uni-swiper-item[data-v-6a350351]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-picker[data-v-6a350351]{position:relative}.u-picker__view__column[data-v-6a350351]{display:flex;flex-direction:row;flex:1;justify-content:center}.u-picker__view__column__item[data-v-6a350351]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;text-align:center;display:block;color:#303133}.u-picker__view__column__item--disabled[data-v-6a350351]{cursor:not-allowed;opacity:.35}.u-picker--loading[data-v-6a350351]{position:absolute;top:0;right:0;left:0;bottom:0;display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:hsla(0,0%,100%,.87);z-index:1000}.u-picker .picker-header[data-v-6a350351]{position:relative;height:%?152?%;line-height:%?152?%;text-align:center;font-size:%?30?%;font-weight:700;color:#333}.u-picker .picker-header uni-image[data-v-6a350351]{position:absolute;right:%?48?%;top:%?64?%;width:%?26?%;height:%?26?%}.u-picker .picker-footer[data-v-6a350351]{border-top:%?1?% solid #eee}.u-picker .picker-footer .u-button[data-v-6a350351]{height:%?104?%;font-size:%?36?%;font-weight:700;color:#3bad55;background-color:#fff;border:none}',""]),e.exports=t},7172:function(e,t,i){"use strict";i.r(t);var n=i("4c2a"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"7bad":function(e,t,i){"use strict";i.r(t);var n=i("4d23"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"85ae":function(e,t,i){"use strict";i.r(t);var n=i("b6f3"),r=i("7bad");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("2bce");var o=i("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"3e2098d2",null,!1,n["a"],void 0);t["default"]=s.exports},"85bd":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a9e3");var n={props:{show:{type:Boolean,default:uni.$u.props.picker.show},showToolbar:{type:Boolean,default:uni.$u.props.picker.showToolbar},title:{type:String,default:uni.$u.props.picker.title},columns:{type:Array,default:uni.$u.props.picker.columns},loading:{type:Boolean,default:uni.$u.props.picker.loading},itemHeight:{type:[String,Number],default:uni.$u.props.picker.itemHeight},cancelText:{type:String,default:uni.$u.props.picker.cancelText},confirmText:{type:String,default:uni.$u.props.picker.confirmText},cancelColor:{type:String,default:uni.$u.props.picker.cancelColor},confirmColor:{type:String,default:uni.$u.props.picker.confirmColor},visibleItemCount:{type:[String,Number],default:uni.$u.props.picker.visibleItemCount},keyName:{type:String,default:uni.$u.props.picker.keyName},closeOnClickOverlay:{type:Boolean,default:uni.$u.props.picker.closeOnClickOverlay},defaultIndex:{type:Array,default:uni.$u.props.picker.defaultIndex},immediateChange:{type:Boolean,default:uni.$u.props.picker.immediateChange}}};t.default=n},b0ab:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-3e2098d2]{background-color:#f7f7f7;margin-top:%?88?%}.header-img[data-v-3e2098d2]{font-size:0}.header-img uni-image[data-v-3e2098d2]{width:100%}.container[data-v-3e2098d2]{padding:%?24?% %?24?% 0 %?24?%}.container .form-box[data-v-3e2098d2]{padding:%?24?% %?24?% 0 %?24?%;width:100%;background:#fff;border-radius:%?24?%}.container .form-box .form-header[data-v-3e2098d2]{display:flex;justify-content:space-between}.container .form-box .form-header .form-title[data-v-3e2098d2]{font-size:%?32?%;font-weight:800}.container .form-box .form-header .form-tips[data-v-3e2098d2]{display:flex;align-items:center;justify-content:center;padding:0 %?24?%;height:%?48?%;line-height:%?48?%;color:#ff9231;font-size:%?24?%;background:#fff9f4;border-radius:%?16?%}.container .form-box .form-item[data-v-3e2098d2]{border-bottom:%?0.5?% solid #ccc}.container .form-box .form-item[data-v-3e2098d2]:nth-last-child(1){border-bottom:none}.container .form-box .form-item .u-input[data-v-3e2098d2]{padding:0!important;height:%?100?%;font-size:%?36?%;border:none;border-radius:0;color:#303133}.container .form-box .form-item uni-image[data-v-3e2098d2]{width:%?13?%}.container .form-box .select-box[data-v-3e2098d2]{display:flex;align-items:center;justify-content:end;height:%?100?%;width:100%}.container .form-box .select-box uni-image[data-v-3e2098d2]{width:%?13?%;margin-left:%?12?%}.container .form-box[data-v-3e2098d2]  .u-form-item__body__right__message{margin:0!important}.container .form-box[data-v-3e2098d2]  .u-form-item__body .u-form-item__body__left{width:auto!important}.container .form-box[data-v-3e2098d2]  .u-input__content__field-wrapper__field{text-align:right!important}.container .login-btn[data-v-3e2098d2]{margin:%?64?% %?56?% %?48?% %?56?%}',""]),e.exports=t},b6f3:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={navbar:i("9568").default,"u-Form":i("8e4a").default,uFormItem:i("5bf5").default,uInput:i("3c1b").default,uButton:i("ad96").default,uPicker:i("2fff").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"box"},[n("navbar",{attrs:{title:e.title+"信息填写"}}),n("v-uni-view",{staticStyle:{height:"var(--status-bar-height)"}}),n("v-uni-view",{staticClass:"header-img"},[n("v-uni-image",{attrs:{src:"../../static/infoFill/"+e.imgName+"1.png",mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"form-box"},[n("v-uni-view",{staticClass:"form-header"},[n("v-uni-view",{staticClass:"form-title"},[e._v("报名信息")]),n("v-uni-view",{staticClass:"form-tips"},[e._v("Tips：以下信息均为必填项")])],1),n("u--form",{ref:"form",staticClass:"form-container",attrs:{model:e.form,rules:e.rules}},[n("u-form-item",{staticClass:"form-item",attrs:{label:"专业名称"}},[n("u-input",{attrs:{type:"text",readonly:!0},model:{value:e.majorName,callback:function(t){e.majorName=t},expression:"majorName"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"选手年龄",prop:"age"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openAgePicker.apply(void 0,arguments)}}},[n("u-input",{attrs:{type:"text",readonly:!0},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}},[n("template",{slot:"suffix"},[n("v-uni-image",{attrs:{src:i("0058"),mode:"widthFix"}})],1)],2)],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"组别名称",prop:"tag_group_id"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openGroupPicker.apply(void 0,arguments)}}},[n("u-input",{attrs:{type:"text",readonly:!0},model:{value:e.tag_group_id,callback:function(t){e.tag_group_id=t},expression:"tag_group_id"}},[n("template",{slot:"suffix"},[n("v-uni-image",{attrs:{src:i("0058"),mode:"widthFix"}})],1)],2)],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"选手姓名",prop:"name"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入参赛选手姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"电子邮箱",prop:"email"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入电子邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"性别",prop:"gender"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openSexPicker.apply(void 0,arguments)}}},[n("u-input",{attrs:{type:"text",readonly:!0},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[n("template",{slot:"suffix"},[n("v-uni-image",{attrs:{src:i("0058"),mode:"widthFix"}})],1)],2)],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"身份证号",prop:"cert"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入选手身份证号"},model:{value:e.form.cert,callback:function(t){e.$set(e.form,"cert",t)},expression:"form.cert"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"学校/机构",prop:"school_name_show"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入学校名称"},model:{value:e.form.school_name_show,callback:function(t){e.$set(e.form,"school_name_show",t)},expression:"form.school_name_show"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"家长手机号码",prop:"phone"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入手机号码"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"所属区/县",prop:"district"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openAreaPicker.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"select-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openAreaPicker.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"select-word"},[e._v(e._s(e.form.province+e.form.city+e.form.district))]),n("v-uni-image",{attrs:{src:i("0058"),mode:"widthFix"}})],1)],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"联系地址",prop:"address"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入详细地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1)],1),n("v-uni-view",{staticClass:"login-btn"},[n("u-button",{attrs:{customStyle:"border-radius:51rpx;height: 102rpx;font-size:32rpx;box-shadow: 0px 16px 32px 1px rgba(239,152,1,0.36);",color:"linear-gradient(85deg, #FFCB6F 0%, #FFA900 100%)"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitLogin.apply(void 0,arguments)}}},[e._v("提交报名")])],1)],1),n("u-picker",{attrs:{show:e.agePicker,title:"年龄",columns:e.ageList,defaultIndex:e.ageIndex,keyName:"label",visibleItemCount:"4"},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.ageCancel.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.ageConfirm.apply(void 0,arguments)}}}),n("u-picker",{attrs:{show:e.groupPicker,title:"组别",columns:e.groupList,defaultIndex:e.groupIndex,keyName:"name",visibleItemCount:"3"},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.groupCancel.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.groupConfirm.apply(void 0,arguments)}}}),n("u-picker",{attrs:{show:e.sexPicker,title:"性别",columns:e.sexList,defaultIndex:e.sexIndex,keyName:"label",visibleItemCount:"3"},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.sexCancel.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.sexConfirm.apply(void 0,arguments)}}}),n("u-picker",{attrs:{show:e.areaPicker,title:"所属区/县",columns:e.areaList,visibleItemCount:"4"},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.areaCancel.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.areaConfirm.apply(void 0,arguments)},change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeHandler.apply(void 0,arguments)}}})],1)},a=[]},cb29:function(e,t,i){var n=i("23e7"),r=i("81d5"),a=i("44d2");n({target:"Array",proto:!0},{fill:r}),a("fill")},cf0c:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAAXNSR0IArs4c6QAAADNQTFRFAAAAKioqMDAwKioqLi4uMzMzMTExMzMzMjIyMjIyMzMzMjIyMjIyMzMzMzMzMzMzMzMzZS4ZGwAAABB0Uk5TAAwQGCcoq6uvw8PHy9f3+64cUK0AAACGSURBVCjPjdJBEoQwCERRYlTGiNL3P+0sxpiE1qph+zbwC5nN1yRh8sdtlh3AFiwfAHY5QZYPADhFEe0nUEkl2CUlSbROgk29DJa2QTojacZy24P0VihbNZa6G/VswtYkWr2nkN2XUuuuQbChzmCh21+trwd4aK3ib61d7K21yWKunE3dli9kSBG4K53AKAAAAABJRU5ErkJggg=="},dc24:function(e,t,i){var n=i("b0ab");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("4d696d64",n,!0,{sourceMap:!1,shadowMode:!1})},dcf2:function(e,t,i){"use strict";var n=i("4425"),r=i.n(n);r.a}}]);