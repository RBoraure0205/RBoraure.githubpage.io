<template>
  <main>
    <px-wave></px-wave>
    <px-navbar></px-navbar>
    <px-hero></px-hero>
    <px-about></px-about>
    <px-proyects></px-proyects>
  </main>
</template>

<script>
import PxNavbar from "@/components/PxNavbar";
import PxWave from "@/components/PxWave";
import PxHero from "@/components/PxHero";
import PxAbout from "@/components/PxAbout";
import PxProyects from "@/components/PxProyects";

export default {
  name: "App",
  components: {
    PxNavbar,
    PxWave,
    PxProyects,
    PxAbout,
    PxHero,
  },
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #57e2e5;
$primary-invert: findColorInvert($primary);
$twitter: #167df0;
$twitter-invert: findColorInvert($twitter);
$danger: #e08dac;
$danger-invert: findColorInvert($danger);
$black: #153131;
$success: #45cb85;
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black,
  ),
  "black": (
    $black,
    $white,
  ),
  "light": (
    $light,
    $light-invert,
  ),
  "dark": (
    $dark,
    $dark-invert,
  ),
  "primary": (
    $primary,
    $primary-invert,
  ),
  "info": (
    $info,
    $info-invert,
  ),
  "success": (
    $success,
    $success-invert,
  ),
  "warning": (
    $warning,
    $warning-invert,
  ),
  "danger": (
    $danger,
    $danger-invert,
  ),
  "twitter": (
    $twitter,
    $twitter-invert,
  ),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
