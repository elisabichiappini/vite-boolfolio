import { createApp } from 'vue';
//importazione scss default
import './scss/style.scss';
import App from './App.vue';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

//importazione file routerjs
import { router } from './router';

createApp(App).use(router).mount('#app');