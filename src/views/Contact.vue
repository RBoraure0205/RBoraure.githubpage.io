<template>
  <section class="container-md contact">
    <h1 class="display-md-4 h1 font-weight-bold contact__title">👇🏼 Need to contact me?</h1>
    <ul class="my-5 contact__list">
      <li v-for="(p,i) in profiles" :key="i">
        <h4 class="text-primary">
          {{p.name}}
          <span class="text-muted">- {{p.user}}</span>
          <a :href="p.url" target="_blank">
            <span class="btn btn-primary mx-4">Contact</span>
          </a>
        </h4>
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
          name: "Github",
          user: "RBoraure0205",
          url: "https://github.com/rboraure0205"
        }
      ]
    };
  }
};
</script>

<style></style>
