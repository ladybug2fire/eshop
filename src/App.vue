<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body{
  margin: 0;
  padding: 0;
}
.page{
  .header {
    height: 50px;
    background-color: white;
    color: black;
    border-bottom: 1px solid #ebeef5;
  }
}
</style>
