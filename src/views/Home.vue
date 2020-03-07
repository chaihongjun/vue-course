<!--
 * @Author: ChaiHongJun
 * @Date: 2020-03-01 17:30:02
 * @LastEditTime: 2020-03-06 17:47:54
 * @LastEditors: ChaiHongJun
 * @Description: 
 * @FilePath: \vue-course\src\views\Home.vue
 -->
<template>
  <div class="home">
    <p>{{fun}}</p>
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
