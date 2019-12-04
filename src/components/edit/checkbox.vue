<template>
<el-checkbox
          border
          v-model="item.value"
          v-for="(item,index) in sResult.value"
          :label="item.type"
          :key="index"
        >{{item.title}}</el-checkbox>
        <template v-else-if="flagbox(sResult.type)">
        <el-checkbox
          border
          v-model="item.value"
          v-for="(item,index) in sResult.value"
          :label="item.type"
          :key="index"
        >{{item.title}}</el-checkbox>
      </template>
</template>

<script>
export default {};
</script>

<style>
</style>