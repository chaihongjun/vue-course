<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-02 11:07:30
 * @LastEditTime: 2020-03-06 18:33:31
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\views\Argu.vue
 -->


<template>
  <div class="argu">
    <!-- 这样给组件传参不利于组件的复用，缺乏灵活性 -->
    <!-- <h1>{{$route.params.name}}</h1> -->
    <!-- 组件和路由配置props 解耦 -->
    <!-- name 做为路由传递来的一个变量 作为props 被组件接收 -->
    <h1>路由传递来的参数是：{{$route.params.args}}</h1>
  </div>
</template>

<script>
export default {
  // 为了解耦  $route.params.name 传参方式
  // 使用 props
  props: {
    args: {
      type: String,
      default: "chj"
    }
  },
  //路由变化，组件复用的时候触发
  beforeRouteUpdate(to, from, next) {
    console.log("来自：" + from.name);
    console.log("打开了：" + to.name);
    // next();
  }
};
</script>