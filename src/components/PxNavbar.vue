<template>
  <div class="nav">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between"
    >
      <router-link :to="{ name: 'Home' }">
        <a class="navbar-brand h3 text-white">RBoraure</a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'Proyects' }">
              <a class="nav-link text-white h4 text-uppercase">Proyects</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Skill' }">
              <a class="nav-link text-white h4 text-uppercase">Skills</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Certifications' }">
              <a class="nav-link text-white h4 text-uppercase"
                >Certifications</a
              >
            </router-link>
          </li>
          <li class="nav-item">
            <c-button
              :route="'Contact'"
              :color="'white'"
              :content="'Contact me'"
            ></c-button>
          </li>
        </ul>
      </div>
    </nav>
    <img src="../assets/Wave.png" alt srcset />
  </div>
</template>

<script>
import CButton from "./Button";
export default {
  components: {
    CButton,
  },
};
</script>

<style lang="scss"></style>
