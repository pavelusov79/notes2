<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-content">
                <router-link to="/" class="navbar-logo">{{ app.title }}</router-link>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.alias">
                        <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import {app, links} from '../_config.js';
export default {
//    props: {
//     links: {
//         type: Array,
//         required: true,
//     },
//     title: {
//         type: String,
//         required: true
//     }
//    },
    data() {
        return {
            app: app,
            links: links,
        }
    },
};
</script>

