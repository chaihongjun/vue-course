<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-03 14:20:47
 * @LastEditTime: 2020-03-08 15:37:11
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\views\Tel.vue
 -->
<template>
  <div>
    <p class="tel">电话是：18888888888</p>

    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "Tel",
  data() {
    return {
      msg: ""
    };
  },

  mounted() {
    //监听自定义事件带来的参数
    this.$bus.$on("pass", args => {
      this.msg = args;
    });
  }
};
</script>