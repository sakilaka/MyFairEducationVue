<template>
    <div class="" style="margin-top: 110px">
        <div class="inner_section">
            <div class="container">
                <router-link to="/">
                    <p class="para">Home</p>
                </router-link>
                <h2 style="color: #012169; margin-top: -10px" class="fw-bold">Find a Course</h2>
            </div>
        </div>

        <div class="container main_form">
            <div class="layout">
                <!-- Left Form Box -->
                <div class="form-box">
                    <h3>Filters</h3>
                    <div class="form-group">
                        <label for="degree">Degree</label>
                        <select id="degree" v-model="selectedFilters.degree">
                            <option value="">Choose One</option>
                            <option v-for="(degree, index) in degrees" :key="index" :value="degree.id">
                                {{ degree.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="language">Teaching Language</label>
                        <select id="language" v-model="selectedFilters.language">
                            <option value="">Choose One</option>
                            <option v-for="(language, index) in languages" :key="index" :value="language.id">
                                {{ language.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="intake">Intake</label>
                        <select id="intake" v-model="selectedFilters.intake">
                            <option value="">Choose One</option>
                            <option v-for="(section, index) in sections" :key="index" :value="section.id">
                                {{ section.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="subject">Major/Subject</label>
                        <select id="subject" v-model="selectedFilters.department">
                            <option value="">Choose One</option>
                            <option v-for="(major, index) in departments" :key="index" :value="major.id">
                                {{ major.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="university">University</label>
                        <select id="university" v-model="selectedFilters.university">
                            <option value="">Choose One</option>
                            <option v-for="(university, index) in universities" :key="index" :value="university.id">
                                {{ university.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="province">Province</label>
                        <select id="province" v-model="selectedFilters.state">
                            <option value="">Choose One</option>
                            <option v-for="(state, index) in states" :key="index" :value="state.id">
                                {{ state.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="Cities">Cities</label>
                        <select id="Cities" v-model="selectedFilters.city">
                            <option value="">Choose One</option>
                            <option v-for="(city, index) in cities" :key="index" :value="city.id">
                                {{ city.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <!-- Right Card Section -->

                <div v-if="loading" class="loader-container">
                    <div class="loader">
                        <img :src="logo" alt="Loading..." class="logo-animation" />
                    </div>
                </div>

                <div v-else class="cards-section">
                    <div v-if="filteredPrograms.length > 0" v-for="(card, index) in filteredPrograms" :key="index"
                        @click="navigateToCourse(card.id)" class="card_university">

                        <div class="card_header">
                            <img class="university_image" :src="getImageUrl(card.university?.banner_image)"
                                alt="University logo" />
                            <img class="university_logo" :src="getImageUrl(card.university?.image)"
                                alt="University logo" />
                        </div>
                        <div class="card-body">
                            <h6 class="fw-bold">{{ card.university?.name }}</h6>
                            <h4 class="fw-bold">{{ card.name }}</h4>
                            <div style="margin-top: -12px" class="d-flex">
                                <i style="margin-top: 8px" class="fa-solid fa-location-dot"></i>
                                <p style="font-size: 12px" class="ms-2">
                                    {{ card?.university?.address }}
                                </p>
                            </div>

                            <div style="margin-top: -12px" class="d-flex mt-1">
                                <i style="margin-top: 8px" class="fa-solid fa-ranking-star"></i>
                                <p style="font-size: 12px" class="ms-2">
                                    {{
                                        card.parsedDisplayData?.world_rank
                                            ? card.parsedDisplayData?.world_rank
                                            : "N/A"
                                    }}
                                </p>
                            </div>

                            <hr class="my-1" />

                            <div class="d-flex justify-content-between intake">
                                <div class="">
                                    <p>
                                        Tuition fee : ${{
                                            card.university?.year_fee ? card.university?.year_fee : 0
                                        }}
                                    </p>
                                    <p>Duration : {{ card.course_duration }} year.</p>
                                </div>
                                <div class="">
                                    <p>Intake : {{ card.university?.intake }}</p>
                                    <p>Deadline : {{ card.application_deadline }} year.</p>
                                </div>
                            </div>

                            <hr class="my-1" />

                            <button type="submit" @click.stop="applyButton(card.id)" class="apply_btn">Apply Now <i
                                    class="fa-solid fa-arrow-right ms-1"></i>
                            </button>

                            <div class="degree badge">
                                <p>{{ card?.degree?.name }}</p>
                            </div>
                        </div>

                    </div>

                    <div v-else>
                        <h5 class="fw-bold text-center my-3">No Matched Programs.</h5>
                    </div>

                    <div class="pagination">
                        <button class="nextBtn" @click="changePage(currentPage - 1)"
                            :disabled="currentPage === 1">Previous</button>
                        <span class="mt-2 fw-bold">Page {{ currentPage }} of {{ lastPage }}</span>
                        <button class="preBtn" @click="changePage(currentPage + 1)"
                            :disabled="currentPage === lastPage">Next</button>
                    </div>

                </div>



            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import { apiUrl, appUrl } from "../../../../globalVariables";
import logo from "../../../../assets/image/logo.png";

export default {
    data() {
        return {
            logo,
            loading: false,
            programs: [],
            degrees: [],
            languages: [],
            departments: [],
            universities: [],
            sections: [],
            states: [],
            cities: [],
            selectedFilters: {
                degree: "",
                language: "",
                intake: "",
                department: "",
                university: "",
                state: "",
                city: "",
            },
            selectedUniversity: "",
            selectedCountry: "",
            selectedDegree: "",
            currentPage: 1,
            lastPage: 1,
        };
    },

    computed: {
        programsWithParsedData() {
            return this.programs.map((program) => {
                try {
                    if (program.university?.display_data) {
                        parsedDisplayData = JSON.parse(program.university.display_data);
                    }
                } catch (error) {
                    console.error("Error parsing display_data:", error);
                }
                return {
                    ...program,
                    parsedDisplayData,
                };
            });
        },

        filteredPrograms() {
            return this.programs.filter((program) => {
                // Match country
                const matchesCountry =
                    !this.selectedCountry ||
                    program.university?.country_id == this.selectedCountry;

                // Match university
                const matchesUniversity =
                    !this.selectedUniversity ||
                    program.university_id == this.selectedUniversity;

                // Match degree
                const matchesDegree =
                    !this.selectedDegree ||
                    program.degree_id == this.selectedDegree;

                // Return true only if all selected filters match
                return matchesCountry && matchesUniversity && matchesDegree &&
                    (!this.selectedFilters.degree || program.degree_id === this.selectedFilters.degree) &&
                    (!this.selectedFilters.language || program.language_id === this.selectedFilters.language) &&
                    (!this.selectedFilters.intake || program.section_id === this.selectedFilters.intake) &&
                    (!this.selectedFilters.department || program.department_id === this.selectedFilters.department) &&
                    (!this.selectedFilters.university || program.university_id === this.selectedFilters.university) &&
                    (!this.selectedFilters.city || program.university?.city_id === this.selectedFilters.city) &&
                    (!this.selectedFilters.city || program.university?.city_id === this.selectedFilters.city);
            });
        },
    },

    mounted() {
        this.getCourseList();
        this.readRouteParams();
    },

    methods: {
        applyButton(id) {

        window.location.href = `${appUrl}apply-admission/${id}`;
        // this.$router.push(`/apply-admission/${id}`);
        },
        readRouteParams() {
            const { country, university, degree } = this.$route.query;
            this.selectedCountry = country || "";
            this.selectedUniversity = university || "";
            this.selectedDegree = degree || "";
        },

        async getCourseList(page = 1) {
            try {
                this.loading = true;
                const token = localStorage.getItem("token");
                const response = await axios.get(`${apiUrl}course_list?page=${page}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.programs = response.data.courses.data;
                this.degrees = response.data.degrees;
                this.languages = response.data.languages;
                this.departments = response.data.departments;
                this.universities = response.data.universities;
                this.sections = response.data.sections;
                this.states = response.data.states;
                this.cities = response.data.cities;
                console.log(response.data);

                this.currentPage = response.data.courses.current_page;
                this.lastPage = response.data.courses.last_page;
            } catch (error) {
                console.error("Error fetching configurations:", error);
            } finally {
                this.loading = false;
            }
        },

        getImageUrl(item) {
            return `${appUrl}upload/university/${item}`;
        },

        navigateToCourse(courseId) {
            this.$router.push({ path: `/course/${courseId}` });
        },

        changePage(page) {
            this.getCourseList(page);
        },
    },
};
</script>

<style scoped>
.pagination {
    margin-left: 73px;
    margin-top: 10px;
}

.nextBtn {
    background-color: #824fa3;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 20px;
    margin-right: 20px;
}

.preBtn {
    background-color: #824fa3;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 20px;
    margin-left: 20px;
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

.apply_btn {
    background-color: #f39c12;
    color: white;
    padding: 6px 10px;
    border: none;
    border-radius: 5px;
}

.apply_btn:hover {
    background-color: #d58708;
}

.degree {
    position: absolute;
    top: 0;
    right: 0;
    color: white !important;
    background-color: #824fa3;
}

.university_logo {
    width: 130px;
    height: 130px;
    margin-left: 20px;
    position: absolute;
    top: 0;
    left: -20px;
    background-color: white;
    border-radius: 50%;
}

.university_image {
    height: 289px;
    width: 317px;
    margin-top: -15px;
    margin-left: -15px;
    border-radius: 5px;
}

.main_form {
    margin-top: 55px;
}

.inner_section {
    background-color: #f3f3f3;
    padding: 68px 0 24px;
}

.para {
    color: #824fa3;
    font-weight: bold;
}

.layout {
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

@media (max-width: 400px) {
    .cards-section {
        gap: 25px !important;
    }
}

@media (max-width: 1100px) {
    .layout {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 30px;
    }

    .card_university {
        position: relative;
        display: flex;
        flex-direction: column;
        /* gap: 20px; */
        border: 1px solid #824fa3 !important;
        border-radius: 5px !important;
        padding: 15px !important;
        background: #fff !important;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) !important;
        width: 340px !important;
        height: 650px !important;
        margin-left: 1px !important;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .pagination {
        margin-left: 20px !important;
    }

    .university_image {
        width: 339px;
        height: 260px;
    }

    .intake {
        display: flex !important;
        flex-direction: column;
    }

    .cards-section {
        gap: 25px !important;
        margin: 1px auto;
    }
}

.card_university:hover {
    box-shadow: 2px 2px 40px rgba(29, 23, 77, 0.1);
    transform: scale(1.01);
}

.form-box {
    flex: 1;
    max-width: 330px;
    background: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    height: 745px;
    margin: 0px auto;
}

.form-box h3 {
    margin-bottom: 20px;
    font-size: 1.2rem;
    color: #333;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-size: 0.9rem;
    color: #555;
    display: block;
    margin-bottom: 5px;
}

input,
select {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 0.9rem;
}

.btn-find {
    width: 100%;
    background: #824fa3;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
}

.btn-reset {
    width: 100%;
    background: transparent;
    color: #824fa3;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    margin-top: 10px;
    cursor: pointer;
}

.cards-section {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.card_university {
    position: relative;
    display: flex;
    justify-content: space-between;
    border: 1px solid #824fa3;
    border-radius: 5px;
    padding: 15px;
    background: #fff;
    width: 872px;
    margin-left: auto;
    height: 290px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card_header {
    margin-bottom: 15px;
    width: 300px;
    position: relative;
}

.card-header img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
}

.card-body h4 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #012169;
}

.card-body p {
    margin: 5px 0;
    /* color: #555; */
}

.learn-more {
    margin-top: 10px;
    color: #824fa3;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
}
</style>
