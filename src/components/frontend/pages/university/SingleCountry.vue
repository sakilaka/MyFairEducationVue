<template>
    <div class="" style="margin-top: 110px;">

        <div class="">
            <div class="inner_section">
                <div class="containerBlog">
                    <router-link to="/">
                        <p class="para">Home</p>
                    </router-link>
                    <h2 style="color: #012169; margin-top: -10px" class="fw-bold">Universities</h2>
                </div>
            </div>
        </div>

        <div class="row container mx-auto mt-5">
            <div class="col-md-3 mt-2">
                <div class="sidebar p-3">
                    <h6 class="py-3 fw-bold">Filter University</h6>

                    <div class="form-group">
                        <label for="continent">Continent</label>
                        <select class="form-control" id="continent" v-model="selectedContinent">
                            <option value="">Choose One</option>
                            <option v-for="(item, index) in continents" :key="index" :value="item.id">
                                {{ item.name }}
                            </option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="country">Country</label>
                        <select class="form-control" id="country" v-model="selectedCountry">
                            <option value="">Choose One</option>
                            <option v-for="(item, index) in filteredCountries" :key="index" :value="item.id">
                                {{ item.name }}
                            </option>
                        </select>
                    </div>



                </div>
            </div>

            <div class="col-md-9">
                <p class="my-2 ms-2">{{ filteredUniversities.length }} total university found.</p>
                <!-- <div @click="singleUniversity(item.id)" v-for="(item, index) in filteredUniversities" :key="index"
                    class="card_university">
                    <div class="text-center">
                        <img :src="getImageUrl(item.image)" class="card_image" alt="Country Image" />
                    </div>
                    <p class="text-center my-3">{{ item.name }}</p>
                </div> -->
                <div class="row justify-content-center card-row">
                    <!-- Card Container -->
                    <div v-for="(item, index) in filteredUniversities" :key="index" class="card_university col-md-3 col-12">
                        <div class="card_content">
                            <img :src="getImageUrl(item.banner_image)" class="card_image" alt="Country Image" />
                            <img :src="getImageUrl(item.image)" class="logo_image" alt="" />
                            <div class="card_content_text">
                                <p class="mt-2">{{ item.course_count }} programs</p>
                                <h5 style="font-size: 17px" class="mt-2 fw-bold">{{ item.name }}</h5>
                                <p style="font-size: 14px" class="mt-4">{{ item.address }}</p>
                            </div>
                        </div>
                        <div class="card_hover_content">
                            <h4 class="fw-bold mb-5 fs-5">{{ item.name || "Explore" }}</h4>
                            <router-link :to="{ path: `/university/${item.id}` }">
                                <div class="icon"><i class="fa-solid fa-arrow-right"></i></div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { apiUrl, appUrl } from '../../../../globalVariables';

export default {
    data() {
        return {
            universities: [],
            continents: [],
            countries: [],
            selectedContinent: null,
            selectedCountry: null,
        }
    },
    computed: {
        filteredCountries() {
            if (!this.selectedContinent) {
                return [];
            }
            return this.countries.filter(country => country.continent_id === this.selectedContinent);
        },

        filteredUniversities() {
            return this.universities.filter(university => {
                const matchesContinent = !this.selectedContinent || this.countries.some(
                    country => country.id === university.country_id && country.continent_id === this.selectedContinent
                );
                const matchesCountry = !this.selectedCountry || university.country_id === this.selectedCountry;
                // console.log(matchesCountry);
                return matchesContinent && matchesCountry;

            });
        },
    },

    mounted() {
        this.getUniversity();
    },

    methods: {
        singleUniversity(id) {
            this.$router.push(`/university/${id}`)
        },
        async getUniversity() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}list/all-universities/${this.$route.params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.universities = response.data.data.universities;
                this.continents = response.data.data.continents;
                this.countries = response.data.data.countries;
                console.log(response.data.data);


            } catch (error) {
                console.error('Error fetching configurations:', error);
            }

        },
        navigateToCountry(countryID) {
            this.$router.push(`/choose-country/${countryID}`)
        },
        getImageUrl(item) {
            return `${appUrl}upload/university/${item}`;
        },
    },
}
</script>


<style scoped>
.containerBlog {
    width: 80%;
    margin: auto;
}

.inner_section {
    background-color: #f3f3f3;
    padding: 68px 0 24px;
}

.para {
    color: #824fa3;
    font-weight: bold;
}

.form-control {
    height: 40px !important;
    font-size: 15px !important;
}

.sidebar {
    width: 100%;
    height: 270px;
    background-color: rgb(252, 249, 245);
}

@media (max-width: 1247px) {
    /* .card_university {
        width: 100% !important;
        margin: 10px;
        border-radius: 5px;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        height: 300px;
        position: relative;
        background-color: white;
        transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    } */

    .card_university {
        width: 300px !important;
        margin: 10px;
        border-radius: 5px;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        height: 300px;
        position: relative;
        background-color: white;
        transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    }

}

.card_university {
    width: 18%;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    height: 300px;
    position: relative;
    background-color: white;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
}

.card_university:hover {
    background-color: #f39c12;
    color: #ffffff;
}

/* .card_university {
    width: 23%;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    height: 240px;
    position: relative;
    background-color: white;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
} */



.card_image {
    width: 160px;
    height: 160px;
    margin: auto;
    background-color: #ffffff;
    padding: 3px;
    margin-top: 10px;
}
.card_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    transition: opacity 0.3s ease;
    z-index: 2;
    opacity: 1;
}

.card_university:hover .card_content {
    opacity: 0;
}

.card_hover_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ffffff;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card_university:hover .card_hover_content {
    opacity: 1;
}

.card_hover_content .icon {
    font-size: 24px;
    margin-top: 10px;
}

.card_image {
    width: 238px;
    height: 125px;
    margin: auto;
    margin-top: -21px;
}

.logo_image {
    width: 50px;
    height: 50px;
    margin: auto;
    margin-top: -21px;
    background-color: #ffffff;
    padding: 3px;
}

.card_info {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
}

.card_info p {
    margin: 0;
    font-weight: bold;
    color: #333;
}

.fa-chevron-right {
    color: #333;
}
</style>