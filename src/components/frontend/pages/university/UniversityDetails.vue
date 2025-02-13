<template>
    <div class="">
        <div class="main">
            <div class="">
                <img style="height: 500px;" class="w-100 bannerImage" :src="getImageUrl(university.banner_image)"
                    alt="">
            </div>
            <div class="content">
                <div class="logoUDiv">
                    <img style="border-radius: 50%;" class="logoU" :src="getImageUrl(university.image)" alt="">
                </div>

                <div class="textDiv">
                    <h4 class="fw-bold">{{ university.name }}</h4>
                    <p> <router-link to="/" class="text-white">Home</router-link> .Find a university</p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="navList">
            <div style="height: 55px;" class="d-flex gap-4 container pt-2 navItem">
                <p v-for="(item, index) in navItems" :key="index" class="" :class="{ 'active': activeTab === item }"
                    @click="setActiveTab(item)">
                    {{ item }}
                </p>
            </div>
        </div>

        <div class="container">
            <div class="row mt-5">
                <div class="col-md-9 col-12">
                    <!-- Dynamic Content Rendering -->
                    <!-- <div v-for="(item, index) in navItems" 
                        :key="index" 
                        v-if="activeTab === item" 
                        class="tabContent">
                        {{ item }}
                    </div> -->

                    <div v-if="activeTab === 'Program'">
                        <div class="row gx-3 gy-3 mt-2">
                            <div v-for="(item, index) in programs" :key="index" style=""
                                class="col-12 col-md-6 col-lg-4 col-auto mt-sm-3 mt-md-4">
                                <div @click="handleClick(item.id)" class="single-course">
                                    <div>
                                        <img class="card_img" :src="getImageUrl(item?.university?.banner_image)"
                                            alt="" />
                                    </div>

                                    <div class="badge_s">
                                        <p class="badge bg-info">{{ item?.department?.name }}</p>
                                        <p class="badge bg-primary ms-2">{{ item?.degree?.name }}</p>
                                    </div>

                                    <div class="px-3">
                                        <div class="d-flex justify-content-between mt-3">
                                            <div class="d-flex gap-2">
                                                <i class="fa-solid fa-calendar mt-1"></i>
                                                <p>{{ item.application_deadline }}</p>
                                            </div>
                                            <div class="d-flex gap-2">
                                                <i class="fa-solid fa-clock mt-1"></i>
                                                <p>{{ item.course_duration }} year</p>
                                            </div>
                                        </div>

                                        <h5 style="height: 75px; font-size: 18px" class="mt-3 fw-bold">
                                            {{ item.name }}
                                        </h5>

                                        <div class="mt-3">
                                            <div class="d-flex gap-3">
                                                <i class="fa-solid fa-chart-simple mt-1"></i>
                                                <p style="font-size: 14px">
                                                    {{ truncateText(item?.university?.name, 30) }}
                                                </p>
                                            </div>
                                            <div class="d-flex gap-3">
                                                <i class="fa-solid fa-chart-simple mt-1"></i>
                                                <p style="font-size: 14px">
                                                    Department : {{ truncateText(item?.department?.name, 20) }}
                                                </p>
                                            </div>
                                            <div class="d-flex gap-3">
                                                <i class="fa-solid fa-chart-simple mt-1"></i>
                                                <p style="font-size: 14px">
                                                    Degree : {{ truncateText(item?.degree?.name, 25) }}
                                                </p>
                                            </div>
                                        </div>

                                        <hr class="my-4" />

                                        <div class="d-flex justify-content-between">
                                            <p class="mt-2">Yearly: ${{ item.year_fee }}</p>
                                            <div>
                                                <button class="apply_btn">
                                                    Apply Now <i class="fa-solid fa-arrow-right ms-1"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="activeTab === 'About'">
                        <p v-if="university.about === null">No about</p>
                        <p class="ql-editor" v-html="university.about"></p>
                    </div>

                    <div v-if="activeTab === 'Fees'">
                        <div class="col-md-5 cardFee m-3">
                            <h6 class="text-center mt-2 fw-bold">Fees Structure</h6>

                            <div style="margin-top: 2.5rem;">
                                <!-- Degrees and Tuition Fees -->
                                <div v-for="(degree, index) in university.fees_structure?.degrees" :key="index"
                                    class="mb-3">
                                    <h6 class="fw-bold">{{ degree }}</h6>
                                    <p style="display: flex;justify-content: space-between;">
                                        Tuition Fee:
                                        <span
                                            v-if="university.fees_structure?.tuition_fees_1[index] && university.fees_structure?.tuition_fees_2[index]">
                                            ${{ university.fees_structure.tuition_fees_1[index] }} – ${{
                                                university.fees_structure.tuition_fees_2[index] }}
                                        </span>
                                        <span v-else>
                                            N/A
                                        </span>
                                    </p>
                                </div>

                                <!-- Non-Degree Additional Fees -->
                                <div>
                                    <p style="display: flex;justify-content: space-between;">
                                        Accommodation Fees:
                                        <span>${{ university.fees_structure.accommodation_fees_1 }} – ${{
                                            university.fees_structure.accommodation_fees_2 }}</span>
                                    </p>
                                    <p style="display: flex;justify-content: space-between;">Insurance Fee: <span>${{
                                        university.fees_structure.insurance_fee }}</span></p>
                                    <p style="display: flex;justify-content: space-between;">Visa Extension Fee:
                                        <span>${{ university.fees_structure.visa_extension_fee }}</span>
                                    </p>
                                    <p style="display: flex;justify-content: space-between;">Medical In China Fee:
                                        <span>${{ university.fees_structure.medical_in_china_fee
                                            }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div v-if="activeTab === 'Accomadation'">
                        <p v-if="university.accommodation === null">No accommodation</p>
                        <p class="ql-editor" v-html="university.accommodation"></p>
                    </div>

                    <div v-if="activeTab === 'Admission'">
                        <p v-if="university.admissions_process === null">No admissions process</p>
                        <p class="ql-editor" v-html="university.admissions_process"></p>
                    </div>

                    <div v-if="activeTab === 'Scholarship'">
                        <h6 class="text-center my-2 fw-bold">Scholarships</h6>
                        <div class="row justify-content-start mt-5">
                            <div v-for="(scholarship, index) in filteredScholarships" :key="index"
                                class="col-md-6 col-lg-4 mb-5">
                                <div class="main-service-card">
                                    <div class="card-body"
                                        style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                                        <img src="" alt="" class="img-fluid" />
                                        <p class="text-muted fw-bold title">{{ scholarship.title }}</p>

                                        <div style="width: 100%">
                                            <div class="d-flex justify-content-between fs-08">
                                                <span class="text-muted text-start mb-0">Tuition Fee:</span>
                                                <span class="text-muted text-end fw-bold mb-0">
                                                    {{ getFeeLabel(scholarship.tuition_fee) }}
                                                </span>
                                            </div>
                                            <div class="d-flex justify-content-between fs-08 mt-2">
                                                <span class="text-muted text-start mb-0">Accommodation Fee:</span>
                                                <span class="text-muted text-end fw-bold mb-0">
                                                    {{ getFeeLabel(scholarship.accommodation_fee) }}
                                                </span>
                                            </div>
                                            <div class="d-flex justify-content-between fs-08 mt-2">
                                                <span class="text-muted text-start mb-0">Insurance Fee:</span>
                                                <span class="text-muted text-end fw-bold mb-0">
                                                    {{ getFeeLabel(scholarship.insurance_fee) }}
                                                </span>
                                            </div>
                                            <div class="d-flex justify-content-between fs-08 mt-2">
                                                <span class="text-muted text-start mb-0">Stipend Monthly:</span>
                                                <span class="text-muted text-end fw-bold mb-0">
                                                    {{ scholarship.stipend_monthly || 'N/A' }}
                                                </span>
                                            </div>
                                            <div class="d-flex justify-content-between fs-08 mt-2">
                                                <span class="text-muted text-start mb-0">Stipend Yearly:</span>
                                                <span class="text-muted text-end fw-bold mb-0">
                                                    {{ scholarship.stipend_yearly || 'N/A' }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div v-if="activeTab === 'FAQ'" class="university-body__section text section" id="faq-section">
                        <h3 class="university-body__section-heading text-center mt-2 fw-bold">FAQ</h3>
                        <div v-if="university.universityFAQ && university.universityFAQ.length > 0"
                            class="university-body__section-inner">
                            <div class="university-body__section-content">
                                <ul class="faq">
                                    <li v-for="(item, index) in university.universityFAQ" :key="index"
                                        v-if="item.answer">
                                        <div class="question fw-bold">{{ item.question }}</div>
                                        <div class="answer">{{ item.answer }}</div>
                                        <br />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div v-else>
                            <p class="text-center text-muted">No FAQs available.</p>
                        </div>
                    </div>


                    <div v-if="activeTab === 'Gallery'">
                        <h6 class="mb-4 fw-bold">Image</h6>
                        <div v-if="hasImages">
                            <div class="gallery">
                                <a v-for="(img, index) in imageGallery" :key="index" :href="img" target="_blank"
                                    class="single-gallery-image" style="cursor: pointer">
                                    <img :src="img" class="img-fluid authorization_image"
                                        :alt="'Gallery Image ' + index" />
                                </a>
                            </div>
                        </div>
                        <div v-else>
                            <h4 class="company-details-title py-2 fw-bold text-center">
                                No Image Found!
                            </h4>
                        </div>
                    </div>

                </div>

                <div class="col-md-3 col-12">
                    <div class="sidebar">
                        <div class="p-3">
                            <p>Institute</p>
                            <p style="color: #824fa3;">{{ university.name }}</p>
                        </div>
                        <hr style="background-color: black;width: 90%; margin: auto;" class="">
                        <div class="p-3">
                            <p>Location</p>
                            <p style="color: #824fa3;">{{ university.address }}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>

    <LatestUpdate></LatestUpdate>

</template>

<script>
import axios from 'axios';
import { apiUrl, appUrl } from '../../../../globalVariables';
import LatestUpdate from '../home/LatestUpdate.vue';
import "quill/dist/quill.snow.css";

export default {
    data() {
        return {
            university: {},
            programs: [],
            navItems: [
                'About',
                'Program',
                'Fees',
                'Accomadation',
                'Admission',
                'Scholarship',
                'FAQ',
                'Gallery'
            ],
            activeTab: 'About',
            scholarships: [],
            imageGallery: [],
            hasImages: false,
        };
    },

    components: {
        LatestUpdate,
    },

    computed: {
        filteredScholarships() {
            // Parse the stringified scholarships array into an actual array
            const universityScholarships = JSON.parse(this.university.scholarships);

            if (Array.isArray(universityScholarships) && universityScholarships.length > 0) {
                // Filter the scholarships based on the parsed array
                const filtered = this.scholarships.filter((scholarship) =>
                    universityScholarships.includes(String(scholarship.id))
                );
                console.log('Filtered Scholarships:', filtered);
                return filtered;
            }

            return [];
        },
    },


    mounted() {
        this.getUniversityList();
    },

    methods: {

        getFeeLabel(fee) {
            if (fee === 1) {
                return "Free";
            } else if (fee === 0 || fee === null || fee === undefined) {
                return "N/A";
            } else {
                return `$${fee}`; // Modify for currency if required
            }
        },
        async getUniversityList() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}list/university-details/${this.$route.params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.university = response.data.data.university;
                this.programs = response.data.data.university_courses;
                this.scholarships = response.data.data.scholarships;
                console.log(this.scholarships);

                if (response.data.data.university.fees_structure) {
                    try {
                        response.data.data.university.fees_structure = JSON.parse(response.data.data.university.fees_structure);
                    } catch (error) {
                        console.error("Error parsing fees_structure JSON:", error);
                    }
                }

                // image gallery 

                if (this.university.image_gallery) {
                    try {
                        const parsedGallery = JSON.parse(this.university.image_gallery);

                        // Extract all image URLs into a flat array
                        this.imageGallery = Object.values(parsedGallery)
                            .flatMap((gallery) =>
                                gallery.images
                                    ? Object.values(gallery.images) // Extract all images
                                    : []
                            )
                            .filter((img) => img); // Filter out empty or invalid entries

                        this.hasImages = this.imageGallery.length > 0;
                    } catch (error) {
                        console.error("Error parsing image_gallery JSON:", error);
                        this.imageGallery = [];
                        this.hasImages = false;
                    }
                } else {
                    this.imageGallery = [];
                    this.hasImages = false;
                }

                console.log(this.imageGallery);


                console.log(this.university);
                console.log(this.programs);
                console.log(this.scholarships);
            } catch (error) {
                console.error('Error fetching configurations:', error);
            }
        },

        getImageUrl(item) {
            return `${appUrl}upload/university/${item}`;
        },
        setActiveTab(tab) {
            this.activeTab = tab;
        },
        truncateText(text, maxLength) {
            if (!text) return "";
            return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
        },
    }
};
</script>

<style scoped>
.ql-editor {
    max-width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
}

.ql-editor figure {
    max-width: 100% !important;
    overflow: hidden;
    /* Prevents content overflow */
    text-align: center;
    /* Optional: Centers the image */
}

.ql-editor .image img {
    max-width: 100% !important;
    height: 100% !important;
    display: block;
}

@media (max-width: 1100px) {
    .editor {
        width: 300px !important;
    }

    .navList {
        width: 350px;
        margin: auto;
        overflow: auto;
        height: 59px;
    }

    .navList p {
        width: 190px !important;
        font-size: 13px !important;
    }

    .navList p.active {
        height: 31px !important;
    }

    .cardFee {
        width: 337px !important;
        margin: 0px auto !important;
    }

    .content {
        display: flex;
        flex-direction: column;
    }


    .logoUDiv {
        bottom: 163px !important;
        left: 30px !important;
    }

    .textDiv {
        bottom: 23px !important;
        left: 32px !important;
    }
}

.main {
    position: relative;
}

.main::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(1turn, #824fa3, rgba(1, 33, 105, 0.4) 68.75%, rgba(1, 33, 105, 0));
    z-index: 1;
}

.main-service-card {
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
}

.cardFee {
    width: 100%;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    height: 545px;
    position: relative;
    background-color: #824fa3;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    padding: 25px;
    color: #ffffff;
}

.sidebar {
    background-color: #f6faf7;
    height: 250px;
}

.sidebar p {
    font-size: 17px;
    font-weight: bold;
}

.main {
    position: relative;
}

.logoUDiv {
    position: absolute;
    bottom: 59px;
    left: 131px;
    background: white;
    border-radius: 50%;
    z-index: 999;
}

.logoU {
    width: 150px;
}

.textDiv {
    position: absolute;
    bottom: 59px;
    left: 331px;
    color: white;
    z-index: 999;

}

/* .content{
    position: relative;
    z-index: 1000;
} */

.navList {
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
}

.navList p {
    font-size: 17px;
    cursor: pointer;
    padding-bottom: 10px;
    transition: color 0.3s, border-bottom 0.3s;

}

.navList p:hover {
    color: #824fa3;
}

.navList p.active {
    border-bottom: 3px solid #824fa3;
    font-weight: bold;
    color: #824fa3;
    height: 45px;
}


.tabContent {
    margin-top: 20px;
    font-size: 16px;
    font-weight: normal;
}

.badge_s {
    position: absolute;
    top: 4px;
    left: 8px;
}

.course_section {
    margin-top: 70px;
}

.card_img {
    width: 100%;
    border-radius: 5px;
    height: 140px;
}

.single-course {
    position: relative;
    border: 0.5px solid rgb(245, 242, 242);
    width: 322px;
}

.single-course:hover {
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
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
</style>
