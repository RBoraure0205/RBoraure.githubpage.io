<template>
  <div class="bg-gradient-secondary rounded skills__card p-3 mx-4">
    <div class="skills__card__svg">
      <img :src="url" :alt="alt" />
    </div>
    <div class="skills__card__content pt-4">
      <ul>
        <li class="text-white h6" v-for="(item, i) in items" :key="i">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PxSkillCard",
  props: {
    name: String,
    items: Array
  },
  computed: {
    url() {
      return require("@/assets/" + this.name + ".svg");
    },
    alt() {
      return this.name + " SVG";
    }
  }
};
</script>

<style></style>
