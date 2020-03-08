<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-07 12:58:44
 * @LastEditTime: 2020-03-08 14:44:51
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\views\Store.vue
 -->
<template>
  <div>
    <!-- v-model 监听的是 input 事件 -->
    <!-- <C-Input v-model="inputValue"></C-Input> -->
    <!-- 实际等于  监听子组件的input事件 -->

    <!-- 父组件监听子组件的input事件，并接收子组件emit过来的参数 -->
    <!-- <C-Input :value="inputValue" @input="handleInput"></C-Input> -->
    <p>父组件：{{inputValue}}</p>
    <C-Input @input="handleInput"></C-Input>
    <C-Show :content="inputValue"></C-Show>
  </div>
</template>


<script>
import CInput from "@/components/CInput.vue";
import CShow from "@/components/CShow.vue";
export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    CInput,
    CShow
  },
  methods: {
    // 这里的参数val就是子组件emit过来的参数
    handleInput(val) {
      this.inputValue = val;
    }
  }
};
</script>