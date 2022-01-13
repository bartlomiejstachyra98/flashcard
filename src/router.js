import {
    createRouter,
    createWebHistory,

} from 'vue-router';

import Answer from './components/Answer.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import FlashCards from './components/FlashCards.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [{
            path: '/',
            redirect: '/answer'
        },
        {
            name: 'answer',
            path: '/answer',
            component: Answer
        }, {
            name: 'register',
            path: '/register',
            component: Register,
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'flashcards',
            path: '/flashcards',
            component: FlashCards
        }
    ],
    linkActiveClass: 'active',
});

export {
    router
};