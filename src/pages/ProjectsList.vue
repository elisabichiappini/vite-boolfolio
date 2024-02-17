<script>
import axios from 'axios';
//importo lo stato globale
import { store } from '../store';
//importo componenti
import Card from '../components/Card.vue';
import Loading from '../components/Loading.vue';
export default {
    name: 'ProjectsList',
    data() {
        return {
            store,
            currentPage: 1,
            //variabile loader a false
            loading: false,
        }
    },
    components : {
        Card,
        Loading,
    },
    methods: {
        //chiamata progetti
        getProject() {
            //attiva loader
            this.loading = true,
            axios
            .get(this.store.baseUrl + this.store.apiUrl.projects, {
                params: {
                    page: this.currentPage,
                }
            })
            .then(response => {
                console.log(response.data);
                //cambiato il codice per la visualizzazione dei risultati
                this.store.responseData = response.data;
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(() => {
                //a prescindere dal risultato torna a false finito il caricamento
                this.loading = false;
            })
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
    <main>
        <div class="container">
            <Loading v-if="loading"></Loading>
            <div class="row" v-else>
                <nav>
                    <ul class="d-flex justify-content-between my-4 px-1">
                        <li class="list-unstyled">
                            <button class="btn btn-primary" @click="prevPage" v-show="store.responseData.results?.prev_page_url">Prev</button>
                        </li>
                        <li class="d-flex justify-content-between list-unstyled">
                            <button class="btn btn-primary" @click="nextPage"  v-show="store.responseData.results?.next_page_url">Next</button>
                        </li>
                    </ul>
                </nav>
                <Card v-for="project in store.responseData.results?.data"
                :project="project">
                </Card>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>