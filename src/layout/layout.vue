<template>
  <el-container style="height: 100vh">
    <el-header>头部</el-header>
    <el-container>
      <el-aside width="200px">
        <j-nav />
      </el-aside>
      <el-main>
        <transition name="el-fade-in-linear">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import jNav from './components/nav';
export default {
  components: {
    jNav
  }
}
</script>
<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  overflow: scroll;
}
</style>