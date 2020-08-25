<template>
  <section class="container-md contact">
    <h1 class="display-md-4 h1 font-weight-bold contact__title">
      👇🏼 Need to contact me?
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
export default {
  name: "Contact",
  data() {
    return {
      profiles: [
        {
          name: "📧 Gmail (recomended)",
          user: "ricardoboraure@gmail.com",
          url: "mailto:ricardoboraure@gmail.com"
        },
        {
          name: "🐤 Twitter",
          user: "RBoraure",
          url: "https://twitter.com/rboraure"
        },
        {
          name: "📸 Instagram",
          user: "RBoraure",
          url: "https://instagram.com/rboraure"
        },
        {
          name: "👨🏼‍💻 Github",
          user: "RBoraure0205",
          url: "https://github.com/rboraure0205"
        }
      ]
    };
  }
};
</script>

<style></style>
