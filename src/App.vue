<template>
  <div id="app">
    <transition name="el-fade-in" mode="out-in">
      <router-view style="height: 100vh" />
    </transition>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
* {
	padding: 0px;
	margin: 0px;
}
</style>
