<script>
//importazione store
import { store } from '../store';
export default {
    name: 'Search',
    data() {
        return {
            store,
        }
    },
    methods: {
        search() {
            //quando parte la ricerca il risultato torna alla pagina 1
            this.store.projects.currentPage = 1;
            //rotta per la ricerca
            this.$router.push({
                name: 'projects',
                query: {
                    page: 1, key: this.store.projects.searchKey 
                }
            }),
            this.$emit('searchProject');
        }
    },
    emits: ['searchProject'],
}
</script>

<template>
    <section>
        <form action="" @submit.prevent="search" class="container d-flex py-1">
            <label for="search"></label>
            <input v-model="store.projects.searchKey" class="form-control border" type="text" placeholder="Cerca..." id="search" name="search">
            <button class="btn btn-outline-info ms-4">Cerca</button>
        </form>
    </section>
</template>