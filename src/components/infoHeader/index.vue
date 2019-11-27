<template>
  <div class="infoHeader">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">待处理</el-menu-item>
      <el-menu-item index="2">已检查</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
</style>