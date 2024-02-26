<script>

//importazione componenti
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    name: 'Keyup_Portfolio',
    components: { 
      AppHeader,
      AppFooter,
    },
  }
</script>

<template>
  <!--header-->
  <AppHeader></AppHeader>
  <!--/header-->
  <!--main router vuejs-->
  <router-view class="text-white"></router-view>
  <!--/main router vuejs-->
  <!--footer-->
  <AppFooter></AppFooter>
  <!--/footer-->
</template>
