import "@/styles/main.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router/index";
import App from "./components/root/View.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount("#app");
