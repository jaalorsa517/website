import "@/styles/main.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router/index";
import App from "./Main.vue";
import { init } from "@/utils/index";
import Separate from "@/components/global/Separate.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("Separate", Separate);
app.mount("#app");

init();
