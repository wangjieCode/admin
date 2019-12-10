<template>
  <el-menu :default-active="this.$router.path" router mode="horizontal">
    <el-menu-item v-for="(item,i) in router" :key="i" :index="'/index/' + item.name">{{ item.title }}</el-menu-item>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed:mapGetters(['router']),
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