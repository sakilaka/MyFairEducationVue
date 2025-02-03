<template>
    <div class="counter-content pt-3 pb-4" style="margin-top: 4rem;">
        <div class="container-lg">
            <div class="text-center mb-5">
                <h3 class="ca-card-title d-block text-center mb-4 fw-bold font-dm-sans-title">
                    Strength In Numbers
                </h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="row">
                        <div v-for="(item, index) in countData" :key="index"
                            class="col-6 col-sm-6 col-md-3 mb-4 text-center border-end">
                            <h3 class="fw-bold h1 mb-1">
                                <span class="counter d-inline-block" :style="{ color: getColor(index) }">
                                    {{ animatedCounts[index] }}+
                                </span>
                            </h3>
                            <div>{{ item.text }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        countData: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            animatedCounts: [],
            animationInterval: null,
        };
    },
    mounted() {
        this.animatedCounts = new Array(this.countData.length).fill(0);
        this.startCountingAnimation();
    },
    methods: {
        getColor(index) {
            const colors = ["#824fa3", "#F14D5D", "#55BC7E", "#f39c12"];
            return colors[index] || "black";
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
        },
    },
    beforeUnmount() {
        clearInterval(this.animationInterval);
    },
};
</script>
