import Vue from "vue";
import VueRouter from "vue-router";
import Basic from "../views/basic.vue";
import Experiencie from "../views/experiencie.vue";
import Studies from "../views/studies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "basic",
    component: Basic
  },
  {
    path: "/experiencie",
    name: "experiencie",
    component: Experiencie
  },
  {
    path: "/studies",
    name: "studies",
    component: Studies
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some((route) =>
    routes.find((element) => element.name === route.name)
  )){
  next()}
  else{
    next({name:"basic"})
  }
});

export default router;
