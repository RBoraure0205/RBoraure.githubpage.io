<template>
  <div>
    <div class="row hero justify-content-between">
      <div class="col-12 col-md-8 hero__content">
        <h1 class="display-md-4 h1 font-weight-bold text-uppercase">
          💻 Frontend Developer
        </h1>
        <p class="h3 my-3 pr-5">
          Welcome to my personal portfolio, I’m glad because you are looking for
          me, I want to show you what I have done, my skills, my certification
          and I wish you could understand how much passion I have for web
          development.
        </p>
        <p class="h3 my-3 pr-5">
          I am a Web Developer, I have an incredible passion for Frontend
          tecnologies like Vue.Js and some libraries that improves UI. I can
          work with CSS frameworks, CSS preprocessors and BEM methodology.
          <span class="text-success text-uppercase font-wight-bold"
            >I 💚 learn</span
          >
        </p>
        <c-button
          class="text-uppercase my-2"
          :content="'Work Together'"
          :color="'primary'"
          :route="'Contact'"
        ></c-button>
      </div>
      <div
        class="col-12 col-md-3 mx-auto hero__media d-flex justify-content-between d-md-block mt-5 mt-md-0"
      >
        <px-profile></px-profile>
      </div>
    </div>
  </div>
</template>

<script>
import PxProfile from "./PxProfile";
import CButton from "./Button";
export default {
  components: {
    PxProfile,
    CButton
  }
};
</script>

<style></style>
