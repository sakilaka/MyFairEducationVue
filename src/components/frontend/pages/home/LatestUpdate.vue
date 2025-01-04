<template>
    <div class="container" style="margin-top: 70px;">
        <h2 class="fw-bold">Popular Courses</h2>
        <div class="d-flex gap-3" style="margin-top: 20px;">
            <div class="w-75">
                <hr>
                dgsd
            </div>
            <div class="sub_form">
                <h4 class="text-center fw-bold">Subscribe to Newsletter</h4>
                <p class="text-center">Get updates to news & events</p>
                <form @submit.prevent="subscribe" class="mt-5">
                    <div class="mb-3">
                        <input type="text" class="form-control styled-placeholder" placeholder="Your First Name" v-model="firstName"
                            required style="background-color: #ffffff; color: #333333;" />
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control styled-placeholder" placeholder="Your Email Address" v-model="email"
                            required style="background-color: #ffffff; color: #333333;" />
                    </div>
                    <button type="submit" class="sub-btn w-100 fw-bold" style="color: #ffffff;">
                        Subscribe
                    </button>
                </form>
                <p class="mt-3 text-center" style="font-size: 0.9em;">
                    By clicking "Subscribe" you agree with our
                    <a href="#" class="text-decoration-none" style="color: #ffa726;">Privacy Policy</a>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            email: '',
        };
    },
    methods: {
        subscribe() {
            // Handle subscription logic here
            console.log('Subscribed:', this.firstName, this.email);
        },
    },
};
</script>

<style scoped>
.sub_form {
    background-color: rgb(130, 79, 163);
    border-radius: 8px;
    color: rgb(255, 255, 255);
    padding: 20px;
    padding-top: 120px;
    width: 425px;
}

.text-center {
    text-align: center;
}

.sub-btn {
    background-color: #f39c12;
    padding: 15px 40px;
    border: none;
    border-radius: 3px;
}

.form-control {
    border-radius: 3px;
}

input::placeholder {
  font-weight: bold;
  font-size: 0.8em;
  color: #9e9d9d;
}

.styled-placeholder {
  padding: 10px;
  border-radius: 4px;
}
</style>