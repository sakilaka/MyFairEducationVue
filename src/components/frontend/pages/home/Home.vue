<template>
    <Header />

    <div v-if="loading" class="loader-container">
        <div class="loader">
            <img :src="logo" alt="Loading..." class="logo-animation" />
        </div>
    </div>

    <div v-else>
        <Hero v-if="!loading" />

        <div class="search-section">
            <div class="search-container">
                <input type="text" placeholder="What do you want to study?..." class="search-input" />
                <select class="search-dropdown search-dropdown-country">
                    <option>Select Country</option>
                    <option v-for="(item, index) in countries" :key="index" :value="item.name">
                        {{ item.name }}
                    </option>
                </select>
                <select class="search-dropdown search-dropdown-degree">
                    <option>Select Degree</option>
                    <option v-for="(item, index) in degree" :key="index" :value="item.name">
                        {{ item.name }}
                    </option>
                </select>
            </div>
            <div class="btn-center">
                <button class="search-button">Search</button>
            </div>
        </div>

        <Categories v-if="!loading" />
        <FindUniversity v-if="!loading" />
        <WorldClass v-if="!loading" />
        <CountSection v-if="!loading" />
        <CourseSection v-if="!loading" />
        <LatestUpdate v-if="!loading" />
    </div>

    <Footer />
</template>

<script>
import { defineAsyncComponent } from 'vue';
import axios from 'axios';
import { apiUrl } from '../../../../globalVariables';
import logo from "../../../../assets/image/logo.png";

export default {
    data() {
        return {
            home: {},
            countries: [],
            degree: [],
            loading: true,
            logo
        };
    },
    components: {
        Header: defineAsyncComponent(() => import('../../includes/Header.vue')),
        Footer: defineAsyncComponent(() => import('../../includes/Footer.vue')),
        Hero: defineAsyncComponent(() => import('./Hero.vue')),
        Categories: defineAsyncComponent(() => import('./Categories.vue')),
        FindUniversity: defineAsyncComponent(() => import('./FindUniversity.vue')),
        WorldClass: defineAsyncComponent(() => import('./WorldClass.vue')),
        CountSection: defineAsyncComponent(() => import('./CountSection.vue')),
        CourseSection: defineAsyncComponent(() => import('./CourseSection.vue')),
        LatestUpdate: defineAsyncComponent(() => import('./LatestUpdate.vue')),
    },
    async mounted() {
        await this.getHomeContent(); // Fetch data first
        this.loading = false; // Hide loader only after data is ready
    },
    methods: {
        async getHomeContent() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}home`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                this.home = response.data.data;
                this.degree = response.data.data.degrees;
                this.countries = response.data.data.countries;
            } catch (error) {
                console.error('Error fetching configurations:', error);
            }
        },
    },
};
</script>

<style scoped>
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader .logo-animation {
    width: 200px;
    height: 100px;
    animation: zoomInOut 1.5s infinite ease-in-out;
}

@keyframes zoomInOut {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

@media (max-width: 1247px) {
    .search-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        width: 85% !important;
    }

    /* .search-input {
        display: none;
    } */

    .search-section {
        width: 300px !important;
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
    }

    .search-dropdown {
        flex: 1;
        border: none !important;
        padding: 10px;
        outline: none;
        font-size: 16px;
        background-color: white;
    }

    .search-dropdown-degree {
        margin-left: 50px !important;
        width: 280px;
    }

    .search-dropdown-country {
        margin-left: 50px !important;
        width: 280px;
    }

    .search-button {
        background-color: #824fa3;
        color: #fff;
        padding: 10px 10px !important;
        border: none;
        border-radius: 2px;
        font-size: 16px;
        cursor: pointer;
        height: 52px !important;
        width: 135px;
    }
    .btn-center{
        text-align: center;
    }
}

.search-section {
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: -40px;
    z-index: 10;
    position: relative;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 2px;
    padding-left: 10px;
}

.search-container {
    display: flex;
    align-items: center;
    background: #fff;
    width: 95%;
}

.search-input {
    flex: 1;
    border: none;
    padding: 10px;
    outline: none;
    font-size: 16px;
    border-radius: 8px;
}

.search-dropdown {
    flex: 1;
    border: none;
    padding: 10px;
    outline: none;
    font-size: 16px;
    background-color: white;
    border-left: 1px solid gray;
    margin: 10px;
}

.search-button {
    background-color: #824fa3;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 2px;
    font-size: 16px;
    cursor: pointer;
    height: 72px;
    width: 135px;
}

.search-button:hover {
    background-color: #6d3a8f;
}
</style>