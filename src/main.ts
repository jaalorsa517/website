import { createPinia } from "pinia";
import { createApp } from "vue";
import "@/styles/main.scss";
import App from "./Main.vue";
import Separate from "@/components/global/Separate.vue";
import { init, serviceWorkerInit } from "@/shared/utils/index";
import { router } from "./plugins/router/index";
import "@jaalorsa/j5-components-vue/style.css";
serviceWorkerInit()

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("Separate", Separate);
app.mount("#app");

init();
