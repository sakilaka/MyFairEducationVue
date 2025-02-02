<template>
    <div style="margin-top: 110px;">
        <div class="container row mx-auto pt-5">
            <div class="col-md-9">
                <div class="progress-container">
                    <div class="progress-line" :style="{ width: progressWidth }"></div>
                    <div v-for="(step, index) in steps" :key="index" class="progress-step-container">
                        <div class="progress-step" :class="{ active: index <= currentStep }"></div>
                        <div class="progress-title" :class="{ active: index <= currentStep }">{{ step }}</div>
                    </div>
                </div>

                <div class="multisteps-form__form">
                    <div v-for="(step, index) in steps" :key="index" class="multisteps-form__panel"
                        :class="{ 'js-active': index === currentStep }">

                        <div v-if="index === 0">
                            <h3 class="text-center mb-2">Your Information</h3>
                            <!-- <label>Email:</label>
                            <input type="email" class="form-control" placeholder="Enter your email" /> -->
                            <Information></Information>
                        </div>

                        <div v-if="index === 1">
                            <h3 class="text-center mb-2">Your Family</h3>
                            <label>Family Details:</label>
                            <textarea class="form-control" placeholder="Enter family details"></textarea>
                        </div>

                        <div v-if="index === 2">
                            <h3 class="text-center mb-2">Upload Documents</h3>
                            <label>Upload Files:</label>
                            <input type="file" class="form-control" />
                        </div>

                        <div v-if="index === 3">
                            <h3 class="text-center mb-2">Upload Documents</h3>
                            <label>Upload Files:</label>
                            <input type="file" class="form-control" />
                        </div>

                        <div v-if="index === 4">
                            <h3 class="text-center mb-2">Upload Documents</h3>
                            <label>Upload Files:</label>
                            <input type="file" class="form-control" />
                        </div>

                        <div class="d-flex justify-content-between mt-3">
                            <button v-if="index > 0" class="btn btn-secondary" @click="prevStep">Previous</button>
                            <button v-if="index < steps.length - 1" class="nextBtn"
                                @click="nextStep">Next</button>
                            <button v-if="index === steps.length - 1" class="submitBtn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                sidebar
            </div>
        </div>
    </div>
</template>

<script>
import Information from './Information.vue';
import axios from 'axios';

export default {
    components: {
        Information
    },
    data() {
        return {
            steps: ["Your Information", "Your Family", "Declaration", "Upload Documents", "Final Step"],
            currentStep: 0,
        };
    },
    computed: {
        progressWidth() {
            return ((this.currentStep / (this.steps.length - 1)) * 100) + '%';
        }
    },
    methods: {
        nextStep() {
            if (this.currentStep < this.steps.length - 1) {
                this.currentStep++;
            }
        },
        prevStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        },
        
    },
    mounted() {
       
    }
};
</script>


<style>
.nextBtn{
    background-color: #824fa3;
    color: white;
    padding: 7px 20px;
    border: none;
    border-radius: 7px;
}
.nextBtn:hover{
    background-color: #68318c;
    color: white;
}
.submitBtn{
    background-color: #f39c12;
    color: white;
    padding: 7px 20px;
    border: none;
    border-radius: 7px;
}
.submitBtn:hover{
    background-color: #dc8d0c;
    color: white;
}
.progress-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 50px auto;
}

.progress-container::before {
    content: "";
    position: absolute;
    top: 21%;
    left: 10px;
    width: calc(100% - 72px);
    height: 3px;
    background-color: #ccc;
    transform: translateY(-45%);
    z-index: 0;
}

.progress-line {
    position: absolute;
    top: 21%;
    left: 10px;
    height: 3px;
    background-color: #824fa3;
    transform: translateY(-45%);
    z-index: 1;
    transition: width 0.3s ease-in-out;
}

.progress-step-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.progress-step {
    position: relative;
    z-index: 2;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 3px solid #ccc;
    border-radius: 50%;
    left: -25px;
}

.progress-step.active {
    border-color: #824fa3;
    background-color: #824fa3;
}

.progress-title {
    margin-top: 8px;
    font-size: 12px;
    color: #aaa;
    text-align: center;
}

.progress-title.active {
    color: #824fa3;
}

.multisteps-form__panel {
    display: none;
    padding: 20px;
    /* border: 1px solid #ddd; */
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
    border-radius: 5px;
}

.multisteps-form__panel.js-active {
    display: block;
}
</style>