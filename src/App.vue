<template>
  <div id="app">
    <UseDate />
  </div>
</template>

<script>
import UseDate from "./components/UseDate.vue";

export default {
  components: {
    UseDate,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-top: 10px;
  padding: 10px;
}
</style>
