<template>
  <main>
    <px-hero></px-hero>
    <px-navbar></px-navbar>
  </main>
</template>

<script>
import PxNavbar from "@/components/PxNavbar";
import PxHero from "@/components/PxHero";
export default {
  name: "App",
  components: {
    PxNavbar,
    PxHero
  }
};
</script>

<style>
</style>
