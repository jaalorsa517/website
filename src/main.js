import "@/styles/main.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router/index";
import App from "./Main.vue";
import { init } from "@/utils/index";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");

init();


