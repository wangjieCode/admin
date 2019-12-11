<template>
  <el-row class="view-tag">
      <el-button-group class="history-tag" :key="index" v-for="(item,index) in history">
        <el-button autofocus size="medium" @click="tohistory(item.name)">{{item.title}}</el-button>
        <el-button @click="remove(index)" size="small">
          <i class="el-icon-close"></i>
        </el-button>
      </el-button-group>
  </el-row>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods:{
    ...mapMutations(['removeHis']),
    tohistory(name){
        console.log(name)
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
  margin: 10 0px;
  .history-tag {
    display: flex;
    margin-right: 10px;
    border: 1px solid  greenyellow;
  }
  .el-button {
    font-size: 18px;
    .big {
      padding-left: 10px;
    }
  }
}
</style>