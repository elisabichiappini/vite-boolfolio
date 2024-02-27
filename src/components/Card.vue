<script>
export default {
    name: 'CardMain',
    props: {
        project: Object,
    }
}
</script>

<template>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <!--route link per atterrare nel dettaglio progetto-->
                <router-link class="btn btn-outline-info" :to="{ name: 'single-project', params: { slug: project.slug } }">Mostra dettagli</router-link>
                <!--/route link per atterrare nel dettaglio progetto-->
            </div>
        </div>
</template>
