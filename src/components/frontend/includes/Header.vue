<template>
    <div>
        <!-- Header -->
        <div class="topbar d-flex justify-content-around">
            <div class="d-flex text-white" style="margin-top: 5px;">
                <div class="d-flex phone-border top_phone">
                    <i class="fas fa-phone mt-1"></i>
                    <p class="ms-3">+(372) 5870 0600</p>
                </div>

                <div class="d-flex phone-border top_email">
                    <i class="fas fa-envelope fa-solid mt-1"></i>
                    <p class="ms-3">info@mayfaireducation.global</p>
                </div>

                <div class="d-flex ms-3">
                    <i class="fas fa-location-dot mt-1"></i>
                    <p class="ms-3">Vindi 9-2, Kristiine, Tallinn 11315, Estonia.</p>
                </div>
            </div>
            <div style="margin-top: 4px;" class="social">
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
                <img @click="navigateHome()" :src="logo" alt="Logo" class="logo-img" style="cursor: pointer;"/>
            </div>

            <nav class="nav-links" :class="{ color: isScrolled }">
                <div class="nav_menu">
                    <router-link to="/" exact-active-class="active-nav" exact>Home</router-link>
                    <router-link to="/course" active-class="active-nav">Courses</router-link>
                    <router-link to="/choose-country" active-class="active-nav">Choose Country</router-link>
                    <router-link to="/applicant" active-class="active-nav">Applicants</router-link>
                    <router-link to="/blog" active-class="active-nav">Blog</router-link>
                    <router-link to="/event" active-class="active-nav">Event</router-link>
                    <router-link to="/about" active-class="active-nav">About</router-link>

                    <!-- Dropdown Menu -->


                    <router-link class="dropdown dropdownA" @mouseenter="showContactDropdown = true"
                        @mouseleave="showContactDropdown = false">
                        Contact
                        <div v-if="showContactDropdown" class="dropdown-menu">
                            <router-link class="d-menu" to="/contact" active-class="active-nav">Contact</router-link>
                            <router-link class="d-menu" :to="`/office/${offices.head_office.id}`">
                                Head Office
                            </router-link>

                            <!-- Submenu -->
                            <router-link class="dropdown-item dropdownA" @mouseenter="showSubmenu = true"
                                @mouseleave="handleMouseLeave">
                                Regional Offices
                                <div v-if="showSubmenu" class="submenu">
                                    <!-- Iterate over countries -->
                                    <div v-for="(countryOffices, country) in offices.country_offices" :key="country"
                                        class="dropdown-item" @mouseenter="setCurrentCountry(country)"
                                        @mouseleave="clearCurrentCountry">
                                        <router-link>
                                            {{ country }} Offices
                                        </router-link>
                                        <div v-if="currentCountry === country" class="subsubmenu">
                                            <!-- Iterate over offices in the country -->
                                           
                                            <router-link v-for="office in countryOffices" :key="office.id"
                                                class="dropdown-item" :to="`/office/${office.id}`"
                                                @click.prevent="customLogicBeforeNavigation(office.id)">
                                                {{ office.name }}
                                            </router-link>

                                        </div>
                                    </div>
                                </div>
                            </router-link>

                        </div>
                    </router-link>

                    <router-link to="/appointment" active-class="active-nav">Appointment</router-link>
                </div>

                <button @click="navigateLogin()" class="enroll-btn">Login Now</button>
                <button class="menu-btn" :class="{ menu_button: isScrolled }" @click="toggleSidebar">
                    <i class="fas fa-bars"></i>
                </button>
            </nav>

        </header>


        <!-- Sidebar -->
        <div class="sidebar" ref="sidebar" :class="{ open: isSidebarOpen }">

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
                    <router-link @click="closeSidebar" to="/" exact-active-class="active-nav" exact>Home</router-link>
                    <router-link @click="closeSidebar" to="/course" active-class="active-nav">Courses</router-link>
                    <router-link @click="closeSidebar" to="/choose-country" active-class="active-nav">Choose Country</router-link>
                    <router-link @click="closeSidebar" to="/applicant" active-class="active-nav">Applicants</router-link>
                    <router-link @click="closeSidebar" to="/blog" active-class="active-nav">Blog</router-link>
                    <router-link @click="closeSidebar" to="/event" active-class="active-nav">Event</router-link>
                    <router-link @click="closeSidebar" to="/about" active-class="active-nav">About</router-link>

                    <!-- Dropdown Menu -->


                    <router-link class="dropdown dropdownA" @mouseenter="showContactDropdown = true"
                        @mouseleave="showContactDropdown = false">
                        Contact
                        <div v-if="showContactDropdown" class="dropdown-menu">
                            <router-link class="d-menu" @click="closeSidebar" to="/contact" active-class="active-nav">Contact</router-link>
                            <router-link class="d-menu" @click="closeSidebar" :to="`/office/${offices.head_office.id}`">
                                Head Office
                            </router-link>

                            <!-- Submenu -->
                            <!-- Submenu -->
                            <router-link class="dropdown-item dropdownA" @mouseenter="showSubmenu = true"
                                @mouseleave="handleMouseLeave">
                                Regional Offices
                                <div v-if="showSubmenu" class="submenu">
                                    <!-- Iterate over countries -->
                                    <div v-for="(countryOffices, country) in offices.country_offices" :key="country"
                                        class="dropdown-item" @mouseenter="setCurrentCountry(country)"
                                        @mouseleave="clearCurrentCountry">
                                        <router-link>
                                            {{ country }} Offices
                                        </router-link>
                                        <div v-if="currentCountry === country" class="subsubmenu">
                                            <router-link v-for="office in countryOffices" :key="office.id"
                                                class="dropdown-item" :to="`/office/${office.id}`"
                                                @click.prevent="customLogicBeforeNavigation(office.id)">
                                                {{ office.name }}
                                            </router-link>

                                        </div>
                                    </div>
                                </div>
                            </router-link>

                        </div>
                    </router-link>

                    <router-link @click="closeSidebar" to="/appointment" active-class="active-nav">Appointment</router-link>
                </div>

                <button @click="navigateLogin()" class="login_button">Sign In/Dashboard</button>

                <!-- <button @click="navigateRegister()" class="register_button bg-primary">Sign Up</button>

                <button v-if="user" @click="navigateDashboard()" class="register_button bg-primary">DashBoard</button> -->

                <div class="d-flex mt-2">
                    <i class="fas fa-phone mt-1"></i>
                    <p class="ms-2">+(372) 5870 0600</p>
                </div>

                <div class="d-flex">
                    <i class="fas fa-envelope fa-solid mt-1"></i>
                    <p class="ms-2">info@mayfaireducation.global</p>
                </div>

                <div class="d-flex">
                    <i class="fas fa-location-dot mt-1"></i>
                    <p class="ms-2">Vindi 9-2, Kristiine, Tallinn 11315, Estonia.</p>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";
import logo from "../../../assets/image/logo.png";
import axios from 'axios';
import { apiUrl, appUrl } from "../../../globalVariables";

export default {
    data() {
        return {
            isScrolled: false,
            // isSidebarOpen: false,
            logo,
            showContactDropdown: false,
            showSubmenu: false,
            showSubSubmenu: false,
            // offices: [],
            currentCountry: null,
            offices: {
                head_office: null,
                country_offices: {},
            },
            user: null,
        };
    },

    setup() {
        const isSidebarOpen = ref(false);
        const sidebar = ref(null);


        const handleClickOutside = (event) => {

            const menuButton = document.querySelector(".menu-btn");
            if (
                sidebar.value &&
                !sidebar.value.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                isSidebarOpen.value = false;
            }
        };


        onMounted(() => {
            document.addEventListener("click", handleClickOutside);
        });


        onBeforeUnmount(() => {
            document.removeEventListener("click", handleClickOutside);
        });


        const toggleSidebar = () => {
            isSidebarOpen.value = !isSidebarOpen.value;
        };

        const closeSidebar = () => {
            isSidebarOpen.value = false;
        };


        const navigateLogin = () => {
            isSidebarOpen.value = false;
            window.location.href = `${appUrl}user/profile`;
        };

        return {
            isSidebarOpen,
            sidebar,
            toggleSidebar,
            navigateLogin,
            closeSidebar
        };
    },

    methods: {
        navigateHome() {
            this.$router.push('/');
        },
        navigateLogin() {
            window.location.href = `${appUrl}user/profile`;
            this.isSidebarOpen = false;
        },
        navigateDashboard() {
            window.location.href = `${appUrl}user/profile`;
            this.isSidebarOpen = false;
        },
        navigateRegister() {
            window.location.href = `${appUrl}register`;
            this.isSidebarOpen = false;
        },

        handleMouseLeave() {
            this.showSubmenu = false;
            this.currentCountry = null;
        },

        setCurrentCountry(country) {
            this.currentCountry = country;
        },

        clearCurrentCountry() {
            this.currentCountry = null;
        },

        // toggleSidebar() {
        //     console.log(this.isSidebarOpen);
        //     this.isSidebarOpen = !this.isSidebarOpen;
        // },

        handleScroll() {
            this.isScrolled = window.scrollY > 0;
        },

        async getHomeContent() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}home`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const branches = response.data.data.office;

                let headOffice = null;
                const countryOffices = {};

                // Process the branches
                branches.forEach((branch) => {
                    if (branch.name === 'Head Office') {
                        headOffice = branch;
                    } else {
                        const country = branch.country;
                        if (!countryOffices[country]) {
                            countryOffices[country] = [];
                        }
                        countryOffices[country].push(branch);
                    }
                });

                // Assign structured data to this.offices
                this.offices = {
                    head_office: headOffice,
                    country_offices: countryOffices,
                };

                console.log(this.offices);
            } catch (error) {
                console.error('Error fetching offices:', error);
            }
        },

  
        navigateToOffice(officeId) {
        },

        customLogicBeforeNavigation(officeId) {
            window.location.href = `/office/${officeId}`
            this.isSidebarOpen = false;
        }

    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.getHomeContent();
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>


<style scoped>
.dropdownA a {
    width: 120px;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
}

.nav_menu {
    display: flex;
    position: relative;
    /* margin-top: 10px; */
}

.dropdown {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 3px;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    width: 100px;
}

.dropdown-item {
    position: relative;
    padding: 3px;
}

.submenu {
    position: absolute;
    top: 0;
    left: 100%;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 3px;
    display: flex;
    flex-direction: column;
    min-width: 100px;
    margin-left: -15px;
    margin-top: 3px;
}

.subsubmenu {
    position: absolute;
    top: 0;
    left: 100%;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 3px;
    display: flex;
    flex-direction: column;
    min-width: 100px;
    margin-left: -65px;
    margin-top: -3px;

}

.dropdown-menu a,
.submenu a,
.subsubmenu a {
    text-decoration: none;
    color: black;
    padding: 3px;
    transition: background-color 0.2s ease;
}

.dropdown-menu a:hover,
.submenu a:hover,
.subsubmenu a:hover {
    background-color: white;
    color: #824fa3;
}

.enroll-btn,
.menu-btn {
    margin-left: auto;
}

.menu-btn i {
    cursor: pointer;
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
    .sidebar{
        overflow-y: auto;
    }
    .sidebar a{
        font-size: 18px;
        font-weight: bold;
        margin: 3px;
        box-shadow: 0px 0px 30px rgba(29, 23, 77, 0.06);
        padding: 5px;
    }

    .sidebar.open .sidebarMenu {
        display: flex;
    }

    /* .topbar {
        display: none !important;
    } */

    .top_phone {
        display: none !important;
    }

    .top_email {
        display: none !important;
    }

    .social {
        display: none !important;
    }

    .header {
        top: 30px !important;
        height: 60px !important;
    }

    .header.fixed {
        top: 0 !important;
    }

    .logo-img {
        height: 45px !important;
        margin-right: 10rem !important;
    }

    .enroll-btn {
        background: #f39c12;
        border: none;
        color: white;
        padding: 3px 20px !important;
        cursor: pointer;
        border-radius: 2px;
        font-size: 13px;
        display: none;
    }

    /* .sidebar {
        width: 300px !important;
    } */
}

.sidebarMenu {
    display: none;
}

.topbar p {
    font-size: 13px;
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
    color: white;
    outline: none;
    border: 1px solid #edeef2;
    border-radius: 5px;
    background-color: #824fa3;
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
    background: white;
    transition: background-color 0.3s;
    height: 115px;
    z-index: 10;
    color: black;
    /* box-shadow: 0px 1px 1px rgb(160, 159, 159); */
    box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
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
    height: 55px;
    margin-right: 0.5rem;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-links a {
    text-decoration: none;
    color: rgb(65, 64, 64);
    font-size: 16px;
    margin: 5px 20px;
    font-weight: 600;
}

.color a {
    text-decoration: none;
    color: rgb(65, 64, 64);
    font-size: 16px;
    margin: 5px 20px;
}

.nav-links a:hover {
    color: #824fa3;
}

.nav-links .active-nav {
    color: #824fa3;
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
    width: 360px;
    background: #f4f4f4;
    transition: right 0.3s;
    z-index: 1100;
    padding: 2rem;
    overflow: auto;
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