<template>
  <el-form ref="from" :model="sResult" class="drawer" :class="{'from-active':active}">
    <el-form-item :class="{'checkbox':flagbox(sResult.type)}" prop="value" :label="sResult.title">
      <el-switch v-if="flagBoo(sResult.type)" v-model="sResult.value"></el-switch>
      <el-input-number
        v-else-if="flagNumber(sResult.type)"
        v-model="sResult.value"
        :min="1"
        :max="50"
        label="描述文字"
      ></el-input-number>
      <template v-else-if="flagbox(sResult.type)">
        <el-checkbox-button
          border
          v-model="item.value"
          v-for="(item,index) in sResult.value"
          :label="item.type"
          :key="index"
        >{{item.title}}</el-checkbox-button>
      </template>
      <span v-else>{{sResult.value}}</span>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    sResult: Object
  },
  watch: {
    sResult: {
      handler(newVlaue) {
        this.$emit("reset", newVlaue);
        let { value } = this.temp;
        if (value != newVlaue.value) {
          this.active = true;
        } else {
          this.active = false;
        }
      },
      deep: true
    }
  },
  data() {
    return {
      active: false,
      temp: null
    };
  },
  mounted() {
    this.temp = JSON.parse(JSON.stringify(this.sResult));
  },
  methods: {},
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
<style lang="scss">
.drawer {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  // padding: 30px;
  .el-form-item {
    display: flex;
    // justify-content: center;
  }
}
.from-active {
  font-weight: bold;
}
.el-form-item__label {
  font-size: 16px;
  padding-left: 30px;
}
.el-form-item{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.checkbox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .el-form-item__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
}
</style>