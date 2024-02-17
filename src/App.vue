<script>

//importazione componenti
import AppHeader from './components/AppHeader.vue';

import AppFooter from './components/AppFooter.vue';
export default {
    name: 'Boolfolio',
    components: { 
      AppHeader,
      AppFooter,
    },
  }
</script>

<template>
  <AppHeader></AppHeader>
  <!--router vuejs-->
  <router-view></router-view>
  <!--router vuejs-->
  <AppFooter></AppFooter>
</template>

<style scoped></style>