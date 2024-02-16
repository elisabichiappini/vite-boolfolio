<script>
//importazione stato globale
import { store } from '../store';
//importazione componenti
import ListProjects from './ListProjects.vue';
    export default {
        name: 'Main',
        components : {
          ListProjects
        },
        data() {
          return {
            store,
          }
        }
      }
</script>

<template>
  <main class="container">
    <ListProjects></ListProjects>
  </main>
</template>

<style scoped>

</style>