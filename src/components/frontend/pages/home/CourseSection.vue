<template>
  <div class="course_section">
    <div class="d-flex justify-content-between display_small">
      <h2 class="fw-bold heading">Popular <span class="borderStyle">Courses</span></h2>


      <div class="mt-3 d-flex tabSection">
        <div class="filter-tab" :class="{ active: activeTab === 'all' }" @click="activeTab = 'all'">
          <p class="searchTitle">All programs</p>
        </div>
        <div class="filter-tab ms-3" :class="{ active: activeTab === 'top_picks' }" @click="activeTab = 'top_picks'">
          <p class="searchTitle">Our Top Picks</p>
        </div>
        <div class="filter-tab ms-3" :class="{ active: activeTab === 'popular' }" @click="activeTab = 'popular'">
          <p class="searchTitle">Most Popular</p>
        </div>
        <div class="filter-tab ms-3" :class="{ active: activeTab === 'fastest_admission' }"
          @click="activeTab = 'fastest_admission'">
          <p class="searchTitle">Fastest Admission</p>
        </div>
        <div class="filter-tab ms-3" :class="{ active: activeTab === 'highest_rating' }"
          @click="activeTab = 'highest_rating'">
          <p class="searchTitle">Highest Rating</p>
        </div>
        <div class="filter-tab ms-3" :class="{ active: activeTab === 'top_ranked' }" @click="activeTab = 'top_ranked'">
          <p class="searchTitle">Top Ranked</p>
        </div>
      </div>

    </div>

    <div class="row gx-3 gy-4 mt-2 mx-auto">
      <div v-if="filteredCourses.length > 0" v-for="(item, index) in filteredCourses" :key="index" style=""
        class="col-12 col-md-6 col-lg-4 col-auto mt-sm-3 mt-md-4">
        <div @click="handleClick(item.id)" class="single-course" style="cursor: pointer;">
          <div>
            <img class="card_img" :src="getImageUrl(item?.university?.banner_image)" alt="" />
          </div>

          <div class="badge_s">
            <p class="badge bg-info">{{ truncateText(item?.department?.name, 30) }}</p>
            <p class="badge bg-primary ms-2">{{ item?.degree?.name }}</p>
          </div>

          <div class="px-3">
            <div class="d-flex justify-content-between mt-3">
              <div class="d-flex gap-2">
                <i class="fa-solid fa-calendar mt-1"></i>
                <p>{{ item.application_deadline }}</p>
              </div>
              <div class="d-flex gap-2">
                <i class="fa-solid fa-clock mt-1"></i>
                <p>{{ item.course_duration }} year</p>
              </div>
            </div>

            <h5 style="height: 50px; font-size: 18px" class="mt-2 fw-bold">
              {{ (item.name) }}
            </h5>

            <div class="">
              <div class="d-flex gap-3">
                <i class="fa-solid fa-chart-simple mt-1"></i>
                <p style="font-size: 14px">
                  {{ truncateText(item?.university?.name, 30) }}
                </p>
              </div>
              <div class="d-flex gap-3">
                <i class="fa-solid fa-chart-simple mt-1"></i>
                <p style="font-size: 14px">
                  Department : {{ truncateText(item?.department?.name, 20) }}
                </p>
              </div>
              <div class="d-flex gap-3">
                <i class="fa-solid fa-chart-simple mt-1"></i>
                <p style="font-size: 14px">
                  Degree : {{ truncateText(item?.degree?.name, 25) }}
                </p>
              </div>
            </div>

            <hr class="my-3" />

            <div class="d-flex justify-content-between">
              <p class="mt-2">Yearly: ${{ item?.year_fee }}</p>
              <!-- {{ item.application_deadline }} -->
              <div>
                <button @click.stop="applyButton(item.id)" class="apply_btn">
                  Apply Now <i class="fa-solid fa-arrow-right ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h5 class="fw-bold text-center my-3">No Matched Course</h5>
      </div>
    </div>

    <div style="margin-top: 30px" class="text-center">
      <router-link to="/course"> <button class="program_btn">
          Browse more programs <i class="fa-solid fa-arrow-right-long ms-1"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import university from "../../../../assets/image/card_image.png";
import axios from "axios";
import { apiUrl, appUrl } from "../../../../globalVariables";
export default {
  data() {
    return {
      university,
      // courses: [],
      activeTab: 'all',
    };
  },

  props: {
    courses: {
      type: Array,
      required: true,
    },

  },
  computed: {
    filteredCourses() {
      if (this.activeTab === "all") return this.courses;

      const tabMap = {
        top_picks: 1,
        popular: 2,
        fastest_admission: 3,
        highest_rating: 4,
        top_ranked: 5,
      };

      return this.courses.filter(
        (course) => course.coursetype === tabMap[this.activeTab]
      );
    },
  },
  mounted() {
    // this.getHomeContent();
  },

  methods: {

    handleClick(courseId) {
      this.$router.push(`/course/${courseId}`);
    },

    applyButton(id) {
      window.location.href = `${appUrl}apply-admission/${id}`;
      // this.$router.push(`/apply-admission/${id}`);
    },

    // async getHomeContent() {
    //   try {
    //     const token = localStorage.getItem("token");
    //     const response = await axios.get(`${apiUrl}home`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     this.courses = response.data.data.courses_all;
    //     console.log(this.courses);
    //   } catch (error) {
    //     console.error("Error fetching home content:", error);
    //   }
    // },

    getImageUrl(item) {
      return `${appUrl}upload/university/${item}`;
    },

    truncateText(text, maxLength) {
      if (!text) return "";
      return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    },

  },
};
</script>

<style scoped>
@media (max-width: 1247px) {
.single-course{
  width: 310px!important;
}
  .searchTitle {
    width: 106px;
    height: 20px;
  }

  .display_small {
    display: flex;
    flex-direction: column;
  }

  .tabSection {
    width: 300px;
    overflow-x: auto;
    margin: auto;
  }

  .filter-tab {
    font-size: 13px !important;
    padding-bottom: 0px !important;
  }

  .heading {
    text-align: center;
  }

  .tabSection {
    text-align: center;
  }
}

.filter-tab {
  font-size: 1rem;
  padding-bottom: 8px;
  cursor: pointer;
  color: #000;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.filter-tab.active {
  /* font-weight: bold; */
  border-bottom: 3px solid #824fa3;
  color: #824fa3;
}

.filter-tab:hover {
  color: #824fa3;
}

.filter-btn {
  padding: 7px 20px;
  border: none;
  border-radius: 7px;
  background-color: #824fa3;
  color: white;
}

.filter-btn:hover {
  background-color: #f39c12;

}

.borderStyle {
  border-bottom: 5px solid #824fa3;
  padding-bottom: 8px;
}

.badge_s {
  position: absolute;
  top: 4px;
  left: 8px;
}

.course_section {
  margin-top: 70px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.card_img {
  width: 100%;
  border-radius: 5px;
  height: 140px;
}

.single-course {
  position: relative;
  border: 0.5px solid rgb(245, 242, 242);
  width: 340px;
  box-shadow: 0px 0px 30px rgba(29, 23, 77, 0.06);
}

.single-course:hover {
  box-shadow: 0px 0px 40px rgba(29, 23, 77, 0.06);
}

.apply_btn {
  background-color: #f39c12;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 5px;
}

.apply_btn:hover {
  background-color: #d58708;
}

.program_btn {
  border: none;
  padding: 15px 39px;
  color: white;
  border-radius: 5px;
  background-color: #824fa3;
}

.program_btn:hover {
  background-color: #60357d;

}
</style>
