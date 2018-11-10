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
import HeadGuide from '@/components/HeadGuide/HeadGuide'

/* eslint-disable */ 
export default {

  components: {
    HeadTable,
    HeadGuide
    // HeadShow
    // bHead
  },
 
   
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >

</style>