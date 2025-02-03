<template>
    <div style="margin-top: 110px;">
        <div class="inner_section">
            <div class="containerBlog">
                <router-link to="/">
                    <p class="para">Home</p>
                </router-link>
                <h2 class="fw-bold" style="color: #012169; margin-top: -10px">Blog</h2>
            </div>
        </div>

        <!-- Search & Filters -->
        <div class="search_container">
            <!-- Search Input -->
            <div class="form-group input-group">
                <input v-model="searchQuery" class="form-control" type="text" placeholder="Search by title or author" />
                <i class="fas fa-search search-icon"></i>
            </div>

            <!-- Category Filter -->
            <div class="form-group input-group">
                <select v-model="selectedCategory" class="form-select">
                    <option value="">Select category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>

            <!-- Topic Filter -->
            <div class="form-group input-group">
                <select v-model="selectedTopic" class="form-select">
                    <option value="">Select topic</option>
                    <option v-for="topic in topics" :key="topic.id" :value="topic.id">
                        {{ topic.name }}
                    </option>
                </select>
            </div>

            <!-- Sort by Latest -->
            <div class="form-group input-group">
                <select v-model="sortOrder" class="form-select">
                    <option value="">Sort By</option>
                    <option value="latest">Latest</option>
                </select>
            </div>
        </div>

        <!-- Blog Cards -->
        <div class="card_container">
            <div v-for="blog in filteredBlogs" :key="blog.id" class="blogcard" @click="gotoSingleBlog(blog.id)">
                <div class="image-container">
                    <img :src="getImageUrl(blog.image)" alt="card__image" class="card__image">
                </div>
                <div class="card__body">
                    <h5 class="fw-bold">{{ truncateText(blog.title, 40) }}</h5>
                    <hr class="bg-black">
                    <div class="d-flex text-muted">
                        <div class="d-flex">
                            <i class="fa-regular fa-calendar mt-1"></i>
                            <p class="ms-2 fw-bold"
                                style="font-size: 13px; border-right: 2px solid gray; padding-right: 10px; height: 23px">
                                {{ formatDate(blog.created_at) }}
                            </p>
                        </div>
                        <div class="d-flex" style="margin-left: 10px;">
                            <i class="fa-regular fa-user mt-1"></i>
                            <p class="ms-2 fw-bold" style="font-size: 13px; height: 23px">
                                by {{ truncateText(blog.author, 10) }}
                            </p>
                        </div>
                    </div>
                    <p class="text-muted">{{ blog.slug }}</p>
                </div>
                <div class="card__footer">
                    <div class="d-flex" style="cursor: pointer;">
                        <i class="fa-solid fa-circle-right mt-1" style="font-size: 18px;"></i>
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
            searchQuery: "",
            selectedCategory: "",
            selectedTopic: "",
            sortOrder: "",
        }
    },

    computed: {
        filteredBlogs() {
            let filtered = [...this.blogs];

            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter(blog =>
                    blog.title.toLowerCase().includes(query) ||
                    blog.author.toLowerCase().includes(query)
                );
            }

            if (this.selectedCategory) {
                filtered = filtered.filter(blog => blog.category_id === this.selectedCategory);
            }

            if (this.selectedTopic) {
                filtered = filtered.filter(blog => blog.topic_id === this.selectedTopic);
            }

            if (this.sortOrder === "latest") {
                filtered.reverse();
            }

            return filtered;
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
            if (!datetime) return '';

            const options = { year: 'numeric', month: 'long', day: '2-digit' };
            return new Date(datetime).toLocaleDateString('en-US', options);
        },


        truncateText(text, maxLength) {
            if (!text) return "";
            return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
        },

        gotoSingleBlog(blogId) {
            this.$router.push({ path: `/blog/${blogId}` });
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
        width: 288px !important;
        height: 200px !important;
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
    cursor: pointer;
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