<template>
  <div class="container certs-container" id="certifications">
    <template>
      <b-carousel :indicator-inside="false" :indicator-custom="true">
        <b-carousel-item v-for="(im, i) in imgs" :key="i" class="certs-container">
          <span class="image">
            <img :src="im" class="certs-container" />
          </span>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
          <span class="al image">
            <img :src="imgs[props.i]" />
          </span>
        </template>
      </b-carousel>
    </template>
  </div>
</template>


<script>
export default {
  data() {
    return {
      gallery: false,
      imgs: [
        "https://i.ibb.co/BgCzpQG/diploma-bootstrap.jpg",
        "https://i.ibb.co/ssSQHW3/diploma-css-grid-layout.jpg",
        "https://i.ibb.co/3sqy6f9/diploma-programacion-basica.jpg",
        "https://i.ibb.co/mGnhZnY/diploma-responsive-design.jpg",
        "https://i.ibb.co/4MF1b0M/diploma-html5-css3.jpg",
        "https://i.ibb.co/GWhcT03/diploma-html-practico.jpg",
        "https://i.ibb.co/PMZ84mg/diploma-backend-js.jpg",
        "https://i.ibb.co/WtN9gKW/diploma-basico-javascript.jpg",
        "https://i.ibb.co/9qQsB6v/diploma-ecmascript-6.jpg",
        "https://i.ibb.co/NC7Pvjy/diploma-frontend-developer.jpg",
        "https://i.ibb.co/w0CMbhj/diploma-fundamentos-javascript.jpg",
        "https://i.ibb.co/G5v8nXX/diploma-practico-node.jpg",
        "https://i.ibb.co/KDMHLYD/diploma-prework.jpg",
        "https://i.ibb.co/kDQ1gyN/diploma-vuejs.jpg",
        "https://i.ibb.co/PMdKDxx/diploma-asincronismo-js.jpg",
        "https://i.ibb.co/W39b7q1/diploma-oop.jpg",
        "https://i.ibb.co/PYX2SyQ/diploma-sql-mysql.jpg",
        "https://i.ibb.co/kSJmhsL/diploma-api-rest.jpg",
        "https://i.ibb.co/bKcx7dD/diploma-aprender.jpg",
        "https://i.ibb.co/7tW08DC/diploma-finanzas.jpg",
        "https://i.ibb.co/2g4Cz9W/diploma-fundamentos-diseno.jpg",
        "https://i.ibb.co/KqRvxRh/diploma-git-github.jpg",
        "https://i.ibb.co/z2ZtXjB/diploma-intro-laravel.jpg",
        "https://i.ibb.co/TYFQHR0/diploma-php.jpg",
        "https://i.ibb.co/bN7SxXT/diploma-seo-wordpress.jpg",
        "https://i.ibb.co/2kpsjbP/diploma-curso-php-laravel.jpg"
      ]
    };
  },
  methods: {
    getImgUrl(value) {
      value += 50;
      return `https://picsum.photos/id/10${value}/1230/500`;
    },
    switchGallery(value) {
      this.imgs = value;
      if (value) {
        return document.documentElement.classList.add("is-clipped");
      } else {
        return document.documentElement.classList.remove("is-clipped");
      }
    }
  }
};
</script>

<style lang=scss>
.is-active .al img {
  border: 1px solid #fff;
  filter: grayscale(0%);
}
.al img {
  border: 1px solid transparent;
  filter: grayscale(100%);
}
.certs-container {
  max-height: 70vh !important;
  max-width: 50vw !important;
}
@media screen and (max-width: 700px) {
  .certs-container {
    max-width: 100vw !important;
    max-height: 60vh !important;
  }
}
</style>