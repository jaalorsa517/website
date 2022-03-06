import { defineAsyncComponent } from "vue";

export default [
  {
    path: "/",
    component: defineAsyncComponent(() => import("@/components/root/View.vue")),
  },
];
