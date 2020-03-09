<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-09 19:46:06
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\views\Home.vue
 -->
<template>
  <div class="home">
    <p>{{fun}}</p>
    <p>vuex-state:{{appName}}</p>
    <p>vuex-module-user-state：{{superRoot}}</p>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="go('back')">返回上一页</button>
    <button @click="go('forward')">前往"名命视图"</button>
    <button @click="go('replace')">替换到"about"</button>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  props: {
    fun: {
      type: String,
      default: "chj"
    }
  },
  beforeRouteLeave(to, from, next) {
    const leave = confirm("离开");
    if (leave) next();
    else console.log("不离开");
  },
  // computed: {
  //   // 1. 常规情况下使用 计算属性拿到 state 的响应数据
  //   appName() {
  //     // 使用state 里面的数据
  //     return this.$store.state.appName;
  //   },
  //   superRoot() {
  //     //来自user module 的数据
  //     return this.$store.state.user.userName;
  //   }
  // },
  // 2. 使用mapState 改造  computed 获取的 state
  // computed: mapState({
  //   //获取 state 里的状态
  //   appName: state => state.appName,
  //   // 获取 user module 里面的状态
  //   superRoot: state => state.user.userName
  // }),
  computed: {
    // 3.  使用对象展开运算符
    ...mapState({
      appName: state => state.appName,
      superRoot: state => state.user.userName
    })
  },
  methods: {
    go(type) {
      //获取当前路由实例
      //this.$router;
      if (type === "forward") {
        // this.$router.push("/name_views");
        this.$router.push({
          name: "name_views",
          query: {
            name: "query"
          },
          params: {
            name: "params"
          }
        });
        //或名命路由方式
      } else if (type === "back") {
        this.$router.back();
      } else if (type === "replace") {
        this.$router.replace("/about");
        //或名命路由方式  this.$router.replace({name:'about'});
      }
    }
  }
};
</script>
