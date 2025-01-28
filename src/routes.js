import {createRouter, createWebHistory} from "vue-router";

const routeHistory = createWebHistory();

import HomePage from '@/pages/homePage.vue';
import AboutPage from '@/pages/aboutPage.vue';
import notFoundPage from "./pages/notFoundPage.vue";

const routers = createRouter({
    history: routeHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:pathMatch(.*)*', // '/:catchAll(.*)*', 
            name: '404',
            component: notFoundPage
        }
    ]

});

export default routers;