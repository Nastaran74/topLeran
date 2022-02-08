<template>
  <div id="app">
    <div class="container1">
      <p>User Age:{{ Age }}</p>
    </div>
    <user-first :_age="Age"></user-first>
    <user-second :_age="Age" @changeAge="changeAge1"></user-second>
  </div>
</template>

<script>
import UserFirst from "./UserFirst.vue";
import UserSecond from "./UserSecond.vue";
export default {
  data() {
    return {
      Age: 22,
    };
  },
  components: { UserFirst, UserSecond },
  
  methods: {
    changeAge1(age){
      this.Age=age;
    }
  },
};
</script>


<style scoped>
.container1 {
  width: 20rem;
  height: 5rem;
  background-color: pink;
  border: 2px solid black;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
}
</style>