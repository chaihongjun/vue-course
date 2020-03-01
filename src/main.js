/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-01 17:48:45
 * @LastEditors: ChaiHongJun
 * @Description: 入口启动文件
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "./config";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
