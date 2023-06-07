import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useRoot } from "@/store/index";
import { j5JsonTransform, j5Carousel, j5MenuHamburguer } from "@jaalorsa/j5-components";

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
  getAnalytics(firebaseApp);
}

export function init() {
  initFirebase();
  j5JsonTransform();
  j5Carousel();
  j5MenuHamburguer();
  window.addEventListener("resize", () => {
    useRoot().$patch({ isMobile: window.innerWidth < 768 });
  });
}
