<template>
  <div>
    <section class="hero hero-content">
      <div class="hero-body">
        <div class="container">
          <h1
            class="is-size-3 is-size-1-desktop has-text-white has-text-weight-bold"
<<<<<<< HEAD
          >
            I am Ricardo Boraure a Web Developer
          </h1>
          <p class="is-size-5 is-size-3-desktop has-text-primary">
            Welcome to my personal portfolio, made with buefy
          </p>
=======
          >I am Ricardo Boraure a Web Developer</h1>
          <p
            class="is-size-5 is-size-3-desktop has-text-primary"
          >Welcome to my personal portfolio, made with buefy</p>
>>>>>>> 1fcb9b09f0778f4f3767373ee3a59c7db013e455
        </div>
      </div>
      <div class="has-text-centered">
        <img src="@/assets/hero.png" alt="Hero Image" class="heroImg" />
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
@media screen and (max-width: 320px) {
  .heroImg {
    max-height: 250px !important;
    max-width: 250px !important;
  }
}
@media (max-height: 500px) {
  .heroImg {
    display: none;
  }
}
</style>
