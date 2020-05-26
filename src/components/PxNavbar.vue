<template>
  <b-navbar
    :spaced="true"
    :fixed-top="true"
    style="padding-top: 10px; background-color: rgba(0, 153, 255, 0.3);"
  >
    <template slot="brand">
      <b-navbar-item tag="a" href="#">
        <h3 class="logo is-size-2 has-text-dark">@RBoraure</h3>
      </b-navbar-item>
    </template>
    <template style="background-color: rgba(0, 153, 255, 0.3);" slot="end">
      <b-navbar-item href="#about" class="subTitle">
        About
      </b-navbar-item>
      <b-navbar-item href="#proyects" class="subTitle">
        Proyects
      </b-navbar-item>
      <b-navbar-item href="#" class="subTitle">
        Certifications
      </b-navbar-item>
      <b-navbar-item href="#" class="subTitle">
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
/* .subTitle:hover {
  color: antiquewhite !important;
} */
</style>
