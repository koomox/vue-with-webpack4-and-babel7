<template>
  <div id="app">
    <Hello msg="hello world, hi!"/>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";

export default {
  name: "app",
  components: {
    Hello
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 25px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
