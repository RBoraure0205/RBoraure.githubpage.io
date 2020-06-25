<template>
  <div class="nav">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between"
    >
      <a class="navbar-brand h3 text-white" href="#">RBoraure</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggle"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-end"
        :class="vToggle ? '' : 'bg-teal'"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white h4 text-uppercase" href="#"
              >About me</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white h4 text-uppercase" href="#">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white h4 text-uppercase" href="#"
              >Certifications</a
            >
          </li>
          <li class="nav-item">
            <c-button :white="false" :content="'Contact me'"> </c-button>
          </li>
        </ul>
      </div>
    </nav>
    <img src="../assets/Wave.png" alt="" srcset="" />
  </div>
</template>

<script>
import CButton from "./Button";
export default {
  data() {
    return {
      vToggle: false,
    };
  },
  methods: {
    toggle() {
      this.vToggle = !this.vToggle;
    },
  },
  components: {
    CButton,
  },
};
</script>

<style lang="scss"></style>
