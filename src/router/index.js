/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-06 19:49:30
 * @LastEditors: ChaiHongJun
 * @Description: 路由实例
 */
import Vue from "vue";
import VueRouter from "vue-router";

//导入实际得路由列表
import routes from "./router";
import { setTitle } from "../lib/util";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 导航守卫 控制路由跳转
const HAS_LOGINED = true;
router.beforeEach((to, from, next) => {
  //在导航前设置每个页面标题
  setTitle(to.meta.title);

  //如果访问页面不是login登陆页面
  if (to.name !== "login") {
    // 如果已经登陆
    if (HAS_LOGINED) next();
    else next({ name: "login" });
  }
  //如果已经访问登陆页
  else {
    // if (HAS_LOGINED) next({ name: "home" });
    // else next();
    next();
  }
});

//完成导航后 不需要next 因为导航已经完成，不需要被改变
router.afterEach((to, from) => {});

export default router;

/*
  路由导航流程
  1. 导航被触发
  2. 在失活的组件（即将离开的组件）调用 beforeRouteLeave
  3. 调用全局前置守卫 beforeEach
  4. 如果有重用的组件 则在组件里调用 beforeRouteUpdate
  5. 如果组件不复用 调用路由独享守卫 beforeEnter
  6. 解析异步组件
  7. 在被激活的组件里调用 beforeRouteEnter
  8. 调用全局解析守卫 beforeResolve
  9. 导航确认
  10. 调用全局后置钩子 afterEach 所有钩子完成
  11. 触发DOM更新
  12. 用创建好的Vue实例调用beforeRouteEnter守卫传给next的回调 



*/
