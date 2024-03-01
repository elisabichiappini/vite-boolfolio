<script>
// importazione axios
import axios from 'axios';
import store from '../store';
export default {
    props: [],
    name: 'SingleProject',
    data() {
        return {
            store,
            loading: false,
            project: {},
            formData : {
                author: null,
                content:null,
            }
        }
    },
    methods: {
        getProject() {
            this.loading = true,
            axios
                .get(this.store.baseUrl + this.store.apiUrl.projects + '/' + this.$route.params.slug) //http://127.0.0.1:8000/api/projects/esse-nulla
                .then((response) => {
                    if(response.data.success) {
                        this.loading = false;
                        this.project = response.data.result;
                    } else {
                        this.loading = false;
                        //rotta con path not-found in url se non troviamo il progetto
                        this.$router.push({ path: '/not-found'})
                    }
                })
                .catch((error) => {
                    console.log("My error:", error);
                })
                .finally(() => {
                    this.loading = false;
                }
            );
        },
        addComment() {
            console.log('clicco');
            console.log(this.formData.author);
            console.log(this.formData.content);
            console.log(this.project.id);
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <div class="container">
        <section id="ec-card" class="container text-white">
            <!--link per tornare alla lista dei progetti-->
            <router-link :to="{ name: 'projects', query: { page: store.projects.currentPage, key: store.projects.searchKey }}" class="text-end">Lista progetti</router-link>
            <!--/link per tornare alla lista dei progetti-->
            <!--mostra titolo progetto-->
            <h1>{{ project.title }}</h1>
            <!--/mostra titolo progetto-->
            <!--inserisci immagine se presente-->
            <img v-if="project.project_img" class="img-fluid" :src="this.store.baseUrl + this.store.apiUrl.storageImage + project.project_img" :alt="project.title">
            <!--/inserisci immagine se presente-->
            <!--mostra content progetto-->
            <p>{{ project.description }}</p>
            <!--/mostra content progetto-->

            <!--mostra categoria se presente-->
            <div v-if="project.type">
                <p>Categoria: <span class="badge bg-warning">{{ project.type.title }}</span></p>
            </div>
            <!--/mostra categoria se presente-->
            <!--mostra tecnologia utilizza se presente-->
            <div v-if="project.technologies">
                <p>Tags: 
                    <span v-for="technology in project.technologies" class="me-2 badge bg-info text-white">{{ technology.title }}</span>
                </p>
            </div>
            <!--mostra tecnologia utilizza se presente-->
        </section>

        <hr class="container text-primary">

        
        <section id="comments" class="container text-white">
            <!--rappresentazione commenti in pagina-->
            <h5>Commento</h5>
            <!--condizione: se project.comments ha una lunghezza allora mi restituisce ul -->
            <ul v-if="project.comments?.length">
                <li v-for="comment in project.comments" class="list-unstyled">
                    <h6>di {{ comment.author ?? 'Utente anonimo'}}</h6>
                    <p>{{ comment.content }}</p>
                </li>
            </ul>
            <!--altrimenti se non esiste mi restituisce un alert-->
            <div v-else class="alert alert-primary" role="alert">
                Nessun commento trovato!
            </div>
            <!--rappresentazione commenti in pagina-->
            <div class="py-3">
                <!--form per creazione commenti: all'invio del form si scatena un evento -->
                <form action="" method="" @submit.prevent="addComment">
                    <div class="mb-3">
                        <label for="author" class="form-label">Autore</label>
                        <input type="text" class="form-control" id="author" placeholder="Nome Cognome" v-model="formData.author">
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">Commento</label>
                        <textarea class="form-control" id="content" rows="3" v-model="formData.content"></textarea>
                    </div>
                    <button class="btn btn-outline-info" type="submit">Invia</button>
                </form>
                <!--/form per creazione commenti-->
            </div>


        </section>
    </div>
    
    
</template>