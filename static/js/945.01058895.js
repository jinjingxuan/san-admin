(self.webpackChunksan_admin=self.webpackChunksan_admin||[]).push([[945],{88e3:function(e,t,s){"use strict";var a=s(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,s(23277);var r=a(s(38944));s(80674);var o=a(s(75750));s(89201);var i=a(s(3235));s(65706);var n=a(s(80167));s(92952);var u=a(s(70091)),l=s(30146),p={labelCol:{span:7},wrapperCol:{span:13}},c=u.default.create({name:"rister"})({components:{"s-form":u.default,"s-form-item":u.default.FormItem,"s-input":n.default,"s-select":i.default,"s-button":o.default,"s-select-option":i.default.Option,"s-textarea":n.default.TextArea,"s-input-group":n.default.Group,"s-divider":r.default},computed:{payAccountDecorator:function(){return{name:"payAccount",initialValue:this.data.get("step.payAccount"),rules:[{required:!0,message:"请选择付款账户"}]}},receiverAccountDecorator:function(){return{name:"receiverAccount",initialValue:this.data.get("step.receiverAccount"),rules:[{required:!0,message:"请输入收款人账户"},{type:"email",message:"账户名应为邮箱格式"}]}},receiverNameDecorator:function(){return{name:"receiverName",initialValue:this.data.get("step.receiverName"),rules:[{required:!0,message:"请输入收款人姓名"}]}},amountDecorator:function(){return{name:"amount",initialValue:this.data.get("step.amount"),rules:[{required:!0,message:"请输入转账金额"}]}}},initData:function(){return{formItemLayout:p}},onValidateForm:function(){var e=this,t=this.data.get("form");t&&t.validateFields((function(t,s){t||(e.actions.saveStepFormData(s),e.actions.saveCurrentStep(1))}))}}),d=l.connect.san({step:"step-form.step"},{saveStepFormData:"step-form:saveStepFormData",saveCurrentStep:"step-form:saveCurrentStep"})(c);t.default=d},69783:function(e,t,s){"use strict";var a=s(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(s(81109));s(80674);var o=a(s(75750));s(23277);var i=a(s(38944));s(83481);var n=a(s(91922));s(13518);var u=a(s(8333));s(25232);var l=a(s(82808));s(65706);var p=a(s(80167));s(92952);var c=a(s(70091)),d=s(30146),m={labelCol:{span:5},wrapperCol:{span:19}},f=c.default.create({name:"rister"})({components:{"s-form":c.default,"s-form-item":c.default.FormItem,"s-input":p.default,"s-alert":l.default,"s-descriptions":u.default,"s-descriptions-item":u.default.Item,"s-statistic":n.default,"s-divider":i.default,"s-button":o.default},initData:function(){return{submitting:!1,formItemLayout:m}},onValidateForm:function(){var e=this,t=this.data.get("form");t&&t.validateFields((function(t,s){if(!t){var a=e.data.get("data"),o=(0,r.default)((0,r.default)({},a),s);e.actions.submitStepForm(o)}}))},onPrev:function(){var e=this.data.get("form"),t=this.data.get("data"),s=e.getFieldsValue();this.actions.saveStepFormData((0,r.default)((0,r.default)({},t),s)),this.actions.saveCurrentStep(0)}}),v=d.connect.san({data:"step-form.step"},{saveStepFormData:"step-form:saveStepFormData",saveCurrentStep:"step-form:saveCurrentStep",submitStepForm:"step-form:submitStepForm"})(f);t.default=v},58840:function(e,t,s){"use strict";var a=s(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,s(13518);var r=a(s(8333));s(83481);var o=a(s(91922));s(88607);var i=a(s(33030));s(80674);var n=a(s(75750)),u=a(s(34575)),l=a(s(93913)),p=a(s(2205)),c=a(s(99842)),d=a(s(59713)),m=s(35887),f=s(30146),v=function(e){(0,p.default)(s,e);var t=(0,c.default)(s);function s(){return(0,u.default)(this,s),t.apply(this,arguments)}return(0,l.default)(s,[{key:"onFinish",value:function(){this.actions.saveCurrentStep(0)}}]),s}(m.Component);(0,d.default)(v,"components",{"s-button":n.default,"s-result":i.default,"s-statistic":o.default,"s-descriptions":r.default,"s-descriptions-item":r.default.Item});var b=f.connect.san({data:"step-form.step"},{saveCurrentStep:"step-form:saveCurrentStep"})(v);t.default=b},59526:function(e,t,s){"use strict";var a=s(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,s(94281);var r=a(s(86920));s(99232);var o=a(s(66405)),i=a(s(34575)),n=a(s(2205)),u=a(s(99842)),l=a(s(59713)),p=s(35887),c=s(30146),d=s(91802),m=a(s(67795)),f=a(s(65609)),v=a(s(77273)),b=function(e){(0,n.default)(s,e);var t=(0,u.default)(s);function s(){return(0,i.default)(this,s),t.apply(this,arguments)}return s}(p.Component);(0,l.default)(b,"components",{"s-card":o.default,"s-steps":r.default,"s-step":r.default.Step,"page-container":d.PageContainer,"step-one":m.default,"step-two":f.default,"step-three":v.default});var h=c.connect.san({current:"step-form.current"})(b);t.default=h},86529:function(e){e.exports=' <div class="step1-result"> <s-form class="form-step" hideRequiredMark layout="horizontal" wrapperCol="{{formItemLayout.wrapperCol}}" labelCol="{{formItemLayout.labelCol}}"> <s-form-item label="付款账户"> <s-select decorator="{{payAccountDecorator}}" placeholder="test@example.com"> <s-select-option value="ant-design@alipay.com">ant-design@alipay.com</s-select-option> </s-select> </s-form-item> <s-form-item label="收款账户"> <s-input-group compact="{{true}}"> <s-select defaultValue="zhejiang" style="width:120px"> <s-select-option value="zhejiang">Zhejiang</s-select-option> <s-select-option value="jiangsu">Jiangsu</s-select-option> </s-select> <s-input style="width:calc(100% - 122px)" decorator="{{receiverAccountDecorator}}" placeholder="test@example.com"></s-input> </s-input-group> </s-form-item> <s-form-item label="收款人姓名"> <s-input placeholder="请输入收款人姓名" decorator="{{receiverNameDecorator}}"> </s-input> </s-form-item> <s-form-item label="转账金额"> <s-input prefix="￥" placeholder="请输入金额" decorator="{{amountDecorator}}"> </s-input> </s-form-item> <s-form-item wrapperCol="{{\n                {\n                    span: formItemLayout.wrapperCol.span,\n                    offset: formItemLayout.labelCol.span,\n                }\n            }}"> <s-button on-click="onValidateForm" type="primary">下一步</s-button> </s-form-item> </s-form> <s-divider></s-divider> <div class="desc"> <h3>说明</h3> <h4>转账到支付宝账户</h4> <p> 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 </p> <h4>转账到银行卡</h4> <p> 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 </p> </div> </div> '},74717:function(e){e.exports=' <div> <s-form class="form-step2_result" wrapperCol="{{formItemLayout.wrapperCol}}" labelCol="{{formItemLayout.labelCol}}"> <s-alert closable showIcon message="确认转账后，资金将直接打入对方账户，无法退回。" style="margin-bottom:24px"></s-alert> <s-descriptions column="{{1}}"> <s-descriptions-item label="付款账户">{{data.payAccount}}</s-descriptions-item> <s-descriptions-item label="收款账户">{{data.receiverAccount}}</s-descriptions-item> <s-descriptions-item label="收款人姓名">{{data.receiverName}}</s-descriptions-item> <s-descriptions-item label="转账金额"> <s-statistic value="{{data.amount}}" suffix="元"></s-statistic> </s-descriptions-item> </s-descriptions> <s-divider style="margin:24px 0"></s-divider> <s-form-item label="支付密码"> <s-input type="password" autoComplete="off" style="width:80%" decorator="{{\n                        {\n                            name: \'password\',\n                            initialValue: \'123456\',\n                            rules: [{\n                                required: true,\n                                message: \'需要支付密码才能进行支付\',\n                            }]\n                        }\n                    }}"> </s-input> </s-form-item> <s-form-item style="margin-bottom:0" wrapperCol="{{\n                {\n                    span: formItemLayout.wrapperCol.span,\n                    offset: formItemLayout.labelCol.span,\n                }\n            }}"> <s-button type="primary" on-click="onValidateForm" loading="{{submitting}}"> 提交 </s-button> <s-button on-click="onPrev" style="margin-left:8px"> 上一步 </s-button> </s-form-item> </s-form> </div> '},3109:function(e){e.exports=' <s-result status="success" title="操作成功" subTitle="预计两小时内到账" class="form-step3_result"> <template slot="extra"> <s-button type="primary" key="console" on-click="onFinish">再转一笔</s-button> <s-button key="buy">查看账单</s-button> </template> <div class="information"> <s-descriptions column="{{1}}"> <s-descriptions-item label="付款账户">{{data.payAccount}}</s-descriptions-item> <s-descriptions-item label="收款账户">{{data.receiverAccount}}</s-descriptions-item> <s-descriptions-item label="收款人姓名">{{data.receiverName}}</s-descriptions-item> <s-descriptions-item label="转账金额"> <s-statistic value="{{data.amount}}" suffix="元"></s-statistic> </s-descriptions-item> </s-descriptions> <div> <information data="{{data}}"></information> </div></div></s-result> '},9261:function(e){e.exports=' <page-container title="分步表单"> <p slot="content">将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</p> <s-card bordered="{{false}}"> <s-steps current="{{current}}" class="step-form-steps"> <s-step title="填写转账信息"></s-step> <s-step title="确认转账信息"></s-step> <s-step title="完成"></s-step> </s-steps> <step-one s-if="current === 0"></step-one> <step-two s-if="current === 1"></step-two> <step-three s-if="current === 2"></step-three> </s-card> </page-container> '},66659:function(e,t,s){"use strict";s.r(t)},74505:function(e,t,s){"use strict";s.r(t)},47923:function(e,t,s){"use strict";s.r(t)},27384:function(e,t,s){"use strict";s.r(t)},67795:function(e,t,s){var a=s(60396);s(74505);var r=s(86529),o=s(88e3).default;e.exports=s(88e3),e.exports.default=a(o,r,[])},65609:function(e,t,s){var a=s(60396);s(47923);var r=s(74717),o=s(69783).default;e.exports=s(69783),e.exports.default=a(o,r,[])},77273:function(e,t,s){var a=s(60396);s(27384);var r=s(3109),o=s(58840).default;e.exports=s(58840),e.exports.default=a(o,r,[])},25945:function(e,t,s){var a=s(60396);s(66659);var r=s(9261),o=s(59526).default;e.exports=s(59526),e.exports.default=a(o,r,[])}}]);
//# sourceMappingURL=945.01058895.js.map