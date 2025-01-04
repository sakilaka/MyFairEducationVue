<template>
    <div class="" style="margin-top: 110px;">
        <div class="inner_section">
            <div class="container">
                <p class="para">HomePage</p>
                <h2 style="color: #012169; margin-top: -10px;" class="fw-bold">Find a Course</h2>
            </div>
        </div>

        <div class="container main_form">
            <div class="layout">
                <!-- Left Form Box -->
                <div class="form-box">
                    <h3>Filters</h3>
                    <form>
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" id="title" placeholder="Course title..." />
                        </div>
                        <div class="form-group">
                            <label for="intake">Intake</label>
                            <select id="intake">
                                <option>Choose One</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <select id="subject">
                                <option>Choose One</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="level">Level</label>
                            <select id="level">
                                <option>Choose One</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="attendance">Attendance</label>
                            <select id="attendance">
                                <option>Choose One</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="location">Location</label>
                            <select id="location">
                                <option>Choose One</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="university">University</label>
                            <select id="university">
                                <option>Choose One</option>
                            </select>
                        </div>
                        <button type="button" class="btn-find">Find</button>
                        <button type="button" class="btn-reset">Reset filters</button>
                    </form>
                </div>

                <!-- Right Card Section -->
                <div class="cards-section">
                    <div v-for="(card, index) in cards" :key="index" class="card_university">
                        <div class="card_header">
                            <img :src="card.logo" alt="University logo" />
                        </div>
                        <div class="card-body mt-2">
                            <h6 class="fw-bold">{{ card.university }}</h6>
                            <h3 class="fw-bold">{{ card.course }}</h3>
                            <hr class="my-4">
                            <div class="d-flex w-50 justify-content-between">
                                <p>Tuition fee</p>
                                <p>{{ card.fee }}</p>
                            </div>
                            <div class="d-flex w-50 justify-content-between">
                                <p>Duration</p>
                                <p>{{ card.duration }}</p>
                            </div>

                            <hr class="my-4">
                            <a href="#" class="learn-more">Learn more →</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    logo: "path/to/staffordshire-logo.png",
                    university: "University of Staffordshire",
                    course: "3D Computer Games Design MSc",
                    fee: "Full-time £16,750",
                    duration: "Full-time 1 year",
                },
                {
                    logo: "path/to/northumbria-logo.png",
                    university: "Northumbria University Newcastle",
                    course: "3D Design BA (Hons)",
                    fee: "Year 1 £17,500",
                    duration: "Full-time 3 Years",
                },
                {
                    logo: "path/to/middlesex-logo.png",
                    university: "Middlesex University London",
                    course: "3D for Games and Film BA Honours",
                    fee: "Full-time £15,500",
                    duration: "Full-time 4 Years",
                },
                {
                    logo: "path/to/middlesex-logo.png",
                    university: "Middlesex University London",
                    course: "3D for Games and Film BA Honours",
                    fee: "Full-time £15,500",
                    duration: "Full-time 4 Years",
                },
            ],
        };
    },
};
</script>


<style scoped>
.main_form {
    margin-top: 55px;
}

.inner_section {
    background-color: #f3f3f3;
    padding: 68px 0 24px;
}

.para {
    color: #824fa3;
    font-weight: bold;
}

.layout {
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

.form-box {
    flex: 1;
    max-width: 330px;
    background: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    height: 745px;
}

.form-box h3 {
    margin-bottom: 20px;
    font-size: 1.2rem;
    color: #333;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-size: 0.9rem;
    color: #555;
    display: block;
    margin-bottom: 5px;
}

input,
select {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 0.9rem;
}

.btn-find {
    width: 100%;
    background: #824fa3;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
}

.btn-reset {
    width: 100%;
    background: transparent;
    color: #824fa3;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    margin-top: 10px;
    cursor: pointer;
}

.cards-section {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.card_university {
    display: flex;
    justify-content: space-between  ;
    border: 1px solid #824fa3;
    border-radius: 5px;
    padding: 15px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 872px;
    margin-left: auto;
    height: 300px;
}

.card_header {
    margin-bottom: 15px;
    width: 300px;
}

.card-header img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
}

.card-body h4 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #012169;
}

.card-body p {
    margin: 5px 0;
    color: #555;
}

.learn-more {
    margin-top: 10px;
    color: #824fa3;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
}
</style>
