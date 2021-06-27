<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  body {
    background-color: #262627;
  }
  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: "Open Sans";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ddd;
    margin-top: 60px;
  }
</style>
