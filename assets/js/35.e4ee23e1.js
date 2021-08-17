(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{398:function(v,_,t){"use strict";t.r(_);var r=t(44),a=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"如何保持缓存和数据库的数据一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何保持缓存和数据库的数据一致性"}},[v._v("#")]),v._v(" 如何保持缓存和数据库的数据一致性")]),v._v(" "),t("h2",{attrs:{id:"等待过期时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#等待过期时间"}},[v._v("#")]),v._v(" 等待过期时间")]),v._v(" "),t("p",[v._v("直接等缓存中的 key 过期，之后请求访问这个 key 时会从数据库中取出最新的数据更新到缓存中。")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("ul",[t("li",[v._v("实现简单，出问题概率较小")]),v._v(" "),t("li",[v._v("直接使用缓存中的过期机制，易于实现")])]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("ul",[t("li",[v._v("完全依赖过期时间，如果读请求频繁，但是过期时间设置较长会读到很多脏数据。")]),v._v(" "),t("li",[v._v("过期时间不好把控，太对容易造成缓存频繁失效，太长容易较长时间数据不一致")])]),v._v(" "),t("h2",{attrs:{id:"数据更新后删除缓存中旧数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据更新后删除缓存中旧数据"}},[v._v("#")]),v._v(" 数据更新后删除缓存中旧数据")]),v._v(" "),t("p",[v._v("数据库中的数据更新后直接删除缓存中的数据，这样下次请求过来是缓存中数据不存在就会访问数据库中的新数据，同时将新数据保存在缓存中。主动删除缓存中的数据是为了减少不一致的时间。")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("ul",[t("li",[v._v("相对等待过期时间到达，直接删除缓存可以让数据不一致的时间更短")]),v._v(" "),t("li",[v._v("实现成本低")])]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("ul",[t("li",[v._v("如果数据库中更新成功，缓存中删除失败就会变成只能等待缓存的过期时间到达")])]),v._v(" "),t("h2",{attrs:{id:"通过消息队列更新缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过消息队列更新缓存"}},[v._v("#")]),v._v(" 通过消息队列更新缓存")]),v._v(" "),t("p",[v._v("数据库更新数据之后发送一个消息，让缓存监听该消息，在收到消息之后更新缓存。")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("ul",[t("li",[v._v("使用消息队列可以进行解耦，数据库更新数据成功同时成功发送消息之后就不需要关心后续的结果，消息队列的可靠性保证了缓存中的数据一定会更新")])]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("ul",[t("li",[v._v("引入消息队列增加了成本")])]),v._v(" "),t("h2",{attrs:{id:"先更新缓存再更新数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先更新缓存再更新数据库"}},[v._v("#")]),v._v(" 先更新缓存再更新数据库")]),v._v(" "),t("p",[v._v("在需要更新数据时先更新缓存再更新数据库。")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("ul",[t("li",[v._v("实现简单")]),v._v(" "),t("li",[v._v("即使更新缓存成功，更新数据库失败，后续请求访问也是会获取到缓存中的新数据，短期内不会对业务造成太大影响。")])]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("ul",[t("li",[v._v("如果更新缓存成功，更新数据库失败，在缓存失效时会从数据库读取旧值保存在缓存中，这就会对业务造成影响")])]),v._v(" "),t("h2",{attrs:{id:"解析-binlog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析-binlog"}},[v._v("#")]),v._v(" 解析 binlog")]),v._v(" "),t("p",[v._v("如果使用的时 MySQL，可以搭建一个服务通过解析 MySQL 中 binlog 日志然后将数据更新到缓存。")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("ul",[t("li",[v._v("更新数据库之后不需要做额外的操作")])]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("ul",[t("li",[v._v("需要额外搭建一个服务，增加了成本")]),v._v(" "),t("li",[v._v("同步服务如果压力较大崩了会造成较长时间的数据不一致")])]),v._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/RxtLi6cUGkvk3DpAX9HYKg",target:"_blank",rel:"noopener noreferrer"}},[v._v("【字节二面】缓存一致性如何保证？ "),t("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=a.exports}}]);