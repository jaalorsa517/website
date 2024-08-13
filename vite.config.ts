/// <reference types="vitest" />

import { defineConfig, PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";
import { MODE_PROD } from "./src/shared/constants";

export default defineConfig(({ mode }) => {
  const plugins: PluginOption = [
    vue({
      template: {
        compilerOptions: { isCustomElement: (tag) => tag.startsWith("j5-") },
      },
    }),
  ];

  if (mode === MODE_PROD) {
    plugins.push(
      VitePWA({
        base: "/",
        includeAssets: [
          "favicon.svg",
          "favicon.ico",
          "robots.txt",
          "sitemap.xml",
          "apple-touch-icon.png",
        ],
        manifest: {
          name: "jaalorsa",
          short_name: "jaalorsa",
          id: "jaalorsa",
          description:
            "Contenido para crecer en conocimiento técnico en programación web con Javascript, Vue y más.",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          orientation: "portrait",
          lang: "es",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
        workbox: {
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: false,
          sourcemap: false,
          globPatterns: ["**/*.{js,css,html,ico,png,svg,xml,txt}"],
          offlineGoogleAnalytics: true,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/i\.ytimg\.com\/.*/,
              handler: "CacheFirst",
              options: {
                cacheName: "img-thumbnail",
                expiration: {
                  maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/www\.googleapis\.com\/.*/,
              handler: "CacheFirst",
              options: {
                cacheName: "youtube",
                expiration: {
                  maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      })
    );
  } else plugins.push(VitePWA());
  const server = {};
  const _resolve = {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  };
  const css = {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/vars.scss";
          @import "@/styles/mixins.scss";
            `,
      },
    },
  };

  return {
    plugins,
    resolve: _resolve,
    css,
    server,
    test: {
      environment: "jsdom",
      coverage: {
        provider: "v8",
        all: true,
        enabled: true,
        exclude: [
          "test/**",
          "src/shared/constants/**",
          "src/shared/models/**",
          "src/plugins",
          "dist",
          "src/config",
          "src/styles",
          "src/main.ts",
          "src/Main.vue",
          "vite.config.ts",
          "src/assets"
        ],
        reporter: ["json-summary", "html"],
        "100": true,
      },
    },
  };
});
