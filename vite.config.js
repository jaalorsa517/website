import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import {resolve} from "path";
import {MODE_PROD} from "./src/shared/const"

export default defineConfig(({ mode, command }) => {
  const plugins = [
    vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith("j5-") } } }),
  ];

  if (mode === MODE_PROD) {
    plugins.push(
      VitePWA({
        base: "/",
        includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "sitemap.xml", "apple-touch-icon.png"],
        id: "com.jaalorsa",
        manifest: {
          name: "Desarrollador fullStack Jaime Ortiz",
          short_name: "jaalorsa",
          description:
            "Desarrollador fullStack Jaime Ortiz, con experiencia en desarrollo web, usando NodeJs y VueJs.",
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
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
        workbox: {
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
          sourcemap: false,
          globPatterns: ["**/*.{js,css,html,ico,png,svg,xml,txt}"],
          offlineGoogleAnalytics: true,
        },
      })
    );
  } else plugins.push(VitePWA())
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
  };
});
