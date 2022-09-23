import { defineAsyncComponent } from "vue";

export default [
  {
    path: "/",
    name: "Inicio",
    component: defineAsyncComponent(() => import("@/views/Home.vue")),
  },
  {
    path: "/about",
    name: "Acerca de mí",
    component: defineAsyncComponent(() => import("@/views/About.vue")),
  },
  {
    path: "/videos",
    name: "Vídeos",
    component: defineAsyncComponent(() => import("@/views/Videos.vue")),
  },
  {
    path: "/blog",
    name: "Blog",
    component: defineAsyncComponent(() => import("@/views/Blog.vue")),
  },
];
