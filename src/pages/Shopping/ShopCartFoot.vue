<template>
  <div class="foot">
        <div class="container">
          <div class="row">
            <div class="col-4 ">共{{checkeds.length}}件<p>{{totalprice}}元</p></div>
            <div class="col-4 btn-default center" >
                继续购物
              </div>
            <div class="col-4 btn-primary center">
                去结算
            </div>
          </div>
        </div>
      </div>
</template>

<script type="text/ecmascript-6">
export default { }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl'
.foot
  height 50px
  .center
    text-align center
    line-height 50px

</style>
