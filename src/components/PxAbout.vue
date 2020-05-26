<template>
  <section class="container section" id="about">
    <div class="box box-shadow">
      <div
        class="section columns is-centered is-desktop has-text-centered has-text-left-desktop"
      >
        <div class="column is-4">
          <img
            src="https://images.pexels.com/photos/318391/pexels-photo-318391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="RBoraure Profile pic"
            class="image rounded"
          />
        </div>
        <div class="column is-8">
          <h2
            class="is-size-2-desktop has-text-info is-size-3-tablet is-size-4"
          >
            I am Ricardo Boraure
            <span class="has-text-primary">-@Rboraure</span>
          </h2>
          <p
            class="has-text-black-bis is-size-6 is-size-5-tablet is-size-4-desktop"
          >
            I am a <strong>Web Developer</strong>, i have an incredible passion
            for <strong>Front-End</strong> tecnologies like
            <strong>Vue.Js</strong> and some libraries that improves UI. I can
            work with CSS frameworks and CSS preprocessors. <br />
          </p>
          <p
            class="has-text-black-bis is-size-6 is-size-5-tablet is-size-4-desktop"
          >
            <br />
            Also in a more personal way, I am a team player with huge passion
            for share my knowledge with every single person, I like to make good
            workplace relationships to improve my social skills, I like to speak
            clearly to avoid miss understands and have a great work environment.
            <strong>I love learning new things</strong>
          </p>
        </div>
      </div>
      <div class="">
        <h3
          class="has-text-centered has-text-info is-size-3 is-size-2-tablet is-size-1-desktop has-text-weight-bold"
          style="text-decoration: underline"
        >
          -My Skills-
        </h3>
        <ul class="section">
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
          value: 80,
        },
        {
          title: "CSS",
          value: 60,
        },
        {
          title: "JS",
          value: 60,
        },
        {
          title: "Bootstrap",
          value: 75,
        },
        {
          title: "Bulma",
          value: 65,
        },
        {
          title: "Core Vue.js",
          value: 70,
        },
      ],
    };
  },
};
</script>

<style></style>
