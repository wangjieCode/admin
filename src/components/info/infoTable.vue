<template>
  <div class="box-card">
    <el-row style="background-color: #fff" type="flex" justify="start">
      <el-col style="display: flex;
    align-items: center;" :span="19">
        <span style="padding:0 30px;font-weight: bold">选择检查类型</span>
        <el-button @click="checkoutClick(index)" v-for="(item,index) in type" :key="index">{{item}}</el-button>
      </el-col>
      <el-col :span="5">
        <j-screen />
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :row-class-name="flagState"
        v-loading="loading"
        :data="tableData"
        border
        style="width:100%;"
      >
        <el-table-column prop="date" label="日期" width="300"></el-table-column>
        <el-table-column prop="type" label="检查类型" width="400"></el-table-column>
        <el-table-column prop="address" label="地址" width="400"></el-table-column>
        <el-table-column
          :filters="[{ text: '已检查', value: true }, { text: '未检查', value: false }]"
          :filter-method="filterTag"
          width="150"
          type="index"
          prop="type"
          label="检查结果"
        >
          <div slot-scope="scope">
            <el-button
              :type="scope.row.state ? 'success' : 'danger'"
              disable-transitions
              @click="drawer = true"
            >{{scope.row.state ? '检查结果': '填写检查'}}</el-button>

            <el-drawer
              custom-class="drawer"
              title="查询结果"
              :visible.sync="drawer"
              direction="rtl"
              size="30%"
            >
              <j-seven
                ref="index"
                @reset="reset(index, arguments)"
                v-for="(item, index) in test"
                :key="index"
                :sResult="item"
              />
              <el-button :disabled="disabled" type="primary" @click="submit">保存修改</el-button>
            </el-drawer>
          </div>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row style="background-color: #fff" type="flex" justify="end">
      <el-pagination @next-click="next" background layout="prev, pager, next" :total="100"></el-pagination>
    </el-row>
  </div>
</template>
<script>
let newResult = [];
import jScreen from "./screen";
import jSeven from "@/components/edit";
export default {
  props: {
    tableData: Array
  },
  mounted() {},
  methods: {
    filterTag(value, row) {
      return row.state === value;
    },
    next() {
      this.$emit("next");
    },
    flagState({ row }) {
      if (row.state == true) {
        return "success-row";
      } else {
        return "warning-row";
      }
    },
    checkoutClick(e) {
      this.dropdown = this.type[e];
      this.loading = true;
      setTimeout(() => (this.loading = false), 500);
      this.$emit("choice", e);
    },
    reset() {
      this.disabled = false;
      const index = arguments[0];
      const value = arguments[1][0];
      const temp = [];
      temp.push({ index, value });
      this.$nextTick(() => {
        newResult = temp;
      });
    },
    submit() {
      newResult.forEach((ele, target) => {
        if (newResult[target] == undefined) return;
        this.test[target] = ele.value;
      });
      this.$emit("submit", this.test);
    }
  },
  data() {
    return {
      drawer: false,
      loading: false,
      dropdown: "7s检查",
      type: ["7s检查", "自习检查", "寝室检查", "教学检查"],
      disabled: true,
      test: [
        {
          type: "number",
          value: 10,
          title: "学生迟到人数"
        },
        {
          type: "number",
          value: 10,
          title: "学生旷课人数"
        },
        {
          type: "number",
          value: 10,
          title: "学生请假人数"
        },
        {
          type: "checkout",
          value: [
            {
              title: "睡觉",
              type: false
            },
            {
              title: "游戏",
              type: false
            },
            {
              title: "不带课本",
              type: false
            },
            {
              title: "睡觉",
              type: false
            },
            {
              title: "玩手机",
              type: false
            },
            {
              title: "不穿工作服",
              type: false
            },
            {
              title: "吃零食",
              type: false
            },
            {
              title: "交头结耳",
              type: false
            }
          ],
          title: "老师上课状态"
        },
        {
          type: "checkout",
          value: [
            {
              title: "睡觉",
              type: false
            },
            {
              title: "游戏",
              type: false
            },
            {
              title: "不带课本",
              type: false
            },
            {
              title: "睡觉",
              type: false
            },
            {
              title: "玩手机",
              type: false
            },
            {
              title: "不穿工作服",
              type: false
            },
            {
              title: "吃零食",
              type: false
            },
            {
              title: "交头结耳",
              type: false
            }
          ],
          title: "学生上课状态"
        }
      ]
    };
  },
  components: {
    jSeven,
    jScreen
  }
};
</script>
<style lang="scss">
$header: 150 * 3 /10 + "px";
.box-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  background-color: #fff;
}
.el-table .success-row {
  background: #f0f9eb !important;
}
.el-table .warning-row {
  background: oldlace;
}
.drawer .el-drawer__body {
  display: flex;
  flex-direction: column;
}
.el-pagination {
}
</style>