import {
    createRouter,
    createWebHistory,

} from 'vue-router';

import Answer from './components/Answer.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import FlashCards from './components/FlashCards.vue'
import store from './store/index.js';
import Home from './components/Home.vue'
const router = createRouter({
    history: createWebHistory(),

    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            name: 'answer',
            path: '/answer',
            component: Answer,
            meta: {
                requiresAuth: true
            }
        }, {
            name: 'register',
            path: '/register',
            component: Register,
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
            meta: {
                requiresUnAuth: true
            }
        },
        {
            name: 'flashcards',
            path: '/flashcards',
            component: FlashCards,
            meta: {
                requiresAuth: true
            }
        }
    ],
    linkActiveClass: 'active',
});
router.beforeEach(function (to, from, next) {
    if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
        next('/login');
    } else if (to.meta.requiresUnAuth && store.getters["auth/isAuthenticated"]) {
        next("/answer");
    } else {
        next();
    }
})


export {
    router
};