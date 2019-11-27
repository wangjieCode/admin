<template>
  <div class="home">
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我编辑</el-button>
    <el-drawer class="drawer" title="7s检查" :visible.sync="drawer" direction="rtl" size="50%">
      <j-seven  :sResult="sResult"/>
    </el-drawer>
  </div>
</template>

<script>
import jSeven from "@/components/7s";
export default {
  name: "home",
  data(){
    return {
      drawer: true,
       sResult: [
         {
           type:'text',
           title:"备注",
           value: "测试结果"
         },
         {
           type:'boolean',
           title:"被子是否叠放整齐",
           value: false
         },
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
          type: "checkout",
          title: "学生上课状态",
          value: [
            {
              title: "老师坐的上课",
              flag: true
            },
            {
              title: "老师坐的上课",
              flag: true
            },
            { title: "老师坐的上课", flag: true },
            { title: "老师坐的上课", flag: true },
            { title: "老师坐的上课", flag: true }
          ]
        }
      ]
    }
  },
  components: {
    jSeven
  }
};
</script>
<style lang="scss">

</style>
