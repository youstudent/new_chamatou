webpackJsonp([1],{25:function(t,e,a){a(79);var s=a(5)(a(86),a(72),null,null);t.exports=s.exports},26:function(t,e,a){"use strict";var s=a(69),i=a.n(s),n={install:function(t){t.component("v-loading",i.a)}};e.a=n},27:function(t,e,a){"use strict";var s=a(71),i=a.n(s),n={install:function(t){t.component("v-msg",i.a)}};e.a=n},28:function(t,e,a){"use strict";var s=a(2),i=a(85),n=a(70),l=a.n(n),r=a(68),o=a.n(r);s.default.use(i.a),e.a=new i.a({routes:[{path:"/login",name:"login",component:l.a},{path:"/charts",name:"charts",component:o.a},{path:"/",redirect:"/login"}]})},29:function(t,e,a){"use strict";var s=a(23),i=a.n(s);e.a={install:function(t){t.prototype.port={realTimeData:"statement/actual-data",statementData:"statement/operating-data",SeniorityData:"statement/goods",caller:"statement/wx-user",login:"login/index"},t.prototype.hostUrl="http://192.168.2.222:8081/",t.prototype.ajax=function(t,e,a,s,i){var n=this;0==i||(this.isLoading=!0,this.iSsuccess=!0),$.ajax({type:a,url:n.hostUrl+t,data:e,timeout:15e3,dataType:"json",success:function(t){0==i||(n.isLoading=!1,n.iSsuccess=!1),s(t)},error:function(t,e,a){console.log(e),"timeout"==e?(n.isLoading=!1,n.iSsuccess=!1):"error"==e?(n.isLoading=!1,n.iSsuccess=!1):"parsererror"==e&&(n.isLoading=!1,n.iSsuccess=!1)}})},t.prototype.msgHint=function(t){var e=this;this.msgShow=!0,this.msg=t,setTimeout(function(){e.msgShow=!1},2e3)},t.prototype.getRole=function(){return window.localStorage.getItem("roledata")},function(){$.ajax({type:"get",url:"http://192.168.2.222:8081/role/get-roles",data:"",dataType:"json",success:function(t){console.log(t.data),window.localStorage.setItem("roledata",i()(t.data))},error:function(t){console.log(t)}})}()}}},68:function(t,e,a){a(81);var s=a(5)(a(87),a(76),"data-v-e095da0e",null);t.exports=s.exports},69:function(t,e,a){var s=a(5)(null,a(75),null,null);t.exports=s.exports},70:function(t,e,a){a(80);var s=a(5)(a(88),a(73),null,null);t.exports=s.exports},71:function(t,e,a){var s=a(5)(a(89),a(74),null,null);t.exports=s.exports},72:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},73:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"login"},[a("div",{staticClass:"input-box head",staticStyle:{border:"0"}},[t._v("茶码头营业报表查看系统")]),t._v(" "),a("div",{staticClass:"input-box"},[a("p",{staticClass:"fl"},[t._v("账户:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"fl",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-box"},[a("p",{staticClass:"fl"},[t._v("密码:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"fl",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"btn",on:{click:t.login}},[t._v("登录")])]),t._v(" "),a("v-msg",{attrs:{msg:t.msg,msgShow:t.msgShow}}),t._v(" "),t.isLoading?a("v-loading"):t._e()],1)},staticRenderFns:[]}},74:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.msgShow?a("div",{staticClass:"prompt r3px in"},[t._v("\n  "+t._s(t.msg)+"\n")]):t._e()},staticRenderFns:[]}},75:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading3"},[a("img",{attrs:{src:"static/images/icon8.gif"}}),t._v("数据加载中····\n")])}]}},76:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container overflow",staticStyle:{"padding-bottom":".88rem"}},[a("div",{staticClass:" row nav"},[a("a",{staticClass:"current col-xs-3 col-sm-3",attrs:{href:"javascript:void(0);",id:"nav"},on:{click:function(e){t.navclick("")}}},[t._v("实时数据")]),t._v(" "),a("a",{staticClass:"col-xs-3 col-sm-3",attrs:{href:"javascript:void(0);",id:"nav2"},on:{click:function(e){t.navclick("2")}}},[t._v("营业报表")]),t._v(" "),a("a",{staticClass:"col-xs-3 col-sm-3",attrs:{href:"javascript:void(0);",id:"nav3"},on:{click:function(e){t.navclick("3")}}},[t._v("访客统计")]),t._v(" "),a("a",{staticClass:"col-xs-3 col-sm-3",attrs:{href:"javascript:void(0);",id:"nav4"},on:{click:function(e){t.navclick("4")}}},[t._v("销量排行")])]),t._v(" "),a("div",{staticClass:"contable white-scroll",staticStyle:{display:"block"},attrs:{id:"contable"}},[t._m(0),t._v(" "),a("div",{staticClass:"busisdata r5px"},[a("div",{staticClass:"row margin-bottom"},[a("div",{staticClass:"col-xs-6 col-sm-6"},[t._m(1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",{staticStyle:{"font-size":".26rem"}},[t._v("今日总营业额：")]),a("br"),a("b",{staticClass:"redcolor"},[t._v(t._s(t.dataList.sum))])])]),t._v(" "),a("div",{staticClass:"col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1"},[a("el-progress",{attrs:{type:"circle",percentage:t.bj.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("包间收入：")]),a("b",[t._v(t._s(t.bj.num))])])])]),t._v(" "),a("div",{staticClass:"row margin-bottom"},[a("div",{staticClass:"col-xs-6 col-sm-6 "},[a("div",{staticClass:"sp"},[a("el-progress",{attrs:{type:"circle",percentage:t.sp.bili,width:65}})],1),t._v(" "),a("div",{},[a("span",[t._v("商品收入：")]),a("b",[t._v(t._s(t.sp.num))])])]),t._v(" "),a("div",{staticClass:"col-xs-6 col-sm-6 "},[a("div",[a("el-progress",{attrs:{type:"circle",percentage:t.hy.bili,width:65}})],1),t._v(" "),a("div",[a("span",[t._v("会员卡消费：")]),a("b",[t._v(t._s(t.hy.num))])])])]),t._v(" "),a("div",{staticClass:"row margin-bottom"},[a("div",{staticClass:"list flex-1 flex sd col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1"},[a("el-progress",{attrs:{type:"circle",percentage:t.yh.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("手动优惠：")]),a("b",[t._v(t._s(t.yh.num))])])]),t._v(" "),a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1"},[a("el-progress",{attrs:{type:"circle",percentage:t.zfb.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("支付宝收入：")]),a("b",[t._v(t._s(t.zfb.num))])])])]),t._v(" "),a("div",{staticClass:"row margin-bottom"},[a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1"},[a("el-progress",{attrs:{type:"circle",percentage:t.wx.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("微信收入：")]),a("b",[t._v(t._s(t.wx.num))])])]),t._v(" "),a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6 "},[a("div",{staticClass:"flex-1 sp"},[a("el-progress",{attrs:{type:"circle",percentage:t.xj.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("现金收入：")]),a("b",[t._v(t._s(t.xj.num))])])])]),t._v(" "),a("div",{staticClass:"row margin-bottom"},[a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1 hy"},[a("el-progress",{attrs:{type:"circle",percentage:t.pos.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("银行卡收入：")]),a("b",[t._v(t._s(t.pos.num))])])]),t._v(" "),a("div",{staticClass:"list flex-1 flex sd col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1"},[a("el-progress",{attrs:{type:"circle",percentage:t.cd.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("茶豆币收入：")]),a("b",[t._v(t._s(t.cd.num))])])])]),t._v(" "),a("div",{staticClass:"reports clearfix margin-bottom "},[a("div",{staticClass:"reports_rate "},[a("h2",{staticClass:"margin-bottom",staticStyle:{"font-size":".3rem","border-bottom":"1px solid #eee","padding-bottom":".3rem"}},[t._v("实时上座率")]),t._v(" "),a("div",{staticClass:"rate_conts"},[a("div",{staticClass:"sanzuo"},[a("p",{staticClass:"padding_top"},[a("b",[t._v("散座开单率：")]),a("span",[t._v(t._s(t.sz.bili))]),t._v("（使用中："),a("strong",[t._v(t._s(t.sz.shiyongzhong))]),t._v("，空闲中："),a("strong",[t._v(t._s(t.sz.kongxian))]),t._v("，共："),a("strong",[t._v(t._s(t.sz.sum))]),t._v("）")]),t._v(" "),a("el-progress",{staticStyle:{"margin-left":"0"},attrs:{"text-inside":!0,"stroke-width":18,percentage:t.sz.bili}})],1),t._v(" "),a("div",{staticClass:"baojian"},[a("p",{staticClass:"padding_top"},[a("b",[t._v("包间开单率：")]),a("span",[t._v(t._s(t.bJ.bili))]),t._v("（使用中："),a("strong",[t._v(t._s(t.bJ.shiyongzhong))]),t._v("，空闲中："),a("strong",[t._v(t._s(t.bJ.kongxian))]),t._v("，共："),a("strong",[t._v(t._s(t.bJ.sum))]),t._v("）")]),t._v(" "),a("el-progress",{staticStyle:{"margin-left":"0"},attrs:{"text-inside":!0,"stroke-width":18,percentage:t.bJ.bili,status:"success"}})],1),t._v(" "),a("div",{staticClass:"yuding"},[a("p",{staticClass:"padding_top"},[a("b",[t._v("预订开单率：")]),a("span",[t._v(t._s(t.yd.bili))]),t._v("（已开单："),a("strong",[t._v(t._s(t.yd.yikai))]),t._v("，今日总预约："),a("strong",[t._v(t._s(t.yd.sum))]),t._v("）")]),t._v(" "),a("el-progress",{staticStyle:{"margin-left":"0"},attrs:{"text-inside":!0,"stroke-width":18,percentage:t.yd.bili,status:"exception"}})],1)])])])])]),t._v(" "),a("div",{staticClass:"contable white-scroll",attrs:{id:"contable2"}},[a("div",{staticClass:"contable_title clearfix",staticStyle:{border:"0"}},[a("h2",{staticClass:"fl f-3rem ",staticStyle:{width:"100%","border-bottom":"1px solid #eee","padding-bottom":".3rem","margin-bottom":".3rem"}},[t._v("经营报表 ("+t._s(t.start_time)+" 至  "+t._s(t.end_time)+")")]),t._v(" "),a("div",{staticClass:"jymxtime fl"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.start_time,expression:"start_time"}],staticClass:"calendar hasDatepicker ng-untouched ng-pristine ng-valid fl",attrs:{id:"saleDayReportBeginTime",type:"text"},domProps:{value:t.start_time},on:{click:function(e){t.selectDate("start")},input:function(e){e.target.composing||(t.start_time=e.target.value)}}}),a("span",{staticClass:"fl"},[t._v("至")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.end_time,expression:"end_time"}],staticClass:"calendar hasDatepicker ng-untouched ng-pristine ng-valid fl",attrs:{id:"saleDayReportEndTime",type:"text"},domProps:{value:t.end_time},on:{click:function(e){t.selectDate("end")},input:function(e){e.target.composing||(t.end_time=e.target.value)}}}),t._v(" "),a("a",{staticClass:"search r3px fl",on:{click:function(e){t.inquire()}}},[t._v("查询")])])]),t._v(" "),a("div",{staticClass:"busisdata r5px"},[a("div",{staticClass:"busisdata r5px",staticStyle:{"margin-top":".5rem"}},[a("div",{staticClass:"row margin-bottom"},[a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[t._m(2),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("总营业额：")]),a("b",{staticClass:"redcolor"},[t._v(t._s(t.statementData.sum))])])]),t._v(" "),a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1"},[a("el-progress",{attrs:{type:"circle",percentage:t.bj.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("包间收入：")]),a("b",[t._v(t._s(t.bj.num))])])])]),t._v(" "),a("div",{staticClass:"row margin-bottom"},[a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1 sp"},[a("el-progress",{attrs:{type:"circle",percentage:t.sp.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("商品收入：")]),a("b",[t._v(t._s(t.sp.num))])])]),t._v(" "),a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1 hy"},[a("el-progress",{attrs:{type:"circle",percentage:t.hy.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("会员卡消费：")]),a("b",[t._v(t._s(t.hy.num))])])])]),t._v(" "),a("div",{staticClass:"row margin-bottom"},[a("div",{staticClass:"list flex-1 flex sd col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1"},[a("el-progress",{attrs:{type:"circle",percentage:t.yh.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("手动优惠：")]),a("b",[t._v(t._s(t.yh.num))])])]),t._v(" "),a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1"},[a("el-progress",{attrs:{type:"circle",percentage:t.zfb.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("支付宝收入：")]),a("b",[t._v(t._s(t.zfb.num))])])])]),t._v(" "),a("div",{staticClass:"row margin-bottom"},[a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1"},[a("el-progress",{attrs:{type:"circle",percentage:t.wx.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("微信收入：")]),a("b",[t._v(t._s(t.wx.num))])])]),t._v(" "),a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1 sp"},[a("el-progress",{attrs:{type:"circle",percentage:t.xj.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("现金收入：")]),a("b",[t._v(t._s(t.xj.num))])])])]),t._v(" "),a("div",{staticClass:"row margin-bottom"},[a("div",{staticClass:"list flex-1 flex col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1 hy"},[a("el-progress",{attrs:{type:"circle",percentage:t.pos.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("银行卡收入：")]),a("b",[t._v(t._s(t.pos.num))])])]),t._v(" "),a("div",{staticClass:"list flex-1 flex sd col-xs-6 col-sm-6"},[a("div",{staticClass:"flex-1"},[a("el-progress",{attrs:{type:"circle",percentage:t.cd.bili,width:65}})],1),t._v(" "),a("div",{staticClass:"flex-1"},[a("span",[t._v("茶豆币收入：")]),a("b",[t._v(t._s(t.cd.num))])])])])]),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"bsdtable"},[t._m(4),t._v(" "),a("div",{staticClass:"globaltable",staticStyle:{width:"100%","overflow-x":"scroll"}},[a("table",{staticStyle:{width:"1000px",border:"1px solid #ebe8e4"},attrs:{border:"1",cellpadding:"1",cellspacing:"1"}},[a("tbody",[t._m(5),t._v(" "),t._l(t.data_List,function(e,s){return a("tr",[a("td",[t._v(t._s(e.time))]),t._v(" "),a("td",[t._v(t._s(e.sum))]),t._v(" "),a("td",[t._v(t._s(e.vip_pay.num))]),t._v(" "),a("td",[t._v(t._s(e.bjsr.num))]),t._v(" "),a("td",[t._v(t._s(e.goods_sr.num))]),t._v(" "),a("td",[t._v(t._s(e.preferential.num))]),t._v(" "),a("td",[t._v(t._s(e.ali_pay.num))]),t._v(" "),a("td",[t._v(t._s(e.wx_pay.num))]),t._v(" "),a("td",[t._v(t._s(e.money_pay.num))]),t._v(" "),a("td",[t._v(t._s(e.card_pay.num))]),t._v(" "),a("td",[t._v(t._s(e.beans_amount.num))])])})],2)])])])]),t._v(" "),a("div",{staticClass:"feedback tst2s r5px"})]),t._v(" "),a("div",{staticClass:"contable white-scroll",attrs:{id:"contable4"}},[a("div",{staticClass:"contable_title clearfix",staticStyle:{border:"0"}},[a("h2",{staticClass:"fl  f-3rem",staticStyle:{"border-bottom":"1px solid #eee","padding-bottom":".3rem",width:"100%","text-align":"center","margin-bottom":".3rem"}},[t._v("销量排行("+t._s(t.start_time)+" 至 "+t._s(t.end_time)+")")]),t._v(" "),a("div",{staticClass:"jymxtime fl"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.start_time,expression:"start_time"}],staticClass:"calendar hasDatepicker ng-untouched ng-pristine ng-valid fl",attrs:{id:"saleReportDetailBeginTime",type:"text"},domProps:{value:t.start_time},on:{click:function(e){t.selectDate("start")},input:function(e){e.target.composing||(t.start_time=e.target.value)}}}),a("span",{staticClass:"fl"},[t._v("至")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.end_time,expression:"end_time"}],staticClass:"calendar hasDatepicker ng-untouched ng-pristine ng-valid fl",attrs:{id:"saleReportDetailEndTime",type:"text"},domProps:{value:t.end_time},on:{click:function(e){t.selectDate("end")},input:function(e){e.target.composing||(t.end_time=e.target.value)}}}),t._v(" "),a("a",{staticClass:"search r3px fl",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.xl()}}},[t._v("查询")])])]),t._v(" "),a("div",{staticClass:"busisdata r5px",staticStyle:{"border-top":"none","margin-top":".3rem"}},[a("div",{staticClass:"globaltable"},[a("table",{staticStyle:{width:"100%",border:"1px solid #ebe8e4"},attrs:{border:"1",cellpadding:"1",cellspacing:"1"}},[a("tbody",[t._m(6),t._v(" "),t._l(t.seniorityList,function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.goods_name))]),t._v(" "),a("td",[t._v(t._s(e.sum_price)+"元")]),t._v(" "),a("td",[t._v(t._s(e.num))]),t._v(" "),a("td",[t._v(t._s((e.num*e.sum_price).toFixed(2))+"元")])])})],2)])])]),t._v(" "),a("div",{staticClass:"feedback tst2s r5px"})]),t._v(" "),a("div",{staticClass:"contable white-scroll",attrs:{id:"contable3"}},[a("div",{staticClass:"contable_title clearfix",staticStyle:{border:"0"}},[a("h2",{staticClass:"fl  f-3rem",staticStyle:{"border-bottom":"1px solid #eee","padding-bottom":".3rem","text-align":"center",width:"100%","margin-bottom":".3rem"}},[t._v("访客统计("+t._s(t.start_time)+" 至 "+t._s(t.end_time)+")")]),t._v(" "),a("div",{staticClass:"jymxtime fl "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.start_time,expression:"start_time"}],staticClass:"calendar hasDatepicker ng-untouched ng-pristine ng-valid fl",attrs:{id:"saleReportDetailBeginTime",type:"text"},domProps:{value:t.start_time},on:{click:function(e){t.selectDate("start")},input:function(e){e.target.composing||(t.start_time=e.target.value)}}}),a("span",{staticClass:"fl"},[t._v("至")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.end_time,expression:"end_time"}],staticClass:"calendar hasDatepicker ng-untouched ng-pristine ng-valid fl",attrs:{id:"saleReportDetailEndTime",type:"text"},domProps:{value:t.end_time},on:{click:function(e){t.selectDate("end")},input:function(e){e.target.composing||(t.end_time=e.target.value)}}}),t._v(" "),a("a",{staticClass:"search r3px fl",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.fk()}}},[t._v("查询")])])]),t._v(" "),a("div",{staticClass:"busisdata r5px margin-bottom",staticStyle:{"border-top":"none","margin-top":".3rem"}},[a("div",{staticClass:"globaltable"},[a("table",{staticStyle:{width:"100%",border:"1px solid #ebe8e4"},attrs:{border:"1",cellpadding:"1",cellspacing:"1"}},[a("tbody",[t._m(7),t._v(" "),t._l(t.seniorityList,function(e,s){return a("tr",[a("td",[t._v(t._s(e.nickname))]),t._v(" "),a("td",[t._v(t._s(e.phone))]),t._v(" "),a("td",[t._v(t._s(e.end_time))]),t._v(" "),a("td",[t._v(t._s(e.sum)+"元")])])})],2)])])]),t._v(" "),a("div",[a("div",{staticClass:"page clearfix"},[a("div",{staticClass:"text"},[t._v("共"),a("b",[t._v(t._s(t.pageNumList.pageNum))]),t._v("页"),a("b",[t._v(t._s(t.pageNumList.pageCount))]),t._v("条记录")]),t._v(" "),a("div",{staticClass:"linklist",staticStyle:{"margin-top":"8px"}},[a("a",{staticClass:"prev",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.changePage(t.page,"prev")}}},[t._v(" 上一页")]),t._v(" "),t._l(t.pageList,function(e,s){return a("a",{class:{current:t.page==e},attrs:{href:"javascript:void(0)"},on:{click:function(a){t.changePage(e)}}},[t._v(t._s(0==e?"...":e))])}),t._v(" "),a("a",{staticClass:"next",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.changePage(t.page,"next")}}},[t._v(" 下一页")])],2)])])])]),t._v(" "),a("v-msg",{attrs:{msg:t.msg,msgShow:t.msgShow}}),t._v(" "),t.isLoading?a("v-loading"):t._e(),t._v(" "),a("div",{staticClass:"bgblack "})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contable_title clearfix",staticStyle:{"margin-bottom":".2rem"}},[a("h2",{staticStyle:{"font-size":".3rem","padding-bottom":".13rem"}},[t._v("实时数据 (今天00:00 至 明天00:00)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-1 icon"},[a("i")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-1 icon"},[a("i")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%","overflow-x":"scroll"}},[a("div",{staticClass:"charts",staticStyle:{width:"1000px",height:"500px"},attrs:{id:"charts"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"f-3rem margin-bottom"},[t._v("统计报表"),a("br"),a("span",{staticStyle:{color:"#999","font-size":".2rem","font-weight":"100"}},[t._v("(向右滑动查看)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticStyle:{background:"#fffbe5"}},[a("td",[t._v("时间")]),t._v(" "),a("td",[t._v("总营业收入")]),t._v(" "),a("td",[t._v("包间总收入")]),t._v(" "),a("td",[t._v("商品总收入")]),t._v(" "),a("td",[t._v("会员总消费")]),t._v(" "),a("td",[t._v("手动总优惠")]),t._v(" "),a("td",[t._v("支付宝总收入")]),t._v(" "),a("td",[t._v("微信总收入")]),t._v(" "),a("td",[t._v("现金总收入")]),t._v(" "),a("td",[t._v("pos刷卡总收入")]),t._v(" "),a("td",[t._v("茶豆币总收入")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"xlsort",staticStyle:{background:"#fffbe5"}},[a("td",[t._v("排行")]),t._v(" "),a("td",[t._v("商品名称")]),t._v(" "),a("td",[t._v("单价")]),t._v(" "),a("td",[t._v("销量")]),t._v(" "),a("td",[t._v("销售总额")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"xlsort",staticStyle:{background:"#fffbe5"}},[a("td",[t._v("微信昵称")]),t._v(" "),a("td",[t._v("手机")]),t._v(" "),a("td",[t._v("最后访问时间")]),t._v(" "),a("td",[t._v("累计消费金额")])])}]}},79:function(t,e){},80:function(t,e){},81:function(t,e){},86:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},87:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),$(function(){}),e.default={data:function(){return{isLoading:!1,iSsuccess:!1,msgShow:!1,msg:"",start_time:"",end_time:"",page:1,pageList:[],pageNumList:[],dataList:[],bj:[],sp:[],hy:[],yh:[],zfb:[],wx:[],xj:[],pos:[],cd:[],sz:[],bJ:[],yd:[],sum:"",statementData:[],time:[],businessSum:[],wx_paySum:[],ali_paySum:[],vip_paySum:[],money_paySum:[],beans_amountSum:[],preferentialSum:[],card_paySum:[],data_List:[],seniorityList:[]}},methods:{popup:function(t){var t="#"+t;$(t).addClass("in"),$(".bgblack").addClass("in")},close:function(t){var t="#"+t;$(t).removeClass("in"),$(".bgblack").removeClass("in")},chelick:function(){$(".password").show()},chelickHide:function(){$(".password").hide()},navclick:function(t){var e=this,t=t,a="#contable"+t,s="#nav"+t;""==t&&(e.dataList=[],e.sz=[],e.bJ=[],e.yd=[],e.getRealTimeData()),"2"==t&&(e.statementData=[],e.getStatementData()),"3"==t&&(e.statementData=[],e.page=1,e.getCaller()),"4"==t&&(e.statementData=[],e.getSeniorityData()),$(".contable").hide(),$(".bench").hide(),$("#nav").siblings(".current").removeClass("current").end().removeClass("current"),$(a).show(),$(s).addClass("current")},selectDate:function(t){var e=this;laydate({istoday:!1,choose:function(a){"start"==t?e.start_time=a:e.end_time=a},isclear:!1})},getDate:function(){var t="",e="",a=new Date,s=a.getFullYear(),i=a.getMonth()+1;t+=s+"-",e+=s+"-",i<10?(t+="0"+i+"-",e+="0"+i+"-"):(t+=i+"-",e+=i+"-"),t+="01",e+=this.getDates(),this.start_time=t,this.end_time=e},getDates:function(){var t=new Date,e=t.getMonth();return t.setMonth(e+1),t.setDate(0),t.getDate()},inquire:function(){this.getStatementData()},xl:function(){this.getSeniorityData()},fk:function(){this.getCaller()},getRealTimeData:function(){var t=this;t.ajax(t.port.realTimeData,{},"get",function(e){1==e.code?(t.dataList=[],t.sz=[],t.bJ=[],t.yd=[],t.dataList=e.data.list,t.bj=t.dataList.bjsr,t.sp=t.dataList.goods_sr,t.hy=t.dataList.vip_pay,t.yh=t.dataList.preferential,t.zfb=t.dataList.ali_pay,t.wx=t.dataList.wx_pay,t.xj=t.dataList.money_pay,t.pos=t.dataList.card_pay,t.cd=t.dataList.beans_amount,t.sz=e.data.szl.sz,t.bJ=e.data.szl.bj,t.yd=e.data.szl.yd):t.msgHint(e.msg)})},getStatementData:function(){var t=this;t.ajax(t.port.statementData,{start_time:t.start_time,end_time:t.end_time},"get",function(e){1==e.code?(t.statementData=[],t.statementData=e.data.list,t.bj=t.statementData.bjsr,t.sp=t.statementData.goods_sr,t.hy=t.statementData.vip_pay,t.yh=t.statementData.preferential,t.zfb=t.statementData.ali_pay,t.wx=t.statementData.wx_pay,t.xj=t.statementData.money_pay,t.pos=t.statementData.card_pay,t.cd=t.statementData.beans_amount,t.time=e.data.time,t.businessSum=e.data.sum,t.wx_paySum=e.data.wx_pay,t.ali_paySum=e.data.ali_pay,t.vip_paySum=e.data.vip_pay,t.money_paySum=e.data.money_pay,t.beans_amountSum=e.data.beans_amount,t.preferentialSum=e.data.preferential,t.card_paySum=e.data.card_pay,t.data_List=e.data.data_list,console.log(t.dataList)):t.msgHint(e.msg)})},getSeniorityData:function(){var t=this;t.ajax(t.port.SeniorityData,{start_time:t.start_time,end_time:t.end_time},"get",function(e){1==e.code?(t.seniorityList=[],t.seniorityList=e.data):t.msgHint(e.msg)})},getCaller:function(){var t=this;t.ajax(t.port.caller,{start_time:t.start_time,end_time:t.end_time,page:t.page},"get",function(e){1==e.code?(t.seniorityList=[],t.pageNumList=[],t.seniorityList=e.data.list,t.pageNumList=e.data,t.getpage(t.page),console.log(e)):t.msgHint(e.msg)})},changePage:function(t,e){if(Number(t)){var a=this;if(e)if("prev"==e){if(!(t>1))return;t--,a.page=t,a.getpage(t),a.getCaller()}else{if(!(t<a.pageNumList.pageNum))return;t++,a.page=t,a.getpage(t),a.getCaller()}else a.page=t,a.getpage(t),a.getCaller()}},getpage:function(t){var e=this;if(e.pageNumList.pageNum>10){if(t<6){e.pageList=[];for(var a=1;a<=7;a++)7==a?e.pageList.push(0):e.pageList.push(a);e.pageList.push(e.pageNumList.pageNum),e.page=t}if(t>5&&t<e.pageNumList.pageNum-2){e.pageList=[],e.pageList.push(1,0);for(var s=t-2;s<=t+2;s++)e.pageList.push(s);e.pageList.push(0,e.pageNumList.pageNum),e.page=t}if(e.pageNumList.pageNum-2<=t&&t<=e.pageNumList.pageNum){e.pageList=[],e.pageList.push(1,0);for(var i=e.pageNumList.pageNum-6;i<=e.pageNumList.pageNum;i++)e.pageList.push(i);e.page=t}}else{e.page=t,e.pageList=[];for(var n=1;n<=e.pageNumList.pageNum;n++)e.pageList.push(n)}}},mounted:function(){$(".money").click(function(){$(this).addClass("active").siblings(".money").removeClass("active")}),this.getRealTimeData(),this.getDate(),$(".yuding .el-progress-bar__innerText").css({background:"#e6ad74"}),$(".baojian .el-progress-bar__innerText").css({background:"#13ce66"}),$(".sanzuo .el-progress-bar__innerText").css({background:"#20a0ff"}),$(".el-progress-bar__inner").css({transition:"all .5s"})},updated:function(){$("#charts").css({width:"600px"});var t=echarts.init(document.getElementById("charts"));$(".el-progress-circle").css({margin:"0 auto"}),$(".el-progress__text").css({top:"30%",position:"absolute",width:"100%","text-align":"center",padding:"0 30px 0 0"}),$(".el-progress-bar__outer").css({"border-radius":".2rem",background:"#e4e8f1",overflow:"hidden",position:"relative","vertical-align":"middle",color:"#fff"});var e={title:{text:"总营业额走势图",subtext:"(向右滑动查看)"},tooltip:{trigger:"axis"},legend:{data:["姚大侠","大侠飞"]},color:["#c23531","rgba(222,222,222,0)","rgba(222,222,222,0)","rgba(222,222,222,0)","rgba(222,222,222,0)","rgba(222,222,222,0)","rgba(222,222,222,0)","rgba(222,222,222,0)","rgba(222,222,222,0)","rgba(222,222,222,0)","rgba(222,222,222,0)"],toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:this.time},yAxis:{type:"value",axisLabel:{formatter:"{value}"}},series:[{name:"总营业收入",type:"line",data:this.businessSum,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}],symbolSize:[100,50]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"微信总收入",type:"line",data:this.wx_paySum,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}},{name:"支付宝总收入",type:"line",data:this.ali_paySum,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}},{name:"会员消费总收入",type:"line",data:this.vip_paySum,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}},{name:"现金总收入",type:"line",data:this.money_paySum,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}},{name:"茶豆币总收入",type:"line",data:this.beans_amountSum,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}},{name:"总优惠",type:"line",data:this.preferentialSum,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}},{name:"pos刷卡总收入",type:"line",data:this.card_paySum,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}}]};t.setOption(e)}}},88:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(23),i=a.n(s);e.default={data:function(){return{isLoading:!1,iSsuccess:!1,msgShow:!1,msg:"",userName:"",pwd:""}},methods:{login:function(){var t=this;return/^1(3[0-9]|4[57]|5[0-35-9]|7[013678]|8[0-9])[\d]{8}$/g.test(this.userName)?""==t.pwd?void t.msgHint("请输入密码"):void t.ajax(t.port.login,{phone:t.userName,password:t.pwd},"post",function(e){1==e.code?(window.localStorage.setItem("login","success"),window.localStorage.setItem("roledata",i()(e.data.role)),window.localStorage.setItem("storeinfo",i()(e.data.store)),window.localStorage.setItem("userinfo",i()(e.data.user)),t.$router.push({name:"charts"})):t.msgHint(e.msg)}):void this.msgHint("请填写正确手机号码")}}}},89:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["msg","msgShow"]}},90:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),i=a(25),n=a.n(i),l=a(28),r=a(26),o=a(27),c=a(29),d=a(24),v=a.n(d);s.default.use(v.a),s.default.use(c.a),s.default.use(r.a),s.default.use(o.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:l.a,template:"<App/>",components:{App:n.a}})}},[90]);
//# sourceMappingURL=app.0b3c519b0a9ab2b273e7.js.map