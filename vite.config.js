import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

export default defineConfig(({ mode, command }) => {
  const plugins = [vue()];

  if (mode === "production") {
    plugins.push(
      VitePWA({
        base: "/",
        includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
        manifest: {
          name: "Desarrollador fullStack Jaime Ortiz",
          short_name: "jaalorsa",
          description: "Desarrollador fullStack Jaime Ortiz, con experiencia en desarrollo web, usando NodeJs y VueJs.",
          theme_color: "#ffffff",
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
        registerType: "autoUpdate",
      })
    );
  }
  const server = {};
  if (command === "serve") {
    server.port = 8080;
  }
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
              @import "@/styles/animations.scss"; 
              @import "./src/styles/mixins.scss";
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
