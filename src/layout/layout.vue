<template>
  <el-container style="height: 100vh">
    <el-container>
      <el-aside width="200px">
        <j-nav />
      </el-aside>
      <el-main class="main-init">
        <el-header>
          <j-header />
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">活动管理</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <transition name="el-fade-in" mode="out-in">
          <router-view class="routerView" />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import jNav from "./components/nav";
import jHeader from "./components/header";
export default {
  components: {
    jNav,
    jHeader
  }
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  padding: 0px;
}

.el-aside {
  background-color: rgb(48, 65, 86);
  color: #333;
  text-align: center;
}

.el-main {
  color: #333;
  text-align: center;
  padding: 0px;
  overflow: hidden;
  background-color: #f0f2f5;
}
.routerView {
  width: 100%;
  height: 100%;
}
</style>