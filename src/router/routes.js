import { RoutesName } from "@/assets/resources/language";

export default [
  {
    path: "/",
    name: RoutesName.inicio,
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/utils",
    name: RoutesName.utilidades,
    component: () => import("@/views/Utils.vue"),
  },
  {
    path: "/lib-components",
    name: RoutesName.components,
    component: () => import("@/views/j5Components/J5Components.vue"),
    children: [
      {
        path: "",
        name: RoutesName.componentsIntro,
        component: () => import("@/views/j5Components/j5Intro.vue"),
      },
      {
        path: "/lib-components/j5-carousel",
        name: RoutesName.componentsCarousel,
        component: () => import("@/views/j5Components/J5Carousel.vue"),
      },
      {
        path: "/lib-components/j5-collapse",
        name: RoutesName.componentsCollapse,
        component: () => import("@/views/j5Components/J5Collapse.vue"),
      },
      {
        path: "/lib-components/j5-json-transform",
        name: RoutesName.componentsJsonTransform,
        component: () => import("@/views/j5Components/J5JsonTransform.vue"),
      },
      {
        path: "/lib-components/j5-menu-hamburguer",
        name: RoutesName.componentsMenuHamburguer,
        component: () => import("@/views/j5Components/J5MenuHamburguer.vue"),
      },
      {
        path: "/lib-components/j5-toggle",
        name: RoutesName.componentsToggle,
        component: () => import("@/views/j5Components/J5Toggle.vue"),
      },
      {
        path: "lib-components/j5-tooltip",
        name: RoutesName.componentsTooltip,
        component: () => import("@/views/j5Components/J5Tooltip.vue"),
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: RoutesName.about,
  //   component: () => import("@/views/About.vue"),
  // },
  // {
  //   path: "/videos",
  //   name: RoutesName.videos,
  //   component: () => import("@/views/Videos.vue"),
  // },
  // {
  //   path: "/blog",
  //   name: RoutesName.blog,
  //   component: () => import("@/views/Blog.vue"),
  // },
];
