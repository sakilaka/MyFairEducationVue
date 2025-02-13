<template>
    <div class="mainHead" style="margin-top: 110px;">
        <div>
            <img class="bannerImage" :src="getImageUrl(program?.university?.banner_image)" alt="">
        </div>

        <div class="info_container">
            <h1 class="fw-bold pName">{{ program.name }}</h1>
            <div class="mt-3 d-flex">
                <img class="logo_" :src="getImageUrl(program?.university?.image)" alt="">
                <div class="d-flex justify-content-between w-100 topCard">
                    <div class="d-flex gap-2 ms-3 info">
                        <div class="sideMargin">
                            <p>University</p>
                            <p class="fw-bold fontSize">{{ program?.university?.name }}</p>
                        </div>
                        <div class="ms-2 sideMargin">
                            <p>Degree</p>
                            <p class="fw-bold fontSize">{{ program?.degree?.name }}</p>
                        </div>
                        <div class="ms-2 sideMargin">
                            <p>Department</p>
                            <p class="fw-bold fontSize">{{ program?.department?.name }}</p>
                        </div>
                        <div class="ms-2 sideMargin">
                            <p>Duration</p>
                            <p class="fw-bold fontSize">{{ program?.course_duration }} year</p>
                        </div>
                    </div>

                    <div style="margin-top: -30px;" class="yearlyFee">
                        <div>
                            <p class="ms-3">Yearly fee : <span class="fee">${{ program.year_fee }}</span></p>
                            <!-- <p class="fee"> <span class="free">Free</span> ${{ program.year_fee }}</p> -->
                        </div>
                        <div class="ms-3 mt-2">
                            <button @click="applyButton(program.id)" class="btn_Apply">Apply now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="width: 95%; margin:auto; margin-top: 70px;" class="row">
            <!-- Tabs Section -->
            <div class="col-md-9">
                <div class="row tabs-container">
                    <div class="col-md-3 nav nav-tabs sideSection">
                        <li v-for="(tab, index) in tabs" :key="index" class="nav-item">
                            <a class="nav-link" :class="{ active: activeTab === index }" href="#"
                                @click.prevent="setActiveTab(index)">
                                <i :class="tab.icon" class="me-3"></i> {{ tab.label }}
                            </a>
                        </li>
                    </div>
                    <div class="col-md-9 tab-content">
                        <div v-for="(tab, tabIndex) in tabs" :key="tabIndex" v-show="activeTab === tabIndex"
                            class="tab-pane active">
                            <h2 class="fw-bold">{{ tab.label }}</h2>
                            <p class="ql-editor" v-if="tabIndex !== 3" v-html="tab.content"></p>

                            <div v-if="tabIndex === 3">
                                <div class="row p-1 mt-3 ms-2">
                                    <div class="col-md-5 col-12 cardFee m-3">
                                        <h6 class="text-center mt-2 fw-bold">Yearly original fee</h6>

                                        <div v-if="tab.content.scholarship_id === 'free'">
                                            Full Scholarship
                                        </div>

                                        <div style="margin-top: 3.5rem;" class="">
                                            <div class="d-flex justify-content-between">
                                                <p>Tution fee :</p>
                                                <p class="fw-bold">${{ tab.content.scholarship_id === 'free' ? 0 :
                                                    tab.content.year_fee }}</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Accommodation Fee :</p>
                                                <p class="fw-bold">${{ tab.content.scholarship_id === 'free' ? 0 :
                                                    tab.content.accommodation_fee }}</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Insurance Fee :</p>
                                                <p class="fw-bold">${{ tab.content.scholarship_id === 'free' ? 0 :
                                                    tab.content.insurance_fee }}</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Visa Extension :</p>
                                                <p class="fw-bold">${{ tab.content.scholarship_id === 'free' ? 0 :
                                                    tab.content.visa_extension_fee }}</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Medical In China :</p>
                                                <p class="fw-bold">${{ tab.content.scholarship_id === 'free' ? 0 :
                                                    tab.content.medical_in_china_fee }}</p>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="col-md-5 col-12 cardFeeOther m-3">
                                        <h6 class="text-center mt-2 fw-bold">After Scolarship fee</h6>
                                        <div style="margin-top: 3.5rem;" class="">
                                            <div class="d-flex justify-content-between">
                                                <p>Tution fee :</p>
                                                <p class="fw-bold">$300000</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Accommodation Fee :</p>
                                                <p class="fw-bold">$300000</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Insurance Fee :</p>
                                                <p class="fw-bold">$300000</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Visa Extension :</p>
                                                <p class="fw-bold">$300000</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Medical In China :</p>
                                                <p class="fw-bold">$300000</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-5 col-12 m-3">

                                    </div>

                                    <div class="col-md-5 col-12 cardFeeOther m-3">
                                        <h6 class="text-center mt-2 fw-bold">After Scolarship fee</h6>
                                        <div style="margin-top: 3.5rem;" class="">
                                            <div class="d-flex justify-content-between">
                                                <p>Tution fee :</p>
                                                <p class="fw-bold">$300000</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Accommodation Fee :</p>
                                                <p class="fw-bold">$300000</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Insurance Fee :</p>
                                                <p class="fw-bold">$300000</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Visa Extension :</p>
                                                <p class="fw-bold">$300000</p>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <p>Medical In China :</p>
                                                <p class="fw-bold">$300000</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div v-if="tabIndex === 4">
                                4
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Course Info Section -->
            <div class="col-md-3">
                <div class="course-info">
                    <h3>Course Info</h3>
                    <ul>
                        <li><strong>Application Deadline:</strong> {{ program.application_deadline }}</li>
                        <hr>
                        <li><strong>Application Fees:</strong> ${{ program.application_charge }}</li>
                        <hr>
                        <li><strong>Tuition Fees (Yearly):</strong> ${{ program.tuition_fees }}</li>
                        <hr>
                        <li><strong>Accommodation Fees (Yearly):</strong> ${{ program.accommodation_fee }}</li>
                        <hr>
                        <li><strong>Stipend (Monthly):</strong> {{ program.stipend }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <LatestUpdate></LatestUpdate>
    </div>

</template>

<script>
import axios from 'axios';
import { apiUrl, appUrl } from '../../../../globalVariables';
import LatestUpdate from '../home/LatestUpdate.vue';
import "quill/dist/quill.snow.css";

export default {
    data() {
        return {
            program: {},
            tabs: [],
            activeTab: 0
        }
    },

    components: {
        LatestUpdate,
    },

    mounted() {
        this.getCourseList();
    },

    methods: {
        applyButton(id) {
            console.log(id);
            
            window.location.href = `${appUrl}apply-admission/${id}`;
            // this.$router.push(`/apply-admission/${id}`);
        },

        async getCourseList() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}single_course/${this.$route.params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.program = response.data.data.courses;
                this.updateTabs();
                console.log(this.program);

            } catch (error) {
                console.error('Error fetching configurations:', error);
            }
        },

        updateTabs() {
            this.tabs = [
                { label: "Overview", icon: "fas fa-info-circle", content: this.program.about || "No overview available." },
                { label: "Accommodation", icon: "fas fa-home", content: this.program?.university?.accommodation || "No accommodation available." },
                { label: "Pre-Requisites", icon: "fas fa-list", content: this.program.requisites || "No requisites available." },
                { label: "Costs & Scholarships", icon: "fas fa-dollar-sign", content: this.program },
                { label: "Gallery", icon: "fas fa-images", content: "" }
            ];
        },

        getImageUrl(item) {
            return `${appUrl}upload/university/${item}`;
        },

        setActiveTab(index) {
            this.activeTab = index;
            console.log(this.activeTab);

        },
    },
}
</script>


<style scoped>
@media (max-width: 400px) {
    .pName {
        font-size: 23px !important;
    }
    .sideMargin p{
        line-height: 10px !important;
    }
}
@media (max-width: 1247px) {
    .mainHead{
        margin-top: 60px !important;
    }
    .topCard{
        display: flex !important;
        flex-direction: column;
        gap: 0 !important;
    }
    .fontSize{
        font-size: 11px;
    }
    .sideMargin{
        margin-left: 2px !important;
    }
    .sideMargin p{
        line-height: 9px;
    }
    .cardFee {
        width: 50% !important;
        margin: 10px;
        border-radius: 5px;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        height: 325px;
        position: relative;
        background-color: white;
        transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
        padding: 25px;
        margin-left: 0px !important;
    }
    .cardFeeOther{
        margin-left: 0px !important;
    }

    .info_container {
        height: 450px !important;
    }

    .info {
        display: flex !important;
        flex-direction: column;
        gap: 0 !important;
    }

    .pName {
        font-size: 25px;
    }

    .yearlyFee {
        margin-top: 10px !important;
    }

    /* .nav-tabs .nav-link.active{
        width: 200px !important;
    } */

    .sideSection {
        height: 400px !important;
        width: 100%;
    }

    .nav-tabs .nav-item {
        width: 100%;
    }
    .btn_Apply{
        padding: 10px 20px !important;
        font-size: 14px;
    }
}

.cardFee {
    width: 18%;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    height: 325px;
    position: relative;
    background-color: #824fa3;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    /* box-shadow: 1px 2px 1px rgb(235, 233, 233); */
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    padding: 25px;
    color: #ffffff;
}

.cardFeeOther {
    width: 18%;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    height: 325px;
    position: relative;
    background-color: white;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    /* box-shadow: 1px 2px 1px rgb(235, 233, 233); */
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    padding: 25px;
}

/* .cardFee:hover {
    background-color: #824fa3;
    color: #ffffff;
    transform: scale(1.01);
} */

/* tab  */
.afterSclfee {
    background-color: red;
    color: white;
    border-radius: 10px;
    padding: 15px;
}

.yearlyfee {
    background-color: #824fa3;
    color: white;
    border-radius: 10px;
    padding: 15px;
}

.sideSection {
    height: 300px;
}

.tab-content {
    height: 500px;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
}

.tab-content::-webkit-scrollbar {
    width: 5px;
}

.tab-content::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
}

.tab-content::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

.tabs-container {
    margin-bottom: 20px;
}

.nav-tabs {
    /* box-shadow: 0 0 7px -3px rgba(34, 40, 30); */
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    padding: 10px;
}

.nav-tabs .nav-link:hover {
    border: none;
    color: #824fa3;
}

.nav-tabs .nav-item {
    margin-bottom: -1px;
}

.nav-tabs .nav-link {
    color: #555;
}

.nav-tabs .nav-link.active {
    border: none;
    color: white;
    margin: 10px 0px;
    background-color: #824fa3;
    width: 250px;
    border-radius: 5px;
}

.course-info {
    padding: 20px;
    border-radius: 5px;
    /* box-shadow: 0 0 7px -3px rgba(34, 40, 30); */
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    overflow: auto;
}

.course-info h3 {
    margin-bottom: 20px;
}

.course-info ul {
    list-style: none;
    padding: 0;
}

.course-info ul li {
    margin-bottom: 10px;
}

.course-info button {
    display: block;
    width: 100%;
    margin-top: 10px;
}

/* other  */
.free {
    font-size: 18px;
}

.fee {
    font-size: 16px;
    color: #824fa3;
    font-weight: bold;
}

.btn_Apply {
    border: none;
    border-radius: 5px;
    padding: 14px 44px;
    background-color: #824fa3;
    color: white;
}

.bannerImage {
    width: 100%;
    height: 350px;
}

.logo_ {
    width: 60px;
    height: 60px;
    margin-top: 5px;
}

.info_container {
    width: 85%;
    margin: auto;
    height: 200px;
    /* box-shadow: 0 0 5px 2px rgb(188, 188, 188); */
    /* box-shadow: 0 0 7px -3px rgba(34, 40, 30); */
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    background-color: white;
    margin-top: -80px;
    position: relative;
    border-radius: 8px;
    padding: 30px;
}
</style>