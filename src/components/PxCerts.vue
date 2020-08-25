<template>
  <div class="card mb-3 certs__card">
    <div class="row no-gutters">
      <div class="col-4 certs__card__img">
        <a :href="diplomaUrl" target="_blank">
          <img :src="img" class="card-img" :alt="title" />
        </a>
      </div>
      <div class="col-8">
        <div class="card-body">
          <a
            :href="courseUrl"
            target="_blank"
            rel="noopener noreferrer"
            v-if="course"
          >
            <h5 class="card-title text-primary">{{ title }}</h5>
          </a>
          <h4 class="card-title" v-if="!course">{{ title }}</h4>
          <p class="card-text text-muted" v-if="career">Career: {{ career }}</p>
          <a :href="diplomaUrl" target="blank">
            <p class="card-text text-primary">Diploma</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pxcerts",
  data() {
    return {
      base: "https://platzi.com"
    };
  },
  props: {
    title: String,
    logo: String,
    badge: String,
    diploma: String,
    course: String,
    career: String
  },
  computed: {
    img() {
      if (this.badge) {
        return this.badge;
      } else {
        return this.logo;
      }
    },
    diplomaUrl() {
      return this.base + this.diploma;
    },
    courseUrl() {
      return this.base + this.course;
    }
  }
};
</script>

<style></style>
