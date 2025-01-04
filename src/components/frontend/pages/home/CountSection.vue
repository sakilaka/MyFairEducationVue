<template>
    <div class="count_Section">
        <div class="count-wrapper">
            <div class="count-box" v-for="(item, index) in stats" :key="index">
                <div class="icon">
                    <img :src="item.icon" alt="Icon" />
                </div>
                <div class="count">{{ item.count }} +</div>
                <div class="label">{{ item.label }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import logo from "../../../../assets/image/u_logo.png"
export default {
    data() {
        return {
            logo,
            stats: [
                {
                    icon: logo, 
                    count: "1,669",
                    label: "Students Enrolled",
                },
                {
                    icon: logo,
                    count: "139",
                    label: "Class Completed",
                },
                {
                    icon: logo,
                    count: "11",
                    label: "Skilled Instructors",
                },
                {
                    icon: logo,
                    count: "1,534",
                    label: "Technical Courses",
                },
            ],
        };
    },
};
</script>

<style scoped>
.count_Section {
    background-color: #824fa3;
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.count-wrapper {
    display: flex;
    gap: 170px;
    flex-wrap: wrap;
    justify-content: center;
}

.count-box {
    text-align: center;
    color: #fff;
}

.icon {
    margin-bottom: 15px;
}

.icon img {
    width: 60px;
    /* Adjust size of the icons */
}

.count {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.label {
    font-size: 1rem;
}
</style>