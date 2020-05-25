<template>
  <b-navbar
    transparent="true"
    spaced="true"
    style="padding-top: 10px; background-color: rgba(0, 153, 255, 0.3); position: relative;"
  >
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h3 class="logo is-size-2 is-dark">RBoraure</h3>
      </b-navbar-item>
    </template>
    <template style="background-color: rgba(0, 153, 255, 0.3);" slot="end">
      <b-navbar-item href="#" class="subTitle" active="false">
        About
      </b-navbar-item>
      <b-navbar-item href="#" class="subTitle" active="false">
        My work
      </b-navbar-item>
      <b-navbar-item href="#" class="subTitle" active="false">
        Certifications
      </b-navbar-item>
      <b-navbar-item href="#" class="subTitle" active="false">
        Work together
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  font-family: "Kaushan Script", cursive !important;
}
a {
  font-family: "Noto Sans" !important;
}
.subTitle {
  font-family: "Montserrat", sans-serif !important;
  font-weight: bold;
}
.subTitle:hover {
  color: antiquewhite !important;
}
</style>
