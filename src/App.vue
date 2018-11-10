<template>
   <div class="app">
     <router-view></router-view>
     <FootGuide v-show="$route.meta.showfooter"></FootGuide>
   </div>
</template>

<script type="text/ecmascript-6">
import FootGuide from './components/FootGuide/FootGuide'
export default {
  components: {
    FootGuide
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
