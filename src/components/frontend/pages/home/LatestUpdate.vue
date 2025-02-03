<template>
    <div class="container" style="margin-top: 70px;">
        <h2 class="fw-bold">Latest <span class="borderStyle">Updates</span></h2>
        <div class="d-flex gap-3 contain" style="margin-top: 20px;">

            <div style="width: 100%;" class="blog row">
                <div @click="singleLatest(item)" v-for="(item, index) in latestUpdate.slice(0,3)" :key="index" class="background-container col-md-4">
                    <div class="content">
                        <div>
                            <img class="blog_image" :src="item?.banner ? item.banner : getImageUrl(item)" alt="">
                        </div>
                        <div class="mt-2">
                            <p class="mb-4 badge bg-success">Featured</p>
                          
                            <h6 style="height: 85px;" class="fw-bold mt-1 ms-2 title">{{ item.title ? item.title : item.name }}</h6>
                            <div class="d-flex gap-2 mt-3 ms-2">
                                <img class="authorImage" :src="getImageUrl(item)" alt="">
                                <div class="mt-1 ms-1">
                                    <p class="authorName">{{ item.author }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sub_form">
                <h4 class="text-center fw-bold">Subscribe to Newsletter</h4>
                <p class="text-center">Get updates to news & events</p>
                <form @submit.prevent="subscribe" class="mt-5">
                    <div class="mb-3">
                        <input type="text" class="form-control styled-placeholder" placeholder="Your First Name"
                            v-model="firstName" required style="background-color: #ffffff; color: #333333;" />
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control styled-placeholder" placeholder="Your Email Address"
                            v-model="email" required style="background-color: #ffffff; color: #333333;" />
                    </div>
                    <button type="submit" class="sub-btn w-100 fw-bold" style="color: #ffffff;">
                        Subscribe
                    </button>
                </form>
                <p class="mt-3 text-center" style="font-size: 0.9em;">
                    By clicking "Subscribe" you agree with our
                    <a href="#" class="text-decoration-none" style="color: #ffa726;">Privacy Policy</a>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { apiUrl, appUrl } from '../../../../globalVariables';

export default {
    data() {
        return {
            firstName: '',
            email: '',
            latestUpdate: []
        };
    },

    // props: {
    //     latestUpdate: {
    //         type: Array,
    //         required: true,
    //     },
    // },

    mounted() {
        this.getHomeContent();
    },

    methods: {
        singleLatest(item){
            if(item.slug){
                this.$router.push(`/latest/${item.slug}`)
            }
            if(item.name){
                this.$router.push(`/latest/${item.name}`)
            }
            if(item.title){
                this.$router.push(`/latest/${item.title}`)
            }
        },

        async getHomeContent() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}home`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.latestUpdate = response.data.data.latest_updates;
                console.log(response.data.data.latest_updates);
            } catch (error) {
                console.error('Error fetching configurations:', error);
            }
        },

        formatDate(datetime) {
            if (!datetime) return { date: '', month: '' };

            const options = { day: '2-digit', month: 'short' };
            const formatted = new Date(datetime).toLocaleDateString('en-US', options);

            const [month, date] = formatted.split(' ');
            return { date, month };
        },

        subscribe() {
            console.log('Subscribed:', this.firstName, this.email);
        },

        getImageUrl(item) {
            if (item.slug) {
                return `${appUrl}upload/blog/${item.image}`;
            }
            if (item.name) {
                return `${appUrl}upload/event/${item.image}`;
            }
            if (item.title) {
                return `${item.banner}`;
            }
        },
    }
};
</script>

<style scoped>
.borderStyle{
    border-bottom: 5px solid #824fa3;
    padding-bottom: 8px;
}
@media (max-width: 1400px) {
    .contain {
        display: flex !important;
        flex-direction: column;
    }
}

@media (max-width: 1247px) {
    .background-container {
        /* background-image: url('your-image-url.jpg'); */
        background-size: cover;
        background-position: center;
        position: relative;
        padding: 20px;
        background-color: #f2fafe;
        width: 350px !important;
    }

    .blog_image{
        width: 100% !important;
        margin: auto !important;
    }

    .contain {
        display: flex !important;
        flex-direction: column;
    }

    .sub_form{
        width: 350px !important;
        padding-top: 80px !important;
        margin: 0px auto !important;
    }

    .title{
        font-size: 14px;
        height: 55px !important;
        width: 200px;
    }
    .authorName{
        width: 200px;
        margin-top: 10px;
        margin-left: 10px;
    }
}

.authorImage {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-top: 10px;
}

.blog_image {
    height: 165px;
    width: 265px;
    border-radius: 7px;
    margin-top: -17px;
    margin-left: -28px;
}

.content:hover {
    box-shadow: 0px 0px 40px rgba(29, 23, 77, .06);
}

.dateStyle {
    background-color: rgb(130, 79, 163);
    padding: 10px 14px;
    border-radius: 50%;
    color: white;
    font-size: 16px;
    font-weight: bold;
}

.background-container {
    /* background-image: url('your-image-url.jpg'); */
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 20px;
    background-color: #f2fafe;
    /* width: 100%; */
    cursor: pointer;
}

.content {
    background-color: white;
    padding: 15px 26px;
    height: 400px;
    border-radius: 10px;
}

.sub_form {
    background-color: rgb(130, 79, 163);
    border-radius: 8px;
    color: rgb(255, 255, 255);
    padding: 20px;
    padding-top: 120px;
    width: 550px;
    height: 515px;
    margin-left: 10px;
}

.text-center {
    text-align: center;
}

.sub-btn {
    background-color: #f39c12;
    padding: 15px 40px;
    border: none;
    border-radius: 3px;
}

.form-control {
    border-radius: 3px;
}

input::placeholder {
    font-weight: bold;
    font-size: 0.8em;
    color: #9e9d9d;
}

.styled-placeholder {
    padding: 10px;
    border-radius: 4px;
}
</style>