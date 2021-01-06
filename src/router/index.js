import Vue from "vue";
import VueRouter from "vue-router";
import Basic from "../views/basic.vue";
import Experiencie from "../views/experiencie.vue";

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
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
