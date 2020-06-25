<template>
  <button type="button" class="c-button .hvr-grow">
    <p class="h4" :class="this.color">{{ content }}</p>
  </button>
</template>

<script>
export default {
  name: "button",
  props: {
    content: String,
    white: Boolean,
  },
  computed: {
    color(white) {
      return white ? "text-white" : "text-dark";
    },
  },
};
</script>

<style lang="scss"></style>
