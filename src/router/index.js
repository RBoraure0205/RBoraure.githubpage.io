import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Skills from "../views/Skills.vue";
import Certifications from "../views/Certifications.vue";
import Contact from "../views/Contact.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/skills",
    name: "Skill",
    component: Skills,
  },
  {
    path: "/certs",
    name: "Certifications",
    component: Certifications,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "*",
    name: "Error",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
