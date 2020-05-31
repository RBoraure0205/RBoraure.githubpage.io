<template>
  <section class="section container box" id="proyects">
    <b-carousel-list :data="items" :items-to-show="2" class>
      <template slot="item" slot-scope="props">
        <div class="card">
          <div class="card-image">
            <figure class="image is-5by4">
              <a @click="info(props.index)">
                <img :src="props.list.image" />
              </a>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p
                class="title is-6 is-size-5-tablet is-size-4-desktop has-text-info"
              >{{ props.list.title }}</p>
              <p class="subtitle is-7 is-size-6 is-size-5-tablet has-text-gray">@RBoraure</p>
              <div class="field is-grouped">
                <p style="display: inline" v-if="props.list.description">
                  {{ props.list.description }}
                  <br />
                  <a
                    :href="props.list.link"
                    target="blank"
                    class="has-text-info"
                    v-if="props.list.link"
                  >{{ props.list.link }}</a>
                </p>
              </div>

              <div
                v-for="(t, i) in props.list.tags"
                :key="i"
                style="display: inline; margin-right: 5px"
              >
                <b-tag type="is-danger" rounded>
                  <b>{{ t }}</b>
                </b-tag>
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-carousel-list>
  </section>
</template>

<script>
import utils from "@/utils";
export default {
  name: "proyects",
  data() {
    return {
      break: 0,
      items: [
        {
          title: "Bezalel SPA",
          image:
            "https://i.ibb.co/tqscv9m/Bezalel-Group-2020-05-26-21-14-40.png",
          description:
            "Landing page, it is a reactive page made with bulma and vue.js. I use Core Vue.js, Vue-router and Bulma(css framework) ",
          link: "http://bezalel.epizy.com/",
          tags: ["Vue.js", "Router", "SPA", "Bulma"]
        },
        {
          title: "Vue-Exchange",
          image:
            "https://i.ibb.co/HPSkYPz/vue-exchange-2020-05-30-22-15-28.png",
          description:
            "A cryptocurrencies SPA, this web was made with Vue.js, tailwind and Vue-router, this SPA consume the coincap API, this web has filters to show important values like prices, market cap and variation in 24H, also has dinamic routing, charts and some other cool stuff.",
          link: "",
          tags: ["Vue.js", "Router", "SPA", "Tailwind"]
        }
      ]
    };
  },
  created() {
    const width = screen.width;
    if (width < 370) {
      this.break = 1;
    } else if (width <= 830) {
      this.break = 2;
    } else {
      this.break = 3;
    }
  },
  methods: {
    info(value) {
      this.test = value;
    },
    getScreen() {
      utils.getScreen();
    }
  }
};
</script>

<style></style>
