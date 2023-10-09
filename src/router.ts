import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: `/`,
            component: () => import('./pages/index.vue')
        },
        {
            path: '/favorites',
            component: () => import('./pages/favorites.vue')
        },
        {
            path: '/peoples',
            name: 'peoples',
            component: () => import('./pages/peoples.vue')
        },
        {
            path: '/peoples/:id',
            name: 'peoplesDetail',
            component: () => import('./pages/peoplesDetail.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('./pages/error.vue'),
        },
    ]
})
