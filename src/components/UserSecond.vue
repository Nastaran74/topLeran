<template>
  <div id="app">
    <div class="container1">
      <p>Age-Parent:{{ Age }}</p>
      <button @click="changeAge">Change Age</button>
    </div>
  </div>
</template>

<script>
import { BusEvent } from "../main.js";
export default {
  props: {
    _age: Number,
  },
  data() {
    return {
      Age: this._age,
    };
  },
  methods: {
    changeAge() {
      this.Age =BusEvent.PublicAge;
      // BusEvent.$emit("changeAge",this.Age)
      BusEvent.changeAge(BusEvent.PublicAge);
    },
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