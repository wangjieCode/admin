<template>
  <el-form class="drawer">
    <template v-for="(item, index) in sResult">
      <el-form-item :key="index" :label="item.title">
        <el-switch v-if="text" v-model="item.value"></el-switch>
        <el-input-number
          :v-else-if="item.type == 'number'"
          v-model="item.value"
          :min="1"
          :max="50"
          label="描述文字"
        ></el-input-number>
        <span :v-else-if="item.type == 'text'">
            {{item.value}}
        </span>
      </el-form-item>
    </template>
  </el-form>
</template>
<script>
export default {
  computed: {
      text(){
          return this.sResult[0].type === 'boolean'
      }
  },
  data() {
    return {
      sResult: [
        {
          type: "boolean",
          title: "1.有用无用未区分，需要整理",
          value: true
        },
        {
          type: "number",
          title: "迟到人数",
          value: 10
        },
        {
          type: "text",
          title: "备注",
          value: "学生顶撞老师"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.drawer {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border: 1px solid;
  .el-form-item {
    display: flex;
    justify-content: center;
  }
}
</style>