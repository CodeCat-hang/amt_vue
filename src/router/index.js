import Vue from 'vue'
import VueRouter from 'vue-router'
import Students from '../views/Students.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        redirect: '/students/index'

    },
    {
        path: '/students/index',
        name: 'studentsData',
        component: Students
    }
]

const router = new VueRouter({
    routes
})

export default router