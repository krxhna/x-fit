import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home.vue'
import about from '../views/about.vue'
import quiz from '../views/quiz.vue'


const routes =  [

    {
        path: '/',
        name: 'home',
        component: home

    },
    {
        path: '/quiz',
        name: 'quiz',
        component: quiz
    },
    {
        path: '/about/:id',
        name: 'about',
        component: about,
        props: true

    },
]


const router = createRouter({
    history: createWebHistory(),

    routes
})

export default router