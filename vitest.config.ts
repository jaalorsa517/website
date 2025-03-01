/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: { isCustomElement: (tag) => tag.startsWith("j5-") },
      },
    }),
    VitePWA(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      test: resolve(__dirname, "test"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/vars.scss" as *;
          @use "@/styles/mixins.scss" as *;
            `,
      },
    },
  },
  test: {
    setupFiles: "./test/Setup.js",
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
        "vitest.config.ts",
        "src/assets",
      ],
      reporter: ["json-summary", "html"],
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  },
});