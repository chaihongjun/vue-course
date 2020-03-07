<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-06 18:05:30
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\views\About.vue
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "chj"
    }
  },
  //进入这个组件触发
  beforeRouteEnter(to, from, next) {
    console.log("来自：" + from.name);
    console.log("打开了：" + to.name);
    next();
  }
};
</script>