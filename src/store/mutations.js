/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:44:16
 * @LastEditTime: 2020-03-13 10:00:14
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

import Vue from "vue";

const mutations = {
  SET_APP_NAME(state, params) {
    state.appName = params.appName;
  },

  SET_APP_VERSION(state) {
    Vue.set(state, "appVersion", "3.0");
  }
};

export default mutations;
