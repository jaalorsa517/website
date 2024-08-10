import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useRoot } from "@/store/index";
import * as components from "@jaalorsa/j5-components";
import { useFirebaseStore } from "@/store/firebaseStore";

function initFirebase() {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };
  const firebaseApp = initializeApp(firebaseConfig);
  if(import.meta.env.PROD) {
    const analytics = getAnalytics(firebaseApp);
    useFirebaseStore().$patch({ analyticsInstance: analytics });
  }
}

function initJ5Components() {
  components.j5Carousel();
  components.j5Collapse();
  components.j5JsonTransform();
  components.j5MenuHamburguer();
  components.j5Toggle();
  components.j5Tooltip();
}

export function init() {
  initFirebase();
  initJ5Components();
  window.addEventListener("resize", () => {
    useRoot().$patch({ isMobile: window.innerWidth < 768 });
  });
}

export function serviceWorkerInit() {
  if (import.meta.env.PROD) {
    import("virtual:pwa-register/vue").then(({ useRegisterSW }) => {
      useRegisterSW({
        onNeedRefresh() {},
        onRegisterError(error) {},
      });
    });
  }
}
