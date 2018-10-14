<template>
            <div class="box-card">
                <h2>
                    {{msg.title}}
                </h2>
                <img v-bind:src="msg.photoAdress" alt="photo">
                <img src="@/components/ShopList/img/bg15.jpg" alt="">
            </div>
</template>
<script>
export default {
  name: 'ShopList',
  props: ['msg']
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
    .box-card {
        width 360px
        float left
        margin 0 33px 0px 0
}

    img {
        width: 310px;
        height: 280px;
        padding-top: 20px;
        padding-right: 30px;
    }

</style>
