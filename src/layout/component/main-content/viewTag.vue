<template>
  <div class="view-tag">
      <el-button-group class="history-tag" :key="index" v-for="(item,index) in history">
        <el-button autofocus class="active" size="mini" @click="tohistory(item.name)">{{item.title}}</el-button>
        <el-button @click="remove(index)" size="mini">
          <i class="el-icon-close"></i>
        </el-button>
      </el-button-group>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods:{
    ...mapMutations(['removeHis']),
    tohistory(name){
        this.$router.replace({name})
    },
    remove(index){
        this.$store.commit('removeHis',index)
    }
  },
  computed: {
    history() {
      return this.$store.state.historyList;
    }
  }
};
</script>

<style lang="scss" scope>
.view-tag {
  display: flex;
  align-content: center;
  background-color: #fff;
  width: 100%;
  padding: 10px 0px 15px 0px;
  border-bottom: 1px solid #ccc;
  .history-tag {
    display: flex;
    margin-right: 10px;
  }
  .el-button {
    font-size: 18px;
    .big {
      padding-left: 10px;
    }
  }
}
</style>