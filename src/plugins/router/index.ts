import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { seo } from "@/assets/resources/seo";
import { handlerSeo } from "@/shared/utils/handlerSeo";

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, _, next) => {
  const _seo = seo[to.path];
  handlerSeo(_seo);
  next();
});
