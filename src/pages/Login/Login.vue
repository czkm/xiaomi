<template>
   <div class="login">
       <div class="login_center"></div>
       <div class="login_bottom"></div>
   </div>
</template>

<script type="text/ecmascript-6">
export default { }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
 .login
   .login_center
     width 60%
     height 500px
     background-color red
     margin 0 auto
   .login_bottom
     height 200px
     bottom 0
     background-color yellow

</style>
