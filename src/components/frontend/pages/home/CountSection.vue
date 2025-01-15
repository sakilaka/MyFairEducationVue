<template>
    <div class="count_Section">
        <div class="count-wrapper">
            <div class="count-box">
                <div class="count">{{ count.count_num_1 }} +</div>
                <div class="label">{{ count.count_text_1 }}</div>
            </div>
            <div class="count-box">
                <div class="count">{{ count.count_num_2 }} +</div>
                <div class="label">{{ count.count_text_2 }}</div>
            </div>
            <div class="count-box">
                <div class="count">{{ count.count_num_3 }} +</div>
                <div class="label">{{ count.count_text_3 }}</div>
            </div>
            <div class="count-box">
                <div class="count">{{ count.count_num_4 }} +</div>
                <div class="label">{{ count.count_text_4 }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { apiUrl, appUrl } from "../../../../globalVariables";
export default {
    data() {
        return {
            count: {},
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
                this.count = response.data.data.home_content;
                console.log(this.count);
                

                console.log(this.universities);
            } catch (error) {
                console.error("Error fetching home content:", error);
            }
        },

        getImageUrl(item) {
            return `${appUrl}upload/university/${item}`;
        },
        
    },
};
</script>

<style scoped>
.count_Section {
    background-color: #824fa3;
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.count-wrapper {
    display: flex;
    gap: 170px;
    flex-wrap: wrap;
    justify-content: center;
}

.count-box {
    text-align: center;
    color: #fff;
}

.icon {
    margin-bottom: 15px;
}

.icon img {
    width: 60px;
    /* Adjust size of the icons */
}

.count {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.label {
    font-size: 1rem;
}
</style>