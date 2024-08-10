import App from "./Main.vue";
import { createApp } from "vue";
import { init } from "@/config/init";
import { initConfigApp } from "@/config";
import "@jaalorsa/j5-components-vue/style.css";
import "@/styles/main.scss";

const app = createApp(App);
initConfigApp(app).then(() => {
  init();
});
