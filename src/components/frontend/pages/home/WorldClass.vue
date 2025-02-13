<template>
    <div class="container">
        <h2 class="text-center mb-4 fw-bold title" style="margin-top: 70px; font-size: 30px;">
            Discover Wor<span class="borderStyle">ld Cla</span>ss Universities
        </h2>
        <div class="row justify-content-center card-row">
            <!-- Card Container -->
            <div v-for="(item, index) in universities" :key="index" class="card_university">
                <div class="card_content">
                    <img :src="getImageUrl(item.banner_image)" class="card_image" alt="Country Image" />
                    <img :src="getImageUrl(item.image)" class="logo_image" alt="" />
                    <div class="card_content_text">
                        <p class="mt-2">{{ item.course_count }} programs</p>
                        <h5 style="font-size: 17px" class="mt-1 fw-bold">{{ item.name }}</h5>
                        <p style="font-size: 14px" class="mt-2">{{ item.address }}</p>
                    </div>
                </div>
                <div class="card_hover_content">
                    <h4 class="fw-bold mb-5">{{ item.name || "Explore" }}</h4>
                    <router-link :to="{ path: `/university/${item.id}` }">
                        <div style="cursor: pointer;" class="icon"><i class="fa-solid fa-arrow-right"></i></div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="text-center mt-5">
            <router-link to="/all-country"><button class="viewAllButton">
                    View all universities <i class="fa-solid fa-arrow-right ms-2"></i>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { apiUrl, appUrl } from "../../../../globalVariables";

export default {
    data() {
        return {
            // universities: [],
            // program: 0,
        };
    },
    props: {
        universities: {
            type: Array,
            required: true,
        },
        program: {
            type: Number,
            required: true,
        },
    },
    mounted() {
        // this.getHomeContent();
    },

    methods: {
        async getHomeContent() {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${apiUrl}home`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.universities = response.data.data.university_list;
                this.program = response.data.data.course;

                console.log(this.universities);
            } catch (error) {
                console.error("Error fetching home content:", error);
            }
        },

        getImageUrl(item) {
            return `${appUrl}upload/university/${item}`;
        },

        singleUniversity(id) {
            this.$router.push(`/university/${id}`)
        }
    },
};
</script>

<style scoped>
.borderStyle {
    border-bottom: 5px solid #824fa3;
    padding-bottom: 8px;
}

.viewAllButton {
    background-color: #f39c12;
    border: none;
    border-radius: 3px;
    padding: 15px 35px;
    color: white;
    font-size: 18px;
    font-weight: bold;
}

.viewAllButton:hover {
    background-color: #d58708;
}

.card_content_text {
    height: 140px;
}

@media (max-width: 1247px) {
    .card_university {
        width: 300px !important;
        margin: 10px;
        border-radius: 5px;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        height: 290px;
        position: relative;
        background-color: white;
        transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        /* box-shadow: 1px 2px 1px rgb(235, 233, 233); */
        box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    }

    .card_image {
        width: 300px !important;
        height: 132px !important;
        margin: auto;
        margin-top: -21px;
    }
    .title{
        font-size: 20px !important;
        margin-top: 20px !important;
        width: 250px;
        margin: 0px auto;
    }
    .borderStyle{
        border: none !important;
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
    /* box-shadow: 1px 2px 1px rgb(235, 233, 233); */
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
}

.card_university:hover {
    background-color: #f39c12;
    color: #ffffff;
    /* transform: scale(1.01); */
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
    width: 70px;
    height: 70px;
    margin: auto;
    margin-top: -27px;
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
