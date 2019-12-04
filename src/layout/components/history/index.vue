<template>
  <div class="history">
    <!-- history -->
    <div @click="to(item.path)" :key="item.path" v-for="(item,index) in getHistory">
        {{item.meta.title}}
        <div @click.stop="deleteHis(index)">x</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["getHistory"])
  },
  methods: {
    ...mapMutations(['getRouterHistory','setRouterHistory']),
    to(to){
        this.$router.push(to)
    },
    deleteHis(index){
        console.log(index)
        this.getHistory.splice(index,1)
        this.$store.commit('setRouterHistory',this.getHistory)
        this.$router.push('/index/home')
    }
  }
};
</script>

<style lang="scss">
.history {
  width: 100%;
  height: 30px;
  border: 1px solid;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div{
      position: relative;
      background-color: rgb(250, 220, 220);
      padding:0 20px 0px 30px;
      height: 100%;
      line-height: 30px;
      div{
          position: absolute;
          right: -30px;
          width: 30px;
          height: 30px;
          background-color: chocolate;
          top: 0px;
          padding: 0;
          &.hover{
              background-color: aqua;
          }
      }
  }
}
</style>