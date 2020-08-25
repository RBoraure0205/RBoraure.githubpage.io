<template>
  <aside class="d-flex d-md-block">
    <figure class="me__figure p-3 w-100 mx-auto hvr-grow">
      <router-link
        data-toggle="tooltip"
        data-placement="top"
        title="Contact Me"
        :to="{ name: 'Contact' }"
      >
        <img
          src="@/assets/rboraure.jpg"
          alt="RBoraure Profile Photo"
          class="rounded-circle mb-0 mb-md-3"
        />
      </router-link>
    </figure>
    <div class="hero__content__me rounded bg-secondary text-center p-3">
      <h5 class="text-white text-uppercase">
        Ricardo Boraure
        <span class="text-light text-lowercase">-@rboraure</span>
      </h5>
      <div class="d-flex flex-wrap justify-content-center">
        <px-badges
          class="mx-2"
          v-for="(b, i) in badges"
          :key="i"
          :content="b"
        ></px-badges>
      </div>
    </div>
  </aside>
</template>

<script>
import PxBadges from "./PxBadges";
export default {
  data() {
    return {
      badges: [
        "#Frontend",
        "#Frameworks",
        "#Responsive",
        "#Autodidact",
        "#BEM",
        "#Git"
      ]
    };
  },
  components: {
    PxBadges
  }
};
</script>

<style scoped>
aside {
  align-items: center;
}
</style>
