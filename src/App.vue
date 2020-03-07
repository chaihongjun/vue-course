<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-07 11:37:46
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
      <router-link :to="{name:'name_views'}">名命视图</router-link>|
      <router-link to="/login">登陆</router-link>|
    </div>
    <transition-group name="router">
      <router-view key="default" />
      <router-view name="email" key="email" />
      <router-view name="tel" key="tel" />
      <router-view name="login" key="login" />
    </transition-group>
  </div>
</template>
<style lang="less">
// 设置过渡状态
//  进入/离开 过渡有6个class 可以切换
//  6个class的命名方式：
//  1. transition或transition-group的name-enter 定义过渡开始，元素被插入前有效
//  2. transition或transition-group的name-enter-active 进入过渡状态
//  3. transition或transition-group的name-enter-to 进入过渡结束状态
//  4. transition或transition-group的name-leave 定义离开过渡
//  5. transition或transition-group的name-leave-active 离开过渡生效
//  6. transition或transition-group的name-leave-to 离开过渡状态结束
//  本例子中的6个class就分别是
//  .router--enter
//  .router--enter-active
//  .router--enter-to
//  .router--leave
//   .router--leave-active
//   .router--leave-to

.router-enter {
  opacity: 0;
}

.router-enter-active {
  transition: opacity 1s ease;
}

.router-enter-to {
  opacity: 1;
}

.router-leave {
  opacity: 1;
}

.router-leave-active {
  transition: opacity 1s ease;
}

.router-leave-to {
  opacity: 0;
}

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
