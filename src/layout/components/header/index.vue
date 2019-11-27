<template>
    <div class="header">
        <j-personal />
    </div>
</template>
<script>
import jPersonal from '@/components/personal'
export default {
    components:{
        jPersonal
    }
}
</script>
<style lang="scss" scoped>
.header{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
}
</style>