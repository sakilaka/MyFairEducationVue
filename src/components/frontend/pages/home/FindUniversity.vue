<template>
    <div class="container">
        <h1 class="text-center mb-4 fw-bold" style="margin-top: 50px;">
            Find Universities By Country
        </h1>
        <div class="row justify-content-center">
            <div v-for="(item, index) in countries.slice(0, 12)" :key="index" class="card_country shadow-md">
                <div class="card_content">
                    <img :src="getImageUrl(item.image)" class="card_image" alt="Country Image">
                    <hr class="w-100 m-0">
                    <div class="card_info">
                        <p>{{ item.name }}</p>
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>


        <div class="text-center mt-5">
            <button class="viewAllButton">
                View all Country <i class="fa-solid fa-arrow-right ms-2"></i>
            </button>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import { apiUrl, appUrl } from "../../../../globalVariables";
export default {
    data() {
        return {
            countries: [],
        };
    },

    mounted() {
        this.getHomeContent();
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
                this.countries = response.data.data.cities; // Assign the fetched content to home_content
                console.log(this.countries);
            } catch (error) {
                console.error("Error fetching home content:", error);
            }
        },

        getImageUrl(item){
            return `${appUrl}upload/cities/${item}`;
        }

        
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
.viewAllButton:hover{
    background-color: #d58708;
}
.container {
    margin-top: 20px;
}

/* Styling for the card */
.card_country {
    width: 23%; /* Four cards per row */
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    /* box-shadow:  0px 1px 1px rgb(153, 153, 153); */
    box-shadow: 0px 0px 40px rgba(29, 23, 77, .06);
}

.card_country:hover{
    transform: scale(1.01);
    transition: transform 3s ease-in;
}

.card_content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card_image {
    width: 303px;
    height: 150px; /* Fixed height for the image */
    object-fit: cover; 
    margin-left: -12px;
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
