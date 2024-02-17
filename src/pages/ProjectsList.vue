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
            currentPage: 1,
        }
    },
    components: {
        ListCard,
    },
    methods: {
        //chiamata progetti
        getProject() {
            axios
            .get(this.store.baseUrl + this.store.apiUrl.projects, {
                params: {
                    page: this.currentPage,
                }
            })
            .then(response => {
            //cambiato il codice per la visualizzazione dei risultati
            this.store.projects = response.data.results.data;
            })
            .catch((error)=>{
            console.log(error);
            });
        },
        prevPage() {
            console.log('prev');
            this.currentPage--;
            this.getProject();
        },
        nextPage() {
            console.log('next');
            this.currentPage++;
            this.getProject();
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
        <nav>
            <ul class="d-flex justify-content-between my-4 px-1">
                <li class="list-unstyled">
                    <button class="btn btn-primary" @click="prevPage">Prev</button>
                </li>
                <li class="d-flex justify-content-between list-unstyled">
                    <button class="btn btn-primary" @click="nextPage">Next</button>
                </li>
            </ul>
        </nav>
    </main>
</template>