<template>
    <div class="container">
        <h2 class="text-center mb-4 fw-bold" style="margin-top: 70px;">
            Discover World class universities
        </h2>
        <div class="row justify-content-center card-row">
            <!-- Card Container -->
            <div v-for="(item, index) in countries" :key="index" class="card_university">
                <div class="card_content">
                    <img :src="item.image" class="card_image" alt="Country Image">
                    <img :src="item.logo" class="logo_image" alt="">
                    <p class="mt-2">{{ item.name }}</p>
                    <h5 style="font-size: 17px;" class="mt-2 fw-bold">{{ item.university_name }}</h5>
                    <p style="font-size: 14px;" class="mt-4">{{ item.location }}</p>
                </div>
                <div class="card_hover_content">
                    <h4 class="fw-bold mb-5">{{ item.university_name || "Explore" }}</h4> 
                    <div class="icon"><i class="fa-solid fa-arrow-right"></i></div> 
                </div>
            </div>

        </div>

        <div class="text-center mt-5">
            <button class="viewAllButton">View all universities <i class="fa-solid fa-arrow-right ms-2"></i> </button>
        </div>
        
    </div>
</template>


<script>
import image from '../../../../assets/image/australia.jpg'
import logo from '../../../../assets/image/u_logo.png'

export default {
    data() {
        return {
            countries: [
                { name: "5 programs", image: image, logo: logo, university_name: "Wuhan Institute Of Technology", location: "kajir deuri 4000,chittagong" },
                { name: "5 programs", image: image, logo: logo, university_name: "Wuhan Institute Of Technology", location: "kajir deuri 4000,chittagong" },
                { name: "5 programs", image: image, logo: logo, university_name: "Wuhan Institute Of Technology", location: "kajir deuri 4000,chittagong" },
                { name: "5 programs", image: image, logo: logo, university_name: "Wuhan Institute Of Technology", location: "kajir deuri 4000,chittagong" },
                { name: "5 programs", image: image, logo: logo, university_name: "Wuhan Institute Of Technology", location: "kajir deuri 4000,chittagong" },
                { name: "5 programs", image: image, logo: logo, university_name: "Wuhan Institute Of Technology", location: "kajir deuri 4000,chittagong" },
                { name: "5 programs", image: image, logo: logo, university_name: "Wuhan Institute Of Technology", location: "kajir deuri 4000,chittagong" },
                { name: "5 programs", image: image, logo: logo, university_name: "Wuhan Institute Of Technology", location: "kajir deuri 4000,chittagong" },

            ],
        };
    },
};
</script>


<style scoped>
.viewAllButton {
    background-color: #f39c12;
    border: none;
    border-radius: 3px;
    padding: 15px 35px;
    color: white;
    font-size: 18px;
    font-weight: bold;
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
    box-shadow: 0px 0px 40px rgba(29, 23, 77, .06);
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
    width: 50px;
    height: 50px;
    margin: auto;
    margin-top: -21px;
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
