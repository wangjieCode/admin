<template>
  <div class="menu-container">
    <template v-for="v in menuList">
      <el-submenu :index="v.name" v-if="v.children&&v.children.length>0" :key="v.name">
        <template slot="title">
          <i class="el-icon-help"></i>
          <span>{{v.meta.title}}</span>
        </template>
        <el-menu-item-group>
          <my-nav :menuList="v.children"></my-nav>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :key="v.name" :index="v.name" @click="gotoRoute(v.name,v.meta.title)" v-else>
        <i class="el-icon-help"></i>

        <span slot="title">{{v.meta.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "my-nav",
  props: {
    menuList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    ...mapMutations(["sethistoryList"]),
    gotoRoute(name, title) {
      let flag = true;
      this.$store.state.historyList.forEach(element => {
        if (element.name == name) {
          flag = false;
        }
      });
      if (flag) {
        this.$store.commit("sethistoryList", { name, title });
      }
      this.$router.push({ name });
    }
  }
};
</script>

<style lang='scss'>
.menu-container {
  .svg-icon {
    margin-right: 10px;
  }
}
</style>
