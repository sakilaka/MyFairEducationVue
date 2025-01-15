<template>
    <div class="categories-section">
        <h2 class="section-title">
            Explore <br />
            <span class="">Our Top <span class="highlight">Categories</span> </span>
        </h2>
        <div class="categories-grid">
            <div v-for="(category, index) in categories.slice(0, 9)" :key="index" class="category-card d-flex">
                <div class="icon-container">
                    <img class="" :src="icon" alt="category icon" />
                </div>
                <div class="ms-4">
                    <h3 class="category-title">{{ category.name }}</h3>
                    <p class="category-description">{{ category.courses.length }} Programs.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { apiUrl } from '../../../../globalVariables';
import icon from '../../../../assets/image/mbadark.png'

export default {
    data() {
        return {
            categories: [],
            icon,
            totalCourse: 0,
        };
    },
    mounted() {
        this.getHomeContent();
    },

    methods: {
        async getHomeContent() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}home`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.categories = response.data.data.degrees;
                console.log(this.categories);
                
            } catch (error) {
                console.error('Error fetching configurations:', error);
            }
            
        },
    },
};
</script>

<style scoped>

.categories-section {
    text-align: center;
    padding: 50px 20px;
    background-color: #fff;
}

.section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 40px;
    line-height: 1.4;
}

.highlight {
    position: relative;
    display: inline-block;
}

.highlight::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: #ffc107;
    /* Yellow underline */
    z-index: -1;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
    width: 90%;
    margin: auto;
}

.category-card {
    padding: 9px 26px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background: #fff;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 105px;
    border: 1px solid #824fa3;
}

.category-card:hover {
    background-color: #824fa3;
    color: white;
}

.icon-container img {
    max-width: 50px;
    margin-bottom: 15px;
}

.category-title {
    font-size: 1.1rem;
    font-weight: bold;
    text-align: left;
    height: 45px;
}

.category-description {
    font-size: 0.9rem;
    text-align: left;
}
</style>
