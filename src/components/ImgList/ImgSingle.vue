<template>
   <div class="imgingle">
        <div class="single">
           <img v-bind:src="msg.photoAdress" alt="photo">
        </div>
        <div class="info">
          <div class="txt-title2">红米6A</div>
          <div class="txt-info2">好用好看不贵</div>
        <div class="price txt-price2">¥599</div>
        </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['msg']
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
 @import "../../common/stylus/mixins.styl"
 .img_single
   width 100px
</style>
