export default [
  {
    path: "/",
    name: "Inicio",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/utils",
    name: "Utilidades",
    component: () => import("@/views/Utils.vue"),
  },
  {
    path: "/lib-components",
    name: "Librería de componentes",
    component: () => import("@/views/J5Components.vue"),
  },
  // {
  //   path: "/about",
  //   name: "Acerca de mí",
  //   component: () => import("@/views/About.vue"),
  // },
  // {
  //   path: "/videos",
  //   name: "Vídeos",
  //   component: () => import("@/views/Videos.vue"),
  // },
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   component: () => import("@/views/Blog.vue"),
  // },
];
