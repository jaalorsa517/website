import { RoutesName } from "@/assets/resources/language";

const RoutesComponents = "/lib-components";
const RoutesComponentsVue = "/lib-components-vue";

export const routes = [
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
    path: RoutesComponents,
    name: RoutesName.components,
    component: () => import("@/views/j5Components/J5Components.vue"),
    children: [
      {
        path: "",
        name: RoutesName.componentsIntro,
        component: () => import("@/views/j5Components/J5Intro.vue"),
      },
      {
        path: RoutesComponents + "/j5-carousel",
        name: RoutesName.componentsCarousel,
        component: () => import("@/views/j5Components/J5Carousel.vue"),
      },
      {
        path: RoutesComponents + "/j5-collapse",
        name: RoutesName.componentsCollapse,
        component: () => import("@/views/j5Components/J5Collapse.vue"),
      },
      {
        path: RoutesComponents + "/j5-json-transform",
        name: RoutesName.componentsJsonTransform,
        component: () => import("@/views/j5Components/J5JsonTransform.vue"),
      },
      {
        path: RoutesComponents + "/j5-menu-hamburguer",
        name: RoutesName.componentsMenuHamburguer,
        component: () => import("@/views/j5Components/J5MenuHamburguer.vue"),
      },
      {
        path: RoutesComponents + "/j5-toggle",
        name: RoutesName.componentsToggle,
        component: () => import("@/views/j5Components/J5Toggle.vue"),
      },
      {
        path: RoutesComponents + "/j5-tooltip",
        name: RoutesName.componentsTooltip,
        component: () => import("@/views/j5Components/J5Tooltip.vue"),
      },
    ],
  },
  {
    path: RoutesComponentsVue,
    name: RoutesName.componentsVue,
    component: () => import("@/views/j5ComponentsVue/J5ComponentsVue.vue"),
    children: [
      {
        path: "",
        name: RoutesName.componentsIntroVue,
        component: () => import("@/views/j5ComponentsVue/J5VIntro.vue"),
      },
      {
        path: RoutesComponentsVue + "/j5v-alert",
        name: RoutesName.componentsAlertVue,
        component: () => import("@/views/j5ComponentsVue/J5VAlert.vue"),
      },
      {
        path: RoutesComponentsVue + "/j5v-icons",
        name: RoutesName.componentsIconsVue,
        component: () => import("@/views/j5ComponentsVue/J5VIcons.vue"),
      },
      {
        path: RoutesComponentsVue + "/j5v-input",
        name: RoutesName.componentsInputVue,
        component: () => import("@/views/j5ComponentsVue/J5VInput.vue"),
      },
      {
        path: RoutesComponentsVue + "/j5v-select",
        name: RoutesName.componentsSelectVue,
        component: () => import("@/views/j5ComponentsVue/J5VSelect.vue"),
      },
      {
        path: RoutesComponentsVue + "/j5v-datalist",
        name: RoutesName.componentsDatalistVue,
        component: () => import("@/views/j5ComponentsVue/J5VDatalist.vue"),
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
