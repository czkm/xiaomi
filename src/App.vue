<template>
   <div class="app">
     apps
     <HeadGuide></HeadGuide>
     <router-view></router-view>
     <FootGuide></FootGuide>
   </div>
</template>

<script type="text/ecmascript-6">
import HeadGuide from './components/HeadGuide/HeadGuide'
import FootGuide from './components/FootGuide/FootGuide'
export default {
  components: {
    FootGuide,
    HeadGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
