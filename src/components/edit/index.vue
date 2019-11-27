<template>
  <el-form  ref="from" class="drawer">
    <template  v-for="(item, index) in sResult">
      <el-form-item :model="sResult" :key="index" :label="item.title">
        <el-switch v-if="flagBoo(item.type)" v-model="item.value"></el-switch>
        <el-input-number
          v-else-if="flagNumber(item.type)"
          v-model="item.value"
          :min="1"
          :max="50"
          label="描述文字"
        ></el-input-number>
        <template v-else-if="flagbox(item.type)">
          <el-checkbox
            border
            v-model="item.value"
            v-for="(item,index) in item.value"
            :label="item.falg"
            :key="index"
          >{{item.title}}</el-checkbox>
        </template>
        <span v-else>{{item.value}}</span>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="resetForm('from')">取消修改</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    sResult: Array
  },
  data() {
    return {
      temp: null
    };
  },
  mounted() {
    this.temp = this.sResult;
  },
  methods: {
    onSubmit() {
      console.log(this.sResult);
    },
    resetForm(formName) {
      console.log(formName,this.$refs[formName])
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    flagBoo() {
      return function(flag) {
        if (flag == "boolean") {
          return true;
        }
        return false;
      };
    },
    flagNumber() {
      return function(flag) {
        if (flag == "number") {
          return true;
        }
        return false;
      };
    },
    flagbox() {
      return function(flag) {
        if (flag == "checkout") {
          return true;
        }
        return false;
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.drawer {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  border: 1px solid;
  .el-form-item {
    display: flex;
    justify-content: center;
    font-size: 25px !important;
  }
}
</style>