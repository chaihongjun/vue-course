<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-07 13:09:19
 * @LastEditTime: 2020-03-08 14:45:05
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\components\CInput.vue
 -->
<template>
  <div>
    兄弟组件CInput：
    <input type="text" @input="handleInput" :value="value" />
  </div>
</template>


<script>
export default {
  name: "CInput",
  props: {
    value: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
    handleInput(event) {
      // 获取文本框的值
      const value = event.target.value;
      //本子组件emit了一个事件input，并将文本框的值发送给父组件
      this.$emit("input", value);
    }
  }
};
</script>