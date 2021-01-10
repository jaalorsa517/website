import Vue from "vue";
import VueRouter from "vue-router";
import Basic from "../views/basic.vue";
import Experiencie from "../views/experiencie.vue";
import Studies from "../views/studies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/basic",
    name: "basic",
    component: Basic,
    alias: "/",
  },
  {
    path: "/experiencie",
    name: "experiencie",
    component: Experiencie,
  },
  {
    path: "/studies",
    name: "studies",
    component: Studies,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
