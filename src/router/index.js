import {
    createRouter,
    createWebHistory
} from 'vue-router';

// Parent Components 
import FrontendLayout from '../components/layouts/front.vue';


// Frontend Components 
import Login from '../components/frontend/pages/auth/login.vue';
import PartnerLogin from '../components/frontend/pages/auth/PartnerLogin.vue';
import Register from '../components/frontend/pages/auth/Register.vue';
import PartnerRegister from '../components/frontend/pages/auth/PartnerRegister.vue';
import Home from '../components/frontend/templates/home/Home.vue';
import LatestDetails from '../components/frontend/templates/home/LatestDetails.vue';
import Course from '../components/frontend/templates/course/Course.vue';
import Blog from '../components/frontend/templates/blog/Blog.vue';
import Event from '../components/frontend/templates/event/Event.vue';
import About from '../components/frontend/templates/about/About.vue';
import HeadOffice from '../components/frontend/templates/headOffice/HeadOffice.vue';
import Contact from '../components/frontend/templates/contact/Contact.vue';
import Appointment from '../components/frontend/templates/appointment/Appointment.vue';
import Applicants from '../components/frontend/templates/applicants/Applicants.vue';
import BlogDetails from '../components/frontend/templates/blog/BlogDetails.vue';
import EventDetails from '../components/frontend/templates/event/EventDetails.vue';
import CourseDetails from '../components/frontend/templates/course/CourseDetails.vue';
import ApplyForm from '../components/frontend/templates/course/ApplyForm.vue';
import ChooseUniversity from '../components/frontend/templates/university/ChooseUniversity.vue';
import UniversityDetails from '../components/frontend/templates/university/UniversityDetails.vue';
import SingleCountry from '../components/frontend/templates/university/SingleCountry.vue';
import AllCountryUniversity from '../components/frontend/templates/university/AllCountryUniversity.vue';



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
                path: '/login',
                component: Login,
            },
            {
                path: '/partner-login',
                component: PartnerLogin,
            },
            {
                path: '/register',
                component: Register,
            },
            {
                path: '/partner-register',
                component: PartnerRegister,
            },
            
            {
                path: '/applicant',
                component: Applicants,
            },
            {
                path: '/office/:id',
                component: HeadOffice,
            },
            {
                path: '/appointment',
                component: Appointment,
            },
            {
                path: '/about',
                component: About,
            },
            {
                path: '/contact',
                component: Contact,
            },
            {
                path: '/blog',
                component: Blog,
            },
            {
                path: '/blog/:id',
                component: BlogDetails,
            },
            {
                path: '/event',
                component: Event,
            },
            {
                path: '/event/:id',
                component: EventDetails,
            },
            {
                path: '/latest/:slug',
                component: LatestDetails,
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
                path: '/apply-admission/:id',
                component: ApplyForm,
            },
            {
                path: '/choose-country',
                component: ChooseUniversity,
            },
            {
                path: '/all-country',
                component: AllCountryUniversity,
            },
            {
                path: '/choose-country/:id',
                component: SingleCountry,
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