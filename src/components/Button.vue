<template>
  <button type="button" class="c-button .hvr-grow">
    <router-link :to="{ name: route }">
      <p class="h4" :class="`text-${color}`">{{ content }}</p>
    </router-link>
  </button>
</template>

<script>
export default {
  name: "c-button",
  props: {
    content: String,
    color: String,
    route: String,
  },
};
</script>

<style lang="scss"></style>
