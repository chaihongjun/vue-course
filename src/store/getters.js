/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-09 19:48:59
 * @LastEditTime: 2020-03-09 20:00:59
 * @LastEditors: ChaiHongJun
 * @Description:
 * @FilePath: \vue-course\src\store\getters.js
 */

const getters = {
  appWithVersion: state => {
    return state.appName + " v2.0";
  }
};

export default getters;
