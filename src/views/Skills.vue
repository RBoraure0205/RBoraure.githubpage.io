<template>
  <section class="container-md skills">
    <div v-for="item in techs" :key="item._uid">
      <h1
        class="display-md-4 h1 font-weight-bold text-uppercase my-5 text-black skills__title"
      >
        {{ item.Title }}
      </h1>
      <div class="d-flex justify-content-around flex-wrap w-100">
        <px-skillcard
          v-for="tech in item.Tech"
          :key="tech._uid"
          :img="tech.Img"
          :options="tech.Options"
          class="mb-3"
        ></px-skillcard>
      </div>
    </div>
  </section>
</template>

<script>
import PxSkillcard from "@/components/PxSkillcard";
import StoryblokClient from "storyblok-js-client";

const token =
  process.env.node_env === "production"
    ? process.env.APP_KEY
    : process.env.VUE_APP_TOKEN;
let storyapi = new StoryblokClient({
  accessToken: token
});
export default {
  name: "Skills",
  components: {
    PxSkillcard
  },
  data() {
    return {
      techs: {}
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
      this.getStory("skills", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory("skills", "draft");
      } else {
        this.getStory("skills", "published");
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
          this.techs = response.data.story.content.Group;
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
