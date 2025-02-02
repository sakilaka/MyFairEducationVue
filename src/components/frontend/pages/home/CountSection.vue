<template>
    <div>
        <h2 class="fw-bold mt-5 text-center">Strength In numbers</h2>
    </div>
    <div class="count_Section">
        <div class="count-wrapper">
            <div class="count-box" v-for="(item, index) in countData" :key="index">
                <div class="count">{{ animatedCounts[index] }} +</div>
                <div class="label">{{ item.text }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../../../../globalVariables";

export default {
    data() {
        return {
            countData: [],
            animatedCounts: [],
            animationInterval: null
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

                const rawData = response.data.data.home_content;
                this.countData = [
                    { num: this.parseNumber(rawData.count_num_1), text: rawData.count_text_1 },
                    { num: this.parseNumber(rawData.count_num_2), text: rawData.count_text_2 },
                    { num: this.parseNumber(rawData.count_num_3), text: rawData.count_text_3 },
                    { num: this.parseNumber(rawData.count_num_4), text: rawData.count_text_4 }
                ];
                this.animatedCounts = new Array(this.countData.length).fill(0);
                this.startCountingAnimation();
            } catch (error) {
                console.error("Error fetching home content:", error);
            }
        },

        parseNumber(value) {
            if (typeof value === "string") {
                value = value.toLowerCase();
                if (value.includes("k")) {
                    return parseFloat(value) * 1000;
                }
                if (value.includes("m")) {
                    return parseFloat(value) * 1000000;
                }
            }
            return parseFloat(value) || 0;
        },

        startCountingAnimation() {
            clearInterval(this.animationInterval);

            this.animationInterval = setInterval(() => {
                this.countData.forEach((item, index) => {
                    this.animateCount(index, item.num);
                });
            }, 3000);
        },

        animateCount(index, targetNumber) {
            let start = 0;
            const duration = 2000;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = targetNumber / steps;

            let currentStep = 0;

            const updateCount = () => {
                if (currentStep < steps) {
                    this.animatedCounts[index] = Math.floor(start);
                    start += increment;
                    currentStep++;
                    requestAnimationFrame(updateCount);
                } else {
                    this.animatedCounts[index] = targetNumber;
                }
            };

            updateCount();
        }
    },

    beforeUnmount() {
        clearInterval(this.animationInterval);
    }
};
</script>

<style scoped>
@media (max-width: 1247px) {
    .count_Section {
        display: flex !important;
        flex-direction: column;
    }

    .count-wrapper {
        display: flex !important;
        flex-direction: column;
        gap: 50px !important;
    }
}

.count_Section {
    background-color: #824fa3;
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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