<template>
  <div class="home">
    <j-card />
  </div>
</template>

<script>
import JCard from '@/components/info/infoCard'
export default {
  name: "home",
  
 
  components: {
    JCard
  }
};
</script>
<style lang="scss">
.home{
  display: flex;
  justify-content: center;
//   flex-direction: column;
//   align-content: flex-start;
//   align-items: flex-start;
}
</style>
