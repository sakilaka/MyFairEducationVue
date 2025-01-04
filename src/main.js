import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { globalVariables } from './globalVariables'
import '@fortawesome/fontawesome-free/css/all.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/swiper-bundle.css';



const app = createApp(App)
app.use(router)
app.provide('globalVariables', globalVariables)
app.mount('#app')
