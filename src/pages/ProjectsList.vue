<script>
//importo axios
import axios from 'axios';
//importo lo stato globale
import { store } from '../store';
//importo componenti
import Card from '../components/Card.vue';
import Loading from '../components/Loading.vue';
import ProjectSearch from '../components/ProjectSearch.vue';
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
        ProjectSearch
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
                    key: this.store.projects.searchKey,
                }
            })
            .then((response) => {
                if(response.data.success){
                    //cambiato il codice per la visualizzazione dei risultati
                    this.store.responseData = response.data;
                }
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
            // console.log('prev');
            this.currentPage--;
            this.getProject();
            this.$router.push({
                name: 'projects',
                query: {
                    page: this.currentPage,
                }
            })
        },
        nextPage() {
            // console.log('next');
            this.currentPage++;
            this.getProject();
            this.$router.push({
                name: 'projects',
                query: {
                    page: this.currentPage,
                }
            })
        }
    },
    created() {
        this.currentPage = this.$route.query.page ?? 1;
        this.getProject();
    },
}
</script>

<template>
    <main>
        <h1 class="text-center">Keyup portfolio</h1>
        <ProjectSearch @search-project="getProject"></ProjectSearch>
        <div class="container">
            <Loading v-if="loading"></Loading>
            <div class="row" v-else>
                <Card v-for="project in store.responseData.results?.data"
                :project="project">
                </Card>
                <nav>
                    <ul class="d-flex justify-content-between my-4 px-1">
                        <li class="list-unstyled">
                            <button class="btn btn-outline-dark" @click="prevPage" v-show="store.responseData.results?.prev_page_url">Prev</button>
                        </li>
                        <li class="d-flex justify-content-between list-unstyled">
                            <button class="btn btn-outline-dark" @click="nextPage"  v-show="store.responseData.results?.next_page_url">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>