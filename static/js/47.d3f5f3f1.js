(self.webpackChunksan_admin=self.webpackChunksan_admin||[]).push([[47],{76394:function(t,e,a){"use strict";var s=a(95318).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a(74916),a(15306),a(41539),a(39714),a(87341);var i=s(a(62471));a(3916);var r=s(a(51186));a(64180);var n=s(a(55475));a(64506);var o=s(a(44254));a(51786);var l=s(a(28418));a(99232);for(var d=s(a(66405)),c=[],u=0;u<11;u++)c.push({title:"Alipay",avatar:"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",activeUser:17,newUser:1700});var p={components:{"s-card":d.default,"s-card-meta":d.default.Meta,"s-icon":l.default,"s-avatar":o.default,"s-list":n.default,"s-list-item":n.default.Item,"s-dropdown":r.default,"s-menu":i.default,"s-menu-item":i.default.Item},initData:function(){return{dataSource:c}},filters:{NumberFormat:function(t){return t?t.toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"):"0"}}};e.default=p},74378:function(t,e,a){"use strict";var s=a(95318).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a(41539),a(88674),a(17727),a(92222),a(35666);var i=s(a(48926));a(64180);var r=s(a(55475));a(50825);var n=s(a(25092));a(51786);var o=s(a(28418));a(80674);var l=s(a(75750)),d=a(71454),c=s(a(58310)),u={components:{"s-button":l.default,"s-icon":o.default,"s-tag":n.default,"s-list":r.default,"s-list-item":r.default.Item,"s-list-item-meta":r.default.Item.Meta,"article-list-content":c.default},initData:function(){return{loading:!0,loadingMore:!1,data:[]}},created:function(){this.getArticleList()},getArticleList:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.getArticleList)({count:30});case 2:0===(a=e.sent).errno&&t.data.set("data",a.result),t.data.set("loading",!1);case 5:case"end":return e.stop()}}),e)})))()},loadMore:function(){var t=this;this.data.set("loadingMore",!0),(0,d.getArticleList)({count:30}).then((function(e){t.data.set("data",t.data.get("data").concat(e.result))})).finally((function(){t.data.set("loadingMore",!1)}))}};e.default=u},84302:function(t,e,a){"use strict";var s=a(95318).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a(64506);var i=s(a(44254)),r=s(a(27484)),n={components:{"a-avatar":i.default},filters:{dateTrasform:function(t){return(0,r.default)(t).format("YYYY-MM-DD HH:mm:ss")}}};e.default=n},3808:function(t,e,a){"use strict";var s=a(95318).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a(35666);var i=s(a(48926));a(64180);var r=s(a(55475));a(99232);var n=s(a(66405)),o=s(a(27484)),l=s(a(84110)),d=a(71454);o.default.locale("zh-cn");var c={components:{"s-card":n.default,"s-card-meta":n.default.Meta,"s-list":r.default,"s-list-item":r.default.Item},initData:function(){return{data:[],loading:!0}},filters:{fromNow:function(t){return o.default.extend(l.default),(0,o.default)(t).fromNow()}},created:function(){this.getList()},getList:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.getArticleList)({count:30});case 2:0===(a=e.sent).errno&&(t.data.set("data",a.result),t.data.set("loading",!1));case 4:case"end":return e.stop()}}),e)})))()}};e.default=c},6371:function(t,e,a){"use strict";var s=a(95318).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a(35666),a(64506);var i=s(a(44254));a(93753);var r=s(a(43513));a(50825);var n=s(a(25092));a(31481);var o=s(a(27577));a(22144);var l=s(a(49297));a(51786);var d=s(a(28418));a(23277);var c=s(a(38944));a(99232);var u=s(a(66405)),p=s(a(48926)),f=s(a(34575)),m=s(a(93913)),v=s(a(2205)),g=s(a(99842)),h=s(a(59713)),b=a(35887),y=s(a(76080)),x=s(a(50756)),w=s(a(95954)),k=s(a(47952)),M=a(71454),j=function(t){(0,v.default)(s,t);var e,a=(0,g.default)(s);function s(){return(0,f.default)(this,s),a.apply(this,arguments)}return(0,m.default)(s,[{key:"initData",value:function(){return{tags:["很有想法的","专注设计","辣~","大长腿","川妹子","海纳百川"],tagInputVisible:!1,tagInputValue:"",teams:[],teamSpinning:!0,tabListNoTitle:[{key:"article",tab:"文章(8)"},{key:"app",tab:"应用(8)"},{key:"project",tab:"项目(8)"}],activePage:"article"}}},{key:"created",value:function(){this.getTeams()}},{key:"getTeams",value:(e=(0,p.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,M.getTeams)();case 2:0===(e=t.sent).errno&&this.data.set("teams",e.result),this.data.set("teamSpinning",!1);case 5:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"switchPage",value:function(t){this.data.set("activePage",t)}}]),s}(b.Component);e.default=j,(0,h.default)(j,"components",{"s-card":u.default,"s-divider":c.default,"s-icon":d.default,"s-row":l.default,"s-col":o.default,"s-tag":n.default,"s-spin":r.default,"s-avatar":i.default,"article-page":y.default,"project-page":w.default,"app-page":x.default,"grid-content":k.default})},71454:function(t,e,a){"use strict";var s=a(95318).default;Object.defineProperty(e,"__esModule",{value:!0}),e.getArticleList=function(t){return o.apply(this,arguments)},e.getTeams=function(t){return n.apply(this,arguments)},a(35666);var i=s(a(48926)),r=s(a(2485));function n(){return(n=(0,i.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,r.default)({url:"/workplace/teams",method:"GET",params:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=(0,i.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,r.default)({url:"/list/article",method:"GET",params:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},15387:function(t){t.exports=' <div class="app-list"> <s-list grid="{{\n                {gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}\n            }}" dataSource="{{dataSource}}"> <s-list-item slot="renderItem"> <s-card hoverable="{{true}}" actions="{{[\'download\', \'edit\', \'share-alt\', \'more\']}}"> <s-card-meta> <div style="margin-bottom:3px" slot="title">{{ item.title }}</div> <s-avatar class="card-avatar" slot="avatar" src="{{item.avatar}}" size="small"></s-avatar> <div class="mets-cardInfo" slot="description"> <div> <p>活跃用户</p> <p style="color:#999"> <span>{{ item.activeUser }}<span>万</span></span> </p> </div> <div> <p>新增用户</p> <p style="color:#999">{{ item.newUser | NumberFormat }}</p> </div> </div> </s-card-meta> <template slot="download"> <s-icon type="download"></s-icon> </template> <template slot="edit"> <s-icon type="edit"></s-icon> </template> <template slot="share-alt"> <s-icon type="share-alt"></s-icon> </template> <s-dropdown slot="more"> <a class="ant-dropdown-link" href="javascript:;"> <s-icon type="ellipsis"></s-icon> </a> <s-menu slot="overlay"> <s-menu-item>1st menu item</s-menu-item> <s-menu-item>2nd menu item</s-menu-item> <s-menu-item>3rd menu item</s-menu-item> </s-menu> </s-dropdown> </s-card> </s-list-item> </s-list> </div> '},17451:function(t){t.exports=' <div> <s-list dataSource="{{data}}"> <s-list-item style="display:block" slot="renderItem"> <template slot="actions"> <span> <s-icon type="star-o" style="margin-right:8px"></s-icon> </span> <span> <s-icon type="like-o" style="margin-right:8px"></s-icon> {{ item.like }} </span> <span> <s-icon type="message" style="margin-right:8px"></s-icon> {{ item.star }} </span> </template> <s-list-item-meta> <a slot="title" href="https://vue.ant.design/">{{ item.title }}</a> <template slot="description"> <span> <s-tag>Santd</s-tag> <s-tag>设计语言</s-tag> </span> </template> </s-list-item-meta> <article-list-content description="{{item.description}}" owner="{{item.owner}}" avatar="{{item.avatar}}" href="{{item.href}}" updateAt="{{item.updatedAt}}"></article-list-content> </s-list-item> </s-list> <div s-if="data.length > 0" style="text-align:center;margin-top:16px"> <s-button on-click="loadMore" loading="{{loadingMore}}">加载更多</s-button> </div> </div> '},42810:function(t){t.exports=' <div class="article-list-content"> <div class="description"> <slot> {{ description }} </slot> </div> <div class="extra"> <a-avatar src="{{avatar}}" size="small"></a-avatar> <a href="{{href}}">{{ owner }}</a> 发布在 <a href="{{href}}">{{ href }}</a> <em>{{ updateAt | dateTrasform }}</em> </div> </div> '},55150:function(t){t.exports=' <div class="projects-cardlist" data-s-4d60fb3b> <s-list dataSource="{{data}}" grid="{{{gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1}}}" data-s-4d60fb3b> <s-list-item slot="renderItem" style="padding-left:12px;padding-right:12px;flex:1 1 auto" data-s-4d60fb3b> <s-card hoverable="{{true}}" data-s-4d60fb3b> <img slot="cover" src="https://b.bdstatic.com/searchbox/icms/other/img/san-admin/antcool.png" alt="{{item.title}}" data-s-4d60fb3b> <s-card-meta title="{{item.title}}" data-s-4d60fb3b> <p slot="description" class="description" data-s-4d60fb3b> {{ item.description }} </p> </s-card-meta> <div class="card-item-content" data-s-4d60fb3b> <span data-s-4d60fb3b>{{ item.updatedAt | fromNow }}</span> </div> </s-card> </s-list-item> </s-list> </div> '},87591:function(t){t.exports=' <grid-content class="account-center-page page-container"> <s-row gutter="{{24}}"> <s-col md="{{24}}" lg="{{7}}"> <s-card bordered="{{false}}"> <div class="account-center-avatarHolder"> <div class="avatar"> <img src="https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png"> </div> <div class="username">Glen</div> <div class="bio">海纳百川，有容乃大</div> </div> <div class="account-center-detail"> <p> <s-icon class="icon" type="profile"></s-icon> 交互专家 </p> <p> <s-icon class="icon" type="apartment"></s-icon> 某某事业群－某某平台部－某某技术部－UED </p> <p> <s-icon class="icon" type="environment"></s-icon> 北京 </p> </div> <s-divider></s-divider> <div class="account-center-tags"> <div class="tagsTitle">标签</div> <div> <template s-for="tag in tags"> <s-tooltip s-if="tag.length > 20" title="{{tag}}"> <s-tag key="tag">and</s-tag> </s-tooltip> <s-tag v-else>{{ tag }}</s-tag> </template> <s-input s-if="tagInputVisible" ref="tagInput" type="text" size="small" value="{{tagInputValue}}"></s-input> <s-tag v-else style="background:#fff;borderStyle:dashed"> <s-icon type="plus"></s-icon>New Tag </s-tag> </div> </div> <s-divider dashed="{{true}}"></s-divider> <div class="account-center-team"> <div class="teamTitle">团队</div> <s-spin spinning="{{teamSpinning}}"> <div class="members" slot="content"> <s-row> <s-col span="{{12}}" s-for="item in teams"> <a style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap"> <s-avatar size="small" src="{{item.avatar}}"></s-avatar> <span class="member">{{ item.name }}</span> </a> </s-col> </s-row> </div> </s-spin> </div> </s-card> </s-col> <s-col md="{{24}}" lg="{{17}}"> <s-card style="width:100%" bordered="{{false}}" tabList="{{tabListNoTitle}}" defaultActiveKey="{{activePage}}" activeKey="{{activePage}}" on-tabChange="switchPage"> <article-page s-if="activePage === \'article\'"></article-page> <app-page s-if="activePage === \'app\'"></app-page> <project-page s-if="activePage === \'project\'"></project-page> </s-card> </s-col> </s-row> </grid-content> '},58738:function(t,e,a){"use strict";a.r(e)},6066:function(t,e,a){"use strict";a.r(e)},91208:function(t,e,a){"use strict";a.r(e)},1985:function(t,e,a){"use strict";a.r(e)},50756:function(t,e,a){var s=a(60396);a(58738);var i=a(15387),r=a(76394).default;t.exports=a(76394),t.exports.default=s(r,i,[])},76080:function(t,e,a){var s=a(60396),i=a(17451),r=a(74378).default;t.exports=a(74378),t.exports.default=s(r,i,[])},58310:function(t,e,a){var s=a(60396);a(6066);var i=a(42810),r=a(84302).default;t.exports=a(84302),t.exports.default=s(r,i,[])},95954:function(t,e,a){var s=a(60396);a(91208);var i=a(55150),r=a(3808).default;t.exports=a(3808),t.exports.default=s(r,i,[])},6047:function(t,e,a){var s=a(60396);a(1985);var i=a(87591),r=a(6371).default;t.exports=a(6371),t.exports.default=s(r,i,[])}}]);
//# sourceMappingURL=47.d3f5f3f1.js.map