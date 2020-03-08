/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:40:59
 * @LastEditTime: 2020-03-07 12:59:33
 * @LastEditors: ChaiHongJun
 * @Description: 实际路由表
 */
import Home from "../views/Home.vue";
export default [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: Home,
    //3 .路由传参 函数形式
    //  可以将带query的参数传递给组件
    props: route => ({
      fun: route.query.queryString
    }),
    beforeEnter: (to, from, next) => {
      //当从其他路由要切换到这个路由，
      //可以在这里做一些处理，比如
      if (from.name === "login") console.log("来自登陆页");
      else console.log("不是来自登陆页");
      next();
    },
    meta: {
      title: "首页"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    // 2. 路由传参 props 对象形式 对应的组件要设置对应的props
    props: {
      name: "chj"
    },
    meta: {
      title: "关于"
    }
  },
  {
    path: "/argu",
    component: () => import("../views/Argu.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/Argu.vue")
      },
      {
        path: ":args",
        component: () => import("../views/Argu.vue"),
        // 1. 路由传参 props 布尔形式 对应的组件要设置对应的props
        props: true
      }
    ]
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
    ],
    meta: {
      title: "栏目"
    }
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
    },
    meta: {
      title: "多视图"
    }
  },
  {
    // 重定向  访问/main重定向到/
    path: "/main",
    redirect: "/"
  },
  //登陆页
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "登陆"
    }
  },
  {
    path: "/store",
    component: () => import("../views/Store.vue")
  },

  // 404 的页面规则一定要配置在路由表的最后
  {
    path: "*",
    component: () => import("../views/404.vue")
  }
];
