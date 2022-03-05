import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const routes = [
  {
    path: "/",
    component: defineAsyncComponent(() => import("@/components/App.vue")),
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
