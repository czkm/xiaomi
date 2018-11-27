<template>
   <div class="app">
     <router-view></router-view>
     <FootGuide v-show="$route.meta.showfooter"></FootGuide>
   </div>
</template>

<script type="text/ecmascript-6">
// ajax链接测试
/* eslint-disable */
// import {reqImgList} from '@/api'
// import axios from 'axios'
import FootGuide from './components/FootGuide/FootGuide'
export default {
  components: {
    FootGuide
  },
  data(){
    return{
      img:[]
    }
  },
  // async mounted(){
  // const result =  await reqImgList()
  // console.log(result)
  // this.img = result
  // }
  // mounted(){
  //   this.$store.dispatch('getImgList')
  // }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
