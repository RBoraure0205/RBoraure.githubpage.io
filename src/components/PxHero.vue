<template>
  <div>
    <section class="hero hero-content">
      <div class="hero-body">
        <div class="container">
          <h1 class="is-size-3 is-size-1-desktop">
            I am Ricardo Boraure a Web Developer
          </h1>
          <p class="is-size-5 is-size-3-desktop">
            Welcome to my personal portfolio
          </p>
        </div>
      </div>
      <div class="has-text-centered">
        <img src="@/assets/hero.png" alt="Hero Image" />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero-content {
  position: relative;
  z-index: 1;
  height: 80vh;
}
@media screen (max-width: 320px) {
  img {
    height: 250px;
    width: 250px;
  }
}
</style>
