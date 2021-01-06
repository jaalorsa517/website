import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/basic",
    name: "basic",
    component: () => import("../views/basic.vue"),
    alias: "/",
  },
  {
    path: "/experience",
    name: "experiencie",
    component: () => import("../views/exp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
