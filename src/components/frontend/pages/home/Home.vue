<template>
    <!-- <Header /> -->

    <div v-if="loading" class="loader-container">
        <div class="loader">
            <img :src="logo" alt="Loading..." class="logo-animation" />
        </div>
    </div>

    <div v-else>
        <Hero :home_content="home_content" />

        <div class="search-section">
            <div class="search-container">
                <div class="d-flex mt-2">
                    <input type="text" v-model="searchQuery" placeholder="What do you want to study"
                        class="search-input" />
                    <i class="fas fa-search search-icon"></i>
                </div>
                <select class="search-dropdown search-dropdown-country" v-model="selectedCountry">
                    <option>Select Country</option>
                    <option v-for="(item, index) in countries" :key="index" :value="item.id">
                        {{ item.name }}
                    </option>
                </select>
                <select class="search-dropdown search-dropdown-degree" v-model="selectedDegree">
                    <option>Select Degree</option>
                    <option v-for="(item, index) in degree" :key="index" :value="item.id">
                        {{ item.name }}
                    </option>
                </select>
            </div>
            <div class="btn-center">
                <button class="search-button" @click="handleSearch">Search</button>
            </div>
        </div>

        <Categories :categories="categories" />
        <FindUniversity :countries="countries" />
        <WorldClass :universities="universities" :program="program" />
        <CountSection :countData="countData" />
        <CourseSection :courses="courses" />
        <ApplyUniversity />
        <LatestUpdate />
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
            searchQuery: "",
            selectedCountry: "Select Country",
            selectedDegree: "Select Degree",
            home: {},
            home_content: {},
            countries: [],
            degree: [],
            categories: [],
            countData: [],
            countries: [],
            courses: [],
            universities: [],
            latestUpdate: [],

            program: 0,
            loading: true,
            logo,
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
        ApplyUniversity: defineAsyncComponent(() => import('./ApplyUniversity.vue')),
    },
    async mounted() {
        try {
            await this.getHomeContent();
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            this.loading = false;
        }
    },
    methods: {
        handleSearch() {
            this.$router.push({
                path: "/course",
                query: {
                    search: this.searchQuery,
                    country: this.selectedCountry,
                    degree: this.selectedDegree,
                },
            });
        },
        async getHomeContent() {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${apiUrl}home`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            this.home = response.data.data;
            this.degree = response.data.data.degrees;
            this.countries = response.data.data.countries;
            this.categories = response.data.data.degrees;
            this.countries = response.data.data.cities;
            this.home_content = response.data.data.home_content;

            this.universities = response.data.data.university_list;
            this.program = response.data.data.course;

            this.courses = response.data.data.courses_all;
            this.latestUpdate = response.data.data.latest_updates;


            // Fetch countData
            const rawData = response.data.data.home_content;
            this.countData = [
                { num: this.parseNumber(rawData.count_num_1), text: rawData.count_text_1 },
                { num: this.parseNumber(rawData.count_num_2), text: rawData.count_text_2 },
                { num: this.parseNumber(rawData.count_num_3), text: rawData.count_text_3 },
                { num: this.parseNumber(rawData.count_num_4), text: rawData.count_text_4 }
            ];
        },
        parseNumber(value) {
            if (typeof value === "string") {
                value = value.toLowerCase();
                if (value.includes("k")) {
                    return parseFloat(value) * 1000;
                }
                if (value.includes("m")) {
                    return parseFloat(value) * 1000000;
                }
            }
            return parseFloat(value) || 0;
        }
    },
};
</script>

<style scoped>
.search-icon {
    position: absolute;
    top: 50%;
    left: 23%;
    transform: translateY(-50%);
    font-size: 16px;
    color: #888;
    pointer-events: none;
}

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
    .search-icon {
        position: absolute;
        top: 11% !important;
        left: 88%;
        transform: translateY(-50%);
        font-size: 16px;
        color: #888;
        pointer-events: none;
    }

    .search-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        width: 85% !important;
    }

    .search-section {
        border-radius: 10px !important;
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
        margin-left: 28px !important;
        width: 280px;
    }

    .search-dropdown-country {
        margin-left: 28px !important;
        width: 280px;
    }

    .search-input {
        margin-right: 45px !important;
    }

    .search-button {
        background-color: #824fa3;
        color: #fff;
        padding: 10px 10px !important;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        height: 52px !important;
        width: 135px;
    }

    .btn-center {
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
    padding: 10px 0px;
    outline: none;
    font-size: 16px;
    border-radius: 8px;
    margin-right: 127px;
    width: 100%;
    margin-top: -8px;
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
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    height: 72px;
    width: 135px;
}

.search-button:hover {
    background-color: #6d3a8f;
}
</style>