<template>
  <main>
    <nav-bar></nav-bar>
  </main>
</template>

<script>
import NavBar from "./components/PxNavbar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "./sass/index";
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
