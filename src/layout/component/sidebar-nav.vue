<template>
    <el-menu
        :collapse="isSidebarNavCollapse"
        background-color="#304156"
        text-color="#eee"
        active-text-color="#4dbcff"
        :default-active="currentMenu"
    >
    {{router}}
        <DynamicMenu :menuList="router"></DynamicMenu>
    </el-menu>
</template>

<script>
import DynamicMenu from '@/components/dynamic-menu'
import { mapState,mapGetters } from 'vuex'

export default {
    data() {
        return {
            isCollapse: true,
        }
    },
    computed: {
        ...mapGetters(['router']),
        ...mapState(['isSidebarNavCollapse']),
        ...mapState('permission', ['sidebarMenu', 'currentMenu'])
    },
    methods: {},
    components: {
        DynamicMenu
    }
}
</script>
