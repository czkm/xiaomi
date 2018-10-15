<template>
   <div class="app">
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

</style>
