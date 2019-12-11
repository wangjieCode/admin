<template>
    <div class="main-container">
        <TopAside/>
        <view-tag />
        <Content/>
    </div>
</template>

<script>
import TopAside from './top-aside'
import Content from './content'
import { mapState } from 'vuex'
import viewTag from './viewTag'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['isSidebarNavCollapse'])
    },
    components: {
        TopAside,
        Content,
        viewTag
    }
}
</script>
