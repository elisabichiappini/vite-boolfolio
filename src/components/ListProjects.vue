<script>
//importazione stato globale
import { store } from '../store';
//importazione componente
import Card from './Card.vue';
 export default {
    name: 'ListProjects',
    data() {
        return {
            store
        }
    },
    components : {
        Card,
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <Card v-for="project in store.projects"
            :title="project.title"
            :description="project.description">
            </Card>
        </div>
    </div>
    
</template>

<style scoped>

</style>