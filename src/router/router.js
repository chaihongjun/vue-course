/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:40:59
 * @LastEditTime: 2020-03-03 14:44:51
 * @LastEditors: ChaiHongJun
 * @Description: 实际路由表
 */
import Home from "../views/Home.vue";
export default [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    //设置一个动态路由
    path: "/argu/:name",
    component: () => import("../views/Argu.vue")
  },
  {
    //设置一个嵌套路由
    path: "/parent",
    name: "parent",
    component: () => import("../views/Parent.vue"),
    children: [
      {
        path: "child",
        name: "child",
        component: () => import("../views/Child.vue")
      }
    ]
  },
  {
    // 多视图
    path: "/name_views",
    name: "name_views",
    //表示有多个组件
    components: {
      default: () => import("../views/Child.vue"), //这个是默认的视图
      email: () => import("../views/Email.vue"),
      tel: () => import("../views/Tel.vue")
    }
  },
  {
    // 重定向  访问/main重定向到/
    path: "/main",
    redirect: "/"
  }
];
