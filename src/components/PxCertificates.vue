<template>
  <div class="container certs-container" id="certifications">
    <h3
      class="is-size-4 is-size-3-tablet is-size-2-desktop has-text-info has-text-centered"
    >
      Click bellow to see the certifications
    </h3>
    <template>
      <b-carousel
        :indicator-inside="false"
        :indicator-custom="true"
        class="certs-container"
      >
        <b-carousel-item
          v-for="(im, i) in imgs"
          :key="i"
          class="certs-container"
        >
          <span class="image">
            <a :href="im.user" target="blank">
              <img :src="im.src" class="certs-container" />
            </a>
          </span>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
          <span class="al image">
            <img :src="imgs[props.i].src" />
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
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1331-bootstrap/diploma/detalle/",
          src: "https://i.ibb.co/BgCzpQG/diploma-bootstrap.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1229-css-grid-layout/diploma/detalle/",
          src: "https://i.ibb.co/ssSQHW3/diploma-css-grid-layout.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1050-programacion-basica/diploma/detalle/",
          src: "https://i.ibb.co/3sqy6f9/diploma-programacion-basica.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1362-responsive-design/diploma/detalle/",
          src: "https://i.ibb.co/mGnhZnY/diploma-responsive-design.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1350-html5-css3/diploma/detalle/",
          src: "https://i.ibb.co/4MF1b0M/diploma-html5-css3.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1758-html-practico/diploma/detalle/",
          src: "https://i.ibb.co/GWhcT03/diploma-html-practico.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1689-backend-js/diploma/detalle/",
          src: "https://i.ibb.co/PMZ84mg/diploma-backend-js.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1814-basico-javascript/diploma/detalle/",
          src: "https://i.ibb.co/WtN9gKW/diploma-basico-javascript.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1815-ecmascript-6/diploma/detalle/",
          src: "https://i.ibb.co/9qQsB6v/diploma-ecmascript-6.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1640-frontend-developer/diploma/detalle//",
          src: "https://i.ibb.co/NC7Pvjy/diploma-frontend-developer.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1339-fundamentos-javascript/diploma/detalle/",
          src: "https://i.ibb.co/w0CMbhj/diploma-fundamentos-javascript.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1767-practico-node/diploma/detalle//",
          src: "https://i.ibb.co/G5v8nXX/diploma-practico-node.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1650-prework/diploma/detalle/",
          src: "https://i.ibb.co/KDMHLYD/diploma-prework.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1752-vuejs/diploma/detalle/",
          src: "https://i.ibb.co/kDQ1gyN/diploma-vuejs.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1789-asincronismo-js/diploma/detalle/",
          src: "https://i.ibb.co/PMdKDxx/diploma-asincronismo-js.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1474-oop/diploma/detalle/",
          src: "https://i.ibb.co/W39b7q1/diploma-oop.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1272-sql-mysql/diploma/detalle/",
          src: "https://i.ibb.co/PYX2SyQ/diploma-sql-mysql.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1190-finanzas/diploma/detalle/",
          src: "https://i.ibb.co/7tW08DC/diploma-finanzas.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1608-aprender/diploma/detalle/",
          src: "https://i.ibb.co/bKcx7dD/diploma-aprender.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1228-fundamentos-diseno/diploma/detalle/",
          src: "https://i.ibb.co/2g4Cz9W/diploma-fundamentos-diseno.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1557-git-github/diploma/detalle/",
          src: "https://i.ibb.co/KqRvxRh/diploma-git-github.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1338-php/diploma/detalle/",
          src: "https://i.ibb.co/TYFQHR0/diploma-php.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1842-intro-laravel/diploma/detalle/",
          src: "https://i.ibb.co/z2ZtXjB/diploma-intro-laravel.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1467-curso-php-laravel/diploma/detalle/",
          src: "https://i.ibb.co/2kpsjbP/diploma-curso-php-laravel.jpg"
        },
        {
          user:
            "https://platzi.com/@ricardo-boraure/curso/1433-seo-wordpress/diploma/detalle/",
          src: "https://i.ibb.co/bN7SxXT/diploma-seo-wordpress.jpg"
        }
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

<style lang="scss">
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
  h3 {
    margin: 15px 0;
    text-decoration: underline;
  }
}
@media screen and (max-width: 700px) and (orientation: portrait) {
  .certs-container {
    max-width: 100vw !important;
    max-height: 60vh !important;
  }
}
@media (max-width: 700px) and (orientation: landscape) {
  .certs-container {
    max-width: 60vw !important;
    max-height: 60vh !important;
  }
}
</style>
