/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-01 17:56:41
 * @LastEditors: ChaiHongJun
 * @Description: 路由实例
 */
import Vue from "vue";
import VueRouter from "vue-router";

//导入实际得路由列表
import routes from "./router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
