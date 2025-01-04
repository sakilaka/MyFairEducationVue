<template>
    <Header></Header>
    <div>
        <!-- Hero Section -->
        <Hero />

        <!-- Search Section -->
        <div class="search-section">
            <div class="search-container">
                <input type="text" placeholder="What do you want to study?..." class="search-input" />
                <select class="search-dropdown">
                    <option>Subject</option>
                </select>
                <select class="search-dropdown">
                    <option>Level</option>
                </select>
            </div>
            <button class="search-button">Search</button>
        </div>

        <Categories></Categories>
        <FindUniversity></FindUniversity>
        <WorldClass></WorldClass>
        <CountSection></CountSection>
        <CourseSection></CourseSection>
        <LatestUpdate></LatestUpdate>
     

    </div>
    <Footer></Footer>
</template>

<script>
import Hero from './Hero.vue';
import Categories from './Categories.vue';
import CourseSection from './CourseSection.vue';
import CountSection from './CountSection.vue';
import FindUniversity from './FindUniversity.vue';
import WorldClass from './WorldClass.vue';
import LatestUpdate from './LatestUpdate.vue';
import Header from '../../includes/HomeHeader.vue';
import Footer from '../../includes/Footer.vue';

export default {
    components: {
        Hero,
        Categories,
        Header,
        Footer,
        FindUniversity,
        WorldClass,
        CountSection,
        CourseSection,
        LatestUpdate
    },
};
</script>

<style scoped>
.search-section {
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: -40px;
    z-index: 10;
    position: relative;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 2px;
    padding-left: 10px;
}

.search-container {
    display: flex;
    align-items: center;
    background: #fff;
    width: 95%;
}

.search-input {
    flex: 1;
    border: none;
    padding: 10px;
    outline: none;
    font-size: 16px;
    border-radius: 8px;
}

.search-dropdown {
    flex: 1;
    border: none;
    padding: 10px;
    outline: none;
    font-size: 16px;
    background-color: white;
    border-left: 1px solid gray;
    margin: 10px;
}

.search-button {
    background-color: #824fa3;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 2px;
    font-size: 16px;
    cursor: pointer;
    height: 72px;
    width: 135px;
}

.search-button:hover {
    background-color: #6d3a8f;
}
</style>