<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-08 14:22:04
 * @LastEditTime: 2020-03-08 14:45:25
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\components\CShow.vue
 -->
<template>
  <div>
    <p>兄弟组件CShow:{{content}}</p>
  </div>
</template>


<script>
export default {
  name: "CShow",
  props: {
    content: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>