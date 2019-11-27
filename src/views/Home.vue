<template>
  <div class="home">
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</el-button>
    <el-drawer class="drawer" title="7s检查" :visible.sync="drawer" direction="rtl" size="50%">
      <j-seven />
    </el-drawer>
  </div>
</template>

<script>
import jSeven from "@/components/7s";
export default {
  name: "home",
  data(){
    return {
      drawer: true
    }
  },
  components: {
    jSeven
  }
};
</script>
<style lang="scss">

</style>
