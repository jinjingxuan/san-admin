(self.webpackChunksan_admin=self.webpackChunksan_admin||[]).push([[815],{86337:function(a,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={initData:function(){return{list:[{avatar:"https://b.bdstatic.com/searchbox/icms/other/img/san-admin/alipay.png",name:"绑定淘宝",des:"当前未绑定淘宝账号"},{avatar:"https://b.bdstatic.com/searchbox/icms/other/img/san-admin/angular.png",name:"绑定支付宝",des:"当前未绑定支付宝账号"},{avatar:"https://b.bdstatic.com/searchbox/icms/other/img/san-admin/bootstrap.png",name:"绑定钉钉",des:"当前未绑定钉钉账号"}]}}}},82811:function(a,t,e){"use strict";var s=e(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e(8367);var i=s(e(40286));e(51786);var n=s(e(28418));e(92952);var d=s(e(70091));e(65706);var c=s(e(80167));e(89201);var f=s(e(3235));e(80674);var l={components:{"s-button":s(e(75750)).default,"s-select":f.default,"s-select-option":f.default.Option,"s-input":c.default,"s-form":d.default,"s-formitem":d.default.FormItem,"s-textarea":c.default.TextArea,"s-icon":n.default,"s-upload":i.default}};t.default=l},1727:function(a,t,e){"use strict";var s=e(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e(14741);var i={components:{"s-switch":s(e(39748)).default},initData:function(){return{list:[{name:"账户密码",des:"其他用户的消息将以站内信的形式通知"},{name:"系统消息",des:"系统消息将以站内信的形式通知"},{name:"待办任务",des:"待办任务将以站内信的形式通知"}]}}};t.default=i},38053:function(a,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={initData:function(){return{list:[{name:"账户密码",des:"当前密码强度：强"},{name:"密保手机",des:"已绑定手机：138****8293"},{name:"密保问题",des:"未设置密保问题，密保问题可有效保护账户安全"},{name:"备用邮箱",des:"已绑定邮箱：ant***sign.com"},{name:"MFA 设备",des:"未绑定 MFA 设备，绑定后，可以进行二次确认"}]}}}},54071:function(a,t,e){"use strict";var s=e(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e(51786);var i=s(e(28418));e(87341);var n=s(e(62471)),d=s(e(34575)),c=s(e(93913)),f=s(e(2205)),l=s(e(99842)),u=s(e(59713)),o=e(35887),r=s(e(97563)),m=s(e(31670)),p=s(e(16762)),v=s(e(5234)),b=function(a){(0,f.default)(e,a);var t=(0,l.default)(e);function e(){return(0,d.default)(this,e),t.apply(this,arguments)}return(0,c.default)(e,[{key:"initData",value:function(){return{current:"basic"}}},{key:"handleClick",value:function(a){this.data.set("current",a.key)}}]),e}(o.Component);t.default=b,(0,u.default)(b,"components",{"s-menu":n.default,"s-menu-item":n.default.Item,"s-icon":i.default,"ui-basic":r.default,"ui-account":m.default,"ui-notify":p.default,"ui-safe":v.default})},27765:function(a){a.exports=' <div class="account-content" data-s-50eb6101> <div class="title" data-s-50eb6101>安全设置</div> <div class="account-item" s-for="item in list" data-s-50eb6101> <img src="{{item.avatar}}" data-s-50eb6101> <div class="right" data-s-50eb6101> <div class="name" data-s-50eb6101>{{item.name}}</div> <div class="description" data-s-50eb6101> <span data-s-50eb6101>{{item.des}}</span> <span class="bind" data-s-50eb6101>绑定</span> </div> </div> </div> </div> '},58047:function(a){a.exports=' <div class="basic-content" data-s-919f19fc> <div class="title" data-s-919f19fc>基本设置</div> <s-form class="form" labelCol="{{labelCol}}" wrapperCol="{{wrapperCol}}" data-s-919f19fc> <s-formitem class="input" label="邮箱" data-s-919f19fc> <s-input defaultValue="san-admin" data-s-919f19fc></s-input> </s-formitem> <s-formitem class="input" label="昵称" data-s-919f19fc> <s-input defaultValue="san-admin" data-s-919f19fc></s-input> </s-formitem> <s-formitem class="textarea" label="个人简介" data-s-919f19fc> <s-textarea style="width:440px" placeholder="个人简介" autosize="{{{minRows: 4}}}" data-s-919f19fc></s-textarea> </s-formitem> <s-formitem label="国家/地区" data-s-919f19fc> <s-select defaultValue="china" style="width:216px" data-s-919f19fc> <s-select-option value="china" data-s-919f19fc>中国</s-select-option> </s-select> </s-formitem> <s-formitem label="所在省市" data-s-919f19fc> <s-select defaultValue="beijing" style="width:216px" on-change="handleChange" data-s-919f19fc> <s-select-option value="beijing" data-s-919f19fc>北京市</s-select-option> <s-select-option value="tianjin" data-s-919f19fc>天津市</s-select-option> </s-select> <s-select defaultValue="beijing" style="width:216px" disabled="{{true}}" data-s-919f19fc> <s-select-option value="beijing" data-s-919f19fc>北京市</s-select-option> </s-select> </s-formitem> <s-formitem class="input" label="街道地址" data-s-919f19fc> <s-input defaultValue="西湖区工专路 77 号" data-s-919f19fc></s-input> </s-formitem> <s-formitem label="联系电话" data-s-919f19fc> <s-input style="width:15%;display:inline-block" defaultValue="0571" data-s-919f19fc></s-input> <s-input style="width:30%;display:inline-block" defaultValue="26888888" data-s-919f19fc></s-input> </s-formitem> <s-formitem data-s-919f19fc> <s-button type="primary" data-s-919f19fc>提交</s-button> </s-formitem> </s-form> <div class="avatar" data-s-919f19fc> <div data-s-919f19fc>头像</div> <img class="img" src="https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png" data-s-919f19fc> <s-upload class="upload" data-s-919f19fc> <s-button data-s-919f19fc> <s-icon type="upload" data-s-919f19fc></s-icon> 更换头像 </s-button> </s-upload> </div> </div> '},51466:function(a){a.exports=' <div class="notify-content" data-s-2f0ecb19> <div class="title" data-s-2f0ecb19>安全设置</div> <div class="notify-item" s-for="item in list" data-s-2f0ecb19> <div class="name" data-s-2f0ecb19>{{item.name}}</div> <div class="description" data-s-2f0ecb19> <span data-s-2f0ecb19>{{item.des}}</span> <s-switch on-change="onChange" defaultChecked="{{true}}" data-s-2f0ecb19></s-switch> </div> </div> </div> '},40852:function(a){a.exports=' <div class="safe-content" data-s-343b1e46> <div class="title" data-s-343b1e46>安全设置</div> <div class="safe-item" s-for="item in list" data-s-343b1e46> <div class="name" data-s-343b1e46>{{item.name}}</div> <div class="description" data-s-343b1e46> <span data-s-343b1e46>{{item.des}}</span> <span class="modify" data-s-343b1e46>修改</span> </div> </div> </div> '},4750:function(a){a.exports=' <div class="settings-wrap" data-s-6a1cfee9> <s-menu style="width:256px;padding-top:12px" defaultSelectedKeys="{{\'basic\'}}" openKeys="{{[\'sub1\']}}" mode="inline" theme="light" on-click="handleClick" data-s-6a1cfee9> <s-menu-item key="basic" data-s-6a1cfee9><s-icon type="mail" data-s-6a1cfee9></s-icon> 基本设置</s-menu-item> <s-menu-item key="safe" data-s-6a1cfee9><s-icon type="calendar" data-s-6a1cfee9></s-icon> 安全设置</s-menu-item> <s-menu-item key="account" data-s-6a1cfee9><s-icon type="mail" data-s-6a1cfee9></s-icon> 账号绑定</s-menu-item> <s-menu-item key="notify" data-s-6a1cfee9><s-icon type="calendar" data-s-6a1cfee9></s-icon> 新消息通知</s-menu-item> </s-menu> <div class="content" data-s-6a1cfee9> <ui-basic s-if="current === \'basic\'" data-s-6a1cfee9></ui-basic> <ui-safe s-else-if="current === \'safe\'" data-s-6a1cfee9></ui-safe> <ui-account s-else-if="current === \'account\'" data-s-6a1cfee9></ui-account> <ui-notify s-else-if="current === \'notify\'" data-s-6a1cfee9></ui-notify> </div> </div> '},9349:function(a,t,e){"use strict";e.r(t)},91585:function(a,t,e){"use strict";e.r(t)},99545:function(a,t,e){"use strict";e.r(t)},51901:function(a,t,e){"use strict";e.r(t)},16810:function(a,t,e){"use strict";e.r(t)},31670:function(a,t,e){var s=e(60396);e(9349);var i=e(27765),n=e(86337).default;a.exports=e(86337),a.exports.default=s(n,i,[])},97563:function(a,t,e){var s=e(60396);e(91585);var i=e(58047),n=e(82811).default;a.exports=e(82811),a.exports.default=s(n,i,[])},16762:function(a,t,e){var s=e(60396);e(99545);var i=e(51466),n=e(1727).default;a.exports=e(1727),a.exports.default=s(n,i,[])},5234:function(a,t,e){var s=e(60396);e(51901);var i=e(40852),n=e(38053).default;a.exports=e(38053),a.exports.default=s(n,i,[])},7815:function(a,t,e){var s=e(60396);e(16810);var i=e(4750),n=e(54071).default;a.exports=e(54071),a.exports.default=s(n,i,[])}}]);
//# sourceMappingURL=815.ec88aebe.js.map