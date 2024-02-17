<script>
import axios from 'axios';
//importo lo stato globale
import { store } from '../store';
//importo componenti
import ListCard from '../components/ListCard.vue';
export default {
    name: 'ProjectsList',
    data (){
        return {
            store,
        }
    },
    components: {
        ListCard,
    },
    methods: {
        //chiamata progetti
        getProject() {
            axios
            .get(this.store.baseUrl + this.store.apiUrl.projects)
            .then(response => {
            //cambiato il codice per la visualizzazione dei risultati
            this.store.projects = response.data.results.data;
            })
            .catch((error)=>{
            console.log(error);
            });
        }
    },
    created() {
      this.getProject();
    },
}
</script>

<template>
    <h2>projects list</h2>
    <main class="container">
        <ListCard></ListCard>
    </main>
</template>