<template>
  <main>
    <px-wave></px-wave>
    <px-navbar></px-navbar>
    <px-hero></px-hero>
  </main>
</template>

<script>
import PxNavbar from "@/components/PxNavbar";
import PxWave from "@/components/PxWave";
import PxHero from "@/components/PxHero";
export default {
  name: "App",
  components: {
    PxNavbar,
    PxWave,
    PxHero,
  },
};
</script>

<style></style>
