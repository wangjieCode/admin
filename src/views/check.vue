<template>
  <div class="check">
    <j-info-Table
      :total="getTotal"
      @choice="choice"
      @submit="submit"
      :tableData="tableData"
      @next="next"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import JInfoTable from "@/components/info/infoTable";
export default {
  name: "home",
  computed: {
    ...mapGetters(["test", "tableData", "getTotal"])
    // ...mapState(['total'])
  },
  mounted() {
    let { checkType, count, pageNow } = this;
    this.$store.dispatch("getTableData", { checkType, count, pageNow });
  },
  methods: {
    ...mapActions(["getTableData", "submitData"]),
    next() {
      let { checkType, count, pageNow } = this;
      this.$store.dispatch("getTableData", { checkType, count, pageNow });
    },
    choice(e) {
      this.checkType = e;
      this.getData();
    },
    submit(newResult) {
      this.$store.dispatch("submitData", { newResult });
    },
    getData() {
      let { checkType, count, pageNow } = this;
      this.$store.dispatch("getTableData", { checkType, count, pageNow });
    }
  },
  data() {
    return {
      count: 10,
      pageNow: 1,
      checkType: 0,
      drawer: false,
      disabled: true
    };
  },
  components: {
    JInfoTable
  }
};
</script>
<style lang="scss">
</style>
