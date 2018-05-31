<template>
  <div class="s-header">
     <div class="row margin0px">
       <div class="col-3" style="font-size:0.5rem;text-align: center;line-height: 2.2rem;">
         <span @click="showSideBar" href="javascript:;">导航</span>
       </div>
       <div class="col-6 text-center">
         <h4 class="center">{{headerTitle}}</h4>
       </div>
       <div class="col-3" style="font-size:0.5rem;text-align: center;line-height: 2.2rem;">
         <span @click="goBack" href="javascript:;">后退</span>
       </div>
     </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      headerTitle () {
        return this.$store.getters.getHeaderTitle
      }
    },
    methods: {
      showSideBar () {
        return this.$store.dispatch('changeSideBarState', true)
        // return this.$store.commit('changeSideBarState', true)
      },
      hideSideBar () {
        return this.$store.dispatch('changeSideBarState', false)
      },
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scope>
  .s-header{
    position: fixed;
    top: 0;
    z-index: 100;
    height: 50px;
    width:16rem;
    max-width: 16rem;
    min-width: 320px;
    margin:0 auto;
    color: #fff;
    background: #282828;
    .center {
      font-size: 0.75rem;
      line-height: 2.2rem;
    }
    .left{
      float: left;
    }
    .right{
      float: right;
    }
    .pd0px {
      padding-right: 0;
      padding-left: 0;
    }
    .margin0px {
      padding-right: 0;
      padding-left: 0;
    }
  }
</style>
