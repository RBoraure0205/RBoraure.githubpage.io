<template>
  <section class="certs container">
    <h1
      class="display-md-4 h1 font-weight-bold text-uppercase my-5 text-black certs__title"
    >
      📃 Platzi Certifications
    </h1>
    <h2
      class="h1-md h2 font-weight-bold text-uppercase mb-5 text-black certs__title"
    >
      🚀 Platzi Careers
    </h2>
    <div class="certs__careers">
      <px-certs
        v-for="(c, i) in careers"
        :key="i"
        :title="c.title"
        :logo="c.logo"
        :diploma="c.diploma_link"
      ></px-certs>
    </div>
    <h2
      class="h1-md h2 font-weight-bold text-uppercase mb-5 text-black certs__title"
    >
      📂 Platzi Courses
    </h2>
    <div class="certs__careers">
      <px-certs
        v-for="(c, i) in courses"
        :key="i"
        :title="c.title"
        :badge="c.badge"
        :course="c.url"
        :career="c.career"
        :diploma="c.diploma_link"
      ></px-certs>
    </div>
  </section>
</template>

<script>
import api from "../api";
import PxCerts from "@/components/PxCerts";
export default {
  name: "Certifications",
  data() {
    return {
      careers: Array,
      courses: Array,
    };
  },
  created() {
    const data = api.fetchCourses();
    data.then((res) => {
      this.careers = res.careers;
      this.courses = res.courses;
    });
  },
  components: {
    PxCerts,
  },
};
</script>

<style></style>
