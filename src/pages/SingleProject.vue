<script>
// importazione axios
import axios from 'axios';
import store from '../store';
export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            loading: false,
            project: {
                // technologies: [],
            }
        }
    },
    methods: {
        getProject() {
            this.loading = true,
            axios
                .get(this.store.baseUrl + this.store.apiUrl + '/' + this.$route.params.slug) //http://127.0.0.1:8000/api/projects/esse-nulla
                .then((response) => {
                    console.log(store.responsedata.result);
                    if(response.data.result) {
                        this.project = response.data.result;
                    } else {
                        this.loading = false;
                        //rotta con path not-found in url se non troviamo il progetto
                        this.$router.push({ path: '/not-found'})
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    this.loading = false;
                }
            );
        },
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
            <img v-if="project.project_img" class="img-fluid" :src="this.store.baseUrl + this.store.storageImage + project.project_img" :alt="project.title">
            <!--/inserisci immagine se presente-->
            <!--mostra content progetto-->
            <p>{{ project.description }}</p>
            <!--/mostra content progetto-->

            <!--mostra categoria se presente-->
            <p v-if="project.type">Categoria: {{ project.type.title }}</p>
            <!--/mostra categoria se presente-->
            <!--mostra tecnologia utilizza se presente-->
            <p v-if="project.technologies">Tags: {{ project.technologies.title }}</p>
            <!--mostra tecnologia utilizza se presente-->
        </section>

        <hr class="container text-primary">

        <section id="comments" class="container text-white">
            <h5>Commenti</h5>
            <ul v-if="project.comments">
                <li>
                    <h6>Autore:</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo, fugiat doloribus quas alias omnis consectetur rem facere dolor nihil quia adipisci laborum delectus enim repellendus earum nulla asperiores! Voluptas!</p>
                </li>
            </ul>
            <div v-else>nessun commento trovato</div>
            <div id="creator-comment" class="container text-white">
                
            </div>
        </section>
    </div>
    
    
</template>