<script>
    export default {
        name: 'Header',
    }
</script>

<template>
    <header class="ec-gb fixed-top">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand ec-color" href="#">Keyup_portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <!-- link rotta -->
                            <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                            <!-- link rotta -->
                        </li>
                        <li class="nav-item">
                            <!-- link rotta -->
                            <router-link :to="{name: 'projects'}" class="nav-link">Portfolio progetti</router-link>
                            <!-- link rotta -->
                        </li>
                        <li class="nav-item">
                            <!-- link rotta -->
                            <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
                            <!-- link rotta -->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
  background-color: azure;
}</style>