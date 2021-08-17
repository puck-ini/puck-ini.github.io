(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{394:function(s,e,t){"use strict";t.r(e);var i=t(44),v=Object(i.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis-集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-集群"}},[s._v("#")]),s._v(" Redis 集群")]),s._v(" "),t("p",[s._v("Redis 集群会将不同的数据分散在集群的各个节点中，以此提高整个集群的容量。")]),s._v(" "),t("h2",{attrs:{id:"如何提高-redis-容量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何提高-redis-容量"}},[s._v("#")]),s._v(" 如何提高 Redis 容量")]),s._v(" "),t("p",[s._v("提高容量一般有两种方案：纵向扩展和横向扩展。")]),s._v(" "),t("ul",[t("li",[s._v("纵向扩展：升级单实例 Redis 所在服务器的配置，增加内存和使用性能更好的 CPU。优点实施简单，但是会受到硬件容量和成本的限制。")]),s._v(" "),t("li",[s._v("横向扩展：增加 Redis 实例分布在不同的服务器中。优点是不会受到硬件容量和成本限制，只需要增加 Redis 实例就可以扩容。")])]),s._v(" "),t("h2",{attrs:{id:"redis-集群如何实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-集群如何实现"}},[s._v("#")]),s._v(" Redis 集群如何实现")]),s._v(" "),t("p",[s._v("Redis 3.0 之前，官方并没有针对切片集群提供具体方案，集群方案只能通过其他方式实现。")]),s._v(" "),t("p",[s._v("Redis 3.0 之后，官方提供了 Redis Cluster 方案，采用一个哈希槽，将数据分布在哈希槽中。")]),s._v(" "),t("p",[s._v("一个Redis 集群共有16384个哈希槽，对于每一个键值都会根据 key 计算出哈希值，然后映射在哈希槽中。")]),s._v(" "),t("p",[s._v("计算 key 的哈希值使用的是 CRC16 算法（Redis 6 使用了速度更快的 CRCspeed 算法），然后再根据这个 16 bit 的值对 16384 取模，这样就得到了所映射的哈希槽的编号。")]),s._v(" "),t("p",[s._v("Redis 集群在启动时会平均分配哈希槽的数量到每一个 Redis 实例中。这个哈希槽的分配可以手动更改，这样可以让内存配置大小不一致的 Redis 实例分配到较合理的哈希槽数量，手动分配需要将 16384 分配完，不然集群无法启动。")]),s._v(" "),t("p",[s._v("Redis 集群启动时，每个实例都会将自己的哈希槽信息发送给其他实例，这样每个实例都会有所有的哈希槽映射关系。")]),s._v(" "),t("h2",{attrs:{id:"客户端如何获取数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端如何获取数据"}},[s._v("#")]),s._v(" 客户端如何获取数据")]),s._v(" "),t("p",[s._v("上述过程中数据分散在了不同实例的哈希槽中，那客户端如何获取到所有数据？")]),s._v(" "),t("p",[s._v("客户端在与集群建立连接时，集群会将哈希槽的分配信息发送给客户端，客户端需要将信息缓存在本地，当客户端请求数据时会先计算对应的哈希槽，然后将请求发送给响应的实例。")]),s._v(" "),t("p",[s._v("但是哈希槽不会是一直不变的，集群中实例的新增和删除、为了负载均衡 Redis 哈希槽重新分布一边都会导致哈希槽改变。哈希槽重新分布之后实例之间还是可以将哈希槽信息发送给其他实例，更新哈希槽映射关系。但是客户端无法感知哈希槽的变化，只能通过 Redis CLuster 提供的重定向机制访问数据。重定向机制在哈希槽重新分配后，客户端缓存的哈希槽映射信息跟最新的信息不一致，导致客户端请求的数据在当前实例不存在，同时当前实例会返回一个 moved 命令的响应结果，包含请求的键值所在的哈希槽位置、哈希槽在的实例的 ip 和端口，这个时候客户端就可以对这个实例发送请求，同时客户端更新缓存映射信息。")]),s._v(" "),t("p",[s._v("如果哈希槽的数据较多，就可能出现客户端请求的时候哈希槽的数据还为完成转移的情况。这个时候实例会返回一个 ask 信息，包含了哈希槽的位置以及哈希槽所在的实例的 ip 和端口，表示这个哈希槽正在迁移，ask 命令不会更改客户端的缓存。此时，客户端需要向请求的哈希槽所在新实例发送 asking 命令，这个命令表示让实例允许执行客户端接下来的操作，之后客户端就可以再向该实例发送请求。")])])}),[],!1,null,null,null);e.default=v.exports}}]);