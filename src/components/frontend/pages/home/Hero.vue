<template>
    <div>
        <swiper :slides-per-view="1" :space-between="50" :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" class="mySwiper" @autoplayStart="onAutoplayStart"
            @autoplayStop="onAutoplayStop">
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div class="image-container d-flex justify-content-start align-items-center"
                    :style="{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }">
                    <div class="container px-0">
                        <div class="row mx-0">
                            <div class="content">
                                <p class="banner-header">Education WordPress theme</p>
                                <h2 class="banner-text">{{ slide.title }}</h2>
                                <div class="mt-4">
                                    <button class="apply_btn" type="button">How to Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

import imagee from "../../../../assets/image/2180_hero_slider_image.jpg"

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    data() {
        return {
            imagee,
            slides: [
                {
                    image: imagee,
                    title: "Welcome to Our Platform",
                    buttonFirst: {
                        text: "Get Started",
                        url: "#",
                    },
                    buttonSecond: {
                        text: "Learn More",
                        url: "#",
                    },
                },
                {
                    image: imagee,
                    title: "Discover New Opportunities",
                    buttonFirst: {
                        text: "Join Now",
                        url: "#",
                    },
                    buttonSecond: {
                        text: "Explore",
                        url: "#",
                    },
                },
                {
                    image: imagee,
                    title: "Start Your Journey Today",
                    buttonFirst: {
                        text: "Sign Up",
                        url: "#",
                    },
                    buttonSecond: {
                        text: "Contact Us",
                        url: "#",
                    },
                },
            ],
        };
    },

    methods: {
        onAutoplayStart() {
            console.log("Autoplay started");
        },
        onAutoplayStop() {
            console.log("Autoplay stopped");
        },
    },
};
</script>

<style scoped>
.content {
    position: relative;
    z-index: 10;
    text-align: center;
}

.slider-item {
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.image-container {
    width: 100%;
    height: 960px;
    opacity: 0.9;
    filter: brightness(0.9) contrast(1.2);
    position: relative;
    background-position: center;
    /* margin-top: 50px; */
}


.image-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    z-index: 1;
}

.apply_btn {
    padding: 15px 35px;
    border: none;
    border-radius: 2px;
    color: white;
    font-size: 18px;
    background-color: #824fa3;
}

.banner-text {
    position: relative;
    z-index: 2;
    font-size: 4rem;
    color: #fff;
    margin-bottom: 20px;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    text-align: center;
}

.banner-header {
    position: relative;
    z-index: 2;
    color: #fff;
    text-align: center;
}

.banner-btn {
    margin-right: 15px;
    padding: 10px 20px;
    display: inline-flex;
    align-items: center;
}

.btn-primary-bg {
    background-color: #824fa3;
    color: #fff;
}

.btn-tertiary-bg {
    background-color: #6c757d;
    color: #fff;
}
</style>