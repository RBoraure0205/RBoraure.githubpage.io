<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import NavBar from "@/components/PxNavbar";
export default {
  components: {
    NavBar
  }
};
</script>
<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
@import "./sass/index";

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
