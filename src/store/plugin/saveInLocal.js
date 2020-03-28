/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-13 15:57:49
 * @LastEditTime: 2020-03-14 17:13:41
 * @LastEditors: ChaiHongJun
 * @Description: 持久化插件(数据存储在本地)
 */

// 插件是一个函数，store为唯一参数

export const saveInLocal = store => {
  console.log("store Inint");
  // 如果本地存在 state 这个字符串
  // 那么将这个字符串转换成对象
  // 再替换当前store里面的state
  //if (localStorage.state) store.replaceState(JSON.parse(localStorage.state));
  store.subscribe((mutation, state) => {
    //console.log("提交 mutation");
    //  将state字符串序列化之后 存入本地state
    //
    localStorage.localData = JSON.stringify(state);
  });
};
