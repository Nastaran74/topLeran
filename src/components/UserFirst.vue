<template>
  <div id="app">
    <div class="container1">
        <p>Age-Parent:{{ Age }}</p>
    </div>
  </div>
</template>

<script>
import {BusEvent} from "../main.js"

export default {
  props: {
    _age: Number,
  },
  data() {
    return {
      Age: this._age,
    }
  },
   created() {
      BusEvent.$on("changeAge",age=>{
          this.Age=age;
      })
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