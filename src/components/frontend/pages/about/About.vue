<template>
    <div>
        <div class="about-section">

            <div class="about-images">
                <div class="main-image">
                    <img :src="getImageUrl2(about.banner_image1)" alt="Main" />
                </div>
                <div class="secondary-image">
                    <img :src="getImageUrl2(about.banner_image2)" alt="Secondary" />
                </div>
            </div>

            <div class="about-content">
                <h4 class="text-muted" style="margin-bottom: -30px;">ABOUT US</h4>
                <h2 class="title">
                    <br />
                    We Provide Best <span>Education</span>
                    <br />
                    Services For You
                </h2>

                <div class="">
                    <img class="brush" :src="brush" alt="">
                </div>

                <div>
                    <div class="tabs">
                        <span :class="{ active: activeTab === 'about' }" @click="activeTab = 'about'">
                            About Mayfair
                        </span>
                        <span :class="{ active: activeTab === 'mission' }" @click="activeTab = 'mission'">
                            Our Mission
                        </span>
                        <span :class="{ active: activeTab === 'vision' }" @click="activeTab = 'vision'">
                            Our Vision
                        </span>
                    </div>

                    <p v-if="activeTab === 'about'" class="description about">
                       {{about.about}}
                    </p>
                    <p v-if="activeTab === 'mission'" class="description mission">
                        {{about.mission}}
                    </p>
                    <p v-if="activeTab === 'vision'" class="description vision">
                        {{about.vision}}
                    </p>
                </div>

                <button class="learn-more">Learn more ➜</button>
            </div>


        </div>

        <div class="service-section">
            <h3 class="service-title">Other Service we provide</h3>

            <div class="service-card-section">
                <div class="service-card">
                    <div class="text-center mt-3">
                        <img class="card_img" :src="passport" alt="">
                        <h6 class="mt-3 fw-bold">Visa Assistance</h6>
                        <p style="font-size: 13px; padding: 5px;" class="mt-3">Visa stress got you down? Mayfair
                            simplifies the process! We handle your
                            entire student visa application, so you can focus on studying.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="text-center mt-3">
                        <img class="card_img" :src="passport" alt="">
                        <h6 class="mt-3 fw-bold">Visa Assistance</h6>
                        <p style="font-size: 13px; padding: 5px;" class="mt-3">Visa stress got you down? Mayfair
                            simplifies the process! We handle your
                            entire student visa application, so you can focus on studying.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="text-center mt-3">
                        <img class="card_img" :src="passport" alt="">
                        <h6 class="mt-3 fw-bold">Visa Assistance</h6>
                        <p style="font-size: 13px; padding: 5px;" class="mt-3">Visa stress got you down? Mayfair
                            simplifies the process! We handle your
                            entire student visa application, so you can focus on studying.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="text-center mt-3">
                        <img class="card_img" :src="passport" alt="">
                        <h6 class="mt-3 fw-bold">Visa Assistance</h6>
                        <p style="font-size: 13px; padding: 5px;" class="mt-3">Visa stress got you down? Mayfair
                            simplifies the process! We handle your
                            entire student visa application, so you can focus on studying.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="text-center mt-3">
                        <img class="card_img" :src="passport" alt="">
                        <h6 class="mt-3 fw-bold">Visa Assistance</h6>
                        <p style="font-size: 13px; padding: 5px;" class="mt-3">Visa stress got you down? Mayfair
                            simplifies the process! We handle your
                            entire student visa application, so you can focus on studying.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="text-center mt-3">
                        <img class="card_img" :src="passport" alt="">
                        <h6 class="mt-3 fw-bold">Visa Assistance</h6>
                        <p style="font-size: 13px; padding: 5px;" class="mt-3">Visa stress got you down? Mayfair
                            simplifies the process! We handle your
                            entire student visa application, so you can focus on studying.</p>
                    </div>
                </div>

            </div>
        </div>

       


        <div>
            <div class="testimonial-section">
                <p class="text-center text-uppercase fw-bold" style="color: #824fa3; font-size: 14px;">Testimonial</p>
                <h4 class="fw-bold text-center">What Our Customer <span style="color: #824fa3;">says!</span></h4>
                <!-- Swiper Slider -->
                <swiper :slides-per-view="1" space-between="20" loop="true" autoplay="true" navigation pagination
                    class="mySwiper">
                    <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
                        <div class="testimonial_sec row">
                            <div class="col-md-6 col-12">
                                <img class="profile" :src="getImageUrl(testimonial.image)" alt="">
                            </div>
                            <div class="col-md-6 col-12 content">
                                <!-- <p v-html="truncatedComment"></p> -->
                                <p v-html="truncateText(testimonial.comment, 400)"></p>
                                <div class="mt-4 d-flex">
                                    <p class="fw-bold">{{ testimonial.name }}</p>
                                    <p class="ms-3 text-muted">{{ testimonial.designation }}</p>
                                </div>
                                <div class="mt-5 d-flex gap-4">
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <div class="main_meet">
            <div class="meetSection">
                <h3 class="service-title">Meet Our Team</h3>
                <p style="font-weight: 600" class="text-muted">
                    Our global Team is working for you from various locations
                </p>

                <div class="meetCardSection">
                    <!-- Card 1 -->
                    <div>
                        <div class="team-card">
                            <div class="card-image">
                                <img :src="user2" alt="Team Member">
                                <div class="overlay">
                                    <div class="share-icons">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-content">
                            <h4 class="mt-3">BALDWIN CALEB</h4>
                            <p class="role">Founder</p>
                        </div>
                    </div>
                    <div>
                        <div class="team-card">
                            <div class="card-image">
                                <img :src="user2" alt="Team Member">
                                <div class="overlay">
                                    <div class="share-icons">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-content">
                            <h4 class="mt-3">BALDWIN CALEB</h4>
                            <p class="role">Founder</p>
                        </div>
                    </div>
                    <div>
                        <div class="team-card">
                            <div class="card-image">
                                <img :src="user2" alt="Team Member">
                                <div class="overlay">
                                    <div class="share-icons">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-content">
                            <h4 class="mt-3">BALDWIN CALEB</h4>
                            <p class="role">Founder</p>
                        </div>
                    </div>
                    <div>
                        <div class="team-card">
                            <div class="card-image">
                                <img :src="user2" alt="Team Member">
                                <div class="overlay">
                                    <div class="share-icons">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-content">
                            <h4 class="mt-3">BALDWIN CALEB</h4>
                            <p class="role">Founder</p>
                        </div>
                    </div>


                    <!-- Repeat similar structure for other team members -->
                </div>
            </div>
        </div>


        <!-- <div class="latest-section">
            <h2 style="font-weight: 700; border-bottom: 3px solid #6ec1e4; padding-bottom: 5px;"
                class="text-gradient text-center">Get European Standard Service from Anywhere
            </h2>
            <hr class="hr">
            <div class="d-flex">
                <div style="margin-left: 50px;">
                    <img class="girlImage" :src="girl" alt="">
                </div>

                <div class="text-center" style="margin-left: 100px;">
                    <p style="font-size: 17px;">Latest Update</p>
                    <h3 class="mt-4 fw-bold">From our social media feed</h3>
                </div>

            </div>
        </div> -->

        <!-- <div class="billing-section">
            <div class="info">
                <h1 class="fw-bold">Billing Information</h1>
                <p><span>Bank name:</span> Swedbank</p>
                <p><span>Address:</span> Remitter’s bank, Liivalaia 8, 15040 Tallinn</p>
                <p><span>Reg. number: </span> 10060701</p>
                <p><span>Account/ IBAN number: </span> EE482200221078479947</p>
                <p><span>SWIFT code/ BIC: </span> HABAEE2X</p>
            </div>
        </div> -->
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import banner from '../../../../assets/image/about-19.webp'
import banner2 from '../../../../assets/image/about-20.webp'
import brush from '../../../../assets/image/brush.webp'
import passport from '../../../../assets/image/passport.webp'
import user from '../../../../assets/image/user.jpg'
import girl from '../../../../assets/image/girl.png'
import TestUser from '../../../../assets/image/testUser.webp'

import axios from 'axios';
import { apiUrl, appUrl } from '../../../../globalVariables';

export default {
    name: "AboutSection",

    data() {
        return {
            banner,
            banner2,
            brush,
            passport,
            user,
            girl,
            user2: "https://fastwpdemo.com/newwp/aguapure/wp-content/uploads/2021/08/team-v1-2.jpg",
            TestUser,
            activeTab: 'about',
            testimonials: [],
            about: {},
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    mounted() {
        this.getTestimonial();
        this.getAboutBanner();
    },


    methods: {
        async getTestimonial() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}testimonial`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.testimonials = response.data.data;
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching configurations:', error);
            } finally {
                this.loading = false;
            }
        },

        async getAboutBanner() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}about-us`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.about = response.data.data.about;
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching configurations:', error);
            } finally {
                this.loading = false;
            }
        },
        getImageUrl(item) {
            return `${appUrl}upload/testimonial/${item}`;
        },
        getImageUrl2(item) {
            return `${appUrl}${item}`;
        },
        truncateText(text, maxLength) {
            if (!text) return "";
            return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
        },
    },


};
</script>


<style scoped>
@media (max-width: 1100px) {
    .about-section {
        display: flex !important;
        flex-direction: column;
    }

    .about-content {
        width: 350px;
    }

    .title {
        width: 315px;
        font-size: 1.5rem !important;
    }

    .description {
        width: 330px !important;
        height: 185px !important;
    }

    .testimonial-section {
        height: 1000px !important;
    }
}

.content {
    margin-top: 10px;
}

.tabs {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    cursor: pointer;
}

.tabs span {
    font-size: 1rem;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.tabs span.active {
    font-weight: bold;
    border-bottom: 2px solid #000;
}

.description {
    font-size: 1rem;
    color: #333;
    height: 100px;
}

.fa-brands {
    border-radius: 5px;
    padding: 5px;
    border: 0.5px solid rgb(182, 181, 181);
}

.profile {
    width: 80%;
    height: 390px;
}

.info {
    border-left: 5px solid black;
    margin-left: 10px;
    padding-left: 10px;
}

.info span {
    font-weight: bold;
}

.billing-section {
    width: 70%;
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    height: 300px;
    margin: auto;
    margin-top: 60px !important;
}

.text-gradient {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    background: linear-gradient(to right,
            #f45156,
            #f67856,
            #fd63d1,
            #86b1f7,
            #4abff5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}



.girlImage {
    width: 500px;
    height: 500px;
}

.latest-section {
    width: 75%;
    margin: auto;
    margin-top: 70px;
}



.meetSection {
    width: 80%;
    margin: auto;
    margin-top: 40px !important;
}

/* .main_meet{
    background-color: #8f57b5;
    padding: 20px;
} */

.meetCardSection {
    width: 100%;
    margin: auto;
    margin-top: 40px !important;
    display: flex;
    flex-wrap: wrap;
    gap: 30px 25px;
    justify-content: center;
}

.team-card {
    position: relative;
    width: 270px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.team-card:hover {
    transform: scale(1.05);
}

.card-image {
    position: relative;
    overflow: hidden;
}

.card-image img {
    width: 270px;
    height: 270px;
    display: block;
    transition: all 0.3s;
}

.card-image .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s;
}

.card-image:hover img {
    transform: scale(1.1);
}

.card-image:hover .overlay {
    opacity: 1;
}

.share-icons {
    display: flex;
    gap: 15px;
}

.share-icons a {
    color: white;
    font-size: 18px;
    transition: transform 0.3s, color 0.3s;
}

.share-icons a:hover {
    transform: scale(1.2);
    color: #00aced;
}

.card-content {
    background: #fff;
    text-align: center;
    padding: 15px 10px;
    width: 200px;
    margin: auto;
    box-shadow: 0px 0px 30px rgba(10, 4, 58, 0.06);
    margin-top: -30px;
    position: relative;
    border-radius: 10px;
}

.card-content h4 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
}

.card-content .role {
    color: #007bff;
    font-size: 15px;
    margin-top: 5px;
}

.testimonial_sec {
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    margin-top: 30px !important;
    max-width: 1000px;
    margin: auto;
}


.testimonial-section {
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
    margin-top: 60px;
    height: 550px;
}

.profile-container {
    flex: 1;
    display: flex;
    justify-content: center;
    width: 80%;
    margin-left: 110px;
}

.meetprofile-container {
    width: 355px;
    margin: auto;
}

.profile-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.profile-hover:hover .profile-image {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.profile-hovermeet {
    text-align: center;
}

.profile-image {
    width: 325px;
    height: 318px;
    object-fit: cover;
    margin-bottom: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-top-left-radius: 30%;
}

.meetprofile-image {
    width: 170px;
    height: 318px;
    object-fit: cover;
    margin-bottom: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-hovermeet:hover .meetprofile-image {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.profile-details {
    background-color: white;
    padding: 20px;
    margin-top: -15px;
    border-radius: 5px;
}

.meetprofile-details {
    padding: 20px;
    margin-top: -15px;
    border-radius: 5px;
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
}

.meetprofile-details h3 {
    margin: 5px 0;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
}

.meetprofile-details p {
    color: #777;
    font-size: 14px;
    text-align: center;
}

.profile-details h3 {
    margin: 5px 0;
    font-size: 1.2rem;
    font-weight: bold;
}

.profile-details p {
    color: #777;
    font-size: 14px;
    text-align: center;
}

.testimonial-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

}

.testimonial-box {
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    text-align: center;
    background-color: #fc8b7a;
    color: white;
    height: 250px;
    width: 700px;
    margin-top: 50px;
}

.quote-icon {
    font-size: 5rem;
    color: white;
    margin-bottom: -38px;
}

.testimonial-text {
    font-size: 14px;
    color: white;
}

.rating-stars {
    font-size: 1.2rem;
    color: white;
}

.footer-details h3 {
    font-size: 1.2rem;
    font-weight: bold;
    font-weight: bold;

}

.footer-details {
    width: 700px;
    text-align: center;
    color: white;
}

.footer-details p {
    font-size: 13px;
    margin-top: -10px;
    font-weight: bold;
}

.card_img {
    width: 80px;
}

.service-card {
    width: 250px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    height: 260px;
    position: relative;
    background-color: white;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    box-shadow: 0px 0px 30px rgba(29, 23, 77, 0.06);
    border-radius: 10px;
    text-align: center;
    z-index: 0;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #824fa3, #955abc);
    z-index: -1;
    transition: left 0.5s ease;
}

.service-card:hover::before {
    left: 0;
}

.service-card:hover {
    color: white;
    transform: scale(1.05);
}

.service-card h6,
.service-card p {
    position: relative;
    z-index: 1;
    margin: 15px 0;
    transition: color 0.3s ease;
}

.service-card:hover h6,
.service-card:hover p {
    color: white;
}


.service-card-section {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 20px;
    margin-top: 40px;
}

.service-title {
    font-weight: 700;
    border-left: 3px solid black;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
}

.service-section {
    width: 80%;
    margin: auto;
    margin-top: 40px !important;
}

.brush {
    width: 100px;
    margin-bottom: 20px;
}

.about-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 130px;
    padding: 20px;
}

.about-content {
    flex: 1;
    padding: 20px;
    margin-top: 30px;
}

.title {
    font-size: 2.5rem;
    font-weight: bold;
    position: relative;
    display: inline-block;
}

.title .highlight {
    color: #00a86b;
    /* Highlight color */
    text-decoration: underline;
}

.tabs {
    margin-top: 25px;
    display: flex;
    gap: 20px;
    font-weight: bold;
    cursor: pointer;
}

.description {
    margin: 20px 0;
    color: #555;
    font-size: 1rem;
    width: 515px;
    text-align: justify;
}

.learn-more {
    background-color: #824fa3;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

.learn-more:hover {
    background-color: #773d9e;
}

.about-images {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-image img,
.secondary-image img {
    border-radius: 45%;
}

.main-image img {
    /* width: 300px; */
    height: 480px;
    object-fit: cover;
    z-index: 2;
}

.secondary-image {
    position: absolute;
    bottom: 57px;
    right: 105px;
    z-index: 1;
}

.secondary-image img {
    width: 166px;
    height: 200px;
    object-fit: cover;
}

.title span {
    display: inline-block;
    position: relative;
    animation: border-fade 2s infinite;
    color: #824fa3;
}

@keyframes border-fade {

    0%,
    100% {
        border-bottom: 3px solid transparent;
    }

    50% {
        border-bottom: 3px solid #824fa3;
    }
}
</style>
