<template>
  <section class="container section" id="about">
    <div class="box box-shadow">
      <div
        class="columns is-centered is-desktop has-text-centered has-text-left-desktop"
      >
        <div class="column">
          <figure class="image about">
            <img
              src="https://images.pexels.com/photos/318391/pexels-photo-318391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="RBoraure Profile pic"
              class="is-rounded"
            />
          </figure>
          <h2
            class="is-size-3-desktop has-text-info is-size-4"
            style="margin: 0.7em 0; font-weight:bold"
          >
            I am Ricardo Boraure
            <small class="has-text-grey">-@Rboraure</small>
          </h2>
          <p
            class="has-text-black-bis is-size-6 is-size-5-tablet is-size-4-desktop"
          >
            I am a
            <strong>Web Developer</strong>, I have an incredible passion for
            <strong>Front-End</strong> tecnologies like
            <strong>Vue.Js</strong> and some libraries that improves UI. I can
            work with CSS frameworks and CSS preprocessors.
            <Strong>I love keep learning</Strong>
            <br />
          </p>
        </div>
        <div class="column">
          <div class>
            <h3
              class="has-text-centered has-text-info is-size-3 is-size-2-tablet is-size-1-desktop has-text-weight-bold"
              style="text-decoration: underline"
            >
              -My Skills-
            </h3>
            <ul class>
              <li v-for="s in skills" :key="s.title">
                <h3
                  class="has-text-weight-bold is size-5 is-size-4-tablet is-size-3-desktop has-text-black"
                >
                  {{ s.title }}
                </h3>
                <b-progress
                  type="is-primary"
                  :value="s.value"
                  show-value
                  format="percent"
                  size="is-large"
                ></b-progress>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skills: [
        {
          title: "HTML",
          value: 80
        },
        {
          title: "CSS",
          value: 70
        },
        {
          title: "JS",
          value: 65
        },
        {
          title: "Bootstrap",
          value: 75
        },
        {
          title: "Bulma",
          value: 75
        },
        {
          title: "Core Vue.js",
          value: 80
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.about {
  max-width: 350px;
  max-height: 400px !important;
  margin: 0 auto !important;
  img {
    object-fit: cover;
  }
}
</style>
