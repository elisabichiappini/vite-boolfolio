import { createApp } from 'vue';
//importazione scss default
import './scss/style.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import App from './App.vue';

//importazione file routerjs
import { router } from './router';

createApp(App).use(router).mount('#app');