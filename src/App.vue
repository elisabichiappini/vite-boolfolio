<script>

//importazione axios
import axios from 'axios';
//importazione stato globale
import { store } from './store';
//importazione componenti
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    name: 'Boolfolio',
    components: { 
      AppHeader,
      AppMain,
      AppFooter,
    },
    data() {
      return {
        store,
        page: ''
      }
    },
    created() {
      this.getProject();
    },
    methods: {
      //chiamata progetti
      getProject() {
        axios
        .get(this.store.baseUrl + this.store.apiUrl)
        .then(response => {
          //cambiato il codice per la visualizzazione dei risultati
          this.store.projects = response.data.results.data;})
        .catch((error)=>{
          console.log(error);
        });
      }
    }
  }
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style scoped></style>