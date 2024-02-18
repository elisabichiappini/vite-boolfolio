import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsList from './pages/ProjectsList.vue';
import NotFound from './pages/NotFound.vue';
import singleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/keyup-portfolio',
            name: 'projects',
            component: ProjectsList,
        }, 
        {
            //gestione parametri
            path: '/keyup-portfolio/:slug',
            name: 'single-project',
            component: singleProject,
        },
        {
            //rotta 404
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound,
        }
    ]
})
export { router };