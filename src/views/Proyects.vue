<template>
  <section class="container-md ">
    <vue-loaders-pacman
      class="certs__loader"
      color="#2AB579"
      scale="1.5"
      v-if="isLoading"
    />
    <div class="proyects mt-4" v-if="!isLoading">
      <px-module
        v-for="(m, i) in story.module"
        :key="i"
        :module="m"
      ></px-module>
    </div>
  </section>
</template>

<script>
import PxModule from "@/components/PxModule";
import StoryblokClient from "storyblok-js-client";

const token =
  process.env.node_env === "production"
    ? process.env.APP_KEY
    : process.env.VUE_APP_TOKEN;
let storyapi = new StoryblokClient({
  accessToken: token,
});
export default {
  name: "Proyects",
  components: { PxModule },
  data() {
    return {
      story: {},
      current: {
        module: 0,
      },
      isLoading: Boolean,
    };
  },
  created() {
    // 4. Initialize the Storyblok Client Bridge to allow us to subscribe to events
    // from the editor itself.
    this.isLoading = true;
    window.storyblok.init({
      accessToken: token,
    });
    window.storyblok.on("change", () => {
      // this will indicate to load the home story, exchange that with the full slug of your content
      // either it is the page URL or hardcoded as in the example below
      this.getStory("proyects", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory("proyects", "draft");
      } else {
        this.getStory("proyects", "published");
      }
    });
  },
  methods: {
    getStory(slug, version) {
      storyapi
        .get("cdn/stories/" + slug, {
          version: version,
        })
        .then((response) => {
          this.story = response.data.story.content;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style></style>
