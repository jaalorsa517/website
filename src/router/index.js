import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "basic",
    component: () => import("../views/basic.vue"),
  },
  {
    path: "/experience",
    name: "experiencie",
    component: () => import("../views/exp.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
