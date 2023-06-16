import { createPinia } from "pinia";
import { createApp } from "vue";
import "@/styles/main.scss";
import App from "./Main.vue";
import Separate from "@/components/global/Separate.vue";
import { init, serviceWorkerInit } from "@/utils/index";
import { router } from "./router/index";

serviceWorkerInit()

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("Separate", Separate);
app.mount("#app");

init();
