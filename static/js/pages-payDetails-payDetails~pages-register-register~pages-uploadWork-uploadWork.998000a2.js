(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-payDetails-payDetails~pages-register-register~pages-uploadWork-uploadWork"],{"121a":function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("14d9"),i("ac1f"),i("00b4"),i("d3b7");var a=n(i("5979")),o={name:"u-checkbox",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{isChecked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:"square",activeColor:null,inactiveColor:null,size:18,value:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}},computed:{elDisabled:function(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize:function(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize:function(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor:function(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor:function(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor:function(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape:function(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize:function(){return uni.$u.addUnit(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor:function(){var e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.isChecked?this.elInactiveColor:"transparent":this.isChecked?e:"transparent"},iconClasses:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.isChecked&&this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e},iconWrapStyle:function(){var e={};return e.backgroundColor=this.isChecked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.isChecked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=uni.$u.addUnit(this.elSize),e.height=uni.$u.addUnit(this.elSize),"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},checkboxStyle:function(){var e={};return this.parentData.borderBottom&&"row"===this.parentData.placement&&uni.$u.error("检测到您将borderBottom设置为true，需要同时将u-checkbox-group的placement设置为column才有效"),this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="8px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.updateParentData(),this.parent||uni.$u.error("u-checkbox必须搭配u-checkbox-group组件使用"),this.checked?this.isChecked=!0:uni.$u.test.array(this.parentData.value)&&(this.isChecked=this.parentData.value.some((function(t){return t===e.name})))},updateParentData:function(){this.getParentData("u-checkbox-group")},wrapperClickHandler:function(e){"right"===this.parentData.iconPlacement&&this.iconClickHandler(e)},iconClickHandler:function(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},labelClickHandler:function(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent:function(){var e=this;this.$emit("change",this.isChecked),this.$nextTick((function(){uni.$u.formValidate(e,"change")}))},setRadioCheckedStatus:function(){this.isChecked=!this.isChecked,this.emitEvent(),"function"===typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}},watch:{checked:function(){this.isChecked=this.checked}}};t.default=o},"16d4":function(e,t,i){"use strict";i.r(t);var n=i("99bf"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"222d":function(e,t,i){"use strict";var n=i("ff2c"),a=i.n(n);a.a},"22bf":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-4d483e4c], uni-scroll-view[data-v-4d483e4c], uni-swiper-item[data-v-4d483e4c]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-checkbox-group--row[data-v-4d483e4c]{display:flex;flex-direction:row}.u-checkbox-group--column[data-v-4d483e4c]{display:flex;flex-direction:column}',""]),e.exports=t},"2bfc":function(e,t,i){"use strict";i.r(t);var n=i("e1de"),a=i("fcd4");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("222d");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"3684d39c",null,!1,n["a"],void 0);t["default"]=c.exports},"42ee":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"u-checkbox-group",class:this.bemClass},[this._t("default")],2)},a=[]},5979:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a9e3");var n={props:{name:{type:[String,Number,Boolean],default:uni.$u.props.checkbox.name},shape:{type:String,default:uni.$u.props.checkbox.shape},size:{type:[String,Number],default:uni.$u.props.checkbox.size},checked:{type:Boolean,default:uni.$u.props.checkbox.checked},disabled:{type:[String,Boolean],default:uni.$u.props.checkbox.disabled},activeColor:{type:String,default:uni.$u.props.checkbox.activeColor},inactiveColor:{type:String,default:uni.$u.props.checkbox.inactiveColor},iconSize:{type:[String,Number],default:uni.$u.props.checkbox.iconSize},iconColor:{type:String,default:uni.$u.props.checkbox.iconColor},label:{type:[String,Number],default:uni.$u.props.checkbox.label},labelSize:{type:[String,Number],default:uni.$u.props.checkbox.labelSize},labelColor:{type:String,default:uni.$u.props.checkbox.labelColor},labelDisabled:{type:[String,Boolean],default:uni.$u.props.checkbox.labelDisabled}}};t.default=n},"5a5d":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3684d39c], uni-scroll-view[data-v-3684d39c], uni-swiper-item[data-v-3684d39c]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-checkbox[data-v-3684d39c]{display:flex;flex-direction:row;overflow:hidden;flex-direction:row;align-items:center}.u-checkbox-label--left[data-v-3684d39c]{flex-direction:row}.u-checkbox-label--right[data-v-3684d39c]{flex-direction:row-reverse;justify-content:space-between}.u-checkbox__icon-wrap[data-v-3684d39c]{box-sizing:border-box;transition-property:border-color,background-color,color;transition-duration:.2s;color:#606266;display:flex;flex-direction:row;align-items:center;justify-content:center;color:transparent;text-align:center;margin-right:6px;font-size:6px;border-width:1px;border-color:#c8c9cc;border-style:solid}.u-checkbox__icon-wrap--circle[data-v-3684d39c]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-3684d39c]{border-radius:3px}.u-checkbox__icon-wrap--checked[data-v-3684d39c]{color:#fff;background-color:red;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-3684d39c]{background-color:#ebedf0!important}.u-checkbox__icon-wrap--disabled--checked[data-v-3684d39c]{color:#c8c9cc!important}.u-checkbox__label[data-v-3684d39c]{word-wrap:break-word;margin-left:5px;margin-right:12px;color:#606266;font-size:15px}.u-checkbox__label--disabled[data-v-3684d39c]{color:#c8c9cc}',""]),e.exports=t},"688d":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a9e3");var n={props:{name:{type:String,default:uni.$u.props.checkboxGroup.name},value:{type:Array,default:uni.$u.props.checkboxGroup.value},shape:{type:String,default:uni.$u.props.checkboxGroup.shape},disabled:{type:Boolean,default:uni.$u.props.checkboxGroup.disabled},activeColor:{type:String,default:uni.$u.props.checkboxGroup.activeColor},inactiveColor:{type:String,default:uni.$u.props.checkboxGroup.inactiveColor},size:{type:[String,Number],default:uni.$u.props.checkboxGroup.size},placement:{type:String,default:uni.$u.props.checkboxGroup.placement},labelSize:{type:[String,Number],default:uni.$u.props.checkboxGroup.labelSize},labelColor:{type:[String],default:uni.$u.props.checkboxGroup.labelColor},labelDisabled:{type:Boolean,default:uni.$u.props.checkboxGroup.labelDisabled},iconColor:{type:String,default:uni.$u.props.checkboxGroup.iconColor},iconSize:{type:[String,Number],default:uni.$u.props.checkboxGroup.iconSize},iconPlacement:{type:String,default:uni.$u.props.checkboxGroup.iconPlacement},borderBottom:{type:Boolean,default:uni.$u.props.checkboxGroup.borderBottom}}};t.default=n},"6c34":function(e,t,i){var n=i("22bf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("179a5925",n,!0,{sourceMap:!1,shadowMode:!1})},"7bee":function(e,t,i){"use strict";i.r(t);var n=i("42ee"),a=i("16d4");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("9c39");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4d483e4c",null,!1,n["a"],void 0);t["default"]=c.exports},"99bf":function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("d81d"),i("14d9");var a=n(i("688d")),o={name:"u-checkbox-group",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],computed:{parentData:function(){return[this.value,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass:function(){return this.bem("checkbox-group",["placement"])}},watch:{parentData:function(){this.children.length&&this.children.map((function(e){"function"===typeof e.init&&e.init()}))}},data:function(){return{}},created:function(){this.children=[]},methods:{unCheckedOther:function(e){var t=[];this.children.map((function(e){e.isChecked&&t.push(e.name)})),this.$emit("change",t),this.$emit("input",t)}}};t.default=o},"9c39":function(e,t,i){"use strict";var n=i("6c34"),a=i.n(n);a.a},e1de:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uIcon:i("90e9").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-checkbox",class:["u-checkbox-label--"+e.parentData.iconPlacement,e.parentData.borderBottom&&"column"===e.parentData.placement&&"u-border-bottom"],style:[e.checkboxStyle],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.wrapperClickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:e.iconClasses,style:[e.iconWrapStyle],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.iconClickHandler.apply(void 0,arguments)}}},[e._t("icon",[i("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:e.elIconSize,color:e.elIconColor}})])],2),i("v-uni-text",{style:{color:e.elDisabled?e.elInactiveColor:e.elLabelColor,fontSize:e.elLabelSize,lineHeight:e.elLabelSize},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.labelClickHandler.apply(void 0,arguments)}}},[e._v(e._s(e.label))])],1)},o=[]},fcd4:function(e,t,i){"use strict";i.r(t);var n=i("121a"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},ff2c:function(e,t,i){var n=i("5a5d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("f3e12be0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);