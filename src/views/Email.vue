<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-03 14:20:39
 * @LastEditTime: 2020-03-08 15:47:02
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\views\Email.vue
 -->
<template>
  <div>
    <p class="email">邮箱地址是:example@domain.com</p>

    <button @click="handleClick">传值给 tel</button>
  </div>
</template>



<script>
export default {
  name: "Email",
  methods: {
    handleClick() {
      this.$bus.$emit("pass", "hello");
    }
  }
};
</script>

