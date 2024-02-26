<script>
//importo axios
import axios from 'axios';
//importo lo stato globale
import store from '../store';
//importo componenti
import Card from '../components/Card.vue';
import Loading from '../components/Loading.vue';
import ProjectSearch from '../components/ProjectSearch.vue';
export default {
    name: 'ProjectsList',
    data() {
        return {
            store,
            //variabile loader a false
            loading: false,
            //variabile lista errori per non superamento validazione della ricerca
            errors: null,
            projects: [],
            responseData: {},
        }
    },
    components : {
        Card,
        Loading,
        ProjectSearch
    },
    methods: {
        //chiamata axios
        getProjects() {
            //svuoto errori se rifaccio ricerca
            this.errors = null,
            //attiva loader
            this.loading = true,
            //setto la chiamata
            axios
                .get(this.store.baseUrl + this.store.apiUrl.projects, {
                    params: {
                        page: this.store.projects.currentPage,
                        key: this.store.projects.searchKey,
                    }
                })
                .then((response) => {
                    if(response.data.success){
                        //cambiato il codice per la visualizzazione dei risultati
                        this.responseData = response.data;
                    }
                })
                .catch((error)=>{
                    console.log(error);
                    //se incaso di errore di ricerca svuoto la lista progetti
                    this.responseData.results.data = [];
                    this.errors = error.response.data.message;
                })
                .finally(() => {
                    //a prescindere dal risultato torna a false finito il caricamento
                    this.loading = false;
                }
            )
        },
        //click prev
        prevPage() {
            // console.log('prev');
            this.store.projects.currentPage--;
            this.$router.push({
                name: 'projects',
                query: {
                    page: this.store.projects.currentPage, key: this.store.projects.searchKey
                }
            }),
            this.getProjects();
        },
        //click next
        nextPage() {
            // console.log('next');
            this.store.projects.currentPage++;
            this.$router.push({
                name: 'projects',
                query: {
                    page: this.store.projects.currentPage, key: this.store.projects.searchKey
                }
            }),
            this.getProjects();
        }
    },
    //ciclo di vita created
    created() {
        this.store.projects.currentPage = this.$route.query?.page ?? 1;
        this.store.projects.searchKey = this.$route.query?.key ?? null;
        //chiamata progetti alla creazione
        this.getProjects();
    },
}
</script>

<template>
    <main class="container">
        <div class="d-flex align-items-center justify-content-between py-3">
            <h1 class="text-center ec-color">Keyup portfolio</h1>
            <div>
                <h6 class="text-end ec-color">Graphic Designer</h6>
                <h6 class="text-end ec-color">Web Designer</h6>
                <h6 class="text-end ec-color">Motion Graphic</h6>
            </div>
        </div>
        <ProjectSearch @search-project="getProjects"></ProjectSearch>
        <span v-if="errors">{{ errors }}</span>
        <div class="container">
            <Loading v-if="loading"></Loading>
            <div class="row" v-else>
                <div class="col col-12 col-md-4" v-for="project in responseData.results?.data">
                    <Card :project="project" />
                </div>
                <nav>
                    <ul class="d-flex justify-content-between my-4 px-1 list-unstyled">
                        <li>
                            <button class="btn btn-outline-info" @click="prevPage" v-show="responseData.results?.prev_page_url">Prev</button>
                        </li>
                        <li class="d-flex justify-content-between list-unstyled">
                            <button class="btn btn-outline-info" @click="nextPage"  v-show="responseData.results?.next_page_url">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>