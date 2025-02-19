<template>
    <div>
        <swiper :slides-per-view="1" :space-between="50" :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" class="mySwiper">
            <!-- For Photo Banner -->
            <swiper-slide v-if="home_content?.banner_type === 'photo'" v-for="(image, key) in bannerImages" :key="key">
                <div class="image-container d-flex justify-content-start align-items-center"
                    :style="{ backgroundImage: `url(${appUrl}${image['banner_image']})`, backgroundSize: 'cover' }">
                    <a :href="bannerImageUrls[key] || '#'" target="_blank" class="stretched-link"
                        style="display: block; height: 100%;"></a>
                    <div class="content mx-auto">
                        <p class="banner-header">{{ image['banner_short_text'] }}</p>
                        <h1 class="banner-text">{{ image['banner_text'] }}</h1>
                        <div class="mt-2">
                            <router-link :to="image['button_url']"><button class="apply_btn">Apply
                                    Now</button></router-link>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <!-- For Video Banner -->
            <swiper-slide v-if="home_content?.banner_type === 'video'">
                <div class="image-container">
                    <video :src="bannerVideo" autoplay muted loop style="width: 100%; height: auto;"></video>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { appUrl, apiUrl } from "../../../../globalVariables";
import imagee from "../../../../assets/image/hero-3.jpg";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    data() {
        return {
            imagee,
            appUrl
            // home_content: {},
        };
    },

    props: {
        home_content: {
            type: Object,
            required: true,
        },
    },

    computed: {
        bannerImages() {
            const bannerImageData = this.home_content?.hero_content
                ? JSON.parse(this.home_content.hero_content)
                : {};

            const imageArray = Array.isArray(bannerImageData) ? bannerImageData : Object.values(bannerImageData);
            return imageArray.reverse();
        },


        bannerImageUrls() {
            const bannerImageUrlData = this.home_content?.banner_image
                ? JSON.parse(this.home_content.banner_image).image_url
                : [];
            console.log("Parsed banner image URLs:", bannerImageUrlData);  // Log to see the data
            return Array.isArray(bannerImageUrlData) ? bannerImageUrlData : [];
        },


        // Computed property for the banner video
        bannerVideo() {
            return this.home_content?.banner_video
                ? JSON.parse(this.home_content.banner_video)[0] || ""
                : "";
        },
    },

    mounted() {
        // this.getHomeContent(); 
    },

    methods: {
        onAutoplayStart() {
            console.log("Autoplay started");
        },
        onAutoplayStop() {
            console.log("Autoplay stopped");
        },

        // Method to fetch home content data from the API
        // async getHomeContent() {
        //     try {
        //         const token = localStorage.getItem("token");
        //         const response = await axios.get(`${apiUrl}home`, {
        //             headers: {
        //                 Authorization: `Bearer ${token}`,
        //             },
        //         });
        //         this.home_content = response.data.data.home_content; // Assign the fetched content to home_content
        //         console.log(this.home_content);
        //     } catch (error) {
        //         console.error("Error fetching home content:", error);
        //     }
        // },
    },
};
</script>


<style scoped>
@media (max-width: 1247px) {

    .banner-text {
        font-size: 1.8rem !important;
        font-weight: 700 !important;
        text-align: left !important;
        width: 300px;
        margin-left: -47px;
    }

    .banner-header {
        margin-left: -47px;
        font-size: 0.7rem !important;
        text-align: left !important;
        /* display: none; */
    }

    .apply_btn {
        padding: 7px 65px !important;
        border: none;
        border-radius: 2px;
        color: white;
        font-size: 18px;
        background-color: #824fa3;
        margin-top: 5px;
        margin-left: -95px;
    }

    .image-container {
        height: 591px !important;
    }
}

.banner-text {
    position: relative;
    z-index: 2;
    font-size: 3rem;
    color: #fff;
    margin-bottom: 20px;
    font-weight: 800;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.8);
    text-align: center;
    line-height: 1.2;
    text-transform: uppercase;
}

.banner-header {
    position: relative;
    z-index: 2;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    /* Adjusted for readability */
    margin-bottom: 15px;
    text-transform: uppercase;
}

.content {
    position: relative;
    z-index: 10;
    text-align: center;
    width: 60%;
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
    /* height: 960px; */
    height: 699px;
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
    padding: 15px 65px;
    border: none;
    border-radius: 2px;
    color: white;
    font-size: 18px;
    background-color: #824fa3;
}

.apply_btn:hover {
    background-color: #613082;
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