<template>
    <div class="categories-section">
        <h2 class="section-title">
            Explore <br />
            <span class="">Our Top <span class="highlight">Categories</span> </span>
        </h2>
        <div class="categories-grid">
            <div v-for="(category, index) in categories" :key="index" class="category-card d-flex">
                <div class="icon-container">
                    <img :src="category.icon" alt="category icon" />
                </div>
                <div class="ms-4">
                    <h3 class="category-title">{{ category.title }}</h3>
                    <p class="category-description">{{ category.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    icon: "path/to/development-icon.svg",
                    title: "Development",
                    description: "Take your journey with this course"
                },
                {
                    icon: "path/to/business-icon.svg",
                    title: "Business",
                    description: "Take your journey with this course"
                },
                {
                    icon: "path/to/data-science-icon.svg",
                    title: "Data Science",
                    description: "Discover the data science"
                },
                {
                    icon: "path/to/marketing-icon.svg",
                    title: "Marketing",
                    description: "Take up your self in the next level"
                },
                {
                    icon: "path/to/lifestyle-icon.svg",
                    title: "Life Styles",
                    description: "Improved your life style course"
                },
                {
                    icon: "path/to/photography-icon.svg",
                    title: "Photography",
                    description: "Become the great photographer"
                },
                {
                    icon: "path/to/art-design-icon.svg",
                    title: "Art & Design",
                    description: "Grow your design skills"
                },
                {
                    icon: "path/to/health-fitness-icon.svg",
                    title: "Health & Fitness",
                    description: "Enjoy the health life with fitness"
                },
                {
                    icon: "path/to/music-icon.svg",
                    title: "Music",
                    description: "Improve your self with music"
                },
            ],
        };
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
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
    text-align: left;
}

.category-description {
    font-size: 0.9rem;
}
</style>
