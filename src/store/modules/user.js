/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:44:41
 * @LastEditTime: 2020-03-10 11:06:38
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
// user 模块的state
const state = {
  userName: "root"
};

const getters = {
  //获取 state里 userName 的第一个字母
  getFirstLetter: state => {
    return state.userName.substr(0, 1);
  }
};

const mutations = {};
const actions = {};
export default {
  state,
  getters,
  mutations,
  actions
};
