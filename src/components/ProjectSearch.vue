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
            console.log('sto cercando');
            this.$emit('searchProject');
        }
    },
    emits: ['searchProject'],
}
</script>

<template>
    <section>
        <form action="" @submit.prevent="search" class="container d-flex">
            <label for="search"></label>
            <input v-model="store.projects.searchKey" class="form-control border" type="text" placeholder="Cerca..." id="search" name="search">
            <button class="btn btn-outline-dark">Cerca</button>
        </form>
    </section>
</template>