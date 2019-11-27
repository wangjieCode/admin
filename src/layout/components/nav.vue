<template>
	<div class="root-nav">
		<el-menu
      default-active="2"
      background-color="rgb(48, 65, 86)">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span class="color">信息收集</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">7s检查</el-menu-item>
          <el-menu-item index="1-2">教学检查</el-menu-item>
          <el-menu-item>自习检查</el-menu-item>
          <el-menu-item>寝室检查</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
	</div>
</template>
<script>
export default {
	mounted(){
		this.$router.push('/home')
	}
}
</script>
<style lang="scss" scoped>
.el-menu-item{
  background-color: rgb(48, 65, 86);
  color: rgb(191, 203, 217);
  width: 100%;
  &.is-active{
    color: rgb(64, 158, 255);
  }
}
.color{
  color: rgb(191, 203, 217);
}

</style>