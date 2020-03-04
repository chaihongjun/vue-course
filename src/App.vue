<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-03 15:22:01
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\App.vue
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link :to="{name:'parent'}">parent</router-link>|
      <router-link :to="{name:'name_views'}">名命视图</router-link>
    </div>

    <router-view />
    <router-view name="email" />
    <router-view name="tel" />
  </div>
</template>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
