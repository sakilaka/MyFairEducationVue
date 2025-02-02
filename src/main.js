import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import { globalVariables } from './globalVariables'
import '@fortawesome/fontawesome-free/css/all.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/swiper-bundle.css';
import "toastr/build/toastr.min.css";
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000/api/';

const csrfToken = document.querySelector('meta[name="csrf-token"]');
if (csrfToken) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken.getAttribute('content');
}

const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const app = createApp(App)
app.use(router)
app.mount('#app')
