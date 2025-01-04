import {
    createRouter,
    createWebHistory
} from 'vue-router';

// Parent Components 
import FrontendLayout from '../components/layouts/front.vue';


// Frontend Components 
import Home from '../components/frontend/templates/home/Home.vue';
import Course from '../components/frontend/templates/course/Course.vue';
import ChooseUniversity from '../components/frontend/templates/university/ChooseUniversity.vue';



const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/frontend',
        component: FrontendLayout,
        children: [
            
            {
                path: '/course',
                component: Course,
            },
            {
                path: '/choose-country',
                component: ChooseUniversity,
            },

        ]
    },
    


];


const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link',
});

export default router;