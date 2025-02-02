<template>
    <div style="margin-top: 110px;">
        <div class="">
            <div class="inner_section">
                <div class="containerBlog">
                    <p class="para">HomePage</p>
                    <h2 style="color: #012169; margin-top: -10px" class="fw-bold">Event</h2>
                </div>
            </div>
        </div>

        <div class="search_container">

            <div class="form-group input-group">
                <input class="form-control" type="text" name="search" placeholder="Search" />
                <i class="fas fa-search search-icon"></i>
            </div>

            <div class="form-group input-group">
                <select class="form-select" name="" id="">
                    <option value="">Select category</option>
                    <option v-for="(category, index) in categories" value="{{ category.name }}">{{ category.name }}
                    </option>
                </select>
            </div>
            <div class="form-group input-group">
                <select class="form-select" name="" id="">
                    <option value="">Select topics</option>
                    <option v-for="(topic, index) in topics" value="{{ topic.name }}">{{ topic.name }}</option>

                </select>
            </div>
            <div class="form-group input-group">
                <select class="form-select" name="" id="">
                    <option value="">Select</option>
                    <option value="latest">Latest</option>
                </select>
            </div>

        </div>

        <div class="card_container">

            <div @click="gotoSingleBlog(blog.id)" v-for="(blog, index) in blogs" class="blogcard">
                <div class="image-container">
                    <img :src="getImageUrl(blog.image)" alt="card__image" class="card__image" width="">
                </div>
                <div class="card__body">
                    <!-- <span class="tag tag-blue">Technology</span> -->
                    <h5 class="fw-bold">{{ truncateText(blog.name, 40) }}</h5>
                    <hr class="bg-black">
                    <div class="d-flex">
                        <div class="d-flex text-muted">
                            <i class="fa-regular fa-calendar mt-1"></i>
                            <p style="font-size: 13px;height: 23px" class="ms-2 fw-bold">{{ formatDate(blog.created_at) }}</p>
                        </div>
                        <!-- <div style="margin-left: 10px;" class="d-flex text-muted">
                            <i class="fa-regular fa-user mt-1"></i>
                            <p style="font-size: 13px; height: 23px" class="ms-2 fw-bold">by {{ truncateText(blog.author,10) }}</p>
                        </div> -->
                    </div>
                    <!-- <p class="text-muted">{{ blog.slug }}</p> -->
                </div>
                <div class="card__footer">
                   
                    <div style="cursor: pointer;" class="d-flex">
                        <i style="font-size: 18px;" class="fa-solid fa-circle-right mt-1"></i>
                        <p class="fw-bold ms-3">Read More</p>
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
            blogs: [],
            categories: [],
            topics: [],
        }
    },

    mounted() {
        this.getEvents();
    },

    methods: {

        async getEvents() {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${apiUrl}event-list`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.blogs = response.data.data.events.data;
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

        navigateToCourse(courseId) {
            this.$router.push({ path: `/course/${courseId}` });
        },

        applyBtn() {
            console.log('fdsg');
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
            this.$router.push({ path: `/event/${blogId}` });
        }
    },
}
</script>


<style scoped>
@media (max-width: 1100px) {
    .search_container {
        display: flex !important;
        flex-direction: column;
    }

    .form-group {
        width: 100% !important;
    }

    .image-container {
        width: 263px !important;
        height: 290px;
        overflow: hidden;
        border-radius: 10px;
        display: inline-block;
    }

    .card__body p {
        height: 40px !important;
    }
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

.search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 16px;
    color: #888;
    pointer-events: none;
}

.form-group {
    width: 60%;
    position: relative;
}

.search_container {
    display: flex;
    width: 80%;
    margin-top: 50px !important;
    margin: auto;
    gap: 0px 40px;
}

.blog_header {
    padding: 30px 30px;
    margin: auto;
    background: linear-gradient(to top, #af4df0 0%, #824fa3 100%);
    color: white;
    width: 80%;
    text-align: center;
    border-radius: 10px;
}

.blog_header p {
    font-size: 20px;
}

.card_container {
    width: 80%;
    margin-top: 40px !important;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 40px;
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

img:hover {
    transform: scale(1.1); 
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
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


.tag {
    align-self: flex-start;
    padding: .25em .75em;
    border-radius: 1em;
    font-size: .75rem;
}

.tag+.tag {
    margin-left: .5em;
}

.tag-blue {
    background: #56CCF2;
    background: linear-gradient(to bottom, #2F80ED, #56CCF2);
    color: #fafafa;
}

.tag-brown {
    background: #D1913C;
    background: linear-gradient(to bottom, #FFD194, #D1913C);
    color: #fafafa;
}

.tag-red {
    background: #cb2d3e;
    background: linear-gradient(to bottom, #ef473a, #cb2d3e);
    color: #fafafa;
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

.user {
    display: flex;
    gap: .5rem;
}

.user__image {
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

.user__info>small {
    color: #666;
    margin-top: -5px;
}
</style>