<template>
    <div>
        <!-- Header -->
        <div class="topbar d-flex justify-content-around">
            <div class="d-flex text-white" style="margin-top: 5px;">
                <div class="d-flex phone-border">
                    <i class="fas fa-phone mt-1"></i>
                    <p class="ms-3">+(372) 5870 0600</p>
                </div>

                <div class="d-flex phone-border">
                    <i class="fas fa-envelope fa-solid mt-1"></i>
                    <p class="ms-3">info@mayfaireducation.global</p>
                </div>

                <div class="d-flex ms-3">
                    <i class="fas fa-location-dot mt-1"></i>
                    <p class="ms-3">Vindi 9-2, Kristiine, Tallinn 11315, Estonia.</p>
                </div>
            </div>
            <div style="margin-top: 4px;">
                <div class="text-white">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-youtube ms-4"></i>
                    <i class="fa-brands fa-twitter ms-4"></i>
                    <i class="fa-brands fa-youtube ms-4"></i>
                    <i class="fa-brands fa-linkedin ms-4"></i>
                </div>
            </div>
        </div>


        <header :class="{ fixed: isScrolled }" class="header">
            <div class="logo">
                <img :src="logo" alt="Logo" class="logo-img" />
            </div>
            <nav class="nav-links" :class="{ color: isScrolled }">
                <div class="nav_menu">
                    <router-link to="/" exact-active-class="active-nav" exact>Home</router-link>
                    <router-link to="/course" active-class="active-nav">Courses</router-link>
                    <router-link to="/choose-country" active-class="active-nav">Choose Country</router-link>
                    <router-link to="/applicant" active-class="active-nav">Applicants</router-link>
                    <router-link to="/partner" active-class="active-nav">Partner</router-link>
                    <router-link to="/blog" active-class="active-nav">Blog</router-link>
                    <router-link to="/event" active-class="active-nav">Event</router-link>
                    <router-link to="/about" active-class="active-nav">About</router-link>
                </div>

                <button class="enroll-btn">Enroll Now</button>
                <button class="menu-btn" :class="{ menu_button: isScrolled }">
                    <i @click="toggleSidebar" class="fas fa-bars"></i>
                </button>
            </nav>

        </header>

        <!-- Sidebar -->
        <div class="sidebar" :class="{ open: isSidebarOpen }">

            <div class="d-flex justify-content-between">
                <div class="logo">
                    <img :src="logo" alt="Logo" class="logo-img" />
                </div>
                <button class="close-btn">
                    <i @click="toggleSidebar" class="fas fa-times"></i>
                </button>
            </div>


            <div class="sidebar-content mt-4">
                <div class="search-container">
                    <input class="search_input" type="text" name="" value="" placeholder="Search">
                    <i class="fas fa-search"></i>
                </div>
                <div class="sidebarMenu">
                    <RouterLink to="/" @click="toggleSidebar">Home</RouterLink>
                    <RouterLink to="/course" @click="toggleSidebar">Courses</RouterLink>
                    <RouterLink to="/choose-country" @click="toggleSidebar">Choose Country</RouterLink>
                    <router-link to="/applicant" @click="toggleSidebar">Applicants</router-link>
                    <router-link to="/partner" @click="toggleSidebar">Partner</router-link>
                    <router-link to="/blog" @click="toggleSidebar">Blog</router-link>
                    <router-link to="/event" @click="toggleSidebar">Event</router-link>
                    <router-link to="/about" @click="toggleSidebar">About</router-link>
                </div>
                <button class="login_button">Sign In</button>
                <button class="register_button bg-primary">Sign Up</button>

                <div class="d-flex mt-2">
                    <i class="fas fa-phone mt-1"></i>
                    <p class="ms-2">436456895486</p>
                </div>

                <div class="d-flex">
                    <i class="fas fa-envelope fa-solid mt-1"></i>
                    <p class="ms-2">info@datapollex.com</p>
                </div>

                <div class="d-flex">
                    <i class="fas fa-location-dot mt-1"></i>
                    <p class="ms-2">Kajir deuri,Chittagong</p>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
import logo from "../../../assets/image/logo.png";

export default {
    data() {
        return {
            isScrolled: false,
            isSidebarOpen: false,
            logo
        };
    },
    methods: {
        toggleSidebar() {
            console.log(this.isSidebarOpen);
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 0;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },

};
</script>

<style scoped>
.topbar p {
    font-size: 13px;
}

@media (max-width: 1247px) {
    .nav_menu {
        display: none;
    }

    .sidebarMenu {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    /* Ensure sidebarMenu is visible when the sidebar is open */
    .sidebar.open .sidebarMenu {
        display: flex;
    }
}

.sidebarMenu {
    display: none;
}

.phone-border {
    border-right: 2px solid white;
    padding: 0px 15px;
}

.topbar {
    background: #824fa3;
    position: relative;
    z-index: 10;
    height: 30px;
}

.sidebar-content .search-container {
    display: flex;
    align-items: center;
    position: relative;
}

.sidebar-content .search_input {
    flex: 1;
    padding-right: 30px;
}

.sidebar-content .fas.fa-search {
    position: absolute;
    right: 10px;
    color: #666;
}

.search_input {
    width: 100%;
    height: 55px;
    padding: 0 35px 0 15px;
    font-size: 14px;
    color: #575757;
    outline: none;
    border: 1px solid #edeef2;
    border-radius: 5px;
}

.login_button {
    width: 100%;
    height: 55px;
    padding: 0 35px 0 15px;
    font-size: 14px;
    color: #575757;
    outline: none;
    border: 1px solid #edeef2;
    border-radius: 5px;
}

.register_button {
    width: 100%;
    height: 55px;
    padding: 0 35px 0 15px;
    font-size: 14px;
    color: white;
    outline: none;
    border: 1px solid #edeef2;
    border-radius: 5px;
}

.header {
    position: absolute;
    top: 31px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(39, 38, 38, 0.8);
    transition: background-color 0.3s;
    height: 100px;
    z-index: 10;
    color: #ffffff;
    box-shadow: 0px 1px 1px rgb(160, 159, 159);
}


.header.fixed {
    position: fixed;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    color: black;
    top: 0;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-img {
    height: 60px;
    margin-right: 0.5rem;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-links a {
    text-decoration: none;
    color: white;
    font-size: 17px;
    margin: 20px;
}

.nav-links a:hover {
    color: #824fa3;
    /* Hover color */
}

.nav-links .active-nav {
    color: #824fa3;

}

.color a {
    text-decoration: none;
    color: black;
    font-size: 17px;
    margin: 20px;
}

.cart {
    display: flex;
    align-items: center;
}

.cart i {
    font-size: 1.5rem;
    margin-right: 0.3rem;
}

.cart span {
    background: #007bff;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 50%;
}

.enroll-btn {
    background: #f39c12;
    border: none;
    color: white;
    padding: 13px 40px;
    cursor: pointer;
    border-radius: 2px;
}

.enroll-btn:hover {
    background: #cd8003;
}

.menu-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
}

.menu_button {
    color: black;
}

/* Sidebar */
.sidebar {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100%;
    width: 350px;
    background: #f4f4f4;
    transition: right 0.3s;
    z-index: 1100;
    padding: 2rem;
}

.sidebar.open {
    right: 0;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 1rem;
}

.sidebar-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.sidebar-content a {
    text-decoration: none;
    color: #333;
}
</style>