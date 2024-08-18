import { createPinia } from "pinia";
import { App } from "vue";
import { router } from "@/plugins/router";
import Separate from "@/components/global/Separate.vue";
import { FirebaseConfig } from "@/config/firebase.config";
import { GAnalyticsSelectContent } from "@/shared/services/ga.services";
import {
  ConverterServiceInject,
  GAnalyticsSelectContentInject,
  IsProdInject,
  SeoServiceInject,
  YoutubeServiceInject,
} from "@/shared/constants/injectsKey";
import { HttpGet } from "@/shared/services/http.services";
import { YoutTubeService } from "@/shared/services/youtube.service";
import { ConverterService } from "@/shared/services/converter";
import { SeoService } from "@/shared/services/Seo.service";

export async function initConfigApp(app: App) {
  return new Promise((resolve) => {
    const seoService = new SeoService(window);
    app.provide(SeoServiceInject, seoService);

    const piniaStore = createPinia();
    app.use(piniaStore);
    app.use(router);

    app.provide(IsProdInject, import.meta.env.PROD);

    const firebaseApp = new FirebaseConfig();
    enviromentProduction(app, firebaseApp);

    const httpGet = new HttpGet();
    const youtTubeService = new YoutTubeService(httpGet, {
      host: import.meta.env.VITE_YOUTUBE_API_HOST,
      playlistId: import.meta.env.VITE_YOUTUBE_LIST,
    });
    app.provide(YoutubeServiceInject, youtTubeService);

    const converterService = new ConverterService();
    app.provide(ConverterServiceInject, converterService);

    app.component("Separate", Separate);
    app.mount("#app");
    resolve(true);
  });
}

function enviromentProduction(app: App, firebaseApp: FirebaseConfig) {
  if (import.meta.env.PROD) {
    const analyticsInstace = firebaseApp.getAnalytics();
    const analytics = new GAnalyticsSelectContent(analyticsInstace);
    app.provide(GAnalyticsSelectContentInject, analytics);
    return;
  }
  app.provide(GAnalyticsSelectContentInject, {} as GAnalyticsSelectContent);
}
