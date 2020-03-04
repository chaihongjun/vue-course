<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-02 11:28:45
 * @LastEditTime: 2020-03-04 11:43:09
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\views\Child.vue
 -->
<template>
  <div class="child">
    <h1>I am Child</h1>

    <p>{{this.$route.params.name}}</p>
  </div>
</template>

<script>
export default {};
</script>