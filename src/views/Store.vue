<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-07 12:58:44
 * @LastEditTime: 2020-03-10 13:58:40
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
    <p>输入的最后一个字符是：{{inputValueLastLetter}}</p>
    <p>appName:{{appName}} And appWithVersion:{{appWithVersion}}</p>
    <p>user模块里面的state:{{userName}}</p>
    <p>用户名的第一个字母是：{{getFirstLetter}}</p>
    <C-Input @input="handleInput"></C-Input>
    <C-Show :content="inputValue"></C-Show>
  </div>
</template>
<script>
import CInput from "@/components/CInput.vue";
import CShow from "@/components/CShow.vue";
import { mapState, mapGetters } from "vuex";
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
  },
  computed: {
    // 返回输入的最后一个字母
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    },
    // state 里面的状态
    ...mapState({
      appName: state => {
        return state.appName;
      },
      userName: state => {
        return state.user.userName;
      }
    }),
    //getters 里面的数据
    // 因为是响应式依赖 所以放在计算属性里
    appWithVersion() {
      return this.$store.getters.appWithVersion;
    },
    ...mapGetters(["getFirstLetter"])
  }
};
</script>