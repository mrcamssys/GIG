import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/colegio",
    name: "colegio",
    component: () => import("../views/Colegio.vue")
  },
  {
    path: "/areas",
    name: "areas",
    component: () => import("../views/Areas.vue")
  },
  {
    path: "/escolares",
    name: "escolares",
    component: () => import("../views/Escolares.vue")
  },
  {
    path: "/sedes",
    name: "sedes",
    component: () => import("../views/Sedes.vue")
  },
  {
    path: "/admisiones",
    name: "admisiones",
    component: () => import("../views/Admisiones.vue")
  },
  {
    path: "/plataformas",
    name: "plataformas",
    component: () => import("../views/Plataformas.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
