/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:40:59
 * @LastEditTime: 2020-03-01 17:41:42
 * @LastEditors: ChaiHongJun
 * @Description: 实际路由表
 */
import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];
