<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/imgs/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleCLick('back')">返回上一页</button>
    <button @click="handleCLick('push')">跳转另一页</button>
    <button @click="handleCLick('replace')">替换另一页</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    handleCLick(type) {
      if(type === "back") {
        this.$router.back()
      }else if(type === "push") {
        this.$router.push({
          name:'child'
        })
      }else if(type === "replace") {
        this.$router.replace({
          name:'about'
        })
      }
    }
  }
};
</script>
