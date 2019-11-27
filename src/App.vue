<template>
  <div id="app">
    <transition name="el-fade-in"
                mode="out-in">
      <router-view style="height: 100vh" />
    </transition>
  </div>
</template>
<script>
// import mm from './server/user'
export default {
  // async mounted () {
  //   try {
  //     await mm()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}
</script>
<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
</style>
