<template>
    <div class="" style="margin-top: 110px;">
        <div class="">
            <div class="inner_section">
                <div class="containerBlog">
                    <p class="para">HomePage</p>
                    <h2 style="color: #012169; margin-top: -10px" class="fw-bold">Single Event</h2>
                </div>
            </div>
        </div>


        <div style="margin-top: 50px !important;" class="container m-auto d-flex gap-5 blogDetails">
            <div class="blog-content">
                <h2 class="fw-bold">{{ blog.name }}</h2>
                <div class="d-flex mt-3">
                    <div class="d-flex text-muted">
                        <i class="fa-regular fa-calendar mt-1"></i>
                        <p style="font-size: 13px; border-right: 2px solid gray; padding-right: 10px; height: 23px"
                            class="ms-2 fw-bold">{{ formatDate(blog.created_at) }}</p>
                    </div>
                    <div style="margin-left: 10px;" class="d-flex text-muted">
                        <i class="fa-regular fa-user mt-1"></i>
                        <p style="font-size: 13px; height: 23px" class="ms-2 fw-bold">by {{ truncateText(blog.author,
                            10)
                            }}</p>
                    </div>
                </div>
                <div class="mt-4">
                    <img class="blog_image" :src="getImageUrl(blog.image)" alt="">
                </div>
                <div class="mt-4 des">
                    <p v-if="isExpanded" v-html="blog.about"></p>
                    <p v-else v-html="shortDescription"></p>
                    <div class="text-center">
                        <button class="see_more" @click="toggleDescription">
                            {{ isExpanded ? "See Less" : "See More" }}
                        </button>
                    </div>
                </div>

            </div>
            <div class="blog-sidebar">
                <div class="first_side">
                    <p class="recent">Recent Events</p>
                    <div style="padding: 30px 30px;" class="recentBlog">
                        <div @click="gotoSingleBlog(blog.id)" v-for="(blog, index) in latestEvents" :key="index" class="blog-item ">
                            <div class="d-flex gap-3 my-3">
                                <img class="sideBlogImage" :src="getImageUrl(blog.image)" alt="Blog Image" />
                                <h6 class="fw-bold mt-2">{{ truncateText(blog.name, 30) }}</h6>
                            </div>
                        </div>
                    </div>
                </div>

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
            blog: {},
            events: [],
            isExpanded: false,
        }
    },

    mounted() {
        this.getSingleEvents();
        this.getEvents();
    },
    computed: {
        shortDescription() {
            const maxLength = 1000;
            if (this.blog?.about?.length > maxLength) {
                return this.blog?.about?.slice(0, maxLength) + '...';
            }
            return this.blog.about;
        },

        latestEvents() {
            return this.events.slice(0, 3).reverse();
        },
    },

    methods: {
        toggleDescription() {
            this.isExpanded = !this.isExpanded;
        },

        async getSingleEvents() {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${apiUrl}event-details/${this.$route.params.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.blog = response.data.data.event;
                // this.blogs = response.data.data.blogs;
                // this.categories = response.data.data.categories
                // this.topics = response.data.data.topics
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching configurations:", error);
            }
        },

        async getEvents() {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${apiUrl}event-list`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.events = response.data.data.events.data;
                // this.categories = response.data.data.categories
                // this.topics = response.data.data.topics
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching Events:", error);
            }
        },

        getImageUrl(item) {
            return `${appUrl}upload/event/${item}`;
        },

        formatDate(datetime) {
            if (!datetime) return '';

            const options = { year: 'numeric', month: 'long', day: '2-digit' };
            return new Date(datetime).toLocaleDateString('en-US', options);
        },


        truncateText(text, maxLength) {
            if (!text) return "";
            return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
        },
        gotoSingleBlog(blogId) {
            // this.$router.push({ path: `/blog/${blogId}` });
            window.location.href = `/event/${blogId}`;
        }
    },
}
</script>

<style scoped>
@media (max-width: 1100px) {
   .blogDetails{
    display: flex !important;
    flex-direction: column;
   }
   .blog-content{
    width: 100% !important;
   }
   .first_side{
    width: 350px !important;
   }
   .image-container {
        width: 263px !important;
        height: 290px;
        overflow: hidden;
        border-radius: 10px;
        display: inline-block;
    }
    .subtitle{
        width: 300px;
        font-size: 12px;
        margin: 0px auto;
    }
    .mainTitle{
        font-size: 20px !important;
    }
    .recentBlog{
        padding: 0px !important;
    }
}
.sideBlogImage{
    width: 160px;
}
.see_more {
    padding: 8px 30px;
    border: none;
    background-color: #824fa3;
    color: white;
}

.card_container {
    width: 80%;
    margin-top: 40px !important;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 40px;
}

.blogcard {

    width: 375px;
    overflow: hidden;
    margin-bottom: 30px;
    border: 1px solid #dae5ec;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
    padding: 19px;
    padding-bottom: 0px !important;
}


.card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.card__body p {
    height: 22px;
}

.card__body h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
}

.card__footer {
    display: flex;
    padding: 1rem;
    /* margin-top: auto; */
}

.image-container {
    width: 330px;
    height: 290px;
    overflow: hidden;
    border-radius: 10px;
    display: inline-block;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card__image:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.fa-facebook-f {
    padding: 10px 12px !important;
}

.fa-brands {
    background-color: #824fa3;
    color: white;
    padding: 10px;
    border-radius: 50%;
}

.containerBlog {
    width: 80%;
    margin: auto;
}

.inner_section {
    background-color: #f3f3f3;
    padding: 68px 0 24px;
}

.para {
    color: #824fa3;
    font-weight: bold;
}

.blog-content {
    background-color: #f7f7f7;
    padding: 3em;
    width: 70%;
}

.blog-sidebar {
    width: 400px;
    height: 827px;
}

.first_side {
    width: 400px;
    height: 457px;
    background-color: #f7f7f7;
    padding-top: 30px;
}

.second_side {
    width: 400px;
    height: 367px;
    background-color: #f7f7f7;
    padding-top: 30px;

}

.blog_image {
    width: 100%;
}

.des {
    width: 100% !important;
}

.recent {
    text-align: center;
    background-color: #824fa3;
    padding: 8px 8px;
    width: 79%;
    margin: auto;
    border-radius: 25px;
    font-size: 19px;
    color: white;
}


.btn-gradient {
    background: linear-gradient(to right, blue, #824fa3);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    width: 85%;
}

.btn-gradient:hover {
    opacity: 0.9;
}

.email-input-group {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    background-color: white;
    width: 85%;
    margin: auto;
}

.email-input-group .icon {
    color: #000;
}

.email-input-group input {
    border: none;
    outline: none;
}

.social-icons a {
    color: blue;
    text-decoration: none;
}

.social-icons a:hover {
    color: darkblue;
}

.form-control {
    height: 37px !important;
    font-size: 15px !important;
}
</style>F