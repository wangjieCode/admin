<template>
  <div class="box-card">
    <div class="box" v-for="(item, index) in list" :key="index">
            <div class="header">{{item.title}}</div>
    </div>
    <div>
      操作<br>
        <el-button @click="drawer = true" type="primary"></el-button>
    </div>
  </div>
</template>
<script>
export default {
  
  methods: {  
  },
  data() {
    return {
      list:[
          {
              title:'检查分类'
          },
          {
              title:'检查老师'
          },
          {
              title:'当前状态'
          },
          {
              title:'反馈记录'
          },
          {
              title:'涉及班级'
          }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.box-card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 150px;
  width: 90%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  margin-top: 40px;
}
</style>