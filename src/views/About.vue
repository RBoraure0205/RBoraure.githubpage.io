<template>
  <section class="container-md">
    <div class="row about">
      <div class="col-12 col-md-8 mb-3">
        <h1 class="display-md-4 h1 font-weight-bold">
          👋🏼 Hello, I'm Ricardo Boraure
        </h1>
        <p class="h3 my-3 pr-5">
          I am a Web Developer, I have an incredible passion for Frontend
          tecnologies like Vue.Js and some libraries that improves UI. I can
          work with CSS frameworks, CSS preprocessors and BEM methodology.
          <span class="text-success text-uppercase font-wight-bold"
            >I 💚 learn</span
          >
        </p>
      </div>
      <div class="col-12 col-md-4">
        <px-profile></px-profile>
      </div>
    </div>
  </section>
</template>

<script>
import PxProfile from "../components/PxProfile";
export default {
  components: {
    PxProfile,
  },
};
</script>

<style></style>
