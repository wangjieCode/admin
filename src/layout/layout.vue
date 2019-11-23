<template>
  <el-container style="height: 100vh">
    <el-header>头部</el-header>
    <el-container>
      <el-aside width="200px">
        <j-nav />
      </el-aside>
      <el-main class="main-init">
        <transition name="el-fade-in" mode="out-in">
          <router-view class="routerView" />
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

<style lang="scss" scoped>

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
  color: #333;
  text-align: center;
	padding: 0px;
	overflow: hidden;
}
.routerView {
  width: 100%;
  height: 100%;
}
</style>