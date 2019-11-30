<template>
  <el-collapse accordion>
    <el-collapse-item>
      <template slot="title">
        查询历史记录
        <i class="header-icon el-icon-info"></i>
      </template>
      <div>
        <el-date-picker
          align="right"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.sereen {
//   width: 100%;
//   height: 60px;
  border: 1px solid;
}
</style>