<template>
	<div class="root-nav">
		<el-menu
			router
      default-active="2">
      <el-menu-item index="/home">
          <i class="el-icon-location"></i>
          <span>导航一</span>
      </el-menu-item>
      <el-menu-item  index="/about">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
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