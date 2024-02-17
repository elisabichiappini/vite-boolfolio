<script>
//importazione stato globale
import { store } from '../store';
//importazione componente
import Card from './Card.vue';
 export default {
    name: 'ListCard',
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
    <main>
        <div class="container">
            <div class="row">
                <Card v-for="project in store.projects"
                :project="project">
                </Card>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>