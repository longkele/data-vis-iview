(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{733:function(e,t,n){var a=n(738);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(48).default)("309bcde4",a,!1,{})},734:function(e,t,n){var a=n(740);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(48).default)("9f04c74c",a,!1,{})},735:function(e,t,n){var a=n(742);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(48).default)("81bb6994",a,!1,{})},736:function(e,t,n){var a=n(747);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(48).default)("77ec0b88",a,!1,{})},737:function(e,t,n){"use strict";var a=n(733);n.n(a).a},738:function(e,t,n){(e.exports=n(47)(!1)).push([e.i,".anchor a {\n  opacity: 0;\n  font-size: 24px;\n  transition: opacity 0.2s ease-in-out;\n  margin-left: 5px;\n  position: relative;\n  top: 2px;\n}\n.anchor:hover a {\n  opacity: 1;\n}\n",""])},739:function(e,t,n){"use strict";var a=n(734);n.n(a).a},740:function(e,t,n){(e.exports=n(47)(!1)).push([e.i,"\ndiv[data-v-557e1337]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-557e1337], span.scale[data-v-557e1337], span.open-fiddle[data-v-557e1337]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-557e1337]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-557e1337]{\n    right: 50px;\n}\n.bg[data-v-557e1337] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-557e1337]{\n    right: 5px;\n}\nspan.copy[data-v-557e1337]:hover, span.scale[data-v-557e1337]:hover, span.open-fiddle[data-v-557e1337]:hover{\n    color: #5c6b77;\n}\n\n",""])},741:function(e,t,n){"use strict";var a=n(735);n.n(a).a},742:function(e,t,n){(e.exports=n(47)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},743:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"anchor"},[e.h1?n("h1",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h2?n("h2",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h3?n("h3",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h4?n("h4",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h5?n("h5",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h6?n("h6",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e._t("default"),e._v(" "),n("a",{attrs:{href:"#"+e.title_link}},[e._v("\n        #\n    ")])],2)};a._withStripped=!0;n(215);var o=n(745),i={props:{title:{type:String,default:""},h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean},computed:{title_link:function(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}}},s=(n(737),n(3)),r=Object(s.a)(i,a,[],!1,null,null,null);r.options.__file="website/components/anchor/index.vue";t.a=r.exports},744:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)};a._withStripped=!0;n(750),n(751),n(150),n(215);var o=n(752),i=n.n(o),s=(n(753),n(754)),r=n.n(s),l={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data:function(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},mounted:function(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,i.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,i.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip:function(){var e=this,t=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),n=new r.a(".copy",{text:function(){return t}});n.on("success",(function(t){t.clearSelection(),n.destroy(),e.copied=!0,"zh-CN"===e.docLang?e.$Message.success("代码已复制到剪贴板"):e.$Message.success("Code copied"),setTimeout((function(){e.copied=!1}),2e3)}))},scale:function(){this.openScale=!0},getSource:function(e,t){var n=new RegExp("<"+t+"[^>]*>"),a=e.match(n);return a?(a=a[0],e.slice(e.indexOf(a)+a.length,e.lastIndexOf("</"+t+">"))):""},openFiddle:function(){}}},d=(n(739),n(741),n(3)),c=Object(d.a)(l,a,[],!1,null,"557e1337",null);c.options.__file="website/components/code/index.vue";t.a=c.exports},746:function(e,t,n){"use strict";var a=n(736);n.n(a).a},747:function(e,t,n){(e.exports=n(47)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 10px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},748:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)};a._withStripped=!0;n(215);var o=n(745),i={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide:function(){return this.hideCode},isVertical:function(){return this.vertical},codeHeight:function(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style:function(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link:function(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode:function(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.$nextTick((function(){var t=e.$children[0].$children[0].$el.clientHeight,n=e.$children[0].$children[1].$el.clientHeight+20;e.code_height=n,n<=t&&!e.isCodeHide&&(e.showMore=!1),e.demo_height=e.isCodeHide?30:t,e.ready=!0}))}}},s=(n(746),n(3)),r=Object(s.a)(i,a,[],!1,null,null,null);r.options.__file="website/components/demo/index.vue";t.a=r.exports},779:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("数据表")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("折线图是用折线将各个数据点标志连接起来的图表，用于展现数据的变化趋势。")]),e._v(" "),n("div",{staticClass:"api"},[n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("chart.hideSizer")]),e._v(" "),n("td",[e._v("是否隐藏页数选择器")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("chart.hideElevator")]),e._v(" "),n("td",[e._v("是否隐藏跳页输入框")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("chart.downloadAble")]),e._v(" "),n("td",[e._v("是否可下载")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("true")])]),e._v(" "),n("tr",[n("td",[e._v("chart.customColumns")]),e._v(" "),n("td",[e._v("是否可控制展示该列")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("chart.columns")]),e._v(" "),n("td",[e._v("表头，其中的设置项可参考"),n("a",{attrs:{href:"http://iview.talkingdata.com/#/components/table"}},[e._v("iView Table 表格 column")])]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("chart.data")]),e._v(" "),n("td",[e._v("表数据")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("chart.api")]),e._v(" "),n("td",[e._v("表数据的API")]),e._v(" "),n("td",[e._v("string")]),e._v(" "),n("td",[e._v("[]")])])])])]),e._v(" "),n("inAnchor",{attrs:{title:"扩展数据",h2:""}}),e._v(" "),n("p",[e._v("数据表组件，对chart.columns做了一些扩展")]),e._v(" "),n("p",[e._v("扩展内容：chart.data对应列的数值为整型时，会通过render函数对数据进行格式化，如10688 格式化后为10,688")]),e._v(" "),n("div",{staticClass:"api"},[n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("column.renderDisabled")]),e._v(" "),n("td",[e._v("是否禁止格式化整型数据（组件会对整型的数据自动格式化，如果某个字段不想格式化，可以设置这个字段为true）")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("false")])])])])]),e._v(" "),n("Demo",{attrs:{title:"数据表格基本用法",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("DataVisItem",{attrs:{chart:e.code.simple.data.chart},on:{"on-field-change":e.handleFieldChange}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("chart")]),e._v("，即可渲染一个图表。")])]),e._v(" "),n("i-code",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"通过API获取表格数据",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("DataVisItem",{attrs:{chart:e.code.api.data.chart},on:{"on-field-change":e.handleFieldChange}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("chart")]),e._v("，即可渲染一个图表。")])]),e._v(" "),n("i-code",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.api.code))])],1)],1)])};a._withStripped=!0;var o=n(749),i=n(743),s=n(744),r=n(748),l={},d={label:"数据表格",type:"table",hideElevator:!0,hideSizer:!0,customColumns:["name","age","address","money","name-1","age-1","address-1","money-1"],downloadAble:!0,columns:[{title:"Name-api",key:"name",defaultShow:!0},{title:"Age-api",key:"age",sortable:!0,defaultShow:!1},{title:"整型（不格式化）",renderDisabled:!0,key:"money",sortable:!0,defaultShow:!1},{title:"Address-api",key:"address",defaultShow:!0},{title:"Date-api",key:"date",defaultShow:!0,sortable:!0,sortType:"desc"},{title:"Name-api-1",key:"name-1",defaultShow:!0},{title:"Age-api-1",key:"age-1",sortable:!0,defaultShow:!1},{title:"Address-api-1",key:"address-1",defaultShow:!0},{title:"Date-api-1",key:"date-1",defaultShow:!0},{title:"Money-1",key:"money-1",defaultShow:!0}],data:[{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-09",money:121212122112.22223,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-09","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-08",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-08","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-02",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-02","money-1":121212122112},{name:"John Brown-api",age:18,address:"内容1",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"内容1",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112}]};l.data={chart:d},l.code="\nconst chart = "+JSON.stringify(d,null,4)+";\n\n<template>\n    <DataVisItem\n        :chart='chart'\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            chart\n        };\n    }\n};\n<\/script>\n";var c={},p={label:"数据表格API",type:"table",customColumns:["name","age","address"],api:"/chartTableApi"};c.data={chart:p},c.code="\nconst chart = "+JSON.stringify(p,null,4)+";\n\n<template>\n    <DataVisItem\n        :chart='chart'\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            chart\n        };\n    }\n};\n<\/script>\n";var h={simple:l,api:c},v={components:{iArticle:o.a,inAnchor:i.a,iCode:s.a,Demo:r.a},data:function(){return{code:h}},methods:{handleFieldChange:function(e,t){console.log(e,t)}}},_=n(3),u=Object(_.a)(v,a,[],!1,null,null,null);u.options.__file="website/page/config-guide/table/Table/index.vue";var m=u.exports;t.default=m}}]);