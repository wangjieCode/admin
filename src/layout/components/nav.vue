<template>
  <el-menu :default-active="this.$router.path" router mode="horizontal">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{ item.navItem }}</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        { name: "/index/home", navItem: "管理员中心" },
        { name: "/index/check", navItem: "检查信息" },
        { name: "/", navItem: "档案管理" },
        { name: "/", navItem: "统计数据" }
      ]
    };
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.el-menu-item {
  background-color: rgb(48, 65, 86);
  color: rgb(191, 203, 217);
  width: 100%;
  &.is-active {
    color: rgb(64, 158, 255);
  }
}
.color {
  color: rgb(191, 203, 217);
}
</style>