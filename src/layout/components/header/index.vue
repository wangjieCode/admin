<template>
    <div class="header">
        <j-history/>
    </div>
</template>
<script>
import jHistory from '../history'
export default {
    components:{
        jHistory
    }
}
</script>
<style lang="scss" scoped>
.header{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100px;
}
</style>