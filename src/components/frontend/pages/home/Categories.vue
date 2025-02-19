<template>
    <div class="categories-section">
        <h2 class="section-title">
            Explore <br />
            <span>Our Top <span class="highlight">Categories</span> </span>
        </h2>

        <div>
            <swiper style="cursor: pointer;" v-if="isSmallScreen" :slides-per-view="'auto'" :space-between="20" :pagination="{ clickable: true }"
                class="categories-slider">
                <swiper-slide v-for="(category, index) in categories.slice(0, 4)" :key="index"
                    class="category-card d-flex" @click="handleCategoryClick(category.id)">
                    <div class="icon-container">
                        <img :src="getImageUrl(category.image)" alt="category icon" />
                    </div>
                    <div class="ms-4">
                        <h3 class="category-title">{{ category.name }}</h3>
                        <p class="category-description">{{ category.courses.length }} Programs.</p>
                    </div>
                </swiper-slide>
            </swiper>

            <!-- Second Swiper -->
            <swiper style="cursor: pointer;" v-if="isSmallScreen" :slides-per-view="'auto'" :space-between="20" :pagination="{ clickable: true }"
                class="categories-slider mt-3">
                <swiper-slide v-for="(category, index) in categories.slice(4, 9)" :key="index"
                    class="category-card d-flex" @click="handleCategoryClick(category.id)">
                    <div class="icon-container">
                        <img :src="getImageUrl(category.image)" alt="category icon" />
                    </div>
                    <div class="ms-4">
                        <h3 class="category-title">{{ category.name }}</h3>
                        <p class="category-description">{{ category.courses.length }} Programs.</p>
                    </div>
                </swiper-slide>
            </swiper>

            <!-- Grid for larger screens -->
            <div v-else class="categories-grid">
                <div style="cursor: pointer;" v-for="(category, index) in categories.slice(0, 9)" :key="index" class="category-card d-flex"
                    @click="handleCategoryClick(category.id)">
                    <div class="icon-container">
                        <img :src="getImageUrl(category.image)" alt="category icon" />
                    </div>
                    <div class="ms-4">
                        <h3 class="category-title">{{ category.name }}</h3>
                        <p class="category-description">{{ category.courses.length }} Programs.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { apiUrl, appUrl } from "../../../../globalVariables";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default {
    components: { Swiper, SwiperSlide },
    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            isSmallScreen: window.innerWidth <= 1247,
        };
    },
    mounted() {
        window.addEventListener("resize", this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.checkScreenSize);
    },
    methods: {
        getImageUrl(item) {
            return `${appUrl}upload/degree/${item}`;
        },
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth <= 1247;
        },
        handleCategoryClick(degreeId) {
            // Navigate to Course.vue with the selected degree_id
            this.$router.push({
                path: "/course",
                query: {
                    degree: degreeId,
                },
            });
        },
    },
};
</script>


<style scoped>
@media (max-width: 1247px) {
    .categories-grid {
        display: none;
    }

    .category-title {
        font-size: 0.9rem !important;
    }

    .section-title {
        font-size: 20px !important;
    }
}

.categories-section {
    text-align: center;
    padding: 50px 20px;
    background-color: #fff;
}

.section-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
    line-height: 1.4;
}

.highlight {
    position: relative;
    display: inline-block;
    border-bottom: 5px solid #824fa3;
    padding-bottom: 8px;
}

.highlight::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: #ffc107;
    /* Yellow underline */
    z-index: -1;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
    width: 90%;
    margin: auto;
}

.category-card {
    padding: 9px 26px;
    border-radius: 4px;
    background: #fff;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 105px;
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    transition: transform 0.2s ease-in;
}

.category-card:hover {
    /* background-color: #824fa3;
    color: white; */
    transform: scale(1.03);
    /* box-shadow: 1px 1px 2px #824fa3; */
}

.icon-container img {
    max-width: 50px;
    margin-bottom: 15px;
}

.category-title {
    font-size: 1.1rem;
    font-weight: bold;
    text-align: left;
    height: 45px;
}

.category-description {
    font-size: 0.9rem;
    text-align: left;
}
</style>
