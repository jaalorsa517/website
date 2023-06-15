import { createPinia } from "pinia";
import { createApp } from "vue";
import "@/styles/main.scss";
import App from "./Main.vue";
import Separate from "@/components/global/Separate.vue";
import { init } from "@/utils/index";
import { router } from "./router/index";
import { useRegisterSW } from "virtual:pwa-register/vue";

useRegisterSW({
  onNeedRefresh() {
    console.log("onNeedRefresh");
  },
  onoffline() {
    console.log("onoffline");
  },
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("Separate", Separate);
app.mount("#app");

init();
