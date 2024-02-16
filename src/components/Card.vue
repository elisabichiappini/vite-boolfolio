<script>
//importazione stato globale
import { store } from '../store';
export default {
    name: 'CardMain',
    data() {
        return {
            store,
        }
    },
    props: {
        project: Object,
    }
}
</script>

<template>
    <div class="col-sm-4 mb-3 mb-sm-0 g-3">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <a href="#" class="btn btn-primary">Mostra</a>
            </div>
        </div>
    </div>
</template>
