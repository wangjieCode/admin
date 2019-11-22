<template>
  <div id="app">
		<h1>值班管理系统web版</h1>
    <div id="nav">
      <router-link to="/" tag="h1">Home</router-link> 
      <router-link to="/about" tag="h1">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
    &.router-link-exact-active {
      color: #42b983;
    }
}
</style>
