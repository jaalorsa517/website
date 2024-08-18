import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { seo } from "@/assets/resources/seo";
import { inject } from "vue";
import { SeoServiceInject } from "@/shared/constants/injectsKey";
import { IHandlerSeo } from "@/shared/models/interfaces/IHandlerSeo";

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, _, next) => {
  const seoService = inject(SeoServiceInject) as IHandlerSeo;
  const _seo = seo[to.path];
  seoService.handlerSeo(_seo);
  next();
});
