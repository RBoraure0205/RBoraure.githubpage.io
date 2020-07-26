<template>
  <section class="container-md skills">
    <h1
      class="display-md-4 h1 font-weight-bold text-uppercase my-5 text-black skills__title"
    >
      Web Development
    </h1>
    <div class="d-flex justify-content-around flex-wrap w-100">
      <px-skillcard
        v-for="(w, i) in web"
        :key="i"
        :name="w.name"
        :items="w.items"
        class="mb-3"
      ></px-skillcard>
    </div>
    <h1
      class="display-md-4 h1 font-weight-bold text-uppercase my-5 text-black skills__title"
    >
      Tech & Metodologies
    </h1>
    <div class="d-flex justify-content-around flex-wrap w-100">
      <px-skillcard
        v-for="(t, i) in tech"
        :key="i"
        :name="t.name"
        :items="t.items"
        class="mb-3"
      ></px-skillcard>
    </div>
  </section>
</template>

<script>
import PxSkillcard from "@/components/PxSkillcard";
export default {
  name: "Skills",
  components: {
    PxSkillcard
  },
  data() {
    return {
      web: [
        {
          name: "html",
          items: ["Layout", "Semantic HTML", "HTML 5", "Research pls"]
        },
        {
          name: "css",
          items: ["Basics", "Flexbox", "Grid Layout", "CSS 3", "Responsive"]
        },
        {
          name: "javascript",
          items: ["DOM", "ES6", "OOP", "Libraries", "APIS"]
        }
      ],
      tech: [
        {
          name: "vue",
          items: ["Core", "CLI", "Router", "Transitions", "Components"]
        },
        {
          name: "bem",
          items: ["Block", "Element", "Modifier", "Clean CSS"]
        },
        {
          name: "bulma",
          items: ["Helpers", "Modifiers", "Elements", "Buefy", "Customize"]
        },
        {
          name: "bootstrap",
          items: [
            "Content",
            "Components",
            "Utilities",
            "Customize",
            "Responsive"
          ]
        }
      ]
    };
  }
};
</script>

<style></style>
