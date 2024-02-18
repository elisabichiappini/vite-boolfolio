<script>
export default {
    name: 'NotFound'
}
</script>

<template>
    <h2>Page Not Found</h2>
    <router-link :to="{ name: 'home' }">Torna alla home</router-link>
</template>