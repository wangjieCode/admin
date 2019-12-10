<template>
  <el-container>
    <el-aside width="200px">
      <j-nav />
    </el-aside>
    <el-main style="margin-left: 200px">
      <el-container style="transfrom: translateX(200px)">
        <el-header style="height: 93px">
          <j-header />
          <!-- <tags-view /> -->
        </el-header>
        <el-main>
          <j-main />
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
import jNav from "./components/nav";
import jHeader from "./components/header/Navbar";
import jMain from "./components/AppMain";
// import TagsView from './components/TagsView'
export default {
  components: {
    jNav,
    jMain,
    // TagsView,
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
  height: 100vh;
  position: fixed;
}

.el-main {
  color: #333;
  text-align: center;
  padding: 0px;
  background-color: #f0f2f5;
}
.routerView {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow-x: hidden;
  box-sizing: border-box;
}
</style>