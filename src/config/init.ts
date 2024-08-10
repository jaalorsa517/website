import * as components from "@jaalorsa/j5-components";
import { initEvents } from "@/config/events";

export function init() {
  initJ5Components();
  initEvents();
  serviceWorkerInit();
}

function initJ5Components() {
  components.j5Carousel();
  components.j5Collapse();
  components.j5JsonTransform();
  components.j5MenuHamburguer();
  components.j5Toggle();
  components.j5Tooltip();
}

function serviceWorkerInit() {
  if (import.meta.env.PROD) {
    import("virtual:pwa-register/vue").then(({ useRegisterSW }) => {
      useRegisterSW({
        onNeedRefresh() {},
        onOfflineReady() {},
        onRegisterError() {},
      });
    });
  }
}
