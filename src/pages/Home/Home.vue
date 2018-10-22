<template>
   <div>
        <HeadGuide></HeadGuide>
        <HeadTable></HeadTable>
        <!-- <HeadShow/> -->
        <router-view></router-view>
   </div>
</template>

<script type="text/ecmascript-6">
import HeadTable from '@/components/HeadTable/HeadTable'
import HeadShow from '@/components/HeadTable/HeadShow'
import HeadGuide from '@/components/HeadGuide/HeadGuide'
// import bHead from '@/components/HeadGuide/bHead'

/* eslint-disable */ 
export default {

  components: {
    HeadTable,
    HeadGuide,
    HeadShow
    // bHead
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >

</style>