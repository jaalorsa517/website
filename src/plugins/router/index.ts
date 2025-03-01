import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { seo } from "@/assets/resources/seo";
import { inject } from "vue";
import { SeoServiceInject } from "@/shared/constants/injectsKey";
import { IHandlerSeo } from "@/shared/models/interfaces/IHandlerSeo";
import { scrollToElement } from "@/shared/services/scroll";

export const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return new Promise((resolve) => {
      const element = document.querySelector(".contentBody") as HTMLElement;
      const header = document.querySelector("header") as HTMLElement;
      const offset = header.offsetHeight;
      scrollToElement({ element, offset });
      resolve();
    });
  },
});

router.beforeEach((to, _, next) => {
  const seoService = inject(SeoServiceInject) as IHandlerSeo;
  const _seo = seo[to.path];
  seoService.handlerSeo(_seo);
  next();
});
