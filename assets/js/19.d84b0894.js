(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{373:function(s,a,e){"use strict";e.r(a);var t=e(44),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis-为什么快"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-为什么快"}},[s._v("#")]),s._v(" Redis 为什么快")]),s._v(" "),e("ul",[e("li",[s._v("完全基于内存，绝大部分请求是纯粹的内存操作，非常快速。数据存在内存中，类似于HashMap，HashMap 的优势就是查找和操作的时间复杂度都是 O(1)；")]),s._v(" "),e("li",[s._v("数据结构简单，对数据操作也简单，Redis 中的数据结构是专门进行设计的；")]),s._v(" "),e("li",[s._v("采用单线程，避免了不必要的上下文切换和竞争条件。")]),s._v(" "),e("li",[s._v("使用多路 I/O 复用模型，非阻塞 IO；")]),s._v(" "),e("li",[s._v("Redis 的 VM（虚拟内存）机制，将不经常访问的数据保存在磁盘中。Redis 将数据保存在磁盘用的不是 OS 提供的 Swap 接口，而是自己实现的（因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求）。")])]),s._v(" "),e("h2",{attrs:{id:"基于内存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于内存"}},[s._v("#")]),s._v(" 基于内存")]),s._v(" "),e("p",[s._v("跟其他数据库相比类似于 MySQL 这种将数据保存在磁盘中，Redis 采用了将数据保存在内存中的方式。内存的读取速度会比磁盘读取速度快很多，即使是固态硬盘也会差很多，因此操作 Redis 中的数据会更快。")]),s._v(" "),e("p",[e("strong",[s._v("内存：")])]),s._v(" "),e("p",[s._v("内存是程序与CPU进行沟通的桥梁。计算机中所有程序的运行都是在内存中进行的。其作用是存放CPU中的运算数据，以及与硬盘等外部存储设备交换的数据。")]),s._v(" "),e("p",[e("strong",[s._v("磁盘：")])]),s._v(" "),e("p",[s._v("磁盘最主要的功能就是保存电脑里面的信息。")]),s._v(" "),e("h2",{attrs:{id:"使用类似于-java-中-hashmap-的结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用类似于-java-中-hashmap-的结构"}},[s._v("#")]),s._v(" 使用类似于 Java 中 HashMap 的结构")]),s._v(" "),e("p",[s._v("Redis 是一个键值数据库，通过键获取值。为了能够通过键快速访问值，Redis 使用了一个哈希表来保存键值对。哈希表中保存了 entry 元素的指针。entry 中保存了键和值的指针，分别指向具体的键和值。Redis 会通过计算键的哈希值判断一个 entry 应该放在哈希表中的哪里。这样查找一个 entry 的时间复杂度就是O(1)。")]),s._v(" "),e("p",[e("strong",[s._v("哈希冲突问题：")])]),s._v(" "),e("p",[s._v("当有多个 entry 计算的哈希值相等时，哈希值指向的 entry 会形成链表结构，查找链表上的 entry 只能通过一个指针遍历，如果链表的长度很长，查找元素的耗时会变长，效率变低。这个时候 Redis 会对哈希表做 rehash 操作，即增加哈希表的长度，让逐渐增多的 entry 能够分散保存。")]),s._v(" "),e("p",[e("strong",[s._v("rehash：")])]),s._v(" "),e("p",[s._v("Redis 为了让 rehash 更高效，Redis 会默认使用两个哈希表，当一个哈希表需要扩容时，另一个哈希表会先分配待扩容哈希表的大小的两倍，然后把待扩容哈希表的数据拷贝到分配好大小的哈希表中，拷贝完会释放空间，这样原来待扩容的哈希表就能留到下次哈希表需要扩容是使用。")]),s._v(" "),e("p",[e("strong",[s._v("rehash 效率问题：")])]),s._v(" "),e("p",[s._v("rehash 是一个耗时的操作，因为 Redis 是单线程，rehash 耗时会造成阻塞，这时候 Redis 采用渐进式 rehash 解决这个问题。渐进式 rehash 就是当拷贝数据到另一个哈希表时，，Redis 仍然正常处理客户端请求，每处理一个请求时，从待扩容哈希表中的第一个索引位置开始，顺带着将这个索引位置上的所有 entry 拷贝到另一个哈希表中；等处理下一个请求时，再顺带拷贝待扩容哈希表中的下一个索引位置的 entry。这样就避免了一次性大量拷贝的开销，分成了多次拷贝，避免了耗时操作阻塞线程。")]),s._v(" "),e("h2",{attrs:{id:"单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[s._v("#")]),s._v(" 单线程")]),s._v(" "),e("p",[s._v("Redis 单线程对比多线程，避免了不必要的上下文切换和竞争条件，同时单线程编程会比多线程编程更简单方便。")]),s._v(" "),e("blockquote",[e("p",[s._v("单线程只是不必要的上下文切换和竞争条件，但是实际上多线程还是会比单线程要快")]),s._v(" "),e("p",[s._v("Redis 的单线程是用在执行命令的时候，RDB 和 AOF 持久化都可以 fork 一个子线程去执行持久化，Redis 6开始，Redis 网络连接开始使用多线程。")])]),s._v(" "),e("h2",{attrs:{id:"i-o-多路复用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-o-多路复用"}},[s._v("#")]),s._v(" I/O 多路复用")]),s._v(" "),e("p",[s._v("相比于传统的阻塞 I/O 模型在数据没有到来时会阻塞连接，I/O 多路复用使多个连接共用一个阻塞对象，这个阻塞对象通过事件分发机制通知应用程序处理事件。")]),s._v(" "),e("p",[s._v("I/O 多路复用：多个连接共用一个阻塞对象，应用程序只需要在一个阻塞对象上等待，无需阻塞等待所有连接。当某条连接有新的数据可以处理时，操作系统通知应用程序，线程从阻塞状态返回，开始进行业务处理；")]),s._v(" "),e("blockquote",[e("p",[s._v("**Reactor 模型：**Reactor 模式是指通过一个或多个输入同时传递给服务处理器的服务请求的事件驱动处理模式。")])]),s._v(" "),e("h2",{attrs:{id:"vm-虚拟内存-机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vm-虚拟内存-机制"}},[s._v("#")]),s._v(" VM （虚拟内存）机制")]),s._v(" "),e("p",[s._v("Redis 的 VM 机制就是暂时把不经常访问的数据（冷数据）从内存交换到磁盘中，以此防止内存空间不足导致访问速度下降问题，同时将内存数据交换到磁盘时没有使用 OS 提供的 Swap，而是自己实现，这是为了防止在系统调用系统函数的话，浪费一定的时间去移动和请求。同时为了保证查找速度，Redis 只将 value 保存在磁盘，内存中保留了 key。")]),s._v(" "),e("p",[s._v("相关配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#开启vm功能\nvm-enabled yes\n#交换出来的value保存的文件路径\nvm-swap-file /tmp/redis.swap\n#设置当内存消耗达到上限时开始将value交换出来\nvm-max-memory 1000000\n#设置单个页面的大小，单位是字节\nvm-page-size 32\n#设置最多能交换保存多少个页到磁盘\nvm-pages 13417728\n#设置完成交换动作的工作线程数，设置为0表示不使用工作线程而使用主线程,这会以阻塞的方式来运行。建议设置成CPU核个数\nvm-max-threads 4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/UUb9VpHDmdsvhnB6cL-rng",target:"_blank",rel:"noopener noreferrer"}},[s._v("拒绝躺平，Redis选择实现了自己的VM (qq.com)"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);