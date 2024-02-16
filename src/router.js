import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppContacts from './pages/AppContacts.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsLlist from './pages/ProjectsLlist.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/projectslist',
            name: 'projects',
            component: ProjectsLlist,
        },
    ]
});
export { router };