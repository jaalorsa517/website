import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";

export class FirebaseConfig {
  private firebaseApp: FirebaseApp;

  constructor() {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    };
    this.firebaseApp = initializeApp(firebaseConfig);
  }

  getAnalytics(): Analytics {
    return getAnalytics(this.firebaseApp);
  }
}
