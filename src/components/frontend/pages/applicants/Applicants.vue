<template>
    <div>
        <div class="content_search" style="margin-top:110px">
            <link href="" rel="stylesheet">

            <div class="bg-some my-5">
                <div class="container">
                    <h1 class="text-center section-title ">Insurance Services</h1>
                    <div class="row justify-content-center">
                        <div v-for="(card, index) in cards" :key="index" class="col-md-6 col-lg-3 mb-4">
                            <div class="card shadow-sm text-center p-3">
                                <h5 class="card-title fw-bold">{{ card.title }}</h5>
                                <a :href="card.url"><button class="btn apply-btn">APPLY NOW</button></a>
                                <!-- <a :href="card.url" class="product-info">product info</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import girlImahe from '../../../../assets/image/girl.png'
import logo from '../../../../assets/image/logo.png'
export default {
    data() {
        return {
            girlImahe,
            logo,
            logos: [
                logo, // Replace with your logo URLs
                logo,
                logo,
                logo,
                logo, 
            ],
            cards: [
                { title: "International student health insurance Europe" , url: "https://forms.swisscare.com/#/isie?icd=3025"},
                { title: "International Student Insurance Latvia", url: "https://forms.swisscare.com/#/isilv?icd=2289"},
                { title: "International Student Insurance Lithuania", url: "https://forms.swisscare.com/#/isilv?icd=2289"},
                { title: "International Student Insurance Latvia", url: "https://forms.swisscare.com/#/isilv?icd=2289"},
                { title: "International Travel Insurance", url: "https://forms.swisscare.com/#/isilv?icd=2289"},
                { title: "International Schengen Visa Insurance", url: "https://forms.swisscare.com/#/isilv?icd=2289"},
                { title: "International Essential Medical Insurance", url: "https://forms.swisscare.com/#/isilv?icd=2289"},
                { title: "International Expatriate Medical Insurance", url: "https://forms.swisscare.com/#/isilv?icd=2289"},
                { title: "International student health insurance Germany", url: "https://forms.swisscare.com/#/isilv?icd=2289"},
            ],
        }
    },
    components: { Swiper, SwiperSlide },
}
</script>

<style scoped>
.bg-some{
    background-color: #f9f5fc;
}

.section-title {
    font-weight: bold;
    color: #824fa3;
    margin: 40px;
    padding-top: 35px;
    font-size: 45px;
}

.card {
  border-radius: 12px;
  padding: 20px;
  transition: 0.3s ease-in-out;
  border: none;
  box-shadow: 0px 0px 40px rgba(29, 23, 77, .06);
  height: 180px;
}

.card:hover {
  transform: translateY(-5px);
}

.apply-btn {
  background: linear-gradient(90deg, #6d1bb5, #d896ff);
  color: white;
  border: none;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 30px;
  margin-top: 15px;
  width: 100%;
}

.apply-btn:hover {
  background: linear-gradient(90deg, #824fa3, #b873ff);
}

.product-info {
  display: block;
  margin-top: 10px;
  color: #6d1bb5;
  text-decoration: underline;
  font-size: 14px;
}

.product-info:hover {
  text-decoration: underline;
}
.brand_logo {
    width: 130px;
}

.bg-alice-blue {
    background-color: #f5f9ff;
}

.btn-secondary-bg {
    background-color: #f39c12;
}

.brand2-carousel .owl-item {
    padding: 15px 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.brand2-carousel .owl-item .brand_item {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 15px rgb(0 0 0 / 8%);
    padding: 35px 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.brand2-carousel .owl-item img {
    display: block;
    width: auto;
    max-width: 100%;
}

.brand2-carousel .owl-stage {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
}

.font_open {
    font-family: 'Open Sans', sans-serif;
}

.font_poppins {
    font-family: 'Poppins', sans-serif;
}

.w-20 {
    width: 20% !important;
}

.py-100 {
    padding: 100px 0;
}

.overall_exp,
.banner2 {
    padding: 20px 0;
}

@media (max-width: 1199px) {
    .banner2 {
        padding: 70px 0;
    }

    .brand2-carousel {
        margin-left: 1px !important;
    }

    .brand_logo {
        width: 110%;
    }
}

.main_title {
    font-weight: 800;
    font-size: 30px;
    color: #000000;
}

.banner2 .desc {
    font-size: 24px;
    line-height: 32px;
    color: #000000;
}

.overall_left {
    max-width: 640px;
}

.overall_exp .main_title {
    font-weight: 800;
    font-size: 45px;
    line-height: 72px;
    color: #0D1111;
    text-align: left;
}

@media(max-width: 991px) {
    .overall_exp .main_title {
        font-size: 28px;
        line-height: 44px;
    }

    .overall_exp .desc {
        text-align: left;
    }

    .overall_exp,
    .banner2 {
        padding: 60px 0;
    }
}

.overall_exp .course_number {
    background: #FEFEFD;
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.15);
    border-radius: 18px;
    padding: 16px 25px;
    top: 143px;
    left: -43px;
}

.overall_exp .course_number span {
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    color: #0D1111;
    max-width: 44px;
}

.overall_exp .desc {
    font-size: 18px;
    line-height: 32px;
    color: #000000;
}

.overall_exp .certificate_wrapper {
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.05);
    border-radius: 24px;
    bottom: 48px;
    left: -70px;
    padding: 15px 18px;
}

.overall_exp .certificate_text {
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: #0D1111;
}

.overall_exp .active_students {
    box-shadow: 0px 12px 80px rgba(0, 0, 0, 0.05);
    border-radius: 24px;
    bottom: 32px;
    right: 10px;
    padding: 25px;
}

.active_students li {
    margin: 0 -4px;
}

.active_students li .rounderNum {
    background: #1EBFC1;
    width: 33px;
    line-height: 33px;
    display: block;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
}

.about_lead {
    margin-top: 70px;
    padding-top: 100px;
    padding-bottom: 100px;
}

.about_lead .main_title {
    font-weight: 800;
    font-size: 30px;
    line-height: 65px;
    color: #154679;
    margin-bottom: 1px;
}

.about_lead .inner_text {
    line-height: 27px;
    color: #000000;
    margin-bottom: 0;
}

.about_lead-inner {
    max-width: 842px;
}

.d_box {
    min-width: 166px;
    height: 59px;
}

.mission_inner {
    max-width: 947px;
}

.service_case {
    padding: 100px 0;
}

.service_case .main_title,
.mission .main_title {
    font-weight: 800;
    font-size: 30px;
    line-height: 65px;
    color: #154679;
}

.mission .inner_text {
    line-height: 27px;
    color: #000;
}

.choose_wrapper {
    max-width: 1092px;
}

.choose_text {
    background: #154679;
    border-radius: 4px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-top: 20px;
    min-height: 129px;
    padding: 0 21px;
}

.px-22 {
    padding-left: 22px !important;
    padding-right: 22px !important;
}

.impression {
    padding-top: 45px;
    padding-bottom: 45px;
    background: #1F4173;
}

.impression .text_info {
    font-weight: 600;
    font-size: 26px;
    line-height: 142%;
}

.sc_inner {
    background: linear-gradient(90deg, #FFFFFF -0.01%, #DFE0E0 99.97%);
    border-radius: 20px;
    padding: 12px;
    box-shadow: 0 0 15px rgb(0 0 0 / 10%);
    margin-bottom: 95px;
    margin-top: 20px;
}

.sc_top {
    width: 166px;
    height: 59px;
    margin: 0 auto;
    transform: translate(-50%, -29px);
}

.sc_list {
    border: 6px solid #154679;
    border-radius: 17px;
    padding: 90px 40px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
}

.sc_list li {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #154679;
    margin-bottom: 20px;
}

.sc_list li:last-of-type {
    margin-bottom: 0;
}

.sc_list li .bullet {
    background: #0073FF;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 18px;
    margin-top: 2.5px;
    display: block;
}

.triangle {
    width: 0;
    height: 0;
    border-style: solid;
}

.triangle.left {
    left: -10px;
    top: 1px;
    border-width: 0 0 16px 11px;
    border-color: transparent transparent #3D0075 transparent;
}

.triangle.right {
    right: -10px;
    top: 1px;
    border-width: 16px 0 0 11px;
    border-color: transparent transparent transparent #3D0075;
}

.triangle.green.left {
    border-color: transparent transparent #007A42 transparent;
}

.triangle.green.right {
    border-color: transparent transparent transparent #007A42;
}

.triangle.violet.left {
    border-color: transparent transparent #320099 transparent;
}

.triangle.violet.right {
    border-color: transparent transparent transparent #320099;
}

@media (min-width: 1400px) {
    .service_case .container-xl {
        max-width: 1020px
    }
}

.team_show .title_big {
    font-size: 43px;
    line-height: 50px;
    color: #02325B;
}

.team_show .title_mail {
    font-size: 36px;
    line-height: 54px;
    color: #1F4173;
}

.overall_exp .btn_getStart,
.banner2 .btn_getStart,
.team_show .btn_getStart {
    background: #824fa3;
    /* background: #1F4173; */
    border-radius: 4px;
    color: white;
    /* color: #fff; */
    padding: 0 25px;
    font-weight: 500;
    font-size: 22px;
    line-height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    text-transform: capitalize;
    max-width: 320px;
}

.become_ins {
    padding: 100px 0;
}

.become_ins .main_title {
    font-size: 48px;
}

.become_ins .text_details {
    font-size: 21px;
    line-height: 29px;
}

.team_wrapper {
    padding-top: 100px;
    padding-bottom: 100px;
}

.team_wrapper .sectitle {
    font-size: 48px;
    line-height: 71px;
    color: #000000;
}

.team_wrapper .team_info {
    box-shadow: 0px 5px 25px #D0E0FF;
    border-radius: 20px;
    padding: 25px 40px;
}

.team_wrapper .member_title {
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    font-weight: 700;
}

.team_wrapper .member_subtitle {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.02em;
    color: #636363;
}

.team_wrapper .member_desc {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    font-weight: 600;
}

.instructor-carousel .owl-stage {
    display: flex;
}

.instructor-carousel .owl-item {
    display: flex;
    flex: 1 0 auto;
}

.become_ins .text-info {
    font-size: 16px;
    line-height: 27px;
    font-weight: 500;
}

.fred_title {
    font-size: 36px;
    line-height: 44px;
    color: #1F4173;
    max-width: 530px;
}

.btn_fred {
    border-radius: 14px;
    font-size: 18px;
    width: 186px;
    line-height: 54px;
}

@media(max-width: 1199px) {
    .reverse-lg {
        flex-wrap: wrap-reverse
    }
}

@media(max-width: 767px) {
    .team_show .title_big {
        font-size: 30px;
        line-height: 35px;
    }

    .team_show .title_mail {
        font-size: 24px;
        line-height: 30px;
    }

    .team_show .btn_getStart {
        font-size: 24px;
        line-height: 60px
    }

    .impression .text_info {
        font-size: 20px;
    }
}

@media (max-width: 575px) {
    .banner2 .main_title {
        font-size: 32px;
    }

    .banner2 .desc {
        font-size: 20px;
        line-height: 28px;
    }
}

.our_features .create-market {
    width: 355px;
    background: #154679;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 130%;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
}

.our_features .teach {
    width: 163px;
}

.our_features .earn {
    width: 151px;
}

.our_features .publish {
    width: 191px;
}

.our_features .revenue {
    width: 204px;
}

.higher {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 55px;
    /* or 183% */
    text-transform: capitalize;
}

/* become learner css start */
/* become learner css start */

.beLearner .profile {
    /*
    Width: 421.45px;
    Height: 421.01px;
    border: 25px solid #35ECD5;
    border-radius: 35px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
*/
    /* Width: 321.45px;
    Height: 321.01px; */
    width: 285.45px;
    height: 285.01px;
    border: 15px solid #35ECD5;
    border-radius: 35px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.beLearner .profile_text {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    color: #00AD89;
    height: 130px;
    width: 230px;
}

.beLearner .subscribe {
    /* Width: 321.45px;
    Height: 321.01px; */
    width: 285.45px;
    height: 285.01px;
    border: 15px solid #9307A6;
    border-radius: 35px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.beLearner .subscribe_text {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: right;
    color: #9207A6;
    height: 146px;
    float: right;
}

.beLearner .interact_instructors {
    Width: 285.45px;
    Height: 285.01px;
    border: 15px solid #FE8C62;
    border-radius: 35px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.beLearner .interact_instructors_text {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
    color: #FE8C62;
    height: 200px;
    width: 270px;
}

.beLearner .share_projects {
    Width: 285.45px;
    Height: 285.01px;
    border: 15px solid #4630D4;
    border-radius: 35px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.beLearner .share_projects_text {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
    text-align: right;
    color: #540FCB;
    height: 200px;
    width: 270px;
    margin-top: -31px;
    float: right;
}

.beLearner .become_learner {
    position: absolute;
    top: 128px;
}

.beLearner .become_learner_text {
    position: absolute;
    left: -168px;
    bottom: 58px;
    background: #FFFFFF;
    top: 68px;
    height: 340px;
    width: 340px;
    border: 15px solid #D9D9D9;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 41px;
    line-height: 56px;
    text-align: center;
}

@media(max-width: 991px) {
    .beLearner .become_learner {
        top: 0px;
        position: initial !important;
    }

    .beLearner .become_learner_text {
        position: absolute;
        left: 177px;
        bottom: 0px;
        top: 55px;
    }

    .beLearner .share_projects_text,
    .beLearner .interact_instructors_text {
        width: auto;
        text-align: center;
    }
}

@media(max-width: 767px) {
    .beLearner .become_learner_text {
        left: 76px;
        top: 48px;
        height: 360px;
        width: 360px;
        font-size: 23px;
    }
}

@media(max-width: 575px) {
    .beLearner .become_learner_text {
        left: 50%;
        top: 50%;
        height: 270px;
        width: 270px;
        font-size: 30px;
        transform: translate(-50%, -50%);
    }

    .posar {
        position: relative;
    }
}


@media(min-width: 992px) {
    .higher li {
        line-height: 110px;
    }
}

.pay {
    color: #76A313;
}

.revenue-share {
    color: #E48500;
}

.audience {
    color: #B73018;
}

.flexible {
    color: #3A76BE;
}

@media (max-width: 991px) {
    .overall_exp .course_number {
        top: 60px;
        left: auto;
        right: 0;
    }

    .overall_exp .certificate_wrapper {
        bottom: 80px;
        left: 0;
    }
}

@media (max-width: 767px) {

    .become_ins .main_title,
    .team_wrapper .sectitle {
        font-size: 32px;
        line-height: 45px
    }

    .higher {
        font-size: 26px;
        line-height: 35px
    }

    .fred_title {
        line-height: 45px;
    }

    .overall_left {
        margin: 0 auto;
    }

    .beLearner .subscribe_text,
    .beLearner .profile_text {
        margin: 0 auto;
        text-align: center;
    }
}
</style>