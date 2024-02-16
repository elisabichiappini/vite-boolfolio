<script>
//importazione axios
import axios from 'axios';
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
        projects : [],
        baseUrl: 'http://127.0.0.1:8000',
        apiUrl: {
          projects: '/api/projects'
        }
      }
    },
    created() {
      this.getProject();
    },
    methods: {
      getProject() {
        axios.get(this.baseUrl + this.apiUrl.projects)
        .then(response => {
          // this.projects = response.data.results;
          console.log(response)
        }).catch((error)=>{
          console.log(error);
        });
      }
    }
  }
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain :projects="projects"></AppMain>
  <AppFooter></AppFooter>
</template>

<style scoped></style>