<template>
    <Header />

    <div v-if="loading" class="loader-container">
        <div class="loader">
            <img :src="logo" alt="Loading..." class="logo-animation" />
        </div>
    </div>

    <div v-else>
        <Hero :home_content="home_content" />

        <div class="search-section">
            <div class="search-container">
                <select class="search-dropdown search-dropdown-country" v-model="selectedCountry">
                    <option>Select Country</option>
                    <option v-for="(item, index) in countries" :key="index" :value="item.id">
                        Study In {{ item.name }}
                    </option>
                </select>

                <select class="search-dropdown search-dropdown-country" v-model="selectedUniversity">
                    <option>Select University</option>
                    <option v-for="(item, index) in filteredUniversities" :key="index" :value="item.id">
                        {{ item.name }}
                    </option>
                </select>

                <select class="search-dropdown search-dropdown-degree" v-model="selectedDegree">
                    <option v-if="selectedUniversity === 'Select University'">Select University First</option>
                    <option v-if="selectedUniversity !== 'Select University'">Select Degree</option>
                    <option v-if="selectedUniversity !== 'Select University'" v-for="(item, index) in degree"
                        :key="index" :value="item.id">
                        {{ item.name }}
                    </option>
                </select>
            </div>
            <div class="btn-center">
                <button class="search-button" @click="handleSearch">Search</button>
            </div>
        </div>

        <Categories :categories="categories" />
        <FindUniversity :homeCountries="homeCountries" />
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
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';


export default {
    data() {
        return {
            selectedCountry: 'Select Country',
            selectedUniversity: "Select University",
            selectedDegree: "Select University First",
            home: {},
            home_content: {},
            countries: [],
            homeCountries: [],
            degree: [],
            categories: [],
            homecontentlocation: [],
            countData: [],
            courses: [],
            universities: [],
            all_universities: [],
            filteredUniversities: [],
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
        Multiselect
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
    watch: {
        selectedCountry(newCountryId) {
            if (newCountryId !== "Select Country") {
                this.filteredUniversities = this.all_universities.filter(university => university.country_id === newCountryId);
                this.selectedUniversity = "Select University"; // Reset university selection
                this.selectedDegree = "Select University First"; // Reset degree selection
            } else {
                this.filteredUniversities = [];
                this.selectedUniversity = "Select University";
                this.selectedDegree = "Select University First";
            }
        },
        selectedUniversity(newUniversityId) {
            if (newUniversityId !== "Select University") {
                this.selectedDegree = "Select Degree";
            } else {
                this.selectedDegree = "Select University First";
            }
        }
    },
    methods: {
        handleSearch() {
            this.$router.push({
                path: "/course",
                query: {
                    country: this.selectedCountry,
                    university: this.selectedUniversity,
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
            this.homecontentlocation = response.data.data?.homecontentlocations || [];

            if (this.homecontentlocation.length === 0) {
                console.warn("homecontentlocation is empty or not available.");
            } else {

                const filteredLocations = this.homecontentlocation.filter(homeLocation => {
                    console.log("Checking homeLocation:", homeLocation);
                    return homeLocation.type_loction_id == 2;
                });


                this.homeCountries = filteredLocations
                    .map(homeLocation => {

                        const matchedCountry = this.countries.find(country => {
                            return country.id === homeLocation.location_id;
                        });

                        return matchedCountry;
                    })
                    .filter(Boolean);

            }


            // this.countries = response.data.data.cities;
            this.home_content = response.data.data.home_content;

            this.universities = response.data.data.university_list;
            this.all_universities = response.data.data.universities;
            this.program = response.data.data.course;

            this.courses = response.data.data.courses_all;
            this.latestUpdate = response.data.data.latest_updates;
            console.log(response.data.data);


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
        padding-top: 10px !important;
    }

    .search-section {
        border-radius: 10px !important;
        display: flex;
        flex-direction: column;
        width: 90% !important;
        height: 320px !important;
    }

    .search-dropdown {
        width: 90% !important;
    }

    .btn-center {
        margin-top: 2px !important;
    }

}

.btn-center {
    text-align: center;
    margin-top: 17px;
}

.search-section {
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: -63px;
    z-index: 10;
    position: relative;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    padding-left: 10px;
    padding: 20px;
    height: 240px;
    border-bottom: 3px solid #824fa3;
}

.search-container {
    display: flex;
    align-items: center;
    background: #fff;
    width: 95%;
    padding-top: 30px;
    margin: auto;
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
    border: 1px solid black;
    padding: 13px;
    outline: none;
    font-size: 18px;
    background-color: white;
    border-left: 1px solid gray;
    margin: 10px;
    width: 0px;
    font-weight: 700;
}

.search-button {
    background-color: #824fa3;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 21px;
    cursor: pointer;
    height: 55px;
    width: 91%;
}

.search-button:hover {
    background-color: #6d3a8f;
}
</style>