/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PROD: boolean;
  readonly VITE_APP_TITLE: string;
  readonly VITE_YOUTUBE_API_HOST: string;
  readonly VITE_YOUTUBE_LIST: string;
  readonly VITE_FIREBASE_APIKEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "@jaalorsa/j5-components" {
  export function j5MenuHamburguer(): void;
  export function j5Carousel(): void;
  export function j5Collapse(): void;
  export function j5JsonTransform(): void;
  export function j5Toggle(): void;
  export function j5Tooltip(): void;
}