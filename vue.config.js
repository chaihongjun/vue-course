/*
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 13:03:22
 * @LastEditTime: 2020-03-01 19:11:33
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
const path = require("path");
const resolve = dir => {
  path.join(__dirname, dir);
};
const BASE_URL = process.env.NODE_ENV === "production" ? "/iview-admin" : "/";

module.exports = {
  publicPath: BASE_URL, //项目基本路径
  // chainWebpack: config => {
  //   //@ 别名为 src
  //   config.resolve.alias.set("_c", resolve("src/components"));
  //   //.set("@", resolve("src"))
  // },
  //打包时不生成 .map文件
  productionSourceMap: false,

  //跨域配置
  devServer: {
    proxy: "http://localhost:4000"
  }
};
