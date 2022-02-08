<template>
  <div id="app">
    <div class="container">
      <User msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import User from "./components/User.vue";

export default {
  name: "App",
  components: {
    User,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 60px;
}
.container {
  border: 2px solid purple;
  background-color: gray;
  height: 50rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
}
</style>
