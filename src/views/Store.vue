<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-07 12:58:44
 * @LastEditTime: 2020-03-13 10:01:55
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
    <p>appVersion:{{appVersion}}</p>
    <p>user模块里面的state:{{userName}}</p>
    <p>用户名的第一个字母是：{{getFirstLetter}}</p>

    <p>
      <button @click="modifiedAppName">修改appName</button>
    </p>

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
    },
    modifiedAppName() {
      // 虽然这样可以修改state ，但是不推荐，因为可能造成数据不可控制
      // this.$store.state.appName = "chj";
      // 改变 state 应该是commit mutation

      // SET_APP_NAME 是一个mutation 名称，需要定义在 mutations对象里
      // 然后是携带的数据 一个参数 可以是字符串
      // this.$store.commit("SET_APP_NAME", "superuser");
      // 或 对象 ，如果是对象，则mutation 名称包含在这个对象里
      this.$store.commit({
        type: "SET_APP_NAME",
        appName: "superuser"
      });

      // 新增的mutation

      this.$store.commit("SET_APP_VERSION");
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
      },
      appVersion: state => {
        return state.appVersion;
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