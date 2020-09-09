<template>
  <div class="bg-gradient-secondary rounded skills__card p-3 mx-4">
    <div class="skills__card__svg">
      <img :src="url" :alt="alt" />
    </div>
    <div class="skills__card__content p-1 pt-2 text-white" v-html="items"></div>
  </div>
</template>

<script>
import marked from "marked";
export default {
  name: "PxSkillCard",
  props: {
    img: Object,
    options: String
  },
  computed: {
    url() {
      return this.img.filename;
    },
    alt() {
      return this.img.alt;
    },
    items() {
      return marked(this.options);
    }
  }
};
</script>

<style></style>
