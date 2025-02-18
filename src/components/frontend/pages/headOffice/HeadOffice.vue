<template>
    <div style="margin-top: 130px;">
        <!-- <div class="">
            <div class="inner_section">
                <div class="containerBlog">
                    <router-link to="/">
                        <p class="para">Home</p>
                    </router-link>
                    <h2 style="color: #012169; margin-top: -10px" class="fw-bold">Office Details</h2>
                </div>
            </div>
        </div> -->

        <h2 style="color: #824fa3;" class="text-center my-5 fw-bold">{{ office.name }}</h2>

        <div style="background-color: rgb(251, 250, 251);" class="py-5">
            <div class="container row mx-auto">
                <div class="col-lg-6">
                    <h4 class="fs-5 fw-bold mt-4 mb-2" style="color: #824fa3">
                        Branch Details
                    </h4>
                    <div class="contact_form">
                        <table class="table branch-table" border="0">
                            <tbody>
                                <tr>
                                    <td>
                                        <span style="margin-right: 5px">
                                            <i class="fa fa-map-pin" aria-hidden="true"></i>
                                        </span>
                                        <span>
                                            <!-- {{ $office -> address. ', '.$office -> city. ', '.$office -> country }} -->

                                            {{ office.address }}, {{ office.city }}, {{ office.country }}

                                        </span>
                                    </td>
                                </tr>
                                <tr v-for="(number, index) in contactNumbers" :key="index">
                                    <td>
                                        <i class="fas fa-phone me-2"></i>
                                        {{ number }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>


                <div class="col-md-6 map">
                    <!-- Google Map Embed -->
                    <div id="map" style="height: 435px; border-radius: 10px; overflow: hidden;">
                        <p class="ql-editor" v-html="office.map_link"></p>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { apiUrl } from '../../../../globalVariables';
import "quill/dist/quill.snow.css";

export default {
    data() {
        return {
            office: {},
            contactNumbers: [],
        }
    },
    mounted() {
        this.getOffice();
    },

    methods: {
        async getOffice() {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${apiUrl}office/${this.$route.params.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });


                this.office = response.data.data.office;

                const contactNoRaw = this.office.contact_no || "[]";
                this.contactNumbers = JSON.parse(contactNoRaw);

                console.log(this.office);
            } catch (error) {
                console.error("Error fetching office details:", error);
            }
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

.map {
    box-shadow: 0px 0px 5px rgb(135, 135, 135);
}

.mapbox iframe {
    width: 100% !important;
    border-radius: 8px;
    box-shadow: 0 0 40px -10px rgba(100, 100, 100, 0.25);
}

.branch-table.table tr td,
.branch-table.table tr th {
    border: 0;
    font-size: 1rem;
}

.branch-details p,
.branch-details a {
    font-size: 1rem !important;
}

.media-vidoe-preview {
    width: 100%;
    border-radius: 8px;
}

@media screen and (min-width:768px) {
    .media-vidoe-preview {
        width: 80%;
    }
}

.content_search {
    margin-top: 3.5rem;
}

/* @media screen and (min-width:391px) {
        .content_search {
            margin-top: 6rem;
        }
    } */
</style>