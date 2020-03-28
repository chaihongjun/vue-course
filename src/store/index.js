/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-13 16:21:43
 * @LastEditors: ChaiHongJun
 * @Description:
 * @FilePath: \vue-course\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import user from "./modules/user";

import getters from "./getters";

import { saveInLocal } from "./plugin/saveInLocal";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  // 注入 getters
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [saveInLocal]
});
