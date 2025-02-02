<template>
    <div class="appointment-container" style="margin-top: 110px;">

        <div class="appointment-content">
            <div class="appointment-details">
                <div class="appointment-header">
                    <img :src="logo" alt="Mayfair Logo" class="logo" />
                </div>
                <img :src="user" alt="Profile" class="profile-image" />
                <h3>Mohammed Nurul Islam Khan, Founder & CEO</h3>
                <h2>30 Minute Meeting</h2>
                <div class="meeting-info">
                    <span class="icon">⏰</span>
                    <span>30 min</span>
                </div>
            </div>

            <div class="appointment-calendar">
                <h3>Select a Date & Time</h3>
                <div class="calendar">
                    <div class="calendar-header">
                        <button @click="previousMonth">←</button>
                        <span>{{ currentMonth }} {{ currentYear }}</span>
                        <button @click="nextMonth">→</button>
                    </div>
                    <div class="calendar-days">
                        <div v-for="day in daysOfWeek" :key="day" class="day-header">
                            {{ day }}
                        </div>
                        <div v-for="(date, index) in calendarDates" :key="index"
                            :class="{ 'available-date': date.isAvailable }" @click="selectDate(date)"
                            class="calendar-date">
                            {{ date.day }}
                        </div>
                    </div>
                </div>
                <div class="timezone">
                    <span>🌍</span>
                    <span>Asia/Dhaka ({{ currentTime }})</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo from '../../../../assets/image/logo.png'
import user from '../../../../assets/image/user.jpg'
export default {
    data() {
        return {
            currentMonth: "January",
            currentYear: 2025,
            daysOfWeek: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
            calendarDates: Array.from({ length: 31 }, (_, i) => ({
                day: i + 1,
                isAvailable: i > 14 && i < 31, // Available dates for demo
            })),
            currentTime: new Date().toLocaleTimeString("en-US", {
                timeZone: "Asia/Dhaka",
                hour: "2-digit",
                minute: "2-digit",
            }),
            logo,
            user
        };
    },
    methods: {
        previousMonth() {
           
        },
        nextMonth() {
           
        },
        selectDate(date) {
            if (date.isAvailable) {
                alert(`You selected: ${date.day} ${this.currentMonth}`);
            }
        },
    },
};
</script>

<style scoped>
.appointment-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.appointment-header {
    text-align: center;
    margin-bottom: 20px;
}

.logo {
    max-width: 200px;
}

.appointment-content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.appointment-details {
    width: 40%;
    text-align: center;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
}

.profile-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.meeting-info {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 14px;
}

.icon {
    font-size: 18px;
}

.appointment-calendar {
    width: 55%;
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.calendar-header button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
}

.calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
}

.day-header {
    font-weight: bold;
    margin-bottom: 5px;
}

.calendar-date {
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
}

.calendar-date.available-date {
    background: #e0f7fa;
    color: #00796b;
}

.calendar-date:hover {
    background: #b2ebf2;
}

.timezone {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
}
</style>