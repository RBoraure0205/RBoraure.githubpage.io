<template>
  <div class="full-width">
    <img
      src="https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="hero image"
    >
    <div class="heroTextContainer">
      <h1>Welcome to my portfolio</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media (max-width: 320px;) {
}
img {
  z-index: 1;
  position: absolute;
  right: 0;
  top: 0%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.full-width {
  height: 99vh;
  width: 95vw;
}
.heroTextContainer {
  margin: auto;
}
</style>
