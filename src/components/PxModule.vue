<template>
  <div class="module">
    <h1 class="module__title text-dark">{{ title }}</h1>
    <div class="module__controls">
      <i class="module__controls__left" @click="prev">👈</i>
      <h2 class="module__controls__title">
        {{ proyectTitle }}
      </h2>
      <i class="module__controls__right" @click="next">👉</i>
    </div>
    <div class="module__content row">
      <figure class="module__content__img figure col-12 col-lg-5">
        <a :href="this.url" target="_blank">
          <img
            :src="module.proyects[current].imgs.filename"
            class="figure-img img-fluid rounded"
            alt="Proyect image"
          />
        </a>
        <figcaption class="figure-caption text-right">
          {{ module.proyects[current].caption }}
        </figcaption>
      </figure>
      <div class="module__content__description col-12 col-lg-7">
        <p v-html="description"></p>

        <span
          >Do you want to see more?
          <a :href="this.url" target="_blank">Click Here</a></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
export default {
  name: "PxModule",
  props: {
    module: Object
  },
  data() {
    return {
      current: 0
    };
  },
  methods: {
    next() {
      if (this.module.proyects.length - 1 === this.current) {
        this.current = 0;
        return false;
      }
      this.current++;
    },
    prev() {
      if (this.current === 0) {
        this.current = this.module.proyects.length - 1;
        return false;
      }
      this.current--;
    }
  },
  computed: {
    title() {
      return this.module.title;
    },
    proyectTitle() {
      return this.module.proyects[this.current].title;
    },
    description() {
      return marked(this.module.proyects[this.current].description);
    },
    url() {
      return this.module.proyects[this.current].url;
    }
  }
};
</script>
