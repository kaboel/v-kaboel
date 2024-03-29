import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home'),
            meta: {
                title: 'Faiq Allam | A Code Junkie, and Full Stack Web Developer'
            }
        },
        {
            path: '/vitae/:lang',
            name: 'vitae',
            component: () => import('./views/Vitae'),
            meta: {
                title: 'Faiq Allam | My Curriculum Vitae'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact'),
            meta: {
                title: 'Faiq Allam | Get in touch with me'
            }
        },
        {
            path: '/project',
            name: 'project',
            component: () => import('./views/Project'),
            meta: {
                title: 'Faiq Allam | Setup a new project'
            }
        },
        {
            path: '*',
            name: '404',
            component: () => import('./views/NotFound'),
            meta: {
                title: 'Faiq Allam | Page Not Found'
            }
        },
    ],
})
