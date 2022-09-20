import { defineAsyncComponent } from "vue";

export default [
  {
    path: "/",
    component: defineAsyncComponent(() => import("@/views/View.vue")),
  },
];
