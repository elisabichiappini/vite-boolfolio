import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome';
import AppContacts from './pages/AppContacts';
import AppAbout from './pages/AppAbout';
import ProjectsLlist from './pages/ProjectsLlist';

const router = createRouter({
    history:createWebHistory(),
    route: [
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

export default router;