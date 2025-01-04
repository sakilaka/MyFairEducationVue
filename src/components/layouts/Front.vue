<template>
    <div>
        <Header></Header>
        <main>
            <div>
                <router-view></router-view>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "../frontend/includes/Header.vue";
import Footer from "../frontend/includes/Footer.vue";
export default {
    components: {
        Header,
        Footer,
    },
    mounted() {
        
    },
};
</script>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>