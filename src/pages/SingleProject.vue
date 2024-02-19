<script>
// importazione axios
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'SingleProject',
    data() {
        return {
            store,
        }
    },
    methods: {
        getProject() {
            axios
            .get(this.store.baseUrl + this.store.apiUrl.projects + '/' +this.$route.params.slug)
            .then((response) => {
                if(response.data.result) {
                    this.store.project = response.data.result;
                } else {
                    //rotta con path not-found in url se non troviamo il progetto
                    this.$router.push({ path: '/not-found'})
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <router-link :to="{ name: 'projects' }">Lista progetti</router-link>
    <h1>{{ store.project.title }}</h1>
    <p>{{ store.project.description }}</p>
    <img v-if="store.project.project_img" class="img-fluid" :src="store.imageUrl + store.project.project_img" :alt="store.projects.title">
</template>