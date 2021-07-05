(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{384:function(a,t,v){"use strict";v.r(t);var _=v(44),s=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"aop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aop"}},[a._v("#")]),a._v(" AOP")]),a._v(" "),v("h2",{attrs:{id:"java-aop-实现方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java-aop-实现方式"}},[a._v("#")]),a._v(" Java AOP 实现方式")]),a._v(" "),v("ul",[v("li",[a._v("动态代理")]),a._v(" "),v("li",[a._v("动态字节码增强")])]),a._v(" "),v("p",[a._v("程序运行期间动态构建字节码的 class 文件")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("Java 代码生成（没懂）")])]),a._v(" "),v("li",[v("p",[a._v("自定义类加载器")])])]),a._v(" "),v("p",[a._v("Java 中的 class 都要通过类加载器加载到虚拟机才能运行，所以可以通过自定义类加载器将切面织入 class 文件中。")]),a._v(" "),v("ul",[v("li",[a._v("AOL （面向切面语言）扩展")])]),a._v(" "),v("h2",{attrs:{id:"aop-中的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aop-中的概念"}},[a._v("#")]),a._v(" AOP 中的概念")]),a._v(" "),v("ul",[v("li",[a._v("Joinpoint")]),a._v(" "),v("li",[a._v("Pointcut")]),a._v(" "),v("li",[a._v("Advice")]),a._v(" "),v("li",[a._v("Aspect")]),a._v(" "),v("li",[a._v("织入和织入器")]),a._v(" "),v("li",[a._v("目标对象")])]),a._v(" "),v("h2",{attrs:{id:"spring-aop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop"}},[a._v("#")]),a._v(" Spring AOP")]),a._v(" "),v("p",[a._v("Spring AOP 采用动态代理和字节码生成技术（cglib）实现。")]),a._v(" "),v("p",[a._v("字节码生成技术是通过子类覆写父类的方法实现的，为父类生成子类是通过 cglib 动态生成。")]),a._v(" "),v("h2",{attrs:{id:"问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),v("p",[a._v("如果类有两个方法都有切面，这个时候方法1调用方法2会使得在方法1中被调用的方法2的切面失效。可以通过 AopContext 解决。")])])}),[],!1,null,null,null);t.default=s.exports}}]);