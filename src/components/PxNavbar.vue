<<<<<<< HEAD
<template>
  <div>
    <b-navbar
      :spaced="true"
      :fixed-top="true"
      style="padding-top: 10px; background-color: rgba(0, 153, 255, 0.3);"
    >
      <template slot="brand">
        <b-navbar-item tag="a" href="#">
          <h3 class="logo is-size-2 has-text-dark">@RBoraure</h3>
        </b-navbar-item>
      </template>
      <template style="background-color: rgba(0, 153, 255, 0.3);" slot="end">
        <b-navbar-item href="#about" class="subTitle">About</b-navbar-item>
        <b-navbar-item href="#proyects" class="subTitle"
          >Proyects</b-navbar-item
        >
        <b-navbar-item href="#certifications" class="subTitle"
          >Certifications</b-navbar-item
        >
        <b-navbar-item @click="toggleModal" class="subTitle">
          Contact me
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="modal" :class="showModal ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-info">
            Contact me
            <small class="has-text-grey">-Click the links bellow</small>
          </p>
          <button
            class="delete"
            aria-label="close"
            @click="toggleModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="">
            <div
              v-for="(c, i) in contact"
              :key="i"
              class="contact-list is-flex justify"
            >
              <img :src="c.img" :alt="c.name" srcset="" class="img-list" />
              <div class="is-block">
                <h3 class="has-text-primary is-size-4 is-size-3-tablet">
                  <a :href="c.link" target="blank">{{ c.user }}</a>
                </h3>
                <p
                  class="has-text-gray is-size-6 is-size-5-tablet is-size-4-desktop"
                >
                  {{ c.name }}
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="toggleModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      contact: [
        {
          name: "Github",
          img: "https://image.flaticon.com/icons/png/512/2111/2111374.png",
          user: "RBoraure",
          link: "https://github.com/RBoraure0205"
        },
        {
          name: "Mail",
          img: "https://image.flaticon.com/icons/svg/2965/2965306.svg",
          user: "ricardoboraure@gmail.com",
          link: "mailto:elcorreoquequieres@correo.com"
        },
        {
          name: "Twitter",
          img: "https://image.flaticon.com/icons/svg/733/733579.svg",
          user: "RBoraure",
          link: "https://twitter.com/rboraure"
        },
        {
          name: "Cellphone",
          img: "https://image.flaticon.com/icons/png/512/2948/2948158.png",
          user: "829-546-5099",
          link: "tel:+18295465099"
        }
      ]
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style scoped>
.logo {
  font-family: "Kaushan Script", cursive !important;
}
a {
  font-family: "Noto Sans" !important;
}
.subTitle {
  font-family: "Montserrat", sans-serif !important;
  font-weight: bold;
}
/* .subTitle:hover {
  color: antiquewhite !important;
} */
.img-list {
  max-height: 100%;
  margin-right: 10px;
}
.contact-list {
  width: auto;
  height: 100px;
}
</style>
=======
<template>
  <div>
    <b-navbar
      :spaced="true"
      :fixed-top="true"
      style="padding-top: 10px; background-color: rgba(0, 153, 255, 0.3);"
    >
      <template slot="brand">
        <b-navbar-item tag="a" href="#">
          <h3 class="logo is-size-2 has-text-dark">@RBoraure</h3>
        </b-navbar-item>
      </template>
      <template style="background-color: rgba(0, 153, 255, 0.3);" slot="end">
        <b-navbar-item href="#about" class="subTitle">About</b-navbar-item>
        <b-navbar-item href="#proyects" class="subTitle"
          >Proyects</b-navbar-item
        >
        <b-navbar-item href="#certifications" class="subTitle"
          >Certifications</b-navbar-item
        >
        <b-navbar-item @click="toggleModal" class="subTitle">
          Contact me
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="modal" :class="showModal ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-info">
            Contact me
            <small class="has-text-grey">-Click the links bellow</small>
          </p>
          <button
            class="delete"
            aria-label="close"
            @click="toggleModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="">
            <div
              v-for="(c, i) in contact"
              :key="i"
              class="contact-list is-flex justify"
            >
              <img :src="c.img" :alt="c.name" srcset="" class="img-list" />
              <div class="is-block">
                <h3 class="has-text-primary is-size-4 is-size-3-tablet">
                  <a :href="c.link" target="blank">{{ c.user }}</a>
                </h3>
                <p
                  class="has-text-gray is-size-6 is-size-5-tablet is-size-4-desktop"
                >
                  {{ c.name }}
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="toggleModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      contact: [
        {
          name: "Github",
          img: "https://image.flaticon.com/icons/png/512/2111/2111374.png",
          user: "RBoraure",
          link: "https://github.com/RBoraure0205",
        },
        {
          name: "Mail",
          img: "https://image.flaticon.com/icons/svg/2965/2965306.svg",
          user: "ricardoboraure@gmail.com",
          link: "mailto:elcorreoquequieres@correo.com",
        },
        {
          name: "Twitter",
          img: "https://image.flaticon.com/icons/svg/733/733579.svg",
          user: "RBoraure",
          link: "https://twitter.com/rboraure",
        },
        {
          name: "Cellphone",
          img: "https://image.flaticon.com/icons/png/512/2948/2948158.png",
          user: "829-546-5099",
          link: "tel:+18295465099",
        },
      ],
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
.logo {
  font-family: "Kaushan Script", cursive !important;
}
a {
  font-family: "Noto Sans" !important;
}
.subTitle {
  font-family: "Montserrat", sans-serif !important;
  font-weight: bold;
}
/* .subTitle:hover {
  color: antiquewhite !important;
} */
.img-list {
  max-height: 100%;
  margin-right: 10px;
}
.contact-list {
  width: auto;
  height: 100px;
}
</style>
>>>>>>> 33b0879543fec0b19ce6ac4ece1697ac9e3ab6ad
