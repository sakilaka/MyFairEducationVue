<template>
    <div style="margin-top: 110px;">
        <div class="header">
            <h1 class="fw-bold mb-4">Find Universities by Country</h1>
            <input v-model="search" type="text" class="filter-input form-control" placeholder="Filter Country" />
        </div>
        <div class="countries-grid container">
            <div @click="navigateToCountry(country.id)" v-for="(country, index) in filteredCountries" :key="index" class="country-card">
                {{ country.name }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { apiUrl } from '../../../../globalVariables';

export default {
    data() {
        return {
            search: "",
            countries: [],
        };
    },
    mounted() {
        this.getHomeContent();
    },

    methods: {
        async getHomeContent() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}home`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.countries = response.data.data.countries;
                
            } catch (error) {
                console.error('Error fetching configurations:', error);
            }
            
        },
        navigateToCountry(countryID){
            this.$router.push(`/choose-country/${countryID}`)
        }
    },
    computed: {
        filteredCountries() {
            return this.countries.filter((country) =>
                country.name.toLowerCase().includes(this.search.toLowerCase())
            );
        },
    },

};
</script>

<style scoped>
@media (max-width: 1100px) {
    .header h1{
        font-size: 20px !important;
    }
    .filter-input{
        width: 300px !important;
    }
    .country-card{
        width: 300px !important;
    }
}
.header {
    text-align: center;
    margin-bottom: 60px;
    padding-top: 65px;
}

.header h1 {
    font-size: 2rem;
    color: #824fa3;
}

.filter-input {
    width: 50%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 1rem;
    margin: auto;
}

.countries-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.country-card {
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 2px;
    width: 207px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #824fa3;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.country-card:hover {
    background-color: #824fa3;
    color: #ffffff;
}
</style>