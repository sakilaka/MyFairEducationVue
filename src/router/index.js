import {
    createRouter,
    createWebHistory
} from 'vue-router';

// Parent Components 
import FrontendLayout from '../components/layouts/front.vue';


// Frontend Components 
import Home from '../components/frontend/templates/home/Home.vue';
import Course from '../components/frontend/templates/course/Course.vue';
import Blog from '../components/frontend/templates/blog/Blog.vue';
import About from '../components/frontend/templates/about/About.vue';
import CourseDetails from '../components/frontend/templates/course/CourseDetails.vue';
import ChooseUniversity from '../components/frontend/templates/university/ChooseUniversity.vue';
import UniversityDetails from '../components/frontend/templates/university/UniversityDetails.vue';



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
                path: '/about',
                component: About,
            },
            {
                path: '/blog',
                component: Blog,
            },
            {
                path: '/course',
                component: Course,
            },
            {
                path: '/course/:id',
                component: CourseDetails,
            },
            {
                path: '/choose-country',
                component: ChooseUniversity,
            },
            {
                path: '/university/:id',
                component: UniversityDetails,
            },

        ]
    },
    


];


const router = createRouter({
    history: createWebHistory(),
    routes,
    // linkActiveClass: 'active-link',
});

export default router;