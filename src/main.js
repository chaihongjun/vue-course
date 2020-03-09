/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-08 16:18:46
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

// Vue实例注入bus
Vue.prototype.$bus = Bus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
