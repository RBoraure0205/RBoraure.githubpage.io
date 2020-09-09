<template>
  <section class="container-md contact">
    <h1 class="display-md-4 h1 font-weight-bold contact__title">
      👇🏼 Do you need to contact me?
    </h1>
    <ul class="my-5 contact__list">
      <li v-for="(p, i) in profiles" :key="i">
        <h3 class="text-primary">{{ p.name }}</h3>
        <a :href="p.url" target="_blank">
          <h4 class="text-muted">- {{ p.user }}</h4>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import StoryblokClient from "storyblok-js-client";

const token =
  process.env.node_env === "production"
    ? process.env.APP_KEY
    : process.env.VUE_APP_TOKEN;
let storyapi = new StoryblokClient({
  accessToken: token
});
export default {
  name: "Contact",
  data() {
    return {
      profiles: []
    };
  },
  created() {
    // 4. Initialize the Storyblok Client Bridge to allow us to subscribe to events
    // from the editor itself.
    this.isLoading = true;
    window.storyblok.init({
      accessToken: token
    });
    window.storyblok.on("change", () => {
      // this will indicate to load the home story, exchange that with the full slug of your content
      // either it is the page URL or hardcoded as in the example below
      this.getStory("contact", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory("contact", "draft");
      } else {
        this.getStory("contact", "published");
      }
    });
  },
  methods: {
    getStory(slug, version) {
      storyapi
        .get("cdn/stories/" + slug, {
          version: version
        })
        .then(response => {
          this.profiles = response.data.story.content.social;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style></style>
