(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cancellation-cancellation"],{"06ce":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var e=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"card-box"},[this._t("default")],2)},a=[]},"0e036":function(t,n,i){t.exports=i.p+"static/img/cancellation.79ece8b5.png"},"1e2b":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={name:"cardBox",data:function(){return{}}}},"3cbf":function(t,n,i){"use strict";i.r(n);var e=i("1e2b"),a=i.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(c);n["default"]=a.a},4212:function(t,n,i){var e=i("ed23");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("35174e95",e,!0,{sourceMap:!1,shadowMode:!1})},"462b":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"nav-box",style:{backgroundColor:t.backgroundColor}},[i("v-uni-view",{staticClass:"status_bar"}),i("v-uni-view",{staticClass:"nav"},[i("v-uni-view",{staticClass:"left",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}},[t.leftIcon?i("v-uni-image",{attrs:{src:t.leftIcon,mode:"widthFix"}}):t._e(),t.leftText?i("v-uni-text",[t._v(t._s(t.leftText))]):t._e()],1),i("v-uni-view",{staticClass:"title",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleTitle.apply(void 0,arguments)}}},[t.title?i("v-uni-text",[t._v(t._s(t.title))]):t._e(),t.titleIcon?i("v-uni-image",{attrs:{src:t.titleIcon,mode:"widthFix"}}):t._e()],1),i("v-uni-view",{staticClass:"right"},[t.rightText?i("v-uni-text",[t._v(t._s(t.rightText))]):t._e(),t.rightIcon?i("v-uni-image",{attrs:{src:t.rightIcon,mode:"widthFix"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleRightIcon.apply(void 0,arguments)}}}):t._e()],1)],1)],1)},a=[]},"59f0":function(t,n,i){"use strict";i.r(n);var e=i("b04a"),a=i("b57c");for(var c in a)["default"].indexOf(c)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(c);i("bc97");var r=i("f0c5"),o=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"6fce42ba",null,!1,e["a"],void 0);n["default"]=o.exports},6994:function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{hasBalance:!1}},methods:{handleCancellation:function(){uni.navigateTo({url:"/pages/cancelOver/cancelOver"})}}};n.default=e},"7fe8":function(t,n,i){"use strict";var e=i("e06d"),a=i.n(e);a.a},"814f":function(t,n,i){"use strict";var e=i("c154"),a=i.n(e);a.a},"85fd":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".card-box[data-v-5c3848b7]{padding:0 %?24?%;margin-bottom:%?24?%;background:#fff;border-radius:%?16?%}",""]),t.exports=n},9181:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAKhQTFRFAAAAKioqLi4uLCwsKioqMzMzMTExLy8vLi4uLCwsMTExMDAwLi4uLS0tMzMzMjIyLy8vMzMzMjIyLi4uMjIyMDAwLy8vMzMzLy8vMjIyMzMzMTExMjIyMzMzMjIyMzMzMzMzMjIyMzMzMjIyMzMzMzMzMjIyMjIyMzMzMzMzMjIyMjIyMzMzMzMzMzMzMjIyMzMzMjIyMjIyMzMzMzMzMjIyMzMzMzMzlVjI8gAAADd0Uk5TAAwWFxgZGhscHR8gISIjJCYoKSwuMDEyRpOboKOrsbXExc/W2Nna29zd3+Dh4uPl5+nq7O3v9YTwzN4AAACtSURBVDjLzdTHEoJQDIVhLGBv2HsBLCAqtv/938zFdZ84c5kx62/OIskcx/nD8QO2RY3LgIXs+neAROlYii4DICoJbmDyIk9yj1zcoSK44dOuGxl3qglu/MrFnRvSXoxLmtKBNyZPdM4bgIn8gmsA0o4I6ykAF1m2jLx2bcpYK6vHH+WtZ1PutdL7Sl8rM5vSjYxsyzIEYCW/khcCxIp+dANgpmnc8nw3LeRZ6R/ZSDETNGwd9QAAAABJRU5ErkJggg=="},"990a":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{leftIcon:{type:String,default:i("9181")},leftText:{type:String,default:""},title:{type:String,default:""},titleIcon:{type:String,default:""},rightText:{type:String,default:""},rightIcon:{type:String,default:""},backgroundColor:{type:String,default:"#FFFFFF"}},watch:{title:{handler:function(t,n){console.log(t)},deep:!0,immediate:!0}},data:function(){return{}},methods:{back:function(){uni.navigateBack()},handleRightIcon:function(){this.$emit("handleRightIcon")},handleTitle:function(){this.$emit("handleTitle")}}};n.default=e},b04a:function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return c})),i.d(n,"a",(function(){return e}));var e={navbar:i("f344").default,cardBox:i("f77f").default,uButton:i("ec1f").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("navbar",{attrs:{title:"注销账号"}}),e("v-uni-view",{staticStyle:{height:"var(--status-bar-height)"}}),e("v-uni-view",{staticStyle:{height:"88rpx"}}),t.hasBalance?e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"img-box"},[e("v-uni-image",{attrs:{src:i("0e036"),mode:"widthFix"}}),e("v-uni-view",{staticClass:"title"},[e("v-uni-view",[t._v("您当前账号有未提现余额暂不支持注销")])],1)],1)],1):e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"img-box"},[e("v-uni-image",{attrs:{src:i("0e036"),mode:"widthFix"}}),e("v-uni-view",{staticClass:"title"},[t._v("您即将注销当前账号")])],1),e("cardBox",[[e("v-uni-view",{staticClass:"cancellation-box"},[e("v-uni-view",{staticClass:"tips-title"},[t._v("账号注销后以下信息将被清空无法找回")]),e("v-uni-view",{staticClass:"tips-item"},[e("v-uni-view",{staticClass:"circle"}),e("v-uni-view",[t._v("身份账号与交易记录")])],1),e("v-uni-view",{staticClass:"tips-item"},[e("v-uni-view",{staticClass:"circle"}),e("v-uni-view",[t._v("各类权益、如服务等级等")])],1),e("v-uni-view",{staticClass:"tips-item"},[e("v-uni-view",{staticClass:"circle"}),e("v-uni-view",[t._v("其他所有与账号相关的信息")])],1)],1)]],2),e("v-uni-view",{staticClass:"explain"},[t._v("请确保所有交易已经完成且不存在纠纷，账户上出后的历史交易可能产生的资金退回权益等将视作自动放弃")]),e("v-uni-view",{staticClass:"cancellation-btn"},[e("u-button",{attrs:{shape:"circle",size:"large"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleCancellation.apply(void 0,arguments)}}},[t._v("仍要注销")])],1)],1)],1)},c=[]},b57c:function(t,n,i){"use strict";i.r(n);var e=i("6994"),a=i.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(c);n["default"]=a.a},bc97:function(t,n,i){"use strict";var e=i("4212"),a=i.n(e);a.a},c154:function(t,n,i){var e=i("85fd");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("5642fb1a",e,!0,{sourceMap:!1,shadowMode:!1})},d848:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.nav-box[data-v-18af7190]{position:fixed;top:0;left:0;width:100%;z-index:999}.nav-box .status_bar[data-v-18af7190]{height:0;width:100%}.nav-box .nav[data-v-18af7190]{display:flex;justify-content:space-between;align-items:center;width:100%;height:%?88?%;padding:0 %?24?%}.nav-box .nav .left[data-v-18af7190]{min-width:%?100?%}.nav-box .nav .left uni-image[data-v-18af7190]{width:%?40?%;height:%?40?%}.nav-box .nav .title[data-v-18af7190]{font-size:%?36?%;font-weight:700;color:#333}.nav-box .nav .title uni-image[data-v-18af7190]{margin-left:%?10?%;width:%?28?%;height:%?28?%}.nav-box .nav .right[data-v-18af7190]{text-align:right;min-width:%?100?%}.nav-box .nav .right uni-image[data-v-18af7190]{width:%?40?%;height:%?40?%}',""]),t.exports=n},e06d:function(t,n,i){var e=i("d848");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("a1ec9e14",e,!0,{sourceMap:!1,shadowMode:!1})},ec3d:function(t,n,i){"use strict";i.r(n);var e=i("990a"),a=i.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(c);n["default"]=a.a},ed23:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-6fce42ba]{padding:0 %?32?%}.container .img-box[data-v-6fce42ba]{margin-top:%?120?%;margin-bottom:%?64?%;text-align:center;font-size:%?40?%;font-weight:700;color:#ff5700}.container .img-box uni-image[data-v-6fce42ba]{width:%?160?%;height:%?160?%}.container .img-box .title[data-v-6fce42ba]{display:flex;justify-content:center}.container .img-box .title uni-view[data-v-6fce42ba]{width:%?440?%;color:#333}.container .cancellation-box[data-v-6fce42ba]{padding:%?36?% 0;font-size:%?34?%;font-weight:700;color:#333}.container .cancellation-box .tips-title[data-v-6fce42ba]{margin-bottom:%?36?%}.container .cancellation-box .tips-item[data-v-6fce42ba]{display:flex;align-items:center;margin-bottom:%?36?%;font-size:%?32?%;color:#333}.container .cancellation-box .tips-item[data-v-6fce42ba]:nth-last-child(1){margin-bottom:0}.container .cancellation-box .tips-item .circle[data-v-6fce42ba]{width:%?12?%;height:%?12?%;margin-right:%?16?%;background:#ff5700;border-radius:50%}.container .explain[data-v-6fce42ba]{font-size:%?28?%;color:#999}.container .cancellation-btn[data-v-6fce42ba]{position:fixed;bottom:%?80?%;left:0;padding:0 %?32?%;width:100%}.container .cancellation-btn .u-button[data-v-6fce42ba]{font-size:%?36?%;font-weight:700;color:#fff;background-color:#ff5700}',""]),t.exports=n},f344:function(t,n,i){"use strict";i.r(n);var e=i("462b"),a=i("ec3d");for(var c in a)["default"].indexOf(c)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(c);i("7fe8");var r=i("f0c5"),o=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"18af7190",null,!1,e["a"],void 0);n["default"]=o.exports},f77f:function(t,n,i){"use strict";i.r(n);var e=i("06ce"),a=i("3cbf");for(var c in a)["default"].indexOf(c)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(c);i("814f");var r=i("f0c5"),o=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"5c3848b7",null,!1,e["a"],void 0);n["default"]=o.exports}}]);