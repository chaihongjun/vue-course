/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-08 15:49:05
 * @LastEditors: ChaiHongJun
 * @Description: 入口启动文件
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "./config";
import Bus from "@/lib/bus";

Vue.config.productionTip = false;

Vue.prototype.$bus = Bus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
