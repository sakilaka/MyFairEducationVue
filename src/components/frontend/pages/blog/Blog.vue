<template>
    <div style="margin-top: 110px;">
        <div class="">
            <div class="inner_section">
                <div class="containerBlog">
                    <p class="para">HomePage</p>
                    <h2 style="color: #012169; margin-top: -10px" class="fw-bold">Blog</h2>
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

            <div v-for="(blog, index) in blogs" class="blogcard">
                <div class="card__header">
                    <img :src="getImageUrl(blog.image)" alt="card__image" class="card__image" width="600">
                </div>
                <div class="card__body">
                    <span class="tag tag-blue">Technology</span>
                    <h5 class="fw-bold">{{ truncateText(blog.title, 40) }}</h5>
                    <p>{{ blog.slug }}</p>
                </div>
                <div class="card__footer">
                    <div class="user">
                        <img :src="getImageUrl(blog.author_image)" alt="user__image" class="user__image">
                        <div class="user__info ms-2">
                            <h6>{{ blog.author }}</h6>
                            <small>{{ formatDate(blog.created_at).date }} {{ formatDate(blog.created_at).month
                                }}</small>
                        </div>
                        <div class="ms-5 mt-3">
                            <p class="text-muted">
                                <i class="fas fa-eye"></i>&nbsp;
                                {{ blog.views }}
                            </p>
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
            blogs: [],
            categories: [],
            topics: [],
        }
    },

    mounted() {
        this.getBlogs();
    },

    methods: {
        async getBlogs() {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${apiUrl}blogs`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.blogs = response.data.data.blogs;
                this.categories = response.data.data.categories
                this.topics = response.data.data.topics
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching configurations:", error);
            }
        },

        getImageUrl(item) {
            return `${appUrl}upload/blog/${item}`;
        },

        navigateToCourse(courseId) {
            this.$router.push({ path: `/course/${courseId}` });
        },

        applyBtn() {
            console.log('fdsg');
        },

        formatDate(datetime) {
            if (!datetime) return { date: '', month: '' };

            const options = { day: '2-digit', month: 'short' };
            const formatted = new Date(datetime).toLocaleDateString('en-US', options);

            const [month, date] = formatted.split(' ');
            return { date, month };
        },

        truncateText(text, maxLength) {
            if (!text) return "";
            return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
        },
    },
}
</script>


<style scoped>
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



img {
    max-width: 100%;
    display: block;
    object-fit: cover;
}

.blogcard {
    display: flex;
    flex-direction: column;
    width: 375px;
    overflow: hidden;
    box-shadow: 0px 0px 40px rgba(29, 23, 77, .06);
    border-radius: 1em;
}



.card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.card__body p{
    height: 37px;
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